import type { DebateNode } from '../../types/debate';

export const antitrustRegulationNodes: DebateNode[] = [
  {
    id: 'pillar-econ-antitrust',
    parentId: 'root-econ',
    kind: 'pillar',
    title: 'Antitrust, Big Tech Monopoly Power & Deregulation',
    summary:
      'Explores when state intervention corrects market power versus when regulation itself entrenches incumbents: pitting Neo-Brandeisian Big Tech breakups against the Consumer Welfare Standard, Stiglerian occupational/permitting deregulation against safety mandates, and Basel III bank capital rules against shadow-banking migration.',
    sections: [
      {
        heading: 'Concentrated Digital Gatekeepers vs. Chicago-Harvard Antitrust Jurisprudence',
        paragraphs: [
          'Over the past four decades, rising corporate markups (**De Loecker, Eeckhout & Unger 2020**) and the rise of trillion-dollar digital ecosystems—Alphabet, Apple, Amazon, Meta, and Microsoft—reignited the fiercest battle over **competition law** since the Gilded Age. **Neo-Brandeisian** reformers seek to dismantle dominant platforms and revive structural merger bans, whereas defenders of the **Consumer Welfare Standard** warn that punishing scale, vertical integration, and zero-price digital services degrades innovation and global **artificial intelligence** competitiveness.',
        ],
      },
      {
        heading: 'The Dual Edge of Regulation: Public-Interest Safeguards vs. Incumbent Capture',
        paragraphs: [
          'Beyond antitrust, modern political economy confronts a fundamental institutional paradox identified by Nobel laureate **George Stigler (1971)**: rules enacted to shield citizens from **asymmetric information** and **systemic tail risks**—from medical and aviation safety standards to **Dodd-Frank / Basel III** banking buffers—frequently get captured or expanded into entry barriers. Economists weigh how to slash guild-like **occupational licensing** and **NEPA permitting bottlenecks** while preventing catastrophic infrastructure, environmental, or financial runs.',
        ],
      },
    ],
    details: [
      'Contrasts 1911/1982 structural antitrust precedents (Standard Oil, AT&T) and the EU Digital Markets Act against Chicago/Harvard output-and-price welfare tests.',
      'Examines empirical evidence on U.S. occupational licensing (~25% of workers licensed vs. ~5% in 1950) and multi-year NEPA environmental litigation delays on clean energy and semiconductor fabs.',
      'Weighs post-2008 and post-2023 SVB bank equity capital rules against small-business credit availability and the $1.7T+ surge in non-bank private credit.',
    ],
    sources: [
      {
        title: 'The Rise of Market Power and the Macroeconomic Implications',
        url: 'https://academic.oup.com/qje/article/135/2/561/5714769',
        publisher: 'Quarterly Journal of Economics (Jan De Loecker, Jan Eeckhout & Gabriel Unger)',
        year: '2020',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'Protecting Competition in the American Economy: Merger Control, Tech Titans, Labor Markets',
        url: 'https://www.aeaweb.org/articles?id=10.1257/jep.33.3.69',
        publisher: 'Journal of Economic Perspectives (Carl Shapiro)',
        year: '2019',
        category: 'Scholarship',
      },
      {
        title: '2023 Merger Guidelines',
        url: 'https://www.justice.gov/atr/2023-merger-guidelines',
        publisher: 'U.S. Department of Justice & Federal Trade Commission',
        year: '2023',
        category: 'Court / Official Record',
      },
    ],
    tags: ['Regulation & Markets', 'Governance', 'Macroeconomics', 'Empirical Studies'],
    era: '1970s–Present',
  },

  // ============================================================================
  // THESIS 6A: Neo-Brandeisian Antitrust vs. Consumer Welfare Standard
  // ============================================================================
  {
    id: 'thesis-neo-brandeis-antitrust',
    parentId: 'pillar-econ-antitrust',
    kind: 'thesis',
    title: 'Antitrust Should Replace the "Consumer Welfare Standard" to Break Up Big Tech Gatekeepers',
    summary:
      'Debates whether antitrust enforcement should abandon Robert Bork’s price-centric Consumer Welfare Standard in favor of Neo-Brandeisian structural separations, merger bans, and non-discrimination rules targeting dominant digital platforms.',
    sections: [
      {
        heading: 'From Brandeis to Bork and the Neo-Brandeisian Revival',
        paragraphs: [
          'For forty years after **Robert Bork’s *The Antitrust Paradox* (1978)**, U.S. courts evaluated mergers and alleged monopolization almost exclusively through the **Consumer Welfare Standard**—asking whether challenged conduct raises consumer prices or restricts short-run output. Beginning with **Lina Khan’s** landmark 2017 *Yale Law Journal* essay (*Amazon’s Antitrust Paradox*) and **Tim Wu’s *The Curse of Bigness* (2018)**, the **Neo-Brandeisian** movement argued this price test is blind to digital platforms that offer **zero-price** search, social media, or subsidized shipping while entrenching bottleneck control over commerce, worker wages, independent merchants, and democratic speech.',
        ],
      },
      {
        heading: 'Structural Breakups vs. Dynamic Innovation & Startup Ecosystems',
        paragraphs: [
          'Under FTC Chair **Lina Khan**, DOJ Antitrust Chief **Jonathan Kanter**, and European Commissioner **Margrethe Vestager** (**EU Digital Markets Act**), enforcers launched historic monopolization suits against **Google, Apple, Amazon, and Meta** while challenging vertical and nascent-competitor mergers. Mainstream industrial-organization economists—led by **Herbert Hovenkamp** and **Carl Shapiro**—agree digital gatekeepers require tougher scrutiny, yet warn that discarding economic welfare for a populist **"big is bad"** doctrine punishes economies of scale, raises consumer prices, and freezes the venture-capital startup pipeline.',
        ],
      },
    ],
    details: [
      'The top five U.S. technology platforms account for ~25–30% of S&P 500 market capitalization and control core mobile OS, search, cloud, and e-commerce rails.',
      'DOJ won a landmark federal liability ruling in U.S. v. Google LLC (Aug 2024) holding Google’s $26B/yr exclusive search-default payments illegally maintained a 90% search monopoly.',
      'Contrasts ex-ante structural separation (barring a platform from competing on its own marketplace) against case-by-case economic proof of consumer or innovation harm.',
    ],
    sources: [
      {
        title: 'Amazon’s Antitrust Paradox',
        url: 'https://www.yalelawjournal.org/note/amazons-antitrust-paradox',
        publisher: 'Yale Law Journal (Lina M. Khan)',
        year: '2017',
        category: 'Scholarship',
      },
      {
        title: 'On the Meaning of Antitrust’s Consumer Welfare Principle',
        url: 'https://scholarship.law.upenn.edu/faculty_scholarship/2092/',
        publisher: 'Penn Carey Law / Review of Industrial Organization (Herbert Hovenkamp)',
        year: '2019',
        category: 'Scholarship',
      },
    ],
    tags: ['Regulation & Markets', 'Governance', 'Trade & Industry'],
    era: '1978–Present',
  },
  {
    id: 'pro-neo-brandeis-khan-structural-separation',
    parentId: 'thesis-neo-brandeis-antitrust',
    kind: 'pro',
    title: 'Lina Khan & Tim Wu: Platform Self-Preferencing, Data Moats & "Killer Acquisitions"',
    summary:
      'Neo-Brandeisians contend that multi-sided network effects, algorithmic self-preferencing, and hundreds of unreviewed "killer acquisitions" allow Big Tech gatekeepers to extract monopoly rents from third-party sellers and crush nascent rivals before they can scale.',
    sections: [
      {
        heading: 'Dual-Role Conflicts of Interest & Platform Self-Preferencing',
        paragraphs: [
          'In ***Amazon’s Antitrust Paradox* (2017)**, **Lina Khan** demonstrated how a dominant digital infrastructure provider that simultaneously operates as a **marketplace umpire** and a **competing private-label merchant** possesses both the data and incentive to rig market outcomes. Platforms can harvest real-time proprietary sales data from independent third-party sellers to launch copycat **Amazon Basics** goods, demote rivals in search rankings unless they buy high-margin advertising or fulfillment (**~45%–50% total seller take rates**), and impose **30% App Store "tolls"** with anti-steering gag rules. **Tim Wu** likens such bottlenecks to nineteenth-century railroads, arguing **structural separation** (like the 1906 Hepburn Act) is cleaner than endless behavioral policing.',
        ],
      },
      {
        heading: '"Killer Acquisitions" & Unchecked Nascent-Rival Consolidation',
        paragraphs: [
          'Empirical research in the *Journal of Political Economy* by **Colleen Cunningham, Florian Ederer, and Song Ma (2021)** coined **"killer acquisitions"** after proving incumbents systematically buy innovative startups to terminate overlapping R&D pipelines and preempt future competition—estimating **5.3% to 7.4%** of pharmaceutical acquisitions were pure killer deals. Between 2000 and 2020, **Google, Meta, Amazon, Apple, and Microsoft** completed **over 800 acquisitions** (including **Instagram, WhatsApp, DoubleClick, YouTube, and Waze**) with virtually zero court challenges because Chicago-school price models struggled to quantify lost *future* horizontal competition in zero-price ad markets.',
        ],
      },
    ],
    details: [
      'Cunningham, Ederer & Ma (2021, JPE) proved dominant incumbents acquire startups specifically to shut down competing innovation projects below Hart-Scott-Rodino merger reporting thresholds.',
      'Institute for Local Self-Reliance & House Judiciary Subcommittee investigations (2020) documented Amazon’s average fee cut from third-party sellers rising from ~19% (2014) to ~45% (2023).',
      'Neo-Brandeisians emphasize Sherman Act (1890) and Clayton Act (1914) legislative history: Congress explicitly sought to prevent concentrated private autocracy, monopsony wage suppression, and supplier coercion.',
    ],
    sources: [
      {
        title: 'Killer Acquisitions',
        url: 'https://www.journals.uchicago.edu/doi/10.1086/712506',
        publisher: 'Journal of Political Economy (Colleen Cunningham, Florian Ederer & Song Ma)',
        year: '2021',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'Investigation of Competition in Digital Markets: Majority Staff Report and Recommendations',
        url: 'https://www.govinfo.gov/app/details/CPRT-117HPRT47832',
        publisher: 'U.S. House Judiciary Subcommittee on Antitrust',
        year: '2020',
        category: 'Court / Official Record',
      },
      {
        title: 'The Curse of Bigness: Antitrust in the New Gilded Age',
        url: 'https://cup.columbia.edu/book/the-curse-of-bigness/9780999745465',
        publisher: 'Columbia Global Reports (Tim Wu)',
        year: '2018',
        category: 'Scholarship',
      },
    ],
    tags: ['Regulation & Markets', 'Governance', 'Empirical Studies', 'Labor & Welfare'],
    era: '2017–Present',
  },
  {
    id: 'con-consumer-welfare-bork-hovenkamp',
    parentId: 'thesis-neo-brandeis-antitrust',
    kind: 'con',
    title: 'Bork & Hovenkamp: Zero-Price Consumer Surplus, AI R&D Scale & Startup VC Exit Chill',
    summary:
      'Defenders of the Consumer Welfare Standard argue Big Tech platforms generate hundreds of billions in annual consumer surplus, lead global AI and cloud R&D, and rely on M&A exits to fund risk-taking venture startups.',
    sections: [
      {
        heading: 'Massive Zero-Price Consumer Surplus, Scale Economies & AI R&D Leadership',
        paragraphs: [
          'Leading antitrust scholar **Herbert Hovenkamp** (author of the definitive *Antitrust Law* treatise) clarifies that the modern **Consumer Welfare Standard** measures **marketwide output, product quality, and innovation**—not merely nominal sticker prices—and prevents judges from protecting high-cost competitors at consumers’ expense. MIT economist **Erik Brynjolfsson, Avinash Collis, and Felix Eggers (2019, PNAS)** used incentive-compatible choice experiments to measure the **consumer surplus** of "free" digital goods, finding U.S. users value **search engines at ~$17,500/year**, digital maps at **$3,600/year**, and video streaming at **$1,170/year**. Meanwhile, U.S. hyperscalers invest **$200B–$300B+ annually** in **AI frontier models, custom silicon, and cloud infrastructure**, outpacing heavily regulated Europe.',
        ],
      },
      {
        heading: 'How Blanket M&A Blocks Chill Venture Capital & Degrade Integrated Products',
        paragraphs: [
          'Venture-capital empirical data (**NVCA / PitchBook**) show that **acquisitions account for 80% to 90% of successful VC-backed startup exits**, recycling capital and engineering talent into new company formation; blocking vertical or non-horizontal tech mergers (**such as FTC losses in *Meta/Within* and *Microsoft/Activision***) starves early-stage founders of funding—a phenomenon dubbed **"little tech" collateral damage** by **Marc Andreessen** and **Sokol & Zheng**. Furthermore, forced structural breakups—forbidding Google Search from showing embedded Google Maps or banning Amazon Prime two-day fulfillment for private-label batteries—directly **degrade consumer convenience** and raise household retail prices.',
        ],
      },
    ],
    details: [
      'Brynjolfsson, Collis & Eggers (2019, PNAS) demonstrated zero-price digital services generate trillions of dollars in unmeasured household consumer surplus absent from GDP statistics.',
      'Europe’s tech ecosystem produces a tiny fraction of U.S. trillion-dollar innovators despite aggressive ex-ante EU regulatory regimes (GDPR, DMA, AI Act), highlighted in Mario Draghi’s 2024 EU Competitiveness Report.',
      'In pitchbook/NVCA data, M&A exits outnumber IPOs roughly 9-to-1; chilling acquisitions reduces ex-ante seed VC investment in AI, biotech, and cybersecurity startups.',
      'Instagram grew from 13 employees and zero revenue at its 2012 acquisition into a 2-billion-user global competitor precisely by leveraging Meta’s ad-tech, spam-filtering, and server scale.',
    ],
    sources: [
      {
        title: 'Using Massive Online Choice Experiments to Measure Changes in Well-Being',
        url: 'https://www.pnas.org/doi/10.1073/pnas.1815663116',
        publisher: 'Proceedings of the National Academy of Sciences (Erik Brynjolfsson, Avinash Collis & Felix Eggers)',
        year: '2019',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'The Future of European Competitiveness (The Draghi Report)',
        url: 'https://commission.europa.eu/topics/strengthening-european-competitiveness/eu-competitiveness-looking-ahead_en',
        publisher: 'European Commission (Mario Draghi)',
        year: '2024',
        category: 'Court / Official Record',
      },
    ],
    tags: ['Regulation & Markets', 'Macroeconomics', 'Trade & Industry', 'Empirical Studies'],
    era: '1978–Present',
    relatedIds: ['pro-nuclear-baseload-messmer-ai-demand', 'con-single-payer-wait-times-biopharma-rd'],
  },
  {
    id: 'con-rebuttal-hovenkamp-output-test-remedy',
    parentId: 'con-consumer-welfare-bork-hovenkamp',
    kind: 'con',
    title: 'Post-Chicago Synthesis: Enforcing Output/Innovation Harm & Interoperability Without Breakups',
    summary:
      'Post-Chicago economists (Carl Shapiro, Fiona Scott Morton, Herbert Hovenkamp) argue courts already win major tech monopoly cases under rigorous economic-harm standards when remedies target exclusionary contracts and data portability rather than blunt breakups.',
    sections: [
      {
        heading: 'U.S. v. Microsoft (2001) & U.S. v. Google (2024) Prove Economic Antitrust Works',
        paragraphs: [
          'Economists **Carl Shapiro**, **Fiona Scott Morton**, and **Herbert Hovenkamp** reject a false binary between laissez-faire Chicago passivity and non-economic Neo-Brandeisian populism. Both the **D.C. Circuit’s unanimous *U.S. v. Microsoft* (2001)** landmark and Judge Amit Mehta’s **2024 *U.S. v. Google* Search monopoly ruling** succeeded squarely within **Consumer Welfare / Post-Chicago economics**: proving with internal experiments and game theory that **$26 billion in exclusive default-browser revenue-sharing agreements** foreclosed rivals from achieving minimum efficient query scale, depressing search quality and ad-auction competition.',
        ],
      },
      {
        heading: 'Targeted Interoperability, Banning Exclusive Defaults & Burden-Shifting Mergers',
        paragraphs: [
          'Rather than breaking integrated engineering teams apart or protecting higher-cost brick-and-mortar shops through elevated consumer prices, the **Post-Chicago synthesis** favors **pro-competitive behavioral and interoperability remedies** tailored to specific market bottlenecks: banning exclusive default-distribution contracts, mandating **open APIs, data portability, choice screens, and multi-homing**, shifting the statutory burden of proof onto dominant monopolists acquiring nascent horizontal competitors, and aggressively prosecuting **labor-market monopsony** (wage-fixing, no-poach pacts, and non-compete clauses)—curbing gatekeeper entrenchment while preserving economic consumer and worker welfare as an objective, falsifiable judicial lodestar.',
        ],
      },
    ],
    details: [
      'U.S. v. Google LLC (D.D.C. 2024) established illegal monopoly maintenance under Section 2 of the Sherman Act using rigorous economic evidence of scale foreclosure rather than abandoning consumer welfare.',
      'Requiring open APIs, choice screens, and ban on anti-steering rules lowers switching costs so startups can contest dominant platforms on merit without destroying integrated cloud/OS security.',
      'Economic analysis of labor monopsony (Azar, Marinescu & Steinbaum 2020) expands welfare enforcement to workers harmed by wage-fixing and non-compete agreements.',
    ],
    sources: [
      {
        title: 'Antitrust in a Time of Populism',
        url: 'https://www.sciencedirect.com/science/article/pii/S0167718718300031',
        publisher: 'International Journal of Industrial Organization (Carl Shapiro)',
        year: '2018',
        category: 'Scholarship',
      },
      {
        title: 'Labor Market Concentration',
        url: 'https://jhr.uwpress.org/content/57/S/S167',
        publisher: 'Journal of Human Resources (José Azar, Ioana Marinescu & Marshall Steinbaum)',
        year: '2022',
        category: 'Empirical / Economic Study',
      },
    ],
    tags: ['Regulation & Markets', 'Empirical Studies', 'Labor & Welfare'],
    era: '2001–Present',
  },

  // ============================================================================
  // THESIS 6B: Deregulating Occupational Licensing & Permitting
  // ============================================================================
  {
    id: 'thesis-occupational-financial-deregulation',
    parentId: 'pillar-econ-antitrust',
    kind: 'thesis',
    title: 'Deregulating Occupational Licensing & Permitting Unleashes Competition and Productivity',
    summary:
      'Examines whether state occupational licensing boards and procedural environmental permitting laws (such as NEPA) primarily operate as Stiglerian incumbent cartels that inflate prices and block infrastructure, or serve as vital safeguards against asymmetric information and environmental harm.',
    sections: [
      {
        heading: 'The Fivefold Expansion of Occupational Licensing & Procedural Veto Points',
        paragraphs: [
          'In 1950, barely **5% of the U.S. workforce** required a government license to practice a trade—principally physicians, attorneys, dentists, and civil engineers. By the 2010s–2020s, **Morris Kleiner and Alan Krueger** documented that state **occupational licensing covered ~25% of U.S. workers**—eclipsing private-sector unionization—extending across interior designers, florists, auctioneers, hair braiders, cosmetologists, and landscape contractors, while **National Environmental Policy Act (NEPA)** litigation and state equivalents (**CEQA**) stretched average federal Environmental Impact Statements to **4.5 years** and over **1,600 pages**.',
        ],
      },
      {
        heading: 'Regulatory Capture vs. Consumer & Community Risk Protection',
        paragraphs: [
          'An unusual bipartisan **"Abundance" and market-reform coalition**—spanning Chicago-school public-choice economists, Obama-Biden CEA economists, and supply-side progressives (**Ezra Klein, Derek Thompson**)—argues practitioner-dominated licensing boards and multi-year citizen-suit permitting vetoes represent textbook **Stiglerian rent-seeking bottlenecks** that inflate service prices, block upward mobility, and paralyze clean-energy construction. Defenders in labor unions, medical specialty societies, and environmental-justice groups counter that weakening ex-ante credentialing and environmental review shifts irreversible health, aviation, structural, and toxic-pollution tail risks onto uninformed consumers and disenfranchised fence-line communities.',
        ],
      },
    ],
    details: [
      'Roughly 1 in 4 U.S. workers requires a state occupational license today—a higher share than private-sector union membership (~6%)—compared with ~1 in 20 workers in 1950.',
      'Council on Environmental Quality (CEQ) data show average federal NEPA Environmental Impact Statements take ~4.5 years (and 6+ years for highway and transmission projects).',
      'Frames the classic institutional trade-off between Stigler’s Regulatory Capture theory (1971) and Akerlof’s Asymmetric Information / "Lemons" failure (1970).',
    ],
    sources: [
      {
        title: 'Analyzing the Extent and Influence of Occupational Licensing on the Labor Market (NBER w14979)',
        url: 'https://www.nber.org/papers/w14979',
        publisher: 'National Bureau of Economic Research / Journal of Labor Economics (Morris M. Kleiner & Alan B. Krueger)',
        year: '2013',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'Environmental Impact Statement Timelines (2010–2018)',
        url: 'https://ceq.doe.gov/',
        publisher: 'White House Council on Environmental Quality (CEQ)',
        year: '2020',
        category: 'Court / Official Record',
      },
    ],
    tags: ['Regulation & Markets', 'Labor & Welfare', 'Governance', 'Empirical Studies'],
    era: '1970–Present',
  },
  {
    id: 'pro-stigler-capture-licensing-nepa',
    parentId: 'thesis-occupational-financial-deregulation',
    kind: 'pro',
    title: 'Stiglerian Capture, 25% Workforce Licensing Cartels & NEPA Clean-Build Paralysis',
    summary:
      'Public-choice economists and "Abundance" reformers show practitioner-run licensing boards inflate consumer prices by 10–18% while blocking interstate mobility, and weaponized NEPA litigation delays clean-energy transmission lines, transit, and housing more than fossil projects.',
    sections: [
      {
        heading: 'George Stigler’s Regulatory Capture & Kleiner-Krueger Licensing Rents',
        paragraphs: [
          'Nobel laureate **George Stigler’s *The Theory of Economic Regulation* (1971)** established that concentrated producer groups routinely lobby the state to erect licensing barriers that restrict competitive entry and transfer monopoly rents from dispersed consumers to incumbents. Empirical work by **Morris Kleiner & Alan Krueger (2013)** and a landmark **Obama White House CEA / Treasury Report (2015)** found state licensing raises wages of licensed insiders by **10% to 18%**, inflates consumer prices without measurable quality gains in 10 of 12 studied studies, bars **millions of workers with criminal records or foreign credentials** from lawful employment, and cuts **interstate migration** of licensed workers by **7% to 36%** (Johnson & Kleiner 2020).',
        ],
      },
      {
        heading: 'Medical Scope-of-Practice Guilds & NEPA Litigation Blocking Clean Infrastructure',
        paragraphs: [
          'Even within healthcare, **physician residency slot caps** and state **scope-of-practice restrictions** barring **Nurse Practitioners (NPs)** and dental hygienists from practicing independently inflate rural primary-care costs despite randomized evidence showing equivalent primary-care outcomes. Simultaneously, Stanford’s **Environmental Policy Clinic** and **Institute for Progress** document that **NEPA** and California’s **CEQA** have mutated from 1970 disclosure statutes into **procedural litigation weapons**: over **60% of clean-energy solar, wind, geothermal, and high-voltage transmission EIS challenges** delay decarbonization and CHIPS Act semiconductor fabs for half a decade.',
        ],
      },
    ],
    details: [
      'States often mandate 1,000–2,100 hours of costly tuition for cosmetologists or barbers while requiring only ~150–400 hours for Emergency Medical Technicians (EMTs).',
      'Johnson & Kleiner (2020, AEJ: Economic Policy) found state-specific licensing requirements reduce interstate migration rates of affected occupations by 7% compared to national-exam professions.',
      'Over 85% of state occupational licensing boards are composed of a majority of active market incumbents—creating direct antitrust tension addressed in North Carolina State Board of Dental Examiners v. FTC (2015).',
      'Clean-energy high-voltage transmission lines like SunZia (New Mexico–Arizona) required 17 years of federal and state permitting approvals before breaking ground.',
    ],
    sources: [
      {
        title: 'The Theory of Economic Regulation',
        url: 'https://www.jstor.org/stable/3003160',
        publisher: 'Bell Journal of Economics and Management Science (George J. Stigler)',
        year: '1971',
        category: 'Scholarship',
      },
      {
        title: 'Is Occupational Licensing a Barrier to Interstate Migration?',
        url: 'https://www.aeaweb.org/articles?id=10.1257/pol.20170704',
        publisher: 'American Economic Journal: Economic Policy (Janna E. Johnson & Morris M. Kleiner)',
        year: '2020',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'Understanding NEPA Litigation: Data on Clean Energy and Infrastructure',
        url: 'https://ifp.org/',
        publisher: 'Institute for Progress (Aidan Mackenzie & Eli Dourado)',
        year: '2023',
        category: 'Empirical / Economic Study',
      },
    ],
    tags: ['Regulation & Markets', 'Labor & Welfare', 'Energy & Climate', 'Empirical Studies'],
    era: '1971–Present',
    relatedIds: ['pro-yimby-superstar-supply-filtering', 'con-rebuttal-nuclear-regulatory-alara-reform'],
  },
  {
    id: 'con-licensing-asymmetric-info-safety',
    parentId: 'thesis-occupational-financial-deregulation',
    kind: 'con',
    title: 'Asymmetric Information in High-Risk Sectors, Boeing/Rail Lessons & Environmental Justice',
    summary:
      'Economists and consumer advocates counter that where buyers face severe asymmetric information and irreversible tail risks—surgery, aviation, structural engineering, toxic waste—ex-ante licensure and NEPA review prevent deadly "race-to-the-bottom" failures.',
    sections: [
      {
        heading: 'Akerlof’s "Market for Lemons," Irreversible Harm & Delegated Self-Regulation Failures',
        paragraphs: [
          'Nobel laureates **George Akerlof (1970)** and **Kenneth Arrow (1963)** demonstrated that when consumers cannot observe technical quality prior to purchase—and ex-post tort lawsuits cannot undo a botched neurosurgery, collapsed apartment tower, contaminated sterile compounding pharmacy (2012 New England meningitis outbreak killing 64 patients), or commercial airliner defect—unregulated markets unravel into a **"lemons" race to the bottom**. High-profile disasters following regulatory Hollowing-out—including **FAA’s delegated Organization Designation Authorization (ODA) oversight of the Boeing 737 MAX** (346 fatalities) and the **2023 East Palestine, Ohio toxic rail derailment**—illustrate the immense societal cost of industry self-policing.',
        ],
      },
      {
        heading: 'Minority Wage Signaling Gains & NEPA Fence-Line Community Protections',
        paragraphs: [
          'In labor economics, **Peter Blair and Bobby Chung (2019)** found an unexpected equity benefit of occupational licensing: standardized objective credentials **narrow racial and gender wage gaps** by providing Black men with verified non-felony and skill signals that overcome statistical discrimination by employers. Likewise, environmental-justice scholars note that mid-century interstate highways and petrochemical plants were systematically routed through disenfranchised minority neighborhoods *before* **NEPA (1970)** gave fence-line communities legal standing to demand pollution mitigation and public hearings.',
        ],
      },
    ],
    details: [
      'Law & Sukar (2005, Journal of Law and Economics) showed Progressive-Era medical licensing and pure-food laws significantly reduced maternal/infant mortality and foodborne illness.',
      'Blair & Chung (2019) found occupational licensing reduces the racial wage gap between Black and white workers in licensed trades by serving as an objective quality credential.',
      'U.S. House Transportation Committee’s 2020 investigation of the Boeing 737 MAX crashes cited regulatory capture and excessive FAA delegation of safety certification to manufacturer employees.',
    ],
    sources: [
      {
        title: 'The Market for "Lemons": Quality Uncertainty and the Market Mechanism',
        url: 'https://academic.oup.com/qje/article-abstract/84/3/488/1896241',
        publisher: 'Quarterly Journal of Economics (George A. Akerlof)',
        year: '1970',
        category: 'Scholarship',
      },
      {
        title: 'Occupational Licensing and Racial and Gender Wage Gaps: Evidence from the Survey of Income and Program Participation (NBER w25009)',
        url: 'https://www.nber.org/papers/w25009',
        publisher: 'National Bureau of Economic Research (Peter Q. Blair & Bobby W. Chung)',
        year: '2018',
        category: 'Empirical / Economic Study',
      },
    ],
    tags: ['Regulation & Markets', 'Labor & Welfare', 'Housing & Healthcare', 'Governance'],
    era: '1963–Present',
    relatedIds: ['pro-single-payer-arrow-admin-monopsony'],
  },
  {
    id: 'con-rebuttal-smart-certification-fast-track',
    parentId: 'con-licensing-asymmetric-info-safety',
    kind: 'con',
    title: 'Risk-Tiered Reciprocity, Voluntary Certification & Substantive Standards Over Litigation Vetoes',
    summary:
      'Regulatory-design scholars resolve the impasse by separating high-hazard safety regulation from cartel entry barriers: replacing low-risk licensing with voluntary certification, enacting interstate reciprocity, and substituting clear substantive pollution rules for endless NEPA lawsuits.',
    sections: [
      {
        heading: 'Tiered Risk Calibration: Voluntary Certification & Interstate Licensure Compacts',
        paragraphs: [
          'Economists **Morris Kleiner** and **Cass Sunstein** emphasize that acknowledging asymmetric information in **neurosurgery and commercial aviation** provides zero justification for requiring **1,500 classroom hours to braid hair, arrange flowers, or hang drywall**. For low- and moderate-risk services, **voluntary state certification**, bonding/insurance, and verified digital consumer reviews solve information asymmetries without outlawing competitors. For healthcare and teaching, **universal interstate licensing reciprocity** (adopted by **20+ U.S. states** since 2019 alongside the **Nurse Licensure Compact**) and **full practice authority for Nurse Practitioners** preserve rigorous clinical standards while eliminating geographic guild walls.',
        ],
      },
      {
        heading: 'Why Europe Builds Faster & Cheaper: Substantive Rules vs. Adversarial Citizen Suits',
        paragraphs: [
          'Similarly, **NYU Marron Institute’s Transit Costs Project** and **"Abundance" scholars (Ezra Klein & Derek Thompson)** show countries like **Spain, France, and Denmark** enforce *stricter* substantive air, water, and climate standards than the United States while building subways and high-voltage grids at **one-third to one-fifth of U.S. cost and time**. The difference is institutional: European agencies apply clear, upfront **technocratic engineering and emissions rules**, whereas U.S. permitting relies on **"adversarial legalism"**—allowing wealthy NIMBY litigants to stall clean transit and geothermal projects for years over procedural paperwork.',
        ],
      },
    ],
    details: [
      'Over 20 U.S. states (starting with Arizona in 2019) enacted universal out-of-state occupational license recognition, boosting skilled worker inflows without increasing consumer safety complaints.',
      'NYU Marron Institute Transit Costs Project found U.S. urban rail projects cost 3x–7x more per kilometer than Madrid, Paris, or Seoul due to fragmented permitting, bespoke procurement, and litigation delays.',
      'Statutory shot-clocks (e.g., 1–2 year judicial review deadlines and categorical exemptions for brownfield solar/geothermal/infill housing) accelerate green infrastructure without weakening Clean Air/Clean Water emissions limits.',
    ],
    sources: [
      {
        title: 'Transit Costs Project: Understanding Why Transit Construction Costs So Much in the US',
        url: 'https://transitcosts.com/',
        publisher: 'NYU Marron Institute of Urban Management (Alon Levy, Eric Goldwyn & Elif Ensari)',
        year: '2023',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'Reforming Occupational Licensing Policies',
        url: 'https://www.brookings.edu/articles/reforming-occupational-licensing-policies/',
        publisher: 'Brookings Institution Hamilton Project (Morris M. Kleiner)',
        year: '2015',
        category: 'Scholarship',
      },
    ],
    tags: ['Regulation & Markets', 'Governance', 'Energy & Climate', 'Empirical Studies'],
    era: '2015–Present',
  },

  // ============================================================================
  // THESIS 6C: Financial Regulation, Bank Capital & Shadow Banking
  // ============================================================================
  {
    id: 'thesis-financial-regulation-systemic',
    parentId: 'pillar-econ-antitrust',
    kind: 'thesis',
    title: 'Strict Bank Capital Rules (Dodd-Frank & Basel III) Prevent Systemic Crises Without Strangling Credit',
    summary:
      'Debates whether tough post-2008 equity capital and liquidity mandates (Dodd-Frank, Basel III Endgame) are essential to cure "Too Big to Fail" moral hazard and bank runs, or excessively restrict SME lending while driving risk into unregulated shadow banking.',
    sections: [
      {
        heading: 'From the 2008 Lehman Meltdown to the 2023 Silicon Valley Bank Run',
        paragraphs: [
          'Modern banking is inherently fragile because banks perform **maturity transformation**—funding long-term illiquid loans and securities with instant-withdrawal short-term deposits. After extreme **30-to-1 leverage** and off-balance-sheet subprime derivatives triggered the **2008 Global Financial Crisis (GFC)**, Congress passed the **2010 Dodd-Frank Act** and global regulators crafted **Basel III**, doubling big banks’ **Common Equity Tier 1 (CET1)** capital ratios, introducing **Liquidity Coverage Ratios (LCR)**, and mandating annual Federal Reserve stress tests. Yet the March 2023 digital run on **Silicon Valley Bank ($209B assets)** and **Signature Bank** revived fierce debate over rolled-back regional bank rules and uninsured deposits.',
        ],
      },
      {
        heading: 'High Bank Equity Buffers vs. Credit Contraction & Non-Bank Migration',
        paragraphs: [
          'Academic financial economists led by **Anat Admati and Martin Hellwig** argue banks remain dangerously undercapitalized and subsidized by implicit taxpayer bailout guarantees. Banking industry leaders, community lenders, and market-liquidity researchers counter that aggressive **Basel III Endgame** risk-weight hikes raise borrowing spreads for Main Street businesses, burden regional banks with crushing compliance overhead, and push trillions in credit intermediation out of regulated banks into opaque **private credit funds and crypto stablecoins**.',
        ],
      },
    ],
    details: [
      'Large U.S. G-SIB banks increased CET1 capital ratios from ~4–5% of risk-weighted assets pre-2008 to ~12–13.5% under Dodd-Frank and Basel III.',
      'In March 2023, depositors pulled $42 billion from Silicon Valley Bank in 24 hours (and queued $100B more) after rising Fed interest rates eroded its unhedged long-duration Treasury/MBS portfolio.',
      'Non-bank financial intermediation ("shadow banking" and private credit, now >$1.7T–$2T globally) has captured a growing share of corporate and middle-market lending since 2010.',
    ],
    sources: [
      {
        title: 'Basel III: International Regulatory Framework for Banks',
        url: 'https://www.bis.org/bcbs/basel3.htm',
        publisher: 'Bank for International Settlements (Basel Committee on Banking Supervision)',
        year: '2023',
        category: 'Primary Text / Treaty',
      },
      {
        title: 'Review of the Federal Reserve’s Supervision and Regulation of Silicon Valley Bank',
        url: 'https://www.federalreserve.gov/publications/files/svb-review-20230428.pdf',
        publisher: 'Board of Governors of the Federal Reserve System (Michael S. Barr)',
        year: '2023',
        category: 'Court / Official Record',
      },
    ],
    tags: ['Regulation & Markets', 'Macroeconomics', 'Governance', 'Empirical Studies'],
    era: '2008–Present',
  },
  {
    id: 'pro-admati-hellwig-bank-capital-tbtf',
    parentId: 'thesis-financial-regulation-systemic',
    kind: 'pro',
    title: 'Admati & Hellwig Equity Logic, 2008/2023 SVB Runs & Ending "Too Big to Fail" Moral Hazard',
    summary:
      'Financial economists demonstrate that equity capital is NOT idle "set-aside cash," that rolling back Dodd-Frank thresholds enabled the 2023 SVB systemic bailout, and that 20%+ equity buffers curb reckless risk-taking while supporting steadier lending.',
    sections: [
      {
        heading: 'Admati & Hellwig Refute the "Capital Reserves" Fallacy & TBTF Subsidies',
        paragraphs: [
          'In ***The Bankers’ New Clothes* (2013/2024)**, Stanford’s **Anat Admati** and Max Planck’s **Martin Hellwig** dismantle bank lobbyists’ claim that higher capital rules force banks to "hold cash on the sidelines." Applying the **Modigliani-Miller theorem**, they clarify that **bank equity is a funding source on the liability side, not a sterile asset**: a bank funded with **20%–25% shareholder equity** rather than 94% debt can invest every dollar into productive loans while absorbing severe asset losses without insolvency. Bankers resist equity solely because **tax deductibility of debt** and implicit **"Too Big to Fail" (TBTF)** bailout guarantees let executives privatize high-ROE upside in booms and socialize tail losses onto taxpayers and the FDIC in busts.',
        ],
      },
      {
        heading: 'The 2018 Dodd-Frank Rollback & 2023 Silicon Valley Bank Natural Lesson',
        paragraphs: [
          'The **March 2023 failures of Silicon Valley Bank, Signature Bank, and First Republic**—three of the four largest bank collapses in U.S. history—validated warnings against regulatory tailoring. In **2018, Congress enacted EGRRCPA (S. 2155)** after heavy mid-sized bank lobbying, raising the enhanced-supervision threshold from **$50 billion to $250 billion**. Exempted from stringent liquidity rules and unrealized **Available-for-Sale (AFS)** bond loss deductions from regulatory capital, SVB funded long-dated mortgages/Treasuries with **94% uninsured tech-startup deposits**, forcing the Fed and Treasury to invoke the **systemic-risk exception** to guarantee all uninsured depositors and avert contagion.',
        ],
      },
    ],
    details: [
      'BIS empirical studies (Gambacorta & Shin 2018) found better-capitalized banks actually enjoy lower debt funding costs and expand loan supply faster during macroeconomic downturns than thinly capitalized peers.',
      'The 2008 Global Financial Crisis wiped out ~$10+ trillion in U.S. household wealth and cost millions of jobs—far outweighing the 10–25 basis points estimated transition cost of higher bank equity.',
      'SVB lobbied explicitly for the 2018 S. 2155 rollback; had Basel III unrealized AFS bond losses and Liquidity Coverage Ratios applied to $100B+ banks, SVB’s duration mismatch would have breached capital triggers years earlier.',
    ],
    sources: [
      {
        title: 'The Bankers’ New Clothes: What’s Wrong with Banking and What to Do about It',
        url: 'https://www.gsb.stanford.edu/faculty-research/books/bankers-new-clothes-what-s-wrong-banking-what-do-about-it',
        publisher: 'Princeton University Press / Stanford GSB (Anat Admati & Martin Hellwig)',
        year: '2024',
        category: 'Scholarship',
      },
      {
        title: 'Why Bank Capital Matters for Monetary Policy',
        url: 'https://www.sciencedirect.com/science/article/pii/S1042957316300535',
        publisher: 'Journal of Financial Intermediation / BIS (Leonardo Gambacorta & Hyun Song Shin)',
        year: '2018',
        category: 'Empirical / Economic Study',
      },
    ],
    tags: ['Regulation & Markets', 'Macroeconomics', 'Empirical Studies'],
    era: '2008–Present',
    relatedIds: ['con-pension-transition-cost-sequence-risk'],
  },
  {
    id: 'con-basel-endgame-credit-shadow-banking',
    parentId: 'thesis-financial-regulation-systemic',
    kind: 'con',
    title: 'SME Credit Tightening, Community Bank Consolidation & Migration to Opaque Shadow Banking',
    summary:
      'Critics argue punitive Basel III Endgame capital surcharges and Dodd-Frank compliance burdens widen borrowing spreads for small businesses and low-down-payment mortgages, crush community banks, and push risk into uninsurable private-credit shadow markets.',
    sections: [
      {
        heading: 'Higher Borrowing Costs for Main Street SMEs, Mortgages & Treasury Market-Making',
        paragraphs: [
          'Real-world banking markets depart from frictionless **Modigliani-Miller** assumptions due to asymmetric information on opaque **small and medium enterprise (SME)** borrowers and agency frictions. Empirical studies of post-Dodd-Frank and European capital hikes (** Cortés et al. 2020**; **Gropp et al. 2019, Review of Financial Studies**) show banks regularly meet steeper risk-weighted capital ratios not by issuing dilutive new shares, but by **shrinking risk-weighted assets**—cutting small-business credit lines, exiting low-down-payment minority mortgage origination, and pulling back dealer balance-sheet capacity that stabilizes **U.S. Treasury market liquidity** during stress episodes (such as March 2020).',
        ],
      },
      {
        heading: 'Community Bank Consolidation & The $1.7T+ Shadow-Banking Migration',
        paragraphs: [
          'Harvard Kennedy School studies (**Lux & Greene 2015**) documented that Dodd-Frank’s thousands of pages of fixed compliance costs disproportionately hammered **community banks (<$10B assets)**—which originate nearly **half of U.S. small-business and agricultural loans**—accelerating M&A consolidation that *increased* the deposit share of the top four "Too Big to Fail" megabanks. Simultaneously, **Buchak, Matvos, Piskorski & Seru (2018, JFE)** prove tight bank capital rules drove over **half of U.S. mortgage origination** to lightly capitalized non-bank fintech/shadow lenders and fueled the explosion of **$1.7+ trillion in unregulated private credit**, moving leverage outside the Fed’s discount-window safety net rather than eliminating systemic risk.',
        ],
      },
    ],
    details: [
      'Gropp et al. (2019, Review of Financial Studies) exploited the 2011 European Banking Authority capital exercise to show banks met higher capital mandates primarily by cutting corporate loan supply rather than raising equity.',
      'Buchak et al. (2018, Journal of Financial Economics) estimated regulatory burdens explain ~60% of shadow banks’ dramatic market-share surge in U.S. residential mortgages.',
      'Critics note SVB failed over basic interest-rate duration mismanagement—holding unhedged U.S. government bonds carrying a 0% Basel credit-risk weight—and supervisory neglect by Fed examiners who already issued 31 unheeded warnings.',
      'The number of FDIC-insured U.S. community banks fell by over 40% between 2010 and 2024 amid steep fixed legal and reporting overhead.',
    ],
    sources: [
      {
        title: 'Fintech, Regulatory Arbitrage, and the Rise of Shadow Banks',
        url: 'https://www.sciencedirect.com/science/article/pii/S0304405X1830237X',
        publisher: 'Journal of Financial Economics (Greg Buchak, Gregor Matvos, Tomasz Piskorski & Amit Seru)',
        year: '2018',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'Banks Response to Higher Capital Requirements: Evidence from a Quasi-Natural Experiment',
        url: 'https://academic.oup.com/rfs/article/32/1/266/5095515',
        publisher: 'Review of Financial Studies (Reint Gropp, Thomas Mosk, Steven Ongena & Carlo Wix)',
        year: '2019',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'Global Monitoring Report on Non-Bank Financial Intermediation',
        url: 'https://www.fsb.org/',
        publisher: 'Financial Stability Board (FSB)',
        year: '2024',
        category: 'Court / Official Record',
      },
    ],
    tags: ['Regulation & Markets', 'Macroeconomics', 'Empirical Studies', 'Trade & Industry'],
    era: '2010–Present',
  },
];
