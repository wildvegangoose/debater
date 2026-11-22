import clsx from 'clsx';
import { BookOpen, GitBranch, GraduationCap, MessageSquare } from 'lucide-react';
import { DebateViewMode } from '../types/debate';

interface MobileBottomNavProps {
  viewMode: DebateViewMode;
  onChangeViewMode: (mode: DebateViewMode) => void;
  isDark: boolean;
}

const NAV_ITEMS: Array<{
  id: DebateViewMode;
  label: string;
  icon: typeof MessageSquare;
}> = [
  { id: 'voice', label: 'Spar', icon: MessageSquare },
  { id: 'outline', label: 'Outline', icon: BookOpen },
  { id: 'flashcards', label: 'Quiz', icon: GraduationCap },
  { id: 'graph', label: 'Graph', icon: GitBranch },
];

export function MobileBottomNav({
  viewMode,
  onChangeViewMode,
  isDark,
}: MobileBottomNavProps) {
  return (
    <nav
      aria-label="Primary app navigation"
      className={clsx(
        'md:hidden border-t shrink-0 grid grid-cols-4 px-2 pt-1.5 pb-[max(0.5rem,env(safe-area-inset-bottom))] transition-colors z-30',
        isDark
          ? 'bg-[#0E1219]/95 border-[#222938] text-stone-400'
          : 'bg-white/95 border-[#E7E2D8] text-stone-500'
      )}
    >
      {NAV_ITEMS.map((item) => {
        const Icon = item.icon;
        const active = viewMode === item.id;
        return (
          <button
            key={item.id}
            type="button"
            onClick={() => onChangeViewMode(item.id)}
            aria-current={active ? 'page' : undefined}
            className="flex flex-col items-center justify-center gap-0.5 py-1 rounded-xl transition-colors"
          >
            <span
              className={clsx(
                'flex items-center justify-center w-12 h-7 rounded-full transition-all',
                active
                  ? isDark
                    ? 'bg-amber-400/18 text-amber-300'
                    : 'bg-amber-500/15 text-amber-800'
                  : 'text-current'
              )}
            >
              <Icon className={clsx('w-4 h-4', active && 'stroke-[2.3]')} />
            </span>
            <span
              className={clsx(
                'text-[10.5px] font-semibold leading-none',
                active
                  ? isDark
                    ? 'text-amber-300'
                    : 'text-amber-900'
                  : ''
              )}
            >
              {item.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
