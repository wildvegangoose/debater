import type { DebateNode } from '../../types/debate';

export const healthcareWelfareNodes: DebateNode[] = [
  {
    id: 'pillar-econ-healthcare',
    parentId: 'root-econ',
    kind: 'pillar',
    title: 'Healthcare Systems, Education Choice & Welfare Design',
    summary:
      'Examines how modern democracies finance and deliver life-cycle social goods—healthcare, K–12 schooling, and old-age pensions—testing single-payer versus multi-payer insurance, Friedmanite school choice versus public districts, and pre-funded pension capital versus Pay-As-You-Go entitlements.',
    sections: [
      {
        heading: 'Baumol’s Cost Disease, Social Insurance & Market-Design Trade-Offs',
        paragraphs: [
          'Healthcare, education, and retirement security together account for **over half of domestic public spending** across OECD democracies and experience persistent relative price inflation via **William Baumol’s "cost disease"** in labor-intensive human services. Unlike ordinary consumer widgets, these sectors feature **asymmetric information**, **adverse selection**, positive human-capital externalities, and multi-decade demographic horizons—making pure laissez-faire rare and shifting the core economic debate to *institutional architecture*: state monopoly provision versus publicly funded, regulated competition.',
        ],
      },
      {
        heading: 'Three Defining Institutional Debates Across the Welfare State',
        paragraphs: [
          'In **healthcare**, reformers pit tax-financed **single-payer** monopsony (Canada, UK Beveridge NHS) against fragmented U.S. employer insurance and European **Bismarckian multi-payer** systems. In **K–12 education**, **Milton Friedman’s** portable voucher and charter-school competition challenges residentially zoned public school districts. And in **pensions**, sub-replacement fertility is straining **Pay-As-You-Go (PAYG)** Social Security models, intensifying calls for **pre-funded mandatory savings** (Australia’s Superannuation, Sweden’s funded tier) and **sovereign wealth funds** (Norway’s GPFG).',
        ],
      },
    ],
    details: [
      'U.S. healthcare spending (~17.5% of GDP) exceeds OECD peers (~10–12% of GDP) by over $1.5 trillion annually while yielding lower average life expectancy.',
      'Over a dozen U.S. states enacted universal or near-universal Education Savings Account (ESA) and school-voucher programs between 2021 and 2025, igniting empirical battles over test scores and district fiscal health.',
      'OECD old-age dependency ratios are projected to nearly double by 2050, testing the fiscal solvency of unfunded Pay-As-You-Go pension promises.',
    ],
    sources: [
      {
        title: 'OECD Health Statistics Dataset & Health at a Glance',
        url: 'https://www.oecd.org/health/',
        publisher: 'Organisation for Economic Co-operation and Development (OECD)',
        year: '2024',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'Mirror, Mirror 2024: A Portrait of the Failing U.S. Health System — Comparing Performance Across 10 Nations',
        url: 'https://www.commonwealthfund.org/',
        publisher: 'The Commonwealth Fund',
        year: '2024',
        category: 'Watchdog / NGO',
      },
      {
        title: 'Pensions at a Glance: OECD and G20 Indicators',
        url: 'https://www.oecd.org/els/public-pensions/',
        publisher: 'OECD Publishing',
        year: '2023',
        category: 'Empirical / Economic Study',
      },
    ],
    tags: ['Housing & Healthcare', 'Labor & Welfare', 'Taxation & Fiscal', 'Demographics'],
    era: '1950s–Present',
  },

  // ============================================================================
  // THESIS 7A: Universal Single-Payer Healthcare vs. Private & Multi-Payer Markets
  // ============================================================================
  {
    id: 'thesis-universal-single-payer',
    parentId: 'pillar-econ-healthcare',
    kind: 'thesis',
    title: 'Universal Single-Payer Healthcare Outperforms Fragmented Private Insurance Markets',
    summary:
      'Tests whether tax-financed single-payer healthcare ("Medicare for All" / Beveridge-Canadian models) solves Arrowian adverse selection and slashes U.S. administrative waste, or induces non-price rationing queues and starves global biopharmaceutical R&D.',
    sections: [
      {
        heading: 'The U.S. Healthcare Outlier: 17.5% of GDP & Administrative Complexity',
        paragraphs: [
          'The United States operates a uniquely fragmented patchwork of employer-sponsored private plans, ACA marketplace insurers, Medicare, Medicaid, and VA care—spending roughly **17.5% of GDP (~$4.9 trillion, or ~$14,500 per person)** compared with **10% to 12.5% of GDP** across universal-coverage OECD peers. Despite world-leading oncology centers and specialist access for the well-insured, **~26 million Americans remain uninsured**, tens of millions face high deductibles or out-of-network billing shock, and U.S. life expectancy lags peer nations by **3 to 5 years**.',
        ],
      },
      {
        heading: 'Monopsony Cost Control vs. Non-Price Rationing & Regulated Competition',
        paragraphs: [
          'Single-payer advocates argue consolidating risk into one national public insurer eliminates insurer underwriting, unifies hospital fee schedules ("It’s the Prices, Stupid," **Gerard Anderson & Uwe Reinhardt**), and decouples healthcare from job loss. Market and comparative health economists counter that pure single-payer monopolies replace price signals with **surgical queues** (as in Canada and the UK NHS) and suppress **biomedical R&D incentives**, pointing also to **Bismarckian universal multi-payer** systems in Switzerland, Germany, and the Netherlands.',
        ],
      },
    ],
    details: [
      'Anderson, Reinhardt, Hussey & Petrosyan (Health Affairs) famously showed Americans do not consume more hospital days or doctor visits than OECD peers—U.S. unit prices for MRI scans, surgeries, and branded drugs are simply 2x–4x higher.',
      'Employer-tied health insurance creates "job lock," deterring entrepreneurship and labor mobility among workers managing chronic family conditions.',
      'Frames a three-cornered institutional comparison: U.S. fragmented private/public mix vs. Canadian/UK single-payer vs. Swiss/Dutch/German regulated multi-payer universalism.',
    ],
    sources: [
      {
        title: 'Uncertainty and the Welfare Economics of Medical Care',
        url: 'https://www.jstor.org/stable/1812044',
        publisher: 'American Economic Review (Kenneth J. Arrow)',
        year: '1963',
        category: 'Scholarship',
      },
      {
        title: 'It’s Still The Prices, Stupid: Why The US Spends So Much On Health Care, And A Tribute To Uwe Reinhardt',
        url: 'https://www.healthaffairs.org/doi/10.1377/hlthaff.2018.05144',
        publisher: 'Health Affairs (Gerard F. Anderson, Peter Hussey & Varduhi Petrosyan)',
        year: '2019',
        category: 'Empirical / Economic Study',
      },
    ],
    tags: ['Housing & Healthcare', 'Labor & Welfare', 'Regulation & Markets', 'Empirical Studies'],
    era: '1963–Present',
  },
  {
    id: 'pro-single-payer-arrow-admin-monopsony',
    parentId: 'thesis-universal-single-payer',
    kind: 'pro',
    title: 'Arrow’s Market-Failure Proof, Adverse Selection & Slashing 25%+ Billing Overhead',
    summary:
      'Building on Kenneth Arrow’s foundational 1963 theorem, single-payer proponents show private medical markets fail via adverse selection and asymmetric information, while unified public financing saves hundreds of billions in billing overhead and monopsony drug pricing.',
    sections: [
      {
        heading: 'Kenneth Arrow (1963), Adverse Selection & Zero-Elasticity Emergency Care',
        paragraphs: [
          'In the founding paper of health economics, Nobel laureate **Kenneth Arrow (1963, AER)** proved medical care violates every textbook requirement for efficient competitive markets: patients experiencing a heart attack or cancer diagnosis cannot comparison-shop prices, physicians hold profound **asymmetric information** over diagnostic necessity, and private insurers competing for profit inevitably engage in **cream-skimming and adverse selection** (**Rothschild & Stiglitz 1976**)—designing narrow networks and prior-authorization hurdles to repel sick, high-cost enrollees. Placing **100% of citizens into a single national risk pool** eliminates adverse-selection "death spirals" permanently.',
        ],
      },
      {
        heading: 'Eliminating ~$500B+ in Billing Overhead & Exercising Monopsony Bargaining Power',
        paragraphs: [
          'Harvard medical researchers **David Himmelstein, Terry Campbell, and Steffie Woolhandler (2020, *Annals of Internal Medicine*)** calculated that insurance and provider billing administration consumes **34.2% of total U.S. healthcare expenditures (~$2,500 per capita)** versus just **17.0% (~$550 per capita)** under **Canada’s single-payer Medicare**—because U.S. hospitals employ armies of coding clerks to negotiate thousands of incompatible private insurer contracts. Paired with **national monopsony fee schedules** and direct **prescription-drug price negotiation** (where Americans pay **2.5x to 4x** OECD prices for identical molecules, RAND 2024), single-payer achieves universal zero-deductible coverage within existing national outlays.',
        ],
      },
    ],
    details: [
      'Himmelstein, Campbell & Woolhandler (2020) estimated narrowing U.S. healthcare administrative overhead to Canadian single-payer levels would save >$600 billion annually.',
      'RAND Corporation (2024) found U.S. manufacturer prices for brand-name prescription drugs averaged 422% of prices in 33 comparison OECD nations with national price negotiation.',
      'Traditional Medicare’s direct administrative overhead runs ~1.5–2% of claims compared to 12–18% (including marketing, underwriting, executive pay, and profits) among private commercial insurers.',
      'Universal coverage eliminates medical-debt distress and delayed preventive care that drive costly emergency-room complications (Oregon Health Insurance Experiment, Baicker & Finkelstein).',
    ],
    sources: [
      {
        title: 'Health Care Administrative Costs in the United States and Canada, 2017',
        url: 'https://www.acpjournals.org/doi/10.7326/M19-2818',
        publisher: 'Annals of Internal Medicine (David U. Himmelstein, Terry Campbell & Steffie Woolhandler)',
        year: '2020',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'International Prescription Drug Price Comparisons: Estimates Using 2022 Data',
        url: 'https://www.rand.org/pubs/research_reports/RRA788-3.html',
        publisher: 'RAND Corporation (Andrew W. Mulcahy et al.)',
        year: '2024',
        category: 'Empirical / Economic Study',
      },
    ],
    tags: ['Housing & Healthcare', 'Empirical Studies', 'Taxation & Fiscal', 'Labor & Welfare'],
    era: '1963–Present',
    relatedIds: ['con-licensing-asymmetric-info-safety'],
  },
  {
    id: 'con-single-payer-wait-times-biopharma-rd',
    parentId: 'thesis-universal-single-payer',
    kind: 'con',
    title: 'UK NHS & Canadian Surgical Wait Queues, Moral Hazard & Global Biopharma R&D Subsidization',
    summary:
      'Critics argue tax-capped single-payer monopolies ration care through debilitating surgical and specialist wait lists, require massive payroll/income tax hikes, and would slash global biopharmaceutical innovation by up to 30–60%.',
    sections: [
      {
        heading: 'Non-Price Rationing Queues in Canada & UK NHS plus RAND Moral Hazard',
        paragraphs: [
          'When healthcare is priced at **$0 out-of-pocket** (confirmed in the landmark **RAND Health Insurance Experiment**, **Aron-Dine, Einav & Finkelstein 2013**, showing free care boosts utilization ~30% without improving most adult clinical outcomes) while global hospital budgets are capped by finance ministries, scarcity shifts from price rationing to **waiting-list rationing**. By 2023–2024, **NHS England’s elective treatment backlog topped 7.5 million patient pathways** amid junior-doctor strikes, while Canada’s **Fraser Institute (2024)** documented a record **30.0-week median wait** from general-practitioner referral to specialist treatment—driving Canada’s Supreme Court in ***Chaoulli v. Quebec* (2005)** to declare that "access to a waiting list is not access to health care."',
        ],
      },
      {
        heading: 'U.S. Commercial Margins Cross-Subsidize Global Biopharmaceutical Innovation',
        paragraphs: [
          'Health economists **Darius Lakdawalla**, **Craig Garthwaite**, and **Pierre Dubois et al. (2015)** establish a strong empirical elasticity (~1.3 to 1.5) between expected pharmaceutical revenue and clinical-trial R&D investment. Because developing a single FDA-approved novel drug costs **$1B–$2.6B** (with ~90% clinical failure rates), the U.S. market generates **55% to 70% of global biopharmaceutical profits**—funding the mRNA vaccines, **GLP-1 obesity/cardiovascular therapies**, **CAR-T immunotherapies**, and gene-editing breakthroughs upon which European and Canadian price controls **free-ride**. Imposing steep single-payer price caps in America would significantly slow life-extending drug discovery worldwide.',
        ],
      },
    ],
    details: [
      'Fraser Institute’s 2024 national physician survey found Canadian patients waited a median 30.0 weeks between GP referral and receipt of specialist treatment (up from 9.3 weeks in 1993), including >45 weeks for orthopedic surgery.',
      'NHS England data (2023–2024) recorded ~7.5–7.7 million incomplete consultant-led elective care pathways, pushing record numbers of Britons to pay out-of-pocket for private hip, knee, and cataract surgeries.',
      'CBO and Urban Institute analyses estimate eliminating all private health insurance and cost-sharing under "Medicare for All" would shift ~$30+ trillion onto the federal budget over 10 years, requiring major broad-based payroll or VAT taxes.',
      'Dubois et al. (2015, RAND Journal of Economics) estimate a $2.5 billion expected global market size is needed to induce one additional new chemical entity approval.',
    ],
    sources: [
      {
        title: 'Waiting Your Turn: Wait Times for Health Care in Canada, 2024 Report',
        url: 'https://www.fraserinstitute.org/studies/waiting-your-turn',
        publisher: 'Fraser Institute (Mackenzie Moir & Bacchus Barua)',
        year: '2024',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'Consultant-led Referral to Treatment Waiting Times Data',
        url: 'https://www.england.nhs.uk/statistics/statistical-work-areas/rtt-waiting-times/',
        publisher: 'NHS England Official Statistics',
        year: '2024',
        category: 'Court / Official Record',
      },
      {
        title: 'Market Size and Pharmaceutical Innovation',
        url: 'https://onlinelibrary.wiley.com/doi/abs/10.1111/1756-2171.12107',
        publisher: 'RAND Journal of Economics (Pierre Dubois, Olivier de Mouzon, Fiona Scott-Morton & Paul Seabright)',
        year: '2015',
        category: 'Empirical / Economic Study',
      },
    ],
    tags: ['Housing & Healthcare', 'Regulation & Markets', 'Empirical Studies', 'Taxation & Fiscal'],
    era: '1974–Present',
    relatedIds: ['con-consumer-welfare-bork-hovenkamp'],
  },
  {
    id: 'con-rebuttal-bismarck-multipayer-swiss-german',
    parentId: 'con-single-payer-wait-times-biopharma-rd',
    kind: 'con',
    title: 'Bismarckian Universal Multi-Payer (Switzerland, Netherlands, Germany) Avoids Both Traps',
    summary:
      'Comparative health economists demonstrate that universal healthcare does NOT require state single-payer monopolies: Bismarckian regulated-competition systems in Switzerland, the Netherlands, and Germany achieve 100% coverage, short wait times, and biomedical leadership at ~11–12.5% of GDP.',
    sections: [
      {
        heading: 'Alain Enthoven’s Regulated Competition in Switzerland & the Netherlands',
        paragraphs: [
          'Health-systems scholars **Ezekiel Emanuel (*Which Country Has the World’s Best Health Care?*, 2020)** and **Uwe Reinhardt** point out that U.S. debates falsely equate "universal healthcare" with UK/Canadian single-payer. **Switzerland (1994 LAMal reform)** and the **Netherlands (2006 reform)** achieved **100% universal coverage with zero public insurer** by implementing Stanford economist **Alain Enthoven’s "managed competition"** blueprint: strict **community-rated guaranteed issue** (insurers cannot reject sick applicants), an enforced **individual mandate**, income-based **premium subsidies** capping low-income outlays, and sophisticated **risk-equalization transfers** from insurers with healthy pools to those covering chronically ill patients.',
        ],
      },
      {
        heading: 'All-Payer Rate Negotiation, Minimal Wait Queues & Value-Based Drug Pricing',
        paragraphs: [
          'Meanwhile, **Germany’s statutory *Krankenkassen* sickness funds** (~95 non-profit competing insurers) use **all-payer collective fee bargaining**—every hospital and doctor charges a transparent, uniform schedule regardless of insurer, slashing U.S.-style billing chaos while preserving patient choice and keeping surgical wait times far shorter than in the UK or Canada. For pharmaceuticals, Germany’s **AMNOG value-based pricing** allows free market launch prices for the first year followed by clinical comparative-effectiveness negotiation—rewarding genuine breakthrough oncology/biotech innovation while refusing windfall markups on "me-too" copycat drugs.',
        ],
      },
    ],
    details: [
      'Switzerland (~11.8% of GDP) and the Netherlands (~10.2% of GDP) consistently rank near the top of OECD and Commonwealth Fund indices for rapid specialist access, cancer survival, and universal financial protection.',
      'All-payer rate setting (also used regionally in Maryland hospitals) eliminates surprise out-of-network bills and multi-insurer coding bloat without abolishing private insurers.',
      'Demonstrates that enforceable universal mandates + risk adjustment + transparent reference pricing solve Arrowian adverse selection without single-payer rationing queues.',
    ],
    sources: [
      {
        title: 'International Profiles of Health Care Systems (Switzerland, Netherlands, Germany, UK, Canada, US)',
        url: 'https://www.commonwealthfund.org/international-health-policy-center/system-profiles',
        publisher: 'The Commonwealth Fund',
        year: '2023',
        category: 'Watchdog / NGO',
      },
      {
        title: 'Which Country Has the World’s Best Health Care?',
        url: 'https://www.hachettebookgroup.com/titles/ezekiel-j-emanuel/which-country-has-the-worlds-best-health-care/9781541797734/',
        publisher: 'PublicAffairs (Ezekiel J. Emanuel)',
        year: '2020',
        category: 'Scholarship',
      },
    ],
    tags: ['Housing & Healthcare', 'Regulation & Markets', 'Governance', 'Empirical Studies'],
    era: '1994–Present',
  },

  // ============================================================================
  // THESIS 7B: Universal School Choice, Charters & Education Vouchers
  // ============================================================================
  {
    id: 'thesis-school-vouchers-choice',
    parentId: 'pillar-econ-healthcare',
    kind: 'thesis',
    title: 'Universal School Choice & Education Vouchers Improve Accountability and Outcomes',
    summary:
      'Debates Milton Friedman’s proposition that funding students directly via portable vouchers, Education Savings Accounts (ESAs), and charter schools outperforms residentially assigned public school monopolies—weighing urban charter gains against mixed statewide private-voucher test drops.',
    sections: [
      {
        heading: 'Friedman’s Separation of Public Education Funding from Monopoly Operation',
        paragraphs: [
          'In his classic 1955 essay ***The Role of Government in Education***, **Milton Friedman** distinguished the compelling neighborhood externality for *publicly financing* universal K–12 education from any justification for *government-run geographic monopolies*. Because traditional U.S. public school assignment ties school quality to **neighborhood zip codes and exclusionary housing prices**, affluent families effectively buy school choice via suburban real estate while low-income children remain captive to chronically underperforming zoned schools. Portable **vouchers, ESAs (enacted universally in Arizona, Florida, Iowa, Arkansas, Ohio, and Texas)**, and **public charter schools** empower families to vote with their feet.',
        ],
      },
      {
        heading: 'Divergent Empirical Records: High-Accountability Urban Charters vs. Unregulated Vouchers',
        paragraphs: [
          'Modern empirical economics reveals a striking institutional divergence across school-choice designs that underscores the decisive role of **public accountability**. Randomized admission-lottery studies of **urban public charter schools**—which remain tuition-free, administer state standardized exams, and face authorizer closure if students fail to learn—consistently find substantial math, reading, and college-enrollment gains for disadvantaged minority pupils (**Stanford CREDO 2023**). Conversely, evaluations of rapid **statewide private-school voucher expansions** in **Louisiana, Indiana, and Ohio** surprised researchers with sharp **test-score declines** alongside acute fiscal battles over affluent private-tuition windfalls and public-district fixed costs.',
        ],
      },
    ],
    details: [
      'Over 12 U.S. states enacted universal or near-universal private school choice / ESA programs ($7,000–$9,000+ per pupil) between 2021 and 2025, covering >1 million students.',
      'Roughly 3.7 million U.S. public school students (~7.5% of public enrollment) attend tuition-free, publicly accountable charter schools.',
      'Centers empirical debate on accountability standards: public charter schools take state exams and face closure for poor results, whereas many private voucher schools bypass state testing and open-admissions rules.',
    ],
    sources: [
      {
        title: 'The Role of Government in Education',
        url: 'https://miltonfriedman.hoover.org/',
        publisher: 'Rutgers University Press / Hoover Institution Archive (Milton Friedman)',
        year: '1955',
        category: 'Scholarship',
      },
      {
        title: 'National Charter School Study III (NCSS III)',
        url: 'https://ncss3.stanford.edu/',
        publisher: 'Stanford University Center for Research on Education Outcomes (CREDO)',
        year: '2023',
        category: 'Empirical / Economic Study',
      },
    ],
    tags: ['Housing & Healthcare', 'Media & Education', 'Empirical Studies', 'Regulation & Markets'],
    era: '1955–Present',
  },
  {
    id: 'pro-friedman-vouchers-credo-charters',
    parentId: 'thesis-school-vouchers-choice',
    kind: 'pro',
    title: 'Friedmanite Competitive Discipline, Urban Charter Lottery Gains (CREDO) & Positive Spillovers',
    summary:
      'School-choice advocates cite Stanford CREDO’s 3-million-student analysis and randomized admission lotteries showing urban charter schools deliver extra weeks of annual learning for low-income Black and Hispanic students while spurring nearby traditional public schools to improve.',
    sections: [
      {
        heading: 'Stanford CREDO (2023) & Nobel-Backed Admission-Lottery Evidence',
        paragraphs: [
          'Gold-standard causal evaluations exploiting **oversubscribed random admission lotteries**—pioneered by Nobel laureate **Joshua Angrist**, **Parag Pathak**, and **Christopher Walters** in Boston, New York City, Denver, and Newark—prove that high-expectations urban charter networks (**such as KIPP, Success Academy, and Uncommon Schools**) close racial achievement gaps dramatically. Confirming this at national scale across **29 states and ~3 million matched students**, **Stanford CREDO’s *National Charter School Study III* (2023)** found charter students gained an average of **+16 additional days of learning in reading** and **+6 days in math** per year over matched traditional public peers—rising to **+29 to +35 extra days** for low-income Black and Hispanic urban students.',
        ],
      },
      {
        heading: 'Competitive Spillovers Raise Traditional Public School Performance & Attainment',
        paragraphs: [
          'Addressing fears that choice harms students left behind, a sweeping meta-analysis and **David Figlio, Cassandra Hart & Krzysztof Karbownik (2023, *AEJ: Economic Policy*)** longitudinal study of **Florida’s Tax Credit Scholarship** program—serving over 100,000 low-income students—found that growing private-choice competition **significantly raised math and reading scores AND reduced suspensions among students remaining inside nearby public schools**. Furthermore, long-run follow-ups (**Chingos & Peterson; Wolf et al.**) show voucher and charter cohorts achieve **15%–20% higher college enrollment and graduation rates**, demonstrating durable non-cognitive and attainment benefits beyond standardized snapshots.',
        ],
      },
    ],
    details: [
      'Stanford CREDO (2023) found charter management organizations (CMOs) delivered +27 extra days of learning in reading and +23 extra days in math annually compared to traditional district schools.',
      'Angrist, Pathak & Walters (2013) showed Boston urban charters generated ~0.35 SD annual math gains and doubled AP Calculus pass rates via extended instructional time, tutoring, and teacher feedback.',
      'Figlio, Hart & Karbownik (2023, AEJ: Economic Policy) proved scaling school choice in Florida induced measurable competitive test-score and behavioral improvements in surrounding traditional public schools.',
    ],
    sources: [
      {
        title: 'National Charter School Study III — Center for Research on Education Outcomes',
        url: 'https://credo.stanford.edu/',
        publisher: 'Stanford University CREDO (Margaret E. Raymond et al.)',
        year: '2023',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'Effects of Scaling Up Private School Choice Programs on Public School Students',
        url: 'https://www.aeaweb.org/articles?id=10.1257/pol.20200704',
        publisher: 'American Economic Journal: Economic Policy (David Figlio, Cassandra M.D. Hart & Krzysztof Karbownik)',
        year: '2023',
        category: 'Empirical / Economic Study',
      },
    ],
    tags: ['Media & Education', 'Empirical Studies', 'Regulation & Markets', 'Labor & Welfare'],
    era: '2000–Present',
    relatedIds: ['con-social-housing-pruitt-igoe-vouchers'],
  },
  {
    id: 'con-vouchers-test-drops-budget-drain',
    parentId: 'thesis-school-vouchers-choice',
    kind: 'con',
    title: 'Severe Statewide Voucher Test-Score Drops (LA/IN/OH), Cream-Skimming & Public Budget Drain',
    summary:
      'Empirical evaluations of statewide private-school vouchers in Louisiana, Indiana, and Ohio reveal alarming math test-score plunges rivaling pandemic learning losses, while universal ESAs subsidize affluent incumbent private-school families and strain fixed-cost public budgets.',
    sections: [
      {
        heading: 'Louisiana, Indiana & Ohio Voucher Studies Find Katrina-Scale Math Losses',
        paragraphs: [
          'When states shifted from small urban pilots to **statewide private-school vouchers**, rigorous lottery and matched evaluations by **Atila Abdulkadiroğlu, Parag Pathak & Christopher Walters (2018, *AEJ: Applied Economics*)** in **Louisiana**, alongside studies in **Indiana (Waddington & Berends 2018)**, **Ohio (Figlio & Karbownik 2016)**, and **Washington, D.C.**, uncovered shocking **negative academic effects**: students using vouchers to attend private schools suffered **-0.15 to -0.40 standard-deviation plunges in math**—losses researchers noted were as large as **Hurricane Katrina or COVID-19 school closures**—because established high-tuition private academies declined low-value vouchers, leaving low-income children in unaccredited, financially distressed sub-prime private schools.',
        ],
      },
      {
        heading: 'Regressive Universal ESA Windfalls, IEP Exclusion & Fixed-Cost District Deficits',
        paragraphs: [
          'State budget audits of **universal Education Savings Accounts (ESAs)** in **Arizona** ($700M+ projected cost overrun vs. initial $65M estimate) and **Iowa/Florida/Ohio** document that **65% to 80% of initial universal voucher recipients never attended a public school**—turning universal choice into a regressive taxpayer windfall for upper-middle-class families already paying private tuition. Meanwhile, private schools legally **cream-skim** by rejecting students with behavioral challenges or costly **Individuals with Disabilities Education Act (IDEA) special-education IEPs**, while public districts lose variable per-pupil aid yet still bear **fixed overhead** for school buildings, rural bus routes, and legacy teacher pensions.',
        ],
      },
    ],
    details: [
      'Abdulkadiroğlu, Pathak & Walters (2018, AEJ: Applied) found Louisiana Scholarship Program lottery winners dropped from the 50th to the 34th percentile in math after just one year in participating private schools.',
      'Brookings Institution syntheses (Dynarski 2016; Lubienski & Malin) highlight that unlike public charters, private voucher programs that waive state accountability testing attract low-quality "fly-by-night" operators.',
      'Arizona Department of Education data showed >70% of universal Empowerment Scholarship Account applicants had no prior Arizona public-school enrollment record, creating net new fiscal outlays rather than per-pupil savings.',
      'Rural communities lacking private schools pay state income/sales taxes to fund suburban private tuition ESAs while their local consolidated public schools face budget squeezes.',
    ],
    sources: [
      {
        title: 'Free to Choose: Can School Choice Reduce Student Achievement?',
        url: 'https://www.aeaweb.org/articles?id=10.1257/app.20160634',
        publisher: 'American Economic Journal: Applied Economics (Atila Abdulkadiroğlu, Parag A. Pathak & Christopher R. Walters)',
        year: '2018',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'On Negative Effects of Vouchers',
        url: 'https://www.brookings.edu/articles/on-negative-effects-of-vouchers/',
        publisher: 'Brookings Institution Evidence Speaks Reports (Susan Dynarski)',
        year: '2016',
        category: 'Empirical / Economic Study',
      },
    ],
    tags: ['Media & Education', 'Empirical Studies', 'Taxation & Fiscal', 'Labor & Welfare'],
    era: '2012–Present',
  },

  // ============================================================================
  // THESIS 7C: Pre-Funded Retirement Accounts & Sovereign Funds vs. PAYG
  // ============================================================================
  {
    id: 'thesis-pension-sovereign-funds',
    parentId: 'pillar-econ-healthcare',
    kind: 'thesis',
    title: 'Pre-Funded Retirement Accounts & Sovereign Wealth Funds Beat Pay-As-You-Go Entitlements',
    summary:
      'Examines whether demographic aging makes unfunded Pay-As-You-Go (PAYG) pension systems mathematically unsustainable—favoring pre-funded capital accounts (Australia’s Superannuation, Norway’s Oil Fund, Swedish/Chilean tiers)—or whether PAYG social insurance remains irreplaceable.',
    sections: [
      {
        heading: 'The Aaron-Samuelson Demographic Squeeze on Pay-As-You-Go Pensions',
        paragraphs: [
          'Under a **Pay-As-You-Go (PAYG)** pension system—such as **U.S. Social Security** (enacted 1935) and continental European state pensions in France, Italy, and Germany—payroll taxes collected from today’s workers are not invested in productive capital, but immediately paid out to current retirees. By the **Aaron-Samuelson theorem (1958/1966)**, PAYG yields an implicit return equal only to **population growth plus real wage growth (n + g)**, whereas **pre-funded pensions** earn the **real marginal return on capital (r)**. As OECD fertility plunged from ~3.0 to **1.3–1.6 births per woman** while retiree lifespans rose by a decade, worker-to-retiree ratios collapsed.',
        ],
      },
      {
        heading: 'Compounding National Capital vs. Transition Costs & Social-Insurance Floors',
        paragraphs: [
          'Countries that built **pre-funded retirement pillars**—including **Australia’s $3.9+ trillion mandatory Superannuation**, **Norway’s $1.7+ trillion Government Pension Fund Global**, **Singapore’s CPF**, and **Canada’s independent CPPIB**—accumulate vast diversified equity portfolios that harness compound global returns. Defenders of traditional Social Security (**Peter Diamond, Alicia Munnell**) counter that privatizing an already-mature PAYG system triggers an insurmountable **multi-trillion-dollar transition "double payment"** while shifting market crash and longevity risk onto low-wage workers.',
        ],
      },
    ],
    details: [
      'U.S. Social Security’s covered worker-to-beneficiary ratio fell from 16.5-to-1 in 1950 (and 3.3-to-1 in 2005) to ~2.7-to-1 today, heading toward ~2.3-to-1 by 2040.',
      'The 2024–2025 Social Security Trustees Reports project the Old-Age and Survivors Insurance (OASI) Trust Fund will be depleted around 2033, triggering an automatic ~20–21% across-the-board benefit cut absent legislative action.',
      'Contrasts pure unfunded tax-transfer systems against mandatory private defined-contribution accounts (Australia, Chile) and public sovereign reserve funds (Norway, Canada).',
    ],
    sources: [
      {
        title: 'The Annual Report of the Board of Trustees of the Federal Old-Age and Survivors Insurance and Federal Disability Insurance Trust Funds',
        url: 'https://www.ssa.gov/oact/tr/',
        publisher: 'U.S. Social Security Administration (SSA)',
        year: '2024',
        category: 'Court / Official Record',
      },
      {
        title: 'Structural Reform of Social Security (NBER Working Paper w11098)',
        url: 'https://www.nber.org/papers/w11098',
        publisher: 'National Bureau of Economic Research / Journal of Economic Perspectives (Martin Feldstein)',
        year: '2005',
        category: 'Scholarship',
      },
    ],
    tags: ['Labor & Welfare', 'Taxation & Fiscal', 'Demographics', 'Macroeconomics'],
    era: '1935–Present',
  },
  {
    id: 'pro-prefunded-superannuation-demographic-math',
    parentId: 'thesis-pension-sovereign-funds',
    kind: 'pro',
    title: 'Feldstein’s r > n + g Compounding, Australia’s $3.9T Superannuation & Norway’s Sovereign Fund',
    summary:
      'Proponents show real capital returns (~5–7%) vastly outperform shrinking demographic payroll growth (~1.5–2%), enabling Australia’s Superannuation and Norway’s $1.7T Sovereign Wealth Fund to build massive national wealth while keeping public pension taxes low.',
    sections: [
      {
        heading: 'Compounding Real Capital Returns (r > n + g) & National Savings Formation',
        paragraphs: [
          'Harvard economist **Martin Feldstein (1996, 2005)** demonstrated that because the real pre-tax return on productive corporate capital (**~6%–8% annually** over century-long equity/bond horizons) exceeds sluggish demographic labor-force plus productivity growth (**~1.5%–2%**), replacing unfunded PAYG promises with **pre-funded capital investment** allows workers to achieve identical retirement income at **less than half the lifetime payroll contribution rate**—while expanding the domestic capital stock and raising economy-wide wages. Unfunded PAYG, by contrast, crowds out private household saving and pushes European payroll pension taxes toward **18%–28%**, depressing youth employment (as seen in France’s 2023 pension riots and Italy’s 16%-of-GDP pension bill).',
        ],
      },
      {
        heading: 'Real-World Triumphs: Australian Superannuation, Norwegian GPFG & Canadian CPPIB',
        paragraphs: [
          'Launched in **1992** by Labor Prime Ministers Bob Hawke and Paul Keating, **Australia’s Superannuation Guarantee** mandates **11.5%–12% employer contributions** into portable worker accounts: Australian pension assets now exceed **$3.9 trillion AUD (>140% of Australian GDP)**—the fourth-largest pension pool on Earth despite a population of 27 million—keeping Australian state old-age pension spending near **~2.3%–2.7% of GDP** (less than one-third the OECD average). Similarly, **Norway’s $1.7+ trillion Government Pension Fund Global** (owning ~1.5% of all listed equities worldwide) and **Canada’s $630B+ independent CPP Investment Board** insulate taxpayers from demographic shocks via professional global compounding.',
        ],
      },
    ],
    details: [
      'Australia’s mandatory Superannuation pool (>140% of GDP) keeps Australian federal taxpayer-funded Age Pension outlays below ~2.7% of GDP compared to ~8% OECD average and ~14–16% in Italy/France.',
      'Norway’s Government Pension Fund Global (worth >$300,000 per Norwegian citizen) converts finite North Sea petroleum rents into permanent diversified global equity income capped at a 3% fiscal rule.',
      'Pre-funded individual accounts establish clear legal property rights and inheritability for working-class families who die prematurely and otherwise forfeit lifetime PAYG payroll taxes.',
    ],
    sources: [
      {
        title: 'Norges Bank Investment Management — About the Government Pension Fund Global',
        url: 'https://www.nbim.no/',
        publisher: 'Norges Bank Investment Management (Norway)',
        year: '2024',
        category: 'Court / Official Record',
      },
      {
        title: 'Quarterly Superannuation Performance Statistics',
        url: 'https://www.apra.gov.au/',
        publisher: 'Australian Prudential Regulation Authority (APRA)',
        year: '2024',
        category: 'Court / Official Record',
      },
    ],
    tags: ['Labor & Welfare', 'Macroeconomics', 'Demographics', 'Taxation & Fiscal'],
    era: '1981–Present',
    relatedIds: ['pro-social-housing-vienna-singapore'],
  },
  {
    id: 'con-pension-transition-cost-sequence-risk',
    parentId: 'thesis-pension-sovereign-funds',
    kind: 'con',
    title: 'Multi-Trillion Transition "Double Payment," Sequence-of-Returns Risk & Social Security’s Floor',
    summary:
      'Nobel laureate Peter Diamond and social-insurance economists counter that Feldstein ignores the massive transition debt of past PAYG promises, market crash and fee risks for low-wage workers (seen in Chile’s AFP backlash), and Social Security’s unmatched anti-poverty annuity.',
    sections: [
      {
        heading: 'The Inescapable Transition-Cost "Double Payment" & Risk-Adjusted Equivalence',
        paragraphs: [
          'MIT Nobel laureate **Peter Diamond** and **Peter Orszag (*Saving Social Security*, 2005)**, alongside **John Geanakoplos, Olivia Mitchell & Stephen Zeldes (1998, AER)**, expose a fundamental accounting flaw in simple **r > n + g** comparisons: America’s low ~2% implicit PAYG return isn’t waste—it pays off the **implicit legacy debt** owed to the inaugural 1940s–1960s generations who received full pensions after minimal contributions. Diverting today’s 12.4% FICA payroll tax into private accounts creates a **$20+ trillion transition hole**, forcing one generation to **pay twice** (via higher income taxes or sovereign borrowing whose interest costs erase the net return differential once **equity risk** is properly risk-adjusted).',
        ],
      },
      {
        heading: 'Sequence-of-Returns Crash Risk, Chilean AFP Protests & Elderly Poverty Insurance',
        paragraphs: [
          'Unlike private 401(k)-style accounts—where retiring in **October 2008 vs. 2006** (**sequence-of-returns risk**) permanently slashes retirement income by 30%–40%, and retail asset-management fees can devour 20%+ of compounding—**Social Security** provides a **progressive, CPI-indexed, lifelong real annuity** (impossible to outlive at age 95) plus vital **disability (SSDI) and young-survivor life insurance** at **<0.5% administrative cost**. In **Chile**, whose 1981 privatized **AFP** model was once hailed globally, informal labor gaps and low median replacement rates (**~35%–40%**) sparked massive national protests in 2019–2022, forcing governments to expand tax-funded solidarity pensions (**PGU**).',
        ],
      },
    ],
    details: [
      'Geanakoplos, Mitchell & Zeldes (1998) proved that once transition debt service and equity market risk are accounted for, privatizing an existing PAYG system creates zero "free lunch" pareto gain.',
      'Center on Budget and Policy Priorities (CBPP) analysis of Census data shows Social Security lifts ~22 million Americans (including >16 million seniors) above the poverty line, cutting elderly poverty from ~38.7% to ~10.2%.',
      'Social Security’s administrative overhead is just ~0.5% of benefits paid, whereas Chile’s early private AFP accounts and Latin American copycats initially suffered 15–20% contribution fee drag.',
    ],
    sources: [
      {
        title: 'Would a Privatized Social Security System Really Pay a Higher Rate of Return?',
        url: 'https://www.nber.org/papers/w6713',
        publisher: 'National Bureau of Economic Research (John Geanakoplos, Olivia S. Mitchell & Stephen P. Zeldes)',
        year: '1998',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'Saving Social Security: A Balanced Approach',
        url: 'https://www.brookings.edu/books/saving-social-security/',
        publisher: 'Brookings Institution Press (Peter A. Diamond & Peter R. Orszag)',
        year: '2005',
        category: 'Scholarship',
      },
    ],
    tags: ['Labor & Welfare', 'Taxation & Fiscal', 'Empirical Studies', 'Macroeconomics'],
    era: '1981–Present',
    relatedIds: ['pro-admati-hellwig-bank-capital-tbtf'],
  },
  {
    id: 'con-rebuttal-hybrid-multi-pillar-pensions',
    parentId: 'con-pension-transition-cost-sequence-risk',
    kind: 'con',
    title: 'OECD Multi-Pillar Synthesis: Sweden’s Automatic Stabilizers + Low-Fee Collective Sovereign/Lifecycle Funds',
    summary:
      'World Bank and OECD pension architects point to Sweden, Canada, and the Netherlands as the proven middle path: pairing a progressive public anti-poverty floor and automatic demographic stabilizers with ultra-low-fee pre-funded collective investment tiers.',
    sections: [
      {
        heading: 'Sweden’s 1999 Bipartisan Reform: Automatic Balance Mechanisms + Funded Tier',
        paragraphs: [
          'Comparative pension economists (**Nicholas Barr & Peter Diamond**; **OECD *Pensions at a Glance***) note the world’s top-ranked retirement systems (**Netherlands, Iceland, Denmark, Sweden, Canada, Australia** in the Mercer CFA Global Pension Index) combine **both pillars** rather than choosing an ideological extreme. **Sweden’s landmark 1999 five-party reform** pairs a tax-funded **minimum Guarantee Pension** protecting low earners, a **16% Notional Defined Contribution (NDC)** tier featuring an **automatic demographic balancing mechanism** that adjusts indexing smoothly to life expectancy without political brinkmanship, and a **2.5% mandatory pre-funded *Premiepension* tier** whose default state **AP7 Såfa lifecycle fund** charges just **~0.05%–0.08% fees**.',
        ],
      },
      {
        heading: 'Gradual Partial Pre-Funding Without Double-Payment Shock (Canada’s CPPIB)',
        paragraphs: [
          '**Canada’s 1997 bipartisan CPP reform** likewise refutes the claim that mature PAYG systems can never pre-fund: rather than abolishing public annuities, Ottawa moderately raised payroll contributions and created the politically insulated **Canada Pension Plan Investment Board (CPPIB)** to invest surpluses globally in equities, infrastructure, and private markets—growing from $0 to **$630B+ CAD** and rendering the Canada Pension Plan **actuarially solvent for 75+ years**. Modest U.S. revenue adjustments (such as lifting the **$168,600+ payroll tax cap**) paired with collective trust-fund diversification or universal automatic-IRA top-ups achieve long-run solvency while preserving Social Security’s bedrock floor.',
        ],
      },
    ],
    details: [
      'Sweden’s default state equity-lifecycle fund (AP7 Såfa) delivered ~10%+ annualized returns over two decades at ~5–8 basis points cost—solving both retail fee extraction and sequence-of-returns glidepaths.',
      'Canada’s Chief Actuary certified the partially pre-funded Canada Pension Plan sustainable for at least 75 years at steady contribution rates, avoiding the U.S. 2033 trust-fund cliff.',
      'Mercer CFA Institute Global Pension Index (2024) awarded "A" grades exclusively to hybrid multi-pillar systems (Netherlands, Iceland, Denmark, Israel) combining universal minimum floors with mandatory funded capital.',
    ],
    sources: [
      {
        title: 'The Swedish Pension System and Pension Funds (Orange Report Annual Summary)',
        url: 'https://www.pensionsmyndigheten.se/other-languages/english-engelska',
        publisher: 'Swedish Pensions Agency (Pensionsmyndigheten)',
        year: '2024',
        category: 'Court / Official Record',
      },
      {
        title: 'CPP Investments Annual Report & 75-Year Actuarial Sustainability',
        url: 'https://www.cppinvestments.com/',
        publisher: 'Canada Pension Plan Investment Board (CPPIB)',
        year: '2024',
        category: 'Court / Official Record',
      },
    ],
    tags: ['Labor & Welfare', 'Governance', 'Taxation & Fiscal', 'Demographics'],
    era: '1997–Present',
  },
];
