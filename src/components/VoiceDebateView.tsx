import { FormEvent, KeyboardEvent, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import clsx from 'clsx';
import {
  ArrowLeft,
  ArrowUp,
  ArrowUpRight,
  Compass,
  ExternalLink,
  Loader2,
  SlidersHorizontal,
  X,
} from 'lucide-react';
import { DebateGraphDataset, DebateNode, DebateTopicId } from '../types/debate';
import {
  ArgumentTurnReview,
  DebateRoundLength,
  DebateSessionRecord,
  DebateUserStance,
  LiveVisualFeedback,
  SessionDeepAnalysis,
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
  saveSessionDeepAnalysisInLog,
  updateTurnAiRewriteInLog,
  upsertPerformanceLog,
} from '../services/voiceDebate/sessionLogStorage';
import { LiveDebateHud } from './voice/LiveDebateHud';
import { VoiceSettingsModal } from './voice/VoiceSettingsModal';
import { DebateScorecardModal, MomentumSparkline } from './voice/DebateScorecardModal';
import { PerformanceLogSheet } from './voice/PerformanceLogSheet';
import { SparLobby } from './voice/SparLobby';
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
  onToggleTheme?: () => void;
  isDark: boolean;
}

function createInitialFeedback(dataset: DebateGraphDataset): LiveVisualFeedback {
  return {
    argumentStrength: 60,
    persuasionBalance: 0,
    roundPhase: 'opening',
    latestBadges: [],
    coachingTip: `Open with your strongest thesis on ${dataset.shortTitle} and one concrete example.`,
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
          ? 'State your core critique and one concrete example.'
          : 'State your core thesis and one concrete example.',
    };
  }
  if (targetTurns !== null && nextTurnNumber >= targetTurns) {
    return {
      phaseLabel: 'Closing',
      cue: 'Weigh why your key impact outweighs the counter-case.',
    };
  }
  if (nextTurnNumber === 2) {
    return {
      phaseLabel: 'Rebuttal',
      cue: 'Address Steelman’s counter first, then press your evidence.',
    };
  }
  return {
    phaseLabel: 'Cross-Exam',
    cue: 'Acknowledge a nuance before exposing the deeper trade-off.',
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
  onToggleTheme,
  isDark,
}: VoiceDebateViewProps) {
  const [stage, setStage] = useState<'lobby' | 'active'>('lobby');
  const [settings, setSettings] = useState<VoiceDebateSettings>(() => loadVoiceSettings());
  const [stance, setStance] = useState<DebateUserStance>('pro');
  const [targetTurns, setTargetTurns] = useState<number | null>(() =>
    settings.roundLength === 'open' ? null : settings.roundLength
  );

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
      persona: settings.persona,
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
    settings.persona,
    settings.backend,
    feedback.persuasionBalance,
    totalEngagedCount,
  ]);

  const currentLiveSessionWithAnalysis = useMemo<DebateSessionRecord | null>(() => {
    if (!currentLiveSessionRecord) return null;
    const saved = savedLogs.find((s) => s.id === currentLiveSessionRecord.id);
    return saved?.deepAnalysis
      ? { ...currentLiveSessionRecord, deepAnalysis: saved.deepAnalysis }
      : currentLiveSessionRecord;
  }, [currentLiveSessionRecord, savedLogs]);

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

  const startFreshRound = useCallback(
    (override?: { stance?: DebateUserStance; roundLength?: DebateRoundLength }) => {
      const nextStance = override?.stance ?? stance;
      const nextLength = override?.roundLength ?? settingsRef.current.roundLength;
      const opening = generateOfflineOpening({
        dataset,
        nodes,
        pillarId: activePillarId,
        stance: nextStance,
        persona: settingsRef.current.persona,
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
    [dataset, nodes, activePillarId, stance]
  );

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
        persona: settingsRef.current.persona,
        backend: settingsRef.current.backend,
        finalBalance: nextBalance,
        nodesEngagedCount: engagedTotal,
        turnReviews: nextReviews,
      });
      setSavedLogs(upsertPerformanceLog(record));
    },
    [nodes, activePillarId, dataset, stance]
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
            persona: activeSettings.persona,
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
              'Add your Gemini API key in Settings, or switch to On-Device AI.'
            );
          }
          response = await generateGeminiFlashReply({
            settings: activeSettings,
            dataset,
            nodes,
            pillarId: activePillarId,
            stance,
            persona: activeSettings.persona,
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
            persona: activeSettings.persona,
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
            persona: activeSettings.persona,
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
    [isThinking, dataset, nodes, activePillarId, stance, applyStructuredTurnResponse]
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
    if (stage === 'lobby') {
      setTargetTurns(updated.roundLength === 'open' ? null : updated.roundLength);
    }
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

  const handleSaveDeepAnalysis = (targetSessionId: string, analysis: SessionDeepAnalysis) => {
    const updatedLogs = saveSessionDeepAnalysisInLog(targetSessionId, analysis);
    setSavedLogs(updatedLogs);

    setReviewingSession((prev) => {
      if (!prev || prev.session.id !== targetSessionId) return prev;
      return {
        ...prev,
        session: {
          ...prev.session,
          deepAnalysis: analysis,
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
        isDark ? 'bg-[#0C0C0E] text-zinc-100' : 'bg-white text-zinc-950'
      )}
    >
      {stage === 'lobby' ? (
        <SparLobby
          dataset={dataset}
          isLoadingTopic={isLoadingTopic}
          onSwitchTopic={onSwitchTopic}
          onOpenTopicPicker={() => setShowTopicPicker(true)}
          stance={stance}
          onChangeStance={setStance}
          settings={settings}
          onOpenSettings={() => setShowSettings(true)}
          savedLogs={savedLogs}
          onOpenPerformanceLog={() => setShowPerformanceLog(true)}
          onStartRound={() => startFreshRound()}
          isDark={isDark}
        />
      ) : (
        <>
          {/* SINGLE CLEAN MATCH HEADER */}
          <div
            className={clsx(
              'shrink-0 border-b relative',
              isDark ? 'bg-[#0C0C0E] border-white/[0.08]' : 'bg-white border-zinc-100'
            )}
          >
            <div className="px-3 sm:px-5 h-13 flex items-center justify-between gap-2">
              <button
                type="button"
                onClick={() => setStage('lobby')}
                aria-label="Back to lobby"
                className={clsx(
                  'p-2 -ml-1 rounded-lg transition-colors shrink-0',
                  isDark
                    ? 'text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.06]'
                    : 'text-zinc-500 hover:text-zinc-950 hover:bg-zinc-100'
                )}
              >
                <ArrowLeft className="w-4 h-4" />
              </button>

              <div className="min-w-0 text-center flex-1">
                <div className="text-[14px] font-semibold tracking-tight truncate leading-tight">
                  {dataset.shortTitle}
                </div>
                <div className="text-[11px] text-zinc-500 leading-none mt-1 tabular-nums">
                  {isRoundComplete
                    ? 'Round complete'
                    : targetTurns !== null
                      ? `Turn ${Math.min(nextTurnNumber, targetTurns)} of ${targetTurns} · ${stance.toUpperCase()}`
                      : `Turn ${nextTurnNumber} · ${stance.toUpperCase()}`}
                </div>
              </div>

              <div className="flex items-center gap-1 shrink-0">
                <button
                  type="button"
                  onClick={() => setShowHudSheet(true)}
                  aria-label="Argument map"
                  className={clsx(
                    'lg:hidden p-2 rounded-lg transition-colors',
                    isDark
                      ? 'text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.06]'
                      : 'text-zinc-500 hover:text-zinc-950 hover:bg-zinc-100'
                  )}
                >
                  <Compass className="w-4 h-4" />
                </button>

                {currentLiveSessionWithAnalysis ? (
                  <button
                    type="button"
                    onClick={() =>
                      setReviewingSession({
                        session: currentLiveSessionWithAnalysis,
                        isHistorical: false,
                      })
                    }
                    className={clsx(
                      'px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors',
                      isDark
                        ? 'text-zinc-200 hover:bg-white/[0.08]'
                        : 'text-zinc-800 hover:bg-zinc-100'
                    )}
                  >
                    {isRoundComplete ? 'Review' : 'End'}
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => setShowSettings(true)}
                    aria-label="Settings"
                    className={clsx(
                      'p-2 rounded-lg transition-colors',
                      isDark
                        ? 'text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.06]'
                        : 'text-zinc-500 hover:text-zinc-950 hover:bg-zinc-100'
                    )}
                  >
                    <SlidersHorizontal className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Subtle 2px momentum hairline only once Turn 1 is scored */}
            {userTurnCount > 0 && (
              <div className="h-[2px] w-full flex overflow-hidden">
                <div
                  style={{ width: `${userSharePct}%` }}
                  className="h-full bg-emerald-500/80 transition-all duration-500"
                />
                <div
                  style={{ width: `${100 - userSharePct}%` }}
                  className="h-full bg-rose-500/70 transition-all duration-500"
                />
              </div>
            )}
          </div>

          {/* Main Active Debate Layout */}
          <div className="flex-1 min-h-0 overflow-hidden grid grid-cols-1 lg:grid-cols-12">
            {/* CONVERSATION COLUMN */}
            <div
              className={clsx(
                'lg:col-span-8 flex flex-col min-h-0 lg:border-r',
                isDark ? 'lg:border-white/[0.08]' : 'lg:border-zinc-100'
              )}
            >
              {/* Scrollable Editorial Chat Feed */}
              <div className="flex-1 min-h-0 overflow-y-auto">
                <div className="max-w-2xl mx-auto px-4 sm:px-6 py-5 space-y-6">
                  {turns.map((turn) => {
                    const isUser = turn.speaker === 'user';
                    const landing =
                      !isUser && typeof turn.argumentStrength === 'number'
                        ? getLandingRating(turn.argumentStrength)
                        : null;

                    if (isUser) {
                      return (
                        <div key={turn.id} className="flex justify-end">
                          <div
                            className={clsx(
                              'max-w-[85%] rounded-2xl rounded-br-sm px-4 py-2.5 text-[15px] leading-relaxed',
                              isDark
                                ? 'bg-[#1F1F23] text-zinc-100'
                                : 'bg-zinc-900 text-white'
                            )}
                          >
                            <p>{turn.text}</p>
                          </div>
                        </div>
                      );
                    }

                    return (
                      <div key={turn.id} className="space-y-2">
                        <div className="flex items-center gap-2 text-xs">
                          <span
                            className={clsx(
                              'font-semibold',
                              isDark ? 'text-zinc-200' : 'text-zinc-900'
                            )}
                          >
                            Steelman
                          </span>
                          {landing && typeof turn.argumentStrength === 'number' && (
                            <span
                              className={clsx(
                                'font-mono text-[11px] font-medium tabular-nums',
                                landing.rating === 'knockout'
                                  ? 'text-emerald-500'
                                  : landing.rating === 'vulnerable'
                                    ? 'text-rose-500'
                                    : isDark
                                      ? 'text-zinc-400'
                                      : 'text-zinc-500'
                              )}
                            >
                              · {landing.label} ({turn.argumentStrength})
                            </span>
                          )}
                        </div>

                        {/* Borderless clean prose like Claude / Perplexity */}
                        <p
                          className={clsx(
                            'text-[15.5px] leading-[1.68]',
                            isDark ? 'text-zinc-200' : 'text-zinc-800'
                          )}
                        >
                          {turn.text}
                        </p>

                        {/* Quiet inline references */}
                        {((turn.engagedNodeIds && turn.engagedNodeIds.length > 0) ||
                          turn.citedSource) && (
                          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 pt-1">
                            {turn.engagedNodeIds?.map((nid) => {
                              const node = nodeMap.get(nid);
                              if (!node) return null;
                              return (
                                <button
                                  key={nid}
                                  type="button"
                                  onClick={() => onInspectNode(nid)}
                                  className={clsx(
                                    'inline-flex items-center gap-1 text-xs transition-colors',
                                    isDark
                                      ? 'text-zinc-400 hover:text-zinc-100'
                                      : 'text-zinc-500 hover:text-zinc-950'
                                  )}
                                >
                                  <span
                                    className={clsx(
                                      'w-1.5 h-1.5 rounded-full shrink-0',
                                      node.kind === 'pro'
                                        ? 'bg-emerald-500'
                                        : node.kind === 'con'
                                          ? 'bg-rose-500'
                                          : 'bg-zinc-400'
                                    )}
                                  />
                                  <span className="truncate max-w-[220px] underline decoration-zinc-500/40 underline-offset-2">
                                    {node.title}
                                  </span>
                                  <ArrowUpRight className="w-3 h-3 shrink-0 opacity-60" />
                                </button>
                              );
                            })}

                            {turn.citedSource && (
                              <a
                                href={turn.citedSource.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={clsx(
                                  'inline-flex items-center gap-1 text-xs transition-colors',
                                  isDark
                                    ? 'text-zinc-500 hover:text-zinc-200'
                                    : 'text-zinc-400 hover:text-zinc-800'
                                )}
                              >
                                <ExternalLink className="w-3 h-3 shrink-0" />
                                <span className="truncate max-w-[220px]">
                                  {turn.citedSource.title}
                                </span>
                              </a>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}

                  {/* Model Download / Live Streaming / Thinking */}
                  {isThinking && modelLoadStatus ? (
                    <div className="space-y-2 max-w-sm">
                      <div className="flex items-center justify-between text-xs text-zinc-400">
                        <span className="truncate pr-2">{modelLoadStatus.text}</span>
                        <span className="font-mono shrink-0">
                          {Math.round(modelLoadStatus.progress * 100)}%
                        </span>
                      </div>
                      <div
                        className={clsx(
                          'h-1 w-full rounded-full overflow-hidden',
                          isDark ? 'bg-zinc-800' : 'bg-zinc-200'
                        )}
                      >
                        <div
                          style={{
                            width: `${Math.max(5, Math.round(modelLoadStatus.progress * 100))}%`,
                          }}
                          className={clsx(
                            'h-full transition-all duration-300',
                            isDark ? 'bg-white' : 'bg-zinc-950'
                          )}
                        />
                      </div>
                    </div>
                  ) : isThinking && streamingReply ? (
                    <div className="space-y-2">
                      <div className="text-xs font-semibold text-zinc-400">Steelman</div>
                      <p
                        className={clsx(
                          'text-[15.5px] leading-[1.68]',
                          isDark ? 'text-zinc-200' : 'text-zinc-800'
                        )}
                      >
                        {streamingReply}
                        <span
                          className={clsx(
                            'inline-block w-1.5 h-4 ml-1 align-middle animate-pulse',
                            isDark ? 'bg-zinc-300' : 'bg-zinc-800'
                          )}
                        />
                      </p>
                    </div>
                  ) : isThinking ? (
                    <div className="inline-flex items-center gap-2 text-xs text-zinc-500">
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Thinking...</span>
                    </div>
                  ) : null}

                  {/* Error Alert */}
                  {errorMessage && (
                    <div
                      className={clsx(
                        'px-3.5 py-2.5 rounded-xl text-xs flex items-center justify-between gap-2',
                        isDark
                          ? 'bg-rose-500/10 text-rose-400'
                          : 'bg-rose-50 text-rose-700'
                      )}
                    >
                      <span>{errorMessage}</span>
                      <button
                        type="button"
                        onClick={() => setShowSettings(true)}
                        className="shrink-0 underline font-medium"
                      >
                        Settings
                      </button>
                    </div>
                  )}

                  {/* STAGE 3: CLEAN ROUND COMPLETE VERDICT CARD */}
                  {isRoundComplete && currentLiveSessionRecord && completedVerdict && (
                    <div
                      className={clsx(
                        'p-5 rounded-2xl border space-y-4',
                        isDark
                          ? 'bg-[#141417] border-white/[0.08]'
                          : 'bg-zinc-50 border-zinc-200'
                      )}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="space-y-1">
                          <div className="text-xs text-zinc-500">Round complete · Saved to log</div>
                          <h3 className="font-editorial text-2xl font-medium tracking-tight">
                            {completedVerdict.title}
                          </h3>
                          <p className="text-xs text-zinc-500 tabular-nums">
                            Avg score {currentLiveSessionRecord.avgStrength}/100 ·{' '}
                            {currentLiveSessionRecord.turnCount} arguments
                          </p>
                        </div>
                        <div className="w-24 shrink-0 pt-2">
                          <MomentumSparkline
                            series={currentLiveSessionRecord.momentumSeries}
                            isDark={isDark}
                            height={30}
                          />
                        </div>
                      </div>

                      <div
                        className={clsx(
                          'pt-3 border-t text-xs space-y-1',
                          isDark ? 'border-white/[0.06] text-zinc-400' : 'border-zinc-200 text-zinc-600'
                        )}
                      >
                        <div>
                          <span className={isDark ? 'text-zinc-200 font-medium' : 'text-zinc-900 font-medium'}>
                            Strength:
                          </span>{' '}
                          {currentLiveSessionRecord.topStrength}
                        </div>
                        <div>
                          <span className={isDark ? 'text-zinc-200 font-medium' : 'text-zinc-900 font-medium'}>
                            Next focus:
                          </span>{' '}
                          {currentLiveSessionRecord.primaryFocus}
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          setReviewingSession({
                            session: currentLiveSessionWithAnalysis ?? currentLiveSessionRecord,
                            isHistorical: false,
                          })
                        }
                        className={clsx(
                          'w-full h-11 rounded-xl text-[13.5px] font-semibold transition-colors',
                          isDark
                            ? 'bg-white text-zinc-950 hover:bg-zinc-200'
                            : 'bg-zinc-950 text-white hover:bg-zinc-800'
                        )}
                      >
                        Review Game Tape
                      </button>

                      <div className="flex items-center justify-center gap-5 text-xs font-medium text-zinc-500">
                        <button
                          type="button"
                          onClick={() => setTargetTurns((prev) => (prev ?? userTurnCount) + 2)}
                          className={isDark ? 'hover:text-zinc-200' : 'hover:text-zinc-900'}
                        >
                          +2 turns
                        </button>
                        <button
                          type="button"
                          onClick={handleRematchSwitchSides}
                          className={isDark ? 'hover:text-zinc-200' : 'hover:text-zinc-900'}
                        >
                          Switch sides
                        </button>
                        <button
                          type="button"
                          onClick={() => setStage('lobby')}
                          className={isDark ? 'hover:text-zinc-200' : 'hover:text-zinc-900'}
                        >
                          New motion
                        </button>
                      </div>
                    </div>
                  )}

                  <div ref={feedEndRef} />
                </div>
              </div>

              {/* Clean Minimal Composer */}
              {!isRoundComplete && (
                <div className="shrink-0 px-3.5 sm:px-6 pb-3 pt-1">
                  <div className="max-w-2xl mx-auto space-y-2">
                    {/* Optional Suggested Angle popover */}
                    {showAngleHint && suggestedAngleNode && (
                      <div
                        className={clsx(
                          'p-3.5 rounded-xl border text-xs space-y-2',
                          isDark
                            ? 'bg-[#141417] border-white/[0.1] text-zinc-300'
                            : 'bg-zinc-50 border-zinc-200 text-zinc-700'
                        )}
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-medium text-zinc-100 dark:text-zinc-100">
                            {suggestedAngleNode.title}
                          </span>
                          <button
                            type="button"
                            onClick={() => setShowAngleHint(false)}
                            className="text-zinc-500 hover:text-zinc-300"
                            aria-label="Close hint"
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <p className="text-zinc-400 leading-relaxed line-clamp-2">
                          {suggestedAngleNode.summary}
                        </p>
                        <div className="flex items-center gap-3 pt-0.5">
                          <button
                            type="button"
                            onClick={() => {
                              const firstSent = suggestedAngleNode.summary.split('.')[0];
                              setDraftText(
                                `A key consideration is ${suggestedAngleNode.title.toLowerCase()}: ${firstSent}.`
                              );
                              setShowAngleHint(false);
                              textareaRef.current?.focus();
                            }}
                            className={clsx(
                              'font-medium underline underline-offset-2',
                              isDark ? 'text-white' : 'text-zinc-950'
                            )}
                          >
                            Insert starter
                          </button>
                          <button
                            type="button"
                            onClick={() => onInspectNode(suggestedAngleNode.id)}
                            className="text-zinc-500 hover:text-zinc-300"
                          >
                            Inspect source
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Quiet 1-line Phase Guidance + Hint toggle */}
                    <div className="flex items-center justify-between gap-2 px-1">
                      <p className="text-[11.5px] text-zinc-500 truncate">
                        <span className={isDark ? 'text-zinc-300 font-medium' : 'text-zinc-700 font-medium'}>
                          {phaseGuidance.phaseLabel}
                        </span>{' '}
                        · {phaseGuidance.cue}
                      </p>
                      {suggestedAngleNode && (
                        <button
                          type="button"
                          onClick={() => setShowAngleHint((v) => !v)}
                          className={clsx(
                            'text-[11.5px] font-medium shrink-0 transition-colors',
                            showAngleHint
                              ? isDark
                                ? 'text-white'
                                : 'text-zinc-950'
                              : 'text-zinc-500 hover:text-zinc-300'
                          )}
                        >
                          {showAngleHint ? 'Hide hint' : 'Hint'}
                        </button>
                      )}
                    </div>

                    {/* Unified Claude/ChatGPT-style Multi-Line Dictation Box */}
                    <form
                      onSubmit={handleFormSubmit}
                      className={clsx(
                        'rounded-2xl border p-2 pl-3.5 flex items-end gap-2 transition-colors',
                        isDark
                          ? 'bg-[#141417] border-white/[0.1] focus-within:border-white/[0.22]'
                          : 'bg-zinc-50 border-zinc-200 focus-within:border-zinc-400'
                      )}
                    >
                      <textarea
                        ref={textareaRef}
                        rows={3}
                        value={draftText}
                        onChange={(e) => setDraftText(e.target.value)}
                        onKeyDown={handleTextareaKeyDown}
                        placeholder="Dictate with your keyboard mic, or type your argument..."
                        className={clsx(
                          'flex-1 min-h-[72px] max-h-[150px] resize-none bg-transparent py-1.5 text-[15px] leading-snug focus:outline-none',
                          isDark
                            ? 'text-zinc-100 placeholder:text-zinc-500'
                            : 'text-zinc-950 placeholder:text-zinc-400'
                        )}
                      />
                      <button
                        type="submit"
                        disabled={!draftText.trim() || isThinking}
                        aria-label="Send argument"
                        className={clsx(
                          'h-9 w-9 rounded-full flex items-center justify-center shrink-0 transition-all active:scale-95 disabled:opacity-25 mb-0.5',
                          isDark
                            ? 'bg-white text-zinc-950 hover:bg-zinc-200'
                            : 'bg-zinc-950 text-white hover:bg-zinc-800'
                        )}
                      >
                        {isThinking ? (
                          <Loader2 className="w-4 h-4 animate-spin" />
                        ) : (
                          <ArrowUp className="w-4 h-4 stroke-[2.5]" />
                        )}
                      </button>
                    </form>
                  </div>
                </div>
              )}
            </div>

            {/* DESKTOP RIGHT COLUMN: Quiet Argument Map */}
            <div className="hidden lg:block lg:col-span-4 overflow-y-auto p-5">
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

      {/* Mobile Argument Map Sheet */}
      {showHudSheet && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-xs"
          onClick={() => setShowHudSheet(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={clsx(
              'w-full max-w-lg max-h-[82vh] rounded-t-2xl sm:rounded-2xl border shadow-2xl flex flex-col overflow-hidden',
              isDark
                ? 'bg-[#141417] border-white/[0.08] text-zinc-100'
                : 'bg-white border-zinc-200 text-zinc-950'
            )}
          >
            <div className="pt-2.5 pb-1 flex justify-center sm:hidden shrink-0">
              <span className="w-9 h-1 rounded-full bg-zinc-500/35" />
            </div>
            <div
              className={clsx(
                'px-5 py-3 border-b flex items-center justify-between shrink-0',
                isDark ? 'border-white/[0.08]' : 'border-zinc-100'
              )}
            >
              <h3 className="text-[15px] font-semibold">Argument Map</h3>
              <button
                type="button"
                onClick={() => setShowHudSheet(false)}
                aria-label="Close argument map"
                className="p-1.5 rounded-lg text-zinc-400 hover:bg-white/[0.06]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-5 overflow-y-auto pb-[max(1.25rem,env(safe-area-inset-bottom))]">
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

      {/* 22-Motion Topic Picker */}
      <TopicPickerModal
        isOpen={showTopicPicker}
        onClose={() => setShowTopicPicker(false)}
        activeTopicId={dataset.id}
        onSelectTopic={onSwitchTopic}
        isDark={isDark}
      />

      {/* Unified Settings Sheet */}
      <VoiceSettingsModal
        isOpen={showSettings}
        onClose={() => setShowSettings(false)}
        settings={settings}
        onSave={handleSaveSettings}
        isDark={isDark}
        onToggleTheme={onToggleTheme}
      />

      {/* Performance Log Sheet */}
      <PerformanceLogSheet
        isOpen={showPerformanceLog}
        onClose={() => setShowPerformanceLog(false)}
        sessions={savedLogs}
        settings={settings}
        onSelectSession={(session) => {
          setShowPerformanceLog(false);
          setReviewingSession({ session, isHistorical: true });
        }}
        onDeleteSession={handleDeleteLog}
        onImportSessions={(merged) => setSavedLogs(merged)}
        onOpenSettings={() => setShowSettings(true)}
        isDark={isDark}
      />

      {/* Turn-by-Turn Game Tape Review Sheet */}
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
        onSaveDeepAnalysis={handleSaveDeepAnalysis}
        onOpenSettings={() => setShowSettings(true)}
        onInspectNode={onInspectNode}
        onRematchSwitchSides={handleRematchSwitchSides}
        onNewRound={() => startFreshRound()}
        isDark={isDark}
      />
    </div>
  );
}
