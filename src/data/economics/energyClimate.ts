import type { DebateNode } from '../../types/debate';

export const energyClimateNodes: DebateNode[] = [
  {
    id: 'pillar-econ-climate',
    parentId: 'root-econ',
    kind: 'pillar',
    title: 'Climate Economics, Carbon Pricing, Nuclear & Abundance',
    summary:
      'Investigates the economics of deep decarbonization and global energy abundance: weighing Pigouvian carbon pricing against green industrial subsidies, nuclear firm baseload against solar-plus-battery learning curves, and "Green Growth" decoupling against ecological "Degrowth."',
    sections: [
      {
        heading: 'The Planetary Externality & Competing Decarbonization Instruments',
        paragraphs: [
          'Anthropogenic greenhouse-gas emissions represent what **Nicholas Stern** called the **largest market failure in human history**: emitters capture the private benefits of cheap fossil combustion while dispersing the long-run climate damages across eight billion people and future generations. Yet economists and policymakers sharply contest *how* to drive the **~$4–$5 trillion annual clean-energy transition**—pitting **William Nordhaus’s** textbook **Pigouvian carbon taxes and cap-and-trade markets** against green industrial policy subsidies such as the **2022 U.S. Inflation Reduction Act (IRA)**.',
        ],
      },
      {
        heading: 'Clean Firm Power, Wright’s Law & Global Energy Abundance',
        paragraphs: [
          'Simultaneously, physical grid economics and development arithmetic reshape climate debates. Surging **24/7 electricity demand from AI hyperscale data centers**, electric vehicles, and industrial heat pumps has ignited fierce debate between **nuclear fission advocates** (citing France’s Messmer buildout and Small Modular Reactors) and **100%-renewable modelers** riding **Wright’s Law** cost plunges in solar PV and lithium iron phosphate (**LFP**) batteries. At the macro level, **Green Growth** empiricists clash with **Degrowth** theorists over whether technological decoupling can stabilize the climate while lifting billions in the Global South out of energy poverty.',
        ],
      },
    ],
    details: [
      'Over 75 national and subnational carbon taxes and emissions trading systems (led by the EU ETS and China’s power ETS) now cover ~24% of global greenhouse-gas emissions (World Bank 2024).',
      'Utility-scale solar PV costs plunged ~90% and lithium-ion battery pack prices fell ~89% between 2010 and 2024, while AI data centers and electrification drive the sharpest OECD power-demand growth in decades.',
      'Over 35 high-income economies have achieved sustained absolute decoupling of real GDP growth from territorial and consumption-based CO2 emissions.',
    ],
    sources: [
      {
        title: 'Climate Change: The Ultimate Challenge for Economics (Nobel Prize Lecture)',
        url: 'https://www.nobelprize.org/prizes/economic-sciences/2018/nordhaus/lecture/',
        publisher: 'The Nobel Foundation / American Economic Review (William D. Nordhaus)',
        year: '2018',
        category: 'Scholarship',
      },
      {
        title: 'World Energy Outlook & Clean Energy Market Monitor',
        url: 'https://www.iea.org/',
        publisher: 'International Energy Agency (IEA)',
        year: '2024',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'State and Trends of Carbon Pricing Annual Report',
        url: 'https://carbonpricingdashboard.worldbank.org/',
        publisher: 'World Bank Group',
        year: '2024',
        category: 'Empirical / Economic Study',
      },
    ],
    tags: ['Energy & Climate', 'Macroeconomics', 'Taxation & Fiscal', 'Empirical Studies'],
    era: '1990–Present',
  },

  // ============================================================================
  // THESIS 8A: Economy-Wide Carbon Pricing vs. Green Industrial Subsidies
  // ============================================================================
  {
    id: 'thesis-carbon-tax-pricing',
    parentId: 'pillar-econ-climate',
    kind: 'thesis',
    title: 'Economy-Wide Carbon Pricing (Pigouvian Tax & Dividend) Is the Most Efficient Decarbonization Tool',
    summary:
      'Tests the overwhelming textbook economist consensus that an economy-wide carbon price (with per-capita household dividends and border carbon adjustments) cuts emissions at lowest social cost—against political-economy critiques favoring green industrial subsidies.',
    sections: [
      {
        heading: 'Internalizing the Social Cost of Carbon Across Millions of Decisions',
        paragraphs: [
          'Grounded in **Arthur Pigou’s *The Economics of Welfare* (1920)** and **William Nordhaus’s Nobel-winning DICE model**, over **3,600 U.S. economists—including 28 Nobel laureates and 4 former Fed Chairs**—signed the **2019 *Economists’ Statement on Carbon Dividends*** declaring a steadily rising carbon tax the single most cost-effective climate lever. By pricing every ton of **CO₂** equal to its marginal **Social Cost of Carbon (~$60–$190/ton)**, market prices automatically steer millions of decentralized industrial, utility, freight, and household choices toward the cheapest abatement options without government picking technological winners.',
        ],
      },
      {
        heading: 'Voter Backlash Against Visible Energy Taxes vs. Green Industrial Subsidies',
        paragraphs: [
          'Despite near-unanimous neoclassical theory, explicit carbon pricing confronts formidable **democratic political-economy headwinds**: visible gasoline pump and home heating-fuel price hikes sparked **France’s 2018 *Gilets Jaunes* ("Yellow Vests") protests**, Australia’s 2014 carbon-tax repeal, Washington State ballot defeats, and Canadian federal electoral backlash. Because rural and suburban voters face **inelastic short-run energy demand** until clean substitutes become affordable, policy scholars fiercely debate whether green industrial subsidies like the **U.S. Inflation Reduction Act (IRA, 2022)**—handing out production tax-credit "carrots" rather than tax "sticks"—represent a superior political-economy engine or a fiscally costly second-best.',
        ],
      },
    ],
    details: [
      'The 2019 Economists’ Statement on Carbon Dividends remains the largest public consensus statement in the history of the American economics profession (3,600+ signatories).',
      'Rebating 100% of carbon-tax revenue as equal monthly "carbon dividends" makes the bottom 60–70% of households net financial winners because affluent households have far larger carbon footprints.',
      'Contrasts price-based instruments (Sweden’s $130/t tax, British Columbia’s tax, EU ETS + CBAM) against subsidy-led industrial policy (U.S. IRA clean-energy tax credits).',
    ],
    sources: [
      {
        title: 'Economists’ Statement on Carbon Dividends (Bipartisan Climate Roadmap)',
        url: 'https://clcouncil.org/economists-statement/',
        publisher: 'Climate Leadership Council / Wall Street Journal (28 Nobel Laureate Economists)',
        year: '2019',
        category: 'Primary Text / Treaty',
      },
      {
        title: 'EU Emissions Trading System (EU ETS) & Carbon Border Adjustment Mechanism',
        url: 'https://climate.ec.europa.eu/eu-action/eu-emissions-trading-system-eu-ets_en',
        publisher: 'European Commission Directorate-General for Climate Action',
        year: '2024',
        category: 'Court / Official Record',
      },
    ],
    tags: ['Energy & Climate', 'Taxation & Fiscal', 'Regulation & Markets', 'Empirical Studies'],
    era: '1990–Present',
  },
  {
    id: 'pro-carbon-tax-nordhaus-pigouvian-cbam',
    parentId: 'thesis-carbon-tax-pricing',
    kind: 'pro',
    title: 'Nordhaus Efficiency, BC/Sweden Empirical Success & EU ETS + CBAM "Climate Clubs"',
    summary:
      'Empirical studies of British Columbia, Sweden, and the EU Emissions Trading System confirm carbon pricing slashes emissions 15–47% without hurting GDP growth, while Border Carbon Adjustments (CBAM) solve international free-riding.',
    sections: [
      {
        heading: 'Technology-Neutral Abatement Efficiency vs. Costly Command-and-Control',
        paragraphs: [
          'Econometric comparisons (**Gillingham & Stock 2018, *Journal of Economic Perspectives***) show command-and-control mandates and narrow subsidies routinely cost **$100 to $500+ per ton of CO₂ abated** (e.g., corn ethanol mandates, low-density rooftop solar subsidies in cloudy regions) and even risk negative electricity pricing without retiring coal plants—whereas an **economy-wide carbon price** equalizes marginal abatement cost everywhere simultaneously, incentivizing everything from cement clinker substitution and methane leak plugging to grid dispatch switching. Crucially, carbon pricing **raises hundreds of billions in fiscal revenue** to cut distortionary payroll taxes or fund universal **fee-and-dividend checks**, rather than worsening sovereign deficits.',
        ],
      },
      {
        heading: 'Empirical Proof in British Columbia, Sweden & The EU ETS + CBAM "Climate Club"',
        paragraphs: [
          'Real-world evidence refutes claims that carbon taxes wreck growth or fail to cut emissions: **Gilbert Metcalf (2019)** and **Andersson (2019, *AEJ: Economic Policy*)** proved **Sweden’s ~$130/ton carbon tax** reduced transport emissions **11% per year** relative to synthetic OECD controls while real GDP grew >80%, and **Murray & Rivers (2015)** found **British Columbia’s 2008 revenue-neutral carbon tax** cut fuel consumption **5%–15%** with **zero negative GDP or employment impact**. Meanwhile, the **EU Emissions Trading System (ETS)** cut covered power and industrial emissions by **~47% since 2005**, and the EU’s **Carbon Border Adjustment Mechanism (CBAM, 2023–2026)** operationalizes **Nordhaus’s (2015) "Climate Club"**—taxing carbon-intensive steel/cement imports so foreign competitors adopt domestic carbon pricing rather than offshoring pollution.',
        ],
      },
    ],
    details: [
      'Andersson (2019, AEJ: Economic Policy) used synthetic control methods to show Sweden’s 1991 carbon tax cut transport CO2 emissions nearly three times more per krona than ordinary fuel excise changes.',
      'Metcalf & Stock (2023, Macroeconomics) analyzed 31 European countries with carbon taxes over 30 years and found zero statistically adverse impact on GDP growth or total employment.',
      'Nordhaus’s 2015 AER Presidential Address ("Climate Clubs") proved modest uniform border tariffs on non-participants flip global climate game theory from free-riding into self-enforcing cooperation.',
      'Unlike subsidies—which artificially cheapen aggregate energy and induce partial rebound consumption—carbon pricing simultaneously rewards energy conservation and clean generation.',
    ],
    sources: [
      {
        title: 'Carbon Taxes and CO2 Emissions: Sweden as a Case Study',
        url: 'https://www.aeaweb.org/articles?id=10.1257/pol.20170144',
        publisher: 'American Economic Journal: Economic Policy (Julius J. Andersson)',
        year: '2019',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'British Columbia’s Revenue-Neutral Carbon Tax: A Review of the Latest "Grand Experiment" in Environmental Policy',
        url: 'https://www.sciencedirect.com/science/article/pii/S0301421515300550',
        publisher: 'Energy Policy (Brian Murray & Nicholas Rivers)',
        year: '2015',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'The Cost of Reducing Greenhouse Gas Emissions',
        url: 'https://www.aeaweb.org/articles?id=10.1257/jep.32.4.53',
        publisher: 'Journal of Economic Perspectives (Kenneth Gillingham & James H. Stock)',
        year: '2018',
        category: 'Empirical / Economic Study',
      },
    ],
    tags: ['Energy & Climate', 'Taxation & Fiscal', 'Trade & Industry', 'Empirical Studies'],
    era: '1991–Present',
    relatedIds: ['pro-green-growth-empirical-decoupling'],
  },
  {
    id: 'con-carbon-tax-yellow-vests-ira-subsidies',
    parentId: 'thesis-carbon-tax-pricing',
    kind: 'con',
    title: '"Yellow Vests" Backlash, Inelastic Short-Run Demand & Green Industrial Subsidies (U.S. IRA)',
    summary:
      'Political scientists and industrial-policy economists argue visible fuel taxes provoke populist backlash, hit rural commuters facing low short-run elasticity, and miss dynamic learning-curve spillovers better unlocked by green industrial subsidies like the U.S. IRA.',
    sections: [
      {
        heading: 'Salience Asymmetry, "Yellow Vests" Revolts & Inelastic Commuter Demand',
        paragraphs: [
          'In ***Making Climate Policy Work* (2020)**, **Danny Cullenward and David Victor** explain why textbook carbon taxes repeatedly fail in democratic politics or remain capped at token **$5–$15/ton** prices: taxes impose **immediate, highly visible pump and heating costs** on swing suburban and rural voters who drive legacy combustion cars and lack public transit (**low short-run price elasticity of gasoline demand, ~-0.05 to -0.20**), while climate benefits accrue invisibly decades later. Even rebate checks often fail to prevent voter revolt—witnessed in **France’s 2018 *Gilets Jaunes* uprising**, **Australia’s 2014 carbon-tax repeal**, and **Canada’s 2024–2025 consumer carbon-tax retreat**.',
        ],
      },
      {
        heading: 'Dynamic Innovation Spillovers & Durable Coalitions via the U.S. IRA (2022)',
        paragraphs: [
          'Economist **Daron Acemoglu, Philippe Aghion, Leonardo Bursztyn & David Hemous (2012, AER)** proved optimal climate policy requires **both** clean R&D/deployment subsidies and pollution pricing because early-stage clean technologies exhibit massive **learning-by-doing knowledge spillovers** that private firms cannot capture. By enacting uncapped production and investment tax credits in the **2022 Inflation Reduction Act (IRA)**—projected by **Princeton’s REPEAT Project** and Brookings/Goldman Sachs to mobilize **$800B–$1.2T+ in private clean manufacturing, battery, solar, and hydrogen investment** primarily in **Republican-leaning industrial districts**—industrial policy builds an entrenched corporate and labor constituency that makes clean technology cheaper than fossil fuels *first*, unlocking durable politics worldwide.',
        ],
      },
    ],
    details: [
      'Acemoglu et al. (2012, AER — "The Environment and Directed Technical Change") showed relying on a carbon tax alone without clean-innovation subsidies causes unnecessarily large short-run consumption losses.',
      'Princeton REPEAT Project models projected the U.S. Inflation Reduction Act + Bipartisan Infrastructure Law would cut U.S. 2030 greenhouse-gas emissions to ~37–41% below 2005 levels without imposing a single consumer fuel tax.',
      'Over 70–80% of announced post-IRA U.S. battery, EV, and solar manufacturing factory investments landed in Republican congressional districts, creating bipartisan governors’ lobbying against full repeal.',
    ],
    sources: [
      {
        title: 'The Environment and Directed Technical Change',
        url: 'https://www.aeaweb.org/articles?id=10.1257/aer.102.1.131',
        publisher: 'American Economic Review (Daron Acemoglu, Philippe Aghion, Leonardo Bursztyn & David Hemous)',
        year: '2012',
        category: 'Scholarship',
      },
      {
        title: 'Preliminary Report: The Climate and Energy Impacts of the Inflation Reduction Act of 2022',
        url: 'https://repeatproject.org/',
        publisher: 'Princeton University ZERO Lab / REPEAT Project (Jesse D. Jenkins et al.)',
        year: '2022',
        category: 'Empirical / Economic Study',
      },
    ],
    tags: ['Energy & Climate', 'Trade & Industry', 'Governance', 'Taxation & Fiscal'],
    era: '2012–Present',
    relatedIds: ['con-nuclear-vogtle-cost-solar-wrights-law'],
  },

  // ============================================================================
  // THESIS 8B: Nuclear Power Abundance Alongside Renewables
  // ============================================================================
  {
    id: 'thesis-nuclear-energy-abundance',
    parentId: 'pillar-econ-climate',
    kind: 'thesis',
    title: 'Clean Energy Abundance Requires Scaling Nuclear Power Alongside Renewables',
    summary:
      'Debates whether deep decarbonization and 24/7 AI/industrial electrification require scaling firm zero-carbon nuclear power (large reactors and SMRs), or whether Western nuclear cost overruns make solar PV plus grid-scale batteries the superior path.',
    sections: [
      {
        heading: 'The "Clean Firm Power" Grid Challenge & Hyperscale AI Electricity Surge',
        paragraphs: [
          'Getting an electrical grid from **0% to 70% wind and solar** is increasingly cheap, but squeezing out the **final 20%–30% of carbon** poses an acute systems-engineering challenge: multi-day winter **"Dunkelflaute"** ("dark windless lulls") across northern latitudes coincide with peak winter heat-pump heating loads just when solar output drops 80% and wind stalls across entire continents. Compounding this, **Microsoft, Google, Amazon, and Meta** signed landmark 2024–2025 nuclear deals (restarting **Three Mile Island Unit 1** and funding **Kairos / X-energy SMRs**) to secure **92%-capacity-factor, 24/7 carbon-free baseload** for gigawatt-scale AI training clusters.',
        ],
      },
      {
        heading: 'France’s Messmer Precedent vs. Vogtle Overruns & Solar-Battery Wright’s Law',
        paragraphs: [
          'Nuclear proponents point to **France, Sweden, Ontario, and South Korea/UAE** as the *only* major non-hydro industrial grids on Earth to have already achieved deep decarbonization (**<50g CO₂/kWh**) reliably at national scale without deindustrializing. Renewable-first energy economists counter that recent Western Generation III+ reactors (**Georgia’s Plant Vogtle** at **~$35B** and **UK’s Hinkley Point C** at **£35B–£46B**) require 12 to 15 years to build and cost **3x–4x more per MWh** than modular **solar PV + lithium iron phosphate (LFP) battery storage** riding steep **Wright’s Law** manufacturing learning curves.',
        ],
      },
    ],
    details: [
      'At COP28 (Dec 2023), 25+ countries—including the U.S., France, UK, Japan, South Korea, Canada, and Sweden—pledged to triple global nuclear energy capacity by 2050.',
      'U.S. nuclear reactors operate at an average >92.5% capacity factor—more than double onshore wind (~35%) and nearly quadruple utility solar (~24%)—on <1/50th the land footprint.',
      'Pits physical grid-system LCOE ("System Cost of Electricity" including backup storage and transmission) against standalone plant-level Levelized Cost of Energy (LCOE).',
    ],
    sources: [
      {
        title: 'The Role of Firm Low-Carbon Electricity Resources in Deep Decarbonization of Power Generation',
        url: 'https://www.cell.com/joule/fulltext/S2542-4351(18)30386-6',
        publisher: 'Joule (Nestor A. Sepulveda, Jesse D. Jenkins, Fernando J. de Sisternes & Richard K. Lester)',
        year: '2018',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'Nuclear Power and Secure Energy Transitions: From Today’s Challenges to Tomorrow’s Clean Energy Systems',
        url: 'https://www.iea.org/reports/nuclear-power-and-secure-energy-transitions',
        publisher: 'International Energy Agency (IEA)',
        year: '2022',
        category: 'Empirical / Economic Study',
      },
    ],
    tags: ['Energy & Climate', 'Regulation & Markets', 'Trade & Industry', 'Empirical Studies'],
    era: '1973–Present',
  },
  {
    id: 'pro-nuclear-baseload-messmer-ai-demand',
    parentId: 'thesis-nuclear-energy-abundance',
    kind: 'pro',
    title: 'Clean Firm Baseload for "Dunkelflaute" & AI Grids, France’s Messmer Plan & Minimal Footprint',
    summary:
      'MIT/Princeton grid optimizations prove adding firm nuclear slashes total zero-carbon grid costs by 10–62%, validated historically by France’s 15-year Messmer nuclear decarbonization versus Germany’s €500B+ coal-reliant nuclear exit.',
    sections: [
      {
        heading: 'MIT/Princeton Grid Modeling & The Natural Experiment of France vs. Germany',
        paragraphs: [
          'In a seminal *Joule* study modeling 1,000+ grid scenarios, **Nestor Sepulveda and Jesse Jenkins (2018)** demonstrated that forcing grids to reach **100% zero-carbon using wind, solar, and lithium batteries alone** causes total electricity system costs to explode nonlinearly—requiring massive seasonal overbuilding and thousands of miles of transmission—whereas including **firm low-carbon nuclear** cuts total decarbonized grid costs by **10% to 62%**. Europe ran the real-world natural experiment: **France’s 1974 Messmer Plan** built **56 standardized pressurized-water reactors in 15 years**, giving France one of the cleanest grids on Earth (**~40–60g CO₂/kWh**), whereas **Germany spent >€500 billion on *Energiewende* renewables while shutting down its remaining nuclear plants in 2023**—leaving German electricity **5x–8x more carbon-intensive (~350–400g CO₂/kWh)** due to lignite coal and imported gas backup.',
        ],
      },
      {
        heading: '24/7 Hyperscale AI Power, Unmatched Energy Density & Lifecycle Safety',
        paragraphs: [
          'Physically, a single **uranium fuel pellet the size of a fingertip** yields as much energy as **one ton of coal or 17,000 cubic feet of natural gas**. According to **UNECE and Our World in Data** lifecycle assessments, nuclear power has the **lowest lifecycle mineral/material mining intensity**, **smallest land footprint (~50–75x less land per TWh than solar or wind)**—sparing biodiversity and rural NIMBY transmission fights—and the **lowest mortality rate per TWh alongside solar** (0.03 deaths/TWh, even counting Chernobyl and Fukushima, versus **24.6 for coal** and **2.8 for gas** due to air-particulate deaths).',
        ],
      },
    ],
    details: [
      'Sepulveda & Jenkins (2018, Joule) proved clean firm resources (nuclear, enhanced geothermal) act as a complement—not an enemy—to cheap solar/wind by eliminating exorbitant multi-week battery overbuild.',
      'South Korea’s KEPCO built four APR-1400 reactors at the UAE’s Barakah Nuclear Plant (5.6 GW, supplying 25% of UAE electricity) largely on schedule in ~9–12 years at ~$4,400/kW.',
      'Constellation Energy’s 2024 20-year PPA with Microsoft to restart Three Mile Island Unit 1 (835 MW) and Google/Amazon SMR investments demonstrate market willingness to pay a premium for firm 24/7 zero-carbon power.',
      'Extending existing 60-to-80-year U.S. nuclear plant licenses delivers zero-carbon baseload at ~$30–$35/MWh—the single cheapest source of clean electricity available (IEA).',
    ],
    sources: [
      {
        title: 'Carbon Neutrality in the UNECE Region: Integrated Life-Cycle Assessment of Electricity Sources',
        url: 'https://unece.org/sed/documents/2021/10/reports/life-cycle-assessment-electricity-generation-options',
        publisher: 'United Nations Economic Commission for Europe (UNECE)',
        year: '2022',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'What are the Safest and Cleanest Sources of Energy?',
        url: 'https://ourworldindata.org/safest-sources-of-energy',
        publisher: 'Our World in Data (Hannah Ritchie)',
        year: '2020',
        category: 'Empirical / Economic Study',
      },
    ],
    tags: ['Energy & Climate', 'Empirical Studies', 'Trade & Industry'],
    era: '1974–Present',
    relatedIds: ['con-consumer-welfare-bork-hovenkamp'],
  },
  {
    id: 'con-nuclear-vogtle-cost-solar-wrights-law',
    parentId: 'thesis-nuclear-energy-abundance',
    kind: 'con',
    title: 'Vogtle & Hinkley $35B+ Cost Overruns ("Negative Learning") vs. Solar + LFP Wright’s Law',
    summary:
      'Clean-energy economists point out that Western nuclear projects suffer catastrophic $35B+ budget blowouts and decade-long delays, whereas modular solar PV and LFP grid batteries follow exponential Wright’s Law cost declines and deploy in 18 months.',
    sections: [
      {
        heading: 'Plant Vogtle, Hinkley Point C & Nuclear’s Megaproject "Negative Learning"',
        paragraphs: [
          'Oxford megaproject scholar **Bent Flyvbjerg** and **Lazard’s Annual LCOE+ Report (2024)** highlight a stark empirical reality: in North America and Western Europe, new nuclear reactors have exhibited **"negative learning"**—growing *more* expensive with experience. **Georgia’s Plant Vogtle Units 3 & 4** finished **seven years behind schedule at ~$35 billion** (~$15,000/kW, more than double its $14B estimate), **South Carolina’s V.C. Summer** abandoned $9 billion in unfinished concrete, **France’s Flamanville 3 EPR** took 17 years at **>€13 billion**, and **UK’s Hinkley Point C** ballooned to **£35B–£46B**. Meanwhile, **NuScale’s flagship Utah SMR project** was canceled in 2023 after projected costs jumped 75% before pouring a cubic yard of concrete.',
        ],
      },
      {
        heading: 'Wright’s Law Modularity: Solar PV & LFP Batteries Deploying at Terawatt Scale',
        paragraphs: [
          'Oxford researchers **Rupert Way, Matthew Ives, Penny Mealy & J. Doyne Farmer (2022, *Joule*)** proved mass-manufactured modular technologies—**solar photovoltaics and lithium-ion batteries**—consistently obey **Wright’s Law**, dropping **~20%–24% in cost with every doubling of cumulative global production**. Between 2010 and 2024, unsubsidized utility solar LCOE plunged **~90% to $29–$60/MWh** (versus **$142–$222/MWh for new U.S. nuclear**, Lazard 2024), while **lithium iron phosphate (LFP)** battery cell prices fell below **$60–$75/kWh**, enabling **Texas (ERCOT)** and **California (CAISO)** to install tens of gigawatts of 4-hour batteries in 18–24 months that routinely displace evening gas peakers.',
        ],
      },
    ],
    details: [
      'Lazard LCOE+ (2024) estimates unsubsidized new U.S. utility-scale solar at $29–$92/MWh and onshore wind at $27–$73/MWh versus $142–$222/MWh for new AP1000-class nuclear.',
      'In 2024 alone, the world installed ~550–600 GW of new solar PV capacity—generating more incremental clean Terawatt-hours in a single year than net global nuclear additions over the previous two decades.',
      'Way et al. (2022, Oxford INET / Joule) showed probabilistic Wright’s Law forecasts predict a rapid renewable-plus-storage transition saves trillions of dollars relative to fossil or high-cost nuclear baselines.',
    ],
    sources: [
      {
        title: 'Lazard’s Levelized Cost of Energy+ (LCOE+) Annual Report',
        url: 'https://www.lazard.com/research-insights/levelized-cost-of-energyplus/',
        publisher: 'Lazard Financial Advisory',
        year: '2024',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'Empirically Grounded Technology Forecasts and the Energy Transition',
        url: 'https://www.cell.com/joule/fulltext/S2542-4351(22)00410-X',
        publisher: 'Joule / Oxford Smith School (Rupert Way, Matthew C. Ives, Penny Mealy & J. Doyne Farmer)',
        year: '2022',
        category: 'Empirical / Economic Study',
      },
    ],
    tags: ['Energy & Climate', 'Empirical Studies', 'Macroeconomics', 'Trade & Industry'],
    era: '2010–Present',
    relatedIds: ['con-carbon-tax-yellow-vests-ira-subsidies'],
  },
  {
    id: 'con-rebuttal-nuclear-regulatory-alara-reform',
    parentId: 'con-nuclear-vogtle-cost-solar-wrights-law',
    kind: 'con',
    title: 'Nuclear Cost Overruns Stem From NRC/ALARA Regulatory Ratcheting—Not Physics (Korea & ADVANCE Act)',
    summary:
      'Breakthrough Institute and MIT cost histories prove nuclear’s post-1970 Western price surge is a curable policy artifact of NRC regulatory ratcheting, ALARA rules, and 30-year build hiatuses—whereas standardized South Korean and Japanese fleets build reactors for ~$3,000–$4,500/kW.',
    sections: [
      {
        heading: 'Lovering, Yip & Nordhaus: Regulatory Ratcheting vs. Asian Fleet Standardization',
        paragraphs: [
          'Analyzing construction cost data across **349 historical commercial reactors** in 7 countries (**58% of all reactors ever built**), **Jessica Lovering, Arthur Yip & Ted Nordhaus (2016, *Energy Policy*)** and **MIT’s *Future of Nuclear Energy* (2018)** demonstrated that runaway costs are *uniquely* a U.S./Western post-Three Mile Island institutional pathology. Prior to 1970, U.S. reactors cost **~$2,000/kW (real dollars)** and took 4.5 years; thereafter, the **Nuclear Regulatory Commission’s (NRC) "ALARA" ("As Low As Reasonably Achievable")** mandate—grounded in unscientific **Linear No-Threshold (LNT)** radiation rules requiring billion-dollar mid-construction backfits even when ambient radiation is far below Denver’s natural background—quadrupled steel, concrete, and indirect engineering labor. By contrast, **South Korea** built **20+ standardized APR-1400/OPR-1000 reactors continuously**, achieving positive learning curves down to **~$2,500–$3,500/kW**.',
        ],
      },
      {
        heading: 'Factory Standardization & The Bipartisan U.S. ADVANCE Act (2024)',
        paragraphs: [
          '**Plant Vogtle Unit 4** itself cost **~30% less** than Unit 3 once lost U.S. nuclear welding supply chains were rebuilt from scratch after a 30-year hiatus. Recognizing that regulatory paralysis—not nuclear physics—blocked cheap firm energy, Congress passed the **ADVANCE Act of 2024** by an overwhelming **88–2 Senate vote**, rewriting the NRC’s mission statement for the first time to avoid unnecessarily limiting peaceful nuclear benefits, slashing licensing fees, fast-tracking reactor siting on **retired coal-plant brownfields** (reusing existing switchyards and transmission lines), and harmonizing international reactor design approvals.',
        ],
      },
    ],
    details: [
      'Lovering, Yip & Nordhaus (2016) documented steady 1–2% annual real cost *declines* across South Korea’s standardized nuclear program (1971–2012), proving nuclear achieves learning-by-doing when regulators freeze a single standard design.',
      'MIT Energy Initiative (2018) found >70% of Western nuclear cost escalation came from indirect engineering, QA paperwork, and mid-construction regulatory design changes rather than nuclear island hardware.',
      'Enacted in July 2024 (88–2 Senate, 393–13 House), the bipartisan ADVANCE Act mandates NRC licensing modernization, coal-to-nuclear brownfield pathways, and accelerated review for standardized SMRs and Generation IV reactors.',
    ],
    sources: [
      {
        title: 'Historical Construction Costs of Global Nuclear Power Reactors',
        url: 'https://www.sciencedirect.com/science/article/pii/S0301421516300106',
        publisher: 'Energy Policy / Breakthrough Institute (Jessica R. Lovering, Arthur Yip & Ted Nordhaus)',
        year: '2016',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'The Future of Nuclear Energy in a Carbon-Constrained World',
        url: 'https://energy.mit.edu/research/future-nuclear-energy-carbon-constrained-world/',
        publisher: 'MIT Energy Initiative (Jacopo Buongiorno, John Parsons et al.)',
        year: '2018',
        category: 'Empirical / Economic Study',
      },
    ],
    tags: ['Energy & Climate', 'Regulation & Markets', 'Governance', 'Empirical Studies'],
    era: '2016–Present',
    relatedIds: ['pro-stigler-capture-licensing-nepa'],
  },

  // ============================================================================
  // THESIS 8C: Technological Decoupling ("Green Growth") vs. "Degrowth"
  // ============================================================================
  {
    id: 'thesis-green-growth-vs-degrowth',
    parentId: 'pillar-econ-climate',
    kind: 'thesis',
    title: 'Technological Decoupling ("Green Growth") Beats "Degrowth" Without Impoverishing the Global South',
    summary:
      'Pits "Green Growth" economists—citing 35+ nations that have already decoupled GDP growth from CO2 emissions—against "Degrowth" ecological theorists calling to shrink rich-world consumption, tested against global poverty and energy arithmetic.',
    sections: [
      {
        heading: 'Endogenous Growth Recipes vs. Biophysical Planetary Boundaries',
        paragraphs: [
          'Can humanity raise living standards indefinitely on a finite planet while stabilizing the climate? **Green Growth** economists—drawing on Nobel laureate **Paul Romer’s endogenous growth theory**—emphasize that **GDP measures economic value, not tons of physical matter**: switching from coal boilers and internal-combustion SUVs to clean electricity, software, telemedicine, and higher-efficiency chips raises real GDP while *slashing* carbon and air pollution. Conversely, the **Degrowth** school (**Jason Hickel, Giorgos Kallis, Tim Jackson**) contends perpetual compound GDP growth violates **planetary boundaries** across critical minerals, land use, and biodiversity.',
        ],
      },
      {
        heading: 'Empirical CO2 Decoupling Meets Global South Development Ethics',
        paragraphs: [
          'What was once an abstract philosophical dispute since the **1972 Club of Rome *Limits to Growth*** forecast can now be adjudicated against two hard 21st-century datasets: multi-decade empirical evidence of **sustained absolute consumption-based CO₂ decoupling** across **35+ advanced economies** in Europe and North America, alongside an inescapable **global poverty constraint**. Because over **6.5 billion people (~80%+ of humanity)** live in low- and middle-income nations consuming a fraction of OECD energy, economists warn any climate paradigm premised on shrinking global output directly collides with ending premature mortality, hunger, and energy poverty across the **Global South**.',
        ],
      },
    ],
    details: [
      'IPCC Sixth Assessment Report (AR6 WGIII, 2022) documented at least 24–35+ countries achieving sustained absolute reductions in both territorial and consumption-based GHG emissions over >10 years while growing GDP.',
      'Global per-capita electricity use displays a 25-to-1 chasm between high-income economies (~7,000–12,000 kWh/yr) and Sub-Saharan Africa (<500 kWh/yr—less than a single American refrigerator plus water heater).',
      'Directly tests whether climate mitigation requires austerity and shrinking output ("Degrowth") or clean technological abundance ("Ecomodernism / Green Growth").',
    ],
    sources: [
      {
        title: 'CO2 and Greenhouse Gas Emissions: Many Countries Have Decoupled Economic Growth from CO2 Emissions',
        url: 'https://ourworldindata.org/co2-gdp-decoupling',
        publisher: 'Our World in Data (Hannah Ritchie & Max Roser)',
        year: '2024',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'Climate Change 2022: Mitigation of Climate Change (AR6 Working Group III)',
        url: 'https://www.ipcc.ch/report/ar6/wg3/',
        publisher: 'Intergovernmental Panel on Climate Change (IPCC)',
        year: '2022',
        category: 'Empirical / Economic Study',
      },
    ],
    tags: ['Energy & Climate', 'Macroeconomics', 'Empirical Studies', 'Demographics'],
    era: '1972–Present',
  },
  {
    id: 'pro-green-growth-empirical-decoupling',
    parentId: 'thesis-green-growth-vs-degrowth',
    kind: 'pro',
    title: '35+ Economies Prove Absolute GDP–CO2 Decoupling (Even Adjusting for Trade Offshoring)',
    summary:
      'Empirical datasets from Our World in Data, the IEA, and IPCC AR6 prove 35+ advanced economies—including the UK, Sweden, France, and the United States—have cut total and trade-adjusted CO2 emissions for nearly two decades while growing real GDP 30–80%+.',
    sections: [
      {
        heading: 'Trade-Adjusted Absolute Decoupling Across the UK, US, Sweden & EU',
        paragraphs: [
          'For decades, skeptics claimed rich countries only lowered domestic emissions by offshoring dirty factories to China. Using **global multi-regional input-output trade tables** that add back every ton of CO₂ embedded in imported steel, electronics, and apparel (**consumption-based emissions**), **Hannah Ritchie (*Not the End of the World*, 2024)**, **Le Quéré et al. (*Nature Climate Change*)**, and **Hubacek et al. (2021)** proved offshoring is a myth: **over 35 countries** achieved sustained **absolute decoupling** on *both* territorial and consumption-based metrics. Since 1990, the **United Kingdom cut territorial CO₂ by ~50% (and consumption CO₂ by >35%) while real GDP grew >80%**; since peaking in **2007**, **U.S. total CO₂ fell ~18%–20% while real GDP expanded >40%**; and **Sweden, Denmark, and France** cut per-capita emissions to levels last seen in the 1920s alongside record prosperity.',
        ],
      },
      {
        heading: 'Andrew McAfee’s "More from Less" Dematerialization & Electrification Efficiency',
        paragraphs: [
          'MIT economist **Andrew McAfee (*More from Less*, 2019)** documents that advanced market economies have also passed **"peak stuff"** across absolute domestic consumption of **paper, timber, steel, copper, aluminum, water, and synthetic fertilizer** even as GDP climbed—driven by profit-seeking input miniaturization, precision agriculture, and digital substitution (a smartphone replaces cameras, GPS units, stereos, encyclopedias, and landlines). Furthermore, **clean electrification eliminates ~60% of primary thermal energy waste**: electric motors and heat pumps convert **85%–300%+** of input electricity into useful motion and heat, whereas internal-combustion engines and coal plants waste two-thirds of fossil fuel BTUs as exhaust heat.',
        ],
      },
    ],
    details: [
      'Le Quéré et al. (2019, Nature Climate Change) and Hubacek et al. (2021) confirmed 32–35+ economies achieved sustained absolute decoupling of GDP from consumption-based (trade-adjusted) CO2 emissions.',
      'UK coal power dropped from ~70% of electricity in 1990 to literally 0% in September 2024 (closure of Ratcliffe-on-Soar) while UK real GDP per capita rose substantially.',
      'Primary-to-useful energy conversion efficiency means electrifying global transport, heating, and industry slashes total required primary energy extraction by nearly half for the exact same human services (IEA Net Zero Roadmap).',
    ],
    sources: [
      {
        title: 'Drivers of Declining CO2 Emissions in 18 Developed Economies',
        url: 'https://www.nature.com/articles/s41558-019-0419-7',
        publisher: 'Nature Climate Change (Corinne Le Quéré et al.)',
        year: '2019',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'Evidence of Decoupling Consumption-Based CO2 Emissions from Economic Growth',
        url: 'https://www.advancesincleanerproduction.net/',
        publisher: 'Environmental Research Letters / Hubacek, Chen et al.',
        year: '2021',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'More from Less: The Surprising Story of How We Learned to Prosper Using Fewer Resources',
        url: 'https://mitsloan.mit.edu/ideas-made-to-matter/more-less-how-we-learned-to-prosper-using-fewer-resources',
        publisher: 'Scribner / MIT Sloan (Andrew McAfee)',
        year: '2019',
        category: 'Scholarship',
      },
    ],
    tags: ['Energy & Climate', 'Macroeconomics', 'Empirical Studies', 'Trade & Industry'],
    era: '2005–Present',
    relatedIds: ['pro-carbon-tax-nordhaus-pigouvian-cbam'],
  },
  {
    id: 'con-degrowth-ecological-limits-throughput',
    parentId: 'thesis-green-growth-vs-degrowth',
    kind: 'con',
    title: 'Degrowth Critique: Insufficient Decoupling Speed, Mineral Throughput & Jevons Rebound',
    summary:
      'Ecological economists Jason Hickel, Giorgos Kallis, and Tim Jackson contend observed rich-world CO2 decoupling (~1.5–3%/yr) is far too slow for 1.5°C budgets and shifts ecological damage onto lithium/copper/cobalt mining and biodiversity loss.',
    sections: [
      {
        heading: 'Vogel & Hickel (2023): Decoupling Rates Lag Paris 1.5°C Carbon Budgets',
        paragraphs: [
          'In *The Lancet Planetary Health*, **Jefim Vogel and Jason Hickel (2023)** analyzed the 11 high-income countries that achieved absolute consumption-based CO₂ decoupling between 2013 and 2019 and found their average emissions reduction rate was just **~1.6% per year**—requiring **over 220 years** on average to reach net-zero and burning through **multiple times their fair-share 1.5°C Paris carbon budgets**. Because compound **3% annual GDP growth doubles economic output every 24 years**, every dollar of green efficiency must work twice as hard just to stand still—exemplified by **Jevons Paradox** rebound effects as fuel-economy gains were swallowed by consumers shifting from compact sedans into heavy two-ton SUVs and frequent long-haul flights.',
        ],
      },
      {
        heading: 'Material Footprint Throughput, Critical-Mineral Extraction & Planned Sufficiency',
        paragraphs: [
          'Synthesizing empirical material-flow accounting in *New Political Economy*, **Jason Hickel & Giorgos Kallis (2020)** and **Haberl et al. (2020, *Environmental Research Letters*)** argue there is **no global empirical evidence of absolute decoupling of GDP from aggregate *material footprint*** (~100 billion metric tons/yr of biomass, metals, non-metallic minerals, and fossil ores). Electrifying **1.4+ billion private cars** one-for-one demands unprecedented **lithium, copper, nickel, cobalt, and rare-earth strip-mining** across ecological hotspots in Chile, Indonesia, and the Democratic Republic of Congo. Degrowth scholars advocate **planned post-growth sufficiency in wealthy OECD nations**: four-day workweeks, public transit over private SUVs, bans on planned obsolescence and private jets, and wealth redistribution.',
        ],
      },
    ],
    details: [
      'Vogel & Hickel (2023, Lancet Planetary Health) calculated high-income decouplers would need to accelerate annual consumption-CO2 reductions five- to tenfold (>10–12%/yr) by 2030 to honor 1.5°C equity shares while growing GDP.',
      'IEA’s Role of Critical Minerals in Clean Energy Transitions notes a typical electric vehicle requires ~6x the mineral inputs (copper, lithium, nickel, graphite) of a conventional internal-combustion car.',
      'Stockholm Resilience Centre’s 2023 Planetary Boundaries update estimated humanity has transgressed 6 of 9 safe planetary operating boundaries, including biosphere integrity, nitrogen/phosphorus flows, and climate.',
    ],
    sources: [
      {
        title: 'Is Green Growth Possible?',
        url: 'https://www.tandfonline.com/doi/full/10.1080/13563467.2019.1598964',
        publisher: 'New Political Economy (Jason Hickel & Giorgos Kallis)',
        year: '2020',
        category: 'Scholarship',
      },
      {
        title: 'Is Green Growth Happening? An Empirical Analysis of Achieved Versus Paris-Compliant CO2–GDP Decoupling in High-Income Countries',
        url: 'https://www.thelancet.com/journals/lanplh/article/PIIS2542-5196(23)00174-2/fulltext',
        publisher: 'The Lancet Planetary Health (Jefim Vogel & Jason Hickel)',
        year: '2023',
        category: 'Empirical / Economic Study',
      },
    ],
    tags: ['Energy & Climate', 'Macroeconomics', 'Human Rights', 'Empirical Studies'],
    era: '2009–Present',
  },
  {
    id: 'con-rebuttal-degrowth-global-poverty-arithmetic',
    parentId: 'con-degrowth-ecological-limits-throughput',
    kind: 'con',
    title: 'Global Poverty Arithmetic: 80% of Humanity Needs Vastly More Energy & GDP—Making Abundance Essential',
    summary:
      'Inequality and development economists Branko Milanovic and Max Roser prove via global income arithmetic that shrinking or freezing world GDP either demands totalitarian 70% income cuts in democracies or condemns 6.5 billion Global South citizens to permanent poverty.',
    sections: [
      {
        heading: 'Branko Milanovic & Max Roser’s Global Income Arithmetic Refutes Degrowth',
        paragraphs: [
          'World-renowned inequality economist **Branko Milanovic** and Oxford’s **Max Roser (Our World in Data)** expose the devastating arithmetic trap of Degrowth. Global mean income is only **~$13,000–$20,000 PPP per year (~$18–$22/day)**, and **~85% of humanity lives below the $30/day threshold** defining the *poverty line* of high-income democracies. Even under **perfect global egalitarianism**, freezing global GDP and redistributing every penny equally would force **75%+ income collapses** across Western working classes (politically unthinkable outside wartime ruin)—while leaving the entire human race below Western poverty standards. Lifting **6.5 billion Africans, South Asians, and Latin Americans** to dignified health, air-conditioning in deadly heatwaves, and clean water **mathematically requires multiplying global economic output 3x to 5x**.',
        ],
      },
      {
        heading: 'Clean-Energy Mineral Recycling vs. 15 Billion Tons of Single-Use Fossil Fuels',
        paragraphs: [
          'Moreover, **Hannah Ritchie** and **IEA material-flow audits** dismantle the mineral-throughput panic by comparing actual tonnages: humanity currently digs up and *burns forever* **~15,000 million metric tons (15 gigatons) of coal, oil, and gas every single year**, whereas building the *entire* global net-zero clean-energy transition requires only **~28–40 million tons/year of clean-tech minerals** (**>350x less physical mining mass**)—and unlike combusted coal, **copper, lithium, sodium-ion, and steel are recyclable in closed loops**. Because the **2020 COVID lockdowns** shrank global GDP at catastrophic human cost yet cut global CO₂ by a mere **~5.4%**, only **clean energy and technological abundance** can simultaneously end poverty and zero out emissions.',
        ],
      },
    ],
    details: [
      'Max Roser (Our World in Data) shows 85% of the world’s population lives on less than $30/day (international PPP)—meaning ending global poverty is mathematically impossible through redistribution alone without massive global economic growth.',
      'During the 2020 global pandemic lockdowns—the sharpest peacetime economic contraction since the Great Depression—global CO2 dipped just ~5.4%, proving austerity cannot deliver the remaining 95% cuts.',
      'Nemet / IEA mineral comparisons show total clean-energy critical mineral mining (<0.04 Gt/yr, recyclable) is <0.3% of the 15 Gt/yr of fossil fuels extracted and burned once into the atmosphere.',
      'Sodium-ion batteries, LFP chemistry (zero cobalt or nickel), and aluminum conductor substitution already demonstrate rapid market innovation around any scarce mineral bottleneck.',
    ],
    sources: [
      {
        title: 'Global Economic Inequality and Why Ending Global Poverty Requires Economic Growth',
        url: 'https://ourworldindata.org/poverty',
        publisher: 'Our World in Data (Max Roser)',
        year: '2023',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'The Role of Critical Minerals in Clean Energy Transitions',
        url: 'https://www.iea.org/reports/the-role-of-critical-minerals-in-clean-energy-transitions',
        publisher: 'International Energy Agency (IEA)',
        year: '2022',
        category: 'Empirical / Economic Study',
      },
    ],
    tags: ['Energy & Climate', 'Macroeconomics', 'Demographics', 'Empirical Studies'],
    era: '2020–Present',
  },
];
