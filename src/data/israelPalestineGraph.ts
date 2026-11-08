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
  sections: [
    {
      heading: 'Structure of This 10-Pillar Dialectical Map',
      paragraphs: [
        'Few disputes in modern history combine competing indigenous national movements, overlapping sacred geography, multi-generational displacement, asymmetric urban warfare, regional proxy competition, and fiercely contested international institutions as densely as the **Israeli–Palestinian conflict**. Rather than flattening these dimensions into a single binary slogan, this map organizes the debate into **ten symmetrical pillars**: five branching left (historical origins, 1967 borders and settlements, Gaza warfare and IHL/ICJ thresholds, regional geopolitics and U.S. policy, and UNRWA schools/Arabic media/UN institutional bias) and five branching right (refugees and civic equality, Jerusalem and diplomatic recognition, global discourse/BDS/legal labels, conflict economic policies, and constitutional endgames).',
        'Every card is written in its **steelmanned form**—presenting the strongest historical, legal, empirical, and strategic case advanced by its proponents—and connected directly to supporting arguments (`+ Supports`) and rebuttals (`− Challenges`), including recursive counter-rebuttals where debates go multiple layers deep.'
      ]
    },
    {
      heading: 'Epistemology of Contested Sources, Watchdogs & International Forums',
      paragraphs: [
        'A recurring trap in conflict analysis is treating citations from political bodies—such as **UN General Assembly resolutions** (which are non-binding majority votes under UN Charter Articles 10–14) or **UN Human Rights Council commissions** (operating under permanent Agenda Item 7)—as uncontested neutral law. Conversely, primary Arabic/Hebrew broadcasts, school curricula, and fiscal protocols often receive far less scrutiny in English-language diplomacy than they exercise on the ground.',
        'Accordingly, every node in this dataset links directly to **original primary texts and rival evidentiary records**: bilateral treaties (Yale Avalon Project, UN Peacemaker), watchdog curriculum and broadcast monitors (**UN Watch**, **IMPACT-se**, **MEMRI**, **PMW**), human-rights NGOs (**B’Tselem**, **HRW**, **Adalah**), economic institutions (**World Bank**, **Bank of Israel**, **RAND**), court dockets (**ICJ**, **Israeli High Court**), and landmark mainstage debates (**Munk Debates**, **Oxford Union**, **Intelligence Squared / Open to Debate**).'
      ]
    }
  ],
  details: [
    '**Ten Symmetrical Pillars:** Spans 1880s–1948 origins, 1967 occupation & settlements, Gaza/Oct 7/ICJ law, Iran/Abraham Accords/U.S. aid, UNRWA textbooks/MEMRI/UN bias, refugees & equality, Jerusalem, BDS/antisemitism/apartheid law, Paris Protocol economics, and Two-State/One-State/Confederation endgames.',
    '**Landmark Debates Integrated (2011–2026):** Synthesizes clashes from the Munk Debates, Oxford Union, Intelligence Squared / Open to Debate, CFR, and ICJ oral hearings.',
    '**Direct Links to Original Content:** Every node links directly to primary treaties, watchdog dossiers, broadcast clips, economic reports, and court filings.'
  ],
  sources: [
    {
      title: 'Yale Law School Avalon Project — Middle East Diplomatic & Legal Documents (1917–2000)',
      url: 'https://avalon.law.yale.edu/subject_menus/mideast.asp',
      publisher: 'Yale Law School',
      year: '1917–2000',
      category: 'Primary Text / Treaty'
    },
    {
      title: 'UN Watch & IMPACT-se Research Archives on UN Institutions, UNRWA & Curricula',
      url: 'https://unwatch.org/database/',
      publisher: 'UN Watch',
      year: '2006–2025',
      category: 'Watchdog / NGO'
    },
    {
      title: 'MEMRI TV — Translated Primary Arabic & Farsi Broadcast Archives',
      url: 'https://www.memri.org/tv',
      publisher: 'MEMRI',
      year: '1998–2026',
      category: 'Debate / Broadcast'
    },
    {
      title: 'World Bank — West Bank and Gaza Economic Monitoring Reports',
      url: 'https://www.worldbank.org/en/country/westbankandgaza',
      publisher: 'World Bank',
      year: '2013–2025',
      category: 'Empirical / Economic Study'
    }
  ],
  tags: ['History', 'International Law', 'Security', 'Economics', 'Media & Education', 'Diplomacy'],
  era: '1880s–2026'
};

export const curatedIsraelPalestineDataset: DebateGraphDataset = {
  id: 'israel-palestine',
  version: '4.0.0',
  shortTitle: 'Israel–Palestine',
  title: 'Israeli–Palestinian Conflict Debate Graph',
  subtitle: 'Interactive Dialectical Map of Competing Narratives, Watchdogs, Treaties & Peace Models',
  searchPlaceholder: 'Search claims, UNRWA, MEMRI, treaties, dates... (/)',
  epistemologyNote:
    'Treaties, watchdog audits (UN Watch, IMPACT-se, MEMRI, PMW), NGO filings (B’Tselem, HRW), economic studies, and non-binding UN votes are linked as the contested evidentiary record invoked by each argument—not as uncontested neutral arbiters.',
  availableTags: [
    'History',
    'International Law',
    'Security',
    'Human Rights',
    'Economics',
    'Media & Education',
    'Demographics',
    'Diplomacy',
    'Religion & Culture',
    'Governance',
  ],
  shortPillarLabels: {
    'pillar-self-determination': '1. Origins & 1948',
    'pillar-borders-settlements': '2. 1967 & Settlements',
    'pillar-gaza-security': '3. Gaza, Oct 7 & ICJ',
    'pillar-regional-geopolitics': '4. Iran, Accords & U.S.',
    'pillar-education-media-un': '5. UNRWA, Media & UN Bias',
    'pillar-refugees-return': '6. Refugees & Equality',
    'pillar-jerusalem': '7. Jerusalem & Recognition',
    'pillar-global-discourse': '8. Antisemitism, BDS & Law',
    'pillar-economic-policies': '9. Conflict Economics',
    'pillar-endgames': '10. Peace Endgames',
  },
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
