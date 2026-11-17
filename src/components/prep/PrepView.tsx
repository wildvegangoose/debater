import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import clsx from 'clsx';
import {
  ArrowLeft,
  ArrowRight,
  FileSearch,
  Flame,
  KeyRound,
  Loader2,
  MessagesSquare,
  Mic,
  RotateCcw,
  Send,
  Shield,
  Shuffle,
  SkipForward,
  Swords,
  Target,
  Timer,
  Trophy,
} from 'lucide-react';
import { DebateGraphDataset, DebateNode } from '../../types/debate';
import { DebateSide, GradeResult, PrepAttempt, PrepMode, PrepQuestion, PrepSettings } from '../../prep/types';
import { buildCrossExFollowUp, buildQuestionBank, MODE_META, pickSessionQuestions, SessionMode } from '../../prep/questionBank';
import { gradeAnswer } from '../../prep/lazyGrader';
import { GraderError, selfGrade } from '../../prep/gradeUtils';
import { computeStats, loadHistory, loadSettings, MODEL_OPTIONS, saveHistory, saveSettings } from '../../prep/storage';
import { GradeReport, ScoreRing, scoreTone } from './GradeReport';
import { PrepSettingsModal } from './PrepSettingsModal';
import { APP_BACK_EVENT } from '../../native';

const CROSSEX_ROUNDS = 3;

const MODE_ICONS: Record<SessionMode, React.ComponentType<{ className?: string }>> = {
  mixed: Shuffle,
  rebuttal: Swords,
  steelman: Flame,
  defend: Shield,
  crossex: MessagesSquare,
  evidence: FileSearch,
  opening: Mic,
};

const SESSION_MODES: SessionMode[] = ['mixed', 'rebuttal', 'steelman', 'defend', 'crossex', 'evidence', 'opening'];

type Phase = 'home' | 'answer' | 'grading' | 'selfgrade' | 'result' | 'summary' | 'review';

interface Session {
  mode: SessionMode;
  queue: PrepQuestion[];
  index: number;
  attempts: PrepAttempt[];
  timed: boolean;
}

interface PrepViewProps {
  dataset: DebateGraphDataset;
  nodes: DebateNode[];
  activePillarId: string | null;
  onSelectPillar: (pillarId: string | null) => void;
  onSwitchToGraph: (nodeId?: string) => void;
  isDark: boolean;
}

function newId(): string {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

function formatClock(totalSeconds: number): string {
  const s = Math.abs(totalSeconds);
  return `${totalSeconds < 0 ? '+' : ''}${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
}

export function PrepView({ dataset, nodes, activePillarId, onSelectPillar, onSwitchToGraph, isDark }: PrepViewProps) {
  const [settings, setSettings] = useState<PrepSettings>(() => loadSettings());
  const [history, setHistory] = useState<PrepAttempt[]>(() => loadHistory());
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const [phase, setPhase] = useState<Phase>('home');
  const [session, setSession] = useState<Session | null>(null);
  const [reviewAttempt, setReviewAttempt] = useState<PrepAttempt | null>(null);

  // Session options
  const [sideFilter, setSideFilter] = useState<DebateSide | 'any'>('any');
  const [sessionLength, setSessionLength] = useState(5);
  const [timed, setTimed] = useState(true);

  // Current answer state
  const [answer, setAnswer] = useState('');
  const [startedAt, setStartedAt] = useState<number>(Date.now());
  const [now, setNow] = useState<number>(Date.now());
  const [secondsTaken, setSecondsTaken] = useState(0);
  const [gradeError, setGradeError] = useState<GraderError | null>(null);
  const [lastGrade, setLastGrade] = useState<GradeResult | null>(null);
  const abortRef = useRef<AbortController | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const bank = useMemo(() => buildQuestionBank(dataset, nodes), [dataset, nodes]);
  const stats = useMemo(() => computeStats(history, dataset.id), [history, dataset.id]);
  const pillars = useMemo(() => nodes.filter((n) => n.kind === 'pillar'), [nodes]);
  const recent = useMemo(
    () => history.filter((a) => a.question.topicId === dataset.id).slice(-6).reverse(),
    [history, dataset.id]
  );
  const hasKey = settings.apiKey.trim().length > 0;
  const modelLabel = MODEL_OPTIONS.find((m) => m.id === settings.model)?.label ?? settings.model;

  const current = session ? session.queue[session.index] : undefined;

  // Reset to home when the topic changes.
  useEffect(() => {
    abortRef.current?.abort();
    setPhase('home');
    setSession(null);
  }, [dataset.id]);

  // Tick the timer while answering.
  useEffect(() => {
    if (phase !== 'answer') return;
    const id = window.setInterval(() => setNow(Date.now()), 500);
    return () => window.clearInterval(id);
  }, [phase]);

  useEffect(() => () => abortRef.current?.abort(), []);

  // Android hardware back: close settings, step out of review, or end the session.
  useEffect(() => {
    const onBack = (e: Event) => {
      if (isSettingsOpen) {
        setIsSettingsOpen(false);
      } else if (phase === 'review') {
        setPhase(session && session.attempts.some((a) => a.id === reviewAttempt?.id) ? 'summary' : 'home');
      } else if (phase !== 'home') {
        abortRef.current?.abort();
        setPhase('home');
        setSession(null);
      } else {
        return;
      }
      e.preventDefault();
    };
    window.addEventListener(APP_BACK_EVENT, onBack);
    return () => window.removeEventListener(APP_BACK_EVENT, onBack);
  }, [isSettingsOpen, phase, session, reviewAttempt]);

  const beginQuestion = useCallback(() => {
    setAnswer('');
    setGradeError(null);
    setLastGrade(null);
    setStartedAt(Date.now());
    setNow(Date.now());
    setPhase('answer');
    window.setTimeout(() => textareaRef.current?.focus(), 50);
  }, []);

  const startSession = useCallback(
    (mode: SessionMode, opts: { weakOnly?: boolean } = {}) => {
      const priorityIds = stats.weakQuestionIds;
      let pool = bank;
      if (opts.weakOnly) {
        pool = bank.filter((q) => priorityIds.has(q.id));
      }
      const count = mode === 'crossex' ? Math.max(1, Math.round(sessionLength / 2)) : sessionLength;
      const queue = pickSessionQuestions({
        bank: pool,
        mode: opts.weakOnly ? 'mixed' : mode,
        count,
        pillarId: activePillarId,
        side: sideFilter,
        priorityIds,
      });
      if (queue.length === 0) return;
      setSession({ mode, queue, index: 0, attempts: [], timed });
      beginQuestion();
    },
    [bank, stats.weakQuestionIds, sessionLength, activePillarId, sideFilter, timed, beginQuestion]
  );

  const recordAttempt = useCallback(
    (grade: GradeResult, taken: number) => {
      if (!current) return;
      const attempt: PrepAttempt = {
        id: newId(),
        createdAt: new Date().toISOString(),
        question: current,
        answer,
        secondsTaken: taken,
        grade,
      };
      setHistory((prev) => saveHistory([...prev, attempt]));
      setSession((s) => (s ? { ...s, attempts: [...s.attempts, attempt] } : s));
      setLastGrade(grade);
      setPhase('result');
    },
    [current, answer]
  );

  const runGrading = useCallback(
    async (taken: number) => {
      if (!current || !session) return;
      setPhase('grading');
      setGradeError(null);
      abortRef.current?.abort();
      const controller = new AbortController();
      abortRef.current = controller;
      try {
        const grade = await gradeAnswer({
          settings,
          question: current,
          answer,
          secondsTaken: taken,
          timerSeconds: session.timed ? current.suggestedSeconds : null,
          signal: controller.signal,
        });
        if (!controller.signal.aborted) recordAttempt(grade, taken);
      } catch (err) {
        if (controller.signal.aborted) return;
        setGradeError(err instanceof GraderError ? err : new GraderError(String(err), 'other'));
      }
    },
    [current, session, settings, answer, recordAttempt]
  );

  const handleSubmit = useCallback(() => {
    if (!answer.trim()) return;
    const taken = Math.round((Date.now() - startedAt) / 1000);
    setSecondsTaken(taken);
    if (hasKey) {
      runGrading(taken);
    } else {
      setPhase('selfgrade');
    }
  }, [answer, startedAt, hasKey, runGrading]);

  const goNext = useCallback(
    (opts: { followUp?: boolean } = {}) => {
      if (!session || !current) return;
      const queue = [...session.queue];
      const wantsFollowUp =
        opts.followUp ||
        (session.mode === 'crossex' && (current.crossExRound ?? 0) < CROSSEX_ROUNDS && Boolean(lastGrade?.followUpQuestion));
      if (wantsFollowUp && lastGrade?.followUpQuestion) {
        queue.splice(session.index + 1, 0, buildCrossExFollowUp(current, answer, lastGrade.followUpQuestion));
      }
      if (session.index + 1 >= queue.length) {
        setSession({ ...session, queue });
        setPhase('summary');
        return;
      }
      setSession({ ...session, queue, index: session.index + 1 });
      beginQuestion();
    },
    [session, current, lastGrade, answer, beginQuestion]
  );

  const handleSkip = useCallback(() => {
    if (!session) return;
    if (session.index + 1 >= session.queue.length) {
      setPhase(session.attempts.length ? 'summary' : 'home');
      return;
    }
    setSession({ ...session, index: session.index + 1 });
    beginQuestion();
  }, [session, beginQuestion]);

  const exitToHome = useCallback(() => {
    abortRef.current?.abort();
    setPhase('home');
    setSession(null);
  }, []);

  // ---------- styling helpers ----------
  const card = clsx('rounded-2xl border', isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200');
  const muted = isDark ? 'text-slate-400' : 'text-slate-500';
  const segBtn = (active: boolean) =>
    clsx(
      'px-2.5 py-1 rounded-md text-xs font-semibold transition-colors',
      active ? 'bg-indigo-600 text-white' : isDark ? 'text-slate-400 hover:text-slate-200' : 'text-slate-600 hover:text-slate-900'
    );
  const segWrap = clsx('inline-flex p-0.5 rounded-lg border', isDark ? 'bg-slate-900 border-slate-700' : 'bg-slate-100 border-slate-300');
  const primaryBtn =
    'inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold bg-indigo-600 hover:bg-indigo-500 text-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors';
  const secondaryBtn = clsx(
    'inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold border transition-colors',
    isDark ? 'border-slate-700 text-slate-200 hover:bg-slate-800' : 'border-slate-300 text-slate-700 hover:bg-slate-100'
  );

  const progressHeader = session && current && (
    <div className="flex items-center justify-between gap-3 mb-3">
      <button type="button" onClick={exitToHome} className={clsx('inline-flex items-center gap-1 text-xs font-semibold', muted)}>
        <ArrowLeft className="w-3.5 h-3.5" />
        End session
      </button>
      <div className="flex items-center gap-2 text-xs font-semibold">
        <span className={muted}>
          {session.index + 1} / {session.queue.length}
        </span>
        <div className={clsx('w-24 h-1.5 rounded-full overflow-hidden', isDark ? 'bg-slate-800' : 'bg-slate-200')}>
          <div
            className="h-full bg-indigo-500 transition-all"
            style={{ width: `${((session.index + (phase === 'result' ? 1 : 0)) / session.queue.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );

  const questionCard = current && (
    <div className={clsx(card, 'p-4 sm:p-5')}>
      <div className="flex flex-wrap items-center gap-1.5 mb-2">
        <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-indigo-500/15 text-indigo-400 border border-indigo-500/30">
          {MODE_META[current.mode].label}
          {current.crossExRound ? ` · Q${current.crossExRound}` : ''}
        </span>
        {current.side && (
          <span
            className={clsx(
              'px-2 py-0.5 rounded-full text-[11px] font-bold border',
              current.side === 'pro'
                ? 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30'
                : 'bg-rose-500/15 text-rose-400 border-rose-500/30'
            )}
          >
            You are {current.side.toUpperCase()}
          </span>
        )}
        <span className={clsx('text-[11px] truncate', muted)}>{current.pillarTitle}</span>
      </div>
      {current.mode !== 'opening' && current.mode !== 'steelman' && (
        <div className={clsx('text-[11px] font-semibold mb-1', muted)}>Motion: {current.motion}</div>
      )}
      <h3 className={clsx('font-editorial text-lg sm:text-xl font-semibold leading-snug', isDark ? 'text-slate-50' : 'text-slate-900')}>
        {current.promptTitle}
      </h3>
      {current.promptBody && (
        <p className={clsx('text-sm leading-relaxed mt-2', isDark ? 'text-slate-300' : 'text-slate-700')}>{current.promptBody}</p>
      )}
      <p className={clsx('text-sm font-semibold mt-3 pt-3 border-t', isDark ? 'border-slate-800 text-amber-300' : 'border-slate-200 text-amber-700')}>
        {current.instruction}
      </p>
    </div>
  );

  // ---------- phases ----------
  const renderHome = () => (
    <div className="space-y-4">
      <div className={clsx(card, 'p-4 sm:p-5')}>
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <div className="text-[11px] font-bold uppercase tracking-wide text-indigo-400">Debate Prep</div>
            <h2 className={clsx('font-editorial text-xl sm:text-2xl font-semibold leading-tight mt-0.5', isDark ? 'text-slate-50' : 'text-slate-900')}>
              {dataset.title}
            </h2>
            <p className={clsx('text-xs mt-1', muted)}>
              Answer a prompt, get graded by an AI coach on a debate rubric, and see what a stronger answer looks like.
            </p>
          </div>
          {stats.average != null && <ScoreRing score={stats.average} size={60} />}
        </div>
        <div className="flex flex-wrap gap-2 mt-3 text-[11px] font-semibold">
          <span className={clsx('px-2 py-1 rounded-lg border', isDark ? 'border-slate-700 text-slate-300' : 'border-slate-200 text-slate-600')}>
            {stats.attempts} answers on this topic
          </span>
          {stats.streakDays > 0 && (
            <span className="px-2 py-1 rounded-lg border border-amber-500/30 bg-amber-500/10 text-amber-400">
              🔥 {stats.streakDays}-day streak
            </span>
          )}
          <button
            type="button"
            onClick={() => setIsSettingsOpen(true)}
            className={clsx(
              'inline-flex items-center gap-1 px-2 py-1 rounded-lg border',
              hasKey ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400' : 'border-amber-500/40 bg-amber-500/10 text-amber-400'
            )}
          >
            <KeyRound className="w-3 h-3" />
            {hasKey ? `AI coach: ${modelLabel}` : 'Set up AI grading'}
          </button>
        </div>
      </div>

      <div className={clsx(card, 'p-3 sm:p-4 space-y-3')}>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <label className="flex items-center gap-2 text-xs font-semibold">
            <span className={muted}>Area</span>
            <select
              value={activePillarId ?? ''}
              onChange={(e) => onSelectPillar(e.target.value || null)}
              className={clsx(
                'text-xs px-2 py-1 rounded-lg border max-w-[14rem] focus:outline-none focus:ring-2 focus:ring-indigo-500',
                isDark ? 'bg-slate-900 border-slate-700 text-slate-200' : 'bg-white border-slate-300 text-slate-800'
              )}
            >
              <option value="">Whole topic</option>
              {pillars.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.title}
                </option>
              ))}
            </select>
          </label>
          <div className="flex items-center gap-2 text-xs font-semibold">
            <span className={muted}>Side</span>
            <div className={segWrap}>
              {(['any', 'pro', 'con'] as const).map((s) => (
                <button key={s} type="button" className={segBtn(sideFilter === s)} onClick={() => setSideFilter(s)}>
                  {s === 'any' ? 'Both' : s.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold">
            <span className={muted}>Questions</span>
            <div className={segWrap}>
              {[3, 5, 10].map((n) => (
                <button key={n} type="button" className={segBtn(sessionLength === n)} onClick={() => setSessionLength(n)}>
                  {n}
                </button>
              ))}
            </div>
          </div>
          <button type="button" onClick={() => setTimed((t) => !t)} className={clsx('inline-flex items-center gap-1.5 text-xs font-semibold', timed ? 'text-indigo-400' : muted)}>
            <Timer className="w-3.5 h-3.5" />
            Timer {timed ? 'on' : 'off'}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {SESSION_MODES.map((mode) => {
          const Icon = MODE_ICONS[mode];
          const meta =
            mode === 'mixed'
              ? { label: 'Quick Round', blurb: 'A mix of every drill type. The best daily warm-up.' }
              : MODE_META[mode];
          const seedMode = mode === 'crossex' ? 'defend' : mode;
          const available = mode === 'mixed' ? bank.length : bank.filter((q) => q.mode === seedMode).length;
          const modeStats = mode !== 'mixed' ? stats.byMode[mode] : undefined;
          return (
            <button
              key={mode}
              type="button"
              disabled={available === 0}
              onClick={() => startSession(mode)}
              className={clsx(
                card,
                'p-4 text-left transition-all hover:-translate-y-0.5 hover:border-indigo-500/60 disabled:opacity-40',
                mode === 'mixed' && 'sm:col-span-2 lg:col-span-1 ring-1 ring-indigo-500/30'
              )}
            >
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 rounded-xl bg-indigo-500/15 text-indigo-400 flex items-center justify-center">
                  <Icon className="w-4.5 h-4.5" />
                </div>
                {modeStats && (
                  <span className={clsx('text-xs font-bold', scoreTone(modeStats.average).text)}>avg {Math.round(modeStats.average)}</span>
                )}
              </div>
              <div className={clsx('text-sm font-bold mt-3', isDark ? 'text-slate-100' : 'text-slate-900')}>{meta.label}</div>
              <div className={clsx('text-xs mt-0.5 leading-relaxed', muted)}>{meta.blurb}</div>
              <div className={clsx('text-[11px] mt-2', muted)}>{available} prompts</div>
            </button>
          );
        })}
      </div>

      {stats.weakQuestionIds.size > 0 && (
        <button type="button" onClick={() => startSession('mixed', { weakOnly: true })} className={clsx(card, 'w-full p-4 flex items-center gap-3 text-left hover:border-amber-500/60')}>
          <Target className="w-5 h-5 text-amber-400 shrink-0" />
          <div>
            <div className="text-sm font-bold">Drill your weak spots</div>
            <div className={clsx('text-xs', muted)}>
              {stats.weakQuestionIds.size} prompts where your latest score was under 60.
            </div>
          </div>
          <ArrowRight className="w-4 h-4 ml-auto text-slate-400" />
        </button>
      )}

      {recent.length > 0 && (
        <div className={clsx(card, 'p-4')}>
          <h3 className="text-xs font-bold uppercase tracking-wide mb-2 text-slate-400">Recent answers</h3>
          <ul className="divide-y divide-slate-500/15">
            {recent.map((a) => (
              <li key={a.id}>
                <button
                  type="button"
                  onClick={() => {
                    setReviewAttempt(a);
                    setPhase('review');
                  }}
                  className="w-full flex items-center gap-3 py-2 text-left"
                >
                  <span className={clsx('w-10 text-sm font-bold shrink-0', scoreTone(a.grade.overall).text)}>{a.grade.overall}</span>
                  <span className="min-w-0">
                    <span className={clsx('block text-xs font-semibold truncate', isDark ? 'text-slate-200' : 'text-slate-800')}>
                      {a.question.promptTitle}
                    </span>
                    <span className={clsx('block text-[11px]', muted)}>
                      {MODE_META[a.question.mode].label} · {new Date(a.createdAt).toLocaleDateString()}
                    </span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );

  const renderAnswer = () => {
    if (!current || !session) return null;
    const elapsed = Math.max(0, Math.round((now - startedAt) / 1000));
    const remaining = current.suggestedSeconds - elapsed;
    const words = answer.trim() ? answer.trim().split(/\s+/).length : 0;
    const [minW, maxW] = current.suggestedWords;
    return (
      <div className="space-y-3">
        {progressHeader}
        {questionCard}
        {current.priorExchanges && current.priorExchanges.length > 0 && (
          <details className={clsx(card, 'px-4 py-3')}>
            <summary className={clsx('text-xs font-semibold cursor-pointer', muted)}>Earlier in this cross-examination</summary>
            <div className="mt-2 space-y-2">
              {current.priorExchanges.map((ex, i) => (
                <div key={i} className="text-xs leading-relaxed">
                  <div className="text-rose-400 font-semibold whitespace-pre-wrap">Q: {ex.question}</div>
                  <div className={clsx('whitespace-pre-wrap', isDark ? 'text-slate-300' : 'text-slate-700')}>A: {ex.answer}</div>
                </div>
              ))}
            </div>
          </details>
        )}
        <div className={clsx(card, 'p-3')}>
          <textarea
            ref={textareaRef}
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            onKeyDown={(e) => {
              if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
                e.preventDefault();
                handleSubmit();
              }
            }}
            rows={8}
            placeholder="Write your answer as you would say it in the round… (tip: use your keyboard's mic to dictate)"
            className={clsx(
              'w-full resize-y bg-transparent text-sm sm:text-base leading-relaxed focus:outline-none min-h-[10rem]',
              isDark ? 'text-slate-100 placeholder:text-slate-600' : 'text-slate-900 placeholder:text-slate-400'
            )}
          />
          <div className="flex items-center justify-between text-[11px] font-semibold pt-2 border-t border-slate-500/15">
            <span className={words > maxW * 1.25 ? 'text-amber-400' : words >= minW ? 'text-emerald-400' : muted}>
              {words} words · aim for {minW}–{maxW}
            </span>
            {session.timed && (
              <span className={clsx('inline-flex items-center gap-1 tabular-nums', remaining < 0 ? 'text-rose-400' : remaining < 15 ? 'text-amber-400' : muted)}>
                <Timer className="w-3 h-3" />
                {formatClock(remaining)}
              </span>
            )}
          </div>
        </div>
        <div className="flex flex-col-reverse sm:flex-row gap-2 sm:justify-end">
          <button type="button" onClick={handleSkip} className={secondaryBtn}>
            <SkipForward className="w-4 h-4" />
            Skip
          </button>
          {hasKey && (
            <button
              type="button"
              disabled={!answer.trim()}
              onClick={() => {
                setSecondsTaken(Math.round((Date.now() - startedAt) / 1000));
                setPhase('selfgrade');
              }}
              className={secondaryBtn}
            >
              Self-grade
            </button>
          )}
          <button type="button" disabled={!answer.trim()} onClick={handleSubmit} className={primaryBtn}>
            <Send className="w-4 h-4" />
            {hasKey ? 'Submit for grading' : 'Submit & self-grade'}
          </button>
        </div>
        {!hasKey && (
          <p className={clsx('text-[11px] text-center', muted)}>
            <button type="button" onClick={() => setIsSettingsOpen(true)} className="text-indigo-400 font-semibold">
              Add an API key
            </button>{' '}
            to get AI feedback, model answers and cross-examination follow-ups.
          </p>
        )}
      </div>
    );
  };

  const renderGrading = () => (
    <div className="space-y-3">
      {progressHeader}
      {questionCard}
      <div className={clsx(card, 'p-6 flex flex-col items-center text-center gap-3')}>
        {!gradeError ? (
          <>
            <Loader2 className="w-7 h-7 text-indigo-400 animate-spin" />
            <div className="text-sm font-semibold">Your coach is reviewing your answer…</div>
            <div className={clsx('text-xs', muted)}>Scoring it against the rubric and the curated dossier.</div>
          </>
        ) : (
          <>
            <div className="text-sm font-semibold text-rose-400">{gradeError.message}</div>
            <div className="flex flex-wrap justify-center gap-2">
              <button type="button" onClick={() => runGrading(secondsTaken)} className={primaryBtn}>
                <RotateCcw className="w-4 h-4" />
                Try again
              </button>
              <button type="button" onClick={() => setPhase('selfgrade')} className={secondaryBtn}>
                Self-grade instead
              </button>
              <button type="button" onClick={() => setPhase('answer')} className={secondaryBtn}>
                Edit answer
              </button>
              {gradeError.kind === 'auth' && (
                <button type="button" onClick={() => setIsSettingsOpen(true)} className={secondaryBtn}>
                  Settings
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );

  const renderSelfGrade = () => {
    if (!current) return null;
    return (
      <div className="space-y-3">
        {progressHeader}
        <div className={clsx(card, 'p-4')}>
          <div className="text-sm font-bold">How did you do?</div>
          <p className={clsx('text-xs mt-1', muted)}>Compare your answer with the answer key below, then rate yourself.</p>
          <div className="grid grid-cols-5 gap-2 mt-3">
            {[1, 2, 3, 4, 5].map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => recordAttempt(selfGrade(r), secondsTaken)}
                className={clsx(
                  'py-2 rounded-xl border text-sm font-bold transition-colors',
                  isDark ? 'border-slate-700 hover:bg-slate-800' : 'border-slate-300 hover:bg-slate-100',
                  scoreTone(r * 20).text
                )}
              >
                {r}
              </button>
            ))}
          </div>
          <div className={clsx('flex justify-between text-[10px] mt-1', muted)}>
            <span>Missed it</span>
            <span>Nailed it</span>
          </div>
        </div>
        <GradeReport grade={selfGrade(3)} hideScore question={current} answer={answer} isDark={isDark} onOpenInGraph={() => onSwitchToGraph(current.nodeId)} />
      </div>
    );
  };

  const renderResult = () => {
    if (!current || !session || !lastGrade) return null;
    const isLast = session.index + 1 >= session.queue.length;
    const crossExContinues =
      session.mode === 'crossex' && (current.crossExRound ?? 0) < CROSSEX_ROUNDS && Boolean(lastGrade.followUpQuestion);
    return (
      <div className="space-y-3">
        {progressHeader}
        <GradeReport grade={lastGrade} question={current} answer={answer} isDark={isDark} onOpenInGraph={() => onSwitchToGraph(current.nodeId)} />
        {lastGrade.followUpQuestion && (
          <div className={clsx(card, 'p-4 border-rose-500/30')}>
            <div className="text-[11px] font-bold uppercase tracking-wide text-rose-400 mb-1">Your opponent follows up</div>
            <p className={clsx('text-sm font-editorial leading-relaxed', isDark ? 'text-slate-100' : 'text-slate-900')}>
              "{lastGrade.followUpQuestion}"
            </p>
          </div>
        )}
        <div
          className={clsx(
            'flex flex-col-reverse sm:flex-row gap-2 sm:justify-end sticky bottom-0 -mx-3 sm:mx-0 px-3 sm:px-0 py-2 backdrop-blur-sm',
            isDark ? 'bg-slate-950/90' : 'bg-slate-100/90'
          )}
        >
          {lastGrade.followUpQuestion && !crossExContinues && (
            <button type="button" onClick={() => goNext({ followUp: true })} className={secondaryBtn}>
              <MessagesSquare className="w-4 h-4" />
              Answer the follow-up
            </button>
          )}
          <button type="button" onClick={() => goNext()} className={primaryBtn}>
            {crossExContinues ? 'Answer the follow-up' : isLast ? 'Finish session' : 'Next question'}
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  };

  const renderSummary = () => {
    if (!session) return null;
    const attempts = session.attempts;
    const avg = attempts.length ? Math.round(attempts.reduce((s, a) => s + a.grade.overall, 0) / attempts.length) : 0;
    const weakest = [...attempts].sort((a, b) => a.grade.overall - b.grade.overall)[0];
    return (
      <div className="space-y-3">
        <div className={clsx(card, 'p-5 flex items-center gap-4')}>
          <Trophy className="w-8 h-8 text-amber-400 shrink-0" />
          <div className="flex-1">
            <div className="text-sm font-bold">Session complete</div>
            <div className={clsx('text-xs', muted)}>
              {attempts.length} answers graded · {MODE_META[session.mode as PrepMode]?.label ?? 'Quick Round'}
            </div>
            {weakest && weakest.grade.improvements[0] && (
              <p className={clsx('text-xs mt-2', isDark ? 'text-slate-300' : 'text-slate-700')}>
                <span className="font-semibold text-amber-400">Focus next: </span>
                {weakest.grade.improvements[0]}
              </p>
            )}
          </div>
          {attempts.length > 0 && <ScoreRing score={avg} />}
        </div>
        <div className={clsx(card, 'p-4')}>
          <ul className="divide-y divide-slate-500/15">
            {attempts.map((a) => (
              <li key={a.id}>
                <button
                  type="button"
                  onClick={() => {
                    setReviewAttempt(a);
                    setPhase('review');
                  }}
                  className="w-full flex items-center gap-3 py-2 text-left"
                >
                  <span className={clsx('w-10 text-sm font-bold shrink-0', scoreTone(a.grade.overall).text)}>{a.grade.overall}</span>
                  <span className="min-w-0">
                    <span className={clsx('block text-xs font-semibold truncate', isDark ? 'text-slate-200' : 'text-slate-800')}>{a.question.promptTitle}</span>
                    <span className={clsx('block text-[11px] truncate', muted)}>{a.grade.headline}</span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 sm:justify-end">
          <button type="button" onClick={exitToHome} className={secondaryBtn}>
            Back to Prep
          </button>
          <button type="button" onClick={() => startSession(session.mode)} className={primaryBtn}>
            <RotateCcw className="w-4 h-4" />
            New {MODE_META[session.mode as PrepMode]?.short ?? 'Quick'} session
          </button>
        </div>
      </div>
    );
  };

  const renderReview = () => {
    if (!reviewAttempt) return null;
    const backTo: Phase = session && session.attempts.some((a) => a.id === reviewAttempt.id) ? 'summary' : 'home';
    return (
      <div className="space-y-3">
        <button type="button" onClick={() => setPhase(backTo)} className={clsx('inline-flex items-center gap-1 text-xs font-semibold', muted)}>
          <ArrowLeft className="w-3.5 h-3.5" />
          Back
        </button>
        <div className={clsx(card, 'p-4')}>
          <div className="text-[11px] font-bold uppercase tracking-wide text-indigo-400">{MODE_META[reviewAttempt.question.mode].label}</div>
          <div className={clsx('font-editorial text-lg font-semibold leading-snug mt-1', isDark ? 'text-slate-50' : 'text-slate-900')}>
            {reviewAttempt.question.promptTitle}
          </div>
          <p className={clsx('text-xs mt-1', muted)}>{reviewAttempt.question.instruction}</p>
        </div>
        <GradeReport
          grade={reviewAttempt.grade}
          question={reviewAttempt.question}
          answer={reviewAttempt.answer}
          isDark={isDark}
          onOpenInGraph={reviewAttempt.question.topicId === dataset.id ? () => onSwitchToGraph(reviewAttempt.question.nodeId) : undefined}
        />
      </div>
    );
  };

  return (
    <div
      className={clsx(
        'flex-1 h-full overflow-y-auto transition-colors duration-150',
        isDark ? 'bg-slate-950 text-slate-100' : 'bg-slate-100 text-slate-900'
      )}
    >
      <div className="max-w-3xl mx-auto px-3 sm:px-6 py-4 sm:py-6 pb-6">
        {phase === 'home' && renderHome()}
        {phase === 'answer' && renderAnswer()}
        {phase === 'grading' && renderGrading()}
        {phase === 'selfgrade' && renderSelfGrade()}
        {phase === 'result' && renderResult()}
        {phase === 'summary' && renderSummary()}
        {phase === 'review' && renderReview()}
      </div>

      <PrepSettingsModal
        isOpen={isSettingsOpen}
        settings={settings}
        isDark={isDark}
        onClose={() => setIsSettingsOpen(false)}
        onSave={(next) => {
          setSettings(next);
          saveSettings(next);
        }}
      />
    </div>
  );
}
