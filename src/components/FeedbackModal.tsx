import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { Check, ExternalLink, Send, X } from 'lucide-react';
import {
  FeedbackCategory,
  FeedbackSentiment,
  isPostHogConfigured,
  submitUserFeedback,
  trackEvent,
} from '../utils/analytics';

interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
  viewMode: string;
  topicId: string;
  topicTitle: string;
  isDark: boolean;
}

const GITHUB_FEEDBACK_BASE = 'https://github.com/wildvegangoose/debater/issues/new';

const SENTIMENT_OPTIONS: Array<{ id: FeedbackSentiment; label: string }> = [
  { id: 'love', label: 'Love it' },
  { id: 'good', label: 'Good' },
  { id: 'confusing', label: 'Confusing' },
  { id: 'frustrating', label: 'Frustrating' },
];

const CATEGORY_OPTIONS: Array<{ id: FeedbackCategory; label: string }> = [
  { id: 'idea', label: 'Idea' },
  { id: 'ux_friction', label: 'UX Friction' },
  { id: 'bug', label: 'Bug' },
  { id: 'topic_request', label: 'Topic Request' },
];

export function FeedbackModal({
  isOpen,
  onClose,
  viewMode,
  topicId,
  topicTitle,
  isDark,
}: FeedbackModalProps) {
  const [sentiment, setSentiment] = useState<FeedbackSentiment>('good');
  const [category, setCategory] = useState<FeedbackCategory>('idea');
  const [message, setMessage] = useState('');
  const [submittedMode, setSubmittedMode] = useState<'posthog' | 'fallback' | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    setSubmittedMode(null);
    trackEvent('feedback_opened', { view_mode: viewMode, topic_id: topicId });
  }, [isOpen, viewMode, topicId]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const posthogLive = isPostHogConfigured();

  const buildGitHubIssueUrl = () => {
    const catLabel = CATEGORY_OPTIONS.find((c) => c.id === category)?.label ?? category;
    const sentLabel = SENTIMENT_OPTIONS.find((s) => s.id === sentiment)?.label ?? sentiment;
    const title = `[Feedback · ${catLabel}] ${message.trim().slice(0, 64) || sentLabel}`;
    const body = [
      `**Feeling:** ${sentLabel}`,
      `**Category:** ${catLabel}`,
      `**Screen:** ${viewMode} · **Motion:** ${topicTitle} (\`${topicId}\`)`,
      '',
      message.trim() || '_No additional notes provided._',
    ].join('\n');
    const url = new URL(GITHUB_FEEDBACK_BASE);
    url.searchParams.set('title', title);
    url.searchParams.set('body', body);
    url.searchParams.set('labels', 'feedback');
    return url.toString();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const sentToPostHog = submitUserFeedback({
      sentiment,
      category,
      message,
      viewMode,
      topicId,
      topicTitle,
      isDark,
    });
    setSubmittedMode(sentToPostHog ? 'posthog' : 'fallback');
  };

  const handleResetAndClose = () => {
    setMessage('');
    setSentiment('good');
    setCategory('idea');
    setSubmittedMode(null);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4 bg-black/60 backdrop-blur-xs"
      onClick={handleResetAndClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={clsx(
          'w-full max-w-md max-h-[88vh] rounded-t-2xl sm:rounded-2xl border shadow-2xl flex flex-col overflow-hidden',
          isDark
            ? 'bg-[#141417] border-white/[0.08] text-zinc-100'
            : 'bg-white border-zinc-200 text-zinc-950'
        )}
      >
        <div className="pt-2.5 pb-1 flex justify-center sm:hidden shrink-0">
          <span className="w-9 h-1 rounded-full bg-zinc-500/35" />
        </div>

        {/* Header */}
        <div
          className={clsx(
            'px-5 py-3.5 border-b flex items-center justify-between shrink-0',
            isDark ? 'border-white/[0.08]' : 'border-zinc-100'
          )}
        >
          <h2 className="text-[15px] font-semibold tracking-tight">Send Feedback</h2>
          <button
            type="button"
            onClick={handleResetAndClose}
            aria-label="Close feedback"
            className={clsx(
              'p-1.5 rounded-lg transition-colors',
              isDark ? 'text-zinc-400 hover:bg-white/[0.06]' : 'text-zinc-500 hover:bg-zinc-100'
            )}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        {submittedMode ? (
          <div className="px-5 py-8 text-center space-y-4 pb-[max(1.75rem,env(safe-area-inset-bottom))]">
            <div
              className={clsx(
                'w-10 h-10 rounded-full mx-auto flex items-center justify-center',
                isDark ? 'bg-white text-zinc-950' : 'bg-zinc-950 text-white'
              )}
            >
              <Check className="w-5 h-5 stroke-[2.5]" />
            </div>

            {submittedMode === 'posthog' ? (
              <div className="space-y-1">
                <h3 className="font-editorial text-xl font-medium tracking-tight">
                  Thanks for the feedback
                </h3>
                <p className="text-xs text-zinc-500 max-w-xs mx-auto leading-relaxed">
                  Your note has been recorded directly — no account needed.
                </p>
              </div>
            ) : (
              <div className="space-y-2">
                <h3 className="font-editorial text-xl font-medium tracking-tight">
                  Ready to submit
                </h3>
                <p className="text-xs text-zinc-500 max-w-xs mx-auto leading-relaxed">
                  Direct analytics collection isn&apos;t enabled on this build yet. Submit your pre-filled note on GitHub:
                </p>
                <a
                  href={buildGitHubIssueUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={clsx(
                    'inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-colors mt-1',
                    isDark
                      ? 'bg-white text-zinc-950 hover:bg-zinc-200'
                      : 'bg-zinc-950 text-white hover:bg-zinc-800'
                  )}
                >
                  <span>Open on GitHub</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            )}

            <button
              type="button"
              onClick={handleResetAndClose}
              className={clsx(
                'px-5 py-2 rounded-xl text-xs font-medium transition-colors',
                isDark
                  ? 'text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.06]'
                  : 'text-zinc-500 hover:text-zinc-950 hover:bg-zinc-100'
              )}
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="px-5 py-4 space-y-5 overflow-y-auto">
            {/* 1. Sentiment */}
            <div className="space-y-2">
              <label
                className={clsx(
                  'block text-xs font-medium',
                  isDark ? 'text-zinc-400' : 'text-zinc-500'
                )}
              >
                How is Steelman feeling?
              </label>
              <div
                className={clsx(
                  'grid grid-cols-4 p-1 rounded-xl gap-0.5',
                  isDark ? 'bg-[#0C0C0E]' : 'bg-zinc-100'
                )}
              >
                {SENTIMENT_OPTIONS.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setSentiment(opt.id)}
                    className={clsx(
                      'py-1.5 px-1 rounded-lg text-[11.5px] font-medium transition-all',
                      sentiment === opt.id
                        ? isDark
                          ? 'bg-[#26262B] text-white shadow-xs'
                          : 'bg-white text-zinc-950 shadow-xs'
                        : isDark
                          ? 'text-zinc-400 hover:text-zinc-200'
                          : 'text-zinc-500 hover:text-zinc-900'
                    )}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Category */}
            <div className="space-y-2">
              <label
                className={clsx(
                  'block text-xs font-medium',
                  isDark ? 'text-zinc-400' : 'text-zinc-500'
                )}
              >
                Topic
              </label>
              <div className="flex flex-wrap gap-1.5">
                {CATEGORY_OPTIONS.map((opt) => {
                  const active = category === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setCategory(opt.id)}
                      className={clsx(
                        'px-3 py-1.5 rounded-full text-xs font-medium transition-colors',
                        active
                          ? isDark
                            ? 'bg-white text-zinc-950'
                            : 'bg-zinc-950 text-white'
                          : isDark
                            ? 'bg-white/[0.05] text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.09]'
                            : 'bg-zinc-100 text-zinc-600 hover:text-zinc-950 hover:bg-zinc-200/70'
                      )}
                    >
                      {opt.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Details */}
            <div className="space-y-2">
              <label
                htmlFor="steelman-feedback-text"
                className={clsx(
                  'block text-xs font-medium',
                  isDark ? 'text-zinc-400' : 'text-zinc-500'
                )}
              >
                What worked, felt confusing, or should we improve?
              </label>
              <textarea
                id="steelman-feedback-text"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Share a quick thought, bug, or feature idea..."
                className={clsx(
                  'w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-[13px] leading-relaxed border resize-none focus:outline-none',
                  isDark
                    ? 'bg-[#0C0C0E] border-white/[0.1] text-zinc-100 placeholder:text-zinc-500 focus:border-white/25'
                    : 'bg-zinc-50 border-zinc-200 text-zinc-950 placeholder:text-zinc-400 focus:border-zinc-400'
                )}
              />
              <p className="text-[11px] text-zinc-500 leading-snug">
                Includes current screen ({viewMode}) and motion ({topicTitle}). Never sends your private debate text or API keys.
              </p>
            </div>

            {/* Footer Actions */}
            <div
              className={clsx(
                'pt-3 border-t flex items-center justify-between gap-2 pb-[max(0.25rem,env(safe-area-inset-bottom))]',
                isDark ? 'border-white/[0.08]' : 'border-zinc-100'
              )}
            >
              <a
                href={buildGitHubIssueUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className={clsx(
                  'inline-flex items-center gap-1 text-xs font-medium transition-colors',
                  isDark ? 'text-zinc-500 hover:text-zinc-300' : 'text-zinc-400 hover:text-zinc-700'
                )}
              >
                <span>GitHub issue</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              <button
                type="submit"
                className={clsx(
                  'inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-colors',
                  isDark
                    ? 'bg-white text-zinc-950 hover:bg-zinc-200'
                    : 'bg-zinc-950 text-white hover:bg-zinc-800'
                )}
              >
                <Send className="w-3.5 h-3.5" />
                <span>{posthogLive ? 'Send feedback' : 'Submit'}</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
