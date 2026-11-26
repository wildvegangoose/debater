import React, { useEffect, useMemo, useRef, useState } from 'react';
import clsx from 'clsx';
import {
  Atom,
  Award,
  Briefcase,
  Building2,
  Check,
  Coins,
  Compass,
  Cpu,
  CreditCard,
  Dna,
  Gavel,
  Globe,
  GraduationCap,
  Landmark,
  Leaf,
  MessageSquare,
  Package,
  Pill,
  Rocket,
  Scale,
  Search,
  Shield,
  TrendingUp,
  Vote,
  X,
} from 'lucide-react';
import { DebateTopicCategory, DebateTopicId } from '../types/debate';
import { TOPIC_CATALOG, TOPIC_CATEGORIES } from '../data/datasets';

interface TopicPickerModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeTopicId: DebateTopicId;
  onSelectTopic: (topicId: DebateTopicId) => void;
  isDark: boolean;
}

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Scale,
  Shield,
  Globe,
  Vote,
  Compass,
  Cpu,
  MessageSquare,
  Building2,
  Coins,
  Dna,
  Landmark,
  TrendingUp,
  CreditCard,
  Package,
  GraduationCap,
  Briefcase,
  Atom,
  Leaf,
  Rocket,
  Gavel,
  Pill,
  Award,
};

export function TopicPickerModal({
  isOpen,
  onClose,
  activeTopicId,
  onSelectTopic,
  isDark,
}: TopicPickerModalProps) {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<DebateTopicCategory | 'ALL'>('ALL');
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => searchInputRef.current?.focus(), 50);
    } else {
      setSearch('');
      setSelectedCategory('ALL');
    }
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  const filteredTopics = useMemo(() => {
    const q = search.trim().toLowerCase();
    return TOPIC_CATALOG.filter((item) => {
      if (selectedCategory !== 'ALL' && item.category !== selectedCategory) {
        return false;
      }
      if (!q) return true;
      return (
        item.shortTitle.toLowerCase().includes(q) ||
        item.title.toLowerCase().includes(q) ||
        item.subtitle.toLowerCase().includes(q) ||
        item.landmarkDebate.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
      );
    });
  }, [search, selectedCategory]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-5 bg-black/60 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={clsx(
          'w-full max-w-4xl max-h-[90vh] rounded-t-2xl sm:rounded-2xl border shadow-2xl flex flex-col overflow-hidden transition-all',
          isDark
            ? 'bg-[#141417] border-white/[0.08] text-zinc-100'
            : 'bg-white border-zinc-200 text-zinc-950'
        )}
      >
        <div className="pt-2.5 pb-1 flex justify-center sm:hidden shrink-0">
          <span className="w-9 h-1 rounded-full bg-zinc-500/35" />
        </div>

        {/* Header */}
        <div
          className={clsx(
            'px-5 py-4 border-b flex items-start justify-between gap-4 shrink-0',
            isDark ? 'border-white/[0.08]' : 'border-zinc-100'
          )}
        >
          <div>
            <h2 className="font-editorial text-lg sm:text-xl font-medium tracking-[-0.015em]">
              Choose a Motion
            </h2>
            <p className={clsx('text-xs mt-1', isDark ? 'text-zinc-400' : 'text-zinc-500')}>
              22 researched debate topics sourced from Munk Debates, Oxford Union, and primary studies.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className={clsx(
              'p-1.5 rounded-lg transition-colors shrink-0',
              isDark ? 'hover:bg-white/[0.06] text-zinc-400 hover:text-zinc-100' : 'hover:bg-zinc-100 text-zinc-500 hover:text-zinc-950'
            )}
            title="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Filter Controls: Search & Category Tabs */}
        <div
          className={clsx(
            'px-5 py-3 border-b flex flex-col sm:flex-row gap-2.5 items-stretch sm:items-center justify-between shrink-0',
            isDark ? 'border-white/[0.08]' : 'border-zinc-100'
          )}
        >
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" />
            <input
              ref={searchInputRef}
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search motions, thinkers, debates..."
              className={clsx(
                'w-full pl-9 pr-8 py-2 rounded-xl text-xs sm:text-sm border transition-colors focus:outline-none',
                isDark
                  ? 'bg-[#0C0C0E] border-white/[0.1] text-zinc-100 placeholder:text-zinc-500 focus:border-white/25'
                  : 'bg-zinc-50 border-zinc-200 text-zinc-950 placeholder:text-zinc-400 focus:border-zinc-400'
              )}
            />
            {search && (
              <button
                type="button"
                onClick={() => setSearch('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-200"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1 overflow-x-auto no-scrollbar shrink-0">
            <button
              type="button"
              onClick={() => setSelectedCategory('ALL')}
              className={clsx(
                'px-2.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all',
                selectedCategory === 'ALL'
                  ? isDark
                    ? 'bg-white text-zinc-950'
                    : 'bg-zinc-950 text-white'
                  : isDark
                    ? 'text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.06]'
                    : 'text-zinc-500 hover:text-zinc-950 hover:bg-zinc-100'
              )}
            >
              All (22)
            </button>
            {TOPIC_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={clsx(
                  'px-2.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all',
                  selectedCategory === cat
                    ? isDark
                      ? 'bg-white text-zinc-950'
                      : 'bg-zinc-950 text-white'
                    : isDark
                      ? 'text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.06]'
                      : 'text-zinc-500 hover:text-zinc-950 hover:bg-zinc-100'
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Topic Grid */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5">
          {filteredTopics.length === 0 ? (
            <div className="py-12 text-center text-zinc-500">
              <p className="text-sm font-medium">No debate topics matched &ldquo;{search}&rdquo;</p>
              <button
                type="button"
                onClick={() => {
                  setSearch('');
                  setSelectedCategory('ALL');
                }}
                className={clsx(
                  'mt-2 text-xs font-medium underline underline-offset-2',
                  isDark ? 'text-zinc-300 hover:text-white' : 'text-zinc-700 hover:text-zinc-950'
                )}
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              {filteredTopics.map((topic) => {
                const isActive = topic.id === activeTopicId;
                const IconComponent = ICON_MAP[topic.iconName] ?? Scale;

                return (
                  <button
                    key={topic.id}
                    type="button"
                    onClick={() => {
                      onSelectTopic(topic.id);
                      onClose();
                    }}
                    className={clsx(
                      'text-left p-3.5 rounded-xl border transition-all flex items-start gap-3 relative group',
                      isActive
                        ? isDark
                          ? 'border-white/30 bg-white/[0.06]'
                          : 'border-zinc-900 bg-zinc-50'
                        : isDark
                          ? 'border-white/[0.08] bg-[#0C0C0E] hover:bg-white/[0.03] hover:border-white/[0.16]'
                          : 'border-zinc-200 bg-white hover:bg-zinc-50/80 hover:border-zinc-300'
                    )}
                  >
                    {/* Monochrome Icon Tile */}
                    <div
                      className={clsx(
                        'w-9 h-9 rounded-xl border flex items-center justify-center shrink-0 transition-colors',
                        isActive
                          ? isDark
                            ? 'bg-white text-zinc-950 border-white'
                            : 'bg-zinc-950 text-white border-zinc-950'
                          : isDark
                            ? 'bg-[#141417] border-white/[0.08] text-zinc-400 group-hover:text-zinc-200'
                            : 'bg-zinc-100 border-zinc-200 text-zinc-600 group-hover:text-zinc-950'
                      )}
                    >
                      <IconComponent className="w-4 h-4" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0 pr-6">
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <span className="font-editorial font-medium text-[15px] tracking-tight">
                          {topic.shortTitle}
                        </span>
                        <span
                          className={clsx(
                            'text-[10.5px] px-2 py-0.5 rounded-full font-medium border shrink-0',
                            isDark
                              ? 'border-white/[0.08] text-zinc-400 bg-white/[0.03]'
                              : 'border-zinc-200 text-zinc-500 bg-zinc-50'
                          )}
                        >
                          {topic.badge ?? topic.category}
                        </span>
                      </div>

                      <p
                        className={clsx(
                          'text-xs font-medium mb-1 line-clamp-1',
                          isDark ? 'text-zinc-200' : 'text-zinc-800'
                        )}
                      >
                        {topic.title}
                      </p>

                      <p
                        className={clsx(
                          'text-[11.5px] leading-snug line-clamp-2',
                          isDark ? 'text-zinc-500' : 'text-zinc-500'
                        )}
                      >
                        {topic.subtitle}
                      </p>

                      <div className="mt-2 flex items-center gap-1.5 text-[10.5px] text-zinc-500">
                        <span className={clsx('font-medium', isDark ? 'text-zinc-400' : 'text-zinc-600')}>
                          Reference:
                        </span>
                        <span className="truncate">{topic.landmarkDebate}</span>
                      </div>
                    </div>

                    {/* Active Checkmark */}
                    {isActive && (
                      <div
                        className={clsx(
                          'absolute right-3.5 top-3.5 w-5 h-5 rounded-full flex items-center justify-center',
                          isDark ? 'bg-white text-zinc-950' : 'bg-zinc-950 text-white'
                        )}
                      >
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        <div
          className={clsx(
            'px-5 py-3 border-t flex items-center justify-between text-xs shrink-0 pb-[max(0.75rem,env(safe-area-inset-bottom))]',
            isDark
              ? 'border-white/[0.08] bg-[#0C0C0E]/60 text-zinc-500'
              : 'border-zinc-100 bg-zinc-50/70 text-zinc-500'
          )}
        >
          <span className="tabular-nums">
            Showing {filteredTopics.length} of {TOPIC_CATALOG.length} landmark motions
          </span>
          <span className="hidden sm:inline">
            Share direct link via <code className="font-mono text-[11px]">?topic=&lt;id&gt;</code>
          </span>
        </div>
      </div>
    </div>
  );
}
