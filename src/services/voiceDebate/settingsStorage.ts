import {
  DebateOpponentPersona,
  DebateRoundLength,
  VoiceAIBackend,
  VoiceDebateSettings,
} from '../../types/voiceDebate';

const SETTINGS_KEY = 'dialectica-voice-settings-v1';

export const DEFAULT_VOICE_SETTINGS: VoiceDebateSettings = {
  backend: 'offline-curated',
  webllmModel: 'Llama-3.2-1B-Instruct-q4f16_1-MLC',
  geminiApiKey: '',
  geminiModel: 'gemini-2.5-flash',
  localEndpoint: 'http://localhost:11434/v1',
  localModel: 'gemma3:4b',
  localApiKey: '',
  roundLength: 5,
  persona: 'sparring',
};

function normalizeBackend(raw: unknown): VoiceAIBackend {
  if (raw === 'browser-webllm') return 'browser-webllm';
  if (raw === 'gemini-flash' || raw === 'gemini-live') return 'gemini-flash';
  if (raw === 'local-openai') return 'local-openai';
  return 'offline-curated';
}

function normalizeRoundLength(raw: unknown): DebateRoundLength {
  if (raw === 3 || raw === 5 || raw === 'open') return raw;
  return 5;
}

function normalizePersona(raw: unknown): DebateOpponentPersona {
  if (raw === 'sparring' || raw === 'oxford' || raw === 'socratic') return raw;
  return 'sparring';
}

export function loadVoiceSettings(): VoiceDebateSettings {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    if (!raw) return { ...DEFAULT_VOICE_SETTINGS };
    const parsed = JSON.parse(raw) as Record<string, unknown>;
    return {
      backend: normalizeBackend(parsed.backend),
      webllmModel:
        typeof parsed.webllmModel === 'string' && parsed.webllmModel.trim()
          ? parsed.webllmModel
          : DEFAULT_VOICE_SETTINGS.webllmModel,
      geminiApiKey: typeof parsed.geminiApiKey === 'string' ? parsed.geminiApiKey : '',
      geminiModel:
        typeof parsed.geminiModel === 'string' && parsed.geminiModel.trim()
          ? parsed.geminiModel
          : DEFAULT_VOICE_SETTINGS.geminiModel,
      localEndpoint:
        typeof parsed.localEndpoint === 'string' && parsed.localEndpoint.trim()
          ? parsed.localEndpoint
          : DEFAULT_VOICE_SETTINGS.localEndpoint,
      localModel:
        typeof parsed.localModel === 'string' && parsed.localModel.trim()
          ? parsed.localModel
          : DEFAULT_VOICE_SETTINGS.localModel,
      localApiKey: typeof parsed.localApiKey === 'string' ? parsed.localApiKey : '',
      roundLength: normalizeRoundLength(parsed.roundLength),
      persona: normalizePersona(parsed.persona),
    };
  } catch {
    return { ...DEFAULT_VOICE_SETTINGS };
  }
}

export function saveVoiceSettings(settings: VoiceDebateSettings): void {
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  } catch {
    // Ignore storage quota issues
  }
}

export function getEffectiveBackendLabel(settings: VoiceDebateSettings): {
  title: string;
  shortLabel: string;
  badgeColor: 'violet' | 'sky' | 'amber' | 'emerald';
  isConfigured: boolean;
} {
  switch (settings.backend) {
    case 'browser-webllm':
      return {
        title: 'On-Device AI (WebLLM)',
        shortLabel: 'On-Device AI',
        badgeColor: 'violet',
        isConfigured: true,
      };
    case 'gemini-flash':
      return {
        title: 'Gemini Flash AI',
        shortLabel: 'Gemini AI',
        badgeColor: 'sky',
        isConfigured: settings.geminiApiKey.trim().length > 10,
      };
    case 'local-openai':
      return {
        title: `Local AI (${settings.localModel || 'Custom'})`,
        shortLabel: 'Local AI',
        badgeColor: 'amber',
        isConfigured: settings.localEndpoint.trim().startsWith('http'),
      };
    case 'offline-curated':
    default:
      return {
        title: 'Offline Curated Sparring',
        shortLabel: 'Offline',
        badgeColor: 'emerald',
        isConfigured: true,
      };
  }
}
