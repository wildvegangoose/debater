import {
  DebateSessionRecord,
  HistoricalPatternAnalysis,
  SessionDeepAnalysis,
} from '../../types/voiceDebate';
import { verdictDisplay } from './performanceAnalyzer';

const SESSION_LOG_KEY = 'steelman-performance-logs-v1';
const HISTORICAL_ANALYSIS_KEY = 'steelman-historical-analysis-v1';
const MAX_STORED_SESSIONS = 100;

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
  const prev = existing.find((s) => s.id === record.id);
  const merged: DebateSessionRecord =
    prev?.deepAnalysis && !record.deepAnalysis
      ? { ...record, deepAnalysis: prev.deepAnalysis }
      : record;
  const filtered = existing.filter((s) => s.id !== record.id);
  const updated = [merged, ...filtered].slice(0, MAX_STORED_SESSIONS);
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

export function saveSessionDeepAnalysisInLog(
  sessionId: string,
  deepAnalysis: SessionDeepAnalysis
): DebateSessionRecord[] {
  const logs = loadPerformanceLogs();
  const updated = logs.map((session) =>
    session.id === sessionId ? { ...session, deepAnalysis } : session
  );
  savePerformanceLogs(updated);
  return updated;
}

export function loadHistoricalAnalysis(): HistoricalPatternAnalysis | null {
  try {
    const raw = localStorage.getItem(HISTORICAL_ANALYSIS_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as HistoricalPatternAnalysis;
    if (!parsed || typeof parsed.executiveSummary !== 'string') return null;
    return parsed;
  } catch {
    return null;
  }
}

export function saveHistoricalAnalysis(analysis: HistoricalPatternAnalysis): void {
  try {
    localStorage.setItem(HISTORICAL_ANALYSIS_KEY, JSON.stringify(analysis));
  } catch {
    // Ignore storage quota issues
  }
}

export function exportPerformanceLogsJson(logs: DebateSessionRecord[]): string {
  return JSON.stringify(
    {
      app: 'Steelman',
      version: 1,
      exportedAt: new Date().toISOString(),
      sessions: logs,
    },
    null,
    2
  );
}

export function importPerformanceLogsJson(rawText: string): {
  merged: DebateSessionRecord[];
  importedCount: number;
} {
  const parsed = JSON.parse(rawText) as unknown;
  const candidateList: unknown[] = Array.isArray(parsed)
    ? parsed
    : parsed &&
        typeof parsed === 'object' &&
        Array.isArray((parsed as { sessions?: unknown[] }).sessions)
      ? (parsed as { sessions: unknown[] }).sessions
      : [];

  const validIncoming = candidateList.filter(
    (item): item is DebateSessionRecord =>
      Boolean(
        item &&
          typeof item === 'object' &&
          typeof (item as DebateSessionRecord).id === 'string' &&
          typeof (item as DebateSessionRecord).topicTitle === 'string' &&
          Array.isArray((item as DebateSessionRecord).turnReviews)
      )
  );

  if (validIncoming.length === 0) {
    throw new Error('No valid Steelman debate sessions found in this file.');
  }

  const existing = loadPerformanceLogs();
  const byId = new Map<string, DebateSessionRecord>();
  for (const s of existing) byId.set(s.id, s);
  for (const s of validIncoming) {
    const prev = byId.get(s.id);
    // Keep newer updatedAt or preserve existing deepAnalysis if incoming lacks it
    if (!prev || new Date(s.updatedAt).getTime() >= new Date(prev.updatedAt).getTime()) {
      byId.set(s.id, prev?.deepAnalysis && !s.deepAnalysis ? { ...s, deepAnalysis: prev.deepAnalysis } : s);
    }
  }

  const merged = Array.from(byId.values())
    .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
    .slice(0, MAX_STORED_SESSIONS);

  savePerformanceLogs(merged);
  return { merged, importedCount: validIncoming.length };
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
  ];

  if (session.deepAnalysis) {
    const da = session.deepAnalysis;
    lines.push(
      `## Deep Argument Critique (${da.engineLabel})`,
      da.overallAssessment,
      '',
      '### Strengths',
      ...da.strengths.map((s) => `- **${s.title}:** ${s.detail}`),
      '',
      '### Weaknesses & Gaps',
      ...da.weaknesses.map((w) => `- **${w.title}:** ${w.detail}`),
      ''
    );
    if (da.proposedChanges.length > 0) {
      lines.push('### Proposed Argument Revisions');
      for (const ch of da.proposedChanges) {
        lines.push(
          `- **Turn ${ch.turnIndex} (${ch.issue}):**`,
          `  - *Before:* ${ch.originalExcerpt}`,
          `  - *Proposed:* ${ch.proposedRevision}`,
          `  - *Why:* ${ch.rationale}`
        );
      }
      lines.push('');
    }
    if (da.nextRoundDrill) {
      lines.push(`**Next Round Drill:** ${da.nextRoundDrill}`, '');
    }
  }

  lines.push('## Turn-by-Turn Game Tape');

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
