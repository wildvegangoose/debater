import { useEffect, useState } from 'react';
import clsx from 'clsx';
import {
  ChevronRight,
  Clock,
  Loader2,
  MessageSquarePlus,
  SlidersHorizontal,
} from 'lucide-react';
import { DebateGraphDataset, DebateTopicId } from '../../types/debate';
import {
  DebateSessionRecord,
  DebateUserStance,
  VoiceDebateSettings,
} from '../../types/voiceDebate';
import { TOPIC_CATALOG } from '../../data/datasets';
import { computeCareerStats } from '../../services/voiceDebate/performanceAnalyzer';
import { getWebLlmPreset, isWebLlmModelCached } from '../../services/voiceDebate/webllmEngine';

interface SparLobbyProps {
  dataset: DebateGraphDataset;
  isLoadingTopic?: boolean;
  onSwitchTopic: (topicId: DebateTopicId) => void;
  onOpenTopicPicker: () => void;
  stance: DebateUserStance;
  onChangeStance: (stance: DebateUserStance) => void;
  settings: VoiceDebateSettings;
  onOpenSettings: () => void;
  savedLogs: DebateSessionRecord[];
  onOpenPerformanceLog: () => void;
  onOpenFeedback?: () => void;
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
];

const STANCE_OPTIONS: Array<{ id: DebateUserStance; label: string }> = [
  { id: 'pro', label: 'Pro' },
  { id: 'con', label: 'Con' },
  { id: 'switch', label: 'Switch' },
];

export function SparLobby({
  dataset,
  isLoadingTopic = false,
  onSwitchTopic,
  onOpenTopicPicker,
  stance,
  onChangeStance,
  settings,
  onOpenSettings,
  savedLogs,
  onOpenPerformanceLog,
  onOpenFeedback,
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
  const featuredTopics = FEATURED_TOPIC_IDS.map((id) =>
    TOPIC_CATALOG.find((t) => t.id === id)
  ).filter((t): t is NonNullable<typeof t> => Boolean(t));

  const webLlmPreset = getWebLlmPreset(settings.webllmModel);

  const engineStatusLine = (() => {
    switch (settings.backend) {
      case 'browser-webllm':
        return webLlmCached
          ? `${webLlmPreset.label} · On-device`
          : `${webLlmPreset.label} · Downloads once on start`;
      case 'gemini-flash':
        return settings.geminiApiKey.trim().length > 10
          ? `Gemini Cloud · ${settings.geminiModel}`
          : 'Gemini selected · Add API key in Settings';
      case 'local-openai':
        return `Local server · ${settings.localModel}`;
      case 'offline-curated':
      default:
        return 'Offline templates · Switch to free on-device AI';
    }
  })();

  const startLabel =
    settings.roundLength === 'open'
      ? 'Start Debate'
      : `Start ${settings.roundLength}-Turn Debate`;

  return (
    <div
      className={clsx(
        'flex-1 flex flex-col min-h-0 overflow-hidden',
        isDark ? 'bg-[#0C0C0E] text-zinc-100' : 'bg-white text-zinc-950'
      )}
    >
      {/* Minimal Single-Row Header */}
      <div
        className={clsx(
          'px-5 h-13 flex items-center justify-between shrink-0 border-b',
          isDark ? 'border-white/[0.06]' : 'border-zinc-100'
        )}
      >
        <span className="text-[16px] font-semibold tracking-[-0.02em]">
          Steelman
        </span>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={onOpenPerformanceLog}
            aria-label="Performance history"
            className={clsx(
              'inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[13px] font-medium transition-colors',
              isDark
                ? 'text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.06]'
                : 'text-zinc-500 hover:text-zinc-950 hover:bg-zinc-100'
            )}
          >
            <Clock className="w-4 h-4" />
            <span>Log</span>
            {savedLogs.length > 0 && (
              <span
                className={clsx(
                  'text-[11px] font-mono tabular-nums',
                  isDark ? 'text-zinc-500' : 'text-zinc-400'
                )}
              >
                {savedLogs.length}
              </span>
            )}
          </button>

          {onOpenFeedback && (
            <button
              type="button"
              onClick={onOpenFeedback}
              aria-label="Send feedback"
              title="Send feedback"
              className={clsx(
                'p-2 rounded-lg transition-colors',
                isDark
                  ? 'text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.06]'
                  : 'text-zinc-500 hover:text-zinc-950 hover:bg-zinc-100'
              )}
            >
              <MessageSquarePlus className="w-4 h-4" />
            </button>
          )}

          <button
            type="button"
            onClick={onOpenSettings}
            aria-label="Settings"
            className={clsx(
              'p-2 rounded-lg transition-colors',
              isDark
                ? 'text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.06]'
                : 'text-zinc-500 hover:text-zinc-950 hover:bg-zinc-100'
            )}
          >
            <SlidersHorizontal className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Centered Canvas — Generous Whitespace, Zero Clutter */}
      <div className="flex-1 min-h-0 overflow-y-auto flex flex-col">
        <div className="w-full max-w-lg mx-auto px-5 py-8 sm:py-12 my-auto space-y-8">
          {/* Motion Section */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span
                className={clsx(
                  'text-xs font-medium',
                  isDark ? 'text-zinc-500' : 'text-zinc-400'
                )}
              >
                Motion
              </span>
              <button
                type="button"
                onClick={onOpenTopicPicker}
                className={clsx(
                  'text-xs font-medium inline-flex items-center gap-0.5 transition-colors',
                  isDark
                    ? 'text-zinc-400 hover:text-zinc-100'
                    : 'text-zinc-500 hover:text-zinc-950'
                )}
              >
                <span>All 22 topics</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="space-y-2">
              <div className="flex items-start justify-between gap-3">
                <h1 className="font-editorial text-[27px] sm:text-[32px] font-medium leading-[1.18] tracking-[-0.015em]">
                  {dataset.title}
                </h1>
                {isLoadingTopic && (
                  <Loader2 className="w-4 h-4 text-zinc-400 animate-spin shrink-0 mt-2" />
                )}
              </div>
              <p
                className={clsx(
                  'text-[13.5px] leading-relaxed line-clamp-2',
                  isDark ? 'text-zinc-400' : 'text-zinc-500'
                )}
              >
                {dataset.subtitle}
              </p>
            </div>

            {/* Quiet Quick-Switch Chips */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pt-1">
              {featuredTopics.map((topic) => {
                const active = topic.id === dataset.id;
                return (
                  <button
                    key={topic.id}
                    type="button"
                    onClick={() => onSwitchTopic(topic.id)}
                    className={clsx(
                      'px-3 py-1.5 rounded-full text-xs font-medium shrink-0 transition-colors',
                      active
                        ? isDark
                          ? 'bg-zinc-100 text-zinc-950'
                          : 'bg-zinc-950 text-white'
                        : isDark
                          ? 'bg-white/[0.05] text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.09]'
                          : 'bg-zinc-100 text-zinc-600 hover:text-zinc-950 hover:bg-zinc-200/70'
                    )}
                  >
                    {topic.shortTitle}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Side Segmented Control */}
          <div className="space-y-2">
            <span
              className={clsx(
                'block text-xs font-medium',
                isDark ? 'text-zinc-500' : 'text-zinc-400'
              )}
            >
              Your position
            </span>
            <div
              className={clsx(
                'grid grid-cols-3 p-1 rounded-xl',
                isDark ? 'bg-[#161619]' : 'bg-zinc-100'
              )}
            >
              {STANCE_OPTIONS.map((opt) => {
                const active = stance === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => onChangeStance(opt.id)}
                    className={clsx(
                      'py-2 rounded-lg text-[13px] font-medium transition-all',
                      active
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
                );
              })}
            </div>
          </div>

          {/* Primary Action + Quiet Engine Footnote */}
          <div className="space-y-3 pt-1">
            <button
              type="button"
              disabled={isLoadingTopic}
              onClick={onStartRound}
              className={clsx(
                'w-full h-12 rounded-xl text-[14.5px] font-semibold transition-all active:scale-[0.99] disabled:opacity-40',
                isDark
                  ? 'bg-white text-zinc-950 hover:bg-zinc-200'
                  : 'bg-zinc-950 text-white hover:bg-zinc-800'
              )}
            >
              {startLabel}
            </button>

            <div className="flex items-center justify-center">
              <button
                type="button"
                onClick={onOpenSettings}
                className={clsx(
                  'text-xs transition-colors inline-flex items-center gap-1',
                  isDark
                    ? 'text-zinc-500 hover:text-zinc-300'
                    : 'text-zinc-400 hover:text-zinc-700'
                )}
              >
                <span>{engineStatusLine}</span>
                <ChevronRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Subtle Performance Footnote (only when user has past rounds) */}
          {savedLogs.length > 0 && (
            <button
              type="button"
              onClick={onOpenPerformanceLog}
              className={clsx(
                'w-full pt-5 border-t flex items-center justify-between gap-3 text-left group',
                isDark ? 'border-white/[0.08]' : 'border-zinc-100'
              )}
            >
              <div className="min-w-0">
                <div className="text-[13px] font-medium tabular-nums">
                  {careerStats.totalRounds}{' '}
                  {careerStats.totalRounds === 1 ? 'round' : 'rounds'} · Avg{' '}
                  {careerStats.avgStrength}
                </div>
                <div
                  className={clsx(
                    'text-xs truncate mt-0.5',
                    isDark ? 'text-zinc-500' : 'text-zinc-400'
                  )}
                >
                  Focus: {careerStats.primaryFocus}
                </div>
              </div>
              <ChevronRight
                className={clsx(
                  'w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5',
                  isDark ? 'text-zinc-500' : 'text-zinc-400'
                )}
              />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
