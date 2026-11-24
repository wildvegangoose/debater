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
        'md:hidden border-t shrink-0 grid grid-cols-4 px-2 pt-2 pb-[max(0.55rem,env(safe-area-inset-bottom))] transition-colors z-30',
        isDark
          ? 'bg-[#0C0C0E] border-white/[0.08] text-zinc-500'
          : 'bg-white border-zinc-100 text-zinc-400'
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
            className={clsx(
              'flex flex-col items-center justify-center gap-1 py-0.5 transition-colors',
              active
                ? isDark
                  ? 'text-white'
                  : 'text-zinc-950'
                : isDark
                  ? 'hover:text-zinc-300'
                  : 'hover:text-zinc-700'
            )}
          >
            <Icon className={clsx('w-[18px] h-[18px]', active && 'stroke-[2.25]')} />
            <span className={clsx('text-[10.5px] leading-none', active ? 'font-semibold' : 'font-medium')}>
              {item.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
