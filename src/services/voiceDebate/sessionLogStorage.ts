import { DebateSessionRecord } from '../../types/voiceDebate';
import { verdictDisplay } from './performanceAnalyzer';

const SESSION_LOG_KEY = 'steelman-performance-logs-v1';
const MAX_STORED_SESSIONS = 50;

export function loadPerformanceLogs(): DebateSessionRecord[] {
  try {
    const raw = localStorage.getItem(SESSION_LOG_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed as DebateSessionRecord[];
  } catch {
    return [];
  }
}

export function savePerformanceLogs(logs: DebateSessionRecord[]): void {
  try {
    localStorage.setItem(
      SESSION_LOG_KEY,
      JSON.stringify(logs.slice(0, MAX_STORED_SESSIONS))
    );
  } catch {
    // Ignore storage quota issues
  }
}

export function upsertPerformanceLog(record: DebateSessionRecord): DebateSessionRecord[] {
  const existing = loadPerformanceLogs();
  const filtered = existing.filter((s) => s.id !== record.id);
  const updated = [record, ...filtered].slice(0, MAX_STORED_SESSIONS);
  savePerformanceLogs(updated);
  return updated;
}

export function deletePerformanceLog(sessionId: string): DebateSessionRecord[] {
  const updated = loadPerformanceLogs().filter((s) => s.id !== sessionId);
  savePerformanceLogs(updated);
  return updated;
}

export function updateTurnAiRewriteInLog(
  sessionId: string,
  turnIndex: number,
  aiRewrite: string
): DebateSessionRecord[] {
  const logs = loadPerformanceLogs();
  const updated = logs.map((session) => {
    if (session.id !== sessionId) return session;
    return {
      ...session,
      turnReviews: session.turnReviews.map((rev) =>
        rev.turnIndex === turnIndex ? { ...rev, aiRewrite } : rev
      ),
    };
  });
  savePerformanceLogs(updated);
  return updated;
}

export function formatSessionAsMarkdown(session: DebateSessionRecord): string {
  const v = verdictDisplay(session.verdict);
  const dateStr = new Date(session.updatedAt).toLocaleDateString(undefined, {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  const lines: string[] = [
    `# Steelman Performance Debrief — ${session.topicTitle}`,
    `Date: ${dateStr} | Stance: ${session.stance.toUpperCase()} | Verdict: ${v.title}`,
    `Avg Strength: ${session.avgStrength}/100 | Peak: ${session.peakStrength}/100 | Arguments: ${session.turnCount}`,
    `Top Strength: ${session.topStrength}`,
    `Primary Focus: ${session.primaryFocus}`,
    '',
    '## Turn-by-Turn Game Tape',
  ];

  for (const rev of session.turnReviews) {
    const deltaStr = rev.persuasionShift >= 0 ? `+${rev.persuasionShift}` : `${rev.persuasionShift}`;
    lines.push(
      `### Turn ${rev.turnIndex} — ${rev.landingLabel} (${rev.argumentStrength}/100, Momentum ${deltaStr})`,
      `**Your Argument:** ${rev.userText}`,
      `**What Worked:** ${rev.whatWorked.join(' ')}`,
      `**How It Could Have Gone Better:** ${rev.whatToImprove}`
    );
    if (rev.aiRewrite || rev.strongerAnglePrompt) {
      lines.push(`**Sharper Move:** ${rev.aiRewrite || rev.strongerAnglePrompt}`);
    }
    lines.push('');
  }

  return lines.join('\n');
}
