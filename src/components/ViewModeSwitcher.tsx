import clsx from 'clsx';
import { BookOpen, GitBranch, GraduationCap, MessageSquare } from 'lucide-react';
import { DebateViewMode } from '../types/debate';

interface ViewModeSwitcherProps {
  viewMode: DebateViewMode;
  onChangeViewMode: (mode: DebateViewMode) => void;
  isDark: boolean;
  className?: string;
}

const TABS: Array<{ id: DebateViewMode; label: string; icon: typeof GitBranch }> = [
  { id: 'graph', label: 'Graph', icon: GitBranch },
  { id: 'outline', label: 'Outline', icon: BookOpen },
  { id: 'flashcards', label: 'Quiz', icon: GraduationCap },
  { id: 'voice', label: 'Spar', icon: MessageSquare },
];

export function ViewModeSwitcher({
  viewMode,
  onChangeViewMode,
  isDark,
  className,
}: ViewModeSwitcherProps) {
  return (
    <div
      role="tablist"
      aria-label="Debate view mode"
      className={clsx(
        'inline-flex items-center p-1 rounded-xl transition-colors shrink-0',
        isDark ? 'bg-[#161619]' : 'bg-zinc-100',
        className
      )}
    >
      {TABS.map((tab) => {
        const Icon = tab.icon;
        const active = viewMode === tab.id;
        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChangeViewMode(tab.id)}
            className={clsx(
              'inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-medium transition-all',
              active
                ? isDark
                  ? 'bg-[#26262B] text-white shadow-xs'
                  : 'bg-white text-zinc-950 shadow-xs'
                : isDark
                  ? 'text-zinc-400 hover:text-zinc-200'
                  : 'text-zinc-500 hover:text-zinc-900'
            )}
          >
            <Icon className="w-3.5 h-3.5" />
            <span>{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
}
