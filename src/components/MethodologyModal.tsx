import clsx from 'clsx';
import { Scale, X } from 'lucide-react';
import { DebateGraphDataset } from '../types/debate';

interface MethodologyModalProps {
  dataset: DebateGraphDataset;
  isOpen: boolean;
  isDark: boolean;
  onClose: () => void;
}

export function MethodologyModal({ dataset, isOpen, isDark, onClose }: MethodologyModalProps) {
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
              How to Read This Debate Graph &amp; Source Methodology
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
            <p className="font-semibold text-indigo-400 mb-1">Dialectical Neutrality &amp; "Steelmanning"</p>
            <p className={isDark ? 'text-slate-300 text-xs leading-relaxed' : 'text-slate-700 text-xs leading-relaxed'}>
              This platform does not endorse any single ideological camp or policy outcome. Every card presents the strongest,
              most articulate empirical, legal, historical, or theoretical formulation ("steelmanned" argument) advanced by leading
              proponents, paired directly with its sharpest counter-arguments and clickable links to original documents and studies.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider opacity-75">
              Understanding Colors &amp; Recursive Stances
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
              <div className={clsx('p-3 rounded-lg border-l-4 border-l-sky-400 border', isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-slate-50 border-slate-200')}>
                <div className="font-semibold text-sky-400">Debate Pillars (Blue)</div>
                <p className="mt-0.5 opacity-80">Symmetrical core thematic dimensions structuring the overall topic.</p>
              </div>
              <div className={clsx('p-3 rounded-lg border-l-4 border-l-amber-400 border', isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-slate-50 border-slate-200')}>
                <div className="font-semibold text-amber-400">Contested Theses (Amber)</div>
                <p className="mt-0.5 opacity-80">Specific, sharply stated claims or policy models open to Pro/Con debate.</p>
              </div>
              <div className={clsx('p-3 rounded-lg border-l-4 border-l-emerald-500 border', isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-slate-50 border-slate-200')}>
                <div className="font-semibold text-emerald-400">+ Supports Parent (Green)</div>
                <p className="mt-0.5 opacity-80">Logically reinforces or provides empirical evidence for its immediate parent claim.</p>
              </div>
              <div className={clsx('p-3 rounded-lg border-l-4 border-l-rose-500 border', isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-slate-50 border-slate-200')}>
                <div className="font-semibold text-rose-400">− Challenges Parent (Red)</div>
                <p className="mt-0.5 opacity-80">
                  Rebuts its immediate parent. Note: a red card attached to another red card is a <strong>counter-rebuttal</strong>!
                </p>
              </div>
            </div>
          </div>

          <div
            className={clsx(
              'p-4 rounded-xl border',
              isDark ? 'bg-amber-950/20 border-amber-500/30' : 'bg-amber-50/70 border-amber-200'
            )}
          >
            <p className="font-semibold text-amber-400 mb-1">
              Source Epistemology ({dataset.shortTitle})
            </p>
            <p className={isDark ? 'text-slate-300 text-xs leading-relaxed' : 'text-slate-700 text-xs leading-relaxed'}>
              {dataset.epistemologyNote}
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider opacity-75">
              Navigation, Rich Dossiers &amp; Topic Switching
            </h3>
            <ul className="text-xs space-y-1.5 list-disc pl-5 opacity-90">
              <li>
                <strong>Switch Deep-Dive Topics:</strong> Use the top header switcher (or <code>?topic=israel-palestine</code> and <code>?topic=economic-policies</code> URLs) to jump between standalone debate graphs.
              </li>
              <li>
                <strong>In-Depth Node Dossiers &amp; Original Links:</strong> Click any card to open its full multi-section background essay, key takeaways, and clickable links to original treaties, NBER/World Bank studies, watchdog audits, and broadcast archives. Use the expand icon in the drawer header for wide reading mode.
              </li>
              <li>
                <strong>3-Level Semantic Zoom:</strong> Zoomed out (&lt;36%) shows high-contrast poster headlines; mid-zoom shows summaries; zooming in (&ge;90%) reveals evidence previews and direct source links right on cards.
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
