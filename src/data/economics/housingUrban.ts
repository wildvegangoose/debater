import type { DebateNode } from '../../types/debate';

export const housingUrbanNodes: DebateNode[] = [
  {
    id: 'pillar-econ-housing',
    parentId: 'root-econ',
    kind: 'pillar',
    title: 'Housing Affordability, Zoning Reform (YIMBY) & Rent Control',
    summary:
      'Examines why housing costs have outpaced median wages across major metropolitan economies since the 1970s, testing three competing policy paradigms: supply-side land-use deregulation ("YIMBY"), tenant rent stabilization, and public social housing versus portable demand vouchers.',
    sections: [
      {
        heading: 'The Metropolitan Affordability Crisis & Spatial Misallocation',
        paragraphs: [
          'Across high-productivity metropolitan regions in North America, Western Europe, and Australasia, median home prices have climbed from roughly **3x median household income** in 1970 to **7x–12x** in coastal "Superstar Cities" such as San Francisco, New York, London, Sydney, and Vancouver. Because housing absorbs **30% to 50%+** of working-class budgets, urban land scarcity now governs national labor mobility, family formation, wealth inequality between incumbent homeowners and younger renters, and aggregate macroeconomic productivity.',
        ],
      },
      {
        heading: 'Three Competing Policy Architectures: Supply, Price Caps & Decommodification',
        paragraphs: [
          'Economists and urban planners divide over the primary diagnosis and remedy. Market-oriented **"YIMBY" (Yes In My Backyard)** reformers attribute soaring rents to municipal **exclusionary zoning**, minimum lot sizes, and discretionary permitting vetoes that artificially cap housing supply where wages are highest. Tenant advocates counter that upzoning alone operates too slowly to shield vulnerable families from immediate displacement, championing **rent stabilization** or **Vienna- and Singapore-style public social housing**, while mainstream economists favor pairing zoning liberalization with targeted **Section 8 housing vouchers**.',
        ],
      },
    ],
    details: [
      'Home-price-to-income ratios in U.S. coastal metros more than doubled between 1980 and 2024 as residential construction per capita fell sharply below post-WWII averages.',
      'Contrasts elastic housing markets (Tokyo, Austin, Minneapolis) against supply-constrained metros (San Francisco, Boston, London) where regulatory "zoning taxes" exceed physical construction costs.',
      'Evaluates quasi-experimental evidence on rent control (San Francisco, Cambridge, Berlin) alongside international public-housing benchmarks (Vienna’s Gemeindebauten and Singapore’s HDB) and portable demand subsidies.',
    ],
    sources: [
      {
        title: 'The Economic Implications of Housing Supply',
        url: 'https://www.aeaweb.org/articles?id=10.1257/jep.32.1.3',
        publisher: 'Journal of Economic Perspectives (Edward Glaeser & Joseph Gyourko)',
        year: '2018',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'Housing Constraints and Spatial Misallocation',
        url: 'https://www.aeaweb.org/articles?id=10.1257/mac.20170388',
        publisher: 'American Economic Journal: Macroeconomics (Chang-Tai Hsieh & Enrico Moretti)',
        year: '2019',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'The State of the Nation’s Housing Annual Report',
        url: 'https://www.jchs.harvard.edu/state-nations-housing',
        publisher: 'Harvard Joint Center for Housing Studies',
        year: '2024',
        category: 'Empirical / Economic Study',
      },
    ],
    tags: ['Housing & Healthcare', 'Regulation & Markets', 'Empirical Studies', 'Macroeconomics'],
    era: '1970s–Present',
  },

  // ============================================================================
  // THESIS 5A: YIMBY Supply-Side Zoning Deregulation
  // ============================================================================
  {
    id: 'thesis-yimby-upzoning',
    parentId: 'pillar-econ-housing',
    kind: 'thesis',
    title: 'Supply-Side Zoning Deregulation ("YIMBY") Is the Primary Cure for High Housing Costs',
    summary:
      'Contends that municipal exclusionary zoning—single-family-only mandates, parking minimums, floor-area caps, and discretionary environmental reviews—is the root cause of high urban housing prices, and that legalizing dense "by-right" multifamily housing restores affordability and national GDP growth.',
    sections: [
      {
        heading: 'Exclusionary Zoning as an Artificial Cartel Cap on Urban Labor Markets',
        paragraphs: [
          'Throughout the twentieth century, local governments across up to **75% of residential land** in major U.S. cities outlawed apartments, duplexes, and townhouses through **single-family exclusionary zoning**, minimum lot requirements, height limits, and off-street parking mandates. Urban economists **Edward Glaeser** and **Joseph Gyourko** measure the resulting **"zoning tax"**—the gap between a home’s market price and its marginal physical replacement cost—showing that in Manhattan, San Francisco, and San Jose, regulatory scarcity accounts for **50% to 70%+** of total home prices.',
        ],
      },
      {
        heading: 'By-Right Upzoning Versus Local Infrastructure & Anti-Gentrification Skepticism',
        paragraphs: [
          'Statewide and municipal **YIMBY reforms**—from **Minneapolis 2040**, **Auckland’s 2016 Unitary Plan**, and **Tokyo’s national zoning code** to California, Montana, and Texas permitting reforms—replace neighborhood veto hearings with predictable **"by-right" multifamily approvals** and single-stair building reforms. Critics from both suburban homeowner groups and left-wing anti-gentrification coalitions push back, warning that unsubsidized luxury apartments strain local transit and water infrastructure, fail to reach lowest-decile renters due to high construction cost floors, and risk triggering neighborhood land-value speculation.',
        ],
      },
    ],
    details: [
      'Up to 75–80% of residentially zoned land in cities like San Jose, Seattle (pre-reform), and Charlotte historically barred anything denser than detached single-family homes.',
      'Reforms in Auckland (2016), Minneapolis (2019), and Austin (2023–2024) legalized triplexes, transit-oriented mid-rises, and abolished parking minimums, testing supply-side elasticity in real time.',
      'Centers debate on whether market-rate housing additions "filter" down to lower rents across all income tiers or induce localized gentrification and infrastructure congestion.',
    ],
    sources: [
      {
        title: 'The Impact of Zoning on Housing Affordability (NBER Working Paper w8835)',
        url: 'https://www.nber.org/papers/w8835',
        publisher: 'National Bureau of Economic Research (Edward Glaeser & Joseph Gyourko)',
        year: '2002',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'Minneapolis Land Use Reforms Offer a Blueprint for Housing Affordability',
        url: 'https://www.pewtrusts.org/en/research-and-analysis/issue-briefs/2023/04/minneapolis-land-use-reforms-offer-a-blueprint-for-housing-affordability',
        publisher: 'The Pew Charitable Trusts',
        year: '2023',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'Arbitrary Lines: How Zoning Broke the American City and How to Fix It',
        url: 'https://islandpress.org/books/arbitrary-lines',
        publisher: 'Island Press (M. Nolan Gray)',
        year: '2022',
        category: 'Scholarship',
      },
    ],
    tags: ['Housing & Healthcare', 'Regulation & Markets', 'Empirical Studies'],
    era: '1970s–Present',
    relatedIds: ['con-rebuttal-vouchers-inelastic-supply'],
  },
  {
    id: 'pro-yimby-superstar-supply-filtering',
    parentId: 'thesis-yimby-upzoning',
    kind: 'pro',
    title: 'Superstar City GDP Gains, Tokyo/Austin/Auckland Rent Drops & "Filtering" Chains',
    summary:
      'Macroeconomic spatial models and natural experiments in Tokyo, Auckland, Minneapolis, and Austin prove that abundant multifamily construction slashes real rents and unlocks massive national productivity gains by letting workers move to high-wage job hubs.',
    sections: [
      {
        heading: 'Hsieh & Moretti Spatial Misallocation and Real-World Upzoning Dividends',
        paragraphs: [
          'In a landmark **American Economic Journal** study, **Chang-Tai Hsieh** and **Enrico Moretti (2019)** estimated that severe housing supply restrictions in high-productivity **"Superstar Cities"** (New York, San Francisco, San Jose) lowered aggregate U.S. GDP by **3.7% to 8.9%** over four decades by pricing workers out of high-wage agglomeration clusters. Real-world zoning liberalizations confirm high supply elasticity: **Auckland’s 2016 Unitary Plan** upzoned three-quarters of the city, tripling multi-unit permits and holding rents **26–33% lower** than synthetic controls (Greenaway-McGrevy & Phillips 2023), while **Austin’s** 2023–2025 apartment boom drove nominal asking rents down **12–17%** from peak.',
        ],
      },
      {
        heading: 'Moving Chains & Market-Rate "Filtering" Into Affordable Stock',
        paragraphs: [
          'Economist **Evan Mast (2023)** tracked address-level migration chains across 12 U.S. metros to test whether "luxury" apartment construction helps low-income renters. Mast found that every **100 new market-rate apartments** vacate **45 to 70 units** in below-median-income neighborhoods within five years via **moving chains**: affluent households move into new towers instead of outbidding middle-class families, who in turn vacate older stock. **Tokyo**, where zoning is set nationally rather than by NIMBY wards, permitted more housing in recent years than all of California or England, keeping rents remarkably flat for two decades.',
        ],
      },
    ],
    details: [
      'Hsieh & Moretti (2019) demonstrate that bringing New York, San Francisco, and San Jose housing supply elasticity to the U.S. median would raise workers’ real wages and boost national output by trillions of dollars.',
      'Minneapolis eliminated single-family-only zoning and parking minimums, expanding housing stock by 12% (2017–2022) while holding rent growth to just 1% compared to 14% in peer Midwest metros (Pew 2023).',
      'Evan Mast (2023) proves "filtering" works rapidly via household moving chains: new market-rate units act as "sponges" absorbing high-income demand within 3–5 years.',
      'Single-stair building code reform and abolishing parking minimums (which add $30,000–$75,000 per structured parking stall) dramatically unlock small-lot family-sized infill apartments.',
    ],
    sources: [
      {
        title: 'Housing Constraints and Spatial Misallocation (NBER Working Paper w21154)',
        url: 'https://www.nber.org/papers/w21154',
        publisher: 'National Bureau of Economic Research (Chang-Tai Hsieh & Enrico Moretti)',
        year: '2019',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'The Effect of New Market-Rate Housing Construction on the Low-Income Housing Market',
        url: 'https://research.upjohn.org/up_workingpapers/307/',
        publisher: 'W.E. Upjohn Institute / Journal of Urban Economics (Evan Mast)',
        year: '2023',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'The Impact of Upzoning on Housing Construction in Auckland',
        url: 'https://www.sciencedirect.com/science/article/pii/S0094119023000244',
        publisher: 'Journal of Urban Economics (Ryan Greenaway-McGrevy & Peter C.B. Phillips)',
        year: '2023',
        category: 'Empirical / Economic Study',
      },
    ],
    tags: ['Housing & Healthcare', 'Regulation & Markets', 'Empirical Studies', 'Macroeconomics'],
    era: '2010s–Present',
    relatedIds: ['pro-stigler-capture-licensing-nepa', 'con-rent-control-stanford-supply-drop'],
  },
  {
    id: 'con-yimby-gentrification-cost-floors',
    parentId: 'thesis-yimby-upzoning',
    kind: 'con',
    title: 'Infrastructure Congestion, Gentrification Fears & Hard Construction/Interest Cost Floors',
    summary:
      'Urban skeptics and housing-justice scholars argue blanket upzoning ignores local sewer, transit, and school capacity, triggers speculative teardown pressure in low-income neighborhoods, and cannot deliver sub-market rents when construction costs and interest rates set high price floors.',
    sections: [
      {
        heading: 'Construction Cost Floors, High Interest Rates & Filtering Lags',
        paragraphs: [
          'Critics such as **Michael Storper**, ** Andrés Rodríguez-Pose**, and **Patrick Condon** argue supply-side deregulation overpromises affordability for bottom-quartile households. Even on rezoned land, hard physical and financial inputs—**skilled construction labor shortages**, lumber/steel tariffs, elevator/fire codes, and **6%–8% developer financing and mortgage interest rates**—impose a break-even rent floor exceeding **$2,500–$3,500/month** for newly built urban units. Relying on multi-decade **"filtering"** leaves minimum-wage service workers and seniors waiting years for trickle-down relief while older naturally occurring affordable apartments are demolished for luxury infill.',
        ],
      },
      {
        heading: 'Speculative Land-Value Jumps & Unfunded Municipal Infrastructure Strain',
        paragraphs: [
          'Economist **Yonah Freemark (2020)** studied Chicago’s transit-oriented upzoning ordinances and found that parcel land values jumped **15% to 23%** immediately upon rezoning without producing a short-run surge in completed units—enriching incumbent landowners and encouraging speculative holdouts. Meanwhile, suburban municipalities warn that overriding local planning without dedicated state funding overwhelms **stormwater sewers, electrical grids, roadways, and public classrooms**, creating congestion externalities borne by existing taxpayers while developers capture windfall density profits.',
        ],
      },
    ],
    details: [
      'Yonah Freemark’s (2020, Urban Affairs Review) quasi-experimental study of Chicago upzoning found immediate 15–23% parcel price increases with no statistically significant 5-year construction boost.',
      'Hard construction costs ($350–$650+ per square foot in major U.S. metros) plus high interest rates cause private developers to pause permits whenever rents dip below break-even thresholds.',
      'Rodríguez-Pose & Storper (2020, Urban Studies) contend intra-regional income inequality and tech-sector wage polarization—not zoning alone—drive housing unaffordability for low-skilled workers.',
    ],
    sources: [
      {
        title: 'Upzoning Chicago: Impacts of a Zoning Reform on Property Values and Housing Construction',
        url: 'https://journals.sagepub.com/doi/10.1177/1078087418824672',
        publisher: 'Urban Affairs Review (Yonah Freemark)',
        year: '2020',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'Housing, Urban Growth and Inequalities: The Limits to Deregulation and Upzoning in Reducing Economic and Spatial Inequality',
        url: 'https://journals.sagepub.com/doi/10.1177/0042098019859458',
        publisher: 'Urban Studies (Andrés Rodríguez-Pose & Michael Storper)',
        year: '2020',
        category: 'Scholarship',
      },
    ],
    tags: ['Housing & Healthcare', 'Labor & Welfare', 'Governance'],
    era: '2018–Present',
  },
  {
    id: 'con-rebuttal-yimby-inclusionary-filtering',
    parentId: 'con-yimby-gentrification-cost-floors',
    kind: 'con',
    title: 'Micro-Level Studies Prove New Buildings Lower Nearby Rents & Curb Displacement',
    summary:
      'Quasi-experimental building-level studies in San Francisco, New York, and 11 U.S. cities refute the "induced gentrification" thesis, demonstrating that new market-rate apartments lower surrounding rents within 500 meters and reduce displacement of incumbent low-income tenants.',
    sections: [
      {
        heading: 'Natural Experiments Using Random Building Fires & Parcel Assembly',
        paragraphs: [
          'Testing whether new apartment buildings attract luxury amenities that raise neighborhood rents, **Kate Pennington (2021)** exploited **random serious building fires** in San Francisco as an exogenous instrument for new market-rate construction sites. Pennington found that monthly rents within **100 meters** of a new market-rate project **fell by 2%** relative to trend and the risk of incumbent residents being displaced to poorer zip codes **dropped by 17%**. Similarly, **Asquith, Mast & Reed (2023)** examined large multifamily buildings across 11 cities in *Review of Economics and Statistics*, confirming surrounding rents fell **5% to 7%** relative to slightly farther blocks.',
        ],
      },
      {
        heading: 'Broad vs. Narrow Upzoning & Impact Fees for Infrastructure',
        paragraphs: [
          'Urban economists also explain why Freemark’s Chicago result differed from Auckland and Minneapolis: rezoning only tiny, isolated transit corridors concentrates speculative demand onto scarce parcels, whereas **citywide or metro-wide upzoning** removes land monopoly scarcity across thousands of lots simultaneously. Moreover, dense infill housing exhibits far **lower per-capita infrastructure costs** for water pipes, roads, and power lines than exurban greenfield sprawl, allowing cities to fund transit upgrades through predictable impact fees and expanded property-tax bases.',
        ],
      },
    ],
    details: [
      'Asquith, Mast & Reed (2023, Review of Economics and Statistics) show large new apartment buildings in low-income areas reduce nearby rents by 5–7% by absorbing incoming high-income renters.',
      'Kate Pennington (2021) used random San Francisco structural fires to isolate causality, finding new market-rate construction lowers displacement risk within 100m by 17%.',
      'NYU Furman Center meta-reviews conclude supply skepticism confuses symptom with cause: developers build in already-gentrifying neighborhoods, and blocking new projects forces affluent newcomers to bid up existing walk-ups.',
    ],
    sources: [
      {
        title: 'Local Effects of Large New Apartment Buildings in Low-Income Areas',
        url: 'https://direct.mit.edu/rest/article-abstract/105/2/359/100976/Local-Effects-of-Large-New-Apartment-Buildings-in',
        publisher: 'Review of Economics and Statistics (Brian J. Asquith, Evan Mast & Davin Reed)',
        year: '2023',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'Supply Skepticism Revisited',
        url: 'https://furmancenter.org/thestoop/entry/supply-skepticism-revisited',
        publisher: 'NYU Furman Center (Vicki Been, Ingrid Gould Ellen & Katherine O’Regan)',
        year: '2024',
        category: 'Scholarship',
      },
    ],
    tags: ['Housing & Healthcare', 'Empirical Studies', 'Regulation & Markets'],
    era: '2021–Present',
  },

  // ============================================================================
  // THESIS 5B: Rent Control & Stabilization
  // ============================================================================
  {
    id: 'thesis-rent-control',
    parentId: 'pillar-econ-housing',
    kind: 'thesis',
    title: 'Rent Control & Stabilization Effectively Protect Tenants Against Market Displacement',
    summary:
      'Debates whether statutory caps on annual rent increases ("rent stabilization") serve as indispensable social insurance against sudden tenant displacement or backfire by shrinking rental supply via condo conversions, deterring maintenance, and raising market-rate rents.',
    sections: [
      {
        heading: 'First-Generation Price Freezes vs. Second-Generation Rent Stabilization',
        paragraphs: [
          'While rigid post-WWII **"first-generation" rent freezes** capped nominal rents below operating costs and triggered widespread building abandonment in areas like the 1970s South Bronx, modern **"second-generation" rent stabilization**—enacted across New York City, San Francisco, Oregon, California (**AB 1482**), and Germany’s *Mietpreisbremse*—uses more flexible guardrails. Contemporary statutes typically limit annual lease renewals for sitting tenants to **CPI + 2%–5%**, allow **vacancy decontrol** (resetting rents to market when a tenant voluntarily moves out, though restricted in NYC’s 2019 HSTPA law), exempt newly constructed buildings for **15 to 30 years**, and grant landlords pass-through adjustments for major capital renovations.',
        ],
      },
      {
        heading: 'Immediate Anti-Displacement Insurance vs. Long-Run Market Distortions',
        paragraphs: [
          'Proponents frame rent stabilization as essential **consumption-smoothing social insurance** in supply-inelastic urban land markets where tenants face steep moving, security-deposit, school-switching, and job-search costs that give landlords local hold-up power. Conversely, few propositions unite professional economists across the ideological spectrum as strongly as skepticism of strict rent ceilings: in the **Chicago Booth IGM Economic Experts Panel**, **81% of leading U.S. economists** disagreed (and only 2% agreed) that local rent-control ordinances in cities like New York and San Francisco positively affected the amount and quality of broadly affordable rental housing.',
        ],
      },
    ],
    details: [
      'Over 180 U.S. municipalities plus statewide laws in Oregon (2019) and California (AB 1482, capping annual hikes at 5% + CPI up to 10%) enforce some form of rent stabilization.',
      'Chicago Booth IGM Panel survey found 81% of top U.S. economists disagreed—and only 2% agreed—that rent ceilings in cities like New York and San Francisco improved affordable housing availability.',
      'Highlights a sharp intertemporal trade-off: large short-term stability benefits for incumbent renters today versus long-run rental stock erosion for future newcomers.',
    ],
    sources: [
      {
        title: 'Rent Control — Economic Experts Panel Survey',
        url: 'https://www.kentclarkcenter.org/surveys/rent-control/',
        publisher: 'University of Chicago Booth School of Business (Kent A. Clark Center)',
        year: '2012',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'The Effects of Rent Control Expansion on Tenants, Landlords, and Inequality: Evidence from San Francisco',
        url: 'https://www.aeaweb.org/articles?id=10.1257/aer.20181289',
        publisher: 'American Economic Review (Rebecca Diamond, Tim McQuade & Franklin Qian)',
        year: '2019',
        category: 'Empirical / Economic Study',
      },
    ],
    tags: ['Housing & Healthcare', 'Regulation & Markets', 'Labor & Welfare', 'Empirical Studies'],
    era: '1940s–Present',
  },
  {
    id: 'pro-rent-control-displacement-insurance',
    parentId: 'thesis-rent-control',
    kind: 'pro',
    title: 'Tenant Insurance Against Rent Spikes, Landlord Market Power & Neighborhood Stability',
    summary:
      'Proponents argue urban rental markets exhibit asymmetric bargaining power and high moving costs, making moderate anti-gouging rent stabilization vital social insurance that prevents evictions, homelessness, and the breakup of working-class communities.',
    sections: [
      {
        heading: 'Asymmetric Moving Costs, Algorithmic Pricing & Anti-Gouging Insurance',
        paragraphs: [
          'Economists **J.W. Mason**, **Mark Paul**, and **Manuel Pastor** argue textbook competitive supply-and-demand models misdescribe urban housing: because land is spatially fixed and tenants face severe transaction, security-deposit, and school-disruption costs to move, incumbent landlords—increasingly aided by algorithmic rent-setting software—wield local **monopsony-like hold-up power** at lease renewal. Moderate **anti-gouging stabilization** (such as capping annual renewals at **CPI + 3%–5%** while exempting new builds) acts like fixed-rate mortgage insurance for renters, shielding working-class households from sudden **25%–40% speculative rent shocks** during tech booms.',
        ],
      },
      {
        heading: 'Preventing Homelessness Spikes & Civic Community Erosion',
        paragraphs: [
          'Empirical research by **Zillow / U.S. GAO** demonstrates an inflection point once metro median rent exceeds **30%–32% of median income**, above which street homelessness surges rapidly for every **$100 increase in median rent**. Even critics’ own microdata (**Diamond, McQuade & Qian 2019**) confirmed that San Francisco’s 1994 rent-control expansion increased covered tenants’ probability of staying at their addresses by **nearly 20%**, with the largest anti-displacement gains concentrated among **older renters and racial minorities** who would otherwise have been forced out of the city entirely.',
        ],
      },
    ],
    details: [
      'Diamond, McQuade & Qian (2019) documented $2.9 billion in direct tenant welfare gains ($2,300–$6,600/yr per covered San Francisco household) and a ~20% increase in neighborhood residential stability.',
      'U.S. Government Accountability Office (GAO, 2020) estimated that a $100 increase in median monthly rent is associated with a 9% increase in the estimated homelessness rate.',
      'Modern "second-generation" laws (Oregon SB 608, California AB 1482) exempt rolling 15-to-28-year cohorts of newly built apartments specifically to avoid penalizing new supply.',
    ],
    sources: [
      {
        title: 'Homelessness: Better HUD Oversight of Data Collection Could Improve Estimates and Research on Causes (GAO-20-433)',
        url: 'https://www.gao.gov/products/gao-20-433',
        publisher: 'U.S. Government Accountability Office',
        year: '2020',
        category: 'Court / Official Record',
      },
      {
        title: 'Rent Matters: What are the Impacts of Rent Stabilization Measures?',
        url: 'https://dornsife.usc.edu/eri/publications/rent-matters/',
        publisher: 'USC Dornsife Equity Research Institute (Manuel Pastor, Vanessa Carter & Maya Abood)',
        year: '2018',
        category: 'Scholarship',
      },
    ],
    tags: ['Housing & Healthcare', 'Labor & Welfare', 'Governance'],
    era: '1970s–Present',
  },
  {
    id: 'con-rent-control-stanford-supply-drop',
    parentId: 'thesis-rent-control',
    kind: 'con',
    title: 'Stanford SF Study & Consensus: 15% Rental Supply Drop, Condo Conversions & Higher Rents',
    summary:
      'Landmark quasi-experimental studies of San Francisco, Cambridge, and Berlin confirm that rent control shrinks the rental stock by 15% as landlords convert apartments into owner-occupied condos, reduces residential mobility, and pushes up citywide market rents.',
    sections: [
      {
        heading: 'Diamond, McQuade & Qian (2019) Quasi-Experimental San Francisco Evidence',
        paragraphs: [
          'Stanford economists **Rebecca Diamond**, **Tim McQuade**, and **Franklin Qian (2019, AER)** exploited a sharp 1994 San Francisco ballot natural experiment that extended rent control to small multifamily buildings built before **1980** while leaving identical post-1980 buildings uncovered. Tracking longitudinal parcel and credit-bureau migration records from 1990 to 2016, they found landlords responded by converting controlled units into owner-occupied **condominiums and Tenancies-in-Common (TICs)**, redeveloping buildings to escape caps, or moving in themselves—**shrinking controlled landlords’ rental housing supply by 15%** and **total citywide rental housing supply by 2.5%**.',
        ],
      },
      {
        heading: 'Gentrification Backfire, Housing Misallocation & Maintenance Decay',
        paragraphs: [
          'Crucially, replacing affordable rental apartments with high-end condos attracted incoming residents with **18% higher incomes** than control blocks, driving **5.1% higher citywide market rents** ($2.9 billion in extra costs borne by future and uncovered renters—wiping out incumbent welfare gains). Parallel studies of **Cambridge, Massachusetts’ 1995 repeal** (**Autor, Palmer & Pathak 2014, JPE**) showed decontrol sparked **$1.8B–$2B** in building renovations and property value recovery, while **Berlin’s 2020 *Mietendeckel* rent freeze** caused advertised regulated rental listings to plunge by **>50%** before Germany’s Constitutional Court struck it down.',
        ],
      },
    ],
    details: [
      'Diamond, McQuade & Qian (2019, AER) proved San Francisco’s 1994 rent control expansion cut affected rental supply by 15%, fueled luxury condo conversions, and raised citywide market rents by 5.1%.',
      'Autor, Palmer & Pathak (2014, Journal of Political Economy) found ending rent control in Cambridge, MA spurred immediate capital maintenance investments and $1.8B+ in neighborhood spillovers.',
      'Rent caps are poorly means-tested: affluent empty-nesters lock into large below-market family apartments for decades ("spatial misallocation"), forcing young working families into longer commutes (Glaeser & Luttmer 2003, AER).',
      'Hahn, Kholodilin & Waltl (2022) documented that Berlin’s 2020 rent cap halved available regulated apartment listings and pushed spillover rent inflation into uncontrolled Potsdam suburbs.',
    ],
    sources: [
      {
        title: 'The Effects of Rent Control Expansion on Tenants, Landlords, and Inequality: Evidence from San Francisco (NBER w24181)',
        url: 'https://www.nber.org/papers/w24181',
        publisher: 'National Bureau of Economic Research / AER (Rebecca Diamond, Tim McQuade & Franklin Qian)',
        year: '2019',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'Housing Market Spillovers: Evidence from the End of Rent Control in Cambridge, Massachusetts',
        url: 'https://www.journals.uchicago.edu/doi/10.1086/675536',
        publisher: 'Journal of Political Economy (David H. Autor, Christopher J. Palmer & Parag A. Pathak)',
        year: '2014',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'The Misallocation of Housing Under Rent Control',
        url: 'https://www.aeaweb.org/articles?id=10.1257/000282803769206188',
        publisher: 'American Economic Review (Edward L. Glaeser & Erzo F.P. Luttmer)',
        year: '2003',
        category: 'Empirical / Economic Study',
      },
    ],
    tags: ['Housing & Healthcare', 'Regulation & Markets', 'Empirical Studies'],
    era: '1994–Present',
    relatedIds: ['pro-yimby-superstar-supply-filtering'],
  },

  // ============================================================================
  // THESIS 5C: Vienna/Singapore Public Social Housing vs. Demand Vouchers
  // ============================================================================
  {
    id: 'thesis-social-housing-vouchers',
    parentId: 'pillar-econ-housing',
    kind: 'thesis',
    title: 'Universal Public Social Housing (Vienna & Singapore) Outperforms Demand-Side Vouchers',
    summary:
      'Weighs whether large-scale mixed-income municipal and state housing models—exemplified by Vienna and Singapore—solve affordability better than U.S.-style means-tested public housing or portable demand-side Section 8 housing vouchers.',
    sections: [
      {
        heading: 'Decommodified Mixed-Income Social Housing vs. Means-Tested Residualism',
        paragraphs: [
          'Housing policy scholars contrast two fundamentally different state roles. In the **universalistic social-housing model** of **Vienna** (~60% of residents living in municipal *Gemeindebauten* or subsidized limited-profit cooperatives) and **Singapore** (~80% of resident citizens owning 99-year leasehold flats built by the state **Housing & Development Board, HDB**), broad middle- and working-class eligibility generates stable cross-subsidizing rent revenue and durable political support for upkeep. By contrast, mid-century U.S. public housing segregated only the poorest households into chronically underfunded towers.',
        ],
      },
      {
        heading: 'Portable Demand Subsidies (Section 8) & Neighborhood Opportunity Mobility',
        paragraphs: [
          'Following the high-profile failures of **Pruitt-Igoe** in St. Louis and **Cabrini-Green** in Chicago—and passage of the **1998 Faircloth Amendment** capping federal public-housing units—U.S. policy pivoted toward **Housing Choice Vouchers (Section 8)** and the **Low-Income Housing Tax Credit (LIHTC)**. Economists debate whether direct public construction can scale in high-cost Western democracies without repeating bureaucratic maintenance decay, or whether portable vouchers paired with private construction deliver superior neighborhood mobility at lower fiscal cost.',
        ],
      },
    ],
    details: [
      'Roughly 60% of Viennese households live in municipal or limited-profit social housing where broad income ceilings (~75–80% of residents qualify) prevent Concentrated poverty stigma.',
      'Singapore’s HDB houses ~78–80% of resident citizens, integrating compulsory Central Provident Fund (CPF) retirement/housing savings with state land banking.',
      'In the United States, only ~1 in 4 income-eligible low-income households receives a Section 8 Housing Choice Voucher due to discretionary congressional appropriations caps.',
    ],
    sources: [
      {
        title: 'Public Housing – A Singapore Icon',
        url: 'https://www.hdb.gov.sg/cs/infoweb/about-us/our-role/public-housing-a-singapore-icon',
        publisher: 'Singapore Housing & Development Board (HDB)',
        year: '2024',
        category: 'Court / Official Record',
      },
      {
        title: 'Housing Choice Voucher Program (Section 8) Overview',
        url: 'https://www.hud.gov/topics/housing_choice_voucher_program_section_8',
        publisher: 'U.S. Department of Housing and Urban Development (HUD)',
        year: '2024',
        category: 'Court / Official Record',
      },
    ],
    tags: ['Housing & Healthcare', 'Labor & Welfare', 'Governance', 'Taxation & Fiscal'],
    era: '1920s–Present',
  },
  {
    id: 'pro-social-housing-vienna-singapore',
    parentId: 'thesis-social-housing-vouchers',
    kind: 'pro',
    title: 'Vienna Mixed-Income Social Housing & Singapore 80% HDB Ownership Stabilize Affordability',
    summary:
      'Vienna and Singapore demonstrate that when public agencies bank land counter-cyclically and build mixed-income housing for the broad middle and working classes, cities achieve world-class livability, wealth building, and permanently affordable rents.',
    sections: [
      {
        heading: 'Vienna’s Limited-Profit Associations & Counter-Cyclical Land Banking',
        paragraphs: [
          'Since the **"Red Vienna"** era of the 1920s, Vienna has owned **~220,000 municipal apartments (*Gemeindebauten*)** alongside **~200,000 limited-profit housing association (*Gemeinnützige Bauvereinigungen*)** homes funded by a earmarked **1% federal payroll housing tax**. Because income eligibility ceilings cover up to **75%–80% of the population** and tenants are never evicted if their incomes later rise, social buildings blend doctors, teachers, and service workers—generating reliable rent streams that self-finance ongoing maintenance and keeping average Viennese rent burdens near **20%–25% of disposable income**.',
        ],
      },
      {
        heading: 'Singapore’s HDB State Land Assembly & U.S. Revolving-Fund Replication',
        paragraphs: [
          'In **Singapore**, the **1966 Land Acquisition Act** enabled the state to expand public land ownership from 44% to **~90%**, empowering the **HDB** to construct over **1.1 million high-density, transit-connected flats** sold on subsidized 99-year leases financed via workers’ **Central Provident Fund (CPF)** accounts—achieving an **~89% homeownership rate** with virtually zero street homelessness. Closer to home, **Montgomery County, Maryland’s Housing Opportunities Commission** uses a public **revolving production fund** to build mixed-income apartments where 70% market-rate rents cross-subsidize 30% permanently deed-restricted affordable units without ongoing operating deficits.',
        ],
      },
    ],
    details: [
      'Viennese social-housing limited-profit developers are legally required to cap equity returns and reinvest all surpluses after loan amortization into acquiring land and building new affordable units.',
      'Counter-cyclical advantage: public housing developers keep building when interest-rate hikes freeze private for-profit residential construction, stabilizing construction employment.',
      'Montgomery County, MD’s Housing Production Fund ($100M revolving bond pool) builds mixed-income transit apartments at lower financing costs than complex multi-layered LIHTC tax-credit syndications.',
    ],
    sources: [
      {
        title: 'Municipal Housing in Vienna — History and Social Housing Model',
        url: 'https://www.wienerwohnen.at/',
        publisher: 'City of Vienna / Wiener Wohnen',
        year: '2024',
        category: 'Court / Official Record',
      },
      {
        title: 'Housing Markets and Housing Policies in Singapore',
        url: 'https://www.adb.org/publications/housing-policies-singapore',
        publisher: 'Asian Development Bank Institute (Sock-Yong Phang & Matthias Helble)',
        year: '2016',
        category: 'Empirical / Economic Study',
      },
    ],
    tags: ['Housing & Healthcare', 'Governance', 'Taxation & Fiscal', 'Labor & Welfare'],
    era: '1960–Present',
    relatedIds: ['pro-prefunded-superannuation-demographic-math'],
  },
  {
    id: 'con-social-housing-pruitt-igoe-vouchers',
    parentId: 'thesis-social-housing-vouchers',
    kind: 'con',
    title: 'Pruitt-Igoe/NYCHA Capital Backlogs, Vienna Insider Queues & Section 8 Mobility Gains',
    summary:
      'Critics highlight catastrophic maintenance backlogs in U.S. public housing ($78B+ at NYCHA alone), non-replicable institutional conditions in Singapore and stagnant Vienna demographics, and Harvard Opportunity Insights evidence that portable vouchers lift children’s lifetime earnings.',
    sections: [
      {
        heading: 'Public-Sector Maintenance Failures & Non-Replicable Vienna/Singapore Preconditions',
        paragraphs: [
          'Urban economists **Edward Glaeser** and **Randal O’Toole** caution that government-owned housing in pluralist democracies routinely succumbs to politicized rent freezes and deferred capital maintenance: St. Louis demolished **Pruitt-Igoe** less than 20 years after completion, and today the **New York City Housing Authority (NYCHA)** faces a staggering **$78.3 billion 20-year capital repair backlog** across lead paint, mold, boilers, and elevators. Meanwhile, **Singapore’s HDB** relied on authoritarian below-market land seizures, state construction labor permits, and strict ethnic integration quotas (**EIP**), while **Vienna’s** current population (**~2.0 million**) is still below its **1910 peak (~2.1 million)**—and imposes two-year residency rules and multi-year waiting lists that push immigrants and newcomers into a costlier private market.',
        ],
      },
      {
        heading: 'Chetty, Hendren & Katz Evidence on Portable Housing Choice Vouchers',
        paragraphs: [
          'Instead of locking low-income families into fixed, state-built complexes—where U.S. **LIHTC** and public projects often cost **$700,000 to $1.1 million per apartment** in California due to prevailing-wage and procurement mandates—economists favor **portable demand-side Housing Choice Vouchers (Section 8)**. Analyzing long-run IRS tax records from HUD’s randomized **Moving to Opportunity (MTO)** experiment, **Raj Chetty, Nathaniel Hendren, and Lawrence Katz (2016, AER)** proved that children under age 13 whose families received vouchers to move to low-poverty neighborhoods earned **31% higher adult incomes** ($302,000 lifetime gain), attended college at higher rates, and lived in safer zip codes.',
        ],
      },
    ],
    details: [
      'NYCHA’s 2023 Physical Needs Assessment documented $78.3 billion in unmet capital repair needs for ~177,000 apartments—over $440,000 per unit.',
      'Government-subsidized affordable construction in California averaged $600,000–$1,000,000+ per unit in 2022–2024 (RAND Corporation study, 2.3x Texas private multifamily costs).',
      'Chetty, Hendren & Katz (2016, AER) showed Moving to Opportunity vouchers moving young children to low-poverty areas raised adult earnings by 31% and generated net fiscal savings via higher future tax receipts.',
      'Vienna’s private unregulated apartments grew significantly more expensive over 2010–2024 as younger mobile workers and non-EU migrants struggled to qualify for municipal *Gemeindebauten* queues.',
    ],
    sources: [
      {
        title: 'The Effects of Exposure to Better Neighborhoods on Children: New Evidence from the Moving to Opportunity Experiment',
        url: 'https://www.aeaweb.org/articles?id=10.1257/aer.20150572',
        publisher: 'American Economic Review (Raj Chetty, Nathaniel Hendren & Lawrence F. Katz)',
        year: '2016',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'The High Cost of Producing Multifamily Housing in California: Evidence and Policy Recommendations',
        url: 'https://www.rand.org/pubs/research_reports/RRA3743-1.html',
        publisher: 'RAND Corporation (Jason M. Ward & Luke Schlake)',
        year: '2025',
        category: 'Empirical / Economic Study',
      },
    ],
    tags: ['Housing & Healthcare', 'Empirical Studies', 'Taxation & Fiscal', 'Labor & Welfare'],
    era: '1972–Present',
    relatedIds: ['pro-friedman-vouchers-credo-charters'],
  },
  {
    id: 'con-rebuttal-vouchers-inelastic-supply',
    parentId: 'con-social-housing-pruitt-igoe-vouchers',
    kind: 'con',
    title: 'Demand Vouchers Bid Up Rents & Fail Lease-Up Without Elastic Supply or Mixed-Income Builds',
    summary:
      'Housing economists demonstrate that injecting demand-side Section 8 vouchers into zoning-restricted cities primarily inflates landlords’ clearing rents while up to 40% of voucher holders fail to find an apartment before expiration—proving vouchers require supply liberalization.',
    sections: [
      {
        heading: 'Price Incidence of Demand Subsidies in Supply-Inelastic Cities',
        paragraphs: [
          'Empirical incidence studies by **Scott Susin (2002, Journal of Public Economics)** and **Michael Eriksen & Amanda Ross (2015, AEJ: Economic Policy)** expose the Achilles’ heel of pure voucher strategies: where local zoning renders housing supply **price-inelastic**, expanding Housing Choice Vouchers shifts demand outward against a fixed stock of modest units. Susin estimated that vouchers raised rents by **16%** for unassisted low-income households in the bottom quality third of major metro markets—transferring billions in federal taxpayer subsidies directly into incumbent landlords’ net operating income.',
        ],
      },
      {
        heading: '40% Voucher Expiration Rates & The Synthesis of Supply Plus Vouchers',
        paragraphs: [
          'Even when families win multi-year Section 8 lotteries, **HUD administrative data** and **Creating Moves to Opportunity (Bergman et al. 2024, QJE)** reveal that **30% to 40%+ of voucher recipients** return their vouchers unused within 60–120 days due to low vacancy rates, bureaucratic HUD inspection delays, and landlord discrimination against voucher holders. Consequently, contemporary urban consensus holds that **universal housing vouchers** and **YIMBY supply deregulation** (supplemented by revolving mixed-income acquisition funds) are strict **economic complements** rather than substitutes.',
        ],
      },
    ],
    details: [
      'Susin (2002) found low-income households not receiving vouchers paid $8.2 billion more in aggregate rent—exceeding the $5.8 billion net subsidy captured by voucher recipients in supply-constrained metros.',
      'Bergman, Chetty et al. (2024, QJE — Creating Moves to Opportunity in Seattle/King County) showed vouchers alone yielded low mobility into high-opportunity areas unless paired with housing-navigator support and landlord engagement.',
      'Roughly 39% of newly issued federal Housing Choice Vouchers nationwide failed to lease up within standard search windows during the 2021–2023 tight rental market.',
    ],
    sources: [
      {
        title: 'Rent Vouchers and the Price of Low-Income Housing',
        url: 'https://www.sciencedirect.com/science/article/pii/S0047272701000810',
        publisher: 'Journal of Public Economics (Scott Susin)',
        year: '2002',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'Creating Moves to Opportunity: Experimental Evidence on Barriers to Neighborhood Choice',
        url: 'https://opportunityinsights.org/paper/cmto/',
        publisher: 'Quarterly Journal of Economics / Opportunity Insights (Peter Bergman, Raj Chetty et al.)',
        year: '2024',
        category: 'Empirical / Economic Study',
      },
    ],
    tags: ['Housing & Healthcare', 'Empirical Studies', 'Regulation & Markets', 'Labor & Welfare'],
    era: '2002–Present',
    relatedIds: ['thesis-yimby-upzoning'],
  },
];
