import { DebateGraphDataset, DebateNode } from '../types/debate';
import { selfDeterminationNodes } from './pillars/selfDetermination';
import { bordersSettlementsNodes } from './pillars/bordersSettlements';
import { gazaSecurityNodes } from './pillars/gazaSecurity';
import { regionalGeopoliticsNodes } from './pillars/regionalGeopolitics';
import { refugeesReturnNodes } from './pillars/refugeesReturn';
import { jerusalemHolySitesNodes } from './pillars/jerusalemHolySites';
import { globalDiscourseLegalNodes } from './pillars/globalDiscourseLegal';
import { endgamesSolutionsNodes } from './pillars/endgamesSolutions';

const rootNode: DebateNode = {
  id: 'root-ip',
  parentId: null,
  kind: 'root',
  title: 'The Israeli–Palestinian Conflict: Claims, Grievances & Horizons',
  summary:
    'A structured, multi-layered dialectical map of the primary historical, legal, security, humanitarian, geopolitical, and constitutional arguments shaping the Israeli–Palestinian debate.',
  details: [
    'Organizes the debate across eight symmetrical pillars: (1) Self-Determination & 1948, (2) 1967 Borders & Settlements, (3) Gaza, Oct 7 & IHL/ICJ, (4) Regional Geopolitics, Iran & U.S. Aid, (5) Refugees & Civic Equality, (6) Jerusalem & Recognition, (7) Global Discourse, BDS & Legal Labels, and (8) Competing Endgames.',
    'Incorporates landmark mainstage and institutional debates from 2011–2026, including the Munk Debates, Oxford Union, Intelligence Squared / Open to Debate, ICJ proceedings, and major academic clashes.',
    'Every node represents a steelmanned proposition, supporting argument (+ Supports), or counter-argument (− Challenges) relative to its immediate parent claim.'
  ],
  references: [
    'UNGA Res. 181 (1947) & Res. 194 (1948); UNSC Res. 242 (1967) & Res. 2334 (2016)',
    'Oslo Accords (1993–1995), Abraham Accords (2020) & ICJ Proceedings (2004, 2024)',
    'Munk Debates (2021–2025), Oxford Union (2015–2026) & Intelligence Squared / Open to Debate (2011–2024)'
  ],
  tags: ['History', 'International Law', 'Security', 'Human Rights', 'Diplomacy'],
  era: '1880s–2026'
};

export const curatedIsraelPalestineDataset: DebateGraphDataset = {
  version: '2.0.0',
  title: 'Israeli–Palestinian Conflict Debate Graph',
  subtitle: 'Interactive Dialectical Map of Competing Narratives, Landmark Debates & Peace Models',
  lastUpdated: '2026-11-07',
  nodes: [
    rootNode,
    // Left Wing in Bilateral Mindmap (4 Pillars, 10 Theses)
    ...selfDeterminationNodes,
    ...bordersSettlementsNodes,
    ...gazaSecurityNodes,
    ...regionalGeopoliticsNodes,
    // Right Wing in Bilateral Mindmap (4 Pillars, 10 Theses)
    ...refugeesReturnNodes,
    ...jerusalemHolySitesNodes,
    ...globalDiscourseLegalNodes,
    ...endgamesSolutionsNodes
  ]
};
