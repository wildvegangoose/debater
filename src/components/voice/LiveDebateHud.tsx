import clsx from 'clsx';
import { ArrowUpRight } from 'lucide-react';
import { DebateNode } from '../../types/debate';
import { LiveVisualFeedback } from '../../types/voiceDebate';

interface LiveDebateHudProps {
  feedback: LiveVisualFeedback;
  nodes: DebateNode[];
  activePillarId: string | null;
  onInspectNode: (nodeId: string) => void;
  onSwitchToGraph: (nodeId?: string) => void;
  isDark: boolean;
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

  const userSharePct = Math.max(
    12,
    Math.min(88, Math.round(50 + feedback.persuasionBalance * 0.42))
  );

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
    <div className="space-y-6">
      {/* Momentum & Turn Score */}
      <div className="space-y-2.5">
        <div className="flex items-center justify-between text-xs">
          <span className="text-zinc-500 font-medium">Momentum</span>
          <span className="font-mono text-zinc-400 tabular-nums">
            Turn {feedback.argumentStrength}/100
          </span>
        </div>

        <div className="flex items-center justify-between text-[11px] font-mono tabular-nums">
          <span className="text-emerald-500">You {userSharePct}%</span>
          <span className="text-rose-500">Opp {100 - userSharePct}%</span>
        </div>

        <div
          className={clsx(
            'h-1.5 w-full rounded-full overflow-hidden flex',
            isDark ? 'bg-zinc-800' : 'bg-zinc-200'
          )}
        >
          <div
            style={{ width: `${userSharePct}%` }}
            className="h-full bg-emerald-500 transition-all duration-500"
          />
          <div
            style={{ width: `${100 - userSharePct}%` }}
            className="h-full bg-rose-500/80 transition-all duration-500"
          />
        </div>
      </div>

      {/* Coaching Note */}
      <div
        className={clsx(
          'pt-5 border-t space-y-2',
          isDark ? 'border-white/[0.08]' : 'border-zinc-100'
        )}
      >
        <div className="text-xs font-medium text-zinc-500">Coach note</div>
        <p className={clsx('text-xs leading-relaxed', isDark ? 'text-zinc-300' : 'text-zinc-700')}>
          {feedback.coachingTip}
        </p>
        {suggestedNode && (
          <button
            type="button"
            onClick={() => onInspectNode(suggestedNode.id)}
            className={clsx(
              'inline-flex items-center gap-1 text-xs font-medium underline underline-offset-2 pt-0.5',
              isDark ? 'text-zinc-200 hover:text-white' : 'text-zinc-900 hover:text-black'
            )}
          >
            <span>{suggestedNode.title}</span>
            <ArrowUpRight className="w-3 h-3" />
          </button>
        )}
      </div>

      {/* Argument Coverage List */}
      <div
        className={clsx(
          'pt-5 border-t space-y-2.5',
          isDark ? 'border-white/[0.08]' : 'border-zinc-100'
        )}
      >
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-zinc-500">
            Arguments ({totalEngagedCount} covered)
          </span>
          <button
            type="button"
            onClick={() =>
              onSwitchToGraph(feedback.engagedByAiIds[0] ?? feedback.engagedByUserIds[0])
            }
            className={clsx(
              'text-xs font-medium inline-flex items-center gap-0.5',
              isDark ? 'text-zinc-400 hover:text-zinc-100' : 'text-zinc-500 hover:text-zinc-950'
            )}
          >
            <span>Full graph</span>
            <ArrowUpRight className="w-3 h-3" />
          </button>
        </div>

        <div
          className={clsx(
            'divide-y',
            isDark ? 'divide-white/[0.06]' : 'divide-zinc-100'
          )}
        >
          {trackableNodes.map((node) => {
            const hitByUser = userSet.has(node.id);
            const hitByAi = aiSet.has(node.id);
            return (
              <button
                key={node.id}
                type="button"
                onClick={() => onInspectNode(node.id)}
                className="w-full text-left py-2.5 flex items-start gap-2.5 group"
              >
                <span
                  className={clsx(
                    'w-1.5 h-1.5 rounded-full mt-1.5 shrink-0',
                    node.kind === 'pro'
                      ? 'bg-emerald-500'
                      : node.kind === 'con'
                        ? 'bg-rose-500'
                        : 'bg-zinc-400'
                  )}
                />
                <div className="min-w-0 flex-1">
                  <div
                    className={clsx(
                      'text-xs font-medium line-clamp-1 group-hover:underline',
                      hitByUser || hitByAi
                        ? isDark
                          ? 'text-zinc-100'
                          : 'text-zinc-950'
                        : 'text-zinc-500'
                    )}
                  >
                    {node.title}
                  </div>
                  <div className="text-[11px] text-zinc-500 mt-0.5">
                    {hitByUser && hitByAi
                      ? 'Clashed'
                      : hitByUser
                        ? 'Used by you'
                        : hitByAi
                          ? 'Raised by Steelman'
                          : 'Unexplored'}
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
