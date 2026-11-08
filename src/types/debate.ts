export type DebateNodeKind = 'root' | 'pillar' | 'thesis' | 'pro' | 'con';

export type DebateTopicId = 'israel-palestine' | 'economic-policies';

export type DebateTag =
  // Israel–Palestine & General Lenses
  | 'History'
  | 'International Law'
  | 'Security'
  | 'Human Rights'
  | 'Economics'
  | 'Media & Education'
  | 'Demographics'
  | 'Diplomacy'
  | 'Religion & Culture'
  | 'Governance'
  // Economic Policies Lenses
  | 'Macroeconomics'
  | 'Taxation & Fiscal'
  | 'Trade & Industry'
  | 'Labor & Welfare'
  | 'Regulation & Markets'
  | 'Housing & Healthcare'
  | 'Energy & Climate'
  | 'Empirical Studies';

export type SourceCategory =
  | 'Primary Text / Treaty'
  | 'Watchdog / NGO'
  | 'Empirical / Economic Study'
  | 'Court / Official Record'
  | 'Debate / Broadcast'
  | 'Scholarship';

export interface DebateSourceLink {
  title: string;
  url: string;
  publisher?: string;
  year?: string;
  category?: SourceCategory;
}

export interface DebateContentSection {
  heading: string;
  paragraphs: string[];
}

export interface DebateNode {
  id: string;
  parentId: string | null;
  kind: DebateNodeKind;
  title: string;
  summary: string;
  /** Structured multi-paragraph deep-dive prose shown in the Inspector Drawer */
  sections?: DebateContentSection[];
  /** Key scannable evidence & data takeaways */
  details: string[];
  /** Clickable links to original treaties, watchdog reports, datasets, broadcasts, and papers */
  sources?: DebateSourceLink[];
  /** Optional plain-text citations fallback (e.g., imported custom JSON) */
  references?: string[];
  tags: DebateTag[];
  era?: string;
  relatedIds?: string[];
  isCustom?: boolean;
}

export type LayoutDirection = 'SPLIT' | 'LR' | 'TB';

export type ZoomLOD = 'macro' | 'standard' | 'detailed';

export interface DebateGraphDataset {
  id: DebateTopicId;
  version: string;
  shortTitle: string;
  title: string;
  subtitle: string;
  searchPlaceholder: string;
  epistemologyNote: string;
  availableTags: DebateTag[];
  shortPillarLabels: Record<string, string>;
  lastUpdated: string;
  nodes: DebateNode[];
}
