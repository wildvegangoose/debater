import { DebateTopicId } from '../types/debate';
import { PrepAttempt, PrepMode, PrepSettings } from './types';

const SETTINGS_KEY = 'dialectica-prep-settings-v1';
const HISTORY_KEY = 'dialectica-prep-history-v1';
const MAX_HISTORY = 250;

export const DEFAULT_MODEL = 'claude-opus-5-5';

export const MODEL_OPTIONS: Array<{ id: string; label: string; note: string }> = [
  { id: 'claude-opus-5-5', label: 'Claude Opus 5.5', note: 'Most thorough feedback (default)' },
  { id: 'claude-sonnet-5-5', label: 'Claude Sonnet 5.5', note: 'Faster, about half the cost' },
  { id: 'claude-haiku-5-5', label: 'Claude Haiku 5.5', note: 'Fastest and cheapest' },
];

export const DEFAULT_SETTINGS: PrepSettings = {
  apiKey: '',
  model: DEFAULT_MODEL,
  level: 'intermediate',
  customInstructions: '',
  baseUrl: '',
};

export function loadSettings(): PrepSettings {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    if (raw) return { ...DEFAULT_SETTINGS, ...JSON.parse(raw) };
  } catch {
    // ignore malformed storage
  }
  return { ...DEFAULT_SETTINGS };
}

export function saveSettings(settings: PrepSettings): void {
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  } catch {
    // ignore quota errors
  }
}

export function loadHistory(): PrepAttempt[] {
  try {
    const raw = localStorage.getItem(HISTORY_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) return parsed;
    }
  } catch {
    // ignore malformed storage
  }
  return [];
}

export function saveHistory(history: PrepAttempt[]): PrepAttempt[] {
  const trimmed = history.slice(-MAX_HISTORY);
  try {
    localStorage.setItem(HISTORY_KEY, JSON.stringify(trimmed));
  } catch {
    // ignore quota errors
  }
  return trimmed;
}

export interface PrepStats {
  attempts: number;
  average: number | null;
  byMode: Partial<Record<PrepMode, { attempts: number; average: number }>>;
  /** Latest score per question; questions whose latest attempt scored below the threshold */
  weakQuestionIds: Set<string>;
  streakDays: number;
}

export const WEAK_THRESHOLD = 60;

export function computeStats(history: PrepAttempt[], topicId?: DebateTopicId): PrepStats {
  const scoped = topicId ? history.filter((a) => a.question.topicId === topicId) : history;
  const byMode: PrepStats['byMode'] = {};
  let total = 0;
  for (const a of scoped) {
    total += a.grade.overall;
    const m = a.question.mode;
    const cur = byMode[m] ?? { attempts: 0, average: 0 };
    cur.average = (cur.average * cur.attempts + a.grade.overall) / (cur.attempts + 1);
    cur.attempts += 1;
    byMode[m] = cur;
  }

  const latestByQuestion = new Map<string, number>();
  for (const a of scoped) latestByQuestion.set(a.question.id, a.grade.overall);
  const weakQuestionIds = new Set<string>();
  for (const [id, score] of latestByQuestion) {
    if (score < WEAK_THRESHOLD && !id.includes(':fu')) weakQuestionIds.add(id);
  }

  // Consecutive days (ending today or yesterday) with at least one attempt, across all topics.
  const days = new Set(history.map((a) => a.createdAt.slice(0, 10)));
  let streakDays = 0;
  const cursor = new Date();
  if (!days.has(cursor.toISOString().slice(0, 10))) cursor.setDate(cursor.getDate() - 1);
  while (days.has(cursor.toISOString().slice(0, 10))) {
    streakDays += 1;
    cursor.setDate(cursor.getDate() - 1);
  }

  return {
    attempts: scoped.length,
    average: scoped.length ? Math.round(total / scoped.length) : null,
    byMode,
    weakQuestionIds,
    streakDays,
  };
}
