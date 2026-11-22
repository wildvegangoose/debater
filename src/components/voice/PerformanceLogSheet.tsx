import clsx from 'clsx';
import {
  Award,
  ChevronRight,
  ClipboardList,
  Target,
  Trash2,
  TrendingDown,
  TrendingUp,
  X,
} from 'lucide-react';
import { DebateSessionRecord } from '../../types/voiceDebate';
import {
  computeCareerStats,
  verdictDisplay,
} from '../../services/voiceDebate/performanceAnalyzer';
import { MomentumSparkline } from './DebateScorecardModal';

interface PerformanceLogSheetProps {
  isOpen: boolean;
  onClose: () => void;
  sessions: DebateSessionRecord[];
  onSelectSession: (session: DebateSessionRecord) => void;
  onDeleteSession: (sessionId: string) => void;
  isDark: boolean;
}

export function PerformanceLogSheet({
  isOpen,
  onClose,
  sessions,
  onSelectSession,
  onDeleteSession,
  isDark,
}: PerformanceLogSheetProps) {
  if (!isOpen) return null;

  const stats = computeCareerStats(sessions);

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4 bg-black/75 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={clsx(
          'w-full max-w-xl max-h-[88vh] rounded-t-3xl sm:rounded-2xl border shadow-2xl flex flex-col overflow-hidden',
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
            'px-4 py-3 border-b flex items-center justify-between gap-2 shrink-0',
            isDark ? 'border-[#222938]' : 'border-[#E7E2D8]'
          )}
        >
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-amber-400/15 border border-amber-400/35 flex items-center justify-center text-amber-400">
              <ClipboardList className="w-4 h-4" />
            </div>
            <div>
              <h2 className="font-editorial text-base font-semibold leading-tight">
                Performance Log
              </h2>
              <p className="text-[11px] text-stone-400">
                Review how arguments landed across past rounds.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close performance log"
            className="p-1.5 rounded-full text-stone-400 hover:bg-stone-500/15"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-4 overflow-y-auto space-y-4 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
          {sessions.length === 0 ? (
            <div
              className={clsx(
                'p-6 rounded-2xl border text-center space-y-2',
                isDark ? 'bg-[#0E1219] border-[#222938]' : 'bg-white border-[#E5DEC9]'
              )}
            >
              <ClipboardList className="w-8 h-8 text-amber-400/70 mx-auto" />
              <h3 className="font-editorial text-base font-semibold">No rounds logged yet</h3>
              <p className="text-xs text-stone-400 max-w-xs mx-auto leading-relaxed">
                Send your first argument in Spar mode and Steelman will automatically log your round, score how each move landed, and build your turn-by-turn Game Tape.
              </p>
            </div>
          ) : (
            <>
              {/* Career Debater Snapshot */}
              <div
                className={clsx(
                  'p-3.5 rounded-2xl border space-y-3',
                  isDark ? 'bg-[#0B0E14] border-[#222938]' : 'bg-white border-[#E5DEC9]'
                )}
              >
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div
                    className={clsx(
                      'p-2.5 rounded-xl border',
                      isDark ? 'bg-[#12161F] border-[#222938]' : 'bg-[#FAF8F4] border-[#E7E2D8]'
                    )}
                  >
                    <div className="text-[10px] font-bold uppercase tracking-wider text-stone-400">
                      Rounds
                    </div>
                    <div className="font-mono text-lg font-extrabold mt-0.5 tabular-nums">
                      {stats.totalRounds}
                    </div>
                  </div>
                  <div
                    className={clsx(
                      'p-2.5 rounded-xl border',
                      isDark ? 'bg-[#12161F] border-[#222938]' : 'bg-[#FAF8F4] border-[#E7E2D8]'
                    )}
                  >
                    <div className="text-[10px] font-bold uppercase tracking-wider text-stone-400">
                      Avg Score
                    </div>
                    <div className="font-mono text-lg font-extrabold text-amber-400 mt-0.5 tabular-nums inline-flex items-center gap-1">
                      <span>{stats.avgStrength}</span>
                      {stats.recentTrendDelta !== 0 && (
                        <span
                          className={clsx(
                            'text-[10px] font-bold inline-flex items-center',
                            stats.recentTrendDelta > 0 ? 'text-emerald-400' : 'text-rose-400'
                          )}
                        >
                          {stats.recentTrendDelta > 0 ? (
                            <TrendingUp className="w-3 h-3" />
                          ) : (
                            <TrendingDown className="w-3 h-3" />
                          )}
                          {stats.recentTrendDelta > 0
                            ? `+${stats.recentTrendDelta}`
                            : stats.recentTrendDelta}
                        </span>
                      )}
                    </div>
                  </div>
                  <div
                    className={clsx(
                      'p-2.5 rounded-xl border',
                      isDark ? 'bg-[#12161F] border-[#222938]' : 'bg-[#FAF8F4] border-[#E7E2D8]'
                    )}
                  >
                    <div className="text-[10px] font-bold uppercase tracking-wider text-stone-400">
                      Edge Rate
                    </div>
                    <div className="font-mono text-lg font-extrabold text-emerald-400 mt-0.5 tabular-nums">
                      {stats.edgeRatePct}%
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className="flex items-start gap-2">
                    <Award className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <div className="min-w-0">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block">
                        Signature Strength
                      </span>
                      <span className="font-medium line-clamp-1">{stats.topStrength}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Target className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <div className="min-w-0">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block">
                        #1 Coaching Focus
                      </span>
                      <span className="font-medium line-clamp-2">{stats.primaryFocus}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Saved Rounds List */}
              <div className="space-y-2">
                <div className="text-[10.5px] font-bold uppercase tracking-wider text-stone-400 px-0.5">
                  Saved Rounds — Tap Any Round For Game Tape
                </div>

                {sessions.map((session) => {
                  const v = verdictDisplay(session.verdict);
                  const dateStr = new Date(session.updatedAt).toLocaleDateString(undefined, {
                    month: 'short',
                    day: 'numeric',
                  });
                  return (
                    <div
                      key={session.id}
                      className={clsx(
                        'rounded-2xl border transition-colors flex items-stretch overflow-hidden',
                        isDark
                          ? 'bg-[#0E1219] border-[#232A39] hover:border-amber-400/45'
                          : 'bg-white border-[#E5DEC9] hover:border-amber-400'
                      )}
                    >
                      <button
                        type="button"
                        onClick={() => onSelectSession(session)}
                        className="flex-1 text-left p-3 flex items-center justify-between gap-3 min-w-0"
                      >
                        <div className="min-w-0 flex-1 space-y-1">
                          <div className="flex items-center gap-1.5 flex-wrap">
                            <span
                              className={clsx(
                                'px-1.5 py-0.5 rounded text-[9.5px] font-bold uppercase tracking-wide',
                                v.tone === 'emerald'
                                  ? 'bg-emerald-500/15 text-emerald-400'
                                  : v.tone === 'rose'
                                    ? 'bg-rose-500/15 text-rose-400'
                                    : 'bg-amber-400/15 text-amber-400'
                              )}
                            >
                              {v.title}
                            </span>
                            <span className="text-[10.5px] font-mono text-stone-400">
                              {session.stance.toUpperCase()} · {session.turnCount}t · {dateStr}
                            </span>
                          </div>
                          <div className="font-editorial text-[15px] font-semibold truncate">
                            {session.topicTitle}
                          </div>
                          <div className="text-[11px] text-stone-400 truncate">
                            Focus: {session.primaryFocus}
                          </div>
                        </div>

                        <div className="flex items-center gap-2.5 shrink-0">
                          <div className="hidden xs:block w-16">
                            <MomentumSparkline
                              series={session.momentumSeries}
                              isDark={isDark}
                              height={26}
                            />
                          </div>
                          <div className="text-right">
                            <div className="font-mono text-sm font-extrabold text-amber-400 tabular-nums">
                              {session.avgStrength}
                            </div>
                            <div className="text-[9.5px] text-stone-500 font-mono">AVG</div>
                          </div>
                          <ChevronRight className="w-4 h-4 text-stone-500" />
                        </div>
                      </button>

                      <button
                        type="button"
                        onClick={() => onDeleteSession(session.id)}
                        aria-label={`Delete ${session.topicTitle} log`}
                        className={clsx(
                          'px-2.5 border-l flex items-center justify-center text-stone-500 hover:text-rose-400 transition-colors',
                          isDark ? 'border-[#232A39]' : 'border-[#E5DEC9]'
                        )}
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
