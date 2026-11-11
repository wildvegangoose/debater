import { useEffect, useMemo, useState } from 'react';
import clsx from 'clsx';
import {
  Check,
  Copy,
  ExternalLink,
  FileSpreadsheet,
  GitPullRequest,
  Sparkles,
  X,
} from 'lucide-react';
import {
  DebateGraphDataset,
  DebateNode,
  DebateNodeKind,
  DebateSourceLink,
  DebateTag,
  DebateTopicId,
  SourceCategory,
} from '../types/debate';
import { fetchDataset, TOPIC_CATALOG } from '../data/datasets';

const GITHUB_NEW_ISSUE_BASE = 'https://github.com/wildvegangoose/debater/issues/new';
const MAX_SAFE_URL_LENGTH = 4500;

export interface SuggestNodeDraft {
  topicId?: DebateTopicId;
  parentId?: string | null;
  kind?: Extract<DebateNodeKind, 'pro' | 'con' | 'thesis'>;
  title?: string;
  summary?: string;
  details?: string[];
  analysisText?: string;
  sources?: DebateSourceLink[];
  sourcesText?: string;
  tags?: DebateTag[];
  era?: string;
}

interface SuggestNodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeDataset: DebateGraphDataset;
  activeNodes: DebateNode[];
  initialDraft?: SuggestNodeDraft | null;
  onPreviewInSandbox?: (nodeData: Omit<DebateNode, 'id'>) => void;
  isDark: boolean;
}

type SubmissionKindLabel =
  | 'New Argument Node'
  | 'New Contested Thesis'
  | 'Edit Existing Node / Add Source';

function slugifyId(input: string): string {
  const base = input
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 40);
  return base ? `community-${base}` : 'community-node';
}

function escapeCsvCell(value: string): string {
  const normalized = value.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
  if (/[",\n]/.test(normalized)) {
    return `"${normalized.replace(/"/g, '""')}"`;
  }
  return normalized;
}

const VALID_SOURCE_CATEGORIES: SourceCategory[] = [
  'Primary Text / Treaty',
  'Watchdog / NGO',
  'Empirical / Economic Study',
  'Court / Official Record',
  'Debate / Broadcast',
  'Scholarship',
];

function parseSourceLines(raw: string): {
  sources: DebateSourceLink[];
  invalidLines: string[];
} {
  const sources: DebateSourceLink[] = [];
  const invalidLines: string[] = [];

  for (const line of raw.split('\n').map((l) => l.trim()).filter(Boolean)) {
    const parts = line.split('|').map((p) => p.trim());
    const title = parts[0] || '';
    const url = parts[1] || '';
    const publisher = parts[2] || undefined;
    const categoryCandidate = parts[3] as SourceCategory | undefined;
    const category =
      categoryCandidate && VALID_SOURCE_CATEGORIES.includes(categoryCandidate)
        ? categoryCandidate
        : undefined;

    if (!title || !/^https?:\/\/[^\s]+$/i.test(url)) {
      invalidLines.push(line);
      continue;
    }
    sources.push({ title, url, publisher, category });
  }

  return { sources, invalidLines };
}

export function SuggestNodeModal({
  isOpen,
  onClose,
  activeDataset,
  activeNodes,
  initialDraft,
  onPreviewInSandbox,
  isDark,
}: SuggestNodeModalProps) {
  const [selectedTopicId, setSelectedTopicId] = useState<DebateTopicId>(activeDataset.id);
  const [targetDataset, setTargetDataset] = useState<DebateGraphDataset>(activeDataset);
  const [topicNodes, setTopicNodes] = useState<DebateNode[]>(activeNodes);
  const [isLoadingTopicNodes, setIsLoadingTopicNodes] = useState(false);

  const [submissionType, setSubmissionType] = useState<SubmissionKindLabel>('New Argument Node');
  const [parentFilter, setParentFilter] = useState('');
  const [parentId, setParentId] = useState<string>('');
  const [role, setRole] = useState<Extract<DebateNodeKind, 'pro' | 'con' | 'thesis'>>('pro');
  const [headline, setHeadline] = useState('');
  const [summary, setSummary] = useState('');
  const [detailsText, setDetailsText] = useState('');
  const [sourcesText, setSourcesText] = useState('');
  const [selectedTags, setSelectedTags] = useState<DebateTag[]>(activeDataset.availableTags.slice(0, 1));
  const [era, setEra] = useState('');
  const [rationale, setRationale] = useState('');
  const [contributor, setContributor] = useState('');

  const [copiedNotice, setCopiedNotice] = useState<string | null>(null);
  const [urlLengthWarning, setUrlLengthWarning] = useState<string | null>(null);
  const [previewedLocally, setPreviewedLocally] = useState(false);

  // Sync state when opening modal or changing initialDraft
  useEffect(() => {
    if (!isOpen) return;
    const startTopic = initialDraft?.topicId ?? activeDataset.id;
    setSelectedTopicId(startTopic);
    setTargetDataset(activeDataset);
    setTopicNodes(activeNodes);
    setParentFilter('');
    setUrlLengthWarning(null);
    setPreviewedLocally(false);
    setCopiedNotice(null);

    const draftKind = initialDraft?.kind ?? 'pro';
    setRole(draftKind);
    setSubmissionType(draftKind === 'thesis' ? 'New Contested Thesis' : 'New Argument Node');
    setParentId(initialDraft?.parentId ?? activeNodes[0]?.id ?? '');
    setHeadline(initialDraft?.title ?? '');
    setSummary(initialDraft?.summary ?? '');
    setEra(initialDraft?.era ?? '');

    if (initialDraft?.details?.length) {
      setDetailsText(initialDraft.details.join('\n'));
    } else if (initialDraft?.analysisText) {
      setDetailsText(initialDraft.analysisText);
    } else {
      setDetailsText('');
    }

    if (initialDraft?.sourcesText) {
      setSourcesText(initialDraft.sourcesText);
    } else if (initialDraft?.sources?.length) {
      setSourcesText(
        initialDraft.sources
          .map(
            (s) =>
              `${s.title} | ${s.url}${s.publisher ? ` | ${s.publisher}` : ''}${s.category ? ` | ${s.category}` : ''}`
          )
          .join('\n')
      );
    } else {
      setSourcesText('');
    }

    setSelectedTags(
      initialDraft?.tags && initialDraft.tags.length > 0
        ? initialDraft.tags
        : activeDataset.availableTags.slice(0, 1)
    );
    setRationale('');
  }, [isOpen, initialDraft, activeDataset, activeNodes]);

  // Fetch nodes when switching topic inside modal
  useEffect(() => {
    if (!isOpen) return;
    if (selectedTopicId === activeDataset.id) {
      setTargetDataset(activeDataset);
      setTopicNodes(activeNodes);
      if (!activeNodes.some((n) => n.id === parentId)) {
        setParentId(activeNodes[0]?.id ?? '');
      }
      return;
    }

    let cancelled = false;
    setIsLoadingTopicNodes(true);
    fetchDataset(selectedTopicId)
      .then((ds) => {
        if (cancelled) return;
        setTargetDataset(ds);
        setTopicNodes(ds.nodes);
        setParentId((prev) =>
          prev && ds.nodes.some((n) => n.id === prev) ? prev : ds.nodes[0]?.id ?? ''
        );
        setSelectedTags((prev) => {
          const valid = prev.filter((t) => ds.availableTags.includes(t));
          return valid.length > 0 ? valid : ds.availableTags.slice(0, 1);
        });
      })
      .finally(() => {
        if (!cancelled) setIsLoadingTopicNodes(false);
      });

    return () => {
      cancelled = true;
    };
  }, [isOpen, selectedTopicId, activeDataset, activeNodes]);

  const filteredParents = useMemo(() => {
    const q = parentFilter.trim().toLowerCase();
    return topicNodes.filter((n) => {
      if (!q) return true;
      return n.title.toLowerCase().includes(q) || n.id.toLowerCase().includes(q);
    });
  }, [topicNodes, parentFilter]);

  const parsedSources = useMemo(() => parseSourceLines(sourcesText), [sourcesText]);

  const detailsArray = useMemo(
    () =>
      detailsText
        .split('\n')
        .map((d) => d.trim())
        .filter(Boolean),
    [detailsText]
  );

  const generatedPayload = useMemo(() => {
    const nodeId = slugifyId(headline);
    const parentObj = topicNodes.find((n) => n.id === parentId) ?? null;
    return {
      schemaVersion: 1,
      submissionType,
      topicId: selectedTopicId,
      parentId: parentId || (topicNodes[0]?.id ?? 'root'),
      parentTitle: parentObj?.title ?? undefined,
      contributor: contributor.trim() || 'community-contributor',
      rationale: rationale.trim() || undefined,
      node: {
        id: nodeId,
        parentId: parentId || (topicNodes[0]?.id ?? null),
        kind: role,
        title: headline.trim(),
        summary: summary.trim(),
        details: detailsArray,
        sources: parsedSources.sources,
        tags: selectedTags.length > 0 ? selectedTags : targetDataset.availableTags.slice(0, 1),
        ...(era.trim() ? { era: era.trim() } : {}),
        isCommunity: true,
        ...(contributor.trim() ? { contributor: contributor.trim() } : {}),
      },
    };
  }, [
    headline,
    topicNodes,
    parentId,
    submissionType,
    selectedTopicId,
    contributor,
    rationale,
    role,
    summary,
    detailsArray,
    parsedSources.sources,
    selectedTags,
    targetDataset.availableTags,
    era,
  ]);

  const canSubmit =
    headline.trim().length >= 5 &&
    summary.trim().length >= 15 &&
    Boolean(parentId) &&
    parsedSources.sources.length >= 1 &&
    parsedSources.invalidLines.length === 0;

  const toggleTag = (tag: DebateTag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? (prev.length > 1 ? prev.filter((t) => t !== tag) : prev) : [...prev, tag]
    );
  };

  const showToast = (msg: string) => {
    setCopiedNotice(msg);
    setTimeout(() => setCopiedNotice(null), 2600);
  };

  const handleCopyJson = async () => {
    const text = JSON.stringify(generatedPayload, null, 2);
    await navigator.clipboard.writeText(text);
    showToast('Copied submission JSON to clipboard');
  };

  const handleDownloadCsv = () => {
    const headers = [
      'topic_id',
      'submission_type',
      'parent_id',
      'role',
      'headline',
      'summary',
      'details',
      'sources',
      'tags',
      'rationale',
      'contributor',
      'json_payload',
    ];
    const row = [
      selectedTopicId,
      submissionType,
      parentId,
      role,
      headline.trim(),
      summary.trim(),
      detailsArray.join(' || '),
      sourcesText.trim(),
      selectedTags.join(', '),
      rationale.trim(),
      contributor.trim(),
      JSON.stringify(generatedPayload),
    ];
    const csvContent = `${headers.join(',')}\n${row.map(escapeCsvCell).join(',')}\n`;
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `dialectica-suggestion-${selectedTopicId}-${slugifyId(headline)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('Downloaded spreadsheet CSV row');
  };

  const buildIssueUrl = (includeJsonPayload: boolean) => {
    const params = new URLSearchParams({
      template: 'node-suggestion.yml',
      title: `[Suggestion] [${selectedTopicId}] ${headline.trim()}`,
      submission_type: submissionType,
      topic_id: selectedTopicId,
      parent_id: parentId,
      role,
      headline: headline.trim(),
      summary: summary.trim(),
      details: detailsArray.map((d) => `- ${d}`).join('\n'),
      sources: sourcesText.trim(),
      tags: selectedTags.join(', '),
      rationale: rationale.trim() || 'Adds a primary-sourced, steelmanned perspective to this branch.',
      contributor: contributor.trim(),
    });
    if (includeJsonPayload) {
      params.set('json_payload', JSON.stringify(generatedPayload, null, 2));
    }
    return `${GITHUB_NEW_ISSUE_BASE}?${params.toString()}`;
  };

  const handleOpenGitHubIssue = () => {
    if (!canSubmit) return;
    setUrlLengthWarning(null);
    const fullUrl = buildIssueUrl(true);

    if (fullUrl.length <= MAX_SAFE_URL_LENGTH) {
      window.open(fullUrl, '_blank', 'noopener,noreferrer');
      return;
    }

    const compactUrl = buildIssueUrl(false);
    window.open(compactUrl, '_blank', 'noopener,noreferrer');

    const jsonText = JSON.stringify(generatedPayload, null, 2);
    navigator.clipboard
      ?.writeText(jsonText)
      .then(() => {
        setUrlLengthWarning(
          'Your detailed submission exceeded browser URL limits, so we opened the form without the JSON field and copied your full JSON payload to clipboard to paste if desired.'
        );
      })
      .catch(() => {
        setUrlLengthWarning(
          'Submission is very long — use "Copy JSON" below and paste into the Structured JSON field on GitHub.'
        );
      });
  };

  const handlePreviewSandbox = () => {
    if (!onPreviewInSandbox || selectedTopicId !== activeDataset.id || !headline.trim() || !summary.trim()) return;
    onPreviewInSandbox({
      parentId: parentId || null,
      kind: role,
      title: headline.trim(),
      summary: summary.trim(),
      details: detailsArray,
      sources: parsedSources.sources.length > 0 ? parsedSources.sources : undefined,
      tags: selectedTags,
      era: era.trim() || undefined,
      isCustom: true,
      contributor: contributor.trim() || undefined,
    });
    setPreviewedLocally(true);
    showToast('Added preview to your local sandbox!');
  };

  if (!isOpen) return null;

  const inputClass = clsx(
    'w-full px-3 py-2 rounded-lg text-sm border focus:outline-none focus:ring-2 focus:ring-indigo-500',
    isDark
      ? 'bg-slate-950 border-slate-700 text-slate-100 placeholder:text-slate-500'
      : 'bg-white border-slate-300 text-slate-900 placeholder:text-slate-400'
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/65 backdrop-blur-xs">
      <div
        className={clsx(
          'w-full max-w-3xl max-h-[92vh] rounded-2xl border shadow-2xl flex flex-col overflow-hidden',
          isDark ? 'bg-slate-900 border-slate-700 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
        )}
      >
        {/* Header */}
        <div
          className={clsx(
            'px-5 py-4 border-b flex items-start justify-between gap-4 shrink-0',
            isDark ? 'border-slate-800 bg-slate-950/70' : 'border-slate-200 bg-slate-50'
          )}
        >
          <div>
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-indigo-600 text-white shadow-xs">
                <GitPullRequest className="w-4 h-4" />
              </span>
              <h2 className="font-editorial text-lg font-bold tracking-tight">
                Suggest an Argument to the Public Map
              </h2>
            </div>
            <p className={clsx('text-xs mt-1 leading-relaxed', isDark ? 'text-slate-400' : 'text-slate-600')}>
              Submit steelmanned claims backed by primary sources. An automated GitHub Action checks links, schema, and types — approved submissions merge straight into the live dataset.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className={clsx(
              'p-1.5 rounded-lg transition-colors shrink-0',
              isDark ? 'hover:bg-slate-800 text-slate-400' : 'hover:bg-slate-200 text-slate-500'
            )}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {copiedNotice && (
            <div className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-emerald-500/15 border border-emerald-500/35 text-emerald-400 text-xs font-medium">
              <Check className="w-4 h-4 shrink-0" />
              {copiedNotice}
            </div>
          )}

          {urlLengthWarning && (
            <div className="px-3.5 py-2.5 rounded-xl bg-amber-500/15 border border-amber-500/35 text-amber-300 text-xs leading-relaxed">
              {urlLengthWarning}
            </div>
          )}

          {/* Topic + Submission Type */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5 opacity-80">
                Debate Topic *
              </label>
              <select
                value={selectedTopicId}
                onChange={(e) => setSelectedTopicId(e.target.value as DebateTopicId)}
                className={inputClass}
              >
                {TOPIC_CATALOG.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.shortTitle} ({t.category})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5 opacity-80">
                Submission Type
              </label>
              <select
                value={submissionType}
                onChange={(e) => {
                  const next = e.target.value as SubmissionKindLabel;
                  setSubmissionType(next);
                  if (next === 'New Contested Thesis') setRole('thesis');
                }}
                className={inputClass}
              >
                <option value="New Argument Node">New Argument Node (Pro / Con)</option>
                <option value="New Contested Thesis">New Contested Thesis (Under Pillar)</option>
                <option value="Edit Existing Node / Add Source">Edit Existing Node / Add Source</option>
              </select>
            </div>
          </div>

          {/* Target Parent Selector + Search */}
          <div>
            <div className="flex items-center justify-between gap-2 mb-1.5">
              <label className="block text-xs font-semibold uppercase tracking-wider opacity-80">
                Target Parent Claim / Branch *
              </label>
              {isLoadingTopicNodes && (
                <span className="text-[11px] text-indigo-400">Loading topic nodes...</span>
              )}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <input
                type="text"
                value={parentFilter}
                onChange={(e) => setParentFilter(e.target.value)}
                placeholder="Filter parent nodes..."
                className={clsx(inputClass, 'sm:col-span-1 text-xs')}
              />
              <select
                value={parentId}
                onChange={(e) => setParentId(e.target.value)}
                className={clsx(inputClass, 'sm:col-span-2 text-xs font-medium')}
              >
                {filteredParents.map((n) => (
                  <option key={n.id} value={n.id}>
                    [{n.kind.toUpperCase()}] {n.title} ({n.id})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Role */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5 opacity-80">
              Logical Role *
            </label>
            <div className="grid grid-cols-3 gap-2">
              {(
                [
                  { value: 'pro', label: '+ Supports Parent (PRO)', active: 'border-emerald-500 bg-emerald-500/15 text-emerald-400' },
                  { value: 'con', label: '− Challenges Parent (CON)', active: 'border-rose-500 bg-rose-500/15 text-rose-400' },
                  { value: 'thesis', label: '? Contested Thesis', active: 'border-amber-500 bg-amber-500/15 text-amber-400' },
                ] as const
              ).map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setRole(opt.value)}
                  className={clsx(
                    'py-2 px-3 rounded-lg text-xs font-semibold border transition-all',
                    role === opt.value
                      ? opt.active
                      : isDark
                        ? 'border-slate-700 bg-slate-800/50 text-slate-400 hover:bg-slate-800'
                        : 'border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100'
                  )}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Headline & Era */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5 opacity-80">
                Argument Headline *
              </label>
              <input
                type="text"
                required
                value={headline}
                onChange={(e) => setHeadline(e.target.value)}
                placeholder="e.g., Algorithmic Compute Thresholds Miss Open-Weight Proliferation Risks"
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5 opacity-80">
                Year / Period (optional)
              </label>
              <input
                type="text"
                value={era}
                onChange={(e) => setEra(e.target.value)}
                placeholder="e.g., 2023–2026"
                className={inputClass}
              />
            </div>
          </div>

          {/* Summary */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5 opacity-80">
              Steelmanned Summary (2–3 concise sentences) *
            </label>
            <textarea
              required
              rows={2}
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              placeholder="State the strongest, good-faith version of this claim and its core empirical mechanism..."
              className={inputClass}
            />
          </div>

          {/* Takeaways / Rich Details */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5 opacity-80">
              Empirical Evidence &amp; Key Takeaways (one bullet per line)
            </label>
            <textarea
              rows={3}
              value={detailsText}
              onChange={(e) => setDetailsText(e.target.value)}
              placeholder={'First concrete finding, metric, or treaty clause...\nSecond supporting piece of evidence...'}
              className={clsx(inputClass, 'text-xs')}
            />
          </div>

          {/* Primary Sources */}
          <div>
            <div className="flex items-center justify-between gap-2 mb-1.5">
              <label className="block text-xs font-semibold uppercase tracking-wider opacity-80">
                Original Sources * (`Title | https://url | Publisher`, one per line)
              </label>
              <span
                className={clsx(
                  'text-[11px] font-medium',
                  parsedSources.invalidLines.length > 0
                    ? 'text-rose-400'
                    : parsedSources.sources.length > 0
                      ? 'text-emerald-400'
                      : 'text-slate-400'
                )}
              >
                {parsedSources.invalidLines.length > 0
                  ? `${parsedSources.invalidLines.length} line(s) missing valid https:// URL`
                  : `${parsedSources.sources.length} valid link(s)`}
              </span>
            </div>
            <textarea
              rows={3}
              value={sourcesText}
              onChange={(e) => setSourcesText(e.target.value)}
              placeholder={'OECD AI Policy Observatory Report | https://oecd.ai/en/ | OECD | Empirical / Economic Study\nOpen-Weight Safety Benchmark Study | https://arxiv.org/abs/2401.00001 | arXiv | Scholarship'}
              className={clsx(inputClass, 'text-xs font-mono')}
            />
          </div>

          {/* Thematic Tags */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5 opacity-80">
              Thematic Lenses
            </label>
            <div className="flex flex-wrap gap-1.5">
              {targetDataset.availableTags.map((tag) => {
                const active = selectedTags.includes(tag);
                return (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => toggleTag(tag)}
                    className={clsx(
                      'px-2.5 py-1 rounded-full text-xs font-medium border transition-colors',
                      active
                        ? 'bg-indigo-600 border-indigo-500 text-white'
                        : isDark
                          ? 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'
                          : 'bg-slate-100 border-slate-200 text-slate-600 hover:bg-slate-200'
                    )}
                  >
                    {tag}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Maintainer Rationale & Contributor */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5 opacity-80">
                Why This Node Belongs in the Graph (optional)
              </label>
              <input
                type="text"
                value={rationale}
                onChange={(e) => setRationale(e.target.value)}
                placeholder="e.g., Captures key counter-argument raised in the 2024 EU AI Act negotiations..."
                className={clsx(inputClass, 'text-xs')}
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5 opacity-80">
                Credit / @GitHub Handle
              </label>
              <input
                type="text"
                value={contributor}
                onChange={(e) => setContributor(e.target.value)}
                placeholder="@yourhandle"
                className={clsx(inputClass, 'text-xs')}
              />
            </div>
          </div>
        </div>

        {/* Action Footer */}
        <div
          className={clsx(
            'px-5 py-3.5 border-t flex flex-wrap items-center justify-between gap-2.5 shrink-0',
            isDark ? 'border-slate-800 bg-slate-950/75' : 'border-slate-200 bg-slate-50'
          )}
        >
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={handleCopyJson}
              title="Copy structured JSON for GitHub PR or Issue"
              className={clsx(
                'inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium border transition-colors',
                isDark
                  ? 'bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700'
                  : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-100'
              )}
            >
              <Copy className="w-3.5 h-3.5" />
              Copy JSON
            </button>

            <button
              type="button"
              onClick={handleDownloadCsv}
              title="Export spreadsheet-compatible CSV row (Excel / Google Sheets)"
              className={clsx(
                'inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium border transition-colors',
                isDark
                  ? 'bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700'
                  : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-100'
              )}
            >
              <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-400" />
              Export CSV
            </button>

            {onPreviewInSandbox && selectedTopicId === activeDataset.id && (
              <button
                type="button"
                disabled={!headline.trim() || !summary.trim()}
                onClick={handlePreviewSandbox}
                className={clsx(
                  'inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium border transition-colors disabled:opacity-40 disabled:cursor-not-allowed',
                  isDark
                    ? 'bg-indigo-500/15 border-indigo-400/35 text-indigo-300 hover:bg-indigo-500/25'
                    : 'bg-indigo-50 border-indigo-200 text-indigo-700 hover:bg-indigo-100'
                )}
              >
                <Sparkles className="w-3.5 h-3.5" />
                {previewedLocally ? 'Added to Sandbox' : 'Preview Locally'}
              </button>
            )}
          </div>

          <div className="flex items-center gap-2 ml-auto">
            <button
              type="button"
              onClick={onClose}
              className={clsx(
                'px-3.5 py-2 rounded-lg text-xs font-semibold transition-colors',
                isDark ? 'bg-slate-800 text-slate-300 hover:bg-slate-700' : 'bg-slate-200/70 text-slate-700 hover:bg-slate-200'
              )}
            >
              Cancel
            </button>
            <button
              type="button"
              disabled={!canSubmit}
              onClick={handleOpenGitHubIssue}
              title={
                canSubmit
                  ? 'Open pre-filled GitHub Issue for automated review'
                  : 'Fill headline (5+ chars), summary (15+ chars), and at least 1 valid https:// source URL'
              }
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-indigo-600 text-white hover:bg-indigo-500 disabled:opacity-45 disabled:cursor-not-allowed transition-colors shadow-xs"
            >
              Submit via GitHub Issue
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
