import { DebateGraphDataset, DebateNode } from '../../types/debate';

const rootNode: DebateNode = {
  id: 'root-capitalism-socialism',
  parentId: null,
  kind: 'root',
  title: 'Capitalism vs. Democratic Socialism',
  summary:
    'The foundational economic debate of modern civilization: whether decentralized price signals, private property, and capital accumulation maximize human flourishing and innovation, or whether democratic ownership, worker empowerment, and public decommodification are necessary to overcome structural inequality, exploitation, and oligopoly.',
  sections: [
    {
      heading: 'The Core Cleavage: Spontaneous Order vs. Collective Emancipation',
      paragraphs: [
        'At the core of the debate between **capitalism** and **socialism** lies a fundamental disagreement over how human societies should coordinate production and distribute resources. Free-market defenders—from **Adam Smith** and **Friedrich Hayek** to **Milton Friedman** and **Deirdre McCloskey**—argue that decentralized markets coordinate knowledge through competitive price signals far more efficiently than any central authority could, unleashing **creative destruction**, technological innovation, and an unprecedented decline in absolute global poverty.',
        'Conversely, democratic socialists—from **Karl Marx** and **Karl Polanyi** to **Bhaskar Sunkara**, **Richard Wolff**, and **Thomas Piketty**—counter that unconstrained capitalism inevitably concentrates wealth, decouples corporate profits from median wages, commodifies basic human survival needs, and allows private capital to capture democratic political institutions.',
      ],
    },
    {
      heading: 'From the Socialist Calculation Debate to Modern Social Democracy',
      paragraphs: [
        'The historical contest evolved through the **Interwar Socialist Calculation Debate**, in which **Ludwig von Mises** asserted that without private markets in capital goods, rational economic allocation is mathematically impossible, while market socialists like **Oskar Lange** proposed simulated price clearing. Today, the debate rarely pits pure laissez-faire against Soviet-style command planning; instead, it centers on **democratic socialism vs. market capitalism**, the viability of worker-owned cooperatives, the replicability of the **Nordic social-democratic model**, and the decommodification of healthcare, housing, and education.',
      ],
    },
  ],
  details: [
    '**Hayekian Knowledge vs. Capital Concentration:** Balances decentralized price discovery and market incentives against Piketty’s r > g wealth accumulation and political capture.',
    '**Poverty & Innovation vs. Workplace Autonomy:** Weighs global poverty reduction and entrepreneurial risk against alienation, surplus value extraction, and workplace authoritarianism.',
    '**Democratic Alternatives:** Evaluates real-world models including Mondragon worker cooperatives, German codetermination, and the Nordic flexicurity welfare state.',
  ],
  sources: [
    {
      title: 'Munk Debate on Capitalism vs. Socialism',
      url: 'https://munkdebates.com/debates/capitalism/',
      publisher: 'Munk Debates (Arthur Brooks vs. Malcolm Gladwell, Bhaskar Sunkara)',
      year: '2019',
      category: 'Debate / Broadcast',
    },
    {
      title: 'The Soho Forum: Richard Wolff vs. Gene Epstein on Socialism vs. Capitalism',
      url: 'https://www.thesohoforum.org/richard-wolff-vs-gene-epstein',
      publisher: 'The Soho Forum',
      year: '2019',
      category: 'Debate / Broadcast',
    },
    {
      title: 'The Use of Knowledge in Society',
      url: 'https://www.aeaweb.org/aer/top20/35.4.519-530.pdf',
      publisher: 'American Economic Review (Friedrich Hayek)',
      year: '1945',
      category: 'Scholarship',
    },
    {
      title: 'Capital in the Twenty-First Century',
      url: 'https://www.hup.harvard.edu/books/9780674975699',
      publisher: 'Harvard University Press (Thomas Piketty)',
      year: '2014',
      category: 'Scholarship',
    },
  ],
  tags: ['Macroeconomics', 'Philosophy & Ethics', 'Labor & Welfare', 'History'],
  era: '1776–Present',
  relatedIds: ['pillar-cap-markets', 'pillar-cap-inequality', 'pillar-cap-socialism', 'pillar-cap-nordic'],
};

const pillarNodes: DebateNode[] = [
  {
    id: 'pillar-cap-markets',
    parentId: 'root-capitalism-socialism',
    kind: 'pillar',
    title: 'Market Coordination, Innovation & Poverty Reduction',
    summary:
      'Argues that private property, entrepreneurial risk-taking, and decentralized price discovery solve the knowledge problem, spurring exponential technological innovation and lifting billions out of extreme poverty.',
    sections: [
      {
        heading: 'Hayek’s Knowledge Problem & Decentralized Price Discovery',
        paragraphs: [
          'In his seminal **1945 essay "The Use of Knowledge in Society"**, **Friedrich Hayek** demonstrated that economic data is not given to any single mind in its entirety, but rather dispersed among millions of individuals as fleeting, localized knowledge of circumstances, skills, and preferences. The **price mechanism** acts as a decentralized telecommunications system, communicating relative scarcities and surpluses instantaneously across the globe without requiring a central planning bureau.',
          'Attempts to replace price discovery with bureaucratic dictates inevitably generate chronic misallocations, queues, shortages, and economic stagnation, as documented across twentieth-century planned economies.',
        ],
      },
      {
        heading: 'Bourgeois Dignity & The Great Fact of Modern Enrichment',
        paragraphs: [
          'Economic historian **Deirdre McCloskey** documents in her *Bourgeois Era* trilogy that after **1800**, market-tested betterment unleashed a **3,000 percent increase** in per-capita human goods and services—the "Great Fact." Between **1990 and 2019**, global extreme poverty fell from **38 percent to under 9 percent**, driven almost entirely by the market integration of China, India, and Southeast Asia.',
        ],
      },
    ],
    details: [
      'Hayekian price signals communicate dispersed local knowledge and consumer preferences across global supply chains without central supervision.',
      'World Bank data shows global absolute poverty collapsed from nearly 60% in 1970 to under 9% prior to COVID-19 as developing nations opened market institutions.',
      'Joseph Schumpeter’s creative destruction demonstrates that competitive profit incentives continuously obsolete inferior technologies and monopolies.',
    ],
    sources: [
      {
        title: 'Bourgeois Dignity: Why Economics Can’t Explain the Modern World',
        url: 'https://press.uchicago.edu/ucp/books/book/chicago/B/bo10139744.html',
        publisher: 'University of Chicago Press (Deirdre McCloskey)',
        year: '2010',
        category: 'Scholarship',
      },
      {
        title: 'World Development Indicators: Poverty and Shared Prosperity',
        url: 'https://www.worldbank.org/en/topic/poverty',
        publisher: 'World Bank',
        year: '2022',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'Capitalism, Socialism and Democracy',
        url: 'https://www.routledge.com/Capitalism-Socialism-and-Democracy/Schumpeter/p/book/9780415107624',
        publisher: 'Routledge (Joseph Schumpeter)',
        year: '1942',
        category: 'Scholarship',
      },
    ],
    tags: ['Macroeconomics', 'History', 'Empirical Studies', 'Trade & Industry'],
    era: '1776–Present',
    relatedIds: ['pillar-cap-inequality', 'pillar-cap-nordic'],
  },
  {
    id: 'pillar-cap-inequality',
    parentId: 'root-capitalism-socialism',
    kind: 'pillar',
    title: 'Capital Accumulation, Worker Exploitation & Oligarchy',
    summary:
      'Critiques capitalism on structural grounds: that the rate of return on capital chronically outpaces economic growth, leading to extreme wealth concentration, declining labor shares, and corporate subversion of democratic governance.',
    sections: [
      {
        heading: 'Piketty’s r > g & Structural Wealth Divergence',
        paragraphs: [
          'In *Capital in the Twenty-First Century*, French economist **Thomas Piketty** assembled three centuries of wealth tax registries showing that whenever the net rate of return on capital (**r**) exceeds the economic growth rate (**g**), inherited wealth grows faster than output and earned income. Without progressive taxation or political shocks, capitalism mechanically concentrates fortunes in dynastic family dynasties.',
          'This dynamic has driven the top 1% wealth share in the United States from **23% in 1978** to over **32% in 2024**, while bottom-50% wealth remains below **3%**.',
        ],
      },
      {
        heading: 'Labor Exploitation, Monopsony & Political Oligopoly',
        paragraphs: [
          'Marxian and institutional economists emphasize that under private enterprise, wage workers possess limited bargaining power compared to concentrated employers. Surplus value is extracted from labor to fund shareholder dividends and executive buybacks, while the **Gilens & Page (2014)** Princeton study confirmed that affluent elites and business lobbies wield decisive influence over U.S. policy, effectively converting democratic institutions into an oligarchy.',
        ],
      },
    ],
    details: [
      'Piketty, Saez & Zucman empirical tax data demonstrates that r > g leads to compounding capital concentration in the absence of confiscatory top tax rates.',
      'Federal Reserve Distributional Financial Accounts show the top 10% owns over 67% of total U.S. wealth, while the bottom 50% owns under 3%.',
      'Gilens & Page (2014) empirical analysis of 1,779 policy issues proved ordinary citizens have a near-zero statistically non-significant impact on federal legislation.',
    ],
    sources: [
      {
        title: 'Distributional National Accounts: Methods and Estimates for the United States',
        url: 'https://academic.oup.com/qje/article/133/2/553/4430651',
        publisher: 'Quarterly Journal of Economics (Piketty, Saez & Zucman)',
        year: '2018',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'Testing Theories of American Politics: Elites, Interest Groups, and Average Citizens',
        url: 'https://www.cambridge.org/core/journals/perspectives-on-politics/article/testing-theories-of-american-politics-elites-interest-groups-and-average-citizens/62327F513959D0A304D4893B382B992B',
        publisher: 'Perspectives on Politics (Martin Gilens & Benjamin Page)',
        year: '2014',
        category: 'Scholarship',
      },
      {
        title: 'The Socialist Manifesto: The Case for Radical Politics in an Era of Extreme Inequality',
        url: 'https://www.versobooks.com/en-gb/products/776-the-socialist-manifesto',
        publisher: 'Verso Books (Bhaskar Sunkara)',
        year: '2019',
        category: 'Scholarship',
      },
    ],
    tags: ['Taxation & Fiscal', 'Labor & Welfare', 'Governance', 'Philosophy & Ethics'],
    era: '1867–Present',
    relatedIds: ['pillar-cap-markets', 'pillar-cap-socialism'],
  },
  {
    id: 'pillar-cap-socialism',
    parentId: 'root-capitalism-socialism',
    kind: 'pillar',
    title: 'Democratic Socialism & Public Ownership',
    summary:
      'Advocates for democratic ownership of the means of production, workplace codetermination, worker cooperatives, sovereign wealth funds, and the decommodification of essential social goods like healthcare and housing.',
    sections: [
      {
        heading: 'Economic Democracy & Worker Self-Management',
        paragraphs: [
          'Democratic socialists argue that political democracy is hypocritical without **workplace democracy**. In modern corporations, workers spend forty hours a week under top-down command hierarchies with zero vote on executive pay, plant closures, or technology adoption. Promoters of **worker cooperatives** point to Spain’s **Mondragon Corporation**—employing over 80,000 worker-owners across 95 federated cooperatives—as proof that enterprise can run efficiently without absentee shareholders.',
          'Codetermination models in Germany legally reserve 50% of supervisory board seats for employee representatives, fostering long-term investment and compression of CEO-to-worker pay ratios.',
        ],
      },
      {
        heading: 'Decommodification of Survival: Health, Housing & Education',
        paragraphs: [
          'Sociologist **Gøsta Esping-Andersen** defined socialism through **decommodification**—the degree to which a citizen can freely survive without relying on wage labor in market auctions. By treating healthcare, higher education, child care, and social housing as universal public rights funded through progressive taxation, societies eliminate precarity and insulate human dignity from profit extraction.',
        ],
      },
    ],
    details: [
      'Mondragon Corporation in the Basque Country demonstrates resilient cooperative federation with 1:6 maximum executive-to-worker pay ratios.',
      'German Mitbestimmung (Codetermination Act of 1976) mandates 50% employee board representation in large industrial enterprises.',
      'Vienna’s social housing model houses over 60% of city residents in municipally subsidized, rent-stabilized high-quality units, decoupling shelter from speculative real estate.',
    ],
    sources: [
      {
        title: 'The Three Worlds of Welfare Capitalism',
        url: 'https://press.princeton.edu/books/paperback/9780691028576/the-three-worlds-of-welfare-capitalism',
        publisher: 'Princeton University Press (Gøsta Esping-Andersen)',
        year: '1990',
        category: 'Scholarship',
      },
      {
        title: 'Democracy at Work: A Cure for Capitalism',
        url: 'https://www.haymarketbooks.org/books/474-democracy-at-work',
        publisher: 'Haymarket Books (Richard Wolff)',
        year: '2012',
        category: 'Scholarship',
      },
      {
        title: 'Vienna’s Unique Social Housing Program',
        url: 'https://www.huduser.gov/portal/pdredge/pdr_edge_featbl_regrt_011314.html',
        publisher: 'U.S. Department of Housing and Urban Development (HUD)',
        year: '2014',
        category: 'Court / Official Record',
      },
    ],
    tags: ['Labor & Welfare', 'Housing & Healthcare', 'Philosophy & Ethics', 'Governance'],
    era: '1919–Present',
    relatedIds: ['pillar-cap-inequality', 'pillar-cap-nordic'],
  },
  {
    id: 'pillar-cap-nordic',
    parentId: 'root-capitalism-socialism',
    kind: 'pillar',
    title: 'Nordic Model vs. Command Planning',
    summary:
      'Weighs the social-democratic compromise—competitive market economies paired with strong welfare states and high taxes—against the lessons of central economic planning and the socialist calculation debate.',
    sections: [
      {
        heading: 'The Nordic Paradox: Free Markets Financing Generous Safety Nets',
        paragraphs: [
          'Free-market economists emphasize that Denmark, Sweden, and Norway are not socialist economies; they are **hyper-capitalist welfare states**. The Heritage Index of Economic Freedom and World Bank ease-of-doing-business indices frequently rank Nordic nations above the United States in property rights enforcement, business deregulation, free trade, and absence of statutory minimum wages (which are negotiated sectorally by unions).',
          'Nordic countries finance their generous universal benefits not through high corporate tax rates (Sweden’s corporate rate is **20.6%**, lower than the U.S. federal rate), but through regressive, broad-based **25% Value Added Taxes (VAT)** and flat personal income taxes paid by the middle class.',
        ],
      },
      {
        heading: 'The Mises-Hayek Calculation Critique of Command Systems',
        paragraphs: [
          'In contrast to social democracy, historic experiments in nationalized command planning repeatedly confirmed **Ludwig von Mises’ 1920 thesis**: without market prices for capital goods, economic planners cannot calculate opportunity costs or capital depreciation. The collapse of the Soviet Gosplan and chronic Venezuelan shortages illustrate the systemic failure of state production monopolies.',
        ],
      },
    ],
    details: [
      'Sweden and Denmark maintain top-10 global rankings in business regulatory efficiency, trade openness, and private property rights.',
      'Nordic welfare expenditures are funded by broad-based national 25% VAT and middle-class income taxes rather than extreme corporate tax burdens.',
      'Mises’ economic calculation problem proved that state-run monopolies lack a mechanism to value capital assets, leading inevitably to structural misallocation.',
    ],
    sources: [
      {
        title: 'Economic Calculation in the Socialist Commonwealth',
        url: 'https://mises.org/library/economic-calculation-socialist-commonwealth',
        publisher: 'Ludwig von Mises Institute (Ludwig von Mises)',
        year: '1920',
        category: 'Scholarship',
      },
      {
        title: 'The Nordic Model of Economic Development and Welfare',
        url: 'https://www.oecd.org/en/publications/the-nordic-model_9789264177420-en.html',
        publisher: 'OECD Publishing (Torben M. Andersen et al.)',
        year: '2007',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'Scandinavian Unexceptionalism: Culture, Markets and the Failure of Third-Way Socialism',
        url: 'https://iea.org.uk/publications/research/scandinavian-unexceptionalism',
        publisher: 'Institute of Economic Affairs (Nima Sanandaji)',
        year: '2015',
        category: 'Scholarship',
      },
    ],
    tags: ['Macroeconomics', 'Taxation & Fiscal', 'Trade & Industry', 'Governance'],
    era: '1920–Present',
    relatedIds: ['pillar-cap-markets', 'pillar-cap-socialism'],
  },
];

const thesisNodes: DebateNode[] = [
  // Pillar 1 Theses
  {
    id: 'thesis-cap-price-signals',
    parentId: 'pillar-cap-markets',
    kind: 'thesis',
    title: 'Decentralized Price Discovery vs. Central Planning & Price Controls',
    summary:
      'Posits that dynamic market price signals are irreplaceable telecommunication systems that balance consumer demand with production scarcity, whereas price controls generate shortages and rationing.',
    sections: [
      {
        heading: 'The Informational Efficiency of Price Signals',
        paragraphs: [
          'Prices aggregate countless dispersed facts: a frost in Brazil, a strike in Chile, a new battery chemistry in Japan. As **Friedrich Hayek** showed, when tin becomes scarcer, users throughout the global economy economize on tin without needing to know why the supply contracted. Profits guide resources toward their most urgent uses, while losses terminate wasteful ventures automatically.',
          'When governments impose price ceilings (such as rent controls or fuel caps), they destroy these signals, creating deadweight losses, black markets, and bureaucratic rationing queues.',
        ],
      },
      {
        heading: 'Market Failures, Externalities & Carbon Blindspots',
        paragraphs: [
          'Critics argue that market prices are structurally blind to **negative externalities**, most notably greenhouse gas emissions and environmental degradation. Without public intervention, prices reflect only private marginal costs, creating systematic overproduction of pollution and underproduction of public goods.',
        ],
      },
    ],
    details: [
      'Hayek’s price telecommunications model illustrates how localized knowledge is coordinated without central directives.',
      'Empirical studies of price ceilings across post-WWII rent controls and 1970s gasoline price caps demonstrate chronic shortages and quality degradation.',
      'Unpriced carbon emissions illustrate market failures where market pricing externalizes ecological damage onto future generations.',
    ],
    sources: [
      {
        title: 'The Use of Knowledge in Society',
        url: 'https://www.aeaweb.org/aer/top20/35.4.519-530.pdf',
        publisher: 'American Economic Review (Friedrich Hayek)',
        year: '1945',
        category: 'Scholarship',
      },
      {
        title: 'The Economics of Welfare',
        url: 'https://oll.libertyfund.org/title/pigou-the-economics-of-welfare',
        publisher: 'Macmillan (Arthur Cecil Pigou)',
        year: '1920',
        category: 'Scholarship',
      },
    ],
    tags: ['Macroeconomics', 'Regulation & Markets', 'Empirical Studies'],
    era: '1945–Present',
    relatedIds: ['thesis-cap-calculation-planning'],
  },
  {
    id: 'thesis-cap-innovation-poverty',
    parentId: 'pillar-cap-markets',
    kind: 'thesis',
    title: 'Creative Destruction & Global Extreme Poverty Eradication',
    summary:
      'Argues that capitalist property rights and profit incentives drive Schumpeterian innovation, resulting in the most rapid reduction of absolute poverty in human history.',
    sections: [
      {
        heading: 'The Engine of Schumpeterian Growth',
        paragraphs: [
          'In *Capitalism, Socialism and Democracy*, **Joseph Schumpeter** formulated **creative destruction** as the fundamental impulse that sets and keeps the capitalist engine in motion: new consumer goods, new methods of production, and new organizational forms incessantly revolutionizing the economic structure from within.',
          'Between **1820 and 2020**, global life expectancy rose from 30 to over 72 years, literacy surged from 12% to over 86%, and infant mortality plummeted. Market liberalization in post-Mao China alone lifted over **800 million citizens** out of absolute poverty.',
        ],
      },
      {
        heading: 'Imperial Extraction, Inequality & Unequal Ecological Exchange',
        paragraphs: [
          'Post-colonial and dependency theorists contend that Western capitalist prosperity was built on imperial exploitation, resource plundering of the Global South, and slave labor. Contemporary critics highlight that poverty lines set at **$2.15/day** artificially minimize ongoing destitution and obscure planetary ecological overshoot.',
        ],
      },
    ],
    details: [
      'World Bank records show over 800 million Chinese citizens exited extreme poverty after Deng Xiaoping’s market reforms in 1978.',
      'Global infant mortality dropped from over 43% in 1800 to under 3.7% in 2022 alongside market-driven medical supply chains.',
      'Critics note that standard global poverty thresholds ($2.15/day) understate urban living costs and mask persistent material deprivations in developing nations.',
    ],
    sources: [
      {
        title: 'Poverty and Shared Prosperity 2022: Correcting Course',
        url: 'https://www.worldbank.org/en/publication/poverty-and-shared-prosperity',
        publisher: 'World Bank',
        year: '2022',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'The Divide: A Brief Guide to Global Inequality and its Solutions',
        url: 'https://www.penguin.co.uk/books/293815/the-divide-by-jason-hickel/9781785151125',
        publisher: 'Heinemann / Penguin (Jason Hickel)',
        year: '2017',
        category: 'Scholarship',
      },
    ],
    tags: ['Macroeconomics', 'History', 'Trade & Industry'],
    era: '1800–Present',
    relatedIds: ['thesis-cap-labor-exploitation'],
  },

  // Pillar 2 Theses
  {
    id: 'thesis-cap-piketty-wealth',
    parentId: 'pillar-cap-inequality',
    kind: 'thesis',
    title: 'Capital Concentration & Structural Rate-of-Return Dynamics (r > g)',
    summary:
      'Weighs Thomas Piketty’s empirical proof that capital return exceeds growth against counterarguments asserting that capital deepening, depreciation, and housing supply constraints explain wealth ratios.',
    sections: [
      {
        heading: 'The Mechanics of Compounding Plutocracy',
        paragraphs: [
          'Thomas Piketty’s historical series demonstrates that across European and U.S. history, average return on private capital (**r**) hovered between **4% and 5%**, while output growth (**g**) averaged **1% to 2%**. When r > g, inherited wealth compounds faster than economic output, transforming meritocracies into **patrimonial capitalism** dominated by inherited fortunes.',
          'Furthermore, high-net-worth fortunes command higher portfolio returns through exclusive private equity, hedge funds, and tax avoidance infrastructure, widening intra-capital inequality.',
        ],
      },
      {
        heading: 'The Housing Wealth Critique: Rognlie’s Re-evaluation',
        paragraphs: [
          'Economist **Matthew Rognlie (2015 Brookings Papers)** demonstrated that virtually the entirety of the net capital share increase in developed economies since 1950 stems from **housing and urban land scarcity**, rather than productive machinery or corporate capital. Supply-siders argue that zoning deregulation, not wealth confiscation, is the antidote.',
        ],
      },
    ],
    details: [
      'Piketty’s historical dataset spanning 300 years shows capital-to-income ratios rising back toward pre-WWI peak levels of 500–600%.',
      'Matthew Rognlie (2015 Brookings) established that outside of housing, the capital share of net value added has remained relatively stable.',
      'Saez & Zucman (2019) documented that U.S. billionaires paid a lower effective overall tax rate (including payroll and sales taxes) than the working class in 2018.',
    ],
    sources: [
      {
        title: 'Deciphering the Fall and Rise in the Net Capital Share: Accumulation or Scarcity?',
        url: 'https://www.brookings.edu/articles/deciphering-the-fall-and-rise-in-the-net-capital-share/',
        publisher: 'Brookings Papers on Economic Activity (Matthew Rognlie)',
        year: '2015',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'The Triumph of Injustice: How the Rich Dodge Taxes and How to Make Them Pay',
        url: 'https://wwnorton.com/books/9781324004080',
        publisher: 'W.W. Norton (Emmanuel Saez & Gabriel Zucman)',
        year: '2019',
        category: 'Scholarship',
      },
    ],
    tags: ['Taxation & Fiscal', 'Macroeconomics', 'Empirical Studies'],
    era: '1970–Present',
    relatedIds: ['thesis-cap-price-signals', 'thesis-cap-decommodification'],
  },
  {
    id: 'thesis-cap-labor-exploitation',
    parentId: 'pillar-cap-inequality',
    kind: 'thesis',
    title: 'Surplus Extraction, Wage-Productivity Decoupling & Monopsony',
    summary:
      'Contrasts socialist critiques of surplus value extraction and the post-1973 decoupling of real wages from productivity against neoclassical marginal productivity theory and total compensation accounting.',
    sections: [
      {
        heading: 'The Great Decoupling: Productivity vs. Median Compensation',
        paragraphs: [
          'Economic Policy Institute (EPI) data reveals that between **1979 and 2022**, net economy-wide productivity grew by **64.7%**, while real hourly compensation for typical production and nonsupervisory workers rose by only **14.8%**. Socialists argue this divergence reflects the systematic extraction of surplus value, enabled by union-busting, trade deregulation, and financialization.',
          'Recent empirical work by **Stansbury & Summers (2020)** and labor monopsony researchers confirms that diminished worker bargaining power explains the multi-decade decline in the U.S. labor share.',
        ],
      },
      {
        heading: 'The Compensation & Deflator Counterargument',
        paragraphs: [
          'Neoclassical economists—such as **Martin Feldstein** and **Scott Winship**—counter that the supposed "decoupling" is largely a statistical artifact created by using different inflation deflators (CPI vs. IPD) and omitting non-wage benefits like employer-sponsored healthcare and 401(k) contributions.',
        ],
      },
    ],
    details: [
      'EPI data documents a 4:1 divergence between aggregate productivity gains and median worker wage growth since 1979.',
      'Martin Feldstein (2008 NBER) showed that when measuring total compensation with the output price deflator, marginal labor compensation tracks productivity closely.',
      'Labor share of national income in the U.S. declined from ~64% in 2000 to ~57% in 2023.',
    ],
    sources: [
      {
        title: 'The Productivity–Pay Gap: 2022 Update',
        url: 'https://www.epi.org/productivity-pay-gap/',
        publisher: 'Economic Policy Institute',
        year: '2022',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'Did Wages Reflect a Decline in Worker Power? (NBER w27193)',
        url: 'https://www.nber.org/papers/w27193',
        publisher: 'NBER (Anna Stansbury & Lawrence Summers)',
        year: '2020',
        category: 'Scholarship',
      },
    ],
    tags: ['Labor & Welfare', 'Macroeconomics', 'Empirical Studies'],
    era: '1973–Present',
    relatedIds: ['thesis-cap-workplace-democracy'],
  },

  // Pillar 3 Theses
  {
    id: 'thesis-cap-workplace-democracy',
    parentId: 'pillar-cap-socialism',
    kind: 'thesis',
    title: 'Worker Cooperatives & Codetermination as Economic Democracy',
    summary:
      'Evaluates whether extending democratic governance into workplaces through worker cooperatives and board codetermination enhances worker well-being and stability, or causes capital underinvestment.',
    sections: [
      {
        heading: 'Democratic Enterprise: Resilience, Dignity & Compressed Inequality',
        paragraphs: [
          'Advocates of economic democracy argue that authoritarian management alienates workers and generates perverse incentives for short-term stock manipulation. In worker cooperatives, each worker has one vote regardless of capital contribution. Empirical reviews of cooperative firms across Italy, Spain, and France find that cooperatives exhibit **higher firm survival rates**, lower worker turnover, and preserve employment during recessions by collectively reducing hours rather than firing staff.',
          'German codetermination (*Mitbestimmung*) provides employees with 50% of supervisory board seats in companies with over 2,000 employees, correlating with higher capital reinvestment and lower executive pay dispersion.',
        ],
      },
      {
        heading: 'The Capital Starvation & Horizon Problem of Cooperatives',
        paragraphs: [
          'Mainstream finance theorists warn of the **horizon problem** in cooperatives: because worker-owners cannot sell equity shares upon retirement, they prefer immediate cash wage payouts over long-term 20-year R&D investments. Furthermore, external equity markets are reluctant to fund ventures where investors possess zero voting control, starving cooperatives of scale-up capital.',
        ],
      },
    ],
    details: [
      'Empirical studies of Italian and Basque cooperatives demonstrate equal or superior productivity relative to conventional capitalist peers.',
      'German corporate codetermination (Mitbestimmung) legally protects 50% employee board representation in large public firms.',
      'The "horizon problem" explains why worker cooperatives represent less than 1% of total enterprise volume in advanced economies.',
    ],
    sources: [
      {
        title: 'The Relative Survival of Worker Cooperatives and Barriers to Their Creation',
        url: 'https://www.sciencedirect.com/science/article/pii/S014759671400030X',
        publisher: 'Journal of Comparative Economics (Burdín)',
        year: '2014',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'Codetermination and the Democratic Firm: A Reappraisal',
        url: 'https://www.nber.org/papers/w29978',
        publisher: 'NBER (Jäger, Noy & Schoefer)',
        year: '2022',
        category: 'Scholarship',
      },
    ],
    tags: ['Labor & Welfare', 'Governance', 'Philosophy & Ethics'],
    era: '1976–Present',
    relatedIds: ['thesis-cap-labor-exploitation'],
  },
  {
    id: 'thesis-cap-decommodification',
    parentId: 'pillar-cap-socialism',
    kind: 'thesis',
    title: 'De-commodifying Basic Social Goods: Health, Housing & Education',
    summary:
      'Debates whether basic life necessities should be removed from market pricing and delivered as universal public goods, or whether state provision breeds rationing and technological stagnation.',
    sections: [
      {
        heading: 'Healthcare and Shelter as Inalienable Human Rights',
        paragraphs: [
          'Socialists argue that basic survival goods exhibit inelastic demand: a patient experiencing a heart attack or a family seeking shelter cannot exercise consumer sovereignty or walk away from a transaction. When private healthcare and rental housing operate for profit, predatory price gouging, medical bankruptcies, and homelessness inevitably follow.',
          'Universal single-payer systems (like the UK NHS or Canadian Medicare) and municipal housing programs (like Vienna) achieve superior universal access and preventative outcomes at half the per-capita administrative cost of the marketized U.S. system.',
        ],
      },
      {
        heading: 'Rationing Queues, Moral Hazard & Innovation Drain',
        paragraphs: [
          'Defenders of market mechanisms counter that government monopolies create **non-price rationing**: long wait times for specialized surgeries, chronic drug shortages, and bureaucratic housing allocation queues. Market-based pharmaceutical innovation, driven by U.S. patent incentives, generates over **half of all global novel drug approvals**.',
        ],
      },
    ],
    details: [
      'U.S. per capita healthcare spending exceeds $12,500 annually—double the OECD average—while leaving 26 million residents uninsured.',
      'Vienna’s municipal housing model maintains over 420,000 public and subsidized units, insulating working families from speculative rent spikes.',
      'Wait times for elective procedures in single-payer systems (e.g. median 27.7 weeks in Canada in 2023) highlight trade-offs in non-price rationing.',
    ],
    sources: [
      {
        title: 'Health at a Glance 2023: OECD Indicators',
        url: 'https://www.oecd.org/en/publications/health-at-a-glance-2023_7a7afb35-en.html',
        publisher: 'OECD Publishing',
        year: '2023',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'Waiting Your Turn: Wait Times for Health Care in Canada, 2023 Report',
        url: 'https://www.fraserinstitute.org/studies/waiting-your-turn-wait-times-for-health-care-in-canada-2023',
        publisher: 'Fraser Institute',
        year: '2023',
        category: 'Watchdog / NGO',
      },
    ],
    tags: ['Housing & Healthcare', 'Labor & Welfare', 'Economics'],
    era: '1945–Present',
    relatedIds: ['thesis-cap-piketty-wealth', 'thesis-cap-nordic-flexicurity'],
  },

  // Pillar 4 Theses
  {
    id: 'thesis-cap-nordic-flexicurity',
    parentId: 'pillar-cap-nordic',
    kind: 'thesis',
    title: 'The Nordic Welfare State: Free Markets Financing Strong Safety Nets',
    summary:
      'Explores how Scandinavian economies achieve high living standards by combining competitive capitalist export markets and light business regulation with universal social security and flexicurity.',
    sections: [
      {
        heading: 'The Social Democratic Compromise: Flexicurity in Action',
        paragraphs: [
          'Danish **flexicurity** exemplifies the synthesis: employers enjoy complete freedom to fire workers with minimal bureaucratic notice, enabling rapid business reallocation, while the state provides **up to two years of high wage-replacement benefits** and active labor market training.',
          'Nordic countries consistently rank at the top of the UN World Happiness Report and UNDP Human Development Index, proving that generous social spending is compatible with dynamic, open capitalist economies.',
        ],
      },
      {
        heading: 'The Middle-Class Tax Burden & Cultural Capital',
        paragraphs: [
          'Critics note that Nordic welfare states do not "tax the rich" to fund services; their tax systems are remarkably flat. Middle-class workers pay top marginal income tax rates starting at 1.2 to 1.6 times average income (compared to over 8 times in the U.S.), combined with a universal **25% VAT**. Furthermore, economists note high pre-existing social trust and homogenous institutions that cannot easily be scaled to diverse continental nations.',
        ],
      },
    ],
    details: [
      'Denmark’s flexicurity model combines flexible firing rules, generous unemployment safety nets (up to 90% of low wages), and mandatory reskilling.',
      'Nordic countries impose top marginal income taxes at relatively modest income thresholds (~$60k–$80k) alongside universal 25% VATs.',
      'Nordic nations rank in the global top 10 on the UN Human Development Index and global social mobility rankings.',
    ],
    sources: [
      {
        title: 'Danish Flexicurity: It’s All About the Golden Triangle',
        url: 'https://www.oecd.org/en/topics/sub-goals/employment.html',
        publisher: 'OECD Employment Outlook',
        year: '2018',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'World Happiness Report 2024',
        url: 'https://worldhappiness.report/ed/2024/',
        publisher: 'UN Sustainable Development Solutions Network',
        year: '2024',
        category: 'Watchdog / NGO',
      },
    ],
    tags: ['Macroeconomics', 'Labor & Welfare', 'Taxation & Fiscal'],
    era: '1970–Present',
    relatedIds: ['thesis-cap-decommodification'],
  },
  {
    id: 'thesis-cap-calculation-planning',
    parentId: 'pillar-cap-nordic',
    kind: 'thesis',
    title: 'The Economic Calculation Problem & Failure of Command Economies',
    summary:
      'Examines the Mises-Hayek challenge to central planning and debates whether modern supercomputing and algorithmic planning can overcome socialist calculation bottlenecks.',
    sections: [
      {
        heading: 'Mises and the Impossibility of Socialist Calculation',
        paragraphs: [
          'In **1920**, **Ludwig von Mises** demonstrated that without private ownership of capital goods, there are no market transactions for machinery, raw materials, or land. Without market transactions, there are no genuine money prices; and without prices reflecting scarcity, economic planners cannot calculate whether an industrial project creates or destroys economic value.',
          'The historical record of the Soviet Gosplan, Maoist Great Leap Forward, and Venezuelan price controls confirms that state price-fixing causes massive misallocation, chronic queues for basic provisions, and authoritarian coercion.',
        ],
      },
      {
        heading: 'Cybernetic Planning & Algorithmic Resource Allocation',
        paragraphs: [
          'Contemporary neo-socialist theorists, such as **Paul Cockshott & Allin Cottrell (1993)**, argue that twentieth-century planning lacked computational capacity. With modern supercomputers, big data, and neural networks—used internally by mega-corporations like Walmart and Amazon to coordinate global logistics without internal markets—democratic socialist planning can allocate resources dynamically in labor-time units.',
        ],
      },
    ],
    details: [
      'Mises (1920) and Hayek (1945) proved that non-price planning lacks the localized knowledge required to assess comparative opportunity costs.',
      'The Soviet Gosplan attempted to administratively set over 24 million distinct prices, resulting in systemic shortages of consumer goods.',
      'Cockshott & Cottrell (1993) and modern cybernetic theorists propose algorithmic planning using big-data optimization to simulate Walrasian equilibrium.',
    ],
    sources: [
      {
        title: 'Towards a New Socialism',
        url: 'https://www.ricardo.ecn.wfu.edu/~cottrell/socialism_book/new_socialism.pdf',
        publisher: 'Spokesman Books (W. Paul Cockshott & Allin Cottrell)',
        year: '1993',
        category: 'Scholarship',
      },
      {
        title: 'The People’s Republic of Walmart: How the World’s Biggest Corporations are Laying the Foundation for Socialism',
        url: 'https://www.versobooks.com/en-gb/products/636-the-people-s-republic-of-walmart',
        publisher: 'Verso Books (Leigh Phillips & Michal Rozworski)',
        year: '2019',
        category: 'Scholarship',
      },
    ],
    tags: ['Macroeconomics', 'History', 'Philosophy & Ethics'],
    era: '1920–Present',
    relatedIds: ['thesis-cap-price-signals'],
  },
];

const proConNodes: DebateNode[] = [
  // Under thesis-cap-price-signals
  {
    id: 'pro-cap-hayek-knowledge',
    parentId: 'thesis-cap-price-signals',
    kind: 'pro',
    title: 'Hayekian Price Discovery Coordinates Dispersed Knowledge Efficiently',
    summary:
      'Price signals allow millions of independent actors to adapt continuously to shifting resource conditions without central oversight or bureaucratic permission.',
    sections: [
      {
        heading: 'Decentralized Intelligence and the Knowledge Miracle',
        paragraphs: [
          'Prices condense vast, complex local conditions into a single actionable metric. As **Leonard Read’s classic "I, Pencil"** illustrated, not a single individual on Earth knows how to make a simple wooden pencil from scratch—it requires graphite mining in Sri Lanka, cedar logging in Oregon, brass ferrule milling, and chemical lacquers coordinated entirely by market exchange.',
          'Market profits and losses swiftly weed out inefficient enterprises, conserving scarce physical and human resources far better than political committees.',
        ],
      },
      {
        heading: 'Dynamic Resilience to Supply Shocks',
        paragraphs: [
          'During global energy or commodity crises, market price spikes immediately incentivize conservation by consumers and capital deployment by producers, restoring equilibrium without government rationing coupons.',
        ],
      },
    ],
    details: [
      'Hayek demonstrated that prices operate as an organic, self-organizing telecommunications system.',
      'No central planner can anticipate micro-level variations in consumer preferences and local production bottlenecks.',
      'Market-driven adjustments happen within seconds in global commodity and futures exchanges.',
    ],
    sources: [
      {
        title: 'The Use of Knowledge in Society',
        url: 'https://www.aeaweb.org/aer/top20/35.4.519-530.pdf',
        publisher: 'American Economic Review (Hayek)',
        year: '1945',
        category: 'Scholarship',
      },
      {
        title: 'I, Pencil: My Family Tree as told to Leonard E. Read',
        url: 'https://fee.org/resources/i-pencil/',
        publisher: 'Foundation for Economic Education',
        year: '1958',
        category: 'Scholarship',
      },
    ],
    tags: ['Macroeconomics', 'Philosophy & Ethics'],
    era: '1945–Present',
    relatedIds: ['con-cap-market-failures'],
  },
  {
    id: 'con-cap-market-failures',
    parentId: 'thesis-cap-price-signals',
    kind: 'con',
    title: 'Unfettered Market Prices Fail to Account for Externalities and Monopolies',
    summary:
      'Price signals ignore non-market values, causing severe market failures, climate destruction, and predatory monopoly pricing that demand regulatory planning.',
    sections: [
      {
        heading: 'Negative Externalities and Planetary Boundaries',
        paragraphs: [
          'Market pricing measures only private transactional costs. Consequently, fossil fuel corporations generate trillions in unpriced ecological damage, resulting in greenhouse gas accumulation and biodiversity collapse. Because the atmosphere has no property owner, market prices provide zero incentive to halt emissions without state intervention.',
        ],
      },
      {
        heading: 'Asymmetric Information and Monopolistic Distortion',
        paragraphs: [
          'Nobel laureate **Joseph Stiglitz** demonstrated that wherever information is imperfect or asymmetric, markets are Pareto inefficient. Monopolies systematically restrict output and raise prices above marginal cost, distorting the very price signals that free-market theory celebrates.',
        ],
      },
    ],
    details: [
      'Nicholas Stern termed anthropogenic climate change the greatest market failure the world has ever seen.',
      'Joseph Stiglitz proved that market equilibrium is rarely optimal in the presence of asymmetric information.',
      'Unregulated market pricing drives corporate cost-externalization onto public health and the environment.',
    ],
    sources: [
      {
        title: 'Stern Review on the Economics of Climate Change',
        url: 'https://www.lse.ac.uk/granthaminstitute/publication/the-economics-of-climate-change-the-stern-review/',
        publisher: 'HM Treasury / London School of Economics (Nicholas Stern)',
        year: '2006',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'Whither Socialism?',
        url: 'https://mitpress.mit.edu/9780262691826/whither-socialism/',
        publisher: 'MIT Press (Joseph E. Stiglitz)',
        year: '1994',
        category: 'Scholarship',
      },
    ],
    tags: ['Energy & Climate', 'Regulation & Markets', 'Macroeconomics'],
    era: '1994–Present',
    relatedIds: ['pro-cap-hayek-knowledge'],
  },

  // Under thesis-cap-innovation-poverty
  {
    id: 'pro-cap-extreme-poverty',
    parentId: 'thesis-cap-innovation-poverty',
    kind: 'pro',
    title: 'Market Liberalization Has Slashed Global Absolute Poverty to Record Lows',
    summary:
      'The global spread of market institutions, trade openness, and private enterprise lifted over one billion people out of extreme poverty in three decades.',
    sections: [
      {
        heading: 'The Great Convergence and Poverty Eradication',
        paragraphs: [
          'According to World Bank data, between **1990 and 2019**, the share of the world population living on less than $2.15 a day dropped from **37.8% to 8.4%**. This historic triumph occurred not through international aid or planned redistribution, but through the integration of developing nations—most notably China, India, and Vietnam—into the global market economy.',
          'Private investment funded rural electrification, mobile telecom networks, agricultural machinery, and pharmaceutical distribution that transformed human living standards.',
        ],
      },
      {
        heading: 'Abundance and Consumer Surplus',
        paragraphs: [
          'Economist **William Nordhaus** calculated that innovators capture only **2.2%** of the total economic value generated by their innovations; the remaining **97.8%** is passed on to consumers as vast consumer surplus and lower real prices.',
        ],
      },
    ],
    details: [
      'World Bank figures confirm more than 1.1 billion individuals escaped extreme poverty between 1990 and 2019.',
      'William Nordhaus (2004 NBER) proved that entrepreneurs retain only a tiny fraction of the social value of innovations.',
      'Per-capita food consumption and caloric intake in developing market economies have reached historical highs.',
    ],
    sources: [
      {
        title: 'Schumpeterian Profits in the American Economy: Theory and Measurement (NBER w10433)',
        url: 'https://www.nber.org/papers/w10433',
        publisher: 'NBER (William Nordhaus)',
        year: '2004',
        category: 'Scholarship',
      },
      {
        title: 'The Great Escape: Health, Wealth, and the Origins of Inequality',
        url: 'https://press.princeton.edu/books/hardcover/9780691158471/the-great-escape',
        publisher: 'Princeton University Press (Angus Deaton)',
        year: '2013',
        category: 'Scholarship',
      },
    ],
    tags: ['Macroeconomics', 'Empirical Studies', 'Trade & Industry'],
    era: '1990–Present',
    relatedIds: ['con-cap-unequal-gains'],
  },
  {
    id: 'con-cap-unequal-gains',
    parentId: 'thesis-cap-innovation-poverty',
    kind: 'con',
    title: 'Capitalist Growth Relies on Unequal Global Extraction and Ecological Overshoot',
    summary:
      'Mainstream poverty metrics mask ongoing immiseration in the Global South, where corporate supply chains drain labor and raw materials under unequal exchange.',
    sections: [
      {
        heading: 'The Myth of the Free-Market Poverty Miracle',
        paragraphs: [
          'Anthropologist **Jason Hickel** and dependency economists demonstrate that the vast majority of global poverty reduction occurred in **China**, where state-owned banks, land nationalization, and industrial policy directed development—not Washington Consensus free-market dogma. Outside China, poverty rates measured against a realistic $7.40/day living standard have remained virtually stagnant in absolute numbers.',
        ],
      },
      {
        heading: 'Ecological Depletion and Unequal Ecological Exchange',
        paragraphs: [
          'Capitalism’s requirement for exponential 3% compound annual growth is physically incompatible with finite planetary boundaries. Rich countries consume an average of 28 tons of raw materials per person annually, net-appropriating billions of hours of embodied labor from the Global South.',
        ],
      },
    ],
    details: [
      'Hickel et al. (2022 Nature Sustainability) calculated that high-income nations drain over $10 trillion in annual value from the Global South via unequal exchange.',
      'Excluding state-directed China, global poverty below humane living thresholds ($7.40/day) has scarcely declined since 1981.',
      'Global material extraction has tripled since 1970, driving catastrophic biodiversity loss and climatic tipping points.',
    ],
    sources: [
      {
        title: 'Imperialist Appropriation in the World Economy: Drain from the Global South through Unequal Exchange',
        url: 'https://www.sciencedirect.com/science/article/pii/S095937802200005X',
        publisher: 'Global Environmental Change (Hickel, Dorninger, Wieland & Suwandi)',
        year: '2022',
        category: 'Scholarship',
      },
      {
        title: 'Less is More: How Degrowth Will Save the World',
        url: 'https://www.penguin.co.uk/books/315352/less-is-more-by-jason-hickel/9781785152498',
        publisher: 'William Heinemann (Jason Hickel)',
        year: '2020',
        category: 'Scholarship',
      },
    ],
    tags: ['Trade & Industry', 'Energy & Climate', 'Human Rights'],
    era: '1980–Present',
    relatedIds: ['pro-cap-extreme-poverty'],
  },

  // Under thesis-cap-piketty-wealth
  {
    id: 'pro-cap-inequality-critique',
    parentId: 'thesis-cap-piketty-wealth',
    kind: 'pro',
    title: 'Unchecked Capital Accumulation Subverts Democracy and Solidifies Dynasties',
    summary:
      'When returns on capital outpace economic growth, wealth concentrates into dynastic fortunes that buy political power, creating self-reinforcing plutocracy.',
    sections: [
      {
        heading: 'The Return of Patrimonial Capitalism',
        paragraphs: [
          'As **Thomas Piketty** and **Gabriel Zucman** document, without progressive wealth taxes, accumulated wealth concentrates into hereditary family dynasties. In the United States, the top 0.1% holds more wealth than the bottom 80% combined. This concentration is not driven by entrepreneurial merit, but by compounding capital returns on existing assets.',
          'Wealthy elites leverage Super PACs, lobby firms, and think-tank funding to lower top tax rates and defund the IRS, cementing their dominance.',
        ],
      },
      {
        heading: 'Erosion of the Democratic Social Contract',
        paragraphs: [
          'Extreme wealth polarization destroys social cohesion and breeds political cynicism. When ordinary citizens observe that economic gains flow exclusively to asset owners while median real wages stagnate, support for democratic norms crumbles, paving the way for authoritarian populism.',
        ],
      },
    ],
    details: [
      'Piketty, Saez & Zucman (2018) showed the top 1% captured over 50% of total U.S. pre-tax income growth between 1980 and 2014.',
      'The top 400 richest Americans pay a lower effective overall tax rate than the average U.S. taxpayer when unrealized capital gains are counted.',
      'Empirical studies link wealth concentration directly to decreased social mobility and declining institutional trust.',
    ],
    sources: [
      {
        title: 'Capital in the Twenty-First Century',
        url: 'https://www.hup.harvard.edu/books/9780674975699',
        publisher: 'Harvard University Press (Thomas Piketty)',
        year: '2014',
        category: 'Scholarship',
      },
      {
        title: 'The Triumph of Injustice',
        url: 'https://wwnorton.com/books/9781324004080',
        publisher: 'W.W. Norton (Saez & Zucman)',
        year: '2019',
        category: 'Scholarship',
      },
    ],
    tags: ['Taxation & Fiscal', 'Governance', 'Philosophy & Ethics'],
    era: '2014–Present',
    relatedIds: ['con-cap-wealth-merit'],
  },
  {
    id: 'con-cap-wealth-merit',
    parentId: 'thesis-cap-piketty-wealth',
    kind: 'con',
    title: 'Wealth Reflects Capital Investment, Risk-Taking and Lifecycle Savings',
    summary:
      'Capital accumulation rewards productive risk and delayed consumption, providing the vital venture capital that finances technological breakthroughs.',
    sections: [
      {
        heading: 'Capital Deepening and Productivity Growth',
        paragraphs: [
          'Free-market economists emphasize that private wealth is not stored in Scrooge McDuck money vaults; it is invested in factories, research labs, semiconductor fabrication plants, and data centers. By deferring consumption and bearing entrepreneurial risk, capital investors raise the capital-to-labor ratio, which increases worker productivity and wages.',
          'Furthermore, much of measured wealth inequality reflects natural **lifecycle savings**: older workers near retirement naturally hold vastly more capital assets than twenty-year-olds entering the workforce.',
        ],
      },
      {
        heading: 'Turnover at the Top and Creative Destruction of Fortunes',
        paragraphs: [
          'Wealth is not static. Analysis of the Forbes 400 list reveals high turnover: the vast majority of today’s billionaires are first-generation entrepreneurs (e.g. tech, biotech, retail founders) rather than inheritors of nineteenth-century robber baron trusts, proving ongoing competitive mobility.',
        ],
      },
    ],
    details: [
      'Robert Solow’s growth model shows capital deepening directly drives labor productivity and higher real compensation.',
      'Analysis of Forbes 400 fortunes shows self-made founders rose from ~38% in 1984 to over 69% by 2023.',
      'Lifecycle economics explains that middle-aged households naturally accumulate peak assets for retirement compared to younger cohorts.',
    ],
    sources: [
      {
        title: 'A Contribution to the Theory of Economic Growth',
        url: 'https://academic.oup.com/qje/article/70/1/65/1903676',
        publisher: 'Quarterly Journal of Economics (Robert M. Solow)',
        year: '1956',
        category: 'Scholarship',
      },
      {
        title: 'The Myth of the Inherited Wealth Plutocracy',
        url: 'https://www.cato.org/cato-journal/fall-2020/myth-increasing-us-wealth-inequality',
        publisher: 'Cato Institute (Chris Edwards)',
        year: '2020',
        category: 'Watchdog / NGO',
      },
    ],
    tags: ['Macroeconomics', 'Taxation & Fiscal', 'Empirical Studies'],
    era: '1956–Present',
    relatedIds: ['pro-cap-inequality-critique'],
  },

  // Under thesis-cap-labor-exploitation
  {
    id: 'pro-cap-surplus-extraction',
    parentId: 'thesis-cap-labor-exploitation',
    kind: 'pro',
    title: 'Declining Labor Share and Monopsony Power Depress Worker Living Standards',
    summary:
      'Corporate concentration and declining union density enable employers to suppress wages below productivity, extracting record corporate profits.',
    sections: [
      {
        heading: 'Monopsony Power and Wage Markdown',
        paragraphs: [
          'Economists **Ioana Marinescu**, **José Azar**, and **Arindrajit Dube** have demonstrated that local labor markets are pervasive **monopsonies**: because workers face commuting limits, healthcare lock-in, and search costs, employers possess market power to mark wages down by **15% to 20%** below competitive marginal revenue products.',
          'Non-compete clauses, mandatory arbitration, and corporate mergers have systematically eroded worker outside options, transferring hundreds of billions annually from labor to corporate equity owners.',
        ],
      },
      {
        heading: 'Stock Buybacks Over Capital Reinvestment',
        paragraphs: [
          'Between 2010 and 2020, S&P 500 corporations directed over **$6 trillion** into share buybacks and dividends rather than worker wage increases or capacity expansion, illustrating financialized surplus extraction over productive enterprise.',
        ],
      },
    ],
    details: [
      'Azar et al. (2020 QJE) documented that over 60% of local U.S. labor markets are highly concentrated under federal antitrust guidelines.',
      'Federal Reserve studies link declining unionization to 30% of the growth in wage inequality among men since 1973.',
      'S&P 500 profit margins reached historic postwar peaks between 2021 and 2024 while real median hourly wages struggled against inflation.',
    ],
    sources: [
      {
        title: 'Labor Market Concentration',
        url: 'https://academic.oup.com/qje/article/135/4/1859/5836248',
        publisher: 'Quarterly Journal of Economics (Azar, Marinescu & Steinbaum)',
        year: '2020',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'Profits Without Prosperity: How Stock Buybacks Depress the Economy',
        url: 'https://hbr.org/2014/09/profits-without-prosperity',
        publisher: 'Harvard Business Review (William Lazonick)',
        year: '2014',
        category: 'Scholarship',
      },
    ],
    tags: ['Labor & Welfare', 'Regulation & Markets', 'Empirical Studies'],
    era: '2014–Present',
    relatedIds: ['con-cap-marginal-productivity'],
  },
  {
    id: 'con-cap-marginal-productivity',
    parentId: 'thesis-cap-labor-exploitation',
    kind: 'con',
    title: 'Wages Track Marginal Productivity and Total Real Compensation',
    summary:
      'When accounting for healthcare benefits, pensions, and accurate price deflators, worker compensation tracks labor productivity closely in competitive markets.',
    sections: [
      {
        heading: 'Total Compensation and Statistical Deflator Parity',
        paragraphs: [
          'Former NBER President **Martin Feldstein** demonstrated that the alleged "wage-productivity decoupling" disappears when analyzing **total employee compensation** (including soaring healthcare premiums, pensions, and payroll taxes) rather than narrow cash wages, and when deflating both output and wages with the same **implicit price deflator**.',
          'Competitive firms must pay workers their marginal revenue product, or risk losing skilled staff to rivals in a dynamic economy.',
        ],
      },
      {
        heading: 'Skills-Biased Technological Change',
        paragraphs: [
          'Wage dispersion is driven by **skills-biased technological change (SBTC)**: computerization and automation heavily complement high-skilled cognitive labor while substituting for routine tasks, explaining divergence without invoking exploitation.',
        ],
      },
    ],
    details: [
      'Martin Feldstein (2008 NBER) showed total worker compensation grew by over 90% between 1970 and 2006, tracking non-farm productivity.',
      'Health insurance benefits now comprise over 8% to 12% of total employer compensation costs for average workers.',
      'Claudia Goldin and Lawrence Katz (2008) showed wage differentials reflect the race between education and technological advancement.',
    ],
    sources: [
      {
        title: 'Did Wages Reflect a Growth in Labor Productivity? (NBER w13953)',
        url: 'https://www.nber.org/papers/w13953',
        publisher: 'NBER (Martin Feldstein)',
        year: '2008',
        category: 'Scholarship',
      },
      {
        title: 'The Race between Education and Technology',
        url: 'https://www.hup.harvard.edu/books/9780674035300',
        publisher: 'Harvard University Press (Claudia Goldin & Lawrence F. Katz)',
        year: '2008',
        category: 'Scholarship',
      },
    ],
    tags: ['Labor & Welfare', 'Macroeconomics', 'Empirical Studies'],
    era: '2008–Present',
    relatedIds: ['pro-cap-surplus-extraction'],
  },

  // Under thesis-cap-workplace-democracy
  {
    id: 'pro-cap-coops-mondragon',
    parentId: 'thesis-cap-workplace-democracy',
    kind: 'pro',
    title: 'Worker Co-ops and Codetermination Foster Long-Term Resilience and Equity',
    summary:
      'Cooperative governance aligns firm success with worker health, compresses wage inequality, and preserves employment during economic downturns.',
    sections: [
      {
        heading: 'The Proven Model of Mondragon and European Cooperatives',
        paragraphs: [
          'The **Mondragon Corporation** in Spain illustrates that worker cooperatives can compete globally in advanced manufacturing, retail, and financial services. During the 2008 financial crisis, Mondragon cooperatives maintained employment by democratically agreeing to temporary wage reductions and reallocating workers across divisions, avoiding mass layoffs.',
          'Internal wage ratios between the lowest-paid worker and top management are restricted to between **1:3 and 1:9**, preventing the astronomical 350:1 CEO pay gaps typical of U.S. corporations.',
        ],
      },
      {
        heading: 'German Codetermination and Productive Peace',
        paragraphs: [
          'Studies by **Jäger, Schoefer & Heining (2021 QJE)** show that German codetermination produces higher capital formation, peaceful labor relations, and zero negative effects on profitability or market valuation.',
        ],
      },
    ],
    details: [
      'Mondragon generates over €11 billion in annual revenue across industrial and retail divisions with 80,000+ worker-owners.',
      'Cooperative worker-owners report significantly higher job satisfaction and lower stress than peers in hierarchical corporations.',
      'Jäger et al. (2021) demonstrated German board-level worker representation increases firm capital intensity without reducing profitability.',
    ],
    sources: [
      {
        title: 'What Does Codetermination Do? (NBER w28957 / QJE)',
        url: 'https://www.nber.org/papers/w28957',
        publisher: 'Quarterly Journal of Economics (Jäger, Schoefer & Heining)',
        year: '2021',
        category: 'Scholarship',
      },
      {
        title: 'The Mondragon Experiment: Corporate Governance in the Basque Country',
        url: 'https://www.mondragon-corporation.com/en/about-us/',
        publisher: 'Mondragon Corporation Annual Report',
        year: '2023',
        category: 'Watchdog / NGO',
      },
    ],
    tags: ['Labor & Welfare', 'Governance', 'Philosophy & Ethics'],
    era: '1956–Present',
    relatedIds: ['con-cap-coop-capital-starvation'],
  },
  {
    id: 'con-cap-coop-capital-starvation',
    parentId: 'thesis-cap-workplace-democracy',
    kind: 'con',
    title: 'Worker Cooperatives Suffer From Capital Starvation and Governance Gridlock',
    summary:
      'Cooperative structures limit outside equity financing, concentrate worker financial risk, and struggle with slow, politicized decision-making.',
    sections: [
      {
        heading: 'The Horizon and Portfolio Risks of Worker Ownership',
        paragraphs: [
          'Economic theory explains why worker co-ops remain rare in competitive markets. First, worker-owners face catastrophic **portfolio risk**: their wages, healthcare, and lifetime retirement savings are tied to a single firm, violating basic diversification rules. When Enron or a cooperative fails, workers lose both their jobs and their life savings.',
          'Second, because outside venture investors cannot obtain voting shares or board seats, high-tech startups requiring millions in speculative R&D cannot form as cooperatives.',
        ],
      },
      {
        heading: 'Governance Gridlock and Factionalism',
        paragraphs: [
          'Democratic voting on technical business decisions (plant closures, layoffs, capital expenditures) turns operational management into a political campaign, paralyzing firms in fast-moving global competitive environments.',
        ],
      },
    ],
    details: [
      'Worker cooperatives cannot issue traditional common equity to venture capital or institutional pension funds.',
      'Workers in cooperatives concentrate both human capital and financial capital in a single enterprise, multiplying personal bankruptcy risk.',
      'Empirical prevalence of worker cooperatives remains below 0.5% of total business output across OECD countries.',
    ],
    sources: [
      {
        title: 'The Architecture of the Firm',
        url: 'https://press.princeton.edu/books/hardcover/9780691042572/the-architecture-of-the-firm',
        publisher: 'Princeton University Press (Oliver Williamson)',
        year: '1996',
        category: 'Scholarship',
      },
      {
        title: 'Why Do Worker-Owned Firms Have So Little Capital?',
        url: 'https://academic.oup.com/aler/article-abstract/12/1/155/157077',
        publisher: 'American Law and Economics Review (Henry Hansmann)',
        year: '2010',
        category: 'Scholarship',
      },
    ],
    tags: ['Macroeconomics', 'Regulation & Markets', 'Governance'],
    era: '1996–Present',
    relatedIds: ['pro-cap-coops-mondragon'],
  },

  // Under thesis-cap-decommodification
  {
    id: 'pro-cap-public-goods',
    parentId: 'thesis-cap-decommodification',
    kind: 'pro',
    title: 'Universal Decommodified Services Slash Administrative Waste and Expand Freedom',
    summary:
      'Removing healthcare and social housing from market extraction eliminates predatory markups, reduces administrative overhead, and guarantees baseline security.',
    sections: [
      {
        heading: 'Administrative Efficiency of Public Universal Systems',
        paragraphs: [
          'Single-payer healthcare models demonstrate enormous administrative savings: Canadian Medicare and the UK NHS spend **2% to 4%** of revenue on administration, compared to **15% to 25%** in private U.S. insurance companies burdened by billing bureaucracy, prior authorizations, and shareholder profits.',
          'Decommodifying basic needs enhances genuine personal freedom: workers are free to quit abusive employers or launch new businesses without losing health coverage for their children.',
        ],
      },
      {
        heading: 'Vienna Social Housing as an Urban Success',
        paragraphs: [
          'In Vienna, over 60% of residents live in city-owned or non-profit housing developments that are clean, architecturally renowned, and mixed-income, proving that high-quality shelter can be provisioned sustainably as a municipal public good.',
        ],
      },
    ],
    details: [
      'Himmelstein et al. (2020 Annals of Internal Medicine) found U.S. healthcare administrative costs total $812 billion annually—over four times Canada’s per capita rate.',
      'Average monthly rent in Vienna’s municipal social housing is roughly one-third of comparable private market rents in Paris or London.',
      'Universal provision eliminates the need for stigmatizing means-testing and intrusive welfare surveillance.',
    ],
    sources: [
      {
        title: 'Health Care Administrative Costs in the United States and Canada, 2017',
        url: 'https://www.acpjournals.org/doi/10.7326/M19-2818',
        publisher: 'Annals of Internal Medicine (Himmelstein, Campbell & Woolhandler)',
        year: '2020',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'Vienna’s Social Housing Model: A Key to Affordable Living',
        url: 'https://socialhousing.wien/',
        publisher: 'City of Vienna Housing Research',
        year: '2023',
        category: 'Watchdog / NGO',
      },
    ],
    tags: ['Housing & Healthcare', 'Labor & Welfare', 'Taxation & Fiscal'],
    era: '2020–Present',
    relatedIds: ['con-cap-rationing-queues'],
  },
  {
    id: 'con-cap-rationing-queues',
    parentId: 'thesis-cap-decommodification',
    kind: 'con',
    title: 'State Monopoly Provision Causes Non-Price Rationing and Sifles Innovation',
    summary:
      'Free public provision eliminates price mechanisms, leading inevitably to long waiting queues, physician shortages, and reduced investment in medical R&D.',
    sections: [
      {
        heading: 'The Inevitability of Rationing by Queue',
        paragraphs: [
          'When goods are provisioned at zero consumer point-of-sale price, quantity demanded vastly exceeds quantity supplied. In single-payer systems like Canada and the UK, this gap is managed through **rationing by wait time**: over 7 million patients currently await elective procedures on the NHS England waiting list, and cancer treatment wait times regularly exceed recommended clinical thresholds.',
        ],
      },
      {
        heading: 'Global R&D Free-Riding',
        paragraphs: [
          'The U.S. market-based healthcare system, despite its administrative flaws, finances the vast majority of global biomedical research and development. Price controls in Europe and Canada free-ride on pharmaceutical innovations funded by U.S. patent profits.',
        ],
      },
    ],
    details: [
      'NHS England waiting lists surpassed 7.6 million cases in 2024, with median wait times exceeding 14 weeks for standard surgeries.',
      'The United States contributes over 45% of total global medical and pharmaceutical research funding.',
      'Rent controls in Berlin and Stockholm produced multi-year waiting lists (up to 9–20 years in Stockholm) for municipal apartments.',
    ],
    sources: [
      {
        title: 'NHS Waiting Times: Referral to Treatment Statistics',
        url: 'https://www.england.nhs.uk/statistics/statistical-work-areas/rtt-waiting-times/',
        publisher: 'NHS England',
        year: '2024',
        category: 'Court / Official Record',
      },
      {
        title: 'Stockholm’s Decades-Long Wait for Rent-Controlled Housing',
        url: 'https://www.bbc.com/worklife/article/20160517-this-is-one-city-where-youll-never-find-a-home',
        publisher: 'BBC Worklife',
        year: '2016',
        category: 'Debate / Broadcast',
      },
    ],
    tags: ['Housing & Healthcare', 'Regulation & Markets', 'Economics'],
    era: '2016–Present',
    relatedIds: ['pro-cap-public-goods'],
  },

  // Under thesis-cap-nordic-flexicurity
  {
    id: 'pro-cap-nordic-capitalism',
    parentId: 'thesis-cap-nordic-flexicurity',
    kind: 'pro',
    title: 'Nordic Economies Succeed Through Free Enterprise and Competitive Markets',
    summary:
      'Scandinavian prosperity is built on light business regulations, open international trade, and strong property rights rather than state ownership.',
    sections: [
      {
        heading: 'Capitalism as the Prerequisite for Social Welfare',
        paragraphs: [
          'Former Danish Prime Minister Lars Løkke Rasmussen famously stated at Harvard: "I would like to make one thing clear. The Nordic model is not a socialist planned economy. The Nordic model is an expanded welfare state, which provides a high level of security for its citizens, but it is also a successful market economy with much freedom to pursue your dreams."',
          'Sweden, Norway, and Denmark maintain zero statutory minimum wages, low corporate tax rates (around 20%–22%), and private school voucher systems.',
        ],
      },
      {
        heading: 'Export Competitiveness and Dynamism',
        paragraphs: [
          'Nordic countries lead in global technological innovation per capita—producing global market leaders like Spotify, Volvo, Ericsson, and Novo Nordisk—powered by free-market entrepreneurship and integration into world trade.',
        ],
      },
    ],
    details: [
      'The World Bank Doing Business Index consistently places Denmark in the top 5 worldwide for ease of doing business.',
      'Sweden’s corporate income tax rate of 20.6% is lower than the U.S. federal-plus-state average.',
      'Danish flexicurity allows rapid reallocation of labor toward high-productivity export industries.',
    ],
    sources: [
      {
        title: 'Denmark’s Prime Minister on the Nordic Model (Harvard Kennedy School Lecture)',
        url: 'https://www.thelocal.dk/20151101/danish-pm-in-us-denmark-is-not-socialist',
        publisher: 'The Local / Harvard Institute of Politics',
        year: '2015',
        category: 'Debate / Broadcast',
      },
      {
        title: 'Index of Economic Freedom: Sweden and Denmark Profiles',
        url: 'https://www.heritage.org/index/',
        publisher: 'Heritage Foundation',
        year: '2024',
        category: 'Watchdog / NGO',
      },
    ],
    tags: ['Macroeconomics', 'Trade & Industry', 'Governance'],
    era: '2015–Present',
    relatedIds: ['con-cap-nordic-unreplicable'],
  },
  {
    id: 'con-cap-nordic-unreplicable',
    parentId: 'thesis-cap-nordic-flexicurity',
    kind: 'con',
    title: 'The Nordic Model Relies on Middle-Class Tax Exploitation and Unique Demographics',
    summary:
      'Nordic welfare models require heavy, regressive taxation on middle-income families and cannot easily be replicated in large, diverse continental nations.',
    sections: [
      {
        heading: 'Regressive VATs and High Middle-Class Income Taxes',
        paragraphs: [
          'Americans seeking Nordic-style social benefits often misunderstand the tax burden: Nordic governments levy high **25% Value Added Taxes** on all food and consumer goods, while the top marginal income tax rate (~55% to 60%) hits individuals earning just 120% of the median wage. A typical Swedish teacher or nurse pays over half their marginal income in taxes.',
        ],
      },
      {
        heading: 'Cultural Trust, Small Scale and Oil Endowments',
        paragraphs: [
          'Social trust researchers note that Nordic social cohesion pre-dates the modern welfare state. Furthermore, Norway’s sovereign wealth fund ($1.6 trillion) is funded by North Sea offshore oil extraction, making its fiscal cushion impossible to emulate without fossil fuel endowments.',
        ],
      },
    ],
    details: [
      'Denmark’s top marginal income tax rate of 55.9% applies to incomes above approximately $85,000.',
      'A 25% national VAT significantly increases consumer costs for working-class families across all Nordic countries.',
      'Norway’s Government Pension Fund Global holds over $300,000 per Norwegian citizen, derived from petroleum extraction.',
    ],
    sources: [
      {
        title: 'Taxing Wages 2023: Tax Burden on Labour in OECD Countries',
        url: 'https://www.oecd.org/en/publications/taxing-wages-2023_8c99fa4d-en.html',
        publisher: 'OECD',
        year: '2023',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'Norges Bank Investment Management: Fund Value and Performance',
        url: 'https://www.nbim.no/',
        publisher: 'Norges Bank',
        year: '2024',
        category: 'Court / Official Record',
      },
    ],
    tags: ['Taxation & Fiscal', 'Macroeconomics', 'Demographics'],
    era: '2023–Present',
    relatedIds: ['pro-cap-nordic-capitalism'],
  },

  // Under thesis-cap-calculation-planning
  {
    id: 'pro-cap-mises-impossibility',
    parentId: 'thesis-cap-calculation-planning',
    kind: 'pro',
    title: 'Mises’ Calculation Problem Proves Command Socialism Inevitably Fails',
    summary:
      'Without private property in capital and market price signals, socialist planners cannot calculate opportunity costs, leading to waste and totalitarian coercion.',
    sections: [
      {
        heading: 'The Impossibility of Rational Allocation Without Capital Markets',
        paragraphs: [
          'Ludwig von Mises’ 1920 paper proved an unbreakable logical theorem: to build a railroad, planners must decide whether to route it over a mountain (costing steel and concrete) or through a tunnel (costing drilling machinery and labor). Without market prices for capital assets determined by supply and demand, planners have no common denominator to weigh trade-offs.',
          'The historical record of the Soviet Gosplan—which fixed 24 million prices by decree—resulted in comical yet tragic absurdities: factories producing left shoes without rights, heavy chandeliers to fulfill weight quotas, and chronic food breadlines.',
        ],
      },
      {
        heading: 'The Inevitability of Political Coercion',
        paragraphs: [
          'As **Hayek** argued in *The Road to Serfdom*, because a planned economy cannot rely on voluntary market agreements, the state must compel individuals into designated careers and rationing lines, subordinating civil liberties to the collective plan.',
        ],
      },
    ],
    details: [
      'Mises (1920) proved economic calculation requires market-determined prices for intermediate capital goods.',
      'The Soviet Union experienced chronic shortages of over 1,000 basic consumer items throughout the 1970s and 1980s.',
      'Hayek’s "Road to Serfdom" showed how centralized economic control inevitably concentrates coercive political authority.',
    ],
    sources: [
      {
        title: 'Economic Calculation in the Socialist Commonwealth',
        url: 'https://mises.org/library/economic-calculation-socialist-commonwealth',
        publisher: 'Ludwig von Mises Institute (Ludwig von Mises)',
        year: '1920',
        category: 'Scholarship',
      },
      {
        title: 'The Road to Serfdom',
        url: 'https://press.uchicago.edu/ucp/books/book/chicago/R/bo3643751.html',
        publisher: 'University of Chicago Press (F. A. Hayek)',
        year: '1944',
        category: 'Scholarship',
      },
    ],
    tags: ['Macroeconomics', 'History', 'Philosophy & Ethics'],
    era: '1920–Present',
    relatedIds: ['con-cap-cybernetic-planning'],
  },
  {
    id: 'con-cap-cybernetic-planning',
    parentId: 'thesis-cap-calculation-planning',
    kind: 'con',
    title: 'Modern Computing and Logistics Make Democratic Cybernetic Planning Feasible',
    summary:
      'Multinational corporations already plan vast non-market supply chains internally; supercomputers and real-time big data can solve modern economic allocation.',
    sections: [
      {
        heading: 'Corporate Planning and Internal Non-Market Allocation',
        paragraphs: [
          'In *The People’s Republic of Walmart*, **Leigh Phillips and Michal Rozworski** point out that Walmart and Amazon operate some of the largest planned economies in human history internally. Walmart coordinates over $600 billion in goods across 10,000 suppliers without any internal price auctions between stores and warehouses, relying instead on real-time automated data and collaborative forecasting.',
        ],
      },
      {
        heading: 'Algorithmic Optimization in Labor-Time Units',
        paragraphs: [
          'Modern computer scientists demonstrate that with distributed sensors, RFID inventory tracking, and linear programming algorithms, supercomputers can solve millions of input-output equations in seconds, enabling transparent, democratic planning that optimizes for human welfare and ecological boundaries rather than private profit.',
        ],
      },
    ],
    details: [
      'Walmart and Amazon manage global logistics networks internally using centralized algorithmic planning rather than internal price mechanisms.',
      'Cockshott & Cottrell demonstrated that modern supercomputers can solve economy-wide linear programming input-output matrices within minutes.',
      'Chile’s 1971–1973 Cybersyn project successfully pioneered telex-based real-time industrial coordination under Salvador Allende.',
    ],
    sources: [
      {
        title: 'The People’s Republic of Walmart',
        url: 'https://www.versobooks.com/en-gb/products/636-the-people-s-republic-of-walmart',
        publisher: 'Verso Books (Leigh Phillips & Michal Rozworski)',
        year: '2019',
        category: 'Scholarship',
      },
      {
        title: 'Cybernetic Revolutionaries: Technology and Politics in Allende’s Chile',
        url: 'https://mitpress.mit.edu/9780262525961/cybernetic-revolutionaries/',
        publisher: 'MIT Press (Eden Medina)',
        year: '2011',
        category: 'Scholarship',
      },
    ],
    tags: ['AI & Technology', 'Macroeconomics', 'History'],
    era: '1971–Present',
    relatedIds: ['pro-cap-mises-impossibility'],
  },
];

export const capitalismSocialismDataset: DebateGraphDataset = {
  id: 'capitalism-socialism',
  version: '1.0.0',
  shortTitle: 'Capitalism vs. Socialism',
  title: 'Capitalism vs. Democratic Socialism',
  subtitle: 'Free-market capital allocation & prosperity vs. wealth redistribution & democratic ownership',
  searchPlaceholder: 'Search Hayek, Piketty, Mondragon, Nordic model, calculation debate... (/)',
  epistemologyNote:
    'This graph models the debate across classical, Austrian, Marxist, institutional, and social-democratic schools of economics. Claims are linked to peer-reviewed econometrics, historical tax registers, and primary texts from the Socialist Calculation debate to modern Nordic policy evaluations.',
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
    'Philosophy & Ethics',
    'History',
    'AI & Technology',
    'Human Rights',
    'Demographics',
  ],
  shortPillarLabels: {
    'pillar-cap-markets': '1. Markets & Innovation',
    'pillar-cap-inequality': '2. Inequality & Exploitation',
    'pillar-cap-socialism': '3. Democratic Socialism & Co-ops',
    'pillar-cap-nordic': '4. Nordic Model vs. Planning',
  },
  lastUpdated: '2026-11',
  nodes: [rootNode, ...pillarNodes, ...thesisNodes, ...proConNodes],
};
