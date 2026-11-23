import { FormEvent, KeyboardEvent, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import clsx from 'clsx';
import {
  ArrowLeft,
  ArrowLeftRight,
  ArrowRight,
  ArrowUpRight,
  Compass,
  Cpu,
  ExternalLink,
  Lightbulb,
  Loader2,
  Plus,
  Send,
  Trophy,
  X,
} from 'lucide-react';
import { DebateGraphDataset, DebateNode, DebateTopicId } from '../types/debate';
import {
  ArgumentTurnReview,
  DebateOpponentPersona,
  DebateSessionRecord,
  DebateUserStance,
  LiveVisualFeedback,
  StructuredDebateResponse,
  VoiceDebateSettings,
  VoiceDebateTurn,
} from '../types/voiceDebate';
import {
  loadVoiceSettings,
  saveVoiceSettings,
} from '../services/voiceDebate/settingsStorage';
import {
  generateOfflineDebateReply,
  generateOfflineOpening,
} from '../services/voiceDebate/offlineDebateEngine';
import {
  generateGeminiFlashReply,
  generateLocalOpenAIReply,
} from '../services/voiceDebate/llmDebateEngine';
import type { WebLlmLoadProgress } from '../services/voiceDebate/webllmEngine';
import { getScopedDebateNodes } from '../services/voiceDebate/debateContextBuilder';
import {
  buildArgumentTurnReview,
  buildSessionRecord,
  getLandingRating,
  verdictDisplay,
} from '../services/voiceDebate/performanceAnalyzer';
import {
  deletePerformanceLog,
  loadPerformanceLogs,
  updateTurnAiRewriteInLog,
  upsertPerformanceLog,
} from '../services/voiceDebate/sessionLogStorage';
import { LiveDebateHud } from './voice/LiveDebateHud';
import { VoiceSettingsModal } from './voice/VoiceSettingsModal';
import { DebateScorecardModal, MomentumSparkline } from './voice/DebateScorecardModal';
import { PerformanceLogSheet } from './voice/PerformanceLogSheet';
import { DebateRoundLength, SparLobby } from './voice/SparLobby';
import { TopicPickerModal } from './TopicPickerModal';

interface VoiceDebateViewProps {
  dataset: DebateGraphDataset;
  nodes: DebateNode[];
  isLoadingTopic?: boolean;
  onSwitchTopic: (topicId: DebateTopicId) => void;
  activePillarId: string | null;
  onSelectPillar: (pillarId: string | null) => void;
  onInspectNode: (nodeId: string) => void;
  onSwitchToGraph: (nodeId?: string) => void;
  onActiveRoundChange?: (inActiveRound: boolean) => void;
  isDark: boolean;
}

function createInitialFeedback(dataset: DebateGraphDataset): LiveVisualFeedback {
  return {
    argumentStrength: 60,
    persuasionBalance: 0,
    roundPhase: 'opening',
    latestBadges: [],
    coachingTip: `Open with your strongest thesis on ${dataset.shortTitle} and back it with one concrete mechanism or example.`,
    suggestedNodeId: null,
    engagedByUserIds: [],
    engagedByAiIds: [],
    lastTurnDelta: 0,
  };
}

function getPhaseCue(
  nextTurnNumber: number,
  targetTurns: number | null,
  stance: DebateUserStance
): { phaseLabel: string; cue: string } {
  if (nextTurnNumber === 1) {
    return {
      phaseLabel: 'Opening',
      cue:
        stance === 'con'
          ? 'Open with your sharpest critique and one concrete mechanism or example.'
          : 'Open with your core thesis and one concrete mechanism or real-world example.',
    };
  }
  if (targetTurns !== null && nextTurnNumber >= targetTurns) {
    return {
      phaseLabel: 'Closing',
      cue: 'Final move: weigh why your impact outweighs the opponent’s counter-case.',
    };
  }
  if (nextTurnNumber === 2) {
    return {
      phaseLabel: 'Rebuttal',
      cue: 'Address Steelman’s counter first, then press your strongest supporting evidence.',
    };
  }
  return {
    phaseLabel: 'Cross-Exam',
    cue: 'Steelman one slice of their claim before exposing the deeper trade-off.',
  };
}

export function VoiceDebateView({
  dataset,
  nodes,
  isLoadingTopic = false,
  onSwitchTopic,
  activePillarId,
  onInspectNode,
  onSwitchToGraph,
  onActiveRoundChange,
  isDark,
}: VoiceDebateViewProps) {
  const [stage, setStage] = useState<'lobby' | 'active'>('lobby');
  const [settings, setSettings] = useState<VoiceDebateSettings>(() => loadVoiceSettings());
  const [stance, setStance] = useState<DebateUserStance>('pro');
  const [persona, setPersona] = useState<DebateOpponentPersona>('sparring');
  const [roundLength, setRoundLength] = useState<DebateRoundLength>(3);
  const [targetTurns, setTargetTurns] = useState<number | null>(3);

  const [turns, setTurns] = useState<VoiceDebateTurn[]>([]);
  const [feedback, setFeedback] = useState<LiveVisualFeedback>(() =>
    createInitialFeedback(dataset)
  );

  // Per-round Game Tape & persisted Performance Logs
  const [sessionId, setSessionId] = useState<string>(() => `round-${Date.now()}`);
  const [sessionStartedAt, setSessionStartedAt] = useState<string>(() => new Date().toISOString());
  const [turnReviews, setTurnReviews] = useState<ArgumentTurnReview[]>([]);
  const [savedLogs, setSavedLogs] = useState<DebateSessionRecord[]>(() => loadPerformanceLogs());

  const [isThinking, setIsThinking] = useState(false);
  const [modelLoadStatus, setModelLoadStatus] = useState<WebLlmLoadProgress | null>(null);
  const [streamingReply, setStreamingReply] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [draftText, setDraftText] = useState('');
  const [showAngleHint, setShowAngleHint] = useState(false);

  // Modals & bottom sheets
  const [showHudSheet, setShowHudSheet] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showTopicPicker, setShowTopicPicker] = useState(false);
  const [showPerformanceLog, setShowPerformanceLog] = useState(false);
  const [reviewingSession, setReviewingSession] = useState<{
    session: DebateSessionRecord;
    isHistorical: boolean;
  } | null>(null);

  const turnsRef = useRef(turns);
  turnsRef.current = turns;
  const feedbackRef = useRef(feedback);
  feedbackRef.current = feedback;
  const turnReviewsRef = useRef(turnReviews);
  turnReviewsRef.current = turnReviews;
  const sessionIdRef = useRef(sessionId);
  sessionIdRef.current = sessionId;
  const sessionStartedAtRef = useRef(sessionStartedAt);
  sessionStartedAtRef.current = sessionStartedAt;
  const settingsRef = useRef(settings);
  settingsRef.current = settings;
  const mountedRef = useRef(true);
  const feedEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const nodeMap = useMemo(() => new Map(nodes.map((n) => [n.id, n])), [nodes]);

  const userTurnCount = useMemo(
    () => turns.filter((t) => t.speaker === 'user').length,
    [turns]
  );

  const totalEngagedCount = useMemo(
    () => new Set([...feedback.engagedByUserIds, ...feedback.engagedByAiIds]).size,
    [feedback.engagedByUserIds, feedback.engagedByAiIds]
  );

  const userSharePct = Math.max(
    12,
    Math.min(88, Math.round(50 + feedback.persuasionBalance * 0.42))
  );

  const isRoundComplete =
    stage === 'active' &&
    targetTurns !== null &&
    userTurnCount >= targetTurns &&
    !isThinking;

  const currentLiveSessionRecord = useMemo<DebateSessionRecord | null>(() => {
    if (turnReviews.length === 0) return null;
    const activePillar = activePillarId ? nodeMap.get(activePillarId) : undefined;
    return buildSessionRecord({
      sessionId,
      startedAt: sessionStartedAt,
      dataset,
      pillarTitle: activePillar?.title,
      stance,
      persona,
      backend: settings.backend,
      finalBalance: feedback.persuasionBalance,
      nodesEngagedCount: totalEngagedCount,
      turnReviews,
    });
  }, [
    turnReviews,
    activePillarId,
    nodeMap,
    sessionId,
    sessionStartedAt,
    dataset,
    stance,
    persona,
    settings.backend,
    feedback.persuasionBalance,
    totalEngagedCount,
  ]);

  // Best single unused curated angle for the 1-tap "Angle" helper
  const suggestedAngleNode = useMemo<DebateNode | null>(() => {
    const usedIds = new Set([...feedback.engagedByUserIds, ...feedback.engagedByAiIds]);
    if (feedback.suggestedNodeId && nodeMap.has(feedback.suggestedNodeId)) {
      const candidate = nodeMap.get(feedback.suggestedNodeId)!;
      if (!usedIds.has(candidate.id) || userTurnCount === 0) return candidate;
    }
    const scoped = getScopedDebateNodes(nodes, activePillarId);
    const preferredKind = stance === 'con' ? 'con' : 'pro';
    return (
      scoped.find((n) => n.kind === preferredKind && !usedIds.has(n.id)) ??
      scoped.find((n) => (n.kind === 'pro' || n.kind === 'con') && !usedIds.has(n.id)) ??
      scoped.find((n) => n.kind === 'thesis') ??
      null
    );
  }, [
    feedback.engagedByUserIds,
    feedback.engagedByAiIds,
    feedback.suggestedNodeId,
    nodeMap,
    nodes,
    activePillarId,
    stance,
    userTurnCount,
  ]);

  // Notify parent App shell when entering/leaving active round so mobile hides redundant top bar
  useEffect(() => {
    onActiveRoundChange?.(stage === 'active');
    return () => {
      onActiveRoundChange?.(false);
    };
  }, [stage, onActiveRoundChange]);

  const startFreshRound = useCallback(
    (override?: { stance?: DebateUserStance; roundLength?: DebateRoundLength }) => {
      const nextStance = override?.stance ?? stance;
      const nextLength = override?.roundLength ?? roundLength;
      const opening = generateOfflineOpening({
        dataset,
        nodes,
        pillarId: activePillarId,
        stance: nextStance,
        persona,
      });

      const nextSessionId = `round-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
      setSessionId(nextSessionId);
      setSessionStartedAt(new Date().toISOString());
      setTurnReviews([]);
      setTargetTurns(nextLength === 'open' ? null : nextLength);

      setTurns([
        {
          id: `ai-open-${Date.now()}`,
          speaker: 'ai',
          text: opening.spokenReply,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          stanceTag: opening.stanceTag,
          engagedNodeIds: opening.engagedNodeIds,
          rhetoricBadges: opening.rhetoricBadges,
          coachingTip: opening.coachingTip,
          suggestedFollowUpNodeId: opening.suggestedFollowUpNodeId ?? undefined,
          citedSource: opening.citedSource ?? undefined,
        },
      ]);
      setFeedback({
        ...createInitialFeedback(dataset),
        coachingTip: opening.coachingTip,
        suggestedNodeId: opening.suggestedFollowUpNodeId ?? null,
        engagedByAiIds: opening.engagedNodeIds,
      });
      setIsThinking(false);
      setModelLoadStatus(null);
      setStreamingReply('');
      setErrorMessage(null);
      setDraftText('');
      setShowAngleHint(false);
      setStage('active');
    },
    [dataset, nodes, activePillarId, stance, persona, roundLength]
  );

  // If user switches topics from the desktop TopBar while in an active round, smoothly return to Lobby for the new motion
  const prevDatasetIdRef = useRef(dataset.id);
  useEffect(() => {
    if (prevDatasetIdRef.current !== dataset.id) {
      prevDatasetIdRef.current = dataset.id;
      setStage('lobby');
      setTurns([]);
      setTurnReviews([]);
      setFeedback(createInitialFeedback(dataset));
      setErrorMessage(null);
      setShowAngleHint(false);
    }
  }, [dataset]);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    if (stage === 'active') {
      feedEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [stage, turns.length, isThinking, streamingReply, isRoundComplete]);

  const applyStructuredTurnResponse = useCallback(
    (response: StructuredDebateResponse, userText: string, priorAiText?: string) => {
      const nowTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const aiTurn: VoiceDebateTurn = {
        id: `ai-${Date.now()}`,
        speaker: 'ai',
        text: response.spokenReply,
        timestamp: nowTime,
        stanceTag: response.stanceTag,
        engagedNodeIds: response.engagedNodeIds,
        argumentStrength: response.argumentStrength,
        persuasionShift: response.persuasionShift,
        rhetoricBadges: response.rhetoricBadges,
        coachingTip: response.coachingTip,
        suggestedFollowUpNodeId: response.suggestedFollowUpNodeId ?? undefined,
        citedSource: response.citedSource ?? undefined,
      };

      setTurns((prev) => {
        const updated = [...prev];
        for (let i = updated.length - 1; i >= 0; i--) {
          if (updated[i].speaker === 'user') {
            updated[i] = {
              ...updated[i],
              engagedNodeIds: response.userEngagedNodeIds ?? updated[i].engagedNodeIds,
            };
            break;
          }
        }
        return [...updated, aiTurn];
      });

      const prevFeedback = feedbackRef.current;
      const nextBalance = Math.max(
        -100,
        Math.min(100, prevFeedback.persuasionBalance + response.persuasionShift)
      );
      const nextUserIds = Array.from(
        new Set([...prevFeedback.engagedByUserIds, ...(response.userEngagedNodeIds ?? [])])
      );
      const nextAiIds = Array.from(
        new Set([...prevFeedback.engagedByAiIds, ...response.engagedNodeIds])
      );

      setFeedback({
        argumentStrength: response.argumentStrength,
        persuasionBalance: nextBalance,
        roundPhase: response.roundPhase,
        latestBadges:
          response.rhetoricBadges.length > 0 ? response.rhetoricBadges : prevFeedback.latestBadges,
        coachingTip: response.coachingTip || prevFeedback.coachingTip,
        suggestedNodeId: response.suggestedFollowUpNodeId ?? prevFeedback.suggestedNodeId,
        engagedByUserIds: nextUserIds,
        engagedByAiIds: nextAiIds,
        lastTurnDelta: response.persuasionShift,
      });

      const nextTurnIndex = turnReviewsRef.current.length + 1;
      const review = buildArgumentTurnReview({
        turnIndex: nextTurnIndex,
        userText,
        priorAiText,
        response,
        cumulativeBalance: nextBalance,
        nodes,
        timestamp: nowTime,
      });

      const nextReviews = [...turnReviewsRef.current, review];
      setTurnReviews(nextReviews);

      const activePillar = activePillarId ? nodes.find((n) => n.id === activePillarId) : undefined;
      const engagedTotal = new Set([...nextUserIds, ...nextAiIds]).size;
      const record = buildSessionRecord({
        sessionId: sessionIdRef.current,
        startedAt: sessionStartedAtRef.current,
        dataset,
        pillarTitle: activePillar?.title,
        stance,
        persona,
        backend: settingsRef.current.backend,
        finalBalance: nextBalance,
        nodesEngagedCount: engagedTotal,
        turnReviews: nextReviews,
      });
      setSavedLogs(upsertPerformanceLog(record));
    },
    [nodes, activePillarId, dataset, stance, persona]
  );

  const submitUserArgument = useCallback(
    async (rawText: string) => {
      const clean = rawText.trim();
      if (!clean || isThinking) return;
      setErrorMessage(null);
      setShowAngleHint(false);

      const historySnapshot = turnsRef.current;
      const priorAiTurn = [...historySnapshot].reverse().find((t) => t.speaker === 'ai');

      const userTurn: VoiceDebateTurn = {
        id: `user-${Date.now()}`,
        speaker: 'user',
        text: clean,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setTurns((prev) => [...prev, userTurn]);
      setIsThinking(true);

      try {
        let response: StructuredDebateResponse;
        const activeSettings = settingsRef.current;
        const usedIds = new Set<string>([
          ...feedbackRef.current.engagedByAiIds,
          ...feedbackRef.current.engagedByUserIds,
        ]);
        const nextUserCount = historySnapshot.filter((t) => t.speaker === 'user').length + 1;

        if (activeSettings.backend === 'browser-webllm') {
          const { generateWebLlmDebateReply } = await import(
            '../services/voiceDebate/webllmEngine'
          );
          response = await generateWebLlmDebateReply({
            modelId: activeSettings.webllmModel,
            dataset,
            nodes,
            pillarId: activePillarId,
            stance,
            persona,
            history: historySnapshot,
            userText: clean,
            usedNodeIds: usedIds,
            userTurnCount: nextUserCount,
            onProgress: (status) => {
              if (!mountedRef.current) return;
              setModelLoadStatus(status.progress >= 1 ? null : status);
            },
            onToken: (partial) => {
              if (!mountedRef.current) return;
              setModelLoadStatus(null);
              setStreamingReply(partial);
            },
          });
        } else if (activeSettings.backend === 'gemini-flash') {
          if (!activeSettings.geminiApiKey.trim()) {
            throw new Error(
              'Add your free Gemini API key in AI Settings, or switch to On-Device AI.'
            );
          }
          response = await generateGeminiFlashReply({
            settings: activeSettings,
            dataset,
            nodes,
            pillarId: activePillarId,
            stance,
            persona,
            history: historySnapshot,
            userText: clean,
          });
        } else if (activeSettings.backend === 'local-openai') {
          response = await generateLocalOpenAIReply({
            settings: activeSettings,
            dataset,
            nodes,
            pillarId: activePillarId,
            stance,
            persona,
            history: historySnapshot,
            userText: clean,
          });
        } else {
          await new Promise((r) => setTimeout(r, 220));
          response = generateOfflineDebateReply({
            dataset,
            nodes,
            pillarId: activePillarId,
            stance,
            persona,
            userText: clean,
            usedNodeIds: usedIds,
            userTurnCount: nextUserCount,
          });
        }

        if (!mountedRef.current) return;
        setStreamingReply('');
        setModelLoadStatus(null);
        applyStructuredTurnResponse(response, clean, priorAiTurn?.text);
      } catch (err) {
        if (!mountedRef.current) return;
        const msg = err instanceof Error ? err.message : String(err);
        setErrorMessage(msg);
      } finally {
        if (mountedRef.current) {
          setIsThinking(false);
          setModelLoadStatus(null);
          setStreamingReply('');
        }
      }
    },
    [isThinking, dataset, nodes, activePillarId, stance, persona, applyStructuredTurnResponse]
  );

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!draftText.trim() || isThinking) return;
    const msg = draftText.trim();
    setDraftText('');
    void submitUserArgument(msg);
  };

  const handleTextareaKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey && window.innerWidth >= 768) {
      e.preventDefault();
      if (draftText.trim() && !isThinking) {
        const msg = draftText.trim();
        setDraftText('');
        void submitUserArgument(msg);
      }
    }
  };

  const handleSaveSettings = (updated: VoiceDebateSettings) => {
    setSettings(updated);
    saveVoiceSettings(updated);
    setErrorMessage(null);
  };

  const handleRematchSwitchSides = () => {
    const flipped: DebateUserStance =
      stance === 'pro' ? 'con' : stance === 'con' ? 'pro' : 'switch';
    setStance(flipped);
    startFreshRound({ stance: flipped });
  };

  const handleSaveAiRewrite = (targetSessionId: string, turnIndex: number, rewrite: string) => {
    const updatedLogs = updateTurnAiRewriteInLog(targetSessionId, turnIndex, rewrite);
    setSavedLogs(updatedLogs);

    if (targetSessionId === sessionId) {
      setTurnReviews((prev) =>
        prev.map((rev) => (rev.turnIndex === turnIndex ? { ...rev, aiRewrite: rewrite } : rev))
      );
    }

    setReviewingSession((prev) => {
      if (!prev || prev.session.id !== targetSessionId) return prev;
      return {
        ...prev,
        session: {
          ...prev.session,
          turnReviews: prev.session.turnReviews.map((rev) =>
            rev.turnIndex === turnIndex ? { ...rev, aiRewrite: rewrite } : rev
          ),
        },
      };
    });
  };

  const handleDeleteLog = (targetSessionId: string) => {
    setSavedLogs(deletePerformanceLog(targetSessionId));
  };

  const nextTurnNumber = userTurnCount + 1;
  const phaseGuidance = getPhaseCue(nextTurnNumber, targetTurns, stance);
  const completedVerdict = currentLiveSessionRecord
    ? verdictDisplay(currentLiveSessionRecord.verdict)
    : null;

  return (
    <div
      className={clsx(
        'flex-1 flex flex-col min-h-0 overflow-hidden relative',
        isDark ? 'bg-[#0B0E14] text-stone-100' : 'bg-[#FAF8F4] text-stone-900'
      )}
    >
      {/* STAGE 1: GUIDED "TAKE THE FLOOR" LOBBY */}
      {stage === 'lobby' ? (
        <SparLobby
          dataset={dataset}
          nodes={nodes}
          isLoadingTopic={isLoadingTopic}
          onSwitchTopic={onSwitchTopic}
          onOpenTopicPicker={() => setShowTopicPicker(true)}
          stance={stance}
          onChangeStance={setStance}
          persona={persona}
          onChangePersona={setPersona}
          roundLength={roundLength}
          onChangeRoundLength={setRoundLength}
          settings={settings}
          onOpenSettings={() => setShowSettings(true)}
          savedLogs={savedLogs}
          onOpenPerformanceLog={() => setShowPerformanceLog(true)}
          onStartRound={() => startFreshRound()}
          isDark={isDark}
        />
      ) : (
        /* STAGE 2 & 3: DISTRACTION-FREE ACTIVE ARENA + AUTOMATIC GAME TAPE PAYOFF */
        <>
          {/* SINGLE SLIM MATCH BAR (48px) + 3px Hairline Momentum Edge */}
          <div
            className={clsx(
              'shrink-0 border-b relative',
              isDark ? 'bg-[#0E1219]/95 border-[#222938]' : 'bg-white/95 border-[#E7E2D8]'
            )}
          >
            <div className="px-3 sm:px-5 h-12 flex items-center justify-between gap-2">
              <button
                type="button"
                onClick={() => setStage('lobby')}
                className={clsx(
                  'inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-semibold transition-colors shrink-0',
                  isDark
                    ? 'text-stone-300 hover:bg-[#171C28]'
                    : 'text-stone-700 hover:bg-[#F3EFE6]'
                )}
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Lobby</span>
              </button>

              <div className="min-w-0 text-center flex-1">
                <div className="font-editorial text-[14.5px] font-semibold truncate leading-tight">
                  {dataset.shortTitle}
                </div>
                <div className="flex items-center justify-center gap-1.5 text-[10px] font-mono text-stone-400 leading-none mt-0.5">
                  <span
                    className={clsx(
                      'font-bold uppercase',
                      stance === 'pro'
                        ? 'text-emerald-400'
                        : stance === 'con'
                          ? 'text-rose-400'
                          : 'text-amber-400'
                    )}
                  >
                    {stance}
                  </span>
                  <span>·</span>
                  <span>
                    {isRoundComplete
                      ? 'Round Complete'
                      : targetTurns !== null
                        ? `Turn ${Math.min(nextTurnNumber, targetTurns)}/${targetTurns} · ${phaseGuidance.phaseLabel}`
                        : `Turn ${nextTurnNumber} · ${phaseGuidance.phaseLabel}`}
                  </span>
                  {userTurnCount > 0 && (
                    <>
                      <span>·</span>
                      <span
                        className={clsx(
                          'font-bold',
                          userSharePct >= 52
                            ? 'text-emerald-400'
                            : userSharePct <= 48
                              ? 'text-rose-400'
                              : 'text-amber-400'
                        )}
                      >
                        You {userSharePct}%
                      </span>
                    </>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-1 shrink-0">
                <button
                  type="button"
                  onClick={() => setShowHudSheet(true)}
                  aria-label="Open argument map"
                  className={clsx(
                    'lg:hidden p-2 rounded-xl border transition-colors relative',
                    isDark
                      ? 'bg-[#151A24] border-[#262E3E] text-stone-300'
                      : 'bg-[#F5F1E8] border-[#E5DEC9] text-stone-700'
                  )}
                >
                  <Compass className="w-3.5 h-3.5" />
                  {totalEngagedCount > 0 && (
                    <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-amber-500 text-stone-950 font-mono text-[9px] font-bold flex items-center justify-center">
                      {totalEngagedCount}
                    </span>
                  )}
                </button>

                {currentLiveSessionRecord ? (
                  <button
                    type="button"
                    onClick={() =>
                      setReviewingSession({
                        session: currentLiveSessionRecord,
                        isHistorical: false,
                      })
                    }
                    className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-400 text-stone-950 transition-colors"
                  >
                    <Trophy className="w-3.5 h-3.5" />
                    <span>{isRoundComplete ? 'Tape' : 'End'}</span>
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => setShowSettings(true)}
                    aria-label="AI settings"
                    className={clsx(
                      'p-2 rounded-xl border transition-colors',
                      isDark
                        ? 'bg-[#151A24] border-[#262E3E] text-amber-400'
                        : 'bg-[#F5F1E8] border-[#E5DEC9] text-amber-800'
                    )}
                  >
                    <Cpu className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

            {/* Ultra-clean 3px momentum hairline (appears once Turn 1 is scored) */}
            {userTurnCount > 0 && (
              <div className="h-[3px] w-full flex overflow-hidden">
                <div
                  style={{ width: `${userSharePct}%` }}
                  className="h-full bg-emerald-500 transition-all duration-500"
                />
                <div
                  style={{ width: `${100 - userSharePct}%` }}
                  className="h-full bg-rose-500/80 transition-all duration-500"
                />
              </div>
            )}
          </div>

          {/* Main Active Arena Layout */}
          <div className="flex-1 min-h-0 overflow-hidden grid grid-cols-1 lg:grid-cols-12">
            {/* CONVERSATIONAL DEBATE COLUMN */}
            <div
              className={clsx(
                'lg:col-span-7 flex flex-col min-h-0 lg:border-r',
                isDark ? 'lg:border-[#222938]' : 'lg:border-[#E7E2D8]'
              )}
            >
              {/* Scrollable Debate Feed */}
              <div className="flex-1 min-h-0 overflow-y-auto px-3.5 sm:px-5 py-4 space-y-4">
                {turns.map((turn) => {
                  const isUser = turn.speaker === 'user';
                  const landing =
                    !isUser && typeof turn.argumentStrength === 'number'
                      ? getLandingRating(turn.argumentStrength)
                      : null;

                  return (
                    <div
                      key={turn.id}
                      className={clsx('flex flex-col gap-1', isUser ? 'items-end' : 'items-start')}
                    >
                      <div className="flex items-center gap-1.5 text-[10.5px] font-medium text-stone-400 px-1 flex-wrap">
                        <span>{isUser ? 'You' : 'Steelman'}</span>
                        <span>·</span>
                        <span className="font-mono">{turn.timestamp}</span>
                        {landing && typeof turn.argumentStrength === 'number' && (
                          <span
                            className={clsx(
                              'px-1.5 py-0.5 rounded-full text-[10px] font-bold font-mono',
                              landing.rating === 'knockout'
                                ? 'bg-emerald-500/15 text-emerald-400'
                                : landing.rating === 'solid'
                                  ? 'bg-amber-400/15 text-amber-400'
                                  : landing.rating === 'vulnerable'
                                    ? 'bg-rose-500/15 text-rose-400'
                                    : 'bg-stone-500/15 text-stone-300'
                            )}
                          >
                            {landing.label} · {turn.argumentStrength}
                          </span>
                        )}
                      </div>

                      <div
                        className={clsx(
                          'max-w-[92%] sm:max-w-[85%] rounded-2xl px-4 py-3 text-[14.5px] leading-relaxed border',
                          isUser
                            ? isDark
                              ? 'bg-[#1C2333] border-amber-400/35 text-stone-50 rounded-br-sm'
                              : 'bg-[#1D222D] border-[#1D222D] text-stone-50 rounded-br-sm'
                            : isDark
                              ? 'bg-[#12161F] border-[#232A39] text-stone-100 rounded-bl-sm'
                              : 'bg-white border-[#E5DEC9] text-stone-800 rounded-bl-sm shadow-xs'
                        )}
                      >
                        <p>{turn.text}</p>

                        {/* Engaged Curated Argument Nodes */}
                        {turn.engagedNodeIds && turn.engagedNodeIds.length > 0 && (
                          <div
                            className={clsx(
                              'mt-2.5 pt-2 border-t flex flex-wrap gap-1.5',
                              isUser
                                ? 'border-white/10'
                                : isDark
                                  ? 'border-[#232A39]'
                                  : 'border-[#EFE9DD]'
                            )}
                          >
                            {turn.engagedNodeIds.map((nid) => {
                              const node = nodeMap.get(nid);
                              if (!node) return null;
                              return (
                                <button
                                  key={nid}
                                  type="button"
                                  onClick={() => onInspectNode(nid)}
                                  className={clsx(
                                    'inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-semibold border transition-colors',
                                    isUser
                                      ? 'bg-white/10 border-white/20 text-stone-100 hover:bg-white/20'
                                      : isDark
                                        ? 'bg-[#0B0E14] border-[#2A3244] text-amber-300 hover:border-amber-400/60'
                                        : 'bg-[#FAF8F4] border-[#E5DEC9] text-amber-900 hover:border-amber-500'
                                  )}
                                >
                                  <span
                                    className={clsx(
                                      'w-1.5 h-1.5 rounded-full shrink-0',
                                      node.kind === 'pro'
                                        ? 'bg-emerald-400'
                                        : node.kind === 'con'
                                          ? 'bg-rose-400'
                                          : 'bg-amber-400'
                                    )}
                                  />
                                  <span className="truncate max-w-[200px]">{node.title}</span>
                                  <ArrowUpRight className="w-2.5 h-2.5 shrink-0" />
                                </button>
                              );
                            })}
                          </div>
                        )}

                        {turn.citedSource && (
                          <a
                            href={turn.citedSource.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={clsx(
                              'mt-2 inline-flex items-center gap-1 text-[11.5px] font-medium hover:underline',
                              isDark ? 'text-amber-400/90' : 'text-amber-800'
                            )}
                          >
                            <ExternalLink className="w-3 h-3 shrink-0" />
                            <span className="truncate max-w-[250px]">{turn.citedSource.title}</span>
                          </a>
                        )}
                      </div>
                    </div>
                  );
                })}

                {/* Model Download / Live Streaming / Thinking indicator */}
                {isThinking && modelLoadStatus ? (
                  <div className="flex items-start">
                    <div
                      className={clsx(
                        'w-full max-w-[92%] sm:max-w-[80%] px-3.5 py-3 rounded-2xl rounded-bl-sm border space-y-2',
                        isDark
                          ? 'bg-[#12161F] border-amber-400/40 text-stone-200'
                          : 'bg-white border-amber-300 text-stone-800 shadow-xs'
                      )}
                    >
                      <div className="flex items-center justify-between gap-2 text-xs font-semibold">
                        <span className="inline-flex items-center gap-1.5 text-amber-400 truncate">
                          <Cpu className="w-3.5 h-3.5 animate-pulse shrink-0" />
                          <span className="truncate">{modelLoadStatus.text}</span>
                        </span>
                        <span className="font-mono text-[11px] shrink-0">
                          {Math.round(modelLoadStatus.progress * 100)}%
                        </span>
                      </div>
                      <div className="h-1.5 w-full rounded-full bg-stone-800 overflow-hidden">
                        <div
                          style={{
                            width: `${Math.max(5, Math.round(modelLoadStatus.progress * 100))}%`,
                          }}
                          className="h-full bg-gradient-to-r from-amber-500 to-amber-300 transition-all duration-300"
                        />
                      </div>
                      <p className="text-[10.5px] text-stone-400">
                        One-time download cached locally on your device for future offline sparring.
                      </p>
                    </div>
                  </div>
                ) : isThinking && streamingReply ? (
                  <div className="flex flex-col gap-1 items-start">
                    <div className="flex items-center gap-1.5 text-[10.5px] font-medium text-amber-400 px-1">
                      <Cpu className="w-3 h-3 animate-pulse" />
                      <span>Steelman · Generating on device...</span>
                    </div>
                    <div
                      className={clsx(
                        'max-w-[92%] sm:max-w-[85%] rounded-2xl rounded-bl-sm px-4 py-3 text-[14.5px] leading-relaxed border',
                        isDark
                          ? 'bg-[#12161F] border-amber-400/35 text-stone-100'
                          : 'bg-white border-amber-300 text-stone-800 shadow-xs'
                      )}
                    >
                      <p>
                        {streamingReply}
                        <span className="inline-block w-1.5 h-4 ml-0.5 align-middle bg-amber-400 animate-pulse rounded-xs" />
                      </p>
                    </div>
                  </div>
                ) : isThinking ? (
                  <div className="flex items-start">
                    <div
                      className={clsx(
                        'inline-flex items-center gap-2 px-3.5 py-2.5 rounded-2xl rounded-bl-sm border text-xs font-medium',
                        isDark
                          ? 'bg-[#12161F] border-[#232A39] text-stone-300'
                          : 'bg-white border-[#E5DEC9] text-stone-600'
                      )}
                    >
                      <Loader2 className="w-3.5 h-3.5 text-amber-400 animate-spin" />
                      <span>Crafting counter-argument...</span>
                    </div>
                  </div>
                ) : null}

                {/* Error Alert */}
                {errorMessage && (
                  <div className="px-3.5 py-2.5 rounded-2xl border border-rose-500/40 bg-rose-500/10 text-rose-300 text-xs flex items-center justify-between gap-2">
                    <span>{errorMessage}</span>
                    <button
                      type="button"
                      onClick={() => setShowSettings(true)}
                      className="shrink-0 underline font-semibold text-rose-200"
                    >
                      Settings
                    </button>
                  </div>
                )}

                {/* STAGE 3: AUTOMATIC INLINE ROUND COMPLETE & GAME TAPE PAYOFF */}
                {isRoundComplete && currentLiveSessionRecord && completedVerdict && (
                  <div
                    className={clsx(
                      'p-4 rounded-2xl border space-y-3.5 mt-2',
                      isDark
                        ? 'bg-[#12161F] border-amber-400/45 shadow-lg shadow-black/30'
                        : 'bg-white border-amber-400 shadow-sm'
                    )}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-amber-400">
                          Round Complete · Saved to Log
                        </div>
                        <h3
                          className={clsx(
                            'font-editorial text-xl font-semibold mt-0.5',
                            completedVerdict.tone === 'emerald'
                              ? 'text-emerald-400'
                              : completedVerdict.tone === 'rose'
                                ? 'text-rose-400'
                                : 'text-amber-400'
                          )}
                        >
                          {completedVerdict.title}
                        </h3>
                        <p className="text-xs text-stone-400 mt-0.5">
                          Avg Strength{' '}
                          <strong className="font-mono text-stone-200">
                            {currentLiveSessionRecord.avgStrength}/100
                          </strong>{' '}
                          · {currentLiveSessionRecord.turnCount} turns logged
                        </p>
                      </div>
                      <div className="w-24 shrink-0 pt-1">
                        <MomentumSparkline
                          series={currentLiveSessionRecord.momentumSeries}
                          isDark={isDark}
                          height={32}
                        />
                      </div>
                    </div>

                    <div
                      className={clsx(
                        'p-2.5 rounded-xl border text-xs space-y-1',
                        isDark
                          ? 'bg-[#0B0E14] border-[#222938] text-stone-300'
                          : 'bg-[#FAF8F4] border-[#E5DEC9] text-stone-700'
                      )}
                    >
                      <div>
                        <span className="text-emerald-400 font-semibold">Strength:</span>{' '}
                        {currentLiveSessionRecord.topStrength}
                      </div>
                      <div>
                        <span className="text-amber-400 font-semibold">Next focus:</span>{' '}
                        {currentLiveSessionRecord.primaryFocus}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        setReviewingSession({
                          session: currentLiveSessionRecord,
                          isHistorical: false,
                        })
                      }
                      className="w-full py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs shadow-sm transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Trophy className="w-4 h-4" />
                      <span>Review Turn-by-Turn Game Tape</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <div className="grid grid-cols-3 gap-1.5">
                      <button
                        type="button"
                        onClick={() => setTargetTurns((prev) => (prev ?? userTurnCount) + 2)}
                        className={clsx(
                          'py-2 px-2 rounded-xl text-[11px] font-semibold border inline-flex items-center justify-center gap-1',
                          isDark
                            ? 'bg-[#0B0E14] border-[#262E3E] text-stone-300 hover:border-amber-400/40'
                            : 'bg-[#FAF8F4] border-[#E5DEC9] text-stone-700'
                        )}
                      >
                        <Plus className="w-3 h-3" />
                        <span>2 Turns</span>
                      </button>
                      <button
                        type="button"
                        onClick={handleRematchSwitchSides}
                        className={clsx(
                          'py-2 px-2 rounded-xl text-[11px] font-semibold border inline-flex items-center justify-center gap-1',
                          isDark
                            ? 'bg-[#0B0E14] border-[#262E3E] text-stone-300 hover:border-amber-400/40'
                            : 'bg-[#FAF8F4] border-[#E5DEC9] text-stone-700'
                        )}
                      >
                        <ArrowLeftRight className="w-3 h-3" />
                        <span>Switch</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setStage('lobby')}
                        className={clsx(
                          'py-2 px-2 rounded-xl text-[11px] font-semibold border inline-flex items-center justify-center gap-1',
                          isDark
                            ? 'bg-[#0B0E14] border-[#262E3E] text-stone-300 hover:border-amber-400/40'
                            : 'bg-[#FAF8F4] border-[#E5DEC9] text-stone-700'
                        )}
                      >
                        <span>New Topic</span>
                      </button>
                    </div>
                  </div>
                )}

                <div ref={feedEndRef} />
              </div>

              {/* Phase-Aware Guidance Strip + Optional 1-Tap Angle Helper */}
              {!isRoundComplete && (
                <div
                  className={clsx(
                    'border-t shrink-0',
                    isDark ? 'bg-[#0E1219] border-[#222938]' : 'bg-white border-[#E7E2D8]'
                  )}
                >
                  {/* Collapsible Suggested Angle Card */}
                  {showAngleHint && suggestedAngleNode && (
                    <div
                      className={clsx(
                        'mx-3 mt-2.5 p-3 rounded-xl border text-xs space-y-1.5',
                        isDark
                          ? 'bg-amber-400/[0.07] border-amber-400/30 text-stone-200'
                          : 'bg-amber-50/90 border-amber-300 text-stone-800'
                      )}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 inline-flex items-center gap-1">
                          <Lightbulb className="w-3 h-3" />
                          <span>Suggested Angle · {suggestedAngleNode.title}</span>
                        </span>
                        <button
                          type="button"
                          onClick={() => setShowAngleHint(false)}
                          className="text-stone-400 hover:text-stone-200"
                          aria-label="Hide angle suggestion"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <p className="text-[11.5px] leading-snug opacity-90 line-clamp-2">
                        {suggestedAngleNode.summary}
                      </p>
                      <div className="flex items-center gap-2 pt-0.5">
                        <button
                          type="button"
                          onClick={() => {
                            const firstSent = suggestedAngleNode.summary.split('.')[0];
                            setDraftText(
                              `A stronger point here is ${suggestedAngleNode.title.toLowerCase()}: ${firstSent}.`
                            );
                            setShowAngleHint(false);
                            textareaRef.current?.focus();
                          }}
                          className="px-2.5 py-1 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-[11px]"
                        >
                          Use as starter
                        </button>
                        <button
                          type="button"
                          onClick={() => onInspectNode(suggestedAngleNode.id)}
                          className="text-[11px] font-semibold text-amber-400 hover:underline inline-flex items-center gap-0.5"
                        >
                          <span>Read sources</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* 1-Line Phase Coaching Cue + Angle Button */}
                  <div className="px-3.5 pt-2 pb-1 flex items-center justify-between gap-2">
                    <p className="text-[11px] text-stone-400 truncate">
                      <span className="font-semibold text-amber-400/95">
                        {phaseGuidance.phaseLabel}:
                      </span>{' '}
                      {phaseGuidance.cue}
                    </p>
                    {suggestedAngleNode && (
                      <button
                        type="button"
                        onClick={() => setShowAngleHint((v) => !v)}
                        className={clsx(
                          'inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10.5px] font-bold border shrink-0 transition-colors',
                          showAngleHint
                            ? 'bg-amber-500 border-amber-400 text-stone-950'
                            : isDark
                              ? 'bg-[#151A24] border-[#262E3E] text-amber-300 hover:border-amber-400/50'
                              : 'bg-[#FAF8F4] border-[#E5DEC9] text-amber-800 hover:border-amber-500'
                        )}
                      >
                        <Lightbulb className="w-3 h-3" />
                        <span>Angle</span>
                      </button>
                    )}
                  </div>

                  {/* Medium-Sized Multi-Line Dictation & Text Composer */}
                  <form onSubmit={handleFormSubmit} className="px-3 sm:px-4 pb-2.5 pt-1">
                    <div className="flex items-end gap-2">
                      <textarea
                        ref={textareaRef}
                        rows={3}
                        value={draftText}
                        onChange={(e) => setDraftText(e.target.value)}
                        onKeyDown={handleTextareaKeyDown}
                        placeholder="Tap your keyboard mic to dictate, or type your argument..."
                        className={clsx(
                          'flex-1 min-h-[76px] max-h-[150px] resize-none px-3.5 py-2.5 rounded-2xl text-[14px] leading-snug border focus:outline-none focus:ring-2 focus:ring-amber-400/70 transition-colors',
                          isDark
                            ? 'bg-[#0B0E14] border-[#262E3E] text-stone-100 placeholder:text-stone-500'
                            : 'bg-[#FAF8F4] border-[#DCD4C4] text-stone-900 placeholder:text-stone-400'
                        )}
                      />
                      <button
                        type="submit"
                        disabled={!draftText.trim() || isThinking}
                        aria-label="Send argument"
                        className="h-12 w-12 rounded-2xl bg-amber-500 hover:bg-amber-400 active:scale-95 disabled:opacity-35 text-stone-950 flex items-center justify-center shadow-md shadow-amber-500/15 transition-all shrink-0"
                      >
                        {isThinking ? (
                          <Loader2 className="w-5 h-5 animate-spin" />
                        ) : (
                          <Send className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>

            {/* DESKTOP RIGHT COLUMN: Live Visual Feedback HUD */}
            <div className="hidden lg:block lg:col-span-5 overflow-y-auto p-4">
              <LiveDebateHud
                feedback={feedback}
                nodes={nodes}
                activePillarId={activePillarId}
                onInspectNode={onInspectNode}
                onSwitchToGraph={onSwitchToGraph}
                isDark={isDark}
              />
            </div>
          </div>
        </>
      )}

      {/* Mobile Argument Map Slide-Up Sheet */}
      {showHudSheet && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/75 backdrop-blur-xs"
          onClick={() => setShowHudSheet(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={clsx(
              'w-full max-w-lg max-h-[82vh] rounded-t-3xl sm:rounded-2xl border shadow-2xl flex flex-col overflow-hidden',
              isDark
                ? 'bg-[#12161F] border-[#262E3E] text-stone-100'
                : 'bg-[#FAF8F4] border-[#E5DEC9] text-stone-900'
            )}
          >
            <div
              className={clsx(
                'pt-2.5 pb-3 px-4 border-b flex flex-col items-center gap-2 shrink-0',
                isDark ? 'border-[#222938]' : 'border-[#E7E2D8]'
              )}
            >
              <span className="w-10 h-1 rounded-full bg-stone-500/40 sm:hidden" />
              <div className="w-full flex items-center justify-between">
                <h3 className="font-editorial text-base font-semibold">
                  Live Coach &amp; Argument Map
                </h3>
                <button
                  type="button"
                  onClick={() => setShowHudSheet(false)}
                  aria-label="Close panel"
                  className="p-1.5 rounded-full text-stone-400 hover:bg-stone-500/15"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="p-4 overflow-y-auto pb-[max(1rem,env(safe-area-inset-bottom))]">
              <LiveDebateHud
                feedback={feedback}
                nodes={nodes}
                activePillarId={activePillarId}
                onInspectNode={(id) => {
                  setShowHudSheet(false);
                  onInspectNode(id);
                }}
                onSwitchToGraph={(id) => {
                  setShowHudSheet(false);
                  onSwitchToGraph(id);
                }}
                isDark={isDark}
              />
            </div>
          </div>
        </div>
      )}

      {/* 22-Motion Topic Picker (opened from Lobby) */}
      <TopicPickerModal
        isOpen={showTopicPicker}
        onClose={() => setShowTopicPicker(false)}
        activeTopicId={dataset.id}
        onSelectTopic={onSwitchTopic}
        isDark={isDark}
      />

      {/* AI Opponent Settings Modal */}
      <VoiceSettingsModal
        isOpen={showSettings}
        onClose={() => setShowSettings(false)}
        settings={settings}
        onSave={handleSaveSettings}
        isDark={isDark}
      />

      {/* Performance Log Sheet */}
      <PerformanceLogSheet
        isOpen={showPerformanceLog}
        onClose={() => setShowPerformanceLog(false)}
        sessions={savedLogs}
        onSelectSession={(session) => {
          setShowPerformanceLog(false);
          setReviewingSession({ session, isHistorical: true });
        }}
        onDeleteSession={handleDeleteLog}
        isDark={isDark}
      />

      {/* Turn-by-Turn Game Tape & Round Verdict Sheet */}
      <DebateScorecardModal
        isOpen={Boolean(reviewingSession)}
        onClose={() => setReviewingSession(null)}
        session={reviewingSession?.session ?? null}
        nodes={nodes}
        settings={settings}
        isHistoricalView={reviewingSession?.isHistorical ?? false}
        onBackToLog={() => {
          setReviewingSession(null);
          setShowPerformanceLog(true);
        }}
        onSaveAiRewrite={handleSaveAiRewrite}
        onInspectNode={onInspectNode}
        onRematchSwitchSides={handleRematchSwitchSides}
        onNewRound={() => startFreshRound()}
        isDark={isDark}
      />
    </div>
  );
}
