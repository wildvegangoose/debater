import { DebateNode } from '../../types/debate';

export const laborAutomationNodes: DebateNode[] = [
  {
    id: 'pillar-econ-labor',
    parentId: 'root-econ',
    kind: 'pillar',
    title: 'Labor Markets, Minimum Wage, Unions & AI / UBI',
    summary:
      'Explores how institutions, bargaining power, and technological waves shape worker pay, employment, and social safety nets. Weighs minimum-wage monopsony research, sectoral union bargaining, and Universal Basic Income against competitive disemployment models, labor-market flexibility, and targeted work subsidies.',
    sections: [
      {
        heading: 'From Competitive Spot Markets to Imperfect Labor Bargaining',
        paragraphs: [
          'For decades, introductory neoclassical textbooks modeled labor markets like competitive commodity auctions where any **statutory minimum wage** or **union wage floor** above market-clearing levels automatically caused unemployment. Beginning in the **1990s**, natural-experiment pioneers—led by **2021 Nobel laureate David Card**, **Alan Krueger**, **Alan Manning**, and **Arindrajit Dube**—transformed empirical labor economics by documenting pervasive **employer monopsony power**, search frictions, and wage-setting latitude.',
          'Skeptics including **David Neumark**, **Jeffrey Clemens**, and **Congressional Budget Office (CBO)** modelers counter that while modest floors may be benign in high-wage cities, steep **$15–$20+ mandates** and rigid European-style union rules still price out young and less-skilled workers, accelerate **kiosk/robotic substitution**, and slow job creation.'
        ]
      },
      {
        heading: 'Generative AI, Task Displacement & Safety-Net Architecture',
        paragraphs: [
          'Simultaneously, rapid advances in **artificial intelligence** and robotics have intensified **2024 Nobel laureate Daron Acemoglu** and **David Autor’s** debate over whether AI will create enough new human tasks to offset **white- and blue-collar displacement**—pitting **Universal Basic Income (UBI)** advocates against defenders of work-conditioned **Earned Income Tax Credits (EITC)** and **wage subsidies**.'
        ]
      }
    ],
    details: [
      'Tests Card-Krueger and Dube border-county minimum-wage studies showing negligible job loss against CBO and Seattle administrative payroll evidence on reduced low-skill hours.',
      'Compares Nordic sectoral bargaining and mid-century union inequality compression against Southern European youth unemployment, public-sector union capture, and U.S. Sunbelt dynamism.',
      'Weighs Acemoglu-Restrepo AI task displacement and UBI’s elimination of welfare cliffs against $3T+ fiscal math, OpenResearch RCT work reductions, and targeted EITC alternatives.'
    ],
    sources: [
      {
        title: 'The Sveriges Riksbank Prize in Economic Sciences 2021: David Card (Natural Experiments in Labor Economics)',
        url: 'https://www.nobelprize.org/prizes/economic-sciences/2021/summary/',
        publisher: 'The Nobel Prize Organization',
        year: '2021',
        category: 'Scholarship'
      },
      {
        title: 'Automation and New Tasks: How Technology Displaces and Reinstates Labor',
        url: 'https://www.aeaweb.org/articles?id=10.1257/jep.33.2.3',
        publisher: 'Journal of Economic Perspectives (Acemoglu & Restrepo)',
        year: '2019',
        category: 'Scholarship'
      },
      {
        title: 'Negotiating Our Way Up: Collective Bargaining in a Changing World of Work',
        url: 'https://www.oecd.org/en/topics/collective-bargaining.html',
        publisher: 'OECD',
        year: '2019',
        category: 'Empirical / Economic Study'
      }
    ],
    tags: ['Labor & Welfare', 'Empirical Studies', 'Macroeconomics', 'Regulation & Markets'],
    era: '1935–Present',
    relatedIds: ['pillar-econ-taxation', 'pillar-econ-trade']
  },

  // THESIS 4A: Statutory Minimum Wage
  {
    id: 'thesis-minimum-wage',
    parentId: 'pillar-econ-labor',
    kind: 'thesis',
    title: 'Raising the Statutory Minimum Wage Boosts Worker Incomes With Minimal Job Loss',
    summary:
      'Contends that because real-world employers wield monopsony power due to search costs, commuting limits, and concentrated local hiring, well-calibrated minimum-wage increases raise low-wage family earnings and curb costly turnover without triggering significant disemployment.',
    sections: [
      {
        heading: 'The Credibility Revolution & Employer Monopsony',
        paragraphs: [
          'In **1994**, **David Card and Alan Krueger** surveyed **410 fast-food restaurants** across the **New Jersey–Pennsylvania border** after New Jersey raised its minimum wage from **$4.25 to $5.05**, finding **no employment decline** (and slight relative job growth) compared to Pennsylvania peers. Subsequent decades of administrative payroll studies—led by **Arindrajit Dube, T. William Lester & Michael Reich (2010)** and **Cengiz, Dube, Lindner & Zipperer (2019 QJE)** across **138 U.S. state minimum-wage hikes**—confirmed substantial wage gains with near-zero net change in low-wage job counts.',
          '**Alan Manning’s** **dynamic monopsony** model explains why: because workers face childcare, transit, and job-search frictions, employers hold markdown power to pay below marginal revenue product unless constrained by a statutory floor.'
        ]
      },
      {
        heading: 'Threshold Limits, Automation & Tax-Credit Rivals',
        paragraphs: [
          'Critics—citing **David Neumark**, **William Wascher**, **Seattle’s $15 administrative data**, and **CBO scoring**—warn that pushing floors far past **50–60% of local median wages** cuts teen and non-college hours, accelerates **self-service kiosks** in restaurants and retail, and distributes gains far less efficiently to poor families than the **Earned Income Tax Credit (EITC)**.'
        ]
      }
    ],
    details: [
      'Cengiz, Dube, Lindner & Zipperer (2019 QJE) found missing jobs below a new minimum wage were almost 1-for-1 offset by new jobs created at or just above the new floor across 138 state hikes.',
      'In a 2021 CBO assessment of a federal $15/hour floor, CBO projected 900,000 people lifted out of poverty alongside ~1.4 million fewer jobs (~0.9% of employment), capturing the mainstream trade-off.',
      'Small price pass-throughs (~0.4% restaurant price rise per 10% minimum-wage hike) and sharply lower worker quit/recruitment costs absorb much of the higher wage bill.'
    ],
    sources: [
      {
        title: 'Minimum Wages and Employment: A Case Study of the Fast-Food Industry in New Jersey and Pennsylvania (NBER w4509)',
        url: 'https://www.nber.org/papers/w4509',
        publisher: 'NBER / American Economic Review (Card & Krueger)',
        year: '1994',
        category: 'Empirical / Economic Study'
      },
      {
        title: 'The Effect of Minimum Wages on Low-Wage Jobs (NBER w25434 / QJE)',
        url: 'https://www.nber.org/papers/w25434',
        publisher: 'NBER / Quarterly Journal of Economics (Cengiz, Dube, Lindner & Zipperer)',
        year: '2019',
        category: 'Empirical / Economic Study'
      },
      {
        title: 'The Budgetary Effects of the Raise the Wage Act of 2021',
        url: 'https://www.cbo.gov/publication/56975',
        publisher: 'Congressional Budget Office (CBO)',
        year: '2021',
        category: 'Court / Official Record'
      }
    ],
    tags: ['Labor & Welfare', 'Empirical Studies', 'Regulation & Markets'],
    era: '1938–Present',
    relatedIds: ['thesis-unions-collective-bargaining', 'thesis-ai-automation-ubi']
  },
  {
    id: 'pro-min-wage-monopsony-card-krueger',
    parentId: 'thesis-minimum-wage',
    kind: 'pro',
    title: 'Contiguous Border-County Panels & Turnover Savings Confirm Pro-Worker Monopsony Gains',
    summary:
      'Modern spatial-control studies eliminate regional economic trend bias and demonstrate that raising depressed wage floors lifts bottom-decile household incomes, reduces poverty, and pays for itself partly through lower employee churn.',
    sections: [
      {
        heading: 'Eliminating Confounding Trends via Border-County Designs',
        paragraphs: [
          '**Dube, Lester & Reich (2010 Review of Economics and Statistics)** showed why older state-panel regressions produced spurious job-loss estimates: states with booming Sunbelt growth tended to keep low minimum wages while deindustrializing Rust Belt states raised theirs. Comparing **all contiguous U.S. county pairs straddling state borders** over sixteen years—sharing identical weather, consumer demand, and commuting zones—eliminated any disemployment signal.',
          'Recent concentration studies by **José Azar, Ioana Marinescu & Marshall Steinbaum** further confirm that most local U.S. labor markets exhibit high **Herfindahl-Hirschman employer concentration**, enabling markdowns of **15–25%** below competitive pay that minimum wages directly correct.'
        ]
      },
      {
        heading: 'Efficiency Wages, Reduced Churn & Poverty Compression',
        paragraphs: [
          'Higher wage floors trigger **efficiency-wage channels**: **Dube, Lester & Reich (2016)** documented sharp drops in costly restaurant **worker separations and recruitment expenses** after minimum-wage hikes, while **Arindrajit Dube’s (2019 AEJ)** family-income analysis found a **10% minimum-wage increase reduces the non-elderly poverty rate by ~2–5%** without fiscal budget outlays.'
        ]
      }
    ],
    details: [
      'The federal U.S. minimum wage ($7.25/hr, unchanged since July 2009) lost over 30% of its real inflation-adjusted purchasing power—its longest freeze since creation in 1938.',
      'Azar, Huet-Vaughn, Marinescu, Taska & Von Wachter (2023 QJE) proved directly that in highly concentrated retail labor markets, minimum-wage hikes *increased* employment—exact textbook monopsony behavior.',
      'Dustmann et al. (2022 QJE) studied Germany’s first national minimum wage (2015), finding a 15%+ wage boost for low earners with zero aggregate job loss and worker reallocation to more productive firms.'
    ],
    sources: [
      {
        title: 'Minimum Wage Effects Across State Borders: Estimates Using Contiguous Counties',
        url: 'https://escholarship.org/uc/item/86w5m90m',
        publisher: 'Review of Economics and Statistics (Dube, Lester & Reich)',
        year: '2010',
        category: 'Empirical / Economic Study'
      },
      {
        title: 'Minimum Wages and the Distribution of Family Incomes',
        url: 'https://www.aeaweb.org/articles?id=10.1257/app.20170085',
        publisher: 'AEJ: Applied Economics (Arindrajit Dube)',
        year: '2019',
        category: 'Empirical / Economic Study'
      },
      {
        title: 'Reallocation Effects of the Minimum Wage (Germany’s 2015 National Floor)',
        url: 'https://academic.oup.com/qje/article/137/1/267/6355463',
        publisher: 'Quarterly Journal of Economics (Dustmann, Lindner, Schönberg, Umkehrer & Vom Berge)',
        year: '2022',
        category: 'Empirical / Economic Study'
      }
    ],
    tags: ['Labor & Welfare', 'Empirical Studies'],
    era: '1994–Present'
  },
  {
    id: 'con-min-wage-cbo-disemployment-eitc',
    parentId: 'thesis-minimum-wage',
    kind: 'con',
    title: 'Large Wage Hikes Cut Low-Skill Hours, Accelerate Kiosk Automation & Trail Targeted EITC',
    summary:
      'Comprehensive literature reviews, Seattle payroll records, and fast-food automation studies warn that aggressive minimum-wage hikes cut entry-level hours for teens and less-educated workers while poorly targeting low-income families compared to the EITC.',
    sections: [
      {
        heading: 'Hours Cuts, Entry-Rung Destruction & Automation Substitution',
        paragraphs: [
          'Surveying the entire post-1992 U.S. empirical literature, **David Neumark & Peter Shirley (2022)** show **~79% of credible studies find negative employment elasticities**—concentrated overwhelmingly among **teenagers, young adults, and workers without high-school diplomas**. Using universe unemployment-insurance hours data for **Seattle’s jump to $13–$15/hour**, **Ekaterina Jardim et al. (2022 AEJ)** found employers cut low-wage workers’ **scheduled hours by ~6–9%**, initially reducing net monthly take-home earnings for inexperienced entrants.',
          'Over multi-year horizons (**Isaac Sorkin**; **Grace Lordan & Neumark**), firms adjust capital: **California’s $20 fast-food minimum wage (2024)** and **$15+ city floors** visibly accelerated self-order touchscreens, automated kitchen fryers, and app-only ordering.'
        ]
      },
      {
        heading: 'Blunt Targeting vs. the Earned Income Tax Credit (EITC)',
        paragraphs: [
          'Because many minimum-wage earners are **secondary earners or students living in middle- and upper-middle-income households** while many poor adults work too few hours, economists across the spectrum point to the **Earned Income Tax Credit (EITC)** as a far sharper anti-poverty tool: funded by progressive federal taxes rather than low-margin small businesses, the EITC **subsidizes hiring and labor supply** simultaneously.'
        ]
      }
    ],
    details: [
      'Neumark & Shirley (2022) reviewed 68 U.S. minimum-wage studies, finding negative employment estimates dominate especially for young adults (ages 16–24) and non-college workers.',
      'Clemens & Wither (2019 JPE) tracked individual workers through the 2009 federal hike to $7.25, finding significant employment and upward-mobility losses in lower-wage states.',
      'Roughly half of workers earning near statutory minimum thresholds live in households above 200% of the federal poverty line, diluting anti-poverty efficiency compared to family-size-adjusted EITC credits.'
    ],
    sources: [
      {
        title: 'Myth or Measurement: What Does the New Minimum Wage Research Say about Minimum Wages and Job Loss in the United States? (NBER w28388)',
        url: 'https://www.nber.org/papers/w28388',
        publisher: 'National Bureau of Economic Research (Neumark & Shirley)',
        year: '2022',
        category: 'Empirical / Economic Study'
      },
      {
        title: 'Minimum Wage Increases and Low-Wage Employment: Evidence from Seattle (NBER w23532)',
        url: 'https://www.nber.org/papers/w23532',
        publisher: 'NBER / AEJ: Economic Policy (Jardim, Long, Plotnick, van Inwegen, Vigdor & Wething)',
        year: '2022',
        category: 'Empirical / Economic Study'
      },
      {
        title: 'Policy Basics: The Earned Income Tax Credit',
        url: 'https://www.brookings.edu/articles/the-earned-income-tax-credit-and-the-child-tax-credit-history-purpose-goals-and-effectiveness/',
        publisher: 'Brookings Institution (Hoynes & Rothstein)',
        year: '2017',
        category: 'Scholarship'
      }
    ],
    tags: ['Labor & Welfare', 'Regulation & Markets', 'Empirical Studies'],
    era: '1995–Present',
    relatedIds: ['con-targeted-eitc-wage-subsidy-rebuttal']
  },
  {
    id: 'con-min-wage-eitc-complementarity-rebuttal',
    parentId: 'con-min-wage-cbo-disemployment-eitc',
    kind: 'con',
    title: 'Minimum Wages & EITC Are Complements: Wage Floors Stop Employers Capturing Tax Credits',
    summary:
      'Public-finance incidence models prove that without a statutory minimum-wage floor, EITC-induced labor-supply surges depress equilibrium pre-tax wages—allowing low-wage employers to pocket over a third of taxpayer subsidies.',
    sections: [
      {
        heading: 'Rothstein’s Incidence Result: Preventing Corporate Subsidy Leakage',
        paragraphs: [
          'Framing **minimum wages** and the **EITC** as mutually exclusive rivals ignores **tax-credit incidence**. In a landmark **2010 AEJ study**, **Jesse Rothstein** demonstrated that because the EITC draws hundreds of thousands of single mothers and low-wage workers into the labor force, that outward labor-supply shift **depresses market pre-tax wages**—cutting wages for **ineligible childless workers** while letting low-wage retail and hospitality employers capture **~$0.30+ of every $1.00** in taxpayer EITC spending.',
          'Pairing the **EITC** with a **binding minimum wage** blocks downward pre-tax wage erosion, ensuring **100% of tax-credit dollars** boost worker living standards rather than subsidizing low-road payrolls.'
        ]
      },
      {
        heading: 'Regional Kaitz-Index Calibration (~50% of Local Median Wage)',
        paragraphs: [
          'To avoid disemployment in rural counties while tackling high metropolitan rents, **Arindrajit Dube (2014 Brookings Hamilton Project)** proposes indexing regional minimum wages to **~50% of local area median full-time wages (the Kaitz index)**—harvesting monopsony gains safely inside empirical evidence bounds.'
        ]
      }
    ],
    details: [
      'Jesse Rothstein (2010) estimated that without a binding wage floor, EITC recipients keep only ~$0.70 per $1 of credit while ineligible low-skill workers suffer net real wage declines.',
      'The UK’s independent Low Pay Commission successfully raised Britain’s National Living Wage toward ~60–66% of median wages via data-driven annual calibration without triggering youth job spikes.',
      'Revisited Seattle follow-ups (Jardim et al.) noted experienced incumbent workers already employed before the $15 hike saw net positive earnings gains alongside reduced turnover.'
    ],
    sources: [
      {
        title: 'Is the EITC as Good as an NIT? Conditional Cash Transfers and Tax Incidence',
        url: 'https://www.aeaweb.org/articles?id=10.1257/pol.2.1.177',
        publisher: 'AEJ: Economic Policy (Jesse Rothstein)',
        year: '2010',
        category: 'Empirical / Economic Study'
      },
      {
        title: 'Designing Thoughtful Minimum Wage Policy at the State and Local Levels',
        url: 'https://www.brookings.edu/articles/designing-thoughtful-minimum-wage-policy-at-the-state-and-local-levels/',
        publisher: 'Brookings Hamilton Project (Arindrajit Dube)',
        year: '2014',
        category: 'Scholarship'
      }
    ],
    tags: ['Labor & Welfare', 'Taxation & Fiscal', 'Empirical Studies'],
    era: '2010–Present'
  },

  // THESIS 4B: Unions & Sectoral Collective Bargaining
  {
    id: 'thesis-unions-collective-bargaining',
    parentId: 'pillar-econ-labor',
    kind: 'thesis',
    title: 'Stronger Unions & Sectoral Bargaining Compress Inequality and Share Productivity Gains',
    summary:
      'Argues that declining union density since the 1970s severed median worker pay from rising economy-wide productivity, and that rebuilding collective and Nordic-style sectoral bargaining restores countervailing power, workplace voice, and broad middle-class prosperity.',
    sections: [
      {
        heading: 'The Productivity-Pay Decoupling & Countervailing Power',
        paragraphs: [
          'From **1948 to 1973**, U.S. net productivity and typical non-supervisory worker compensation grew virtually in lockstep (**~91–97%**), underpinned by **~30–35% private-sector union density**. Since **1979**, **Economic Policy Institute (EPI)** and **BLS** series show economy-wide productivity climbed **~65–80%** while median hourly compensation rose far more slowly, as U.S. private-sector union membership collapsed to **~6.0%**. **Henry Farber, Daniel Herbst, Ilyana Kuziemko, and Suresh Naidu (2021 QJE)** assembled nine decades of micro-data proving union expansion causally explained a major share of mid-twentieth-century U.S. inequality compression.',
          'In **Denmark, Sweden, Norway, and Austria**, **sectoral bargaining** sets industry-wide wage and benefit floors covering **80–90% of workers**, preventing low-road wage undercutting.'
        ]
      },
      {
        heading: 'Voice Efficiency vs. Insider-Outsider & Public-Sector Critiques',
        paragraphs: [
          'While **Richard Freeman & James Medoff** showed union **"collective voice"** reduces quits and boosts safety training, critics point to **Southern European insider-outsider youth unemployment**, **public-sector union lobbying moral hazard**, and rapid manufacturing relocation from unionized Rust Belt states to **U.S. Right-to-Work Sunbelt** states.'
        ]
      }
    ],
    details: [
      'Farber et al. (2021 QJE) demonstrated U.S. unions consistently delivered a 10–20% family income premium disproportionately concentrated among non-college and minority workers.',
      'In Nordic "Ghent system" economies, union density exceeds 65% and collective-bargaining coverage tops 80–90% without even needing a statutory government minimum wage.',
      'Critics note U.S. union membership today is over five times higher in government (~32.5%) than in competitive private industries (~6.0%), creating taxpayer moral-hazard tensions.'
    ],
    sources: [
      {
        title: 'Unions and Inequality over the Twentieth Century: New Evidence from Survey Data (NBER w24587 / QJE)',
        url: 'https://www.nber.org/papers/w24587',
        publisher: 'NBER / Quarterly Journal of Economics (Farber, Herbst, Kuziemko & Naidu)',
        year: '2021',
        category: 'Empirical / Economic Study'
      },
      {
        title: 'The Productivity–Pay Gap',
        url: 'https://www.epi.org/productivity-pay-gap/',
        publisher: 'Economic Policy Institute (EPI)',
        year: '2024',
        category: 'Empirical / Economic Study'
      },
      {
        title: 'Collective Bargaining Systems and Workers’ Voice Arrangement in OECD Countries',
        url: 'https://www.oecd.org/en/topics/collective-bargaining.html',
        publisher: 'OECD',
        year: '2019',
        category: 'Empirical / Economic Study'
      }
    ],
    tags: ['Labor & Welfare', 'Governance', 'Empirical Studies'],
    era: '1935–Present',
    relatedIds: ['thesis-minimum-wage', 'pro-vat-nordic-welfare-efficiency']
  },
  {
    id: 'pro-unions-compression-nordic-sectoral',
    parentId: 'thesis-unions-collective-bargaining',
    kind: 'pro',
    title: 'Nordic Sectoral Bargaining & "Exit-Voice" Institutions Boost Equality Without Harming Growth',
    summary:
      'Comparative OECD evidence shows coordinated sectoral bargaining and German codetermination compress wage inequality, speed automation retraining, and outperform fragmented enterprise-level unionism where unionized single plants face non-union undercutting.',
    sections: [
      {
        heading: 'Why Sectoral Bargaining Solves Enterprise-Level Undercutting',
        paragraphs: [
          'Under U.S. **NLRA enterprise-by-enterprise bargaining**, if workers unionize a single warehouse or Starbucks store and win **20% higher pay**, non-union rivals next door immediately gain a labor-cost advantage—motivating fierce employer union-busting. Under **Nordic and Western European sectoral bargaining**, employer federations and union confederations negotiate **industry-wide base standards**, taking sweatshop wage competition off the table so firms compete purely on **innovation, management quality, and capital productivity**.',
          '**OECD’s *Negotiating Our Way Up* (2019)** found *coordinated* sectoral systems—led by **export-sector pattern bargaining** in Sweden, Denmark, and Germany—deliver **higher employment and lower unemployment** than fully decentralized regimes.'
        ]
      },
      {
        heading: 'Freeman-Medoff Voice, Codetermination & Safety Spillovers',
        paragraphs: [
          '**Simon Jäger, Benjamin Schoefer & Jörg Heining (2021 QJE)** studied **German board-level codetermination**, finding worker representation on corporate boards **boosted capital investment** rather than stalling growth, while U.S. studies confirm unionized nursing homes and construction sites suffer **significantly fewer fatal injuries and patient deaths**.'
        ]
      }
    ],
    details: [
      'Nordic "flexicurity" pairs strong sectoral unions and generous unemployment insurance ("Ghent system") with flexible hiring/firing rules and active worker retraining—achieving ~78–80% prime-age employment.',
      'Sojourner & Yang (2022) and Dean, Venkataramani & Kimmel (2020 Health Affairs) found unionized U.S. nursing homes had ~10.8% lower resident COVID-19 mortality and higher staffing ratios.',
      'Jäger, Schoefer & Heining (2021 QJE) refuted hold-up fears, showing mandatory worker seats on German supervisory boards coincided with higher capital-to-labor ratios.'
    ],
    sources: [
      {
        title: 'Labor in the Boardroom (German Codetermination Evidence)',
        url: 'https://academic.oup.com/qje/article/136/2/669/6038998',
        publisher: 'Quarterly Journal of Economics (Jäger, Schoefer & Heining)',
        year: '2021',
        category: 'Empirical / Economic Study'
      },
      {
        title: 'How Sectoral Bargaining Can Support U.S. Workers and Productivity',
        url: 'https://www.brookings.edu/articles/how-sectoral-bargaining-can-support-workers/',
        publisher: 'Brookings Institution',
        year: '2022',
        category: 'Scholarship'
      }
    ],
    tags: ['Labor & Welfare', 'Governance', 'Empirical Studies'],
    era: '1938–Present',
    relatedIds: ['pro-vat-nordic-welfare-efficiency', 'con-china-shock-rodrik-fragility']
  },
  {
    id: 'con-unions-insider-outsider-rigidity',
    parentId: 'thesis-unions-collective-bargaining',
    kind: 'con',
    title: 'Insider-Outsider Youth Unemployment, Public-Sector Moral Hazard & Right-to-Work Dynamism',
    summary:
      'Market economists counter that uncoordinated European bargaining locks young "outsiders" into temporary precarity, public-sector unions distort democratic budgets and school accountability, and U.S. Right-to-Work states consistently outpace unionized peers in factory growth.',
    sections: [
      {
        heading: 'Insider-Outsider Dualism & Industrial Investment Flight',
        paragraphs: [
          'Nobel-nominated labor theorists **Assar Lindbeck and Dennis Snower** showed how entrenched union **"insiders"** negotiate high wage floors and strict firing protections that deter firms from hiring inexperienced young and immigrant **"outsiders"**—helping explain why **Spain, Italy, and France** chronically suffered **20–35% youth unemployment** and dual temporary-contract traps under rigid administrative extension laws.',
          'Within the United States, **Thomas Holmes’s (1998 JPE)** classic state-border study found manufacturing employment grew **roughly one-third faster** on the **Right-to-Work** side of state boundaries, while **David Lee & Alexandre Mas (2012 QJE)** estimated private unionization reduces firm equity value by ~$40,000 per unionized worker and slows plant investment.'
        ]
      },
      {
        heading: 'Public-Sector Union Moral Hazard & Monopoly Capture',
        paragraphs: [
          'Even **Franklin D. Roosevelt (1937)** warned collective bargaining cannot be transplanted uncritically into government service. Political scientists **Terry Moe** and **Daniel DiSalvo** note **public-sector unions** (police, teachers, transit) face no market bankruptcy constraint and **help elect the very politicians across the bargaining table**—fueling **trillions in unfunded municipal pension liabilities**, shielding misconduct from accountability, and driving up urban transit construction costs.'
        ]
      }
    ],
    details: [
      'Holmes (1998 Journal of Political Economy) documented an abrupt ~33% jump in manufacturing share of employment when crossing from compulsory-union states into Right-to-Work border counties.',
      'Southern U.S. Right-to-Work states (Texas, Tennessee, Georgia, South Carolina) have captured the vast majority of modern U.S. automotive, EV, battery, and aerospace assembly plants.',
      'Uncoordinated sectoral extensions in Portugal, Spain, and France (Martins 2021; OECD 2019) triggered measurable employment drops when distant national agreements bound lower-productivity regions.'
    ],
    sources: [
      {
        title: 'The Effect of State Policies on the Location of Manufacturing: Evidence from State Borders',
        url: 'https://www.journals.uchicago.edu/doi/10.1086/250026',
        publisher: 'Journal of Political Economy (Thomas J. Holmes)',
        year: '1998',
        category: 'Empirical / Economic Study'
      },
      {
        title: 'Long-Run Impacts of Unions on Firms: New Evidence from Financial Markets, 1961–1999 (QJE)',
        url: 'https://www.nber.org/papers/w14709',
        publisher: 'NBER / Quarterly Journal of Economics (David S. Lee & Alexandre Mas)',
        year: '2012',
        category: 'Empirical / Economic Study'
      },
      {
        title: 'The Trouble with Public Sector Unions',
        url: 'https://www.nationalaffairs.com/publications/detail/the-trouble-with-public-sector-unions',
        publisher: 'National Affairs / Manhattan Institute (Daniel DiSalvo)',
        year: '2010',
        category: 'Scholarship'
      }
    ],
    tags: ['Labor & Welfare', 'Regulation & Markets', 'Governance', 'Empirical Studies'],
    era: '1947–Present'
  },

  // THESIS 4C: AI Displacement & Universal Basic Income (UBI)
  {
    id: 'thesis-ai-automation-ubi',
    parentId: 'pillar-econ-labor',
    kind: 'thesis',
    title: 'AI Task Displacement Justifies a Universal Basic Income (UBI) Over Means-Tested Welfare',
    summary:
      'Proposes that as generative AI and robotics automate cognitive and routine tasks faster than workers can retrain, replacing bureaucratic means-tested welfare with an unconditional Universal Basic Income (UBI) eliminates poverty traps and shares technological abundance.',
    sections: [
      {
        heading: 'Acemoglu-Restrepo Task Displacement vs. Classical Reinstatement',
        paragraphs: [
          'In **Daron Acemoglu and Pascual Restrepo’s** Nobel-cited **task-based framework**, automation affects labor through two competing forces: a **displacement effect** (machines taking tasks from humans, shrinking labor’s share of national income) and a **productivity/reinstatement effect** (creating new labor-intensive tasks). When tax codes subsidize capital/software over payrolls and **"so-so" AI automation** replaces customer-service, coding, paralegal, and logistics tasks without generating commensurate human roles, wage polarization deepens.',
          'Advocates from **Philippe Van Parijs** and **Andrew Yang** to **Milton Friedman’s (1962) Negative Income Tax** lineage argue an **unconditional cash floor** decouples human survival from precarious labor markets and abolishes **50–80%+ marginal welfare cliffs**.'
        ]
      },
      {
        heading: 'The $3 Trillion Fiscal Reality & Randomized Cash Trials',
        paragraphs: [
          'Opponents—citing **David Autor’s** historical **new-work evidence**, **Brookings fiscal math**, and the **2024 OpenResearch NBER randomized controlled trial**—counter that the **"Luddite fallacy"** has failed for 250 years, a **$12,000/year U.S. UBI costs ~$3.1+ trillion annually**, unconditional cash modestly reduces work hours without boosting job quality, and **targeted EITC/child credits** achieve far greater poverty reduction per dollar.'
        ]
      }
    ],
    details: [
      'Acemoglu & Restrepo (2020 JPE) estimated each additional industrial robot per 1,000 U.S. workers reduced the local employment-to-population ratio by 0.2 percentage points and wages by 0.42%.',
      'Current U.S. means-tested programs (SNAP, Medicaid, TANF, housing vouchers) often phase out simultaneously, creating effective marginal tax rates exceeding 65–80% ("welfare cliffs").',
      'A universal $1,000/month UBI for ~260 million U.S. adults requires ~$3.12 trillion per year—nearly equal to all current federal individual and corporate income tax receipts combined.'
    ],
    sources: [
      {
        title: 'The Sveriges Riksbank Prize in Economic Sciences 2024 (Acemoglu, Johnson & Robinson) & Task Automation Research',
        url: 'https://www.nobelprize.org/prizes/economic-sciences/2024/summary/',
        publisher: 'The Nobel Prize Organization',
        year: '2024',
        category: 'Scholarship'
      },
      {
        title: 'Robots and Jobs: Evidence from US Labor Markets',
        url: 'https://www.journals.uchicago.edu/doi/10.1086/705716',
        publisher: 'Journal of Political Economy (Acemoglu & Restrepo)',
        year: '2020',
        category: 'Empirical / Economic Study'
      },
      {
        title: 'Universal Basic Income (UBI) as a Policy Response to Current Challenges',
        url: 'https://www.brookings.edu/articles/universal-basic-income-ubi-as-a-policy-response-to-current-challenges/',
        publisher: 'Brookings Institution (Melissa S. Kearney & Magne Mogstad)',
        year: '2019',
        category: 'Scholarship'
      }
    ],
    tags: ['Labor & Welfare', 'Taxation & Fiscal', 'Macroeconomics', 'Empirical Studies'],
    era: '1962–Present',
    relatedIds: ['thesis-progressive-wealth-tax', 'thesis-minimum-wage']
  },
  {
    id: 'pro-ubi-ai-displacement-welfare-cliffs',
    parentId: 'thesis-ai-automation-ubi',
    kind: 'pro',
    title: 'AI Capital Share Growth, Abolishing Welfare Cliffs & Friedman’s Negative Income Tax',
    summary:
      'UBI proponents unite libertarian anti-bureaucracy insights with progressive AI-dividend arguments: universal cash eliminates intrusive welfare surveillance, removes work-penalizing benefit cliffs, cushions career transitions, and shares equity/compute rents.',
    sections: [
      {
        heading: 'Cognitive AI Exposure & Sovereign Equity Dividends',
        paragraphs: [
          'Unlike nineteenth-century steam looms that mechanized physical muscle while expanding clerical and professional work, **frontier large language models and multimodal AI agents** target **non-routine cognitive tasks** directly. **IMF (2024)** and **Goldman Sachs** task-exposure mappings estimate **~40–60% of advanced-economy jobs** face substantial AI task restructuring. If AI shifts national income from **labor wages (~58% of GDP)** toward **compute, IP, and equity owners**, payroll-tax safety nets erode just as transition turbulence rises.',
          'Modeled on **Alaska’s Permanent Fund Dividend (operating since 1982)**, a **data/compute/carbon or sovereign wealth dividend** treats shared technological inheritance as a universal citizen birthright.'
        ]
      },
      {
        heading: 'Zero Welfare Cliffs, Administrative Simplicity & Caregiving Value',
        paragraphs: [
          'In *Capitalism and Freedom (1962)*, **Milton Friedman** championed a **Negative Income Tax** to replace paternalistic welfare bureaucracies with transparent cash freedom. Because a **UBI** is never clawed back when a recipient takes a shift or starts a micro-business, it **eliminates punitive 70%+ benefit cliffs**, reduces **psychological scarcity stress** (as documented in **Stockton SEED** and **Kenya GiveDirectly** pilots), and compensates unpaid **childcare and eldercare**.'
        ]
      }
    ],
    details: [
      'Jones & Marinescu (2022 AEJ) studied Alaska’s Permanent Fund universal cash dividend since 1982 and found *zero* aggregate employment reduction—consumption demand stimulated local service jobs.',
      'Stockton’s SEED trial ($500/mo for 24 months, West et al. 2021) reported marked drops in anxiety/depression and improved ability to weather $400 emergency expenses without payday loans.',
      'Universal eligibility achieves near-100% take-up with minimal administrative overhead (<1% of outlays), whereas means-tested U.S. SNAP/TANF exclude millions of eligible poor families via paperwork hurdles.'
    ],
    sources: [
      {
        title: 'The Labor Market Impacts of Universal and Permanent Cash Transfers: Evidence from the Alaska Permanent Fund',
        url: 'https://www.aeaweb.org/articles?id=10.1257/pol.20190299',
        publisher: 'AEJ: Economic Policy (Damon Jones & Ioana Marinescu)',
        year: '2022',
        category: 'Empirical / Economic Study'
      },
      {
        title: 'Gen-AI: Artificial Intelligence and the Future of Work (IMF Staff Discussion Note)',
        url: 'https://www.imf.org/en/Publications/Staff-Discussion-Notes/Issues/2024/01/14/Gen-AI-Artificial-Intelligence-and-the-Future-of-Work-542379',
        publisher: 'International Monetary Fund',
        year: '2024',
        category: 'Empirical / Economic Study'
      }
    ],
    tags: ['Labor & Welfare', 'Taxation & Fiscal', 'Empirical Studies'],
    era: '1962–Present',
    relatedIds: ['pro-piketty-saez-zucman-wealth-tax']
  },
  {
    id: 'con-ubi-fiscal-cost-openresearch-work',
    parentId: 'thesis-ai-automation-ubi',
    kind: 'con',
    title: 'New-Task Creation Refutes AI Doom, While $3T+ Fiscal Math & OpenResearch RCT Show Costs',
    summary:
      'Empirical labor history and the largest U.S. randomized UBI experiment (OpenResearch, 2024) show technological waves consistently create vast new occupation categories, full UBI demands crushing middle-class tax hikes, and unconditional cash reduces work hours without raising human capital.',
    sections: [
      {
        heading: 'Autor’s New-Work Evidence Against the "Luddite Fallacy"',
        paragraphs: [
          '**David Autor, Caroline Chin, Anna Salomons, and Bryan Seegmiller (2024 QJE)** analyzed eight decades of U.S. Census occupation titles and proved **~60% of 2018 U.S. employment exists in job specialties that had not yet been invented in 1940**. Historically, automation complements non-expert workers too—just as ATMs expanded bank branches and early generative-AI field studies (**Brynjolfsson, Li & Raymond 2023**) found AI copilots boosted **novice customer-support agents’ productivity by 34%** while compressing skill gaps rather than causing mass unemployment.',
          'Prematurely paying prime-age adults to exit a tight, aging-society labor market starves healthcare, eldercare, construction, and manufacturing of desperately needed workers.'
        ]
      },
      {
        heading: 'Crushing $3.1T Tax Math & OpenResearch RCT Findings',
        paragraphs: [
          'Funding a **$12,000/year adult UBI (~$3.1T/yr)** cannot be covered by taxing billionaires alone; it requires either **gutting Social Security/Medicare/Medicaid** (making low-income disabled and elderly citizens *poorer*) or hiking **middle-class payroll/VAT taxes by 15–25 percentage points**. Meanwhile, **Eva Vivalt et al.’s landmark 2024 NBER OpenResearch RCT** ($1,000/month unconditional cash for **3 years** to **1,000 low-income U.S. adults** vs. 2,000 controls) found **reduced employment (-2.0 percentage points) and work hours (-1.3 to -1.4 hrs/wk, plus partner reductions)**—channeled into leisure rather than schooling or higher-wage job matches.'
        ]
      }
    ],
    details: [
      'Vivalt, Rhodes, Bartik, Broockman & Krause (2024 NBER OpenResearch study) found $1,000/mo unconditional transfers produced zero improvements in formal education, job quality, or physical health biomarkers after three years.',
      'Brynjolfsson, Li & Raymond (2023 NBER w31161) showed generative AI assistants lifted lowest-quintile worker productivity by 34% while barely changing top performers—acting as an equalizer.',
      'Finland’s national 2017–2018 UBI trial (€560/mo to 2,000 unemployed) improved subjective life satisfaction but yielded minimal employment gains over standard unemployment benefits.'
    ],
    sources: [
      {
        title: 'New Frontiers: The Origins and Content of New Work, 1940–2018 (NBER w30389 / QJE)',
        url: 'https://www.nber.org/papers/w30389',
        publisher: 'NBER / Quarterly Journal of Economics (Autor, Chin, Salomons & Seegmiller)',
        year: '2024',
        category: 'Empirical / Economic Study'
      },
      {
        title: 'The Employment Effects of a Guaranteed Income: Experimental Evidence from Two U.S. States (OpenResearch NBER w32719)',
        url: 'https://www.nber.org/papers/w32719',
        publisher: 'National Bureau of Economic Research (Vivalt, Rhodes, Bartik, Broockman & Krause)',
        year: '2024',
        category: 'Empirical / Economic Study'
      },
      {
        title: 'Generative AI at Work (NBER w31161)',
        url: 'https://www.nber.org/papers/w31161',
        publisher: 'National Bureau of Economic Research (Brynjolfsson, Li & Raymond)',
        year: '2023',
        category: 'Empirical / Economic Study'
      }
    ],
    tags: ['Labor & Welfare', 'Taxation & Fiscal', 'Empirical Studies'],
    era: '1940–Present',
    relatedIds: ['pro-vat-nordic-welfare-efficiency']
  },
  {
    id: 'con-targeted-eitc-wage-subsidy-rebuttal',
    parentId: 'pro-ubi-ai-displacement-welfare-cliffs',
    kind: 'con',
    title: 'Targeted EITC, Wage Subsidies & Refundable Child Allowances Beat Flat UBI at 10% of the Cost',
    summary:
      'Social-policy scholars directly rebut the welfare-cliff defense of UBI: smoothing benefit phase-outs via expanded EITC, hourly wage subsidies, and refundable Child Tax Credits eliminates poverty traps while rewarding work and concentrating 100% of funds on families in need.',
    sections: [
      {
        heading: 'Why Sending Cash to Affluent Households Wastes Anti-Poverty Firepower',
        paragraphs: [
          '**Melissa Kearney**, **Robert Greenstein**, and **Hilary Hoynes** emphasize an inescapable arithmetic trade-off: sending **$12,000 checks to households earning $150,000 or $500,000** (then trying to tax it back at higher marginal rates, which re-creates the very tax distortions UBI claims to avoid!) squanders scarce fiscal capacity. By contrast, **2021’s expanded U.S. Child Tax Credit ($3,000–$3,600 per child)** slashed **Supplemental Child Poverty by ~46% to a historic low of 5.2%** for roughly **~$105 billion/year**—less than **one-twenty-fifth** the gross price tag of an adult UBI.',
          'Similarly, fixing **SNAP and Medicaid benefit cliffs** simply requires **gradual 20–30% phase-out slopes** rather than abolishing targeting altogether.'
        ]
      },
      {
        heading: 'Wage Subsidies & Retraining Preserve Civic Dignity in the AI Era',
        paragraphs: [
          'Economists **Oren Cass**, **Edmund Phelps (*Rewarding Work*)**, and **Austin Goolsbee** note work provides **social connection, structure, and civic purpose** whose loss fuels despair even when basic consumption is met. If AI depresses certain non-college market wages, **employer/worker hourly wage subsidies** and **expanded EITC for childless workers** top up paychecks while keeping citizens actively integrated in productive society.'
        ]
      }
    ],
    details: [
      'U.S. Census Bureau data show the 2021 refundable Child Tax Credit expansion cut child poverty nearly in half (from 9.7% in 2020 to 5.2% in 2021) at ~3.5% of the gross fiscal cost of a full UBI.',
      'Hoynes & Patel (2018 JHR) and Chetty, Friedman & Rockoff demonstrate EITC expansions raise maternal employment, infant health, and children’s future college attendance and adult earnings.',
      'Nobel laureate Edmund Phelps argued public wage subsidies outperform unconditional cash by preserving labor-force attachment, on-the-job learning, and community cohesion.'
    ],
    sources: [
      {
        title: 'Universal Basic Income Is a Poor Tool to Fight Poverty',
        url: 'https://www.cbpp.org/research/poverty-and-opportunity/commentary-universal-basic-income-may-sound-attractive-but-if-it',
        publisher: 'Center on Budget and Policy Priorities (Robert Greenstein)',
        year: '2019',
        category: 'Scholarship'
      },
      {
        title: 'Effective Policy for Reducing Poverty and Inequality? The Earned Income Tax Credit and the Distribution of Income',
        url: 'https://jhr.uwpress.org/content/53/4/859',
        publisher: 'Journal of Human Resources (Hilary W. Hoynes & Ankur J. Patel)',
        year: '2018',
        category: 'Empirical / Economic Study'
      }
    ],
    tags: ['Labor & Welfare', 'Taxation & Fiscal', 'Empirical Studies'],
    era: '1975–Present',
    relatedIds: ['con-min-wage-cbo-disemployment-eitc']
  }
];
