import { useState } from 'react';
import clsx from 'clsx';
import {
  CheckCircle2,
  Cpu,
  ExternalLink,
  KeyRound,
  Loader2,
  Radio,
  Server,
  Sparkles,
  Volume2,
  WifiOff,
  X,
  XCircle,
} from 'lucide-react';
import {
  GeminiLiveVoiceName,
  VoiceAIBackend,
  VoiceDebateSettings,
} from '../../types/voiceDebate';
import { testVoiceBackendConnection } from '../../services/voiceDebate/llmDebateEngine';

interface VoiceSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  settings: VoiceDebateSettings;
  onSave: (updated: VoiceDebateSettings) => void;
  isDark: boolean;
}

const BACKEND_CARDS: Array<{
  id: VoiceAIBackend;
  title: string;
  subtitle: string;
  badge: string;
  icon: typeof Radio;
}> = [
  {
    id: 'gemini-live',
    title: 'Gemini Live Voice',
    subtitle: 'Real-time voice-to-voice AI with natural interruptions & live HUD tool feedback.',
    badge: 'Lowest Latency',
    icon: Radio,
  },
  {
    id: 'gemini-flash',
    title: 'Gemini Flash Coach',
    subtitle: 'Android/Web voice + structured JSON coaching, scoring & citations every turn.',
    badge: 'Most Reliable',
    icon: Sparkles,
  },
  {
    id: 'local-openai',
    title: 'Local / Self-Hosted AI',
    subtitle: 'Connect to Ollama, LM Studio, or any OpenAI-compatible server on Wi-Fi or device.',
    badge: 'Private / Local',
    icon: Server,
  },
  {
    id: 'offline-curated',
    title: 'Offline Curated Sparring',
    subtitle: 'Zero setup & 100% offline. Spars using all 22 curated Dialectica argument trees.',
    badge: 'No Key Needed',
    icon: WifiOff,
  },
];

const GEMINI_VOICES: GeminiLiveVoiceName[] = ['Puck', 'Kore', 'Fenrir', 'Aoede', 'Charon'];

export function VoiceSettingsModal({
  isOpen,
  onClose,
  settings,
  onSave,
  isDark,
}: VoiceSettingsModalProps) {
  const [draft, setDraft] = useState<VoiceDebateSettings>(settings);
  const [testing, setTesting] = useState(false);
  const [testResult, setTestResult] = useState<{ ok: boolean; message: string } | null>(null);

  if (!isOpen) return null;

  const handleTest = async () => {
    setTesting(true);
    setTestResult(null);
    const result = await testVoiceBackendConnection(draft);
    setTestResult(result);
    setTesting(false);
  };

  const handleSave = () => {
    onSave(draft);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 backdrop-blur-xs">
      <div
        className={clsx(
          'w-full max-w-xl max-h-[90vh] rounded-2xl border shadow-2xl flex flex-col overflow-hidden',
          isDark ? 'bg-slate-900 border-slate-700 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
        )}
      >
        {/* Header */}
        <div
          className={clsx(
            'px-4 py-3.5 border-b flex items-center justify-between gap-3 shrink-0',
            isDark ? 'border-slate-800' : 'border-slate-200'
          )}
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-indigo-400">
              <Cpu className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-sm font-bold">AI &amp; Voice Engine Settings</h2>
              <p className="text-[11px] text-slate-400">
                API keys are stored locally on your device only.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close settings"
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-4 overflow-y-auto space-y-4">
          {/* Backend Selector */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
              Choose Debate Partner Engine
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {BACKEND_CARDS.map((card) => {
                const Icon = card.icon;
                const active = draft.backend === card.id;
                return (
                  <button
                    key={card.id}
                    type="button"
                    onClick={() => {
                      setDraft((d) => ({ ...d, backend: card.id }));
                      setTestResult(null);
                    }}
                    className={clsx(
                      'text-left p-3 rounded-xl border transition-all',
                      active
                        ? isDark
                          ? 'bg-indigo-600/20 border-indigo-400 text-white'
                          : 'bg-indigo-50 border-indigo-500 text-indigo-950'
                        : isDark
                          ? 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                    )}
                  >
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold">
                        <Icon className="w-3.5 h-3.5 text-indigo-400" />
                        {card.title}
                      </span>
                      <span
                        className={clsx(
                          'px-1.5 py-0.5 rounded text-[9.5px] font-bold',
                          active
                            ? 'bg-indigo-500 text-white'
                            : isDark
                              ? 'bg-slate-800 text-slate-400'
                              : 'bg-slate-200 text-slate-600'
                        )}
                      >
                        {card.badge}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-snug">{card.subtitle}</p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Gemini Settings */}
          {(draft.backend === 'gemini-live' || draft.backend === 'gemini-flash') && (
            <div
              className={clsx(
                'p-3.5 rounded-xl border space-y-3',
                isDark ? 'bg-slate-950/70 border-slate-800' : 'bg-slate-50 border-slate-200'
              )}
            >
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <label className="inline-flex items-center gap-1.5 text-xs font-bold">
                  <KeyRound className="w-3.5 h-3.5 text-indigo-400" />
                  Google Gemini API Key
                </label>
                <a
                  href="https://aistudio.google.com/apikey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-indigo-400 hover:underline"
                >
                  <span>Get Free Key in AI Studio</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <input
                type="password"
                value={draft.geminiApiKey}
                onChange={(e) => setDraft((d) => ({ ...d, geminiApiKey: e.target.value }))}
                placeholder="AIzaSy..."
                className={clsx(
                  'w-full px-3 py-2 rounded-lg text-xs font-mono border focus:outline-none focus:ring-2 focus:ring-indigo-500',
                  isDark
                    ? 'bg-slate-900 border-slate-700 text-slate-100'
                    : 'bg-white border-slate-300 text-slate-900'
                )}
              />

              {draft.backend === 'gemini-live' ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-400 mb-1">
                      Gemini Live Voice
                    </label>
                    <div className="flex flex-wrap gap-1.5">
                      {GEMINI_VOICES.map((voice) => (
                        <button
                          key={voice}
                          type="button"
                          onClick={() => setDraft((d) => ({ ...d, geminiLiveVoice: voice }))}
                          className={clsx(
                            'px-2.5 py-1 rounded-lg text-xs font-semibold border transition-colors',
                            draft.geminiLiveVoice === voice
                              ? 'bg-indigo-600 border-indigo-500 text-white'
                              : isDark
                                ? 'bg-slate-900 border-slate-700 text-slate-300'
                                : 'bg-white border-slate-300 text-slate-700'
                          )}
                        >
                          {voice}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-400 mb-1">
                      Live Audio Model ID
                    </label>
                    <input
                      type="text"
                      value={draft.geminiLiveModel}
                      onChange={(e) => setDraft((d) => ({ ...d, geminiLiveModel: e.target.value }))}
                      className={clsx(
                        'w-full px-2.5 py-1.5 rounded-lg text-xs font-mono border',
                        isDark
                          ? 'bg-slate-900 border-slate-700 text-slate-200'
                          : 'bg-white border-slate-300 text-slate-800'
                      )}
                    />
                  </div>
                </div>
              ) : (
                <div>
                  <label className="block text-[11px] font-semibold text-slate-400 mb-1">
                    Gemini Model ID
                  </label>
                  <input
                    type="text"
                    value={draft.geminiModel}
                    onChange={(e) => setDraft((d) => ({ ...d, geminiModel: e.target.value }))}
                    className={clsx(
                      'w-full px-2.5 py-1.5 rounded-lg text-xs font-mono border',
                      isDark
                        ? 'bg-slate-900 border-slate-700 text-slate-200'
                        : 'bg-white border-slate-300 text-slate-800'
                    )}
                  />
                </div>
              )}
            </div>
          )}

          {/* Local OpenAI-Compatible Server Settings */}
          {draft.backend === 'local-openai' && (
            <div
              className={clsx(
                'p-3.5 rounded-xl border space-y-3',
                isDark ? 'bg-slate-950/70 border-slate-800' : 'bg-slate-50 border-slate-200'
              )}
            >
              <div>
                <label className="block text-xs font-bold mb-1">
                  OpenAI-Compatible Base URL (Ollama / LM Studio / LocalAI)
                </label>
                <input
                  type="url"
                  value={draft.localEndpoint}
                  onChange={(e) => setDraft((d) => ({ ...d, localEndpoint: e.target.value }))}
                  placeholder="http://192.168.1.50:11434/v1"
                  className={clsx(
                    'w-full px-3 py-2 rounded-lg text-xs font-mono border focus:outline-none focus:ring-2 focus:ring-indigo-500',
                    isDark
                      ? 'bg-slate-900 border-slate-700 text-slate-100'
                      : 'bg-white border-slate-300 text-slate-900'
                  )}
                />
                <p className="text-[10.5px] text-slate-400 mt-1">
                  Tip: For Ollama on your PC over Wi-Fi, run with <code className="font-mono">OLLAMA_HOST=0.0.0.0</code> and enter your computer&apos;s LAN IP.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-400 mb-1">
                    Model Name
                  </label>
                  <input
                    type="text"
                    value={draft.localModel}
                    onChange={(e) => setDraft((d) => ({ ...d, localModel: e.target.value }))}
                    placeholder="gemma3:4b"
                    className={clsx(
                      'w-full px-2.5 py-1.5 rounded-lg text-xs font-mono border',
                      isDark
                        ? 'bg-slate-900 border-slate-700 text-slate-200'
                        : 'bg-white border-slate-300 text-slate-800'
                    )}
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-400 mb-1">
                    Optional Bearer Token
                  </label>
                  <input
                    type="password"
                    value={draft.localApiKey}
                    onChange={(e) => setDraft((d) => ({ ...d, localApiKey: e.target.value }))}
                    placeholder="Optional"
                    className={clsx(
                      'w-full px-2.5 py-1.5 rounded-lg text-xs font-mono border',
                      isDark
                        ? 'bg-slate-900 border-slate-700 text-slate-200'
                        : 'bg-white border-slate-300 text-slate-800'
                    )}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Voice Playback & Conversation Rhythm */}
          <div
            className={clsx(
              'p-3.5 rounded-xl border space-y-3',
              isDark ? 'bg-slate-950/70 border-slate-800' : 'bg-slate-50 border-slate-200'
            )}
          >
            <div className="flex items-center justify-between gap-3">
              <div>
                <div className="text-xs font-bold flex items-center gap-1.5">
                  <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
                  Hands-Free Auto-Listen
                </div>
                <p className="text-[11px] text-slate-400">
                  Automatically open the mic after the AI finishes speaking (great for walking or practicing hands-free).
                </p>
              </div>
              <button
                type="button"
                role="switch"
                aria-checked={draft.autoListen}
                onClick={() => setDraft((d) => ({ ...d, autoListen: !d.autoListen }))}
                className={clsx(
                  'w-11 h-6 rounded-full transition-colors p-0.5 shrink-0',
                  draft.autoListen ? 'bg-emerald-500' : 'bg-slate-700'
                )}
              >
                <span
                  className={clsx(
                    'block w-5 h-5 rounded-full bg-white shadow-xs transition-transform',
                    draft.autoListen ? 'translate-x-5' : 'translate-x-0'
                  )}
                />
              </button>
            </div>

            {draft.backend !== 'gemini-live' && (
              <div>
                <div className="flex items-center justify-between text-[11px] font-semibold text-slate-400 mb-1">
                  <span>Voice Speaking Speed (TTS)</span>
                  <span className="font-mono text-indigo-400">{draft.speechRate.toFixed(2)}x</span>
                </div>
                <input
                  type="range"
                  min={0.75}
                  max={1.35}
                  step={0.05}
                  value={draft.speechRate}
                  onChange={(e) =>
                    setDraft((d) => ({ ...d, speechRate: parseFloat(e.target.value) }))
                  }
                  className="w-full accent-indigo-500"
                />
              </div>
            )}
          </div>

          {/* Connection Test Feedback */}
          {testResult && (
            <div
              className={clsx(
                'px-3 py-2.5 rounded-xl border text-xs flex items-start gap-2',
                testResult.ok
                  ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300'
                  : 'bg-rose-500/15 border-rose-500/40 text-rose-300'
              )}
            >
              {testResult.ok ? (
                <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
              ) : (
                <XCircle className="w-4 h-4 shrink-0 mt-0.5" />
              )}
              <span>{testResult.message}</span>
            </div>
          )}
        </div>

        {/* Footer */}
        <div
          className={clsx(
            'px-4 py-3 border-t flex items-center justify-between gap-2 shrink-0',
            isDark ? 'border-slate-800 bg-slate-950/60' : 'border-slate-200 bg-slate-50'
          )}
        >
          <button
            type="button"
            onClick={handleTest}
            disabled={testing}
            className={clsx(
              'inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border transition-colors',
              isDark
                ? 'bg-slate-900 border-slate-700 text-slate-200 hover:bg-slate-800'
                : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-100'
            )}
          >
            {testing && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
            <span>Test Connection</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-slate-200"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white shadow-sm"
            >
              Save Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
