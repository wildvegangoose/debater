import { DebateNode } from '../../types/debate';

export const taxationInequalityNodes: DebateNode[] = [
  {
    id: 'pillar-econ-taxation',
    parentId: 'root-econ',
    kind: 'pillar',
    title: 'Taxation, Wealth Inequality & Capital Formation',
    summary:
      'Investigates the core equity-efficiency trade-off in public finance: how nations raise revenue to fund public goods and social insurance without choking capital accumulation, entrepreneurship, and labor supply. Contrasts progressive income/wealth taxation against supply-side corporate rate cuts, Georgist land value taxes, and European consumption VATs.',
    sections: [
      {
        heading: 'The Equity-Efficiency Frontier in Modern Public Finance',
        paragraphs: [
          'Since **Arthur Okun’s** classic **"leaky bucket"** metaphor and **James Mirrlees’s** Nobel-winning optimal tax theory, economists have weighed the diminishing marginal utility of an extra dollar to a billionaire against the **deadweight behavioral elasticities** triggered by high marginal rates. Rising top-1% income and wealth shares across OECD economies since **1980**—documented by **Thomas Piketty**, **Emmanuel Saez**, and **Gabriel Zucman**—have reignited demands for **70%+ top marginal rates** and **annual net wealth taxes**.',
          'Supply-side and neoclassical public-finance scholars respond that taxing mobile capital and corporate investment compounds distortions over time, depresses capital-to-labor ratios, and ultimately lowers real worker wages—pointing to **European wealth-tax repeals** and cross-border corporate profit shifting as cautionary evidence.'
        ]
      },
      {
        heading: 'Tax-Base Architecture: Income, Corporate, Land & Consumption',
        paragraphs: [
          'Beyond left-right clashes over statutory rates, modern tax reform increasingly focuses on **tax-base efficiency**. Reformers highlight **Henry George’s Land Value Tax (LVT)**—which taxes fixed unimproved land with zero supply distortion—alongside broad **20–25% Value-Added Taxes (VATs)** that silently finance **Scandinavia’s universal welfare states** far more reliably than narrow, volatile taxes on mobile capital.'
        ]
      }
    ],
    details: [
      'Weighs Piketty’s r > g wealth-concentration thesis and billionaire effective tax critiques against capital-flight lessons from repealed European wealth taxes.',
      'Tests supply-side claims on the 2017 U.S. Tax Cuts and Jobs Act (35% to 21% corporate rate) against record stock buybacks, widening deficits, and the OECD 15% global minimum tax.',
      'Compares zero-deadweight-loss Georgist Land Value Taxes and broad Nordic VATs against regressivity concerns and homeowner political backlash.'
    ],
    sources: [
      {
        title: 'World Inequality Database (WID.world): Global Income & Wealth Distributional Series',
        url: 'https://wid.world/',
        publisher: 'World Inequality Lab (Piketty, Saez, Zucman et al.)',
        year: '2024',
        category: 'Empirical / Economic Study'
      },
      {
        title: 'Tax by Design: The Mirrlees Review',
        url: 'https://ifs.org.uk/mirrlees-review',
        publisher: 'Institute for Fiscal Studies (Sir James Mirrlees et al.)',
        year: '2011',
        category: 'Scholarship'
      },
      {
        title: 'Revenue Statistics: Comparative Tax-to-GDP Structures Across the OECD',
        url: 'https://www.oecd.org/en/data/datasets/global-revenue-statistics-database.html',
        publisher: 'OECD',
        year: '2024',
        category: 'Empirical / Economic Study'
      }
    ],
    tags: ['Taxation & Fiscal', 'Macroeconomics', 'Empirical Studies', 'Governance'],
    era: '1879–Present',
    relatedIds: ['pillar-econ-fiscal', 'pillar-econ-labor']
  },

  // THESIS 2A: Steeply Progressive Income & Annual Wealth Taxes
  {
    id: 'thesis-progressive-wealth-tax',
    parentId: 'pillar-econ-taxation',
    kind: 'thesis',
    title: 'Steeply Progressive Income & Annual Wealth Taxes Are Needed to Curb Oligarchy & Inequality',
    summary:
      'Argues that when private returns on capital exceed economic growth (r > g) and ultra-wealthy households borrow tax-free against unrealized equity gains, only steeply progressive top marginal income rates and annual net wealth taxes can prevent dynastic oligarchy.',
    sections: [
      {
        heading: 'Compounding Dynastic Wealth & Unrealized Capital Gains',
        paragraphs: [
          'In *Capital in the Twenty-First Century*, **Thomas Piketty** argued that when the real after-tax return on capital (**r**, historically ~4–5%) persistently exceeds economic growth (**g**, ~1.5–2%), inherited fortunes compound faster than wages, recreating **Belle Époque** patrimonial inequality. **Emmanuel Saez** and **Gabriel Zucman** further show that because tax codes only tax capital gains upon **realization**, tech and finance centi-billionaires can accumulate tens of billions while reporting modest taxable income.',
          'Through the **"buy, borrow, die"** strategy, ultra-high-net-worth families pledge appreciated stock for low-interest margin loans to fund lavish consumption tax-free, then pass shares to heirs under **stepped-up basis**—permanently erasing decades of embedded capital gains.'
        ]
      },
      {
        heading: 'Optimal Top Rates vs. European Repeal Precedents',
        paragraphs: [
          'Proponents cite **Peter Diamond** and **Emmanuel Saez (2011)**—who derived a revenue-maximizing top marginal income rate near **73%**—plus **2–3% annual billionaire wealth tax** proposals (Warren/Sanders/Zucman G20 plan) to fund universal public investments and curb campaign-finance capture. Critics counter that **9 of 12 European OECD nations** repealed their net wealth taxes after suffering capital flight, valuation litigation, and paltry revenues.'
        ]
      }
    ],
    details: [
      'World Inequality Lab estimates the U.S. top 1% wealth share rose from ~23% in 1978 to ~35%+ today, while the top 0.01% share quadrupled.',
      'A 2021 White House CEA study estimated the 400 wealthiest U.S. billionaire families paid an average federal individual income tax rate of ~8.2% when unrealized stock appreciation is counted as economic income.',
      'Between 1990 and 2020, Austria, Denmark, Germany, Finland, Iceland, Luxembourg, Sweden, and France repealed general annual net wealth taxes, leaving only Norway, Spain, and Switzerland in OECD Europe.'
    ],
    sources: [
      {
        title: 'The Case for a Progressive Tax: From Basic Research to Policy Recommendations',
        url: 'https://www.aeaweb.org/articles?id=10.1257/jep.25.4.165',
        publisher: 'Journal of Economic Perspectives (Diamond & Saez)',
        year: '2011',
        category: 'Scholarship'
      },
      {
        title: 'Progressive Wealth Taxation (Brookings Papers on Economic Activity)',
        url: 'https://www.brookings.edu/articles/progressive-wealth-taxation/',
        publisher: 'Brookings Institution (Saez & Zucman)',
        year: '2019',
        category: 'Empirical / Economic Study'
      },
      {
        title: 'The Role and Design of Net Wealth Taxes in the OECD',
        url: 'https://www.oecd.org/en/publications/the-role-and-design-of-net-wealth-taxes-in-the-oecd_9789264290303-en.html',
        publisher: 'OECD Tax Policy Studies',
        year: '2018',
        category: 'Empirical / Economic Study'
      }
    ],
    tags: ['Taxation & Fiscal', 'Governance', 'Empirical Studies'],
    era: '1980–Present',
    relatedIds: ['thesis-land-value-consumption-tax', 'thesis-ai-automation-ubi']
  },
  {
    id: 'pro-piketty-saez-zucman-wealth-tax',
    parentId: 'thesis-progressive-wealth-tax',
    kind: 'pro',
    title: 'Taxing Extreme Fortunes Restores Tax Progressivity & Curbs Rent-Seeking Power',
    summary:
      'Empirical tax-return studies contend that tax systems turn regressive at the very top of the wealth distribution, justifying annual billionaire wealth taxes and 70%+ top marginal rates that compress rent-seeking executive pay without hurting broad innovation.',
    sections: [
      {
        heading: 'Regressivity at the Top 0.01% & Bargaining-Model Elasticities',
        paragraphs: [
          '**Saez & Zucman** and **ProPublica IRS leak analyses** argue that payroll, property, and consumption taxes take a substantial share of working-class incomes, whereas billionaires whose wealth compounds inside **closely held or low-dividend equities** face single-digit effective tax rates relative to **Haig-Simons comprehensive economic income**. Only an annual **net wealth tax** or **mark-to-market billionaire tax** directly reaches concentrated stock fortunes that never trigger realization events.',
          'In **Piketty, Saez & Stantcheva (2014)**, high post-WWII top marginal income rates (**70–91% in the 1950s–1960s**) did not depress U.S. GDP growth; instead, they deterred CEOs from bargaining for outsized compensation at shareholders’ and workers’ expense.'
        ]
      },
      {
        heading: 'Democratic Pluralism & Intergenerational Mobility',
        paragraphs: [
          'Beyond fiscal revenue, proponents invoke **Louis Brandeis’s** warning that society cannot simultaneously sustain extreme wealth concentration and equal democratic citizenship. Taxing extreme fortunes dampens dynastic political lobbying, media monopolization, and philanthropic tax-shelter arbitrage while financing universal **early-childhood education, healthcare, and R&D**.'
        ]
      }
    ],
    details: [
      'Piketty, Saez & Stantcheva (2014 AEJ) found international cuts in top marginal income tax rates since 1975 strongly correlated with rising top-1% income shares, with zero statistically significant boost to per-capita GDP growth.',
      'Jakobsen, Jakobsen, Kleven & Zucman (2020 QJE) exploited Denmark’s wealth-tax cuts and found long-run wealth elasticities that imply substantial wealth-deconcentration effects from taxing the ultra-rich.',
      'U.S. estate tax receipts now touch fewer than 0.1% of decedents due to high exemptions ($13.6M+ per individual) and aggressive grantor retained annuity trusts (GRATs).'
    ],
    sources: [
      {
        title: 'Optimal Taxation of Top Labor Incomes: A Tale of Three Elasticities',
        url: 'https://www.aeaweb.org/articles?id=10.1257/pol.6.1.230',
        publisher: 'AEJ: Economic Policy (Piketty, Saez & Stantcheva)',
        year: '2014',
        category: 'Empirical / Economic Study'
      },
      {
        title: 'Wealth Taxation and Wealth Accumulation: Theory and Evidence From Denmark (NBER w24371)',
        url: 'https://www.nber.org/papers/w24371',
        publisher: 'NBER / Quarterly Journal of Economics',
        year: '2020',
        category: 'Empirical / Economic Study'
      }
    ],
    tags: ['Taxation & Fiscal', 'Empirical Studies', 'Governance'],
    era: '1950–Present',
    relatedIds: ['con-mmt-blanchard-r-less-than-g', 'con-cbi-2pct-arbitrary-inequality', 'pro-ubi-ai-displacement-welfare-cliffs']
  },
  {
    id: 'con-wealth-tax-capital-flight-repeals',
    parentId: 'thesis-progressive-wealth-tax',
    kind: 'con',
    title: 'European Wealth-Tax Repeals Prove Capital Flight, Valuation Nightmares & Startup Distortion',
    summary:
      'Real-world wealth taxes in France, Sweden, Germany, and Norway triggered entrepreneur out-migration, endless litigation over valuing private businesses, forced founder dilution on paper startup valuations, and tiny net fiscal revenues.',
    sections: [
      {
        heading: 'Why Europe Abandoned Net Wealth Taxes',
        paragraphs: [
          'Empirical history offers a sobering natural experiment: **France’s Impôt de Solidarité sur la Fortune (ISF)** prompted an estimated **42,000–60,000 millionaires** to emigrate before President **Emmanuel Macron** replaced it with a narrow real-estate tax in **2017**; economist **Eric Pichet** estimated capital flight shrank France’s income and VAT bases by **twice** what the ISF raised. **Sweden**—despite egalitarian politics—repealed its wealth tax in **2007** after iconic founders (including IKEA’s Ingvar Kamprad) relocated capital abroad; **Norway’s 2022–2023 wealth-tax hike** similarly spurred record billionaire exits to Switzerland.',
          'Moreover, **Gerald Auten** and **David Splinter (2024)** challenge Saez-Zucman inequality estimates, showing that after accounting for tax-deferred pensions and government transfers, post-tax U.S. top-1% income shares rose far more modestly.'
        ]
      },
      {
        heading: 'Illiquid Startup Equity & Penalizing Normal Returns',
        paragraphs: [
          'Unlike realized income, **80%+ of non-publicly-traded business, real-estate, and venture-backed startup equity** lacks daily market prices, inviting subjective appraisals and tax-court warfare. Worse, a **3% annual wealth tax** equals a **60% income tax** on an asset earning a 5% safe return—while forcing illiquid startup founders to sell voting control to pay taxes on speculative **venture-round paper valuations** that may later crash to zero.'
        ]
      }
    ],
    details: [
      'Across OECD countries that levied net wealth taxes, revenues historically averaged just 0.2% to 0.5% of GDP—far below progressive campaign projections—due to exemptions, avoidance, and base erosion.',
      'Germany’s Federal Constitutional Court struck down its wealth tax in 1995 because real estate received preferential valuation relative to financial assets, violating equal-treatment norms.',
      'Auten & Splinter (2024 Journal of Political Economy) estimate the U.S. after-tax, after-transfer top-1% income share stayed near ~8–9% since 1960, sharply contesting WID headline claims.'
    ],
    sources: [
      {
        title: 'Income Inequality in the United States: Using Tax Data to Measure Long-Term Trends',
        url: 'https://www.journals.uchicago.edu/doi/10.1086/728741',
        publisher: 'Journal of Political Economy (Auten & Splinter)',
        year: '2024',
        category: 'Empirical / Economic Study'
      },
      {
        title: 'Why Europe Repealed Wealth Taxes — Lessons for U.S. Policymakers',
        url: 'https://www.cato.org/policy-analysis/why-europe-axed-its-wealth-taxes',
        publisher: 'Cato Institute (Chris Edwards)',
        year: '2019',
        category: 'Scholarship'
      },
      {
        title: 'Wealth Tax Proposals: Economic and Administrative Analysis',
        url: 'https://taxfoundation.org/research/all/eu/wealth-tax-europe/',
        publisher: 'Tax Foundation',
        year: '2023',
        category: 'Empirical / Economic Study'
      }
    ],
    tags: ['Taxation & Fiscal', 'Regulation & Markets', 'Empirical Studies'],
    era: '1990–Present',
    relatedIds: ['pro-corporate-cut-cost-of-capital']
  },
  {
    id: 'con-stepped-up-basis-exit-tax-rebuttal',
    parentId: 'con-wealth-tax-capital-flight-repeals',
    kind: 'con',
    title: 'Citizenship Taxation, Exit Taxes & Ending Stepped-Up Basis Solve European Design Flaws',
    summary:
      'Reformers reply that European wealth taxes failed due to intra-EU tax-haven mobility and carve-outs—flaws avoidable via U.S. citizenship-based taxation, exit taxes, G20 minimum coordination, or taxing unrealized gains at death by repealing stepped-up basis.',
    sections: [
      {
        heading: 'Citizenship Rules, Exit Taxes & the G20 Billionaire Floor',
        paragraphs: [
          '**Saez & Zucman** emphasize that **French or Swedish millionaires** could legally move a few hours away to London, Brussels, or Geneva within the **EU single market** and immediately escape national taxation. By contrast, the **United States** taxes citizens on **worldwide income and wealth regardless of residence**; escaping requires renouncing U.S. citizenship and paying a steep **exit tax** (e.g., 40% proposed on net worth above thresholds), bolstered by **FATCA** global bank reporting.',
          'At the **2024 G20 Summit**, **Gabriel Zucman** outlined a coordinated **2% global minimum income/wealth tax floor** on ~3,000 global billionaires (~$200B–$250B/yr), eliminating jurisdictional arbitrage.'
        ]
      },
      {
        heading: 'Constructive Realization at Death: The Pragmatic Middle Ground',
        paragraphs: [
          'Even economists skeptical of annual wealth valuations—including **Lawrence Summers** and **Natasha Sarin**—champion **repealing stepped-up basis** (**IRC §1014**), treating death and gifts as **constructive realization events** alongside taxing borrowing against appreciated collateral, capturing untaxed billionaire gains with minimal annual valuation friction.'
        ]
      }
    ],
    details: [
      'Unlike European residency-based tax regimes, the U.S. already enforces worldwide citizenship taxation under IRC §877A expatriation mark-to-market exit rules.',
      'Sarin, Summers, Zidar & Zwick (2021) estimate closing capital-gains loopholes—led by ending stepped-up basis at death—plus IRS audit enforcement could raise over $1 trillion over a decade.',
      'For illiquid private companies, deferral-with-interest or payment-in-stock mechanisms allow founders to settle tax liabilities only upon IPO or sale.'
    ],
    sources: [
      {
        title: 'A Blueprint for a Coordinated Minimum Effective Taxation Standard for Ultra-High-Net-Worth Individuals',
        url: 'https://wid.world/news-article/a-blueprint-for-a-coordinated-minimum-tax-on-ultra-high-net-worth-individuals/',
        publisher: 'G20 Brazilian Presidency / EU Tax Observatory (Gabriel Zucman)',
        year: '2024',
        category: 'Court / Official Record'
      },
      {
        title: 'Rethinking How We Score Capital Gains Tax Reform (NBER w28362)',
        url: 'https://www.nber.org/papers/w28362',
        publisher: 'NBER (Sarin, Summers, Zidar & Zwick)',
        year: '2021',
        category: 'Empirical / Economic Study'
      }
    ],
    tags: ['Taxation & Fiscal', 'Governance', 'Empirical Studies'],
    era: '2019–Present',
    relatedIds: ['con-tcja-buybacks-deficits-pillar-two']
  },

  // THESIS 2B: Lower Corporate & Capital Gains Tax Rates
  {
    id: 'thesis-supply-side-corporate-tax',
    parentId: 'pillar-econ-taxation',
    kind: 'thesis',
    title: 'Lower Corporate & Capital Gains Tax Rates Accelerate Investment, Productivity & Wages',
    summary:
      'Asserts that corporate and capital-gains taxes double-tax saving, elevate the user cost of capital, drive multinational headquarters and R&D abroad, and ultimately depress worker wages by shrinking the equipment and technology per worker.',
    sections: [
      {
        heading: 'User Cost of Capital, Double Taxation & Wage Incidence',
        paragraphs: [
          'In **Dale Jorgenson’s** neoclassical investment framework and **Chamley-Judd** dynamic optimal tax theory, taxing corporate equity returns reduces the after-tax return on new plants, machinery, and software—raising the hurdle **user cost of capital**. Supply-side economists argue that in an open global economy where capital is mobile across borders while labor is largely immobile, domestic workers bear a substantial share of the **corporate tax incidence** via reduced capital deepening and slower productivity growth.',
          'That logic drove a four-decade OECD corporate rate decline from **~45% in 1980 to ~23%**, culminating in the **2017 U.S. Tax Cuts and Jobs Act (TCJA)**, which slashed the federal corporate rate from **35% to 21%** and enacted **100% bonus depreciation** for equipment.'
        ]
      },
      {
        heading: 'Contested Empirical Verdict: Capex Boom vs. Buybacks & Deficits',
        paragraphs: [
          'Recent micro-econometric evaluations of the **2017 TCJA** confirm meaningful increases in domestic corporate investment, yet critics highlight **$800B+ stock buybacks**, **$1.9 trillion** in added federal debt—refuting extreme **Laffer Curve** self-financing claims—and the **2021 OECD/G20 15% Global Minimum Tax (Pillar Two)** designed to arrest international tax competition.'
        ]
      }
    ],
    details: [
      'Before the 2017 TCJA, the U.S. statutory federal-state corporate tax rate (~38.9%) was the highest in the OECD, spurring corporate inversions and >$2.5T in trapped offshore profits.',
      'Full immediate expensing (100% bonus depreciation) reduces the marginal effective tax rate on new equipment investment to zero while still taxing supranormal rents.',
      'Critics counter that most corporate profits reflect location-specific monopoly or IP rents rather than marginal capital returns, skewing windfalls to top shareholders.'
    ],
    sources: [
      {
        title: 'Lessons from the Biggest Business Tax Cut in US History (NBER w32174)',
        url: 'https://www.nber.org/papers/w32174',
        publisher: 'NBER / Journal of Economic Perspectives (Chodorow-Reich, Zidar & Zwick)',
        year: '2024',
        category: 'Empirical / Economic Study'
      },
      {
        title: 'The Budget and Economic Outlook: Effects of the 2017 Tax Act',
        url: 'https://www.cbo.gov/publication/53787',
        publisher: 'Congressional Budget Office (CBO)',
        year: '2018',
        category: 'Court / Official Record'
      },
      {
        title: 'Global Anti-Base Erosion Model Rules (Pillar Two: 15% Global Minimum Tax)',
        url: 'https://www.oecd.org/en/topics/sub-issues/global-minimum-tax.html',
        publisher: 'OECD / G20 Inclusive Framework',
        year: '2023',
        category: 'Primary Text / Treaty'
      }
    ],
    tags: ['Taxation & Fiscal', 'Macroeconomics', 'Empirical Studies'],
    era: '1981–Present',
    relatedIds: ['thesis-keynesian-stimulus', 'thesis-land-value-consumption-tax']
  },
  {
    id: 'pro-corporate-cut-cost-of-capital',
    parentId: 'thesis-supply-side-corporate-tax',
    kind: 'pro',
    title: 'Empirical Tax Shocks Confirm Higher Capital Investment & Worker Wage Incidence',
    summary:
      'Quasi-experimental studies of German municipal corporate taxes and the 2017 U.S. TCJA demonstrate that lower corporate rates and full expensing significantly boost domestic capital formation, while roughly half of corporate tax burdens fall on workers.',
    sections: [
      {
        heading: 'Worker Incidence & TCJA Capital Deepening Evidence',
        paragraphs: [
          'Using **6,800 municipal corporate tax changes** across Germany over twenty years, **Clemens Fuest, Andreas Peichl & Sebastian Siegloch (2018 AER)** proved via linked employer-employee administrative records that workers bear **~51% of the corporate tax burden** through lower wages—falling heaviest on **low-skilled, young, and female workers**. Even the **U.S. Joint Committee on Taxation** and **CBO** allocate **25%** of long-run corporate tax incidence to labor.',
          'Evaluating the **2017 TCJA** with IRS administrative firm filings, **Chodorow-Reich, Smith, Zidar & Zwick (2024)** found C-corporations experiencing larger user-cost-of-capital reductions increased **domestic investment by roughly 20%** relative to less-affected firms between 2018 and 2019.'
        ]
      },
      {
        heading: 'Neutralizing Debt Bias & Repatriating Intellectual Property',
        paragraphs: [
          'High corporate income taxes perversely subsidize **corporate debt leverage** (since interest is tax-deductible while equity dividends are double-taxed) and drive pharmaceutical and tech **intellectual property** to Ireland, Singapore, or Switzerland. Pairing a moderate statutory rate with **permanent full expensing** encourages domestic R&D and factory automation.'
        ]
      }
    ],
    details: [
      'Fuest, Peichl & Siegloch (2018 AER) provide the gold-standard quasi-experimental estimate that ~51% of local corporate tax hikes pass through into lower worker wages.',
      'Chodorow-Reich et al. (2024) estimate the 2017 TCJA raised long-run U.S. corporate capital stock by roughly 7%, driven jointly by the 21% rate cut and 100% bonus expensing.',
      'Stock buybacks do not "destroy" capital in macroeconomic equilibrium; they return cash from mature cash-cow corporations to capital markets that reallocate funds to high-growth startups.'
    ],
    sources: [
      {
        title: 'Do Higher Corporate Taxes Reduce Wages? Micro Evidence from Germany',
        url: 'https://www.aeaweb.org/articles?id=10.1257/aer.20130570',
        publisher: 'American Economic Review (Fuest, Peichl & Siegloch)',
        year: '2018',
        category: 'Empirical / Economic Study'
      },
      {
        title: 'Tax Policy and Investment in a Global Economy (NBER w32180)',
        url: 'https://www.nber.org/papers/w32180',
        publisher: 'National Bureau of Economic Research (Chodorow-Reich, Smith, Zidar & Zwick)',
        year: '2024',
        category: 'Empirical / Economic Study'
      },
      {
        title: 'Options for Reforming America’s Tax Code: Full Expensing & Corporate Integration',
        url: 'https://taxfoundation.org/research/all/federal/options-reforming-americas-tax-code-2-0/',
        publisher: 'Tax Foundation',
        year: '2021',
        category: 'Scholarship'
      }
    ],
    tags: ['Taxation & Fiscal', 'Empirical Studies', 'Macroeconomics'],
    era: '2017–Present',
    relatedIds: ['con-wealth-tax-capital-flight-repeals', 'pro-comparative-advantage-poverty-gains']
  },
  {
    id: 'con-tcja-buybacks-deficits-pillar-two',
    parentId: 'thesis-supply-side-corporate-tax',
    kind: 'con',
    title: 'Windfalls to Old Capital, $1.9T Deficit Costs & Pillar Two Refute Laffer-Curve Claims',
    summary:
      'Critics show that cutting statutory corporate rates bestows massive windfalls on existing capital, foreign shareholders, and executives while losing nearly $2 trillion in revenue—whereas the OECD 15% Global Minimum Tax curbs tax-haven blackmail.',
    sections: [
      {
        heading: 'Taxing Monopoly Rents vs. Laffer Fiscal Fantasies',
        paragraphs: [
          'Cutting the **statutory corporate rate** from 35% to 21% unconditionally slashes taxes on **old, already-installed capital** and **supranormal monopoly/network rents** (Big Tech, brand moats, patents) without requiring a single dollar of new investment. **Kennedy, Dobridge, Landefeld & Mortenson (2022 NBER)** analyzed IRS firm-worker data after the **2017 TCJA** and found **zero wage gains for the bottom 90% of workers**; virtually all firm-level earnings gains accrued to **top-10% executives** and shareholders (~35–40% of whom are **foreign investors** paying zero U.S. individual tax).',
          'Meanwhile, U.S. corporate tax receipts plunged **~31% in 2018**, confirming **Arthur Laffer’s** self-financing claims fail decisively at moderate 20–35% tax rates and adding **~$1.9 trillion** to ten-year CBO debt projections.'
        ]
      },
      {
        heading: 'Stopping the Race to the Bottom via OECD Pillar Two',
        paragraphs: [
          'Rather than surrendering to Cayman Islands or Irish tax-haven arbitrage, over **140 jurisdictions** negotiated the **OECD/G20 Pillar Two 15% Global Minimum Tax**, allowing home countries to collect "top-up" taxes whenever multinationals book profits in sub-15% havens.'
        ]
      }
    ],
    details: [
      'S&P 500 corporations executed a then-record $806 billion in stock buybacks in 2018 immediately following TCJA enactment, dwarfing rank-and-file worker bonus announcements.',
      'Kennedy et al. (2022 NBER) linked IRS corporate and W-2 records, finding TCJA corporate tax windfalls boosted executive compensation while leaving median worker pay unchanged.',
      'Steven Rosenthal & Lydia Austin (Tax Policy Center) documented that ~40% of U.S. corporate equities are held by foreign investors and another ~30% in tax-exempt accounts—making the corporate tax the only U.S. levy on those returns.'
    ],
    sources: [
      {
        title: 'The Efficiency-Equity Tradeoff of the Corporate Income Tax: Evidence from the Tax Cuts and Jobs Act (NBER w30650)',
        url: 'https://www.nber.org/papers/w30650',
        publisher: 'National Bureau of Economic Research (Kennedy et al.)',
        year: '2022',
        category: 'Empirical / Economic Study'
      },
      {
        title: 'Effects of the Tax Cuts and Jobs Act: A Preliminary Analysis',
        url: 'https://www.brookings.edu/articles/effects-of-the-tax-cuts-and-jobs-act-a-preliminary-analysis/',
        publisher: 'Brookings Institution / Tax Policy Center (Gale et al.)',
        year: '2018',
        category: 'Scholarship'
      }
    ],
    tags: ['Taxation & Fiscal', 'Empirical Studies', 'Governance'],
    era: '2017–Present',
    relatedIds: ['thesis-sovereign-debt-mmt', 'pro-debt-crowding-out-interest-burden', 'con-stepped-up-basis-exit-tax-rebuttal']
  },

  // THESIS 2C: Land Value Taxes (Georgism) & Broad Consumption VATs
  {
    id: 'thesis-land-value-consumption-tax',
    parentId: 'pillar-econ-taxation',
    kind: 'thesis',
    title: 'Efficient Tax Design Should Shift Toward Land Value Taxes (Georgism) & Broad Consumption VATs',
    summary:
      'Synthesizes classical and modern optimal-tax theory: instead of taxing productive labor and mobile capital, governments should capture unearned location rents via Georgist Land Value Taxes (LVT) and fund social welfare through broad, neutral Value-Added Taxes (VATs).',
    sections: [
      {
        heading: 'Georgist Land Rents & Ramsey Optimal Taxation',
        paragraphs: [
          'From **Adam Smith**, **David Ricardo**, and **Henry George (*Progress and Poverty*, 1879)** to Nobel laureates **Milton Friedman**, **Joseph Stiglitz**, and **Sir James Mirrlees**, economists across ideological lines converge on a rare consensus: **taxing the unimproved value of land is the "least bad tax."** Because physical land supply is completely **inelastic**, a **Land Value Tax (LVT)** creates **zero deadweight loss**, cannot flee to Switzerland, and captures windfall land appreciation created by public transit, zoning, and urban agglomeration rather than landlord effort.',
          'Complementing LVT at the national level, **Frank Ramsey** and **Atkinson-Stiglitz** optimal tax theory favors broad **consumption taxes** over capital-income taxes because consumption taxes treat present and future consumption symmetrically without penalizing household saving or corporate investment.'
        ]
      },
      {
        heading: 'The Nordic Fiscal Paradox vs. Distributional & Homeowner Hurdles',
        paragraphs: [
          'Ironically, **Denmark, Sweden, and Norway** finance the world’s most generous welfare states not primarily through punitive wealth or corporate taxes, but via **broad 25% Value-Added Taxes** paid by the entire middle and working class—raising **~9–11% of GDP**. Yet critics warn consumption VATs are **regressive** on annual low-income budgets, while LVT faces fierce **homeowner political revolts** and land-vs.-structure appraisal disputes.'
        ]
      }
    ],
    details: [
      'Traditional property taxes penalize building apartments and factory upgrades; shifting to a pure Land Value Tax penalizes vacant urban surface parking lots and encourages housing infill.',
      'The United States remains the only OECD nation without a federal Value-Added Tax (VAT), relying instead on a narrower income/payroll base and fragmented state retail sales taxes.',
      'Critics point to "asset-rich, cash-poor" retirees on fixed incomes and regressive food/energy VAT burdens as major equity roadblocks unless paired with cash rebates.'
    ],
    sources: [
      {
        title: 'Tax by Design: Land and Property & Value Added Tax Chapters (Mirrlees Review)',
        url: 'https://ifs.org.uk/mirrlees-review',
        publisher: 'Institute for Fiscal Studies',
        year: '2011',
        category: 'Scholarship'
      },
      {
        title: 'Consumption Tax Trends: VAT/GST and Excise Rates, Trends and Policy Issues',
        url: 'https://www.oecd.org/en/topics/sub-issues/consumption-taxes.html',
        publisher: 'OECD',
        year: '2024',
        category: 'Empirical / Economic Study'
      },
      {
        title: 'Land Value Taxation: Theory, Evidence, and Practice',
        url: 'https://www.lincolninst.edu/publications/books/land-value-taxation/',
        publisher: 'Lincoln Institute of Land Policy',
        year: '2009',
        category: 'Scholarship'
      }
    ],
    tags: ['Taxation & Fiscal', 'Housing & Healthcare', 'Macroeconomics'],
    era: '1879–Present',
    relatedIds: ['thesis-progressive-wealth-tax', 'thesis-supply-side-corporate-tax']
  },
  {
    id: 'pro-georgist-lvt-zero-deadweight',
    parentId: 'thesis-land-value-consumption-tax',
    kind: 'pro',
    title: 'Land Value Taxes Capture Public Windfalls With Zero Deadweight Loss & Spur Housing Supply',
    summary:
      'Because unimproved land is fixed in supply, taxing site values eliminates speculative vacant-land hoarding, accelerates urban housing construction, and recycles publicly generated infrastructure windfalls back to taxpayers.',
    sections: [
      {
        heading: 'Inelastic Supply, Tax Capitalization & Ending Speculative Hoarding',
        paragraphs: [
          'When a city builds a **$5 billion subway line** or upzones a transit corridor, adjacent landowners reap millions in windfall equity while doing nothing. Under **Joseph Stiglitz’s "Henry George Theorem,"** under ideal urban conditions public infrastructure investments raise aggregate land rents by at least their cost—meaning **value-capture LVT** can self-finance local public goods. Because land supply is vertical, landowners **cannot pass an LVT onto tenants**; instead, the tax capitalizes into lower speculative land acquisition prices.',
          'By untaxing **buildings and capital improvements** while taxing underlying **site value**, split-rate and pure LVT regimes remove the tax penalty on constructing denser apartments and renovating commercial properties.'
        ]
      },
      {
        heading: 'Empirical Success in Pennsylvania, Estonia, Denmark & Singapore',
        paragraphs: [
          'Empirical studies by **Wallace Oates & Robert Schwab (1997)** on **Pittsburgh and 15+ Pennsylvania cities** adopting **split-rate land taxation** documented sharp surges in commercial and residential building permits compared to conventional property-tax peers. Internationally, **Estonia (1993)**, **Denmark’s grundskyld**, **Taiwan**, and **Singapore’s state land-lease auctions** demonstrate modern computer-assisted mass appraisal makes site-value taxation operationally viable.'
        ]
      }
    ],
    details: [
      'Milton Friedman famously called a tax on the unimproved value of land "the least bad tax" because it introduces zero marginal distortion to production, trade, or effort.',
      'Oates & Schwab (1997 National Tax Journal) found Pittsburgh’s 1979–1980 five-fold increase in its land-to-building tax ratio triggered a sustained 70% jump in annual building permit values.',
      'Replacing California Proposition 13-style assessment freezes with a modern LVT would end intergenerational lock-in where longtime owners pay tiny taxes next to heavily taxed young buyers.'
    ],
    sources: [
      {
        title: 'The Impact of Urban Land Taxation: The Pittsburgh Experience',
        url: 'https://www.journals.uchicago.edu/doi/abs/10.1086/NTJ41789240',
        publisher: 'National Tax Journal (Oates & Schwab)',
        year: '1997',
        category: 'Empirical / Economic Study'
      },
      {
        title: 'Why Henry George Had a Point: The Case for a Land Value Tax',
        url: 'https://www.imf.org/en/Publications/WP/Issues/2022/12/16/Taxing-Immovable-Property-Revenue-Potential-and-Implementation-Challenges-527051',
        publisher: 'International Monetary Fund Working Paper',
        year: '2022',
        category: 'Empirical / Economic Study'
      }
    ],
    tags: ['Taxation & Fiscal', 'Housing & Healthcare', 'Empirical Studies'],
    era: '1879–Present'
  },
  {
    id: 'pro-vat-nordic-welfare-efficiency',
    parentId: 'thesis-land-value-consumption-tax',
    kind: 'pro',
    title: 'Broad 20–25% Consumption VATs Reliably Fund Universal Welfare Without Distorting Saving',
    summary:
      'Comparative fiscal sociology shows that every successful European social democracy relies on a broad, self-enforcing Value-Added Tax to generate 9–11% of GDP—combining pro-growth tax neutrality with progressive public spending.',
    sections: [
      {
        heading: 'Invoice-Credit Self-Enforcement & Saving/Trade Neutrality',
        paragraphs: [
          'Over **170 countries** operate a **Value-Added Tax (VAT)** because its **invoice-credit chain** is self-enforcing: every business along a supply chain claims tax credits on inputs only by reporting suppliers’ sales, drastically curbing informal-sector tax evasion compared to retail sales or income taxes. Because a VAT is **border-adjusted**—rebated on exports and levied equally on imports—it never penalizes domestic manufacturers competing abroad.',
          'Unlike income taxes that double-tax interest and dividends, a consumption VAT taxes lifetime earnings once when spent, preserving **intertemporal saving neutrality** while proving vastly less volatile than capital-gains revenues during stock-market downturns.'
        ]
      },
      {
        heading: 'How Social Democracies Actually Pay for Universal Services',
        paragraphs: [
          'Sociologist **Monica Prasad** and economist **Peter Lindert** highlight a counterintuitive truth: **Denmark, Sweden, and Finland** levy **24–25% VATs** on nearly all goods (including food) alongside moderate corporate taxes, achieving dramatic inequality reduction on the **spending side** through universal healthcare, child care, and tuition-free universities.'
        ]
      }
    ],
    details: [
      'OECD data show VATs generate roughly 20%+ of total government tax revenue across member nations (~7% of GDP average; ~9.5–10.5% of GDP in Denmark and Sweden).',
      'David Bradford’s progressive "X-Tax" and Hall-Rabushka designs show a VAT can be made progressive by rebating business wage deductions and taxing worker wages on a graduated schedule.',
      'A 10% broad-base U.S. VAT paired with a universal household prebate could raise ~$1 trillion annually while holding low-income families harmless.'
    ],
    sources: [
      {
        title: 'How the Welfare State Is Funded: Lessons from Tax Structures in Europe and the US',
        url: 'https://www.brookings.edu/articles/how-would-a-value-added-tax-work-in-the-united-states/',
        publisher: 'Brookings Institution (William G. Gale)',
        year: '2020',
        category: 'Scholarship'
      },
      {
        title: 'Consumption Tax Trends 2024: VAT Efficiency and Revenue Ratios',
        url: 'https://www.oecd.org/en/topics/sub-issues/consumption-taxes.html',
        publisher: 'OECD',
        year: '2024',
        category: 'Empirical / Economic Study'
      }
    ],
    tags: ['Taxation & Fiscal', 'Labor & Welfare', 'Governance'],
    era: '1954–Present',
    relatedIds: ['pro-unions-compression-nordic-sectoral', 'con-ubi-fiscal-cost-openresearch-work']
  },
  {
    id: 'con-vat-regressivity-lvt-homeowner-politics',
    parentId: 'thesis-land-value-consumption-tax',
    kind: 'con',
    title: 'Consumption VATs Burden Working-Class Budgets & Pure LVTs Face Appraisal and Retiree Backlash',
    summary:
      'Opponents warn that flat consumption VATs hit low-income households who spend 100% of their paychecks, conservatives fear a "money machine" ratcheting government size, and Land Value Taxes face severe assessment disputes and elderly-homeowner revolts.',
    sections: [
      {
        heading: 'Regressivity of Consumption Taxes & "Money Machine" Fears',
        paragraphs: [
          'Because bottom-quintile families must spend **95–100%+ of annual income** on food, utilities, clothing, and transport while top-1% households save **35–50%**, an unrebated **20% VAT** acts as a regressive levy on working-class purchasing power—and triggers an immediate **one-time inflation jump** upon introduction. Attempts by European governments to soften regressivity via reduced VAT rates on groceries, books, or restaurant meals breed lobbying carve-outs and compliance complexity.',
          'Conversely, U.S. fiscal conservatives—echoing **Larry Summers’s** famous quip—oppose a federal VAT precisely because liberals fear it is **regressive** and conservatives fear it is an invisible **"money machine"** that lets Congress hike rates 1% at a time without repealing existing income taxes.'
        ]
      },
      {
        heading: 'Separating Land From Buildings & "Cash-Poor" Homeowner Revolts',
        paragraphs: [
          'For **Land Value Taxes**, critics note urban parcels rarely trade vacant, making disentangling **unimproved site value** from historic structures statistically contentious. Politically, taxing a retired teacher’s modest bungalow as if it were a luxury high-rise site forces **tax-lien displacement** (unless tax deferral until sale/death is allowed), fueling **California Proposition 13 (1978)** voter uprisings.'
        ]
      }
    ],
    details: [
      'Low-income U.S. households devote roughly twice the share of disposable annual income to VAT-taxable goods and services compared to top-decile earners.',
      'Japan’s incremental consumption-tax hikes (3% in 1989, 5% in 1997, 8% in 2014, 10% in 2019) repeatedly coincided with sharp consumer spending contractions.',
      'Roughly 65% of U.S. households own homes representing the bulk of middle-class net worth, making sudden uncompensated land-tax capital losses politically explosive.'
    ],
    sources: [
      {
        title: 'Who Bears the Burden of a National Retail Sales Tax or Value-Added Tax?',
        url: 'https://www.taxpolicycenter.org/briefing-book/who-would-bear-burden-vat',
        publisher: 'Urban-Brookings Tax Policy Center',
        year: '2024',
        category: 'Empirical / Economic Study'
      },
      {
        title: 'The Value-Added Tax: A Money Machine the U.S. Should Avoid',
        url: 'https://www.cato.org/publications/commentary/value-added-tax-bad-idea-america',
        publisher: 'Cato Institute (Daniel J. Mitchell)',
        year: '2010',
        category: 'Debate / Broadcast'
      }
    ],
    tags: ['Taxation & Fiscal', 'Housing & Healthcare', 'Governance'],
    era: '1978–Present'
  }
];
