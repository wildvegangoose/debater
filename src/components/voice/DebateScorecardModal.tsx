import { useEffect, useState } from 'react';
import clsx from 'clsx';
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  ChevronDown,
  ChevronUp,
  Copy,
  ExternalLink,
  Loader2,
  RefreshCw,
  Sparkles,
  Wand2,
  X,
} from 'lucide-react';
import { DebateNode } from '../../types/debate';
import {
  ArgumentTurnReview,
  DebateSessionRecord,
  SessionDeepAnalysis,
  VoiceDebateSettings,
} from '../../types/voiceDebate';
import {
  canRunLiveAiCoach,
  generateAiTurnRewrite,
  generateSessionDeepAnalysis,
  getCoachEngineLabel,
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
  onSaveDeepAnalysis?: (sessionId: string, analysis: SessionDeepAnalysis) => void;
  onOpenSettings?: () => void;
  onInspectNode?: (nodeId: string) => void;
  onRematchSwitchSides?: () => void;
  onNewRound?: () => void;
  isDark: boolean;
}

export function MomentumSparkline({
  series,
  isDark,
  height = 34,
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
    const norm = (val + maxAbs) / (2 * maxAbs);
    const y = height - padY - norm * (height - padY * 2);
    return { x, y, val };
  });

  const polyline = coords.map((c) => `${c.x.toFixed(1)},${c.y.toFixed(1)}`).join(' ');
  const midY = height / 2;
  const last = coords[coords.length - 1];
  const strokeColor =
    last.val >= 5
      ? '#10B981'
      : last.val <= -8
        ? '#F43F5E'
        : isDark
          ? '#A1A1AA'
          : '#52525B';

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="w-full overflow-visible"
      style={{ height }}
      aria-label="Momentum curve"
    >
      <line
        x1={0}
        y1={midY}
        x2={width}
        y2={midY}
        stroke={isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.12)'}
        strokeDasharray="3 3"
        strokeWidth="1"
      />
      <polyline
        fill="none"
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        points={polyline}
      />
      <circle cx={last.x} cy={last.y} r={3} fill={strokeColor} />
    </svg>
  );
}

function ratingTextClass(rating: ArgumentTurnReview['landingRating'], isDark: boolean) {
  switch (rating) {
    case 'knockout':
      return 'text-emerald-500';
    case 'vulnerable':
      return 'text-rose-500';
    case 'solid':
      return isDark ? 'text-zinc-200' : 'text-zinc-800';
    case 'mixed':
    default:
      return 'text-zinc-500';
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
  onSaveDeepAnalysis,
  onOpenSettings,
  onInspectNode,
  onRematchSwitchSides,
  onNewRound,
  isDark,
}: DebateScorecardModalProps) {
  const [activeTab, setActiveTab] = useState<'tape' | 'critique' | 'overview'>('tape');
  const [expandedOpponentTurn, setExpandedOpponentTurn] = useState<number | null>(null);
  const [rewritingTurn, setRewritingTurn] = useState<number | null>(null);
  const [rewriteErrors, setRewriteErrors] = useState<Record<number, string>>({});
  const [analyzingRound, setAnalyzingRound] = useState(false);
  const [analysisError, setAnalysisError] = useState<string | null>(null);
  const [appliedTurnIndex, setAppliedTurnIndex] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    setAnalysisError(null);
    setAppliedTurnIndex(null);
  }, [isOpen, session?.id]);

  if (!isOpen || !session) return null;

  const verdict = verdictDisplay(session.verdict);
  const canUseAiRewrite = canRunLiveAiCoach(settings);
  const engineLabel = getCoachEngineLabel(settings);

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

  const handleRunDeepAnalysis = async () => {
    if (analyzingRound) return;
    setAnalyzingRound(true);
    setAnalysisError(null);
    try {
      const analysis = await generateSessionDeepAnalysis({ settings, session });
      onSaveDeepAnalysis?.(session.id, analysis);
    } catch (err) {
      setAnalysisError(err instanceof Error ? err.message : String(err));
    } finally {
      setAnalyzingRound(false);
    }
  };

  const formattedDate = new Date(session.updatedAt).toLocaleDateString(undefined, {
    month: 'short',
    day: 'numeric',
  });

  const deepAnalysis = session.deepAnalysis;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4 bg-black/60 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={clsx(
          'w-full max-w-xl max-h-[90vh] rounded-t-2xl sm:rounded-2xl border shadow-2xl flex flex-col overflow-hidden',
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
            'px-5 py-3.5 border-b flex items-center justify-between gap-3 shrink-0',
            isDark ? 'border-white/[0.08]' : 'border-zinc-100'
          )}
        >
          <div className="flex items-center gap-2.5 min-w-0">
            {isHistoricalView && onBackToLog && (
              <button
                type="button"
                onClick={onBackToLog}
                aria-label="Back to log"
                className={clsx(
                  'p-1.5 -ml-1 rounded-lg transition-colors shrink-0',
                  isDark ? 'text-zinc-400 hover:bg-white/[0.06]' : 'text-zinc-500 hover:bg-zinc-100'
                )}
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
            )}
            <div className="min-w-0">
              <h2 className="text-[15px] font-semibold truncate">{session.topicTitle}</h2>
              <p className="text-xs text-zinc-500 truncate">
                {session.stance.toUpperCase()} · {session.turnCount}{' '}
                {session.turnCount === 1 ? 'turn' : 'turns'} · {formattedDate}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1 shrink-0">
            <button
              type="button"
              onClick={() => void handleCopyDebrief()}
              className={clsx(
                'inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors',
                isDark
                  ? 'text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.06]'
                  : 'text-zinc-500 hover:text-zinc-950 hover:bg-zinc-100'
              )}
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className={clsx(
                'p-1.5 rounded-lg transition-colors',
                isDark ? 'text-zinc-400 hover:bg-white/[0.06]' : 'text-zinc-500 hover:bg-zinc-100'
              )}
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Clean 3-Tab Segmented Sub-Nav */}
        <div className="px-5 pt-3 pb-2 shrink-0">
          <div
            className={clsx(
              'grid grid-cols-3 p-1 rounded-xl',
              isDark ? 'bg-[#0C0C0E]' : 'bg-zinc-100'
            )}
          >
            <button
              type="button"
              onClick={() => setActiveTab('tape')}
              className={clsx(
                'py-1.5 rounded-lg text-xs font-medium transition-all',
                activeTab === 'tape'
                  ? isDark
                    ? 'bg-[#26262B] text-white shadow-xs'
                    : 'bg-white text-zinc-950 shadow-xs'
                  : 'text-zinc-500'
              )}
            >
              Game Tape ({session.turnReviews.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('critique')}
              className={clsx(
                'py-1.5 rounded-lg text-xs font-medium transition-all inline-flex items-center justify-center gap-1',
                activeTab === 'critique'
                  ? isDark
                    ? 'bg-[#26262B] text-white shadow-xs'
                    : 'bg-white text-zinc-950 shadow-xs'
                  : 'text-zinc-500'
              )}
            >
              <Sparkles className="w-3 h-3" />
              <span>Deep Critique</span>
              {deepAnalysis && (
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
              )}
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('overview')}
              className={clsx(
                'py-1.5 rounded-lg text-xs font-medium transition-all',
                activeTab === 'overview'
                  ? isDark
                    ? 'bg-[#26262B] text-white shadow-xs'
                    : 'bg-white text-zinc-950 shadow-xs'
                  : 'text-zinc-500'
              )}
            >
              Summary
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="px-5 py-3 overflow-y-auto space-y-5">
          {activeTab === 'critique' ? (
            <div className="space-y-5 py-1">
              {!deepAnalysis ? (
                <div
                  className={clsx(
                    'p-6 rounded-2xl border text-center space-y-3',
                    isDark ? 'bg-[#0C0C0E] border-white/[0.08]' : 'bg-zinc-50 border-zinc-200'
                  )}
                >
                  <Sparkles className="w-6 h-6 mx-auto text-zinc-400" />
                  <div className="space-y-1">
                    <h3 className="font-editorial text-lg font-medium tracking-tight">
                      Deep Argument Critique
                    </h3>
                    <p className="text-xs text-zinc-500 max-w-sm mx-auto leading-relaxed">
                      Inspect all {session.turnCount}{' '}
                      {session.turnCount === 1 ? 'turn' : 'turns'} together to break down strengths, logical weaknesses, missed counters, and before-to-after proposed revisions.
                    </p>
                  </div>

                  <div className="pt-1 flex flex-col items-center gap-2">
                    <button
                      type="button"
                      disabled={analyzingRound}
                      onClick={() => void handleRunDeepAnalysis()}
                      className={clsx(
                        'inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold transition-colors disabled:opacity-45',
                        isDark
                          ? 'bg-white text-zinc-950 hover:bg-zinc-200'
                          : 'bg-zinc-950 text-white hover:bg-zinc-800'
                      )}
                    >
                      {analyzingRound ? (
                        <>
                          <Loader2 className="w-3.5 h-3.5 animate-spin" />
                          <span>Analyzing arguments...</span>
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>Analyze Round</span>
                        </>
                      )}
                    </button>

                    <div className="text-[11px] text-zinc-500 flex items-center gap-1.5">
                      <span>Engine: {engineLabel}</span>
                      {!canUseAiRewrite && onOpenSettings && (
                        <>
                          <span>·</span>
                          <button
                            type="button"
                            onClick={() => {
                              onClose();
                              onOpenSettings();
                            }}
                            className="underline underline-offset-2 hover:text-zinc-300"
                          >
                            Switch to AI
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  {/* Meta Header & Re-analyze */}
                  <div
                    className={clsx(
                      'pb-3 border-b flex items-center justify-between gap-2 text-xs',
                      isDark ? 'border-white/[0.08]' : 'border-zinc-100'
                    )}
                  >
                    <span className="text-zinc-500 truncate">
                      {deepAnalysis.engineLabel} ·{' '}
                      {new Date(deepAnalysis.generatedAt).toLocaleDateString(undefined, {
                        month: 'short',
                        day: 'numeric',
                      })}
                    </span>
                    <button
                      type="button"
                      disabled={analyzingRound}
                      onClick={() => void handleRunDeepAnalysis()}
                      className={clsx(
                        'inline-flex items-center gap-1 px-2.5 py-1 rounded-lg border text-[11px] font-medium shrink-0 transition-colors disabled:opacity-45',
                        isDark
                          ? 'border-white/[0.1] text-zinc-300 hover:bg-white/[0.06]'
                          : 'border-zinc-200 text-zinc-700 hover:bg-zinc-100'
                      )}
                    >
                      {analyzingRound ? (
                        <Loader2 className="w-3 h-3 animate-spin" />
                      ) : (
                        <RefreshCw className="w-3 h-3" />
                      )}
                      <span>{analyzingRound ? 'Analyzing...' : 'Re-analyze'}</span>
                    </button>
                  </div>

                  {/* Overall Assessment */}
                  <p
                    className={clsx(
                      'font-editorial text-[16px] leading-relaxed',
                      isDark ? 'text-zinc-200' : 'text-zinc-800'
                    )}
                  >
                    {deepAnalysis.overallAssessment}
                  </p>

                  {/* Strengths */}
                  <div className="space-y-2">
                    <h3 className="text-[11px] font-medium uppercase tracking-wider text-emerald-500">
                      Strengths
                    </h3>
                    <div
                      className={clsx(
                        'divide-y rounded-xl border px-3.5',
                        isDark
                          ? 'bg-[#0C0C0E] border-white/[0.08] divide-white/[0.06]'
                          : 'bg-zinc-50/70 border-zinc-200 divide-zinc-200/70'
                      )}
                    >
                      {deepAnalysis.strengths.map((s, idx) => (
                        <div key={idx} className="py-2.5 space-y-0.5">
                          <div className="text-xs font-medium">{s.title}</div>
                          <p className="text-xs text-zinc-500 leading-relaxed">{s.detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Weaknesses & Logical Gaps */}
                  <div className="space-y-2">
                    <h3 className="text-[11px] font-medium uppercase tracking-wider text-rose-500">
                      Weaknesses &amp; Gaps
                    </h3>
                    <div
                      className={clsx(
                        'divide-y rounded-xl border px-3.5',
                        isDark
                          ? 'bg-[#0C0C0E] border-white/[0.08] divide-white/[0.06]'
                          : 'bg-zinc-50/70 border-zinc-200 divide-zinc-200/70'
                      )}
                    >
                      {deepAnalysis.weaknesses.map((w, idx) => (
                        <div key={idx} className="py-2.5 space-y-0.5">
                          <div className="text-xs font-medium">{w.title}</div>
                          <p className="text-xs text-zinc-500 leading-relaxed">{w.detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Proposed Changes (Before -> After) */}
                  {deepAnalysis.proposedChanges.length > 0 && (
                    <div className="space-y-2.5">
                      <h3 className="text-[11px] font-medium uppercase tracking-wider text-zinc-500">
                        Proposed Changes ({deepAnalysis.proposedChanges.length})
                      </h3>
                      <div className="space-y-3">
                        {deepAnalysis.proposedChanges.map((change, idx) => {
                          const isSaved = appliedTurnIndex === change.turnIndex;
                          return (
                            <div
                              key={`${change.turnIndex}-${idx}`}
                              className={clsx(
                                'p-3.5 rounded-xl border space-y-2.5 text-xs',
                                isDark
                                  ? 'bg-[#0C0C0E] border-white/[0.08]'
                                  : 'bg-zinc-50/70 border-zinc-200'
                              )}
                            >
                              <div className="flex items-center justify-between gap-2">
                                <div className="min-w-0">
                                  <span className="font-mono text-[11px] text-zinc-500 mr-2">
                                    Turn {change.turnIndex}
                                  </span>
                                  <span className="font-medium">{change.issue}</span>
                                </div>
                                {onSaveAiRewrite && (
                                  <button
                                    type="button"
                                    onClick={() => {
                                      onSaveAiRewrite(
                                        session.id,
                                        change.turnIndex,
                                        change.proposedRevision
                                      );
                                      setAppliedTurnIndex(change.turnIndex);
                                      setTimeout(() => setAppliedTurnIndex(null), 2000);
                                    }}
                                    className={clsx(
                                      'inline-flex items-center gap-1 px-2 py-1 rounded-md text-[11px] font-medium border shrink-0 transition-colors',
                                      isSaved
                                        ? isDark
                                          ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-400'
                                          : 'bg-emerald-50 border-emerald-200 text-emerald-700'
                                        : isDark
                                          ? 'bg-white/[0.04] border-white/[0.1] text-zinc-300 hover:bg-white/[0.08] hover:text-white'
                                          : 'bg-white border-zinc-200 text-zinc-700 hover:bg-zinc-100'
                                    )}
                                  >
                                    {isSaved ? (
                                      <>
                                        <Check className="w-3 h-3" />
                                        <span>Saved</span>
                                      </>
                                    ) : (
                                      <span>Apply to Turn</span>
                                    )}
                                  </button>
                                )}
                              </div>

                              {change.originalExcerpt && (
                                <div className="space-y-1">
                                  <div className="text-[10.5px] uppercase tracking-wider text-zinc-500">
                                    Before
                                  </div>
                                  <blockquote
                                    className={clsx(
                                      'pl-3 border-l-2 leading-relaxed',
                                      isDark
                                        ? 'border-zinc-700 text-zinc-400'
                                        : 'border-zinc-300 text-zinc-600'
                                    )}
                                  >
                                    {change.originalExcerpt}
                                  </blockquote>
                                </div>
                              )}

                              <div className="space-y-1">
                                <div className="text-[10.5px] uppercase tracking-wider text-emerald-500">
                                  Proposed Revision
                                </div>
                                <blockquote
                                  className={clsx(
                                    'pl-3 border-l-2 border-emerald-500/75 font-editorial text-[14.5px] leading-relaxed',
                                    isDark ? 'text-zinc-100' : 'text-zinc-900'
                                  )}
                                >
                                  {change.proposedRevision}
                                </blockquote>
                              </div>

                              {change.rationale && (
                                <p className="text-[11.5px] text-zinc-500 leading-relaxed">
                                  <span
                                    className={
                                      isDark ? 'text-zinc-300 font-medium' : 'text-zinc-700 font-medium'
                                    }
                                  >
                                    Why:{' '}
                                  </span>
                                  {change.rationale}
                                </p>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Missed Opportunities */}
                  {deepAnalysis.missedOpportunities.length > 0 && (
                    <div className="space-y-1.5">
                      <h3 className="text-[11px] font-medium uppercase tracking-wider text-zinc-500">
                        Missed Opportunities
                      </h3>
                      <ul className="space-y-1.5 text-xs">
                        {deepAnalysis.missedOpportunities.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 shrink-0 mt-1.5" />
                            <span className={isDark ? 'text-zinc-300' : 'text-zinc-700'}>
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Next Round Drill */}
                  {deepAnalysis.nextRoundDrill && (
                    <div
                      className={clsx(
                        'p-3.5 rounded-xl border text-xs space-y-1',
                        isDark
                          ? 'bg-[#0C0C0E] border-white/[0.1]'
                          : 'bg-zinc-50 border-zinc-200'
                      )}
                    >
                      <div className="text-[10.5px] font-medium uppercase tracking-wider text-zinc-500">
                        Next Round Drill
                      </div>
                      <p className={clsx('font-medium leading-relaxed', isDark ? 'text-zinc-100' : 'text-zinc-900')}>
                        {deepAnalysis.nextRoundDrill}
                      </p>
                    </div>
                  )}
                </>
              )}

              {analysisError && (
                <div
                  className={clsx(
                    'px-3.5 py-2.5 rounded-xl text-xs',
                    isDark ? 'bg-rose-500/10 text-rose-400' : 'bg-rose-50 text-rose-700'
                  )}
                >
                  {analysisError}
                </div>
              )}
            </div>
          ) : activeTab === 'tape' ? (
            <>
              {/* Clean Verdict Header */}
              <div
                className={clsx(
                  'pb-4 border-b flex items-center justify-between gap-4',
                  isDark ? 'border-white/[0.08]' : 'border-zinc-100'
                )}
              >
                <div className="min-w-0">
                  <div className="font-editorial text-xl font-medium">{verdict.title}</div>
                  <div className="text-xs text-zinc-500 mt-0.5 tabular-nums">
                    Avg {session.avgStrength}/100 · Peak {session.peakStrength}/100
                  </div>
                </div>
                <div className="w-28 shrink-0">
                  <MomentumSparkline series={session.momentumSeries} isDark={isDark} height={32} />
                </div>
              </div>

              {/* Turn-by-Turn Hairline List (No Over-Nested Boxes!) */}
              <div
                className={clsx(
                  'divide-y',
                  isDark ? 'divide-white/[0.08]' : 'divide-zinc-100'
                )}
              >
                {session.turnReviews.map((rev) => {
                  const deltaStr =
                    rev.persuasionShift >= 0
                      ? `+${rev.persuasionShift}`
                      : `${rev.persuasionShift}`;
                  const opponentOpen = expandedOpponentTurn === rev.turnIndex;
                  const isRewriting = rewritingTurn === rev.turnIndex;
                  const rewriteErr = rewriteErrors[rev.turnIndex];

                  return (
                    <div key={rev.turnIndex} className="py-4 first:pt-1 space-y-3">
                      {/* Turn Metadata Row */}
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2 text-xs">
                          <span className="font-mono text-zinc-500">Turn {rev.turnIndex}</span>
                          <span
                            className={clsx(
                              'font-semibold',
                              ratingTextClass(rev.landingRating, isDark)
                            )}
                          >
                            {rev.landingLabel}
                          </span>
                        </div>
                        <div className="font-mono text-xs tabular-nums flex items-center gap-2">
                          <span className={isDark ? 'text-zinc-200' : 'text-zinc-900'}>
                            {rev.argumentStrength}/100
                          </span>
                          <span
                            className={
                              rev.persuasionShift > 0
                                ? 'text-emerald-500'
                                : rev.persuasionShift < 0
                                  ? 'text-rose-500'
                                  : 'text-zinc-500'
                            }
                          >
                            {deltaStr}
                          </span>
                        </div>
                      </div>

                      {/* Debater's Argument */}
                      <blockquote
                        className={clsx(
                          'pl-3.5 border-l-2 text-[14px] leading-relaxed',
                          isDark
                            ? 'border-zinc-700 text-zinc-200'
                            : 'border-zinc-300 text-zinc-800'
                        )}
                      >
                        {rev.userText}
                      </blockquote>

                      {/* How It Landed */}
                      <div className="space-y-1 text-xs">
                        <div className="font-medium text-zinc-500">How it landed</div>
                        <ul className="space-y-1 leading-relaxed">
                          {rev.whatWorked.map((item, idx) => (
                            <li
                              key={idx}
                              className={isDark ? 'text-zinc-300' : 'text-zinc-700'}
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* How It Could Have Gone Better */}
                      <div className="space-y-2 text-xs">
                        <div className="font-medium text-zinc-500">How to sharpen it</div>
                        <p
                          className={clsx(
                            'leading-relaxed',
                            isDark ? 'text-zinc-300' : 'text-zinc-700'
                          )}
                        >
                          {rev.whatToImprove}
                        </p>

                        {(rev.aiRewrite || rev.strongerAnglePrompt) && (
                          <div
                            className={clsx(
                              'p-3.5 rounded-xl space-y-1.5',
                              isDark ? 'bg-[#0C0C0E]' : 'bg-zinc-50'
                            )}
                          >
                            <div className="text-[11px] font-medium text-zinc-500">
                              {rev.aiRewrite
                                ? 'AI coach rewrite'
                                : rev.strongerAngleTitle
                                  ? `Stronger angle · ${rev.strongerAngleTitle}`
                                  : 'Stronger angle'}
                            </div>
                            <p
                              className={clsx(
                                'font-editorial text-[14px] leading-relaxed',
                                isDark ? 'text-zinc-200' : 'text-zinc-800'
                              )}
                            >
                              {rev.aiRewrite || rev.strongerAnglePrompt}
                            </p>
                            {rev.citedSource && (
                              <a
                                href={rev.citedSource.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-[11px] text-zinc-500 hover:text-zinc-300 pt-0.5"
                              >
                                <ExternalLink className="w-3 h-3 shrink-0" />
                                <span className="truncate max-w-[260px]">
                                  {rev.citedSource.title}
                                </span>
                              </a>
                            )}
                          </div>
                        )}

                        <div className="flex items-center gap-4 pt-0.5">
                          {canUseAiRewrite && !rev.aiRewrite && (
                            <button
                              type="button"
                              disabled={isRewriting}
                              onClick={() => void handleRequestRewrite(rev)}
                              className={clsx(
                                'inline-flex items-center gap-1.5 font-medium transition-colors disabled:opacity-45',
                                isDark
                                  ? 'text-zinc-200 hover:text-white'
                                  : 'text-zinc-900 hover:text-black'
                              )}
                            >
                              {isRewriting ? (
                                <>
                                  <Loader2 className="w-3 h-3 animate-spin" />
                                  <span>Rewriting...</span>
                                </>
                              ) : (
                                <>
                                  <Wand2 className="w-3 h-3" />
                                  <span>Rewrite with AI</span>
                                </>
                              )}
                            </button>
                          )}

                          <button
                            type="button"
                            onClick={() =>
                              setExpandedOpponentTurn(opponentOpen ? null : rev.turnIndex)
                            }
                            className="inline-flex items-center gap-1 text-zinc-500 hover:text-zinc-300"
                          >
                            {opponentOpen ? (
                              <ChevronUp className="w-3.5 h-3.5" />
                            ) : (
                              <ChevronDown className="w-3.5 h-3.5" />
                            )}
                            <span>{opponentOpen ? 'Hide counter' : 'Opponent’s counter'}</span>
                          </button>
                        </div>

                        {rewriteErr && <p className="text-rose-400">{rewriteErr}</p>}

                        {opponentOpen && (
                          <p
                            className={clsx(
                              'pt-2 text-xs leading-relaxed',
                              isDark ? 'text-zinc-400' : 'text-zinc-600'
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
            <div className="space-y-5 py-1">
              <div className="space-y-1.5">
                <div className="font-editorial text-2xl font-medium">{verdict.title}</div>
                <p className="text-xs text-zinc-500 leading-relaxed">{verdict.subtitle}</p>
                <div className="pt-2">
                  <MomentumSparkline series={session.momentumSeries} isDark={isDark} height={44} />
                </div>
              </div>

              <div
                className={clsx(
                  'grid grid-cols-3 py-3 border-y text-center',
                  isDark ? 'border-white/[0.08]' : 'border-zinc-100'
                )}
              >
                <div>
                  <div className="text-[11px] text-zinc-500">Avg score</div>
                  <div className="text-lg font-semibold font-mono tabular-nums mt-0.5">
                    {session.avgStrength}
                  </div>
                </div>
                <div>
                  <div className="text-[11px] text-zinc-500">Peak turn</div>
                  <div className="text-lg font-semibold font-mono tabular-nums mt-0.5">
                    {session.peakStrength}
                  </div>
                </div>
                <div>
                  <div className="text-[11px] text-zinc-500">Nodes hit</div>
                  <div className="text-lg font-semibold font-mono tabular-nums mt-0.5">
                    {session.nodesEngagedCount}
                  </div>
                </div>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <div className="text-zinc-500 mb-0.5">Top strength</div>
                  <div className="font-medium">{session.topStrength}</div>
                </div>
                <div>
                  <div className="text-zinc-500 mb-0.5">Next round focus</div>
                  <div className="font-medium">{session.primaryFocus}</div>
                </div>
              </div>

              {unexploredHighValue.length > 0 && onInspectNode && (
                <div className="space-y-2 pt-1">
                  <div className="text-xs font-medium text-zinc-500">
                    Unexplored arguments to prep
                  </div>
                  <div
                    className={clsx(
                      'divide-y border-t',
                      isDark
                        ? 'divide-white/[0.06] border-white/[0.06]'
                        : 'divide-zinc-100 border-zinc-100'
                    )}
                  >
                    {unexploredHighValue.map((node) => (
                      <button
                        key={node.id}
                        type="button"
                        onClick={() => {
                          onInspectNode(node.id);
                          onClose();
                        }}
                        className="w-full text-left py-2.5 flex items-center justify-between gap-2 group"
                      >
                        <div className="min-w-0">
                          <div className="text-xs font-medium truncate group-hover:underline">
                            {node.title}
                          </div>
                          <div className="text-[11px] text-zinc-500 line-clamp-1">
                            {node.summary}
                          </div>
                        </div>
                        <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div
          className={clsx(
            'px-5 py-3.5 border-t flex items-center justify-end gap-2 shrink-0 pb-[max(0.875rem,env(safe-area-inset-bottom))]',
            isDark ? 'border-white/[0.08]' : 'border-zinc-100'
          )}
        >
          {isHistoricalView && onBackToLog ? (
            <button
              type="button"
              onClick={onBackToLog}
              className={clsx(
                'px-4 py-2 rounded-xl text-xs font-semibold transition-colors',
                isDark
                  ? 'bg-white text-zinc-950 hover:bg-zinc-200'
                  : 'bg-zinc-950 text-white hover:bg-zinc-800'
              )}
            >
              Back to log
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
                    'px-3.5 py-2 rounded-xl text-xs font-medium transition-colors',
                    isDark
                      ? 'text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.06]'
                      : 'text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100'
                  )}
                >
                  New round
                </button>
              )}
              {onRematchSwitchSides && (
                <button
                  type="button"
                  onClick={() => {
                    onRematchSwitchSides();
                    onClose();
                  }}
                  className={clsx(
                    'px-4 py-2 rounded-xl text-xs font-semibold transition-colors',
                    isDark
                      ? 'bg-white text-zinc-950 hover:bg-zinc-200'
                      : 'bg-zinc-950 text-white hover:bg-zinc-800'
                  )}
                >
                  Switch sides
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
