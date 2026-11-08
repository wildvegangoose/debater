import { useCallback, useEffect, useMemo, useState } from 'react';
import clsx from 'clsx';
import {
  BookOpen,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Filter,
  GraduationCap,
  MapPin,
  RefreshCw,
  RotateCcw,
  Shuffle,
  Trophy,
  Zap,
} from 'lucide-react';
import { DebateGraphDataset, DebateNode } from '../types/debate';

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
            node.kind === 'con' ? '− Counter-Rebuttal Challenge' : '+ Supporting Case Challenge';

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
          promptBadge: '⚖️ Dialectical Thesis',
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
          promptBadge: '🔬 Evidence & Citations',
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
    setIsFlipped((prev) => !prev);
  }, []);

  const handleMarkMastered = useCallback(() => {
    if (!currentCard) return;
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
  }, [currentCard, handleNext]);

  const handleMarkReview = useCallback(() => {
    if (!currentCard) return;
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
  }, [currentCard, handleNext]);

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
        isDark ? 'bg-slate-950 text-slate-100' : 'bg-slate-100 text-slate-900'
      )}
    >
      {/* Quiz Header & Filters */}
      <div
        className={clsx(
          'px-4 sm:px-6 py-3 border-b shrink-0 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3',
          isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200'
        )}
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
            <GraduationCap className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-sm sm:text-base font-bold tracking-tight">Debate Flashcard Quiz</h2>
              <span
                className={clsx(
                  'px-2 py-0.5 rounded-full text-[11px] font-semibold border',
                  isDark ? 'bg-slate-800 border-slate-700 text-indigo-300' : 'bg-indigo-50 border-indigo-200 text-indigo-700'
                )}
              >
                {filteredCards.length} Cards
              </span>
            </div>
            <p className={clsx('text-xs hidden sm:block', isDark ? 'text-slate-400' : 'text-slate-500')}>
              Quiz yourself on steelmanned counter-arguments, empirical studies, and landmark positions.
            </p>
          </div>
        </div>

        {/* Filter Badges & Controls */}
        <div className="flex items-center gap-2 flex-wrap w-full sm:w-auto justify-between sm:justify-end">
          {/* Pillar Selector Dropdown */}
          <div className="flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5 text-slate-400" />
            <select
              value={activePillarId ?? ''}
              onChange={(e) => onSelectPillar(e.target.value || null)}
              className={clsx(
                'text-xs px-2.5 py-1.5 rounded-lg border font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500',
                isDark ? 'bg-slate-800 border-slate-700 text-slate-200' : 'bg-slate-50 border-slate-300 text-slate-800'
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
              'inline-flex items-center p-0.5 rounded-lg border text-xs',
              isDark ? 'bg-slate-900 border-slate-700' : 'bg-slate-200/70 border-slate-300'
            )}
          >
            <button
              type="button"
              onClick={() => setSelectedFilterType('all')}
              className={clsx(
                'px-2 py-1 rounded-md transition-all font-medium',
                selectedFilterType === 'all'
                  ? isDark
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'bg-white text-indigo-700 shadow-xs'
                  : 'text-slate-400 hover:text-slate-200'
              )}
            >
              All
            </button>
            <button
              type="button"
              onClick={() => setSelectedFilterType('rebuttal')}
              className={clsx(
                'px-2 py-1 rounded-md transition-all font-medium',
                selectedFilterType === 'rebuttal'
                  ? isDark
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'bg-white text-indigo-700 shadow-xs'
                  : 'text-slate-400 hover:text-slate-200'
              )}
            >
              Rebuttals
            </button>
            <button
              type="button"
              onClick={() => setSelectedFilterType('evidence')}
              className={clsx(
                'px-2 py-1 rounded-md transition-all font-medium',
                selectedFilterType === 'evidence'
                  ? isDark
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'bg-white text-indigo-700 shadow-xs'
                  : 'text-slate-400 hover:text-slate-200'
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
                ? 'bg-slate-800 border-slate-700 text-slate-300 hover:text-indigo-400'
                : 'bg-white border-slate-300 text-slate-700 hover:text-indigo-600'
            )}
          >
            <Shuffle className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Progress & Stats Bar */}
      <div
        className={clsx(
          'px-4 sm:px-6 py-2 border-b flex items-center justify-between text-xs',
          isDark ? 'bg-slate-900/50 border-slate-800/80 text-slate-400' : 'bg-white/60 border-slate-200 text-slate-600'
        )}
      >
        <div className="flex items-center gap-3">
          <span>
            Card <strong className={isDark ? 'text-white' : 'text-slate-900'}>{filteredCards.length > 0 ? currentIndex + 1 : 0}</strong> of{' '}
            <strong className={isDark ? 'text-white' : 'text-slate-900'}>{filteredCards.length}</strong>
          </span>
          <span className="text-emerald-500 font-medium flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" />
            {masteredCount} Mastered ({progressPercent}%)
          </span>
          {reviewCount > 0 && (
            <span className="text-amber-500 font-medium flex items-center gap-1">
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
                'px-2 py-0.5 rounded text-[11px] font-semibold border transition-colors',
                isReviewOnlyMode
                  ? 'bg-amber-500/20 border-amber-500/40 text-amber-300'
                  : isDark
                  ? 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'
                  : 'bg-slate-100 border-slate-300 text-slate-700 hover:bg-slate-200'
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
              'inline-flex items-center gap-1 text-[11px] hover:underline',
              isDark ? 'text-slate-400 hover:text-slate-200' : 'text-slate-500 hover:text-slate-800'
            )}
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset</span>
          </button>
        </div>
      </div>

      {/* Progress Track */}
      <div className={clsx('w-full h-1', isDark ? 'bg-slate-800' : 'bg-slate-200')}>
        <div
          className="h-full bg-gradient-to-r from-indigo-500 to-emerald-400 transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Main Flashcard Stage */}
      <div className="flex-1 flex flex-col items-center justify-center p-4 sm:p-8 max-w-4xl mx-auto w-full">
        {filteredCards.length === 0 ? (
          <div
            className={clsx(
              'p-8 rounded-2xl border text-center max-w-md w-full shadow-lg',
              isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
            )}
          >
            <Trophy className="w-12 h-12 text-amber-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold">No Cards in this Selection</h3>
            <p className={clsx('text-xs mt-1 mb-4', isDark ? 'text-slate-400' : 'text-slate-500')}>
              {isReviewOnlyMode
                ? "You have mastered all cards marked for review! Great job!"
                : "Try selecting 'All Pillars' or a different card type filter."}
            </p>
            <button
              type="button"
              onClick={handleResetProgress}
              className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-md transition-all"
            >
              Reset Filters &amp; Progress
            </button>
          </div>
        ) : currentCard ? (
          <div className="w-full flex flex-col items-center gap-5">
            {/* 3D Flip Card Container */}
            <div
              onClick={handleFlip}
              className="w-full min-h-[380px] sm:min-h-[440px] cursor-pointer group perspective-1000 relative"
            >
              <div
                className={clsx(
                  'w-full h-full rounded-2xl border transition-all duration-300 shadow-xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden',
                  isDark
                    ? isFlipped
                      ? 'bg-slate-900/95 border-emerald-500/40 text-slate-100 shadow-emerald-950/20'
                      : 'bg-slate-900/90 border-slate-700/80 text-slate-100 hover:border-indigo-500/60'
                    : isFlipped
                    ? 'bg-white border-emerald-300 text-slate-900 shadow-emerald-500/10'
                    : 'bg-white border-slate-200 text-slate-900 hover:border-indigo-400'
                )}
              >
                {/* Top Card Metadata Row */}
                <div className="flex items-center justify-between gap-2 border-b pb-3.5 mb-4 border-inherit">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span
                      className={clsx(
                        'px-2.5 py-0.5 rounded-full text-[11px] font-bold border flex items-center gap-1',
                        isFlipped
                          ? 'bg-emerald-500/15 border-emerald-400/30 text-emerald-300'
                          : 'bg-indigo-500/15 border-indigo-400/30 text-indigo-300'
                      )}
                    >
                      {isFlipped ? '💡 Revealed Answer & Evidence' : currentCard.promptBadge}
                    </span>
                    <span className={clsx('text-[11px] font-medium', isDark ? 'text-slate-400' : 'text-slate-500')}>
                      Pillar: {currentCard.pillarTitle}
                    </span>
                  </div>

                  <span
                    className={clsx(
                      'text-[11px] font-mono px-2 py-0.5 rounded',
                      isDark ? 'bg-slate-800 text-slate-400' : 'bg-slate-100 text-slate-600'
                    )}
                  >
                    Tap / Space to {isFlipped ? 'Show Front' : 'Reveal'}
                  </span>
                </div>

                {/* Card Front Content (Prompt & Question) */}
                {!isFlipped ? (
                  <div className="flex-1 flex flex-col justify-center py-2 space-y-4">
                    <div className="space-y-1.5">
                      <div className={clsx('text-xs font-semibold uppercase tracking-wider', isDark ? 'text-indigo-400' : 'text-indigo-600')}>
                        Target Claim / Position
                      </div>
                      <h3 className="font-editorial text-xl sm:text-2xl font-semibold leading-snug">
                        {currentCard.promptTitle}
                      </h3>
                      {currentCard.promptSubtitle && (
                        <p className={clsx('text-xs sm:text-sm leading-relaxed mt-1 italic', isDark ? 'text-slate-400' : 'text-slate-600')}>
                          "{currentCard.promptSubtitle}"
                        </p>
                      )}
                    </div>

                    <div
                      className={clsx(
                        'p-4 sm:p-5 rounded-xl border text-sm sm:text-base font-medium leading-relaxed',
                        isDark ? 'bg-indigo-950/30 border-indigo-500/30 text-indigo-200' : 'bg-indigo-50/70 border-indigo-200 text-indigo-900'
                      )}
                    >
                      <span className="font-bold flex items-center gap-1.5 mb-1 text-xs uppercase tracking-wide">
                        <Zap className="w-3.5 h-3.5" /> Challenge Prompt
                      </span>
                      {currentCard.question}
                    </div>
                  </div>
                ) : (
                  /* Card Back Content (Steelmanned Answer, Takeaways & Sources) */
                  <div className="flex-1 flex flex-col justify-between py-1 space-y-4 overflow-y-auto max-h-[380px]">
                    <div className="space-y-3">
                      <div>
                        <div className={clsx('text-xs font-semibold uppercase tracking-wider text-emerald-500')}>
                          Steelmanned Counter-Position &amp; Thesis
                        </div>
                        <h3 className="font-editorial text-lg sm:text-xl font-bold leading-snug text-emerald-400 mt-0.5">
                          {currentCard.answerTitle}
                        </h3>
                      </div>

                      <p className={clsx('text-xs sm:text-sm leading-relaxed', isDark ? 'text-slate-300' : 'text-slate-700')}>
                        {currentCard.answerSummary}
                      </p>

                      {/* Takeaways */}
                      {currentCard.answerTakeaways.length > 0 && (
                        <div className="space-y-1.5 pt-1">
                          <div className={clsx('text-[11px] font-bold uppercase tracking-wider', isDark ? 'text-slate-400' : 'text-slate-500')}>
                            Key Empirical Arguments &amp; Findings
                          </div>
                          <ul className="space-y-1 text-xs">
                            {currentCard.answerTakeaways.map((takeaway, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-1.5" />
                                <span className={isDark ? 'text-slate-200' : 'text-slate-800'}>{takeaway}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Primary Sources */}
                      {currentCard.answerSources.length > 0 && (
                        <div className="space-y-1.5 pt-2 border-t border-inherit">
                          <div className={clsx('text-[11px] font-bold uppercase tracking-wider', isDark ? 'text-slate-400' : 'text-slate-500')}>
                            Primary Citations &amp; Dockets
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
                                    ? 'bg-slate-800/90 border-slate-700 text-indigo-300 hover:bg-indigo-500/20'
                                    : 'bg-slate-100 border-slate-300 text-indigo-700 hover:bg-indigo-50'
                                )}
                              >
                                <span className="truncate max-w-[200px]">{src.title}</span>
                                {src.publisher && <span className="opacity-60 text-[10px]">({src.publisher})</span>}
                                <ExternalLink className="w-3 h-3 shrink-0 opacity-70" />
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Bottom Card Footer with Actions */}
                <div className="pt-3 border-t border-inherit flex items-center justify-between gap-2 text-xs">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onInspectNode(currentCard.nodeId);
                      }}
                      className={clsx(
                        'inline-flex items-center gap-1 px-2.5 py-1 rounded-lg border text-xs font-semibold transition-colors',
                        isDark ? 'bg-slate-800 hover:bg-slate-700 text-slate-200' : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                      )}
                    >
                      <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
                      <span>Full Dossier</span>
                    </button>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSwitchToGraph(currentCard.nodeId);
                      }}
                      className={clsx(
                        'inline-flex items-center gap-1 px-2.5 py-1 rounded-lg border text-xs font-semibold transition-colors',
                        isDark ? 'bg-slate-800 hover:bg-slate-700 text-indigo-300' : 'bg-slate-100 hover:bg-slate-200 text-indigo-700'
                      )}
                    >
                      <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                      <span>View in Graph</span>
                    </button>
                  </div>

                  <div className={clsx('text-[11px] font-medium', isDark ? 'text-slate-400' : 'text-slate-500')}>
                    {isFlipped ? 'Press [1] Review • [2] Mastered' : 'Click to flip'}
                  </div>
                </div>
              </div>
            </div>

            {/* Answer Assessment Buttons (Got It vs. Study Again) */}
            <div className="flex items-center justify-between w-full max-w-xl gap-3">
              {/* Prev Button */}
              <button
                type="button"
                onClick={handlePrev}
                className={clsx(
                  'p-3 rounded-xl border flex items-center justify-center transition-all',
                  isDark ? 'bg-slate-900 border-slate-800 hover:bg-slate-800 text-slate-200' : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-800'
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
                  'flex-1 py-3 px-4 rounded-xl border font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-sm',
                  isDark
                    ? 'bg-amber-950/40 border-amber-600/50 text-amber-300 hover:bg-amber-900/60'
                    : 'bg-amber-50 border-amber-300 text-amber-800 hover:bg-amber-100'
                )}
              >
                <RefreshCw className="w-4 h-4" />
                <span>Study Again</span>
                <span className="text-[10px] opacity-60 hidden sm:inline">(Key 1)</span>
              </button>

              {/* Flip Button */}
              <button
                type="button"
                onClick={handleFlip}
                className={clsx(
                  'py-3 px-5 rounded-xl border font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-all shadow-sm',
                  isDark
                    ? 'bg-slate-800 border-slate-700 text-slate-100 hover:bg-slate-700'
                    : 'bg-white border-slate-300 text-slate-800 hover:bg-slate-50'
                )}
              >
                <RotateCcw className="w-4 h-4 text-indigo-400" />
                <span className="hidden sm:inline">{isFlipped ? 'Show Question' : 'Flip Card'}</span>
                <span className="sm:hidden">Flip</span>
              </button>

              {/* Got It / Mastered Button */}
              <button
                type="button"
                onClick={handleMarkMastered}
                className={clsx(
                  'flex-1 py-3 px-4 rounded-xl border font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-sm',
                  isDark
                    ? 'bg-emerald-950/50 border-emerald-600/50 text-emerald-300 hover:bg-emerald-900/60'
                    : 'bg-emerald-50 border-emerald-300 text-emerald-800 hover:bg-emerald-100'
                )}
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Mastered!</span>
                <span className="text-[10px] opacity-60 hidden sm:inline">(Key 2)</span>
              </button>

              {/* Next Button */}
              <button
                type="button"
                onClick={handleNext}
                className={clsx(
                  'p-3 rounded-xl border flex items-center justify-center transition-all',
                  isDark ? 'bg-slate-900 border-slate-800 hover:bg-slate-800 text-slate-200' : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-800'
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
