import { DebateGraphDataset, DebateNode } from '../../types/debate';
import {
  DebateOpponentPersona,
  DebateRoundPhase,
  DebateUserStance,
  RhetoricBadge,
  StructuredDebateResponse,
  VoiceDebateSettings,
  VoiceDebateTurn,
} from '../../types/voiceDebate';
import {
  buildVoiceSystemPrompt,
  determineNextRoundPhase,
} from './debateContextBuilder';

const RESPONSE_SCHEMA_GUIDE = `Return ONLY a JSON object with this exact shape:
{
  "spokenReply": "2-4 natural spoken sentences directly responding to the user and ending with a conversational hook or question.",
  "stanceTag": "pro" | "con" | "nuance",
  "engagedNodeIds": ["exact_node_id_from_dossier"],
  "userEngagedNodeIds": ["exact_node_id_user_referenced"],
  "argumentStrength": 75,
  "persuasionShift": 4,
  "roundPhase": "opening" | "sparring" | "cross-exam" | "closing",
  "rhetoricBadges": [
    { "type": "steelman" | "evidence" | "rebuttal" | "concession" | "fallacy" | "clarity", "label": "Short Label", "detail": "1 sentence explanation" }
  ],
  "coachingTip": "1 concise tactical suggestion for the user's next turn.",
  "suggestedFollowUpNodeId": "exact_node_id_or_null"
}`;

function extractJsonObject(rawText: string): Record<string, unknown> | null {
  const trimmed = rawText.trim();
  try {
    return JSON.parse(trimmed) as Record<string, unknown>;
  } catch {
    // Try extracting fenced JSON or outermost braces
    const fenceMatch = trimmed.match(/```(?:json)?\s*([\s\S]*?)```/i);
    if (fenceMatch) {
      try {
        return JSON.parse(fenceMatch[1].trim()) as Record<string, unknown>;
      } catch {
        // continue
      }
    }
    const firstBrace = trimmed.indexOf('{');
    const lastBrace = trimmed.lastIndexOf('}');
    if (firstBrace >= 0 && lastBrace > firstBrace) {
      try {
        return JSON.parse(trimmed.slice(firstBrace, lastBrace + 1)) as Record<string, unknown>;
      } catch {
        return null;
      }
    }
    return null;
  }
}

function normalizeStructuredResponse(
  raw: Record<string, unknown> | null,
  fallbackText: string,
  nodes: DebateNode[],
  userTurnCount: number
): StructuredDebateResponse {
  const validNodeMap = new Map(nodes.map((n) => [n.id, n]));
  const filterValidIds = (arr: unknown): string[] =>
    Array.isArray(arr)
      ? arr
          .filter((id): id is string => typeof id === 'string' && validNodeMap.has(id))
          .slice(0, 4)
      : [];

  const engagedNodeIds = filterValidIds(raw?.engagedNodeIds);
  const userEngagedNodeIds = filterValidIds(raw?.userEngagedNodeIds);
  const suggestedId =
    typeof raw?.suggestedFollowUpNodeId === 'string' &&
    validNodeMap.has(raw.suggestedFollowUpNodeId)
      ? raw.suggestedFollowUpNodeId
      : null;

  const rawStrength = typeof raw?.argumentStrength === 'number' ? raw.argumentStrength : 65;
  const argumentStrength = Math.max(10, Math.min(100, Math.round(rawStrength)));

  const rawShift = typeof raw?.persuasionShift === 'number' ? raw.persuasionShift : 0;
  const persuasionShift = Math.max(-15, Math.min(15, Math.round(rawShift)));

  const validPhases: DebateRoundPhase[] = ['opening', 'sparring', 'cross-exam', 'closing'];
  const roundPhase =
    typeof raw?.roundPhase === 'string' &&
    validPhases.includes(raw.roundPhase as DebateRoundPhase)
      ? (raw.roundPhase as DebateRoundPhase)
      : determineNextRoundPhase(userTurnCount);

  const validBadgeTypes = new Set([
    'steelman',
    'evidence',
    'rebuttal',
    'concession',
    'fallacy',
    'clarity',
  ]);
  const rhetoricBadges: RhetoricBadge[] = Array.isArray(raw?.rhetoricBadges)
    ? raw.rhetoricBadges
        .filter((b): b is Record<string, unknown> => Boolean(b && typeof b === 'object'))
        .map((b) => ({
          type: (validBadgeTypes.has(String(b.type))
            ? String(b.type)
            : 'clarity') as RhetoricBadge['type'],
          label: String(b.label || 'Argument Note').slice(0, 32),
          detail: String(b.detail || '').slice(0, 140),
        }))
        .slice(0, 2)
    : [];

  const stanceTag =
    raw?.stanceTag === 'pro' || raw?.stanceTag === 'con' || raw?.stanceTag === 'nuance'
      ? raw.stanceTag
      : 'nuance';

  const spokenReply =
    typeof raw?.spokenReply === 'string' && raw.spokenReply.trim().length > 0
      ? raw.spokenReply.trim()
      : fallbackText.trim() || 'Interesting point — how would you defend that against the strongest counter-evidence?';

  const primaryNode = engagedNodeIds[0] ? validNodeMap.get(engagedNodeIds[0]) : undefined;
  const citedSource = primaryNode?.sources?.[0] ?? null;

  return {
    spokenReply,
    stanceTag,
    engagedNodeIds,
    userEngagedNodeIds,
    argumentStrength,
    persuasionShift,
    roundPhase,
    rhetoricBadges,
    coachingTip:
      typeof raw?.coachingTip === 'string' && raw.coachingTip.trim()
        ? raw.coachingTip.trim()
        : 'Press your strongest concrete mechanism or address your opponent\'s core assumption.',
    suggestedFollowUpNodeId: suggestedId,
    citedSource,
  };
}

export async function generateGeminiFlashReply(params: {
  settings: VoiceDebateSettings;
  dataset: DebateGraphDataset;
  nodes: DebateNode[];
  pillarId: string | null;
  stance: DebateUserStance;
  persona: DebateOpponentPersona;
  history: VoiceDebateTurn[];
  userText: string;
}): Promise<StructuredDebateResponse> {
  const apiKey = params.settings.geminiApiKey.trim();
  if (!apiKey) {
    throw new Error('Gemini API key is missing. Add your key in Voice Settings.');
  }

  const model = params.settings.geminiModel.trim() || 'gemini-2.5-flash';
  const systemPrompt = `${buildVoiceSystemPrompt({
    dataset: params.dataset,
    nodes: params.nodes,
    pillarId: params.pillarId,
    stance: params.stance,
    persona: params.persona,
    mode: 'structured',
  })}\n\n${RESPONSE_SCHEMA_GUIDE}`;

  const contents = [
    ...params.history.slice(-10).map((turn) => ({
      role: turn.speaker === 'user' ? 'user' : 'model',
      parts: [{ text: turn.text }],
    })),
    {
      role: 'user',
      parts: [{ text: params.userText }],
    },
  ];

  const url = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent?key=${encodeURIComponent(apiKey)}`;

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      systemInstruction: { parts: [{ text: systemPrompt }] },
      contents,
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 650,
        responseMimeType: 'application/json',
      },
    }),
  });

  if (!res.ok) {
    const errBody = await res.text().catch(() => '');
    throw new Error(
      `Gemini API error (${res.status}): ${errBody.slice(0, 180) || res.statusText}`
    );
  }

  const json = (await res.json()) as {
    candidates?: Array<{ content?: { parts?: Array<{ text?: string }> } }>;
  };
  const rawText = json.candidates?.[0]?.content?.parts?.[0]?.text ?? '';
  const parsed = extractJsonObject(rawText);
  const userTurnCount = params.history.filter((t) => t.speaker === 'user').length + 1;

  return normalizeStructuredResponse(parsed, rawText, params.nodes, userTurnCount);
}

export async function generateLocalOpenAIReply(params: {
  settings: VoiceDebateSettings;
  dataset: DebateGraphDataset;
  nodes: DebateNode[];
  pillarId: string | null;
  stance: DebateUserStance;
  persona: DebateOpponentPersona;
  history: VoiceDebateTurn[];
  userText: string;
}): Promise<StructuredDebateResponse> {
  const baseUrl = params.settings.localEndpoint.trim().replace(/\/+$/, '');
  if (!baseUrl) {
    throw new Error('Local AI server URL is empty. Set it in Voice Settings.');
  }
  const endpoint = baseUrl.endsWith('/chat/completions')
    ? baseUrl
    : `${baseUrl}/chat/completions`;

  const systemPrompt = `${buildVoiceSystemPrompt({
    dataset: params.dataset,
    nodes: params.nodes,
    pillarId: params.pillarId,
    stance: params.stance,
    persona: params.persona,
    mode: 'structured',
  })}\n\n${RESPONSE_SCHEMA_GUIDE}`;

  const messages = [
    { role: 'system', content: systemPrompt },
    ...params.history.slice(-8).map((turn) => ({
      role: turn.speaker === 'user' ? 'user' : 'assistant',
      content: turn.text,
    })),
    { role: 'user', content: params.userText },
  ];

  const headers: Record<string, string> = { 'Content-Type': 'application/json' };
  if (params.settings.localApiKey.trim()) {
    headers.Authorization = `Bearer ${params.settings.localApiKey.trim()}`;
  }

  const res = await fetch(endpoint, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      model: params.settings.localModel.trim() || 'gemma3:4b',
      messages,
      temperature: 0.7,
      max_tokens: 550,
    }),
  });

  if (!res.ok) {
    const errBody = await res.text().catch(() => '');
    throw new Error(
      `Local AI error (${res.status}): ${errBody.slice(0, 160) || res.statusText}`
    );
  }

  const json = (await res.json()) as {
    choices?: Array<{ message?: { content?: string } }>;
  };
  const rawText = json.choices?.[0]?.message?.content ?? '';
  const parsed = extractJsonObject(rawText);
  const userTurnCount = params.history.filter((t) => t.speaker === 'user').length + 1;

  return normalizeStructuredResponse(parsed, rawText, params.nodes, userTurnCount);
}

export async function testVoiceBackendConnection(
  settings: VoiceDebateSettings
): Promise<{ ok: boolean; message: string }> {
  if (settings.backend === 'offline-curated') {
    return { ok: true, message: 'Offline Curated Sparring is built-in and ready immediately.' };
  }

  if (settings.backend === 'gemini-flash' || settings.backend === 'gemini-live') {
    const apiKey = settings.geminiApiKey.trim();
    if (!apiKey) {
      return { ok: false, message: 'Please paste your Gemini API key first.' };
    }
    try {
      const model = settings.geminiModel.trim() || 'gemini-2.5-flash';
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}?key=${encodeURIComponent(apiKey)}`
      );
      if (!res.ok) {
        return {
          ok: false,
          message: `Gemini key check failed (HTTP ${res.status}). Double-check your key from Google AI Studio.`,
        };
      }
      return {
        ok: true,
        message:
          settings.backend === 'gemini-live'
            ? 'Gemini API key verified! Ready for Gemini Live real-time voice.'
            : `Gemini API key verified with ${model}!`,
      };
    } catch (err) {
      return {
        ok: false,
        message: `Network error reaching Gemini: ${err instanceof Error ? err.message : String(err)}`,
      };
    }
  }

  // Local OpenAI-compatible server test
  try {
    const baseUrl = settings.localEndpoint.trim().replace(/\/+$/, '');
    const headers: Record<string, string> = {};
    if (settings.localApiKey.trim()) {
      headers.Authorization = `Bearer ${settings.localApiKey.trim()}`;
    }
    const res = await fetch(`${baseUrl}/models`, { headers });
    if (!res.ok) {
      return { ok: false, message: `Local server returned HTTP ${res.status} on /models.` };
    }
    return { ok: true, message: `Connected to local AI server at ${baseUrl}!` };
  } catch (err) {
    return {
      ok: false,
      message: `Could not reach ${settings.localEndpoint}. Ensure Ollama/LM Studio is running and reachable on your network (${err instanceof Error ? err.message : String(err)}).`,
    };
  }
}
