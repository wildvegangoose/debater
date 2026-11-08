import { DebateGraphDataset } from '../../types/debate';

export const immigrationBordersDataset: DebateGraphDataset = {
  id: 'immigration-borders',
  version: '1.0.0',
  shortTitle: 'Immigration & Borders',
  title: 'Immigration, National Sovereignty & Border Security',
  subtitle: 'Economic growth & humanitarian asylum vs. territorial sovereignty & social assimilation',
  searchPlaceholder: 'Search border security, open borders, Bryan Caplan, Goodhart, Borjas, asylum, H-1B...',
  epistemologyNote:
    'Immigration policy is contested across divergent economic, legal, and sociological methodologies: market-liberal and cosmopolitan ethicists prioritize global GDP gains, demographic revitalization, and universal human rights to asylum; national-conservative and communitarian theorists prioritize state sovereignty, the rule of law, working-class wage protection, and the civic absorptive capacity of host nations.',
  availableTags: [
    'Demographics',
    'Economics',
    'Labor & Welfare',
    'Human Rights',
    'International Law',
    'Governance',
    'Civil Liberties',
    'Philosophy & Ethics',
    'Empirical Studies',
  ],
  shortPillarLabels: {
    'pillar-imm-growth': '1. Economic Dynamism',
    'pillar-imm-sovereignty': '2. Sovereign Borders',
    'pillar-imm-cohesion': '3. Social Cohesion',
    'pillar-imm-humanitarian': '4. Humanitarian Asylum',
  },
  lastUpdated: '2026-03-30',
  nodes: [
    // -------------------------------------------------------------
    // ROOT NODE
    // -------------------------------------------------------------
    {
      id: 'root-immigration',
      parentId: null,
      kind: 'root',
      title: 'Immigration, National Sovereignty & Border Security: Economic Vitality vs. Social Cohesion',
      summary:
        'A comprehensive dialectical map of immigration, border enforcement, and asylum policy, contrasting arguments for economic mobility and humanitarian sanctuary against the imperatives of territorial sovereignty, wage protection, and municipal absorptive capacity.',
      sections: [
        {
          heading: 'The Global Collision Over Borders and Mobility',
          paragraphs: [
            'Across the democratic world, immigration has emerged as the most politically volatile and socially transformative issue of the 21st century. High-volume migration touches on the core definitions of national sovereignty: who belongs to a political community, who possesses the right to enter and work within its borders, and how a nation reconciles universal humanitarian duties toward refugees with particularist civic obligations to its own citizens.',
            'In landmark public debates hosted by the **Oxford Union** and **Open to Debate (formerly Intelligence Squared)**, classical liberal economist **Bryan Caplan** (*Open Borders: The Science and Ethics of Immigration*) argued that borders represent an arbitrary moral lottery of birth that artificially depresses global wealth, whereas communitarian author **David Goodhart** (*The Road to Somewhere*) and Center for Immigration Studies director **Mark Krikorian** (*The New Case Against Immigration*) maintained that democratic self-governance and social welfare systems are fundamentally unsustainable without strict, enforced borders and culturally managed assimilation.',
          ],
        },
        {
          heading: 'Four Contested Pillars of Modern Migration',
          paragraphs: [
            'This dataset organizes the immigration dialectic across four balanced pillars: First, **economic dynamism and demographic replenishment**, contrasting claims of entrepreneurial innovation and pension solvency (**Michael Clemens**) against concerns over wage suppression for non-college-educated native workers (**George Borjas**); Second, **sovereign border control and the rule of law**, analyzing physical border barriers, cartel smuggling deterrents, and queue-jumping.',
            'Third, **social cohesion and municipal absorptive capacity**, examining fiscal strain on municipal schools, emergency shelters, and affordable housing alongside **Robert Putnam’s** findings on social trust in diverse communities; and Fourth, **humanitarian asylum and refugee ethics**, evaluating the durability of the **1951 Geneva Refugee Convention**, the peremptory norm of non-refoulement, and emerging challenges from climate-induced displacement.',
          ],
        },
      ],
      details: [
        '**Landmark Debates Integrated:** Oxford Union and Open to Debate forums featuring Bryan Caplan, David Goodhart, and Mark Krikorian.',
        '**Global Economic Stakes:** Economic estimates suggest lifting all global migration restrictions could double world GDP ($100 trillion gain).',
        '**Sovereign Enforceability:** Over 10 million irregular encounters along the US southwest border between 2021 and 2024 strained municipal budgets.',
        '**International Legal Obligations:** Tension between 1951 Geneva Convention asylum rights and state prerogatives to prevent systemic abuse.',
      ],
      sources: [
        {
          title: 'Open to Debate: Let\'s Open the Borders (Bryan Caplan vs. Mark Krikorian)',
          url: 'https://opentodebate.org/debate/lets-open-the-borders/',
          publisher: 'Open to Debate (formerly Intelligence Squared US)',
          year: '2020',
          category: 'Debate / Broadcast',
        },
        {
          title: 'Open Borders: The Science and Ethics of Immigration',
          url: 'https://us.macmillan.com/books/9781250215628/openborders',
          publisher: 'First Second / Macmillan / Bryan Caplan',
          year: '2019',
          category: 'Scholarship',
        },
        {
          title: 'The Road to Somewhere: The Populist Revolt and the Future of Politics',
          url: 'https://www.hurstpublishers.com/book/the-road-to-somewhere/',
          publisher: 'Hurst Publishers / David Goodhart',
          year: '2017',
          category: 'Scholarship',
        },
        {
          title: 'We Wanted Workers: Unraveling the Immigration Narrative',
          url: 'https://wwnorton.com/books/9780393249019',
          publisher: 'W. W. Norton & Company / George J. Borjas',
          year: '2016',
          category: 'Scholarship',
        },
      ],
      tags: ['Demographics', 'Economics', 'Human Rights', 'International Law', 'Governance'],
      era: '1951–2026',
      relatedIds: ['pillar-imm-growth', 'pillar-imm-sovereignty', 'pillar-imm-cohesion', 'pillar-imm-humanitarian'],
    },

    // -------------------------------------------------------------
    // PILLAR 1: ECONOMIC DYNAMISM & DEMOGRAPHICS
    // -------------------------------------------------------------
    {
      id: 'pillar-imm-growth',
      parentId: 'root-immigration',
      kind: 'pillar',
      title: 'Pillar 1: Economic Dynamism, Labor Supply & Demographic Replenishment',
      summary:
        'Analyzes the macroeconomic case: immigration fuels innovation, powers high-tech startups, addresses chronic agricultural/healthcare labor shortages, and rebalances aging dependency ratios.',
      sections: [
        {
          heading: 'Unlocking Global Productive Capacity',
          paragraphs: [
            'In landmark development economics research, **Michael Clemens** (*Economics and Emigration: Trillion-Dollar Bills on the Sidewalk*) demonstrated that moving labor from low-productivity developing economies to high-productivity capital-rich economies generates immense welfare gains. When a worker migrates from Haiti to Miami or from Ghana to London, their productivity and wages increase by 500% to 1,000% without taking capital away from native workers, creating massive consumer demand.',
            'Furthermore, in aging post-industrial economies suffering from fertility rates far below the 2.1 replacement level, immigration acts as an indispensable demographic life-support system. Without younger immigrant workers, social security pension systems and healthcare infrastructure face fiscal insolvency.',
          ],
        },
        {
          heading: 'The High-Skill Entrepreneurial Multiplier',
          paragraphs: [
            'Immigrants play an extraordinary role in cutting-edge technological innovation. Studies by the National Foundation for American Policy show that over half of American "unicorn" startups valued at over $1 billion were founded or co-founded by immigrants, generating hundreds of thousands of high-wage jobs.',
          ],
        },
      ],
      details: [
        '**Trillion-Dollar Bills Concept:** Michael Clemens\' finding that eliminating labor mobility barriers could double global output.',
        '**55% of US Billion-Dollar Startups:** Founded or co-founded by immigrants (e.g., Moderna, Stripe, Alphabet, Nvidia).',
        '**Demographic Aging Crisis:** Developed nations face inverted dependency ratios with fewer workers supporting retirees.',
        '**Labor Market Complements:** Foreign-born labor disproportionately concentrates in critical agricultural harvesting, nursing care, and STEM.',
      ],
      sources: [
        {
          title: 'Economics and Emigration: Trillion-Dollar Bills on the Sidewalk?',
          url: 'https://www.aeaweb.org/articles?id=10.1257/jep.25.3.83',
          publisher: 'Journal of Economic Perspectives / Michael A. Clemens',
          year: '2011',
          category: 'Empirical / Economic Study',
        },
        {
          title: 'Immigrant Entrepreneurs and Billion-Dollar Companies',
          url: 'https://nfap.com/research/immigrant-entrepreneurs-and-billion-dollar-companies/',
          publisher: 'National Foundation for American Policy (NFAP)',
          year: '2022',
          category: 'Watchdog / NGO',
        },
        {
          title: 'The Economic and Fiscal Consequences of Immigration',
          url: 'https://nap.nationalacademies.org/catalog/23550/the-economic-and-fiscal-consequences-of-immigration',
          publisher: 'National Academies of Sciences, Engineering, and Medicine (NASEM)',
          year: '2017',
          category: 'Empirical / Economic Study',
        },
      ],
      tags: ['Economics', 'Demographics', 'Labor & Welfare'],
      era: '2011–2026',
      relatedIds: ['thesis-imm-gdp-entrepreneurship', 'thesis-imm-demographic-pyramid', 'pillar-imm-sovereignty'],
    },

    // THESIS 1.1
    {
      id: 'thesis-imm-gdp-entrepreneurship',
      parentId: 'pillar-imm-growth',
      kind: 'thesis',
      title: 'Thesis 1.1: High-Skill Innovation & Entrepreneurial Growth vs. Wage Suppression',
      summary:
        'Immigrants disproportionately patent inventions and launch high-growth companies, but critics argue guest-worker programs are abused to undercut domestic wages.',
      sections: [
        {
          heading: 'The Immigrant Innovation Engine',
          paragraphs: [
            'Empirical research by economists **Shai Bernstein and Rebecca Diamond** shows that while immigrants comprise 16% of the U.S. workforce, they are responsible for 36% of total U.S. patents produced since 1990 and over 40% of Nobel Prizes awarded to Americans in chemistry, medicine, and physics. High-skill migration produces positive knowledge spillovers that increase the productivity of entire regional ecosystems like Silicon Valley and the Boston biotech cluster.',
            'Furthermore, the Stanford Center for Entrepreneurial Studies found that immigrant founders establish companies at twice the rate of native-born citizens, driving creative destruction and technological commercialization.',
          ],
        },
        {
          heading: 'The Corporate Exploitation of Guest-Worker Visas',
          paragraphs: [
            'Conversely, critics like **Ron Hira** (*Outsourcing America*) and labor organizations demonstrate that the **H-1B guest-worker visa program** has been heavily co-opted by commercial IT outsourcing firms. Foreign workers bound to their sponsoring employer face monopsonistic exploitation, while domestic tech workers are laid off or forced to train their lower-wage foreign replacements.',
          ],
        },
      ],
      details: [
        '**36% of US Patents:** Produced by foreign-born inventors, driving high-tech productivity growth.',
        '**40%+ of American Science Nobel Prizes:** Awarded to immigrant scientists since 2000.',
        '**H-1B Outsourcing Abuses:** Large tech staffing companies capture thousands of visas to import lower-wage contractors.',
      ],
      sources: [
        {
          title: 'The Contribution of High-Skilled Immigrants to Innovation in the United States',
          url: 'https://www.nber.org/papers/w30797',
          publisher: 'National Bureau of Economic Research (NBER)',
          year: '2022',
          category: 'Empirical / Economic Study',
        },
        {
          title: 'The Impact of High-Skilled Immigration on U.S. Workers: Testimony Before the Senate Judiciary Committee',
          url: 'https://www.judiciary.senate.gov/imo/media/doc/02-25-16%20Hira%20Testimony.pdf',
          publisher: 'US Senate Committee on the Judiciary / Ron Hira',
          year: '2016',
          category: 'Court / Official Record',
        },
      ],
      tags: ['Economics', 'Science & Innovation', 'Labor & Welfare'],
      era: '2016–2024',
      relatedIds: ['pro-imm-founder-dynamism', 'con-imm-h1b-wage-suppression'],
    },

    // PRO 1.1.1
    {
      id: 'pro-imm-founder-dynamism',
      parentId: 'thesis-imm-gdp-entrepreneurship',
      kind: 'pro',
      title: 'Evidence: Immigrant Leadership in Fortune 500 Startups & Artificial Intelligence',
      summary:
        'Data reveals that nearly 45% of Fortune 500 companies were founded by immigrants or their children, and leading AI pioneers (DeepMind, OpenAI, Google) feature immigrant founders.',
      sections: [
        {
          heading: 'Unrivaled Entrepreneurial Contribution to American GDP',
          paragraphs: [
            'A landmark study by the **Center for American Entrepreneurship** and the **Brookings Institution** revealed that **44.8% of companies on the 2023 Fortune 500 list** were founded by immigrants or the children of immigrants—including Apple (Steve Jobs, son of a Syrian immigrant), Alphabet (Sergey Brin, born in Russia), and Tesla/SpaceX (Elon Musk, born in South Africa). These firms generated over $8.1 trillion in annual revenue and employed over 14.8 million people.',
            'In the frontier field of **Artificial Intelligence**, the dominance of immigrant talent is even more pronounced: foundational AI institutions—from Nvidia (Jensen Huang, Taiwan) to OpenAI (Ilya Sutskever, Russia/Israel) and Google DeepMind (Demis Hassabis, Cyprus/Singapore)—rely decisively on international research talent attracted to open academic systems.',
          ],
        },
        {
          heading: 'Global Geopolitical Competition for Human Capital',
          paragraphs: [
            'In the strategic competition with authoritarian powers like China, America’s greatest asymmetric advantage is its unique ability to attract the world’s top mathematical, scientific, and engineering minds. Restricting high-skill immigration forfeits this leadership to rival nations.',
          ],
        },
      ],
      details: [
        '**44.8% of Fortune 500 Firms:** Founded by immigrants or their direct children, employing 14.8 million workers.',
        '**AI Frontier Leadership:** Nvidia, OpenAI, and DeepMind anchored by foreign-born founders and lead researchers.',
        '**Asymmetric Brain Gain:** The US attracts more international graduate STEM students than the rest of the G7 combined.',
      ],
      sources: [
        {
          title: 'The Great American Economic Engine: Immigrants in the Fortune 500',
          url: 'https://www.newamericaneconomy.org/rankings/fortune500/',
          publisher: 'American Immigration Council',
          year: '2023',
          category: 'Watchdog / NGO',
        },
        {
          title: 'MacroPolo: The Global AI Talent Tracker 2.0',
          url: 'https://macropolo.org/digital-projects/the-global-ai-talent-tracker/',
          publisher: 'Paulson Institute MacroPolo',
          year: '2023',
          category: 'Empirical / Economic Study',
        },
      ],
      tags: ['Economics', 'Science & Innovation', 'Trade & Industry'],
      era: '2023–2024',
      relatedIds: ['thesis-imm-gdp-entrepreneurship', 'con-imm-h1b-wage-suppression'],
    },

    // CON 1.1.2
    {
      id: 'con-imm-h1b-wage-suppression',
      parentId: 'thesis-imm-gdp-entrepreneurship',
      kind: 'con',
      title: 'Counter-Argument: The H-1B Program as Corporate Wage-Depression & Indentured Labor',
      summary:
        'Investigative audits show that major corporations and staffing firms use temporary guest visas to replace domestic tech workers at 20–30% lower wages, locking foreign labor into indentured status.',
      sections: [
        {
          heading: 'The Distortion of the H-1B Skilled Worker Program',
          paragraphs: [
            'While the H-1B visa was created to recruit "the best and the brightest" for specialized roles when domestic labor is unavailable, official **U.S. Citizenship and Immigration Services (USCIS)** data reveals that the overwhelming majority of H-1B visas are allocated to commercial IT outsourcing conglomerates (such as Infosys, Tata, and Cognizant) for entry-level and routine software programming.',
            'Economic research by the **Economic Policy Institute (EPI)** documents that over **60% of H-1B workers are paid below local median market wages** for their occupational classifications. Because their legal status is tied directly to their employer, guest workers cannot freely negotiate wages or switch jobs, creating an unequal tier of indentured labor that chills unionization and wage growth for native software engineers.',
          ],
        },
        {
          heading: 'Forced Replacement and Non-Disclosure Agreements',
          paragraphs: [
            'High-profile scandals at companies like **Walt Disney World and Southern California Edison** exposed domestic American IT workers being forced to train their foreign H-1B replacements under threat of forfeiting severance pay, disproving the claim that guest-worker programs merely fill labor shortages.',
          ],
        },
      ],
      details: [
        '**60% Paid Below Median Market Wage:** EPI audit revealed employers routinely classify H-1B workers at lowest statutory prevailing wage levels.',
        '**Monopsonistic Visa Tying:** Inability to change employers freely strips foreign workers of basic bargaining leverage.',
        '**Displacement of Mid-Career Domestic Engineers:** Corporate practice of replacing experienced domestic tech workers with younger guest workers.',
      ],
      sources: [
        {
          title: 'H-1B Visas and Prevailing Wage Levels: A Flawed System That Depresses Wages',
          url: 'https://www.epi.org/publication/h-1b-visas-and-prevailing-wage-levels/',
          publisher: 'Economic Policy Institute (EPI)',
          year: '2020',
          category: 'Watchdog / NGO',
        },
        {
          title: 'Department of Labor Wage and Hour Division: H-1B Enforcement Data',
          url: 'https://www.dol.gov/agencies/whd/immigration/h1b',
          publisher: 'US Department of Labor',
          year: '2023',
          category: 'Court / Official Record',
        },
      ],
      tags: ['Labor & Welfare', 'Economics', 'Empirical Studies'],
      era: '2016–2023',
      relatedIds: ['pro-imm-founder-dynamism', 'thesis-imm-gdp-entrepreneurship'],
    },

    // THESIS 1.2
    {
      id: 'thesis-imm-demographic-pyramid',
      parentId: 'pillar-imm-growth',
      kind: 'thesis',
      title: 'Thesis 1.2: Demographic Aging: Replenishing Social Security vs. Low-Skill Fiscal Costs',
      summary:
        'Immigrants rebalance aging workforces and fund pensions, but low-skilled immigration can impose net fiscal costs on municipal tax-funded public services.',
      sections: [
        {
          heading: 'The Demographic Inversion of Developed Societies',
          paragraphs: [
            'Post-industrial nations across Europe, East Asia, and North America are experiencing catastrophic birth rate collapses: fertility rates in South Korea (0.7), Italy (1.2), Japan (1.3), and the US (1.6) are far below the 2.1 replacement rate. In 1960, there were 5.1 working Americans for every Social Security beneficiary; by 2030, that ratio will drop to 2.2 workers per retiree.',
            'Without sustained immigration of working-age adults who pay payroll and income taxes, sovereign debt burdens will escalate and state pension systems will face benefit cuts or insolvency.',
          ],
        },
        {
          heading: 'The Borjas Low-Skill Fiscal Divergence',
          paragraphs: [
            'Conversely, Harvard labor economist **George Borjas** and the **National Academies of Sciences (NASEM)** show that the fiscal impact of immigration varies sharply by education level: while high-skill immigrants contribute hundreds of thousands of dollars in net lifetime taxes, immigrants lacking a high school diploma consume more in municipal education, healthcare, and safety-net benefits than they pay in local taxes.',
          ],
        },
      ],
      details: [
        '**Demographic Inversion:** Worker-to-retiree ratio dropping from 5:1 to 2.2:1 in developed economies.',
        '**Fertility Collapse:** Birth rates across G7 countries far below the 2.1 replacement threshold.',
        '**NASEM Fiscal Divergence:** College-educated immigrants provide +$500k net lifetime fiscal benefit; non-high-school immigrants generate -$109k deficit.',
      ],
      sources: [
        {
          title: 'The Economic and Fiscal Consequences of Immigration',
          url: 'https://nap.nationalacademies.org/catalog/23550/the-economic-and-fiscal-consequences-of-immigration',
          publisher: 'National Academies of Sciences, Engineering, and Medicine (NASEM)',
          year: '2017',
          category: 'Empirical / Economic Study',
        },
        {
          title: 'We Wanted Workers: Unraveling the Immigration Narrative',
          url: 'https://wwnorton.com/books/9780393249019',
          publisher: 'W. W. Norton & Company / George J. Borjas',
          year: '2016',
          category: 'Scholarship',
        },
      ],
      tags: ['Demographics', 'Economics', 'Labor & Welfare'],
      era: '2016–2024',
      relatedIds: ['pro-imm-dependency-ratio', 'con-imm-low-skill-fiscal-drain'],
    },

    // PRO 1.2.1
    {
      id: 'pro-imm-dependency-ratio',
      parentId: 'thesis-imm-demographic-pyramid',
      kind: 'pro',
      title: 'Evidence: Social Security Administration Actuarial Projections & Fertility Shocks',
      summary:
        'Official Social Security Board of Trustees reports demonstrate that higher immigration levels directly extend the solvency of the Social Security and Medicare trust funds.',
      sections: [
        {
          heading: 'Actuarial Proof of Immigration’s Fiscal Cushion',
          paragraphs: [
            'In the annual **2023 Social Security and Medicare Trustees Reports**, actuaries modeled the fiscal trajectory of the Old-Age and Survivors Insurance (OASI) Trust Fund under varying immigration assumptions. The report concluded that higher net immigration directly improves the long-term actuarial balance: each additional 100,000 net immigrants per year improves the 75-year actuarial balance by 0.08% of taxable payroll.',
            'Because the median immigrant arrives in their twenties or early thirties—having been educated and raised at the expense of their home country—they immediately enter peak taxable working years, contributing payroll taxes for decades before qualifying for retirement benefits.',
          ],
        },
        {
          heading: 'Staving Off Population Contraction',
          paragraphs: [
            'U.S. Census Bureau projections indicate that by 2040, without net international immigration, the total population of the United States would begin contracting, shrinking the consumer market and domestic labor force, as already witnessed in Japan and parts of Eastern Europe.',
          ],
        },
      ],
      details: [
        '**Social Security Actuarial Findings:** Higher immigration directly extends trust fund solvency and delays benefit depletion.',
        '**Prime Working-Age Influx:** Median immigrant arrives in their twenties, contributing 30–40 years of taxable labor before retirement.',
        '**Preventing Economic Stagnation:** U.S. Census Bureau confirms international migration is the sole driver of net US workforce growth.',
      ],
      sources: [
        {
          title: 'The 2023 Annual Report of the Board of Trustees of the Federal Old-Age and Survivors Insurance and Federal Disability Insurance Trust Funds',
          url: 'https://www.ssa.gov/oact/tr/2023/',
          publisher: 'Social Security Administration (SSA)',
          year: '2023',
          category: 'Court / Official Record',
        },
        {
          title: 'U.S. Census Bureau 2023 National Population Projections',
          url: 'https://www.census.gov/newsroom/press-releases/2023/population-projections.html',
          publisher: 'US Census Bureau',
          year: '2023',
          category: 'Empirical / Economic Study',
        },
      ],
      tags: ['Demographics', 'Economics', 'Labor & Welfare'],
      era: '2023–2024',
      relatedIds: ['thesis-imm-demographic-pyramid', 'con-imm-low-skill-fiscal-drain'],
    },

    // CON 1.2.2
    {
      id: 'con-imm-low-skill-fiscal-drain',
      parentId: 'thesis-imm-demographic-pyramid',
      kind: 'con',
      title: 'Counter-Argument: Net Municipal Fiscal Deficits & Wage Compression on Low-Skilled Natives',
      summary:
        'NASEM and Federal Reserve studies show that low-skilled immigration compresses wages for native high-school dropouts and creates severe net tax deficits for municipal governments.',
      sections: [
        {
          heading: 'Wage Compression for the Most Vulnerable Native Workers',
          paragraphs: [
            'In his influential econometric analysis *The Labor Market Impact of High-Skill and Low-Skill Immigrants*, Harvard economist **George Borjas** demonstrated that immigration is not an unalloyed net positive; it creates distinct economic winners and losers. By increasing the supply of non-high-school-educated workers by 10% or more, low-skilled immigration reduced the real wages of native-born high school dropouts and prior immigrant cohorts by **3% to 5%**.',
            'While business owners and affluent urban consumers benefit from cheaper landscaping, childcare, and construction, the economic burden falls squarely on working-class citizens who face heightened wage competition.',
          ],
        },
        {
          heading: 'The Asymmetric Federal-Local Tax Mismatch',
          paragraphs: [
            'The **National Academies of Sciences (NASEM)** 500-page fiscal study revealed a structural mismatch: while the federal government collects income and payroll taxes from immigrants, municipal and state governments bear the heavy local costs of public schooling ($14,000 per pupil annually), emergency healthcare, and municipal policing, creating chronic local fiscal deficits.',
          ],
        },
      ],
      details: [
        '**3–5% Wage Reduction:** Borjas econometric findings showing wage compression concentrated on native high school dropouts.',
        '**Winners and Losers Dynamic:** Capital owners capture surplus while working-class manual laborers face depressed hourly earnings.',
        '**Federal-Municipal Tax Mismatch:** Washington captures federal payroll taxes while municipal taxpayers shoulder local school and hospital costs.',
      ],
      sources: [
        {
          title: 'The Labor Demand Curve Is Downward Sloping: Reexamining the Impact of Immigration on the Labor Market',
          url: 'https://academic.oup.com/qje/article-abstract/118/4/1335/1915494',
          publisher: 'Quarterly Journal of Economics / George J. Borjas',
          year: '2003',
          category: 'Scholarship',
        },
        {
          title: 'NASEM Chapter 8: The Fiscal Impact of Immigration on State and Local Budgets',
          url: 'https://nap.nationalacademies.org/read/23550/chapter/11',
          publisher: 'National Academies Press',
          year: '2017',
          category: 'Empirical / Economic Study',
        },
      ],
      tags: ['Economics', 'Labor & Welfare', 'Empirical Studies'],
      era: '2003–2017',
      relatedIds: ['pro-imm-dependency-ratio', 'thesis-imm-demographic-pyramid'],
    },

    // -------------------------------------------------------------
    // PILLAR 2: SOVEREIGN BORDER CONTROL & RULE OF LAW
    // -------------------------------------------------------------
    {
      id: 'pillar-imm-sovereignty',
      parentId: 'root-immigration',
      kind: 'pillar',
      title: 'Pillar 2: Sovereign Border Control, Deterrence & The Rule of Law',
      summary:
        'Focuses on the state’s fundamental duty of territorial sovereignty, dismantling transnational cartel human smuggling cartels, enforcing physical border security, and upholding orderly legal processes.',
      sections: [
        {
          heading: 'The Sovereign Right to Territorial Integrity',
          paragraphs: [
            'In classical political theory from Thomas Hobbes to Max Weber, the defining characteristic of a sovereign state is the monopoly on the legitimate use of physical force and the absolute prerogative to control its territorial borders. A government that cannot determine who enters and resides within its borders surrenders the core attribute of sovereignty.',
            'As conservative thinkers like **Mark Krikorian** emphasize, border security is not anti-immigrant animus, but the indispensable foundation of democratic order. Without secure physical borders, immigration policy ceases to be a deliberate legislative choice and becomes outsourced to the whims of transnational human smuggling syndicates.',
          ],
        },
        {
          heading: 'Dismantling the Cartel Smuggling Enterprise',
          paragraphs: [
            'The multi-billion-dollar human smuggling trade across the Americas and the Mediterranean is run by violent organized crime cartels (such as the Sinaloa Cartel and CJNG in Mexico). These cartels exploit migrants through extortion, kidnapping, sexual violence, and forced drug trafficking, turning uncontrolled migration corridors into humanitarian corridors of abuse.',
          ],
        },
      ],
      details: [
        '**Weberian Monopoly on Borders:** Control over physical entry is the essential definition of state sovereignty.',
        '**$13 Billion Cartel Smuggling Industry:** Transnational criminal cartels monetize irregular border crossings through lethal smuggling pipelines.',
        '**Deterrence as Protection:** Enforcing borders eliminates the market incentive for dangerous migrant journeys through deserts and jungles.',
        '**Systemic Integrity:** Preserves the legitimacy of legal immigration queues by punishing unlawful evasion.',
      ],
      sources: [
        {
          title: 'The New Case Against Immigration: Both Legal and Illegal',
          url: 'https://us.macmillan.com/books/9781595230522/thenewcaseagainstimmigration',
          publisher: 'Sentinel / Penguin / Mark Krikorian',
          year: '2008',
          category: 'Scholarship',
        },
        {
          title: 'U.S. Customs and Border Protection: Southwest Border Enforcement Encounters',
          url: 'https://www.cbp.gov/newsroom/stats/southwest-land-border-encounters',
          publisher: 'US Customs and Border Protection (CBP)',
          year: '2024',
          category: 'Court / Official Record',
        },
        {
          title: 'UNODC Global Study on Smuggling of Migrants',
          url: 'https://www.unodc.org/unodc/en/data-and-analysis/glosom.html',
          publisher: 'United Nations Office on Drugs and Crime (UNODC)',
          year: '2018',
          category: 'Watchdog / NGO',
        },
      ],
      tags: ['National Security', 'Governance', 'International Law'],
      era: '2008–2026',
      relatedIds: ['thesis-imm-territorial-integrity', 'thesis-imm-rule-of-law-integrity', 'pillar-imm-cohesion'],
    },

    // THESIS 2.1
    {
      id: 'thesis-imm-territorial-integrity',
      parentId: 'pillar-imm-sovereignty',
      kind: 'thesis',
      title: 'Thesis 2.1: Physical Border Enforcement: Deterrence vs. Humanitarian Hazards',
      summary:
        'Physical barriers, Title 42 expulsions, and electronic surveillance deter irregular crossings, but critics argue they merely redirect migrants into lethal wilderness corridors.',
      sections: [
        {
          heading: 'The Deterrent Power of Enforced Physical Infrastructure',
          paragraphs: [
            'Proponents of border enforcement argue that physical barriers—combined with autonomous surveillance towers, aerostats, and rapid repatriation agreements—are highly effective deterrents. Data from the **U.S. Border Patrol** shows that in sectors where modern steel bollard barriers were constructed (such as Yuma, Arizona), illicit crossings dropped by over 80% along the barrier line.',
            'Furthermore, policies like **Title 42 public health expulsions** and the **Migrant Protection Protocols ("Remain in Mexico")** demonstrated that when migrants know they cannot be released into the interior pending multi-year court hearings, the incentive to pay cartels thousands of dollars evaporates.',
          ],
        },
        {
          heading: 'The "Prevention Through Deterrence" Paradox',
          paragraphs: [
            'Conversely, human rights researchers document that aggressive enforcement at urban ports of entry does not stop migration; it simply pushes desperate people into hostile terrain like the Sonoran Desert or the treacherous Darién Gap, resulting in thousands of migrant deaths from dehydration, hypothermia, and drowning.',
          ],
        },
      ],
      details: [
        '**Yuma Sector Barrier Data:** 80%+ reduction in illicit crossings in areas with integrated steel bollard barriers.',
        '**"Remain in Mexico" Deterrent:** Requiring asylum applicants to await court dates in Mexico eliminated interior release incentives.',
        '**Sonoran Desert Fatalities:** Over 4,000 migrant remains recovered in southern Arizona since 2000 due to harsh crossing corridors.',
      ],
      sources: [
        {
          title: 'CBP Border Wall System Fact Sheet and Operational Impact',
          url: 'https://www.cbp.gov/border-security/along-us-borders/border-wall-system',
          publisher: 'US Customs and Border Protection',
          year: '2021',
          category: 'Court / Official Record',
        },
        {
          title: 'Left to Die: Border Patrol, Search and Rescue, and the Crisis of Disappearance',
          url: 'https://humaneborders.org/migrant-death-mapping/',
          publisher: 'Humane Borders & No More Deaths',
          year: '2021',
          category: 'Watchdog / NGO',
        },
      ],
      tags: ['National Security', 'Human Rights', 'Governance'],
      era: '2020–2024',
      relatedIds: ['pro-imm-enforcement-deterrence', 'con-imm-enforcement-humanitarian-cost'],
    },

    // PRO 2.1.1
    {
      id: 'pro-imm-enforcement-deterrence',
      parentId: 'thesis-imm-territorial-integrity',
      kind: 'pro',
      title: 'Evidence: The Operation Sovereign Borders Australian Model',
      summary:
        'Australia’s 2013 "Operation Sovereign Borders" policy of offshore processing and maritime interdiction completely stopped maritime smuggling boats and eliminated at-sea drownings.',
      sections: [
        {
          heading: 'Ending the Lethal Maritime Smuggling Pipeline',
          paragraphs: [
            'Between 2008 and 2013, over 50,000 irregular migrants boarded unseaworthy wooden fishing vessels from Indonesia to reach Australia, resulting in an estimated **1,200 migrant drownings at sea**. In September 2013, the Australian government implemented **Operation Sovereign Borders (OSB)**, a zero-tolerance military-led border security policy with a strict rule: no one who arrived by boat without a visa would ever be settled in Australia.',
            'Boats intercepted at sea were safely turned back to Indonesian waters, while others were transferred to regional offshore processing facilities on Nauru and Papua New Guinea. Within months, maritime smuggling arrivals collapsed to virtually zero, completely dismantling the criminal syndicate business model and ending tragic mass drownings at sea.',
          ],
        },
        {
          heading: 'Restoring Democratic Confidence in Legal Migration',
          paragraphs: [
            'Australian officials argue that securing the maritime frontier allowed Australia to maintain one of the highest per-capita legal immigration and formal humanitarian resettlement programs in the developed world, with strong bipartisan public support.',
          ],
        },
      ],
      details: [
        '**Zero Boat Arrivals:** Operation Sovereign Borders reduced illegal maritime arrivals from hundreds per week to zero.',
        '**Halting Sea Drownings:** Eliminated the recurring maritime tragedies that claimed 1,200 lives between 2008 and 2013.',
        '**Sustaining High Legal Intake:** Australia maintained robust legal intake of 190,000+ vetted permanent immigrants annually.',
      ],
      sources: [
        {
          title: 'Operation Sovereign Borders: Australian Department of Home Affairs Operational Updates',
          url: 'https://www.homeaffairs.gov.au/about-us/our-portfolios/national-security/operation-sovereign-borders',
          publisher: 'Australian Department of Home Affairs',
          year: '2023',
          category: 'Court / Official Record',
        },
        {
          title: 'Offshore: The History of Australian Immigration Detention',
          url: 'https://thegeorgeinstitute.org/offshore-australian-detention',
          publisher: 'University of New South Wales Press',
          year: '2016',
          category: 'Scholarship',
        },
      ],
      tags: ['National Security', 'Governance', 'International Law'],
      era: '2013–2023',
      relatedIds: ['thesis-imm-territorial-integrity', 'con-imm-enforcement-humanitarian-cost'],
    },

    // CON 2.1.2
    {
      id: 'con-imm-enforcement-humanitarian-cost',
      parentId: 'thesis-imm-territorial-integrity',
      kind: 'con',
      title: 'Counter-Argument: Humanitarian Atrocities & Externalization of Border Violence',
      summary:
        'Critics show that externalizing border enforcement to authoritarian transit regimes (Libya, Mexico) results in torture, forced family separations, and severe human rights violations.',
      sections: [
        {
          heading: 'The Brutality of Externalized Border Regimes',
          paragraphs: [
            'To prevent migrants from reaching its territory, the **European Union funded the Libyan Coast Guard** to intercept migrant dinghies in the Mediterranean and return them to Libyan detention centers. An exhaustive **2023 UN Independent Fact-Finding Mission on Libya** found that migrants in these EU-funded camps were systematically subjected to murder, enslavement, torture, rape, and extortion, concluding that crimes against humanity were being committed.',
            'Similarly in the United States, the 2018 "Zero Tolerance" policy resulted in the systematic separation of over 5,000 migrant children from their parents at the southern border without tracking systems, drawing universal condemnation from the American Academy of Pediatrics and the UN High Commissioner for Human Rights.',
          ],
        },
        {
          heading: 'Failing to Address Root Push Factors',
          paragraphs: [
            'Militarized borders treat the symptoms rather than the causes of migration: violent state collapse in Venezuela, gang extortion in Ecuador and Haiti, and severe climate crop failures. Desperate humans fleeing death cannot be permanently deterred by physical fences.',
          ],
        },
      ],
      details: [
        '**UN Libya Fact-Finding Report (2023):** Documented crimes against humanity in migrant camps funded by European externalization agreements.',
        '**5,000+ Child Separations:** Zero-tolerance policy generated systemic trauma and international human rights violations.',
        '**Root Causes Ignored:** Fails to address authoritarian tyranny, economic collapse, and climate disasters driving migration.',
      ],
      sources: [
        {
          title: 'Report of the Independent Fact-Finding Mission on Libya (UN Document A/HRC/52/83)',
          url: 'https://www.ohchr.org/en/hr-bodies/hrc/libya/index',
          publisher: 'United Nations Human Rights Council',
          year: '2023',
          category: 'Court / Official Record',
        },
        {
          title: 'OIG Review of the Department of Justice’s Planning and Implementation of Its Zero Tolerance Policy',
          url: 'https://oig.justice.gov/reports/2021/21-028.pdf',
          publisher: 'US Department of Justice Office of the Inspector General',
          year: '2021',
          category: 'Court / Official Record',
        },
      ],
      tags: ['Human Rights', 'Civil Liberties', 'International Law'],
      era: '2018–2023',
      relatedIds: ['pro-imm-enforcement-deterrence', 'thesis-imm-territorial-integrity'],
    },

    // THESIS 2.2
    {
      id: 'thesis-imm-rule-of-law-integrity',
      parentId: 'pillar-imm-sovereignty',
      kind: 'thesis',
      title: 'Thesis 2.2: The Rule of Law: Protecting Legal Channels vs. Broken Statutory Pathways',
      summary:
        'Rewarding unlawful entry undermines fair legal immigration queues, while defenders argue obsolete statutory quotas make legal entry impossible.',
      sections: [
        {
          heading: 'The Moral Injustice of Queue-Jumping',
          paragraphs: [
            'Millions of aspiring immigrants across India, the Philippines, Mexico, and Africa wait patiently for 10 to 20 years in legal channels, paying thousands of dollars in fees, submitting to rigorous background checks and medical screenings, and respecting statutory visa limits. When millions enter irregularly and secure work permits via defensive asylum claims, the integrity of the rule of law is destroyed.',
            'As political philosopher **Michael Walzer** (*Spheres of Justice*) noted, the right to establish rules of admission is essential to the preservation of distinct political communities. If admission laws are systematically ignored without consequence, the civic covenant between the state and its citizens dissolves.',
          ],
        },
        {
          heading: 'The Reality of an Obsolete Statutory Architecture',
          paragraphs: [
            'Conversely, immigration advocates point out that the U.S. legal immigration system has not undergone major structural reform since the **Immigration Act of 1990**, when the global economy was half its current size. Rigid per-country caps and unrealistic employment visa limits mean there is literally no legal visa line available for low-skilled laborers or persecuted individuals.',
          ],
        },
      ],
      details: [
        '**Queue-Jumping Moral Hazard:** Millions waiting decades legally penalized while irregular entrants secure immediate employment authorization.',
        '**1990 Statutory Freeze:** US legal immigration quotas have remained largely static for 35 years despite massive population and GDP expansion.',
        '**20-Year Legal Backlogs:** Filipino and Mexican siblings of US citizens face 20+ year statutory waiting times.',
      ],
      sources: [
        {
          title: 'Spheres of Justice: A Defense of Pluralism and Equality',
          url: 'https://www.basicbooks.com/titles/michael-walzer/spheres-of-justice/9780465081899/',
          publisher: 'Basic Books / Michael Walzer',
          year: '1983',
          category: 'Scholarship',
        },
        {
          title: 'Why Legal Immigration Is Nearly Impossible: The 157-Year Wait',
          url: 'https://www.cato.org/policy-analysis/why-legal-immigration-nearly-impossible',
          publisher: 'Cato Institute / David J. Bier',
          year: '2023',
          category: 'Watchdog / NGO',
        },
      ],
      tags: ['Governance', 'Philosophy & Ethics', 'International Law'],
      era: '1983–2024',
      relatedIds: ['pro-imm-systemic-fairness', 'con-imm-broken-statutory-pathways'],
    },

    // PRO 2.2.1
    {
      id: 'pro-imm-systemic-fairness',
      parentId: 'thesis-imm-rule-of-law-integrity',
      kind: 'pro',
      title: 'Evidence: Backlogs of Vetted Legal Immigrants & Public Trust Erosion',
      summary:
        'State Department data reveals over 4 million vetted legal applicants trapped in statutory backlogs, while public confidence in legal immigration plummets during border chaos.',
      sections: [
        {
          heading: 'The 4 Million Vetted Applicants Trapped in Queues',
          paragraphs: [
            'Official **U.S. Department of State Visa Office data** reveals that over **4.1 million approved immigrant visa applicants** are currently stalled in consular waiting queues due to statutory annual numerical ceilings and the 7% per-country cap. Highly educated engineers, physicians, and direct family members wait patiently for decades, paying mandatory government processing fees.',
            'When the public witnesses hundreds of thousands of unvetted individuals crossing borders outside designated ports of entry and receiving humanitarian parole and work permits, democratic faith in the fairness of the legal system collapses, driving anti-immigration populist backlashes that threaten legal immigration quotas.',
          ],
        },
        {
          heading: 'Restoring Order as Prerequisite for Generosity',
          paragraphs: [
            'Sociological research shows that citizen support for generous legal immigration is directly contingent on the perception that the border is under firm government control. In Canada, public support for high legal immigration remained strong for decades precisely because its geographic isolation and strict border enforcement prevented chaotic irregular border surges.',
          ],
        },
      ],
      details: [
        '**4.1 Million Approved Applicants Waiting:** Official State Department queue of vetted individuals respecting legal limits.',
        '**Per-Country Cap Distortions:** Immigrants from high-population countries (India, Mexico) face multi-decade green card waits.',
        '**The Canadian Border Paradox:** Historic high Canadian legal immigration support was enabled by strict geographic border control.',
      ],
      sources: [
        {
          title: 'Annual Report of Immigrant Visa Applicants in the National Visa Center Waiting List',
          url: 'https://travel.state.gov/content/travel/en/legal/visa-law0/visa-bulletin.html',
          publisher: 'US Department of State Bureau of Consular Affairs',
          year: '2023',
          category: 'Court / Official Record',
        },
        {
          title: 'Public Opinion and Immigration: The Canadian Exceptionalism Question',
          url: 'https://www.environicsinstitute.org/projects/project-details/focus-canada-fall-2023---canadian-public-opinion-on-immigration',
          publisher: 'Environics Institute for Survey Research',
          year: '2023',
          category: 'Empirical / Economic Study',
        },
      ],
      tags: ['Governance', 'Empirical Studies', 'Civil Liberties'],
      era: '2020–2024',
      relatedIds: ['thesis-imm-rule-of-law-integrity', 'con-imm-broken-statutory-pathways'],
    },

    // CON 2.2.2
    {
      id: 'con-imm-broken-statutory-pathways',
      parentId: 'thesis-imm-rule-of-law-integrity',
      kind: 'con',
      title: 'Counter-Argument: The Fictional "Line": Legal Immigration Is Statutorily Blocked',
      summary:
        'Cato Institute research demonstrates that for 99% of aspiring migrants, there is no legal pathway or "line" to stand in, making irregular crossing the only functional option.',
      sections: [
        {
          heading: 'The Myth of the Accessible Legal Pathway',
          paragraphs: [
            'Opponents of enforcement often tell migrants to "wait in line like my ancestors did." However, as Cato Institute immigration policy director **David Bier** demonstrates in *Why Legal Immigration Is Nearly Impossible*, there is no legal line for the vast majority of the world\'s population. The U.S. legal code contains no general work visa for non-college-educated labor, no visa for individuals fleeing non-state gang extortion, and strict per-country caps that create mathematical impossibilities.',
            'For an Indian software engineer applying for an employment-based EB-2 green card, the current backlog exceeds 134 years, meaning tens of thousands of applicants will die before receiving permanent residency. Demanding adherence to a broken statutory system that refuses to process labor demand is legally disingenuous.',
          ],
        },
        {
          heading: 'Economic Pull Factors Defy Arbitrary Statutory Caps',
          paragraphs: [
            'When modern economies generate millions of agricultural, construction, and hospitality jobs that domestic citizens refuse to fill at prevailing wages, economic gravity inevitably overwhelms rigid statutory quotas. Criminalizing the labor supply that feeds national cities serves only to empower underground labor exploitation.',
          ],
        },
      ],
      details: [
        '**Zero Legal Pathway for 99% of World:** No general non-college worker visa exists in US statutory immigration law.',
        '**134-Year Wait for Indian Green Cards:** Mathematical backlog of EB-2 and EB-3 visas guarantees applicants will die before adjudication.',
        '**Unmet Labor Demand:** 10 million unfilled job openings in the US economy pull labor across arbitrary statutory barriers.',
      ],
      sources: [
        {
          title: 'Why Legal Immigration Is Nearly Impossible: The 157-Year Wait',
          url: 'https://www.cato.org/policy-analysis/why-legal-immigration-nearly-impossible',
          publisher: 'Cato Institute / David J. Bier',
          year: '2023',
          category: 'Watchdog / NGO',
        },
        {
          title: 'Congressional Research Service: Permanent Employment-Based Immigration and the Per-Country Ceiling (R45447)',
          url: 'https://crsreports.congress.gov/product/pdf/R/R45447',
          publisher: 'Congressional Research Service (CRS)',
          year: '2022',
          category: 'Court / Official Record',
        },
      ],
      tags: ['Economics', 'Labor & Welfare', 'Civil Liberties'],
      era: '2022–2023',
      relatedIds: ['pro-imm-systemic-fairness', 'thesis-imm-rule-of-law-integrity'],
    },

    // -------------------------------------------------------------
    // PILLAR 3: SOCIAL COHESION & MUNICIPAL ABSORPTION
    // -------------------------------------------------------------
    {
      id: 'pillar-imm-cohesion',
      parentId: 'root-immigration',
      kind: 'pillar',
      title: 'Pillar 3: Social Cohesion, Cultural Assimilation & Municipal Absorption',
      summary:
        'Examines the civic and municipal impact: strain on urban housing, emergency shelters, and public schools in gateway cities, alongside sociological debates over social capital and cultural assimilation.',
      sections: [
        {
          heading: 'Municipal Absorptive Capacity and Fiscal Strain',
          paragraphs: [
            'While immigration debates are often conducted at abstract macroeconomic levels, the physical reality of mass migration unfolds at the municipal level. When hundreds of thousands of newly arrived migrants concentrate in gateway cities (such as New York, Chicago, and Denver), local municipal budgets for housing, emergency shelter, public transit, and public schools face immediate fiscal exhaustion.',
            'Mayors of self-declared "sanctuary cities" found themselves forced to cut municipal library hours, sanitation services, and community programs to fund billions in emergency hotel shelter contracts, igniting sharp political friction between working-class minority residents and municipal leadership.',
          ],
        },
        {
          heading: 'Social Trust and the Putnam Communitarian Challenge',
          paragraphs: [
            'At the sociological level, scholars like **David Goodhart** (*The Road to Somewhere*) and Harvard sociologist **Robert Putnam** examine how rapid demographic changes impact the delicate fabric of social solidarity. Putnam’s landmark research found that in the short-to-medium term, rapid ethnic diversity can decrease civic trust, altruism, and community participation—the "hunkering down" effect.',
          ],
        },
      ],
      details: [
        '**New York City $4+ Billion Migrant Budget:** Emergency shelter contracts forced municipal budget freezes across public agencies.',
        '**Robert Putnam’s "E Pluribus Unum" Finding:** Short-term diversity correlates with lower social capital and reduced neighborhood trust.',
        '**Public School Impact:** Enrolling tens of thousands of non-English-speaking students requires specialized bilingual staff.',
        '**Multi-Generational Assimilation Counter-Evidence:** Empirical evidence confirms 2nd-generation linguistic and economic assimilation remains robust.',
      ],
      sources: [
        {
          title: 'E Pluribus Unum: Diversity and Community in the Twenty-first Century',
          url: 'https://doi.org/10.1111/j.1467-9477.2007.00176.x',
          publisher: 'Scandinavian Political Studies / Robert D. Putnam',
          year: '2007',
          category: 'Empirical / Economic Study',
        },
        {
          title: 'The Road to Somewhere: The Populist Revolt and the Future of Politics',
          url: 'https://www.hurstpublishers.com/book/the-road-to-somewhere/',
          publisher: 'Hurst Publishers / David Goodhart',
          year: '2017',
          category: 'Scholarship',
        },
        {
          title: 'New York City Independent Budget Office: Fiscal Impact of the Influx of Asylum Seekers',
          url: 'https://www.ibo.nyc.ny.us/iboreports/fiscal-impact-of-asylum-seekers-update-2023.pdf',
          publisher: 'New York City Independent Budget Office (IBO)',
          year: '2023',
          category: 'Court / Official Record',
        },
      ],
      tags: ['Demographics', 'Housing & Healthcare', 'Governance'],
      era: '2007–2026',
      relatedIds: ['thesis-imm-municipal-absorption', 'thesis-imm-cultural-assimilation', 'pillar-imm-humanitarian'],
    },

    // THESIS 3.1
    {
      id: 'thesis-imm-municipal-absorption',
      parentId: 'pillar-imm-cohesion',
      kind: 'thesis',
      title: 'Thesis 3.1: Municipal Infrastructure Saturation vs. Urban Economic Revitalization',
      summary:
        'Surging migrant influxes overwhelm municipal shelter systems and school budgets, but long-term data shows immigrants revitalize depopulated cities and expand tax bases.',
      sections: [
        {
          heading: 'The 2022–2024 Urban Shelter Crisis',
          paragraphs: [
            'Beginning in 2022, the arrival of over 180,000 migrants in New York City overwhelmed the city\'s unique legal "right-to-shelter" mandate. The city was forced to lease over 150 commercial hotels, construct massive temporary tent facilities on Randall\'s Island, and allocate over **$4.2 billion across two fiscal years** for migrant services, forcing municipal agencies to enact 5% across-the-board budget cuts.',
            'Similar municipal saturation occurred in Chicago and Denver, where hospital emergency rooms and public school districts struggled to absorb thousands of non-English-speaking children without supplemental federal financial assistance.',
          ],
        },
        {
          heading: 'Historical Precedent of Urban Revitalization',
          paragraphs: [
            'Conversely, urban economists point out that immigrants have repeatedly saved American cities from terminal decay. In the 1970s and 1980s, when deindustrialization and white flight emptied cities like New York, Boston, and Philadelphia, mass immigration repopulated abandoned neighborhoods, restored retail business corridors, and rebuilt municipal tax bases.',
          ],
        },
      ],
      details: [
        '**NYC $4.2B Crisis Expenditure:** Emergency shelter costs exceeded municipal funding for parks, sanitation, and libraries combined.',
        '**Public School Bilingual Strain:** Sudden enrollment of thousands of traumatized children created acute shortages of ESL teachers.',
        '**Rust Belt Demographic Resupply:** Cities like Buffalo, Cleveland, and Detroit rely on immigrants to stem decades of severe population loss.',
      ],
      sources: [
        {
          title: 'NYC Independent Budget Office: Updating the Cost of Housing Asylum Seekers',
          url: 'https://www.ibo.nyc.ny.us/iboreports/asylum-seekers-cost-update-november-2023.html',
          publisher: 'New York City Independent Budget Office',
          year: '2023',
          category: 'Court / Official Record',
        },
        {
          title: 'The Great Inversion and the Future of the American City',
          url: 'https://www.penguinrandomhouse.com/books/54129/the-great-inversion-and-the-future-of-the-american-city-by-alan-ehrenhalt/',
          publisher: 'Vintage / Alan Ehrenhalt',
          year: '2012',
          category: 'Scholarship',
        },
      ],
      tags: ['Housing & Healthcare', 'Economics', 'Governance'],
      era: '2012–2024',
      relatedIds: ['pro-imm-municipal-budget-crisis', 'con-imm-revitalizing-depopulated-cities'],
    },

    // PRO 3.1.1
    {
      id: 'pro-imm-municipal-budget-crisis',
      parentId: 'thesis-imm-municipal-absorption',
      kind: 'pro',
      title: 'Evidence: The 2022–2024 Gateway Cities Emergency Fiscal Shock',
      summary:
        'Official municipal audit data from New York, Chicago, and Denver confirms that unfunded migrant influxes forced unprecedented municipal budget cuts and service reductions.',
      sections: [
        {
          heading: 'Audit Data of the New York City Shelter Crisis',
          paragraphs: [
            'Official reports by **New York City Comptroller Brad Lander** and Mayor Eric Adams documented that by late 2023, the city was housing over 68,000 migrants on any given night at an average cost of **$394 per family per day**. The city expended over $1.4 billion on private emergency hotel contracts (such as The Roosevelt Hotel) and outside private security contractors.',
            'To finance these emergency humanitarian expenditures in the absence of matching federal appropriations, the city government was compelled to announce structural budget cuts impacting the New York Police Department hiring classes, universal pre-K expansion, and public library weekend services, creating immense political friction with longtime working-class taxpayers.',
          ],
        },
        {
          heading: 'Saturation of Public Healthcare Safety Nets',
          paragraphs: [
            'Denver Health Medical Center reported over 20,000 emergency room visits by uninsured newly arrived migrants in 2023, resulting in over $130 million in uncompensated medical care and pushing the safety-net hospital system toward potential insolvency.',
          ],
        },
      ],
      details: [
        '**$394 Daily Cost Per Migrant Household:** Unsustainable municipal spending on commercial hotel rooms and catering.',
        '**Municipal Service Reductions:** Mandatory budget cuts applied to police hiring, pre-K programs, and weekend library operations.',
        '**Hospital Safety-Net Deficits:** Denver Health incurred $130M in uncompensated care, threatening municipal medical operations.',
      ],
      sources: [
        {
          title: 'Office of the New York City Comptroller: Auditing the City’s Asylum Seeker Services Contracts',
          url: 'https://comptroller.nyc.gov/reports/auditing-the-citys-asylum-seeker-services-contracts/',
          publisher: 'Office of the New York City Comptroller',
          year: '2023',
          category: 'Court / Official Record',
        },
        {
          title: 'Denver Health Faces Financial Crisis as Immigrant Visits Surge',
          url: 'https://www.denverpost.com/2024/01/17/denver-health-finances-migrants-uncompensated-care/',
          publisher: 'The Denver Post',
          year: '2024',
          category: 'Debate / Broadcast',
        },
      ],
      tags: ['Housing & Healthcare', 'Governance', 'Economics'],
      era: '2022–2024',
      relatedIds: ['thesis-imm-municipal-absorption', 'con-imm-revitalizing-depopulated-cities'],
    },

    // CON 3.1.2
    {
      id: 'con-imm-revitalizing-depopulated-cities',
      parentId: 'thesis-imm-municipal-absorption',
      kind: 'con',
      title: 'Counter-Argument: Long-Term Urban Regeneration & Depopulation Reversal',
      summary:
        'Empirical urban studies show that initial municipal costs are investments: immigrants revive dying commercial corridors, prevent neighborhood abandonment, and yield positive tax surpluses within 5–10 years.',
      sections: [
        {
          heading: 'Reversing Rust Belt Demographic Extinction',
          paragraphs: [
            'In deindustrialized cities across the American Midwest—such as **Buffalo, New York; Dayton, Ohio; and Pittsburgh, Pennsylvania**—decades of factory closures and population exodus left tens of thousands of vacant homes, collapsed property tax bases, and underfunded schools. In response, municipal leaders launched proactive refugee resettlement initiatives.',
            'In Buffalo, the resettlement of over 10,000 Burmese, Somali, and Afghan refugees revitalized the blighted West Side: vacant storefronts became grocery markets, abandoned Victorian houses were rehabilitated, and city property tax revenues stabilized, proving that immigration transforms urban liabilities into vibrant community assets.',
          ],
        },
        {
          heading: 'The 5–10 Year Fiscal Inversion',
          paragraphs: [
            'Extensive longitudinal data from the **Center for American Progress** and the **Brookings Institution** demonstrates that while initial resettlement requires upfront public expenditure, within 5 to 10 years, newly settled families achieve high labor force participation, purchase homes, start small businesses, and contribute far more in state and local sales and property taxes than they consume in public services.',
          ],
        },
      ],
      details: [
        '**Buffalo West Side Renaissance:** Resettlement of 10,000 refugees revived blighted neighborhoods and reversed 50 years of population decline.',
        '**Restoring Municipal Tax Bases:** Immigrants purchase abandoned housing stock and establish storefront retail businesses.',
        '**Positive 5-Year Fiscal Inversion:** Initial resettlement costs are repaid through lifetime property, sales, and income tax contributions.',
      ],
      sources: [
        {
          title: 'Immigrants as Engines of American Economic Growth',
          url: 'https://www.brookings.edu/articles/immigrants-as-engines-of-american-economic-growth/',
          publisher: 'Brookings Institution / Hamilton Project',
          year: '2020',
          category: 'Scholarship',
        },
        {
          title: 'The Economic Impact of Refugees in America',
          url: 'https://www.americanprogress.org/article/the-economic-impact-of-refugees-in-america/',
          publisher: 'Center for American Progress',
          year: '2021',
          category: 'Empirical / Economic Study',
        },
      ],
      tags: ['Housing & Healthcare', 'Economics', 'Demographics'],
      era: '2015–2021',
      relatedIds: ['pro-imm-municipal-budget-crisis', 'thesis-imm-municipal-absorption'],
    },

    // THESIS 3.2
    {
      id: 'thesis-imm-cultural-assimilation',
      parentId: 'pillar-imm-cohesion',
      kind: 'thesis',
      title: 'Thesis 3.2: Cultural Assimilation: Putnam’s Social Trust Dilemma vs. Melting Pot Robustness',
      summary:
        'Sociological studies show rapid diversity can diminish social trust and community altruism in the short term, but multi-generational indicators prove assimilation remains exceptionally strong.',
      sections: [
        {
          heading: 'The Putnam "Hunkering Down" Findings',
          paragraphs: [
            'In his landmark study *E Pluribus Unum: Diversity and Community in the Twenty-First Century*, Harvard political scientist **Robert Putnam** surveyed 30,000 Americans across 41 communities. His empirical findings challenged liberal orthodoxy: in communities with high levels of ethnic diversity, people "hunker down"—social trust drops not only between different ethnic groups (out-group trust), but also within one’s own group (in-group trust).',
            'Communitarian theorist **Paul Collier** (*Exodus: How Migration Is Changing Our World*) argues that rapid, unassimilated migration weakens the mutual sympathy and shared civic norms required to sustain generous welfare safety nets and high-tax redistribution.',
          ],
        },
        {
          heading: 'The Resilience of the American Melting Pot',
          paragraphs: [
            'Conversely, sociologists of assimilation like **Richard Alba and Victor Nee** (*Remaking the American Mainstream*) show that the American "melting pot" remains the most powerful assimilation engine in history. By the second and third generation, the children of immigrants achieve complete English fluency, out-earn their parents, intermarry at rates exceeding 30%, and fully internalize democratic constitutional norms.',
          ],
        },
      ],
      details: [
        '**Putnam’s Social Trust Finding:** Greater short-term diversity associated with lower voting turnout, less volunteering, and lower neighborhood trust.',
        '**Paul Collier’s Exodus Thesis:** Warns rapid migration can erode the social cohesion underpinning welfare states.',
        '**Alba & Nee Assimilation Metrics:** 2nd and 3rd generations demonstrate rapid English adoption, high college attainment, and high intermarriage.',
      ],
      sources: [
        {
          title: 'E Pluribus Unum: Diversity and Community in the Twenty-first Century',
          url: 'https://doi.org/10.1111/j.1467-9477.2007.00176.x',
          publisher: 'Scandinavian Political Studies / Robert D. Putnam',
          year: '2007',
          category: 'Empirical / Economic Study',
        },
        {
          title: 'Remaking the American Mainstream: Assimilation and Contemporary Immigration',
          url: 'https://www.hup.harvard.edu/books/9780674018136',
          publisher: 'Harvard University Press / Richard Alba & Victor Nee',
          year: '2003',
          category: 'Scholarship',
        },
        {
          title: 'Exodus: How Migration Is Changing Our World',
          url: 'https://global.oup.com/academic/product/exodus-9780195398236',
          publisher: 'Oxford University Press / Paul Collier',
          year: '2013',
          category: 'Scholarship',
        },
      ],
      tags: ['Philosophy & Ethics', 'Demographics', 'Governance'],
      era: '2003–2017',
      relatedIds: ['pro-imm-putnam-social-trust', 'con-imm-multicultural-succession'],
    },

    // PRO 3.2.1
    {
      id: 'pro-imm-putnam-social-trust',
      parentId: 'thesis-imm-cultural-assimilation',
      kind: 'pro',
      title: 'Evidence: Empirical Studies on Diversity and Welfare State Solidarity',
      summary:
        'Sociological research in Europe and North America confirms that rapid demographic shifts without robust assimilation policies reduce willingness to fund public welfare programs.',
      sections: [
        {
          heading: 'Erosion of the Moral Basis for Universal Redistribution',
          paragraphs: [
            'In *Why Welfare States Differ*, political economists **Alberto Alesina and Edward Glaeser** documented that the primary reason the United States historically never developed a comprehensive, Scandinavian-style welfare state is its high racial and ethnic diversity, which political elites exploited to divide working-class voters. When taxpayers perceive that their tax dollars primarily benefit perceived "out-groups," support for universal social safety nets drops precipitously.',
            'Recent empirical studies across Denmark, the Netherlands, and Sweden demonstrate that as non-Western immigration surged, center-left social democratic parties were forced by their working-class bases to implement strict immigration restrictions and citizenship values tests to prevent the political collapse of their universal welfare models.',
          ],
        },
        {
          heading: 'David Goodhart\'s "Progressive\'s Dilemma"',
          paragraphs: [
            'David Goodhart formulates this as the fundamental "Progressive’s Dilemma": nations can be highly diverse, or they can have generous, high-trust welfare states, but they cannot easily be both. Solidarity requires shared values, mutual obligation, and collective national identity.',
          ],
        },
      ],
      details: [
        '**Alesina-Glaeser Findings:** Ethnic diversity correlates globally with lower welfare redistribution and weaker labor protections.',
        '**The Scandinavian Policy Reversal:** Denmark and Sweden adopted strict integration and border laws to protect universal welfare states.',
        '**The Progressive\'s Dilemma:** High diversity without deep cultural integration erodes public willingness to share collective risks.',
      ],
      sources: [
        {
          title: 'Fighting Poverty in the US and Europe: A World of Difference',
          url: 'https://global.oup.com/academic/product/fighting-poverty-in-the-us-and-europe-9780199267668',
          publisher: 'Oxford University Press / Alberto Alesina & Edward Glaeser',
          year: '2004',
          category: 'Scholarship',
        },
        {
          title: 'The Road to Somewhere: The Populist Revolt and the Future of Politics',
          url: 'https://www.hurstpublishers.com/book/the-road-to-somewhere/',
          publisher: 'Hurst Publishers / David Goodhart',
          year: '2017',
          category: 'Scholarship',
        },
      ],
      tags: ['Labor & Welfare', 'Philosophy & Ethics', 'Economics'],
      era: '2004–2017',
      relatedIds: ['thesis-imm-cultural-assimilation', 'con-imm-multicultural-succession'],
    },

    // CON 3.2.2
    {
      id: 'con-imm-multicultural-succession',
      parentId: 'thesis-imm-cultural-assimilation',
      kind: 'con',
      title: 'Counter-Argument: The Proven Multi-Generational Assimilation Machine',
      summary:
        'National Academies data confirms that second- and third-generation immigrants achieve English dominance, higher education, military enlistment, and civic integration matching native rates.',
      sections: [
        {
          heading: 'The Overwhelming Success of Second-Generation Integration',
          paragraphs: [
            'In its definitive 500-page report *The Integration of Immigrants into American Society*, the **National Academies of Sciences (NASEM)** analyzed longitudinal data across language, education, income, residential segregation, and health. The findings conclusively refuted claims of permanent cultural Balkanization: over **90% of second-generation immigrants are fluent in English**, and by the third generation, bilingualism largely vanishes in favor of monolingual English.',
            'Furthermore, the children of immigrants achieve educational attainment rates that exceed native-born Americans of similar socioeconomic backgrounds, intermarry across racial lines at record-high rates (exceeding 30% for Hispanics and Asians), and demonstrate strong adherence to American constitutional values.',
          ],
        },
        {
          heading: 'Historical Repetition of Assimilation Panics',
          paragraphs: [
            'Historians emphasize that throughout Western history, every incoming migrant wave—the Irish in the 1850s, Italians and Eastern European Jews in the 1900s—was accused of being inherently unassimilable, clannish, and destructive of civic trust. In every case, generational succession assimilated their descendants fully into the cultural fabric.',
          ],
        },
      ],
      details: [
        '**90%+ English Fluency:** Second-generation immigrants achieve complete English mastery, refuting language Balkanization.',
        '**Higher College Attainment:** Children of immigrants graduate college at rates exceeding native-born peers.',
        '**Historic Parallel:** 19th-century anti-Catholic panics regarding Irish and Italian immigrants mirror contemporary cultural anxieties.',
      ],
      sources: [
        {
          title: 'The Integration of Immigrants into American Society',
          url: 'https://nap.nationalacademies.org/catalog/21746/the-integration-of-immigrants-into-american-society',
          publisher: 'National Academies of Sciences, Engineering, and Medicine (NASEM)',
          year: '2015',
          category: 'Empirical / Economic Study',
        },
        {
          title: 'Streets of Gold: America\'s Untold Story of Immigrant Success',
          url: 'https://www.publicaffairsbooks.com/titles/ran-abramitzky/streets-of-gold/9781541797833/',
          publisher: 'PublicAffairs / Ran Abramitzky & Leah Boustan',
          year: '2022',
          category: 'Scholarship',
        },
      ],
      tags: ['Demographics', 'History', 'Philosophy & Ethics'],
      era: '2015–2022',
      relatedIds: ['pro-imm-putnam-social-trust', 'thesis-imm-cultural-assimilation'],
    },

    // -------------------------------------------------------------
    // PILLAR 4: HUMANITARIAN ASYLUM & REFUGEE ETHICS
    // -------------------------------------------------------------
    {
      id: 'pillar-imm-humanitarian',
      parentId: 'root-immigration',
      kind: 'pillar',
      title: 'Pillar 4: Humanitarian Asylum, Non-Refoulement & Global Refugee Ethics',
      summary:
        'Explores international legal obligations under the 1951 Geneva Refugee Convention, the sacred principle of non-refoulement, systemic exploitation of asylum laws, and climate displacement.',
      sections: [
        {
          heading: 'The Sacred Post-Holocaust Asylum Covenant',
          paragraphs: [
            'The international refugee protection regime was forged in the catastrophic shadow of World War II and the Holocaust, when Jewish refugees fleeing Nazi extermination were turned away at Western borders and returned to gas chambers (most notoriously the MS St. Louis in 1939). In response, the international community codified the **1951 Convention Relating to the Status of Refugees** and its **1967 Protocol**.',
            'The cornerstone of this framework is the customary international legal norm of **non-refoulement** (Article 33), which strictly prohibits states from returning a person to a territory where their life or freedom would be threatened on account of race, religion, nationality, membership in a particular social group, or political opinion.',
          ],
        },
        {
          heading: 'The Crisis of the Asylum System in the 21st Century',
          paragraphs: [
            'However, the 1951 Convention was designed for individual political dissidents escaping totalitarian regimes (such as Soviet defectors), not for mass contemporary economic displacement, generalized gang violence, or climate disruption. Today, asylum systems worldwide face unprecedented backlogs—over 3 million pending cases in U.S. immigration courts—transforming a humanitarian emergency mechanism into a de facto backdoor for economic migration.',
          ],
        },
      ],
      details: [
        '**1951 Geneva Convention Bedrock:** Codified post-Holocaust moral duty never to return refugees to extermination.',
        '**Non-Refoulement as Peremptory Norm:** Absolute legal prohibition on returning individuals to torture or persecution.',
        '**3+ Million US Immigration Court Backlog:** Average case wait times exceed 4–5 years, providing de facto residency and work permits.',
        '**Climate Refugee Vacuum:** International treaties currently provide no legal refugee status for ecological disaster displacement.',
      ],
      sources: [
        {
          title: 'Convention and Protocol Relating to the Status of Refugees (1951 Convention / 1967 Protocol)',
          url: 'https://www.unhcr.org/about-unhcr/overview/1951-refugee-convention',
          publisher: 'United Nations High Commissioner for Refugees (UNHCR)',
          year: '1951–1967',
          category: 'Primary Text / Treaty',
        },
        {
          title: 'Refuge: Rethinking Refugee Policy in a Changing World',
          url: 'https://global.oup.com/academic/product/refuge-9780190659158',
          publisher: 'Oxford University Press / Alexander Betts & Paul Collier',
          year: '2017',
          category: 'Scholarship',
        },
        {
          title: 'TRAC Immigration: Backlog of Pending Cases in U.S. Immigration Courts',
          url: 'https://trac.syr.edu/phptools/immigration/court_backlog/',
          publisher: 'Transactional Records Access Clearinghouse (TRAC) at Syracuse University',
          year: '2024',
          category: 'Empirical / Economic Study',
        },
      ],
      tags: ['Human Rights', 'International Law', 'Governance'],
      era: '1951–2026',
      relatedIds: ['thesis-imm-geneva-convention', 'thesis-imm-climate-displacement', 'pillar-imm-sovereignty'],
    },

    // THESIS 4.1
    {
      id: 'thesis-imm-geneva-convention',
      parentId: 'pillar-imm-humanitarian',
      kind: 'thesis',
      title: 'Thesis 4.1: The 1951 Geneva Convention: Inviolable Right vs. Systemic Exploitation',
      summary:
        'Non-refoulement protects persecuted dissidents from death, but the explosion of meritless claims by economic migrants paralyzes immigration courts.',
      sections: [
        {
          heading: 'The Moral and Legal Imperative of Non-Refoulement',
          paragraphs: [
            'Under Article 33 of the 1951 Convention, non-refoulement is a binding principle of customary international law from which no derogation is permitted. When individuals flee state-sponsored torture, extrajudicial execution, or severe religious persecution in countries like Iran, Eritrea, Myanmar, or Russia, civilized democratic nations possess an unnegotiable legal and moral obligation to grant fair asylum adjudication and protection.',
            'Human rights advocates, including former UN High Commissioner for Human Rights **Mary Robinson**, argue that suspending asylum processing or conducting summary pushbacks at borders violates binding treaty law and returns vulnerable dissidents directly to torture and death.',
          ],
        },
        {
          heading: 'The Weaponization of Court Backlogs for Economic Migration',
          paragraphs: [
            'Conversely, critics point out that the asylum process has been completely co-opted. Under current U.S. and European statutes, any migrant who touches sovereign soil and recites the words "credible fear" is legally entitled to full due process. With immigration courts backlogged for 4 to 7 years, migrants receive immediate work authorization and social security numbers, creating a massive incentive for economic migrants whose claims are ultimately denied to claim asylum.',
          ],
        },
      ],
      details: [
        '**Article 33 Non-Refoulement:** Peremptory legal ban on repatriating individuals to face persecution or torture.',
        '**Credible Fear Threshold:** Low initial screening bar enables economic migrants to enter multi-year court adjudication queues.',
        '**Low Final Grant Rates:** Less than 20% of defensive asylum claims from certain Central American nationalities are ultimately granted by judges.',
      ],
      sources: [
        {
          title: 'UNHCR Master Glossary of Terms: Non-Refoulement and Asylum',
          url: 'https://www.unhcr.org/glossary/',
          publisher: 'UNHCR',
          year: '2023',
          category: 'Primary Text / Treaty',
        },
        {
          title: 'Executive Office for Immigration Review: Adjudication Statistics on Asylum Grant Rates',
          url: 'https://www.justice.gov/eoir/page/file/1107366/dl',
          publisher: 'US Department of Justice EOIR',
          year: '2023',
          category: 'Court / Official Record',
        },
      ],
      tags: ['Human Rights', 'International Law', 'Governance'],
      era: '1951–2024',
      relatedIds: ['pro-imm-sacred-sanctuary', 'con-imm-asylum-system-gaming'],
    },

    // PRO 4.1.1
    {
      id: 'pro-imm-sacred-sanctuary',
      parentId: 'thesis-imm-geneva-convention',
      kind: 'pro',
      title: 'Evidence: Landmark Rulings Upholding Non-Refoulement & Protection of Dissidents',
      summary:
        'Decisions by apex courts worldwide, including the UK Supreme Court’s 2023 Rwanda ruling, reaffirm that non-refoulement is a non-negotiable legal constraint on executive power.',
      sections: [
        {
          heading: 'The UK Supreme Court\'s Landmark Rwanda Judgment (2023)',
          paragraphs: [
            'In November 2023, the **Supreme Court of the United Kingdom** delivered a unanimous landmark ruling in *R (AAA) v Secretary of State for the Home Department*. The court struck down the British government\'s policy to deport asylum seekers to Rwanda for processing, ruling that there were substantial grounds for believing asylum seekers would face a real risk of refoulement to their countries of origin, where they faced torture and persecution.',
            'Lord Reed emphasized that the principle of non-refoulement is not merely an EU directive or recent statutory creation, but a fundamental international human rights norm enshrined in multiple international treaties that the UK ratified voluntarily, including the 1951 Convention, the UN Convention Against Torture, and the International Covenant on Civil and Political Rights.',
          ],
        },
        {
          heading: 'Life-Saving Sanctuary for Persecuted Communities',
          paragraphs: [
            'Over the past half-century, asylum systems provided life-saving sanctuary to millions: Hungarian dissidents in 1956, Vietnamese boat people in the 1970s, Soviet Jews, and contemporary Afghan, Syrian, and Ukrainian refugees who would have faced mass execution or imprisonment.',
          ],
        },
      ],
      details: [
        '**UK Supreme Court Rwanda Decision (2023):** Unanimous judgment declaring offshore deportation unlawful due to refoulement risks.',
        '**Multi-Treaty Constitutional Shield:** Reaffirmed non-refoulement is rooted in customary international law and the UN Convention Against Torture.',
        '**Historic Resettlement Triumphs:** Saved millions of Vietnamese, Hungarian, Bosnian, and Afghan refugees from totalitarian execution.',
      ],
      sources: [
        {
          title: 'Judgments: R (on the application of AAA and others) v Secretary of State for the Home Department [2023] UKSC 42',
          url: 'https://www.supremecourt.uk/cases/uksc-2023-0093.html',
          publisher: 'Supreme Court of the United Kingdom',
          year: '2023',
          category: 'Court / Official Record',
        },
        {
          title: 'The Law of Refugee Status',
          url: 'https://www.cambridge.org/core/books/law-of-refugee-status/81A6CEFFDEE7EB66099182375C9FEE39',
          publisher: 'Cambridge University Press / James C. Hathaway',
          year: '2014',
          category: 'Scholarship',
        },
      ],
      tags: ['International Law', 'Human Rights', 'Civil Liberties'],
      era: '2014–2023',
      relatedIds: ['thesis-imm-geneva-convention', 'con-imm-asylum-system-gaming'],
    },

    // CON 4.1.2
    {
      id: 'con-imm-asylum-system-gaming',
      parentId: 'thesis-imm-geneva-convention',
      kind: 'con',
      title: 'Counter-Argument: The Collapse of Systemic Legitimacy Through Economic Gaming',
      summary:
        'With 80%+ of irregular arrivals using asylum claims as de facto temporary work visas, judicial backlogs collapse, delaying genuine refugee protection for a decade.',
      sections: [
        {
          heading: 'The Exploitation of the "Credible Fear" Loophole',
          paragraphs: [
            'Former immigration judges and legal scholars document that the modern asylum process has been fundamentally broken by volume. Under statutory rules, an individual apprehended between ports of entry who claims fear of return receives a preliminary **Credible Fear Interview (CFI)**, where asylum officers apply a low threshold. Over 75% pass this initial screen and are released into the interior.',
            'However, once cases reach formal adversarial adjudication before an immigration judge—where claims must be substantiated with documentary evidence of targeted state persecution—the **denial rate exceeds 70% to 80%** for many nationalities. In the intervening 5 years, the applicant works legally, establishes community roots, and often disappears into the interior if a final removal order is issued, making the asylum system a de facto lottery for unlawful settlement.',
          ],
        },
        {
          heading: 'Crowding Out Genuine Political Dissidents',
          paragraphs: [
            'This systemic congestion directly harms genuine refugees. A political dissident escaping the Russian FSB or Iranian morality police is forced to wait 5 to 7 years in legal limbo, separated from family members, because immigration courts are paralyzed adjudicating millions of economic hardship claims.',
          ],
        },
      ],
      details: [
        '**75% CFI Pass vs. 70%+ Final Denial:** Massive divergence between initial screening threshold and final judicial grant rates.',
        '**5-Year Interim Employment Incentive:** Smugglers advertise that claiming asylum guarantees years of legal US work authorization.',
        '**Crowding Out Real Dissidents:** True political dissidents fleeing execution face multi-year adjudication delays.',
      ],
      sources: [
        {
          title: 'TRAC Immigration: Asylum Denial Rates by Nationality and Court',
          url: 'https://trac.syr.edu/immigration/reports/judgebias/',
          publisher: 'Transactional Records Access Clearinghouse (TRAC)',
          year: '2023',
          category: 'Empirical / Economic Study',
        },
        {
          title: 'Refugee Roulette: Disparities in Asylum Adjudication and Proposals for Reform',
          url: 'https://nyupress.org/9780814777152/refugee-roulette/',
          publisher: 'NYU Press / Jaya Ramji-Nogales, Andrew I. Schoenholtz, & Philip G. Schrag',
          year: '2009',
          category: 'Scholarship',
        },
      ],
      tags: ['Governance', 'International Law', 'Empirical Studies'],
      era: '2009–2024',
      relatedIds: ['pro-imm-sacred-sanctuary', 'thesis-imm-geneva-convention'],
    },

    // THESIS 4.2
    {
      id: 'thesis-imm-climate-displacement',
      parentId: 'pillar-imm-humanitarian',
      kind: 'thesis',
      title: 'Thesis 4.2: Climate Displacement: Expanding Protection vs. Sovereign Capacity Limits',
      summary:
        'Ecological crises threaten to displace hundreds of millions, creating pressure to expand refugee definitions that critics argue would overwhelm destination welfare states.',
      sections: [
        {
          heading: 'The Impending Climate Migration Epoch',
          paragraphs: [
            'The **World Bank Groundswell Report** estimates that by 2050, accelerating climate change—sea-level rise, prolonged droughts, extreme heatwaves, and agricultural collapse—could force over **216 million people to move internally** across six world regions, with millions attempting to cross international borders. Small island developing states in the Pacific (such as Tuvalu and Kiribati) face total physical submersion.',
            'International legal scholars and the **UN Human Rights Committee** (*Teitiota v. New Zealand*) have begun recognizing that returning individuals to countries where climate change poses an imminent threat to the right to life violates non-refoulement, arguing for formal international treaties protecting "climate refugees."',
          ],
        },
        {
          heading: 'The Hazard of Limitless Global Liability',
          paragraphs: [
            'Conversely, sovereign legal theorists point out that the 1951 Convention definition requires individualized persecution by a state actor. Expanding refugee status to include generalized environmental hardship would expand the eligible global refugee population to billions of people, rendering border control legally impossible and collapsing destination welfare states.',
          ],
        },
      ],
      details: [
        '**World Bank Groundswell Projection:** 216 million internal climate migrants projected across the developing world by 2050.',
        '**Teitiota v. New Zealand (2020):** UN Human Rights Committee landmark ruling opening the door to climate-based non-refoulement claims.',
        '**Sinking Island Nations:** Tuvalu signed a historic treaty with Australia in 2023 granting climate residency to its citizens.',
        '**Limitless Sovereign Exposure:** Expanding refugee status to environmental hardship makes virtually half the global population eligible for asylum.',
      ],
      sources: [
        {
          title: 'Groundswell: Acting on Internal Climate Migration',
          url: 'https://www.worldbank.org/en/news/press-release/2021/09/13/climate-change-could-force-216-million-people-to-migrate-within-their-own-countries-by-2050',
          publisher: 'World Bank Group',
          year: '2021',
          category: 'Empirical / Economic Study',
        },
        {
          title: 'UN Human Rights Committee: Views Adopted Concerning Communication No. 2728/2016 (Teitiota v. New Zealand)',
          url: 'https://digitallibrary.un.org/record/3850125',
          publisher: 'United Nations Human Rights Committee',
          year: '2020',
          category: 'Court / Official Record',
        },
      ],
      tags: ['Energy & Climate', 'Human Rights', 'International Law'],
      era: '2020–2026',
      relatedIds: ['pro-imm-climate-refugee-framework', 'con-imm-limitless-liability'],
    },

    // PRO 4.2.1
    {
      id: 'pro-imm-climate-refugee-framework',
      parentId: 'thesis-imm-climate-displacement',
      kind: 'pro',
      title: 'Evidence: The Australia-Tuvalu Falepili Union Treaty & UN Human Rights Rulings',
      summary:
        'In November 2023, Australia signed the historic Falepili Union treaty with Tuvalu, creating the world\'s first bilateral climate migration and resettlement framework.',
      sections: [
        {
          heading: 'The World\'s First Bilateral Climate Mobility Treaty',
          paragraphs: [
            'In November 2023, Australian Prime Minister Anthony Albanese and Tuvalu Prime Minister Kausea Natano signed the **Australia-Tuvalu Falepili Union treaty**. Under the pact, Australia formally acknowledged that rising sea levels threaten the physical existence of Tuvalu (an atoll nation whose highest elevation is 4.6 meters) and established a dedicated permanent human mobility pathway allowing up to 280 Tuvaluan citizens per year to relocate to Australia with full access to education, healthcare, and employment.',
            'This landmark agreement established the first legally binding bilateral mechanism explicitly granting permanent residency based on climate-induced existential loss of national territory, establishing an operational precedent for global climate justice.',
          ],
        },
        {
          heading: 'The Ethical Duty of Historic High-Emitting Nations',
          paragraphs: [
            'Ethicists argue that because historic greenhouse gas emissions were overwhelmingly generated by industrialized Western economies, developed nations have a moral reparative obligation to grant sanctuary to vulnerable populations who contributed virtually nothing to global carbon emissions.',
          ],
        },
      ],
      details: [
        '**Australia-Tuvalu Falepili Union (2023):** First bilateral treaty granting permanent relocation rights due to climate-driven sea-level rise.',
        '**280 Citizens Annually:** Managed, orderly annual resettlement pathway preserving Tuvaluan culture and human rights.',
        '**Reparative Climate Ethics:** Industrialized emitters bear moral responsibility to accommodate populations displaced by global emissions.',
      ],
      sources: [
        {
          title: 'Australia-Tuvalu Falepili Union Treaty Text',
          url: 'https://www.dfat.gov.au/geo/tuvalu/australia-tuvalu-falepili-union-treaty',
          publisher: 'Australian Department of Foreign Affairs and Trade (DFAT)',
          year: '2023',
          category: 'Primary Text / Treaty',
        },
        {
          title: 'The Unfolding Climate Refugee Crisis and International Law',
          url: 'https://www.cambridge.org/core/journals/american-journal-of-international-law/article/abs/climate-change-and-displacement-under-the-international-covenant-on-civil-and-political-rights/3B724391F93BF761E05AC49B7BE28BF2',
          publisher: 'American Journal of International Law',
          year: '2021',
          category: 'Scholarship',
        },
      ],
      tags: ['Energy & Climate', 'International Law', 'Human Rights'],
      era: '2021–2023',
      relatedIds: ['thesis-imm-climate-displacement', 'con-imm-limitless-liability'],
    },

    // CON 4.2.2
    {
      id: 'con-imm-limitless-liability',
      parentId: 'thesis-imm-climate-displacement',
      kind: 'con',
      title: 'Counter-Argument: The Dangerous Expansion of Universal Asylum to Environmental Hardship',
      summary:
        'Expanding refugee status to environmental distress creates limitless legal liability, as billions face adverse climate conditions, paralyzing democratic sovereignty.',
      sections: [
        {
          heading: 'The Impossibility of Boundary Demarcation',
          paragraphs: [
            'International legal scholars like **Alexander Betts and Paul Collier** (*Refuge*) caution that attempting to graft climate displacement onto the 1951 Refugee Convention would completely destroy the legal concept of asylum. Unlike political persecution—where a dissident is specifically targeted by a tyrant—environmental degradation is pervasive, gradual, and inextricably intertwined with local economic poverty, corrupt governance, and regional resource mismanagement.',
            'If experiencing a prolonged drought, flood, or extreme heatwave becomes legal grounds for international asylum, over 3 billion people living in the Global South would theoretically qualify for immediate, mandatory resettlement in developed nations, completely eliminating state control over domestic demographic planning.',
          ],
        },
        {
          heading: 'In-Situ Climate Adaptation Over Mass Relocation',
          paragraphs: [
            'The humane and scalable response to climate change is not opening international borders for mass population transfer, but investing billions in **in-situ adaptation**: drought-resistant agriculture, seawalls, water desalination, and resilient energy grids, allowing populations to remain prosperously in their ancestral homelands.',
          ],
        },
      ],
      details: [
        '**Limitless Legal Exposure:** Expanding refugee status to climate hardship could encompass over 3 billion people living in climate-vulnerable zones.',
        '**Blurring Economic and Environmental Push Factors:** Impossible to disentangle crop failures from domestic governance and economic failures.',
        '**The In-Situ Adaptation Imperative:** Resources must be directed to local climate-proofing and water infrastructure rather than mass relocation.',
      ],
      sources: [
        {
          title: 'Refuge: Rethinking Refugee Policy in a Changing World',
          url: 'https://global.oup.com/academic/product/refuge-9780190659158',
          publisher: 'Oxford University Press / Alexander Betts & Paul Collier',
          year: '2017',
          category: 'Scholarship',
        },
        {
          title: 'Climate-Induced Migration and National Security: Rethinking the Challenge',
          url: 'https://www.csis.org/analysis/climate-induced-migration-and-national-security',
          publisher: 'Center for Strategic and International Studies (CSIS)',
          year: '2022',
          category: 'Watchdog / NGO',
        },
      ],
      tags: ['Energy & Climate', 'National Security', 'Philosophy & Ethics'],
      era: '2017–2022',
      relatedIds: ['pro-imm-climate-refugee-framework', 'thesis-imm-climate-displacement'],
    },
  ],
};
