import { DebateGraphDataset, DebateNode } from '../types/debate';
import { fiscalMonetaryNodes } from './economics/fiscalMonetary';
import { taxationInequalityNodes } from './economics/taxationInequality';
import { tradeIndustrialNodes } from './economics/tradeIndustrial';
import { laborAutomationNodes } from './economics/laborAutomation';
import { housingUrbanNodes } from './economics/housingUrban';
import { antitrustRegulationNodes } from './economics/antitrustRegulation';
import { healthcareWelfareNodes } from './economics/healthcareWelfare';
import { energyClimateNodes } from './economics/energyClimate';

const rootEconNode: DebateNode = {
  id: 'root-econ',
  parentId: null,
  kind: 'root',
  title: 'Economic Policies & Market Systems: Growth, Equity & Incentives',
  summary:
    'A comprehensive dialectical map of modern economic policy debates—contrasting Keynesian, neoclassical, supply-side, institutional, Georgist, Neo-Brandeisian, and market-liberal arguments across fiscal, monetary, tax, trade, labor, housing, regulatory, welfare, and climate policy.',
  sections: [
    {
      heading: 'How Modern Economic Policy Debates Divide',
      paragraphs: [
        'At the heart of economic policymaking lies an enduring tension between **allocative efficiency, price signals, and dynamic innovation** on one side, and **market failures, externalities, monopsony power, and distributional equity** on the other. Where classical and supply-side economists emphasize how taxes, price ceilings, tariffs, and licensing rules distort marginal incentives and deadweight supply, Keynesian and institutional economists highlight involuntary unemployment, liquidity traps, asymmetric information, and bargaining asymmetries.',
        'This graph organizes modern economic policy into **eight symmetrical pillars**: four macro-and-production pillars on the left (**Fiscal & Monetary Policy**, **Taxation & Inequality**, **Trade, Tariffs & Industrial Policy**, and **Labor, Minimum Wage & AI/UBI**) and four sectoral-and-institutional pillars on the right (**Housing, Zoning & Rent Control**, **Antitrust & Deregulation**, **Healthcare, Education & Pensions**, and **Climate Economics, Carbon Pricing & Energy Abundance**).'
      ]
    },
    {
      heading: 'The "Credibility Revolution" & Natural Experiments',
      paragraphs: [
        'Over the past three decades, empirical economics underwent a **"credibility revolution"**—pioneered by Nobel laureates David Card, Joshua Angrist, Guido Imbens, Esther Duflo, Daron Acemoglu, and William Nordhaus—using difference-in-differences border studies, randomized controlled trials, and administrative tax registries to test textbook theories against real-world outcomes.',
        'Every node in this dataset pairs theoretical mechanisms with **clickable links to original NBER working papers, Nobel lectures, Congressional Budget Office (CBO) scores, Federal Reserve/IMF datasets, and landmark policy monographs**, allowing you to inspect the primary empirical evidence behind each competing claim.'
      ]
    }
  ],
  details: [
    '**Eight Symmetrical Economic Pillars:** Covers macro stabilization, progressive vs. supply-side/Georgist taxation, free trade vs. tariffs & industrial policy, minimum wage & UBI, YIMBY zoning vs. rent control, Big Tech antitrust, universal healthcare & vouchers, and carbon pricing vs. nuclear/green subsidies.',
    '**Theoretical & Empirical Balance:** Steelmans Keynesian, Chicago/Monetarist, Public Choice, Institutionalist, Georgist, and Abundance/YIMBY schools of thought.',
    '**Direct Primary Study Links:** Every node links directly to original NBER papers, CBO/IMF/OECD reports, journal articles, and historical datasets.'
  ],
  sources: [
    {
      title: 'National Bureau of Economic Research (NBER) Working Paper Archive',
      url: 'https://www.nber.org/papers',
      publisher: 'NBER',
      year: '1970–2026',
      category: 'Empirical / Economic Study'
    },
    {
      title: 'FRED — Federal Reserve Economic Data Repository',
      url: 'https://fred.stlouisfed.org/',
      publisher: 'Federal Reserve Bank of St. Louis',
      year: '2026',
      category: 'Empirical / Economic Study'
    },
    {
      title: 'Congressional Budget Office (CBO) Economic & Budgetary Analyses',
      url: 'https://www.cbo.gov/topics/economy',
      publisher: 'U.S. CBO',
      year: '2014–2025',
      category: 'Court / Official Record'
    },
    {
      title: 'The Mirrlees Review & IFS Tax and Welfare Design Studies',
      url: 'https://ifs.org.uk/mirrlees-review',
      publisher: 'Institute for Fiscal Studies',
      year: '2011–2024',
      category: 'Scholarship'
    }
  ],
  tags: ['Macroeconomics', 'Taxation & Fiscal', 'Trade & Industry', 'Labor & Welfare', 'Regulation & Markets', 'Empirical Studies'],
  era: 'Classical–2026'
};

export const curatedEconomicPoliciesDataset: DebateGraphDataset = {
  id: 'economic-policies',
  version: '1.0.0',
  shortTitle: 'Economic Policies',
  title: 'Economic Policies & Market Systems Debate Graph',
  subtitle: 'Interactive Dialectical Map of Fiscal, Monetary, Tax, Trade, Labor, Housing & Regulatory Debates',
  searchPlaceholder: 'Search tariffs, Keynes, minimum wage, zoning, NBER... (/)',
  epistemologyNote:
    'Empirical econometrics (NBER, AER, QJE), institutional models (CBO, IMF, Federal Reserve, OECD), and think-tank studies (Brookings, PIIE, Cato, IFS) depend on identification assumptions, time horizons, and welfare weights—linked directly so you can examine original methodologies.',
  availableTags: [
    'Macroeconomics',
    'Taxation & Fiscal',
    'Trade & Industry',
    'Labor & Welfare',
    'Regulation & Markets',
    'Housing & Healthcare',
    'Energy & Climate',
    'Empirical Studies',
    'Governance',
  ],
  shortPillarLabels: {
    'pillar-econ-fiscal': '1. Fiscal, Debt & Fed',
    'pillar-econ-taxation': '2. Taxes & Inequality',
    'pillar-econ-trade': '3. Trade, Tariffs & Industrial',
    'pillar-econ-labor': '4. Wages, Unions & UBI',
    'pillar-econ-housing': '5. Housing, YIMBY & Rent',
    'pillar-econ-antitrust': '6. Antitrust & Deregulation',
    'pillar-econ-healthcare': '7. Healthcare & Vouchers',
    'pillar-econ-climate': '8. Climate, Carbon & Energy',
  },
  lastUpdated: '2026-11-07',
  nodes: [
    rootEconNode,
    // Left Wing in Bilateral Mindmap (4 Pillars)
    ...fiscalMonetaryNodes,
    ...taxationInequalityNodes,
    ...tradeIndustrialNodes,
    ...laborAutomationNodes,
    // Right Wing in Bilateral Mindmap (4 Pillars)
    ...housingUrbanNodes,
    ...antitrustRegulationNodes,
    ...healthcareWelfareNodes,
    ...energyClimateNodes,
  ],
};
