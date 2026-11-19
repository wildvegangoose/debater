import { VoiceAIBackend, VoiceDebateSettings } from '../../types/voiceDebate';

const SETTINGS_KEY = 'dialectica-voice-settings-v1';

export const DEFAULT_VOICE_SETTINGS: VoiceDebateSettings = {
  backend: 'offline-curated',
  geminiApiKey: '',
  geminiModel: 'gemini-2.5-flash',
  localEndpoint: 'http://localhost:11434/v1',
  localModel: 'gemma3:4b',
  localApiKey: '',
};

function normalizeBackend(raw: unknown): VoiceAIBackend {
  if (raw === 'gemini-flash' || raw === 'gemini-live') return 'gemini-flash';
  if (raw === 'local-openai') return 'local-openai';
  return 'offline-curated';
}

export function loadVoiceSettings(): VoiceDebateSettings {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    if (!raw) return { ...DEFAULT_VOICE_SETTINGS };
    const parsed = JSON.parse(raw) as Record<string, unknown>;
    return {
      backend: normalizeBackend(parsed.backend),
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
  badgeColor: 'sky' | 'amber' | 'emerald';
  isConfigured: boolean;
} {
  switch (settings.backend) {
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
