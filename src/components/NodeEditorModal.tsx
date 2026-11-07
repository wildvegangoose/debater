import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { X } from 'lucide-react';
import { DebateNode, DebateNodeKind, DebateTag } from '../types/debate';

const ALL_TAGS: DebateTag[] = [
  'History',
  'International Law',
  'Security',
  'Human Rights',
  'Demographics',
  'Diplomacy',
  'Religion & Culture',
  'Governance',
];

interface NodeEditorModalProps {
  isOpen: boolean;
  mode: 'add' | 'edit';
  parentNode: DebateNode | null;
  initialNode: DebateNode | null;
  defaultKind: DebateNodeKind;
  isDark: boolean;
  onClose: () => void;
  onSave: (nodeData: Omit<DebateNode, 'id'> & { id?: string }) => void;
}

export function NodeEditorModal({
  isOpen,
  mode,
  parentNode,
  initialNode,
  defaultKind,
  isDark,
  onClose,
  onSave,
}: NodeEditorModalProps) {
  const [kind, setKind] = useState<DebateNodeKind>(defaultKind);
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [era, setEra] = useState('');
  const [detailsText, setDetailsText] = useState('');
  const [refsText, setRefsText] = useState('');
  const [selectedTags, setSelectedTags] = useState<DebateTag[]>(['Diplomacy']);

  useEffect(() => {
    if (!isOpen) return;
    if (mode === 'edit' && initialNode) {
      setKind(initialNode.kind);
      setTitle(initialNode.title);
      setSummary(initialNode.summary);
      setEra(initialNode.era ?? '');
      setDetailsText(initialNode.details.join('\n'));
      setRefsText((initialNode.references ?? []).join('\n'));
      setSelectedTags(initialNode.tags.length > 0 ? initialNode.tags : ['History']);
    } else {
      setKind(defaultKind);
      setTitle('');
      setSummary('');
      setEra('');
      setDetailsText('');
      setRefsText('');
      setSelectedTags(parentNode?.tags.slice(0, 2) ?? ['Diplomacy']);
    }
  }, [isOpen, mode, initialNode, defaultKind, parentNode]);

  if (!isOpen) return null;

  const toggleTag = (tag: DebateTag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? (prev.length > 1 ? prev.filter((t) => t !== tag) : prev) : [...prev, tag]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !summary.trim()) return;

    const details = detailsText
      .split('\n')
      .map((s) => s.trim())
      .filter(Boolean);
    const references = refsText
      .split('\n')
      .map((s) => s.trim())
      .filter(Boolean);

    onSave({
      id: mode === 'edit' && initialNode ? initialNode.id : undefined,
      parentId: mode === 'edit' && initialNode ? initialNode.parentId : parentNode?.id ?? 'root-ip',
      kind,
      title: title.trim(),
      summary: summary.trim(),
      era: era.trim() || undefined,
      details,
      references: references.length > 0 ? references : undefined,
      tags: selectedTags,
      relatedIds: mode === 'edit' && initialNode ? initialNode.relatedIds : undefined,
      isCustom: true,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-xs">
      <div
        className={clsx(
          'w-full max-w-xl rounded-2xl border shadow-2xl overflow-hidden',
          isDark ? 'bg-slate-900 border-slate-700 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
        )}
      >
        <div
          className={clsx(
            'px-5 py-4 border-b flex items-center justify-between',
            isDark ? 'border-slate-800 bg-slate-950/60' : 'border-slate-200 bg-slate-50'
          )}
        >
          <div>
            <h2 className="text-base font-semibold">
              {mode === 'edit' ? 'Edit Argument Node (Sandbox)' : 'Add Argument to Sandbox'}
            </h2>
            {mode === 'add' && parentNode && (
              <p className={clsx('text-xs mt-0.5 truncate max-w-md', isDark ? 'text-slate-400' : 'text-slate-500')}>
                Responding to: <span className="font-medium">{parentNode.title}</span>
              </p>
            )}
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

        <form onSubmit={handleSubmit} className="p-5 space-y-4 max-h-[82vh] overflow-y-auto">
          {/* Stance / Node Kind */}
          {kind !== 'root' && (
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5 opacity-80">
                Dialectical Role
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(['pro', 'con', 'thesis'] as const).map((k) => (
                  <button
                    key={k}
                    type="button"
                    onClick={() => setKind(k)}
                    className={clsx(
                      'py-2 px-3 rounded-lg text-xs font-semibold border transition-all',
                      kind === k
                        ? k === 'pro'
                          ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300'
                          : k === 'con'
                            ? 'bg-rose-500/20 border-rose-400 text-rose-300'
                            : 'bg-amber-500/20 border-amber-400 text-amber-300'
                        : isDark
                          ? 'bg-slate-800/70 border-slate-700 text-slate-400 hover:bg-slate-800'
                          : 'bg-slate-100 border-slate-200 text-slate-600 hover:bg-slate-200/70'
                    )}
                  >
                    {k === 'pro' ? '+ Supports' : k === 'con' ? '− Challenges' : 'Thesis / Claim'}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Headline */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider mb-1 opacity-80">
              Headline Claim *
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Concise, steelmanned headline (e.g., International Monitoring Along Jordan Valley)"
              className={clsx(
                'w-full px-3 py-2 rounded-lg text-sm border focus:outline-none focus:ring-2 focus:ring-indigo-500',
                isDark
                  ? 'bg-slate-950 border-slate-700 text-slate-100 placeholder:text-slate-500'
                  : 'bg-white border-slate-300 text-slate-900 placeholder:text-slate-400'
              )}
            />
          </div>

          {/* Summary */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider mb-1 opacity-80">
              Core Argument Summary *
            </label>
            <textarea
              required
              rows={3}
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              placeholder="2–3 sentences articulating the logic, legal basis, or historical rationale..."
              className={clsx(
                'w-full px-3 py-2 rounded-lg text-sm border focus:outline-none focus:ring-2 focus:ring-indigo-500',
                isDark
                  ? 'bg-slate-950 border-slate-700 text-slate-100 placeholder:text-slate-500'
                  : 'bg-white border-slate-300 text-slate-900 placeholder:text-slate-400'
              )}
            />
          </div>

          {/* Era & Tags */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider mb-1 opacity-80">
                Period / Era
              </label>
              <input
                type="text"
                value={era}
                onChange={(e) => setEra(e.target.value)}
                placeholder="e.g., 1967–Present"
                className={clsx(
                  'w-full px-3 py-2 rounded-lg text-xs border focus:outline-none focus:ring-2 focus:ring-indigo-500',
                  isDark ? 'bg-slate-950 border-slate-700 text-slate-100' : 'bg-white border-slate-300 text-slate-900'
                )}
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold uppercase tracking-wider mb-1 opacity-80">
                Thematic Lenses
              </label>
              <div className="flex flex-wrap gap-1.5">
                {ALL_TAGS.map((tag) => {
                  const active = selectedTags.includes(tag);
                  return (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => toggleTag(tag)}
                      className={clsx(
                        'px-2 py-1 rounded-md text-[11px] font-medium border transition-colors',
                        active
                          ? 'bg-indigo-600 text-white border-indigo-500'
                          : isDark
                            ? 'bg-slate-800 border-slate-700 text-slate-300'
                            : 'bg-slate-100 border-slate-200 text-slate-700'
                      )}
                    >
                      {tag}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Detailed Evidence Bullets */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider mb-1 opacity-80">
              Supporting Evidence / Context Bullets (one per line)
            </label>
            <textarea
              rows={3}
              value={detailsText}
              onChange={(e) => setDetailsText(e.target.value)}
              placeholder={'First historical or legal detail...\nSecond supporting point...'}
              className={clsx(
                'w-full px-3 py-2 rounded-lg text-xs border focus:outline-none focus:ring-2 focus:ring-indigo-500',
                isDark
                  ? 'bg-slate-950 border-slate-700 text-slate-100 placeholder:text-slate-500'
                  : 'bg-white border-slate-300 text-slate-900 placeholder:text-slate-400'
              )}
            />
          </div>

          {/* References */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider mb-1 opacity-80">
              Primary Sources / Citations (one per line)
            </label>
            <textarea
              rows={2}
              value={refsText}
              onChange={(e) => setRefsText(e.target.value)}
              placeholder={'UNSC Resolution 242 (1967)\nAuthor, Title (Year)'}
              className={clsx(
                'w-full px-3 py-2 rounded-lg text-xs border focus:outline-none focus:ring-2 focus:ring-indigo-500',
                isDark
                  ? 'bg-slate-950 border-slate-700 text-slate-100 placeholder:text-slate-500'
                  : 'bg-white border-slate-300 text-slate-900 placeholder:text-slate-400'
              )}
            />
          </div>

          <div className="pt-2 flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className={clsx(
                'px-4 py-2 rounded-lg text-xs font-semibold transition-colors',
                isDark ? 'bg-slate-800 text-slate-300 hover:bg-slate-700' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              )}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg text-xs font-semibold bg-indigo-600 text-white hover:bg-indigo-500 transition-colors"
            >
              {mode === 'edit' ? 'Save Changes' : 'Add to Debate Graph'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
