export type DebateNodeKind = 'root' | 'pillar' | 'thesis' | 'pro' | 'con';

export type DebateTag =
  | 'History'
  | 'International Law'
  | 'Security'
  | 'Human Rights'
  | 'Demographics'
  | 'Diplomacy'
  | 'Religion & Culture'
  | 'Governance';

export interface DebateNode {
  id: string;
  parentId: string | null;
  kind: DebateNodeKind;
  title: string;
  summary: string;
  details: string[];
  references?: string[];
  tags: DebateTag[];
  era?: string;
  relatedIds?: string[];
  isCustom?: boolean;
}

export type LayoutDirection = 'SPLIT' | 'LR' | 'TB';

export type ZoomLOD = 'macro' | 'standard' | 'detailed';

export interface DebateGraphDataset {
  version: string;
  title: string;
  subtitle: string;
  lastUpdated: string;
  nodes: DebateNode[];
}
