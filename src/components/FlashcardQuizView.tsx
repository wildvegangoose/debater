import { useCallback, useEffect, useMemo, useState } from 'react';
import clsx from 'clsx';
import {
  BookOpen,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Filter,
  MapPin,
  RefreshCw,
  RotateCcw,
  Shuffle,
  Trophy,
  Zap,
} from 'lucide-react';
import { DebateGraphDataset, DebateNode } from '../types/debate';
import { trackEvent } from '../utils/analytics';

export type FlashcardType = 'rebuttal' | 'evidence' | 'thesis';

export interface FlashcardItem {
  id: string;
  nodeId: string;
  type: FlashcardType;
  pillarId: string;
  pillarTitle: string;
  promptBadge: string;
  promptTitle: string;
  promptSubtitle?: string;
  question: string;
  answerTitle: string;
  answerSummary: string;
  answerTakeaways: string[];
  answerSources: Array<{
    title: string;
    url?: string;
    publisher?: string;
    year?: string;
    category?: string;
  }>;
  relatedNodeId?: string;
}

interface FlashcardQuizViewProps {
  dataset: DebateGraphDataset;
  nodes: DebateNode[];
  activePillarId: string | null;
  onSelectPillar: (pillarId: string | null) => void;
  onInspectNode: (nodeId: string) => void;
  onSwitchToGraph: (nodeId?: string) => void;
  isDark: boolean;
}

export function FlashcardQuizView({
  dataset,
  nodes,
  activePillarId,
  onSelectPillar,
  onInspectNode,
  onSwitchToGraph,
  isDark,
}: FlashcardQuizViewProps) {
  const [selectedFilterType, setSelectedFilterType] = useState<FlashcardType | 'all'>('all');
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [masteredIds, setMasteredIds] = useState<Set<string>>(() => new Set());
  const [reviewQueueIds, setReviewQueueIds] = useState<Set<string>>(() => new Set());
  const [isReviewOnlyMode, setIsReviewOnlyMode] = useState(false);

  // Map nodes by id for quick lookups
  const nodeMap = useMemo(() => new Map(nodes.map((n) => [n.id, n])), [nodes]);

  // Find pillar title for any node
  const getPillarInfo = useCallback(
    (node: DebateNode): { id: string; title: string } => {
      let cur: DebateNode | undefined = node;
      const visited = new Set<string>();
      while (cur && !visited.has(cur.id)) {
        visited.add(cur.id);
        if (cur.kind === 'pillar') {
          return { id: cur.id, title: cur.title };
        }
        cur = cur.parentId ? nodeMap.get(cur.parentId) : undefined;
      }
      return { id: 'root', title: dataset.shortTitle };
    },
    [nodeMap, dataset.shortTitle]
  );

  // Generate flashcards from nodes
  const rawCards = useMemo<FlashcardItem[]>(() => {
    const cards: FlashcardItem[] = [];

    for (const node of nodes) {
      const pillar = getPillarInfo(node);

      // 1. Rebuttal Challenge cards (for pro and con nodes with parents)
      if (node.kind === 'pro' || node.kind === 'con') {
        const parent = node.parentId ? nodeMap.get(node.parentId) : null;
        if (parent) {
          const badge =
            node.kind === 'con' ? 'Counter-Rebuttal' : 'Supporting Case';

          cards.push({
            id: `card-rebuttal-${node.id}`,
            nodeId: node.id,
            type: 'rebuttal',
            pillarId: pillar.id,
            pillarTitle: pillar.title,
            promptBadge: badge,
            promptTitle: parent.title,
            promptSubtitle: `Stakes: ${parent.summary.slice(0, 160)}${parent.summary.length > 160 ? '...' : ''}`,
            question:
              node.kind === 'con'
                ? 'What is the primary steelmanned counter-argument and evidence challenging this position?'
                : 'What is the primary steelmanned argument supporting and elaborating on this claim?',
            answerTitle: node.title,
            answerSummary: node.summary,
            answerTakeaways: node.details.slice(0, 3),
            answerSources: (node.sources ?? []).slice(0, 3),
            relatedNodeId: parent.id,
          });
        }
      }

      // 2. Theses Dialectical Tension cards
      if (node.kind === 'thesis') {
        const children = nodes.filter((n) => n.parentId === node.id);
        const proChildren = children.filter((n) => n.kind === 'pro');
        const conChildren = children.filter((n) => n.kind === 'con');

        cards.push({
          id: `card-thesis-${node.id}`,
          nodeId: node.id,
          type: 'thesis',
          pillarId: pillar.id,
          pillarTitle: pillar.title,
          promptBadge: 'Dialectical Thesis',
          promptTitle: node.title,
          promptSubtitle: node.summary,
          question: `What are the core competing stances (${proChildren.length} Pro / ${conChildren.length} Con) and primary tensions on this issue?`,
          answerTitle: node.title,
          answerSummary: `Debate Thesis in ${pillar.title}: ${node.summary}`,
          answerTakeaways: [
            `Supporting Stances: ${proChildren.map((p) => p.title).slice(0, 2).join('; ') || 'See detailed case'}`,
            `Counter Stances: ${conChildren.map((c) => c.title).slice(0, 2).join('; ') || 'See counter arguments'}`,
            ...node.details.slice(0, 2),
          ],
          answerSources: (node.sources ?? []).slice(0, 3),
        });
      }

      // 3. Evidence & Study Precedent cards (for nodes with rich sources)
      if (node.sources && node.sources.length >= 2 && (node.kind === 'pro' || node.kind === 'con')) {
        cards.push({
          id: `card-evidence-${node.id}`,
          nodeId: node.id,
          type: 'evidence',
          pillarId: pillar.id,
          pillarTitle: pillar.title,
          promptBadge: 'Evidence & Citations',
          promptTitle: node.title,
          promptSubtitle: node.summary.slice(0, 150) + '...',
          question:
            'What specific empirical studies, court records, watchdog findings, or landmark treaties substantiate this claim?',
          answerTitle: `Key Evidence for: "${node.title}"`,
          answerSummary: node.summary,
          answerTakeaways: node.details.slice(0, 3),
          answerSources: node.sources.slice(0, 3),
        });
      }
    }

    return cards;
  }, [nodes, nodeMap, getPillarInfo, dataset.shortTitle]);

  // Filter cards by pillar, type, and review-only mode
  const filteredCards = useMemo(() => {
    let result = rawCards;

    if (activePillarId) {
      result = result.filter((c) => c.pillarId === activePillarId);
    }

    if (selectedFilterType !== 'all') {
      result = result.filter((c) => c.type === selectedFilterType);
    }

    if (isReviewOnlyMode) {
      result = result.filter((c) => reviewQueueIds.has(c.id));
    }

    return result;
  }, [rawCards, activePillarId, selectedFilterType, isReviewOnlyMode, reviewQueueIds]);

  // Keep currentIndex bounded
  useEffect(() => {
    if (currentIndex >= filteredCards.length) {
      setCurrentIndex(Math.max(0, filteredCards.length - 1));
    }
    setIsFlipped(false);
  }, [filteredCards.length, currentIndex]);

  const currentCard: FlashcardItem | undefined = filteredCards[currentIndex];

  const handleNext = useCallback(() => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1 < filteredCards.length ? prev + 1 : 0));
  }, [filteredCards.length]);

  const handlePrev = useCallback(() => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 >= 0 ? prev - 1 : filteredCards.length - 1));
  }, [filteredCards.length]);

  const handleFlip = useCallback(() => {
    setIsFlipped((prev) => {
      if (!prev && currentCard) {
        trackEvent('quiz_card_flipped', {
          topic_id: dataset.id,
          card_type: currentCard.type,
        });
      }
      return !prev;
    });
  }, [currentCard, dataset.id]);

  const handleMarkMastered = useCallback(() => {
    if (!currentCard) return;
    trackEvent('quiz_card_assessed', {
      topic_id: dataset.id,
      card_type: currentCard.type,
      outcome: 'mastered',
    });
    setMasteredIds((prev) => {
      const next = new Set(prev);
      next.add(currentCard.id);
      return next;
    });
    setReviewQueueIds((prev) => {
      const next = new Set(prev);
      next.delete(currentCard.id);
      return next;
    });
    handleNext();
  }, [currentCard, dataset.id, handleNext]);

  const handleMarkReview = useCallback(() => {
    if (!currentCard) return;
    trackEvent('quiz_card_assessed', {
      topic_id: dataset.id,
      card_type: currentCard.type,
      outcome: 'review',
    });
    setReviewQueueIds((prev) => {
      const next = new Set(prev);
      next.add(currentCard.id);
      return next;
    });
    setMasteredIds((prev) => {
      const next = new Set(prev);
      next.delete(currentCard.id);
      return next;
    });
    handleNext();
  }, [currentCard, dataset.id, handleNext]);

  const handleShuffle = useCallback(() => {
    setIsFlipped(false);
    setCurrentIndex(Math.floor(Math.random() * Math.max(1, filteredCards.length)));
  }, [filteredCards.length]);

  const handleResetProgress = useCallback(() => {
    setMasteredIds(new Set());
    setReviewQueueIds(new Set());
    setIsReviewOnlyMode(false);
    setCurrentIndex(0);
    setIsFlipped(false);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }
      if (e.code === 'Space' || e.code === 'Enter') {
        e.preventDefault();
        handleFlip();
      } else if (e.code === 'ArrowRight' || e.key === 'j') {
        e.preventDefault();
        handleNext();
      } else if (e.code === 'ArrowLeft' || e.key === 'k') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === '1') {
        e.preventDefault();
        handleMarkReview();
      } else if (e.key === '2') {
        e.preventDefault();
        handleMarkMastered();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleFlip, handleNext, handlePrev, handleMarkReview, handleMarkMastered]);

  const pillars = useMemo(() => nodes.filter((n) => n.kind === 'pillar'), [nodes]);

  const masteredCount = useMemo(() => {
    return filteredCards.filter((c) => masteredIds.has(c.id)).length;
  }, [filteredCards, masteredIds]);

  const reviewCount = useMemo(() => {
    return filteredCards.filter((c) => reviewQueueIds.has(c.id)).length;
  }, [filteredCards, reviewQueueIds]);

  const progressPercent = filteredCards.length > 0 ? Math.round((masteredCount / filteredCards.length) * 100) : 0;

  return (
    <div
      className={clsx(
        'flex-1 flex flex-col h-full overflow-y-auto select-none transition-colors duration-150',
        isDark ? 'bg-[#0C0C0E] text-zinc-100' : 'bg-white text-zinc-950'
      )}
    >
      {/* Quiz Header & Filters */}
      <div
        className={clsx(
          'px-4 sm:px-6 py-3 border-b shrink-0 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3',
          isDark ? 'bg-[#0C0C0E] border-white/[0.08]' : 'bg-white border-zinc-100'
        )}
      >
        <div className="flex items-center gap-3">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-editorial text-base font-medium tracking-tight">Rebuttal Flashcards</h2>
              <span className="text-xs font-mono text-zinc-500">
                {filteredCards.length} cards
              </span>
            </div>
            <p className={clsx('text-xs hidden sm:block', isDark ? 'text-zinc-500' : 'text-zinc-500')}>
              Drill steelmanned counter-arguments, empirical studies, and landmark positions.
            </p>
          </div>
        </div>

        {/* Filter Badges & Controls */}
        <div className="flex items-center gap-2 flex-wrap w-full sm:w-auto justify-between sm:justify-end">
          {/* Pillar Selector Dropdown */}
          <div className="flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5 text-zinc-500" />
            <select
              value={activePillarId ?? ''}
              onChange={(e) => onSelectPillar(e.target.value || null)}
              className={clsx(
                'text-xs px-2.5 py-1.5 rounded-lg border font-medium focus:outline-none',
                isDark ? 'bg-[#141417] border-white/[0.1] text-zinc-200' : 'bg-zinc-50 border-zinc-200 text-zinc-800'
              )}
            >
              <option value="">All Pillars ({nodes.length} nodes)</option>
              {pillars.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.title}
                </option>
              ))}
            </select>
          </div>

          {/* Type Filter */}
          <div
            className={clsx(
              'inline-flex items-center p-0.5 rounded-lg text-xs',
              isDark ? 'bg-[#161619]' : 'bg-zinc-100'
            )}
          >
            <button
              type="button"
              onClick={() => setSelectedFilterType('all')}
              className={clsx(
                'px-2.5 py-1 rounded-md transition-all font-medium',
                selectedFilterType === 'all'
                  ? isDark
                    ? 'bg-[#26262B] text-white shadow-xs'
                    : 'bg-white text-zinc-950 shadow-xs'
                  : isDark
                    ? 'text-zinc-400 hover:text-zinc-200'
                    : 'text-zinc-500 hover:text-zinc-900'
              )}
            >
              All
            </button>
            <button
              type="button"
              onClick={() => setSelectedFilterType('rebuttal')}
              className={clsx(
                'px-2.5 py-1 rounded-md transition-all font-medium',
                selectedFilterType === 'rebuttal'
                  ? isDark
                    ? 'bg-[#26262B] text-white shadow-xs'
                    : 'bg-white text-zinc-950 shadow-xs'
                  : isDark
                    ? 'text-zinc-400 hover:text-zinc-200'
                    : 'text-zinc-500 hover:text-zinc-900'
              )}
            >
              Rebuttals
            </button>
            <button
              type="button"
              onClick={() => setSelectedFilterType('evidence')}
              className={clsx(
                'px-2.5 py-1 rounded-md transition-all font-medium',
                selectedFilterType === 'evidence'
                  ? isDark
                    ? 'bg-[#26262B] text-white shadow-xs'
                    : 'bg-white text-zinc-950 shadow-xs'
                  : isDark
                    ? 'text-zinc-400 hover:text-zinc-200'
                    : 'text-zinc-500 hover:text-zinc-900'
              )}
            >
              Evidence
            </button>
          </div>

          {/* Shuffle button */}
          <button
            type="button"
            onClick={handleShuffle}
            title="Shuffle Deck"
            className={clsx(
              'p-1.5 rounded-lg border transition-colors',
              isDark
                ? 'bg-[#141417] border-white/[0.08] text-zinc-400 hover:text-zinc-100 hover:border-white/20'
                : 'bg-white border-zinc-200 text-zinc-600 hover:text-zinc-950 hover:border-zinc-300'
            )}
          >
            <Shuffle className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Progress & Stats Bar */}
      <div
        className={clsx(
          'px-4 sm:px-6 py-2 border-b flex items-center justify-between text-xs gap-2 flex-wrap',
          isDark ? 'bg-[#0C0C0E] border-white/[0.06] text-zinc-400' : 'bg-white border-zinc-100 text-zinc-500'
        )}
      >
        <div className="flex items-center gap-3 flex-wrap">
          <span className="font-mono tabular-nums">
            <strong className={isDark ? 'text-zinc-100' : 'text-zinc-950'}>
              {filteredCards.length > 0 ? currentIndex + 1 : 0}
            </strong>
            <span className="text-zinc-500"> / {filteredCards.length}</span>
          </span>
          <span className="text-emerald-500 font-medium inline-flex items-center gap-1 tabular-nums">
            <CheckCircle2 className="w-3.5 h-3.5" />
            {masteredCount} mastered ({progressPercent}%)
          </span>
          {reviewCount > 0 && (
            <span
              className={clsx(
                'font-medium inline-flex items-center gap-1 tabular-nums',
                isDark ? 'text-zinc-300' : 'text-zinc-700'
              )}
            >
              <RefreshCw className="w-3.5 h-3.5" />
              {reviewCount} to review
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          {reviewCount > 0 && (
            <button
              type="button"
              onClick={() => setIsReviewOnlyMode((v) => !v)}
              className={clsx(
                'px-2.5 py-0.5 rounded-md text-[11px] font-medium border transition-colors',
                isReviewOnlyMode
                  ? isDark
                    ? 'bg-white border-white text-zinc-950'
                    : 'bg-zinc-950 border-zinc-950 text-white'
                  : isDark
                    ? 'bg-[#141417] border-white/[0.08] text-zinc-300 hover:border-white/20'
                    : 'bg-zinc-50 border-zinc-200 text-zinc-700 hover:border-zinc-300'
              )}
            >
              {isReviewOnlyMode ? 'Show All Cards' : `Review Missed (${reviewCount})`}
            </button>
          )}

          <button
            type="button"
            onClick={handleResetProgress}
            title="Reset Quiz Progress"
            className={clsx(
              'inline-flex items-center gap-1 text-[11px] font-medium transition-colors',
              isDark ? 'text-zinc-500 hover:text-zinc-200' : 'text-zinc-400 hover:text-zinc-800'
            )}
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset</span>
          </button>
        </div>
      </div>

      {/* Progress Track */}
      <div className={clsx('w-full h-[2px]', isDark ? 'bg-white/[0.06]' : 'bg-zinc-100')}>
        <div
          className={clsx(
            'h-full transition-all duration-300',
            isDark ? 'bg-white' : 'bg-zinc-950'
          )}
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Main Flashcard Stage */}
      <div className="flex-1 flex flex-col items-center justify-center p-4 sm:p-8 max-w-3xl mx-auto w-full">
        {filteredCards.length === 0 ? (
          <div
            className={clsx(
              'p-8 rounded-2xl border text-center max-w-md w-full',
              isDark ? 'bg-[#141417] border-white/[0.08]' : 'bg-white border-zinc-200'
            )}
          >
            <Trophy className={clsx('w-10 h-10 mx-auto mb-3', isDark ? 'text-zinc-300' : 'text-zinc-700')} />
            <h3 className="font-editorial text-xl font-medium tracking-tight">No Cards in this Selection</h3>
            <p className={clsx('text-xs mt-1.5 mb-5 leading-relaxed', isDark ? 'text-zinc-400' : 'text-zinc-500')}>
              {isReviewOnlyMode
                ? 'You have mastered all cards marked for review.'
                : "Try selecting 'All Pillars' or a different card type filter."}
            </p>
            <button
              type="button"
              onClick={handleResetProgress}
              className={clsx(
                'px-4 py-2 rounded-xl text-xs font-semibold transition-colors',
                isDark
                  ? 'bg-white text-zinc-950 hover:bg-zinc-200'
                  : 'bg-zinc-950 text-white hover:bg-zinc-800'
              )}
            >
              Reset Filters &amp; Progress
            </button>
          </div>
        ) : currentCard ? (
          <div className="w-full flex flex-col items-center gap-5">
            {/* Flip Card Container */}
            <div
              onClick={handleFlip}
              className="w-full min-h-[380px] sm:min-h-[430px] cursor-pointer group perspective-1000 relative"
            >
              <div
                className={clsx(
                  'w-full h-full rounded-2xl border transition-all duration-200 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden',
                  isDark
                    ? isFlipped
                      ? 'bg-[#141417] border-white/20 text-zinc-100'
                      : 'bg-[#141417] border-white/[0.08] text-zinc-100 hover:border-white/[0.18]'
                    : isFlipped
                      ? 'bg-white border-zinc-900/25 text-zinc-950 shadow-sm'
                      : 'bg-white border-zinc-200 text-zinc-950 hover:border-zinc-300 shadow-xs'
                )}
              >
                {/* Top Card Metadata Row */}
                <div
                  className={clsx(
                    'flex items-center justify-between gap-2 border-b pb-3.5 mb-4',
                    isDark ? 'border-white/[0.08]' : 'border-zinc-100'
                  )}
                >
                  <div className="flex items-center gap-2 flex-wrap">
                    <span
                      className={clsx(
                        'px-2.5 py-0.5 rounded-full text-[11px] font-medium border flex items-center gap-1',
                        isFlipped
                          ? isDark
                            ? 'bg-emerald-500/10 border-emerald-500/25 text-emerald-400'
                            : 'bg-emerald-50 border-emerald-200 text-emerald-700'
                          : isDark
                            ? 'bg-white/[0.05] border-white/[0.08] text-zinc-300'
                            : 'bg-zinc-100 border-zinc-200 text-zinc-700'
                      )}
                    >
                      {isFlipped ? 'Revealed Answer' : currentCard.promptBadge}
                    </span>
                    <span className={clsx('text-[11px] font-medium', isDark ? 'text-zinc-500' : 'text-zinc-400')}>
                      {currentCard.pillarTitle}
                    </span>
                  </div>

                  <span
                    className={clsx(
                      'text-[11px] font-mono px-2 py-0.5 rounded',
                      isDark ? 'bg-white/[0.04] text-zinc-500' : 'bg-zinc-100 text-zinc-500'
                    )}
                  >
                    Space · {isFlipped ? 'Front' : 'Reveal'}
                  </span>
                </div>

                {/* Card Front Content (Prompt & Question) */}
                {!isFlipped ? (
                  <div className="flex-1 flex flex-col justify-center py-2 space-y-5">
                    <div className="space-y-2">
                      <div
                        className={clsx(
                          'text-[11px] font-medium uppercase tracking-wider',
                          isDark ? 'text-zinc-500' : 'text-zinc-400'
                        )}
                      >
                        Target Claim
                      </div>
                      <h3 className="font-editorial text-2xl sm:text-[26px] font-medium leading-[1.22] tracking-[-0.015em]">
                        {currentCard.promptTitle}
                      </h3>
                      {currentCard.promptSubtitle && (
                        <p
                          className={clsx(
                            'text-[13px] sm:text-sm leading-relaxed mt-1',
                            isDark ? 'text-zinc-400' : 'text-zinc-500'
                          )}
                        >
                          &ldquo;{currentCard.promptSubtitle}&rdquo;
                        </p>
                      )}
                    </div>

                    <div
                      className={clsx(
                        'p-4 sm:p-5 rounded-xl border text-sm sm:text-[15px] leading-relaxed',
                        isDark
                          ? 'bg-[#0C0C0E] border-white/[0.08] text-zinc-200'
                          : 'bg-zinc-50 border-zinc-200 text-zinc-800'
                      )}
                    >
                      <span
                        className={clsx(
                          'font-medium flex items-center gap-1.5 mb-1.5 text-[11px] uppercase tracking-wider',
                          isDark ? 'text-zinc-500' : 'text-zinc-400'
                        )}
                      >
                        <Zap className="w-3.5 h-3.5" /> Challenge Prompt
                      </span>
                      {currentCard.question}
                    </div>
                  </div>
                ) : (
                  /* Card Back Content (Steelmanned Answer, Takeaways & Sources) */
                  <div className="flex-1 flex flex-col justify-between py-1 space-y-4 overflow-y-auto max-h-[380px]">
                    <div className="space-y-3.5">
                      <div>
                        <div className="text-[11px] font-medium uppercase tracking-wider text-emerald-500">
                          Steelmanned Position
                        </div>
                        <h3 className="font-editorial text-xl sm:text-[22px] font-medium leading-snug tracking-[-0.015em] mt-1">
                          {currentCard.answerTitle}
                        </h3>
                      </div>

                      <p
                        className={clsx(
                          'text-[13px] sm:text-sm leading-relaxed',
                          isDark ? 'text-zinc-300' : 'text-zinc-600'
                        )}
                      >
                        {currentCard.answerSummary}
                      </p>

                      {/* Takeaways */}
                      {currentCard.answerTakeaways.length > 0 && (
                        <div className="space-y-1.5 pt-1">
                          <div
                            className={clsx(
                              'text-[11px] font-medium uppercase tracking-wider',
                              isDark ? 'text-zinc-500' : 'text-zinc-400'
                            )}
                          >
                            Key Evidence &amp; Findings
                          </div>
                          <ul className="space-y-1.5 text-xs">
                            {currentCard.answerTakeaways.map((takeaway, i) => (
                              <li key={i} className="flex items-start gap-2 leading-relaxed">
                                <span
                                  className={clsx(
                                    'w-1.5 h-1.5 rounded-full shrink-0 mt-1.5',
                                    isDark ? 'bg-zinc-500' : 'bg-zinc-400'
                                  )}
                                />
                                <span className={isDark ? 'text-zinc-200' : 'text-zinc-700'}>{takeaway}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Primary Sources */}
                      {currentCard.answerSources.length > 0 && (
                        <div
                          className={clsx(
                            'space-y-1.5 pt-2.5 border-t',
                            isDark ? 'border-white/[0.06]' : 'border-zinc-100'
                          )}
                        >
                          <div
                            className={clsx(
                              'text-[11px] font-medium uppercase tracking-wider',
                              isDark ? 'text-zinc-500' : 'text-zinc-400'
                            )}
                          >
                            Primary Citations
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {currentCard.answerSources.map((src, idx) => (
                              <a
                                key={idx}
                                href={src.url ?? '#'}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className={clsx(
                                  'inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] border font-medium transition-colors',
                                  isDark
                                    ? 'bg-[#0C0C0E] border-white/[0.08] text-zinc-300 hover:border-white/25 hover:text-white'
                                    : 'bg-zinc-50 border-zinc-200 text-zinc-700 hover:border-zinc-400 hover:text-zinc-950'
                                )}
                              >
                                <span className="truncate max-w-[200px]">{src.title}</span>
                                {src.publisher && <span className="opacity-60 text-[10px]">({src.publisher})</span>}
                                <ExternalLink className="w-3 h-3 shrink-0 opacity-60" />
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Bottom Card Footer with Actions */}
                <div
                  className={clsx(
                    'pt-3.5 border-t flex items-center justify-between gap-2 text-xs',
                    isDark ? 'border-white/[0.08]' : 'border-zinc-100'
                  )}
                >
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onInspectNode(currentCard.nodeId);
                      }}
                      className={clsx(
                        'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-xs font-medium transition-colors',
                        isDark
                          ? 'bg-white/[0.04] border-white/[0.08] text-zinc-300 hover:bg-white/[0.08] hover:text-white'
                          : 'bg-zinc-50 border-zinc-200 text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950'
                      )}
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Dossier</span>
                    </button>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSwitchToGraph(currentCard.nodeId);
                      }}
                      className={clsx(
                        'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-xs font-medium transition-colors',
                        isDark
                          ? 'bg-white/[0.04] border-white/[0.08] text-zinc-300 hover:bg-white/[0.08] hover:text-white'
                          : 'bg-zinc-50 border-zinc-200 text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950'
                      )}
                    >
                      <MapPin className="w-3.5 h-3.5" />
                      <span>Graph</span>
                    </button>
                  </div>

                  <div className="text-[11px] font-mono text-zinc-500">
                    {isFlipped ? '[1] Review · [2] Mastered' : 'Tap to flip'}
                  </div>
                </div>
              </div>
            </div>

            {/* Answer Assessment Buttons (Got It vs. Study Again) */}
            <div className="flex items-center justify-between w-full max-w-xl gap-2.5">
              {/* Prev Button */}
              <button
                type="button"
                onClick={handlePrev}
                className={clsx(
                  'p-3 rounded-xl border flex items-center justify-center transition-colors',
                  isDark
                    ? 'bg-[#141417] border-white/[0.08] hover:bg-white/[0.06] text-zinc-300'
                    : 'bg-white border-zinc-200 hover:bg-zinc-50 text-zinc-700'
                )}
                title="Previous card (Left Arrow / K)"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Study Again / Needs Review Button */}
              <button
                type="button"
                onClick={handleMarkReview}
                className={clsx(
                  'flex-1 py-3 px-4 rounded-xl border font-medium text-xs sm:text-[13px] flex items-center justify-center gap-2 transition-colors',
                  isDark
                    ? 'bg-[#141417] border-white/[0.1] text-zinc-200 hover:bg-white/[0.06] hover:border-white/20'
                    : 'bg-white border-zinc-200 text-zinc-800 hover:bg-zinc-50 hover:border-zinc-300'
                )}
              >
                <RefreshCw className="w-4 h-4" />
                <span>Study Again</span>
                <span className="text-[10.5px] font-mono text-zinc-500 hidden sm:inline">1</span>
              </button>

              {/* Flip Button */}
              <button
                type="button"
                onClick={handleFlip}
                className={clsx(
                  'py-3 px-4 rounded-xl border font-medium text-xs sm:text-[13px] flex items-center justify-center gap-1.5 transition-colors',
                  isDark
                    ? 'bg-[#161619] border-white/[0.08] text-zinc-300 hover:text-white hover:border-white/20'
                    : 'bg-zinc-100 border-zinc-200 text-zinc-700 hover:text-zinc-950 hover:bg-zinc-200/70'
                )}
              >
                <RotateCcw className="w-4 h-4" />
                <span className="hidden sm:inline">{isFlipped ? 'Front' : 'Flip'}</span>
              </button>

              {/* Got It / Mastered Button */}
              <button
                type="button"
                onClick={handleMarkMastered}
                className={clsx(
                  'flex-1 py-3 px-4 rounded-xl border font-semibold text-xs sm:text-[13px] flex items-center justify-center gap-2 transition-colors',
                  isDark
                    ? 'bg-white border-white text-zinc-950 hover:bg-zinc-200'
                    : 'bg-zinc-950 border-zinc-950 text-white hover:bg-zinc-800'
                )}
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Mastered</span>
                <span className="text-[10.5px] font-mono opacity-60 hidden sm:inline">2</span>
              </button>

              {/* Next Button */}
              <button
                type="button"
                onClick={handleNext}
                className={clsx(
                  'p-3 rounded-xl border flex items-center justify-center transition-colors',
                  isDark
                    ? 'bg-[#141417] border-white/[0.08] hover:bg-white/[0.06] text-zinc-300'
                    : 'bg-white border-zinc-200 hover:bg-zinc-50 text-zinc-700'
                )}
                title="Next card (Right Arrow / J)"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
