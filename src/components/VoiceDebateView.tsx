import { FormEvent, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import clsx from 'clsx';
import {
  ArrowUpRight,
  Compass,
  ExternalLink,
  Keyboard,
  MessageSquare,
  Mic,
  MicOff,
  PhoneOff,
  RotateCcw,
  Send,
  Settings2,
  SlidersHorizontal,
  Sparkles,
  Trophy,
  Volume2,
  VolumeX,
  X,
} from 'lucide-react';
import { DebateGraphDataset, DebateNode } from '../types/debate';
import {
  DebateOpponentPersona,
  DebateUserStance,
  LiveVisualFeedback,
  StructuredDebateResponse,
  VoiceDebateSettings,
  VoiceDebateTurn,
  VoiceOrbState,
} from '../types/voiceDebate';
import {
  getEffectiveBackendLabel,
  loadVoiceSettings,
  saveVoiceSettings,
} from '../services/voiceDebate/settingsStorage';
import { speechBridge } from '../services/voiceDebate/speechBridge';
import {
  generateOfflineDebateReply,
  generateOfflineOpening,
} from '../services/voiceDebate/offlineDebateEngine';
import {
  generateGeminiFlashReply,
  generateLocalOpenAIReply,
} from '../services/voiceDebate/llmDebateEngine';
import {
  GeminiLiveDebateClient,
  GeminiLiveFeedbackPayload,
} from '../services/voiceDebate/geminiLiveClient';
import { getScopedDebateNodes } from '../services/voiceDebate/debateContextBuilder';
import { VoiceVisualizerOrb } from './voice/VoiceVisualizerOrb';
import { LiveDebateHud } from './voice/LiveDebateHud';
import { VoiceSettingsModal } from './voice/VoiceSettingsModal';
import { DebateScorecardModal } from './voice/DebateScorecardModal';

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
    latestBadges: [
      {
        type: 'clarity',
        label: 'Ready to Spar',
        detail: `Tap the mic to share your opening take on ${dataset.shortTitle}.`,
      },
    ],
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

  const [orbState, setOrbState] = useState<VoiceOrbState>('idle');
  const [amplitude, setAmplitude] = useState(0);
  const [liveCaption, setLiveCaption] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [textDraft, setTextDraft] = useState('');
  const [showTextInput, setShowTextInput] = useState(false);
  const [ttsMuted, setTtsMuted] = useState(false);

  // Clean slide-up sheets for mobile so the main voice screen stays serene & uncluttered
  const [activeSheet, setActiveSheet] = useState<'none' | 'setup' | 'hud' | 'transcript'>('none');

  // Modals
  const [showSettings, setShowSettings] = useState(false);
  const [showScorecard, setShowScorecard] = useState(false);

  // Gemini Live connection state
  const [isLiveConnected, setIsLiveConnected] = useState(false);
  const [isLiveMuted, setIsLiveMuted] = useState(false);
  const liveClientRef = useRef<GeminiLiveDebateClient | null>(null);

  const turnsRef = useRef(turns);
  turnsRef.current = turns;
  const settingsRef = useRef(settings);
  settingsRef.current = settings;
  const ttsMutedRef = useRef(ttsMuted);
  ttsMutedRef.current = ttsMuted;
  const mountedRef = useRef(true);
  const transcriptEndRef = useRef<HTMLDivElement>(null);

  const pillars = useMemo(() => nodes.filter((n) => n.kind === 'pillar'), [nodes]);
  const nodeMap = useMemo(() => new Map(nodes.map((n) => [n.id, n])), [nodes]);
  const backendMeta = useMemo(() => getEffectiveBackendLabel(settings), [settings]);
  const isLiveMode = settings.backend === 'gemini-live';

  const userTurnCount = useMemo(
    () => turns.filter((t) => t.speaker === 'user').length,
    [turns]
  );

  const latestTurn = turns.length > 0 ? turns[turns.length - 1] : null;
  const totalEngagedCount = useMemo(
    () => new Set([...feedback.engagedByUserIds, ...feedback.engagedByAiIds]).size,
    [feedback.engagedByUserIds, feedback.engagedByAiIds]
  );
  const userSharePct = Math.max(
    12,
    Math.min(88, Math.round(50 + feedback.persuasionBalance * 0.42))
  );

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
      liveClientRef.current?.disconnect();
      liveClientRef.current = null;
      setIsLiveConnected(false);
      setIsLiveMuted(false);
      void speechBridge.stopListening();
      void speechBridge.stopSpeaking();

      const nextStance = overrideStance ?? stance;
      const opening = generateOfflineOpening({
        dataset,
        nodes,
        pillarId: activePillarId,
        stance: nextStance,
        persona,
      });

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
      setOrbState('idle');
      setLiveCaption('');
      setErrorMessage(null);
      setAmplitude(0);
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
      liveClientRef.current?.disconnect();
      void speechBridge.stopListening();
      void speechBridge.stopSpeaking();
    };
  }, []);

  useEffect(() => {
    transcriptEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [turns.length, liveCaption, activeSheet]);

  // Keep phone screen awake during active voice conversation or Gemini Live call
  useEffect(() => {
    const isVoiceActive = isLiveConnected || orbState === 'listening' || orbState === 'speaking';
    if (!isVoiceActive || typeof navigator === 'undefined' || !('wakeLock' in navigator)) {
      return;
    }
    let sentinel: { release: () => Promise<void> } | null = null;
    let cancelled = false;

    const wakeLockApi = (
      navigator as unknown as {
        wakeLock?: { request: (type: 'screen') => Promise<{ release: () => Promise<void> }> };
      }
    ).wakeLock;

    wakeLockApi
      ?.request('screen')
      .then((lock) => {
        if (cancelled) {
          lock.release().catch(() => {});
        } else {
          sentinel = lock;
        }
      })
      .catch(() => {});

    return () => {
      cancelled = true;
      sentinel?.release().catch(() => {});
    };
  }, [isLiveConnected, orbState]);

  const applyStructuredTurnResponse = useCallback(
    (response: StructuredDebateResponse, userTurnText?: string) => {
      const aiTurn: VoiceDebateTurn = {
        id: `ai-${Date.now()}`,
        speaker: 'ai',
        text: response.spokenReply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
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
        if (!userTurnText) return [...prev, aiTurn];
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

      setFeedback((prev) => ({
        argumentStrength: response.argumentStrength,
        persuasionBalance: Math.max(
          -100,
          Math.min(100, prev.persuasionBalance + response.persuasionShift)
        ),
        roundPhase: response.roundPhase,
        latestBadges:
          response.rhetoricBadges.length > 0 ? response.rhetoricBadges : prev.latestBadges,
        coachingTip: response.coachingTip || prev.coachingTip,
        suggestedNodeId: response.suggestedFollowUpNodeId ?? prev.suggestedNodeId,
        engagedByUserIds: Array.from(
          new Set([...prev.engagedByUserIds, ...(response.userEngagedNodeIds ?? [])])
        ),
        engagedByAiIds: Array.from(
          new Set([...prev.engagedByAiIds, ...response.engagedNodeIds])
        ),
        lastTurnDelta: response.persuasionShift,
      }));
    },
    []
  );

  const startTurnListening = useCallback(async () => {
    setErrorMessage(null);
    await speechBridge.stopSpeaking();
    setOrbState('listening');
    setAmplitude(0.45);
    setLiveCaption('');

    await speechBridge.startListening({
      onInterim: (interim) => {
        if (!mountedRef.current) return;
        setLiveCaption(interim);
        setAmplitude(0.55 + Math.random() * 0.35);
      },
      onFinal: (finalTranscript) => {
        if (!mountedRef.current) return;
        setLiveCaption('');
        setAmplitude(0);
        void submitUserArgumentRef.current(finalTranscript);
      },
      onError: (msg) => {
        if (!mountedRef.current) return;
        setErrorMessage(msg);
        setOrbState('error');
        setAmplitude(0);
      },
      onEnd: () => {
        if (!mountedRef.current) return;
        setOrbState((cur) => (cur === 'listening' ? 'idle' : cur));
        setAmplitude(0);
      },
    });
  }, []);

  const submitUserArgument = useCallback(
    async (rawText: string) => {
      const clean = rawText.trim();
      if (!clean) return;
      setErrorMessage(null);

      if (settingsRef.current.backend === 'gemini-live' && isLiveConnected && liveClientRef.current) {
        setTurns((prev) => [
          ...prev,
          {
            id: `user-${Date.now()}`,
            speaker: 'user',
            text: clean,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          },
        ]);
        liveClientRef.current.sendTextMessage(clean);
        return;
      }

      const userTurn: VoiceDebateTurn = {
        id: `user-${Date.now()}`,
        speaker: 'user',
        text: clean,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      const historySnapshot = turnsRef.current;
      setTurns((prev) => [...prev, userTurn]);
      setOrbState('thinking');
      setAmplitude(0.35);

      try {
        let response: StructuredDebateResponse;
        const activeSettings = settingsRef.current;
        const usedIds = new Set<string>([
          ...feedback.engagedByAiIds,
          ...feedback.engagedByUserIds,
        ]);
        const nextUserCount = historySnapshot.filter((t) => t.speaker === 'user').length + 1;

        if (activeSettings.backend === 'gemini-flash') {
          if (!activeSettings.geminiApiKey.trim()) {
            throw new Error('Add your free Gemini API key in Settings, or use Offline Mode.');
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
          await new Promise((r) => setTimeout(r, 320));
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
        applyStructuredTurnResponse(response, clean);

        if (ttsMutedRef.current) {
          setOrbState('idle');
          setAmplitude(0);
          return;
        }

        await speechBridge.speak(
          response.spokenReply,
          activeSettings.speechRate,
          () => {
            if (!mountedRef.current) return;
            setOrbState('speaking');
            setAmplitude(0.65);
          },
          () => {
            if (!mountedRef.current) return;
            setOrbState('idle');
            setAmplitude(0);
            if (activeSettings.autoListen && activeSettings.backend !== 'gemini-live') {
              window.setTimeout(() => {
                if (mountedRef.current) {
                  void startTurnListening();
                }
              }, 350);
            }
          }
        );
      } catch (err) {
        if (!mountedRef.current) return;
        const msg = err instanceof Error ? err.message : String(err);
        setErrorMessage(msg);
        setOrbState('error');
        setAmplitude(0);
      }
    },
    [
      isLiveConnected,
      feedback.engagedByAiIds,
      feedback.engagedByUserIds,
      dataset,
      nodes,
      activePillarId,
      stance,
      persona,
      applyStructuredTurnResponse,
      startTurnListening,
    ]
  );

  const submitUserArgumentRef = useRef(submitUserArgument);
  submitUserArgumentRef.current = submitUserArgument;

  const handleStartGeminiLive = useCallback(async () => {
    if (!settings.geminiApiKey.trim()) {
      setShowSettings(true);
      setErrorMessage('Add your free Gemini API key to start a Gemini Live call.');
      return;
    }
    setErrorMessage(null);
    await speechBridge.stopListening();
    await speechBridge.stopSpeaking();

    const client = new GeminiLiveDebateClient({
      onStatusChange: (status) => {
        if (!mountedRef.current) return;
        if (status === 'connecting') {
          setOrbState('connecting');
          setIsLiveConnected(false);
        } else if (status === 'connected') {
          setOrbState('listening');
          setIsLiveConnected(true);
          setIsLiveMuted(false);
        } else {
          setOrbState('idle');
          setIsLiveConnected(false);
          setAmplitude(0);
        }
      },
      onUserAmplitude: (level) => {
        if (!mountedRef.current) return;
        setOrbState((cur) => {
          if (cur !== 'speaking') setAmplitude(level);
          return cur;
        });
      },
      onAiAmplitude: (level) => {
        if (!mountedRef.current) return;
        setAmplitude(level);
      },
      onAiSpeakingChange: (speaking) => {
        if (!mountedRef.current) return;
        setOrbState(speaking ? 'speaking' : 'listening');
      },
      onUserTranscript: (text, isFinal) => {
        if (!mountedRef.current) return;
        if (!isFinal) {
          setLiveCaption(`You: ${text}`);
        } else if (text) {
          setLiveCaption('');
          setTurns((prev) => [
            ...prev,
            {
              id: `user-live-${Date.now()}`,
              speaker: 'user',
              text,
              timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            },
          ]);
        }
      },
      onAiTranscript: (text, isFinal) => {
        if (!mountedRef.current) return;
        if (!isFinal) {
          setLiveCaption(`AI: ${text}`);
        } else if (text) {
          setLiveCaption('');
          setTurns((prev) => [
            ...prev,
            {
              id: `ai-live-${Date.now()}`,
              speaker: 'ai',
              text,
              timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            },
          ]);
        }
      },
      onFeedback: (payload: GeminiLiveFeedbackPayload) => {
        if (!mountedRef.current) return;
        const validIds = (ids: string[]) => ids.filter((id) => nodeMap.has(id));
        const aiNodes = validIds(payload.engagedNodeIds);
        const userNodes = validIds(payload.userEngagedNodeIds);
        setFeedback((prev) => ({
          argumentStrength: payload.argumentStrength,
          persuasionBalance: Math.max(
            -100,
            Math.min(100, prev.persuasionBalance + payload.persuasionShift)
          ),
          roundPhase: payload.roundPhase,
          latestBadges:
            payload.rhetoricBadges.length > 0 ? payload.rhetoricBadges : prev.latestBadges,
          coachingTip: payload.coachingTip || prev.coachingTip,
          suggestedNodeId:
            payload.suggestedFollowUpNodeId && nodeMap.has(payload.suggestedFollowUpNodeId)
              ? payload.suggestedFollowUpNodeId
              : prev.suggestedNodeId,
          engagedByUserIds: Array.from(new Set([...prev.engagedByUserIds, ...userNodes])),
          engagedByAiIds: Array.from(new Set([...prev.engagedByAiIds, ...aiNodes])),
          lastTurnDelta: payload.persuasionShift,
        }));
      },
      onError: (msg) => {
        if (!mountedRef.current) return;
        setErrorMessage(msg);
        setOrbState('error');
      },
    });

    liveClientRef.current = client;
    await client.connect({
      apiKey: settings.geminiApiKey,
      model: settings.geminiLiveModel,
      voiceName: settings.geminiLiveVoice,
      dataset,
      nodes,
      pillarId: activePillarId,
      stance,
      persona,
    });
  }, [settings, dataset, nodes, activePillarId, stance, persona, nodeMap]);

  const handleStopGeminiLive = useCallback(() => {
    liveClientRef.current?.disconnect();
    liveClientRef.current = null;
    setIsLiveConnected(false);
    setIsLiveMuted(false);
    setOrbState('idle');
    setLiveCaption('');
    setAmplitude(0);
  }, []);

  const handleOrbTap = useCallback(() => {
    if (isLiveMode) {
      if (!isLiveConnected) {
        void handleStartGeminiLive();
      } else if (orbState === 'speaking') {
        liveClientRef.current?.interruptAiPlayback();
      } else {
        const nextMuted = !isLiveMuted;
        setIsLiveMuted(nextMuted);
        liveClientRef.current?.setMuted(nextMuted);
      }
      return;
    }

    if (orbState === 'listening') {
      void speechBridge.stopListening();
    } else if (orbState === 'speaking') {
      void speechBridge.stopSpeaking();
      void startTurnListening();
    } else if (orbState === 'idle' || orbState === 'error') {
      void startTurnListening();
    }
  }, [
    isLiveMode,
    isLiveConnected,
    isLiveMuted,
    orbState,
    handleStartGeminiLive,
    startTurnListening,
  ]);

  const handleSaveSettings = (updated: VoiceDebateSettings) => {
    if (isLiveConnected) {
      handleStopGeminiLive();
    }
    setSettings(updated);
    saveVoiceSettings(updated);
    setErrorMessage(null);
  };

  const handleTextSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!textDraft.trim()) return;
    const msg = textDraft.trim();
    setTextDraft('');
    void submitUserArgument(msg);
  };

  const handleRematchSwitchSides = () => {
    const flipped: DebateUserStance =
      stance === 'pro' ? 'con' : stance === 'con' ? 'pro' : 'switch';
    setStance(flipped);
    resetSession(flipped);
  };

  const activeStanceShort = STANCE_OPTIONS.find((s) => s.id === stance)?.short ?? 'Pro';
  const activePersonaShort = PERSONA_OPTIONS.find((p) => p.id === persona)?.short ?? 'Partner';

  const renderTranscriptList = () => (
    <div className="space-y-3">
      {turns.map((turn) => {
        const isUser = turn.speaker === 'user';
        return (
          <div
            key={turn.id}
            className={clsx('flex flex-col gap-1', isUser ? 'items-end' : 'items-start')}
          >
            <div className="flex items-center gap-1.5 text-[10.5px] font-medium text-slate-400 px-1">
              <span>{isUser ? 'You' : 'Dialectica AI'}</span>
              <span>•</span>
              <span>{turn.timestamp}</span>
              {!isUser && typeof turn.argumentStrength === 'number' && (
                <span className="text-emerald-400 font-semibold">
                  {turn.argumentStrength}/100
                </span>
              )}
            </div>

            <div
              className={clsx(
                'max-w-[90%] rounded-2xl px-3.5 py-2.5 text-[13.5px] leading-relaxed border',
                isUser
                  ? 'bg-indigo-600 border-indigo-500 text-white rounded-br-sm'
                  : isDark
                    ? 'bg-slate-900 border-slate-800 text-slate-100 rounded-bl-sm'
                    : 'bg-white border-slate-200 text-slate-800 rounded-bl-sm shadow-xs'
              )}
            >
              <p>{turn.text}</p>

              {turn.engagedNodeIds && turn.engagedNodeIds.length > 0 && (
                <div className="mt-2 pt-2 border-t border-white/10 flex flex-wrap gap-1.5">
                  {turn.engagedNodeIds.map((nid) => {
                    const node = nodeMap.get(nid);
                    if (!node) return null;
                    return (
                      <button
                        key={nid}
                        type="button"
                        onClick={() => {
                          setActiveSheet('none');
                          onInspectNode(nid);
                        }}
                        className={clsx(
                          'inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10.5px] font-semibold border transition-colors',
                          isUser
                            ? 'bg-white/15 border-white/25 text-white'
                            : isDark
                              ? 'bg-slate-950/80 border-slate-700 text-indigo-300'
                              : 'bg-indigo-50 border-indigo-200 text-indigo-700'
                        )}
                      >
                        <span
                          className={clsx(
                            'w-1.5 h-1.5 rounded-full',
                            node.kind === 'pro'
                              ? 'bg-emerald-400'
                              : node.kind === 'con'
                                ? 'bg-rose-400'
                                : 'bg-amber-400'
                          )}
                        />
                        <span className="truncate max-w-[180px]">{node.title}</span>
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
                    'mt-2 inline-flex items-center gap-1 text-[11px] font-medium hover:underline',
                    isDark ? 'text-sky-400' : 'text-sky-700'
                  )}
                >
                  <ExternalLink className="w-3 h-3 shrink-0" />
                  <span className="truncate max-w-[240px]">{turn.citedSource.title}</span>
                </a>
              )}
            </div>
          </div>
        );
      })}
      <div ref={transcriptEndRef} />
    </div>
  );

  return (
    <div
      className={clsx(
        'flex-1 flex flex-col min-h-0 overflow-hidden relative',
        isDark ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
      )}
    >
      {/* Clean Single-Row Studio Header */}
      <div
        className={clsx(
          'px-3 sm:px-5 h-12 border-b flex items-center justify-between gap-2 shrink-0',
          isDark ? 'bg-slate-950/80 border-slate-800/80' : 'bg-white/90 border-slate-200'
        )}
      >
        {/* Left: Compact Debate Mode Pill (opens Setup sheet on tap) */}
        <button
          type="button"
          onClick={() => setActiveSheet('setup')}
          className={clsx(
            'inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors min-w-0',
            isDark
              ? 'bg-slate-900 border-slate-800 text-slate-200 hover:border-slate-700'
              : 'bg-slate-100 border-slate-200 text-slate-800 hover:border-slate-300'
          )}
        >
          <SlidersHorizontal className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
          <span className="truncate">
            <span
              className={clsx(
                'font-bold',
                stance === 'pro'
                  ? 'text-emerald-400'
                  : stance === 'con'
                    ? 'text-rose-400'
                    : 'text-indigo-400'
              )}
            >
              {activeStanceShort}
            </span>
            <span className="mx-1.5 opacity-40">·</span>
            <span>{activePersonaShort}</span>
          </span>
        </button>

        {/* Right: AI Engine Pill + Scorecard */}
        <div className="flex items-center gap-1.5 shrink-0">
          <button
            type="button"
            onClick={() => setShowSettings(true)}
            className={clsx(
              'inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-bold border transition-colors',
              backendMeta.badgeColor === 'indigo'
                ? 'bg-indigo-500/15 border-indigo-400/40 text-indigo-300'
                : backendMeta.badgeColor === 'sky'
                  ? 'bg-sky-500/15 border-sky-400/40 text-sky-300'
                  : backendMeta.badgeColor === 'amber'
                    ? 'bg-amber-500/15 border-amber-400/40 text-amber-300'
                    : 'bg-emerald-500/15 border-emerald-400/40 text-emerald-300'
            )}
          >
            <Settings2 className="w-3.5 h-3.5" />
            <span>{backendMeta.shortLabel}</span>
          </button>

          {userTurnCount > 0 && (
            <button
              type="button"
              onClick={() => setShowScorecard(true)}
              aria-label="View debate debrief"
              className={clsx(
                'p-2 rounded-full border transition-colors',
                isDark
                  ? 'bg-amber-500/15 border-amber-400/35 text-amber-300'
                  : 'bg-amber-50 border-amber-200 text-amber-700'
              )}
            >
              <Trophy className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Main Content Area: Calm Centered Voice Stage on Mobile | 2-Column Studio on Desktop */}
      <div className="flex-1 min-h-0 overflow-hidden grid grid-cols-1 lg:grid-cols-12">
        {/* PRIMARY VOICE STAGE */}
        <div
          className={clsx(
            'lg:col-span-7 flex flex-col min-h-0 lg:border-r',
            isDark ? 'lg:border-slate-800/80' : 'lg:border-slate-200'
          )}
        >
          {/* Minimal Inline Visual Feedback Pulse (always visible, ultra-clean) */}
          <div className="px-4 pt-3 pb-1 shrink-0">
            <div className="max-w-md mx-auto lg:max-w-none space-y-1.5">
              <div className="flex items-center justify-between text-[11px] font-semibold">
                <span className="text-emerald-400">
                  You {userSharePct}%
                  {feedback.lastTurnDelta > 0 && (
                    <span className="ml-1 text-[10px] opacity-90">+{feedback.lastTurnDelta}</span>
                  )}
                </span>
                <span className="text-slate-400 tabular-nums">
                  {userTurnCount > 0 ? `Score ${feedback.argumentStrength}/100` : 'Balanced'}
                </span>
                <span className="text-rose-400">AI {100 - userSharePct}%</span>
              </div>
              <div className="h-1.5 w-full rounded-full overflow-hidden flex bg-slate-800/90">
                <div
                  style={{ width: `${userSharePct}%` }}
                  className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-500"
                />
                <div
                  style={{ width: `${100 - userSharePct}%` }}
                  className="h-full bg-gradient-to-r from-indigo-500 to-rose-500 transition-all duration-500"
                />
              </div>

              {/* Subtle floating rhetoric feedback chips (mobile & desktop) */}
              {userTurnCount > 0 && feedback.latestBadges.length > 0 && (
                <div className="flex items-center justify-center gap-1.5 pt-1 flex-wrap">
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
                              ? 'bg-indigo-500/15 border-indigo-400/30 text-indigo-300'
                              : 'bg-indigo-50 border-indigo-200 text-indigo-700'
                      )}
                    >
                      <Sparkles className="w-2.5 h-2.5" />
                      {badge.label}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* CENTERPIECE: Generous Voice Orb + Active Exchange */}
          <div className="flex-1 min-h-0 overflow-y-auto px-4 py-4 flex flex-col items-center justify-center gap-5">
            <VoiceVisualizerOrb
              state={orbState}
              amplitude={amplitude}
              isLiveMode={isLiveMode}
              isLiveConnected={isLiveConnected}
              isMuted={isLiveMuted}
              onPrimaryAction={handleOrbTap}
              isDark={isDark}
            />

            {/* Gemini Live Call Controls */}
            {isLiveMode && isLiveConnected && (
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    const next = !isLiveMuted;
                    setIsLiveMuted(next);
                    liveClientRef.current?.setMuted(next);
                  }}
                  className={clsx(
                    'inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold border',
                    isLiveMuted
                      ? 'bg-rose-500/20 border-rose-500/40 text-rose-300'
                      : isDark
                        ? 'bg-slate-900 border-slate-700 text-slate-200'
                        : 'bg-white border-slate-300 text-slate-700'
                  )}
                >
                  {isLiveMuted ? <MicOff className="w-3.5 h-3.5" /> : <Mic className="w-3.5 h-3.5" />}
                  <span>{isLiveMuted ? 'Unmute' : 'Mute'}</span>
                </button>
                <button
                  type="button"
                  onClick={handleStopGeminiLive}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold bg-rose-600 hover:bg-rose-500 text-white"
                >
                  <PhoneOff className="w-3.5 h-3.5" />
                  <span>End Call</span>
                </button>
              </div>
            )}

            {/* Error Alert */}
            {errorMessage && (
              <div className="w-full max-w-md px-3.5 py-2.5 rounded-2xl border border-rose-500/40 bg-rose-500/10 text-rose-300 text-xs flex items-center justify-between gap-2">
                <span>{errorMessage}</span>
                <button
                  type="button"
                  onClick={() => setShowSettings(true)}
                  className="shrink-0 underline font-semibold text-rose-200"
                >
                  Fix
                </button>
              </div>
            )}

            {/* Active Speech Focus Card (shows live caption OR latest AI response — clean & readable!) */}
            <div className="w-full max-w-md text-center space-y-2.5">
              {liveCaption ? (
                <p
                  className={clsx(
                    'text-sm sm:text-base leading-relaxed italic font-medium px-3',
                    isDark ? 'text-emerald-200' : 'text-emerald-800'
                  )}
                >
                  “{liveCaption}”
                </p>
              ) : latestTurn ? (
                <div
                  className={clsx(
                    'rounded-2xl px-4 py-3.5 border text-left transition-colors',
                    isDark
                      ? 'bg-slate-900/70 border-slate-800/90 text-slate-100'
                      : 'bg-white border-slate-200 text-slate-800 shadow-xs'
                  )}
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-[10.5px] font-bold uppercase tracking-wider text-indigo-400">
                      {latestTurn.speaker === 'ai' ? 'Dialectica AI' : 'You said'}
                    </span>
                    {latestTurn.engagedNodeIds?.[0] && nodeMap.get(latestTurn.engagedNodeIds[0]) && (
                      <button
                        type="button"
                        onClick={() => onInspectNode(latestTurn.engagedNodeIds![0])}
                        className="inline-flex items-center gap-1 text-[10.5px] font-semibold text-sky-400 hover:underline max-w-[190px] truncate"
                      >
                        <span className="truncate">
                          {nodeMap.get(latestTurn.engagedNodeIds[0])?.title}
                        </span>
                        <ArrowUpRight className="w-3 h-3 shrink-0" />
                      </button>
                    )}
                  </div>
                  <p className="text-[13.5px] sm:text-sm leading-relaxed">{latestTurn.text}</p>
                </div>
              ) : null}

              {/* Subtle One-Tap Starters (only before user's 1st turn) */}
              {userTurnCount === 0 && starterPrompts.length > 0 && !liveCaption && (
                <div className="flex flex-wrap items-center justify-center gap-1.5 pt-1">
                  {starterPrompts.map((item) => (
                    <button
                      key={item.nodeId}
                      type="button"
                      onClick={() => void submitUserArgument(item.prompt)}
                      className={clsx(
                        'px-3 py-1.5 rounded-full text-[11px] font-medium border transition-colors max-w-full truncate',
                        isDark
                          ? 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-indigo-400'
                          : 'bg-white border-slate-200 text-slate-700 hover:border-indigo-400'
                      )}
                    >
                      Try: “{item.label}”
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Expandable Text Reply Input (only visible when user taps keyboard icon) */}
          {showTextInput && (
            <form
              onSubmit={handleTextSubmit}
              className={clsx(
                'px-3 sm:px-4 py-2 border-t flex items-center gap-2 shrink-0',
                isDark ? 'bg-slate-900/95 border-slate-800' : 'bg-white border-slate-200'
              )}
            >
              <input
                type="text"
                autoFocus
                value={textDraft}
                onChange={(e) => setTextDraft(e.target.value)}
                placeholder="Type your rebuttal..."
                className={clsx(
                  'flex-1 px-3 py-2 rounded-xl text-xs sm:text-sm border focus:outline-none focus:ring-2 focus:ring-indigo-500',
                  isDark
                    ? 'bg-slate-950 border-slate-800 text-slate-100 placeholder:text-slate-500'
                    : 'bg-slate-50 border-slate-300 text-slate-900 placeholder:text-slate-400'
                )}
              />
              <button
                type="submit"
                disabled={!textDraft.trim() || orbState === 'thinking'}
                aria-label="Send argument"
                className="p-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 text-white shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}

          {/* Clean Bottom Utility Dock */}
          <div
            className={clsx(
              'px-3 sm:px-4 py-2 border-t flex items-center justify-between gap-2 shrink-0',
              isDark ? 'bg-slate-950/90 border-slate-800/80' : 'bg-white/95 border-slate-200'
            )}
          >
            <div className="flex items-center gap-1.5">
              {/* Mobile Coach & Argument Map Sheet Trigger */}
              <button
                type="button"
                onClick={() => setActiveSheet('hud')}
                className={clsx(
                  'lg:hidden inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors',
                  isDark
                    ? 'bg-slate-900 border-slate-800 text-slate-200 hover:border-indigo-400'
                    : 'bg-slate-100 border-slate-200 text-slate-800'
                )}
              >
                <Compass className="w-3.5 h-3.5 text-sky-400" />
                <span>Coach &amp; Map</span>
                {totalEngagedCount > 0 && (
                  <span className="px-1.5 py-0.2 rounded-full bg-indigo-600 text-white text-[10px] font-bold">
                    {totalEngagedCount}
                  </span>
                )}
              </button>

              {/* Transcript Sheet Trigger */}
              <button
                type="button"
                onClick={() => setActiveSheet('transcript')}
                className={clsx(
                  'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors',
                  isDark
                    ? 'bg-slate-900 border-slate-800 text-slate-200 hover:border-indigo-400'
                    : 'bg-slate-100 border-slate-200 text-slate-800'
                )}
              >
                <MessageSquare className="w-3.5 h-3.5 text-indigo-400" />
                <span>Transcript ({turns.length})</span>
              </button>
            </div>

            <div className="flex items-center gap-1.5">
              {!isLiveMode && (
                <button
                  type="button"
                  onClick={() => {
                    setTtsMuted((m) => {
                      if (!m) void speechBridge.stopSpeaking();
                      return !m;
                    });
                  }}
                  aria-label={ttsMuted ? 'Unmute AI voice' : 'Mute AI voice'}
                  className={clsx(
                    'p-2 rounded-full border transition-colors',
                    isDark
                      ? 'bg-slate-900 border-slate-800 text-slate-300'
                      : 'bg-slate-100 border-slate-200 text-slate-700'
                  )}
                >
                  {ttsMuted ? (
                    <VolumeX className="w-4 h-4 text-rose-400" />
                  ) : (
                    <Volume2 className="w-4 h-4 text-indigo-400" />
                  )}
                </button>
              )}

              <button
                type="button"
                onClick={() => setShowTextInput((v) => !v)}
                aria-label="Toggle keyboard input"
                className={clsx(
                  'p-2 rounded-full border transition-colors',
                  showTextInput
                    ? 'bg-indigo-600 border-indigo-500 text-white'
                    : isDark
                      ? 'bg-slate-900 border-slate-800 text-slate-300'
                      : 'bg-slate-100 border-slate-200 text-slate-700'
                )}
              >
                <Keyboard className="w-4 h-4" />
              </button>
            </div>
          </div>
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

      {/* SLIDE-UP BOTTOM SHEETS (Setup | Coach & Map | Transcript) */}
      {activeSheet !== 'none' && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-slate-950/70 backdrop-blur-xs"
          onClick={() => setActiveSheet('none')}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={clsx(
              'w-full max-w-lg max-h-[82vh] rounded-t-3xl sm:rounded-2xl border shadow-2xl flex flex-col overflow-hidden',
              isDark
                ? 'bg-slate-900 border-slate-700 text-slate-100'
                : 'bg-white border-slate-200 text-slate-900'
            )}
          >
            {/* Drag Handle + Header */}
            <div className="pt-2.5 pb-3 px-4 border-b border-slate-800/70 flex flex-col items-center gap-2 shrink-0">
              <span className="w-10 h-1 rounded-full bg-slate-600/60 sm:hidden" />
              <div className="w-full flex items-center justify-between">
                <h3 className="text-sm font-bold">
                  {activeSheet === 'setup'
                    ? 'Debate Setup'
                    : activeSheet === 'hud'
                      ? 'Live Coach & Argument Map'
                      : `Conversation Transcript (${turns.length})`}
                </h3>
                <button
                  type="button"
                  onClick={() => setActiveSheet('none')}
                  aria-label="Close panel"
                  className="p-1.5 rounded-full text-slate-400 hover:bg-slate-800/60"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="p-4 overflow-y-auto">
              {activeSheet === 'setup' && (
                <div className="space-y-4">
                  {/* Stance */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
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
                                  : 'bg-indigo-600 border-indigo-500 text-white'
                              : isDark
                                ? 'bg-slate-950 border-slate-800 text-slate-300'
                                : 'bg-slate-50 border-slate-200 text-slate-700'
                          )}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Opponent Persona */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
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
                              ? 'bg-indigo-600/20 border-indigo-400 text-indigo-200'
                              : isDark
                                ? 'bg-slate-950 border-slate-800 text-slate-300'
                                : 'bg-slate-50 border-slate-200 text-slate-700'
                          )}
                        >
                          {p.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Focus Pillar */}
                  {pillars.length > 0 && (
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Focus Pillar (Optional)
                      </label>
                      <select
                        value={activePillarId ?? ''}
                        onChange={(e) => onSelectPillar(e.target.value || null)}
                        className={clsx(
                          'w-full px-3 py-2.5 rounded-xl text-xs font-semibold border',
                          isDark
                            ? 'bg-slate-950 border-slate-800 text-slate-200'
                            : 'bg-slate-50 border-slate-200 text-slate-800'
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

                  {/* Quick Actions */}
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
                          ? 'bg-slate-950 border-slate-800 text-slate-200'
                          : 'bg-slate-100 border-slate-200 text-slate-800'
                      )}
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Restart Round</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveSheet('none')}
                      className="flex-1 py-2.5 rounded-xl text-xs font-bold bg-indigo-600 text-white"
                    >
                      Done
                    </button>
                  </div>
                </div>
              )}

              {activeSheet === 'hud' && (
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

              {activeSheet === 'transcript' && renderTranscriptList()}
            </div>
          </div>
        </div>
      )}

      {/* AI Engine Settings & Post-Debate Scorecard Modals */}
      <VoiceSettingsModal
        isOpen={showSettings}
        onClose={() => setShowSettings(false)}
        settings={settings}
        onSave={handleSaveSettings}
        isDark={isDark}
      />

      <DebateScorecardModal
        isOpen={showScorecard}
        onClose={() => setShowScorecard(false)}
        dataset={dataset}
        nodes={nodes}
        turns={turns}
        feedback={feedback}
        onInspectNode={onInspectNode}
        onRematchSwitchSides={handleRematchSwitchSides}
        onNewRound={() => resetSession()}
        isDark={isDark}
      />
    </div>
  );
}
