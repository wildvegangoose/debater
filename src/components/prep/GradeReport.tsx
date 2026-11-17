import { useState } from 'react';
import clsx from 'clsx';
import { AlertTriangle, BookOpen, CheckCircle2, ChevronDown, Lightbulb, MessageSquareQuote, Target } from 'lucide-react';
import { GradeResult, PrepQuestion } from '../../prep/types';

export function scoreTone(score: number): { text: string; bar: string; label: string } {
  if (score >= 80) return { text: 'text-emerald-400', bar: 'bg-emerald-500', label: 'Strong' };
  if (score >= 60) return { text: 'text-sky-400', bar: 'bg-sky-500', label: 'Solid' };
  if (score >= 40) return { text: 'text-amber-400', bar: 'bg-amber-500', label: 'Developing' };
  return { text: 'text-rose-400', bar: 'bg-rose-500', label: 'Needs work' };
}

export function ScoreRing({ score, size = 72 }: { score: number; size?: number }) {
  const tone = scoreTone(score);
  const r = (size - 8) / 2;
  const c = 2 * Math.PI * r;
  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} strokeWidth={6} className="stroke-slate-500/25" fill="none" />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          strokeWidth={6}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c * (1 - score / 100)}
          className={clsx('transition-all duration-700', tone.text)}
          stroke="currentColor"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className={clsx('text-xl font-bold leading-none', tone.text)}>{score}</span>
        <span className="text-[9px] uppercase tracking-wide text-slate-400 mt-0.5">/ 100</span>
      </div>
    </div>
  );
}

function Section({
  icon,
  title,
  items,
  tone,
  isDark,
}: {
  icon: React.ReactNode;
  title: string;
  items: string[];
  tone: string;
  isDark: boolean;
}) {
  if (items.length === 0) return null;
  return (
    <div>
      <h4 className={clsx('flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide mb-2', tone)}>
        {icon}
        {title}
      </h4>
      <ul className="space-y-1.5">
        {items.map((item, i) => (
          <li key={i} className={clsx('text-sm leading-relaxed pl-3 border-l-2', isDark ? 'border-slate-700 text-slate-200' : 'border-slate-300 text-slate-800')}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

interface GradeReportProps {
  grade: GradeResult;
  question: PrepQuestion;
  answer: string;
  isDark: boolean;
  onOpenInGraph?: () => void;
  /** Hide the score summary (used while self-grading, before a score exists) */
  hideScore?: boolean;
}

export function GradeReport({ grade, question, answer, isDark, onOpenInGraph, hideScore }: GradeReportProps) {
  const [showModel, setShowModel] = useState(false);
  const [showDossier, setShowDossier] = useState(grade.gradedBy === 'self');
  const [showAnswer, setShowAnswer] = useState(false);
  const tone = scoreTone(grade.overall);
  const card = clsx('rounded-2xl border p-4 sm:p-5', isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200');
  const toggle = clsx(
    'w-full flex items-center justify-between text-sm font-semibold',
    isDark ? 'text-slate-200' : 'text-slate-800'
  );

  return (
    <div className="space-y-3">
      {!hideScore && (
      <div className={clsx(card, 'flex items-center gap-4')}>
        <ScoreRing score={grade.overall} />
        <div className="min-w-0">
          <div className={clsx('text-xs font-bold uppercase tracking-wide', tone.text)}>
            {tone.label}
            {grade.gradedBy === 'self' && <span className="text-slate-400 normal-case font-medium"> · self-graded</span>}
          </div>
          <p className={clsx('text-sm sm:text-base leading-snug mt-1', isDark ? 'text-slate-100' : 'text-slate-900')}>
            {grade.headline}
          </p>
        </div>
      </div>
      )}

      {grade.criteria.length > 0 && (
        <div className={clsx(card, 'space-y-3')}>
          {grade.criteria.map((c) => {
            const t = scoreTone(c.score * 20);
            return (
              <div key={c.criterion}>
                <div className="flex items-center justify-between text-xs font-semibold mb-1">
                  <span className={isDark ? 'text-slate-200' : 'text-slate-800'}>
                    {c.criterion}
                    <span className="text-slate-500 font-medium"> · {Math.round(c.weight * 100)}%</span>
                  </span>
                  <span className={t.text}>{c.score}/5</span>
                </div>
                <div className={clsx('h-1.5 rounded-full overflow-hidden', isDark ? 'bg-slate-800' : 'bg-slate-200')}>
                  <div className={clsx('h-full rounded-full transition-all duration-700', t.bar)} style={{ width: `${c.score * 20}%` }} />
                </div>
                {c.feedback && (
                  <p className={clsx('text-xs leading-relaxed mt-1.5', isDark ? 'text-slate-400' : 'text-slate-600')}>{c.feedback}</p>
                )}
              </div>
            );
          })}
        </div>
      )}

      {(grade.strengths.length + grade.improvements.length + grade.missedPoints.length + grade.factualFlags.length > 0) && (
        <div className={clsx(card, 'space-y-4')}>
          <Section icon={<CheckCircle2 className="w-3.5 h-3.5" />} title="What worked" items={grade.strengths} tone="text-emerald-400" isDark={isDark} />
          <Section icon={<Target className="w-3.5 h-3.5" />} title="Fix next time" items={grade.improvements} tone="text-amber-400" isDark={isDark} />
          <Section icon={<Lightbulb className="w-3.5 h-3.5" />} title="Points you missed" items={grade.missedPoints} tone="text-sky-400" isDark={isDark} />
          <Section icon={<AlertTriangle className="w-3.5 h-3.5" />} title="Fact check" items={grade.factualFlags} tone="text-rose-400" isDark={isDark} />
        </div>
      )}

      {grade.modelAnswer && (
        <div className={card}>
          <button type="button" className={toggle} onClick={() => setShowModel((v) => !v)}>
            <span className="flex items-center gap-2">
              <MessageSquareQuote className="w-4 h-4 text-indigo-400" />
              Model answer
            </span>
            <ChevronDown className={clsx('w-4 h-4 transition-transform', showModel && 'rotate-180')} />
          </button>
          {showModel && (
            <p className={clsx('mt-3 text-sm leading-relaxed whitespace-pre-wrap font-editorial', isDark ? 'text-slate-200' : 'text-slate-800')}>
              {grade.modelAnswer}
            </p>
          )}
        </div>
      )}

      <div className={card}>
        <button type="button" className={toggle} onClick={() => setShowAnswer((v) => !v)}>
          <span>Your answer</span>
          <ChevronDown className={clsx('w-4 h-4 transition-transform', showAnswer && 'rotate-180')} />
        </button>
        {showAnswer && (
          <p className={clsx('mt-3 text-sm leading-relaxed whitespace-pre-wrap', isDark ? 'text-slate-300' : 'text-slate-700')}>
            {answer || '(empty)'}
          </p>
        )}
      </div>

      <div className={card}>
        <button type="button" className={toggle} onClick={() => setShowDossier((v) => !v)}>
          <span className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-amber-400" />
            Answer key from the dossier
          </span>
          <ChevronDown className={clsx('w-4 h-4 transition-transform', showDossier && 'rotate-180')} />
        </button>
        {showDossier && (
          <div className="mt-3 space-y-4">
            {question.reference.map((block, i) => (
              <div key={i}>
                <div className="text-[11px] font-bold uppercase tracking-wide text-amber-400">{block.label}</div>
                {block.title && (
                  <div className={clsx('text-sm font-semibold mt-0.5', isDark ? 'text-slate-100' : 'text-slate-900')}>{block.title}</div>
                )}
                <ul className="mt-1.5 space-y-1 list-disc pl-5">
                  {block.points.map((p, j) => (
                    <li key={j} className={clsx('text-xs leading-relaxed', isDark ? 'text-slate-300' : 'text-slate-700')}>
                      {p}
                    </li>
                  ))}
                </ul>
                {block.sources.length > 0 && (
                  <ul className="mt-1.5 space-y-0.5">
                    {block.sources.map((s, j) => {
                      const url = s.match(/https?:\/\/\S+/)?.[0];
                      return (
                        <li key={j} className="text-[11px] text-slate-500 break-words">
                          {url ? (
                            <a href={url} target="_blank" rel="noreferrer" className="hover:text-indigo-400 underline-offset-2 hover:underline">
                              {s.replace(` — ${url}`, '')}
                            </a>
                          ) : (
                            s
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            ))}
            {onOpenInGraph && (
              <button type="button" onClick={onOpenInGraph} className="text-xs font-semibold text-indigo-400 hover:text-indigo-300">
                Open this argument in the graph →
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
