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
  borderAccentDark: string;
  borderAccentLight: string;
  badgeClassesDark: string;
  badgeClassesLight: string;
}

const KIND_STYLES: Record<DebateNodeKind, KindVisualConfig> = {
  root: {
    badge: 'Central Inquiry',
    shortBadge: 'MOTION',
    borderAccentDark: 'border-t-2 border-t-white',
    borderAccentLight: 'border-t-2 border-t-zinc-950',
    badgeClassesDark: 'bg-white/[0.08] text-zinc-100 border-white/[0.14]',
    badgeClassesLight: 'bg-zinc-950 text-white border-zinc-950',
  },
  pillar: {
    badge: 'Debate Pillar',
    shortBadge: 'PILLAR',
    borderAccentDark: 'border-l-2 border-l-zinc-400',
    borderAccentLight: 'border-l-2 border-l-zinc-700',
    badgeClassesDark: 'bg-white/[0.06] text-zinc-300 border-white/[0.1]',
    badgeClassesLight: 'bg-zinc-100 text-zinc-700 border-zinc-200',
  },
  thesis: {
    badge: 'Contested Thesis',
    shortBadge: 'THESIS',
    borderAccentDark: 'border-l-2 border-l-zinc-600',
    borderAccentLight: 'border-l-2 border-l-zinc-400',
    badgeClassesDark: 'bg-white/[0.04] text-zinc-300 border-white/[0.08]',
    badgeClassesLight: 'bg-zinc-50 text-zinc-600 border-zinc-200',
  },
  pro: {
    badge: '+ Supports',
    shortBadge: '+ PRO',
    borderAccentDark: 'border-l-2 border-l-emerald-500/80',
    borderAccentLight: 'border-l-2 border-l-emerald-500/80',
    badgeClassesDark: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/25',
    badgeClassesLight: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  },
  con: {
    badge: '− Challenges',
    shortBadge: '− CON',
    borderAccentDark: 'border-l-2 border-l-rose-500/80',
    borderAccentLight: 'border-l-2 border-l-rose-500/80',
    badgeClassesDark: 'bg-rose-500/10 text-rose-400 border-rose-500/25',
    badgeClassesLight: 'bg-rose-50 text-rose-700 border-rose-200',
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
        isDark ? styleCfg.borderAccentDark : styleCfg.borderAccentLight,
        isDark
          ? 'bg-[#141417] border-white/[0.1] hover:border-white/25 shadow-lg shadow-black/40'
          : 'bg-white border-zinc-200 hover:border-zinc-400 shadow-sm shadow-black/5',
        isSelected && [
          'ring-2 node-selected-ring scale-[1.015]',
          isDark ? 'ring-white/85' : 'ring-zinc-950/85',
        ],
        !isSelected && isInLineage && (isDark ? 'ring-1 ring-white/25' : 'ring-1 ring-zinc-400/60'),
        isSearchMatch && !isSelected && (isDark ? 'ring-2 ring-zinc-300' : 'ring-2 ring-zinc-700')
      )}
    >
      {node.parentId !== null && (
        <Handle
          id="tgt-in"
          type="target"
          position={targetPos}
          className={clsx(
            '!w-2 !h-2 !border-2 opacity-75',
            isDark ? '!bg-zinc-400 !border-[#0C0C0E]' : '!bg-zinc-500 !border-white'
          )}
        />
      )}

      {/* TIER 1: MACRO OVERVIEW MODE (zoom < 0.36) — High-contrast poster typography readable from afar */}
      {lod === 'macro' ? (
        <div className="p-4 flex flex-col justify-between min-h-[168px]">
          <div className="flex items-center justify-between gap-2 mb-2">
            <span
              className={clsx(
                'px-2.5 py-0.5 rounded-md text-[12px] font-semibold tracking-wider uppercase border',
                isDark ? styleCfg.badgeClassesDark : styleCfg.badgeClassesLight
              )}
            >
              {styleCfg.shortBadge}
            </span>
            {node.era && (
              <span className={clsx('text-xs font-mono-code tabular-nums', isDark ? 'text-zinc-500' : 'text-zinc-500')}>
                {node.era}
              </span>
            )}
          </div>

          <h3
            className={clsx(
              'font-editorial text-[21px] leading-[1.2] font-medium line-clamp-3 tracking-[-0.015em]',
              isDark ? 'text-zinc-100' : 'text-zinc-950'
            )}
          >
            {node.title}
          </h3>

          <div
            className={clsx(
              'mt-3 pt-2.5 border-t flex items-center justify-between',
              isDark ? 'border-white/[0.08]' : 'border-zinc-100'
            )}
          >
            <div className="flex items-center gap-1.5 text-xs font-mono-code tabular-nums font-medium">
              {directOtherCount > 0 && (
                <span
                  className={clsx(
                    'px-2 py-0.5 rounded',
                    isDark ? 'bg-white/[0.06] text-zinc-300' : 'bg-zinc-100 text-zinc-700'
                  )}
                >
                  {directOtherCount} branches
                </span>
              )}
              {directProCount > 0 && (
                <span className="px-1.5 py-0.5 rounded text-emerald-500">+{directProCount}</span>
              )}
              {directConCount > 0 && (
                <span className="px-1.5 py-0.5 rounded text-rose-500">−{directConCount}</span>
              )}
            </div>

            {totalChildCount > 0 && (
              <button
                type="button"
                onClick={handleToggle}
                className={clsx(
                  'px-2.5 py-1 rounded-md text-xs font-semibold flex items-center gap-1 transition-colors',
                  isCollapsed
                    ? isDark
                      ? 'bg-white text-zinc-950 hover:bg-zinc-200'
                      : 'bg-zinc-950 text-white hover:bg-zinc-800'
                    : isDark
                      ? 'bg-white/[0.07] text-zinc-300 hover:bg-white/[0.12]'
                      : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
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
        /* TIER 2 & 3: STANDARD (0.36–0.90) & DETAILED (>= 0.90) */
        <div className="p-3.5 flex flex-col gap-2">
          {/* Header Row */}
          <div className="flex items-center justify-between gap-1.5">
            <div className="flex items-center gap-1.5 min-w-0">
              <span
                className={clsx(
                  'inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10.5px] font-medium tracking-wide uppercase border shrink-0',
                  isDark ? styleCfg.badgeClassesDark : styleCfg.badgeClassesLight
                )}
              >
                {node.kind === 'root' && <Scale className="w-3 h-3" />}
                {node.kind === 'pillar' && <FolderKanban className="w-3 h-3" />}
                {styleCfg.badge}
              </span>
              {node.isCustom && (
                <span
                  className={clsx(
                    'inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[10px] font-medium border',
                    isDark
                      ? 'bg-white/[0.06] text-zinc-300 border-white/[0.1]'
                      : 'bg-zinc-100 text-zinc-700 border-zinc-200'
                  )}
                >
                  <Sparkles className="w-2.5 h-2.5" />
                  Sandbox
                </span>
              )}
            </div>

            <div className="flex items-center gap-1 shrink-0">
              {node.era && (
                <span
                  className={clsx(
                    'text-[10.5px] font-mono-code tabular-nums px-1.5 py-0.5 rounded',
                    isDark ? 'bg-white/[0.05] text-zinc-400' : 'bg-zinc-100 text-zinc-600'
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
                  'p-1 rounded transition-colors opacity-65 group-hover:opacity-100',
                  isDark
                    ? 'hover:bg-white/[0.07] text-zinc-400 hover:text-zinc-100'
                    : 'hover:bg-zinc-100 text-zinc-500 hover:text-zinc-950'
                )}
              >
                <Crosshair className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Title */}
          <h3
            className={clsx(
              'font-editorial text-[15.5px] font-medium leading-snug tracking-[-0.01em]',
              isDark ? 'text-zinc-100' : 'text-zinc-950'
            )}
          >
            {node.title}
          </h3>

          {/* Summary */}
          <p
            className={clsx(
              'text-[12px] leading-relaxed',
              lod === 'detailed' ? 'line-clamp-4' : 'line-clamp-3',
              isDark ? 'text-zinc-400' : 'text-zinc-600'
            )}
          >
            {node.summary}
          </p>

          {/* Extra Evidence & Clickable Source Preview in Detailed Zoom (zoom >= 0.90) */}
          {lod === 'detailed' && node.details.length > 0 && (
            <div
              className={clsx(
                'mt-0.5 p-2.5 rounded-lg text-[11px] leading-relaxed border',
                isDark
                  ? 'bg-[#0C0C0E] border-white/[0.08] text-zinc-300'
                  : 'bg-zinc-50 border-zinc-200 text-zinc-700'
              )}
            >
              <p className="line-clamp-2">• {node.details[0].replace(/\*\*/g, '')}</p>
              {node.sources && node.sources.length > 0 ? (
                <a
                  href={node.sources[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className={clsx(
                    'mt-1.5 flex items-center gap-1 text-[10.5px] font-medium hover:underline underline-offset-2',
                    isDark ? 'text-zinc-200 hover:text-white' : 'text-zinc-800 hover:text-black'
                  )}
                >
                  <BookOpen className="w-3 h-3 shrink-0 opacity-70" />
                  <span className="truncate">{node.sources[0].title} ↗</span>
                </a>
              ) : (
                node.references &&
                node.references.length > 0 && (
                  <div
                    className={clsx(
                      'mt-1.5 flex items-center gap-1 text-[10.5px] font-medium',
                      isDark ? 'text-zinc-300' : 'text-zinc-700'
                    )}
                  >
                    <BookOpen className="w-3 h-3 shrink-0 opacity-70" />
                    <span className="truncate">{node.references[0]}</span>
                  </div>
                )
              )}
            </div>
          )}

          {/* Footer: Tags + Sandbox Quick-Add + Expand/Collapse */}
          <div
            className={clsx(
              'pt-2 mt-0.5 border-t flex items-center justify-between gap-1.5',
              isDark ? 'border-white/[0.08]' : 'border-zinc-100'
            )}
          >
            <div className="flex items-center gap-1 flex-wrap min-w-0">
              {node.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className={clsx(
                    'px-1.5 py-0.5 rounded text-[10px] font-medium truncate',
                    isDark ? 'bg-white/[0.05] text-zinc-400' : 'bg-zinc-100 text-zinc-600'
                  )}
                >
                  {tag}
                </span>
              ))}
              {node.tags.length > 2 && (
                <span className="text-[10px] text-zinc-500">
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
                        ? 'text-emerald-400 hover:bg-emerald-500/15'
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
                        isDark ? 'text-rose-400 hover:bg-rose-500/15' : 'text-rose-600 hover:bg-rose-50'
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
                    'inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-mono-code tabular-nums font-medium border transition-colors',
                    isCollapsed
                      ? isDark
                        ? 'bg-white text-zinc-950 border-white hover:bg-zinc-200'
                        : 'bg-zinc-950 text-white border-zinc-950 hover:bg-zinc-800'
                      : isDark
                        ? 'bg-white/[0.05] text-zinc-300 border-white/[0.08] hover:bg-white/[0.1]'
                        : 'bg-zinc-100 text-zinc-700 border-zinc-200 hover:bg-zinc-200/70'
                  )}
                >
                  {directOtherCount > 0 && <span>{directOtherCount}</span>}
                  {directProCount > 0 && (
                    <span className={isCollapsed ? 'opacity-85' : 'text-emerald-500'}>
                      +{directProCount}
                    </span>
                  )}
                  {directConCount > 0 && (
                    <span className={isCollapsed ? 'opacity-85' : 'text-rose-500'}>
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
              className={clsx(
                '!w-2 !h-2 !border-2 opacity-80',
                isDark ? '!bg-zinc-200 !border-[#0C0C0E]' : '!bg-zinc-800 !border-white'
              )}
            />
            <Handle
              id="src-right"
              type="source"
              position={Position.Right}
              className={clsx(
                '!w-2 !h-2 !border-2 opacity-80',
                isDark ? '!bg-zinc-200 !border-[#0C0C0E]' : '!bg-zinc-800 !border-white'
              )}
            />
          </>
        ) : (
          <Handle
            id="src-out"
            type="source"
            position={sourcePos}
            className={clsx(
              '!w-2 !h-2 !border-2 opacity-75',
              isDark ? '!bg-zinc-400 !border-[#0C0C0E]' : '!bg-zinc-500 !border-white'
            )}
          />
        ))}
    </div>
  );
}

export const DebateCardNode = memo(DebateCardNodeComponent);
