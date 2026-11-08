import { DebateGraphDataset, DebateTopicCategory, DebateTopicId } from '../types/debate';
import { curatedIsraelPalestineDataset } from './israelPalestineGraph';
import { curatedEconomicPoliciesDataset } from './economicPoliciesGraph';

export interface TopicCatalogItem {
  id: DebateTopicId;
  category: DebateTopicCategory;
  shortTitle: string;
  title: string;
  subtitle: string;
  landmarkDebate: string;
  badge?: string;
  iconName: string;
}

export const TOPIC_CATALOG: TopicCatalogItem[] = [
  // Geopolitics & Conflict
  {
    id: 'israel-palestine',
    category: 'Geopolitics & Conflict',
    shortTitle: 'Israel–Palestine',
    title: 'The Israeli–Palestinian Conflict',
    subtitle: 'Sovereignty, 1967 borders, UNRWA & textbooks, security doctrine, international law & one/two-state endgames',
    landmarkDebate: 'Oxford Union (2023–2024), Lex Fridman #418, Munk Debates',
    badge: '124 Nodes',
    iconName: 'Scale',
  },
  {
    id: 'russia-ukraine-nato',
    category: 'Geopolitics & Conflict',
    shortTitle: 'Russia, Ukraine & NATO',
    title: 'Russia, Ukraine & NATO Expansion',
    subtitle: 'Western deterrence & sovereign self-determination vs. great power realism & sphere-of-influence security',
    landmarkDebate: 'Munk Debate (2022): Mearsheimer & Walt vs. McFaul & Sikorski',
    badge: 'Munk 2022',
    iconName: 'Shield',
  },
  {
    id: 'china-western-order',
    category: 'Geopolitics & Conflict',
    shortTitle: 'Rise of China',
    title: 'The Rise of China & The International Order',
    subtitle: 'Strategic containment & tech decoupling vs. multilateral integration & multipolar coexistence',
    landmarkDebate: 'Munk Debate (2019): McMaster & Pillsbury vs. Mahbubani & Wang',
    badge: 'Munk 2019',
    iconName: 'Globe',
  },
  {
    id: 'liberal-democracy-populism',
    category: 'Geopolitics & Conflict',
    shortTitle: 'Democracy vs. Populism',
    title: 'Liberal Democracy vs. Authoritarian Populism',
    subtitle: 'Democratic erosion & institutional decay vs. populist revolt & democratic sovereignty',
    landmarkDebate: 'Munk Debate (2018): Steve Bannon vs. David Frum',
    badge: 'Munk 2018',
    iconName: 'Vote',
  },
  {
    id: 'immigration-borders',
    category: 'Geopolitics & Conflict',
    shortTitle: 'Immigration & Borders',
    title: 'Immigration, Sovereignty & Border Security',
    subtitle: 'Economic growth & humanitarian asylum vs. territorial sovereignty, social cohesion & assimilation',
    landmarkDebate: 'Oxford Union & Open to Debate (Bryan Caplan vs. David Goodhart)',
    badge: 'Oxford Union',
    iconName: 'Compass',
  },

  // Technology & AI
  {
    id: 'ai-risk',
    category: 'Technology & AI',
    shortTitle: 'AI Existential Risk',
    title: 'Artificial Intelligence: Existential Risk vs. Human Flourishing',
    subtitle: 'Frontier catastrophic risks & alignment hazards vs. open-source acceleration & abundance',
    landmarkDebate: 'Munk Debate (2023): Bengio & Tegmark vs. LeCun & Mitchell',
    badge: 'Munk 2023',
    iconName: 'Cpu',
  },
  {
    id: 'social-media-censorship',
    category: 'Technology & AI',
    shortTitle: 'Free Speech & Tech',
    title: 'Social Media: Content Moderation vs. Free Speech',
    subtitle: 'Combating disinformation & platform harms vs. First Amendment protections & anti-censorship',
    landmarkDebate: 'Munk Debate (2024), Oxford Union, Intelligence Squared US',
    badge: 'Munk 2024',
    iconName: 'MessageSquare',
  },
  {
    id: 'big-tech-antitrust',
    category: 'Technology & AI',
    shortTitle: 'Big Tech Antitrust',
    title: 'Antitrust & Breaking Up Big Tech Gatekeepers',
    subtitle: 'Neo-Brandeisian structural separation vs. consumer welfare standard & dynamic innovation',
    landmarkDebate: 'Open to Debate (IQ2 US): Break Up Big Tech',
    badge: 'Open to Debate',
    iconName: 'Building2',
  },
  {
    id: 'crypto-defi',
    category: 'Technology & AI',
    shortTitle: 'Crypto & DeFi',
    title: 'Cryptocurrency & Decentralized Finance',
    subtitle: 'Monetary sovereignty & permissionless rails vs. speculative bubble & systemic financial risk',
    landmarkDebate: 'Oxford Union & Soho Forum (Nic Carter vs. Nouriel Roubini)',
    badge: 'Soho Forum',
    iconName: 'Coins',
  },
  {
    id: 'crispr-gene-editing',
    category: 'Technology & AI',
    shortTitle: 'CRISPR & Gene Editing',
    title: 'Human Germline Editing & CRISPR',
    subtitle: 'Eradicating inherited genetic diseases vs. eugenic inequality & transhumanist boundary risks',
    landmarkDebate: 'Oxford Union & Intelligence Squared (Doudna & Church vs. Collins & Sandel)',
    badge: 'Oxford Union',
    iconName: 'Dna',
  },

  // Economics & Labor
  {
    id: 'economic-policies',
    category: 'Economics & Labor',
    shortTitle: 'Economic Policies',
    title: 'Economic Policies & Market Systems',
    subtitle: 'Macroeconomic stabilization, progressive taxation, free trade, labor/UBI, housing & climate economics',
    landmarkDebate: 'Curated Dialectica Macroeconomic Core',
    badge: '97 Nodes',
    iconName: 'Landmark',
  },
  {
    id: 'capitalism-socialism',
    category: 'Economics & Labor',
    shortTitle: 'Capitalism vs. Socialism',
    title: 'Capitalism vs. Democratic Socialism',
    subtitle: 'Free-market capital allocation & prosperity vs. wealth redistribution & democratic public ownership',
    landmarkDebate: 'Munk Debates, Soho Forum (Arthur Brooks vs. Bhaskar Sunkara)',
    badge: 'Munk Debates',
    iconName: 'TrendingUp',
  },
  {
    id: 'universal-basic-income',
    category: 'Economics & Labor',
    shortTitle: 'Universal Basic Income',
    title: 'Universal Basic Income (UBI)',
    subtitle: 'Unconditional poverty floor & automation buffer vs. fiscal ruin & labor supply contraction',
    landmarkDebate: 'Open to Debate & Munk Debates (Andrew Yang vs. Melissa Kearney)',
    badge: 'Open to Debate',
    iconName: 'CreditCard',
  },
  {
    id: 'globalization-tariffs',
    category: 'Economics & Labor',
    shortTitle: 'Trade vs. Tariffs',
    title: 'Globalization vs. Protectionist Tariffs',
    subtitle: 'Comparative advantage & global supply chains vs. strategic tariffs & domestic manufacturing',
    landmarkDebate: 'Open to Debate & Oxford Union (Douglas Irwin vs. Peter Navarro)',
    badge: 'Open to Debate',
    iconName: 'Package',
  },
  {
    id: 'higher-education-debt',
    category: 'Economics & Labor',
    shortTitle: 'Higher Ed & Student Debt',
    title: 'Higher Education Value & Student Debt Forgiveness',
    subtitle: 'Universal college access & debt jubilee vs. credential inflation, regressivity & moral hazard',
    landmarkDebate: 'Open to Debate & Intelligence Squared (Robert Reich vs. Beth Akers)',
    badge: 'Open to Debate',
    iconName: 'GraduationCap',
  },
  {
    id: 'future-of-work',
    category: 'Economics & Labor',
    shortTitle: 'Future of Work & Remote',
    title: 'Remote Work vs. Office Colocation',
    subtitle: 'Decentralized autonomy & global talent vs. in-person collaboration, mentorship & corporate culture',
    landmarkDebate: 'Open to Debate (Nick Bloom vs. Scott Galloway)',
    badge: 'Open to Debate',
    iconName: 'Briefcase',
  },

  // Energy & Climate
  {
    id: 'nuclear-energy',
    category: 'Energy & Climate',
    shortTitle: 'Nuclear Power',
    title: 'Nuclear Energy: Baseload Essential vs. Costly Hazard',
    subtitle: 'Zero-carbon firm energy & abundance vs. catastrophic meltdown risks, waste & high capital cost',
    landmarkDebate: 'Oxford Union & Open to Debate (Shellenberger vs. Lovins & Jacobson)',
    badge: 'Oxford Union',
    iconName: 'Atom',
  },
  {
    id: 'climate-growth-degrowth',
    category: 'Energy & Climate',
    shortTitle: 'Green Growth vs. Degrowth',
    title: 'Climate Strategy: Green Growth vs. Degrowth',
    subtitle: 'Technological decoupling & clean capitalism vs. planetary limits & economic downscaling',
    landmarkDebate: 'Oxford Union & Intelligence Squared (Hannah Ritchie vs. Jason Hickel)',
    badge: 'Oxford Union',
    iconName: 'Leaf',
  },
  {
    id: 'space-exploration',
    category: 'Energy & Climate',
    shortTitle: 'Space Exploration',
    title: 'Crewed Space Exploration & Mars Settlement',
    subtitle: 'Multi-planetary survival & frontier discovery vs. misallocated capital & terrestrial urgency',
    landmarkDebate: 'Oxford Union & Cambridge Union (Robert Zubrin vs. Martin Rees)',
    badge: 'Cambridge Union',
    iconName: 'Rocket',
  },

  // Law & Society
  {
    id: 'death-penalty',
    category: 'Law & Society',
    shortTitle: 'Capital Punishment',
    title: 'The Death Penalty: Justice vs. Abolition',
    subtitle: 'Moral retribution & ultimate deterrence vs. irreversible state execution & systemic injustice',
    landmarkDebate: 'Oxford Union & Open to Debate (Robert Blecker vs. Bryan Stevenson)',
    badge: 'Oxford Union',
    iconName: 'Gavel',
  },
  {
    id: 'drug-decriminalization',
    category: 'Law & Society',
    shortTitle: 'Drug Decriminalization',
    title: 'Drug Decriminalization & Legalization',
    subtitle: 'Harm reduction, ending mass incarceration & autonomy vs. addiction surges & public health crises',
    landmarkDebate: 'Soho Forum & Oxford Union (Carl Hart vs. Kevin Sabet)',
    badge: 'Soho Forum',
    iconName: 'Pill',
  },
  {
    id: 'meritocracy',
    category: 'Law & Society',
    shortTitle: 'Meritocracy & Mobility',
    title: 'Meritocracy: Just Ideal vs. Aristocratic Tyranny',
    subtitle: 'Talent-based opportunity & social mobility vs. the tyranny of merit & credentialed inequality',
    landmarkDebate: 'Oxford Union & Harvard Debates (Michael Sandel vs. Adrian Wooldridge)',
    badge: 'Oxford Union',
    iconName: 'Award',
  },
];

export const TOPIC_CATEGORIES: DebateTopicCategory[] = [
  'Geopolitics & Conflict',
  'Technology & AI',
  'Economics & Labor',
  'Energy & Climate',
  'Law & Society',
];

export const TOPIC_OPTIONS = TOPIC_CATALOG.map((t) => ({
  id: t.id,
  shortTitle: t.shortTitle,
  category: t.category,
}));

// In-memory dataset cache
const datasetCache = new Map<DebateTopicId, DebateGraphDataset>();
datasetCache.set('israel-palestine', curatedIsraelPalestineDataset);
datasetCache.set('economic-policies', curatedEconomicPoliciesDataset);

// Dynamic loaders for each dataset chunk to prevent bundling all 22 topics into initial page load
export const DATASET_LOADERS: Record<DebateTopicId, () => Promise<DebateGraphDataset>> = {
  'israel-palestine': async () => curatedIsraelPalestineDataset,
  'economic-policies': async () => curatedEconomicPoliciesDataset,
  'ai-risk': async () => (await import('./topics/aiRisk')).aiRiskDataset,
  'social-media-censorship': async () => (await import('./topics/socialMediaCensorship')).socialMediaCensorshipDataset,
  'big-tech-antitrust': async () => (await import('./topics/bigTechAntitrust')).bigTechAntitrustDataset,
  'crypto-defi': async () => (await import('./topics/cryptoDefi')).cryptoDefiDataset,
  'crispr-gene-editing': async () => (await import('./topics/crisprGeneEditing')).crisprGeneEditingDataset,
  'liberal-democracy-populism': async () => (await import('./topics/democracyPopulism')).democracyPopulismDataset,
  'russia-ukraine-nato': async () => (await import('./topics/russiaUkraineNato')).russiaUkraineNatoDataset,
  'china-western-order': async () => (await import('./topics/chinaWesternOrder')).chinaWesternOrderDataset,
  'immigration-borders': async () => (await import('./topics/immigrationBorders')).immigrationBordersDataset,
  'death-penalty': async () => (await import('./topics/deathPenalty')).deathPenaltyDataset,
  'capitalism-socialism': async () => (await import('./topics/capitalismSocialism')).capitalismSocialismDataset,
  'universal-basic-income': async () => (await import('./topics/universalBasicIncome')).universalBasicIncomeDataset,
  'globalization-tariffs': async () => (await import('./topics/globalizationTariffs')).globalizationTariffsDataset,
  'higher-education-debt': async () => (await import('./topics/higherEducationDebt')).higherEducationDebtDataset,
  'future-of-work': async () => (await import('./topics/futureOfWork')).futureOfWorkDataset,
  'nuclear-energy': async () => (await import('./topics/nuclearEnergy')).nuclearEnergyDataset,
  'climate-growth-degrowth': async () => (await import('./topics/climateGrowthDegrowth')).climateGrowthDegrowthDataset,
  'space-exploration': async () => (await import('./topics/spaceExploration')).spaceExplorationDataset,
  'drug-decriminalization': async () => (await import('./topics/drugDecriminalization')).drugDecriminalizationDataset,
  'meritocracy': async () => (await import('./topics/meritocracy')).meritocracyDataset,
};

export async function fetchDataset(topicId: DebateTopicId): Promise<DebateGraphDataset> {
  const cached = datasetCache.get(topicId);
  if (cached) return cached;
  const loader = DATASET_LOADERS[topicId];
  if (!loader) {
    throw new Error(`Unknown debate topic ID: ${topicId}`);
  }
  const loaded = await loader();
  datasetCache.set(topicId, loaded);
  return loaded;
}

export function getCachedDatasetSync(topicId: DebateTopicId): DebateGraphDataset | null {
  return datasetCache.get(topicId) ?? null;
}

export function resolveTopicFromUrl(): DebateTopicId {
  const params = new URLSearchParams(window.location.search);
  const raw = params.get('topic')?.toLowerCase().trim();
  if (raw) {
    const matched = TOPIC_CATALOG.find((t) => t.id === raw);
    if (matched) return matched.id;
    // Common aliases
    if (raw === 'economic-policies' || raw === 'economics' || raw === 'econ') return 'economic-policies';
    if (raw === 'israel-palestine' || raw === 'ip') return 'israel-palestine';
    if (raw === 'ai' || raw === 'ai-existential-risk') return 'ai-risk';
    if (raw === 'social-media' || raw === 'free-speech' || raw === 'censorship') return 'social-media-censorship';
    if (raw === 'antitrust' || raw === 'big-tech') return 'big-tech-antitrust';
    if (raw === 'crypto' || raw === 'bitcoin' || raw === 'defi') return 'crypto-defi';
    if (raw === 'crispr' || raw === 'gene-editing') return 'crispr-gene-editing';
    if (raw === 'democracy' || raw === 'populism') return 'liberal-democracy-populism';
    if (raw === 'ukraine' || raw === 'russia' || raw === 'nato') return 'russia-ukraine-nato';
    if (raw === 'china') return 'china-western-order';
    if (raw === 'immigration' || raw === 'borders') return 'immigration-borders';
    if (raw === 'capitalism' || raw === 'socialism') return 'capitalism-socialism';
    if (raw === 'ubi' || raw === 'basic-income') return 'universal-basic-income';
    if (raw === 'tariffs' || raw === 'trade' || raw === 'globalization') return 'globalization-tariffs';
    if (raw === 'college' || raw === 'student-debt' || raw === 'higher-ed') return 'higher-education-debt';
    if (raw === 'remote-work' || raw === 'future-of-work') return 'future-of-work';
    if (raw === 'nuclear' || raw === 'nuclear-power') return 'nuclear-energy';
    if (raw === 'degrowth' || raw === 'green-growth' || raw === 'climate') return 'climate-growth-degrowth';
    if (raw === 'space' || raw === 'mars') return 'space-exploration';
    if (raw === 'death-penalty' || raw === 'capital-punishment') return 'death-penalty';
    if (raw === 'drugs' || raw === 'drug-decriminalization') return 'drug-decriminalization';
    if (raw === 'meritocracy') return 'meritocracy';
  }

  // Check if hash belongs to a known node
  const hash = window.location.hash;
  if (hash.startsWith('#node=')) {
    const targetId = decodeURIComponent(hash.slice('#node='.length));
    if (curatedEconomicPoliciesDataset.nodes.some((n) => n.id === targetId)) {
      return 'economic-policies';
    }
  }

  return 'israel-palestine';
}
