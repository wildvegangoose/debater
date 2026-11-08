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
        isDark ? 'bg-slate-950 text-slate-100' : 'bg-slate-100 text-slate-900'
      )}
    >
      {/* Top Mobile Pillar Scrollbar */}
      <div
        className={clsx(
          'px-3 py-2.5 border-b shrink-0 overflow-x-auto flex items-center gap-1.5 scrollbar-none',
          isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
        )}
      >
        <button
          type="button"
          onClick={() => onSelectPillar(null)}
          className={clsx(
            'px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all border shrink-0',
            activePillarId === null
              ? 'bg-indigo-600 border-indigo-500 text-white shadow-xs'
              : isDark
              ? 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'
              : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
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
                'px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all border shrink-0 flex items-center gap-1.5',
                isSelected
                  ? 'bg-indigo-600 border-indigo-500 text-white shadow-xs'
                  : isDark
                  ? 'bg-slate-800/80 border-slate-700/80 text-slate-300 hover:bg-slate-750'
                  : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
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
          isDark ? 'bg-slate-900/60 border-slate-800/80 text-slate-400' : 'bg-white/70 border-slate-200 text-slate-600'
        )}
      >
        {/* Pro / Con / All Quick Filter */}
        <div className="flex items-center gap-1">
          <span className="text-[11px] font-medium hidden sm:inline">Filter Side:</span>
          <div
            className={clsx(
              'inline-flex items-center p-0.5 rounded-lg border text-xs',
              isDark ? 'bg-slate-800 border-slate-700' : 'bg-slate-200/80 border-slate-300'
            )}
          >
            <button
              type="button"
              onClick={() => setActiveSideFilter('all')}
              className={clsx(
                'px-2 py-0.5 rounded-md font-medium transition-colors',
                activeSideFilter === 'all'
                  ? isDark
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-indigo-700 shadow-xs'
                  : 'text-slate-400 hover:text-slate-200'
              )}
            >
              Both
            </button>
            <button
              type="button"
              onClick={() => setActiveSideFilter('pro')}
              className={clsx(
                'px-2 py-0.5 rounded-md font-medium transition-colors',
                activeSideFilter === 'pro'
                  ? 'bg-emerald-600 text-white'
                  : 'text-emerald-500 hover:text-emerald-400'
              )}
            >
              + Pro Only
            </button>
            <button
              type="button"
              onClick={() => setActiveSideFilter('con')}
              className={clsx(
                'px-2 py-0.5 rounded-md font-medium transition-colors',
                activeSideFilter === 'con'
                  ? 'bg-rose-600 text-white'
                  : 'text-rose-500 hover:text-rose-400'
              )}
            >
              − Con Only
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
                  isDark ? 'bg-slate-800 border-slate-700 text-indigo-300' : 'bg-indigo-50 border-indigo-200 text-indigo-700'
                )}
              >
                Query: "{searchQuery}"
                <button
                  type="button"
                  onClick={() => onSearchChange('')}
                  className="hover:opacity-80 font-bold ml-0.5"
                >
                  ×
                </button>
              </span>
            )}

            {activeTag && (
              <span
                className={clsx(
                  'px-2 py-0.5 rounded-md border flex items-center gap-1',
                  isDark ? 'bg-slate-800 border-slate-700 text-amber-300' : 'bg-amber-50 border-amber-200 text-amber-700'
                )}
              >
                Tag: {activeTag}
                <button
                  type="button"
                  onClick={() => onSelectTag(null)}
                  className="hover:opacity-80 font-bold ml-0.5"
                >
                  ×
                </button>
              </span>
            )}
          </div>
        )}
      </div>

      {/* Main Feed Content */}
      <div className="flex-1 overflow-y-auto px-3 sm:px-6 py-4 space-y-6">
        {visiblePillars.map((pillar) => {
          const theses = (childrenMap.get(pillar.id) ?? []).filter((n) => n.kind === 'thesis');

          return (
            <section
              key={pillar.id}
              className={clsx(
                'rounded-2xl border overflow-hidden shadow-sm transition-all',
                isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200'
              )}
            >
              {/* Pillar Header */}
              <div
                className={clsx(
                  'p-4 sm:p-5 border-b',
                  isDark ? 'bg-slate-900 border-slate-800/90' : 'bg-slate-50 border-slate-200'
                )}
              >
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span
                    className={clsx(
                      'px-2.5 py-0.5 rounded-full text-[11px] font-bold border tracking-wide uppercase',
                      isDark
                        ? 'bg-sky-500/15 border-sky-400/30 text-sky-300'
                        : 'bg-sky-50 border-sky-200 text-sky-700'
                    )}
                  >
                    Pillar
                  </span>
                  <button
                    type="button"
                    onClick={() => onSwitchToGraph(pillar.id)}
                    className={clsx(
                      'inline-flex items-center gap-1 text-[11px] font-semibold transition-colors',
                      isDark ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-700'
                    )}
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    <span>View on Graph</span>
                  </button>
                </div>

                <h3 className="font-editorial text-xl sm:text-2xl font-bold tracking-tight">
                  {pillar.title}
                </h3>
                <p className={clsx('text-xs sm:text-sm mt-1.5 leading-relaxed', isDark ? 'text-slate-300' : 'text-slate-600')}>
                  {pillar.summary}
                </p>
              </div>

              {/* Theses List */}
              <div className="divide-y divide-inherit">
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
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span
                              className={clsx(
                                'px-2 py-0.5 rounded-md text-[10px] font-bold border tracking-wider uppercase',
                                isDark
                                  ? 'bg-amber-500/15 border-amber-400/30 text-amber-300'
                                  : 'bg-amber-50 border-amber-200 text-amber-800'
                              )}
                            >
                              Contested Thesis
                            </span>
                            <span className={clsx('text-[11px] font-medium', isDark ? 'text-slate-400' : 'text-slate-500')}>
                              {proChildren.length} Pro • {conChildren.length} Con
                            </span>
                          </div>

                          <h4 className="font-editorial text-base sm:text-lg font-semibold leading-snug group-hover:text-indigo-400 transition-colors">
                            {thesis.title}
                          </h4>
                          <p className={clsx('text-xs leading-relaxed line-clamp-2', isDark ? 'text-slate-400' : 'text-slate-600')}>
                            {thesis.summary}
                          </p>
                        </div>

                        <button
                          type="button"
                          className={clsx(
                            'p-1.5 rounded-lg border shrink-0 transition-transform mt-0.5',
                            isDark ? 'bg-slate-800 border-slate-700 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-600'
                          )}
                        >
                          {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                        </button>
                      </div>

                      {/* Expanded Arguments List */}
                      {isExpanded && (
                        <div className="mt-4 pt-4 border-t border-inherit space-y-4">
                          {totalFiltered === 0 ? (
                            <div className={clsx('text-xs italic py-2', isDark ? 'text-slate-500' : 'text-slate-400')}>
                              No arguments match the current filter.
                            </div>
                          ) : (
                            <div className="space-y-3.5">
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
        'rounded-xl border p-3.5 sm:p-4 transition-all shadow-xs',
        isPro
          ? isDark
            ? 'bg-emerald-950/20 border-emerald-500/30 text-slate-100 hover:border-emerald-500/50'
            : 'bg-emerald-50/50 border-emerald-200 text-slate-900 hover:border-emerald-300'
          : isDark
          ? 'bg-rose-950/20 border-rose-500/30 text-slate-100 hover:border-rose-500/50'
          : 'bg-rose-50/50 border-rose-200 text-slate-900 hover:border-rose-300'
      )}
    >
      {/* Badge & Quick Links */}
      <div className="flex items-center justify-between gap-2 mb-2">
        <span
          className={clsx(
            'inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10.5px] font-bold border',
            isPro
              ? isDark
                ? 'bg-emerald-500/20 border-emerald-400/40 text-emerald-300'
                : 'bg-emerald-100 border-emerald-200 text-emerald-800'
              : isDark
              ? 'bg-rose-500/20 border-rose-400/40 text-rose-300'
              : 'bg-rose-100 border-rose-200 text-rose-800'
          )}
        >
          {isPro ? <PlusCircle className="w-3 h-3" /> : <MinusCircle className="w-3 h-3" />}
          <span>{isPro ? '+ Supporting Stance' : '− Counter Argument'}</span>
        </span>

        <div className="flex items-center gap-1.5 text-xs">
          <button
            type="button"
            onClick={() => onInspectNode(node.id)}
            title="Read full background dossier & citations"
            className={clsx(
              'inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-medium border transition-colors',
              isDark
                ? 'bg-slate-800 border-slate-700 text-slate-300 hover:text-indigo-300'
                : 'bg-white border-slate-300 text-slate-700 hover:text-indigo-600'
            )}
          >
            <BookOpen className="w-3 h-3 text-indigo-400" />
            <span>Dossier</span>
          </button>

          <button
            type="button"
            onClick={() => onSwitchToGraph(node.id)}
            title="View on Canvas Graph"
            className={clsx(
              'inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-medium border transition-colors',
              isDark
                ? 'bg-slate-800 border-slate-700 text-slate-300 hover:text-indigo-300'
                : 'bg-white border-slate-300 text-slate-700 hover:text-indigo-600'
            )}
          >
            <MapPin className="w-3 h-3 text-indigo-400" />
            <span>Graph</span>
          </button>
        </div>
      </div>

      {/* Title & Summary */}
      <h5 className="font-editorial text-sm sm:text-base font-bold leading-snug">
        {node.title}
      </h5>
      <p className={clsx('text-xs sm:text-[13px] leading-relaxed mt-1', isDark ? 'text-slate-300' : 'text-slate-700')}>
        {node.summary}
      </p>

      {/* Expandable Details & Sources */}
      {((node.details && node.details.length > 0) || (node.sources && node.sources.length > 0)) && (
        <div className="mt-2.5 pt-2 border-t border-inherit">
          <button
            type="button"
            onClick={onToggleDetails}
            className={clsx(
              'inline-flex items-center gap-1 text-[11px] font-semibold transition-colors',
              isDark ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-700'
            )}
          >
            <span>{isExpandedDetails ? 'Hide evidence & sources' : 'Show key evidence & sources'}</span>
            {isExpandedDetails ? <ChevronDown className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
          </button>

          {isExpandedDetails && (
            <div className="mt-2 space-y-2.5 text-xs">
              {/* Bullets */}
              {node.details && node.details.length > 0 && (
                <ul className="space-y-1">
                  {node.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-1.5 text-[12px] leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0 mt-1.5" />
                      <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>{detail}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Citations */}
              {node.sources && node.sources.length > 0 && (
                <div className="flex flex-wrap gap-1 pt-1">
                  {node.sources.map((src, i) => (
                    <a
                      key={i}
                      href={src.url ?? '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={clsx(
                        'inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10.5px] border transition-colors',
                        isDark
                          ? 'bg-slate-800 border-slate-700 text-indigo-300 hover:bg-indigo-500/20'
                          : 'bg-white border-slate-300 text-indigo-700 hover:bg-indigo-50'
                      )}
                    >
                      <span className="truncate max-w-[170px]">{src.title}</span>
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
        <div className="mt-3 pt-2.5 border-t border-inherit pl-3 border-l-2 border-l-indigo-400/40 space-y-2">
          <div className={clsx('text-[10px] font-bold uppercase tracking-wider flex items-center gap-1', isDark ? 'text-slate-400' : 'text-slate-500')}>
            <ArrowDownRight className="w-3 h-3" />
            <span>Counter-Rebuttal ({counterRebuttals.length})</span>
          </div>

          {counterRebuttals.map((rebuttal) => (
            <div
              key={rebuttal.id}
              className={clsx(
                'p-2.5 rounded-lg border text-xs',
                isDark ? 'bg-slate-900/70 border-slate-800' : 'bg-white border-slate-200'
              )}
            >
              <div className="flex items-center justify-between gap-1 mb-1">
                <span className="font-bold text-[11px] truncate">{rebuttal.title}</span>
                <button
                  type="button"
                  onClick={() => onInspectNode(rebuttal.id)}
                  className="text-[10px] text-indigo-400 hover:underline shrink-0"
                >
                  View
                </button>
              </div>
              <p className={clsx('text-[11.5px] line-clamp-2', isDark ? 'text-slate-400' : 'text-slate-600')}>
                {rebuttal.summary}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
