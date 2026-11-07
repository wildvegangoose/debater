import clsx from 'clsx';
import { Scale, X } from 'lucide-react';

interface MethodologyModalProps {
  isOpen: boolean;
  isDark: boolean;
  onClose: () => void;
}

export function MethodologyModal({ isOpen, isDark, onClose }: MethodologyModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-xs">
      <div
        className={clsx(
          'w-full max-w-2xl rounded-2xl border shadow-2xl overflow-hidden',
          isDark ? 'bg-slate-900 border-slate-700 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
        )}
      >
        <div
          className={clsx(
            'px-6 py-4 border-b flex items-center justify-between',
            isDark ? 'border-slate-800 bg-slate-950/60' : 'border-slate-200 bg-slate-50'
          )}
        >
          <div className="flex items-center gap-2.5">
            <Scale className="w-5 h-5 text-indigo-400" />
            <h2 className="font-editorial text-lg font-semibold">
              How to Read This Debate Graph & Editorial Methodology
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className={clsx(
              'p-1.5 rounded-lg transition-colors',
              isDark ? 'hover:bg-slate-800 text-slate-400' : 'hover:bg-slate-200 text-slate-500'
            )}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 space-y-4 text-sm leading-relaxed max-h-[78vh] overflow-y-auto">
          <div
            className={clsx(
              'p-4 rounded-xl border',
              isDark ? 'bg-indigo-950/25 border-indigo-500/30' : 'bg-indigo-50/70 border-indigo-200'
            )}
          >
            <p className="font-semibold text-indigo-400 mb-1">Dialectical Neutrality & "Steelmanning"</p>
            <p className={isDark ? 'text-slate-300 text-xs leading-relaxed' : 'text-slate-700 text-xs leading-relaxed'}>
              This map does not endorse any single narrative or political outcome. Instead, it presents the strongest,
              most articulate historical, legal, strategic, and humanitarian formulations ("steelmanned" arguments)
              advanced across Israeli, Palestinian, international legal, and diplomatic scholarship.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider opacity-75">
              Understanding Colors & Recursive Stances
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
              <div className={clsx('p-3 rounded-lg border-l-4 border-l-sky-400 border', isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-slate-50 border-slate-200')}>
                <div className="font-semibold text-sky-400">Debate Pillars (Blue)</div>
                <p className="mt-0.5 opacity-80">Six core thematic dimensions structuring the overall conflict.</p>
              </div>
              <div className={clsx('p-3 rounded-lg border-l-4 border-l-amber-400 border', isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-slate-50 border-slate-200')}>
                <div className="font-semibold text-amber-400">Contested Theses (Amber)</div>
                <p className="mt-0.5 opacity-80">Specific, sharply stated claims or peace models open to Pro/Con debate.</p>
              </div>
              <div className={clsx('p-3 rounded-lg border-l-4 border-l-emerald-500 border', isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-slate-50 border-slate-200')}>
                <div className="font-semibold text-emerald-400">+ Supports Parent (Green)</div>
                <p className="mt-0.5 opacity-80">Logically reinforces or provides evidence for the claim directly above/left of it.</p>
              </div>
              <div className={clsx('p-3 rounded-lg border-l-4 border-l-rose-500 border', isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-slate-50 border-slate-200')}>
                <div className="font-semibold text-rose-400">− Challenges Parent (Red)</div>
                <p className="mt-0.5 opacity-80">
                  Rebuts its immediate parent. Note: a red card attached to another red card is a <strong>counter-rebuttal</strong>!
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider opacity-75">
              Semantic Zoom & Navigation Shortcuts
            </h3>
            <ul className="text-xs space-y-1.5 list-disc pl-5 opacity-90">
              <li>
                <strong>3-Level Semantic Zoom:</strong> Pinch or scroll to zoom smoothly. Zoomed out (&lt;44%) shows high-contrast poster headlines; mid-zoom shows summaries; zooming in (&gt;92%) reveals primary citations right on cards.
              </li>
              <li>
                <strong>Click vs. Double-Click:</strong> Single-click any card to open its full citations & lineage in the right Inspector; <strong>double-click</strong> any card (or press its 🎯 icon) to smoothly fly and frame its branch.
              </li>
              <li>
                <strong>Local Sandbox:</strong> Add your own supporting/counter arguments, edit existing cards, and export/import JSON. Custom changes save automatically in your browser.
              </li>
              <li>
                <strong>Keyboard Shortcuts:</strong> Press <kbd className="px-1.5 py-0.5 rounded bg-slate-700 text-slate-200 font-mono-code">/</kbd> or <kbd className="px-1.5 py-0.5 rounded bg-slate-700 text-slate-200 font-mono-code">⌘K</kbd> to search, <kbd className="px-1.5 py-0.5 rounded bg-slate-700 text-slate-200 font-mono-code">F</kbd> to fit view, and <kbd className="px-1.5 py-0.5 rounded bg-slate-700 text-slate-200 font-mono-code">Esc</kbd> to close inspector.
              </li>
            </ul>
          </div>
        </div>

        <div
          className={clsx(
            'px-6 py-3.5 border-t flex justify-end',
            isDark ? 'border-slate-800 bg-slate-950/60' : 'border-slate-200 bg-slate-50'
          )}
        >
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs font-semibold bg-indigo-600 text-white hover:bg-indigo-500 transition-colors"
          >
            Explore the Graph
          </button>
        </div>
      </div>
    </div>
  );
}
