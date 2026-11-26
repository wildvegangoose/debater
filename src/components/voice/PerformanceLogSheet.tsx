import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import {
  ChevronRight,
  Download,
  Loader2,
  RefreshCw,
  Sparkles,
  Trash2,
  Upload,
  X,
} from 'lucide-react';
import {
  DebateSessionRecord,
  HistoricalPatternAnalysis,
  VoiceDebateSettings,
} from '../../types/voiceDebate';
import {
  canRunLiveAiCoach,
  computeCareerStats,
  generateHistoricalPatternAnalysis,
  getCoachEngineLabel,
  verdictDisplay,
} from '../../services/voiceDebate/performanceAnalyzer';
import {
  exportPerformanceLogsJson,
  importPerformanceLogsJson,
  loadHistoricalAnalysis,
  saveHistoricalAnalysis,
} from '../../services/voiceDebate/sessionLogStorage';
import { MomentumSparkline } from './DebateScorecardModal';

interface PerformanceLogSheetProps {
  isOpen: boolean;
  onClose: () => void;
  sessions: DebateSessionRecord[];
  settings: VoiceDebateSettings;
  onSelectSession: (session: DebateSessionRecord) => void;
  onDeleteSession: (sessionId: string) => void;
  onImportSessions: (merged: DebateSessionRecord[]) => void;
  onOpenSettings?: () => void;
  isDark: boolean;
}

export function PerformanceLogSheet({
  isOpen,
  onClose,
  sessions,
  settings,
  onSelectSession,
  onDeleteSession,
  onImportSessions,
  onOpenSettings,
  isDark,
}: PerformanceLogSheetProps) {
  const [activeTab, setActiveTab] = useState<'history' | 'insights'>('history');
  const [historicalAnalysis, setHistoricalAnalysis] = useState<HistoricalPatternAnalysis | null>(
    () => loadHistoricalAnalysis()
  );
  const [analyzingHistory, setAnalyzingHistory] = useState(false);
  const [analysisError, setAnalysisError] = useState<string | null>(null);
  const [backupNotice, setBackupNotice] = useState<{ ok: boolean; text: string } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    setHistoricalAnalysis(loadHistoricalAnalysis());
    setAnalysisError(null);
    setBackupNotice(null);
  }, [isOpen]);

  if (!isOpen) return null;

  const stats = computeCareerStats(sessions);
  const isLiveAi = canRunLiveAiCoach(settings);
  const engineLabel = getCoachEngineLabel(settings);

  const isAnalysisStale = Boolean(
    historicalAnalysis &&
      sessions.length > 0 &&
      (historicalAnalysis.sessionsAnalyzed !== Math.min(10, sessions.length) ||
        new Date(sessions[0].updatedAt).getTime() >
          new Date(historicalAnalysis.generatedAt).getTime())
  );

  const handleRunHistoricalAnalysis = async () => {
    if (analyzingHistory || sessions.length === 0) return;
    setAnalyzingHistory(true);
    setAnalysisError(null);
    try {
      const result = await generateHistoricalPatternAnalysis({ settings, sessions });
      saveHistoricalAnalysis(result);
      setHistoricalAnalysis(result);
    } catch (err) {
      setAnalysisError(err instanceof Error ? err.message : String(err));
    } finally {
      setAnalyzingHistory(false);
    }
  };

  const handleExportLogs = () => {
    if (sessions.length === 0) return;
    const json = exportPerformanceLogsJson(sessions);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `steelman-performance-log-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    setBackupNotice({
      ok: true,
      text: `Exported ${sessions.length} ${sessions.length === 1 ? 'round' : 'rounds'} to JSON.`,
    });
  };

  const handleImportFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const { merged, importedCount } = importPerformanceLogsJson(String(reader.result));
        onImportSessions(merged);
        setBackupNotice({
          ok: true,
          text: `Imported ${importedCount} ${importedCount === 1 ? 'round' : 'rounds'} (${merged.length} total in log).`,
        });
      } catch (err) {
        setBackupNotice({
          ok: false,
          text: err instanceof Error ? err.message : 'Could not import JSON file.',
        });
      }
    };
    reader.readAsText(file);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4 bg-black/60 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={clsx(
          'w-full max-w-xl max-h-[88vh] rounded-t-2xl sm:rounded-2xl border shadow-2xl flex flex-col overflow-hidden',
          isDark
            ? 'bg-[#141417] border-white/[0.08] text-zinc-100'
            : 'bg-white border-zinc-200 text-zinc-950'
        )}
      >
        <div className="pt-2.5 pb-1 flex justify-center sm:hidden shrink-0">
          <span className="w-9 h-1 rounded-full bg-zinc-500/35" />
        </div>

        {/* Header */}
        <div
          className={clsx(
            'px-5 py-3.5 border-b flex items-center justify-between gap-2 shrink-0',
            isDark ? 'border-white/[0.08]' : 'border-zinc-100'
          )}
        >
          <div className="min-w-0">
            <h2 className="text-[15px] font-semibold tracking-tight">Performance Log</h2>
            <p className="text-[11px] text-zinc-500">Stored locally on this device</p>
          </div>

          <div className="flex items-center gap-1 shrink-0">
            <input
              ref={fileInputRef}
              type="file"
              accept="application/json"
              className="hidden"
              onChange={(e) => {
                const f = e.target.files?.[0];
                if (f) handleImportFile(f);
                e.target.value = '';
              }}
            />
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              title="Import log backup JSON"
              className={clsx(
                'inline-flex items-center gap-1 px-2 py-1.5 rounded-lg text-xs font-medium transition-colors',
                isDark
                  ? 'text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.06]'
                  : 'text-zinc-500 hover:text-zinc-950 hover:bg-zinc-100'
              )}
            >
              <Upload className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Import</span>
            </button>
            {sessions.length > 0 && (
              <button
                type="button"
                onClick={handleExportLogs}
                title="Export log backup JSON"
                className={clsx(
                  'inline-flex items-center gap-1 px-2 py-1.5 rounded-lg text-xs font-medium transition-colors',
                  isDark
                    ? 'text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.06]'
                    : 'text-zinc-500 hover:text-zinc-950 hover:bg-zinc-100'
                )}
              >
                <Download className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Export</span>
              </button>
            )}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className={clsx(
                'p-1.5 rounded-lg transition-colors',
                isDark ? 'text-zinc-400 hover:bg-white/[0.06]' : 'text-zinc-500 hover:bg-zinc-100'
              )}
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Sub-Nav Tabs (only when sessions exist) */}
        {sessions.length > 0 && (
          <div className="px-5 pt-3 pb-2 shrink-0">
            <div
              className={clsx(
                'grid grid-cols-2 p-1 rounded-xl',
                isDark ? 'bg-[#0C0C0E]' : 'bg-zinc-100'
              )}
            >
              <button
                type="button"
                onClick={() => setActiveTab('history')}
                className={clsx(
                  'py-1.5 rounded-lg text-xs font-medium transition-all',
                  activeTab === 'history'
                    ? isDark
                      ? 'bg-[#26262B] text-white shadow-xs'
                      : 'bg-white text-zinc-950 shadow-xs'
                    : 'text-zinc-500'
                )}
              >
                History ({sessions.length})
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('insights')}
                className={clsx(
                  'py-1.5 rounded-lg text-xs font-medium transition-all inline-flex items-center justify-center gap-1.5',
                  activeTab === 'insights'
                    ? isDark
                      ? 'bg-[#26262B] text-white shadow-xs'
                      : 'bg-white text-zinc-950 shadow-xs'
                    : 'text-zinc-500'
                )}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Coach Insights</span>
              </button>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="px-5 py-3 overflow-y-auto space-y-5 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
          {backupNotice && (
            <div
              className={clsx(
                'px-3 py-2 rounded-xl text-xs flex items-center justify-between gap-2',
                backupNotice.ok
                  ? isDark
                    ? 'bg-emerald-500/10 text-emerald-400'
                    : 'bg-emerald-50 text-emerald-700'
                  : isDark
                    ? 'bg-rose-500/10 text-rose-400'
                    : 'bg-rose-50 text-rose-700'
              )}
            >
              <span>{backupNotice.text}</span>
              <button
                type="button"
                onClick={() => setBackupNotice(null)}
                className="opacity-70 hover:opacity-100"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          {sessions.length === 0 ? (
            <div className="py-10 text-center space-y-1.5">
              <p className="text-sm font-medium">No rounds logged yet</p>
              <p className="text-xs text-zinc-500 max-w-xs mx-auto leading-relaxed">
                Complete a sparring round to log your scores, run deep argument critiques, or import a saved JSON log.
              </p>
            </div>
          ) : activeTab === 'history' ? (
            <>
              {/* Clean Hairline Career Summary */}
              <div className="space-y-3">
                <div
                  className={clsx(
                    'grid grid-cols-3 pb-4 border-b text-center',
                    isDark ? 'border-white/[0.08]' : 'border-zinc-100'
                  )}
                >
                  <div>
                    <div className="text-[11px] text-zinc-500">Rounds</div>
                    <div className="text-lg font-semibold font-mono tabular-nums mt-0.5">
                      {stats.totalRounds}
                    </div>
                  </div>
                  <div>
                    <div className="text-[11px] text-zinc-500">Avg score</div>
                    <div className="text-lg font-semibold font-mono tabular-nums mt-0.5">
                      {stats.avgStrength}
                      {stats.recentTrendDelta !== 0 && (
                        <span
                          className={clsx(
                            'ml-1 text-[11px]',
                            stats.recentTrendDelta > 0 ? 'text-emerald-500' : 'text-rose-500'
                          )}
                        >
                          {stats.recentTrendDelta > 0
                            ? `+${stats.recentTrendDelta}`
                            : stats.recentTrendDelta}
                        </span>
                      )}
                    </div>
                  </div>
                  <div>
                    <div className="text-[11px] text-zinc-500">Edge rate</div>
                    <div className="text-lg font-semibold font-mono tabular-nums mt-0.5">
                      {stats.edgeRatePct}%
                    </div>
                  </div>
                </div>

                <div className="text-xs space-y-1">
                  <div>
                    <span className="text-zinc-500">Strength: </span>
                    <span className="font-medium">{stats.topStrength}</span>
                  </div>
                  <div>
                    <span className="text-zinc-500">Focus: </span>
                    <span className="font-medium">{stats.primaryFocus}</span>
                  </div>
                </div>
              </div>

              {/* Clean Hairline List of Past Rounds */}
              <div
                className={clsx(
                  'divide-y border-t',
                  isDark
                    ? 'divide-white/[0.06] border-white/[0.08]'
                    : 'divide-zinc-100 border-zinc-100'
                )}
              >
                {sessions.map((session) => {
                  const v = verdictDisplay(session.verdict);
                  const dateStr = new Date(session.updatedAt).toLocaleDateString(undefined, {
                    month: 'short',
                    day: 'numeric',
                  });

                  return (
                    <div key={session.id} className="flex items-center gap-2 py-3">
                      <button
                        type="button"
                        onClick={() => onSelectSession(session)}
                        className="flex-1 text-left flex items-center justify-between gap-3 min-w-0 group"
                      >
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-[13.5px] font-medium truncate group-hover:underline">
                              {session.topicTitle}
                            </span>
                            {session.deepAnalysis && (
                              <span
                                className={clsx(
                                  'text-[10px] font-medium px-1.5 py-0.5 rounded border shrink-0',
                                  isDark
                                    ? 'bg-white/[0.05] border-white/[0.1] text-zinc-400'
                                    : 'bg-zinc-100 border-zinc-200 text-zinc-600'
                                )}
                              >
                                Analyzed
                              </span>
                            )}
                          </div>
                          <div className="text-[11.5px] text-zinc-500 flex items-center gap-1.5 mt-0.5">
                            <span
                              className={
                                v.tone === 'emerald'
                                  ? 'text-emerald-500 font-medium'
                                  : v.tone === 'rose'
                                    ? 'text-rose-500 font-medium'
                                    : ''
                              }
                            >
                              {v.title}
                            </span>
                            <span>·</span>
                            <span>{session.stance.toUpperCase()}</span>
                            <span>·</span>
                            <span>{dateStr}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 shrink-0">
                          <div className="hidden xs:block w-14">
                            <MomentumSparkline
                              series={session.momentumSeries}
                              isDark={isDark}
                              height={22}
                            />
                          </div>
                          <span className="font-mono text-xs font-semibold tabular-nums">
                            {session.avgStrength}
                          </span>
                          <ChevronRight className="w-4 h-4 text-zinc-500" />
                        </div>
                      </button>

                      <button
                        type="button"
                        onClick={() => onDeleteSession(session.id)}
                        aria-label={`Delete ${session.topicTitle}`}
                        className="p-1.5 text-zinc-600 hover:text-rose-500 transition-colors shrink-0"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  );
                })}
              </div>
            </>
          ) : (
            /* CROSS-SESSION COACH INSIGHTS TAB */
            <div className="space-y-5">
              {!historicalAnalysis ? (
                <div
                  className={clsx(
                    'p-6 rounded-2xl border text-center space-y-3',
                    isDark ? 'bg-[#0C0C0E] border-white/[0.08]' : 'bg-zinc-50 border-zinc-200'
                  )}
                >
                  <Sparkles className="w-6 h-6 mx-auto text-zinc-400" />
                  <div className="space-y-1">
                    <h3 className="font-editorial text-lg font-medium tracking-tight">
                      Historical Argument Analysis
                    </h3>
                    <p className="text-xs text-zinc-500 max-w-sm mx-auto leading-relaxed">
                      Synthesize up to your last 10 logged rounds to uncover recurring strengths, persistent blind spots, and concrete argument upgrades.
                    </p>
                  </div>

                  <div className="pt-1 flex flex-col items-center gap-2">
                    <button
                      type="button"
                      disabled={analyzingHistory}
                      onClick={() => void handleRunHistoricalAnalysis()}
                      className={clsx(
                        'inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold transition-colors disabled:opacity-45',
                        isDark
                          ? 'bg-white text-zinc-950 hover:bg-zinc-200'
                          : 'bg-zinc-950 text-white hover:bg-zinc-800'
                      )}
                    >
                      {analyzingHistory ? (
                        <>
                          <Loader2 className="w-3.5 h-3.5 animate-spin" />
                          <span>Analyzing {Math.min(10, sessions.length)} rounds...</span>
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>Analyze {Math.min(10, sessions.length)} Past {sessions.length === 1 ? 'Round' : 'Rounds'}</span>
                        </>
                      )}
                    </button>

                    <div className="text-[11px] text-zinc-500 flex items-center gap-1.5">
                      <span>Engine: {engineLabel}</span>
                      {!isLiveAi && onOpenSettings && (
                        <>
                          <span>·</span>
                          <button
                            type="button"
                            onClick={() => {
                              onClose();
                              onOpenSettings();
                            }}
                            className="underline underline-offset-2 hover:text-zinc-300"
                          >
                            Switch to AI
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  {/* Meta Header & Refresh */}
                  <div
                    className={clsx(
                      'pb-3 border-b flex items-center justify-between gap-2 text-xs',
                      isDark ? 'border-white/[0.08]' : 'border-zinc-100'
                    )}
                  >
                    <div className="text-zinc-500 min-w-0 truncate">
                      <span>
                        {historicalAnalysis.sessionsAnalyzed}{' '}
                        {historicalAnalysis.sessionsAnalyzed === 1 ? 'round' : 'rounds'} ·{' '}
                        {historicalAnalysis.engineLabel}
                      </span>
                      {isAnalysisStale && (
                        <span className={clsx('ml-1.5 font-medium', isDark ? 'text-zinc-300' : 'text-zinc-700')}>
                          · New rounds available
                        </span>
                      )}
                    </div>

                    <button
                      type="button"
                      disabled={analyzingHistory}
                      onClick={() => void handleRunHistoricalAnalysis()}
                      className={clsx(
                        'inline-flex items-center gap-1 px-2.5 py-1 rounded-lg border text-[11px] font-medium shrink-0 transition-colors disabled:opacity-45',
                        isAnalysisStale
                          ? isDark
                            ? 'bg-white text-zinc-950 border-white hover:bg-zinc-200'
                            : 'bg-zinc-950 text-white border-zinc-950 hover:bg-zinc-800'
                          : isDark
                            ? 'border-white/[0.1] text-zinc-300 hover:bg-white/[0.06]'
                            : 'border-zinc-200 text-zinc-700 hover:bg-zinc-100'
                      )}
                    >
                      {analyzingHistory ? (
                        <Loader2 className="w-3 h-3 animate-spin" />
                      ) : (
                        <RefreshCw className="w-3 h-3" />
                      )}
                      <span>{analyzingHistory ? 'Analyzing...' : 'Re-analyze'}</span>
                    </button>
                  </div>

                  {/* Executive Summary */}
                  <p
                    className={clsx(
                      'font-editorial text-[16px] leading-relaxed',
                      isDark ? 'text-zinc-200' : 'text-zinc-800'
                    )}
                  >
                    {historicalAnalysis.executiveSummary}
                  </p>

                  {/* Recurring Strengths */}
                  <div className="space-y-2">
                    <h3 className="text-[11px] font-medium uppercase tracking-wider text-emerald-500">
                      Recurring Strengths
                    </h3>
                    <div
                      className={clsx(
                        'divide-y rounded-xl border px-3.5',
                        isDark
                          ? 'bg-[#0C0C0E] border-white/[0.08] divide-white/[0.06]'
                          : 'bg-zinc-50/70 border-zinc-200 divide-zinc-200/70'
                      )}
                    >
                      {historicalAnalysis.recurringStrengths.map((item, idx) => (
                        <div key={idx} className="py-2.5 space-y-0.5">
                          <div className="text-xs font-medium">{item.title}</div>
                          <p className="text-xs text-zinc-500 leading-relaxed">{item.detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Recurring Weaknesses */}
                  <div className="space-y-2">
                    <h3 className="text-[11px] font-medium uppercase tracking-wider text-rose-500">
                      Recurring Weaknesses
                    </h3>
                    <div
                      className={clsx(
                        'divide-y rounded-xl border px-3.5',
                        isDark
                          ? 'bg-[#0C0C0E] border-white/[0.08] divide-white/[0.06]'
                          : 'bg-zinc-50/70 border-zinc-200 divide-zinc-200/70'
                      )}
                    >
                      {historicalAnalysis.recurringWeaknesses.map((item, idx) => (
                        <div key={idx} className="py-2.5 space-y-0.5">
                          <div className="text-xs font-medium">{item.title}</div>
                          <p className="text-xs text-zinc-500 leading-relaxed">{item.detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Proposed Strategic Changes */}
                  <div className="space-y-2">
                    <h3 className="text-[11px] font-medium uppercase tracking-wider text-zinc-500">
                      Proposed Changes to Adopt
                    </h3>
                    <div className="space-y-2">
                      {historicalAnalysis.strategicRecommendations.map((rec, idx) => (
                        <div
                          key={idx}
                          className={clsx(
                            'p-3 rounded-xl border space-y-0.5',
                            isDark
                              ? 'bg-[#0C0C0E] border-white/[0.08]'
                              : 'bg-zinc-50/70 border-zinc-200'
                          )}
                        >
                          <div className="text-xs font-medium">
                            <span className="font-mono text-zinc-500 mr-1.5">0{idx + 1}</span>
                            {rec.title}
                          </div>
                          <p
                            className={clsx(
                              'text-xs leading-relaxed',
                              isDark ? 'text-zinc-400' : 'text-zinc-600'
                            )}
                          >
                            {rec.action}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Concrete Before -> After Example */}
                  {historicalAnalysis.exampleUpgrade && (
                    <div className="space-y-2">
                      <h3 className="text-[11px] font-medium uppercase tracking-wider text-zinc-500">
                        Concrete Rewrite · {historicalAnalysis.exampleUpgrade.topicTitle}
                      </h3>
                      <div
                        className={clsx(
                          'p-3.5 rounded-xl border space-y-3 text-xs',
                          isDark
                            ? 'bg-[#0C0C0E] border-white/[0.08]'
                            : 'bg-zinc-50/70 border-zinc-200'
                        )}
                      >
                        <div className="space-y-1">
                          <div className="text-[10.5px] font-medium uppercase tracking-wider text-zinc-500">
                            Original
                          </div>
                          <blockquote
                            className={clsx(
                              'pl-3 border-l-2 leading-relaxed',
                              isDark
                                ? 'border-zinc-700 text-zinc-400'
                                : 'border-zinc-300 text-zinc-600'
                            )}
                          >
                            {historicalAnalysis.exampleUpgrade.before}
                          </blockquote>
                        </div>
                        <div className="space-y-1">
                          <div className="text-[10.5px] font-medium uppercase tracking-wider text-emerald-500">
                            Proposed Revision
                          </div>
                          <blockquote
                            className={clsx(
                              'pl-3 border-l-2 border-emerald-500/75 font-editorial text-[14.5px] leading-relaxed',
                              isDark ? 'text-zinc-100' : 'text-zinc-900'
                            )}
                          >
                            {historicalAnalysis.exampleUpgrade.after}
                          </blockquote>
                        </div>
                        {historicalAnalysis.exampleUpgrade.why && (
                          <p className="text-[11.5px] text-zinc-500 leading-relaxed pt-0.5">
                            <span className={isDark ? 'text-zinc-300 font-medium' : 'text-zinc-700 font-medium'}>
                              Why it works:{' '}
                            </span>
                            {historicalAnalysis.exampleUpgrade.why}
                          </p>
                        )}
                      </div>
                    </div>
                  )}
                </>
              )}

              {analysisError && (
                <div
                  className={clsx(
                    'px-3.5 py-2.5 rounded-xl text-xs',
                    isDark ? 'bg-rose-500/10 text-rose-400' : 'bg-rose-50 text-rose-700'
                  )}
                >
                  {analysisError}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
