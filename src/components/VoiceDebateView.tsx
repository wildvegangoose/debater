import { FormEvent, KeyboardEvent, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import clsx from 'clsx';
import {
  ArrowUpRight,
  ClipboardList,
  Compass,
  Cpu,
  ExternalLink,
  Lightbulb,
  Loader2,
  RotateCcw,
  Send,
  Settings2,
  SlidersHorizontal,
  Sparkles,
  Trophy,
  X,
} from 'lucide-react';
import { DebateGraphDataset, DebateNode } from '../types/debate';
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
  getEffectiveBackendLabel,
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
} from '../services/voiceDebate/performanceAnalyzer';
import {
  deletePerformanceLog,
  loadPerformanceLogs,
  updateTurnAiRewriteInLog,
  upsertPerformanceLog,
} from '../services/voiceDebate/sessionLogStorage';
import { LiveDebateHud } from './voice/LiveDebateHud';
import { VoiceSettingsModal } from './voice/VoiceSettingsModal';
import { DebateScorecardModal } from './voice/DebateScorecardModal';
import { PerformanceLogSheet } from './voice/PerformanceLogSheet';

interface VoiceDebateViewProps {
  dataset: DebateGraphDataset;
  nodes: DebateNode[];
  activePillarId: string | null;
  onSelectPillar: (pillarId: string | null) => void;
  onInspectNode: (nodeId: string) => void;
  onSwitchToGraph: (nodeId?: string) => void;
  isDark: boolean;
}

const STANCE_OPTIONS: Array<{ id: DebateUserStance; label: string; short: string }> = [
  { id: 'pro', label: 'Argue Pro', short: 'Pro' },
  { id: 'con', label: 'Argue Con', short: 'Con' },
  { id: 'switch', label: 'Steelman Switch', short: 'Switch' },
  { id: 'explore', label: 'Open Spar', short: 'Explore' },
];

const PERSONA_OPTIONS: Array<{ id: DebateOpponentPersona; label: string; short: string }> = [
  { id: 'sparring', label: 'Conversational Partner', short: 'Partner' },
  { id: 'oxford', label: 'Oxford Challenger', short: 'Oxford' },
  { id: 'socratic', label: 'Socratic Prober', short: 'Socratic' },
];

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

export function VoiceDebateView({
  dataset,
  nodes,
  activePillarId,
  onSelectPillar,
  onInspectNode,
  onSwitchToGraph,
  isDark,
}: VoiceDebateViewProps) {
  const [settings, setSettings] = useState<VoiceDebateSettings>(() => loadVoiceSettings());
  const [stance, setStance] = useState<DebateUserStance>('pro');
  const [persona, setPersona] = useState<DebateOpponentPersona>('sparring');
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

  // Slide-up sheets on mobile for Setup, Coach & Map, Performance Log, and Game Tape
  const [activeSheet, setActiveSheet] = useState<'none' | 'setup' | 'hud'>('none');
  const [showSettings, setShowSettings] = useState(false);
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

  const pillars = useMemo(() => nodes.filter((n) => n.kind === 'pillar'), [nodes]);
  const nodeMap = useMemo(() => new Map(nodes.map((n) => [n.id, n])), [nodes]);
  const backendMeta = useMemo(() => getEffectiveBackendLabel(settings), [settings]);

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

  // 2 concise conversation starters from the active topic
  const starterPrompts = useMemo(() => {
    const scoped = getScopedDebateNodes(nodes, activePillarId);
    const preferredKind = stance === 'con' ? 'con' : 'pro';
    const candidates = [
      ...scoped.filter((n) => n.kind === preferredKind),
      ...scoped.filter((n) => n.kind === 'thesis'),
    ].slice(0, 2);

    return candidates.map((n) => ({
      nodeId: n.id,
      label: n.title,
      prompt: `I want to argue that ${n.title.toLowerCase()}. ${n.summary.split('.')[0]}.`,
    }));
  }, [nodes, activePillarId, stance]);

  const resetSession = useCallback(
    (overrideStance?: DebateUserStance) => {
      const nextStance = overrideStance ?? stance;
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
    },
    [dataset, nodes, activePillarId, stance, persona]
  );

  useEffect(() => {
    resetSession();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataset.id]);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    feedEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [turns.length, isThinking, streamingReply]);

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

      // Build argument-by-argument review & auto-persist to Performance Log
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
    resetSession(flipped);
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

  const activeStanceShort = STANCE_OPTIONS.find((s) => s.id === stance)?.short ?? 'Pro';
  const activePersonaShort = PERSONA_OPTIONS.find((p) => p.id === persona)?.short ?? 'Partner';

  return (
    <div
      className={clsx(
        'flex-1 flex flex-col min-h-0 overflow-hidden relative',
        isDark ? 'bg-[#0B0E14] text-stone-100' : 'bg-[#FAF8F4] text-stone-900'
      )}
    >
      {/* Compact Single-Row Control Header */}
      <div
        className={clsx(
          'px-3 sm:px-5 h-12 border-b flex items-center justify-between gap-1.5 shrink-0',
          isDark ? 'bg-[#0E1219]/95 border-[#222938]' : 'bg-white/95 border-[#E7E2D8]'
        )}
      >
        <button
          type="button"
          onClick={() => setActiveSheet('setup')}
          className={clsx(
            'inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-semibold border transition-colors min-w-0',
            isDark
              ? 'bg-[#151A24] border-[#262E3E] text-stone-200 hover:border-amber-400/40'
              : 'bg-[#F5F1E8] border-[#E5DEC9] text-stone-800 hover:border-amber-500/50'
          )}
        >
          <SlidersHorizontal className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          <span className="truncate">
            <span
              className={clsx(
                'font-bold',
                stance === 'pro'
                  ? 'text-emerald-400'
                  : stance === 'con'
                    ? 'text-rose-400'
                    : 'text-amber-400'
              )}
            >
              {activeStanceShort}
            </span>
            <span className="mx-1 opacity-40">·</span>
            <span>{activePersonaShort}</span>
          </span>
        </button>

        <div className="flex items-center gap-1.5 shrink-0">
          {/* Performance Log button */}
          <button
            type="button"
            onClick={() => setShowPerformanceLog(true)}
            className={clsx(
              'inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full text-xs font-semibold border transition-colors',
              isDark
                ? 'bg-[#151A24] border-[#262E3E] text-stone-200 hover:border-amber-400/40'
                : 'bg-[#F5F1E8] border-[#E5DEC9] text-stone-800 hover:border-amber-500/50'
            )}
          >
            <ClipboardList className="w-3.5 h-3.5 text-amber-400" />
            <span>Log</span>
            {savedLogs.length > 0 && (
              <span className="px-1.5 rounded-full bg-amber-400/20 text-amber-300 font-mono text-[10px] font-bold">
                {savedLogs.length}
              </span>
            )}
          </button>

          {/* Mobile Argument Map pill */}
          <button
            type="button"
            onClick={() => setActiveSheet('hud')}
            className={clsx(
              'lg:hidden inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full text-xs font-semibold border transition-colors',
              isDark
                ? 'bg-[#151A24] border-[#262E3E] text-stone-200'
                : 'bg-[#F5F1E8] border-[#E5DEC9] text-stone-800'
            )}
          >
            <Compass className="w-3.5 h-3.5 text-stone-400" />
            <span className="hidden xs:inline">Map</span>
            {totalEngagedCount > 0 && (
              <span className="font-mono text-[10px] font-bold text-amber-400">
                {totalEngagedCount}
              </span>
            )}
          </button>

          {/* AI Engine Pill */}
          <button
            type="button"
            onClick={() => setShowSettings(true)}
            className={clsx(
              'inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full text-xs font-bold border transition-colors',
              settings.backend === 'browser-webllm'
                ? isDark
                  ? 'bg-amber-400/15 border-amber-400/40 text-amber-300'
                  : 'bg-amber-50 border-amber-400 text-amber-900'
                : settings.backend === 'gemini-flash'
                  ? isDark
                    ? 'bg-emerald-500/15 border-emerald-500/35 text-emerald-300'
                    : 'bg-emerald-50 border-emerald-300 text-emerald-800'
                  : isDark
                    ? 'bg-[#151A24] border-[#262E3E] text-stone-300'
                    : 'bg-[#F5F1E8] border-[#E5DEC9] text-stone-700'
            )}
          >
            {settings.backend === 'browser-webllm' ? (
              <Cpu className="w-3.5 h-3.5" />
            ) : (
              <Settings2 className="w-3.5 h-3.5" />
            )}
            <span className="hidden sm:inline">{backendMeta.shortLabel}</span>
            <span className="sm:hidden">
              {settings.backend === 'browser-webllm'
                ? 'Local AI'
                : settings.backend === 'gemini-flash'
                  ? 'Gemini'
                  : 'AI'}
            </span>
          </button>

          {/* Current Round Game Tape Review button */}
          {currentLiveSessionRecord && (
            <button
              type="button"
              onClick={() =>
                setReviewingSession({ session: currentLiveSessionRecord, isHistorical: false })
              }
              aria-label="Review round game tape"
              title="Open Turn-by-Turn Game Tape"
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full text-xs font-bold bg-amber-500 hover:bg-amber-400 text-stone-950 transition-colors shadow-xs"
            >
              <Trophy className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Review</span>
            </button>
          )}
        </div>
      </div>

      {/* Main Layout: Clean Editorial Chat + Live Visual Feedback on Mobile | 2-Column on Desktop */}
      <div className="flex-1 min-h-0 overflow-hidden grid grid-cols-1 lg:grid-cols-12">
        {/* CONVERSATIONAL DEBATE COLUMN */}
        <div
          className={clsx(
            'lg:col-span-7 flex flex-col min-h-0 lg:border-r',
            isDark ? 'lg:border-[#222938]' : 'lg:border-[#E7E2D8]'
          )}
        >
          {/* Slim Live Visual Feedback Pulse (Momentum + Score + Rhetoric Chips) */}
          <div
            className={clsx(
              'px-4 py-2.5 border-b shrink-0 space-y-1.5',
              isDark ? 'bg-[#0E1219]/70 border-[#1E2533]' : 'bg-white border-[#E7E2D8]'
            )}
          >
            <div className="flex items-center justify-between text-[11px] font-semibold">
              <span className="text-emerald-400 font-mono">
                You {userSharePct}%
                {feedback.lastTurnDelta > 0 && (
                  <span className="ml-1 text-[10px] opacity-90">+{feedback.lastTurnDelta}</span>
                )}
              </span>
              <span className="text-stone-400 font-mono tabular-nums">
                {userTurnCount > 0 ? `Turn ${feedback.argumentStrength}/100` : 'Floor Momentum'}
              </span>
              <span className="text-rose-400 font-mono">
                {feedback.lastTurnDelta < 0 && (
                  <span className="mr-1 text-[10px] opacity-90">{feedback.lastTurnDelta}</span>
                )}
                Opp {100 - userSharePct}%
              </span>
            </div>
            <div
              className={clsx(
                'h-1.5 w-full rounded-full overflow-hidden flex',
                isDark ? 'bg-[#1D2432]' : 'bg-stone-200'
              )}
            >
              <div
                style={{ width: `${userSharePct}%` }}
                className="h-full bg-emerald-500 transition-all duration-500"
              />
              <div
                style={{ width: `${100 - userSharePct}%` }}
                className="h-full bg-rose-500/85 transition-all duration-500"
              />
            </div>

            {userTurnCount > 0 && feedback.latestBadges.length > 0 && (
              <div className="flex items-center justify-between gap-2 pt-0.5 flex-wrap">
                <div className="flex items-center gap-1.5 flex-wrap">
                  {feedback.latestBadges.map((badge, idx) => (
                    <span
                      key={`${badge.label}-${idx}`}
                      className={clsx(
                        'inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10.5px] font-semibold border',
                        badge.type === 'fallacy'
                          ? 'bg-rose-500/15 border-rose-500/35 text-rose-300'
                          : badge.type === 'steelman' || badge.type === 'evidence'
                            ? 'bg-emerald-500/15 border-emerald-500/35 text-emerald-300'
                            : isDark
                              ? 'bg-amber-400/10 border-amber-400/30 text-amber-300'
                              : 'bg-amber-50 border-amber-300 text-amber-800'
                      )}
                    >
                      <Sparkles className="w-2.5 h-2.5" />
                      {badge.label}
                    </span>
                  ))}
                </div>
                {currentLiveSessionRecord && (
                  <button
                    type="button"
                    onClick={() =>
                      setReviewingSession({
                        session: currentLiveSessionRecord,
                        isHistorical: false,
                      })
                    }
                    className="text-[10.5px] font-bold text-amber-400 hover:text-amber-300 transition-colors"
                  >
                    Game Tape →
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Scrollable Conversational Debate Feed */}
          <div className="flex-1 min-h-0 overflow-y-auto px-3.5 sm:px-5 py-4 space-y-4">
            {turns.map((turn, idx) => {
              const isUser = turn.speaker === 'user';
              const isLatestAi = !isUser && idx === turns.length - 1;
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
                      'max-w-[92%] sm:max-w-[85%] rounded-2xl px-4 py-3 text-[14px] leading-relaxed border',
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

                    {/* Primary Source Link */}
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

                  {/* Subtle inline coach tip beneath latest AI reply on mobile */}
                  {isLatestAi && turn.coachingTip && userTurnCount > 0 && (
                    <button
                      type="button"
                      onClick={() =>
                        currentLiveSessionRecord
                          ? setReviewingSession({
                              session: currentLiveSessionRecord,
                              isHistorical: false,
                            })
                          : setActiveSheet('hud')
                      }
                      className={clsx(
                        'lg:hidden mt-1 max-w-[92%] text-left px-3 py-2 rounded-xl border text-[11.5px] flex items-start gap-2',
                        isDark
                          ? 'bg-amber-400/[0.06] border-amber-400/25 text-stone-200'
                          : 'bg-amber-50/75 border-amber-200 text-stone-800'
                      )}
                    >
                      <Lightbulb className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span className="line-clamp-2">{turn.coachingTip}</span>
                    </button>
                  )}
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
                    'max-w-[92%] sm:max-w-[85%] rounded-2xl rounded-bl-sm px-4 py-3 text-[14px] leading-relaxed border',
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

            <div ref={feedEndRef} />
          </div>

          {/* Quick Starters (only before user's first turn) */}
          {userTurnCount === 0 && starterPrompts.length > 0 && (
            <div className="px-3.5 pb-2 flex items-center gap-1.5 overflow-x-auto no-scrollbar shrink-0">
              {settings.backend === 'offline-curated' && (
                <button
                  type="button"
                  onClick={() => setShowSettings(true)}
                  className={clsx(
                    'inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-[11px] font-bold border shrink-0 transition-colors',
                    isDark
                      ? 'bg-amber-400/15 border-amber-400/40 text-amber-300 hover:bg-amber-400/25'
                      : 'bg-amber-50 border-amber-400 text-amber-900 hover:bg-amber-100'
                  )}
                >
                  <Cpu className="w-3 h-3" />
                  <span>Enable On-Device AI (Free)</span>
                </button>
              )}
              {starterPrompts.map((item) => (
                <button
                  key={item.nodeId}
                  type="button"
                  onClick={() => {
                    setDraftText(item.prompt);
                    textareaRef.current?.focus();
                  }}
                  className={clsx(
                    'px-3 py-1.5 rounded-full text-[11px] font-medium border shrink-0 transition-colors',
                    isDark
                      ? 'bg-[#12161F] border-[#262E3E] text-stone-300 hover:border-amber-400/50'
                      : 'bg-white border-[#E5DEC9] text-stone-700 hover:border-amber-500'
                  )}
                >
                  Try: “{item.label}”
                </button>
              ))}
            </div>
          )}

          {/* Medium-Sized Multi-Line Dictation & Text Composer */}
          <form
            onSubmit={handleFormSubmit}
            className={clsx(
              'px-3 sm:px-4 py-2.5 border-t shrink-0',
              isDark ? 'bg-[#0E1219] border-[#222938]' : 'bg-white border-[#E7E2D8]'
            )}
          >
            <div className="flex items-end gap-2">
              <textarea
                ref={textareaRef}
                rows={3}
                value={draftText}
                onChange={(e) => setDraftText(e.target.value)}
                onKeyDown={handleTextareaKeyDown}
                placeholder="Tap your keyboard mic to dictate, or type your argument..."
                className={clsx(
                  'flex-1 min-h-[78px] max-h-[150px] resize-none px-3.5 py-2.5 rounded-2xl text-[14px] leading-snug border focus:outline-none focus:ring-2 focus:ring-amber-400/70 transition-colors',
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

      {/* SLIDE-UP BOTTOM SHEETS (Debate Setup | Coach & Map) */}
      {activeSheet !== 'none' && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/75 backdrop-blur-xs"
          onClick={() => setActiveSheet('none')}
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
                  {activeSheet === 'setup' ? 'Debate Setup' : 'Live Coach & Argument Map'}
                </h3>
                <button
                  type="button"
                  onClick={() => setActiveSheet('none')}
                  aria-label="Close panel"
                  className="p-1.5 rounded-full text-stone-400 hover:bg-stone-500/15"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="p-4 overflow-y-auto pb-[max(1rem,env(safe-area-inset-bottom))]">
              {activeSheet === 'setup' ? (
                <div className="space-y-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-400 mb-2">
                      Your Stance
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {STANCE_OPTIONS.map((opt) => (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => {
                            setStance(opt.id);
                            if (userTurnCount === 0) resetSession(opt.id);
                          }}
                          className={clsx(
                            'py-2.5 px-3 rounded-xl text-xs font-bold border transition-colors',
                            stance === opt.id
                              ? opt.id === 'pro'
                                ? 'bg-emerald-600 border-emerald-500 text-white'
                                : opt.id === 'con'
                                  ? 'bg-rose-600 border-rose-500 text-white'
                                  : 'bg-amber-500 border-amber-400 text-stone-950'
                              : isDark
                                ? 'bg-[#0B0E14] border-[#262E3E] text-stone-300'
                                : 'bg-white border-[#E5DEC9] text-stone-700'
                          )}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-400 mb-2">
                      AI Opponent Style
                    </label>
                    <div className="grid grid-cols-1 gap-2">
                      {PERSONA_OPTIONS.map((p) => (
                        <button
                          key={p.id}
                          type="button"
                          onClick={() => setPersona(p.id)}
                          className={clsx(
                            'py-2.5 px-3.5 rounded-xl text-xs font-semibold border text-left transition-colors',
                            persona === p.id
                              ? isDark
                                ? 'bg-amber-400/15 border-amber-400/50 text-amber-200'
                                : 'bg-amber-50 border-amber-500 text-amber-950'
                              : isDark
                                ? 'bg-[#0B0E14] border-[#262E3E] text-stone-300'
                                : 'bg-white border-[#E5DEC9] text-stone-700'
                          )}
                        >
                          {p.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {pillars.length > 0 && (
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-400 mb-2">
                        Focus Pillar (Optional)
                      </label>
                      <select
                        value={activePillarId ?? ''}
                        onChange={(e) => onSelectPillar(e.target.value || null)}
                        className={clsx(
                          'w-full px-3 py-2.5 rounded-xl text-xs font-semibold border',
                          isDark
                            ? 'bg-[#0B0E14] border-[#262E3E] text-stone-200'
                            : 'bg-white border-[#E5DEC9] text-stone-800'
                        )}
                      >
                        <option value="">All Pillars ({pillars.length})</option>
                        {pillars.map((p) => (
                          <option key={p.id} value={p.id}>
                            {dataset.shortPillarLabels[p.id] ?? p.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  <div className="pt-2 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        resetSession();
                        setActiveSheet('none');
                      }}
                      className={clsx(
                        'flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-semibold border',
                        isDark
                          ? 'bg-[#0B0E14] border-[#262E3E] text-stone-200'
                          : 'bg-white border-[#E5DEC9] text-stone-700'
                      )}
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Restart Round</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveSheet('none')}
                      className="flex-1 py-2.5 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-400 text-stone-950"
                    >
                      Done
                    </button>
                  </div>
                </div>
              ) : (
                <LiveDebateHud
                  feedback={feedback}
                  nodes={nodes}
                  activePillarId={activePillarId}
                  onInspectNode={(id) => {
                    setActiveSheet('none');
                    onInspectNode(id);
                  }}
                  onSwitchToGraph={(id) => {
                    setActiveSheet('none');
                    onSwitchToGraph(id);
                  }}
                  isDark={isDark}
                />
              )}
            </div>
          </div>
        </div>
      )}

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
        onNewRound={() => resetSession()}
        isDark={isDark}
      />
    </div>
  );
}
