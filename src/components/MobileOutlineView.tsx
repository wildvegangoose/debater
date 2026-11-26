import { useMemo, useState } from 'react';
import clsx from 'clsx';
import {
  ArrowDownRight,
  BookOpen,
  ChevronDown,
  ChevronRight,
  ExternalLink,
  MapPin,
  MinusCircle,
  PlusCircle,
} from 'lucide-react';
import { DebateGraphDataset, DebateNode, DebateTag } from '../types/debate';

interface MobileOutlineViewProps {
  dataset: DebateGraphDataset;
  nodes: DebateNode[];
  activePillarId: string | null;
  onSelectPillar: (pillarId: string | null) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  activeTag: DebateTag | null;
  onSelectTag: (tag: DebateTag | null) => void;
  onInspectNode: (nodeId: string) => void;
  onSwitchToGraph: (nodeId?: string) => void;
  isDark: boolean;
}

export function MobileOutlineView({
  dataset,
  nodes,
  activePillarId,
  onSelectPillar,
  searchQuery,
  onSearchChange,
  activeTag,
  onSelectTag,
  onInspectNode,
  onSwitchToGraph,
  isDark,
}: MobileOutlineViewProps) {
  const [expandedTheses, setExpandedTheses] = useState<Set<string>>(() => {
    // Expand the first 3 theses by default for immediate engagement
    const theses = nodes.filter((n) => n.kind === 'thesis');
    return new Set(theses.slice(0, 3).map((t) => t.id));
  });

  const [expandedDetails, setExpandedDetails] = useState<Set<string>>(new Set());
  const [activeSideFilter, setActiveSideFilter] = useState<'all' | 'pro' | 'con'>('all');

  const pillars = useMemo(() => nodes.filter((n) => n.kind === 'pillar'), [nodes]);

  const toggleThesis = (thesisId: string) => {
    setExpandedTheses((prev) => {
      const next = new Set(prev);
      if (next.has(thesisId)) {
        next.delete(thesisId);
      } else {
        next.add(thesisId);
      }
      return next;
    });
  };

  const toggleDetails = (nodeId: string) => {
    setExpandedDetails((prev) => {
      const next = new Set(prev);
      if (next.has(nodeId)) {
        next.delete(nodeId);
      } else {
        next.add(nodeId);
      }
      return next;
    });
  };

  // Group nodes by parent ID
  const childrenMap = useMemo(() => {
    const map = new Map<string, DebateNode[]>();
    for (const node of nodes) {
      if (node.parentId) {
        const arr = map.get(node.parentId) ?? [];
        arr.push(node);
        map.set(node.parentId, arr);
      }
    }
    return map;
  }, [nodes]);

  // Filter logic based on query, tag, and active pillar
  const trimmedQuery = searchQuery.trim().toLowerCase();

  const isNodeMatching = (n: DebateNode): boolean => {
    if (activeTag && !n.tags.includes(activeTag)) return false;
    if (!trimmedQuery) return true;

    return (
      n.title.toLowerCase().includes(trimmedQuery) ||
      n.summary.toLowerCase().includes(trimmedQuery) ||
      n.details.some((d) => d.toLowerCase().includes(trimmedQuery)) ||
      (n.sources ?? []).some((s) => s.title.toLowerCase().includes(trimmedQuery) || (s.publisher ?? '').toLowerCase().includes(trimmedQuery))
    );
  };

  const visiblePillars = useMemo(() => {
    if (activePillarId) {
      return pillars.filter((p) => p.id === activePillarId);
    }
    return pillars;
  }, [pillars, activePillarId]);

  return (
    <div
      className={clsx(
        'flex-1 flex flex-col h-full overflow-hidden transition-colors',
        isDark ? 'bg-[#0C0C0E] text-zinc-100' : 'bg-white text-zinc-950'
      )}
    >
      {/* Top Mobile Pillar Scrollbar */}
      <div
        className={clsx(
          'px-3 py-2.5 border-b shrink-0 overflow-x-auto flex items-center gap-1.5 no-scrollbar',
          isDark ? 'bg-[#0C0C0E] border-white/[0.08]' : 'bg-white border-zinc-100'
        )}
      >
        <button
          type="button"
          onClick={() => onSelectPillar(null)}
          className={clsx(
            'px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all shrink-0',
            activePillarId === null
              ? isDark
                ? 'bg-white text-zinc-950'
                : 'bg-zinc-950 text-white'
              : isDark
                ? 'bg-white/[0.05] text-zinc-400 hover:text-zinc-200'
                : 'bg-zinc-100 text-zinc-600 hover:text-zinc-950'
          )}
        >
          All Pillars ({pillars.length})
        </button>

        {pillars.map((pillar, idx) => {
          const isSelected = activePillarId === pillar.id;
          const shortLabel = dataset.shortPillarLabels[pillar.id] ?? `${idx + 1}. ${pillar.title}`;
          return (
            <button
              key={pillar.id}
              type="button"
              onClick={() => onSelectPillar(isSelected ? null : pillar.id)}
              className={clsx(
                'px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all shrink-0 flex items-center gap-1.5',
                isSelected
                  ? isDark
                    ? 'bg-white text-zinc-950'
                    : 'bg-zinc-950 text-white'
                  : isDark
                    ? 'bg-white/[0.05] text-zinc-400 hover:text-zinc-200'
                    : 'bg-zinc-100 text-zinc-600 hover:text-zinc-950'
              )}
            >
              <span>{shortLabel}</span>
            </button>
          );
        })}
      </div>

      {/* Filter Toolbar (Side selector & Tag chips) */}
      <div
        className={clsx(
          'px-4 py-2 border-b shrink-0 flex items-center justify-between gap-2 text-xs flex-wrap',
          isDark ? 'bg-[#0C0C0E] border-white/[0.06] text-zinc-400' : 'bg-white border-zinc-100 text-zinc-500'
        )}
      >
        {/* Pro / Con / All Quick Filter */}
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-medium hidden sm:inline text-zinc-500">Side</span>
          <div
            className={clsx(
              'inline-flex items-center p-0.5 rounded-lg text-xs',
              isDark ? 'bg-[#161619]' : 'bg-zinc-100'
            )}
          >
            <button
              type="button"
              onClick={() => setActiveSideFilter('all')}
              className={clsx(
                'px-2.5 py-1 rounded-md font-medium transition-all',
                activeSideFilter === 'all'
                  ? isDark
                    ? 'bg-[#26262B] text-white shadow-xs'
                    : 'bg-white text-zinc-950 shadow-xs'
                  : isDark
                    ? 'text-zinc-400 hover:text-zinc-200'
                    : 'text-zinc-500 hover:text-zinc-900'
              )}
            >
              Both
            </button>
            <button
              type="button"
              onClick={() => setActiveSideFilter('pro')}
              className={clsx(
                'px-2.5 py-1 rounded-md font-medium transition-all',
                activeSideFilter === 'pro'
                  ? isDark
                    ? 'bg-[#26262B] text-emerald-400 shadow-xs'
                    : 'bg-white text-emerald-700 shadow-xs'
                  : isDark
                    ? 'text-zinc-400 hover:text-emerald-400'
                    : 'text-zinc-500 hover:text-emerald-700'
              )}
            >
              + Pro
            </button>
            <button
              type="button"
              onClick={() => setActiveSideFilter('con')}
              className={clsx(
                'px-2.5 py-1 rounded-md font-medium transition-all',
                activeSideFilter === 'con'
                  ? isDark
                    ? 'bg-[#26262B] text-rose-400 shadow-xs'
                    : 'bg-white text-rose-700 shadow-xs'
                  : isDark
                    ? 'text-zinc-400 hover:text-rose-400'
                    : 'text-zinc-500 hover:text-rose-700'
              )}
            >
              − Con
            </button>
          </div>
        </div>

        {/* Search status or clear button */}
        {(searchQuery || activeTag) && (
          <div className="flex items-center gap-1.5 text-[11px]">
            {searchQuery && (
              <span
                className={clsx(
                  'px-2 py-0.5 rounded-md border flex items-center gap-1',
                  isDark
                    ? 'bg-[#141417] border-white/[0.1] text-zinc-200'
                    : 'bg-zinc-50 border-zinc-200 text-zinc-700'
                )}
              >
                Query: &ldquo;{searchQuery}&rdquo;
                <button
                  type="button"
                  onClick={() => onSearchChange('')}
                  className="hover:opacity-75 font-semibold ml-0.5"
                >
                  ×
                </button>
              </span>
            )}

            {activeTag && (
              <span
                className={clsx(
                  'px-2 py-0.5 rounded-md border flex items-center gap-1',
                  isDark
                    ? 'bg-[#141417] border-white/[0.1] text-zinc-200'
                    : 'bg-zinc-50 border-zinc-200 text-zinc-700'
                )}
              >
                Lens: {activeTag}
                <button
                  type="button"
                  onClick={() => onSelectTag(null)}
                  className="hover:opacity-75 font-semibold ml-0.5"
                >
                  ×
                </button>
              </span>
            )}
          </div>
        )}
      </div>

      {/* Main Feed Content */}
      <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-5">
        <div className="max-w-3xl mx-auto space-y-6">
          {visiblePillars.map((pillar) => {
            const theses = (childrenMap.get(pillar.id) ?? []).filter((n) => n.kind === 'thesis');

            return (
              <section
                key={pillar.id}
                className={clsx(
                  'rounded-2xl border overflow-hidden transition-colors',
                  isDark ? 'bg-[#141417] border-white/[0.08]' : 'bg-white border-zinc-200'
                )}
              >
                {/* Pillar Header */}
                <div
                  className={clsx(
                    'p-4 sm:p-5 border-b',
                    isDark ? 'border-white/[0.08]' : 'border-zinc-100'
                  )}
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span
                      className={clsx(
                        'text-[11px] font-medium uppercase tracking-wider',
                        isDark ? 'text-zinc-500' : 'text-zinc-400'
                      )}
                    >
                      Pillar
                    </span>
                    <button
                      type="button"
                      onClick={() => onSwitchToGraph(pillar.id)}
                      className={clsx(
                        'inline-flex items-center gap-1 text-xs font-medium transition-colors',
                        isDark ? 'text-zinc-400 hover:text-zinc-100' : 'text-zinc-500 hover:text-zinc-950'
                      )}
                    >
                      <MapPin className="w-3.5 h-3.5" />
                      <span>View on Graph</span>
                    </button>
                  </div>

                  <h3 className="font-editorial text-xl sm:text-[23px] font-medium leading-snug tracking-[-0.015em]">
                    {pillar.title}
                  </h3>
                  <p
                    className={clsx(
                      'text-[13px] mt-1.5 leading-relaxed',
                      isDark ? 'text-zinc-400' : 'text-zinc-500'
                    )}
                  >
                    {pillar.summary}
                  </p>
                </div>

                {/* Theses List */}
                <div className={clsx('divide-y', isDark ? 'divide-white/[0.06]' : 'divide-zinc-100')}>
                  {theses.map((thesis) => {
                    const isExpanded = expandedTheses.has(thesis.id);
                    const children = childrenMap.get(thesis.id) ?? [];
                    const proChildren = children.filter((c) => c.kind === 'pro');
                    const conChildren = children.filter((c) => c.kind === 'con');

                    // Filter arguments by side filter and search query
                    const filteredPros = proChildren.filter(
                      (c) => (activeSideFilter === 'all' || activeSideFilter === 'pro') && isNodeMatching(c)
                    );
                    const filteredCons = conChildren.filter(
                      (c) => (activeSideFilter === 'all' || activeSideFilter === 'con') && isNodeMatching(c)
                    );

                    const totalFiltered = filteredPros.length + filteredCons.length;

                    return (
                      <article key={thesis.id} className="p-4 sm:p-5">
                        {/* Thesis Title Bar (Collapsible) */}
                        <div
                          onClick={() => toggleThesis(thesis.id)}
                          className="cursor-pointer flex items-start justify-between gap-3 group"
                        >
                          <div className="space-y-1 min-w-0">
                            <div className="flex items-center gap-2 text-[11px] font-medium">
                              <span className={isDark ? 'text-zinc-500' : 'text-zinc-400'}>
                                Contested Thesis
                              </span>
                              <span className={isDark ? 'text-zinc-700' : 'text-zinc-300'}>·</span>
                              <span className="font-mono tabular-nums text-emerald-500">
                                +{proChildren.length}
                              </span>
                              <span className="font-mono tabular-nums text-rose-500">
                                −{conChildren.length}
                              </span>
                            </div>

                            <h4 className="font-editorial text-[16.5px] sm:text-[18px] font-medium leading-snug tracking-[-0.01em] group-hover:underline underline-offset-2">
                              {thesis.title}
                            </h4>
                            <p
                              className={clsx(
                                'text-xs leading-relaxed line-clamp-2',
                                isDark ? 'text-zinc-400' : 'text-zinc-500'
                              )}
                            >
                              {thesis.summary}
                            </p>
                          </div>

                          <button
                            type="button"
                            aria-label={isExpanded ? 'Collapse thesis' : 'Expand thesis'}
                            className={clsx(
                              'p-1.5 rounded-lg border shrink-0 transition-colors mt-0.5',
                              isDark
                                ? 'bg-[#0C0C0E] border-white/[0.08] text-zinc-400 group-hover:text-zinc-100 group-hover:border-white/20'
                                : 'bg-zinc-50 border-zinc-200 text-zinc-500 group-hover:text-zinc-950 group-hover:border-zinc-300'
                            )}
                          >
                            {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                          </button>
                        </div>

                        {/* Expanded Arguments List */}
                        {isExpanded && (
                          <div
                            className={clsx(
                              'mt-4 pt-4 border-t space-y-3',
                              isDark ? 'border-white/[0.06]' : 'border-zinc-100'
                            )}
                          >
                            {totalFiltered === 0 ? (
                              <div className={clsx('text-xs py-2', isDark ? 'text-zinc-500' : 'text-zinc-400')}>
                                No arguments match the current filter.
                              </div>
                            ) : (
                              <div className="space-y-3">
                                {/* Pros */}
                                {filteredPros.map((pro) => (
                                  <ArgumentCard
                                    key={pro.id}
                                    node={pro}
                                    counterRebuttals={childrenMap.get(pro.id) ?? []}
                                    isExpandedDetails={expandedDetails.has(pro.id)}
                                    onToggleDetails={() => toggleDetails(pro.id)}
                                    onInspectNode={onInspectNode}
                                    onSwitchToGraph={onSwitchToGraph}
                                    isDark={isDark}
                                  />
                                ))}

                                {/* Cons */}
                                {filteredCons.map((con) => (
                                  <ArgumentCard
                                    key={con.id}
                                    node={con}
                                    counterRebuttals={childrenMap.get(con.id) ?? []}
                                    isExpandedDetails={expandedDetails.has(con.id)}
                                    onToggleDetails={() => toggleDetails(con.id)}
                                    onInspectNode={onInspectNode}
                                    onSwitchToGraph={onSwitchToGraph}
                                    isDark={isDark}
                                  />
                                ))}
                              </div>
                            )}
                          </div>
                        )}
                      </article>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}

interface ArgumentCardProps {
  node: DebateNode;
  counterRebuttals: DebateNode[];
  isExpandedDetails: boolean;
  onToggleDetails: () => void;
  onInspectNode: (nodeId: string) => void;
  onSwitchToGraph: (nodeId: string) => void;
  isDark: boolean;
}

function ArgumentCard({
  node,
  counterRebuttals,
  isExpandedDetails,
  onToggleDetails,
  onInspectNode,
  onSwitchToGraph,
  isDark,
}: ArgumentCardProps) {
  const isPro = node.kind === 'pro';

  return (
    <div
      className={clsx(
        'rounded-xl border border-l-2 p-3.5 sm:p-4 transition-colors',
        isDark
          ? 'bg-[#0C0C0E] border-white/[0.08] text-zinc-100 hover:border-white/[0.15]'
          : 'bg-zinc-50/50 border-zinc-200 text-zinc-950 hover:border-zinc-300',
        isPro ? 'border-l-emerald-500/80' : 'border-l-rose-500/80'
      )}
    >
      {/* Badge & Quick Links */}
      <div className="flex items-center justify-between gap-2 mb-2">
        <span
          className={clsx(
            'inline-flex items-center gap-1.5 text-[11px] font-medium',
            isPro
              ? isDark
                ? 'text-emerald-400'
                : 'text-emerald-700'
              : isDark
                ? 'text-rose-400'
                : 'text-rose-700'
          )}
        >
          {isPro ? <PlusCircle className="w-3.5 h-3.5" /> : <MinusCircle className="w-3.5 h-3.5" />}
          <span>{isPro ? 'Supporting' : 'Counter'}</span>
        </span>

        <div className="flex items-center gap-1.5 text-xs">
          <button
            type="button"
            onClick={() => onInspectNode(node.id)}
            title="Read full background dossier & citations"
            className={clsx(
              'inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-medium border transition-colors',
              isDark
                ? 'bg-white/[0.04] border-white/[0.08] text-zinc-300 hover:bg-white/[0.08] hover:text-white'
                : 'bg-white border-zinc-200 text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950'
            )}
          >
            <BookOpen className="w-3 h-3" />
            <span>Dossier</span>
          </button>

          <button
            type="button"
            onClick={() => onSwitchToGraph(node.id)}
            title="View on Canvas Graph"
            className={clsx(
              'inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-medium border transition-colors',
              isDark
                ? 'bg-white/[0.04] border-white/[0.08] text-zinc-300 hover:bg-white/[0.08] hover:text-white'
                : 'bg-white border-zinc-200 text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950'
            )}
          >
            <MapPin className="w-3 h-3" />
            <span>Graph</span>
          </button>
        </div>
      </div>

      {/* Title & Summary */}
      <h5 className="font-editorial text-[15px] sm:text-base font-medium leading-snug tracking-[-0.01em]">
        {node.title}
      </h5>
      <p
        className={clsx(
          'text-[12.5px] sm:text-[13px] leading-relaxed mt-1',
          isDark ? 'text-zinc-400' : 'text-zinc-600'
        )}
      >
        {node.summary}
      </p>

      {/* Expandable Details & Sources */}
      {((node.details && node.details.length > 0) || (node.sources && node.sources.length > 0)) && (
        <div
          className={clsx(
            'mt-3 pt-2.5 border-t',
            isDark ? 'border-white/[0.06]' : 'border-zinc-200/70'
          )}
        >
          <button
            type="button"
            onClick={onToggleDetails}
            className={clsx(
              'inline-flex items-center gap-1 text-[11.5px] font-medium transition-colors',
              isDark ? 'text-zinc-300 hover:text-white' : 'text-zinc-700 hover:text-zinc-950'
            )}
          >
            <span>{isExpandedDetails ? 'Hide evidence & sources' : 'Evidence & sources'}</span>
            {isExpandedDetails ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
          </button>

          {isExpandedDetails && (
            <div className="mt-2.5 space-y-2.5 text-xs">
              {/* Bullets */}
              {node.details && node.details.length > 0 && (
                <ul className="space-y-1.5">
                  {node.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-[12px] leading-relaxed">
                      <span
                        className={clsx(
                          'w-1.5 h-1.5 rounded-full shrink-0 mt-1.5',
                          isDark ? 'bg-zinc-600' : 'bg-zinc-400'
                        )}
                      />
                      <span className={isDark ? 'text-zinc-300' : 'text-zinc-700'}>{detail}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Citations */}
              {node.sources && node.sources.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {node.sources.map((src, i) => (
                    <a
                      key={i}
                      href={src.url ?? '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={clsx(
                        'inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10.5px] border transition-colors',
                        isDark
                          ? 'bg-[#141417] border-white/[0.08] text-zinc-300 hover:border-white/25 hover:text-white'
                          : 'bg-white border-zinc-200 text-zinc-700 hover:border-zinc-400 hover:text-zinc-950'
                      )}
                    >
                      <span className="truncate max-w-[180px]">{src.title}</span>
                      <ExternalLink className="w-2.5 h-2.5 shrink-0 opacity-60" />
                    </a>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Recursive Nested Rebuttals */}
      {counterRebuttals.length > 0 && (
        <div
          className={clsx(
            'mt-3 pt-2.5 border-t pl-3 border-l-2 space-y-2',
            isDark
              ? 'border-white/[0.06] border-l-white/20'
              : 'border-zinc-200/70 border-l-zinc-300'
          )}
        >
          <div
            className={clsx(
              'text-[10.5px] font-medium uppercase tracking-wider flex items-center gap-1',
              isDark ? 'text-zinc-500' : 'text-zinc-400'
            )}
          >
            <ArrowDownRight className="w-3 h-3" />
            <span>Counter-Rebuttal ({counterRebuttals.length})</span>
          </div>

          {counterRebuttals.map((rebuttal) => (
            <div
              key={rebuttal.id}
              className={clsx(
                'p-2.5 rounded-lg border text-xs',
                isDark ? 'bg-[#141417] border-white/[0.08]' : 'bg-white border-zinc-200'
              )}
            >
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className="font-medium text-[12px] truncate">{rebuttal.title}</span>
                <button
                  type="button"
                  onClick={() => onInspectNode(rebuttal.id)}
                  className={clsx(
                    'text-[11px] font-medium hover:underline shrink-0',
                    isDark ? 'text-zinc-300 hover:text-white' : 'text-zinc-700 hover:text-zinc-950'
                  )}
                >
                  View
                </button>
              </div>
              <p className={clsx('text-[11.5px] line-clamp-2', isDark ? 'text-zinc-400' : 'text-zinc-500')}>
                {rebuttal.summary}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
