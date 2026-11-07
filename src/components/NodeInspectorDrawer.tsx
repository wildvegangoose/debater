import { useState } from 'react';
import clsx from 'clsx';
import {
  ArrowUpRight,
  BookOpen,
  Check,
  ChevronRight,
  Crosshair,
  Edit3,
  GitBranch,
  Link2,
  MinusCircle,
  PlusCircle,
  Trash2,
  X,
} from 'lucide-react';
import { DebateNode, DebateNodeKind } from '../types/debate';
import { getAncestorIds } from '../utils/graphLayout';

interface NodeInspectorDrawerProps {
  selectedNode: DebateNode | null;
  allNodes: DebateNode[];
  isDark: boolean;
  onClose: () => void;
  onSelectAndZoom: (nodeId: string, frameChildren?: boolean) => void;
  onOpenAddChild: (parent: DebateNode, defaultKind: Extract<DebateNodeKind, 'pro' | 'con' | 'thesis'>) => void;
  onOpenEdit: (node: DebateNode) => void;
  onDeleteNode: (node: DebateNode) => void;
}

const KIND_HEADER_BADGE: Record<DebateNodeKind, { label: string; dark: string; light: string }> = {
  root: {
    label: 'Central Inquiry',
    dark: 'bg-indigo-500/20 text-indigo-300 border-indigo-400/30',
    light: 'bg-indigo-50 text-indigo-700 border-indigo-200',
  },
  pillar: {
    label: 'Debate Pillar',
    dark: 'bg-sky-500/20 text-sky-300 border-sky-400/30',
    light: 'bg-sky-50 text-sky-700 border-sky-200',
  },
  thesis: {
    label: 'Contested Thesis',
    dark: 'bg-amber-500/20 text-amber-300 border-amber-400/30',
    light: 'bg-amber-50 text-amber-800 border-amber-200',
  },
  pro: {
    label: '+ Supports Parent Claim',
    dark: 'bg-emerald-500/20 text-emerald-300 border-emerald-400/30',
    light: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  },
  con: {
    label: '− Challenges Parent Claim',
    dark: 'bg-rose-500/20 text-rose-300 border-rose-400/30',
    light: 'bg-rose-50 text-rose-700 border-rose-200',
  },
};

export function NodeInspectorDrawer({
  selectedNode,
  allNodes,
  isDark,
  onClose,
  onSelectAndZoom,
  onOpenAddChild,
  onOpenEdit,
  onDeleteNode,
}: NodeInspectorDrawerProps) {
  const [copiedLink, setCopiedLink] = useState(false);

  if (!selectedNode) return null;

  const nodeMap = new Map(allNodes.map((n) => [n.id, n]));
  const ancestorIds = getAncestorIds(selectedNode.id, nodeMap);
  const ancestors = ancestorIds.map((id) => nodeMap.get(id)).filter((n): n is DebateNode => Boolean(n));

  const directChildren = allNodes.filter((n) => n.parentId === selectedNode.id);
  const supportingChildren = directChildren.filter((n) => n.kind === 'pro');
  const challengingChildren = directChildren.filter((n) => n.kind === 'con');
  const structuralChildren = directChildren.filter((n) => n.kind === 'pillar' || n.kind === 'thesis');

  // Bidirectional cross-branch links
  const relatedSet = new Set<string>(selectedNode.relatedIds ?? []);
  for (const n of allNodes) {
    if (n.relatedIds?.includes(selectedNode.id)) {
      relatedSet.add(n.id);
    }
  }
  const relatedNodes = Array.from(relatedSet)
    .map((id) => nodeMap.get(id))
    .filter((n): n is DebateNode => Boolean(n));

  const badge = KIND_HEADER_BADGE[selectedNode.kind];

  const handleCopyDeepLink = () => {
    const url = new URL(window.location.href);
    url.hash = `node=${encodeURIComponent(selectedNode.id)}`;
    navigator.clipboard.writeText(url.toString());
    window.history.replaceState(null, '', url.hash);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <aside
      className={clsx(
        'w-full sm:w-[430px] h-full border-l flex flex-col z-30 shrink-0 shadow-2xl transition-colors',
        isDark ? 'bg-slate-900/98 border-slate-800 text-slate-100' : 'bg-white/98 border-slate-200 text-slate-900'
      )}
    >
      {/* Top Bar */}
      <div
        className={clsx(
          'px-4 py-3 border-b flex items-center justify-between gap-2',
          isDark ? 'border-slate-800 bg-slate-950/50' : 'border-slate-200 bg-slate-50/80'
        )}
      >
        <div className="flex items-center gap-2 min-w-0">
          <span
            className={clsx(
              'px-2.5 py-0.5 rounded-md text-xs font-semibold border truncate',
              isDark ? badge.dark : badge.light
            )}
          >
            {badge.label}
          </span>
          {selectedNode.era && (
            <span
              className={clsx(
                'text-xs font-mono-code px-2 py-0.5 rounded whitespace-nowrap shrink-0',
                isDark ? 'bg-slate-800 text-slate-300' : 'bg-slate-200/70 text-slate-700'
              )}
            >
              {selectedNode.era}
            </span>
          )}
        </div>

        <div className="flex items-center gap-1 shrink-0">
          <button
            type="button"
            onClick={() => onSelectAndZoom(selectedNode.id, true)}
            title="Zoom & center branch on canvas"
            className={clsx(
              'p-1.5 rounded-lg text-xs font-medium transition-colors',
              isDark
                ? 'hover:bg-slate-800 text-slate-300 hover:text-indigo-300'
                : 'hover:bg-slate-200/70 text-slate-600 hover:text-indigo-600'
            )}
          >
            <Crosshair className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={handleCopyDeepLink}
            title="Copy direct link to this argument"
            className={clsx(
              'p-1.5 rounded-lg text-xs font-medium transition-colors',
              isDark
                ? 'hover:bg-slate-800 text-slate-300 hover:text-indigo-300'
                : 'hover:bg-slate-200/70 text-slate-600 hover:text-indigo-600'
            )}
          >
            {copiedLink ? <Check className="w-4 h-4 text-emerald-400" /> : <Link2 className="w-4 h-4" />}
          </button>
          <button
            type="button"
            onClick={() => onOpenEdit(selectedNode)}
            title="Edit argument in local sandbox"
            className={clsx(
              'p-1.5 rounded-lg transition-colors',
              isDark ? 'hover:bg-slate-800 text-slate-300' : 'hover:bg-slate-200/70 text-slate-600'
            )}
          >
            <Edit3 className="w-4 h-4" />
          </button>
          {selectedNode.kind !== 'root' && (
            <button
              type="button"
              onClick={() => onDeleteNode(selectedNode)}
              title="Remove node from local sandbox"
              className={clsx(
                'p-1.5 rounded-lg transition-colors',
                isDark ? 'hover:bg-rose-500/20 text-rose-400' : 'hover:bg-rose-50 text-rose-600'
              )}
            >
              <Trash2 className="w-4 h-4" />
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            title="Close inspector (Esc)"
            className={clsx(
              'p-1.5 rounded-lg transition-colors',
              isDark ? 'hover:bg-slate-800 text-slate-400' : 'hover:bg-slate-200/70 text-slate-500'
            )}
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Scrollable Body */}
      <div className="flex-1 overflow-y-auto p-5 space-y-5">
        {/* Logical Lineage Breadcrumbs */}
        {ancestors.length > 0 && (
          <div className="space-y-1">
            <div className={clsx('text-[11px] uppercase tracking-wider font-semibold', isDark ? 'text-slate-400' : 'text-slate-500')}>
              Dialectical Lineage
            </div>
            <div className="flex flex-wrap items-center gap-1 text-xs">
              {ancestors.map((anc) => (
                <div key={anc.id} className="flex items-center gap-1 max-w-full">
                  <button
                    type="button"
                    onClick={() => onSelectAndZoom(anc.id, false)}
                    className={clsx(
                      'px-2 py-0.5 rounded transition-colors truncate max-w-[175px] font-medium',
                      isDark
                        ? 'bg-slate-800/80 text-slate-300 hover:bg-indigo-500/25 hover:text-indigo-200'
                        : 'bg-slate-100 text-slate-700 hover:bg-indigo-50 hover:text-indigo-700'
                    )}
                  >
                    {anc.title}
                  </button>
                  <ChevronRight className="w-3 h-3 text-slate-500 shrink-0" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Headline & Summary */}
        <div>
          <h2 className="font-editorial text-[22px] font-semibold leading-snug tracking-tight">
            {selectedNode.title}
          </h2>
          <p className={clsx('mt-2.5 text-sm leading-relaxed', isDark ? 'text-slate-300' : 'text-slate-700')}>
            {selectedNode.summary}
          </p>

          {/* Tags */}
          <div className="mt-3 flex flex-wrap gap-1.5">
            {selectedNode.tags.map((tag) => (
              <span
                key={tag}
                className={clsx(
                  'px-2 py-0.5 rounded-full text-[11px] font-medium border',
                  isDark
                    ? 'bg-slate-800/90 border-slate-700 text-slate-300'
                    : 'bg-slate-100 border-slate-200 text-slate-700'
                )}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Key Analytical & Historical Points */}
        {selectedNode.details.length > 0 && (
          <div
            className={clsx(
              'p-4 rounded-xl border space-y-2.5',
              isDark ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200/80'
            )}
          >
            <h3 className={clsx('text-xs font-bold uppercase tracking-wider', isDark ? 'text-slate-400' : 'text-slate-500')}>
              Detailed Context & Evidence
            </h3>
            <ul className="space-y-2.5 text-[13px] leading-relaxed">
              {selectedNode.details.map((bullet, idx) => (
                <li key={idx} className="flex gap-2.5">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                  <span className={isDark ? 'text-slate-200' : 'text-slate-700'}>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Primary Documents & Scholarly References */}
        {selectedNode.references && selectedNode.references.length > 0 && (
          <div className="space-y-2">
            <h3
              className={clsx(
                'text-xs font-bold uppercase tracking-wider flex items-center gap-1.5',
                isDark ? 'text-slate-400' : 'text-slate-500'
              )}
            >
              <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
              Cited Documents, Resolutions & Scholarship
            </h3>
            <div className="space-y-1.5">
              {selectedNode.references.map((ref, idx) => (
                <div
                  key={idx}
                  className={clsx(
                    'px-3 py-2 rounded-lg text-xs border font-medium',
                    isDark
                      ? 'bg-slate-800/50 border-slate-800 text-slate-300'
                      : 'bg-slate-50 border-slate-200/70 text-slate-700'
                  )}
                >
                  {ref}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Sandbox Add Child Actions */}
        <div className="pt-1 flex flex-wrap gap-2">
          {selectedNode.kind === 'root' || selectedNode.kind === 'pillar' ? (
            <button
              type="button"
              onClick={() => onOpenAddChild(selectedNode, selectedNode.kind === 'root' ? 'thesis' : 'thesis')}
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold bg-amber-500/15 text-amber-400 border border-amber-500/30 hover:bg-amber-500/25 transition-colors"
            >
              <PlusCircle className="w-3.5 h-3.5" />
              Add Contested Thesis
            </button>
          ) : (
            <>
              <button
                type="button"
                onClick={() => onOpenAddChild(selectedNode, 'pro')}
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/25 transition-colors"
              >
                <PlusCircle className="w-3.5 h-3.5" />
                Add Supporting (+)
              </button>
              <button
                type="button"
                onClick={() => onOpenAddChild(selectedNode, 'con')}
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold bg-rose-500/15 text-rose-400 border border-rose-500/30 hover:bg-rose-500/25 transition-colors"
              >
                <MinusCircle className="w-3.5 h-3.5" />
                Add Counter (−)
              </button>
            </>
          )}
        </div>

        {/* Structural Children (Pillars or Theses) */}
        {structuralChildren.length > 0 && (
          <div className="space-y-2 pt-2 border-t border-slate-500/20">
            <h3 className={clsx('text-xs font-bold uppercase tracking-wider', isDark ? 'text-sky-400' : 'text-sky-700')}>
              Sub-Branches ({structuralChildren.length})
            </h3>
            <div className="space-y-2">
              {structuralChildren.map((child) => (
                <button
                  key={child.id}
                  type="button"
                  onClick={() => onSelectAndZoom(child.id, true)}
                  className={clsx(
                    'w-full text-left p-3 rounded-lg border transition-colors flex items-start justify-between gap-2',
                    isDark
                      ? 'bg-slate-800/50 border-slate-700/80 hover:border-sky-400/60'
                      : 'bg-slate-50 border-slate-200 hover:border-sky-400'
                  )}
                >
                  <div>
                    <div className="text-xs font-semibold">{child.title}</div>
                    <p className={clsx('text-[11px] line-clamp-2 mt-0.5', isDark ? 'text-slate-400' : 'text-slate-600')}>
                      {child.summary}
                    </p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 shrink-0 text-sky-400 mt-0.5" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Supporting Arguments (+ Pro) */}
        {supportingChildren.length > 0 && (
          <div className="space-y-2 pt-2 border-t border-slate-500/20">
            <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              + Supporting Arguments ({supportingChildren.length})
            </h3>
            <div className="space-y-2">
              {supportingChildren.map((child) => (
                <button
                  key={child.id}
                  type="button"
                  onClick={() => onSelectAndZoom(child.id, false)}
                  className={clsx(
                    'w-full text-left p-3 rounded-lg border-l-4 border-l-emerald-500 border transition-colors flex items-start justify-between gap-2',
                    isDark
                      ? 'bg-emerald-950/20 border-emerald-500/25 hover:border-emerald-400/60'
                      : 'bg-emerald-50/50 border-emerald-200 hover:border-emerald-400'
                  )}
                >
                  <div>
                    <div className="text-xs font-semibold">{child.title}</div>
                    <p className={clsx('text-[11px] line-clamp-2 mt-0.5', isDark ? 'text-slate-400' : 'text-slate-600')}>
                      {child.summary}
                    </p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 shrink-0 text-emerald-400 mt-0.5" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Counter-Arguments (- Con) */}
        {challengingChildren.length > 0 && (
          <div className="space-y-2 pt-2 border-t border-slate-500/20">
            <h3 className="text-xs font-bold uppercase tracking-wider text-rose-400">
              − Counter-Arguments & Rebuttals ({challengingChildren.length})
            </h3>
            <div className="space-y-2">
              {challengingChildren.map((child) => (
                <button
                  key={child.id}
                  type="button"
                  onClick={() => onSelectAndZoom(child.id, false)}
                  className={clsx(
                    'w-full text-left p-3 rounded-lg border-l-4 border-l-rose-500 border transition-colors flex items-start justify-between gap-2',
                    isDark
                      ? 'bg-rose-950/20 border-rose-500/25 hover:border-rose-400/60'
                      : 'bg-rose-50/50 border-rose-200 hover:border-rose-400'
                  )}
                >
                  <div>
                    <div className="text-xs font-semibold">{child.title}</div>
                    <p className={clsx('text-[11px] line-clamp-2 mt-0.5', isDark ? 'text-slate-400' : 'text-slate-600')}>
                      {child.summary}
                    </p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 shrink-0 text-rose-400 mt-0.5" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Cross-Branch Connections */}
        {relatedNodes.length > 0 && (
          <div className="space-y-2 pt-2 border-t border-slate-500/20">
            <h3 className="text-xs font-bold uppercase tracking-wider text-violet-400 flex items-center gap-1.5">
              <GitBranch className="w-3.5 h-3.5" />
              Cross-Branch Connections ({relatedNodes.length})
            </h3>
            <div className="space-y-1.5">
              {relatedNodes.map((rel) => (
                <button
                  key={rel.id}
                  type="button"
                  onClick={() => onSelectAndZoom(rel.id, false)}
                  className={clsx(
                    'w-full text-left px-3 py-2 rounded-lg border border-dashed transition-colors flex items-center justify-between gap-2',
                    isDark
                      ? 'bg-violet-950/20 border-violet-500/40 hover:border-violet-400 text-slate-200'
                      : 'bg-violet-50/60 border-violet-300 hover:border-violet-500 text-slate-800'
                  )}
                >
                  <span className="text-xs font-medium truncate">{rel.title}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 shrink-0 text-violet-400" />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}
