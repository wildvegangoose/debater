import { DebateNode } from '../../types/debate';

export const tradeIndustrialNodes: DebateNode[] = [
  {
    id: 'pillar-econ-trade',
    parentId: 'root-econ',
    kind: 'pillar',
    title: 'Free Trade, Tariffs, Globalization & Industrial Policy',
    summary:
      'Maps the transformation of international economic policy from the post-Cold War WTO free-trade consensus to today’s era of tariffs, supply-chain security, and trillion-dollar industrial subsidies. Weighs comparative advantage and global poverty reduction against regional deindustrialization, trade wars, and strategic tech competition.',
    sections: [
      {
        heading: 'From Ricardian Consensus to Geopolitical Fragmentation',
        paragraphs: [
          'For two centuries after **David Ricardo (1817)** formalized **comparative advantage**, near-universal economist consensus held that lowering tariffs and non-tariff barriers expands global output, fosters **Paul Krugman’s** intra-industry scale economies, and raises living standards in trading partners alike. Between **1990 and 2020**, global value-chain integration under the **WTO** coincided with over **1.2 billion people** escaping extreme poverty while delivering decades of disinflationary consumer goods.',
          'Yet concentrated factory losses in Western industrial heartlands—crystallized in **David Autor, David Dorn, and Gordon Hanson’s "China Shock"** research—combined with **COVID-19 supply-chain bottlenecks** and **U.S.–China strategic rivalry** to shatter bipartisan free-trade orthodoxy.'
        ]
      },
      {
        heading: 'Tariff Protectionism vs. Targeted Industrial Policy',
        paragraphs: [
          'Policymakers across Washington, Brussels, Tokyo, and Beijing now debate competing post-neoliberal toolkits: whether **broad protective tariffs** can reshore manufacturing and shrink trade deficits, or whether **targeted R&D and capex subsidies**—exemplified by the **U.S. CHIPS and Science Act**, the **Inflation Reduction Act (IRA)**, and East Asia’s **developmental states**—can secure strategic industries without igniting destructive global trade and subsidy wars.'
        ]
      }
    ],
    details: [
      'Balances diffused consumer purchasing-power gains and historic global poverty declines from open trade against acute, geographically concentrated manufacturing job losses.',
      'Tests 2018–2025 empirical tariff evidence—consumer price pass-through, agricultural retaliation, intermediate-input taxes, and S − I = NX macro identities—against infant-industry and anti-dumping claims.',
      'Evaluates whether CHIPS/IRA/DARPA industrial policies replicate Taiwan and South Korea’s tech triumphs or succumb to rent-seeking capture and permitting gridlock.'
    ],
    sources: [
      {
        title: 'The Sveriges Riksbank Prize in Economic Sciences 2008: Paul Krugman (New Trade Theory)',
        url: 'https://www.nobelprize.org/prizes/economic-sciences/2008/summary/',
        publisher: 'The Nobel Prize Organization',
        year: '2008',
        category: 'Scholarship'
      },
      {
        title: 'Trade and Poverty Reduction: The Role of Global Value Chains (World Development Report)',
        url: 'https://www.worldbank.org/en/topic/trade',
        publisher: 'World Bank',
        year: '2020',
        category: 'Empirical / Economic Study'
      },
      {
        title: 'Trade and Investment Policy Research Hub',
        url: 'https://www.piie.com/research/trade-and-investment',
        publisher: 'Peterson Institute for International Economics (PIIE)',
        year: '2024',
        category: 'Empirical / Economic Study'
      }
    ],
    tags: ['Trade & Industry', 'Macroeconomics', 'Empirical Studies', 'Security'],
    era: '1817–Present',
    relatedIds: ['pillar-econ-fiscal', 'pillar-econ-labor']
  },

  // THESIS 3A: Open Trade & Comparative Advantage
  {
    id: 'thesis-free-trade-comparative-advantage',
    parentId: 'pillar-econ-trade',
    kind: 'thesis',
    title: 'Open Trade & Comparative Advantage Maximize Consumer Welfare and Global Poverty Reduction',
    summary:
      'Maintains that open cross-border trade allows nations to specialize in their lowest-opportunity-cost activities, lowers prices disproportionately for low-income families, sharpens firm productivity through competition, and has been history’s most powerful engine of global poverty reduction.',
    sections: [
      {
        heading: 'Comparative Advantage, Scale & Pro-Poor Purchasing Power',
        paragraphs: [
          '**Ricardo’s** enduring insight proves trade is **positive-sum** even if one nation is more productive at everything: specializing according to **relative opportunity cost** expands total consumption possibilities for all participants. **Paul Krugman** and **Marc Melitz** expanded classical theory by showing open markets let the most productive firms achieve **global economies of scale**, weed out inefficient incumbents, and multiply product variety while giving domestic manufacturers access to world-class **intermediate inputs**.',
          'Crucially, **Pablo Fajgelbaum** and **Amit Khandelwal (2016 QJE)** demonstrated across **40 countries** that trade is strongly **pro-poor in consumption**: lower-income households spend a far larger share of their budgets on **tradable goods** (food, apparel, appliances, electronics) whose prices fall sharply under open trade.'
        ]
      },
      {
        heading: 'Global Convergence vs. Domestic Distributional Backlash',
        paragraphs: [
          'Export-led integration lifted **China, South Korea, Taiwan, Vietnam, Poland, and India**, slashing the share of humanity in **extreme poverty (<$2.15/day)** from **~38% in 1990 to under 9%**. Yet **Stolper-Samuelson** distributional theory always warned trade creates domestic losers alongside aggregate winners—a reality underscored by the **"China Shock,"** **Dani Rodrik’s trilemma**, and national-security chokepoints.'
        ]
      }
    ],
    details: [
      'Fajgelbaum & Khandelwal (2016 QJE) estimated shutting down international trade would reduce real purchasing power by ~63% for the bottom decile of consumers versus ~28% for the top decile.',
      'Over half of U.S. and EU goods imports are intermediate industrial inputs, machinery, and raw materials used by domestic producers rather than finished consumer goods.',
      'Critics counter that textbook trade models assumed frictionless worker mobility across regions and ignored non-market state capitalism and geopolitical coercion.'
    ],
    sources: [
      {
        title: 'Measuring the Unequal Gains from Trade (NBER w20331 / QJE)',
        url: 'https://www.nber.org/papers/w20331',
        publisher: 'NBER / Quarterly Journal of Economics (Fajgelbaum & Khandelwal)',
        year: '2016',
        category: 'Empirical / Economic Study'
      },
      {
        title: 'America’s Payoff From Globalization',
        url: 'https://www.piie.com/publications/working-papers/americas-payoff-globalization',
        publisher: 'Peterson Institute for International Economics (Bradford, Grieco & Hufbauer)',
        year: '2017',
        category: 'Empirical / Economic Study'
      },
      {
        title: 'The Case for Free Trade (Cato Trade Policy Analysis)',
        url: 'https://www.cato.org/trade-and-immigration',
        publisher: 'Cato Institute',
        year: '2024',
        category: 'Scholarship'
      }
    ],
    tags: ['Trade & Industry', 'Economics', 'Empirical Studies'],
    era: '1817–Present',
    relatedIds: ['thesis-tariffs-protectionism', 'pro-corporate-cut-cost-of-capital']
  },
  {
    id: 'pro-comparative-advantage-poverty-gains',
    parentId: 'thesis-free-trade-comparative-advantage',
    kind: 'pro',
    title: 'Productivity Sorting, Input Competitiveness & 1+ Billion Lifted From Extreme Poverty',
    summary:
      'Empirical firm-level trade literature shows export access reallocates resources toward high-productivity firms, sustains high-wage domestic services and advanced manufacturing via affordable inputs, and drove humanity’s steepest-ever decline in extreme deprivation.',
    sections: [
      {
        heading: 'Melitz Firm Productivity & Technology Diffusion',
        paragraphs: [
          'In **Marc Melitz’s (2003)** heterogeneous-firm trade model—validated across dozens of national manufacturing censuses—trade liberalization induces **within-industry productivity growth**: high-productivity exporting firms expand and invest in automation and R&D, while low-productivity plants exit, lifting aggregate real wages. Meanwhile, roughly **85% of historic U.S. manufacturing job share decline** reflects **technology-driven productivity growth** (producing record real manufacturing output with fewer assembly workers), just as occurred earlier in agriculture.',
          'Access to global **semiconductor equipment, specialty chemicals, and precision sub-components** keeps domestic aerospace, medical-device, and software exporters globally competitive.'
        ]
      },
      {
        heading: 'The Moral & Geopolitical Dividend of Global Development',
        paragraphs: [
          '**Branko Milanovic** and **World Bank** researchers document that post-1980 trade openness produced the first drop in **global interpersonal income inequality** since the Industrial Revolution, slashing child mortality and illiteracy across East and South Asia while integrating post-Communist Eastern Europe into prosperous democratic supply chains.'
        ]
      }
    ],
    details: [
      'Real U.S. manufacturing output remains near all-time highs even though manufacturing’s share of U.S. employment fell steadily from ~32% in 1953 to ~8.5% today—a global pattern across Germany, Japan, and South Korea.',
      'World Bank / WTO joint assessments show developing economies that lowered trade barriers in the 1990s grew per-capita incomes ~1.5 percentage points faster annually than closed peers.',
      'Rules-based trade agreements (USMCA, CPTPP, EU Single Market) reduce policy uncertainty, which Handley & Limão (2017) show significantly boosts exporter investment.'
    ],
    sources: [
      {
        title: 'The Impact of Trade on Intra-Industry Reallocations and Aggregate Industry Productivity',
        url: 'https://scholar.harvard.edu/melitz/publications/impact-trade-intra-industry-reallocations-and-aggregate-industry-productivity',
        publisher: 'Econometrica (Marc J. Melitz)',
        year: '2003',
        category: 'Scholarship'
      },
      {
        title: 'The Role of Trade in Ending Poverty',
        url: 'https://www.worldbank.org/en/topic/trade/publication/the-role-of-trade-in-ending-poverty',
        publisher: 'World Bank Group & World Trade Organization',
        year: '2015',
        category: 'Empirical / Economic Study'
      }
    ],
    tags: ['Trade & Industry', 'Empirical Studies', 'Economics'],
    era: '1990–Present',
    relatedIds: ['pro-corporate-cut-cost-of-capital']
  },
  {
    id: 'con-china-shock-rodrik-fragility',
    parentId: 'thesis-free-trade-comparative-advantage',
    kind: 'con',
    title: 'Localized "China Shock" Scarring, Rodrik’s Trilemma & National-Security Fragility',
    summary:
      'Landmark empirical studies by Autor, Dorn & Hanson prove rapid import shocks devastated concentrated factory towns for decades without worker reallocation, while Dani Rodrik and security strategists warn hyper-globalization erodes democratic social contracts and critical resilience.',
    sections: [
      {
        heading: 'Persistent Commuting-Zone Scarring After 2001 WTO Accession',
        paragraphs: [
          'Tracking U.S. local labor markets ("commuting zones") after **China’s 2001 WTO entry**, **David Autor, David Dorn, and Gordon Hanson (2013 AER; 2021 NBER)** overturned textbook assumptions that displaced factory workers smoothly switch into growing industries. Import competition eliminated **~2.0 to 2.4 million U.S. jobs**, and affected towns suffered **depressed labor-force participation, higher disability uptake, eroded municipal tax bases, opioid "deaths of despair," and political polarization** persisting **two decades later**.',
          'Crucially, promised compensation to trade’s losers via **Trade Adjustment Assistance (TAA)** proved tiny, bureaucratic, and wholly inadequate against the collapse of local anchor employers.'
        ]
      },
      {
        heading: 'Rodrik’s Globalization Trilemma & Single-Point Chokepoints',
        paragraphs: [
          '**Dani Rodrik’s Globalization Paradox** argues nations cannot simultaneously pursue **hyper-globalization, national sovereignty, and democratic politics**: when international trade rules override domestic labor, environmental, and tax bargains, populist backlash inevitably follows. Meanwhile, **pandemic PPE/drug shortages** and **single-country dominance** in **rare-earth refining (~85%+ China), solar wafers, and Taiwan leading-edge chips** exposed efficiency-only supply chains as acute **national-security vulnerabilities**.'
        ]
      }
    ],
    details: [
      'Autor, Dorn & Hanson (2021) found U.S. commuting zones most exposed to Chinese imports still exhibited depressed employment-to-population ratios nearly 20 years after the initial 2001 shock.',
      'Case & Deaton linked concentrated deindustrialization of non-college working-class communities to rising midlife mortality, family instability, and civic alienation.',
      'Extreme geographic concentration left >90% of the world’s sub-5nm logic semiconductors fabricated on a single geopolitically contested island (Taiwan).'
    ],
    sources: [
      {
        title: 'The China Syndrome: Local Labor Market Effects of Import Competition in the United States',
        url: 'https://www.aeaweb.org/articles?id=10.1257/aer.103.6.2121',
        publisher: 'American Economic Review (Autor, Dorn & Hanson)',
        year: '2013',
        category: 'Empirical / Economic Study'
      },
      {
        title: 'On the Persistence of the China Shock (NBER w29401)',
        url: 'https://www.nber.org/papers/w29401',
        publisher: 'National Bureau of Economic Research (Autor, Dorn & Hanson)',
        year: '2021',
        category: 'Empirical / Economic Study'
      },
      {
        title: 'How Far Will International Economic Integration Go? (Globalization Trilemma)',
        url: 'https://www.aeaweb.org/articles?id=10.1257/jep.14.1.177',
        publisher: 'Journal of Economic Perspectives (Dani Rodrik)',
        year: '2000',
        category: 'Scholarship'
      }
    ],
    tags: ['Trade & Industry', 'Labor & Welfare', 'Security', 'Empirical Studies'],
    era: '2001–Present',
    relatedIds: ['con-stimulus-supply-vs-demand-rebuttal', 'pro-tariffs-infant-industry-anti-dumping', 'pro-unions-compression-nordic-sectoral']
  },

  // THESIS 3B: Broad Protective Tariffs
  {
    id: 'thesis-tariffs-protectionism',
    parentId: 'pillar-econ-trade',
    kind: 'thesis',
    title: 'Broad Protective Tariffs Rebuild Domestic Manufacturing & Rebalance Trade Deficits',
    summary:
      'Asserts that across-the-board and strategic tariffs shield domestic producers from foreign state subsidies and wage suppression, incentivize multinationals to build factories onshore ("tariff-jumping"), raise customs revenue, and close chronic trade deficits.',
    sections: [
      {
        heading: 'Infant Industries, Anti-Mercantilism & Tariff-Jumping FDI',
        paragraphs: [
          'Echoing **Alexander Hamilton’s *Report on Manufactures* (1791)** and **Friedrich List**, modern trade nationalists (**Robert Lighthizer**, **Oren Cass**) and balance-of-payments theorists (**Michael Pettis**) argue free trade breaks down when major surplus economies suppress household consumption, subsidize state-backed champions, and dump excess manufacturing capacity abroad. In this view, unilateral openness turns deficit nations like the **United States** into the world’s **importer of last resort**, hollowing out industrial ecosystems.',
          'Proponents contend sustained **border tariffs** alter corporate location math: foreign and U.S. multinationals opt to build domestic plants (**tariff-jumping FDI**, as Japanese automakers did under 1980s voluntary export restraints) to serve high-income consumers tariff-free.'
        ]
      },
      {
        heading: 'The 2018–2025 Empirical Collision With Trade Accounting',
        paragraphs: [
          'Mainstream international economists counter with overwhelming **2018–2025 empirical customs data** showing near-complete **tariff pass-through** onto domestic consumers and businesses, foreign retaliation against farmers, downstream steel-user job losses, and the iron **macroeconomic identity (NX = S − I)** proving tariffs cannot erase aggregate trade deficits driven by low national saving.'
        ]
      }
    ],
    details: [
      'From 2018 onward, successive U.S. administrations imposed and expanded Section 232 (steel/aluminum) and Section 301 tariffs, lifting average U.S. effective tariff rates from ~1.5% to multi-decade highs.',
      'Michael Pettis argues foreign industrial policies force domestic wage shares down abroad, exporting unemployment to open capital-market economies unless offset at the border.',
      'Empirical studies of 2018–2019 tariffs found U.S. importers—not foreign exporters—paid ~95%+ of tariff duties via higher border-inclusive prices.'
    ],
    sources: [
      {
        title: 'The Impact of the 2018 Tariffs on Prices and Welfare',
        url: 'https://www.aeaweb.org/articles?id=10.1257/jep.33.4.187',
        publisher: 'Journal of Economic Perspectives (Amiti, Redding & Weinstein)',
        year: '2019',
        category: 'Empirical / Economic Study'
      },
      {
        title: 'The Return to Protectionism (NBER w25638 / QJE)',
        url: 'https://www.nber.org/papers/w25638',
        publisher: 'NBER / Quarterly Journal of Economics (Fajgelbaum, Goldberg, Kennedy & Khandelwal)',
        year: '2020',
        category: 'Empirical / Economic Study'
      },
      {
        title: 'How Tariffs Affect Trade Deficits and Exchange Rates',
        url: 'https://www.piie.com/research/trade-investment/tariffs',
        publisher: 'Peterson Institute for International Economics',
        year: '2024',
        category: 'Scholarship'
      }
    ],
    tags: ['Trade & Industry', 'Macroeconomics', 'Taxation & Fiscal'],
    era: '1791–Present',
    relatedIds: ['thesis-free-trade-comparative-advantage', 'thesis-industrial-policy-subsidies']
  },
  {
    id: 'pro-tariffs-infant-industry-anti-dumping',
    parentId: 'thesis-tariffs-protectionism',
    kind: 'pro',
    title: 'Offsetting Foreign Subsidies, Preserving Industrial Commons & Negotiation Leverage',
    summary:
      'Protection advocates argue manufacturing generates disproportionate R&D and defense-readiness spillovers, justifying tariffs to counter foreign state-capitalist dumping, induce onshore supply chains, and compel trading partners to renegotiate asymmetric rules.',
    sections: [
      {
        heading: 'Protecting the "Industrial Commons" Against Predatory Overcapacity',
        paragraphs: [
          'Manufacturing accounts for roughly **~11% of U.S. GDP** yet performs **over 55% of private-sector R&D** and employs non-college workers at significant wage premia. Business scholars **Gary Pisano** and **Willy Shih** warn that once supplier networks, tooling artisans, and process engineering (**the "industrial commons"**) migrate offshore due to foreign below-cost state credit and tax rebates, domestic firms lose the capacity to innovate next-generation products.',
          'When foreign governments subsidize **steel, solar modules, batteries, and electric vehicles** far beyond domestic demand, proponents argue border tariffs act not as market distortions, but as **corrective counterweights** restoring level competition.'
        ]
      },
      {
        heading: 'Tariff-Jumping Investment & Geoeconomic Bargaining Power',
        paragraphs: [
          'Historically, the **United States**, **Germany**, **Japan**, and **South Korea** all industrialized behind high nineteenth- and twentieth-century protective tariffs before championing free trade. Strategically, credible tariff threats create **coercive leverage** to secure intellectual-property enforcement, stricter rules-of-origin (as in **USMCA automotive wage clauses**), and domestic assembly commitments.'
        ]
      }
    ],
    details: [
      'Under USMCA’s 75% regional content and $16/hour labor-value-content rules backed by tariff enforcement, North American auto parts investment anchored higher-wage plants.',
      'Reagan’s 1981 automotive trade restrictions spurred Toyota, Honda, and Nissan to build major non-unionized assembly ecosystems across Ohio, Kentucky, and Tennessee.',
      'Supporters argue defense mobilization capacity—shipbuilding, munitions, transformers, drones—cannot rely on adversarial supply chains regardless of short-term consumer savings.'
    ],
    sources: [
      {
        title: 'Restoring American Competitiveness (The Industrial Commons)',
        url: 'https://hbr.org/2009/07/restoring-american-competitiveness',
        publisher: 'Harvard Business Review (Gary P. Pisano & Willy C. Shih)',
        year: '2009',
        category: 'Scholarship'
      },
      {
        title: 'Trade Imbalances and Global Capital Flows',
        url: 'https://carnegieendowment.org/research/2024/05/china-trade-surplus-global-imbalances',
        publisher: 'Carnegie Endowment for International Peace (Michael Pettis)',
        year: '2024',
        category: 'Scholarship'
      }
    ],
    tags: ['Trade & Industry', 'Security', 'Labor & Welfare'],
    era: '1980–Present',
    relatedIds: ['con-china-shock-rodrik-fragility']
  },
  {
    id: 'con-tariffs-consumer-passthrough-retaliation',
    parentId: 'thesis-tariffs-protectionism',
    kind: 'con',
    title: 'Full Consumer Pass-Through, Downstream Factory Job Losses & S − I = NX Refute Broad Tariffs',
    summary:
      'High-granularity studies of 2018–2024 tariffs prove domestic consumers and firms bore virtually 100% of tariff costs, steel input tariffs destroyed far more downstream manufacturing jobs than they saved, foreign retaliation hammered farmers, and trade deficits actually widened.',
    sections: [
      {
        heading: 'Near-100% Pass-Through & Downstream Input Destruction',
        paragraphs: [
          'Analyzing billions of customs shipment records from **2018–2019**, **Mary Amiti, Stephen Redding & David Weinstein (2019; 2020)** and **Fajgelbaum, Goldberg, Kennedy & Khandelwal (2020 QJE)** found foreign exporters did *not* cut pre-tariff prices; instead, **nearly 100% of tariff duties passed directly onto U.S. importers and consumers**, imposing **$50B+ in annual real income losses** and deadweight inefficiency.',
          'Worse, **Federal Reserve** economists **Aaron Flaaen** and **Justin Pierce (2019)** proved **Section 232 steel and aluminum tariffs** acted as a punitive tax on **U.S. steel-using manufacturers** (autos, machinery, appliances—which employ **~40–80x more workers** than primary steel mills), resulting in **net U.S. manufacturing job losses** alongside **$28 billion** in emergency taxpayer bailouts for retaliated-against soybean and pork farmers.'
        ]
      },
      {
        heading: 'Macroeconomic Accounting: Why Tariffs Cannot Fix NX = S − I',
        paragraphs: [
          'By national income identity, a nation’s aggregate **current-account trade balance (NX)** equals **national saving minus domestic investment (S − I)**. So long as large federal fiscal deficits depress national saving and attract foreign capital inflows, broad tariffs merely appreciate the **dollar**, choking **U.S. exports** just as much as they curb imports—leaving the overall trade deficit unchanged.'
        ]
      }
    ],
    details: [
      'Flaaen & Pierce (2019 Federal Reserve Board) found industries more exposed to 2018–2019 tariff input costs and export retaliation suffered net declines in U.S. factory employment and higher producer prices.',
      'Flaaen, Hortaçsu & Tintelnot (2020 AER) studied washing-machine tariffs: retail prices jumped ~12% (matching dryers rose too), costing consumers ~$815,000 annually per domestic job created.',
      'Despite sweeping 2018–2024 bilateral tariffs on China, the overall U.S. goods trade deficit widened from ~$800B (2017) past $1.0–$1.2 trillion as imports rerouted through Vietnam and Mexico.'
    ],
    sources: [
      {
        title: 'Disentangling the Effects of the 2018–2019 Tariffs on a Globally Connected U.S. Manufacturing Sector',
        url: 'https://www.federalreserve.gov/econres/feds/disentangling-the-effects-of-the-2018-2019-tariffs-on-a-globally-connected-us-manufacturing-sector.htm',
        publisher: 'Board of Governors of the Federal Reserve System (Flaaen & Pierce)',
        year: '2019',
        category: 'Empirical / Economic Study'
      },
      {
        title: 'Who’s Paying for the US Tariffs? A Longer-Term Perspective (NBER w26610)',
        url: 'https://www.nber.org/papers/w26610',
        publisher: 'NBER (Amiti, Redding & Weinstein)',
        year: '2020',
        category: 'Empirical / Economic Study'
      },
      {
        title: 'The Production Relocation and Price Effects of US Trade Policy: The Case of Washing Machines',
        url: 'https://www.aeaweb.org/articles?id=10.1257/aer.20190611',
        publisher: 'American Economic Review (Flaaen, Hortaçsu & Tintelnot)',
        year: '2020',
        category: 'Empirical / Economic Study'
      }
    ],
    tags: ['Trade & Industry', 'Empirical Studies', 'Macroeconomics'],
    era: '2018–Present',
    relatedIds: ['pro-debt-crowding-out-interest-burden']
  },
  {
    id: 'con-targeted-countervailing-vs-broad-tariffs',
    parentId: 'con-tariffs-consumer-passthrough-retaliation',
    kind: 'con',
    title: 'Narrow Anti-Subsidy Countervailing Duties & Allied Friend-Shoring Differ From Broad Autarky',
    summary:
      'Strategic-trade scholars respond that while universal tariffs on raw inputs and allies backfire, narrowly targeted countervailing duties on state-subsidized strategic sectors—paired with allied "friend-shoring"—prevent predatory monopoly lock-in.',
    sections: [
      {
        heading: 'Separating Blanket Input Tariffs From Strategic Anti-Dumping',
        paragraphs: [
          'Critics of blanket protectionism note that **taxing Canadian aluminum, European machine tools, or Vietnamese footwear** needlessly raises domestic factory costs, whereas **narrowly tailored Section 301 / WTO countervailing duties** on heavily subsidized **electric vehicles, lithium-ion batteries, solar cells, and legacy semiconductors** address genuine market failure. In **Paul Krugman** and **James Brander & Barbara Spencer’s** strategic-trade models, when learning curves and scale economies allow only a handful of global producers, permitting a foreign state to bankrupt all democratic competitors creates **long-run monopoly pricing and geopolitical blackmail**.',
          'Both the **United States** and the **European Union (2024 countervailing EV duties)** have converged on this surgical "small yard, high fence" distinction.'
        ]
      },
      {
        heading: 'Allied "Friend-Shoring" Preserves Scale Economies',
        paragraphs: [
          'Rather than autarkic reshoring inside a single domestic market, **Janet Yellen** and trade economists advocate **trusted-ally supply clubs** integrating **North America, the EU, Japan, South Korea, and democratic Indo-Pacific partners**—preserving comparative-advantage scale while eliminating single-adversary chokepoints.'
        ]
      }
    ],
    details: [
      'In 2024, the European Commission conducted a formal anti-subsidy investigation documenting below-market state land, credit, and battery inputs before imposing calibrated countervailing EV tariffs.',
      'Exempting intermediate industrial machinery and allied raw materials avoids the downstream job destruction documented in Flaaen & Pierce’s study of 2018 steel tariffs.',
      'Combined GDP of G7, EU, and OECD Indo-Pacific democracies exceeds 55% of global output—large enough to achieve minimum efficient scale across semiconductors and clean energy.'
    ],
    sources: [
      {
        title: 'Is Free Trade Passé? Strategic Trade Policy and Increasing Returns',
        url: 'https://www.aeaweb.org/articles?id=10.1257/jep.1.2.131',
        publisher: 'Journal of Economic Perspectives (Paul R. Krugman)',
        year: '1987',
        category: 'Scholarship'
      },
      {
        title: 'National Security, Resilience, and Friend-Shoring in Global Supply Chains',
        url: 'https://www.brookings.edu/articles/friend-shoring-and-resilient-supply-chains/',
        publisher: 'Brookings Institution',
        year: '2023',
        category: 'Scholarship'
      }
    ],
    tags: ['Trade & Industry', 'Security', 'Governance'],
    era: '2021–Present'
  },

  // THESIS 3C: Targeted Industrial Policy & Subsidies
  {
    id: 'thesis-industrial-policy-subsidies',
    parentId: 'pillar-econ-trade',
    kind: 'thesis',
    title: 'Targeted Industrial Policy (CHIPS Act, IRA, Developmental State) Accelerates Strategic Tech',
    summary:
      'Argues that private capital markets systematically underinvest in technologies with huge knowledge spillovers, coordination bottlenecks, and long-horizon risks—making targeted state R&D, fab grants, and tax credits essential to catalyze strategic industries.',
    sections: [
      {
        heading: 'Market Failures: Knowledge Spillovers, Learning Curves & Coordination',
        paragraphs: [
          'Neoclassical welfare economics recognizes that private firms underinvest when **R&D spillovers**, **learning-by-doing cost curves** (such as solar photovoltaics dropping **~90% in cost** over a decade), and **chicken-and-egg network coordination** (EVs vs. charging grids; chip fabs vs. packaging ecosystems) prevent first movers from capturing full social returns. Economists **Réka Juhász, Nathan Lane, and Dani Rodrik (2023 NBER)** review modern causal-inference studies showing well-designed industrial policies historically accelerated structural transformation.',
          'From **DARPA** (internet, GPS, stealth), **NIH**, and **Operation Warp Speed’s** advance market commitments for mRNA vaccines to **Taiwan’s ITRI/TSMC** and **South Korea’s** semiconductor/shipbuilding ascent, public risk-sharing repeatedly seeded foundational industries.'
        ]
      },
      {
        heading: 'The 2022 CHIPS & IRA Experiment vs. Capture & Permitting Risks',
        paragraphs: [
          'Enactment of the **U.S. CHIPS and Science Act ($52.7B semiconductor incentives)** and **Inflation Reduction Act (IRA clean-energy tax credits)** triggered a historic surge in domestic factory construction spending—yet critics point to **Solyndra/Concorde failures**, **rent-seeking lobby capture**, **"everything-bagel" social mandates**, and **NEPA permitting delays**.'
        ]
      }
    ],
    details: [
      'U.S. Census data show real private manufacturing construction spending more than doubled between 2021 and 2024 (~$230B+ annualized), led by computer/electronic fabs and battery plants.',
      'Operation Warp Speed ($18B in R&D and advance purchase guarantees) accelerated COVID-19 vaccine manufacturing in under 10 months, generating trillions in global economic value.',
      'Skeptics warn uncapped IRA tax credits ballooned far past initial $369B CBO scores while political strings slow fab timelines and trigger EU/Asian subsidy retaliation.'
    ],
    sources: [
      {
        title: 'The New Economics of Industrial Policy (NBER w31538)',
        url: 'https://www.nber.org/papers/w31538',
        publisher: 'National Bureau of Economic Research (Juhász, Lane & Rodrik)',
        year: '2023',
        category: 'Empirical / Economic Study'
      },
      {
        title: 'The Return of the Policy That Shall Not Be Named: Principles of Industrial Policy',
        url: 'https://www.imf.org/en/Publications/WP/Issues/2019/03/26/The-Return-of-the-Policy-That-Shall-Not-Be-Named-Principles-of-Industrial-Policy-46710',
        publisher: 'International Monetary Fund (Cherif & Hasanov)',
        year: '2019',
        category: 'Empirical / Economic Study'
      },
      {
        title: 'Industrial Policy in the United States: CHIPS, IRA, and Economic Tradeoffs',
        url: 'https://www.cato.org/policy-analysis/american-industrial-policy',
        publisher: 'Cato Institute (Scott Lincicome)',
        year: '2023',
        category: 'Scholarship'
      }
    ],
    tags: ['Trade & Industry', 'Energy & Climate', 'Regulation & Markets', 'Empirical Studies'],
    era: '1958–Present',
    relatedIds: ['thesis-tariffs-protectionism', 'pro-keynesian-zlb-multipliers']
  },
  {
    id: 'pro-industrial-policy-spillovers-darpa',
    parentId: 'thesis-industrial-policy-subsidies',
    kind: 'pro',
    title: 'East Asian Semiconductor Success, DARPA & Clean-Tech Learning Curves Prove State Catalysis',
    summary:
      'Modern econometric re-evaluations of developmental states, wartime mobilization, and green learning curves show public mission-oriented investments crowd in private venture and corporate capital to solve coordination traps.',
    sections: [
      {
        heading: 'Causal Evidence From Taiwan, South Korea & Mission Agencies',
        paragraphs: [
          'Taiwan held **zero comparative advantage** in silicon wafers in **1976** when its state **Industrial Technology Research Institute (ITRI)** licensed RCA’s CMOS process and later seeded **TSMC (1987)** with nearly half its startup capital—creating today’s undisputed global semiconductor leader. Similarly, **Nathan Lane’s (2022)** causal difference-in-differences study of **South Korea’s 1973 Heavy and Chemical Industry (HCI) drive** proved targeted credit and export-linked support permanently raised output, productivity, and downstream linkages long after subsidies ended.',
          'In the United States, **Mariana Mazzucato** documents how **DARPA**, **Department of Energy loans (including Tesla’s crucial 2010 $465M loan, repaid early)**, and **NASA** de-risked frontier technologies decades before venture capital entered.'
        ]
      },
      {
        heading: 'Pricing Unpriced Carbon & Security Externalities via Subsidies',
        paragraphs: [
          'When political polarization blocks a textbook **economy-wide carbon tax** and adversarial states heavily subsidize chip fabs, **clean-energy production tax credits** and **CHIPS capex grants** provide the **second-best Pigouvian instrument** to slide clean energy down Wright’s-Law cost curves globally.'
        ]
      }
    ],
    details: [
      'Nathan Lane (2022 Review of Economic Studies) used rigorous input-output natural experiments to show South Korea’s 1970s industrial policy created durable comparative advantage.',
      'Although critics remember Solyndra’s $535M bankruptcy, the broader 2009 DOE Loan Programs Office portfolio turned a net interest profit for U.S. taxpayers while launching utility-scale solar and Tesla’s Fremont factory.',
      'Wright’s Law learning-by-doing dynamics saw lithium-ion battery pack costs plunge nearly 90% between 2010 and 2024 as state procurement and subsidies scaled global gigafactories.'
    ],
    sources: [
      {
        title: 'Manufacturing Revolutions: Industrial Policy and Industrialization in South Korea',
        url: 'https://academic.oup.com/qje/article-abstract/140/1/1/7759516',
        publisher: 'Quarterly Journal of Economics (Nathan Lane)',
        year: '2024',
        category: 'Empirical / Economic Study'
      },
      {
        title: 'Accelerating Decarbonization and Strategic Innovation: Lessons from Operation Warp Speed & ARPA-E',
        url: 'https://www.brookings.edu/articles/the-case-for-industrial-policy/',
        publisher: 'Brookings Institution',
        year: '2022',
        category: 'Scholarship'
      }
    ],
    tags: ['Trade & Industry', 'Energy & Climate', 'Empirical Studies'],
    era: '1973–Present',
    relatedIds: ['pro-keynesian-zlb-multipliers']
  },
  {
    id: 'con-industrial-policy-capture-everything-bagel',
    parentId: 'thesis-industrial-policy-subsidies',
    kind: 'con',
    title: 'Rent-Seeking Capture, Picking Losers, Subsidy Wars & "Everything-Bagel" Permitting Delays',
    summary:
      'Public-choice economists and Abundance-agenda reformers warn that politicians allocate subsidies to politically connected incumbents and swing districts, pile on contradictory regulatory mandates ("everything-bagel liberalism"), and spark wasteful global subsidy races.',
    sections: [
      {
        heading: 'Knowledge Problems, Rent-Seeking & White-Elephant Failures',
        paragraphs: [
          'Following **Friedrich Hayek’s** decentralized knowledge critique and **Anne Krueger’s (1974)** theory of **rent-seeking**, market skeptics (**Scott Lincicome**, **Charles Schultze**) note governments lack venture markets’ ruthless price discovery and face intense electoral pressure to **bail out failing incumbents** in swing states rather than let losers fold. History is littered with costly industrial-policy fiascos: the Anglo-French **Concorde**, Latin American **import-substitution industrialization**, Japan’s **Fifth Generation Computer** project, **Solyndra**, and **Foxconn’s $10B Wisconsin** mirage.',
          'Internationally, massive national subsidies provoke **zero-sum global subsidy wars** across the U.S., EU, Japan, and China—bidding up scarce semiconductor engineers and fab equipment rather than expanding global supply.'
        ]
      },
      {
        heading: '"Everything-Bagel Liberalism" & Supply-Side Bottlenecks',
        paragraphs: [
          'Even sympathetic commentators like **Ezra Klein** and **Noah Smith** warn that attaching **Buy-America domestic-content rules, Davis-Bacon prevailing-wage mandates, child-care provisions, union neutrality, NEPA environmental lawsuits, and stock-buyback bans** onto CHIPS and IRA projects inflates U.S. fab and transmission build costs **30–50%+ above Taiwan/Asia** and delays execution by years.'
        ]
      }
    ],
    details: [
      'TSMC’s Arizona semiconductor fabs faced multi-year delays and sharply higher construction costs compared to Taiwan due to cleanroom technician shortages, permitting rules, and local labor disputes.',
      'Over 80% of clean-energy generation and battery capacity queued for U.S. grid interconnection stalls for 4–5+ years in NEPA/permitting and transmission bottlenecks—blunting IRA tax credits.',
      'Neutral policies—high-skilled STEM immigration, R&D expensing, permitting reform, and basic science—boost innovation across all sectors without politicians picking favored firms.'
    ],
    sources: [
      {
        title: 'The Political Economy of the Rent-Seeking Society',
        url: 'https://www.aeaweb.org/articles?id=10.1257/aer.64.3.291',
        publisher: 'American Economic Review (Anne O. Krueger)',
        year: '1974',
        category: 'Scholarship'
      },
      {
        title: 'Questioning Industrial Policy: Why Government Manufacturing Plans Are Ineffective and Unnecessary',
        url: 'https://www.cato.org/white-paper/questioning-industrial-policy',
        publisher: 'Cato Institute (Scott Lincicome & Haneul Kang)',
        year: '2021',
        category: 'Scholarship'
      },
      {
        title: 'How Permitting Reform Unlocking Transmission Determines the Inflation Reduction Act’s Climate Impact',
        url: 'https://www.brookings.edu/articles/how-does-permitting-for-clean-energy-infrastructure-work/',
        publisher: 'Brookings Institution',
        year: '2023',
        category: 'Empirical / Economic Study'
      }
    ],
    tags: ['Trade & Industry', 'Regulation & Markets', 'Governance', 'Energy & Climate'],
    era: '1974–Present'
  },
  {
    id: 'con-industrial-policy-export-sunset-discipline',
    parentId: 'con-industrial-policy-capture-everything-bagel',
    kind: 'con',
    title: 'Export Discipline, Sunset Clauses & Advance Market Commitments Prevent Capture',
    summary:
      'Institutional economists reply that rent-seeking is a solvable governance design problem: conditioning public support on global export competition, strict sunset clauses, streamlined permitting, and pay-for-success procurement separates East Asian and DARPA triumphs from Latin American failures.',
    sections: [
      {
        heading: 'Why Export Discipline Beat Import Substitution',
        paragraphs: [
          'Comparative research by **IMF economists Reda Cherif and Fuad Hasanov** and **Dani Rodrik** identifies the exact institutional divide between **East Asia’s miracles** and **Latin America’s stagnation**: Latin America shielded domestic monopolies behind permanent import walls where firms grew bloated, whereas **South Korea and Taiwan** conditioned cheap credit and R&D subsidies on **measurable global export market-share benchmarks**—ruthlessly cutting off firms that failed international competition.',
          'Pairing **explicit sunset clauses**, **independent technocratic program managers** (modeled on **DARPA/ARPA-E** fixed-term directors), and transparent **clawback triggers** prevents captured zombie subsidies.'
        ]
      },
      {
        heading: 'Advance Market Commitments & Abundance Permitting Reform',
        paragraphs: [
          'Using **Advance Market Commitments (AMCs)**—like **Operation Warp Speed** or **frontier carbon-removal/vaccine purchase prizes**—governments pay **zero dollars up front for failed lobbying** and reward *only* verified, delivered technological breakthroughs, especially when paired with **fast-track permitting** for clean grids and fabs.'
        ]
      }
    ],
    details: [
      'Philippe Aghion et al. (2015 AEJ) showed sector-wide subsidies allocated competitively across multiple rival firms significantly boost Total Factor Productivity (TFP) growth, unlike single-champion bailouts.',
      'Advance Market Commitments (Kremer, Levin & Snyder, 2020) guarantee a price per unit only after a vaccine or clean technology meets strict technical thresholds.',
      'Portfolio governance expects individual bets (like Solyndra) to fail while requiring the overall technology portfolio to clear high social-return hurdles.'
    ],
    sources: [
      {
        title: 'Industrial Policy and Competition',
        url: 'https://www.aeaweb.org/articles?id=10.1257/mac.20120103',
        publisher: 'AEJ: Macroeconomics (Aghion, Cai, Dewatripont, Du, Harrison & Legros)',
        year: '2015',
        category: 'Empirical / Economic Study'
      },
      {
        title: 'Advance Market Commitments: Insights from Theory and Experience',
        url: 'https://www.aeaweb.org/articles?id=10.1257/pandp.20201017',
        publisher: 'AEA Papers and Proceedings (Michael Kremer, Jonathan Levin & Christopher Snyder)',
        year: '2020',
        category: 'Scholarship'
      }
    ],
    tags: ['Trade & Industry', 'Governance', 'Empirical Studies'],
    era: '2015–Present'
  }
];
