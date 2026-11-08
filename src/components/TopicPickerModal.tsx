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
  Sparkles,
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

const CATEGORY_COLORS: Record<
  DebateTopicCategory,
  { bgLight: string; bgDark: string; borderLight: string; borderDark: string; textLight: string; textDark: string; iconGradient: string }
> = {
  'Geopolitics & Conflict': {
    bgLight: 'bg-blue-50/70 hover:bg-blue-100/80',
    bgDark: 'bg-blue-950/20 hover:bg-blue-950/40',
    borderLight: 'border-blue-200',
    borderDark: 'border-blue-800/40',
    textLight: 'text-blue-700',
    textDark: 'text-blue-400',
    iconGradient: 'from-blue-500 to-indigo-600',
  },
  'Technology & AI': {
    bgLight: 'bg-purple-50/70 hover:bg-purple-100/80',
    bgDark: 'bg-purple-950/20 hover:bg-purple-950/40',
    borderLight: 'border-purple-200',
    borderDark: 'border-purple-800/40',
    textLight: 'text-purple-700',
    textDark: 'text-purple-400',
    iconGradient: 'from-purple-500 to-pink-600',
  },
  'Economics & Labor': {
    bgLight: 'bg-emerald-50/70 hover:bg-emerald-100/80',
    bgDark: 'bg-emerald-950/20 hover:bg-emerald-950/40',
    borderLight: 'border-emerald-200',
    borderDark: 'border-emerald-800/40',
    textLight: 'text-emerald-700',
    textDark: 'text-emerald-400',
    iconGradient: 'from-emerald-500 to-teal-600',
  },
  'Energy & Climate': {
    bgLight: 'bg-amber-50/70 hover:bg-amber-100/80',
    bgDark: 'bg-amber-950/20 hover:bg-amber-950/40',
    borderLight: 'border-amber-200',
    borderDark: 'border-amber-800/40',
    textLight: 'text-amber-700',
    textDark: 'text-amber-400',
    iconGradient: 'from-amber-500 to-orange-600',
  },
  'Law & Society': {
    bgLight: 'bg-rose-50/70 hover:bg-rose-100/80',
    bgDark: 'bg-rose-950/20 hover:bg-rose-950/40',
    borderLight: 'border-rose-200',
    borderDark: 'border-rose-800/40',
    textLight: 'text-rose-700',
    textDark: 'text-rose-400',
    iconGradient: 'from-rose-500 to-red-600',
  },
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div
        className={clsx(
          'w-full max-w-4xl max-h-[90vh] rounded-2xl border shadow-2xl flex flex-col overflow-hidden transition-all',
          isDark ? 'bg-slate-950 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
        )}
      >
        {/* Header */}
        <div
          className={clsx(
            'p-4 sm:p-5 border-b flex items-start justify-between gap-4 shrink-0',
            isDark ? 'border-slate-800 bg-slate-900/60' : 'border-slate-100 bg-slate-50/80'
          )}
        >
          <div>
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-indigo-600 text-white shadow-xs">
                <Sparkles className="w-4 h-4" />
              </span>
              <h2 className="font-editorial text-lg sm:text-xl font-bold tracking-tight">
                Landmark Debate Graphs (2014–2026)
              </h2>
            </div>
            <p className={clsx('text-xs sm:text-sm mt-1', isDark ? 'text-slate-400' : 'text-slate-600')}>
              Explore 22 deeply researched dialectical maps across politics, technology, economics, and ethics.
              Sourced from Munk Debates, Oxford Union, Open to Debate, and Soho Forum.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className={clsx(
              'p-2 rounded-xl transition-colors shrink-0',
              isDark ? 'hover:bg-slate-800 text-slate-400 hover:text-slate-200' : 'hover:bg-slate-200 text-slate-500 hover:text-slate-900'
            )}
            title="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Controls: Search & Category Tabs */}
        <div
          className={clsx(
            'px-4 sm:px-5 py-3 border-b flex flex-col sm:flex-row gap-2.5 items-stretch sm:items-center justify-between shrink-0',
            isDark ? 'border-slate-800/80 bg-slate-900/30' : 'border-slate-100 bg-slate-50/40'
          )}
        >
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            <input
              ref={searchInputRef}
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search topics, thinkers, debates (e.g. AI risk, Russia, UBI, CRISPR, Nuclear)..."
              className={clsx(
                'w-full pl-9 pr-8 py-2 rounded-xl text-xs sm:text-sm border transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500',
                isDark
                  ? 'bg-slate-900 border-slate-800 text-slate-100 placeholder:text-slate-500'
                  : 'bg-white border-slate-200 text-slate-900 placeholder:text-slate-400'
              )}
            />
            {search && (
              <button
                type="button"
                onClick={() => setSearch('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200"
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
                'px-2.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all',
                selectedCategory === 'ALL'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : isDark
                    ? 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/70'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
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
                  'px-2.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all',
                  selectedCategory === cat
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : isDark
                      ? 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/70'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
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
            <div className="py-12 text-center text-slate-400">
              <p className="text-sm font-medium">No debate topics matched "{search}"</p>
              <button
                type="button"
                onClick={() => {
                  setSearch('');
                  setSelectedCategory('ALL');
                }}
                className="mt-2 text-xs text-indigo-400 hover:underline"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {filteredTopics.map((topic) => {
                const isActive = topic.id === activeTopicId;
                const IconComponent = ICON_MAP[topic.iconName] ?? Scale;
                const colors = CATEGORY_COLORS[topic.category];

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
                          ? 'border-indigo-500 bg-indigo-950/40 ring-1 ring-indigo-500/50'
                          : 'border-indigo-500 bg-indigo-50/70 ring-1 ring-indigo-500/50'
                        : isDark
                          ? 'border-slate-800/90 bg-slate-900/60 hover:bg-slate-900 hover:border-slate-700'
                          : 'border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300'
                    )}
                  >
                    {/* Category Icon */}
                    <div
                      className={clsx(
                        'w-10 h-10 rounded-xl bg-gradient-to-br flex items-center justify-center text-white shrink-0 shadow-sm',
                        colors.iconGradient
                      )}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0 pr-6">
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <span className="font-editorial font-bold text-sm tracking-tight">
                          {topic.shortTitle}
                        </span>
                        <span
                          className={clsx(
                            'text-[10.5px] px-2 py-0.5 rounded-full font-medium border shrink-0',
                            isDark ? colors.borderDark : colors.borderLight,
                            isDark ? colors.textDark : colors.textLight
                          )}
                        >
                          {topic.badge ?? topic.category}
                        </span>
                      </div>

                      <p className={clsx('text-xs font-medium mb-1 line-clamp-1', isDark ? 'text-slate-300' : 'text-slate-700')}>
                        {topic.title}
                      </p>

                      <p className={clsx('text-[11.5px] line-clamp-2', isDark ? 'text-slate-400' : 'text-slate-500')}>
                        {topic.subtitle}
                      </p>

                      <div className="mt-2 flex items-center gap-1.5 text-[10.5px] text-slate-400">
                        <span className="font-medium text-indigo-400">Debate:</span>
                        <span className="truncate">{topic.landmarkDebate}</span>
                      </div>
                    </div>

                    {/* Active Checkmark */}
                    {isActive && (
                      <div className="absolute right-3.5 top-3.5 w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-xs">
                        <Check className="w-3.5 h-3.5 stroke-[2.5]" />
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
            'p-3 px-5 border-t flex items-center justify-between text-xs shrink-0',
            isDark ? 'border-slate-800 bg-slate-900/60 text-slate-400' : 'border-slate-100 bg-slate-50/80 text-slate-500'
          )}
        >
          <span>Showing {filteredTopics.length} of {TOPIC_CATALOG.length} landmark debate topics</span>
          <span className="hidden sm:inline">Tip: Use <b>?topic=&lt;id&gt;</b> in URL to share direct links</span>
        </div>
      </div>
    </div>
  );
}
