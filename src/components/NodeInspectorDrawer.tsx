import { Fragment, ReactNode, useState } from 'react';
import clsx from 'clsx';
import {
  ArrowUpRight,
  BookOpen,
  Check,
  ChevronRight,
  Crosshair,
  Edit3,
  ExternalLink,
  FileText,
  GitBranch,
  GitPullRequest,
  Link2,
  Maximize2,
  Minimize2,
  MinusCircle,
  PlusCircle,
  Trash2,
  X,
} from 'lucide-react';
import { DebateNode, DebateNodeKind, DebateTopicId, SourceCategory } from '../types/debate';
import { getAncestorIds } from '../utils/graphLayout';
import type { SuggestNodeDraft } from './SuggestNodeModal';

interface NodeInspectorDrawerProps {
  topicId: DebateTopicId;
  epistemologyNote: string;
  selectedNode: DebateNode | null;
  allNodes: DebateNode[];
  isDark: boolean;
  onClose: () => void;
  onSelectAndZoom: (nodeId: string, frameChildren?: boolean) => void;
  onOpenAddChild: (parent: DebateNode, defaultKind: Extract<DebateNodeKind, 'pro' | 'con' | 'thesis'>) => void;
  onOpenEdit: (node: DebateNode) => void;
  onDeleteNode: (node: DebateNode) => void;
  onSuggestNode?: (draft: SuggestNodeDraft) => void;
}

const KIND_HEADER_BADGE: Record<DebateNodeKind, { label: string; dark: string; light: string }> = {
  root: {
    label: 'Central Inquiry',
    dark: 'bg-indigo-500/20 text-indigo-300 border-indigo-400/30',
    light: 'bg-indigo-50 text-indigo-700 border-indigo-200',
  },
  pillar: {
    label: 'Debate Pillar',
    dark: 'bg-sky-500/20 text-sky-300 border-sky-400/30',
    light: 'bg-sky-50 text-sky-700 border-sky-200',
  },
  thesis: {
    label: 'Contested Thesis',
    dark: 'bg-amber-500/20 text-amber-300 border-amber-400/30',
    light: 'bg-amber-50 text-amber-800 border-amber-200',
  },
  pro: {
    label: '+ Supports Parent Claim',
    dark: 'bg-emerald-500/20 text-emerald-300 border-emerald-400/30',
    light: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  },
  con: {
    label: '− Challenges Parent Claim',
    dark: 'bg-rose-500/20 text-rose-300 border-rose-400/30',
    light: 'bg-rose-50 text-rose-700 border-rose-200',
  },
};

const SOURCE_CATEGORY_COLORS: Record<SourceCategory, { dark: string; light: string }> = {
  'Primary Text / Treaty': {
    dark: 'bg-indigo-500/15 text-indigo-300 border-indigo-400/30',
    light: 'bg-indigo-50 text-indigo-700 border-indigo-200',
  },
  'Watchdog / NGO': {
    dark: 'bg-amber-500/15 text-amber-300 border-amber-400/30',
    light: 'bg-amber-50 text-amber-800 border-amber-200',
  },
  'Empirical / Economic Study': {
    dark: 'bg-emerald-500/15 text-emerald-300 border-emerald-400/30',
    light: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  },
  'Court / Official Record': {
    dark: 'bg-sky-500/15 text-sky-300 border-sky-400/30',
    light: 'bg-sky-50 text-sky-700 border-sky-200',
  },
  'Debate / Broadcast': {
    dark: 'bg-violet-500/15 text-violet-300 border-violet-400/30',
    light: 'bg-violet-50 text-violet-700 border-violet-200',
  },
  Scholarship: {
    dark: 'bg-slate-700/60 text-slate-200 border-slate-600',
    light: 'bg-slate-100 text-slate-700 border-slate-300',
  },
};

/**
 * Lightweight inline rich-text parser supporting **bold**, *italic*, `code`, and [label](https://url)
 */
function renderRichText(text: string, isDark: boolean): ReactNode {
  const tokenRegex = /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`|\[[^\]]+\]\(https?:\/\/[^\s)]+\))/g;
  const parts = text.split(tokenRegex);

  return parts.map((part, idx) => {
    if (!part) return null;
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={idx} className={clsx('font-semibold', isDark ? 'text-slate-50' : 'text-slate-900')}>
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith('*') && part.endsWith('*')) {
      return (
        <em key={idx} className="italic">
          {part.slice(1, -1)}
        </em>
      );
    }
    if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <code
          key={idx}
          className={clsx(
            'font-mono-code text-[12px] px-1.5 py-0.5 rounded',
            isDark ? 'bg-slate-800 text-indigo-300' : 'bg-slate-200/70 text-indigo-700'
          )}
        >
          {part.slice(1, -1)}
        </code>
      );
    }
    const linkMatch = part.match(/^\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)$/);
    if (linkMatch) {
      return (
        <a
          key={idx}
          href={linkMatch[2]}
          target="_blank"
          rel="noopener noreferrer"
          className={clsx(
            'underline underline-offset-2 font-medium inline-flex items-center gap-0.5',
            isDark ? 'text-indigo-300 hover:text-indigo-200' : 'text-indigo-600 hover:text-indigo-800'
          )}
        >
          {linkMatch[1]}
          <ExternalLink className="w-3 h-3 inline" />
        </a>
      );
    }
    return <Fragment key={idx}>{part}</Fragment>;
  });
}

export function NodeInspectorDrawer({
  topicId,
  epistemologyNote,
  selectedNode,
  allNodes,
  isDark,
  onClose,
  onSelectAndZoom,
  onOpenAddChild,
  onOpenEdit,
  onDeleteNode,
  onSuggestNode,
}: NodeInspectorDrawerProps) {
  const [copiedLink, setCopiedLink] = useState(false);
  const [isExpandedWidth, setIsExpandedWidth] = useState(false);

  if (!selectedNode) return null;

  const nodeMap = new Map(allNodes.map((n) => [n.id, n]));
  const ancestorIds = getAncestorIds(selectedNode.id, nodeMap);
  const ancestors = ancestorIds.map((id) => nodeMap.get(id)).filter((n): n is DebateNode => Boolean(n));
  const immediateParent = selectedNode.parentId ? nodeMap.get(selectedNode.parentId) ?? null : null;

  const directChildren = allNodes.filter((n) => n.parentId === selectedNode.id);
  const supportingChildren = directChildren.filter((n) => n.kind === 'pro');
  const challengingChildren = directChildren.filter((n) => n.kind === 'con');
  const structuralChildren = directChildren.filter((n) => n.kind === 'pillar' || n.kind === 'thesis');

  // Bidirectional cross-branch links
  const relatedSet = new Set<string>(selectedNode.relatedIds ?? []);
  for (const n of allNodes) {
    if (n.relatedIds?.includes(selectedNode.id)) {
      relatedSet.add(n.id);
    }
  }
  const relatedNodes = Array.from(relatedSet)
    .map((id) => nodeMap.get(id))
    .filter((n): n is DebateNode => Boolean(n));

  const badge = KIND_HEADER_BADGE[selectedNode.kind];

  const handleCopyDeepLink = () => {
    const url = new URL(window.location.href);
    url.searchParams.set('topic', topicId);
    url.hash = `node=${encodeURIComponent(selectedNode.id)}`;
    navigator.clipboard.writeText(url.toString());
    window.history.replaceState(null, '', `${url.search}${url.hash}`);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const hasStructuredSources = Boolean(selectedNode.sources && selectedNode.sources.length > 0);
  const plainFallbackRefs = !hasStructuredSources ? selectedNode.references ?? [] : [];

  return (
    <aside
      className={clsx(
        'fixed inset-0 z-50 sm:relative sm:inset-auto sm:z-30 w-full h-full border-l flex flex-col shrink-0 shadow-2xl transition-all duration-200',
        isExpandedWidth ? 'sm:w-[640px] lg:w-[740px]' : 'sm:w-[490px] lg:w-[550px]',
        isDark ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
      )}
    >
      {/* Top Bar */}
      <div
        className={clsx(
          'px-4 py-3 border-b flex items-center justify-between gap-2',
          isDark ? 'border-slate-800 bg-slate-950/50' : 'border-slate-200 bg-slate-50/80'
        )}
      >
        <div className="flex items-center gap-2 min-w-0">
          <span
            className={clsx(
              'px-2.5 py-0.5 rounded-md text-xs font-semibold border truncate',
              isDark ? badge.dark : badge.light
            )}
          >
            {badge.label}
          </span>
          {selectedNode.era && (
            <span
              className={clsx(
                'text-xs font-mono-code px-2 py-0.5 rounded whitespace-nowrap shrink-0',
                isDark ? 'bg-slate-800 text-slate-300' : 'bg-slate-200/70 text-slate-700'
              )}
            >
              {selectedNode.era}
            </span>
          )}
        </div>

        <div className="flex items-center gap-1 shrink-0">
          <button
            type="button"
            onClick={() => setIsExpandedWidth((v) => !v)}
            title={isExpandedWidth ? 'Restore standard inspector width' : 'Expand wide reading mode'}
            className={clsx(
              'hidden sm:inline-flex p-1.5 rounded-lg text-xs font-medium transition-colors',
              isDark
                ? 'hover:bg-slate-800 text-slate-300 hover:text-indigo-300'
                : 'hover:bg-slate-200/70 text-slate-600 hover:text-indigo-600'
            )}
          >
            {isExpandedWidth ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
          <button
            type="button"
            onClick={() => onSelectAndZoom(selectedNode.id, true)}
            title="Zoom & center branch on canvas"
            className={clsx(
              'p-1.5 rounded-lg text-xs font-medium transition-colors',
              isDark
                ? 'hover:bg-slate-800 text-slate-300 hover:text-indigo-300'
                : 'hover:bg-slate-200/70 text-slate-600 hover:text-indigo-600'
            )}
          >
            <Crosshair className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={handleCopyDeepLink}
            title="Copy direct shareable link to this argument"
            className={clsx(
              'p-1.5 rounded-lg text-xs font-medium transition-colors',
              isDark
                ? 'hover:bg-slate-800 text-slate-300 hover:text-indigo-300'
                : 'hover:bg-slate-200/70 text-slate-600 hover:text-indigo-600'
            )}
          >
            {copiedLink ? <Check className="w-4 h-4 text-emerald-400" /> : <Link2 className="w-4 h-4" />}
          </button>
          <button
            type="button"
            onClick={() => onOpenEdit(selectedNode)}
            title="Edit argument in local sandbox"
            className={clsx(
              'p-1.5 rounded-lg transition-colors',
              isDark ? 'hover:bg-slate-800 text-slate-300' : 'hover:bg-slate-200/70 text-slate-600'
            )}
          >
            <Edit3 className="w-4 h-4" />
          </button>
          {selectedNode.kind !== 'root' && (
            <button
              type="button"
              onClick={() => onDeleteNode(selectedNode)}
              title="Remove node from local sandbox"
              className={clsx(
                'p-1.5 rounded-lg transition-colors',
                isDark ? 'hover:bg-rose-500/20 text-rose-400' : 'hover:bg-rose-50 text-rose-600'
              )}
            >
              <Trash2 className="w-4 h-4" />
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            title="Close inspector (Esc)"
            className={clsx(
              'p-1.5 rounded-lg transition-colors',
              isDark ? 'hover:bg-slate-800 text-slate-400' : 'hover:bg-slate-200/70 text-slate-500'
            )}
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Scrollable Body */}
      <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6">
        {selectedNode.isCommunity && (
          <div
            className={clsx(
              'px-3.5 py-2.5 rounded-xl border flex flex-wrap items-center justify-between gap-2 text-xs',
              isDark
                ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-200'
                : 'bg-emerald-50 border-emerald-200 text-emerald-800'
            )}
          >
            <div className="flex items-center gap-2 font-medium">
              <GitPullRequest className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>
                Community Contributed{selectedNode.contributor ? ` by ${selectedNode.contributor}` : ''}
              </span>
            </div>
            {selectedNode.issueNumber && (
              <a
                href={`https://github.com/wildvegangoose/debater/issues/${selectedNode.issueNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 underline underline-offset-2 font-semibold hover:opacity-80"
              >
                Review #{selectedNode.issueNumber}
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
        )}

        {selectedNode.isCustom && onSuggestNode && (
          <div
            className={clsx(
              'px-3.5 py-3 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-xs',
              isDark
                ? 'bg-indigo-500/10 border-indigo-400/35 text-indigo-200'
                : 'bg-indigo-50 border-indigo-200 text-indigo-900'
            )}
          >
            <div>
              <div className="font-semibold">Local Sandbox Argument</div>
              <div className="opacity-80 text-[11px] mt-0.5">
                Saved only in your browser. Propose it to the public Dialectica graph via GitHub.
              </div>
            </div>
            <button
              type="button"
              onClick={() => {
                const safeKind =
                  selectedNode.kind === 'root' || selectedNode.kind === 'pillar'
                    ? 'thesis'
                    : selectedNode.kind;
                onSuggestNode({
                  topicId,
                  parentId: selectedNode.parentId,
                  kind: safeKind,
                  title: selectedNode.title,
                  summary: selectedNode.summary,
                  details: selectedNode.details,
                  sources: selectedNode.sources,
                  tags: selectedNode.tags,
                  era: selectedNode.era,
                });
              }}
              className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-indigo-600 text-white hover:bg-indigo-500 transition-colors shrink-0"
            >
              <GitPullRequest className="w-3.5 h-3.5" />
              Submit to Public Map
            </button>
          </div>
        )}

        {/* Logical Lineage Breadcrumbs */}
        {ancestors.length > 0 && (
          <div className="space-y-1.5">
            <div className={clsx('text-[11px] uppercase tracking-wider font-semibold', isDark ? 'text-slate-400' : 'text-slate-500')}>
              Dialectical Lineage
            </div>
            <div className="flex flex-wrap items-center gap-1 text-xs">
              {ancestors.map((anc) => (
                <div key={anc.id} className="flex items-center gap-1 max-w-full">
                  <button
                    type="button"
                    onClick={() => onSelectAndZoom(anc.id, false)}
                    className={clsx(
                      'px-2 py-0.5 rounded transition-colors truncate max-w-[195px] font-medium',
                      isDark
                        ? 'bg-slate-800/80 text-slate-300 hover:bg-indigo-500/25 hover:text-indigo-200'
                        : 'bg-slate-100 text-slate-700 hover:bg-indigo-50 hover:text-indigo-700'
                    )}
                  >
                    {anc.title}
                  </button>
                  <ChevronRight className="w-3 h-3 text-slate-500 shrink-0" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Headline, Executive Summary & Tags */}
        <div>
          <h2 className="font-editorial text-[23px] sm:text-[25px] font-semibold leading-snug tracking-tight">
            {selectedNode.title}
          </h2>

          {/* Direct Dialectical Relation Callout */}
          {immediateParent && (selectedNode.kind === 'pro' || selectedNode.kind === 'con') && (
            <button
              type="button"
              onClick={() => onSelectAndZoom(immediateParent.id, false)}
              className={clsx(
                'mt-2.5 w-full text-left px-3 py-2 rounded-lg border text-xs flex items-center justify-between gap-2 transition-colors',
                selectedNode.kind === 'pro'
                  ? isDark
                    ? 'bg-emerald-950/25 border-emerald-500/30 text-emerald-200 hover:border-emerald-400/60'
                    : 'bg-emerald-50/80 border-emerald-200 text-emerald-900 hover:border-emerald-400'
                  : isDark
                    ? 'bg-rose-950/25 border-rose-500/30 text-rose-200 hover:border-rose-400/60'
                    : 'bg-rose-50/80 border-rose-200 text-rose-900 hover:border-rose-400'
              )}
            >
              <span className="truncate">
                <strong className="font-semibold">
                  {selectedNode.kind === 'pro' ? 'Supports claim:' : 'Challenges claim:'}
                </strong>{' '}
                {immediateParent.title}
              </span>
              <ArrowUpRight className="w-3.5 h-3.5 shrink-0 opacity-75" />
            </button>
          )}

          {/* Executive Summary */}
          <div
            className={clsx(
              'mt-3 p-3.5 rounded-xl border-l-4 text-[14px] leading-relaxed',
              isDark
                ? 'bg-slate-800/45 border-l-indigo-400 text-slate-200'
                : 'bg-slate-50 border-l-indigo-500 text-slate-800'
            )}
          >
            {renderRichText(selectedNode.summary, isDark)}
          </div>

          {/* Tags */}
          <div className="mt-3 flex flex-wrap gap-1.5">
            {selectedNode.tags.map((tag) => (
              <span
                key={tag}
                className={clsx(
                  'px-2.5 py-0.5 rounded-full text-[11px] font-medium border',
                  isDark
                    ? 'bg-slate-800/90 border-slate-700 text-slate-300'
                    : 'bg-slate-100 border-slate-200 text-slate-700'
                )}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Rich Multi-Section Deep-Dive Analysis */}
        {selectedNode.sections && selectedNode.sections.length > 0 && (
          <div className="space-y-4">
            <div className="flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-indigo-400" />
              <h3 className={clsx('text-xs font-bold uppercase tracking-wider', isDark ? 'text-slate-300' : 'text-slate-600')}>
                In-Depth Background &amp; Analysis
              </h3>
            </div>

            <div className="space-y-3.5">
              {selectedNode.sections.map((sec, sIdx) => (
                <section
                  key={sIdx}
                  className={clsx(
                    'p-4 rounded-xl border space-y-2.5',
                    isDark ? 'bg-slate-950/65 border-slate-800/90' : 'bg-white border-slate-200 shadow-2xs'
                  )}
                >
                  <h4
                    className={clsx(
                      'text-[13.5px] font-semibold tracking-tight flex items-center gap-2',
                      isDark ? 'text-indigo-300' : 'text-indigo-700'
                    )}
                  >
                    <span className="w-1.5 h-4 rounded-full bg-indigo-500 shrink-0" />
                    {sec.heading}
                  </h4>
                  <div className="space-y-2.5 text-[13.5px] leading-[1.68]">
                    {sec.paragraphs.map((para, pIdx) => (
                      <p key={pIdx} className={isDark ? 'text-slate-300' : 'text-slate-700'}>
                        {renderRichText(para, isDark)}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        )}

        {/* Key Analytical & Empirical Takeaways */}
        {selectedNode.details.length > 0 && (
          <div
            className={clsx(
              'p-4 rounded-xl border space-y-2.5',
              isDark ? 'bg-slate-950/45 border-slate-800' : 'bg-slate-50/90 border-slate-200/80'
            )}
          >
            <h3 className={clsx('text-xs font-bold uppercase tracking-wider', isDark ? 'text-slate-400' : 'text-slate-500')}>
              Key Evidence &amp; Data Takeaways
            </h3>
            <ul className="space-y-2.5 text-[13px] leading-relaxed">
              {selectedNode.details.map((bullet, idx) => (
                <li key={idx} className="flex gap-2.5">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                  <span className={isDark ? 'text-slate-200' : 'text-slate-700'}>
                    {renderRichText(bullet, isDark)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Clickable Original Content & Evidentiary Sources */}
        {(hasStructuredSources || plainFallbackRefs.length > 0) && (
          <div className="space-y-2.5">
            <div>
              <h3
                className={clsx(
                  'text-xs font-bold uppercase tracking-wider flex items-center gap-1.5',
                  isDark ? 'text-slate-300' : 'text-slate-600'
                )}
              >
                <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
                Original Sources, Documents &amp; Studies
              </h3>
              <p className={clsx('text-[11px] mt-0.5 leading-snug', isDark ? 'text-slate-400' : 'text-slate-500')}>
                {epistemologyNote}
              </p>
            </div>

            <div className="space-y-2">
              {selectedNode.sources?.map((src, idx) => {
                const catStyle = src.category ? SOURCE_CATEGORY_COLORS[src.category] : null;
                return (
                  <a
                    key={idx}
                    href={src.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={clsx(
                      'group block p-3 rounded-xl border transition-all',
                      isDark
                        ? 'bg-slate-800/45 border-slate-700/80 hover:border-indigo-400/70 hover:bg-slate-800/80'
                        : 'bg-slate-50/80 border-slate-200 hover:border-indigo-400 hover:bg-indigo-50/30'
                    )}
                  >
                    <div className="flex items-start justify-between gap-2.5">
                      <span
                        className={clsx(
                          'text-xs font-semibold leading-snug group-hover:underline underline-offset-2',
                          isDark ? 'text-slate-100 group-hover:text-indigo-200' : 'text-slate-900 group-hover:text-indigo-700'
                        )}
                      >
                        {src.title}
                      </span>
                      <ExternalLink
                        className={clsx(
                          'w-3.5 h-3.5 shrink-0 mt-0.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5',
                          isDark ? 'text-indigo-400' : 'text-indigo-600'
                        )}
                      />
                    </div>

                    <div className="mt-1.5 flex flex-wrap items-center gap-1.5 text-[10.5px]">
                      {src.publisher && (
                        <span className={clsx('font-medium', isDark ? 'text-slate-400' : 'text-slate-600')}>
                          {src.publisher}
                          {src.year ? ` (${src.year})` : ''}
                        </span>
                      )}
                      {!src.publisher && src.year && (
                        <span className={clsx('font-medium', isDark ? 'text-slate-400' : 'text-slate-600')}>
                          {src.year}
                        </span>
                      )}
                      {src.category && catStyle && (
                        <span
                          className={clsx(
                            'px-1.5 py-0.2 rounded border text-[10px] font-medium',
                            isDark ? catStyle.dark : catStyle.light
                          )}
                        >
                          {src.category}
                        </span>
                      )}
                    </div>
                  </a>
                );
              })}

              {plainFallbackRefs.map((ref, idx) => {
                const urlMatch = ref.match(/https?:\/\/[^\s)]+/);
                if (urlMatch) {
                  return (
                    <a
                      key={`ref-${idx}`}
                      href={urlMatch[0]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={clsx(
                        'px-3 py-2 rounded-lg text-xs border font-medium flex items-center justify-between gap-2',
                        isDark
                          ? 'bg-slate-800/50 border-slate-800 text-indigo-300 hover:border-indigo-400'
                          : 'bg-slate-50 border-slate-200 text-indigo-700 hover:border-indigo-400'
                      )}
                    >
                      <span className="truncate">{ref}</span>
                      <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                    </a>
                  );
                }
                return (
                  <div
                    key={`ref-${idx}`}
                    className={clsx(
                      'px-3 py-2 rounded-lg text-xs border font-medium',
                      isDark
                        ? 'bg-slate-800/50 border-slate-800 text-slate-300'
                        : 'bg-slate-50 border-slate-200/70 text-slate-700'
                    )}
                  >
                    {ref}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Sandbox Add Child Actions */}
        <div className="pt-1 flex flex-wrap gap-2">
          {selectedNode.kind === 'root' || selectedNode.kind === 'pillar' ? (
            <button
              type="button"
              onClick={() => onOpenAddChild(selectedNode, 'thesis')}
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold bg-amber-500/15 text-amber-400 border border-amber-500/30 hover:bg-amber-500/25 transition-colors"
            >
              <PlusCircle className="w-3.5 h-3.5" />
              Add Contested Thesis
            </button>
          ) : (
            <>
              <button
                type="button"
                onClick={() => onOpenAddChild(selectedNode, 'pro')}
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/25 transition-colors"
              >
                <PlusCircle className="w-3.5 h-3.5" />
                Add Supporting (+)
              </button>
              <button
                type="button"
                onClick={() => onOpenAddChild(selectedNode, 'con')}
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold bg-rose-500/15 text-rose-400 border border-rose-500/30 hover:bg-rose-500/25 transition-colors"
              >
                <MinusCircle className="w-3.5 h-3.5" />
                Add Counter (−)
              </button>
            </>
          )}
        </div>

        {onSuggestNode && (
          <button
            type="button"
            onClick={() =>
              onSuggestNode({
                topicId,
                parentId: selectedNode.id,
                kind: selectedNode.kind === 'root' || selectedNode.kind === 'pillar' ? 'thesis' : 'con',
              })
            }
            className={clsx(
              'w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium border transition-colors',
              isDark
                ? 'bg-slate-800/50 border-slate-700/80 text-slate-300 hover:border-emerald-500/45 hover:text-emerald-300'
                : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-emerald-400 hover:text-emerald-700'
            )}
          >
            <GitPullRequest className="w-3.5 h-3.5 text-emerald-400" />
            Suggest missing response or source on GitHub
          </button>
        )}

        {/* Structural Children (Pillars or Theses) */}
        {structuralChildren.length > 0 && (
          <div className="space-y-2 pt-2 border-t border-slate-500/20">
            <h3 className={clsx('text-xs font-bold uppercase tracking-wider', isDark ? 'text-sky-400' : 'text-sky-700')}>
              Sub-Branches ({structuralChildren.length})
            </h3>
            <div className="space-y-2">
              {structuralChildren.map((child) => (
                <button
                  key={child.id}
                  type="button"
                  onClick={() => onSelectAndZoom(child.id, true)}
                  className={clsx(
                    'w-full text-left p-3 rounded-lg border transition-colors flex items-start justify-between gap-2',
                    isDark
                      ? 'bg-slate-800/50 border-slate-700/80 hover:border-sky-400/60'
                      : 'bg-slate-50 border-slate-200 hover:border-sky-400'
                  )}
                >
                  <div>
                    <div className="text-xs font-semibold">{child.title}</div>
                    <p className={clsx('text-[11px] line-clamp-2 mt-0.5', isDark ? 'text-slate-400' : 'text-slate-600')}>
                      {child.summary}
                    </p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 shrink-0 text-sky-400 mt-0.5" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Supporting Arguments (+ Pro) */}
        {supportingChildren.length > 0 && (
          <div className="space-y-2 pt-2 border-t border-slate-500/20">
            <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              + Supporting Arguments ({supportingChildren.length})
            </h3>
            <div className="space-y-2">
              {supportingChildren.map((child) => (
                <button
                  key={child.id}
                  type="button"
                  onClick={() => onSelectAndZoom(child.id, false)}
                  className={clsx(
                    'w-full text-left p-3 rounded-lg border-l-4 border-l-emerald-500 border transition-colors flex items-start justify-between gap-2',
                    isDark
                      ? 'bg-emerald-950/20 border-emerald-500/25 hover:border-emerald-400/60'
                      : 'bg-emerald-50/50 border-emerald-200 hover:border-emerald-400'
                  )}
                >
                  <div>
                    <div className="text-xs font-semibold">{child.title}</div>
                    <p className={clsx('text-[11px] line-clamp-2 mt-0.5', isDark ? 'text-slate-400' : 'text-slate-600')}>
                      {child.summary}
                    </p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 shrink-0 text-emerald-400 mt-0.5" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Counter-Arguments (- Con) */}
        {challengingChildren.length > 0 && (
          <div className="space-y-2 pt-2 border-t border-slate-500/20">
            <h3 className="text-xs font-bold uppercase tracking-wider text-rose-400">
              − Counter-Arguments &amp; Rebuttals ({challengingChildren.length})
            </h3>
            <div className="space-y-2">
              {challengingChildren.map((child) => (
                <button
                  key={child.id}
                  type="button"
                  onClick={() => onSelectAndZoom(child.id, false)}
                  className={clsx(
                    'w-full text-left p-3 rounded-lg border-l-4 border-l-rose-500 border transition-colors flex items-start justify-between gap-2',
                    isDark
                      ? 'bg-rose-950/20 border-rose-500/25 hover:border-rose-400/60'
                      : 'bg-rose-50/50 border-rose-200 hover:border-rose-400'
                  )}
                >
                  <div>
                    <div className="text-xs font-semibold">{child.title}</div>
                    <p className={clsx('text-[11px] line-clamp-2 mt-0.5', isDark ? 'text-slate-400' : 'text-slate-600')}>
                      {child.summary}
                    </p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 shrink-0 text-rose-400 mt-0.5" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Cross-Branch Connections */}
        {relatedNodes.length > 0 && (
          <div className="space-y-2 pt-2 border-t border-slate-500/20">
            <h3 className="text-xs font-bold uppercase tracking-wider text-violet-400 flex items-center gap-1.5">
              <GitBranch className="w-3.5 h-3.5" />
              Cross-Branch Connections ({relatedNodes.length})
            </h3>
            <div className="space-y-1.5">
              {relatedNodes.map((rel) => (
                <button
                  key={rel.id}
                  type="button"
                  onClick={() => onSelectAndZoom(rel.id, false)}
                  className={clsx(
                    'w-full text-left px-3 py-2 rounded-lg border border-dashed transition-colors flex items-center justify-between gap-2',
                    isDark
                      ? 'bg-violet-950/20 border-violet-500/40 hover:border-violet-400 text-slate-200'
                      : 'bg-violet-50/60 border-violet-300 hover:border-violet-500 text-slate-800'
                  )}
                >
                  <span className="text-xs font-medium truncate">{rel.title}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 shrink-0 text-violet-400" />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}
