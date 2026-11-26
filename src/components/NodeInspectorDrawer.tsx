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
    dark: 'bg-white/[0.08] text-zinc-100 border-white/[0.14]',
    light: 'bg-zinc-950 text-white border-zinc-950',
  },
  pillar: {
    label: 'Debate Pillar',
    dark: 'bg-white/[0.06] text-zinc-300 border-white/[0.1]',
    light: 'bg-zinc-100 text-zinc-700 border-zinc-200',
  },
  thesis: {
    label: 'Contested Thesis',
    dark: 'bg-white/[0.04] text-zinc-300 border-white/[0.08]',
    light: 'bg-zinc-50 text-zinc-600 border-zinc-200',
  },
  pro: {
    label: '+ Supports Claim',
    dark: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/25',
    light: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  },
  con: {
    label: '− Challenges Claim',
    dark: 'bg-rose-500/10 text-rose-400 border-rose-500/25',
    light: 'bg-rose-50 text-rose-700 border-rose-200',
  },
};

const SOURCE_CATEGORY_BADGE: Record<SourceCategory, { dark: string; light: string }> = {
  'Primary Text / Treaty': {
    dark: 'bg-white/[0.05] text-zinc-400 border-white/[0.08]',
    light: 'bg-zinc-100 text-zinc-600 border-zinc-200',
  },
  'Watchdog / NGO': {
    dark: 'bg-white/[0.05] text-zinc-400 border-white/[0.08]',
    light: 'bg-zinc-100 text-zinc-600 border-zinc-200',
  },
  'Empirical / Economic Study': {
    dark: 'bg-white/[0.05] text-zinc-400 border-white/[0.08]',
    light: 'bg-zinc-100 text-zinc-600 border-zinc-200',
  },
  'Court / Official Record': {
    dark: 'bg-white/[0.05] text-zinc-400 border-white/[0.08]',
    light: 'bg-zinc-100 text-zinc-600 border-zinc-200',
  },
  'Debate / Broadcast': {
    dark: 'bg-white/[0.05] text-zinc-400 border-white/[0.08]',
    light: 'bg-zinc-100 text-zinc-600 border-zinc-200',
  },
  Scholarship: {
    dark: 'bg-white/[0.05] text-zinc-400 border-white/[0.08]',
    light: 'bg-zinc-100 text-zinc-600 border-zinc-200',
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
        <strong key={idx} className={clsx('font-semibold', isDark ? 'text-white' : 'text-zinc-950')}>
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
            isDark ? 'bg-white/[0.08] text-zinc-200' : 'bg-zinc-100 text-zinc-800'
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
            isDark
              ? 'text-zinc-200 decoration-zinc-500 hover:text-white'
              : 'text-zinc-900 decoration-zinc-400 hover:text-black'
          )}
        >
          {linkMatch[1]}
          <ExternalLink className="w-3 h-3 inline opacity-70" />
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
        isDark
          ? 'bg-[#141417] border-white/[0.08] text-zinc-100'
          : 'bg-white border-zinc-200 text-zinc-950'
      )}
    >
      {/* Top Bar */}
      <div
        className={clsx(
          'px-4 py-3 border-b flex items-center justify-between gap-2 shrink-0',
          isDark ? 'border-white/[0.08] bg-[#0C0C0E]' : 'border-zinc-100 bg-white'
        )}
      >
        <div className="flex items-center gap-2 min-w-0">
          <span
            className={clsx(
              'px-2.5 py-0.5 rounded-md text-[11.5px] font-medium border truncate',
              isDark ? badge.dark : badge.light
            )}
          >
            {badge.label}
          </span>
          {selectedNode.era && (
            <span
              className={clsx(
                'text-[11.5px] font-mono-code tabular-nums px-2 py-0.5 rounded whitespace-nowrap shrink-0',
                isDark ? 'bg-white/[0.06] text-zinc-400' : 'bg-zinc-100 text-zinc-600'
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
                ? 'hover:bg-white/[0.06] text-zinc-400 hover:text-zinc-100'
                : 'hover:bg-zinc-100 text-zinc-500 hover:text-zinc-950'
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
                ? 'hover:bg-white/[0.06] text-zinc-400 hover:text-zinc-100'
                : 'hover:bg-zinc-100 text-zinc-500 hover:text-zinc-950'
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
                ? 'hover:bg-white/[0.06] text-zinc-400 hover:text-zinc-100'
                : 'hover:bg-zinc-100 text-zinc-500 hover:text-zinc-950'
            )}
          >
            {copiedLink ? <Check className="w-4 h-4 text-emerald-500" /> : <Link2 className="w-4 h-4" />}
          </button>
          <button
            type="button"
            onClick={() => onOpenEdit(selectedNode)}
            title="Edit argument in local sandbox"
            className={clsx(
              'p-1.5 rounded-lg transition-colors',
              isDark
                ? 'hover:bg-white/[0.06] text-zinc-400 hover:text-zinc-100'
                : 'hover:bg-zinc-100 text-zinc-500 hover:text-zinc-950'
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
                isDark
                  ? 'text-zinc-500 hover:text-rose-400 hover:bg-rose-500/10'
                  : 'text-zinc-400 hover:text-rose-600 hover:bg-rose-50'
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
              isDark
                ? 'hover:bg-white/[0.06] text-zinc-400 hover:text-zinc-100'
                : 'hover:bg-zinc-100 text-zinc-500 hover:text-zinc-950'
            )}
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Scrollable Body */}
      <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
        {selectedNode.isCommunity && (
          <div
            className={clsx(
              'px-3.5 py-2.5 rounded-xl border flex flex-wrap items-center justify-between gap-2 text-xs',
              isDark
                ? 'bg-[#0C0C0E] border-white/[0.08] text-zinc-200'
                : 'bg-zinc-50 border-zinc-200 text-zinc-800'
            )}
          >
            <div className="flex items-center gap-2 font-medium">
              <GitPullRequest className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>
                Community Contributed{selectedNode.contributor ? ` by ${selectedNode.contributor}` : ''}
              </span>
            </div>
            {selectedNode.issueNumber && (
              <a
                href={`https://github.com/wildvegangoose/debater/issues/${selectedNode.issueNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 underline underline-offset-2 font-medium hover:opacity-80"
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
                ? 'bg-[#0C0C0E] border-white/[0.1] text-zinc-200'
                : 'bg-zinc-50 border-zinc-200 text-zinc-800'
            )}
          >
            <div>
              <div className="font-medium">Local Sandbox Argument</div>
              <div className="text-zinc-500 text-[11px] mt-0.5">
                Saved only in your browser. Propose it to the public Steelman graph via GitHub.
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
              className={clsx(
                'inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors shrink-0',
                isDark
                  ? 'bg-white text-zinc-950 hover:bg-zinc-200'
                  : 'bg-zinc-950 text-white hover:bg-zinc-800'
              )}
            >
              <GitPullRequest className="w-3.5 h-3.5" />
              Submit to Public Map
            </button>
          </div>
        )}

        {/* Logical Lineage Breadcrumbs */}
        {ancestors.length > 0 && (
          <div className="space-y-1.5">
            <div className="text-[11px] uppercase tracking-wider font-medium text-zinc-500">
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
                        ? 'bg-white/[0.05] text-zinc-300 hover:bg-white/[0.1] hover:text-white'
                        : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200/70 hover:text-zinc-950'
                    )}
                  >
                    {anc.title}
                  </button>
                  <ChevronRight className="w-3 h-3 text-zinc-500 shrink-0" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Headline, Executive Summary & Tags */}
        <div>
          <h2 className="font-editorial text-[24px] sm:text-[26px] font-medium leading-[1.2] tracking-[-0.015em]">
            {selectedNode.title}
          </h2>

          {/* Direct Dialectical Relation Callout */}
          {immediateParent && (selectedNode.kind === 'pro' || selectedNode.kind === 'con') && (
            <button
              type="button"
              onClick={() => onSelectAndZoom(immediateParent.id, false)}
              className={clsx(
                'mt-3 w-full text-left px-3 py-2 rounded-lg border border-l-2 text-xs flex items-center justify-between gap-2 transition-colors',
                isDark
                  ? 'bg-[#0C0C0E] border-white/[0.08] text-zinc-200 hover:border-white/20'
                  : 'bg-zinc-50 border-zinc-200 text-zinc-800 hover:border-zinc-300',
                selectedNode.kind === 'pro' ? 'border-l-emerald-500/80' : 'border-l-rose-500/80'
              )}
            >
              <span className="truncate">
                <strong
                  className={clsx(
                    'font-medium',
                    selectedNode.kind === 'pro'
                      ? isDark
                        ? 'text-emerald-400'
                        : 'text-emerald-700'
                      : isDark
                        ? 'text-rose-400'
                        : 'text-rose-700'
                  )}
                >
                  {selectedNode.kind === 'pro' ? 'Supports claim:' : 'Challenges claim:'}
                </strong>{' '}
                {immediateParent.title}
              </span>
              <ArrowUpRight className="w-3.5 h-3.5 shrink-0 text-zinc-500" />
            </button>
          )}

          {/* Executive Summary */}
          <div
            className={clsx(
              'mt-3 p-3.5 rounded-xl border border-l-2 text-[13.5px] leading-relaxed',
              isDark
                ? 'bg-[#0C0C0E] border-white/[0.08] border-l-white/40 text-zinc-200'
                : 'bg-zinc-50 border-zinc-200 border-l-zinc-900 text-zinc-800'
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
                    ? 'bg-white/[0.04] border-white/[0.08] text-zinc-400'
                    : 'bg-zinc-50 border-zinc-200 text-zinc-600'
                )}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Rich Multi-Section Deep-Dive Analysis */}
        {selectedNode.sections && selectedNode.sections.length > 0 && (
          <div className="space-y-3.5">
            <div className="flex items-center gap-1.5 text-zinc-500">
              <FileText className="w-3.5 h-3.5" />
              <h3 className="text-[11px] font-medium uppercase tracking-wider">
                In-Depth Background &amp; Analysis
              </h3>
            </div>

            <div className="space-y-3">
              {selectedNode.sections.map((sec, sIdx) => (
                <section
                  key={sIdx}
                  className={clsx(
                    'p-4 rounded-xl border space-y-2.5',
                    isDark ? 'bg-[#0C0C0E] border-white/[0.08]' : 'bg-zinc-50/50 border-zinc-200'
                  )}
                >
                  <h4
                    className={clsx(
                      'font-editorial text-[15.5px] font-medium tracking-tight',
                      isDark ? 'text-zinc-100' : 'text-zinc-950'
                    )}
                  >
                    {sec.heading}
                  </h4>
                  <div className="space-y-2.5 text-[13.5px] leading-[1.68]">
                    {sec.paragraphs.map((para, pIdx) => (
                      <p key={pIdx} className={isDark ? 'text-zinc-300' : 'text-zinc-700'}>
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
              isDark ? 'bg-[#0C0C0E] border-white/[0.08]' : 'bg-zinc-50/60 border-zinc-200'
            )}
          >
            <h3 className="text-[11px] font-medium uppercase tracking-wider text-zinc-500">
              Key Evidence &amp; Data Takeaways
            </h3>
            <ul className="space-y-2.5 text-[13px] leading-relaxed">
              {selectedNode.details.map((bullet, idx) => (
                <li key={idx} className="flex gap-2.5">
                  <span
                    className={clsx(
                      'mt-2 w-1.5 h-1.5 rounded-full shrink-0',
                      isDark ? 'bg-zinc-600' : 'bg-zinc-400'
                    )}
                  />
                  <span className={isDark ? 'text-zinc-300' : 'text-zinc-700'}>
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
              <h3 className="text-[11px] font-medium uppercase tracking-wider flex items-center gap-1.5 text-zinc-500">
                <BookOpen className="w-3.5 h-3.5" />
                Original Sources, Documents &amp; Studies
              </h3>
              <p className="text-[11px] mt-1 leading-snug text-zinc-500">
                {epistemologyNote}
              </p>
            </div>

            <div className="space-y-2">
              {selectedNode.sources?.map((src, idx) => {
                const catStyle = src.category ? SOURCE_CATEGORY_BADGE[src.category] : null;
                return (
                  <a
                    key={idx}
                    href={src.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={clsx(
                      'group block p-3 rounded-xl border transition-colors',
                      isDark
                        ? 'bg-[#0C0C0E] border-white/[0.08] hover:border-white/25'
                        : 'bg-zinc-50/60 border-zinc-200 hover:border-zinc-400'
                    )}
                  >
                    <div className="flex items-start justify-between gap-2.5">
                      <span
                        className={clsx(
                          'text-xs font-medium leading-snug group-hover:underline underline-offset-2',
                          isDark ? 'text-zinc-100' : 'text-zinc-900'
                        )}
                      >
                        {src.title}
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 shrink-0 mt-0.5 text-zinc-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>

                    <div className="mt-1.5 flex flex-wrap items-center gap-1.5 text-[10.5px]">
                      {src.publisher && (
                        <span className="font-medium text-zinc-500">
                          {src.publisher}
                          {src.year ? ` (${src.year})` : ''}
                        </span>
                      )}
                      {!src.publisher && src.year && (
                        <span className="font-medium text-zinc-500">{src.year}</span>
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
                        'px-3 py-2 rounded-lg text-xs border font-medium flex items-center justify-between gap-2 transition-colors',
                        isDark
                          ? 'bg-[#0C0C0E] border-white/[0.08] text-zinc-200 hover:border-white/25'
                          : 'bg-zinc-50 border-zinc-200 text-zinc-800 hover:border-zinc-400'
                      )}
                    >
                      <span className="truncate">{ref}</span>
                      <ExternalLink className="w-3.5 h-3.5 shrink-0 text-zinc-500" />
                    </a>
                  );
                }
                return (
                  <div
                    key={`ref-${idx}`}
                    className={clsx(
                      'px-3 py-2 rounded-lg text-xs border font-medium',
                      isDark
                        ? 'bg-[#0C0C0E] border-white/[0.08] text-zinc-300'
                        : 'bg-zinc-50 border-zinc-200 text-zinc-700'
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
              className={clsx(
                'flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium border transition-colors',
                isDark
                  ? 'bg-[#0C0C0E] border-white/[0.1] text-zinc-200 hover:border-white/25 hover:bg-white/[0.04]'
                  : 'bg-zinc-50 border-zinc-200 text-zinc-800 hover:border-zinc-400 hover:bg-zinc-100'
              )}
            >
              <PlusCircle className="w-3.5 h-3.5" />
              Add Contested Thesis
            </button>
          ) : (
            <>
              <button
                type="button"
                onClick={() => onOpenAddChild(selectedNode, 'pro')}
                className={clsx(
                  'flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium border transition-colors',
                  isDark
                    ? 'bg-[#0C0C0E] border-white/[0.1] text-zinc-200 hover:border-emerald-500/40'
                    : 'bg-zinc-50 border-zinc-200 text-zinc-800 hover:border-emerald-400'
                )}
              >
                <PlusCircle className="w-3.5 h-3.5 text-emerald-500" />
                Add Supporting (+)
              </button>
              <button
                type="button"
                onClick={() => onOpenAddChild(selectedNode, 'con')}
                className={clsx(
                  'flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium border transition-colors',
                  isDark
                    ? 'bg-[#0C0C0E] border-white/[0.1] text-zinc-200 hover:border-rose-500/40'
                    : 'bg-zinc-50 border-zinc-200 text-zinc-800 hover:border-rose-400'
                )}
              >
                <MinusCircle className="w-3.5 h-3.5 text-rose-500" />
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
              'w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium border transition-colors',
              isDark
                ? 'bg-[#0C0C0E] border-white/[0.08] text-zinc-400 hover:border-white/20 hover:text-zinc-100'
                : 'bg-zinc-50 border-zinc-200 text-zinc-600 hover:border-zinc-400 hover:text-zinc-950'
            )}
          >
            <GitPullRequest className="w-3.5 h-3.5" />
            Suggest missing response or source on GitHub
          </button>
        )}

        {/* Structural Children (Pillars or Theses) */}
        {structuralChildren.length > 0 && (
          <div
            className={clsx(
              'space-y-2 pt-4 border-t',
              isDark ? 'border-white/[0.08]' : 'border-zinc-100'
            )}
          >
            <h3 className="text-[11px] font-medium uppercase tracking-wider text-zinc-500">
              Sub-Branches ({structuralChildren.length})
            </h3>
            <div className="space-y-2">
              {structuralChildren.map((child) => (
                <button
                  key={child.id}
                  type="button"
                  onClick={() => onSelectAndZoom(child.id, true)}
                  className={clsx(
                    'w-full text-left p-3 rounded-xl border transition-colors flex items-start justify-between gap-2',
                    isDark
                      ? 'bg-[#0C0C0E] border-white/[0.08] hover:border-white/25'
                      : 'bg-zinc-50/60 border-zinc-200 hover:border-zinc-400'
                  )}
                >
                  <div>
                    <div className="font-editorial text-[14px] font-medium leading-snug">{child.title}</div>
                    <p className={clsx('text-[11.5px] line-clamp-2 mt-0.5', isDark ? 'text-zinc-400' : 'text-zinc-500')}>
                      {child.summary}
                    </p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 shrink-0 text-zinc-500 mt-0.5" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Supporting Arguments (+ Pro) */}
        {supportingChildren.length > 0 && (
          <div
            className={clsx(
              'space-y-2 pt-4 border-t',
              isDark ? 'border-white/[0.08]' : 'border-zinc-100'
            )}
          >
            <h3 className="text-[11px] font-medium uppercase tracking-wider text-emerald-500">
              + Supporting Arguments ({supportingChildren.length})
            </h3>
            <div className="space-y-2">
              {supportingChildren.map((child) => (
                <button
                  key={child.id}
                  type="button"
                  onClick={() => onSelectAndZoom(child.id, false)}
                  className={clsx(
                    'w-full text-left p-3 rounded-xl border border-l-2 border-l-emerald-500/80 transition-colors flex items-start justify-between gap-2',
                    isDark
                      ? 'bg-[#0C0C0E] border-white/[0.08] hover:border-white/20'
                      : 'bg-zinc-50/60 border-zinc-200 hover:border-zinc-300'
                  )}
                >
                  <div>
                    <div className="font-editorial text-[14px] font-medium leading-snug">{child.title}</div>
                    <p className={clsx('text-[11.5px] line-clamp-2 mt-0.5', isDark ? 'text-zinc-400' : 'text-zinc-500')}>
                      {child.summary}
                    </p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 shrink-0 text-zinc-500 mt-0.5" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Counter-Arguments (- Con) */}
        {challengingChildren.length > 0 && (
          <div
            className={clsx(
              'space-y-2 pt-4 border-t',
              isDark ? 'border-white/[0.08]' : 'border-zinc-100'
            )}
          >
            <h3 className="text-[11px] font-medium uppercase tracking-wider text-rose-500">
              − Counter-Arguments &amp; Rebuttals ({challengingChildren.length})
            </h3>
            <div className="space-y-2">
              {challengingChildren.map((child) => (
                <button
                  key={child.id}
                  type="button"
                  onClick={() => onSelectAndZoom(child.id, false)}
                  className={clsx(
                    'w-full text-left p-3 rounded-xl border border-l-2 border-l-rose-500/80 transition-colors flex items-start justify-between gap-2',
                    isDark
                      ? 'bg-[#0C0C0E] border-white/[0.08] hover:border-white/20'
                      : 'bg-zinc-50/60 border-zinc-200 hover:border-zinc-300'
                  )}
                >
                  <div>
                    <div className="font-editorial text-[14px] font-medium leading-snug">{child.title}</div>
                    <p className={clsx('text-[11.5px] line-clamp-2 mt-0.5', isDark ? 'text-zinc-400' : 'text-zinc-500')}>
                      {child.summary}
                    </p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 shrink-0 text-zinc-500 mt-0.5" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Cross-Branch Connections */}
        {relatedNodes.length > 0 && (
          <div
            className={clsx(
              'space-y-2 pt-4 border-t',
              isDark ? 'border-white/[0.08]' : 'border-zinc-100'
            )}
          >
            <h3 className="text-[11px] font-medium uppercase tracking-wider text-zinc-500 flex items-center gap-1.5">
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
                      ? 'bg-[#0C0C0E] border-white/[0.15] hover:border-white/35 text-zinc-200'
                      : 'bg-zinc-50/60 border-zinc-300 hover:border-zinc-500 text-zinc-800'
                  )}
                >
                  <span className="text-xs font-medium truncate">{rel.title}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 shrink-0 text-zinc-500" />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}
