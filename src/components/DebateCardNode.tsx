import { memo } from 'react';
import { Handle, NodeProps, Position, useStore } from '@xyflow/react';
import clsx from 'clsx';
import {
  BookOpen,
  ChevronDown,
  ChevronRight,
  Crosshair,
  FolderKanban,
  MinusCircle,
  PlusCircle,
  Scale,
  Sparkles,
} from 'lucide-react';
import { DebateNodeKind, ZoomLOD } from '../types/debate';
import { DebateFlowNode } from '../utils/graphLayout';
import { useGraphActions } from '../context/GraphActionsContext';

const zoomLodSelector = (state: { transform: [number, number, number] }): ZoomLOD => {
  const z = state.transform[2];
  if (z < 0.36) return 'macro';
  if (z < 0.9) return 'standard';
  return 'detailed';
};

interface KindVisualConfig {
  badge: string;
  shortBadge: string;
  darkBg: string;
  lightBg: string;
  borderAccent: string;
  badgeClassesDark: string;
  badgeClassesLight: string;
  ringClass: string;
}

const KIND_STYLES: Record<DebateNodeKind, KindVisualConfig> = {
  root: {
    badge: 'Central Inquiry',
    shortBadge: 'TOPIC ROOT',
    darkBg: 'bg-slate-900/95 border-indigo-500/70',
    lightBg: 'bg-white border-indigo-500/80',
    borderAccent: 'border-t-4 border-t-indigo-500',
    badgeClassesDark: 'bg-indigo-500/20 text-indigo-300 border-indigo-400/30',
    badgeClassesLight: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    ringClass: 'ring-indigo-500',
  },
  pillar: {
    badge: 'Debate Pillar',
    shortBadge: 'PILLAR',
    darkBg: 'bg-slate-900/95 border-sky-500/55',
    lightBg: 'bg-white border-sky-400/80',
    borderAccent: 'border-l-4 border-l-sky-400',
    badgeClassesDark: 'bg-sky-500/18 text-sky-300 border-sky-400/30',
    badgeClassesLight: 'bg-sky-50 text-sky-700 border-sky-200',
    ringClass: 'ring-sky-400',
  },
  thesis: {
    badge: 'Contested Thesis',
    shortBadge: 'THESIS',
    darkBg: 'bg-slate-900/95 border-amber-500/55',
    lightBg: 'bg-white border-amber-400/80',
    borderAccent: 'border-l-4 border-l-amber-400',
    badgeClassesDark: 'bg-amber-500/18 text-amber-300 border-amber-400/30',
    badgeClassesLight: 'bg-amber-50 text-amber-800 border-amber-200',
    ringClass: 'ring-amber-400',
  },
  pro: {
    badge: '+ Supports Parent',
    shortBadge: '+ SUPPORTS',
    darkBg: 'bg-slate-900/95 border-emerald-500/50',
    lightBg: 'bg-white border-emerald-400/80',
    borderAccent: 'border-l-4 border-l-emerald-500',
    badgeClassesDark: 'bg-emerald-500/18 text-emerald-300 border-emerald-400/30',
    badgeClassesLight: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    ringClass: 'ring-emerald-400',
  },
  con: {
    badge: '− Challenges Parent',
    shortBadge: '− CHALLENGES',
    darkBg: 'bg-slate-900/95 border-rose-500/50',
    lightBg: 'bg-white border-rose-400/80',
    borderAccent: 'border-l-4 border-l-rose-500',
    badgeClassesDark: 'bg-rose-500/18 text-rose-300 border-rose-400/30',
    badgeClassesLight: 'bg-rose-50 text-rose-700 border-rose-200',
    ringClass: 'ring-rose-400',
  },
};

function DebateCardNodeComponent({ data }: NodeProps<DebateFlowNode>) {
  const lod = useStore(zoomLodSelector);
  const { isDark, onToggleCollapse, onFocusNode, onSelectNode, onOpenAddModal } = useGraphActions();

  const {
    node,
    directProCount,
    directConCount,
    directOtherCount,
    totalChildCount,
    totalDescendantCount,
    isCollapsed,
    isSelected,
    isInLineage,
    isDimmed,
    isSearchMatch,
    branchSide,
  } = data;

  const styleCfg = KIND_STYLES[node.kind];
  const targetPos =
    branchSide === 'left'
      ? Position.Right
      : branchSide === 'tb'
        ? Position.Top
        : Position.Left;
  const sourcePos =
    branchSide === 'left'
      ? Position.Left
      : branchSide === 'tb'
        ? Position.Bottom
        : Position.Right;

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggleCollapse(node.id);
  };

  const handleZoomFocus = (e: React.MouseEvent) => {
    e.stopPropagation();
    onSelectNode(node.id);
    onFocusNode(node.id, true);
  };

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        onSelectNode(node.id);
      }}
      onDoubleClick={(e) => {
        e.stopPropagation();
        onSelectNode(node.id);
        onFocusNode(node.id, true);
      }}
      style={{ opacity: isDimmed ? 0.24 : 1 }}
      className={clsx(
        'group relative w-[348px] rounded-xl border transition-all duration-150 select-none cursor-pointer',
        styleCfg.borderAccent,
        isDark ? styleCfg.darkBg : styleCfg.lightBg,
        isDark ? 'shadow-lg shadow-black/35' : 'shadow-md shadow-slate-300/60',
        isSelected && ['ring-2', styleCfg.ringClass, 'node-selected-ring scale-[1.015]'],
        !isSelected && isInLineage && (isDark ? 'ring-1 ring-slate-400/45' : 'ring-1 ring-slate-500/40'),
        isSearchMatch && !isSelected && 'ring-2 ring-amber-400',
        isDark ? 'hover:border-slate-400/70' : 'hover:border-slate-400'
      )}
    >
      {node.parentId !== null && (
        <Handle
          id="tgt-in"
          type="target"
          position={targetPos}
          className="!w-2.5 !h-2.5 !bg-slate-400 !border-2 !border-slate-900 opacity-70"
        />
      )}

      {/* TIER 1: MACRO OVERVIEW MODE (zoom < 0.44) — High-contrast poster typography readable from afar */}
      {lod === 'macro' ? (
        <div className="p-4 flex flex-col justify-between min-h-[168px]">
          <div className="flex items-center justify-between gap-2 mb-2">
            <span
              className={clsx(
                'px-2.5 py-0.5 rounded-md text-[13px] font-bold tracking-wider uppercase border',
                isDark ? styleCfg.badgeClassesDark : styleCfg.badgeClassesLight
              )}
            >
              {styleCfg.shortBadge}
            </span>
            {node.era && (
              <span className={clsx('text-xs font-mono-code font-medium', isDark ? 'text-slate-400' : 'text-slate-500')}>
                {node.era}
              </span>
            )}
          </div>

          <h3
            className={clsx(
              'text-[21px] leading-[1.22] font-bold line-clamp-3 tracking-tight',
              isDark ? 'text-slate-50' : 'text-slate-900'
            )}
          >
            {node.title}
          </h3>

          <div className="mt-3 pt-2 border-t border-slate-500/20 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-bold">
              {directOtherCount > 0 && (
                <span className="px-2 py-0.5 rounded bg-sky-500/20 text-sky-400">{directOtherCount} branches</span>
              )}
              {directProCount > 0 && (
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400">+{directProCount}</span>
              )}
              {directConCount > 0 && (
                <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-400">−{directConCount}</span>
              )}
            </div>

            {totalChildCount > 0 && (
              <button
                type="button"
                onClick={handleToggle}
                className={clsx(
                  'px-2.5 py-1 rounded-md text-xs font-bold flex items-center gap-1 transition-colors',
                  isCollapsed
                    ? 'bg-indigo-500 text-white hover:bg-indigo-400'
                    : isDark
                      ? 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                )}
              >
                {isCollapsed ? (
                  <>
                    <ChevronRight className="w-3.5 h-3.5" />
                    <span>Expand ({totalDescendantCount})</span>
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-3.5 h-3.5" />
                    <span>Collapse</span>
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      ) : (
        /* TIER 2 & 3: STANDARD (0.44–0.92) & DETAILED (>= 0.92) */
        <div className="p-3.5 flex flex-col gap-2">
          {/* Header Row */}
          <div className="flex items-center justify-between gap-1.5">
            <div className="flex items-center gap-1.5 min-w-0">
              <span
                className={clsx(
                  'inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10.5px] font-semibold tracking-wide uppercase border shrink-0',
                  isDark ? styleCfg.badgeClassesDark : styleCfg.badgeClassesLight
                )}
              >
                {node.kind === 'root' && <Scale className="w-3 h-3" />}
                {node.kind === 'pillar' && <FolderKanban className="w-3 h-3" />}
                {styleCfg.badge}
              </span>
              {node.isCustom && (
                <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[10px] font-semibold bg-violet-500/20 text-violet-300 border border-violet-400/30">
                  <Sparkles className="w-2.5 h-2.5" />
                  Sandbox
                </span>
              )}
            </div>

            <div className="flex items-center gap-1 shrink-0">
              {node.era && (
                <span
                  className={clsx(
                    'text-[10.5px] font-mono-code px-1.5 py-0.5 rounded',
                    isDark ? 'bg-slate-800/90 text-slate-400' : 'bg-slate-100 text-slate-600'
                  )}
                >
                  {node.era}
                </span>
              )}
              <button
                type="button"
                onClick={handleZoomFocus}
                title="Zoom & frame this branch (or double-click card)"
                className={clsx(
                  'p-1 rounded transition-colors opacity-70 group-hover:opacity-100',
                  isDark
                    ? 'hover:bg-slate-800 text-slate-400 hover:text-indigo-300'
                    : 'hover:bg-slate-100 text-slate-500 hover:text-indigo-600'
                )}
              >
                <Crosshair className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Title */}
          <h3
            className={clsx(
              'text-[14.5px] font-semibold leading-snug',
              isDark ? 'text-slate-100' : 'text-slate-900'
            )}
          >
            {node.title}
          </h3>

          {/* Summary */}
          <p
            className={clsx(
              'text-[12px] leading-relaxed',
              lod === 'detailed' ? 'line-clamp-4' : 'line-clamp-3',
              isDark ? 'text-slate-300/90' : 'text-slate-600'
            )}
          >
            {node.summary}
          </p>

          {/* Extra Evidence Preview in Detailed Zoom (zoom >= 0.92) */}
          {lod === 'detailed' && node.details.length > 0 && (
            <div
              className={clsx(
                'mt-0.5 p-2 rounded-lg text-[11px] leading-relaxed border',
                isDark
                  ? 'bg-slate-950/65 border-slate-800 text-slate-300'
                  : 'bg-slate-50 border-slate-200/80 text-slate-700'
              )}
            >
              <p className="line-clamp-2">• {node.details[0]}</p>
              {node.references && node.references.length > 0 && (
                <div
                  className={clsx(
                    'mt-1 flex items-center gap-1 text-[10px] font-medium',
                    isDark ? 'text-indigo-300/90' : 'text-indigo-600'
                  )}
                >
                  <BookOpen className="w-3 h-3 shrink-0" />
                  <span className="truncate">{node.references[0]}</span>
                </div>
              )}
            </div>
          )}

          {/* Footer: Tags + Sandbox Quick-Add + Expand/Collapse */}
          <div
            className={clsx(
              'pt-2 mt-0.5 border-t flex items-center justify-between gap-1.5',
              isDark ? 'border-slate-800/90' : 'border-slate-200/80'
            )}
          >
            <div className="flex items-center gap-1 flex-wrap min-w-0">
              {node.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className={clsx(
                    'px-1.5 py-0.5 rounded text-[10px] font-medium truncate',
                    isDark ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-600'
                  )}
                >
                  {tag}
                </span>
              ))}
              {node.tags.length > 2 && (
                <span className={clsx('text-[10px]', isDark ? 'text-slate-500' : 'text-slate-400')}>
                  +{node.tags.length - 2}
                </span>
              )}
            </div>

            <div className="flex items-center gap-1 shrink-0">
              {/* Quick Add Pro/Con in Sandbox */}
              {node.kind !== 'root' && (
                <div className="hidden group-hover:flex items-center gap-0.5 mr-0.5">
                  <button
                    type="button"
                    title="Add supporting argument (+)"
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenAddModal(node, node.kind === 'pillar' ? 'thesis' : 'pro');
                    }}
                    className={clsx(
                      'p-1 rounded transition-colors',
                      isDark
                        ? 'text-emerald-400 hover:bg-emerald-500/20'
                        : 'text-emerald-600 hover:bg-emerald-50'
                    )}
                  >
                    <PlusCircle className="w-3.5 h-3.5" />
                  </button>
                  {node.kind !== 'pillar' && (
                    <button
                      type="button"
                      title="Add counter-argument (−)"
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenAddModal(node, 'con');
                      }}
                      className={clsx(
                        'p-1 rounded transition-colors',
                        isDark ? 'text-rose-400 hover:bg-rose-500/20' : 'text-rose-600 hover:bg-rose-50'
                      )}
                    >
                      <MinusCircle className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              )}

              {/* Child Counts & Expand/Collapse Pill */}
              {totalChildCount > 0 && (
                <button
                  type="button"
                  onClick={handleToggle}
                  title={
                    isCollapsed
                      ? `Expand ${totalDescendantCount} hidden nodes in this branch`
                      : 'Collapse branch'
                  }
                  className={clsx(
                    'inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-semibold border transition-colors',
                    isCollapsed
                      ? 'bg-indigo-600 text-white border-indigo-500 hover:bg-indigo-500'
                      : isDark
                        ? 'bg-slate-800/90 text-slate-200 border-slate-700 hover:bg-slate-700'
                        : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
                  )}
                >
                  {directOtherCount > 0 && <span>{directOtherCount}</span>}
                  {directProCount > 0 && (
                    <span className={isCollapsed ? 'text-emerald-200' : 'text-emerald-400'}>
                      +{directProCount}
                    </span>
                  )}
                  {directConCount > 0 && (
                    <span className={isCollapsed ? 'text-rose-200' : 'text-rose-400'}>
                      −{directConCount}
                    </span>
                  )}
                  {isCollapsed ? (
                    <ChevronRight className="w-3 h-3 ml-0.5" />
                  ) : (
                    <ChevronDown className="w-3 h-3 ml-0.5" />
                  )}
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {totalChildCount > 0 &&
        (branchSide === 'center' ? (
          <>
            <Handle
              id="src-left"
              type="source"
              position={Position.Left}
              className="!w-2.5 !h-2.5 !bg-indigo-400 !border-2 !border-slate-900 opacity-85"
            />
            <Handle
              id="src-right"
              type="source"
              position={Position.Right}
              className="!w-2.5 !h-2.5 !bg-indigo-400 !border-2 !border-slate-900 opacity-85"
            />
          </>
        ) : (
          <Handle
            id="src-out"
            type="source"
            position={sourcePos}
            className="!w-2.5 !h-2.5 !bg-slate-400 !border-2 !border-slate-900 opacity-70"
          />
        ))}
    </div>
  );
}

export const DebateCardNode = memo(DebateCardNodeComponent);
