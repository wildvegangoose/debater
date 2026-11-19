import { DebateGraphDataset, DebateNode } from '../../types/debate';
import {
  DebateOpponentPersona,
  DebateRoundPhase,
  DebateUserStance,
  GeminiLiveVoiceName,
  RhetoricBadge,
} from '../../types/voiceDebate';
import { buildVoiceSystemPrompt } from './debateContextBuilder';

export interface GeminiLiveFeedbackPayload {
  engagedNodeIds: string[];
  userEngagedNodeIds: string[];
  argumentStrength: number;
  persuasionShift: number;
  roundPhase: DebateRoundPhase;
  rhetoricBadges: RhetoricBadge[];
  coachingTip: string;
  suggestedFollowUpNodeId?: string | null;
}

export interface GeminiLiveCallbacks {
  onStatusChange: (status: 'connecting' | 'connected' | 'disconnected') => void;
  onUserAmplitude: (level: number) => void;
  onAiAmplitude: (level: number) => void;
  onAiSpeakingChange: (speaking: boolean) => void;
  onUserTranscript: (text: string, isFinal: boolean) => void;
  onAiTranscript: (text: string, isFinal: boolean) => void;
  onFeedback: (feedback: GeminiLiveFeedbackPayload) => void;
  onError: (message: string) => void;
}

const TARGET_INPUT_SAMPLE_RATE = 16000;
const OUTPUT_SAMPLE_RATE = 24000;

function downsampleTo16kPcm(input: Float32Array, inputSampleRate: number): Int16Array {
  if (inputSampleRate === TARGET_INPUT_SAMPLE_RATE) {
    const pcm = new Int16Array(input.length);
    for (let i = 0; i < input.length; i++) {
      const s = Math.max(-1, Math.min(1, input[i]));
      pcm[i] = s < 0 ? s * 0x8000 : s * 0x7fff;
    }
    return pcm;
  }

  const ratio = inputSampleRate / TARGET_INPUT_SAMPLE_RATE;
  const outputLength = Math.max(1, Math.round(input.length / ratio));
  const pcm = new Int16Array(outputLength);
  let offsetResult = 0;
  let offsetBuffer = 0;

  while (offsetResult < outputLength) {
    const nextOffsetBuffer = Math.min(
      input.length,
      Math.round((offsetResult + 1) * ratio)
    );
    let accum = 0;
    let count = 0;
    for (let i = offsetBuffer; i < nextOffsetBuffer; i++) {
      accum += input[i];
      count++;
    }
    const sample = count > 0 ? Math.max(-1, Math.min(1, accum / count)) : 0;
    pcm[offsetResult] = sample < 0 ? sample * 0x8000 : sample * 0x7fff;
    offsetResult++;
    offsetBuffer = nextOffsetBuffer;
  }
  return pcm;
}

function int16ToBase64(pcm: Int16Array): string {
  const bytes = new Uint8Array(pcm.buffer, pcm.byteOffset, pcm.byteLength);
  let binary = '';
  const chunkSize = 0x8000;
  for (let i = 0; i < bytes.length; i += chunkSize) {
    binary += String.fromCharCode(...bytes.subarray(i, i + chunkSize));
  }
  return btoa(binary);
}

function base64ToFloat32Pcm(b64: string): Float32Array {
  const binary = atob(b64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  const view = new DataView(bytes.buffer);
  const samples = Math.floor(bytes.byteLength / 2);
  const floats = new Float32Array(samples);
  for (let i = 0; i < samples; i++) {
    floats[i] = view.getInt16(i * 2, true) / 32768;
  }
  return floats;
}

function computeRms(samples: Float32Array): number {
  let sum = 0;
  for (let i = 0; i < samples.length; i++) {
    sum += samples[i] * samples[i];
  }
  return Math.min(1, Math.sqrt(sum / Math.max(1, samples.length)) * 3.8);
}

export class GeminiLiveDebateClient {
  private ws: WebSocket | null = null;
  private inputCtx: AudioContext | null = null;
  private outputCtx: AudioContext | null = null;
  private mediaStream: MediaStream | null = null;
  private processorNode: ScriptProcessorNode | null = null;
  private sourceNode: MediaStreamAudioSourceNode | null = null;
  private nextPlayTime = 0;
  private activeSources = new Set<AudioBufferSourceNode>();
  private isMuted = false;
  private isSetupComplete = false;
  private callbacks: GeminiLiveCallbacks;
  private userTranscriptBuffer = '';
  private aiTranscriptBuffer = '';

  constructor(callbacks: GeminiLiveCallbacks) {
    this.callbacks = callbacks;
  }

  public setMuted(muted: boolean): void {
    this.isMuted = muted;
    if (muted) {
      this.callbacks.onUserAmplitude(0);
    }
  }

  public async connect(params: {
    apiKey: string;
    model: string;
    voiceName: GeminiLiveVoiceName;
    dataset: DebateGraphDataset;
    nodes: DebateNode[];
    pillarId: string | null;
    stance: DebateUserStance;
    persona: DebateOpponentPersona;
  }): Promise<void> {
    this.disconnect();
    const apiKey = params.apiKey.trim();
    if (!apiKey) {
      this.callbacks.onError('Gemini API key is required for Gemini Live voice.');
      return;
    }

    this.callbacks.onStatusChange('connecting');

    // Request microphone access first so Android WebView grants permission cleanly
    try {
      this.mediaStream = await navigator.mediaDevices.getUserMedia({
        audio: {
          channelCount: 1,
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true,
        },
      });
    } catch (err) {
      this.callbacks.onStatusChange('disconnected');
      this.callbacks.onError(
        `Microphone access was denied or unavailable (${err instanceof Error ? err.message : String(err)}).`
      );
      return;
    }

    const wsUrl = `wss://generativelanguage.googleapis.com/ws/google.ai.generativelanguage.v1beta.BidiGenerateContent?key=${encodeURIComponent(apiKey)}`;
    const modelPath = params.model.startsWith('models/')
      ? params.model
      : `models/${params.model}`;

    const systemInstructionText = buildVoiceSystemPrompt({
      dataset: params.dataset,
      nodes: params.nodes,
      pillarId: params.pillarId,
      stance: params.stance,
      persona: params.persona,
      mode: 'live',
    });

    const ws = new WebSocket(wsUrl);
    this.ws = ws;

    ws.onopen = () => {
      const setupPayload = {
        setup: {
          model: modelPath,
          generationConfig: {
            responseModalities: ['AUDIO'],
            speechConfig: {
              voiceConfig: {
                prebuiltVoiceConfig: {
                  voiceName: params.voiceName || 'Puck',
                },
              },
            },
          },
          systemInstruction: {
            parts: [{ text: systemInstructionText }],
          },
          inputAudioTranscription: {},
          outputAudioTranscription: {},
          tools: [
            {
              functionDeclarations: [
                {
                  name: 'emit_debate_feedback',
                  description:
                    'Updates the user visual debate HUD with engaged argument node IDs, argument strength, persuasion shift, rhetoric badges, and a next-move coaching hint.',
                  parameters: {
                    type: 'OBJECT',
                    properties: {
                      engagedNodeIds: {
                        type: 'ARRAY',
                        items: { type: 'STRING' },
                        description: 'Curated node IDs you (the AI) raised in your response.',
                      },
                      userEngagedNodeIds: {
                        type: 'ARRAY',
                        items: { type: 'STRING' },
                        description: 'Curated node IDs the user referenced in their speech.',
                      },
                      argumentStrength: {
                        type: 'INTEGER',
                        description: 'Score 1-100 for the user argument quality.',
                      },
                      persuasionShift: {
                        type: 'INTEGER',
                        description: 'Delta from -15 to +15 where positive favors the user.',
                      },
                      roundPhase: {
                        type: 'STRING',
                        enum: ['opening', 'sparring', 'cross-exam', 'closing'],
                      },
                      rhetoricBadges: {
                        type: 'ARRAY',
                        items: {
                          type: 'OBJECT',
                          properties: {
                            type: {
                              type: 'STRING',
                              enum: [
                                'steelman',
                                'evidence',
                                'rebuttal',
                                'concession',
                                'fallacy',
                                'clarity',
                              ],
                            },
                            label: { type: 'STRING' },
                            detail: { type: 'STRING' },
                          },
                          required: ['type', 'label', 'detail'],
                        },
                      },
                      coachingTip: {
                        type: 'STRING',
                        description: '1 concise tactical coaching tip for the user next turn.',
                      },
                      suggestedFollowUpNodeId: {
                        type: 'STRING',
                        description: 'Optional curated node ID the user could use next.',
                      },
                    },
                    required: [
                      'engagedNodeIds',
                      'argumentStrength',
                      'persuasionShift',
                      'roundPhase',
                      'coachingTip',
                    ],
                  },
                },
              ],
            },
          ],
        },
      };

      ws.send(JSON.stringify(setupPayload));
    };

    ws.onmessage = async (event: MessageEvent) => {
      try {
        const text =
          typeof event.data === 'string'
            ? event.data
            : event.data instanceof Blob
              ? await event.data.text()
              : '';
        if (!text) return;
        const msg = JSON.parse(text) as Record<string, unknown>;
        this.handleServerMessage(msg);
      } catch {
        // Ignore malformed frame
      }
    };

    ws.onerror = () => {
      this.callbacks.onError(
        'Gemini Live WebSocket connection failed. Check your API key or try Gemini Flash Voice mode in Settings.'
      );
    };

    ws.onclose = (ev) => {
      const wasSetup = this.isSetupComplete;
      this.cleanupAudio();
      this.isSetupComplete = false;
      this.ws = null;
      this.callbacks.onAiSpeakingChange(false);
      this.callbacks.onStatusChange('disconnected');
      if (!wasSetup && ev.code !== 1000) {
        this.callbacks.onError(
          `Gemini Live closed (code ${ev.code}${ev.reason ? `: ${ev.reason}` : ''}). If the live model name changed, switch to Gemini Flash Voice in Settings.`
        );
      }
    };
  }

  public sendTextMessage(text: string): void {
    if (!this.ws || this.ws.readyState !== WebSocket.OPEN || !this.isSetupComplete) {
      return;
    }
    this.stopPlayback();
    this.ws.send(
      JSON.stringify({
        clientContent: {
          turns: [{ role: 'user', parts: [{ text }] }],
          turnComplete: true,
        },
      })
    );
  }

  public interruptAiPlayback(): void {
    this.stopPlayback();
  }

  public disconnect(): void {
    this.isSetupComplete = false;
    this.cleanupAudio();
    if (this.ws) {
      try {
        this.ws.close(1000, 'User ended session');
      } catch {
        // ignore
      }
      this.ws = null;
    }
    this.callbacks.onAiSpeakingChange(false);
    this.callbacks.onUserAmplitude(0);
    this.callbacks.onAiAmplitude(0);
    this.callbacks.onStatusChange('disconnected');
  }

  private handleServerMessage(msg: Record<string, unknown>): void {
    if ('setupComplete' in msg) {
      this.isSetupComplete = true;
      this.callbacks.onStatusChange('connected');
      this.startMicrophoneStreaming();
      // Prompt Gemini to deliver a brief conversational opening greeting
      this.sendTextMessage(
        'Start our conversational debate with a brief 2-sentence welcome and invite my opening take.'
      );
      return;
    }

    // Handle tool calls for live visual HUD updates
    const toolCall = msg.toolCall as
      | { functionCalls?: Array<{ id?: string; name?: string; args?: Record<string, unknown> }> }
      | undefined;
    if (toolCall?.functionCalls?.length) {
      const functionResponses: Array<Record<string, unknown>> = [];
      for (const call of toolCall.functionCalls) {
        if (call.name === 'emit_debate_feedback' && call.args) {
          const args = call.args;
          const payload: GeminiLiveFeedbackPayload = {
            engagedNodeIds: Array.isArray(args.engagedNodeIds)
              ? args.engagedNodeIds.map(String)
              : [],
            userEngagedNodeIds: Array.isArray(args.userEngagedNodeIds)
              ? args.userEngagedNodeIds.map(String)
              : [],
            argumentStrength:
              typeof args.argumentStrength === 'number'
                ? Math.max(10, Math.min(100, Math.round(args.argumentStrength)))
                : 68,
            persuasionShift:
              typeof args.persuasionShift === 'number'
                ? Math.max(-15, Math.min(15, Math.round(args.persuasionShift)))
                : 0,
            roundPhase: (['opening', 'sparring', 'cross-exam', 'closing'].includes(
              String(args.roundPhase)
            )
              ? String(args.roundPhase)
              : 'sparring') as DebateRoundPhase,
            rhetoricBadges: Array.isArray(args.rhetoricBadges)
              ? (args.rhetoricBadges as RhetoricBadge[]).slice(0, 2)
              : [],
            coachingTip: String(args.coachingTip || ''),
            suggestedFollowUpNodeId:
              typeof args.suggestedFollowUpNodeId === 'string'
                ? args.suggestedFollowUpNodeId
                : null,
          };
          this.callbacks.onFeedback(payload);
        }

        functionResponses.push({
          id: call.id,
          name: call.name,
          response: { ok: true },
        });
      }

      if (this.ws && this.ws.readyState === WebSocket.OPEN) {
        this.ws.send(JSON.stringify({ toolResponse: { functionResponses } }));
      }
    }

    const serverContent = msg.serverContent as
      | {
          interrupted?: boolean;
          turnComplete?: boolean;
          inputTranscription?: { text?: string };
          outputTranscription?: { text?: string };
          modelTurn?: {
            parts?: Array<{
              inlineData?: { mimeType?: string; data?: string };
              text?: string;
            }>;
          };
        }
      | undefined;

    if (!serverContent) return;

    if (serverContent.interrupted) {
      this.stopPlayback();
    }

    if (serverContent.inputTranscription?.text) {
      this.userTranscriptBuffer += serverContent.inputTranscription.text;
      this.callbacks.onUserTranscript(this.userTranscriptBuffer.trim(), false);
    }

    if (serverContent.outputTranscription?.text) {
      if (this.userTranscriptBuffer.trim()) {
        this.callbacks.onUserTranscript(this.userTranscriptBuffer.trim(), true);
        this.userTranscriptBuffer = '';
      }
      this.aiTranscriptBuffer += serverContent.outputTranscription.text;
      this.callbacks.onAiTranscript(this.aiTranscriptBuffer.trim(), false);
    }

    if (serverContent.modelTurn?.parts) {
      for (const part of serverContent.modelTurn.parts) {
        if (part.inlineData?.data) {
          this.enqueuePcmOutput(part.inlineData.data);
        }
      }
    }

    if (serverContent.turnComplete) {
      if (this.userTranscriptBuffer.trim()) {
        this.callbacks.onUserTranscript(this.userTranscriptBuffer.trim(), true);
        this.userTranscriptBuffer = '';
      }
      if (this.aiTranscriptBuffer.trim()) {
        this.callbacks.onAiTranscript(this.aiTranscriptBuffer.trim(), true);
        this.aiTranscriptBuffer = '';
      }
    }
  }

  private startMicrophoneStreaming(): void {
    if (!this.mediaStream) return;
    const AudioCtx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    const ctx = new AudioCtx();
    this.inputCtx = ctx;

    const source = ctx.createMediaStreamSource(this.mediaStream);
    this.sourceNode = source;
    const processor = ctx.createScriptProcessor(4096, 1, 1);
    this.processorNode = processor;

    processor.onaudioprocess = (event: AudioProcessingEvent) => {
      if (this.isMuted || !this.ws || this.ws.readyState !== WebSocket.OPEN || !this.isSetupComplete) {
        return;
      }
      const input = event.inputBuffer.getChannelData(0);
      const rms = computeRms(input);
      this.callbacks.onUserAmplitude(rms);

      const pcm16 = downsampleTo16kPcm(input, ctx.sampleRate);
      const b64 = int16ToBase64(pcm16);

      this.ws.send(
        JSON.stringify({
          realtimeInput: {
            mediaChunks: [
              {
                mimeType: 'audio/pcm;rate=16000',
                data: b64,
              },
            ],
          },
        })
      );
    };

    source.connect(processor);
    // Keep ScriptProcessor alive without routing mic feedback to speakers
    const silentGain = ctx.createGain();
    silentGain.gain.value = 0;
    processor.connect(silentGain);
    silentGain.connect(ctx.destination);
  }

  private enqueuePcmOutput(base64Pcm: string): void {
    const AudioCtx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!this.outputCtx) {
      this.outputCtx = new AudioCtx({ sampleRate: OUTPUT_SAMPLE_RATE });
      this.nextPlayTime = this.outputCtx.currentTime;
    }
    if (this.outputCtx.state === 'suspended') {
      this.outputCtx.resume().catch(() => {});
    }

    const floats = base64ToFloat32Pcm(base64Pcm);
    if (floats.length === 0) return;

    const rms = computeRms(floats);
    this.callbacks.onAiAmplitude(rms);

    const buffer = this.outputCtx.createBuffer(1, floats.length, OUTPUT_SAMPLE_RATE);
    buffer.copyToChannel(new Float32Array(floats), 0);

    const source = this.outputCtx.createBufferSource();
    source.buffer = buffer;
    source.connect(this.outputCtx.destination);

    const now = this.outputCtx.currentTime;
    const startAt = Math.max(now + 0.02, this.nextPlayTime);
    this.nextPlayTime = startAt + buffer.duration;

    this.activeSources.add(source);
    this.callbacks.onAiSpeakingChange(true);

    source.onended = () => {
      this.activeSources.delete(source);
      if (this.activeSources.size === 0) {
        this.callbacks.onAiSpeakingChange(false);
        this.callbacks.onAiAmplitude(0);
      }
    };

    source.start(startAt);
  }

  private stopPlayback(): void {
    for (const src of this.activeSources) {
      try {
        src.stop();
      } catch {
        // ignore
      }
    }
    this.activeSources.clear();
    if (this.outputCtx) {
      this.nextPlayTime = this.outputCtx.currentTime;
    }
    this.callbacks.onAiSpeakingChange(false);
    this.callbacks.onAiAmplitude(0);
  }

  private cleanupAudio(): void {
    this.stopPlayback();
    if (this.processorNode) {
      try {
        this.processorNode.disconnect();
      } catch {
        // ignore
      }
      this.processorNode = null;
    }
    if (this.sourceNode) {
      try {
        this.sourceNode.disconnect();
      } catch {
        // ignore
      }
      this.sourceNode = null;
    }
    if (this.mediaStream) {
      for (const track of this.mediaStream.getTracks()) {
        track.stop();
      }
      this.mediaStream = null;
    }
    if (this.inputCtx) {
      this.inputCtx.close().catch(() => {});
      this.inputCtx = null;
    }
    if (this.outputCtx) {
      this.outputCtx.close().catch(() => {});
      this.outputCtx = null;
    }
  }
}
