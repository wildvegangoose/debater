import { DebateGraphDataset, DebateNode } from '../../types/debate';

const rootNode: DebateNode = {
  id: 'root-future-of-work',
  parentId: null,
  kind: 'root',
  title: 'Remote Work vs. Office Colocation',
  summary:
    'The most profound structural disruption to work since the Industrial Revolution: whether decentralized remote and hybrid work liberates human talent, ends punishing commutes, and boosts productivity, or whether physical office colocation is indispensable for junior mentorship, serendipitous innovation, and urban vitality.',
  sections: [
    {
      heading: 'The Great Decoupling of Work from Physical Place',
      paragraphs: [
        'The COVID-19 pandemic triggered a sudden, forced experiment that permanently restructured the global knowledge economy. Prior to 2020, less than **5% of paid full-time workdays** in the United States were performed from home; by 2024, that figure stabilized at roughly **28% of all workdays**, and over **50% for college-educated white-collar professionals**, according to the **WFH Research consortium (Barrero, Bloom & Davis)**.',
        'Remote and hybrid champions—led by Stanford economist **Nicholas Bloom** and Automattic founder **Matt Mullenweg**—argue that remote work democratizes opportunity, slashes soul-crushing daily commutes, expands the global talent pool, and grants workers unprecedented time sovereignty and autonomy.',
      ],
    },
    {
      heading: 'The Cultural, Creative & Urban Backlash',
      paragraphs: [
        'Conversely, prominent critics and business leaders—including author **Malcolm Gladwell**, NYU Stern professor **Scott Galloway**, and CEOs like Jamie Dimon and Andy Jassy—warn that full remote work dissolves corporate cohesion, severely stunts the career development and organic mentorship of junior employees, and extinguishes the spontaneous hallway serendipity that fuels breakthrough creative innovation.',
        'Concurrently, urban economists like Columbia University’s **Stijn Van Nieuwerburgh** demonstrate that the collapse in office occupancy has triggered a historic **commercial real estate "doom loop"**, wiping out hundreds of billions in property values and eroding municipal tax bases that fund public transit, sanitation, and safety in major downtowns.',
      ],
    },
  ],
  details: [
    '**Time Sovereignty vs. Corporate Cohesion:** Balances 72 minutes of reclaimed daily commute time against the erosion of institutional social capital and junior mentorship.',
    '**Empirical Productivity RCTs:** Analyzes Nick Bloom’s landmark 2024 randomized trial in *Nature*, proving hybrid work reduces employee attrition by 35% with zero productivity loss.',
    '**The Urban Doom Loop:** Weighs the suburban and small-town economic renaissance against downtown municipal budget collapses and commercial real estate debt defaults.',
  ],
  sources: [
    {
      title: 'Open to Debate: Is Remote Work Really Working?',
      url: 'https://opentodebate.org/debate/is-remote-work-really-working/',
      publisher: 'Open to Debate (Nick Bloom vs. Scott Galloway)',
      year: '2023',
      category: 'Debate / Broadcast',
    },
    {
      title: 'Hybrid Working From Home Improves Retention Without Damaging Performance (Nature)',
      url: 'https://www.nature.com/articles/s41586-024-07500-2',
      publisher: 'Nature (Nicholas Bloom, Ruobing Han & James Liang)',
      year: '2024',
      category: 'Empirical / Economic Study',
    },
    {
      title: 'Why Working from Home Will Stick (NBER w28731)',
      url: 'https://www.nber.org/papers/w28731',
      publisher: 'NBER (Jose Maria Barrero, Nicholas Bloom & Steven J. Davis)',
      year: '2021',
      category: 'Empirical / Economic Study',
    },
    {
      title: 'The "Office Real Estate Apocalypse" and the Urban Doom Loop',
      url: 'https://academic.oup.com/rfs/article/36/12/4027/7258079',
      publisher: 'Review of Financial Studies (Arpit Gupta, Vrinda Mittal & Stijn Van Nieuwerburgh)',
      year: '2023',
      category: 'Empirical / Economic Study',
    },
  ],
  tags: ['Labor & Welfare', 'Macroeconomics', 'Media & Education', 'Civil Liberties'],
  era: '2020–Present',
  relatedIds: ['pillar-work-autonomy', 'pillar-work-culture', 'pillar-work-productivity', 'pillar-work-cities'],
};

const pillarNodes: DebateNode[] = [
  {
    id: 'pillar-work-autonomy',
    parentId: 'root-future-of-work',
    kind: 'pillar',
    title: 'Worker Flexibility, Commute Elimination & Quality of Life',
    summary:
      'Argues that remote and hybrid work eliminates stressful daily commutes, restores personal time sovereignty, enables geographical freedom, and expands labor market access for caregivers and disabled individuals.',
    sections: [
      {
        heading: 'Reclaiming the Commute Tax and Time Sovereignty',
        paragraphs: [
          'According to the **U.S. Census Bureau**, the average American spent **54 minutes per day commuting** prior to 2020, with millions in major metropolitan areas enduring 90 to 120 minutes of daily traffic gridlock or crowded transit. Research from **Barrero, Bloom & Davis (NBER w30864)** shows that remote workers save an average of **72 minutes per workday**, reallocating that time toward sleep, physical exercise, cooking fresh meals, and active child parenting.',
          'Surveys indicate that employees value the flexibility of working from home 2 to 3 days per week as equivalent to an **8% pay raise**, demonstrating that temporal autonomy is a premier welfare improvement in modern labor history.',
        ],
      },
      {
        heading: 'Inclusion for Marginalized Labor Demographics',
        paragraphs: [
          'Remote work has driven historic labor market entries: **labor force participation for Americans with disabilities reached all-time record highs of 22.5% in 2023**, up from 17% in 2019, as home workstations eliminated inaccessible transit barriers and office architectural obstacles.',
        ],
      },
    ],
    details: [
      'WFH Research shows remote workers save an average of 72 minutes per day in avoided commuting and grooming time.',
      'Workers value 2–3 days of weekly remote flexibility equivalent to an 8% salary increase in revealed-preference wage bargaining.',
      'Employment among Americans with disabilities surged to historical record peaks following the widespread adoption of remote arrangements.',
    ],
    sources: [
      {
        title: 'Time Savings When Working From Home (NBER w30864)',
        url: 'https://www.nber.org/papers/w30864',
        publisher: 'NBER (Aksoy, Barrero, Bloom, Davis, Dolls & Zarate)',
        year: '2023',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'Persons with a Disability: Labor Force Characteristics',
        url: 'https://www.bls.gov/news.release/disabl.nr0.htm',
        publisher: 'U.S. Bureau of Labor Statistics (BLS)',
        year: '2024',
        category: 'Court / Official Record',
      },
      {
        title: 'The Great Work-from-Home Revolution',
        url: 'https://wfhresearch.com/',
        publisher: 'WFH Research Consortium (Stanford / Chicago Booth / ITAM)',
        year: '2024',
        category: 'Scholarship',
      },
    ],
    tags: ['Labor & Welfare', 'Civil Liberties', 'Human Rights', 'Demographics'],
    era: '2020–Present',
    relatedIds: ['pillar-work-culture', 'pillar-work-productivity'],
  },
  {
    id: 'pillar-work-culture',
    parentId: 'root-future-of-work',
    kind: 'pillar',
    title: 'In-Person Serendipity, Mentorship & Social Capital',
    summary:
      'Warns that prolonged physical isolation undermines corporate culture, leaves junior staff without informal mentorship and career sponsorship, and extinguishes the spontaneous collisions that drive innovation.',
    sections: [
      {
        heading: 'The Stunting of Junior Career Development',
        paragraphs: [
          'Early-career professionals do not learn corporate skills primarily from formal training slides; they learn via **tacit knowledge absorption**: observing how senior partners handle stressful client negotiations, asking quick clarifying questions over a desk partition, and grabbing casual lunches.',
          'Studies by Harvard researchers **Emanuel, Harrington & Pallais (2023)** found that when engineers moved to remote work, **feedback given to junior colleagues plummeted by more than 20%**, stunting skill progression and reducing promotion velocity for young employees and women.',
        ],
      },
      {
        heading: 'The Extinction of Hallway Serendipity',
        paragraphs: [
          'Tech author **Malcolm Gladwell** and Apple leadership have long emphasized that major creative breakthroughs are rarely scheduled on a 30-minute Zoom calendar invite. Radical cross-pollination happens at the office coffee machine or cafeteria when engineers, designers, and marketers run into each other accidentally.',
        ],
      },
    ],
    details: [
      'Emanuel, Harrington & Pallais (2023 NBER) proved software engineers received 21% less mentorship feedback when offices transitioned to remote.',
      'Surveys indicate that over 65% of executive leaders believe company culture and organizational social capital have eroded under fully remote setups.',
      'Spontaneous cross-functional interactions fall by nearly 80% in virtual work environments compared to shared physical spaces.',
    ],
    sources: [
      {
        title: 'The Power of Proximity to Coworkers: Training for Tomorrow or Productivity Today? (NBER w31180)',
        url: 'https://www.nber.org/papers/w31180',
        publisher: 'NBER (Natalia Emanuel, Emma Harrington & Amanda Pallais)',
        year: '2023',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'The Effects of Remote Work on Collaboration Networks',
        url: 'https://www.nature.com/articles/s41562-021-01196-4',
        publisher: 'Nature Human Behaviour (Longqi Yang et al. / Microsoft Study)',
        year: '2022',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'Malcolm Gladwell on Why Remote Work Hurts Workers',
        url: 'https://www.bloomberg.com/news/articles/2022-08-08/malcolm-gladwell-says-don-t-work-from-home-if-you-want-a-great-career',
        publisher: 'Bloomberg / The Diary of a CEO',
        year: '2022',
        category: 'Debate / Broadcast',
      },
    ],
    tags: ['Media & Education', 'Labor & Welfare', 'Philosophy & Ethics'],
    era: '2022–Present',
    relatedIds: ['pillar-work-autonomy', 'pillar-work-productivity'],
  },
  {
    id: 'pillar-work-productivity',
    parentId: 'root-future-of-work',
    kind: 'pillar',
    title: 'Empirical Productivity & Asynchronous Management',
    summary:
      'Evaluates empirical randomized trials measuring output, weighing the benefits of distraction-free deep work against coordination frictions, meeting proliferation, and employee surveillance.',
    sections: [
      {
        heading: 'Nick Bloom’s Randomized Controlled Trials: Hybrid Wins',
        paragraphs: [
          'In June **2024**, Stanford professor **Nicholas Bloom and colleagues published a landmark RCT in *Nature*** tracking 1,612 employees at global travel giant Trip.com. Workers randomized into a **hybrid schedule (3 days in office, 2 days at home)** exhibited identical performance reviews, promotion rates, and lines of code written compared to full-time in-office peers, while **employee quit rates fell by 35%**, saving the company millions in recruitment costs.',
          'Bloom’s research proves that well-managed hybrid work is a Pareto improvement: it preserves in-person collaborative density while providing deep-work focus days at home.',
        ],
      },
      {
        heading: 'The Fully Remote Coordination Tax and Surveillance',
        paragraphs: [
          'In contrast to hybrid arrangements, fully decentralized remote companies often suffer from a **coordination tax**: endless asynchronous Slack messages, meeting fragmentation, and managerial paranoia that has spurred the intrusive deployment of **"bossware"** (keystroke loggers, webcam tracking).',
        ],
      },
    ],
    details: [
      'Bloom et al. (2024 Nature) demonstrated that a 3-2 hybrid schedule slashed worker turnover by 35% with zero decline in productivity or promotion rates.',
      'Asynchronous deep work allows knowledge workers to enter flow states without the constant interruptions of open-plan office layouts.',
      'Fully remote setups risk managerial distrust, driving a 70% increase in intrusive employee monitoring software since 2020.',
    ],
    sources: [
      {
        title: 'Hybrid Working From Home Improves Retention Without Damaging Performance',
        url: 'https://www.nature.com/articles/s41586-024-07500-2',
        publisher: 'Nature (Nicholas Bloom, Ruobing Han & James Liang)',
        year: '2024',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'Deep Work: Rules for Focused Success in a Distracted World',
        url: 'https://www.calnewport.com/books/deep-work/',
        publisher: 'Grand Central Publishing (Cal Newport)',
        year: '2016',
        category: 'Scholarship',
      },
      {
        title: 'The Rise of Bossware and Digital Surveillance in the Workplace',
        url: 'https://www.eff.org/wp/electronic-monitoring-workplace',
        publisher: 'Electronic Frontier Foundation (EFF)',
        year: '2023',
        category: 'Watchdog / NGO',
      },
    ],
    tags: ['Labor & Welfare', 'Empirical Studies', 'Science & Innovation', 'Civil Liberties'],
    era: '2016–Present',
    relatedIds: ['pillar-work-autonomy', 'pillar-work-culture'],
  },
  {
    id: 'pillar-work-cities',
    parentId: 'root-future-of-work',
    kind: 'pillar',
    title: 'Urban Real Estate & The Post-Downtown Economy',
    summary:
      'Examines the profound spatial restructuring of the economy: commercial real estate defaults and municipal transit deficits versus suburban revitalization and polycentric urbanism.',
    sections: [
      {
        heading: 'The Commercial Real Estate "Doom Loop"',
        paragraphs: [
          'In a seminal study in the *Review of Financial Studies*, economists **Arpit Gupta, Vrinda Mittal, and Stijn Van Nieuwerburgh** calculated that the shift to remote work wiped out **$500 billion in value from U.S. commercial office buildings**—a 35% to 40% long-term decline in office valuations.',
          'With physical office occupancy stuck near 50% in cities like San Francisco, Chicago, and New York, downtown restaurants, dry cleaners, and convenience stores face insolvency. Collapsing commercial property assessments threaten municipal tax revenues, jeopardizing funding for public transit, police departments, and public schools.',
        ],
      },
      {
        heading: 'The Polycentric Renaissance of Suburbs and Secondary Cities',
        paragraphs: [
          'Remote work did not destroy economic activity; it decentralized it. Trillions in spending power migrated from high-cost central business districts into suburban neighborhoods, exurbs, and Sunbelt secondary cities (Austin, Raleigh, Boise), fueling local retail, neighborhood restaurants, and home construction.',
        ],
      },
    ],
    details: [
      'Van Nieuwerburgh et al. (2023) estimated a 39% long-term decline in the value of U.S. commercial office stock due to remote work.',
      'Transit systems like BART (San Francisco) and the MTA (New York) face multi-hundred-million-dollar structural farebox deficits due to lost weekday commuters.',
      'Suburban and small-town commercial districts have experienced record sales tax revenue growth as workers spend locally during weekdays.',
    ],
    sources: [
      {
        title: 'The "Office Real Estate Apocalypse" and the Urban Doom Loop',
        url: 'https://academic.oup.com/rfs/article/36/12/4027/7258079',
        publisher: 'Review of Financial Studies (Gupta, Mittal & Van Nieuwerburgh)',
        year: '2023',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'The Doughnut Effect of Covid-19 on Cities (NBER w28876)',
        url: 'https://www.nber.org/papers/w28876',
        publisher: 'NBER (Arjun Ramani & Nicholas Bloom)',
        year: '2021',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'Transit Deficits and the Future of Urban Mobility',
        url: 'https://www.apta.com/research-technical-resources/transit-data-statistics/',
        publisher: 'American Public Transportation Association (APTA)',
        year: '2024',
        category: 'Court / Official Record',
      },
    ],
    tags: ['Housing & Healthcare', 'Macroeconomics', 'Taxation & Fiscal', 'Governance'],
    era: '2021–Present',
    relatedIds: ['pillar-work-autonomy', 'pillar-work-productivity'],
  },
];

const thesisNodes: DebateNode[] = [
  // Pillar 1 Theses
  {
    id: 'thesis-work-commute-flexibility',
    parentId: 'pillar-work-autonomy',
    kind: 'thesis',
    title: 'Eliminating the Commute Tax & Reclaiming Time Sovereignty',
    summary:
      'Posits that daily commutes represent an uncompensated, soul-crushing economic and environmental tax, and that eliminating them vastly enhances human well-being.',
    sections: [
      {
        heading: 'The Health and Psychological Toll of the Commute',
        paragraphs: [
          'Decades of psychological and public health literature confirm that the daily automobile commute is consistently rated by humans as the **single most miserable activity of their day**, associated with elevated blood pressure, obesity, chronic back pain, and sleep deprivation.',
          'Eliminating five commutes a week gives back over **six full 24-hour days per year** to the typical worker. This reclaimed time is invested in home-cooked meals, physical exercise, and family life, reducing chronic disease and medical expenditures.',
        ],
      },
      {
        heading: 'The Blurring of Boundaries and the "Always-On" Trap',
        paragraphs: [
          'Critics warn that without a physical commute to bookend the workday, professional boundaries disintegrate: home becomes the office, and the office becomes home, leading to late-night email checks and chronic psychological burnout.',
        ],
      },
    ],
    details: [
      'Commuting is consistently ranked as the lowest-utility daily activity in subjective well-being studies by Nobel laureate Daniel Kahneman.',
      'Remote work saves approximately 40 to 60 gallons of gasoline per year per commuter, lowering national carbon emissions.',
      'Blurring home-work boundaries has caused 48% of remote workers to report working longer hours than when they were in an office.',
    ],
    sources: [
      {
        title: 'A Survey Method for Characterizing Daily Life Experience: The Day Reconstruction Method',
        url: 'https://www.science.org/doi/10.1126/science.1103572',
        publisher: 'Science (Daniel Kahneman, Alan B. Krueger, David Schkade et al.)',
        year: '2004',
        category: 'Scholarship',
      },
      {
        title: 'Working From Home and the Environment',
        url: 'https://www.pnas.org/doi/10.1073/pnas.2304032120',
        publisher: 'Proceedings of the National Academy of Sciences (PNAS)',
        year: '2023',
        category: 'Empirical / Economic Study',
      },
    ],
    tags: ['Labor & Welfare', 'Civil Liberties', 'Energy & Climate'],
    era: '2004–Present',
    relatedIds: ['thesis-work-geographic-arbitrage'],
  },
  {
    id: 'thesis-work-geographic-arbitrage',
    parentId: 'pillar-work-autonomy',
    kind: 'thesis',
    title: 'Geographic Freedom, Lower Cost of Living & Distributed Opportunity',
    summary:
      'Argues that remote work breaks the geographic monopoly of ultra-expensive coastal superstar cities, allowing workers to access affordable housing and spacious family living.',
    sections: [
      {
        heading: 'Escaping the Coastal Superstar City Housing Trap',
        paragraphs: [
          'For decades, ambitious professionals faced an impossible trade-off: move to San Francisco, New York, or Seattle to access high-paying tech and finance jobs, but spend 50% of gross salary on cramped, dilapidated apartments with zero hope of homeownership.',
          'Remote work decouples salary from physical zip codes. Workers can earn competitive national wages while living in affordable cities (Pittsburgh, Salt Lake City, Kansas City) or rural areas, buying single-family homes with yards for their children.',
        ],
      },
      {
        heading: 'Corporate Pay Adjustments and Local Backlash',
        paragraphs: [
          'Companies like Google and Meta implemented location-based pay cuts of 10% to 25% for employees relocating to lower-cost regions. Meanwhile, influxes of coastal remote workers into "Zoom towns" like Bozeman and Bend sent local housing prices soaring, pricing out native teachers and nurses.',
        ],
      },
    ],
    details: [
      'The median home price in San Francisco ($1.3M) buys a 4,000-square-foot executive home on an acre of land in the Midwest.',
      'Over 2 million Americans migrated from dense urban downtowns to lower-cost suburbs and non-metropolitan areas between 2020 and 2023.',
      'Major tech firms enforce location-adjusted salary bands, reducing compensation for workers who leave primary tier-1 metros.',
    ],
    sources: [
      {
        title: 'The Great Geographic Reshuffling: Post-Pandemic Domestic Migration',
        url: 'https://www.census.gov/library/stories/2023/03/domestic-migration-trends.html',
        publisher: 'U.S. Census Bureau',
        year: '2023',
        category: 'Court / Official Record',
      },
      {
        title: 'Geographic Arbitrage in the Remote Work Era',
        url: 'https://www.frbsf.org/research-and-insights/publications/economic-letter/2022/november/remote-work-and-housing-costs/',
        publisher: 'Federal Reserve Bank of San Francisco',
        year: '2022',
        category: 'Empirical / Economic Study',
      },
    ],
    tags: ['Housing & Healthcare', 'Labor & Welfare', 'Demographics'],
    era: '2022–Present',
    relatedIds: ['thesis-work-commute-flexibility'],
  },

  // Pillar 2 Theses
  {
    id: 'thesis-work-tacit-mentorship',
    parentId: 'pillar-work-culture',
    kind: 'thesis',
    title: 'Junior Staff Development, Onboarding Frictions & Tacit Learning Penalties',
    summary:
      'Maintains that early-career development relies heavily on informal in-person shadowing and passive acoustic learning that cannot be replicated over video calls.',
    sections: [
      {
        heading: 'The Invisible Mechanics of Professional Apprenticeship',
        paragraphs: [
          'Junior analysts and engineers do not learn how to excel solely from employee manuals. They learn by eavesdropping on senior colleagues negotiating on the phone, noticing body language in client meetings, and asking five-second questions without having to schedule a formal calendar invite.',
          'Harvard economists **Natalia Emanuel, Emma Harrington, and Amanda Pallais (2023)** tracked thousands of software engineers: when in-person colocation ceased, code reviews and detailed training comments provided to junior female engineers dropped by **over 30%**, creating a hidden career tax on those who need mentorship most.',
        ],
      },
      {
        heading: 'The Digital Meritocracy Counter-Argument',
        paragraphs: [
          'Remote advocates counter that in-office "mentorship" often degenerated into country-club nepotism and favoritism based on sports banter or drinking culture. Transparent digital pull requests and documented Slack channels create a more objective, merit-based record of actual work quality.',
        ],
      },
    ],
    details: [
      'Emanuel, Harrington & Pallais (2023 NBER) proved that proximity to senior coworkers increased junior engineer retention and skill growth by 20–30%.',
      'Surveys show 74% of Gen Z employees report feeling disconnected from corporate leadership in fully remote environments.',
      'Digital pull requests and public issue tracking democratize code reviews and eliminate in-office demographic favoritism.',
    ],
    sources: [
      {
        title: 'The Power of Proximity to Coworkers (NBER w31180)',
        url: 'https://www.nber.org/papers/w31180',
        publisher: 'NBER (Natalia Emanuel, Emma Harrington & Amanda Pallais)',
        year: '2023',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'How Remote Work Is Impacting Young Professionals',
        url: 'https://www.pewresearch.org/social-trends/2023/03/30/how-teleworkers-are-faring-personally-and-professionally/',
        publisher: 'Pew Research Center',
        year: '2023',
        category: 'Watchdog / NGO',
      },
    ],
    tags: ['Media & Education', 'Labor & Welfare', 'Empirical Studies'],
    era: '2023–Present',
    relatedIds: ['thesis-work-serendipitous-collisions'],
  },
  {
    id: 'thesis-work-serendipitous-collisions',
    parentId: 'pillar-work-culture',
    kind: 'thesis',
    title: 'Spontaneous In-Person Collisions & Breakthrough Creative Intelligence',
    summary:
      'Argues that radical innovation requires unplanned physical interactions across diverse teams, whereas remote work siloes communication into narrow, pre-existing channels.',
    sections: [
      {
        heading: 'Siloing Collaboration Networks: The Microsoft Study',
        paragraphs: [
          'In a landmark study published in **Nature Human Behaviour (2022)**, researchers analyzed anonymized data from **61,182 Microsoft employees** before and after the shift to remote work. The findings were striking: company-wide collaboration networks became **substantially more static and siloed**.',
          'Remote workers spent more time communicating with their immediate, close-knit team, while cross-group ties across different departments fell by over **25%**. Bridging ties that bring unexpected ideas from marketing to engineering withered away, threatening the firm’s long-term capacity for radical innovation.',
        ],
      },
      {
        heading: 'The Myth of the Creative Watercooler',
        paragraphs: [
          'Remote proponents counter that the "watercooler epiphany" is a romanticized corporate myth. In modern open-plan offices, employees wear noise-cancelling headphones all day to escape acoustic chaos, collaborating over Slack even when seated five feet apart.',
        ],
      },
    ],
    details: [
      'Nature Human Behaviour study of 61,000+ Microsoft employees proved remote work produced more siloed and less dynamic collaboration networks.',
      'Cross-functional communication bridges between disparate departments decreased by 25% under remote arrangements.',
      'Open-plan office studies by Harvard’s Ethan Bernstein show face-to-face interactions paradoxically *fell by 70%* after companies adopted open seating.',
    ],
    sources: [
      {
        title: 'The Effects of Remote Work on Collaboration Networks (Nature Human Behaviour)',
        url: 'https://www.nature.com/articles/s41562-021-01196-4',
        publisher: 'Nature Human Behaviour (Yang et al. / Microsoft)',
        year: '2022',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'The Impact of the "Open" Workspace on Human Collaboration',
        url: 'https://royalsocietypublishing.org/doi/10.1098/rstb.2017.0239',
        publisher: 'Philosophical Transactions of the Royal Society B (Bernstein & Turban)',
        year: '2018',
        category: 'Scholarship',
      },
    ],
    tags: ['Science & Innovation', 'Media & Education', 'Labor & Welfare'],
    era: '2018–Present',
    relatedIds: ['thesis-work-tacit-mentorship'],
  },

  // Pillar 3 Theses
  {
    id: 'thesis-work-bloom-rcts',
    parentId: 'pillar-work-productivity',
    kind: 'thesis',
    title: 'Nick Bloom’s Randomized Trials: Equal Productivity & Slashed Employee Attrition',
    summary:
      'Examines gold-standard randomized controlled trials proving that hybrid work models maintain identical employee output while dramatically reducing costly voluntary turnover.',
    sections: [
      {
        heading: 'Gold-Standard Evidence from Trip.com',
        paragraphs: [
          'While executive debates on remote work are often dominated by gut feeling, **Nicholas Bloom (Stanford)** conducted a multi-year randomized controlled trial of 1,612 graduate-educated employees at global firm Trip.com, published in ***Nature* (2024)**. Employees with odd-numbered birthdays were allowed to work from home two days per week, while even-numbered birthdays remained in the office full-time.',
          'Over six months, performance evaluations, promotion rates, and self-reported output were **statistically indistinguishable** between the two groups. However, the hybrid group experienced a **35% reduction in employee quit rates**, saving the firm millions in recruitment and onboarding costs.',
        ],
      },
      {
        heading: 'Hybrid as the Pareto Frontier',
        paragraphs: [
          'Bloom concludes that hybrid work (3 days in office, 2 days at home) represents an economic sweet spot: teams coordinate their in-person days for meetings and collaborative brainstorming, leaving home days for focused deep work.',
        ],
      },
    ],
    details: [
      'Bloom et al. (2024 Nature) demonstrated a 35% reduction in employee turnover under hybrid working with zero negative effect on promotions or output.',
      'Trip.com estimated the retention savings from hybrid flexibility added millions directly to bottom-line net corporate profit.',
      'Female employees and workers with long commutes exhibited the highest retention benefits from hybrid arrangements.',
    ],
    sources: [
      {
        title: 'Hybrid Working From Home Improves Retention Without Damaging Performance (Nature)',
        url: 'https://www.nature.com/articles/s41586-024-07500-2',
        publisher: 'Nature (Nicholas Bloom, Ruobing Han & James Liang)',
        year: '2024',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'Does Working from Home Work? Evidence from a Chinese Experiment',
        url: 'https://academic.oup.com/qje/article/130/1/165/2337855',
        publisher: 'Quarterly Journal of Economics (Bloom, Liang, Roberts & Ying)',
        year: '2015',
        category: 'Scholarship',
      },
    ],
    tags: ['Labor & Welfare', 'Empirical Studies', 'Macroeconomics'],
    era: '2024–Present',
    relatedIds: ['thesis-work-asynch-coordination'],
  },
  {
    id: 'thesis-work-asynch-coordination',
    parentId: 'pillar-work-productivity',
    kind: 'thesis',
    title: 'Asynchronous Deep Work vs. Meeting Fragmentation & Digital Surveillance',
    summary:
      'Weighs the liberation of uninterrupted deep work against the rise of calendar fragmentation, constant messaging pings, and intrusive employee tracking software.',
    sections: [
      {
        heading: 'Cal Newport’s Deep Work and Maker Schedules',
        paragraphs: [
          'Computer science professor **Cal Newport** argues that high-value cognitive output requires uninterrupted multi-hour stretches of **deep work**. In traditional offices, workers are subjected to the "Hyperactive Hive Mind"—a constant barrage of shoulder taps, impromptu status updates, and open-plan noise that fragments attention into 10-minute shards.',
          'Working from home allows engineers, writers, and analysts to control their environment, silence notifications, and produce complex creative solutions with far higher quality.',
        ],
      },
      {
        heading: 'The Bossware Nightmare and Digital Panopticons',
        paragraphs: [
          'Conversely, distrustful executives have installed invasive **surveillance software** (such as Hubstaff or Teramind) that records keystrokes, tracks mouse movements, and snaps random webcam photos. This creates extreme anxiety, encouraging workers to fake activity with mouse-jigglers rather than doing genuine deep thinking.',
        ],
      },
    ],
    details: [
      'Cal Newport’s research shows it takes an average of 23 minutes to refocus cognitive attention after a single workplace interruption.',
      'Gartner reported that over 60% of large employers implemented digital employee monitoring tools following the 2020 shift to remote work.',
      'Digital surveillance tools create adversarial workplace cultures, causing high-performing senior talent to resign.',
    ],
    sources: [
      {
        title: 'Deep Work: Rules for Focused Success in a Distracted World',
        url: 'https://www.calnewport.com/books/deep-work/',
        publisher: 'Grand Central Publishing (Cal Newport)',
        year: '2016',
        category: 'Scholarship',
      },
      {
        title: 'Electronic Monitoring & Surveillance in the Workplace',
        url: 'https://www.eff.org/wp/electronic-monitoring-workplace',
        publisher: 'Electronic Frontier Foundation (EFF)',
        year: '2023',
        category: 'Watchdog / NGO',
      },
    ],
    tags: ['Civil Liberties', 'Labor & Welfare', 'AI & Technology'],
    era: '2016–Present',
    relatedIds: ['thesis-work-bloom-rcts'],
  },

  // Pillar 4 Theses
  {
    id: 'thesis-work-urban-doom-loop',
    parentId: 'pillar-work-cities',
    kind: 'thesis',
    title: 'The Commercial Real Estate Doom Loop & Municipal Fiscal Erosion',
    summary:
      'Warns that persistent office vacancies trigger commercial mortgage defaults, cratering municipal property tax revenues that fund basic public services.',
    sections: [
      {
        heading: 'The Mechanics of the Urban Doom Loop',
        paragraphs: [
          'In their widely cited paper, **Gupta, Mittal, and Van Nieuwerburgh (2023)** formulated the **"Urban Doom Loop"**: when office workers stay home 2 to 3 days per week, companies reduce their leased office footprint by 20% to 40%. As leases expire, commercial office towers lose over 40% of their market value, leading landlords to default on commercial mortgage-backed securities (CMBS).',
          'Because cities rely on commercial property assessments and sales taxes for 20% to 40% of their municipal budgets, falling values trigger severe revenue shortfalls. Cities are forced to cut spending on police, sanitation, and public transit, which worsens street conditions, causing more residents and businesses to flee in a self-reinforcing downward spiral.',
        ],
      },
      {
        heading: 'The Adaptive Reuse and Conversion Solution',
        paragraphs: [
          'Urbanists argue that the crisis offers a once-in-a-generation opportunity to **convert obsolete commercial office towers into dense residential housing**, transforming monocultural financial districts into vibrant, 24/7 mixed-use neighborhoods.',
        ],
      },
    ],
    details: [
      'Gupta et al. (2023) estimated a total value destruction of over $500 billion across the U.S. commercial office sector.',
      'San Francisco’s downtown office vacancy rate reached an all-time record of 36% in 2024, creating an estimated $800M municipal budget deficit.',
      'Architectural studies show only 15% to 20% of commercial office towers can be cost-effectively converted into residential units due to deep floorplates and plumbing limits.',
    ],
    sources: [
      {
        title: 'The "Office Real Estate Apocalypse" and the Urban Doom Loop',
        url: 'https://academic.oup.com/rfs/article/36/12/4027/7258079',
        publisher: 'Review of Financial Studies (Gupta, Mittal & Van Nieuwerburgh)',
        year: '2023',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'Converting Commercial Real Estate to Residential: A Blueprint for Cities',
        url: 'https://www.brookings.edu/articles/converting-commercial-real-estate-to-multifamily-housing/',
        publisher: 'Brookings Institution (Tracy Hadden Loh et al.)',
        year: '2023',
        category: 'Scholarship',
      },
    ],
    tags: ['Housing & Healthcare', 'Macroeconomics', 'Taxation & Fiscal'],
    era: '2023–Present',
    relatedIds: ['thesis-work-polycentric-revival'],
  },
  {
    id: 'thesis-work-polycentric-revival',
    parentId: 'pillar-work-cities',
    kind: 'thesis',
    title: 'Polycentric Suburbs, Small-Town Renaissance & Local Commercial Rebirth',
    summary:
      'Contends that remote work does not destroy wealth, but rather redistributes it into suburban downtowns and small towns, fostering healthier, polycentric communities.',
    sections: [
      {
        heading: 'The Doughnut Effect and Decentralized Prosperity',
        paragraphs: [
          'In **NBER w28876**, **Arjun Ramani and Nicholas Bloom** documented the **"Doughnut Effect"**: workers and consumer spending did not flee the metropolitan economy entirely; they moved out of the dense central core into the surrounding suburban ring. Neighborhood bakeries, suburban coffee shops, local hardware stores, and community parks experienced unprecedented vitality during weekday mornings.',
          'Instead of workers spending $25 on an overpriced salad in Midtown Manhattan, those dollars now circulate in local suburban economies, strengthening neighborhood ties and reducing the extreme wealth concentration of global superstar city centers.',
        ],
      },
      {
        heading: 'The Strain on Rural "Zoom Towns"',
        paragraphs: [
          'However, the influx of high-earning remote tech workers into small mountain and rural towns (such as Bozeman, Montana or Truckee, California) caused local home prices and rents to double within three years, creating severe housing crises for local service workers.',
        ],
      },
    ],
    details: [
      'Ramani & Bloom (2021) showed the "Doughnut Effect" redistributed tens of billions in annual retail spending from urban cores to suburbs.',
      'Small towns and suburban commercial corridors reported multi-year revenue gains as residents patronize local businesses on weekdays.',
      'Rural "Zoom towns" experienced severe housing affordability crunches, driving local municipal workforces out of the area.',
    ],
    sources: [
      {
        title: 'The Doughnut Effect of Covid-19 on Cities (NBER w28876)',
        url: 'https://www.nber.org/papers/w28876',
        publisher: 'NBER (Arjun Ramani & Nicholas Bloom)',
        year: '2021',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'Zoom Towns and the Housing Squeeze in the American West',
        url: 'https://www.lincolninst.edu/publications/articles/2021-09-zoom-towns-housing-crisis-rural-west',
        publisher: 'Lincoln Institute of Land Policy',
        year: '2021',
        category: 'Scholarship',
      },
    ],
    tags: ['Housing & Healthcare', 'Macroeconomics', 'Demographics'],
    era: '2021–Present',
    relatedIds: ['thesis-work-urban-doom-loop'],
  },
];

const proConNodes: DebateNode[] = [
  // Under thesis-work-commute-flexibility
  {
    id: 'pro-work-reclaimed-hours',
    parentId: 'thesis-work-commute-flexibility',
    kind: 'pro',
    title: 'Reclaiming 72 Daily Minutes Yields Major Health and Family Dividends',
    summary:
      'WFH Research proves workers reallocate saved commuting time toward physical exercise, home cooking, and parenting, improving mental and physical well-being.',
    sections: [
      {
        heading: 'The Reclaimed Time Dividend',
        paragraphs: [
          'Across a multi-country survey of tens of thousands of workers, **Barrero, Bloom & Davis (2023)** found that workers reallocate their 72 daily minutes of saved commute: approximately **40% is devoted to primary job tasks**, while the remaining **60% goes to family care, exercise, cooking, and sleep**.',
          'Eliminating highway driving reduces vehicle crash deaths, stress-induced hypertension, and cardiovascular strain, providing massive public health externalities.',
        ],
      },
    ],
    details: [
      'Average commute time saved is 72 minutes per day worked from home.',
      'Workers allocate roughly 30 minutes of saved commute time directly back to their employers as productive labor.',
      'Substantial reduction in traffic congestion and motor vehicle collision mortality during peak morning rush hours.',
    ],
    sources: [
      {
        title: 'Time Savings When Working From Home (NBER w30864)',
        url: 'https://www.nber.org/papers/w30864',
        publisher: 'NBER (Aksoy, Barrero, Bloom, Davis et al.)',
        year: '2023',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'Commuting and Well-Being: A Review of the Evidence',
        url: 'https://www.sciencedirect.com/science/article/pii/S136984781400030X',
        publisher: 'Transportation Research Part F (Stutzer & Frey)',
        year: '2014',
        category: 'Scholarship',
      },
    ],
    tags: ['Labor & Welfare', 'Civil Liberties', 'Human Rights'],
    era: '2023–Present',
    relatedIds: ['con-work-boundary-dissolution'],
  },
  {
    id: 'con-work-boundary-dissolution',
    parentId: 'thesis-work-commute-flexibility',
    kind: 'con',
    title: 'The "Always-On" Trap: Boundary Dissolution and Remote Burnout',
    summary:
      'Without physical office boundaries, the workday never truly ends; workers face constant digital pings, extending hours and driving chronic burnout.',
    sections: [
      {
        heading: 'The Death of the Natural Workday Boundary',
        paragraphs: [
          'In traditional office life, walking out the front door and boarding the train provided an unambiguous psychological transition: work was done. In remote settings, laptops remain open on kitchen tables, and managers expect instantaneous responses to Slack pings at 9:00 PM on Sunday.',
          'Data from Microsoft Teams telemetry shows that the "triple peak" workday emerged: an evening spike in work activity between 8:00 PM and 10:00 PM, destroying personal recovery time.',
        ],
      },
    ],
    details: [
      'Microsoft telemetry data shows remote workers experienced a 46% increase in after-hours chats and emails.',
      'The "triple peak" workday documents a third spike in work engagement occurring late at night after dinner.',
      'Surveys indicate that over 50% of full-time remote employees struggle to psychologically detach from work at night.',
    ],
    sources: [
      {
        title: 'The Rise of the Triple Peak Day',
        url: 'https://www.microsoft.com/en-us/worklab/triple-peak-day',
        publisher: 'Microsoft WorkLab',
        year: '2022',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'Remote Work and Psychological Detachment: The Role of Work-Home Boundaries',
        url: 'https://academic.oup.com/occmed/article/71/6/281/6355462',
        publisher: 'Occupational Medicine (Sonnentag et al.)',
        year: '2021',
        category: 'Scholarship',
      },
    ],
    tags: ['Labor & Welfare', 'Civil Liberties'],
    era: '2021–Present',
    relatedIds: ['pro-work-reclaimed-hours'],
  },

  // Under thesis-work-geographic-arbitrage
  {
    id: 'pro-work-housing-affordability',
    parentId: 'thesis-work-geographic-arbitrage',
    kind: 'pro',
    title: 'Geographic Arbitrage Enables Homeownership and Family Formation',
    summary:
      'Escaping hyper-inflated superstar metros allows families to purchase homes, reduce financial stress, and raise children in spacious communities.',
    sections: [
      {
        heading: 'Unlocking the American Dream Outside Superstar Cities',
        paragraphs: [
          'In San Francisco, New York, or Boston, the median starter home requires a household income exceeding $250,000. By decoupling career success from physical proximity to Silicon Valley or Wall Street, remote work opens up the housing market: young families can buy beautiful homes in Raleigh, Grand Rapids, or Cleveland for a fraction of the cost, achieving financial stability a decade earlier.',
        ],
      },
    ],
    details: [
      'Homeownership rates among remote workers who relocated outside primary metros are 18 percentage points higher than those who remained.',
      'Decouples employment from the extreme housing supply restrictions and zoning bottlenecks of coastal cities.',
      'Allows parents to live closer to extended family networks, providing informal childcare support.',
    ],
    sources: [
      {
        title: 'Remote Work and the Geography of Housing Demand',
        url: 'https://www.nber.org/papers/w29837',
        publisher: 'NBER (Mondragon & Wieland)',
        year: '2022',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'Housing Affordability in the Post-Pandemic Economy',
        url: 'https://www.jchs.harvard.edu/state-nations-housing-2023',
        publisher: 'Harvard Joint Center for Housing Studies',
        year: '2023',
        category: 'Court / Official Record',
      },
    ],
    tags: ['Housing & Healthcare', 'Labor & Welfare', 'Demographics'],
    era: '2022–Present',
    relatedIds: ['con-work-local-wage-slashes'],
  },
  {
    id: 'con-work-local-wage-slashes',
    parentId: 'thesis-work-geographic-arbitrage',
    kind: 'con',
    title: 'Corporate Location-Based Pay Cuts and Rural Gentrification Backlash',
    summary:
      'Companies slash wages for workers relocating to cheaper regions, while rural communities face devastating housing inflation that displaces locals.',
    sections: [
      {
        heading: 'The Wage Clawback and Rural Resentment',
        paragraphs: [
          'Tech employers swiftly implemented geographic compensation tiers: a software engineer moving from Manhattan to North Carolina faces an immediate 15% to 20% salary cut. At the same time, the arrival of thousands of tech earners in mountain towns like Bozeman, Montana, ignited fierce local resentment, as home prices skyrocketed by 80%, pricing out local firefighters, teachers, and service workers.',
        ],
      },
    ],
    details: [
      'Meta, Google, and VMware enforce geographic pay cuts of up to 25% for employees relocating to lower-tier metros.',
      'Median home prices in Western "Zoom towns" surged by more than 70% between 2019 and 2022, displacing local workforces.',
      'Generates bitter political tension between incoming remote professionals and longtime local residents.',
    ],
    sources: [
      {
        title: 'The Great Pay Cut: Tech Companies Slash Salaries for Remote Relocators',
        url: 'https://www.bloomberg.com/news/articles/2021-08-11/tech-companies-are-slashing-pay-for-remote-workers-moving-to-cheaper-cities',
        publisher: 'Bloomberg',
        year: '2021',
        category: 'Debate / Broadcast',
      },
      {
        title: 'Housing Displacement in Western Amenity Communities',
        url: 'https://www.huduser.gov/portal/periodicals/em/spring22/highlight2.html',
        publisher: 'U.S. Department of Housing and Urban Development (HUD)',
        year: '2022',
        category: 'Court / Official Record',
      },
    ],
    tags: ['Labor & Welfare', 'Housing & Healthcare', 'Demographics'],
    era: '2021–Present',
    relatedIds: ['pro-work-housing-affordability'],
  },

  // Under thesis-work-tacit-mentorship
  {
    id: 'pro-work-junior-career-penalty',
    parentId: 'thesis-work-tacit-mentorship',
    kind: 'pro',
    title: 'Junior Workers Suffer Severe Onboarding and Career Advancement Penalties',
    summary:
      'Harvard NBER research proves that remote work deprives young professionals of critical feedback, networking opportunities, and career sponsorship.',
    sections: [
      {
        heading: 'The Stifling of Apprenticeship',
        paragraphs: [
          'In *The Power of Proximity to Coworkers*, **Emanuel, Harrington & Pallais (2023)** documented that when coworkers sat in the same building, senior engineers provided **21% more feedback** on junior peers’ code. When offices closed, this mentoring vanished.',
          'Junior workers who enter the corporate world via Zoom lack the social capital, trust, and executive sponsorship necessary to secure promotions, leading to stunted career trajectories.',
        ],
      },
    ],
    details: [
      'Junior engineers experienced a 21% reduction in constructive technical feedback under remote conditions.',
      'Promotion rates for fully remote junior staff lagged in-office peers by nearly 15% across corporate tracking studies.',
      'Young professionals miss out on the informal networking and friendships that form the basis of a 40-year career network.',
    ],
    sources: [
      {
        title: 'The Power of Proximity to Coworkers (NBER w31180)',
        url: 'https://www.nber.org/papers/w31180',
        publisher: 'NBER (Emanuel, Harrington & Pallais)',
        year: '2023',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'Career Progression in the Remote Workplace',
        url: 'https://hbr.org/2023/02/the-career-costs-of-remote-work',
        publisher: 'Harvard Business Review',
        year: '2023',
        category: 'Scholarship',
      },
    ],
    tags: ['Media & Education', 'Labor & Welfare', 'Empirical Studies'],
    era: '2023–Present',
    relatedIds: ['con-work-objective-meritocracy'],
  },
  {
    id: 'con-work-objective-meritocracy',
    parentId: 'thesis-work-tacit-mentorship',
    kind: 'con',
    title: 'Asynchronous Documentation Eliminates Office Bias and Subjective Favoritism',
    summary:
      'In-person office culture rewarded charismatic extroverts and late-night schmoozing; remote work judges employees on objective output and written communication.',
    sections: [
      {
        heading: 'Merit-Based Output Over "Seat Time" Charades',
        paragraphs: [
          'In traditional offices, promotions were heavily influenced by **presenteeism**—sitting at a desk until 8:00 PM so the boss sees your jacket on the chair—and participating in male-dominated sports banter or happy hours. Remote work strips away this performative theater.',
          'When work is asynchronous and transparently logged in Jira, GitHub, or Figma, managers evaluate employees on **what they actually built and delivered**, dramatically leveling the playing field for introverts, working mothers, and minority employees.',
        ],
      },
    ],
    details: [
      'Eliminates subjective "presenteeism" biases where physical desk presence was conflated with actual output.',
      'Working mothers report a 24% reduction in workplace microaggressions in remote environments.',
      'Transparent digital workflows create auditable records of individual contribution and code quality.',
    ],
    sources: [
      {
        title: 'Women in the Workplace 2023: Remote Work and Flexibility',
        url: 'https://www.mckinsey.com/featured-insights/diversity-and-inclusion/women-in-the-workplace',
        publisher: 'McKinsey & Company / LeanIn.Org',
        year: '2023',
        category: 'Watchdog / NGO',
      },
      {
        title: 'Remote: Office Not Required',
        url: 'https://basecamp.com/books/remote',
        publisher: 'Crown Publishing (Jason Fried & David Heinemeier Hansson)',
        year: '2013',
        category: 'Scholarship',
      },
    ],
    tags: ['Labor & Welfare', 'Civil Liberties', 'Human Rights'],
    era: '2013–Present',
    relatedIds: ['pro-work-junior-career-penalty'],
  },

  // Under thesis-work-serendipitous-collisions
  {
    id: 'pro-work-hallway-track-magic',
    parentId: 'thesis-work-serendipitous-collisions',
    kind: 'pro',
    title: 'In-Person Serendipity Sparks Breakthrough Cross-Disciplinary Innovation',
    summary:
      'Steve Jobs’ Pixar design and decades of organizational research prove that spontaneous physical collisions generate unexpected creative breakthroughs.',
    sections: [
      {
        heading: 'The Architecture of Accidental Invention',
        paragraphs: [
          'When **Steve Jobs** designed the Pixar headquarters, he placed the mailboxes, the café, and the bathrooms in a central atrium specifically to force animators, software coders, and business executives to run into each other accidentally. Decades of breakthrough products—from the Post-it note to Bell Labs’ transistors—originated not in formal meetings, but in accidental hallway chatter.',
          'Virtual Zoom meetings are scheduled, agenda-driven, and transactional; they completely eradicate the creative chaos of accidental human connection.',
        ],
      },
    ],
    details: [
      'Physical colocation is correlated with higher patent citation rates and breakthrough scientific publications.',
      'Zoom meetings systematically suppress conversational turn-taking and nonverbal communicative cues.',
      'Steve Jobs’ atrium design at Pixar remains a textbook case study in engineering serendipitous cross-disciplinary collisions.',
    ],
    sources: [
      {
        title: 'Virtual Collaboration Hinders Idea Generation (Nature)',
        url: 'https://www.nature.com/articles/s41586-022-04643-y',
        publisher: 'Nature (Melanie S. Brucks & Jonathan Levav)',
        year: '2022',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'Steve Jobs',
        url: 'https://www.simonandschuster.com/books/Steve-Jobs/Walter-Isaacson/9781451648539',
        publisher: 'Simon & Schuster (Walter Isaacson)',
        year: '2011',
        category: 'Scholarship',
      },
    ],
    tags: ['Science & Innovation', 'Media & Education'],
    era: '2011–Present',
    relatedIds: ['con-work-open-office-cacophony'],
  },
  {
    id: 'con-work-open-office-cacophony',
    parentId: 'thesis-work-serendipitous-collisions',
    kind: 'con',
    title: 'Open-Plan Offices Destroyed Real In-Person Collaboration Decades Ago',
    summary:
      'Harvard research proved that open-plan offices caused face-to-face interactions to plummet by 70%, replacing collaboration with headphones and Slack.',
    sections: [
      {
        heading: 'The Myth of the Collaborative Open Floor Plan',
        paragraphs: [
          'Executives romanticize in-person collaboration while ignoring the reality of the physical office: open-plan bench seating with zero acoustic privacy. In their landmark empirical study, **Ethan Bernstein and Stephen Turban (Harvard, 2018)** tracked employees before and after moving to open offices: **face-to-face interactions dropped by 70%**, while electronic messaging increased by 67%.',
          'Workers wore headphones all day to preserve cognitive sanity, hiding behind computer monitors. Longing for the "office magic" ignores the reality that modern offices had already become acoustic factories of interruption.',
        ],
      },
    ],
    details: [
      'Bernstein & Turban (2018) proved face-to-face interaction fell by 70% in open-plan offices.',
      'Noise distractions in open offices reduce cognitive memory retention and increase worker stress hormones.',
      'Employees in physical offices spend over 80% of their day messaging colleagues via Slack and email anyway.',
    ],
    sources: [
      {
        title: 'The Impact of the "Open" Workspace on Human Collaboration',
        url: 'https://royalsocietypublishing.org/doi/10.1098/rstb.2017.0239',
        publisher: 'Philosophical Transactions of the Royal Society B (Bernstein & Turban)',
        year: '2018',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'The Open-Plan Office Is Dead',
        url: 'https://www.theatlantic.com/health/archive/2020/05/open-plan-office-dead/611567/',
        publisher: 'The Atlantic',
        year: '2020',
        category: 'Debate / Broadcast',
      },
    ],
    tags: ['Labor & Welfare', 'Science & Innovation'],
    era: '2018–Present',
    relatedIds: ['pro-work-hallway-track-magic'],
  },

  // Under thesis-work-bloom-rcts
  {
    id: 'pro-work-trip-nature-evidence',
    parentId: 'thesis-work-bloom-rcts',
    kind: 'pro',
    title: 'Trip.com Nature RCT Establishes Hybrid Work as a Win-Win for Firms and Workers',
    summary:
      'Rigorous randomized trial data proves hybrid schedules cause zero performance decline while saving firms millions in employee retention and recruitment.',
    sections: [
      {
        heading: 'The Definitive Gold Standard in Work Organization',
        paragraphs: [
          'Published in ***Nature* (2024)**, the randomized trial at Trip.com tracked 1,612 employees across engineering, marketing, accounting, and finance. Workers randomized to hybrid schedules (3-2) showed identical quality ratings and lines of code written compared to full-time in-office controls over six months.',
          'Crucially, **resignation rates plummeted by 35%**, with the largest retention gains seen among female employees and non-managers. Hybrid work eliminated the attrition churn that cripples knowledge organizations, directly boosting firm profitability.',
        ],
      },
    ],
    details: [
      'The Trip.com study is the largest randomized controlled trial of hybrid knowledge work in economic history.',
      'Documented zero statistically significant difference in performance evaluations or promotion rates between hybrid and in-office cohorts.',
      'The 35% reduction in employee quit rates saved millions in recruitment and training costs.',
    ],
    sources: [
      {
        title: 'Hybrid Working From Home Improves Retention Without Damaging Performance (Nature)',
        url: 'https://www.nature.com/articles/s41586-024-07500-2',
        publisher: 'Nature (Nicholas Bloom, Ruobing Han & James Liang)',
        year: '2024',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'The Evolution of Working from Home',
        url: 'https://academic.oup.com/economicpolicy/article/38/115/455/7222521',
        publisher: 'Economic Policy (Aksoy et al.)',
        year: '2023',
        category: 'Scholarship',
      },
    ],
    tags: ['Labor & Welfare', 'Empirical Studies', 'Macroeconomics'],
    era: '2024–Present',
    relatedIds: ['con-work-long-term-capital-decay'],
  },
  {
    id: 'con-work-long-term-capital-decay',
    parentId: 'thesis-work-bloom-rcts',
    kind: 'con',
    title: 'Short-Term Execution Metrics Mask Long-Term Organizational Capital Decay',
    summary:
      'Measuring lines of code or ticket closures over six months overlooks the slow erosion of institutional culture, trust, and strategic alignment.',
    sections: [
      {
        heading: 'The Depletion of Pre-Existing Social Capital',
        paragraphs: [
          'Harvard Business School researchers and management theorists caution that short-term RCTs measure **task execution**, not **organizational longevity**. Teams succeeded in 2020–2022 because they were spending down a pre-existing reservoir of **in-person social trust** built up over years of shared physical proximity.',
          'As tenured workers retire and new hires arrive who have never met colleagues in person, that social trust reserve runs dry, leading to friction, misunderstanding, and strategic paralysis.',
        ],
      },
    ],
    details: [
      'Short-term output metrics fail to capture the multi-year erosion of institutional memory and trust.',
      'Teams that formed in-person exhibit higher resilience under crisis than newly assembled purely virtual teams.',
      'Strategic corporate realignment becomes vastly harder when leadership cannot convene key stakeholders in person.',
    ],
    sources: [
      {
        title: 'The Social Capital Dilemma in Remote Work',
        url: 'https://hbr.org/2021/11/dont-let-remote-work-erode-your-social-capital',
        publisher: 'Harvard Business Review (Mark Mortensen & Constance Noonan Hadley)',
        year: '2021',
        category: 'Scholarship',
      },
      {
        title: 'Organizational Social Capital in the Digital Workplace',
        url: 'https://academic.oup.com/jcmc/article/26/5/285/6355460',
        publisher: 'Journal of Computer-Mediated Communication',
        year: '2021',
        category: 'Scholarship',
      },
    ],
    tags: ['Labor & Welfare', 'Media & Education', 'Philosophy & Ethics'],
    era: '2021–Present',
    relatedIds: ['pro-work-trip-nature-evidence'],
  },

  // Under thesis-work-asynch-coordination
  {
    id: 'pro-work-deep-work-flow',
    parentId: 'thesis-work-asynch-coordination',
    kind: 'pro',
    title: 'Asynchronous Work Protects Deep Focus and Eliminates Meeting Theater',
    summary:
      'Asynchronous communication empowers knowledge workers to enter multi-hour cognitive flow states, eliminating performative status meetings.',
    sections: [
      {
        heading: 'Liberation from the Meeting Industrial Complex',
        paragraphs: [
          'In remote-first organizations (like GitLab and Automattic), meetings are treated as a last resort. Information is shared through structured written documentation, detailed RFCs (Request for Comments), and asynchronous pull requests. This ends the scourge of performative 15-person meetings where only two people speak.',
          'Knowledge workers regain their full cognitive bandwidth, allowing them to solve difficult analytical and technical problems without interruption.',
        ],
      },
    ],
    details: [
      'GitLab operates 100% remotely across 60+ countries using a publicly viewable handbook of asynchronous procedures.',
      'Workers in documentation-heavy asynchronous cultures report 40% fewer meetings and higher job satisfaction.',
      'Uninterrupted focus time is the single strongest predictor of software developer productivity.',
    ],
    sources: [
      {
        title: 'The GitLab Remote Playbook: Asynchronous Work in Practice',
        url: 'https://about.gitlab.com/handbook/all-remote/',
        publisher: 'GitLab Handbook',
        year: '2023',
        category: 'Scholarship',
      },
      {
        title: 'Stop the Meeting Madness',
        url: 'https://hbr.org/2017/07/stop-the-meeting-madness',
        publisher: 'Harvard Business Review (Perlow, Hadley & Eun)',
        year: '2017',
        category: 'Scholarship',
      },
    ],
    tags: ['Labor & Welfare', 'Science & Innovation', 'Civil Liberties'],
    era: '2017–Present',
    relatedIds: ['con-work-bossware-paranoia'],
  },
  {
    id: 'con-work-bossware-paranoia',
    parentId: 'thesis-work-asynch-coordination',
    kind: 'con',
    title: 'Remote Work Has Spawned Intrusive Bossware and Digital Panopticons',
    summary:
      'Managers unable to see workers physically have turned to keystroke tracking, webcam snapshots, and AI surveillance, destroying workplace trust.',
    sections: [
      {
        heading: 'The Dystopia of Digital Monitoring',
        paragraphs: [
          'Deprived of physical visual oversight, companies have aggressively deployed **"bossware"**: software that logs keystrokes, tracks active browser tabs, measures mouse movements, and takes automated webcam screenshots every ten minutes. If an employee pauses to think or read a paper document, software flags them as "idle."',
          'This surveillance panopticon causes immense stress, forcing workers to engage in fraudulent activity (buying hardware "mouse-jigglers") rather than doing thoughtful work.',
        ],
      },
    ],
    details: [
      'Sales of "mouse-jigglers" surged by over 400% on retail sites as workers attempt to deceive activity-monitoring bossware.',
      'The American Psychological Association found workers under digital monitoring reported 43% higher clinical exhaustion scores.',
      'Digital surveillance turns managerial relationships adversarial, incentivizing metrics gaming rather than genuine value creation.',
    ],
    sources: [
      {
        title: 'The Electronic Panopticon: How Workplace Monitoring Harms Mental Health',
        url: 'https://www.apa.org/pubs/reports/work-well-being-2023',
        publisher: 'American Psychological Association (APA)',
        year: '2023',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'Your Boss Is Watching: The Dark Side of Remote Work Surveillance',
        url: 'https://www.nytimes.com/interactive/2022/08/14/business/worker-productivity-tracking.html',
        publisher: 'The New York Times (Jodi Kantor & Arya Sundaram)',
        year: '2022',
        category: 'Debate / Broadcast',
      },
    ],
    tags: ['Civil Liberties', 'Labor & Welfare', 'AI & Technology'],
    era: '2022–Present',
    relatedIds: ['pro-work-deep-work-flow'],
  },

  // Under thesis-work-urban-doom-loop
  {
    id: 'pro-work-transit-tax-crisis',
    parentId: 'thesis-work-urban-doom-loop',
    kind: 'pro',
    title: 'Van Nieuwerburgh Proves Commercial Real Estate Collapse Threatens Cities',
    summary:
      'A 39% plunge in office property values generates severe municipal fiscal crises, threatening subway systems, police departments, and public services.',
    sections: [
      {
        heading: 'The Commercial Property Tax Catastrophe',
        paragraphs: [
          'In their peer-reviewed study in the *Review of Financial Studies*, **Gupta, Mittal & Van Nieuwerburgh** demonstrated that commercial office properties lost **over $500 billion in value** as remote work stabilized. Because cities rely on commercial property taxes for a huge fraction of municipal budgets, falling assessments mean massive municipal deficits.',
          'Transit agencies—including San Francisco’s BART, Boston’s MBTA, and Chicago’s CTA—face existential budget shortfalls because weekday ridership remains 30% to 50% below pre-pandemic levels.',
        ],
      },
    ],
    details: [
      'Commercial office property values fell by an estimated 39% nationally, with steeper drops in tech-centric metros.',
      'Public transit systems in major U.S. cities face cumulative structural operating deficits exceeding $5 billion through 2026.',
      'Municipal budget deficits force painful cuts to street maintenance, libraries, emergency response, and public health clinics.',
    ],
    sources: [
      {
        title: 'The "Office Real Estate Apocalypse" and the Urban Doom Loop',
        url: 'https://academic.oup.com/rfs/article/36/12/4027/7258079',
        publisher: 'Review of Financial Studies (Gupta, Mittal & Van Nieuwerburgh)',
        year: '2023',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'Fiscal Pressures on Large U.S. Cities in the Post-Pandemic Era',
        url: 'https://www.lincolninst.edu/publications/policy-focus-reports/fiscal-pressures-large-us-cities',
        publisher: 'Lincoln Institute of Land Policy',
        year: '2023',
        category: 'Scholarship',
      },
    ],
    tags: ['Housing & Healthcare', 'Macroeconomics', 'Taxation & Fiscal'],
    era: '2023–Present',
    relatedIds: ['con-work-adaptive-reuse-housing'],
  },
  {
    id: 'con-work-adaptive-reuse-housing',
    parentId: 'thesis-work-urban-doom-loop',
    kind: 'con',
    title: 'Converting Obsolete Office Towers Creates Vibrant 24/7 Mixed-Use Downtowns',
    summary:
      'Repurposing commercial towers into dense residential apartments transforms sterile 9-to-5 business districts into thriving, resilient communities.',
    sections: [
      {
        heading: 'The Historic Opportunity for Downtown Transformation',
        paragraphs: [
          'Pre-pandemic financial districts were sterile, monocultural deserts that shut down completely at 6:00 PM and remained dead on weekends. The decline of obsolete office demand provides an unprecedented opportunity to **convert commercial towers into residential apartments and artist lofts**, creating genuine 24/7 neighborhoods.',
          'Lower Manhattan successfully executed this exact transformation after the 1990s and 9/11, converting dozens of office buildings into residences and tripling its permanent residential population.',
        ],
      },
    ],
    details: [
      'Lower Manhattan converted over 30 million square feet of obsolete office space into housing over two decades, tripling its residential population.',
      'Cities like New York, Chicago, and Calgary have enacted tax abatement programs to subsidize office-to-residential conversions.',
      'Dense downtown residential living eliminates the need for car commutes and boosts local restaurants 7 days a week.',
    ],
    sources: [
      {
        title: 'Office-to-Housing Conversions: What Works and What Doesn’t',
        url: 'https://www.urban.org/research/publication/office-housing-conversions',
        publisher: 'Urban Institute',
        year: '2023',
        category: 'Scholarship',
      },
      {
        title: 'The Transformation of Lower Manhattan: Lessons for Downtown Revitalization',
        url: 'https://downtownny.com/research-statistics/lower-manhattan-real-estate-year-in-review-2023/',
        publisher: 'Alliance for Downtown New York',
        year: '2024',
        category: 'Watchdog / NGO',
      },
    ],
    tags: ['Housing & Healthcare', 'Governance', 'Macroeconomics'],
    era: '2023–Present',
    relatedIds: ['pro-work-transit-tax-crisis'],
  },

  // Under thesis-work-polycentric-revival
  {
    id: 'pro-work-neighborhood-renaissance',
    parentId: 'thesis-work-polycentric-revival',
    kind: 'pro',
    title: 'Decentralized Spending Sparks a Vibrant Suburban and Neighborhood Renaissance',
    summary:
      'Spending that once flowed exclusively into downtown corporate chains now revitalizes local family-owned bakeries, bookstores, and neighborhood parks.',
    sections: [
      {
        heading: 'The Rise of the 15-Minute Neighborhood',
        paragraphs: [
          'When millions of professionals work from home on weekdays, they patronize local neighborhood delis, walk their dogs in community parks, and buy groceries at independent family markets. This localized spending fosters the **15-minute city**, where daily life revolves around vibrant walkable neighborhood hubs rather than distant highway commutes.',
        ],
      },
    ],
    details: [
      'Credit card transaction data shows suburban grocery and restaurant spending grew 15% to 20% faster than downtown cores.',
      'Encourages civic participation in local school boards, library committees, and neighborhood associations.',
      'Promotes healthier, active transit (walking and biking) for daily neighborhood errands.',
    ],
    sources: [
      {
        title: 'The Rise of the 15-Minute City',
        url: 'https://www.brookings.edu/articles/the-rise-of-the-15-minute-city/',
        publisher: 'Brookings Institution',
        year: '2022',
        category: 'Scholarship',
      },
      {
        title: 'Local Consumption Shifts in the Post-COVID Economy',
        url: 'https://www.jpmorganchase.com/institute/research/city-business/spending-shifts-post-covid',
        publisher: 'JPMorgan Chase Institute',
        year: '2023',
        category: 'Empirical / Economic Study',
      },
    ],
    tags: ['Housing & Healthcare', 'Labor & Welfare', 'Demographics'],
    era: '2022–Present',
    relatedIds: ['con-work-rural-gentrification-strain'],
  },
  {
    id: 'con-work-rural-gentrification-strain',
    parentId: 'thesis-work-polycentric-revival',
    kind: 'con',
    title: '"Zoom Towns" Experience Severe Housing Affordability Crises for Local Workers',
    summary:
      'The influx of wealthy coastal remote workers into small rural communities doubles housing costs, displacing long-time service and municipal workers.',
    sections: [
      {
        heading: 'The Destructive Shock of "Zoom Towns"',
        paragraphs: [
          'When hundreds of tech professionals earning $200,000+ relocated to small towns in Idaho, Montana, Colorado, and Maine, local housing markets were overwhelmed. Native residents earning local wages ($15 to $25 per hour) found themselves outbid on homes and apartments, resulting in local teachers, nurses, and sheriffs living in campers or leaving town.',
        ],
      },
    ],
    details: [
      'Median home prices in towns like Bozeman, MT and Bend, OR doubled within three years following remote work migration waves.',
      'Local schools and municipal services faced severe staffing shortages as essential workers were priced out of housing.',
      'Rural infrastructure (roads, water treatment, hospitals) was overwhelmed by rapid influxes of permanent residents.',
    ],
    sources: [
      {
        title: 'Zoom Towns and the Housing Squeeze in the American West',
        url: 'https://www.lincolninst.edu/publications/articles/2021-09-zoom-towns-housing-crisis-rural-west',
        publisher: 'Lincoln Institute of Land Policy',
        year: '2021',
        category: 'Scholarship',
      },
      {
        title: 'Rural Gentrification and the Future of Mountain Communities',
        url: 'https://headwaterseconomics.org/economic-development/trends-performance/amenity-migration-western-counties/',
        publisher: 'Headwaters Economics',
        year: '2022',
        category: 'Empirical / Economic Study',
      },
    ],
    tags: ['Housing & Healthcare', 'Demographics', 'Labor & Welfare'],
    era: '2021–Present',
    relatedIds: ['pro-work-neighborhood-renaissance'],
  },
];

export const futureOfWorkDataset: DebateGraphDataset = {
  id: 'future-of-work',
  version: '1.0.0',
  shortTitle: 'Future of Work & Remote',
  title: 'Remote Work vs. Office Colocation',
  subtitle: 'Decentralized autonomy & global talent vs. in-person collaboration, mentorship & corporate culture',
  searchPlaceholder: 'Search remote work, Nick Bloom, hybrid RCTs, doom loop, mentorship... (/)',
  epistemologyNote:
    'This graph balances econometric evaluations of hybrid productivity RCTs (Nature, NBER, WFH Research) against organizational sociology on mentorship and cultural capital, alongside commercial real estate modeling (Columbia, Brookings).',
  availableTags: [
    'Labor & Welfare',
    'Macroeconomics',
    'Media & Education',
    'Civil Liberties',
    'Housing & Healthcare',
    'Empirical Studies',
    'Science & Innovation',
    'Demographics',
    'Philosophy & Ethics',
    'Taxation & Fiscal',
    'Governance',
    'Human Rights',
    'AI & Technology',
    'Energy & Climate',
  ],
  shortPillarLabels: {
    'pillar-work-autonomy': '1. Flexibility & Time Sovereignty',
    'pillar-work-culture': '2. Mentorship & Serendipity',
    'pillar-work-productivity': '3. Hybrid RCTs & Deep Work',
    'pillar-work-cities': '4. Real Estate & Post-Downtown',
  },
  lastUpdated: '2026-11',
  nodes: [rootNode, ...pillarNodes, ...thesisNodes, ...proConNodes],
};
