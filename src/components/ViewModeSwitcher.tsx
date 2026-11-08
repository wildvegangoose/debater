import clsx from 'clsx';
import { BookOpen, GitBranch, GraduationCap } from 'lucide-react';
import { DebateViewMode } from '../types/debate';

interface ViewModeSwitcherProps {
  viewMode: DebateViewMode;
  onChangeViewMode: (mode: DebateViewMode) => void;
  isDark: boolean;
  className?: string;
}

export function ViewModeSwitcher({
  viewMode,
  onChangeViewMode,
  isDark,
  className,
}: ViewModeSwitcherProps) {
  return (
    <div
      role="tablist"
      aria-label="Debate visualization mode"
      className={clsx(
        'inline-flex items-center p-1 rounded-xl border shadow-xs transition-colors shrink-0',
        isDark ? 'bg-slate-900 border-slate-700/80' : 'bg-slate-100 border-slate-300',
        className
      )}
    >
      {/* Graph Mode */}
      <button
        type="button"
        role="tab"
        aria-selected={viewMode === 'graph'}
        onClick={() => onChangeViewMode('graph')}
        className={clsx(
          'inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-bold transition-all',
          viewMode === 'graph'
            ? isDark
              ? 'bg-indigo-600 text-white shadow-xs'
              : 'bg-white text-indigo-700 shadow-xs'
            : isDark
            ? 'text-slate-400 hover:text-slate-200'
            : 'text-slate-600 hover:text-slate-900'
        )}
      >
        <GitBranch className="w-3.5 h-3.5" />
        <span>Graph</span>
      </button>

      {/* Outline Feed Mode (Mobile Friendly) */}
      <button
        type="button"
        role="tab"
        aria-selected={viewMode === 'outline'}
        onClick={() => onChangeViewMode('outline')}
        className={clsx(
          'inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-bold transition-all',
          viewMode === 'outline'
            ? isDark
              ? 'bg-indigo-600 text-white shadow-xs'
              : 'bg-white text-indigo-700 shadow-xs'
            : isDark
            ? 'text-slate-400 hover:text-slate-200'
            : 'text-slate-600 hover:text-slate-900'
        )}
      >
        <BookOpen className="w-3.5 h-3.5" />
        <span>Outline</span>
      </button>

      {/* Flashcard Quiz Mode */}
      <button
        type="button"
        role="tab"
        aria-selected={viewMode === 'flashcards'}
        onClick={() => onChangeViewMode('flashcards')}
        className={clsx(
          'inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-bold transition-all relative',
          viewMode === 'flashcards'
            ? isDark
              ? 'bg-indigo-600 text-white shadow-xs'
              : 'bg-white text-indigo-700 shadow-xs'
            : isDark
            ? 'text-slate-400 hover:text-slate-200'
            : 'text-slate-600 hover:text-slate-900'
        )}
      >
        <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
        <span>Quiz</span>
        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse -ml-0.5" />
      </button>
    </div>
  );
}
