import { useEffect, useState } from 'react';
import clsx from 'clsx';
import {
  CheckCircle2,
  Cpu,
  Download,
  ExternalLink,
  HardDrive,
  KeyRound,
  Loader2,
  Server,
  Sparkles,
  Trash2,
  WifiOff,
  X,
  XCircle,
} from 'lucide-react';
import { VoiceAIBackend, VoiceDebateSettings } from '../../types/voiceDebate';
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
}

const BACKEND_CARDS: Array<{
  id: VoiceAIBackend;
  title: string;
  subtitle: string;
  badge: string;
  icon: typeof Sparkles;
}> = [
  {
    id: 'browser-webllm',
    title: 'On-Device Browser AI (WebLLM)',
    subtitle: 'Real AI model running privately on your phone via WebGPU. One-time download, then works offline.',
    badge: 'No Key · Free',
    icon: Cpu,
  },
  {
    id: 'gemini-flash',
    title: 'Gemini AI (Cloud)',
    subtitle: 'Fastest & sharpest cloud sparring with Google AI Studio free tier.',
    badge: 'Free Key',
    icon: Sparkles,
  },
  {
    id: 'local-openai',
    title: 'Local / Self-Hosted AI',
    subtitle: 'Connect to Ollama, LM Studio, or any OpenAI-compatible server on your Wi-Fi.',
    badge: 'LAN Server',
    icon: Server,
  },
  {
    id: 'offline-curated',
    title: 'Offline Curated Templates',
    subtitle: 'Instant zero-download fallback using Steelman’s 22 built-in debate graphs.',
    badge: 'Instant',
    icon: WifiOff,
  },
];

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

  // WebLLM state
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
        message: `${selectedPreset.label} is downloaded & loaded on your device. Tap Save to start sparring!`,
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
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4 bg-black/75 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={clsx(
          'w-full max-w-lg max-h-[88vh] rounded-t-3xl sm:rounded-2xl border shadow-2xl flex flex-col overflow-hidden',
          isDark
            ? 'bg-[#12161F] border-[#262E3E] text-stone-100'
            : 'bg-[#FAF8F4] border-[#E5DEC9] text-stone-900'
        )}
      >
        <div className="pt-2 pb-0.5 flex justify-center sm:hidden shrink-0">
          <span className="w-10 h-1 rounded-full bg-stone-500/40" />
        </div>

        {/* Header */}
        <div
          className={clsx(
            'px-4 py-3 border-b flex items-center justify-between gap-3 shrink-0',
            isDark ? 'border-[#222938]' : 'border-[#E7E2D8]'
          )}
        >
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-amber-400/15 border border-amber-400/35 flex items-center justify-center text-amber-400">
              <Cpu className="w-4 h-4" />
            </div>
            <div>
              <h2 className="font-editorial text-base font-semibold leading-tight">
                AI Opponent Settings
              </h2>
              <p className="text-[11px] text-stone-400">
                Choose on-device AI (no key) or cloud/local models.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close settings"
            className="p-1.5 rounded-full text-stone-400 hover:bg-stone-500/15"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-4 overflow-y-auto space-y-4">
          <div className="space-y-2">
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
                    'w-full text-left p-3 rounded-xl border transition-all',
                    active
                      ? isDark
                        ? 'bg-amber-400/12 border-amber-400/60 text-stone-50'
                        : 'bg-amber-50 border-amber-500 text-amber-950'
                      : isDark
                        ? 'bg-[#0B0E14] border-[#222938] text-stone-300 hover:border-[#323C50]'
                        : 'bg-white border-[#E5DEC9] text-stone-700 hover:border-amber-400'
                  )}
                >
                  <div className="flex items-center justify-between gap-2 mb-0.5">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold">
                      <Icon className="w-3.5 h-3.5 text-amber-400" />
                      {card.title}
                    </span>
                    <span
                      className={clsx(
                        'px-2 py-0.5 rounded-full text-[10px] font-bold shrink-0',
                        active
                          ? 'bg-amber-500 text-stone-950'
                          : isDark
                            ? 'bg-[#1A202D] text-stone-400'
                            : 'bg-[#F3EFE6] text-stone-600'
                      )}
                    >
                      {card.badge}
                    </span>
                  </div>
                  <p className="text-[11px] text-stone-400 leading-snug">{card.subtitle}</p>
                </button>
              );
            })}
          </div>

          {/* On-Device WebLLM Settings */}
          {draft.backend === 'browser-webllm' && (
            <div
              className={clsx(
                'p-3.5 rounded-xl border space-y-3',
                isDark ? 'bg-[#0B0E14] border-[#222938]' : 'bg-white border-[#E5DEC9]'
              )}
            >
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold">
                  <HardDrive className="w-3.5 h-3.5 text-amber-400" />
                  Select On-Device Model
                </span>
                {gpuSupport && (
                  <span
                    className={clsx(
                      'inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold border',
                      gpuSupport.supported
                        ? 'bg-emerald-500/15 border-emerald-500/35 text-emerald-300'
                        : 'bg-rose-500/15 border-rose-500/35 text-rose-300'
                    )}
                  >
                    {gpuSupport.supported ? 'WebGPU Ready' : 'WebGPU Unavailable'}
                  </span>
                )}
              </div>

              {gpuSupport && !gpuSupport.supported && (
                <div className="px-3 py-2 rounded-lg bg-rose-500/15 border border-rose-500/35 text-rose-300 text-[11px] leading-snug">
                  {gpuSupport.reason}
                </div>
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
                        'w-full text-left px-3 py-2.5 rounded-xl border transition-all disabled:opacity-60',
                        selected
                          ? isDark
                            ? 'bg-amber-400/12 border-amber-400/60 text-stone-50'
                            : 'bg-amber-50 border-amber-500 text-amber-950'
                          : isDark
                            ? 'bg-[#12161F] border-[#222938] text-stone-300 hover:border-[#323C50]'
                            : 'bg-[#FAF8F4] border-[#E5DEC9] text-stone-700 hover:border-amber-400'
                      )}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-bold flex items-center gap-1.5">
                          <span>{preset.label}</span>
                          {preset.recommended && (
                            <span className="px-1.5 py-0.5 rounded text-[9.5px] font-bold bg-amber-400/20 text-amber-300">
                              Recommended
                            </span>
                          )}
                        </span>
                        <div className="flex items-center gap-1.5 shrink-0">
                          {cached && (
                            <span className="px-1.5 py-0.5 rounded-full text-[9.5px] font-bold bg-emerald-500/20 text-emerald-300">
                              Cached
                            </span>
                          )}
                          <span className="text-[10.5px] font-mono text-stone-400">
                            {preset.downloadSizeLabel}
                          </span>
                        </div>
                      </div>
                      <p className="text-[11px] text-stone-400 mt-0.5 leading-snug">
                        {preset.tagline} ({preset.vramLabel})
                      </p>
                    </button>
                  );
                })}
              </div>

              {/* Download Progress Bar */}
              {downloading && downloadProgress && (
                <div className="space-y-1.5 pt-1">
                  <div className="flex items-center justify-between text-[11px] font-medium">
                    <span className="text-amber-300 truncate pr-2">{downloadProgress.text}</span>
                    <span className="text-stone-300 font-mono shrink-0">
                      {Math.round(downloadProgress.progress * 100)}%
                    </span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-stone-800 overflow-hidden">
                    <div
                      style={{ width: `${Math.max(4, Math.round(downloadProgress.progress * 100))}%` }}
                      className="h-full bg-gradient-to-r from-amber-500 to-amber-300 transition-all duration-300"
                    />
                  </div>
                </div>
              )}

              {/* Pre-Download & Cache Controls */}
              <div className="flex items-center gap-2 pt-1 flex-wrap">
                <button
                  type="button"
                  onClick={handleDownloadAndLoad}
                  disabled={downloading || (gpuSupport !== null && !gpuSupport.supported)}
                  className={clsx(
                    'flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-colors disabled:opacity-50',
                    isSelectedLoaded
                      ? 'bg-emerald-600/20 border border-emerald-500/40 text-emerald-300'
                      : 'bg-amber-500 hover:bg-amber-400 text-stone-950'
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
                      <span>Model Loaded &amp; Ready</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-3.5 h-3.5" />
                      <span>{selectedModelCached ? 'Load Cached Model' : 'Download & Load Model'}</span>
                    </>
                  )}
                </button>

                {selectedModelCached && (
                  <button
                    type="button"
                    onClick={handleClearCache}
                    disabled={clearingCache || downloading}
                    title="Delete cached model weights from browser storage"
                    className={clsx(
                      'inline-flex items-center gap-1 px-3 py-2 rounded-xl text-xs font-semibold border transition-colors disabled:opacity-50',
                      isDark
                        ? 'bg-[#12161F] border-[#262E3E] text-stone-300 hover:text-rose-300 hover:border-rose-500/40'
                        : 'bg-[#FAF8F4] border-[#DCD4C4] text-stone-700 hover:text-rose-600'
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

              <p className="text-[10.5px] text-stone-400 leading-snug">
                Downloads once over Wi-Fi and saves in Chrome storage. You can also just tap Save and it will auto-download on your first message.
              </p>
            </div>
          )}

          {/* Gemini Settings */}
          {draft.backend === 'gemini-flash' && (
            <div
              className={clsx(
                'p-3.5 rounded-xl border space-y-3',
                isDark ? 'bg-[#0B0E14] border-[#222938]' : 'bg-white border-[#E5DEC9]'
              )}
            >
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <label className="inline-flex items-center gap-1.5 text-xs font-bold">
                  <KeyRound className="w-3.5 h-3.5 text-amber-400" />
                  Google Gemini API Key
                </label>
                <a
                  href="https://aistudio.google.com/apikey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-400 hover:underline"
                >
                  <span>Get Free Key</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <input
                type="password"
                value={draft.geminiApiKey}
                onChange={(e) => setDraft((d) => ({ ...d, geminiApiKey: e.target.value }))}
                placeholder="AIzaSy..."
                className={clsx(
                  'w-full px-3 py-2.5 rounded-xl text-xs font-mono border focus:outline-none focus:ring-2 focus:ring-amber-400/70',
                  isDark
                    ? 'bg-[#12161F] border-[#262E3E] text-stone-100'
                    : 'bg-[#FAF8F4] border-[#DCD4C4] text-stone-900'
                )}
              />
              <div>
                <label className="block text-[11px] font-semibold text-stone-400 mb-1">
                  Model
                </label>
                <input
                  type="text"
                  value={draft.geminiModel}
                  onChange={(e) => setDraft((d) => ({ ...d, geminiModel: e.target.value }))}
                  className={clsx(
                    'w-full px-3 py-2 rounded-xl text-xs font-mono border',
                    isDark
                      ? 'bg-[#12161F] border-[#262E3E] text-stone-200'
                      : 'bg-[#FAF8F4] border-[#DCD4C4] text-stone-800'
                  )}
                />
              </div>
            </div>
          )}

          {/* Local OpenAI-Compatible Server Settings */}
          {draft.backend === 'local-openai' && (
            <div
              className={clsx(
                'p-3.5 rounded-xl border space-y-3',
                isDark ? 'bg-[#0B0E14] border-[#222938]' : 'bg-white border-[#E5DEC9]'
              )}
            >
              <div>
                <label className="block text-xs font-bold mb-1">
                  OpenAI-Compatible Server URL
                </label>
                <input
                  type="url"
                  value={draft.localEndpoint}
                  onChange={(e) => setDraft((d) => ({ ...d, localEndpoint: e.target.value }))}
                  placeholder="http://192.168.1.50:11434/v1"
                  className={clsx(
                    'w-full px-3 py-2 rounded-xl text-xs font-mono border focus:outline-none focus:ring-2 focus:ring-amber-400/70',
                    isDark
                      ? 'bg-[#12161F] border-[#262E3E] text-stone-100'
                      : 'bg-[#FAF8F4] border-[#DCD4C4] text-stone-900'
                  )}
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-stone-400 mb-1">
                    Model Name
                  </label>
                  <input
                    type="text"
                    value={draft.localModel}
                    onChange={(e) => setDraft((d) => ({ ...d, localModel: e.target.value }))}
                    placeholder="gemma3:4b"
                    className={clsx(
                      'w-full px-2.5 py-2 rounded-xl text-xs font-mono border',
                      isDark
                        ? 'bg-[#12161F] border-[#262E3E] text-stone-200'
                        : 'bg-[#FAF8F4] border-[#DCD4C4] text-stone-800'
                    )}
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-stone-400 mb-1">
                    Optional Bearer Token
                  </label>
                  <input
                    type="password"
                    value={draft.localApiKey}
                    onChange={(e) => setDraft((d) => ({ ...d, localApiKey: e.target.value }))}
                    placeholder="Optional"
                    className={clsx(
                      'w-full px-2.5 py-2 rounded-xl text-xs font-mono border',
                      isDark
                        ? 'bg-[#12161F] border-[#262E3E] text-stone-200'
                        : 'bg-[#FAF8F4] border-[#DCD4C4] text-stone-800'
                    )}
                  />
                </div>
              </div>
            </div>
          )}

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
            'px-4 py-3 border-t flex items-center justify-between gap-2 shrink-0 pb-[max(0.75rem,env(safe-area-inset-bottom))]',
            isDark ? 'border-[#222938] bg-[#0B0E14]' : 'border-[#E7E2D8] bg-[#F3EFE6]'
          )}
        >
          <button
            type="button"
            onClick={handleTest}
            disabled={testing || downloading}
            className={clsx(
              'inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border transition-colors disabled:opacity-50',
              isDark
                ? 'bg-[#171C28] border-[#262E3E] text-stone-200 hover:bg-[#1E2534]'
                : 'bg-white border-[#D8D0C0] text-stone-700 hover:bg-stone-100'
            )}
          >
            {testing && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
            <span>Test</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-2 rounded-xl text-xs font-semibold text-stone-400 hover:text-stone-200"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-400 text-stone-950 shadow-sm"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
