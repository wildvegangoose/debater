import clsx from 'clsx';
import {
  ArrowLeftRight,
  ArrowUpRight,
  Award,
  CheckCircle2,
  Compass,
  RotateCcw,
  Sparkles,
  Trophy,
  X,
} from 'lucide-react';
import { DebateGraphDataset, DebateNode } from '../../types/debate';
import { LiveVisualFeedback, VoiceDebateTurn } from '../../types/voiceDebate';

interface DebateScorecardModalProps {
  isOpen: boolean;
  onClose: () => void;
  dataset: DebateGraphDataset;
  nodes: DebateNode[];
  turns: VoiceDebateTurn[];
  feedback: LiveVisualFeedback;
  onInspectNode: (nodeId: string) => void;
  onRematchSwitchSides: () => void;
  onNewRound: () => void;
  isDark: boolean;
}

export function DebateScorecardModal({
  isOpen,
  onClose,
  dataset,
  nodes,
  turns,
  feedback,
  onInspectNode,
  onRematchSwitchSides,
  onNewRound,
  isDark,
}: DebateScorecardModalProps) {
  if (!isOpen) return null;

  const userTurns = turns.filter((t) => t.speaker === 'user');
  const aiTurnsWithScores = turns.filter(
    (t) => t.speaker === 'ai' && typeof t.argumentStrength === 'number'
  );
  const avgStrength =
    aiTurnsWithScores.length > 0
      ? Math.round(
          aiTurnsWithScores.reduce((acc, t) => acc + (t.argumentStrength ?? 60), 0) /
            aiTurnsWithScores.length
        )
      : feedback.argumentStrength;

  const allEngagedIds = new Set([
    ...feedback.engagedByUserIds,
    ...feedback.engagedByAiIds,
  ]);
  const unexploredHighValue = nodes
    .filter((n) => (n.kind === 'pro' || n.kind === 'con') && !allEngagedIds.has(n.id))
    .slice(0, 4);

  const uniqueBadges = Array.from(
    new Map(
      turns
        .flatMap((t) => t.rhetoricBadges ?? [])
        .map((b) => [b.label, b])
    ).values()
  ).slice(0, 6);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 backdrop-blur-xs">
      <div
        className={clsx(
          'w-full max-w-lg max-h-[90vh] rounded-2xl border shadow-2xl flex flex-col overflow-hidden',
          isDark ? 'bg-slate-900 border-slate-700 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
        )}
      >
        <div
          className={clsx(
            'px-4 py-3.5 border-b flex items-center justify-between gap-3',
            isDark ? 'border-slate-800' : 'border-slate-200'
          )}
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-amber-500/20 border border-amber-400/35 flex items-center justify-center text-amber-400">
              <Trophy className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-sm font-bold">Debate Practice Debrief</h2>
              <p className="text-[11px] text-slate-400">{dataset.shortTitle}</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close debrief"
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-200"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-4 overflow-y-auto space-y-4">
          {/* Metrics Row */}
          <div className="grid grid-cols-3 gap-2.5">
            <div
              className={clsx(
                'p-3 rounded-xl border text-center',
                isDark ? 'bg-slate-950/70 border-slate-800' : 'bg-slate-50 border-slate-200'
              )}
            >
              <div className="text-[10px] uppercase tracking-wider font-semibold text-slate-400">
                Avg Strength
              </div>
              <div className="text-xl font-extrabold text-emerald-400 mt-0.5 tabular-nums">
                {avgStrength}
              </div>
            </div>
            <div
              className={clsx(
                'p-3 rounded-xl border text-center',
                isDark ? 'bg-slate-950/70 border-slate-800' : 'bg-slate-50 border-slate-200'
              )}
            >
              <div className="text-[10px] uppercase tracking-wider font-semibold text-slate-400">
                Your Turns
              </div>
              <div className="text-xl font-extrabold text-indigo-400 mt-0.5 tabular-nums">
                {userTurns.length}
              </div>
            </div>
            <div
              className={clsx(
                'p-3 rounded-xl border text-center',
                isDark ? 'bg-slate-950/70 border-slate-800' : 'bg-slate-50 border-slate-200'
              )}
            >
              <div className="text-[10px] uppercase tracking-wider font-semibold text-slate-400">
                Nodes Hit
              </div>
              <div className="text-xl font-extrabold text-sky-400 mt-0.5 tabular-nums">
                {allEngagedIds.size}
              </div>
            </div>
          </div>

          {/* Rhetoric Badges Earned */}
          {uniqueBadges.length > 0 && (
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                Rhetorical Signals Observed
              </div>
              <div className="flex flex-wrap gap-1.5">
                {uniqueBadges.map((b) => (
                  <span
                    key={b.label}
                    className={clsx(
                      'inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold border',
                      isDark
                        ? 'bg-indigo-500/15 border-indigo-400/30 text-indigo-200'
                        : 'bg-indigo-50 border-indigo-200 text-indigo-800'
                    )}
                  >
                    <Sparkles className="w-3 h-3 text-indigo-400" />
                    {b.label}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Unexplored Arguments to Study Next */}
          {unexploredHighValue.length > 0 && (
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-sky-400" />
                Unexplored Rebuttals to Prep Next
              </div>
              <div className="space-y-1.5">
                {unexploredHighValue.map((node) => (
                  <button
                    key={node.id}
                    type="button"
                    onClick={() => {
                      onInspectNode(node.id);
                      onClose();
                    }}
                    className={clsx(
                      'w-full text-left p-2.5 rounded-xl border transition-colors flex items-center justify-between gap-2',
                      isDark
                        ? 'bg-slate-950/70 border-slate-800 hover:border-indigo-500/50'
                        : 'bg-slate-50 border-slate-200 hover:border-indigo-300'
                    )}
                  >
                    <div className="min-w-0">
                      <div className="text-xs font-semibold truncate">{node.title}</div>
                      <div className="text-[11px] text-slate-400 line-clamp-1">
                        {node.summary}
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-indigo-400 shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          )}

          <div
            className={clsx(
              'p-3 rounded-xl border text-xs flex items-start gap-2',
              isDark
                ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-200'
                : 'bg-emerald-50 border-emerald-200 text-emerald-800'
            )}
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span>
              Best way to master a debate: hit <strong>Switch Sides</strong> and argue the opposite stance you just defended!
            </span>
          </div>
        </div>

        <div
          className={clsx(
            'px-4 py-3 border-t flex flex-wrap items-center justify-end gap-2',
            isDark ? 'border-slate-800 bg-slate-950/60' : 'border-slate-200 bg-slate-50'
          )}
        >
          <button
            type="button"
            onClick={() => {
              onNewRound();
              onClose();
            }}
            className={clsx(
              'inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border',
              isDark
                ? 'bg-slate-900 border-slate-700 text-slate-200 hover:bg-slate-800'
                : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-100'
            )}
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Fresh Round</span>
          </button>
          <button
            type="button"
            onClick={() => {
              onRematchSwitchSides();
              onClose();
            }}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white shadow-sm"
          >
            <ArrowLeftRight className="w-3.5 h-3.5" />
            <span>Switch Sides &amp; Rematch</span>
          </button>
        </div>
      </div>
    </div>
  );
}
