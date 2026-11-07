import { DebateGraphDataset, DebateNode } from '../types/debate';
import { selfDeterminationNodes } from './pillars/selfDetermination';
import { bordersSettlementsNodes } from './pillars/bordersSettlements';
import { gazaSecurityNodes } from './pillars/gazaSecurity';
import { refugeesReturnNodes } from './pillars/refugeesReturn';
import { jerusalemHolySitesNodes } from './pillars/jerusalemHolySites';
import { endgamesSolutionsNodes } from './pillars/endgamesSolutions';

const rootNode: DebateNode = {
  id: 'root-ip',
  parentId: null,
  kind: 'root',
  title: 'The Israeli–Palestinian Conflict: Claims, Grievances & Horizons',
  summary:
    'A structured, multi-layered dialectical map of the primary historical, legal, security, humanitarian, and constitutional arguments shaping the conflict between Israelis and Palestinians.',
  details: [
    'Organizes the debate across six foundational pillars: (1) Historical Roots & Self-Determination, (2) 1967 Borders & West Bank Settlements, (3) Gaza, Oct 7 & Conduct of Warfare, (4) Refugees & Right of Return, (5) Jerusalem & Holy Sites, and (6) Competing Endgames.',
    'Every node represents a steelmanned proposition, supporting argument (+ Supports), or counter-argument (− Challenges) relative to its immediate parent claim.',
    'Zoom out for a bird’s-eye structural overview, zoom in or click any card for historical citations and legal texts, or add your own arguments in Sandbox mode.'
  ],
  references: [
    'UNGA Res. 181 (1947) & Res. 194 (1948)',
    'UNSC Res. 242 (1967), Res. 338 (1973) & Res. 2334 (2016)',
    'Oslo Accords (1993–1995) & Camp David / Taba / Annapolis Negotiations'
  ],
  tags: ['History', 'International Law', 'Security', 'Human Rights', 'Diplomacy'],
  era: '1880s–Present'
};

export const curatedIsraelPalestineDataset: DebateGraphDataset = {
  version: '1.0.0',
  title: 'Israeli–Palestinian Conflict Debate Graph',
  subtitle: 'Interactive Dialectical Map of Competing Narratives, Legal Frameworks & Peace Models',
  lastUpdated: '2026-11-06',
  nodes: [
    rootNode,
    ...selfDeterminationNodes,
    ...bordersSettlementsNodes,
    ...gazaSecurityNodes,
    ...refugeesReturnNodes,
    ...jerusalemHolySitesNodes,
    ...endgamesSolutionsNodes
  ]
};
