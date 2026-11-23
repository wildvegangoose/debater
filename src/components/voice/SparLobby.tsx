import { useEffect, useState } from 'react';
import clsx from 'clsx';
import {
  ArrowRight,
  ChevronRight,
  ClipboardList,
  Compass,
  Cpu,
  Loader2,
  Scale,
  Server,
  Sparkles,
  WifiOff,
} from 'lucide-react';
import { DebateGraphDataset, DebateNode, DebateTopicId } from '../../types/debate';
import {
  DebateOpponentPersona,
  DebateSessionRecord,
  DebateUserStance,
  VoiceDebateSettings,
} from '../../types/voiceDebate';
import { TOPIC_CATALOG } from '../../data/datasets';
import { computeCareerStats } from '../../services/voiceDebate/performanceAnalyzer';
import { getWebLlmPreset, isWebLlmModelCached } from '../../services/voiceDebate/webllmEngine';

export type DebateRoundLength = 3 | 5 | 'open';

interface SparLobbyProps {
  dataset: DebateGraphDataset;
  nodes: DebateNode[];
  isLoadingTopic?: boolean;
  onSwitchTopic: (topicId: DebateTopicId) => void;
  onOpenTopicPicker: () => void;
  stance: DebateUserStance;
  onChangeStance: (stance: DebateUserStance) => void;
  persona: DebateOpponentPersona;
  onChangePersona: (persona: DebateOpponentPersona) => void;
  roundLength: DebateRoundLength;
  onChangeRoundLength: (len: DebateRoundLength) => void;
  settings: VoiceDebateSettings;
  onOpenSettings: () => void;
  savedLogs: DebateSessionRecord[];
  onOpenPerformanceLog: () => void;
  onStartRound: () => void;
  isDark: boolean;
}

const FEATURED_TOPIC_IDS: DebateTopicId[] = [
  'ai-risk',
  'universal-basic-income',
  'nuclear-energy',
  'social-media-censorship',
  'capitalism-socialism',
  'israel-palestine',
  'economic-policies',
];

const STANCE_CHOICES: Array<{
  id: DebateUserStance;
  label: string;
  hint: string;
}> = [
  { id: 'pro', label: 'Argue Pro', hint: 'Defend thesis' },
  { id: 'con', label: 'Argue Con', hint: 'Challenge it' },
  { id: 'switch', label: 'Switch Sides', hint: 'Steelman both' },
];

const ROUND_LENGTH_CHOICES: Array<{ id: DebateRoundLength; label: string }> = [
  { id: 3, label: '3 Turns' },
  { id: 5, label: '5 Turns' },
  { id: 'open', label: 'Open' },
];

const PERSONA_CHOICES: Array<{ id: DebateOpponentPersona; label: string }> = [
  { id: 'sparring', label: 'Partner' },
  { id: 'oxford', label: 'Oxford' },
  { id: 'socratic', label: 'Socratic' },
];

export function SparLobby({
  dataset,
  nodes,
  isLoadingTopic = false,
  onSwitchTopic,
  onOpenTopicPicker,
  stance,
  onChangeStance,
  persona,
  onChangePersona,
  roundLength,
  onChangeRoundLength,
  settings,
  onOpenSettings,
  savedLogs,
  onOpenPerformanceLog,
  onStartRound,
  isDark,
}: SparLobbyProps) {
  const [webLlmCached, setWebLlmCached] = useState<boolean | null>(null);

  useEffect(() => {
    if (settings.backend !== 'browser-webllm') {
      setWebLlmCached(null);
      return;
    }
    let cancelled = false;
    void isWebLlmModelCached(settings.webllmModel).then((cached) => {
      if (!cancelled) setWebLlmCached(cached);
    });
    return () => {
      cancelled = true;
    };
  }, [settings.backend, settings.webllmModel]);

  const careerStats = computeCareerStats(savedLogs);
  const activeCatalogMeta = TOPIC_CATALOG.find((t) => t.id === dataset.id);
  const featuredTopics = FEATURED_TOPIC_IDS.map((id) =>
    TOPIC_CATALOG.find((t) => t.id === id)
  ).filter((t): t is NonNullable<typeof t> => Boolean(t));

  const webLlmPreset = getWebLlmPreset(settings.webllmModel);

  const engineInfo = (() => {
    switch (settings.backend) {
      case 'browser-webllm':
        return {
          icon: Cpu,
          title: `On-Device AI · ${webLlmPreset.label}`,
          subtitle:
            webLlmCached === true
              ? 'Cached locally on your device · Works offline'
              : `No API key needed · Downloads once (${webLlmPreset.downloadSizeLabel})`,
          pill: webLlmCached === true ? 'Ready' : 'No Key',
          pillTone: 'emerald' as const,
        };
      case 'gemini-flash':
        return {
          icon: Sparkles,
          title: 'Gemini Cloud AI',
          subtitle:
            settings.geminiApiKey.trim().length > 10
              ? `Connected (${settings.geminiModel})`
              : 'Free key required — tap Change to paste your key',
          pill: settings.geminiApiKey.trim().length > 10 ? 'Ready' : 'Setup',
          pillTone: settings.geminiApiKey.trim().length > 10 ? ('emerald' as const) : ('amber' as const),
        };
      case 'local-openai':
        return {
          icon: Server,
          title: `Local Server · ${settings.localModel || 'Custom'}`,
          subtitle: settings.localEndpoint,
          pill: 'LAN',
          pillTone: 'amber' as const,
        };
      case 'offline-curated':
      default:
        return {
          icon: WifiOff,
          title: 'Instant Offline Templates',
          subtitle: 'Basic curated replies — upgrade to Free On-Device AI for real sparring.',
          pill: 'Basic',
          pillTone: 'muted' as const,
        };
    }
  })();

  const EngineIcon = engineInfo.icon;

  const ctaLabel =
    roundLength === 'open'
      ? 'Take the Floor · Open Spar'
      : `Take the Floor · ${roundLength}-Turn Round`;

  return (
    <div
      className={clsx(
        'flex-1 flex flex-col min-h-0 overflow-hidden',
        isDark ? 'bg-[#0B0E14] text-stone-100' : 'bg-[#FAF8F4] text-stone-900'
      )}
    >
      {/* Scrollable Guided Setup Canvas */}
      <div className="flex-1 min-h-0 overflow-y-auto">
        <div className="max-w-xl mx-auto px-4 sm:px-6 py-5 sm:py-7 space-y-5">
          {/* Editorial Intro OR Debater Record Pulse */}
          {savedLogs.length > 0 ? (
            <button
              type="button"
              onClick={onOpenPerformanceLog}
              className={clsx(
                'w-full text-left p-3.5 rounded-2xl border transition-all flex items-center justify-between gap-3 group',
                isDark
                  ? 'bg-[#12161F] border-[#262E3E] hover:border-amber-400/50'
                  : 'bg-white border-[#E5DEC9] hover:border-amber-500 shadow-xs'
              )}
            >
              <div className="flex items-start gap-3 min-w-0">
                <div className="w-9 h-9 rounded-xl bg-amber-400/15 border border-amber-400/35 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                  <ClipboardList className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400">
                      Performance Log
                    </span>
                    <span className="font-mono text-[11px] font-semibold text-stone-300">
                      {careerStats.totalRounds}{' '}
                      {careerStats.totalRounds === 1 ? 'round' : 'rounds'} · Avg{' '}
                      {careerStats.avgStrength} · {careerStats.edgeRatePct}% edge
                    </span>
                  </div>
                  <p className="text-xs text-stone-400 mt-0.5 line-clamp-1">
                    Focus: {careerStats.primaryFocus}
                  </p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-stone-500 group-hover:text-amber-400 transition-colors shrink-0" />
            </button>
          ) : (
            <div className="space-y-1.5 pt-1">
              <div className="inline-flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-[0.16em] text-amber-400">
                <Scale className="w-3.5 h-3.5" />
                <span>Steelman · Sparring Chamber</span>
              </div>
              <h1 className="font-editorial text-[24px] sm:text-[28px] font-semibold leading-tight tracking-tight">
                Test your best case against the strongest counter.
              </h1>
              <p className="text-xs sm:text-[13px] text-stone-400 leading-relaxed">
                Pick a motion, argue a short structured round, and review turn-by-turn Game Tape on how each point landed.
              </p>
            </div>
          )}

          {/* STEP 01: CHOOSE A MOTION */}
          <section className="space-y-2.5">
            <div className="flex items-center justify-between gap-2">
              <span className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-stone-400">
                01 · Choose Motion
              </span>
              <button
                type="button"
                onClick={onOpenTopicPicker}
                className="inline-flex items-center gap-1 text-[11.5px] font-semibold text-amber-400 hover:text-amber-300 transition-colors"
              >
                <Compass className="w-3.5 h-3.5" />
                <span>Browse all 22</span>
              </button>
            </div>

            {/* Active Motion Editorial Card */}
            <div
              className={clsx(
                'p-4 rounded-2xl border space-y-2 transition-colors relative',
                isDark
                  ? 'bg-[#12161F] border-[#262E3E]'
                  : 'bg-white border-[#E5DEC9] shadow-xs'
              )}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  {activeCatalogMeta?.category && (
                    <div className="text-[10px] font-bold uppercase tracking-wider text-amber-400/90 mb-0.5">
                      {activeCatalogMeta.category}
                    </div>
                  )}
                  <h2 className="font-editorial text-lg sm:text-xl font-semibold leading-snug">
                    {dataset.title}
                  </h2>
                </div>
                {isLoadingTopic && (
                  <Loader2 className="w-4 h-4 text-amber-400 animate-spin shrink-0 mt-1" />
                )}
              </div>

              <p className="text-xs text-stone-400 leading-relaxed line-clamp-2">
                {dataset.subtitle}
              </p>

              <div className="flex items-center justify-between gap-2 pt-1 text-[11px] text-stone-400">
                <span className="font-mono">
                  {nodes.length} sourced argument nodes
                </span>
                <button
                  type="button"
                  onClick={onOpenTopicPicker}
                  className="font-semibold text-amber-400 hover:underline"
                >
                  Switch motion
                </button>
              </div>
            </div>

            {/* Quick-Pick Featured Motion Chips */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-0.5">
              {featuredTopics.map((topic) => {
                const isSelected = topic.id === dataset.id;
                return (
                  <button
                    key={topic.id}
                    type="button"
                    onClick={() => onSwitchTopic(topic.id)}
                    className={clsx(
                      'px-3 py-1.5 rounded-full text-[11.5px] font-semibold border shrink-0 transition-all',
                      isSelected
                        ? isDark
                          ? 'bg-amber-400/18 border-amber-400/60 text-amber-200'
                          : 'bg-[#181B22] border-[#181B22] text-amber-300'
                        : isDark
                          ? 'bg-[#12161F] border-[#222938] text-stone-400 hover:text-stone-200 hover:border-[#323C50]'
                          : 'bg-white border-[#E5DEC9] text-stone-600 hover:border-amber-400'
                    )}
                  >
                    {topic.shortTitle}
                  </button>
                );
              })}
            </div>
          </section>

          {/* STEP 02: SIDE & FORMAT */}
          <section className="space-y-2.5">
            <span className="block text-[10.5px] font-bold uppercase tracking-[0.14em] text-stone-400">
              02 · Your Side &amp; Format
            </span>

            {/* 3-Choice Side Selector */}
            <div className="grid grid-cols-3 gap-2">
              {STANCE_CHOICES.map((opt) => {
                const active = stance === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => onChangeStance(opt.id)}
                    className={clsx(
                      'px-2.5 py-2.5 rounded-xl border text-left transition-all',
                      active
                        ? opt.id === 'pro'
                          ? isDark
                            ? 'bg-emerald-500/15 border-emerald-400/65 text-emerald-200'
                            : 'bg-emerald-50 border-emerald-500 text-emerald-950'
                          : opt.id === 'con'
                            ? isDark
                              ? 'bg-rose-500/15 border-rose-400/65 text-rose-200'
                              : 'bg-rose-50 border-rose-500 text-rose-950'
                            : isDark
                              ? 'bg-amber-400/15 border-amber-400/65 text-amber-200'
                              : 'bg-amber-50 border-amber-500 text-amber-950'
                        : isDark
                          ? 'bg-[#12161F] border-[#222938] text-stone-300 hover:border-[#323C50]'
                          : 'bg-white border-[#E5DEC9] text-stone-700 hover:border-amber-400'
                    )}
                  >
                    <div className="text-xs font-bold leading-tight">{opt.label}</div>
                    <div className="text-[10.5px] opacity-75 mt-0.5 leading-tight">{opt.hint}</div>
                  </button>
                );
              })}
            </div>

            {/* Compact Round Length & Opponent Style Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <div
                className={clsx(
                  'p-2.5 rounded-xl border space-y-1.5',
                  isDark ? 'bg-[#12161F] border-[#222938]' : 'bg-white border-[#E5DEC9]'
                )}
              >
                <span className="block text-[10px] font-bold uppercase tracking-wider text-stone-400 px-0.5">
                  Round Length
                </span>
                <div className="grid grid-cols-3 gap-1">
                  {ROUND_LENGTH_CHOICES.map((opt) => (
                    <button
                      key={String(opt.id)}
                      type="button"
                      onClick={() => onChangeRoundLength(opt.id)}
                      className={clsx(
                        'py-1.5 rounded-lg text-[11px] font-bold transition-colors',
                        roundLength === opt.id
                          ? isDark
                            ? 'bg-amber-500 text-stone-950'
                            : 'bg-[#181B22] text-amber-300'
                          : isDark
                            ? 'bg-[#0B0E14] text-stone-400 hover:text-stone-200'
                            : 'bg-[#F5F1E8] text-stone-600 hover:text-stone-900'
                      )}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              <div
                className={clsx(
                  'p-2.5 rounded-xl border space-y-1.5',
                  isDark ? 'bg-[#12161F] border-[#222938]' : 'bg-white border-[#E5DEC9]'
                )}
              >
                <span className="block text-[10px] font-bold uppercase tracking-wider text-stone-400 px-0.5">
                  Opponent Style
                </span>
                <div className="grid grid-cols-3 gap-1">
                  {PERSONA_CHOICES.map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => onChangePersona(opt.id)}
                      className={clsx(
                        'py-1.5 rounded-lg text-[11px] font-bold transition-colors',
                        persona === opt.id
                          ? isDark
                            ? 'bg-amber-500 text-stone-950'
                            : 'bg-[#181B22] text-amber-300'
                          : isDark
                            ? 'bg-[#0B0E14] text-stone-400 hover:text-stone-200'
                            : 'bg-[#F5F1E8] text-stone-600 hover:text-stone-900'
                      )}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* STEP 03: AI ENGINE */}
          <section className="space-y-2">
            <span className="block text-[10.5px] font-bold uppercase tracking-[0.14em] text-stone-400">
              03 · AI Opponent
            </span>

            <button
              type="button"
              onClick={onOpenSettings}
              className={clsx(
                'w-full text-left p-3.5 rounded-2xl border transition-all flex items-center justify-between gap-3 group',
                settings.backend === 'offline-curated'
                  ? isDark
                    ? 'bg-amber-400/[0.06] border-amber-400/35 hover:border-amber-400/65'
                    : 'bg-amber-50/70 border-amber-300 hover:border-amber-500'
                  : isDark
                    ? 'bg-[#12161F] border-[#222938] hover:border-amber-400/45'
                    : 'bg-white border-[#E5DEC9] hover:border-amber-400'
              )}
            >
              <div className="flex items-start gap-2.5 min-w-0">
                <div
                  className={clsx(
                    'w-8 h-8 rounded-xl border flex items-center justify-center shrink-0 mt-0.5',
                    isDark
                      ? 'bg-[#0B0E14] border-[#262E3E] text-amber-400'
                      : 'bg-[#FAF8F4] border-[#E5DEC9] text-amber-700'
                  )}
                >
                  <EngineIcon className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="text-xs font-bold">{engineInfo.title}</span>
                    <span
                      className={clsx(
                        'px-1.5 py-0.5 rounded-full text-[9.5px] font-bold',
                        engineInfo.pillTone === 'emerald'
                          ? 'bg-emerald-500/15 text-emerald-400'
                          : engineInfo.pillTone === 'amber'
                            ? 'bg-amber-400/15 text-amber-400'
                            : 'bg-stone-500/20 text-stone-400'
                      )}
                    >
                      {engineInfo.pill}
                    </span>
                  </div>
                  <p className="text-[11px] text-stone-400 mt-0.5 leading-snug">
                    {engineInfo.subtitle}
                  </p>
                </div>
              </div>
              <span className="text-[11.5px] font-bold text-amber-400 shrink-0 group-hover:underline">
                Change
              </span>
            </button>
          </section>
        </div>
      </div>

      {/* Calm Sticky Primary CTA Bar */}
      <div
        className={clsx(
          'px-4 py-3 border-t shrink-0',
          isDark ? 'bg-[#0E1219]/95 border-[#222938]' : 'bg-white/95 border-[#E7E2D8]'
        )}
      >
        <div className="max-w-xl mx-auto space-y-1.5">
          <button
            type="button"
            disabled={isLoadingTopic}
            onClick={onStartRound}
            className="w-full py-3.5 px-5 rounded-2xl bg-amber-500 hover:bg-amber-400 active:scale-[0.99] disabled:opacity-50 text-stone-950 font-bold text-sm shadow-md shadow-amber-500/15 transition-all flex items-center justify-center gap-2"
          >
            <span>{ctaLabel}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          {savedLogs.length === 0 && (
            <p className="text-center text-[10.5px] text-stone-400">
              Dictate with your keyboard mic or type — Steelman scores every turn automatically.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
