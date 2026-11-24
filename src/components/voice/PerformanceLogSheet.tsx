import clsx from 'clsx';
import { ChevronRight, Trash2, X } from 'lucide-react';
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
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4 bg-black/60 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={clsx(
          'w-full max-w-lg max-h-[86vh] rounded-t-2xl sm:rounded-2xl border shadow-2xl flex flex-col overflow-hidden',
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
          <h2 className="text-[15px] font-semibold tracking-tight">Performance Log</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className={clsx(
              'p-1.5 rounded-lg transition-colors',
              isDark ? 'text-zinc-400 hover:bg-white/[0.06]' : 'text-zinc-500 hover:bg-zinc-100'
            )}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="px-5 py-4 overflow-y-auto space-y-5 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
          {sessions.length === 0 ? (
            <div className="py-10 text-center space-y-1.5">
              <p className="text-sm font-medium">No rounds logged yet</p>
              <p className="text-xs text-zinc-500 max-w-xs mx-auto leading-relaxed">
                Complete a sparring round to log your scores, track trends, and review how each argument landed.
              </p>
            </div>
          ) : (
            <>
              {/* Clean Hairline Career Summary */}
              <div className="space-y-3">
                <div
                  className={clsx(
                    'grid grid-cols-3 pb-4 border-b text-center',
                    isDark ? 'border-white/[0.08]' : 'border-zinc-100'
                  )}
                >
                  <div>
                    <div className="text-[11px] text-zinc-500">Rounds</div>
                    <div className="text-lg font-semibold font-mono tabular-nums mt-0.5">
                      {stats.totalRounds}
                    </div>
                  </div>
                  <div>
                    <div className="text-[11px] text-zinc-500">Avg score</div>
                    <div className="text-lg font-semibold font-mono tabular-nums mt-0.5">
                      {stats.avgStrength}
                      {stats.recentTrendDelta !== 0 && (
                        <span
                          className={clsx(
                            'ml-1 text-[11px]',
                            stats.recentTrendDelta > 0 ? 'text-emerald-500' : 'text-rose-500'
                          )}
                        >
                          {stats.recentTrendDelta > 0
                            ? `+${stats.recentTrendDelta}`
                            : stats.recentTrendDelta}
                        </span>
                      )}
                    </div>
                  </div>
                  <div>
                    <div className="text-[11px] text-zinc-500">Edge rate</div>
                    <div className="text-lg font-semibold font-mono tabular-nums mt-0.5">
                      {stats.edgeRatePct}%
                    </div>
                  </div>
                </div>

                <div className="text-xs space-y-1">
                  <div>
                    <span className="text-zinc-500">Strength: </span>
                    <span className="font-medium">{stats.topStrength}</span>
                  </div>
                  <div>
                    <span className="text-zinc-500">Focus: </span>
                    <span className="font-medium">{stats.primaryFocus}</span>
                  </div>
                </div>
              </div>

              {/* Clean Hairline List of Past Rounds */}
              <div
                className={clsx(
                  'divide-y border-t',
                  isDark
                    ? 'divide-white/[0.06] border-white/[0.08]'
                    : 'divide-zinc-100 border-zinc-100'
                )}
              >
                {sessions.map((session) => {
                  const v = verdictDisplay(session.verdict);
                  const dateStr = new Date(session.updatedAt).toLocaleDateString(undefined, {
                    month: 'short',
                    day: 'numeric',
                  });

                  return (
                    <div key={session.id} className="flex items-center gap-2 py-3">
                      <button
                        type="button"
                        onClick={() => onSelectSession(session)}
                        className="flex-1 text-left flex items-center justify-between gap-3 min-w-0 group"
                      >
                        <div className="min-w-0">
                          <div className="text-[13.5px] font-medium truncate group-hover:underline">
                            {session.topicTitle}
                          </div>
                          <div className="text-[11.5px] text-zinc-500 flex items-center gap-1.5 mt-0.5">
                            <span
                              className={
                                v.tone === 'emerald'
                                  ? 'text-emerald-500 font-medium'
                                  : v.tone === 'rose'
                                    ? 'text-rose-500 font-medium'
                                    : ''
                              }
                            >
                              {v.title}
                            </span>
                            <span>·</span>
                            <span>{session.stance.toUpperCase()}</span>
                            <span>·</span>
                            <span>{dateStr}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 shrink-0">
                          <div className="hidden xs:block w-14">
                            <MomentumSparkline
                              series={session.momentumSeries}
                              isDark={isDark}
                              height={22}
                            />
                          </div>
                          <span className="font-mono text-xs font-semibold tabular-nums">
                            {session.avgStrength}
                          </span>
                          <ChevronRight className="w-4 h-4 text-zinc-500" />
                        </div>
                      </button>

                      <button
                        type="button"
                        onClick={() => onDeleteSession(session.id)}
                        aria-label={`Delete ${session.topicTitle}`}
                        className="p-1.5 text-zinc-600 hover:text-rose-500 transition-colors shrink-0"
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
