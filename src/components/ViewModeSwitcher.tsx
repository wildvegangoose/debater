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
        'inline-flex items-center p-1 rounded-xl border shadow-xs transition-colors shrink-0',
        isDark ? 'bg-[#12161F] border-[#262E3E]' : 'bg-[#F3EFE6] border-[#E5DEC9]',
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
              'inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-bold transition-all',
              active
                ? isDark
                  ? 'bg-amber-500 text-stone-950 shadow-xs'
                  : 'bg-[#181B22] text-amber-300 shadow-xs'
                : isDark
                  ? 'text-stone-400 hover:text-stone-200'
                  : 'text-stone-600 hover:text-stone-900'
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
