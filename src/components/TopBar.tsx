import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import {
  Compass,
  Download,
  Filter,
  HelpCircle,
  Moon,
  RotateCcw,
  Scale,
  Search,
  Sparkles,
  Sun,
  Upload,
  X,
} from 'lucide-react';
import { DebateNode, DebateTag } from '../types/debate';
import { GraphStats } from '../utils/graphLayout';

const ALL_TAGS: DebateTag[] = [
  'History',
  'International Law',
  'Security',
  'Human Rights',
  'Demographics',
  'Diplomacy',
  'Religion & Culture',
  'Governance',
];

const SHORT_PILLAR_LABELS: Record<string, string> = {
  'pillar-self-determination': '1. Origins & 1948',
  'pillar-borders-settlements': '2. 1967 & Settlements',
  'pillar-gaza-security': '3. Gaza, Oct 7 & ICJ',
  'pillar-regional-geopolitics': '4. Iran, Accords & U.S.',
  'pillar-refugees-return': '5. Refugees & Equality',
  'pillar-jerusalem': '6. Jerusalem & UN',
  'pillar-global-discourse': '7. Antisemitism, BDS & Law',
  'pillar-endgames': '8. Peace Endgames',
};

interface TopBarProps {
  nodes: DebateNode[];
  stats: GraphStats;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  activeTag: DebateTag | null;
  onTagChange: (tag: DebateTag | null) => void;
  activePillarId: string | null;
  onJumpToPillar: (pillarId: string | null) => void;
  onSelectSearchResult: (nodeId: string) => void;
  hasSandboxChanges: boolean;
  onExportJson: () => void;
  onImportJson: (file: File) => void;
  onResetSandbox: () => void;
  isDark: boolean;
  onToggleTheme: () => void;
  onOpenGuide: () => void;
}

export function TopBar({
  nodes,
  stats,
  searchQuery,
  onSearchChange,
  activeTag,
  onTagChange,
  activePillarId,
  onJumpToPillar,
  onSelectSearchResult,
  hasSandboxChanges,
  onExportJson,
  onImportJson,
  onResetSandbox,
  isDark,
  onToggleTheme,
  onOpenGuide,
}: TopBarProps) {
  const [searchFocused, setSearchFocused] = useState(false);
  const [showTagMenu, setShowTagMenu] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        searchInputRef.current?.focus();
      } else if (
        e.key === '/' &&
        document.activeElement?.tagName !== 'INPUT' &&
        document.activeElement?.tagName !== 'TEXTAREA'
      ) {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const pillars = nodes.filter((n) => n.kind === 'pillar');

  const trimmedQuery = searchQuery.trim().toLowerCase();
  const searchDropdownResults =
    trimmedQuery.length >= 2
      ? nodes
          .filter(
            (n) =>
              n.title.toLowerCase().includes(trimmedQuery) ||
              n.summary.toLowerCase().includes(trimmedQuery) ||
              n.details.some((d) => d.toLowerCase().includes(trimmedQuery)) ||
              (n.references ?? []).some((r) => r.toLowerCase().includes(trimmedQuery))
          )
          .slice(0, 8)
      : [];

  return (
    <header
      className={clsx(
        'z-30 border-b shrink-0 transition-colors',
        isDark ? 'bg-slate-950/95 border-slate-800/90 text-slate-100' : 'bg-white/95 border-slate-200 text-slate-900'
      )}
    >
      {/* Main Row */}
      <div className="px-4 py-2.5 flex flex-wrap items-center justify-between gap-3">
        {/* Brand & Stats */}
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-sky-500 flex items-center justify-center text-white shadow-md shadow-indigo-500/25 shrink-0">
            <Scale className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <h1 className="font-editorial text-lg font-semibold tracking-tight truncate">
                Israeli–Palestinian Conflict Debate Graph
              </h1>
              <span
                className={clsx(
                  'hidden md:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-medium border',
                  isDark
                    ? 'bg-slate-900 border-slate-800 text-slate-300'
                    : 'bg-slate-100 border-slate-200 text-slate-600'
                )}
              >
                <span>{stats.totalNodes} nodes</span>
                <span className="text-emerald-400">+{stats.proCount}</span>
                <span className="text-rose-400">−{stats.conCount}</span>
              </span>
              {hasSandboxChanges && (
                <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-violet-500/20 text-violet-300 border border-violet-400/30">
                  <Sparkles className="w-3 h-3" />
                  Sandbox Active
                </span>
              )}
            </div>
            <p className={clsx('text-[11.5px] hidden sm:block truncate', isDark ? 'text-slate-400' : 'text-slate-500')}>
              Zoom out for macro structure • Zoom in or click cards for legal & historical citations • Double-click to fly to branch
            </p>
          </div>
        </div>

        {/* Search + Filter + Actions */}
        <div className="flex items-center gap-2 flex-1 sm:flex-initial justify-end">
          {/* Instant Search Input */}
          <div className="relative w-full sm:w-64 md:w-76">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setTimeout(() => setSearchFocused(false), 180)}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search claims, UN res, dates... (/)"
              className={clsx(
                'w-full pl-8 pr-7 py-1.5 rounded-lg text-xs border transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500',
                isDark
                  ? 'bg-slate-900 border-slate-800 text-slate-100 placeholder:text-slate-500'
                  : 'bg-slate-100 border-slate-200 text-slate-900 placeholder:text-slate-400'
              )}
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => onSearchChange('')}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}

            {/* Instant Search Fly-To Results */}
            {searchFocused && searchDropdownResults.length > 0 && (
              <div
                className={clsx(
                  'absolute left-0 right-0 mt-1.5 rounded-xl border shadow-2xl overflow-hidden z-50 max-h-80 overflow-y-auto',
                  isDark ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200'
                )}
              >
                {searchDropdownResults.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onMouseDown={() => onSelectSearchResult(item.id)}
                    className={clsx(
                      'w-full text-left px-3 py-2.5 border-b last:border-b-0 transition-colors flex flex-col gap-0.5',
                      isDark
                        ? 'border-slate-800 hover:bg-slate-800/80'
                        : 'border-slate-100 hover:bg-slate-50'
                    )}
                  >
                    <div className="flex items-center gap-1.5">
                      <span
                        className={clsx(
                          'w-2 h-2 rounded-full shrink-0',
                          item.kind === 'pro'
                            ? 'bg-emerald-400'
                            : item.kind === 'con'
                              ? 'bg-rose-400'
                              : item.kind === 'thesis'
                                ? 'bg-amber-400'
                                : 'bg-sky-400'
                        )}
                      />
                      <span className="text-xs font-semibold truncate">{item.title}</span>
                    </div>
                    <span className={clsx('text-[11px] line-clamp-1 pl-3.5', isDark ? 'text-slate-400' : 'text-slate-500')}>
                      {item.summary}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Thematic Lens Filter Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setShowTagMenu((v) => !v)}
              className={clsx(
                'inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium border transition-colors',
                activeTag
                  ? 'bg-indigo-600 text-white border-indigo-500'
                  : isDark
                    ? 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800'
                    : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200/70'
              )}
            >
              <Filter className="w-3.5 h-3.5" />
              <span className="hidden md:inline">{activeTag ?? 'Lens'}</span>
            </button>

            {showTagMenu && (
              <div
                className={clsx(
                  'absolute right-0 mt-1.5 w-48 rounded-xl border shadow-xl p-1.5 z-50',
                  isDark ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200'
                )}
              >
                <button
                  type="button"
                  onClick={() => {
                    onTagChange(null);
                    setShowTagMenu(false);
                  }}
                  className={clsx(
                    'w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors',
                    activeTag === null
                      ? 'bg-indigo-600 text-white'
                      : isDark
                        ? 'text-slate-300 hover:bg-slate-800'
                        : 'text-slate-700 hover:bg-slate-100'
                  )}
                >
                  All Lenses
                </button>
                {ALL_TAGS.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => {
                      onTagChange(activeTag === tag ? null : tag);
                      setShowTagMenu(false);
                    }}
                    className={clsx(
                      'w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors',
                      activeTag === tag
                        ? 'bg-indigo-600 text-white'
                        : isDark
                          ? 'text-slate-300 hover:bg-slate-800'
                          : 'text-slate-700 hover:bg-slate-100'
                    )}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Export / Import / Reset Sandbox */}
          <button
            type="button"
            onClick={onExportJson}
            title="Export Debate Graph JSON"
            className={clsx(
              'hidden sm:inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium border transition-colors',
              isDark
                ? 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800'
                : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200/70'
            )}
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden lg:inline">Export</span>
          </button>

          <input
            ref={fileInputRef}
            type="file"
            accept="application/json"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) onImportJson(file);
              e.target.value = '';
            }}
          />
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            title="Import Debate Graph JSON"
            className={clsx(
              'hidden sm:inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium border transition-colors',
              isDark
                ? 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800'
                : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200/70'
            )}
          >
            <Upload className="w-3.5 h-3.5" />
            <span className="hidden lg:inline">Import</span>
          </button>

          {hasSandboxChanges && (
            <button
              type="button"
              onClick={onResetSandbox}
              title="Reset local sandbox to curated graph"
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium border border-amber-500/40 bg-amber-500/10 text-amber-400 hover:bg-amber-500/20 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden xl:inline">Reset</span>
            </button>
          )}

          {/* Methodology Guide */}
          <button
            type="button"
            onClick={onOpenGuide}
            title="How to Read & Neutrality Methodology"
            className={clsx(
              'inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium border transition-colors',
              isDark
                ? 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800'
                : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200/70'
            )}
          >
            <HelpCircle className="w-3.5 h-3.5 text-indigo-400" />
            <span className="hidden md:inline">Guide</span>
          </button>

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={onToggleTheme}
            title={isDark ? 'Switch to Light Paper Theme' : 'Switch to Dark Midnight Theme'}
            className={clsx(
              'p-1.5 rounded-lg border transition-colors',
              isDark
                ? 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800'
                : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200/70'
            )}
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>
        </div>
      </div>

      {/* Pillar Quick-Jump Navigation Strip */}
      <div
        className={clsx(
          'px-4 py-1.5 border-t flex items-center gap-1.5 overflow-x-auto no-scrollbar',
          isDark ? 'border-slate-800/70 bg-slate-900/40' : 'border-slate-100 bg-slate-50/70'
        )}
      >
        <span
          className={clsx(
            'inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider mr-1 shrink-0',
            isDark ? 'text-slate-400' : 'text-slate-500'
          )}
        >
          <Compass className="w-3.5 h-3.5 text-indigo-400" />
          Jump & Zoom:
        </span>

        <button
          type="button"
          onClick={() => onJumpToPillar(null)}
          className={clsx(
            'px-2.5 py-1 rounded-md text-xs font-medium shrink-0 transition-colors',
            activePillarId === null
              ? 'bg-indigo-600 text-white shadow-xs'
              : isDark
                ? 'text-slate-300 hover:bg-slate-800'
                : 'text-slate-600 hover:bg-slate-200/70'
          )}
        >
          Full Map Overview
        </button>

        {pillars.map((pillar) => (
          <button
            key={pillar.id}
            type="button"
            onClick={() => onJumpToPillar(pillar.id)}
            className={clsx(
              'px-2.5 py-1 rounded-md text-xs font-medium shrink-0 transition-colors',
              activePillarId === pillar.id
                ? 'bg-sky-500/25 text-sky-300 border border-sky-400/40'
                : isDark
                  ? 'text-slate-300 hover:bg-slate-800'
                  : 'text-slate-600 hover:bg-slate-200/70'
            )}
          >
            {SHORT_PILLAR_LABELS[pillar.id] ?? pillar.title}
          </button>
        ))}
      </div>
    </header>
  );
}
