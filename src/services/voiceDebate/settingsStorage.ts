import { VoiceDebateSettings } from '../../types/voiceDebate';

const SETTINGS_KEY = 'dialectica-voice-settings-v1';

export const DEFAULT_VOICE_SETTINGS: VoiceDebateSettings = {
  backend: 'offline-curated',
  geminiApiKey: '',
  geminiModel: 'gemini-2.5-flash',
  geminiLiveModel: 'gemini-2.5-flash-native-audio-preview-12-2025',
  geminiLiveVoice: 'Puck',
  localEndpoint: 'http://localhost:11434/v1',
  localModel: 'gemma3:4b',
  localApiKey: '',
  autoListen: true,
  speechRate: 1.0,
};

export function loadVoiceSettings(): VoiceDebateSettings {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    if (!raw) return { ...DEFAULT_VOICE_SETTINGS };
    const parsed = JSON.parse(raw) as Partial<VoiceDebateSettings>;
    return {
      ...DEFAULT_VOICE_SETTINGS,
      ...parsed,
      speechRate:
        typeof parsed.speechRate === 'number' && parsed.speechRate >= 0.6 && parsed.speechRate <= 1.6
          ? parsed.speechRate
          : DEFAULT_VOICE_SETTINGS.speechRate,
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
  badgeColor: 'indigo' | 'emerald' | 'sky' | 'amber';
  isConfigured: boolean;
} {
  switch (settings.backend) {
    case 'gemini-live':
      return {
        title: 'Gemini Live (Real-Time Voice)',
        shortLabel: 'Gemini Live',
        badgeColor: 'indigo',
        isConfigured: settings.geminiApiKey.trim().length > 10,
      };
    case 'gemini-flash':
      return {
        title: 'Gemini Flash (Voice + Coach)',
        shortLabel: 'Gemini Flash',
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
        shortLabel: 'Offline Mode',
        badgeColor: 'emerald',
        isConfigured: true,
      };
  }
}
