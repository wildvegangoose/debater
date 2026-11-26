import { useReactFlow, useStore } from '@xyflow/react';
import clsx from 'clsx';
import {
  ArrowDownWideNarrow,
  ArrowRightFromLine,
  GitBranch,
  Layers,
  Maximize2,
  Network,
  ZoomIn,
  ZoomOut,
} from 'lucide-react';
import { LayoutDirection } from '../types/debate';

interface CanvasToolbarProps {
  direction: LayoutDirection;
  onCycleDirection: () => void;
  showCrossLinks: boolean;
  onToggleCrossLinks: () => void;
  onApplyDepthPreset: (maxDepth: number | 'all') => void;
  isDark: boolean;
}

const zoomPercentSelector = (s: { transform: [number, number, number] }) => Math.round(s.transform[2] * 100);

export function CanvasToolbar({
  direction,
  onCycleDirection,
  showCrossLinks,
  onToggleCrossLinks,
  onApplyDepthPreset,
  isDark,
}: CanvasToolbarProps) {
  const { zoomIn, zoomOut, fitView } = useReactFlow();
  const zoomPct = useStore(zoomPercentSelector);

  const lodLabel = zoomPct < 36 ? 'Macro Map' : zoomPct < 90 ? 'Standard' : 'Deep Citations';

  return (
    <div className="absolute bottom-4 left-4 z-20 flex flex-wrap items-center gap-2 pointer-events-auto">
      {/* Zoom Controls & Live Semantic Zoom Indicator */}
      <div
        className={clsx(
          'flex items-center gap-1 p-1 rounded-xl border backdrop-blur-md shadow-xl',
          isDark
            ? 'bg-[#141417]/95 border-white/[0.08] text-zinc-200'
            : 'bg-white/95 border-zinc-200 text-zinc-800'
        )}
      >
        <button
          type="button"
          onClick={() => zoomOut({ duration: 240 })}
          title="Zoom Out"
          className={clsx(
            'p-1.5 rounded-lg transition-colors',
            isDark ? 'text-zinc-400 hover:text-white hover:bg-white/[0.06]' : 'text-zinc-500 hover:text-zinc-950 hover:bg-zinc-100'
          )}
        >
          <ZoomOut className="w-4 h-4" />
        </button>

        <div className="px-2 flex items-center gap-1.5 text-xs font-mono-code tabular-nums">
          <span className="font-medium">{zoomPct}%</span>
          <span
            className={clsx(
              'hidden sm:inline-block px-1.5 py-0.5 rounded text-[10px] font-sans font-medium',
              isDark ? 'bg-white/[0.06] text-zinc-400' : 'bg-zinc-100 text-zinc-600'
            )}
          >
            {lodLabel}
          </span>
        </div>

        <button
          type="button"
          onClick={() => zoomIn({ duration: 240 })}
          title="Zoom In"
          className={clsx(
            'p-1.5 rounded-lg transition-colors',
            isDark ? 'text-zinc-400 hover:text-white hover:bg-white/[0.06]' : 'text-zinc-500 hover:text-zinc-950 hover:bg-zinc-100'
          )}
        >
          <ZoomIn className="w-4 h-4" />
        </button>

        <div className={clsx('w-px h-4 mx-0.5', isDark ? 'bg-white/[0.08]' : 'bg-zinc-200')} />

        <button
          type="button"
          onClick={() => fitView({ duration: 500, padding: 0.12 })}
          title="Fit Visible Graph (Shortcut: F)"
          className={clsx(
            'inline-flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-medium transition-colors',
            isDark
              ? 'text-zinc-300 hover:text-white hover:bg-white/[0.06]'
              : 'text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100'
          )}
        >
          <Maximize2 className="w-3.5 h-3.5" />
          <span className="hidden md:inline">Fit All</span>
        </button>
      </div>

      {/* Depth Presets */}
      <div
        className={clsx(
          'hidden sm:flex items-center gap-1 p-1 rounded-xl border backdrop-blur-md shadow-xl text-xs',
          isDark
            ? 'bg-[#141417]/95 border-white/[0.08] text-zinc-400'
            : 'bg-white/95 border-zinc-200 text-zinc-600'
        )}
      >
        <span className="px-2 inline-flex items-center gap-1 text-[11px] font-medium text-zinc-500">
          <Layers className="w-3.5 h-3.5" />
          Depth
        </span>
        <button
          type="button"
          onClick={() => onApplyDepthPreset(1)}
          className={clsx(
            'px-2 py-1 rounded-lg font-medium transition-colors',
            isDark ? 'hover:bg-white/[0.06] hover:text-zinc-100' : 'hover:bg-zinc-100 hover:text-zinc-950'
          )}
        >
          Pillars
        </button>
        <button
          type="button"
          onClick={() => onApplyDepthPreset(2)}
          className={clsx(
            'px-2 py-1 rounded-lg font-medium transition-colors',
            isDark ? 'hover:bg-white/[0.06] hover:text-zinc-100' : 'hover:bg-zinc-100 hover:text-zinc-950'
          )}
        >
          Theses
        </button>
        <button
          type="button"
          onClick={() => onApplyDepthPreset(3)}
          className={clsx(
            'px-2 py-1 rounded-lg font-medium transition-colors',
            isDark ? 'hover:bg-white/[0.06] hover:text-zinc-100' : 'hover:bg-zinc-100 hover:text-zinc-950'
          )}
        >
          Pro / Con
        </button>
        <button
          type="button"
          onClick={() => onApplyDepthPreset('all')}
          className={clsx(
            'px-2 py-1 rounded-lg font-medium transition-colors',
            isDark
              ? 'text-zinc-100 hover:bg-white/[0.06]'
              : 'text-zinc-950 hover:bg-zinc-100'
          )}
        >
          Full Depth
        </button>
      </div>

      {/* Orientation & Cross-Links */}
      <div
        className={clsx(
          'flex items-center gap-1 p-1 rounded-xl border backdrop-blur-md shadow-xl text-xs',
          isDark
            ? 'bg-[#141417]/95 border-white/[0.08] text-zinc-300'
            : 'bg-white/95 border-zinc-200 text-zinc-700'
        )}
      >
        <button
          type="button"
          onClick={onCycleDirection}
          title="Cycle Layout: Mindmap (Center-Out) → Left-to-Right → Top-to-Bottom"
          className={clsx(
            'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg font-medium transition-colors',
            isDark ? 'hover:bg-white/[0.06] hover:text-white' : 'hover:bg-zinc-100 hover:text-zinc-950'
          )}
        >
          {direction === 'SPLIT' ? (
            <>
              <Network className="w-3.5 h-3.5" />
              <span className="hidden lg:inline">Mindmap (Split)</span>
            </>
          ) : direction === 'LR' ? (
            <>
              <ArrowRightFromLine className="w-3.5 h-3.5" />
              <span className="hidden lg:inline">Left → Right</span>
            </>
          ) : (
            <>
              <ArrowDownWideNarrow className="w-3.5 h-3.5" />
              <span className="hidden lg:inline">Top → Bottom</span>
            </>
          )}
        </button>

        <button
          type="button"
          onClick={onToggleCrossLinks}
          title="Toggle dashed cross-branch thematic connections"
          className={clsx(
            'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg font-medium transition-colors',
            showCrossLinks
              ? isDark
                ? 'bg-white text-zinc-950'
                : 'bg-zinc-950 text-white'
              : isDark
                ? 'text-zinc-400 hover:text-white hover:bg-white/[0.06]'
                : 'text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100'
          )}
        >
          <GitBranch className="w-3.5 h-3.5" />
          <span className="hidden lg:inline">Cross-Links</span>
        </button>
      </div>
    </div>
  );
}
