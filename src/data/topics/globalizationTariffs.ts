import { DebateGraphDataset, DebateNode } from '../../types/debate';

const rootNode: DebateNode = {
  id: 'root-globalization-tariffs',
  parentId: null,
  kind: 'root',
  title: 'Globalization vs. Protectionist Tariffs',
  summary:
    'A central geoeconomic clash of our era: whether open international trade and Ricardian comparative advantage maximize global prosperity, lower consumer costs, and foster peace, or whether strategic tariffs, industrial policy, and friendshoring are indispensable to rebuild domestic manufacturing, counter non-market mercantilism, and protect national security.',
  sections: [
    {
      heading: 'The Free Trade Consensus and the Neoliberal Era',
      paragraphs: [
        'For nearly eight decades following the **1944 Bretton Woods Conference**, Western economic orthodoxy rested on the principle that lowering international trade barriers and establishing rule-based global institutions (GATT and the WTO) delivers mutual economic enrichment. Grounded in **David Ricardo’s theory of comparative advantage** and **Paul Krugman’s New Trade Theory**, economists maintained that global specialization creates immense consumer surplus, slashes production costs through economies of scale, and fosters international peace through economic interdependence.',
        'Between **1980 and 2018**, global tariffs plummeted, multinational corporations optimized just-in-time global supply chains, and hundreds of millions in emerging markets were integrated into the global economy.',
      ],
    },
    {
      heading: 'The Populist Backlash, China Shock & The Return of Geoeconomics',
      paragraphs: [
        'However, landmark empirical work by **David Autor, David Dorn, and Gordon Hanson (2013)** demonstrated that the "China Shock" inflicted devastating, permanent scars on domestic manufacturing communities across the American Rust Belt and European industrial regions, disproving the textbook assumption that displaced workers smoothly transition into new high-tech roles. Concurrently, **China’s state-capitalist mercantilism**—combining massive state subsidies, forced technology transfers, and industrial overcapacity—upended assumptions of fair market competition.',
        'Championed by figures like **Robert Lighthizer** and **Peter Navarro**, the United States executed a historic protectionist pivot through Section 301 tariffs, bilateral renegotiations, and national security industrial subsidies (CHIPS and IRA), touching off a fierce global debate over whether universal tariffs foster domestic resilience or trigger inflationary retaliatory trade wars.',
      ],
    },
  ],
  details: [
    '**Ricardian Gains vs. Rust Belt Scars:** Weighs trillions in consumer surplus and global specialization against the localized labor destruction documented in the Autor-Dorn-Hanson China Shock studies.',
    '**Empirical Tariff Pass-Through:** Evaluates Fajgelbaum et al. and Amiti-Redding-Weinstein findings proving U.S. consumers and importers paid virtually 100% of 2018–2019 tariffs.',
    '**Strategic Geopolitics:** Assesses "small yard, high fence" national security controls and friendshoring versus across-the-board 10–20% universal baseline tariffs.',
  ],
  sources: [
    {
      title: 'Open to Debate: Are Tariffs Good for America?',
      url: 'https://opentodebate.org/debate/are-tariffs-good-for-america/',
      publisher: 'Open to Debate (Douglas Irwin & Glenn Hubbard vs. Peter Navarro & Dan DiMicco)',
      year: '2018',
      category: 'Debate / Broadcast',
    },
    {
      title: 'The China Syndrome: Local Labor Market Effects of Import Competition in the United States',
      url: 'https://www.aeaweb.org/articles?id=10.1257/aer.103.6.2121',
      publisher: 'American Economic Review (David Autor, David Dorn & Gordon Hanson)',
      year: '2013',
      category: 'Empirical / Economic Study',
    },
    {
      title: 'The Return to Protectionism (NBER w25638 / QJE)',
      url: 'https://academic.oup.com/qje/article/135/1/1/5584501',
      publisher: 'Quarterly Journal of Economics (Fajgelbaum, Goldberg, Kennedy & Khandelwal)',
      year: '2020',
      category: 'Empirical / Economic Study',
    },
    {
      title: 'No Trade Is Free: Changing Course, Taking on China, and Helping America’s Workers',
      url: 'https://www.harpercollins.com/products/no-trade-is-free-robert-lighthizer',
      publisher: 'Broadside Books / HarperCollins (Robert Lighthizer)',
      year: '2023',
      category: 'Scholarship',
    },
  ],
  tags: ['Trade & Industry', 'Macroeconomics', 'National Security', 'Labor & Welfare'],
  era: '1817–Present',
  relatedIds: ['pillar-trade-manufacturing', 'pillar-trade-consumer', 'pillar-trade-comparative', 'pillar-trade-strategic'],
};

const pillarNodes: DebateNode[] = [
  {
    id: 'pillar-trade-manufacturing',
    parentId: 'root-globalization-tariffs',
    kind: 'pillar',
    title: 'Rebuilding Domestic Manufacturing & Industrial Resilience',
    summary:
      'Argues that strategic tariffs and industrial protection are vital to counter foreign non-market subsidies, secure critical defense supply chains, and revitalize domestic high-wage industrial employment.',
    sections: [
      {
        heading: 'Industrial Capacity as the Foundation of National Security',
        paragraphs: [
          'In his treatise *No Trade Is Free*, former U.S. Trade Representative **Robert Lighthizer** contends that a nation that cannot produce its own steel, aluminum, machine tools, antibiotics, and microchips cannot remain a sovereign superpower. Decades of unconstrained offshoring created acute strategic vulnerabilities, leaving Western militaries dependent on potential adversaries like China for rare earth elements, titanium, and advanced circuit boards.',
          'Strategic tariffs under **Section 232 and Section 301** create a protective moat, encouraging capital reinvestment into domestic foundries, shipyards, and high-tech manufacturing plants.',
        ],
      },
      {
        heading: 'Combating Foreign State-Capitalist Mercantilism',
        paragraphs: [
          'China’s state capitalism rejects free-market rules: Beijing provides state-backed capital, subsidized electricity, and free industrial land to state champions, deliberately dumping subsidized electric vehicles, solar panels, and steel below the cost of production to bankrupt foreign competitors.',
        ],
      },
    ],
    details: [
      'Strategic tariffs defend domestic heavy industry against state-subsidized foreign dumping and predatory excess capacity.',
      'Defense logistics analyses show the U.S. defense industrial base faces critical single-source supply dependencies in East Asia.',
      'Manufacturing jobs generate a 3.4x indirect economic multiplier in local communities, far exceeding retail and hospitality roles.',
    ],
    sources: [
      {
        title: 'No Trade Is Free',
        url: 'https://www.harpercollins.com/products/no-trade-is-free-robert-lighthizer',
        publisher: 'HarperCollins (Robert Lighthizer)',
        year: '2023',
        category: 'Scholarship',
      },
      {
        title: 'Securing Defense-Critical Supply Chains',
        url: 'https://www.defense.gov/News/Releases/Release/Article/2944158/dod-releases-report-on-securing-defense-critical-supply-chains/',
        publisher: 'U.S. Department of Defense',
        year: '2022',
        category: 'Court / Official Record',
      },
      {
        title: 'The Manufacturing Multiplier: Measuring Indirect Economic Spillovers',
        url: 'https://www.epi.org/publication/updated-employment-multipliers-for-the-u-s-economy/',
        publisher: 'Economic Policy Institute (Josh Bivens)',
        year: '2019',
        category: 'Empirical / Economic Study',
      },
    ],
    tags: ['Trade & Industry', 'National Security', 'Labor & Welfare'],
    era: '2016–Present',
    relatedIds: ['pillar-trade-consumer', 'pillar-trade-strategic'],
  },
  {
    id: 'pillar-trade-consumer',
    parentId: 'root-globalization-tariffs',
    kind: 'pillar',
    title: 'Consumer Costs, Deadweight Loss & Retaliation',
    summary:
      'Highlights rigorous econometric evidence demonstrating that domestic consumers and downstream manufacturers bear the full cost of tariffs through higher prices, deadweight loss, and retaliatory export bans.',
    sections: [
      {
        heading: 'Complete Tariff Pass-Through to Domestic Buyers',
        paragraphs: [
          'In contrast to political claims that "foreign nations pay the tariffs," comprehensive econometric studies by **Fajgelbaum et al. (2020 QJE)** and **Amiti, Redding & Weinstein (2019 JEP)** proved that U.S. tariffs were almost **100% passed through** into domestic border import prices. U.S. firms and consumers paid the entirety of the tariff revenue, incurring an annual net deadweight welfare loss of tens of billions.',
          'Downstream manufacturing industries—such as automotive, construction equipment, and canning—faced higher input costs for steel and aluminum, ultimately destroying more domestic manufacturing jobs than the tariffs protected.',
        ],
      },
    ],
    details: [
      'Fajgelbaum et al. (2020 QJE) demonstrated near-complete pass-through of 2018 U.S. tariffs to domestic prices, causing a $16.8 billion annual consumer deadweight loss.',
      'Amiti, Redding & Weinstein (2019) documented that downstream U.S. steel-using manufacturers employ 45 times more workers than steel-producing mills.',
      'Chinese counter-tariffs targeted U.S. soybeans, pork, and sorghum, requiring a $28 billion federal taxpayer agricultural bailout (Market Facilitation Program).',
    ],
    sources: [
      {
        title: 'The Return to Protectionism (QJE)',
        url: 'https://academic.oup.com/qje/article/135/1/1/5584501',
        publisher: 'Quarterly Journal of Economics (Fajgelbaum et al.)',
        year: '2020',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'The Impact of the 2018 Tariffs on Prices and Welfare',
        url: 'https://www.aeaweb.org/articles?id=10.1257/jep.33.4.187',
        publisher: 'Journal of Economic Perspectives (Amiti, Redding & Weinstein)',
        year: '2019',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'USDA Market Facilitation Program and Trade Mitigation Outlays',
        url: 'https://www.ers.usda.gov/topics/farm-economy/farm-commodity-policy/market-facilitation-program',
        publisher: 'U.S. Department of Agriculture (USDA)',
        year: '2021',
        category: 'Court / Official Record',
      },
    ],
    tags: ['Trade & Industry', 'Taxation & Fiscal', 'Empirical Studies', 'Macroeconomics'],
    era: '2018–Present',
    relatedIds: ['pillar-trade-manufacturing', 'pillar-trade-comparative'],
  },
  {
    id: 'pillar-trade-comparative',
    parentId: 'root-globalization-tariffs',
    kind: 'pillar',
    title: 'Comparative Advantage & Global Specialization',
    summary:
      'Examines the classic Ricardian and Heckscher-Ohlin models of international specialization against empirical findings on localized deindustrialization and the Stolper-Samuelson effect.',
    sections: [
      {
        heading: 'The Power of Ricardian Specialization',
        paragraphs: [
          'In **1817**, **David Ricardo** demonstrated that even if one country is more efficient at producing every single product than another, both nations gain if each specializes in the good where it has a **comparative advantage**. By trading freely, the global production possibilities frontier expands, delivering greater aggregate wealth, lower consumer prices, and higher purchasing power.',
          'Trade allows developing nations to escape agrarian poverty and enables developed nations to shift their workforces into high-value knowledge, software, biotech, and advanced engineering sectors.',
        ],
      },
      {
        heading: 'The Stolper-Samuelson Reality and Concentrated Pain',
        paragraphs: [
          'The **Stolper-Samuelson theorem** warns that opening trade between a capital-rich country and a labor-rich country inevitably reduces real returns to domestic low-skilled labor. Trade is not a win-win for every individual citizen unless the winners heavily compensate the losers—a promise the political system failed to keep.',
        ],
      },
    ],
    details: [
      'David Ricardo’s law of comparative advantage proves trade expands total global output beyond autarky limits.',
      'Paul Krugman’s New Trade Theory showed internal economies of scale allow trading partners to produce varieties of consumer goods at lower costs.',
      'Stolper-Samuelson theorem proves trade between asymmetric factor endowments structurally depresses the wages of domestic non-college workers.',
    ],
    sources: [
      {
        title: 'On the Principles of Political Economy and Taxation',
        url: 'https://oll.libertyfund.org/title/ricardo-the-works-and-correspondence-of-david-ricardo-vol-1-principles-of-political-economy-and-taxation',
        publisher: 'John Murray (David Ricardo)',
        year: '1817',
        category: 'Scholarship',
      },
      {
        title: 'Protection and Real Wages',
        url: 'https://www.jstor.org/stable/2967638',
        publisher: 'Review of Economic Studies (Wolfgang Stolper & Paul Samuelson)',
        year: '1941',
        category: 'Scholarship',
      },
      {
        title: 'Clashing over Commerce: A History of US Trade Policy',
        url: 'https://press.uchicago.edu/ucp/books/book/chicago/C/bo24479526.html',
        publisher: 'University of Chicago Press (Douglas A. Irwin)',
        year: '2017',
        category: 'Scholarship',
      },
    ],
    tags: ['Trade & Industry', 'Macroeconomics', 'History'],
    era: '1817–Present',
    relatedIds: ['pillar-trade-manufacturing', 'pillar-trade-consumer'],
  },
  {
    id: 'pillar-trade-strategic',
    parentId: 'root-globalization-tariffs',
    kind: 'pillar',
    title: 'Targeted Friendshoring vs. Universal Tariffs',
    summary:
      'Weighs targeted, surgical export controls and plurilateral friendshoring ("small yard, high fence") against blanket, across-the-board 10–20% universal import tariffs.',
    sections: [
      {
        heading: 'The National Security Doctrine: "Small Yard, High Fence"',
        paragraphs: [
          'Under the **Biden-Harris Administration**, National Security Advisor **Jake Sullivan** articulated the "New Washington Consensus": moving away from broad tariff wars with democratic allies toward a targeted strategy of **de-risking rather than decoupling**. Under the "small yard, high fence" doctrine, the U.S. imposes strict export bans and investment screens on foundational dual-use technologies (advanced GPUs, extreme ultraviolet lithography, AI chips) while maintaining open commercial trade in consumer goods.',
          'Plurilateral agreements with allies—like the **USMCA, Indo-Pacific Economic Framework, and EU Trade and Technology Council**—focus on "friendshoring" critical supply chains to reliable partners.',
        ],
      },
      {
        heading: 'The Case for Across-the-Board Universal Baseline Tariffs',
        paragraphs: [
          'Proponents of broad tariffs—such as **Donald Trump** and **Peter Navarro**—argue that surgical approaches fail because Beijing continuously circumvents export restrictions by transshipping goods through third-party countries like Vietnam and Mexico. A universal **10% to 20% baseline tariff** creates a blunt, inescapable incentive to bring factories all the way back to the homeland.',
        ],
      },
    ],
    details: [
      'Jake Sullivan’s "small yard, high fence" framework restricts sensitive dual-use semiconductor chips while preserving general commercial trade.',
      'Universal 10–20% tariffs risk triggering retaliatory trade wars with critical treaty allies including the European Union, Japan, and Canada.',
      'Transshipment data from the Peterson Institute shows Chinese industrial parts surged into Mexico and Vietnam to circumvent U.S. bilateral tariffs.',
    ],
    sources: [
      {
        title: 'Remarks on Renewing American Economic Leadership at the Brookings Institution',
        url: 'https://www.whitehouse.gov/briefing-room/speeches-remarks/2023/04/27/remarks-by-national-security-advisor-jake-sullivan-on-renewing-american-economic-leadership-at-the-brookings-institution/',
        publisher: 'The White House (Jake Sullivan)',
        year: '2023',
        category: 'Court / Official Record',
      },
      {
        title: 'Why a Universal 10 Percent Tariff Is a Bad Idea',
        url: 'https://www.piie.com/blogs/realtime-economics/2024/why-universal-10-percent-tariff-bad-idea',
        publisher: 'Peterson Institute for International Economics (Kimberly Clausing & Mary Lovely)',
        year: '2024',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'Transshipment of Chinese Goods via Third Countries: Evidence and Policy Options',
        url: 'https://www.uscc.gov/research/transshipment-chinese-goods',
        publisher: 'U.S.-China Economic and Security Review Commission',
        year: '2023',
        category: 'Court / Official Record',
      },
    ],
    tags: ['Trade & Industry', 'National Security', 'Diplomacy', 'Macroeconomics'],
    era: '2022–Present',
    relatedIds: ['pillar-trade-manufacturing', 'pillar-trade-consumer'],
  },
];

const thesisNodes: DebateNode[] = [
  // Pillar 1 Theses
  {
    id: 'thesis-trade-defense-resilience',
    parentId: 'pillar-trade-manufacturing',
    kind: 'thesis',
    title: 'Industrial Base Autarky & National Defense Supply Chains',
    summary:
      'Posits that preserving domestic manufacturing capabilities in steel, shipbuilding, and microelectronics is an essential national defense imperative that overrides short-term consumer cost savings.',
    sections: [
      {
        heading: 'Strategic Fragility in Great-Power Competition',
        paragraphs: [
          'If a major conflict erupts in the Western Pacific, global maritime shipping lanes could be severed overnight. If the United States relies on East Asian suppliers for commercial cargo ships, forged steel hulls, and microprocessors, it cannot resupply its naval fleet or maintain sustained wartime production.',
          'Section 232 of the Trade Expansion Act recognizes this reality by allowing tariffs on national security grounds. Without a protected domestic steel and machine-tool base, national defense collapses into fatal dependency.',
        ],
      },
      {
        heading: 'The Cost-Plus Inefficiency of Protected Defense Contractors',
        paragraphs: [
          'Free-market critics argue that sheltering domestic heavy industries from global competition breeds complacent, high-cost monopolies. The U.S. **Jones Act** (requiring domestic-built vessels for coastal shipping) destroyed commercial American shipbuilding, leaving the U.S. producing fewer than ten merchant vessels annually at five times the cost of South Korean yards.',
        ],
      },
    ],
    details: [
      'The U.S. shipbuilding industrial base builds fewer than 10 ocean-going commercial vessels annually, compared to over 1,000 built in China.',
      'Section 232 steel tariffs were instituted under national security justifications to protect domestic electric arc furnaces and blast mills.',
      'The Jones Act demonstrates that century-long protectionism can atrophy domestic competitiveness rather than strengthen it.',
    ],
    sources: [
      {
        title: 'The Jones Act in Perspective: A Century of Protectionist Failure',
        url: 'https://www.cato.org/publications/policy-analysis/rust-buckets-how-jones-act-undermines-us-shipbuilding-national-security',
        publisher: 'Cato Institute (Colin Grabow)',
        year: '2022',
        category: 'Scholarship',
      },
      {
        title: 'Department of Commerce Section 232 Steel Investigation Report',
        url: 'https://www.bis.doc.gov/index.php/232-steel',
        publisher: 'U.S. Department of Commerce',
        year: '2018',
        category: 'Court / Official Record',
      },
    ],
    tags: ['Trade & Industry', 'National Security', 'Macroeconomics'],
    era: '2018–Present',
    relatedIds: ['thesis-trade-countering-mercantilism'],
  },
  {
    id: 'thesis-trade-countering-mercantilism',
    parentId: 'pillar-trade-manufacturing',
    kind: 'thesis',
    title: 'Countering Non-Market State Subsidies & Industrial Dumping',
    summary:
      'Argues that free-trade theories break down when confronting state-capitalist economies that weaponize industrial subsidies and currency management to destroy market rivals.',
    sections: [
      {
        heading: 'The Non-Market Threat of Chinese Industrial Overcapacity',
        paragraphs: [
          'Western trade models assume private firms operate to maximize profit and exit the market when bankrupt. In contrast, Chinese state-owned enterprises (SOEs) and subsidized private champions operate to maximize global market share, sustained by hundreds of billions in state bank loans, discounted electricity, and free land grants.',
          'In sectors like **solar photovoltaic cells, lithium-ion batteries, and electric vehicles**, China built global production capacity exceeding total worldwide demand. Without protective tariffs, Western green technology manufacturing will be wiped out by subsidized foreign dumping.',
        ],
      },
      {
        heading: 'The Risk of Protectionist Capture by Incumbent Lobbies',
        paragraphs: [
          'Skeptics warn that defining "unfair foreign subsidies" is notoriously prone to special-interest rent-seeking. Domestic manufacturers routinely lobby for anti-dumping duties simply to block superior, lower-priced foreign innovations that benefit consumers.',
        ],
      },
    ],
    details: [
      'CSIS reports that China spends roughly 1.7% of its GDP on direct industrial subsidies—over three times the rate of the United States.',
      'Chinese domestic capacity for solar panels and EV batteries exceeds 200% of global market consumption.',
      'Tariffs prevent domestic innovators from being systematically bankrupted by predatory state-backed dumping.',
    ],
    sources: [
      {
        title: 'Red Ink: Estimating Chinese Industrial Subsidies',
        url: 'https://www.csis.org/analysis/red-ink-estimating-chinese-industrial-subsidies',
        publisher: 'Center for Strategic and International Studies (CSIS)',
        year: '2022',
        category: 'Scholarship',
      },
      {
        title: 'The Great Battery and EV Glut: China’s Industrial Strategy',
        url: 'https://www.imf.org/en/Publications/WP/Issues/2023/11/17/Chinas-Industrial-Policy-541530',
        publisher: 'International Monetary Fund (IMF)',
        year: '2023',
        category: 'Empirical / Economic Study',
      },
    ],
    tags: ['Trade & Industry', 'Macroeconomics', 'Regulation & Markets'],
    era: '2022–Present',
    relatedIds: ['thesis-trade-defense-resilience'],
  },

  // Pillar 2 Theses
  {
    id: 'thesis-trade-consumer-pass-through',
    parentId: 'pillar-trade-consumer',
    kind: 'thesis',
    title: 'Empirical 100% Tariff Pass-Through to Domestic Importers & Shoppers',
    summary:
      'Demonstrates that tariffs are not paid by foreign exporters, but function as a regressive consumption tax borne entirely by domestic businesses and households.',
    sections: [
      {
        heading: 'Econometric Proof of Total Tariff Incidence',
        paragraphs: [
          'In classic trade theory, a large country might theoretically improve its "terms of trade" if foreign exporters slash their pre-tariff export prices to retain market share. However, exhaustive microdata evaluations of the **2018–2019 Trump-Pence tariffs** revealed **zero drop in foreign export prices**.',
          'Instead, **Fajgelbaum et al. (2020)** and **Cavallo et al. (2021 AEA)** found import prices rose by the exact dollar percentage of the tariff. American consumers and importing companies paid 100% of the customs duties, amounting to an annual tax hike of over $800 to $1,200 per average household.',
        ],
      },
      {
        heading: 'Strategic Terms-of-Trade Leverage',
        paragraphs: [
          'Tariff proponents counter that short-term price pass-through is the necessary cost of reshaping long-term investment. Over time, as alternative factories spin up in North America, consumer prices stabilize while domestic supply chains are secured.',
        ],
      },
    ],
    details: [
      'Microdata analysis of millions of import transactions showed foreign exporter dollar prices did not fall, proving complete domestic pass-through.',
      'Tax Foundation modeling showed a universal 10% tariff would impose a $300 billion annual tax increase on U.S. consumers.',
      'Because lower-income households spend a larger fraction of income on manufactured goods, tariffs act as an intensely regressive consumption tax.',
    ],
    sources: [
      {
        title: 'The Return to Protectionism',
        url: 'https://academic.oup.com/qje/article/135/1/1/5584501',
        publisher: 'Quarterly Journal of Economics (Fajgelbaum et al.)',
        year: '2020',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'Tariff Pass-Through at the Border and at the Store: Evidence from US Trade Policy',
        url: 'https://www.aeaweb.org/articles?id=10.1257/aer.20191211',
        publisher: 'American Economic Review (Cavallo, Gopinath, Neiman & Tang)',
        year: '2021',
        category: 'Empirical / Economic Study',
      },
    ],
    tags: ['Trade & Industry', 'Taxation & Fiscal', 'Empirical Studies'],
    era: '2020–Present',
    relatedIds: ['thesis-trade-retaliation-destruction'],
  },
  {
    id: 'thesis-trade-retaliation-destruction',
    parentId: 'pillar-trade-consumer',
    kind: 'thesis',
    title: 'Retaliatory Export Collapses in Agriculture & Precision Manufacturing',
    summary:
      'Warns that protectionist tariffs inevitably provoke retaliatory trade barriers from trading partners, crushing domestic export industries and necessitating taxpayer bailouts.',
    sections: [
      {
        heading: 'The Inevitability of Retaliatory Counter-Tariffs',
        paragraphs: [
          'International trade operates under the principle of reciprocity. When the U.S. imposed tariffs on steel, aluminum, and Chinese consumer electronics, affected nations immediately responded with targeted counter-tariffs designed to maximize political pain in key export districts.',
          'China levied **25% duties on U.S. soybeans, pork, and automobiles**, cutting U.S. agricultural exports to China by more than half. To prevent Midwestern farm bankruptcies, the federal government had to authorize **$28 billion in direct taxpayer cash transfers** through the Market Facilitation Program—completely wiping out net tariff revenue.',
        ],
      },
      {
        heading: 'Strategic Realignment of Global Sourcing',
        paragraphs: [
          'Supporters argue that while short-term agricultural retaliation was painful, it successfully forced domestic producers to diversify customer bases away from over-reliance on coercive Chinese state buyers.',
        ],
      },
    ],
    details: [
      'U.S. soybean exports to China collapsed by over 75% in 2018 following Beijing’s retaliatory tariffs.',
      'The federal government paid $28 billion in direct agricultural bailouts (2018–2019) to offset farm export losses.',
      'European Union counter-tariffs targeted politically sensitive U.S. exports including Kentucky bourbon and Harley-Davidson motorcycles.',
    ],
    sources: [
      {
        title: 'The Trade War and American Agriculture',
        url: 'https://www.ers.usda.gov/amber-waves/2022/february/u-s-agricultural-exports-to-china-rebound-following-phase-one-agreement/',
        publisher: 'USDA Economic Research Service',
        year: '2022',
        category: 'Court / Official Record',
      },
      {
        title: 'How Retaliatory Tariffs Targeted Trump’s Base',
        url: 'https://www.brookings.edu/articles/how-retaliatory-tariffs-targeted-trumps-base/',
        publisher: 'Brookings Institution',
        year: '2019',
        category: 'Scholarship',
      },
    ],
    tags: ['Trade & Industry', 'Taxation & Fiscal', 'Macroeconomics'],
    era: '2018–Present',
    relatedIds: ['thesis-trade-consumer-pass-through'],
  },

  // Pillar 3 Theses
  {
    id: 'thesis-trade-ricardian-efficiency',
    parentId: 'pillar-trade-comparative',
    kind: 'thesis',
    title: 'Ricardian Comparative Advantage & Global Consumer Purchasing Power',
    summary:
      'Posits that open international trade maximizes human welfare by allocating capital and labor to their most productive global uses, dramatically reducing the real cost of living.',
    sections: [
      {
        heading: 'Deflationary Consumer Abundance and Quality of Life',
        paragraphs: [
          'Globalized trade has been the single greatest deflationary force in modern economic history. By sourcing clothing from Bangladesh, electronics assembly from Vietnam, and footwear from Indonesia, working-class households gained access to affordable apparel, household appliances, laptops, and smartphones that would otherwise be luxury goods.',
          'As **Douglas Irwin** points out, imposing 20% to 50% tariffs on imported consumer goods would cause a severe drop in the real standard of living for bottom-quartile families, who spend the vast majority of their paychecks on manufactured retail goods.',
        ],
      },
      {
        heading: 'Dynamic Economies of Scale and Innovation Spillovers',
        paragraphs: [
          'Selling to a unified global market of billions allows tech and pharmaceutical firms to amortize astronomical upfront R&D investments across worldwide sales, accelerating life-saving innovations.',
        ],
      },
    ],
    details: [
      'Real prices for apparel, toys, and electronics fell by over 50% between 1990 and 2015 due to global supply chain integration.',
      'The Peterson Institute estimates that post-WWII trade liberalization expanded U.S. GDP by over $1.5 trillion annually ($18,000 per household).',
      'Protectionist trade barriers shrink the global market size for cutting-edge semiconductor and aerospace innovators.',
    ],
    sources: [
      {
        title: 'Clashing over Commerce: A History of US Trade Policy',
        url: 'https://press.uchicago.edu/ucp/books/book/chicago/C/bo24479526.html',
        publisher: 'University of Chicago Press (Douglas A. Irwin)',
        year: '2017',
        category: 'Scholarship',
      },
      {
        title: 'The Payoff from Global Trade: New Evidence, New Policies',
        url: 'https://www.piie.com/publications/policy-analyses-international-economics/payoff-global-trade-new-evidence-new-policies',
        publisher: 'Peterson Institute for International Economics (Gary Hufbauer & Zhiyao Lu)',
        year: '2017',
        category: 'Scholarship',
      },
    ],
    tags: ['Trade & Industry', 'Macroeconomics', 'History'],
    era: '1817–Present',
    relatedIds: ['thesis-trade-china-shock-scars'],
  },
  {
    id: 'thesis-trade-china-shock-scars',
    parentId: 'pillar-trade-comparative',
    kind: 'thesis',
    title: 'The China Shock & Persistent Local Deindustrialization (Autor-Dorn-Hanson)',
    summary:
      'Examines the landmark empirical finding that rapid Chinese import competition permanently destroyed millions of U.S. manufacturing jobs without textbook labor market adjustment.',
    sections: [
      {
        heading: 'The Failure of the Smooth Adjustment Hypothesis',
        paragraphs: [
          'For decades, mainstream trade models assumed that workers who lost factory jobs to imports would quickly re-educate, relocate, and find employment in expanding service or high-tech sectors. In their groundbreaking **2013 AER paper**, **David Autor, David Dorn, and Gordon Hanson** analyzed U.S. commuting zones between **1990 and 2007** following China’s accession to the WTO.',
          'They revealed that import competition caused **severe, long-lasting deindustrialization**: local labor markets exposed to Chinese imports suffered elevated unemployment, permanently depressed real wages, skyrocketing disability applications, and family breakdown that persisted for over two decades.',
        ],
      },
      {
        heading: 'Service Sector Employment and Aggregate Net Gains',
        paragraphs: [
          'Trade defenders note that while localized manufacturing hubs suffered, the U.S. economy gained millions of high-paying jobs in software, logistics, finance, and engineering that benefited from cheaper Chinese inputs and global exports.',
        ],
      },
    ],
    details: [
      'Autor, Dorn & Hanson estimated that the China Shock accounted for the direct loss of roughly 2.0 to 2.4 million U.S. manufacturing jobs.',
      'Affected commuting zones saw zero population out-migration, disproving the assumption that workers relocate to booming cities.',
      'Surging disability benefit enrollments and premature mortality ("deaths of despair") clustered heavily in import-competing manufacturing counties.',
    ],
    sources: [
      {
        title: 'The China Syndrome: Local Labor Market Effects of Import Competition in the United States',
        url: 'https://www.aeaweb.org/articles?id=10.1257/aer.103.6.2121',
        publisher: 'American Economic Review (David Autor, David Dorn & Gordon Hanson)',
        year: '2013',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'On the Persistence of the China Shock (NBER w29401)',
        url: 'https://www.nber.org/papers/w29401',
        publisher: 'NBER (Autor, Dorn & Hanson)',
        year: '2021',
        category: 'Empirical / Economic Study',
      },
    ],
    tags: ['Trade & Industry', 'Labor & Welfare', 'Empirical Studies'],
    era: '2013–Present',
    relatedIds: ['thesis-trade-ricardian-efficiency'],
  },

  // Pillar 4 Theses
  {
    id: 'thesis-trade-targeted-friendshoring',
    parentId: 'pillar-trade-strategic',
    kind: 'thesis',
    title: 'Targeted Strategic De-risking & Plurilateral Friendshoring',
    summary:
      'Advocates for surgical "small yard, high fence" technology export controls and supply chain coordination among democratic allies rather than isolationist universal tariffs.',
    sections: [
      {
        heading: 'Precision Controls on Dual-Use Technologies',
        paragraphs: [
          'The modern consensus among national security strategists emphasizes that blanket trade isolationism damages our own economy. Instead, the United States should implement surgical controls on critical chokepoints: cutting-edge extreme ultraviolet (EUV) lithography tools from ASML, advanced AI accelerators from Nvidia, and quantum computing hardware.',
          'Concurrently, the **CHIPS and Science Act ($52 billion)** and the **Inflation Reduction Act** deploy domestic capital incentives paired with **"friendshoring"**—coordinating critical mineral and pharmaceutical supply chains with democratic allies in Japan, South Korea, Europe, and Canada.',
        ],
      },
      {
        heading: 'Circumvention via Third-Country Hubs',
        paragraphs: [
          'Critics warn that surgical sanctions are easily circumvented: Chinese shell companies purchase controlled chips via intermediary entities in Dubai or Singapore, while Chinese auto manufacturers build assembly plants in Mexico to enter the U.S. tariff-free.',
        ],
      },
    ],
    details: [
      'The October 2022 Bureau of Industry and Security (BIS) export controls successfully restricted China’s access to sub-14nm semiconductor fabrication equipment.',
      'The CHIPS Act stimulated over $200 billion in private semiconductor fabrication investments across Arizona, Ohio, and Texas.',
      'Surgical export controls preserve broad consumer trade with trading partners while protecting military technological advantage.',
    ],
    sources: [
      {
        title: 'Implementation of Additional Export Controls: Advanced Computing and Semiconductor Manufacturing',
        url: 'https://www.federalregister.gov/documents/2022/10/13/2022-21658/implementation-of-additional-export-controls',
        publisher: 'Federal Register / Bureau of Industry and Security',
        year: '2022',
        category: 'Court / Official Record',
      },
      {
        title: 'CHIPS for America: One Year of Progress',
        url: 'https://www.nist.gov/chips',
        publisher: 'U.S. Department of Commerce (NIST)',
        year: '2023',
        category: 'Court / Official Record',
      },
    ],
    tags: ['Trade & Industry', 'National Security', 'AI & Technology'],
    era: '2022–Present',
    relatedIds: ['thesis-trade-universal-tariffs'],
  },
  {
    id: 'thesis-trade-universal-tariffs',
    parentId: 'pillar-trade-strategic',
    kind: 'thesis',
    title: 'Across-the-Board Universal Baseline Tariffs as Geoeconomic Leverage',
    summary:
      'Debates whether imposing a universal 10% to 20% baseline tariff on all foreign imports provides the necessary leverage to end currency manipulation and force comprehensive reshoring.',
    sections: [
      {
        heading: 'The Case for Universal Geoeconomic Leverage',
        paragraphs: [
          'Proponents of universal baseline tariffs argue that surgical regulations are too slow and leaky to counter comprehensive mercantilism. Imposing an automatic **10% to 20% tariff on all foreign imports** (and 60%+ on China) establishes an un-evadable incentive for corporations to onshore entire supply chains back to the United States.',
          'Furthermore, a broad baseline tariff serves as an immense revenue engine—raising an estimated **$2 to $3 trillion over a decade**—which can be used to lower domestic corporate and personal income taxes.',
        ],
      },
      {
        heading: 'Global Stagflation and Treaty Rupture',
        paragraphs: [
          'Mainstream economists and foreign policy experts warn that universal tariffs would alienate European, Japanese, and British allies, destroy the post-WWII international legal architecture, and ignite retaliatory stagflation across the democratic world.',
        ],
      },
    ],
    details: [
      'A universal 10% tariff on all $3.1 trillion in U.S. goods imports would generate an estimated $250–$300 billion in gross annual federal revenue.',
      'PIIE modeling estimates a universal 10% tariff would lower U.S. GDP by 0.5% to 1.0% and cost an average middle-class household over $1,700 annually in higher prices.',
      'Universal tariffs violate WTO rules and free trade agreements, prompting joint trade retaliation from Europe, Japan, and Canada.',
    ],
    sources: [
      {
        title: 'Why a Universal 10 Percent Tariff Is a Bad Idea',
        url: 'https://www.piie.com/blogs/realtime-economics/2024/why-universal-10-percent-tariff-bad-idea',
        publisher: 'Peterson Institute for International Economics (Clausing & Lovely)',
        year: '2024',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'The Economic Effects of a Universal Baseline Tariff',
        url: 'https://taxfoundation.org/research/all/federal/universal-baseline-tariff-trump-tax-proposals/',
        publisher: 'Tax Foundation (Erica York)',
        year: '2024',
        category: 'Empirical / Economic Study',
      },
    ],
    tags: ['Trade & Industry', 'Taxation & Fiscal', 'Diplomacy', 'Macroeconomics'],
    era: '2024–Present',
    relatedIds: ['thesis-trade-targeted-friendshoring'],
  },
];

const proConNodes: DebateNode[] = [
  // Under thesis-trade-defense-resilience
  {
    id: 'pro-trade-defense-autarky',
    parentId: 'thesis-trade-defense-resilience',
    kind: 'pro',
    title: 'Domestic Heavy Industry Is Essential to Sustain Wartime Mobilization',
    summary:
      'National defense relies on domestic foundries, machine tooling, and drydocks; losing industrial capacity leaves the nation vulnerable in a protracted conflict.',
    sections: [
      {
        heading: 'Wartime Attrition and Industrial Surging',
        paragraphs: [
          'A military cannot fight longer than its industrial base can supply munitions, spare parts, and replacement hulls. In the Ukraine war, artillery consumption outpaced peacetime Western manufacturing within weeks. If the U.S. Navy loses ships in a Pacific confrontation, it currently takes years to repair a single submarine due to private shipyard closures.',
        ],
      },
      {
        heading: 'Strategic Denial of Core Inputs',
        paragraphs: [
          'Relying on foreign supply chains means an adversary can choke off vital components—from drone batteries to optical sensors—without firing a single shot.',
        ],
      },
    ],
    details: [
      'U.S. Navy submarine repair backlogs regularly keep one-third of the attack submarine fleet sidelined due to drydock shortages.',
      'Ukraine artillery expenditures (up to 7,000 shells daily) exposed severe Western munitions manufacturing bottlenecks.',
      'Strategic tariffs maintain the critical engineering talent and equipment needed to surge wartime production.',
    ],
    sources: [
      {
        title: 'Empty Bins in a Wartime Environment: The Challenge to the U.S. Defense Industrial Base',
        url: 'https://www.csis.org/analysis/empty-bins-wartime-environment-challenge-us-defense-industrial-base',
        publisher: 'CSIS (Seth G. Jones)',
        year: '2023',
        category: 'Scholarship',
      },
      {
        title: 'Naval Shipyard Capacity and Maintenance Backlogs',
        url: 'https://www.gao.gov/products/gao-23-106067',
        publisher: 'Government Accountability Office (GAO)',
        year: '2023',
        category: 'Court / Official Record',
      },
    ],
    tags: ['National Security', 'Trade & Industry'],
    era: '2023–Present',
    relatedIds: ['con-trade-defense-inefficiency'],
  },
  {
    id: 'con-trade-defense-inefficiency',
    parentId: 'thesis-trade-defense-resilience',
    kind: 'con',
    title: 'Protectionism Inflates Military Procurement Costs and Stifles Innovation',
    summary:
      'Sheltering domestic contractors from global competition results in bloated defense budgets, outdated technologies, and lower procurement volumes.',
    sections: [
      {
        heading: 'The High Cost of Shielded Monopolies',
        paragraphs: [
          'When defense contractors are insulated from foreign competition, incentives for efficiency vanish. U.S. naval shipyards build vessels at five times the cost of South Korean or Japanese commercial yards, draining billions from naval shipbuilding budgets and resulting in a steadily shrinking fleet.',
        ],
      },
      {
        heading: 'Allied Defense Integration vs. National Protectionism',
        paragraphs: [
          'True military resilience comes from **interoperable defense production with trusted allies** (e.g. AUKUS with the UK and Australia, joint naval repair with Japan), not expensive national autarky.',
        ],
      },
    ],
    details: [
      'South Korean commercial yards build equivalent commercial container ships at roughly 20% of the cost of U.S. Jones Act yards.',
      'Protectionist procurement mandates reduce the total number of ships and planes the military can buy within finite congressional budgets.',
      'Allied co-production agreements (such as AUKUS) provide superior industrial resilience at far lower cost.',
    ],
    sources: [
      {
        title: 'Rust Buckets: How the Jones Act Undermines U.S. Shipbuilding and National Security',
        url: 'https://www.cato.org/publications/policy-analysis/rust-buckets-how-jones-act-undermines-us-shipbuilding-national-security',
        publisher: 'Cato Institute (Colin Grabow)',
        year: '2022',
        category: 'Scholarship',
      },
      {
        title: 'AUKUS Pillar II: Advanced Capabilities and Defense Industrial Integration',
        url: 'https://www.ussc.edu.au/analysis/aukus-pillar-ii-advanced-capabilities',
        publisher: 'United States Studies Centre',
        year: '2023',
        category: 'Scholarship',
      },
    ],
    tags: ['National Security', 'Trade & Industry', 'Taxation & Fiscal'],
    era: '2022–Present',
    relatedIds: ['pro-trade-defense-autarky'],
  },

  // Under thesis-trade-countering-mercantilism
  {
    id: 'pro-trade-anti-dumping-enforcement',
    parentId: 'thesis-trade-countering-mercantilism',
    kind: 'pro',
    title: 'Tariffs Neutralize Non-Market Dumping and Safeguard Western Green Tech',
    summary:
      'Without tariffs, predatory state subsidies from China will wipe out American and European manufacturing in solar, battery, and electric vehicle sectors.',
    sections: [
      {
        heading: 'Predatory Pricing and Market Monopolization',
        paragraphs: [
          'Beijing’s industrial playbook is well-established: subsidize domestic producers until they achieve over 80% global market share, bankrupted foreign rivals, and then extract monopoly pricing and diplomatic concessions. In the 2000s, this strategy destroyed the U.S. commercial solar manufacturing industry.',
          'Imposing **100% tariffs on Chinese electric vehicles** and 50% on solar cells ensures that private Western firms investing in clean tech have a protected market to scale up production.',
        ],
      },
      {
        heading: 'Defending High-Wage Labor Standards',
        paragraphs: [
          'Western firms paying union wages and adhering to environmental regulations cannot compete with factories using coal-fired power and unfree labor in Xinjiang without tariff border adjustments.',
        ],
      },
    ],
    details: [
      'The Biden Administration enacted 100% tariffs on Chinese EVs and 50% on solar components in 2024 to prevent subsidized market capture.',
      'China produces over 80% of global solar polysilicon and 75% of global lithium-ion battery cells.',
      'Tariffs level the playing field for private Western companies bound by strict environmental and labor standards.',
    ],
    sources: [
      {
        title: 'Fact Sheet: President Biden Takes Action to Protect American Workers from China’s Unfair Practices',
        url: 'https://www.whitehouse.gov/briefing-room/statements-releases/2024/05/14/fact-sheet-president-biden-takes-action-to-protect-american-workers-and-businesses-from-chinas-unfair-trade-practices/',
        publisher: 'The White House',
        year: '2024',
        category: 'Court / Official Record',
      },
      {
        title: 'Chinese Subsidies and the Global Clean Energy Transition',
        url: 'https://www.csis.org/analysis/chinese-subsidies-and-global-clean-energy-transition',
        publisher: 'CSIS',
        year: '2024',
        category: 'Scholarship',
      },
    ],
    tags: ['Trade & Industry', 'Energy & Climate', 'Regulation & Markets'],
    era: '2024–Present',
    relatedIds: ['con-trade-protectionist-capture'],
  },
  {
    id: 'con-trade-protectionist-capture',
    parentId: 'thesis-trade-countering-mercantilism',
    kind: 'con',
    title: 'Green Tariffs Slow the Clean Energy Transition and Inflate Consumer Prices',
    summary:
      'Blocking low-cost foreign clean technology slows decarbonization, protects legacy automaker profits, and raises EV costs for ordinary families.',
    sections: [
      {
        heading: 'The Climate Cost of Protectionism',
        paragraphs: [
          'Halting the climate crisis requires deploying clean energy as rapidly and cheaply as humanly possible. By placing 100% tariffs on affordable $10,000 to $15,000 Chinese electric vehicles and 50% on solar panels, governments are prioritizing legacy corporate profits over planetary survival.',
          'Western consumers are forced to pay $45,000 for domestic electric vehicles, severely slowing consumer EV adoption rates and delaying climate mitigation.',
        ],
      },
      {
        heading: 'Subsidizing Inefficient Incumbents',
        paragraphs: [
          'Sheltering Detroit automakers from competitive EV pressure allows them to delay developing affordable small electric cars, leaving them uncompetitive in Latin America, Southeast Asia, and Africa.',
        ],
      },
    ],
    details: [
      'Chinese BYD electric vehicles retail for under $12,000 in domestic and neutral markets, compared to a $47,000 average EV price in the U.S.',
      'Tariffs on imported solar panels increase the cost of domestic solar installation projects by up to 15% to 25%.',
      'Protectionist barriers insulate legacy automakers from the fierce competition needed to master mass EV battery manufacturing.',
    ],
    sources: [
      {
        title: 'The Climate Trap of Green Protectionism',
        url: 'https://www.foreignaffairs.com/articles/world/2024-06-18/climate-trap-green-protectionism',
        publisher: 'Foreign Affairs (Jason Bordoff & Meghan L. O’Sullivan)',
        year: '2024',
        category: 'Scholarship',
      },
      {
        title: 'Why Cheap Chinese EVs Are Good for the Planet',
        url: 'https://www.economist.com/leaders/2024/01/11/the-rise-of-chinas-car-industry-is-good-for-the-planet',
        publisher: 'The Economist',
        year: '2024',
        category: 'Debate / Broadcast',
      },
    ],
    tags: ['Energy & Climate', 'Trade & Industry', 'Macroeconomics'],
    era: '2024–Present',
    relatedIds: ['pro-trade-anti-dumping-enforcement'],
  },

  // Under thesis-trade-consumer-pass-through
  {
    id: 'pro-trade-fajgelbaum-pass-through',
    parentId: 'thesis-trade-consumer-pass-through',
    kind: 'pro',
    title: 'Empirical Studies Prove Tariffs Inflict Pure Deadweight Loss on Domestic Buyers',
    summary:
      'Quarterly Journal of Economics research proves that domestic buyers paid 100% of Trump-era tariffs, generating zero terms-of-trade price concessions from China.',
    sections: [
      {
        heading: 'The Complete Absence of Terms-of-Trade Gains',
        paragraphs: [
          'In their exhaustive empirical study in the **Quarterly Journal of Economics (2020)**, **Pablo Fajgelbaum, Pinelopi Goldberg, Patrick Kennedy, and Amit Khandelwal** tracked high-frequency border import data. They found that foreign export prices to the U.S. did not fall at all, meaning that foreign exporters did not absorb any portion of the tariff.',
          'The entire fiscal burden landed directly on U.S. importers, wholesalers, and retail consumers, creating a net national welfare loss of **$16.8 billion annually** in deadweight inefficiency and resource misallocation.',
        ],
      },
      {
        heading: 'Destruction of Downstream Manufacturing Employment',
        paragraphs: [
          'Federal Reserve economists **Aaron Flaaen and Justin Pierce (2019)** found that 2018 tariffs were associated with a **net reduction in U.S. manufacturing employment**: higher input costs for steel and aluminum cost more factory jobs than import protection saved.',
        ],
      },
    ],
    details: [
      'Fajgelbaum et al. (2020 QJE) documented complete 100% tariff pass-through to U.S. import prices across all affected product categories.',
      'Federal Reserve Board study (Flaaen & Pierce, 2019) concluded 2018 tariffs caused net job losses in U.S. manufacturing due to input costs and retaliation.',
      'Annual deadweight economic loss to the U.S. economy was estimated at over $16.8 billion.',
    ],
    sources: [
      {
        title: 'The Return to Protectionism',
        url: 'https://academic.oup.com/qje/article/135/1/1/5584501',
        publisher: 'Quarterly Journal of Economics (Fajgelbaum et al.)',
        year: '2020',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'Disentangling the Effects of the 2018–2019 Tariffs on a Globally Connected U.S. Manufacturing Sector',
        url: 'https://www.federalreserve.gov/econres/feds/disentangling-the-effects-of-the-2018-2019-tariffs-on-a-globally-connected-us-manufacturing-sector.htm',
        publisher: 'Federal Reserve Board Finance and Economics Discussion Series (Flaaen & Pierce)',
        year: '2019',
        category: 'Empirical / Economic Study',
      },
    ],
    tags: ['Trade & Industry', 'Empirical Studies', 'Macroeconomics'],
    era: '2020–Present',
    relatedIds: ['con-trade-terms-of-trade-gain'],
  },
  {
    id: 'con-trade-terms-of-trade-gain',
    parentId: 'thesis-trade-consumer-pass-through',
    kind: 'con',
    title: 'Tariffs Extract Foreign Concessions and Trigger Domestic Re-investment',
    summary:
      'Short-term price adjustments underestimate how tariffs compel foreign competitors to relocate plants inside the U.S. and yield geopolitical leverage.',
    sections: [
      {
        heading: 'The Investment Catalyst of Border Taxes',
        paragraphs: [
          'Tariff defenders point out that looking strictly at immediate consumer price indexes misses the primary objective: **shifting capital allocation**. Tariffs on foreign washing machines, semiconductors, and electric vehicles forced foreign companies—including Samsung, TSMC, and Honda—to invest tens of billions constructing physical factories inside the United States, creating permanent high-paying American jobs.',
        ],
      },
      {
        heading: 'Geopolitical Negotiating Clout',
        paragraphs: [
          'Tariffs provided the vital leverage that forced Canada and Mexico to sign the **USMCA** (raising regional automotive wage requirements) and compelled China to sign the **Phase One Economic and Trade Agreement** committing to hundreds of billions in agricultural purchases.',
        ],
      },
    ],
    details: [
      'Foreign direct investment in U.S. manufacturing construction reached historic records following the passage of Section 301 tariffs and industrial acts.',
      'The USMCA agreement mandated that 40–45% of auto content must be produced by workers earning at least $16 per hour.',
      'Tariff leverage forced trading partners to the negotiating table to reform intellectual property and labor rules.',
    ],
    sources: [
      {
        title: 'USMCA: United States-Mexico-Canada Agreement Implementation and Impacts',
        url: 'https://www.usitc.gov/publications/332/pub4889.pdf',
        publisher: 'U.S. International Trade Commission (USITC)',
        year: '2019',
        category: 'Court / Official Record',
      },
      {
        title: 'The Phase One U.S.-China Trade Agreement: Evaluation and Assessment',
        url: 'https://www.piie.com/research/piie-charts/us-china-phase-one-tracker-chinas-purchases-us-goods',
        publisher: 'PIIE (Chad P. Bown)',
        year: '2022',
        category: 'Empirical / Economic Study',
      },
    ],
    tags: ['Trade & Industry', 'Macroeconomics', 'Diplomacy'],
    era: '2019–Present',
    relatedIds: ['pro-trade-fajgelbaum-pass-through'],
  },

  // Under thesis-trade-retaliation-destruction
  {
    id: 'pro-trade-ag-export-devastation',
    parentId: 'thesis-trade-retaliation-destruction',
    kind: 'pro',
    title: 'Retaliatory Tariffs Devastate American Farmers and Industrial Exporters',
    summary:
      'Trading partners retaliate strategically against U.S. agriculture and export manufacturing, permanently forfeiting global market share to foreign competitors.',
    sections: [
      {
        heading: 'The Permanent Loss of Agricultural Markets',
        paragraphs: [
          'When China retaliated against U.S. farm goods in 2018, Chinese state grain buyers did not stop importing soybeans; they simply diverted their multi-billion dollar contracts to **Brazil**. Brazilian farmers cleared millions of acres, upgraded port infrastructure, and permanently replaced the U.S. as the world’s dominant soybean exporter.',
          'Even after tariffs were paused, American farmers never regained their pre-2018 market share, suffering permanent structural loss.',
        ],
      },
      {
        heading: 'Taxpayer-Funded Bailouts Erase Tariff Revenues',
        paragraphs: [
          'To keep Midwest family farms from mass foreclosure, the Trump administration distributed **$28 billion in direct payments** via the Commodity Credit Corporation. Taxpayers funded farm bailouts that exceeded the customs revenue collected from the original tariffs.',
        ],
      },
    ],
    details: [
      'Brazil’s share of Chinese soybean imports surged from under 50% in 2016 to over 70% following the 2018 trade war.',
      'The $28 billion Market Facilitation Program cost taxpayers more than the net customs revenue collected from steel tariffs.',
      'Retaliatory tariffs permanently damaged international commercial goodwill and supplier reliability for U.S. exporters.',
    ],
    sources: [
      {
        title: 'U.S. Agricultural Exports to China Rebound Following Phase One Agreement',
        url: 'https://www.ers.usda.gov/amber-waves/2022/february/u-s-agricultural-exports-to-china-rebound-following-phase-one-agreement/',
        publisher: 'USDA Economic Research Service',
        year: '2022',
        category: 'Court / Official Record',
      },
      {
        title: 'Brazil Solidifies Dominance Over U.S. in Global Soybean Exports',
        url: 'https://www.reuters.com/markets/commodities/brazil-corn-soybean-exports-hit-record-china-snubs-us-2024-01-08/',
        publisher: 'Reuters',
        year: '2024',
        category: 'Debate / Broadcast',
      },
    ],
    tags: ['Trade & Industry', 'Taxation & Fiscal', 'Empirical Studies'],
    era: '2022–Present',
    relatedIds: ['con-trade-diversified-markets'],
  },
  {
    id: 'con-trade-diversified-markets',
    parentId: 'thesis-trade-retaliation-destruction',
    kind: 'con',
    title: 'Trade Disruption Ends Dangerous Over-Reliance on Autocratic Customers',
    summary:
      'Allowing hostile foreign regimes to become monopoly buyers of domestic agriculture and technology creates catastrophic geoeconomic blackmail vulnerability.',
    sections: [
      {
        heading: 'Breaking Coercive Single-Buyer Vulnerabilities',
        paragraphs: [
          'Allowing China to purchase 60% of all American soybean exports gave Beijing an immense geoeconomic weapon: the ability to threaten the livelihood of millions of American farm families to deter U.S. defense of Taiwan or human rights in Hong Kong. Australia experienced identical coercion when China sanctioned Australian barley, wine, and beef.',
          'By weathering temporary retaliation, agricultural producers successfully diversified their exports across Southeast Asia, Europe, and India, eliminating a critical geostrategic vulnerability.',
        ],
      },
    ],
    details: [
      'China routinely uses trade embargoes against trading partners (Australia, Lithuania, South Korea) for diplomatic retaliation.',
      'Diversifying customer bases away from autocratic single-buyers protects democratic foreign policy autonomy.',
      'Temporary trade disruptions serve as necessary stress tests that accelerate resilient global trade routing.',
    ],
    sources: [
      {
        title: 'The Cost of Economic Coercion: China’s Trade Restrictions on Australia',
        url: 'https://www.lowyinstitute.org/publications/cost-economic-coercion-chinas-trade-restrictions-australia',
        publisher: 'Lowy Institute (Roland Rajah)',
        year: '2021',
        category: 'Scholarship',
      },
      {
        title: 'Weaponized Interdependence: How Global Economic Networks Shape State Coercion',
        url: 'https://www.mitpressjournals.org/doi/full/10.1162/isec_a_00351',
        publisher: 'International Security (Henry Farrell & Abraham L. Newman)',
        year: '2019',
        category: 'Scholarship',
      },
    ],
    tags: ['Trade & Industry', 'National Security', 'Diplomacy'],
    era: '2019–Present',
    relatedIds: ['pro-trade-ag-export-devastation'],
  },

  // Under thesis-trade-ricardian-efficiency
  {
    id: 'pro-trade-global-specialization',
    parentId: 'thesis-trade-ricardian-efficiency',
    kind: 'pro',
    title: 'Comparative Advantage Maximizes Global Wealth and Lowers Poverty',
    summary:
      'Free trade allows nations to focus on what they do best, generating trillions in consumer surplus and lifting billions of workers into the global middle class.',
    sections: [
      {
        heading: 'The Logic of Comparative Advantage',
        paragraphs: [
          'If the United States attempted to produce its own coffee, bananas, low-end textiles, and lithium refining domestically, it would divert millions of educated workers away from cutting-edge software, aerospace, cancer therapeutics, and AI chip design into backbreaking agrarian and manual labor.',
          'By trading freely, each country specializes in its area of greatest comparative strength, vastly increasing the total volume of goods and services produced globally.',
        ],
      },
      {
        heading: 'Consumer Surplus and Living Standards',
        paragraphs: [
          'Lower consumer prices act as an across-the-board real wage increase for working families. Restricting trade artificially elevates prices, impoverishing ordinary citizens to benefit a handful of protected industries.',
        ],
      },
    ],
    details: [
      'David Ricardo’s 1817 theorem remains a foundational mathematical proof of economic efficiency.',
      'Trade openness is strongly correlated with rapid poverty reduction across developing economies over the past 50 years.',
      'Allowing domestic workers to focus on high-productivity sectors maximizes national per-capita GDP.',
    ],
    sources: [
      {
        title: 'On the Principles of Political Economy and Taxation',
        url: 'https://oll.libertyfund.org/title/ricardo-the-works-and-correspondence-of-david-ricardo-vol-1-principles-of-political-economy-and-taxation',
        publisher: 'John Murray (David Ricardo)',
        year: '1817',
        category: 'Scholarship',
      },
      {
        title: 'In Defense of Global Capitalism',
        url: 'https://www.cato.org/books/defense-global-capitalism',
        publisher: 'Cato Institute (Johan Norberg)',
        year: '2003',
        category: 'Scholarship',
      },
    ],
    tags: ['Trade & Industry', 'Macroeconomics', 'Philosophy & Ethics'],
    era: '1817–Present',
    relatedIds: ['con-trade-stolper-samuelson-losers'],
  },
  {
    id: 'con-trade-stolper-samuelson-losers',
    parentId: 'thesis-trade-ricardian-efficiency',
    kind: 'con',
    title: 'Stolper-Samuelson Proves Free Trade Crushes Domestic Low-Skilled Labor',
    summary:
      'Textbook international trade theory proves that trading with low-wage nations mathematically depresses wages for domestic non-college workers.',
    sections: [
      {
        heading: 'Factor Price Equalization and Domestic Wage Suppression',
        paragraphs: [
          'Under the **Stolper-Samuelson theorem**—a core tenet of neoclassical trade theory formulated by Wolfgang Stolper and Nobel laureate Paul Samuelson—opening trade between a capital-abundant nation (the U.S.) and an abundant low-wage labor nation (China) **permanently reduces the real wage of domestic unskilled workers**, even while raising aggregate national income.',
          'Free trade essentially forces an American factory worker earning $25/hour to compete against workers in developing countries earning $2/hour, mechanically suppressing the U.S. labor share.',
        ],
      },
      {
        heading: 'The Unfulfilled Promise of Trade Adjustment Assistance',
        paragraphs: [
          'Economists promised that the winners of trade would compensate the losers through **Trade Adjustment Assistance (TAA)** and retraining. In practice, TAA was chronically underfunded and ineffective, leaving millions of industrial workers abandoned in devastated Rust Belt mill towns.',
        ],
      },
    ],
    details: [
      'The Stolper-Samuelson theorem proves that free trade can make domestic labor worse off in absolute real terms.',
      'U.S. non-college male real median earnings have remained stagnant for four decades alongside rapid import growth.',
      'Trade Adjustment Assistance (TAA) programs reached less than 15% of displaced manufacturing workers.',
    ],
    sources: [
      {
        title: 'Protection and Real Wages',
        url: 'https://www.jstor.org/stable/2967638',
        publisher: 'Review of Economic Studies (Stolper & Samuelson)',
        year: '1941',
        category: 'Scholarship',
      },
      {
        title: 'Trade Adjustment Assistance: Program Overview and Outcomes',
        url: 'https://crsreports.congress.gov/product/pdf/R/R44153',
        publisher: 'Congressional Research Service (CRS)',
        year: '2022',
        category: 'Court / Official Record',
      },
    ],
    tags: ['Labor & Welfare', 'Trade & Industry', 'Macroeconomics'],
    era: '1941–Present',
    relatedIds: ['pro-trade-global-specialization'],
  },

  // Under thesis-trade-china-shock-scars
  {
    id: 'pro-trade-autor-dorn-hanson',
    parentId: 'thesis-trade-china-shock-scars',
    kind: 'pro',
    title: 'Autor-Dorn-Hanson Proves the China Shock Decimated Commuting Zones for Decades',
    summary:
      'Rigorous empirical research proves that communities exposed to Chinese import competition suffered long-term declines in employment, wages, and family stability.',
    sections: [
      {
        heading: 'The Devastating Empirical Evidence of the China Shock',
        paragraphs: [
          'In their landmark study across 722 U.S. commuting zones, **David Autor, David Dorn, and Gordon Hanson (2013, 2021)** overturned neoclassical orthodoxy. In commuting zones heavily exposed to Chinese manufacturing imports (such as furniture, textiles, and electronics), manufacturing jobs evaporated rapidly without any compensatory rise in non-manufacturing employment.',
          'Over a 15-year period, these regions experienced enduring drops in labor force participation, persistent wage depression, elevated divorce rates, and an explosion in federal disability and Medicaid rolls.',
        ],
      },
      {
        heading: 'Political Polarization and the Rise of Populism',
        paragraphs: [
          'Subsequent research by **Autor et al. (2020)** demonstrated that areas hardest hit by Chinese import competition experienced the sharpest political polarization, driving voter alienation and reshaping American electoral politics.',
        ],
      },
    ],
    details: [
      'The China Shock caused an estimated loss of 2.0 to 2.4 million U.S. jobs between 1999 and 2011.',
      'Exposed communities saw average annual household earnings fall by $2,139 per adult of working age.',
      'Autor, Dorn, Hanson & Majlesi (2020) demonstrated a direct causal link between trade exposure and political polarization.',
    ],
    sources: [
      {
        title: 'The China Syndrome: Local Labor Market Effects of Import Competition in the United States',
        url: 'https://www.aeaweb.org/articles?id=10.1257/aer.103.6.2121',
        publisher: 'American Economic Review (David Autor, David Dorn & Gordon Hanson)',
        year: '2013',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'Importing Political Polarization? The Electoral Consequences of Rising Trade Exposure',
        url: 'https://www.aeaweb.org/articles?id=10.1257/aer.20170011',
        publisher: 'American Economic Review (Autor, Dorn, Hanson & Majlesi)',
        year: '2020',
        category: 'Empirical / Economic Study',
      },
    ],
    tags: ['Labor & Welfare', 'Trade & Industry', 'Empirical Studies', 'Governance'],
    era: '2013–Present',
    relatedIds: ['con-trade-service-job-offsets'],
  },
  {
    id: 'con-trade-service-job-offsets',
    parentId: 'thesis-trade-china-shock-scars',
    kind: 'con',
    title: 'Nationwide Service and Logistics Job Creation Outweighed Localized Factory Losses',
    summary:
      'Focusing exclusively on manufacturing jobs misses the massive, higher-paying employment growth in logistics, tech, healthcare, and professional services created by trade.',
    sections: [
      {
        heading: 'The Broad Economy-Wide Employment Picture',
        paragraphs: [
          'While specific Rust Belt factory towns suffered localized disruption, the broader U.S. economy experienced massive job growth in high-value services, transportation, e-commerce, and software. Between 1990 and 2020, total U.S. non-farm employment grew by over **40 million net new jobs**.',
          'Importing cheaper inputs enabled U.S. design, marketing, and technology companies—like Apple, Nike, and Qualcomm—to dominate global high-margin consumer industries, employing millions of high-wage professionals.',
        ],
      },
      {
        heading: 'Automation Far Exceeded Trade as a Driver of Factory Job Loss',
        paragraphs: [
          'Economists at Ball State University and MIT found that **over 80% of U.S. manufacturing job losses since 2000 were driven by technological automation** (robotics, CNC machining, software) rather than foreign trade: U.S. manufacturing output reached all-time record highs even as factory headcount dropped.',
        ],
      },
    ],
    details: [
      'The U.S. economy added more than 40 million net new jobs between 1990 and 2020 as services and tech expanded.',
      'Studies by Hicks & Devaraj (Ball State) attribute over 85% of manufacturing job declines to robotic automation and productivity gains rather than imports.',
      'U.S. manufacturing real gross output reached historic peak levels in 2022 despite employing fewer manual assembly workers.',
    ],
    sources: [
      {
        title: 'The Myth and the Reality of Manufacturing in America',
        url: 'https://www.bsu.edu/academics/centersandinstitutes/cber/research/myth-reality-manufacturing-america',
        publisher: 'Center for Business and Economic Research (Michael Hicks & Srikant Devaraj)',
        year: '2015',
        category: 'Scholarship',
      },
      {
        title: 'Trade and American Jobs: The Impact of Trade on U.S. and State-Level Employment',
        url: 'https://tradepartnership.com/reports/trade-and-american-jobs-2023/',
        publisher: 'The Trade Partnership',
        year: '2023',
        category: 'Empirical / Economic Study',
      },
    ],
    tags: ['Labor & Welfare', 'Macroeconomics', 'Empirical Studies'],
    era: '2015–Present',
    relatedIds: ['pro-trade-autor-dorn-hanson'],
  },

  // Under thesis-trade-targeted-friendshoring
  {
    id: 'pro-trade-small-yard-high-fence',
    parentId: 'thesis-trade-targeted-friendshoring',
    kind: 'pro',
    title: 'Surgical Export Controls Safeguard Tech Superiority Without Rupturing Trade',
    summary:
      'Precision export bans on extreme ultraviolet lithography and AI chips deny military capabilities to rivals while allowing beneficial consumer trade to continue.',
    sections: [
      {
        heading: 'Targeting True Strategic Bottlenecks',
        paragraphs: [
          'A universal trade embargo is self-defeating, but surgical controls on **foundational technologies** are extraordinarily effective. The October 2022 and October 2023 BIS export controls targeted the precise chokepoints of modern military supremacy: 3nm/5nm logic chips, high-bandwidth memory (HBM), and extreme ultraviolet (EUV) photolithography scanners.',
          'By coordinating with the Netherlands (ASML) and Japan (Tokyo Electron), the U.S. effectively locked Chinese state military programs out of the leading-edge AI compute ecosystem, without disrupting global trade in sneakers, furniture, or consumer smartphones.',
        ],
      },
    ],
    details: [
      'ASML twin-scan EUV lithography tools require over 100,000 components and are produced exclusively by allied nations.',
      'BIS export controls restrict Chinese access to AI training chips like Nvidia H100s and B200s used for autonomous weapons development.',
      'Preserves commercial exports in non-strategic consumer sectors, preventing an unnecessary global stagflation shock.',
    ],
    sources: [
      {
        title: 'Chokepoints: American Power in the Age of Geoeconomic Competition',
        url: 'https://www.foreignaffairs.com/articles/united-states/2023-08-22/chokepoints-american-power',
        publisher: 'Foreign Affairs (Henry Farrell & Abraham Newman)',
        year: '2023',
        category: 'Scholarship',
      },
      {
        title: 'Commerce Strengthens Restrictions on Advanced Computing Items and Semiconductor Manufacturing Equipment',
        url: 'https://www.bis.doc.gov/index.php/documents/about-bis/newsroom/press-releases/3355-2023-10-17-bis-press-release-advanced-computing-and-semiconductor-manufacturing-equipment-rules',
        publisher: 'Bureau of Industry and Security (BIS)',
        year: '2023',
        category: 'Court / Official Record',
      },
    ],
    tags: ['National Security', 'AI & Technology', 'Trade & Industry'],
    era: '2022–Present',
    relatedIds: ['con-trade-evasion-transshipment'],
  },
  {
    id: 'con-trade-evasion-transshipment',
    parentId: 'thesis-trade-targeted-friendshoring',
    kind: 'con',
    title: 'Targeted Controls Are Undermined by Transshipment and Illicit Smuggling',
    summary:
      'Surgical regulations leak continuously: Chinese state actors evade chip export bans via shell firms in the UAE and route manufactured goods through Mexico.',
    sections: [
      {
        heading: 'The Porous Nature of Surgical Sanctions',
        paragraphs: [
          'Bureaucrats cannot outmaneuver global arbitrage. Investigations by the *Wall Street Journal* and the U.S.-China Commission revealed that thousands of restricted Nvidia AI chips were smuggled into Chinese research institutes via shell companies in Dubai, Singapore, and Hong Kong.',
          'Simultaneously, Chinese industrial manufacturers routed hundreds of millions in steel and solar panels through Vietnam, Malaysia, and Mexico—slapping a "Hecho en México" sticker on Chinese components to enter the U.S. market duty-free under USMCA rules.',
        ],
      },
      {
        heading: 'Indigenous Chinese Innovation Acceleration',
        paragraphs: [
          'Sanctions create an unintended incentive: cut off from foreign technology, Beijing directed over $50 billion into its own national champion, **Huawei**, which successfully manufactured its own 7nm Kirin smartphone processor and Ascend AI chips.',
        ],
      },
    ],
    details: [
      'Investigations revealed Chinese cloud providers successfully accessed restricted Nvidia A100/H100 chips via third-country servers.',
      'Chinese direct investment into Mexican manufacturing hubs surged over 300% to circumvent U.S. tariffs under USMCA rules.',
      'Huawei produced the 7nm Kirin 9000s processor despite strict U.S. equipment export bans.',
    ],
    sources: [
      {
        title: 'How Restricted Nvidia Chips Are Smuggled Into China',
        url: 'https://www.wsj.com/world/china/smuggled-nvidia-chips-china-ai-89196b01',
        publisher: 'The Wall Street Journal',
        year: '2024',
        category: 'Debate / Broadcast',
      },
      {
        title: 'China’s EV Investment in Mexico: Circumventing USMCA Rules',
        url: 'https://www.uscc.gov/research/chinas-automotive-push-mexico',
        publisher: 'U.S.-China Economic and Security Review Commission',
        year: '2024',
        category: 'Court / Official Record',
      },
    ],
    tags: ['National Security', 'AI & Technology', 'Trade & Industry'],
    era: '2024–Present',
    relatedIds: ['pro-trade-small-yard-high-fence'],
  },

  // Under thesis-trade-universal-tariffs
  {
    id: 'pro-trade-broad-tariff-leverage',
    parentId: 'thesis-trade-universal-tariffs',
    kind: 'pro',
    title: 'Universal Baseline Tariffs Provide Unescapable Incentives for Total Reshoring',
    summary:
      'A blunt 10% to 20% tariff closes transshipment loopholes, raises massive federal revenues, and provides the only effective incentive to onshore critical supply chains.',
    sections: [
      {
        heading: 'Closing the Transshipment Loopholes for Good',
        paragraphs: [
          'Surgical tariffs fail because supply chains simply move to the next lowest-cost developing country. Imposing an **unconditional 10% to 20% baseline tariff on all imported manufactured goods** levels the playing field completely. Foreign factories lose their wage advantage, making it economically rational for businesses to build modern, automated factories directly inside the United States.',
        ],
      },
      {
        heading: 'Massive Tax Revenue to Fund Domestic Tax Cuts',
        paragraphs: [
          'A universal tariff raises an estimated **$300 billion annually**, functioning as an external revenue engine that allows Congress to lower domestic corporate taxes, extend R&D expensing, and repeal job-killing regulations.',
        ],
      },
    ],
    details: [
      'Eliminates third-country transshipment arbitrage by taxing all imports uniformly regardless of country of origin.',
      'Tax Foundation estimates a 10% universal tariff generates roughly $2.5 trillion in gross federal revenue over ten years.',
      'Creates a powerful macroeconomic price shield that encourages capital expenditures in domestic automation and robotics.',
    ],
    sources: [
      {
        title: 'The Economic Effects of a Universal Baseline Tariff',
        url: 'https://taxfoundation.org/research/all/federal/universal-baseline-tariff-trump-tax-proposals/',
        publisher: 'Tax Foundation (Erica York)',
        year: '2024',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'The Case for a Universal Baseline Tariff',
        url: 'https://americancompass.org/the-case-for-a-universal-baseline-tariff/',
        publisher: 'American Compass (Oren Cass)',
        year: '2023',
        category: 'Scholarship',
      },
    ],
    tags: ['Trade & Industry', 'Taxation & Fiscal', 'Macroeconomics'],
    era: '2023–Present',
    relatedIds: ['con-trade-stagflation-alienation'],
  },
  {
    id: 'con-trade-stagflation-alienation',
    parentId: 'thesis-trade-universal-tariffs',
    kind: 'con',
    title: 'Universal Tariffs Would Ignite Global Stagflation and Fracture Western Alliances',
    summary:
      'Slapping 10% to 20% tariffs on allies like Germany, Japan, and the UK will cause a global trade war, trigger domestic inflation, and shatter democratic coalitions.',
    sections: [
      {
        heading: 'Alienating Critical Treaty Partners',
        paragraphs: [
          'Treating democratic allies like Japan, South Korea, Germany, and the UK as economic adversaries fractures the Western alliance at the precise moment unity is required to deter Chinese and Russian aggression. European and Asian allies would immediately retaliate with counter-tariffs on U.S. aerospace, technology, and liquefied natural gas (LNG).',
        ],
      },
      {
        heading: 'Igniting Domestic Stagflation',
        paragraphs: [
          'Economists across the political spectrum—including former Treasury Secretary **Lawrence Summers** and PIIE researchers—warn that a 10% to 20% universal tariff acts as a negative supply shock: it spikes inflation, reduces real consumer spending, and compels the Federal Reserve to raise interest rates, pushing the economy into recession.',
        ],
      },
    ],
    details: [
      'PIIE modeling projects a 10% universal tariff followed by retaliatory tariffs would reduce U.S. GDP by over 1.2% and eliminate hundreds of thousands of export jobs.',
      'Imposing tariffs on European auto and aerospace parts ruptures the NATO economic bedrock.',
      'Lawrence Summers described a universal tariff proposal as "the greatest economic policy prescription for inflation in modern history."',
    ],
    sources: [
      {
        title: 'Why a Universal 10 Percent Tariff Is a Bad Idea',
        url: 'https://www.piie.com/blogs/realtime-economics/2024/why-universal-10-percent-tariff-bad-idea',
        publisher: 'Peterson Institute for International Economics (Clausing & Lovely)',
        year: '2024',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'Lawrence Summers on Tariffs, Inflation, and the Global Economy',
        url: 'https://www.bloomberg.com/news/videos/2024-06-14/summers-says-trump-tariffs-would-be-an-inflationary-shock-video',
        publisher: 'Bloomberg Wall Street Week',
        year: '2024',
        category: 'Debate / Broadcast',
      },
    ],
    tags: ['Trade & Industry', 'Macroeconomics', 'Diplomacy', 'Taxation & Fiscal'],
    era: '2024–Present',
    relatedIds: ['pro-trade-broad-tariff-leverage'],
  },
];

export const globalizationTariffsDataset: DebateGraphDataset = {
  id: 'globalization-tariffs',
  version: '1.0.0',
  shortTitle: 'Trade vs. Tariffs',
  title: 'Globalization vs. Protectionist Tariffs',
  subtitle: 'Comparative advantage & global supply chains vs. strategic tariffs & domestic manufacturing',
  searchPlaceholder: 'Search Ricardo, tariffs, China Shock, Fajgelbaum, friendshoring... (/)',
  epistemologyNote:
    'This graph balances theoretical trade models (David Ricardo, Stolper-Samuelson, Krugman) against rigorous empirical econometric evaluations of modern tariffs (Fajgelbaum, Amiti-Redding-Weinstein, Autor-Dorn-Hanson) and national security geoeconomics.',
  availableTags: [
    'Trade & Industry',
    'Macroeconomics',
    'National Security',
    'Labor & Welfare',
    'Taxation & Fiscal',
    'Empirical Studies',
    'History',
    'Diplomacy',
    'Regulation & Markets',
    'Energy & Climate',
    'AI & Technology',
    'Governance',
    'Philosophy & Ethics',
  ],
  shortPillarLabels: {
    'pillar-trade-manufacturing': '1. Rebuilding Manufacturing',
    'pillar-trade-consumer': '2. Consumer Costs & Retaliation',
    'pillar-trade-comparative': '3. Comparative Advantage & Scars',
    'pillar-trade-strategic': '4. Friendshoring vs. Universal Tariffs',
  },
  lastUpdated: '2026-11',
  nodes: [rootNode, ...pillarNodes, ...thesisNodes, ...proConNodes],
};
