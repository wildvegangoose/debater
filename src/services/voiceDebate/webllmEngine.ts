import type { InitProgressReport, MLCEngineInterface } from '@mlc-ai/web-llm';
import { DebateGraphDataset, DebateNode } from '../../types/debate';
import {
  DebateOpponentPersona,
  DebateUserStance,
  StructuredDebateResponse,
  VoiceDebateTurn,
} from '../../types/voiceDebate';
import {
  describePersonaInstructions,
  describeStanceInstructions,
  determineNextRoundPhase,
} from './debateContextBuilder';
import { analyzeDebateTurnForGrounding } from './offlineDebateEngine';

export interface WebLlmModelPreset {
  id: string;
  f32FallbackId: string;
  label: string;
  tagline: string;
  downloadSizeLabel: string;
  vramLabel: string;
  recommended?: boolean;
}

export const WEBLLM_MODEL_PRESETS: WebLlmModelPreset[] = [
  {
    id: 'Llama-3.2-1B-Instruct-q4f16_1-MLC',
    f32FallbackId: 'Llama-3.2-1B-Instruct-q4f32_1-MLC',
    label: 'Llama 3.2 1B',
    tagline: 'Best balance of speed, natural tone, and reliability on Android phones.',
    downloadSizeLabel: '~700 MB',
    vramLabel: '~880 MB RAM',
    recommended: true,
  },
  {
    id: 'gemma3-1b-it-q4f16_1-MLC',
    f32FallbackId: 'Llama-3.2-1B-Instruct-q4f32_1-MLC',
    label: 'Gemma 3 1B',
    tagline: 'Lightest 1B model — snappy responses and smallest footprint.',
    downloadSizeLabel: '~560 MB',
    vramLabel: '~710 MB RAM',
  },
  {
    id: 'Qwen2.5-1.5B-Instruct-q4f16_1-MLC',
    f32FallbackId: 'Qwen2.5-1.5B-Instruct-q4f32_1-MLC',
    label: 'Qwen 2.5 1.5B',
    tagline: 'Sharper rebuttals & reasoning. Best for flagship phones (8GB+ RAM) or desktop.',
    downloadSizeLabel: '~1.0 GB',
    vramLabel: '~1.6 GB RAM',
  },
];

export interface WebGpuSupportResult {
  supported: boolean;
  hasShaderF16: boolean;
  reason?: string;
}

export interface WebLlmLoadProgress {
  progress: number; // 0..1
  text: string;
  modelId: string;
}

let cachedWebGpuResult: WebGpuSupportResult | null = null;
let engineInstance: MLCEngineInterface | null = null;
let workerInstance: Worker | null = null;
let loadedModelId: string | null = null;
let activeLoadPromise: Promise<MLCEngineInterface> | null = null;
let loadingModelId: string | null = null;

export function getWebLlmPreset(modelId: string): WebLlmModelPreset {
  return (
    WEBLLM_MODEL_PRESETS.find((m) => m.id === modelId || m.f32FallbackId === modelId) ??
    WEBLLM_MODEL_PRESETS[0]
  );
}

export async function checkWebGpuSupport(): Promise<WebGpuSupportResult> {
  if (cachedWebGpuResult) return cachedWebGpuResult;

  if (typeof navigator === 'undefined') {
    cachedWebGpuResult = { supported: false, hasShaderF16: false, reason: 'Browser environment unavailable.' };
    return cachedWebGpuResult;
  }

  const gpu = navigator.gpu;
  if (!gpu || typeof gpu.requestAdapter !== 'function') {
    cachedWebGpuResult = {
      supported: false,
      hasShaderF16: false,
      reason: 'WebGPU is not available in this browser. Update Chrome to the latest version or try Gemini AI.',
    };
    return cachedWebGpuResult;
  }

  try {
    const adapter = await gpu.requestAdapter();
    if (!adapter) {
      cachedWebGpuResult = {
        supported: false,
        hasShaderF16: false,
        reason: 'No compatible WebGPU graphics adapter was detected on this device.',
      };
      return cachedWebGpuResult;
    }
    const hasShaderF16 = Boolean(adapter.features?.has?.('shader-f16'));
    cachedWebGpuResult = { supported: true, hasShaderF16 };
    return cachedWebGpuResult;
  } catch (err) {
    cachedWebGpuResult = {
      supported: false,
      hasShaderF16: false,
      reason: `WebGPU probe failed: ${err instanceof Error ? err.message : String(err)}`,
    };
    return cachedWebGpuResult;
  }
}

export async function resolveEffectiveWebLlmModelId(requestedId: string): Promise<string> {
  const preset = getWebLlmPreset(requestedId);
  const gpu = await checkWebGpuSupport();
  if (!gpu.hasShaderF16) {
    return preset.f32FallbackId;
  }
  return preset.id;
}

export function getLoadedWebLlmModelId(): string | null {
  return loadedModelId;
}

export async function isWebLlmModelCached(requestedId: string): Promise<boolean> {
  try {
    const effectiveId = await resolveEffectiveWebLlmModelId(requestedId);
    const webllm = await import('@mlc-ai/web-llm');
    return await webllm.hasModelInCache(effectiveId);
  } catch {
    return false;
  }
}

export async function clearWebLlmModelCache(requestedId: string): Promise<void> {
  const preset = getWebLlmPreset(requestedId);
  if (loadedModelId === preset.id || loadedModelId === preset.f32FallbackId) {
    await unloadWebLlmEngine();
  }
  const webllm = await import('@mlc-ai/web-llm');
  await Promise.allSettled([
    webllm.deleteModelAllInfoInCache(preset.id),
    webllm.deleteModelAllInfoInCache(preset.f32FallbackId),
  ]);
}

export async function unloadWebLlmEngine(): Promise<void> {
  if (engineInstance) {
    try {
      await engineInstance.unload();
    } catch {
      // Ignore cleanup errors
    }
    engineInstance = null;
  }
  if (workerInstance) {
    workerInstance.terminate();
    workerInstance = null;
  }
  loadedModelId = null;
  activeLoadPromise = null;
  loadingModelId = null;
}

function formatProgressText(report: InitProgressReport, presetLabel: string): string {
  const raw = report.text || '';
  if (/fetching param cache/i.test(raw)) {
    const match = raw.match(/\[(\d+)\/(\d+)\]/);
    return match
      ? `Downloading ${presetLabel} (${match[1]}/${match[2]} shards)...`
      : `Downloading ${presetLabel}...`;
  }
  if (/loading model from cache/i.test(raw)) {
    return `Loading ${presetLabel} from device cache...`;
  }
  if (/finish loading|init/i.test(raw)) {
    return `Preparing ${presetLabel} on GPU...`;
  }
  return raw.slice(0, 90) || `Loading ${presetLabel}...`;
}

export async function ensureWebLlmEngine(
  requestedModelId: string,
  onProgress?: (status: WebLlmLoadProgress) => void
): Promise<MLCEngineInterface> {
  const gpu = await checkWebGpuSupport();
  if (!gpu.supported) {
    throw new Error(
      gpu.reason || 'WebGPU is required for On-Device Browser AI on this device.'
    );
  }

  const preset = getWebLlmPreset(requestedModelId);
  const effectiveModelId = gpu.hasShaderF16 ? preset.id : preset.f32FallbackId;

  if (engineInstance && loadedModelId === effectiveModelId) {
    onProgress?.({ progress: 1, text: `${preset.label} ready on device.`, modelId: effectiveModelId });
    return engineInstance;
  }

  if (activeLoadPromise && loadingModelId === effectiveModelId) {
    return activeLoadPromise;
  }

  // Unload any previously loaded different model to free phone GPU memory
  if (engineInstance && loadedModelId && loadedModelId !== effectiveModelId) {
    await unloadWebLlmEngine();
  }

  loadingModelId = effectiveModelId;
  activeLoadPromise = (async () => {
    const webllm = await import('@mlc-ai/web-llm');

    const initProgressCallback = (report: InitProgressReport) => {
      onProgress?.({
        progress: Math.max(0, Math.min(1, report.progress ?? 0)),
        text: formatProgressText(report, preset.label),
        modelId: effectiveModelId,
      });
    };

    onProgress?.({
      progress: 0.02,
      text: `Initializing ${preset.label} on WebGPU...`,
      modelId: effectiveModelId,
    });

    let engine: MLCEngineInterface;
    try {
      // Prefer Web Worker so Android UI stays responsive during shader compilation & generation
      const worker = new Worker(new URL('./webllmWorker.ts', import.meta.url), {
        type: 'module',
      });
      workerInstance = worker;
      engine = await webllm.CreateWebWorkerMLCEngine(worker, effectiveModelId, {
        initProgressCallback,
      });
    } catch (workerErr) {
      // Fallback gracefully to main-thread engine if worker instantiation fails
      if (workerInstance) {
        workerInstance.terminate();
        workerInstance = null;
      }
      console.warn('WebLLM worker unavailable, falling back to main-thread engine:', workerErr);
      engine = await webllm.CreateMLCEngine(effectiveModelId, {
        initProgressCallback,
      });
    }

    engineInstance = engine;
    loadedModelId = effectiveModelId;
    onProgress?.({ progress: 1, text: `${preset.label} ready.`, modelId: effectiveModelId });
    return engine;
  })();

  try {
    return await activeLoadPromise;
  } catch (err) {
    await unloadWebLlmEngine();
    const rawMsg = err instanceof Error ? err.message : String(err);
    if (/memory|oom|allocation|device lost|buffer/i.test(rawMsg)) {
      throw new Error(
        `Your device ran low on GPU memory loading ${preset.label}. Try switching to Gemma 3 1B in AI Settings.`
      );
    }
    throw new Error(`On-Device AI failed to load: ${rawMsg.slice(0, 180)}`);
  } finally {
    activeLoadPromise = null;
    loadingModelId = null;
  }
}

function buildCompactWebLlmPrompt(params: {
  dataset: DebateGraphDataset;
  pillarId: string | null;
  nodes: DebateNode[];
  stance: DebateUserStance;
  persona: DebateOpponentPersona;
  relevantNodes: DebateNode[];
  primaryCounterNode?: DebateNode;
}): string {
  const activePillar = params.pillarId
    ? params.nodes.find((n) => n.id === params.pillarId)
    : undefined;

  const factsBlock = params.relevantNodes
    .slice(0, 4)
    .map((n) => {
      const topDetail = n.details[0] ? ` (${n.details[0].slice(0, 110)})` : '';
      return `- [${n.kind.toUpperCase()}] ${n.title}: ${n.summary.slice(0, 140)}${topDetail}`;
    })
    .join('\n');

  const counterFocus = params.primaryCounterNode
    ? `BEST COUNTER-ANGLE TO DRAW ON: "${params.primaryCounterNode.title}" — ${params.primaryCounterNode.summary.slice(0, 160)}`
    : '';

  return [
    `You are Steelman, a sharp, natural debate sparring partner on the topic: "${params.dataset.title}".`,
    activePillar ? `Focused sub-topic: ${activePillar.title}.` : '',
    describeStanceInstructions(params.stance),
    describePersonaInstructions(params.persona),
    '',
    'RULES:',
    '1. Respond directly to the specific claim the user just made.',
    '2. Keep your reply concise and conversational: 2 to 4 crisp sentences (roughly 45-85 words).',
    '3. Briefly acknowledge their point, deliver a concrete counter-argument grounded in the facts below, and end with 1 pointed follow-up question.',
    '4. Plain conversational text only — NO markdown, NO bullet points, NO headings, NO labels like "Counter-argument:".',
    '',
    counterFocus,
    factsBlock ? `RELEVANT FACTS:\n${factsBlock}` : '',
  ]
    .filter(Boolean)
    .join('\n');
}

function cleanLlmReply(raw: string): string {
  return raw
    .replace(/^["'\s]+|["'\s]+$/g, '')
    .replace(/^(Steelman|Dialectica|AI|Opponent|Response|Rebuttal)\s*:\s*/i, '')
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/__(.*?)__/g, '$1')
    .replace(/\s+/g, ' ')
    .trim();
}

export async function generateWebLlmDebateReply(params: {
  modelId: string;
  dataset: DebateGraphDataset;
  nodes: DebateNode[];
  pillarId: string | null;
  stance: DebateUserStance;
  persona: DebateOpponentPersona;
  history: VoiceDebateTurn[];
  userText: string;
  usedNodeIds: Set<string>;
  userTurnCount: number;
  onProgress?: (status: WebLlmLoadProgress) => void;
  onToken?: (partialReply: string) => void;
}): Promise<StructuredDebateResponse> {
  // 1. Run instant deterministic graph grounding & rhetoric analysis
  const grounding = analyzeDebateTurnForGrounding({
    nodes: params.nodes,
    pillarId: params.pillarId,
    stance: params.stance,
    userText: params.userText,
    usedNodeIds: params.usedNodeIds,
  });

  // 2. Ensure the on-device WebLLM model is loaded (downloads once & caches in browser storage)
  const engine = await ensureWebLlmEngine(params.modelId, params.onProgress);

  // 3. Build a tight, high-signal system prompt so 1B-1.5B models respond fast & sharply
  const systemPrompt = buildCompactWebLlmPrompt({
    dataset: params.dataset,
    pillarId: params.pillarId,
    nodes: params.nodes,
    stance: params.stance,
    persona: params.persona,
    relevantNodes: grounding.topRelevantNodes,
    primaryCounterNode: grounding.counterNode,
  });

  // Keep only the last 4 messages to stay fast within mobile GPU memory
  const recentHistory = params.history.slice(-4).map((t) => ({
    role: (t.speaker === 'user' ? 'user' : 'assistant') as 'user' | 'assistant',
    content: t.text,
  }));

  const messages: Array<{ role: 'system' | 'user' | 'assistant'; content: string }> = [
    { role: 'system', content: systemPrompt },
    ...recentHistory,
    { role: 'user', content: params.userText },
  ];

  // 4. Stream tokens live so the user sees the rebuttal immediately as it generates
  const stream = await engine.chat.completions.create({
    messages,
    temperature: 0.72,
    top_p: 0.9,
    max_tokens: 185,
    stream: true,
  });

  let accumulated = '';
  for await (const chunk of stream) {
    const delta = chunk.choices?.[0]?.delta?.content ?? '';
    if (delta) {
      accumulated += delta;
      params.onToken?.(cleanLlmReply(accumulated));
    }
  }

  const finalReply =
    cleanLlmReply(accumulated) ||
    'That raises a real trade-off — how would you defend that position against the strongest counter-evidence on the other side?';

  return {
    spokenReply: finalReply,
    stanceTag: grounding.targetKind,
    engagedNodeIds: grounding.counterNode ? [grounding.counterNode.id] : [],
    userEngagedNodeIds: grounding.matchedUserNode ? [grounding.matchedUserNode.id] : [],
    argumentStrength: grounding.strength,
    persuasionShift: grounding.persuasionShift,
    roundPhase: determineNextRoundPhase(params.userTurnCount),
    rhetoricBadges: grounding.badges,
    coachingTip: grounding.coachingTip,
    suggestedFollowUpNodeId: grounding.suggestedFollowUp?.id ?? null,
    citedSource: grounding.counterNode?.sources?.[0] ?? null,
  };
}
