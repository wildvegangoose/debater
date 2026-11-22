import { useState } from 'react';
import clsx from 'clsx';
import {
  ArrowLeft,
  ArrowLeftRight,
  ArrowUpRight,
  Award,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Compass,
  Copy,
  ExternalLink,
  Lightbulb,
  Loader2,
  RotateCcw,
  Sparkles,
  Target,
  TrendingUp,
  Trophy,
  Wand2,
  X,
} from 'lucide-react';
import { DebateNode } from '../../types/debate';
import {
  ArgumentTurnReview,
  DebateSessionRecord,
  VoiceDebateSettings,
} from '../../types/voiceDebate';
import {
  generateAiTurnRewrite,
  verdictDisplay,
} from '../../services/voiceDebate/performanceAnalyzer';
import { formatSessionAsMarkdown } from '../../services/voiceDebate/sessionLogStorage';

interface DebateScorecardModalProps {
  isOpen: boolean;
  onClose: () => void;
  session: DebateSessionRecord | null;
  nodes: DebateNode[];
  settings: VoiceDebateSettings;
  isHistoricalView?: boolean;
  onBackToLog?: () => void;
  onSaveAiRewrite?: (sessionId: string, turnIndex: number, rewrite: string) => void;
  onInspectNode?: (nodeId: string) => void;
  onRematchSwitchSides?: () => void;
  onNewRound?: () => void;
  isDark: boolean;
}

export function MomentumSparkline({
  series,
  isDark,
  height = 36,
}: {
  series: number[];
  isDark: boolean;
  height?: number;
}) {
  const points = series.length >= 2 ? series : [0, series[0] ?? 0];
  const width = 160;
  const padY = 5;
  const maxAbs = Math.max(25, ...points.map((v) => Math.abs(v)));

  const coords = points.map((val, i) => {
    const x = (i / Math.max(1, points.length - 1)) * width;
    const norm = (val + maxAbs) / (2 * maxAbs); // 0..1
    const y = height - padY - norm * (height - padY * 2);
    return { x, y, val };
  });

  const polyline = coords.map((c) => `${c.x.toFixed(1)},${c.y.toFixed(1)}`).join(' ');
  const midY = height / 2;
  const last = coords[coords.length - 1];
  const strokeColor =
    last.val >= 5 ? '#34D399' : last.val <= -8 ? '#FB7185' : '#D4AF6A';

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="w-full overflow-visible"
      style={{ height }}
      aria-label="Debate momentum trajectory"
    >
      <line
        x1={0}
        y1={midY}
        x2={width}
        y2={midY}
        stroke={isDark ? 'rgba(148,163,184,0.22)' : 'rgba(100,116,139,0.22)'}
        strokeDasharray="3 3"
        strokeWidth="1"
      />
      <polyline
        fill="none"
        stroke={strokeColor}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        points={polyline}
      />
      {coords.map((c, idx) => (
        <circle
          key={idx}
          cx={c.x}
          cy={c.y}
          r={idx === coords.length - 1 ? 3.2 : 2}
          fill={
            c.val >= 5
              ? '#34D399'
              : c.val <= -8
                ? '#FB7185'
                : '#D4AF6A'
          }
        />
      ))}
    </svg>
  );
}

function landingPillClasses(rating: ArgumentTurnReview['landingRating'], isDark: boolean) {
  switch (rating) {
    case 'knockout':
      return isDark
        ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300'
        : 'bg-emerald-50 border-emerald-300 text-emerald-800';
    case 'solid':
      return isDark
        ? 'bg-amber-400/15 border-amber-400/35 text-amber-300'
        : 'bg-amber-50 border-amber-300 text-amber-800';
    case 'mixed':
      return isDark
        ? 'bg-stone-700/40 border-stone-600 text-stone-200'
        : 'bg-stone-100 border-stone-300 text-stone-700';
    case 'vulnerable':
    default:
      return isDark
        ? 'bg-rose-500/15 border-rose-500/40 text-rose-300'
        : 'bg-rose-50 border-rose-300 text-rose-800';
  }
}

export function DebateScorecardModal({
  isOpen,
  onClose,
  session,
  nodes,
  settings,
  isHistoricalView = false,
  onBackToLog,
  onSaveAiRewrite,
  onInspectNode,
  onRematchSwitchSides,
  onNewRound,
  isDark,
}: DebateScorecardModalProps) {
  const [activeTab, setActiveTab] = useState<'tape' | 'overview'>('tape');
  const [expandedOpponentTurn, setExpandedOpponentTurn] = useState<number | null>(null);
  const [rewritingTurn, setRewritingTurn] = useState<number | null>(null);
  const [rewriteErrors, setRewriteErrors] = useState<Record<number, string>>({});
  const [copied, setCopied] = useState(false);

  if (!isOpen || !session) return null;

  const verdict = verdictDisplay(session.verdict);
  const canUseAiRewrite =
    settings.backend === 'browser-webllm' ||
    (settings.backend === 'gemini-flash' && settings.geminiApiKey.trim().length > 10);

  const engagedIds = new Set(
    session.turnReviews.flatMap((r) => [...r.userEngagedNodeIds, ...r.aiEngagedNodeIds])
  );
  const unexploredHighValue = !isHistoricalView
    ? nodes
        .filter((n) => (n.kind === 'pro' || n.kind === 'con') && !engagedIds.has(n.id))
        .slice(0, 4)
    : [];

  const handleCopyDebrief = async () => {
    try {
      await navigator.clipboard.writeText(formatSessionAsMarkdown(session));
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Ignore clipboard failure
    }
  };

  const handleRequestRewrite = async (review: ArgumentTurnReview) => {
    if (rewritingTurn !== null) return;
    setRewritingTurn(review.turnIndex);
    setRewriteErrors((prev) => ({ ...prev, [review.turnIndex]: '' }));
    try {
      const rewrite = await generateAiTurnRewrite({
        settings,
        topicTitle: session.topicTitle,
        stance: session.stance,
        review,
      });
      onSaveAiRewrite?.(session.id, review.turnIndex, rewrite);
    } catch (err) {
      setRewriteErrors((prev) => ({
        ...prev,
        [review.turnIndex]: err instanceof Error ? err.message : String(err),
      }));
    } finally {
      setRewritingTurn(null);
    }
  };

  const formattedDate = new Date(session.updatedAt).toLocaleDateString(undefined, {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4 bg-black/75 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={clsx(
          'w-full max-w-xl max-h-[90vh] rounded-t-3xl sm:rounded-2xl border shadow-2xl flex flex-col overflow-hidden',
          isDark
            ? 'bg-[#12161F] border-[#262E3E] text-stone-100'
            : 'bg-[#FAF8F4] border-[#E5DEC9] text-stone-900'
        )}
      >
        {/* Drag handle on mobile */}
        <div className="pt-2 pb-0.5 flex justify-center sm:hidden shrink-0">
          <span className="w-10 h-1 rounded-full bg-stone-500/40" />
        </div>

        {/* Header */}
        <div
          className={clsx(
            'px-4 py-3 border-b flex items-center justify-between gap-2 shrink-0',
            isDark ? 'border-[#222938]' : 'border-[#E7E2D8]'
          )}
        >
          <div className="flex items-center gap-2.5 min-w-0">
            {isHistoricalView && onBackToLog ? (
              <button
                type="button"
                onClick={onBackToLog}
                aria-label="Back to performance log"
                className={clsx(
                  'p-2 rounded-xl border transition-colors shrink-0',
                  isDark
                    ? 'bg-[#171C28] border-[#262E3E] text-stone-300 hover:text-amber-300'
                    : 'bg-white border-[#E5DEC9] text-stone-700'
                )}
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
            ) : (
              <div className="w-8 h-8 rounded-xl bg-amber-400/15 border border-amber-400/35 flex items-center justify-center text-amber-400 shrink-0">
                <Trophy className="w-4 h-4" />
              </div>
            )}
            <div className="min-w-0">
              <h2 className="font-editorial text-base font-semibold truncate leading-tight">
                {session.topicTitle}
              </h2>
              <p className="text-[11px] text-stone-400 truncate">
                {session.stance.toUpperCase()} · {session.turnCount}{' '}
                {session.turnCount === 1 ? 'argument' : 'arguments'} · {formattedDate}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1 shrink-0">
            <button
              type="button"
              onClick={() => void handleCopyDebrief()}
              title="Copy Markdown debrief"
              className={clsx(
                'inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-[11px] font-semibold border transition-colors',
                isDark
                  ? 'bg-[#171C28] border-[#262E3E] text-stone-300 hover:border-amber-400/40'
                  : 'bg-white border-[#E5DEC9] text-stone-700 hover:border-amber-400'
              )}
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Copy</span>
                </>
              )}
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close debrief"
              className="p-1.5 rounded-full text-stone-400 hover:bg-stone-500/15"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Sub-Navigation: Game Tape (Turn-by-Turn) | Overview */}
        <div
          className={clsx(
            'px-4 py-2 border-b flex items-center gap-2 shrink-0',
            isDark ? 'bg-[#0E1219] border-[#222938]' : 'bg-[#F3EFE6] border-[#E7E2D8]'
          )}
        >
          <button
            type="button"
            onClick={() => setActiveTab('tape')}
            className={clsx(
              'flex-1 py-1.5 px-3 rounded-xl text-xs font-bold transition-all',
              activeTab === 'tape'
                ? isDark
                  ? 'bg-amber-400/15 border border-amber-400/40 text-amber-300'
                  : 'bg-white border border-amber-400/50 text-amber-900 shadow-xs'
                : 'text-stone-400 hover:text-stone-200 border border-transparent'
            )}
          >
            Game Tape ({session.turnReviews.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('overview')}
            className={clsx(
              'flex-1 py-1.5 px-3 rounded-xl text-xs font-bold transition-all',
              activeTab === 'overview'
                ? isDark
                  ? 'bg-amber-400/15 border border-amber-400/40 text-amber-300'
                  : 'bg-white border border-amber-400/50 text-amber-900 shadow-xs'
                : 'text-stone-400 hover:text-stone-200 border border-transparent'
            )}
          >
            Verdict &amp; Prep
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-4 overflow-y-auto space-y-4">
          {activeTab === 'tape' ? (
            <>
              {/* Compact Verdict + Sparkline Strip */}
              <div
                className={clsx(
                  'p-3.5 rounded-2xl border flex items-center justify-between gap-4',
                  isDark ? 'bg-[#0B0E14] border-[#222938]' : 'bg-white border-[#E5DEC9]'
                )}
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span
                      className={clsx(
                        'font-editorial text-base font-semibold',
                        verdict.tone === 'emerald'
                          ? 'text-emerald-400'
                          : verdict.tone === 'rose'
                            ? 'text-rose-400'
                            : 'text-amber-400'
                      )}
                    >
                      {verdict.title}
                    </span>
                    <span className="font-mono text-xs font-semibold text-stone-400 tabular-nums">
                      Avg {session.avgStrength}/100
                    </span>
                  </div>
                  <p className="text-[11px] text-stone-400 mt-0.5 line-clamp-2">
                    {verdict.subtitle}
                  </p>
                </div>
                <div className="w-28 shrink-0">
                  <MomentumSparkline series={session.momentumSeries} isDark={isDark} height={34} />
                  <div className="text-[9.5px] font-mono text-stone-500 text-center mt-0.5">
                    Momentum Curve
                  </div>
                </div>
              </div>

              {/* Argument-by-Argument Cards */}
              <div className="space-y-3">
                {session.turnReviews.map((rev) => {
                  const deltaStr =
                    rev.persuasionShift >= 0
                      ? `+${rev.persuasionShift}`
                      : `${rev.persuasionShift}`;
                  const opponentOpen = expandedOpponentTurn === rev.turnIndex;
                  const isRewriting = rewritingTurn === rev.turnIndex;
                  const rewriteErr = rewriteErrors[rev.turnIndex];

                  return (
                    <div
                      key={rev.turnIndex}
                      className={clsx(
                        'rounded-2xl border p-3.5 space-y-3',
                        isDark ? 'bg-[#0E1219] border-[#232A39]' : 'bg-white border-[#E5DEC9]'
                      )}
                    >
                      {/* Turn Header */}
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[11px] font-bold text-stone-400">
                            TURN {rev.turnIndex}
                          </span>
                          <span
                            className={clsx(
                              'px-2 py-0.5 rounded-full text-[10.5px] font-bold border',
                              landingPillClasses(rev.landingRating, isDark)
                            )}
                          >
                            {rev.landingLabel}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 font-mono text-xs tabular-nums">
                          <span
                            className={clsx(
                              'font-bold',
                              rev.argumentStrength >= 75
                                ? 'text-emerald-400'
                                : rev.argumentStrength >= 55
                                  ? 'text-amber-400'
                                  : 'text-rose-400'
                            )}
                          >
                            {rev.argumentStrength}/100
                          </span>
                          <span
                            className={clsx(
                              'px-1.5 py-0.5 rounded text-[10.5px] font-bold',
                              rev.persuasionShift > 0
                                ? 'bg-emerald-500/15 text-emerald-400'
                                : rev.persuasionShift < 0
                                  ? 'bg-rose-500/15 text-rose-400'
                                  : 'bg-stone-500/15 text-stone-400'
                            )}
                          >
                            {deltaStr}
                          </span>
                        </div>
                      </div>

                      {/* Debater's Quoted Argument */}
                      <blockquote
                        className={clsx(
                          'pl-3 border-l-2 text-[13px] leading-relaxed italic',
                          isDark
                            ? 'border-amber-400/50 text-stone-200'
                            : 'border-amber-500 text-stone-800'
                        )}
                      >
                        “{rev.userText}”
                      </blockquote>

                      {/* How It Landed */}
                      <div className="space-y-1">
                        <div className="text-[10.5px] font-bold uppercase tracking-wider text-emerald-400/90 flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>How It Landed</span>
                        </div>
                        <ul className="space-y-1 text-xs leading-snug">
                          {rev.whatWorked.map((item, idx) => (
                            <li
                              key={idx}
                              className={clsx(
                                'flex items-start gap-1.5',
                                isDark ? 'text-stone-300' : 'text-stone-700'
                              )}
                            >
                              <span className="text-emerald-400 mt-0.5">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* How It Could Have Gone Better */}
                      <div
                        className={clsx(
                          'p-3 rounded-xl border space-y-2',
                          isDark
                            ? 'bg-amber-400/[0.06] border-amber-400/25'
                            : 'bg-amber-50/70 border-amber-200'
                        )}
                      >
                        <div className="text-[10.5px] font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1">
                          <Lightbulb className="w-3 h-3" />
                          <span>How It Could Have Gone Better</span>
                        </div>
                        <p
                          className={clsx(
                            'text-xs leading-relaxed',
                            isDark ? 'text-stone-200' : 'text-stone-800'
                          )}
                        >
                          {rev.whatToImprove}
                        </p>

                        {/* Stronger Phrasing / AI Coach Rewrite */}
                        {(rev.aiRewrite || rev.strongerAnglePrompt) && (
                          <div
                            className={clsx(
                              'p-2.5 rounded-lg border text-xs space-y-1',
                              isDark
                                ? 'bg-[#0B0E14]/90 border-[#262E3E] text-stone-200'
                                : 'bg-white border-[#E5DEC9] text-stone-800'
                            )}
                          >
                            <div className="flex items-center justify-between gap-2">
                              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 inline-flex items-center gap-1">
                                <Sparkles className="w-3 h-3" />
                                {rev.aiRewrite
                                  ? 'AI Coach Rewrite'
                                  : `Sharper Angle${rev.strongerAngleTitle ? ` · ${rev.strongerAngleTitle}` : ''}`}
                              </span>
                            </div>
                            <p className="font-editorial text-[13px] leading-snug">
                              {rev.aiRewrite || rev.strongerAnglePrompt}
                            </p>
                            {rev.citedSource && (
                              <a
                                href={rev.citedSource.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-[11px] font-medium text-amber-400 hover:underline pt-0.5"
                              >
                                <ExternalLink className="w-3 h-3 shrink-0" />
                                <span className="truncate max-w-[260px]">
                                  {rev.citedSource.title}
                                </span>
                              </a>
                            )}
                          </div>
                        )}

                        {/* Optional 1-tap AI Coach Rewrite action */}
                        {canUseAiRewrite && !rev.aiRewrite && (
                          <button
                            type="button"
                            disabled={isRewriting}
                            onClick={() => void handleRequestRewrite(rev)}
                            className={clsx(
                              'inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[11px] font-bold border transition-colors disabled:opacity-50',
                              isDark
                                ? 'bg-[#171C28] border-amber-400/35 text-amber-300 hover:bg-amber-400/15'
                                : 'bg-white border-amber-300 text-amber-800 hover:bg-amber-50'
                            )}
                          >
                            {isRewriting ? (
                              <>
                                <Loader2 className="w-3 h-3 animate-spin" />
                                <span>Drafting sharper phrasing...</span>
                              </>
                            ) : (
                              <>
                                <Wand2 className="w-3 h-3" />
                                <span>Ask AI for Stronger Phrasing</span>
                              </>
                            )}
                          </button>
                        )}
                        {rewriteErr && (
                          <p className="text-[11px] text-rose-400">{rewriteErr}</p>
                        )}
                      </div>

                      {/* Expandable Opponent Counter Context */}
                      <div>
                        <button
                          type="button"
                          onClick={() =>
                            setExpandedOpponentTurn(opponentOpen ? null : rev.turnIndex)
                          }
                          className="inline-flex items-center gap-1 text-[11px] font-semibold text-stone-400 hover:text-stone-200"
                        >
                          {opponentOpen ? (
                            <ChevronUp className="w-3.5 h-3.5" />
                          ) : (
                            <ChevronDown className="w-3.5 h-3.5" />
                          )}
                          <span>
                            {opponentOpen ? 'Hide opponent’s counter' : 'View opponent’s counter'}
                          </span>
                        </button>
                        {opponentOpen && (
                          <p
                            className={clsx(
                              'mt-1.5 p-2.5 rounded-xl border text-xs leading-relaxed',
                              isDark
                                ? 'bg-[#0B0E14] border-[#222938] text-stone-300'
                                : 'bg-[#FAF8F4] border-[#E5DEC9] text-stone-700'
                            )}
                          >
                            {rev.aiReply}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          ) : (
            <>
              {/* Editorial Verdict Hero */}
              <div
                className={clsx(
                  'p-4 rounded-2xl border space-y-2',
                  isDark ? 'bg-[#0B0E14] border-[#222938]' : 'bg-white border-[#E5DEC9]'
                )}
              >
                <div className="text-[10.5px] font-bold uppercase tracking-widest text-amber-400">
                  Chamber Verdict
                </div>
                <div className="font-editorial text-2xl font-semibold leading-tight">
                  {verdict.title}
                </div>
                <p className="text-xs text-stone-400 leading-relaxed">{verdict.subtitle}</p>
                <div className="pt-2">
                  <MomentumSparkline series={session.momentumSeries} isDark={isDark} height={44} />
                </div>
              </div>

              {/* Metrics Row */}
              <div className="grid grid-cols-3 gap-2.5">
                <div
                  className={clsx(
                    'p-3 rounded-xl border text-center',
                    isDark ? 'bg-[#0E1219] border-[#222938]' : 'bg-white border-[#E5DEC9]'
                  )}
                >
                  <div className="text-[10px] uppercase tracking-wider font-semibold text-stone-400">
                    Avg Strength
                  </div>
                  <div className="text-xl font-extrabold text-emerald-400 mt-0.5 font-mono tabular-nums">
                    {session.avgStrength}
                  </div>
                </div>
                <div
                  className={clsx(
                    'p-3 rounded-xl border text-center',
                    isDark ? 'bg-[#0E1219] border-[#222938]' : 'bg-white border-[#E5DEC9]'
                  )}
                >
                  <div className="text-[10px] uppercase tracking-wider font-semibold text-stone-400">
                    Peak Turn
                  </div>
                  <div className="text-xl font-extrabold text-amber-400 mt-0.5 font-mono tabular-nums">
                    {session.peakStrength}
                  </div>
                </div>
                <div
                  className={clsx(
                    'p-3 rounded-xl border text-center',
                    isDark ? 'bg-[#0E1219] border-[#222938]' : 'bg-white border-[#E5DEC9]'
                  )}
                >
                  <div className="text-[10px] uppercase tracking-wider font-semibold text-stone-400">
                    Nodes Hit
                  </div>
                  <div className="text-xl font-extrabold text-stone-200 mt-0.5 font-mono tabular-nums">
                    {session.nodesEngagedCount}
                  </div>
                </div>
              </div>

              {/* Strength vs Primary Focus */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div
                  className={clsx(
                    'p-3 rounded-xl border space-y-1',
                    isDark
                      ? 'bg-emerald-500/[0.08] border-emerald-500/30'
                      : 'bg-emerald-50 border-emerald-200'
                  )}
                >
                  <div className="text-[10.5px] font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1">
                    <Award className="w-3.5 h-3.5" />
                    <span>Top Strength</span>
                  </div>
                  <p className="text-xs font-medium">{session.topStrength}</p>
                </div>
                <div
                  className={clsx(
                    'p-3 rounded-xl border space-y-1',
                    isDark
                      ? 'bg-amber-400/[0.08] border-amber-400/30'
                      : 'bg-amber-50 border-amber-200'
                  )}
                >
                  <div className="text-[10.5px] font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1">
                    <Target className="w-3.5 h-3.5" />
                    <span>Next Round Focus</span>
                  </div>
                  <p className="text-xs font-medium">{session.primaryFocus}</p>
                </div>
              </div>

              {/* Unexplored Arguments to Prep Next (when viewing active topic) */}
              {unexploredHighValue.length > 0 && onInspectNode && (
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-stone-400 mb-2 flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5 text-amber-400" />
                    Unexplored Arguments to Prep Next
                  </div>
                  <div className="space-y-1.5">
                    {unexploredHighValue.map((node) => (
                      <button
                        key={node.id}
                        type="button"
                        onClick={() => {
                          onInspectNode(node.id);
                          onClose();
                        }}
                        className={clsx(
                          'w-full text-left p-2.5 rounded-xl border transition-colors flex items-center justify-between gap-2',
                          isDark
                            ? 'bg-[#0E1219] border-[#222938] hover:border-amber-400/45'
                            : 'bg-white border-[#E5DEC9] hover:border-amber-400'
                        )}
                      >
                        <div className="min-w-0">
                          <div className="text-xs font-semibold truncate">{node.title}</div>
                          <div className="text-[11px] text-stone-400 line-clamp-1">
                            {node.summary}
                          </div>
                        </div>
                        <ArrowUpRight className="w-4 h-4 text-amber-400 shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div
                className={clsx(
                  'p-3 rounded-xl border text-xs flex items-start gap-2',
                  isDark
                    ? 'bg-[#0E1219] border-[#222938] text-stone-300'
                    : 'bg-white border-[#E5DEC9] text-stone-700'
                )}
              >
                <TrendingUp className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  This round is automatically saved in your <strong>Performance Log</strong>. Hit{' '}
                  <strong>Switch Sides</strong> to stress-test the opposite stance!
                </span>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div
          className={clsx(
            'px-4 py-3 border-t flex flex-wrap items-center justify-end gap-2 shrink-0 pb-[max(0.75rem,env(safe-area-inset-bottom))]',
            isDark ? 'border-[#222938] bg-[#0B0E14]' : 'border-[#E7E2D8] bg-[#F3EFE6]'
          )}
        >
          {isHistoricalView && onBackToLog ? (
            <button
              type="button"
              onClick={onBackToLog}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-400 text-stone-950 shadow-sm"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Performance Log</span>
            </button>
          ) : (
            <>
              {onNewRound && (
                <button
                  type="button"
                  onClick={() => {
                    onNewRound();
                    onClose();
                  }}
                  className={clsx(
                    'inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border',
                    isDark
                      ? 'bg-[#171C28] border-[#262E3E] text-stone-200 hover:bg-[#1E2534]'
                      : 'bg-white border-[#D8D0C0] text-stone-700 hover:bg-stone-100'
                  )}
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Fresh Round</span>
                </button>
              )}
              {onRematchSwitchSides && (
                <button
                  type="button"
                  onClick={() => {
                    onRematchSwitchSides();
                    onClose();
                  }}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-400 text-stone-950 shadow-sm"
                >
                  <ArrowLeftRight className="w-3.5 h-3.5" />
                  <span>Switch Sides &amp; Rematch</span>
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
