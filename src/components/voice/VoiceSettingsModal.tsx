import { useEffect, useState } from 'react';
import clsx from 'clsx';
import {
  Check,
  CheckCircle2,
  Download,
  ExternalLink,
  Loader2,
  Trash2,
  X,
  XCircle,
} from 'lucide-react';
import {
  DebateOpponentPersona,
  DebateRoundLength,
  VoiceAIBackend,
  VoiceDebateSettings,
} from '../../types/voiceDebate';
import { testVoiceBackendConnection } from '../../services/voiceDebate/llmDebateEngine';
import {
  WEBLLM_MODEL_PRESETS,
  WebGpuSupportResult,
  WebLlmLoadProgress,
  checkWebGpuSupport,
  clearWebLlmModelCache,
  ensureWebLlmEngine,
  getLoadedWebLlmModelId,
  isWebLlmModelCached,
} from '../../services/voiceDebate/webllmEngine';

interface VoiceSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  settings: VoiceDebateSettings;
  onSave: (updated: VoiceDebateSettings) => void;
  isDark: boolean;
  onToggleTheme?: () => void;
}

const BACKEND_OPTIONS: Array<{
  id: VoiceAIBackend;
  title: string;
  subtitle: string;
  tag: string;
}> = [
  {
    id: 'browser-webllm',
    title: 'On-Device AI',
    subtitle: 'Runs privately in Chrome via WebGPU. Free, no API key.',
    tag: 'Free',
  },
  {
    id: 'gemini-flash',
    title: 'Gemini Cloud',
    subtitle: 'Fastest responses using your Google AI Studio key.',
    tag: 'API Key',
  },
  {
    id: 'local-openai',
    title: 'Local Server',
    subtitle: 'Ollama, LM Studio, or OpenAI-compatible LAN endpoint.',
    tag: 'Custom',
  },
  {
    id: 'offline-curated',
    title: 'Offline Templates',
    subtitle: 'Instant built-in graph replies without downloading a model.',
    tag: 'Basic',
  },
];

const ROUND_LENGTH_OPTIONS: Array<{ id: DebateRoundLength; label: string }> = [
  { id: 3, label: '3 turns' },
  { id: 5, label: '5 turns' },
  { id: 'open', label: 'Open' },
];

const PERSONA_OPTIONS: Array<{ id: DebateOpponentPersona; label: string }> = [
  { id: 'sparring', label: 'Partner' },
  { id: 'oxford', label: 'Oxford' },
  { id: 'socratic', label: 'Socratic' },
];

export function VoiceSettingsModal({
  isOpen,
  onClose,
  settings,
  onSave,
  isDark,
  onToggleTheme,
}: VoiceSettingsModalProps) {
  const [draft, setDraft] = useState<VoiceDebateSettings>(settings);
  const [testing, setTesting] = useState(false);
  const [testResult, setTestResult] = useState<{ ok: boolean; message: string } | null>(null);

  const [gpuSupport, setGpuSupport] = useState<WebGpuSupportResult | null>(null);
  const [cachedModels, setCachedModels] = useState<Record<string, boolean>>({});
  const [downloading, setDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState<WebLlmLoadProgress | null>(null);
  const [clearingCache, setClearingCache] = useState(false);
  const [loadedModel, setLoadedModel] = useState<string | null>(() => getLoadedWebLlmModelId());

  useEffect(() => {
    if (!isOpen) return;
    setDraft(settings);
    setTestResult(null);
    setLoadedModel(getLoadedWebLlmModelId());
  }, [isOpen, settings]);

  useEffect(() => {
    if (!isOpen || draft.backend !== 'browser-webllm') return;
    let cancelled = false;

    void checkWebGpuSupport().then((res) => {
      if (!cancelled) setGpuSupport(res);
    });

    void Promise.all(
      WEBLLM_MODEL_PRESETS.map(async (preset) => {
        const cached = await isWebLlmModelCached(preset.id);
        return [preset.id, cached] as const;
      })
    ).then((entries) => {
      if (!cancelled) {
        setCachedModels(Object.fromEntries(entries));
      }
    });

    return () => {
      cancelled = true;
    };
  }, [isOpen, draft.backend]);

  if (!isOpen) return null;

  const selectedModelCached = Boolean(cachedModels[draft.webllmModel]);
  const selectedPreset =
    WEBLLM_MODEL_PRESETS.find((m) => m.id === draft.webllmModel) ?? WEBLLM_MODEL_PRESETS[0];
  const isSelectedLoaded =
    loadedModel === selectedPreset.id || loadedModel === selectedPreset.f32FallbackId;

  const handleTest = async () => {
    setTesting(true);
    setTestResult(null);
    const result = await testVoiceBackendConnection(draft);
    setTestResult(result);
    setTesting(false);
  };

  const handleDownloadAndLoad = async () => {
    if (downloading) return;
    setDownloading(true);
    setTestResult(null);
    setDownloadProgress({
      progress: 0.02,
      text: `Preparing ${selectedPreset.label}...`,
      modelId: draft.webllmModel,
    });
    try {
      await ensureWebLlmEngine(draft.webllmModel, (status) => {
        setDownloadProgress(status);
      });
      setCachedModels((prev) => ({ ...prev, [draft.webllmModel]: true }));
      setLoadedModel(getLoadedWebLlmModelId());
      setTestResult({
        ok: true,
        message: `${selectedPreset.label} is ready on your device.`,
      });
    } catch (err) {
      setTestResult({
        ok: false,
        message: err instanceof Error ? err.message : String(err),
      });
    } finally {
      setDownloading(false);
    }
  };

  const handleClearCache = async () => {
    if (clearingCache || downloading) return;
    setClearingCache(true);
    setTestResult(null);
    try {
      await clearWebLlmModelCache(draft.webllmModel);
      setCachedModels((prev) => ({ ...prev, [draft.webllmModel]: false }));
      setLoadedModel(getLoadedWebLlmModelId());
      setDownloadProgress(null);
      setTestResult({
        ok: true,
        message: `Cleared cached weights for ${selectedPreset.label}.`,
      });
    } catch (err) {
      setTestResult({
        ok: false,
        message: `Could not clear cache: ${err instanceof Error ? err.message : String(err)}`,
      });
    } finally {
      setClearingCache(false);
    }
  };

  const handleSave = () => {
    onSave(draft);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4 bg-black/60 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={clsx(
          'w-full max-w-md max-h-[88vh] rounded-t-2xl sm:rounded-2xl border shadow-2xl flex flex-col overflow-hidden',
          isDark
            ? 'bg-[#141417] border-white/[0.08] text-zinc-100'
            : 'bg-white border-zinc-200 text-zinc-950'
        )}
      >
        <div className="pt-2.5 pb-1 flex justify-center sm:hidden shrink-0">
          <span className="w-9 h-1 rounded-full bg-zinc-500/35" />
        </div>

        {/* Header */}
        <div
          className={clsx(
            'px-5 py-3.5 border-b flex items-center justify-between shrink-0',
            isDark ? 'border-white/[0.08]' : 'border-zinc-100'
          )}
        >
          <h2 className="text-[15px] font-semibold tracking-tight">Settings</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close settings"
            className={clsx(
              'p-1.5 rounded-lg transition-colors',
              isDark ? 'text-zinc-400 hover:bg-white/[0.06]' : 'text-zinc-500 hover:bg-zinc-100'
            )}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="px-5 py-4 overflow-y-auto space-y-6">
          {/* 1. Debate Format & Appearance */}
          <div className="space-y-4">
            <div className="space-y-2">
              <label
                className={clsx(
                  'block text-xs font-medium',
                  isDark ? 'text-zinc-400' : 'text-zinc-500'
                )}
              >
                Round length
              </label>
              <div
                className={clsx(
                  'grid grid-cols-3 p-1 rounded-xl',
                  isDark ? 'bg-[#0C0C0E]' : 'bg-zinc-100'
                )}
              >
                {ROUND_LENGTH_OPTIONS.map((opt) => (
                  <button
                    key={String(opt.id)}
                    type="button"
                    onClick={() => setDraft((d) => ({ ...d, roundLength: opt.id }))}
                    className={clsx(
                      'py-1.5 rounded-lg text-xs font-medium transition-all',
                      draft.roundLength === opt.id
                        ? isDark
                          ? 'bg-[#26262B] text-white shadow-xs'
                          : 'bg-white text-zinc-950 shadow-xs'
                        : isDark
                          ? 'text-zinc-400 hover:text-zinc-200'
                          : 'text-zinc-500 hover:text-zinc-900'
                    )}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label
                className={clsx(
                  'block text-xs font-medium',
                  isDark ? 'text-zinc-400' : 'text-zinc-500'
                )}
              >
                Opponent style
              </label>
              <div
                className={clsx(
                  'grid grid-cols-3 p-1 rounded-xl',
                  isDark ? 'bg-[#0C0C0E]' : 'bg-zinc-100'
                )}
              >
                {PERSONA_OPTIONS.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setDraft((d) => ({ ...d, persona: opt.id }))}
                    className={clsx(
                      'py-1.5 rounded-lg text-xs font-medium transition-all',
                      draft.persona === opt.id
                        ? isDark
                          ? 'bg-[#26262B] text-white shadow-xs'
                          : 'bg-white text-zinc-950 shadow-xs'
                        : isDark
                          ? 'text-zinc-400 hover:text-zinc-200'
                          : 'text-zinc-500 hover:text-zinc-900'
                    )}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {onToggleTheme && (
              <div className="flex items-center justify-between pt-1">
                <span
                  className={clsx(
                    'text-xs font-medium',
                    isDark ? 'text-zinc-400' : 'text-zinc-500'
                  )}
                >
                  Appearance
                </span>
                <div
                  className={clsx(
                    'inline-grid grid-cols-2 p-0.5 rounded-lg',
                    isDark ? 'bg-[#0C0C0E]' : 'bg-zinc-100'
                  )}
                >
                  <button
                    type="button"
                    onClick={() => {
                      if (!isDark) onToggleTheme();
                    }}
                    className={clsx(
                      'px-3 py-1 rounded-md text-xs font-medium transition-all',
                      isDark ? 'bg-[#26262B] text-white' : 'text-zinc-500'
                    )}
                  >
                    Dark
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      if (isDark) onToggleTheme();
                    }}
                    className={clsx(
                      'px-3 py-1 rounded-md text-xs font-medium transition-all',
                      !isDark ? 'bg-white text-zinc-950 shadow-xs' : 'text-zinc-400'
                    )}
                  >
                    Light
                  </button>
                </div>
              </div>
            )}
          </div>

          <hr className={isDark ? 'border-white/[0.08]' : 'border-zinc-100'} />

          {/* 2. AI Engine Selection */}
          <div className="space-y-2.5">
            <label
              className={clsx(
                'block text-xs font-medium',
                isDark ? 'text-zinc-400' : 'text-zinc-500'
              )}
            >
              AI engine
            </label>

            <div
              className={clsx(
                'rounded-xl border divide-y overflow-hidden',
                isDark
                  ? 'bg-[#0C0C0E] border-white/[0.08] divide-white/[0.06]'
                  : 'bg-zinc-50/60 border-zinc-200 divide-zinc-200/70'
              )}
            >
              {BACKEND_OPTIONS.map((opt) => {
                const active = draft.backend === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => {
                      setDraft((d) => ({ ...d, backend: opt.id }));
                      setTestResult(null);
                    }}
                    className={clsx(
                      'w-full text-left px-3.5 py-3 flex items-center justify-between gap-3 transition-colors',
                      active
                        ? isDark
                          ? 'bg-white/[0.05]'
                          : 'bg-white'
                        : isDark
                          ? 'hover:bg-white/[0.02]'
                          : 'hover:bg-white/60'
                    )}
                  >
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-[13px] font-medium">{opt.title}</span>
                        <span
                          className={clsx(
                            'text-[10.5px] font-medium',
                            isDark ? 'text-zinc-500' : 'text-zinc-400'
                          )}
                        >
                          {opt.tag}
                        </span>
                      </div>
                      <p
                        className={clsx(
                          'text-[11.5px] mt-0.5 leading-snug',
                          isDark ? 'text-zinc-500' : 'text-zinc-500'
                        )}
                      >
                        {opt.subtitle}
                      </p>
                    </div>

                    <span
                      className={clsx(
                        'w-4 h-4 rounded-full flex items-center justify-center shrink-0 border transition-colors',
                        active
                          ? isDark
                            ? 'bg-white border-white text-zinc-950'
                            : 'bg-zinc-950 border-zinc-950 text-white'
                          : isDark
                            ? 'border-zinc-700'
                            : 'border-zinc-300'
                      )}
                    >
                      {active && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* On-Device WebLLM Sub-section */}
          {draft.backend === 'browser-webllm' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className={isDark ? 'text-zinc-400' : 'text-zinc-500'}>Model</span>
                {gpuSupport && (
                  <span
                    className={clsx(
                      'text-[11px] font-medium',
                      gpuSupport.supported ? 'text-emerald-500' : 'text-rose-500'
                    )}
                  >
                    {gpuSupport.supported ? 'WebGPU ready' : 'WebGPU unavailable'}
                  </span>
                )}
              </div>

              {gpuSupport && !gpuSupport.supported && (
                <p className="text-xs text-rose-400 leading-snug">{gpuSupport.reason}</p>
              )}

              <div className="space-y-1.5">
                {WEBLLM_MODEL_PRESETS.map((preset) => {
                  const selected = draft.webllmModel === preset.id;
                  const cached = Boolean(cachedModels[preset.id]);
                  return (
                    <button
                      key={preset.id}
                      type="button"
                      disabled={downloading}
                      onClick={() => {
                        setDraft((d) => ({ ...d, webllmModel: preset.id }));
                        setTestResult(null);
                      }}
                      className={clsx(
                        'w-full text-left px-3 py-2.5 rounded-xl border transition-colors disabled:opacity-50',
                        selected
                          ? isDark
                            ? 'bg-white/[0.06] border-white/25 text-white'
                            : 'bg-zinc-50 border-zinc-900 text-zinc-950'
                          : isDark
                            ? 'bg-transparent border-white/[0.08] text-zinc-300 hover:border-white/15'
                            : 'bg-white border-zinc-200 text-zinc-700 hover:border-zinc-300'
                      )}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-medium">
                          {preset.label}
                          {preset.recommended && (
                            <span
                              className={clsx(
                                'ml-1.5 text-[10.5px]',
                                isDark ? 'text-zinc-400' : 'text-zinc-500'
                              )}
                            >
                              · Default
                            </span>
                          )}
                        </span>
                        <span className="text-[11px] font-mono text-zinc-500 shrink-0">
                          {cached ? 'Cached · ' : ''}
                          {preset.downloadSizeLabel}
                        </span>
                      </div>
                      <p className="text-[11px] text-zinc-500 mt-0.5">{preset.tagline}</p>
                    </button>
                  );
                })}
              </div>

              {downloading && downloadProgress && (
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-[11px] text-zinc-400">
                    <span className="truncate pr-2">{downloadProgress.text}</span>
                    <span className="font-mono shrink-0">
                      {Math.round(downloadProgress.progress * 100)}%
                    </span>
                  </div>
                  <div
                    className={clsx(
                      'h-1.5 w-full rounded-full overflow-hidden',
                      isDark ? 'bg-zinc-800' : 'bg-zinc-200'
                    )}
                  >
                    <div
                      style={{
                        width: `${Math.max(4, Math.round(downloadProgress.progress * 100))}%`,
                      }}
                      className={clsx(
                        'h-full transition-all duration-300',
                        isDark ? 'bg-white' : 'bg-zinc-950'
                      )}
                    />
                  </div>
                </div>
              )}

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleDownloadAndLoad}
                  disabled={downloading || (gpuSupport !== null && !gpuSupport.supported)}
                  className={clsx(
                    'flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium border transition-colors disabled:opacity-45',
                    isSelectedLoaded
                      ? isDark
                        ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                        : 'bg-emerald-50 border-emerald-200 text-emerald-700'
                      : isDark
                        ? 'bg-white/[0.08] border-white/[0.12] text-white hover:bg-white/[0.12]'
                        : 'bg-zinc-100 border-zinc-200 text-zinc-950 hover:bg-zinc-200/80'
                  )}
                >
                  {downloading ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Loading...</span>
                    </>
                  ) : isSelectedLoaded ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Loaded &amp; ready</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-3.5 h-3.5" />
                      <span>{selectedModelCached ? 'Load from cache' : 'Download model'}</span>
                    </>
                  )}
                </button>

                {selectedModelCached && (
                  <button
                    type="button"
                    onClick={handleClearCache}
                    disabled={clearingCache || downloading}
                    className={clsx(
                      'inline-flex items-center gap-1 px-3 py-2 rounded-xl text-xs font-medium border transition-colors disabled:opacity-45',
                      isDark
                        ? 'border-white/[0.08] text-zinc-400 hover:text-rose-400'
                        : 'border-zinc-200 text-zinc-500 hover:text-rose-600'
                    )}
                  >
                    {clearingCache ? (
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    ) : (
                      <Trash2 className="w-3.5 h-3.5" />
                    )}
                    <span>Clear</span>
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Gemini Sub-section */}
          {draft.backend === 'gemini-flash' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-medium text-zinc-400">Google Gemini API Key</label>
                <a
                  href="https://aistudio.google.com/apikey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={clsx(
                    'inline-flex items-center gap-1 text-xs font-medium hover:underline',
                    isDark ? 'text-zinc-300' : 'text-zinc-700'
                  )}
                >
                  <span>Get key</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <input
                type="password"
                value={draft.geminiApiKey}
                onChange={(e) => setDraft((d) => ({ ...d, geminiApiKey: e.target.value }))}
                placeholder="AIzaSy..."
                className={clsx(
                  'w-full px-3 py-2.5 rounded-xl text-xs font-mono border focus:outline-none',
                  isDark
                    ? 'bg-[#0C0C0E] border-white/[0.1] text-zinc-100 focus:border-white/30'
                    : 'bg-zinc-50 border-zinc-200 text-zinc-950 focus:border-zinc-400'
                )}
              />
              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1.5">Model</label>
                <input
                  type="text"
                  value={draft.geminiModel}
                  onChange={(e) => setDraft((d) => ({ ...d, geminiModel: e.target.value }))}
                  className={clsx(
                    'w-full px-3 py-2 rounded-xl text-xs font-mono border focus:outline-none',
                    isDark
                      ? 'bg-[#0C0C0E] border-white/[0.1] text-zinc-200 focus:border-white/30'
                      : 'bg-zinc-50 border-zinc-200 text-zinc-800 focus:border-zinc-400'
                  )}
                />
              </div>
            </div>
          )}

          {/* Local Server Sub-section */}
          {draft.backend === 'local-openai' && (
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                  Server URL
                </label>
                <input
                  type="url"
                  value={draft.localEndpoint}
                  onChange={(e) => setDraft((d) => ({ ...d, localEndpoint: e.target.value }))}
                  placeholder="http://192.168.1.50:11434/v1"
                  className={clsx(
                    'w-full px-3 py-2 rounded-xl text-xs font-mono border focus:outline-none',
                    isDark
                      ? 'bg-[#0C0C0E] border-white/[0.1] text-zinc-100 focus:border-white/30'
                      : 'bg-zinc-50 border-zinc-200 text-zinc-950 focus:border-zinc-400'
                  )}
                />
              </div>
              <div className="grid grid-cols-2 gap-2.5">
                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1.5">Model</label>
                  <input
                    type="text"
                    value={draft.localModel}
                    onChange={(e) => setDraft((d) => ({ ...d, localModel: e.target.value }))}
                    placeholder="gemma3:4b"
                    className={clsx(
                      'w-full px-2.5 py-2 rounded-xl text-xs font-mono border focus:outline-none',
                      isDark
                        ? 'bg-[#0C0C0E] border-white/[0.1] text-zinc-200 focus:border-white/30'
                        : 'bg-zinc-50 border-zinc-200 text-zinc-800 focus:border-zinc-400'
                    )}
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                    Bearer Token
                  </label>
                  <input
                    type="password"
                    value={draft.localApiKey}
                    onChange={(e) => setDraft((d) => ({ ...d, localApiKey: e.target.value }))}
                    placeholder="Optional"
                    className={clsx(
                      'w-full px-2.5 py-2 rounded-xl text-xs font-mono border focus:outline-none',
                      isDark
                        ? 'bg-[#0C0C0E] border-white/[0.1] text-zinc-200 focus:border-white/30'
                        : 'bg-zinc-50 border-zinc-200 text-zinc-800 focus:border-zinc-400'
                    )}
                  />
                </div>
              </div>
            </div>
          )}

          {testResult && (
            <div
              className={clsx(
                'px-3 py-2.5 rounded-xl text-xs flex items-start gap-2',
                testResult.ok
                  ? isDark
                    ? 'bg-emerald-500/10 text-emerald-400'
                    : 'bg-emerald-50 text-emerald-700'
                  : isDark
                    ? 'bg-rose-500/10 text-rose-400'
                    : 'bg-rose-50 text-rose-700'
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
            'px-5 py-3.5 border-t flex items-center justify-between gap-2 shrink-0 pb-[max(0.875rem,env(safe-area-inset-bottom))]',
            isDark ? 'border-white/[0.08]' : 'border-zinc-100'
          )}
        >
          <button
            type="button"
            onClick={handleTest}
            disabled={testing || downloading}
            className={clsx(
              'inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium transition-colors disabled:opacity-45',
              isDark
                ? 'text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.06]'
                : 'text-zinc-500 hover:text-zinc-950 hover:bg-zinc-100'
            )}
          >
            {testing && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
            <span>Test connection</span>
          </button>

          <button
            type="button"
            onClick={handleSave}
            className={clsx(
              'px-5 py-2 rounded-xl text-xs font-semibold transition-colors',
              isDark
                ? 'bg-white text-zinc-950 hover:bg-zinc-200'
                : 'bg-zinc-950 text-white hover:bg-zinc-800'
            )}
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
