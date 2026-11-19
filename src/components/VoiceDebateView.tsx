import { FormEvent, KeyboardEvent, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import clsx from 'clsx';
import {
  ArrowUpRight,
  Compass,
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
  DebateOpponentPersona,
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
import { getScopedDebateNodes } from '../services/voiceDebate/debateContextBuilder';
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

  const [isThinking, setIsThinking] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [draftText, setDraftText] = useState('');

  // Slide-up sheets on mobile for Setup and Live Coach & Map
  const [activeSheet, setActiveSheet] = useState<'none' | 'setup' | 'hud'>('none');
  const [showSettings, setShowSettings] = useState(false);
  const [showScorecard, setShowScorecard] = useState(false);

  const turnsRef = useRef(turns);
  turnsRef.current = turns;
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
  }, [turns.length, isThinking]);

  const applyStructuredTurnResponse = useCallback(
    (response: StructuredDebateResponse) => {
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

  const submitUserArgument = useCallback(
    async (rawText: string) => {
      const clean = rawText.trim();
      if (!clean || isThinking) return;
      setErrorMessage(null);

      const userTurn: VoiceDebateTurn = {
        id: `user-${Date.now()}`,
        speaker: 'user',
        text: clean,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      const historySnapshot = turnsRef.current;
      setTurns((prev) => [...prev, userTurn]);
      setIsThinking(true);

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
            throw new Error('Add your free Gemini API key in AI Settings, or switch to Offline mode.');
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
        applyStructuredTurnResponse(response);
      } catch (err) {
        if (!mountedRef.current) return;
        const msg = err instanceof Error ? err.message : String(err);
        setErrorMessage(msg);
      } finally {
        if (mountedRef.current) {
          setIsThinking(false);
        }
      }
    },
    [
      isThinking,
      feedback.engagedByAiIds,
      feedback.engagedByUserIds,
      dataset,
      nodes,
      activePillarId,
      stance,
      persona,
      applyStructuredTurnResponse,
    ]
  );

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!draftText.trim() || isThinking) return;
    const msg = draftText.trim();
    setDraftText('');
    void submitUserArgument(msg);
  };

  const handleTextareaKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    // Desktop convenience: Enter sends, Shift+Enter inserts newline
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

  const activeStanceShort = STANCE_OPTIONS.find((s) => s.id === stance)?.short ?? 'Pro';
  const activePersonaShort = PERSONA_OPTIONS.find((p) => p.id === persona)?.short ?? 'Partner';

  return (
    <div
      className={clsx(
        'flex-1 flex flex-col min-h-0 overflow-hidden relative',
        isDark ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
      )}
    >
      {/* Compact Single-Row Control Header */}
      <div
        className={clsx(
          'px-3 sm:px-5 h-12 border-b flex items-center justify-between gap-2 shrink-0',
          isDark ? 'bg-slate-950/85 border-slate-800/80' : 'bg-white/95 border-slate-200'
        )}
      >
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

        <div className="flex items-center gap-1.5 shrink-0">
          {/* Mobile Coach & Argument Map pill */}
          <button
            type="button"
            onClick={() => setActiveSheet('hud')}
            className={clsx(
              'lg:hidden inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full text-xs font-semibold border transition-colors',
              isDark
                ? 'bg-slate-900 border-slate-800 text-slate-200'
                : 'bg-slate-100 border-slate-200 text-slate-800'
            )}
          >
            <Compass className="w-3.5 h-3.5 text-sky-400" />
            <span>Map</span>
            {totalEngagedCount > 0 && (
              <span className="px-1.5 rounded-full bg-indigo-600 text-white text-[10px] font-bold">
                {totalEngagedCount}
              </span>
            )}
          </button>

          <button
            type="button"
            onClick={() => setShowSettings(true)}
            className={clsx(
              'inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-bold border transition-colors',
              backendMeta.badgeColor === 'sky'
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

      {/* Main Layout: Clean Chat + Live Visual Feedback on Mobile | 2-Column on Desktop */}
      <div className="flex-1 min-h-0 overflow-hidden grid grid-cols-1 lg:grid-cols-12">
        {/* CONVERSATIONAL DEBATE COLUMN */}
        <div
          className={clsx(
            'lg:col-span-7 flex flex-col min-h-0 lg:border-r',
            isDark ? 'lg:border-slate-800/80' : 'lg:border-slate-200'
          )}
        >
          {/* Slim Live Visual Feedback Pulse (Momentum + Score + Rhetoric Chips) */}
          <div
            className={clsx(
              'px-4 py-2.5 border-b shrink-0 space-y-1.5',
              isDark ? 'bg-slate-900/40 border-slate-800/70' : 'bg-white border-slate-200/80'
            )}
          >
            <div className="flex items-center justify-between text-[11px] font-semibold">
              <span className="text-emerald-400">
                You {userSharePct}%
                {feedback.lastTurnDelta > 0 && (
                  <span className="ml-1 text-[10px] opacity-90">+{feedback.lastTurnDelta}</span>
                )}
              </span>
              <span className="text-slate-400 tabular-nums">
                {userTurnCount > 0 ? `Last Turn: ${feedback.argumentStrength}/100` : 'Debate Momentum'}
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

            {userTurnCount > 0 && feedback.latestBadges.length > 0 && (
              <div className="flex items-center gap-1.5 pt-0.5 flex-wrap">
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

          {/* Scrollable Conversational Debate Feed */}
          <div className="flex-1 min-h-0 overflow-y-auto px-3.5 sm:px-5 py-4 space-y-3.5">
            {turns.map((turn, idx) => {
              const isUser = turn.speaker === 'user';
              const isLatestAi = !isUser && idx === turns.length - 1;
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
                        Your Turn: {turn.argumentStrength}/100
                      </span>
                    )}
                  </div>

                  <div
                    className={clsx(
                      'max-w-[92%] sm:max-w-[85%] rounded-2xl px-4 py-3 text-[14px] leading-relaxed border',
                      isUser
                        ? 'bg-indigo-600 border-indigo-500 text-white rounded-br-sm'
                        : isDark
                          ? 'bg-slate-900 border-slate-800 text-slate-100 rounded-bl-sm'
                          : 'bg-white border-slate-200 text-slate-800 rounded-bl-sm shadow-xs'
                    )}
                  >
                    <p>{turn.text}</p>

                    {/* Engaged Curated Argument Nodes */}
                    {turn.engagedNodeIds && turn.engagedNodeIds.length > 0 && (
                      <div className="mt-2.5 pt-2 border-t border-white/10 flex flex-wrap gap-1.5">
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
                                  ? 'bg-white/15 border-white/25 text-white hover:bg-white/25'
                                  : isDark
                                    ? 'bg-slate-950/80 border-slate-700 text-indigo-300 hover:border-indigo-400'
                                    : 'bg-indigo-50 border-indigo-200 text-indigo-700 hover:bg-indigo-100'
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
                          isDark ? 'text-sky-400' : 'text-sky-700'
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
                      onClick={() => setActiveSheet('hud')}
                      className={clsx(
                        'lg:hidden mt-1 max-w-[92%] text-left px-3 py-2 rounded-xl border text-[11.5px] flex items-start gap-2',
                        isDark
                          ? 'bg-indigo-950/35 border-indigo-500/25 text-indigo-200'
                          : 'bg-indigo-50 border-indigo-200 text-indigo-900'
                      )}
                    >
                      <Lightbulb className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span className="line-clamp-2">{turn.coachingTip}</span>
                    </button>
                  )}
                </div>
              );
            })}

            {/* Clean non-blocking Thinking indicator */}
            {isThinking && (
              <div className="flex items-start">
                <div
                  className={clsx(
                    'inline-flex items-center gap-2 px-3.5 py-2.5 rounded-2xl rounded-bl-sm border text-xs font-medium',
                    isDark
                      ? 'bg-slate-900 border-slate-800 text-slate-300'
                      : 'bg-white border-slate-200 text-slate-600'
                  )}
                >
                  <Loader2 className="w-3.5 h-3.5 text-indigo-400 animate-spin" />
                  <span>Crafting rebuttal...</span>
                </div>
              </div>
            )}

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
                      ? 'bg-slate-900 border-slate-800 text-slate-300 hover:border-indigo-400'
                      : 'bg-white border-slate-200 text-slate-700 hover:border-indigo-400'
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
              isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200'
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
                  'flex-1 min-h-[78px] max-h-[150px] resize-none px-3.5 py-2.5 rounded-2xl text-[14px] leading-snug border focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors',
                  isDark
                    ? 'bg-slate-950 border-slate-700/90 text-slate-100 placeholder:text-slate-500'
                    : 'bg-slate-50 border-slate-300 text-slate-900 placeholder:text-slate-400'
                )}
              />
              <button
                type="submit"
                disabled={!draftText.trim() || isThinking}
                aria-label="Send argument"
                className="h-12 w-12 rounded-2xl bg-indigo-600 hover:bg-indigo-500 active:scale-95 disabled:opacity-40 text-white flex items-center justify-center shadow-md shadow-indigo-500/20 transition-all shrink-0"
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
            <div className="pt-2.5 pb-3 px-4 border-b border-slate-800/70 flex flex-col items-center gap-2 shrink-0">
              <span className="w-10 h-1 rounded-full bg-slate-600/60 sm:hidden" />
              <div className="w-full flex items-center justify-between">
                <h3 className="text-sm font-bold">
                  {activeSheet === 'setup' ? 'Debate Setup' : 'Live Coach & Argument Map'}
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

            <div className="p-4 overflow-y-auto pb-[max(1rem,env(safe-area-inset-bottom))]">
              {activeSheet === 'setup' ? (
                <div className="space-y-4">
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
