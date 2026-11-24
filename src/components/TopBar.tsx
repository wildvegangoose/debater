import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import {
  ChevronDown,
  Compass,
  Download,
  Filter,
  GitPullRequest,
  HelpCircle,
  Landmark,
  Moon,
  RotateCcw,
  Scale,
  Search,
  Sparkles,
  Sun,
  Upload,
  X,
} from 'lucide-react';
import { DebateGraphDataset, DebateNode, DebateTag, DebateTopicId, DebateViewMode } from '../types/debate';
import { GraphStats } from '../utils/graphLayout';
import { TopicPickerModal } from './TopicPickerModal';
import { ViewModeSwitcher } from './ViewModeSwitcher';

interface TopicOption {
  id: DebateTopicId;
  shortTitle: string;
}

interface TopBarProps {
  dataset: DebateGraphDataset;
  topicOptions: TopicOption[];
  onSwitchTopic: (topicId: DebateTopicId) => void;
  viewMode: DebateViewMode;
  onChangeViewMode: (mode: DebateViewMode) => void;
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
  onOpenSuggestModal: () => void;
}

export function TopBar({
  dataset,
  topicOptions: _topicOptions,
  onSwitchTopic,
  viewMode,
  onChangeViewMode,
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
  onOpenSuggestModal,
}: TopBarProps) {
  const [searchFocused, setSearchFocused] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [showTagMenu, setShowTagMenu] = useState(false);
  const [showTopicModal, setShowTopicModal] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const isVoiceMode = viewMode === 'voice';

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
              (n.sections ?? []).some(
                (s) =>
                  s.heading.toLowerCase().includes(trimmedQuery) ||
                  s.paragraphs.some((p) => p.toLowerCase().includes(trimmedQuery))
              ) ||
              (n.sources ?? []).some(
                (src) =>
                  src.title.toLowerCase().includes(trimmedQuery) ||
                  (src.publisher ?? '').toLowerCase().includes(trimmedQuery)
              ) ||
              (n.references ?? []).some((r) => r.toLowerCase().includes(trimmedQuery))
          )
          .slice(0, 8)
      : [];

  return (
    <header
      className={clsx(
        'z-30 border-b shrink-0 transition-colors',
        isDark ? 'bg-[#0C0C0E] border-white/[0.08] text-zinc-100' : 'bg-white border-zinc-100 text-zinc-950'
      )}
    >
      {/* Mobile / Android Native-Style Single-Row App Bar (< md, used for Outline/Quiz/Graph) */}
      <div className="md:hidden px-4 h-13 flex items-center justify-between gap-2">
        <button
          type="button"
          onClick={() => setShowTopicModal(true)}
          className="flex items-center gap-2 min-w-0 flex-1 text-left py-1 active:opacity-80"
        >
          <span className="font-editorial text-[16px] font-medium truncate">
            {dataset.shortTitle}
          </span>
          <ChevronDown className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
        </button>

        <div className="flex items-center gap-1 shrink-0">
          {!isVoiceMode && viewMode !== 'flashcards' && (
            <button
              type="button"
              onClick={() => setMobileSearchOpen((v) => !v)}
              aria-label="Search arguments"
              className={clsx(
                'p-2 rounded-lg transition-colors',
                mobileSearchOpen
                  ? isDark
                    ? 'bg-white text-zinc-950'
                    : 'bg-zinc-950 text-white'
                  : isDark
                    ? 'text-zinc-400 hover:bg-white/[0.06]'
                    : 'text-zinc-500 hover:bg-zinc-100'
              )}
            >
              <Search className="w-4 h-4" />
            </button>
          )}
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label="Toggle theme"
            className={clsx(
              'p-2 rounded-lg transition-colors',
              isDark
                ? 'text-zinc-400 hover:bg-white/[0.06]'
                : 'text-zinc-500 hover:bg-zinc-100'
            )}
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Expandable Mobile Search Drawer (only when user taps search icon in Graph/Outline) */}
      {mobileSearchOpen && !isVoiceMode && (
        <div
          className={clsx(
            'md:hidden px-3 pb-2.5 border-t pt-2',
            isDark ? 'border-slate-800/80' : 'border-slate-200'
          )}
        >
          <div className="relative">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            <input
              type="text"
              autoFocus
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder={dataset.searchPlaceholder}
              className={clsx(
                'w-full pl-8 pr-8 py-2 rounded-xl text-xs border focus:outline-none focus:ring-2 focus:ring-indigo-500',
                isDark
                  ? 'bg-slate-900 border-slate-700 text-slate-100'
                  : 'bg-slate-100 border-slate-300 text-slate-900'
              )}
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => onSearchChange('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
          {searchDropdownResults.length > 0 && (
            <div
              className={clsx(
                'mt-1.5 rounded-xl border shadow-xl overflow-hidden max-h-60 overflow-y-auto',
                isDark ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200'
              )}
            >
              {searchDropdownResults.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    onSelectSearchResult(item.id);
                    setMobileSearchOpen(false);
                  }}
                  className={clsx(
                    'w-full text-left px-3 py-2 border-b last:border-b-0 flex flex-col gap-0.5',
                    isDark ? 'border-slate-800 hover:bg-slate-800' : 'border-slate-100 hover:bg-slate-50'
                  )}
                >
                  <span className="text-xs font-semibold truncate">{item.title}</span>
                  <span className="text-[11px] text-slate-400 line-clamp-1">{item.summary}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Desktop TopBar (md and larger) */}
      <div className="hidden md:flex px-4 py-2.5 flex-wrap items-center justify-between gap-3">
        {/* Brand, Topic Switcher & Stats */}
        <div className="flex items-center gap-3 min-w-0 flex-wrap">
          <div className="flex items-center gap-2.5 min-w-0">
            <div
              className={clsx(
                'w-8 h-8 rounded-lg flex items-center justify-center shrink-0',
                isDark
                  ? 'bg-white text-zinc-950'
                  : 'bg-zinc-950 text-white'
              )}
            >
              {dataset.id === 'economic-policies' ? (
                <Landmark className="w-4 h-4" />
              ) : (
                <Scale className="w-4 h-4" />
              )}
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-sm font-semibold tracking-tight hidden xl:inline">
                  Steelman
                </span>
                <span className="text-zinc-600 hidden xl:inline">/</span>
                <h1 className="font-editorial text-[17px] font-medium tracking-tight truncate">
                  {dataset.title}
                </h1>
                {!isVoiceMode && (
                  <span
                    className={clsx(
                      'hidden xl:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-medium border',
                      isDark
                        ? 'bg-[#141417] border-white/[0.08] text-zinc-400'
                        : 'bg-zinc-50 border-zinc-200 text-zinc-500'
                    )}
                  >
                    <span>{stats.totalNodes} nodes</span>
                    <span className="text-emerald-500">+{stats.proCount}</span>
                    <span className="text-rose-500">−{stats.conCount}</span>
                  </span>
                )}
                {hasSandboxChanges && !isVoiceMode && (
                  <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium bg-white/[0.08] text-zinc-300">
                    <Sparkles className="w-3 h-3" />
                    Sandbox
                  </span>
                )}
              </div>
              {!isVoiceMode && (
                <p className={clsx('text-[11.5px] hidden lg:block truncate', isDark ? 'text-zinc-500' : 'text-zinc-500')}>
                  {dataset.subtitle}
                </p>
              )}
            </div>
          </div>

          {/* Topic Switcher Button */}
          <div className="flex items-center gap-1.5 shrink-0">
            <button
              type="button"
              onClick={() => setShowTopicModal(true)}
              className={clsx(
                'inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border transition-all text-xs font-medium',
                isDark
                  ? 'bg-[#141417] border-white/[0.1] text-zinc-200 hover:bg-[#1E1E22] hover:border-white/20'
                  : 'bg-white border-zinc-200 text-zinc-800 hover:bg-zinc-50 hover:border-zinc-300'
              )}
            >
              <Compass className="w-3.5 h-3.5 text-zinc-400" />
              <span>{dataset.shortTitle}</span>
              <span className="text-[10.5px] text-zinc-500 font-mono">22</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-60" />
            </button>
          </div>
        </div>

        {/* View Mode Switcher: Graph | Outline | Quiz | Voice */}
        <div className="flex items-center justify-center">
          <ViewModeSwitcher
            viewMode={viewMode}
            onChangeViewMode={onChangeViewMode}
            isDark={isDark}
          />
        </div>

        {/* Search + Filter + Actions (hidden in Voice Mode for calm focus) */}
        <div className="flex items-center gap-2 justify-end">
          {!isVoiceMode && (
          <>
          {/* Instant Search Input */}
          <div className="relative w-56 lg:w-64">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setTimeout(() => setSearchFocused(false), 180)}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder={dataset.searchPlaceholder}
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
                  'absolute right-0 mt-1.5 w-52 rounded-xl border shadow-xl p-1.5 z-50 max-h-96 overflow-y-auto',
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
                {dataset.availableTags.map((tag) => (
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
            <span className="hidden 2xl:inline">Export</span>
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
            <span className="hidden 2xl:inline">Import</span>
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

          {/* Suggest Node to Public Map */}
          <button
            type="button"
            onClick={onOpenSuggestModal}
            title="Suggest an argument node or source for the public GitHub map"
            className={clsx(
              'inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold border transition-colors',
              isDark
                ? 'bg-emerald-500/15 border-emerald-500/35 text-emerald-300 hover:bg-emerald-500/25'
                : 'bg-emerald-50 border-emerald-200 text-emerald-700 hover:bg-emerald-100'
            )}
          >
            <GitPullRequest className="w-3.5 h-3.5" />
            <span className="hidden lg:inline">Suggest Node</span>
          </button>

          {/* Methodology Guide */}
          <button
            type="button"
            onClick={onOpenGuide}
            title="How to Read & Source Methodology"
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
          </>
          )}

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

      {/* Pillar Quick-Jump Navigation Strip (Canvas Mode Only) */}
      {viewMode === 'graph' && (
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
            Jump &amp; Zoom:
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
              {dataset.shortPillarLabels[pillar.id] ?? pillar.title}
            </button>
          ))}
        </div>
      )}

      {/* 22-Topic Deep-Dive Selector Modal */}
      <TopicPickerModal
        isOpen={showTopicModal}
        onClose={() => setShowTopicModal(false)}
        activeTopicId={dataset.id}
        onSelectTopic={onSwitchTopic}
        isDark={isDark}
      />
    </header>
  );
}
