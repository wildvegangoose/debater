export type DebateNodeKind = 'root' | 'pillar' | 'thesis' | 'pro' | 'con';

export type DebateTopicCategory =
  | 'Geopolitics & Conflict'
  | 'Technology & AI'
  | 'Economics & Labor'
  | 'Energy & Climate'
  | 'Law & Society';

export type DebateTopicId =
  // Existing
  | 'israel-palestine'
  | 'economic-policies'
  // Technology & AI
  | 'ai-risk'
  | 'social-media-censorship'
  | 'big-tech-antitrust'
  | 'crypto-defi'
  | 'crispr-gene-editing'
  // Politics, Governance & World Order
  | 'liberal-democracy-populism'
  | 'russia-ukraine-nato'
  | 'china-western-order'
  | 'immigration-borders'
  | 'death-penalty'
  // Economics, Work & Wealth
  | 'capitalism-socialism'
  | 'universal-basic-income'
  | 'globalization-tariffs'
  | 'higher-education-debt'
  | 'future-of-work'
  // Climate, Energy, Law & Culture
  | 'nuclear-energy'
  | 'climate-growth-degrowth'
  | 'space-exploration'
  | 'drug-decriminalization'
  | 'meritocracy';

export interface DebateTopicMetadata {
  id: DebateTopicId;
  category: DebateTopicCategory;
  shortTitle: string;
  title: string;
  subtitle: string;
  iconName?: string;
  landmarkDebate?: string;
}

export type DebateTag =
  // General & Geopolitics
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
  // Economics & Markets
  | 'Macroeconomics'
  | 'Taxation & Fiscal'
  | 'Trade & Industry'
  | 'Labor & Welfare'
  | 'Regulation & Markets'
  | 'Housing & Healthcare'
  | 'Energy & Climate'
  | 'Empirical Studies'
  // Tech, AI & Bioethics
  | 'AI & Technology'
  | 'Free Speech & Media'
  | 'Bioethics'
  | 'National Security'
  | 'Criminal Justice'
  | 'Philosophy & Ethics'
  | 'Science & Innovation'
  | 'Civil Liberties';

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

export type DebateViewMode = 'graph' | 'outline' | 'flashcards';

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
