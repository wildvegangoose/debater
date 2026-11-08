import { DebateGraphDataset, DebateNode } from '../types/debate';
import { selfDeterminationNodes } from './pillars/selfDetermination';
import { bordersSettlementsNodes } from './pillars/bordersSettlements';
import { gazaSecurityNodes } from './pillars/gazaSecurity';
import { regionalGeopoliticsNodes } from './pillars/regionalGeopolitics';
import { educationMediaUnNodes } from './pillars/educationMediaUn';
import { refugeesReturnNodes } from './pillars/refugeesReturn';
import { jerusalemHolySitesNodes } from './pillars/jerusalemHolySites';
import { globalDiscourseLegalNodes } from './pillars/globalDiscourseLegal';
import { economicPoliciesNodes } from './pillars/economicPolicies';
import { endgamesSolutionsNodes } from './pillars/endgamesSolutions';

const rootNode: DebateNode = {
  id: 'root-ip',
  parentId: null,
  kind: 'root',
  title: 'The Israeli–Palestinian Conflict: Claims, Grievances & Horizons',
  summary:
    'A structured, multi-layered dialectical map of the historical, legal, security, educational/media, institutional, economic, geopolitical, and constitutional arguments shaping the Israeli–Palestinian debate.',
  details: [
    'Organizes the debate across ten symmetrical pillars: (1) Self-Determination & 1948, (2) 1967 Borders & Settlements, (3) Gaza, Oct 7 & IHL/ICJ, (4) Regional Geopolitics, Iran & U.S. Aid, (5) UNRWA Schools, Arabic Media & UN Bias, (6) Refugees & Civic Equality, (7) Jerusalem & Recognition, (8) Global Discourse, BDS & Legal Labels, (9) Economic Policies (Paris Protocol, Labor, Aid & "Economic Peace"), and (10) Competing Endgames.',
    'Incorporates primary bilateral treaties, watchdog audits and broadcast translations (UN Watch, IMPACT-se, MEMRI, PMW), economic assessments (World Bank, IMF, Bank of Israel, RAND), human-rights NGOs, contested UN/ICJ proceedings, and landmark debates (Munk, Oxford Union, IQ2/Open to Debate).',
    'Every node represents a steelmanned proposition, supporting argument (+ Supports), or counter-argument (− Challenges) relative to its immediate parent claim—treating cited institutions and resolutions as contested evidentiary sources rather than neutral gospel.'
  ],
  references: [
    'Bilateral Treaties & Protocols: 1949 Armistice Agreements, Oslo Accords (1993–95), Paris Protocol (1994) & Abraham Accords (2020)',
    'Watchdogs, NGOs & Economic Studies: UN Watch, IMPACT-se, MEMRI, PMW, B’Tselem/HRW, World Bank & Bank of Israel',
    'Contested International Forums & Debates: ICJ/UNSC/UNGA Records, Munk Debates (2021–25) & Oxford Union (2015–26)'
  ],
  tags: ['History', 'International Law', 'Security', 'Economics', 'Media & Education', 'Diplomacy'],
  era: '1880s–2026'
};

export const curatedIsraelPalestineDataset: DebateGraphDataset = {
  version: '3.0.0',
  title: 'Israeli–Palestinian Conflict Debate Graph',
  subtitle: 'Interactive Dialectical Map of Competing Narratives, Watchdogs, Economic Policies & Peace Models',
  lastUpdated: '2026-11-07',
  nodes: [
    rootNode,
    // Left Wing in Bilateral Mindmap (5 Pillars)
    ...selfDeterminationNodes,
    ...bordersSettlementsNodes,
    ...gazaSecurityNodes,
    ...regionalGeopoliticsNodes,
    ...educationMediaUnNodes,
    // Right Wing in Bilateral Mindmap (5 Pillars)
    ...refugeesReturnNodes,
    ...jerusalemHolySitesNodes,
    ...globalDiscourseLegalNodes,
    ...economicPoliciesNodes,
    ...endgamesSolutionsNodes
  ]
};
