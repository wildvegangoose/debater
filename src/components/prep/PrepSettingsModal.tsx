import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { CheckCircle2, Eye, EyeOff, KeyRound, Loader2, ScrollText, X, XCircle } from 'lucide-react';
import { CoachLevel, PrepSettings } from '../../prep/types';
import { MODEL_OPTIONS } from '../../prep/storage';
import { testConnection } from '../../prep/lazyGrader';
import { GRADER_SYSTEM_PROMPT } from '../../prep/graderPrompt';

interface PrepSettingsModalProps {
  isOpen: boolean;
  settings: PrepSettings;
  onSave: (settings: PrepSettings) => void;
  onClose: () => void;
  isDark: boolean;
}

const LEVELS: Array<{ id: CoachLevel; label: string }> = [
  { id: 'novice', label: 'Novice' },
  { id: 'intermediate', label: 'Intermediate' },
  { id: 'advanced', label: 'Advanced' },
];

export function PrepSettingsModal({ isOpen, settings, onSave, onClose, isDark }: PrepSettingsModalProps) {
  const [draft, setDraft] = useState<PrepSettings>(settings);
  const [showKey, setShowKey] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);
  const [testState, setTestState] = useState<{ status: 'idle' | 'testing' | 'ok' | 'error'; message?: string }>({
    status: 'idle',
  });

  useEffect(() => {
    if (isOpen) {
      setDraft(settings);
      setTestState({ status: 'idle' });
    }
  }, [isOpen, settings]);

  if (!isOpen) return null;

  const inputClass = clsx(
    'w-full px-3 py-2 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500',
    isDark ? 'bg-slate-950 border-slate-700 text-slate-100' : 'bg-white border-slate-300 text-slate-900'
  );
  const labelClass = clsx('block text-xs font-semibold mb-1.5', isDark ? 'text-slate-300' : 'text-slate-700');
  const hintClass = clsx('text-[11px] mt-1', isDark ? 'text-slate-500' : 'text-slate-500');

  const handleTest = async () => {
    setTestState({ status: 'testing' });
    try {
      const name = await testConnection(draft);
      setTestState({ status: 'ok', message: `Connected: ${name}` });
    } catch (err) {
      setTestState({ status: 'error', message: err instanceof Error ? err.message : 'Connection failed' });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-slate-950/70 backdrop-blur-xs p-0 sm:p-4">
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Prep settings"
        className={clsx(
          'w-full sm:max-w-lg max-h-[92vh] overflow-y-auto rounded-t-2xl sm:rounded-2xl border shadow-2xl',
          isDark ? 'bg-slate-900 border-slate-700 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
        )}
      >
        <div
          className={clsx(
            'sticky top-0 flex items-center justify-between px-5 py-3 border-b',
            isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
          )}
        >
          <div className="flex items-center gap-2">
            <KeyRound className="w-4 h-4 text-indigo-400" />
            <h2 className="text-sm font-bold">AI Grading Settings</h2>
          </div>
          <button type="button" onClick={onClose} aria-label="Close" className="p-1 rounded-md hover:bg-slate-500/20">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="px-5 py-4 space-y-5">
          <div>
            <label className={labelClass} htmlFor="prep-api-key">
              Anthropic API key
            </label>
            <div className="relative">
              <input
                id="prep-api-key"
                type={showKey ? 'text' : 'password'}
                autoComplete="off"
                spellCheck={false}
                value={draft.apiKey}
                onChange={(e) => setDraft({ ...draft, apiKey: e.target.value })}
                placeholder="sk-ant-..."
                className={clsx(inputClass, 'pr-10 font-mono')}
              />
              <button
                type="button"
                onClick={() => setShowKey((v) => !v)}
                aria-label={showKey ? 'Hide key' : 'Show key'}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-slate-400"
              >
                {showKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            <p className={hintClass}>
              Stored only on this device and sent only to the grading API. Get a key at console.anthropic.com. Without a
              key you can still practise and grade yourself against the curated answer key.
            </p>
          </div>

          <div>
            <label className={labelClass} htmlFor="prep-model">
              Grader model
            </label>
            <select
              id="prep-model"
              value={draft.model}
              onChange={(e) => setDraft({ ...draft, model: e.target.value })}
              className={inputClass}
            >
              {MODEL_OPTIONS.map((m) => (
                <option key={m.id} value={m.id}>
                  {m.label}: {m.note}
                </option>
              ))}
            </select>
          </div>

          <div>
            <span className={labelClass}>Your level</span>
            <div className={clsx('inline-flex p-0.5 rounded-lg border', isDark ? 'border-slate-700' : 'border-slate-300')}>
              {LEVELS.map((l) => (
                <button
                  key={l.id}
                  type="button"
                  onClick={() => setDraft({ ...draft, level: l.id })}
                  className={clsx(
                    'px-3 py-1.5 rounded-md text-xs font-semibold transition-colors',
                    draft.level === l.id ? 'bg-indigo-600 text-white' : isDark ? 'text-slate-400' : 'text-slate-600'
                  )}
                >
                  {l.label}
                </button>
              ))}
            </div>
            <p className={hintClass}>Sets how strictly the coach calibrates scores.</p>
          </div>

          <div>
            <label className={labelClass} htmlFor="prep-notes">
              Notes for your coach (optional)
            </label>
            <textarea
              id="prep-notes"
              rows={3}
              value={draft.customInstructions}
              onChange={(e) => setDraft({ ...draft, customInstructions: e.target.value })}
              placeholder="e.g. I'm preparing for a British Parliamentary tournament. Be tough on my weighing."
              className={inputClass}
            />
          </div>

          <details className={clsx('rounded-lg border px-3 py-2', isDark ? 'border-slate-800' : 'border-slate-200')}>
            <summary className="text-xs font-semibold cursor-pointer">Advanced</summary>
            <div className="mt-3">
              <label className={labelClass} htmlFor="prep-base-url">
                API base URL (optional proxy)
              </label>
              <input
                id="prep-base-url"
                type="url"
                value={draft.baseUrl}
                onChange={(e) => setDraft({ ...draft, baseUrl: e.target.value })}
                placeholder="https://api.anthropic.com"
                className={clsx(inputClass, 'font-mono')}
              />
              <p className={hintClass}>
                Leave blank to call Anthropic directly. Set it to your own proxy if you'd rather keep the key off devices.
              </p>
            </div>
          </details>

          <div>
            <button
              type="button"
              onClick={() => setShowPrompt((v) => !v)}
              className={clsx(
                'inline-flex items-center gap-1.5 text-xs font-semibold',
                isDark ? 'text-indigo-300' : 'text-indigo-700'
              )}
            >
              <ScrollText className="w-3.5 h-3.5" />
              {showPrompt ? 'Hide' : 'View'} the grader's instructions
            </button>
            {showPrompt && (
              <pre
                className={clsx(
                  'mt-2 max-h-64 overflow-y-auto whitespace-pre-wrap text-[11px] leading-relaxed p-3 rounded-lg border',
                  isDark ? 'bg-slate-950 border-slate-800 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'
                )}
              >
                {GRADER_SYSTEM_PROMPT}
              </pre>
            )}
          </div>

          {testState.status !== 'idle' && (
            <div
              className={clsx(
                'flex items-start gap-2 text-xs rounded-lg px-3 py-2 border',
                testState.status === 'ok'
                  ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-400'
                  : testState.status === 'error'
                    ? 'border-rose-500/40 bg-rose-500/10 text-rose-400'
                    : isDark
                      ? 'border-slate-700 text-slate-300'
                      : 'border-slate-300 text-slate-700'
              )}
            >
              {testState.status === 'testing' && <Loader2 className="w-3.5 h-3.5 animate-spin shrink-0 mt-0.5" />}
              {testState.status === 'ok' && <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5" />}
              {testState.status === 'error' && <XCircle className="w-3.5 h-3.5 shrink-0 mt-0.5" />}
              <span>{testState.status === 'testing' ? 'Checking key…' : testState.message}</span>
            </div>
          )}
        </div>

        <div
          className={clsx(
            'sticky bottom-0 flex items-center justify-between gap-2 px-5 py-3 border-t',
            isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
          )}
        >
          <button
            type="button"
            onClick={handleTest}
            disabled={!draft.apiKey.trim() || testState.status === 'testing'}
            className={clsx(
              'px-3 py-2 rounded-lg text-xs font-semibold border disabled:opacity-40',
              isDark ? 'border-slate-700 text-slate-200' : 'border-slate-300 text-slate-700'
            )}
          >
            Test key
          </button>
          <div className="flex items-center gap-2">
            <button type="button" onClick={onClose} className="px-3 py-2 rounded-lg text-xs font-semibold text-slate-400">
              Cancel
            </button>
            <button
              type="button"
              onClick={() => {
                onSave(draft);
                onClose();
              }}
              className="px-4 py-2 rounded-lg text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
