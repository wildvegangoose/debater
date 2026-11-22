import clsx from 'clsx';
import {
  AlertTriangle,
  ArrowUpRight,
  CheckCircle2,
  Compass,
  Lightbulb,
  Scale,
  ShieldCheck,
  Sparkles,
  Zap,
} from 'lucide-react';
import { DebateNode } from '../../types/debate';
import {
  DebateRoundPhase,
  LiveVisualFeedback,
  RhetoricBadge,
} from '../../types/voiceDebate';

interface LiveDebateHudProps {
  feedback: LiveVisualFeedback;
  nodes: DebateNode[];
  activePillarId: string | null;
  onInspectNode: (nodeId: string) => void;
  onSwitchToGraph: (nodeId?: string) => void;
  isDark: boolean;
}

const PHASES: Array<{ id: DebateRoundPhase; label: string }> = [
  { id: 'opening', label: 'Opening' },
  { id: 'sparring', label: 'Sparring' },
  { id: 'cross-exam', label: 'Cross-Exam' },
  { id: 'closing', label: 'Closing' },
];

function badgeVisual(badge: RhetoricBadge, isDark: boolean) {
  switch (badge.type) {
    case 'steelman':
    case 'concession':
    case 'evidence':
      return {
        icon: badge.type === 'evidence' ? CheckCircle2 : ShieldCheck,
        classes: isDark
          ? 'bg-emerald-500/15 border-emerald-500/35 text-emerald-300'
          : 'bg-emerald-50 border-emerald-200 text-emerald-800',
      };
    case 'rebuttal':
      return {
        icon: Zap,
        classes: isDark
          ? 'bg-amber-400/15 border-amber-400/35 text-amber-300'
          : 'bg-amber-50 border-amber-300 text-amber-800',
      };
    case 'fallacy':
      return {
        icon: AlertTriangle,
        classes: isDark
          ? 'bg-rose-500/15 border-rose-500/35 text-rose-300'
          : 'bg-rose-50 border-rose-200 text-rose-800',
      };
    case 'clarity':
    default:
      return {
        icon: Sparkles,
        classes: isDark
          ? 'bg-stone-700/40 border-stone-600 text-stone-200'
          : 'bg-stone-100 border-stone-300 text-stone-700',
      };
  }
}

export function LiveDebateHud({
  feedback,
  nodes,
  activePillarId,
  onInspectNode,
  onSwitchToGraph,
  isDark,
}: LiveDebateHudProps) {
  const nodeMap = new Map(nodes.map((n) => [n.id, n]));
  const userSet = new Set(feedback.engagedByUserIds);
  const aiSet = new Set(feedback.engagedByAiIds);

  const userSharePct = Math.max(12, Math.min(88, Math.round(50 + feedback.persuasionBalance * 0.42)));

  const trackableNodes = nodes
    .filter((n) => {
      if (n.kind !== 'pro' && n.kind !== 'con' && n.kind !== 'thesis') return false;
      if (!activePillarId) return true;
      let cur: DebateNode | undefined = n;
      const seen = new Set<string>();
      while (cur && !seen.has(cur.id)) {
        seen.add(cur.id);
        if (cur.id === activePillarId) return true;
        cur = cur.parentId ? nodeMap.get(cur.parentId) : undefined;
      }
      return false;
    })
    .sort((a, b) => {
      const aEngaged = userSet.has(a.id) || aiSet.has(a.id) ? 1 : 0;
      const bEngaged = userSet.has(b.id) || aiSet.has(b.id) ? 1 : 0;
      return bEngaged - aEngaged;
    })
    .slice(0, 10);

  const totalEngagedCount = new Set([
    ...feedback.engagedByUserIds,
    ...feedback.engagedByAiIds,
  ]).size;

  const suggestedNode = feedback.suggestedNodeId
    ? nodeMap.get(feedback.suggestedNodeId) ?? null
    : null;

  return (
    <div className="flex flex-col gap-3">
      {/* 1. Round Phase & Momentum Gauge */}
      <div
        className={clsx(
          'rounded-2xl border p-3.5 transition-colors',
          isDark ? 'bg-[#12161F] border-[#232A39]' : 'bg-white border-[#E5DEC9] shadow-xs'
        )}
      >
        <div className="flex items-center justify-between gap-2 mb-2.5 flex-wrap">
          <div className="flex items-center gap-1.5">
            <Scale className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400">
              Floor Momentum
            </span>
          </div>
          <div className="flex items-center gap-1">
            {PHASES.map((phase) => (
              <span
                key={phase.id}
                className={clsx(
                  'px-2 py-0.5 rounded-md text-[10px] font-semibold transition-colors',
                  feedback.roundPhase === phase.id
                    ? 'bg-amber-500 text-stone-950 font-bold'
                    : isDark
                      ? 'bg-[#1A202D] text-stone-400'
                      : 'bg-[#F3EFE6] text-stone-500'
                )}
              >
                {phase.label}
              </span>
            ))}
          </div>
        </div>

        {/* Tug-of-war persuasion bar */}
        <div className="flex items-center justify-between text-[11px] font-semibold font-mono mb-1.5">
          <span className="text-emerald-400">
            Your Edge ({userSharePct}%)
            {feedback.lastTurnDelta > 0 && (
              <span className="ml-1 text-[10px] font-bold text-emerald-300">
                +{feedback.lastTurnDelta}
              </span>
            )}
          </span>
          <span className="text-rose-400">
            {feedback.lastTurnDelta < 0 && (
              <span className="mr-1 text-[10px] font-bold text-rose-300">
                {feedback.lastTurnDelta}
              </span>
            )}
            Opponent ({100 - userSharePct}%)
          </span>
        </div>
        <div
          className={clsx(
            'h-2.5 w-full rounded-full overflow-hidden flex',
            isDark ? 'bg-[#1D2432]' : 'bg-stone-200'
          )}
        >
          <div
            style={{ width: `${userSharePct}%` }}
            className="h-full bg-emerald-500 transition-all duration-500"
          />
          <div
            style={{ width: `${100 - userSharePct}%` }}
            className="h-full bg-rose-500/85 transition-all duration-500"
          />
        </div>

        {/* Last Turn Strength + Rhetoric Signals */}
        <div
          className={clsx(
            'mt-3 pt-3 border-t flex flex-wrap items-center gap-2.5',
            isDark ? 'border-[#222938]' : 'border-[#EFE9DD]'
          )}
        >
          <div
            className={clsx(
              'flex items-center gap-2 px-2.5 py-1.5 rounded-xl border shrink-0',
              isDark ? 'bg-[#0B0E14] border-[#232A39]' : 'bg-[#FAF8F4] border-[#E5DEC9]'
            )}
          >
            <div className="text-[10px] uppercase tracking-wider font-semibold text-stone-400">
              Turn Score
            </div>
            <div
              className={clsx(
                'text-sm font-extrabold font-mono tabular-nums',
                feedback.argumentStrength >= 75
                  ? 'text-emerald-400'
                  : feedback.argumentStrength >= 55
                    ? 'text-amber-400'
                    : 'text-rose-400'
              )}
            >
              {feedback.argumentStrength}
              <span className="text-[10px] opacity-60 font-medium">/100</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 flex-1 min-w-0">
            {feedback.latestBadges.map((badge, idx) => {
              const { icon: Icon, classes } = badgeVisual(badge, isDark);
              return (
                <div
                  key={`${badge.label}-${idx}`}
                  title={badge.detail}
                  className={clsx(
                    'inline-flex items-center gap-1 px-2 py-1 rounded-lg text-[11px] font-semibold border',
                    classes
                  )}
                >
                  <Icon className="w-3 h-3 shrink-0" />
                  <span>{badge.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 2. Live Coaching Hint & Suggested Evidence Card */}
      <div
        className={clsx(
          'rounded-2xl border p-3.5 transition-colors',
          isDark
            ? 'bg-amber-400/[0.06] border-amber-400/25'
            : 'bg-amber-50/75 border-amber-200'
        )}
      >
        <div className="flex items-start gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-amber-400/15 border border-amber-400/30 flex items-center justify-center shrink-0 mt-0.5">
            <Lightbulb className="w-4 h-4 text-amber-400" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-[11px] font-bold uppercase tracking-wider text-amber-400 mb-0.5">
              Rhetoric Coach
            </div>
            <p
              className={clsx(
                'text-xs leading-relaxed',
                isDark ? 'text-stone-200' : 'text-stone-700'
              )}
            >
              {feedback.coachingTip}
            </p>

            {suggestedNode && (
              <div className="mt-2 flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => onInspectNode(suggestedNode.id)}
                  className={clsx(
                    'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-semibold border transition-colors',
                    isDark
                      ? 'bg-[#0E1219] border-amber-400/35 text-amber-200 hover:bg-[#171C28]'
                      : 'bg-white border-amber-300 text-amber-900 hover:bg-amber-50'
                  )}
                >
                  <span>Inspect Evidence: {suggestedNode.title}</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 3. Interactive Live Argument Coverage Tracker */}
      <div
        className={clsx(
          'rounded-2xl border p-3.5 transition-colors',
          isDark ? 'bg-[#12161F] border-[#232A39]' : 'bg-white border-[#E5DEC9] shadow-xs'
        )}
      >
        <div className="flex items-center justify-between gap-2 mb-2.5">
          <div className="flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400">
              Argument Map ({totalEngagedCount} engaged)
            </span>
          </div>
          <button
            type="button"
            onClick={() => onSwitchToGraph(feedback.engagedByAiIds[0] ?? feedback.engagedByUserIds[0])}
            className="text-[11px] font-semibold text-amber-400 hover:text-amber-300 inline-flex items-center gap-0.5"
          >
            <span>Open Full Graph</span>
            <ArrowUpRight className="w-3 h-3" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
          {trackableNodes.map((node) => {
            const hitByUser = userSet.has(node.id);
            const hitByAi = aiSet.has(node.id);
            const isActive = hitByUser || hitByAi;

            return (
              <button
                key={node.id}
                type="button"
                onClick={() => onInspectNode(node.id)}
                className={clsx(
                  'text-left px-2.5 py-2 rounded-xl border transition-all flex items-start gap-2',
                  hitByUser && hitByAi
                    ? isDark
                      ? 'bg-amber-400/12 border-amber-400/45 text-amber-100'
                      : 'bg-amber-50 border-amber-300 text-amber-950'
                    : hitByUser
                      ? isDark
                        ? 'bg-emerald-500/12 border-emerald-400/45 text-emerald-100'
                        : 'bg-emerald-50 border-emerald-300 text-emerald-900'
                      : hitByAi
                        ? isDark
                          ? 'bg-rose-500/12 border-rose-400/40 text-rose-100'
                          : 'bg-rose-50 border-rose-300 text-rose-900'
                        : isDark
                          ? 'bg-[#0B0E14] border-[#222938] text-stone-400 hover:border-stone-600 hover:text-stone-200'
                          : 'bg-[#FAF8F4] border-[#E5DEC9] text-stone-600 hover:border-amber-400 hover:text-stone-900'
                )}
              >
                <span
                  className={clsx(
                    'w-2 h-2 rounded-full mt-1 shrink-0',
                    node.kind === 'pro'
                      ? 'bg-emerald-400'
                      : node.kind === 'con'
                        ? 'bg-rose-400'
                        : 'bg-amber-400',
                    isActive && 'ring-2 ring-offset-1 ring-offset-[#0B0E14] ring-amber-400/70'
                  )}
                />
                <div className="min-w-0 flex-1">
                  <div className="text-[11.5px] font-semibold line-clamp-1">{node.title}</div>
                  <div className="flex items-center gap-1.5 mt-0.5 text-[10px] opacity-80">
                    <span className="uppercase font-bold">
                      {node.kind === 'pro' ? '+ Pro' : node.kind === 'con' ? '− Con' : 'Thesis'}
                    </span>
                    {hitByUser && <span className="text-emerald-400 font-semibold">· You</span>}
                    {hitByAi && <span className="text-rose-400 font-semibold">· Opp</span>}
                    {!isActive && <span>· Unexplored</span>}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
