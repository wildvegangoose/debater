import { FormEvent, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import clsx from 'clsx';
import {
  ArrowUpRight,
  ExternalLink,
  MessageSquare,
  Mic,
  MicOff,
  PhoneOff,
  RotateCcw,
  Send,
  Settings2,
  Sparkles,
  Trophy,
  Volume2,
  VolumeX,
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

const PERSONA_OPTIONS: Array<{ id: DebateOpponentPersona; label: string }> = [
  { id: 'sparring', label: 'Conversational Partner' },
  { id: 'oxford', label: 'Oxford Challenger' },
  { id: 'socratic', label: 'Socratic Prober' },
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
        detail: `Pick a stance on ${dataset.shortTitle} and tap the mic to deliver your opening take.`,
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
  const [ttsMuted, setTtsMuted] = useState(false);

  // Mobile toggle between Visual HUD and Transcript
  const [mobilePanel, setMobilePanel] = useState<'hud' | 'transcript'>('hud');

  // Modals
  const [showSettings, setShowSettings] = useState(false);
  const [showScorecard, setShowScorecard] = useState(false);

  // Gemini Live connection state
  const [isLiveConnected, setIsLiveConnected] = useState(false);
  const [isLiveMuted, setIsLiveMuted] = useState(false);
  const liveClientRef = useRef<GeminiLiveDebateClient | null>(null);

  // Keep latest state accessible in async speech callbacks
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

  // Generate 3 clickable conversation starters from the current topic
  const starterPrompts = useMemo(() => {
    const scoped = getScopedDebateNodes(nodes, activePillarId);
    const preferredKind = stance === 'con' ? 'con' : 'pro';
    const candidates = [
      ...scoped.filter((n) => n.kind === preferredKind),
      ...scoped.filter((n) => n.kind === 'thesis'),
    ].slice(0, 3);

    return candidates.map((n) => ({
      nodeId: n.id,
      label: n.title,
      prompt: `I want to argue that ${n.title.toLowerCase()}. ${n.summary.split('.')[0]}.`,
    }));
  }, [nodes, activePillarId, stance]);

  // Reset debate session when topic changes
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

  // Initialize opening prompt whenever dataset changes
  useEffect(() => {
    resetSession();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataset.id]);

  // Clean up audio & WebSocket on unmount
  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
      liveClientRef.current?.disconnect();
      void speechBridge.stopListening();
      void speechBridge.stopSpeaking();
    };
  }, []);

  // Auto-scroll transcript
  useEffect(() => {
    transcriptEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [turns.length, liveCaption]);

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
      .catch(() => {
        // Ignore if battery saver or browser denies wake lock
      });

    return () => {
      cancelled = true;
      sentinel?.release().catch(() => {});
    };
  }, [isLiveConnected, orbState]);

  // Apply structured response to visual HUD & transcript
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
        // Attach userEngagedNodeIds to the latest user turn if present
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

  // Start Turn-Based Listening (Android native SpeechRecognizer or Web Speech API)
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

  // Submit a user argument to Gemini Flash / Local LLM / Offline engine
  const submitUserArgument = useCallback(
    async (rawText: string) => {
      const clean = rawText.trim();
      if (!clean) return;
      setErrorMessage(null);

      // If Gemini Live is connected, send text directly into the live audio session
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
        const userTurnCount = historySnapshot.filter((t) => t.speaker === 'user').length + 1;

        if (activeSettings.backend === 'gemini-flash') {
          if (!activeSettings.geminiApiKey.trim()) {
            throw new Error('Add your free Gemini API key in Voice Settings, or switch to Offline Curated mode.');
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
          // Slight natural conversational pause in offline mode so rhythm feels organic
          await new Promise((r) => setTimeout(r, 320));
          response = generateOfflineDebateReply({
            dataset,
            nodes,
            pillarId: activePillarId,
            stance,
            persona,
            userText: clean,
            usedNodeIds: usedIds,
            userTurnCount,
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

  // Connect / Disconnect Gemini Live Voice Call
  const handleStartGeminiLive = useCallback(async () => {
    if (!settings.geminiApiKey.trim()) {
      setShowSettings(true);
      setErrorMessage('Add your free Gemini API key to start a Gemini Live real-time voice call.');
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

  // Primary Orb Tap Handler
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

  return (
    <div
      className={clsx(
        'flex-1 flex flex-col min-h-0 overflow-hidden',
        isDark ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
      )}
    >
      {/* Top Arena Control Strip */}
      <div
        className={clsx(
          'px-3 sm:px-5 py-2.5 border-b flex flex-wrap items-center justify-between gap-2 shrink-0',
          isDark ? 'bg-slate-900/75 border-slate-800' : 'bg-white border-slate-200'
        )}
      >
        {/* Left: Stance & Persona Quick Pickers */}
        <div className="flex flex-wrap items-center gap-2 min-w-0">
          {/* Stance pills */}
          <div
            className={clsx(
              'inline-flex items-center p-0.5 rounded-xl border',
              isDark ? 'bg-slate-950 border-slate-800' : 'bg-slate-100 border-slate-200'
            )}
          >
            {STANCE_OPTIONS.map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => {
                  setStance(opt.id);
                  if (turns.length <= 1) resetSession(opt.id);
                }}
                className={clsx(
                  'px-2.5 py-1 rounded-lg text-[11px] font-bold transition-colors',
                  stance === opt.id
                    ? opt.id === 'pro'
                      ? 'bg-emerald-600 text-white'
                      : opt.id === 'con'
                        ? 'bg-rose-600 text-white'
                        : 'bg-indigo-600 text-white'
                    : isDark
                      ? 'text-slate-400 hover:text-slate-200'
                      : 'text-slate-600 hover:text-slate-900'
                )}
              >
                <span className="hidden sm:inline">{opt.label}</span>
                <span className="sm:hidden">{opt.short}</span>
              </button>
            ))}
          </div>

          {/* Persona Selector */}
          <select
            aria-label="Opponent Persona"
            value={persona}
            onChange={(e) => setPersona(e.target.value as DebateOpponentPersona)}
            className={clsx(
              'px-2.5 py-1.5 rounded-xl text-[11px] font-semibold border focus:outline-none focus:ring-2 focus:ring-indigo-500',
              isDark
                ? 'bg-slate-950 border-slate-800 text-slate-200'
                : 'bg-white border-slate-200 text-slate-800'
            )}
          >
            {PERSONA_OPTIONS.map((p) => (
              <option key={p.id} value={p.id}>
                {p.label}
              </option>
            ))}
          </select>

          {/* Optional Pillar Focus */}
          {pillars.length > 0 && (
            <select
              aria-label="Focus Pillar"
              value={activePillarId ?? ''}
              onChange={(e) => onSelectPillar(e.target.value || null)}
              className={clsx(
                'hidden md:block px-2.5 py-1.5 rounded-xl text-[11px] font-semibold border max-w-[190px] truncate focus:outline-none focus:ring-2 focus:ring-indigo-500',
                isDark
                  ? 'bg-slate-950 border-slate-800 text-slate-200'
                  : 'bg-white border-slate-200 text-slate-800'
              )}
            >
              <option value="">All Pillars ({pillars.length})</option>
              {pillars.map((p) => (
                <option key={p.id} value={p.id}>
                  {dataset.shortPillarLabels[p.id] ?? p.title}
                </option>
              ))}
            </select>
          )}
        </div>

        {/* Right: AI Engine Badge + Mute + Debrief + Reset */}
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => setShowSettings(true)}
            className={clsx(
              'inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-bold border transition-colors',
              backendMeta.badgeColor === 'indigo'
                ? 'bg-indigo-500/15 border-indigo-400/40 text-indigo-300 hover:bg-indigo-500/25'
                : backendMeta.badgeColor === 'sky'
                  ? 'bg-sky-500/15 border-sky-400/40 text-sky-300 hover:bg-sky-500/25'
                  : backendMeta.badgeColor === 'amber'
                    ? 'bg-amber-500/15 border-amber-400/40 text-amber-300 hover:bg-amber-500/25'
                    : 'bg-emerald-500/15 border-emerald-400/40 text-emerald-300 hover:bg-emerald-500/25'
            )}
          >
            <Settings2 className="w-3.5 h-3.5" />
            <span>{backendMeta.shortLabel}</span>
          </button>

          {!isLiveMode && (
            <button
              type="button"
              onClick={() => {
                setTtsMuted((m) => {
                  if (!m) void speechBridge.stopSpeaking();
                  return !m;
                });
              }}
              title={ttsMuted ? 'Unmute AI Voice' : 'Mute AI Voice'}
              className={clsx(
                'p-1.5 rounded-xl border transition-colors',
                isDark
                  ? 'bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-800'
                  : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
              )}
            >
              {ttsMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4 text-indigo-400" />}
            </button>
          )}

          <button
            type="button"
            onClick={() => setShowScorecard(true)}
            disabled={turns.filter((t) => t.speaker === 'user').length === 0}
            className={clsx(
              'inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-semibold border transition-colors disabled:opacity-40',
              isDark
                ? 'bg-amber-500/15 border-amber-400/35 text-amber-300 hover:bg-amber-500/25'
                : 'bg-amber-50 border-amber-200 text-amber-800 hover:bg-amber-100'
            )}
          >
            <Trophy className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Debrief</span>
          </button>

          <button
            type="button"
            onClick={() => resetSession()}
            title="Restart Debate Round"
            className={clsx(
              'p-1.5 rounded-xl border transition-colors',
              isDark
                ? 'bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-800'
                : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
            )}
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Split Studio: Left = Voice Orb + Conversation | Right = Visual Feedback HUD */}
      <div className="flex-1 min-h-0 overflow-y-auto lg:overflow-hidden grid grid-cols-1 lg:grid-cols-12">
        {/* LEFT COLUMN: Voice Orb + Live Captions + Transcript + Controls */}
        <div
          className={clsx(
            'lg:col-span-7 flex flex-col min-h-0 lg:border-r',
            isDark ? 'lg:border-slate-800/80' : 'lg:border-slate-200'
          )}
        >
          {/* Voice Orb Stage */}
          <div
            className={clsx(
              'px-4 py-4 sm:py-5 border-b flex flex-col items-center gap-3 shrink-0 relative',
              isDark
                ? 'bg-gradient-to-b from-indigo-950/35 via-slate-950 to-slate-950 border-slate-800/80'
                : 'bg-gradient-to-b from-indigo-50/70 via-white to-white border-slate-200'
            )}
          >
            {/* Optional Gemini Upsell Pill when in Offline Mode */}
            {settings.backend === 'offline-curated' && (
              <button
                type="button"
                onClick={() => setShowSettings(true)}
                className={clsx(
                  'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold border transition-colors',
                  isDark
                    ? 'bg-indigo-500/10 border-indigo-400/30 text-indigo-300 hover:bg-indigo-500/20'
                    : 'bg-indigo-50 border-indigo-200 text-indigo-700 hover:bg-indigo-100'
                )}
              >
                <Sparkles className="w-3 h-3" />
                <span>Offline Curated Mode active • Connect Gemini or Local AI</span>
              </button>
            )}

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
                    'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border',
                    isLiveMuted
                      ? 'bg-rose-500/20 border-rose-500/40 text-rose-300'
                      : isDark
                        ? 'bg-slate-900 border-slate-700 text-slate-200'
                        : 'bg-white border-slate-300 text-slate-700'
                  )}
                >
                  {isLiveMuted ? <MicOff className="w-3.5 h-3.5" /> : <Mic className="w-3.5 h-3.5" />}
                  <span>{isLiveMuted ? 'Unmute Mic' : 'Mute Mic'}</span>
                </button>
                <button
                  type="button"
                  onClick={handleStopGeminiLive}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-rose-600 hover:bg-rose-500 text-white"
                >
                  <PhoneOff className="w-3.5 h-3.5" />
                  <span>End Live Call</span>
                </button>
              </div>
            )}

            {/* Live Interim Caption Strip */}
            {liveCaption && (
              <div
                className={clsx(
                  'w-full max-w-lg px-3.5 py-2 rounded-xl border text-xs text-center italic',
                  isDark
                    ? 'bg-slate-900/90 border-emerald-500/35 text-emerald-200'
                    : 'bg-emerald-50 border-emerald-200 text-emerald-900'
                )}
              >
                “{liveCaption}”
              </div>
            )}

            {/* Error Alert */}
            {errorMessage && (
              <div className="w-full max-w-lg px-3 py-2 rounded-xl border border-rose-500/40 bg-rose-500/10 text-rose-300 text-xs flex items-center justify-between gap-2">
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
          </div>

          {/* Mobile Panel Switcher (Visual HUD vs Conversation Transcript) */}
          <div
            className={clsx(
              'lg:hidden px-3 py-2 border-b flex items-center gap-2 shrink-0',
              isDark ? 'bg-slate-900/70 border-slate-800' : 'bg-white border-slate-200'
            )}
          >
            <button
              type="button"
              onClick={() => setMobilePanel('hud')}
              className={clsx(
                'flex-1 py-1.5 rounded-xl text-xs font-bold transition-colors',
                mobilePanel === 'hud'
                  ? 'bg-indigo-600 text-white'
                  : isDark
                    ? 'bg-slate-800 text-slate-400'
                    : 'bg-slate-100 text-slate-600'
              )}
            >
              Visual Feedback HUD
            </button>
            <button
              type="button"
              onClick={() => setMobilePanel('transcript')}
              className={clsx(
                'flex-1 py-1.5 rounded-xl text-xs font-bold transition-colors inline-flex items-center justify-center gap-1.5',
                mobilePanel === 'transcript'
                  ? 'bg-indigo-600 text-white'
                  : isDark
                    ? 'bg-slate-800 text-slate-400'
                    : 'bg-slate-100 text-slate-600'
              )}
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Transcript ({turns.length})</span>
            </button>
          </div>

          {/* Mobile Visual HUD Slot */}
          <div className={clsx('lg:hidden p-3', mobilePanel !== 'hud' && 'hidden')}>
            <LiveDebateHud
              feedback={feedback}
              nodes={nodes}
              activePillarId={activePillarId}
              onInspectNode={onInspectNode}
              onSwitchToGraph={onSwitchToGraph}
              isDark={isDark}
            />
          </div>

          {/* Conversational Transcript Feed */}
          <div
            className={clsx(
              'flex-1 min-h-[240px] lg:min-h-0 overflow-y-auto px-3 sm:px-5 py-4 space-y-3',
              mobilePanel === 'hud' ? 'hidden lg:block' : 'block'
            )}
          >
            {turns.map((turn) => {
              const isUser = turn.speaker === 'user';
              return (
                <div
                  key={turn.id}
                  className={clsx('flex flex-col gap-1', isUser ? 'items-end' : 'items-start')}
                >
                  <div className="flex items-center gap-2 text-[10.5px] font-semibold text-slate-400 px-1">
                    <span>{isUser ? 'You' : 'Dialectica AI'}</span>
                    <span>•</span>
                    <span>{turn.timestamp}</span>
                    {!isUser && typeof turn.argumentStrength === 'number' && (
                      <span className="text-emerald-400 font-bold">
                        Your Turn: {turn.argumentStrength}/100
                      </span>
                    )}
                  </div>

                  <div
                    className={clsx(
                      'max-w-[92%] sm:max-w-[84%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed border',
                      isUser
                        ? 'bg-indigo-600 border-indigo-500 text-white rounded-br-sm'
                        : isDark
                          ? 'bg-slate-900 border-slate-800 text-slate-100 rounded-bl-sm'
                          : 'bg-white border-slate-200 text-slate-800 rounded-bl-sm shadow-xs'
                    )}
                  >
                    <p>{turn.text}</p>

                    {/* Engaged Curated Nodes */}
                    {turn.engagedNodeIds && turn.engagedNodeIds.length > 0 && (
                      <div className="mt-2 pt-2 border-t border-white/10 flex flex-wrap gap-1.5">
                        {turn.engagedNodeIds.map((nid) => {
                          const node = nodeMap.get(nid);
                          if (!node) return null;
                          return (
                            <button
                              key={nid}
                              type="button"
                              onClick={() => onInspectNode(nid)}
                              className={clsx(
                                'inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10.5px] font-semibold border transition-colors',
                                isUser
                                  ? 'bg-white/15 border-white/25 text-white hover:bg-white/25'
                                  : isDark
                                    ? 'bg-slate-950/80 border-slate-700 text-indigo-300 hover:border-indigo-400'
                                    : 'bg-indigo-50 border-indigo-200 text-indigo-700 hover:bg-indigo-100'
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

                    {/* Primary Source Citation Link */}
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
                        <span className="truncate max-w-[260px]">
                          Source: {turn.citedSource.title}
                        </span>
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
            <div ref={transcriptEndRef} />
          </div>

          {/* Starter Prompt Chips (only before user's first turn) */}
          {turns.filter((t) => t.speaker === 'user').length === 0 && starterPrompts.length > 0 && (
            <div
              className={clsx(
                'px-3 sm:px-5 py-2 border-t flex items-center gap-1.5 overflow-x-auto no-scrollbar shrink-0',
                isDark ? 'border-slate-800/70 bg-slate-950/60' : 'border-slate-200 bg-slate-50'
              )}
            >
              <span className="text-[10.5px] font-bold uppercase tracking-wider text-slate-400 shrink-0 mr-1">
                Try saying:
              </span>
              {starterPrompts.map((item) => (
                <button
                  key={item.nodeId}
                  type="button"
                  onClick={() => void submitUserArgument(item.prompt)}
                  className={clsx(
                    'px-2.5 py-1 rounded-full text-[11px] font-semibold border shrink-0 transition-colors',
                    isDark
                      ? 'bg-slate-900 border-slate-700 text-slate-200 hover:border-indigo-400'
                      : 'bg-white border-slate-300 text-slate-700 hover:border-indigo-400'
                  )}
                >
                  “{item.label}”
                </button>
              ))}
            </div>
          )}

          {/* Fallback Text Input Bar (great for quiet places or quick edits) */}
          <form
            onSubmit={handleTextSubmit}
            className={clsx(
              'px-3 sm:px-4 py-2.5 border-t flex items-center gap-2 shrink-0',
              isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200'
            )}
          >
            <input
              type="text"
              value={textDraft}
              onChange={(e) => setTextDraft(e.target.value)}
              placeholder="Or type a rebuttal if you can't speak right now..."
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
              className="p-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 text-white transition-colors shrink-0"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>

        {/* RIGHT COLUMN (Desktop): Real-Time Visual Feedback HUD */}
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

      {/* Settings & Post-Debate Scorecard Modals */}
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
