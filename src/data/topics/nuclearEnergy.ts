import { DebateGraphDataset, DebateNode } from '../../types/debate';

export const nuclearEnergyNodes: DebateNode[] = [
  // ============================================================================
  // ROOT NODE
  // ============================================================================
  {
    id: 'root-nuclear-energy',
    parentId: null,
    kind: 'root',
    title: 'Nuclear Energy: Baseload Essential vs. Costly Hazard',
    summary:
      'A comprehensive dialectical investigation into commercial nuclear fission: balancing zero-carbon 24/7 firm baseload, high energy density, and grid reliability against extreme capital costs, construction delays, catastrophic tail-risk meltdowns, weapons proliferation, and millennia-long radioactive waste stewardship.',
    sections: [
      {
        heading: 'The Decarbonization Dilemma and Nuclear Reappraisal',
        paragraphs: [
          'As the world races to electrify transportation, heating, heavy industry, and a rapidly expanding **AI hyperscale datacenter fleet**, the global clean energy debate has converged on the necessity of **clean firm power**. While solar photovoltaics and onshore wind have experienced precipitous learning-curve price drops under **Wright’s Law**, their intermittent capacity factors (~20%–40%) and seasonal **"Dunkelflaute"** (prolonged cloudy, windless spells) impose massive grid-level systems costs for long-duration storage, redundant capacity, and continental transmission expansion.',
          'Advocates led by ecomodernists such as **Michael Shellenberger**, **Zion Lights**, and the **Breakthrough Institute** argue that commercial nuclear fission represents humanity’s only proven, scalable source of ultra-dense, zero-carbon baseload electricity capable of powering advanced industrial civilization on an ultra-compact land footprint. Pointing to historic national buildouts in **France (the Messmer Plan)** and **Sweden**, they maintain that deep decarbonization cannot physically or economically succeed on weather-dependent flows alone.',
        ],
      },
      {
        heading: 'The Counter-Critique: Economics, Opportunity Cost, and Tail Hazards',
        paragraphs: [
          'Conversely, energy systems analysts including **Amory Lovins** (Rocky Mountain Institute) and **Mark Z. Jacobson** (Stanford University) contend that nuclear power is too slow to build, far too expensive per delivered megawatt-hour, and structurally ill-suited for modern dynamic grids. Recent Western gigawatt-scale megaprojects—such as **Plant Vogtle Units 3 & 4** in Georgia and **Hinkley Point C** in the United Kingdom—faced decade-long construction delays and budget escalations exceeding 100% to 250%, resulting in levelized electricity costs vastly higher than utility-scale solar-plus-storage.',
          'Furthermore, anti-nuclear scholars, nonproliferation experts, and environmental justice organizations emphasize the non-zero probability of catastrophic meltdowns demonstrated by **Chernobyl** and **Fukushima Daiichi**, the enduring challenge of securing political and geological consent for high-level spent fuel repositories like **Finland’s Onkalo**, and the dangerous dual-use proliferation risks inherent in uranium enrichment and plutonium recycling technologies.',
        ],
      },
    ],
    details: [
      'Commercial nuclear fission delivers ~10% of global electricity and ~25% of all low-carbon electricity across 32 operating nations (IAEA 2024).',
      'At COP28 in Dubai (2023), a declaration backed by over 25 nations pledged to triple global nuclear energy capacity by 2050 to meet net-zero climate goals.',
      'Contrasts France’s ~70% nuclear-powered grid (<50g CO2/kWh) with Germany’s post-Energiewende coal reliance (~350–400g CO2/kWh) following reactor phase-outs.',
      'Examines the landmark dialectic featured in Oxford Union debates and Open to Debate forums pitting energy abundance against renewable-first economics.',
    ],
    sources: [
      {
        title: 'Nuclear Power and Secure Energy Transitions: From Today’s Challenges to Tomorrow’s Clean Energy Systems',
        url: 'https://www.iea.org/reports/nuclear-power-and-secure-energy-transitions',
        publisher: 'International Energy Agency (IEA)',
        year: '2022',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'World Nuclear Industry Status Report 2023',
        url: 'https://www.worldnuclearreport.org/',
        publisher: 'Mycle Schneider Consulting / RMI',
        year: '2023',
        category: 'Watchdog / NGO',
      },
      {
        title: 'Oxford Union Debate: Nuclear Energy is the Solution to the Climate Crisis',
        url: 'https://oxford-union.org/',
        publisher: 'Oxford Union Society',
        year: '2022',
        category: 'Debate / Broadcast',
      },
      {
        title: 'Apocalypse Never: Why Environmental Alarmism Hurts Us All',
        url: 'https://www.harpercollins.com/products/apocalypse-never-michael-shellenberger',
        publisher: 'HarperCollins (Michael Shellenberger)',
        year: '2020',
        category: 'Scholarship',
      },
    ],
    tags: ['Energy & Climate', 'Empirical Studies', 'Macroeconomics', 'Science & Innovation', 'Governance'],
    era: '1954–Present',
  },

  // ============================================================================
  // PILLAR 1: Zero-Carbon Firm Baseload & Grid Stability
  // ============================================================================
  {
    id: 'pillar-nuc-baseload',
    parentId: 'root-nuclear-energy',
    kind: 'pillar',
    title: 'Zero-Carbon Firm Baseload & Grid Stability',
    summary:
      'Evaluates the engineering necessity of continuous, dispatchable, zero-emission electricity to anchor high-voltage transmission grids, avoid multi-day winter Dunkelflaute blackouts, provide spinning mechanical inertia, and supply round-the-clock power to energy-intensive AI datacenter infrastructure.',
    sections: [
      {
        heading: 'The Engineering Reality of Grid Inertia and Intermittency',
        paragraphs: [
          'Modern electric grids require instantaneous balancing between power generation and load consumption at exact frequencies (50 Hz or 60 Hz). Massive rotating steam turbines in nuclear and hydroelectric plants provide **synchronous physical inertia**, naturally resisting abrupt frequency drops caused by sudden line trips or plant outages. Weather-dependent renewables connect through solid-state inverters, providing no physical rotating mass unless augmented by complex and costly synthetic inertia or grid-forming inverter software.',
          'Moreover, modeling published in **Joule** by **Jesse Jenkins and Nestor Sepulveda (2018)** demonstrates that systems-level costs escalate non-linearly when grids push beyond 80% variable renewable penetration without **clean firm generation**. Overbuilding solar and wind capacity to cover the lowest solar insolation weeks of winter creates enormous curtailment during peak summer months and requires hundreds of gigawatt-hours of unbuilt seasonal storage.',
        ],
      },
      {
        heading: 'Surging Power Demand from AI Datacenters and Industrial Reshoring',
        paragraphs: [
          'The rapid expansion of artificial intelligence hyperscale datacenters, semiconductor fabrication foundries, and industrial heat electrification has triggered the sharpest OECD electricity demand growth in decades. Hyperscalers such as **Microsoft, Google, Amazon, and Meta** require **24/7 carbon-free energy (CFE)** matching hourly demand rather than relying on annual paper offsets.',
          'This commercial imperative drove the landmark 2024 agreement between **Constellation Energy and Microsoft** to restart the 835 MW **Three Mile Island Unit 1 reactor (Crane Clean Energy Center)** under a 20-year power purchase contract, alongside Google and Amazon backing advanced **Small Modular Reactor (SMR)** developers like Kairos Power and X-energy to secure guaranteed gigawatt-scale uptime.',
        ],
      },
    ],
    details: [
      'U.S. nuclear reactors boast an average capacity factor exceeding 92.5%, compared to ~35% for onshore wind and ~24% for utility-scale solar PV (EIA 2024).',
      'Peer-reviewed capacity expansion models (Jenkins et al., Joule 2018) find including firm low-carbon power lowers overall deep decarbonization costs by 10% to 62%.',
      'Nuclear power requires less than 1% of the land area per unit of electricity generated compared to wind and ground-mounted solar farms.',
      'Physical rotating turbine shafts provide synchronized grid frequency stability that buffer against cascading blackout vulnerabilities.',
    ],
    sources: [
      {
        title: 'The Role of Firm Low-Carbon Electricity Resources in Deep Decarbonization of Power Generation',
        url: 'https://www.cell.com/joule/fulltext/S2542-4351(18)30386-6',
        publisher: 'Joule (Nestor A. Sepulveda, Jesse D. Jenkins, et al.)',
        year: '2018',
        category: 'Scholarship',
      },
      {
        title: 'Electricity 2024: Analysis and Forecast to 2026',
        url: 'https://www.iea.org/reports/electricity-2024',
        publisher: 'International Energy Agency (IEA)',
        year: '2024',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'Constellation to Launch Crane Clean Energy Center (Three Mile Island Recommissioning)',
        url: 'https://www.constellationenergy.com/newsroom.html',
        publisher: 'Constellation Energy Press Release',
        year: '2024',
        category: 'Court / Official Record',
      },
    ],
    tags: ['Energy & Climate', 'Science & Innovation', 'AI & Technology', 'Empirical Studies'],
    era: '1970–Present',
  },

  // Thesis 1A
  {
    id: 'thesis-nuc-grid-firmness',
    parentId: 'pillar-nuc-baseload',
    kind: 'thesis',
    title: 'Zero-Carbon Firm Power Is Indispensable to Avert Winter Dunkelflaute and Grid Instability',
    summary:
      'Tests the engineering claim that achieving 100% zero-carbon electricity without massive overbuilding and grid vulnerability requires dispatchable nuclear baseload to withstand prolonged winter weather lulls.',
    sections: [
      {
        heading: 'The Dunkelflaute Problem in Northern Latitudes',
        paragraphs: [
          'In Northern Europe, North America, and Northeast Asia, multi-day winter atmospheric blockings known as **"Dunkelflaute"** (dark windless spells) routinely suppress wind and solar output to below 10% of nameplate capacity across multi-country regions for 7 to 14 consecutive days. Crucially, these events coincide with peak annual electricity demand driven by sub-zero temperatures and the electrification of residential heat pumps.',
          'Relying solely on lithium-ion battery storage during such extended deficits is mathematically prohibitive: standard 4-hour battery packs cannot bridge multi-day continental energy shortfalls without hundreds of billions of dollars in battery cell deployment. By contrast, a fleet of nuclear reactors continues to generate uninterrupted thermal baseload regardless of weather, snow cover, or frozen turbine blades.',
        ],
      },
      {
        heading: 'The Systems-Level Cost of 100% Variable Renewable Architecture',
        paragraphs: [
          'While the **Levelized Cost of Energy (LCOE)** of standalone solar and wind panels has plummeted, LCOE ignores integration, transmission, and balancing costs. As variable renewable penetration rises beyond 70%, the marginal value of added solar capacity drops toward zero during midday summer peaks while the cost of providing firm reserve capacity for dark winter days rises asymptotically.',
          'Studies by **MIT Energy Initiative (2018)** and the **Energy Transitions Commission (2021)** demonstrate that retaining existing nuclear plants and deploying new Generation III+/IV reactors caps total system expenditure by displacing thousands of gigawatts of redundant renewable capacity and continental transmission corridors.',
        ],
      },
    ],
    details: [
      'Germany experienced multiple Dunkelflaute events in 2021–2023 where wind and solar combined supplied less than 15% of national demand for over a week.',
      'MIT Energy Initiative calculations show excluding firm low-carbon options increases total system electricity costs by up to $100/MWh at 100% decarbonization.',
      'Battery energy storage systems (BESS) typically provide 2 to 8 hours of discharge, whereas nuclear refueling cycles operate continuously for 18 to 24 months.',
    ],
    sources: [
      {
        title: 'The Future of Nuclear Energy in a Carbon-Constrained World',
        url: 'https://energy.mit.edu/research/future-nuclear-energy/',
        publisher: 'MIT Energy Initiative',
        year: '2018',
        category: 'Scholarship',
      },
      {
        title: 'Making Clean Electrification Possible: 30 Years to Zero',
        url: 'https://www.energy-transitions.org/publications/making-clean-electrification-possible/',
        publisher: 'Energy Transitions Commission',
        year: '2021',
        category: 'Empirical / Economic Study',
      },
    ],
    tags: ['Energy & Climate', 'Empirical Studies', 'Macroeconomics'],
    era: '2018–Present',
    relatedIds: ['thesis-nuc-capital-megaprojects'],
  },
  {
    id: 'pro-nuc-capacity-factor-grid-inertia',
    parentId: 'thesis-nuc-grid-firmness',
    kind: 'pro',
    title: '93% Capacity Factor, Physical Rotating Inertia, and Exceptional Land Efficiency',
    summary:
      'Nuclear power provides unmatched operational reliability, real electromagnetic turbine inertia, and a microscopic land footprint compared to weather-dependent renewable expanses.',
    sections: [
      {
        heading: 'Operational Reliability and Real Turbine Inertia',
        paragraphs: [
          'Nuclear power plants operate as self-contained energy dense engines that function virtually decoupled from ambient meteorological conditions. Operating with an average **93% capacity factor** across the United States, commercial reactors require scheduled refueling outages only once every 18 to 24 months. Their multi-ton synchronous turbine-generator sets inject real kinetic momentum directly into high-voltage transmission lines, stabilizing grid frequency during sudden load spikes or unexpected generator shutdowns.',
          'In contrast, power systems dominated by inverter-based wind and solar suffer from degraded fault-ride-through capability and lower short-circuit ratios. When Texas suffered the deadly **Winter Storm Uri blackout in 2021**, un-winterized wind turbines froze and natural gas wellheads experienced freeze-offs, while properly winterized nuclear units (such as those at South Texas Project Unit 2) continued generating thousands of megawatts.',
        ],
      },
      {
        heading: 'Spatial Footprint and Ecosystem Conservation',
        paragraphs: [
          'Generating 1,000 megawatts of continuous electricity via a single modern nuclear reactor requires approximately **1 square mile** of land. Producing the equivalent annual energy via utility-scale solar requires roughly **40 to 75 square miles**, while onshore wind requires **250 to 350 square miles** of land, disrupting natural habitats, migratory bird flyways, and triggering intense rural local opposition.',
          'As argued by conservation biologists and ecomodernists, the sheer spatial density of nuclear power preserves wild landscapes, prevents greenfield deforestation, and minimizes the mining footprint required for concrete, steel, and critical raw materials per megawatt-hour generated.',
        ],
      },
    ],
    details: [
      'A single standard nuclear fuel pellet (1 cm tall) generates the equivalent electrical energy of 1 ton of coal, 149 gallons of oil, or 17,000 cubic feet of natural gas.',
      'Nuclear energy produces fewer lifecycle greenhouse gas emissions (~12g CO2eq/kWh) than rooftop solar (~41g) and comparable to offshore wind (IPCC WGIII 2022).',
      'The land-use intensity of nuclear is less than 1% that of biomass, wind, and utility solar per unit of delivered energy.',
    ],
    sources: [
      {
        title: 'IPCC Sixth Assessment Report: Mitigation of Climate Change (Working Group III)',
        url: 'https://www.ipcc.ch/report/ar6/wg3/',
        publisher: 'Intergovernmental Panel on Climate Change (IPCC)',
        year: '2022',
        category: 'Scholarship',
      },
      {
        title: 'Land-Use Intensity of Electricity Production and Nature Conservation',
        url: 'https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0270155',
        publisher: 'PLOS ONE (van Zalk & Behrens)',
        year: '2022',
        category: 'Empirical / Economic Study',
      },
    ],
    tags: ['Energy & Climate', 'Science & Innovation', 'Empirical Studies'],
    era: '2020–Present',
    relatedIds: ['con-nuc-overbuilding-storage-interconnection'],
  },
  {
    id: 'con-nuc-overbuilding-storage-interconnection',
    parentId: 'thesis-nuc-grid-firmness',
    kind: 'con',
    title: 'Regional Supergrids, Battery Plummet, and Demand Flexibility Displace Baseload',
    summary:
      'Renewable-first modelers prove that geographic diversity, high-voltage DC interconnections, grid-forming inverters, and plunging battery storage render rigid baseload obsolete.',
    sections: [
      {
        heading: 'The Fallacy of Rigid Baseload in Modern Dynamic Grids',
        paragraphs: [
          'Energy analyst **Amory Lovins** and renewable modeler **Mark Z. Jacobson** demonstrate that the traditional concept of "baseload" is an outdated artifact of 20th-century thermal power engineering. Modern power systems do not need inflexible plants that run at 100% output 24/7; they need **flexible dispatch** that can rapidly ramp up and down in response to net-load fluctuations.',
          'Nuclear reactors are technically and economically ill-suited for daily cycling: their high fixed capital costs mean that running them at partial capacity drastically spikes their levelized cost per kilowatt-hour. Furthermore, modern **grid-forming inverters (GFMs)** and synchronous condensers provide synthetic inertia without needing thermal steam boilers, disproving the claim that thermal combustion is physically irreplaceable.',
        ],
      },
      {
        heading: 'Interconnection, Geographic Smoothing, and Battery Scaling',
        paragraphs: [
          'Empirical grid modeling shows that weather conditions are rarely uniform across large geographic regions. By expanding **High-Voltage Direct Current (HVDC)** transmission grids, surplus wind power from the North Sea or Midwestern plains can balance low-generation areas hundreds of miles away in real time.',
          'Coupled with the exponential cost reduction of **Lithium Iron Phosphate (LFP)** and emerging sodium-ion batteries—which plummeted over 80% between 2013 and 2024—modular battery installations can absorb midday solar peaks and dispatch them through the evening ramp, while dynamic demand response (such as smart EV charging and industrial thermal storage) flattens peak consumption.',
        ],
      },
    ],
    details: [
      'Jacobson et al. (Energy & Environmental Science 2022) modeled 145 countries and showed 100% wind-water-solar grids maintain reliability at lower overall cost than nuclear mixes.',
      'California regularly meets over 100% of daytime electricity demand with renewable power in spring months, utilizing over 10,000 MW of installed battery storage during peak evening hours.',
      'HVDC transmission lines operate with energy losses under 3% per 1,000 kilometers, allowing continental-scale geographic smoothing of wind and solar variations.',
    ],
    sources: [
      {
        title: 'Zero Air Pollution and Zero Carbon from All Energy at Low Cost and Without Blackouts: 100% WWS Across 145 Countries',
        url: 'https://pubs.rsc.org/en/content/articlelanding/2022/ee/d2ee00722c',
        publisher: 'Energy & Environmental Science (Mark Z. Jacobson et al.)',
        year: '2022',
        category: 'Scholarship',
      },
      {
        title: 'Renewables Are Saving the Grid, Not Breaking It',
        url: 'https://rmi.org/renewables-are-saving-the-grid/',
        publisher: 'Rocky Mountain Institute (Amory Lovins)',
        year: '2023',
        category: 'Watchdog / NGO',
      },
    ],
    tags: ['Energy & Climate', 'Economics', 'Empirical Studies'],
    era: '2022–Present',
    relatedIds: ['pro-nuc-capacity-factor-grid-inertia'],
  },

  // Thesis 1B
  {
    id: 'thesis-nuc-ai-data-centers',
    parentId: 'pillar-nuc-baseload',
    kind: 'thesis',
    title: 'Powering AI Hyperscale Computing & Heavy Industrial Electrification Demands Nuclear Scale',
    summary:
      'Analyzes whether the exponential electricity demand of generative AI datacenters and zero-carbon industrial metallurgy can be met without contracting dedicated commercial nuclear generation.',
    sections: [
      {
        heading: 'The Exponential Energy Demand of Generative AI Datacenters',
        paragraphs: [
          'Training and running advanced frontier AI foundation models requires massive hyperscale datacenters drawing between 500 megawatts and several gigawatts of continuous, non-interruptible electricity. Tech giants that have pledged 100% round-the-clock carbon-free energy cannot rely on daytime solar or intermittent wind without installing immense battery banks that compete for global battery supply chains.',
          'Consequently, hyperscalers have turned directly to nuclear utilities. In 2024, **Talen Energy** sold its 960 MW datacenter campus adjacent to the **Susquehanna nuclear plant** to **Amazon Web Services (AWS)** for $650 million, securing direct behind-the-meter nuclear power. Similarly, Microsoft signed a landmark 20-year power purchase agreement to restart Unit 1 of Three Mile Island, demonstrating that major technology capital views nuclear fission as the premier zero-carbon commercial solution.',
        ],
      },
      {
        heading: 'Industrial High-Heat Decarbonization Beyond the Grid',
        paragraphs: [
          'Beyond digital datacenters, deep decarbonization requires replacing fossil fuels in heavy manufacturing sectors including chemical synthesis, cement calcination, and primary steel production. While low-temperature heat can be supplied by industrial heat pumps, heavy process industries require temperatures between 500°C and 1,000°C.',
          'Advanced **High-Temperature Gas-Cooled Reactors (HTGRs)** and **Molten Salt Reactors (MSRs)** can deliver direct, high-temperature thermal process heat alongside electricity, enabling cost-effective zero-carbon hydrogen production via high-temperature steam electrolysis without efficiency-sapping electricity conversion steps.',
        ],
      },
    ],
    details: [
      'The International Energy Agency projects datacenter electricity consumption will double from ~460 TWh in 2022 to over 1,000 TWh by 2026, roughly equivalent to the total electricity demand of Japan.',
      'A single gigawatt-scale AI datacenter campus consumes more continuous power than a city of 700,000 households.',
      'Nuclear reactors produce both electricity and high-temperature thermal heat, unlocking thermal efficiencies over 50% in advanced Generation IV designs.',
    ],
    sources: [
      {
        title: 'Electricity 2024: Analysis of Data Centre Electricity Demand',
        url: 'https://www.iea.org/reports/electricity-2024/executive-summary',
        publisher: 'International Energy Agency (IEA)',
        year: '2024',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'High-Temperature Gas-Cooled Reactors for Industrial Heat and Clean Hydrogen',
        url: 'https://www.iaea.org/topics/high-temperature-gas-cooled-reactors',
        publisher: 'International Atomic Energy Agency (IAEA)',
        year: '2023',
        category: 'Primary Text / Treaty',
      },
    ],
    tags: ['AI & Technology', 'Energy & Climate', 'Science & Innovation', 'Macroeconomics'],
    era: '2023–Present',
    relatedIds: ['pillar-nuc-economics'],
  },
  {
    id: 'pro-nuc-hyperscale-247-clean-match',
    parentId: 'thesis-nuc-ai-data-centers',
    kind: 'pro',
    title: 'Hyperscale 24/7 Clean Matching Drives Nuclear Renaissance and Recommissioning',
    summary:
      'Tech giants with massive balance sheets are capitalizing reactor restarts and financing advanced SMR order books, establishing a non-taxpayer commercial financing model.',
    sections: [
      {
        heading: 'Corporate Capital Overcoming the Nuclear Financing Bottleneck',
        paragraphs: [
          'Historically, commercial nuclear construction stalled in deregulated merchant power markets because regulated utilities could not justify multi-billion-dollar balance-sheet risks without ratepayer guarantees. The entry of **hyper-liquid technology balance sheets**—such as Microsoft, Google, and Amazon holding hundreds of billions in cash—has transformed project finance for firm clean energy.',
          'By signing long-term take-or-pay **Power Purchase Agreements (PPAs)** at premium rates ($100–$120/MWh), tech conglomerates provide the credit guarantees necessary to underwrite plant life extensions, reactor uprates, and the revival of shuttered units like Palisades in Michigan and Three Mile Island Unit 1 in Pennsylvania.',
        ],
      },
      {
        heading: 'Accelerating Advanced Reactor Deployment Cycles',
        paragraphs: [
          'Corporate demand is also catalyzing the first commercial order books for fourth-generation reactors. In October 2024, **Google** entered into a landmark framework agreement with **Kairos Power** to deploy a fleet of seven molten-salt cooled SMRs totaling 500 MW by 2035, while Amazon led a $500 million financing round for **X-energy** to develop high-temperature gas reactors.',
          'This private customer-driven model bypasses traditional bureaucratic utility procurement cycles, fostering competitive pressure to build serial manufacturing capacity and unlock factory-floor economies of scale.',
        ],
      },
    ],
    details: [
      'Microsoft’s 20-year PPA for the Crane Clean Energy Center will restore 835 MW of carbon-free generation to the PJM Interconnection grid by 2028.',
      'The U.S. Department of Energy provided a $1.52 billion conditional loan guarantee in 2024 to Holtec International to restart the 800 MW Palisades Nuclear Generating Station.',
      'Google’s Kairos Power agreement represents the first corporate purchase of multiple commercial advanced SMR units in history.',
    ],
    sources: [
      {
        title: 'Google and Kairos Power Partner to Deploy Advanced Nuclear Fleet',
        url: 'https://blog.google/outreach-initiatives/sustainability/google-kairos-power-nuclear-energy/',
        publisher: 'Google Sustainability Blog',
        year: '2024',
        category: 'Court / Official Record',
      },
      {
        title: 'DOE Announces Loan Guarantee to Holtec for Palisades Nuclear Plant Restart',
        url: 'https://www.energy.gov/lpo/palisades',
        publisher: 'U.S. Department of Energy Loan Programs Office',
        year: '2024',
        category: 'Court / Official Record',
      },
    ],
    tags: ['AI & Technology', 'Energy & Climate', 'Economics'],
    era: '2024–Present',
    relatedIds: ['con-nuc-datacenters-crowding-out-grid'],
  },
  {
    id: 'con-nuc-datacenters-crowding-out-grid',
    parentId: 'thesis-nuc-ai-data-centers',
    kind: 'con',
    title: 'Captive Behind-the-Meter Contracts Divert Existing Clean Power from the Public Grid',
    summary:
      'Utility regulators and consumer advocates warn that behind-the-meter AI datacenter deals cannibalize zero-carbon baseload, raising consumer power rates and delaying fossil retirement.',
    sections: [
      {
        heading: 'Cannibalizing Existing Clean Baseload from Public Grids',
        paragraphs: [
          'Behind-the-meter colocation deals—such as Amazon’s agreement to siphon power directly from the **Susquehanna nuclear plant**—do not add new clean generation to the grid; they simply divert existing zero-carbon megawatts away from public consumers and small businesses to exclusive corporate servers. In November 2024, the **Federal Energy Regulatory Commission (FERC)** rejected an amended interconnection agreement at Susquehanna, ruling that shifting 480 MW of existing baseload to a private datacenter threatened grid reliability and shifted transmission costs onto ordinary ratepayers.',
          'When existing nuclear generation is cordoned off for private computation, public utilities are forced to burn more coal and natural gas to make up the generation shortfall, directly increasing regional greenhouse gas emissions.',
        ],
      },
      {
        heading: 'Speculative SMR Timelines vs. Near-Term Carbon Reduction',
        paragraphs: [
          'While tech marketing highlights futuristic Small Modular Reactors deploying by 2030, no commercial SMR is currently operating or licensed for construction in the United States. Licensing novel reactor designs through the **Nuclear Regulatory Commission (NRC)** requires 5 to 10 years of safety evaluations, meaning that speculative SMRs cannot alleviate the acute power crunch of the late 2020s.',
          'Pouring capital into hypothetical reactors diverts investment away from immediately deployable, shovel-ready clean resources—such as geothermal, utility solar, wind, and industrial batteries—that can be brought online in 12 to 24 months.',
        ],
      },
    ],
    details: [
      'FERC’s November 2024 rejection of PJM Interconnection Docket ER24-2172 cited potential annual transmission cost shifts of hundreds of millions of dollars onto regional ratepayers.',
      'PJM Interconnection market monitors estimated that colocating a 960 MW datacenter at Susquehanna could drive up regional wholesale capacity prices across 13 states.',
      'SMR developer NuScale cancelled its flagship Utah project in November 2023 after projected costs jumped from $58/MWh to $89/MWh despite federal subsidies.',
    ],
    sources: [
      {
        title: 'FERC Order Rejecting Interconnection Service Agreement (Docket No. ER24-2172-000)',
        url: 'https://www.ferc.gov/',
        publisher: 'Federal Energy Regulatory Commission',
        year: '2024',
        category: 'Court / Official Record',
      },
      {
        title: 'Behind-the-Meter Datacenters Threaten Grid Reliability and Ratepayer Equity',
        url: 'https://www.monitoringanalytics.com/',
        publisher: 'Independent Market Monitor for PJM',
        year: '2024',
        category: 'Watchdog / NGO',
      },
    ],
    tags: ['Energy & Climate', 'Regulation & Markets', 'AI & Technology'],
    era: '2024–Present',
    relatedIds: ['pro-nuc-hyperscale-247-clean-match'],
  },

  // ============================================================================
  // PILLAR 2: Prohibitive Capital Costs & Construction Delays
  // ============================================================================
  {
    id: 'pillar-nuc-economics',
    parentId: 'root-nuclear-energy',
    kind: 'pillar',
    title: 'Prohibitive Capital Costs & Construction Delays',
    summary:
      'Examines the brutal financial realities of nuclear megaprojects: multi-billion-dollar cost overruns, interest compounding over decade-long builds, and the negative learning curve of Western gigawatt reactors versus modular renewable economies of scale.',
    sections: [
      {
        heading: 'The Megaproject Pathology of Gigawatt-Scale Nuclear Fission',
        paragraphs: [
          'In his landmark Oxford University analysis of over 16,000 global megaprojects, **Bent Flyvbjerg (2023)** found that commercial nuclear power plants suffer the highest average cost overruns of any infrastructure asset class—averaging **117% real budget growth** and systemic schedule delays. Because commercial reactors are vast, bespoke civil engineering works constructed exposed to the elements, they are acutely vulnerable to regulatory scope changes, supply chain bottlenecks, and contractor bankruptcies.',
          'The flagship Western Generation III+ deployments of the 21st century bear out this pathology: **Plant Vogtle Units 3 & 4** in Georgia ballooned from an initial estimate of $14 billion to over **$35 billion**, entering service seven years behind schedule and bankrupting reactor vendor Westinghouse in 2017. In Europe, the **Flamanville 3 EPR** in France and **Hinkley Point C** in the UK experienced similar tripling of budgets, driving electricity generation costs above £90/MWh to £110/MWh (indexed to inflation).',
        ],
      },
      {
        heading: 'The Contrast with Wright’s Law and Serial Manufacturing',
        paragraphs: [
          'While nuclear construction exhibited negative learning curves in North America and Western Europe (costs increasing with each successive unit built due to escalating safety mandates and custom engineering), clean energy manufacturing followed steep learning curves. Under **Wright’s Law**, every doubling of cumulative manufacturing volume drove down solar PV module costs by ~20%–24% and lithium battery packs by ~18%–22%.',
          'Consequently, private investors and merchant utilities routinely refuse to finance nuclear projects without government loan guarantees, guaranteed cost-plus rate recovery, or massive contract-for-difference subsidies, viewing nuclear megaprojects as existential balance-sheet hazards.',
        ],
      },
    ],
    details: [
      'Lazard’s 2024 Levelized Cost of Energy (LCOE v17.0) calculated unsubsidized new nuclear at $140–$222/MWh, compared to $24–$96/MWh for utility-scale solar and $27–$73/MWh for onshore wind.',
      'Plant Vogtle Units 3 & 4 in Georgia cost over $35 billion—more than $15,000 per kilowatt of installed capacity—becoming the most expensive power plant in American history.',
      'The French Cour des Comptes (Court of Audit) estimated the total cost of Flamanville 3 at €19.1 billion, nearly six times its initial 2006 budget of €3.3 billion.',
      'South Korea’s KEPCO achieved dramatically lower costs (~$3,000–$4,000/kW) at Barakah in the UAE through disciplined design standardization and unbroken supply-chain repetition.',
    ],
    sources: [
      {
        title: 'How Big Things Get Done: The Surprising Factors That Determine the Fate of Every Project',
        url: 'https://www.penguinrandomhouse.com/books/652077/how-big-things-get-done-by-bent-flyvbjerg-and-dan-gardner/',
        publisher: 'Crown Publishing / Oxford University (Bent Flyvbjerg & Dan Gardner)',
        year: '2023',
        category: 'Scholarship',
      },
      {
        title: 'Lazard’s Levelized Cost of Energy Analysis — Version 17.0',
        url: 'https://www.lazard.com/research-insights/levelized-cost-of-energyplus/',
        publisher: 'Lazard',
        year: '2024',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'The Nuclear Energy Dilemma: Financial and Construction Overruns in the West',
        url: 'https://www.ccomptes.fr/en/publications/filiere-nucleaire-epr',
        publisher: 'Cour des Comptes (France)',
        year: '2020',
        category: 'Court / Official Record',
      },
    ],
    tags: ['Economics', 'Energy & Climate', 'Macroeconomics', 'Empirical Studies'],
    era: '1970–Present',
  },

  // Thesis 2A
  {
    id: 'thesis-nuc-capital-megaprojects',
    parentId: 'pillar-nuc-economics',
    kind: 'thesis',
    title: 'Nuclear Megaproject Cost Overruns Cripple Climate Speed Compared to Cheaper Renewables',
    summary:
      'Contrasts the thesis that nuclear power’s crushing capital costs and decade-long timelines lose the race against climate tipping points against the evidence of successful fleet-wide standardized buildouts.',
    sections: [
      {
        heading: 'The Climate Opportunity Cost of Capital and Time',
        paragraphs: [
          'Because mitigating global warming requires cutting carbon emissions before 2030–2040, the **velocity of deployment** is just as critical as technical performance. Constructing a gigawatt-scale nuclear reactor in the West requires 10 to 15 years from site selection and licensing to commercial synchronization, during which billions of dollars of capital sit unproductive, accumulating compounding interest.',
          'In ***The World Nuclear Industry Status Report***, **Amory Lovins** argues that every dollar invested in a slow, expensive nuclear plant saves significantly less carbon per dollar and per year than investing that same dollar in immediately deployable solar, wind, energy efficiency, and demand response. By choosing nuclear, utilities effectively lock in higher emissions while waiting for reactors to open.',
        ],
      },
      {
        heading: 'The Counter-Case: The French Messmer Plan and South Korean Standardization',
        paragraphs: [
          'Nuclear historians and economists counter that Western cost overruns are not intrinsic to nuclear physics, but rather the consequence of institutional amnesia and fragmented bespoke construction. When nations commit to **fleet-wide standardization** with a single regulatory authority and unbroken supply-chain teams, nuclear power exhibits remarkable construction velocity.',
          'Under the **Messmer Plan** launched in 1974 following the OPEC oil crisis, France constructed 56 commercial reactors in less than 20 years, decarbonizing 80% of its electricity sector in 15 years while maintaining lower consumer power prices than neighboring Germany. Similarly, South Korea’s **KEPCO** built four APR-1400 reactors at the **Barakah Nuclear Power Plant** in the UAE on time and within budget, proving that standardized serial replication defeats the megaproject curse.',
        ],
      },
    ],
    details: [
      'The average global construction duration for nuclear reactors connected between 2018 and 2023 was 8.9 years, with several projects exceeding 15 years.',
      'France completed its nationwide Messmer buildout at a capital cost equivalent to ~$1,500–$2,000 per kW in inflation-adjusted dollars.',
      'KEPCO’s Barakah plant in the UAE added 5,600 MW of zero-carbon capacity between 2020 and 2024, providing 25% of the UAE’s total electricity.',
    ],
    sources: [
      {
        title: 'Historical Construction Costs of Global Nuclear Power Reactors',
        url: 'https://www.sciencedirect.com/science/article/pii/S0301421516300064',
        publisher: 'Energy Policy (Jessica Lovering et al.)',
        year: '2016',
        category: 'Scholarship',
      },
      {
        title: 'Nuclear Power and the World’s Energy Future',
        url: 'https://www.nature.com/articles/d41586-019-02636-8',
        publisher: 'Nature',
        year: '2019',
        category: 'Scholarship',
      },
    ],
    tags: ['Economics', 'Energy & Climate', 'Empirical Studies'],
    era: '1974–Present',
    relatedIds: ['thesis-nuc-smr-viability'],
  },
  {
    id: 'con-nuc-cost-overruns-vogtle-hinkley',
    parentId: 'thesis-nuc-capital-megaprojects',
    kind: 'con',
    title: 'The Megaproject Curse: Vogtle, Hinkley Point C, and Balance-Sheet Ruin',
    summary:
      'Western reactor buildouts demonstrate persistent budget hyper-inflation, contractor bankruptcies, and electricity generation costs double that of clean alternatives.',
    sections: [
      {
        heading: 'Vogtle and Hinkley Point C: Financial Black Holes',
        paragraphs: [
          'The empirical reality of modern Western nuclear construction is defined by catastrophic financial failure. Georgia’s **Plant Vogtle Units 3 & 4** suffered a final capital cost of over **$35 billion** for 2,234 MW of capacity—more than $15.6 million per megawatt. In the UK, **EDF Energy’s Hinkley Point C** was originally projected in 2007 to cost £9 billion and be boiling kettles for Christmas 2017; by 2024, its projected cost had soared to **£35 billion to £46 billion**, with completion postponed to 2029–2031.',
          'These financial quagmires are not mere accounting footnotes: they forced **Westinghouse Electric Company**—the historic pioneer of American nuclear engineering—into Chapter 11 bankruptcy in 2017 and triggered the abandonment of the twin AP1000 reactors at **V.C. Summer** in South Carolina after ratepayer expenditures exceeded $9 billion for a hole in the ground.',
        ],
      },
      {
        heading: 'The Cost of Capital and Compound Interest Penalty',
        paragraphs: [
          'Because nuclear reactors require vast upfront capital expenditures with zero revenue generation during a decade of construction, **Financing Costs (Interest During Construction, IDC)** account for 30% to 50% of the plant’s final price tag. In an environment of elevated central bank interest rates (5%+), the debt service on an unfinished $30 billion project accumulates at over $1.5 billion annually.',
          'By contrast, a utility solar farm or battery project can be designed, permitted, procured, and energized within 12 to 24 months, generating immediate revenue and allowing reinvestment into sequential phases without crushing balance-sheet debt.',
        ],
      },
    ],
    details: [
      'South Carolina ratepayers paid over $2 billion in utility bill surcharges for the cancelled V.C. Summer AP1000 reactors under the controversial Base Load Review Act.',
      'UK government guaranteed Hinkley Point C a contract-for-difference strike price of £92.50/MWh (2012 prices), which inflated above £128/MWh by 2024, more than double contemporary offshore wind strike prices.',
      'Bent Flyvbjerg’s data shows nuclear power has a higher rate of extreme "black swan" cost overruns (>200%) than dams, bridges, tunnels, or high-speed rail.',
    ],
    sources: [
      {
        title: 'Report on the Abandonment of the V.C. Summer Nuclear Project',
        url: 'https://www.psc.sc.gov/',
        publisher: 'Public Service Commission of South Carolina',
        year: '2019',
        category: 'Court / Official Record',
      },
      {
        title: 'Hinkley Point C Schedule Update and Revised Cost Estimate',
        url: 'https://www.edfenergy.com/media-centre/news-releases',
        publisher: 'EDF Energy',
        year: '2024',
        category: 'Court / Official Record',
      },
    ],
    tags: ['Economics', 'Energy & Climate', 'Regulation & Markets'],
    era: '2017–Present',
    relatedIds: ['pro-nuc-korea-france-fleet-standardization'],
  },
  {
    id: 'pro-nuc-korea-france-fleet-standardization',
    parentId: 'thesis-nuc-capital-megaprojects',
    kind: 'pro',
    title: 'Fleet Standardization: South Korea and France Prove Nuclear Can Be Cost-Competitive',
    summary:
      'Rigorous engineering standardization, programmatic serial builds, and stable regulatory regimes achieve capital costs under $3,500/kW and rapid deployment schedules.',
    sections: [
      {
        heading: 'Overcoming the Customized Craftsmanship Trap',
        paragraphs: [
          'The high costs of Western reactors at Vogtle, Flamanville, and Olkiluoto were not caused by nuclear physics, but by the disastrous decision to restart nuclear construction after a 30-year hiatus with **untested, customized "first-of-a-kind" (FOAK)** designs using an untrained construction workforce. When construction halted in the 1980s, specialized supply chains dissolved, expert welders retired, and regulatory agencies engaged in rolling engineering revisions while concrete was being poured.',
          'Where nations treat nuclear construction as an unbroken serial manufacturing program rather than a series of disconnected civil craft projects, capital costs plummet. South Korea’s **APR-1400** program maintained consistent engineering teams, factory-tested subassemblies, and strict regulatory stability, delivering reactors at the **Shin Kori** site in South Korea and **Barakah** in the UAE for roughly **$3,500 per kilowatt**—one-quarter of Vogtle’s unit cost.',
        ],
      },
      {
        heading: 'France’s Historic Precedent of Deep Decarbonization in 15 Years',
        paragraphs: [
          'France’s historic **Messmer Plan** represents the fastest and most comprehensive national electrical decarbonization in human history. By selecting a single standardized pressurized water reactor (PWR) design licensed from Westinghouse and mass-producing it across multiple river and coastal sites, France reduced its power sector carbon emissions by more than **80% in just 15 years** while becoming Europe’s largest net electricity exporter.',
          'Economic analyses published in *Energy Policy* by Lovering et al. confirm that across historical deployments in France, South Korea, Japan, and Canada, nuclear construction exhibited stable or declining real costs whenever design standardization and continuous fleet procurement were maintained.',
        ],
      },
    ],
    details: [
      'South Korea constructed 10 reactors between 1990 and 2010 with real overnight capital costs declining by ~15% across successive iterations.',
      'KEPCO’s Barakah plant in the UAE deployed four 1,400 MW units within a single decade, generating over 40 TWh of clean baseload annually by 2024.',
      'France’s 56-reactor nuclear fleet enabled France to maintain wholesale electricity prices consistently below Germany, which spent over €500 billion on Energiewende subsidies while remaining reliant on brown coal (lignite).',
    ],
    sources: [
      {
        title: 'Standardization and Capital Costs in Nuclear Power: The South Korean Experience',
        url: 'https://www.sciencedirect.com/science/article/pii/S030142151630132X',
        publisher: 'Energy Policy (Chung & Kim)',
        year: '2016',
        category: 'Scholarship',
      },
      {
        title: 'The French Nuclear Experience: A Historic Case of Rapid Decarbonization',
        url: 'https://www.oecd-nea.org/jcms/pl_14838/the-french-nuclear-experience',
        publisher: 'OECD Nuclear Energy Agency',
        year: '2021',
        category: 'Empirical / Economic Study',
      },
    ],
    tags: ['Economics', 'Energy & Climate', 'Governance'],
    era: '1974–Present',
    relatedIds: ['con-nuc-cost-overruns-vogtle-hinkley'],
  },

  // Thesis 2B
  {
    id: 'thesis-nuc-smr-viability',
    parentId: 'pillar-nuc-economics',
    kind: 'thesis',
    title: 'Small Modular Reactors (SMRs) as the Factory-Floor Manufacturing Solution',
    summary:
      'Evaluates the proposition that miniaturizing reactors from 1,000 MW down to 50–300 MW enables factory assembly-line economics and eliminates megaproject financing traps.',
    sections: [
      {
        heading: 'The Paradigm Shift from Field Craft to Assembly-Line Manufacturing',
        paragraphs: [
          'The core economic thesis of **Small Modular Reactors (SMRs)** is to trade away traditional thermal economies of scale (where bigger boilers yield cheaper heat per unit) in favor of **manufacturing learning economies**. Instead of pouring millions of tons of concrete exposed to rain, wind, and contractor disputes at a bespoke site, SMR pressure vessels and steam generators are manufactured in indoor, climate-controlled factories under strict robotic quality control.',
          'Completed reactor modules can then be transported by rail, barge, or truck directly to site, dropped into place, and connected in parallel clusters of 4, 6, or 12 units. This modularity allows utilities to deploy 100 MW of generation, begin selling electricity to earn revenue, and self-finance subsequent modules, drastically lowering upfront capital risk.',
        ],
      },
      {
        heading: 'Skepticism Over Loss of Thermal Economies and Early Cancellations',
        paragraphs: [
          'Critics argue that SMRs represent a false economic promise that violates fundamental chemical and thermal engineering scaling laws. By shrinking the reactor core, SMRs require proportionally more containment steel, safety instrumentation, and specialized security personnel per megawatt-hour of output than a large gigawatt-scale reactor.',
          'These doubts gained empirical weight in November 2023 when **NuScale Power**—the only SMR developer to achieve design certification from the U.S. Nuclear Regulatory Commission—abruptly cancelled its flagship **Carbon Free Power Project (CFPP)** in Utah after the project’s estimated levelized cost jumped from $58/MWh to $89/MWh despite receiving over $1.4 billion in U.S. federal subsidies, as participating municipal utilities backed out.',
        ],
      },
    ],
    details: [
      'Over 80 commercial SMR designs are currently under development globally across light-water, high-temperature gas, liquid metal, and molten salt platforms (IAEA 2024).',
      'Factory manufacturing enables production cycles estimated at 24 to 36 months per module compared to 8 to 12 years for field-constructed gigawatt plants.',
      'NuScale’s cancelled Utah project highlighted that achieving cost parity requires constructing dozens of identical units before factory economies offset loss of thermal scale.',
    ],
    sources: [
      {
        title: 'Advances in Small Modular Reactor Technology Developments (2024 Edition)',
        url: 'https://www.iaea.org/publications/15609/advances-in-small-modular-reactor-technology-developments',
        publisher: 'International Atomic Energy Agency (IAEA)',
        year: '2024',
        category: 'Primary Text / Treaty',
      },
      {
        title: 'The Nuclear SMR Dilemma: Small Modular Reactors, High Costs, and Uncertainty',
        url: 'https://ieefa.org/resources/smrs-are-too-expensive-too-slow-and-too-risky',
        publisher: 'Institute for Energy Economics and Financial Analysis (IEEFA)',
        year: '2024',
        category: 'Watchdog / NGO',
      },
    ],
    tags: ['Science & Innovation', 'Economics', 'Energy & Climate'],
    era: '2020–Present',
    relatedIds: ['thesis-nuc-capital-megaprojects'],
  },
  {
    id: 'pro-nuc-smr-factory-modularization',
    parentId: 'thesis-nuc-smr-viability',
    kind: 'pro',
    title: 'Factory Assembly, Phased Capital Investment, and Brownfield Coal Repowering',
    summary:
      'SMRs unlock factory economies of volume, fit existing brownfield coal plant electrical connections, and allow bite-sized financing for mid-sized utilities.',
    sections: [
      {
        heading: 'Solving the Utility Balance-Sheet Financing Trap',
        paragraphs: [
          'A traditional 1,200 MW reactor requiring $15 billion to $30 billion of capital exceeds the entire market capitalization of most regional utilities, making it an impossible bet under modern private governance. In contrast, a 100–300 MW SMR requiring $1 billion to $2 billion represents an investable asset that mid-sized municipal utilities, industrial consortiums, and sovereign funds can finance comfortably.',
          'Furthermore, SMRs are uniquely suited to **repowering retiring coal plants**. By reusing existing coal plant high-voltage switchyards, cooling water infrastructure, and steam turbine halls, SMR developers can slash interconnection wait-times and grid upgrades while retaining skilled local utility workforces in rustbelt and coal-dependent communities.',
        ],
      },
      {
        heading: 'Inherent Passive Safety and Reduced Exclusion Zones',
        paragraphs: [
          'Because SMR cores contain a fraction of the thermal energy and radioactive inventory of giant gigawatt reactors, they can rely exclusively on **passive physics** (gravity, natural convection, thermal conduction, and ambient air cooling) to circulate coolant indefinitely without operator intervention or offsite electrical power.',
          'In 2023, the U.S. NRC approved a reduced emergency planning zone (EPZ) for NuScale’s design that extends only to the plant boundary fence, rather than the 10-mile evacuation radius mandated for legacy gigawatt reactors, permitting co-location with industrial chemical plants, desalination facilities, and urban heat grids.',
        ],
      },
    ],
    details: [
      'A 2022 U.S. Department of Energy study identified hundreds of retiring coal plant sites across America capable of being repowered with SMRs, saving 15%–35% in capital costs.',
      'Westinghouse launched the AP300 SMR in 2023, leveraging fully licensed AP1000 supply chains to bypass novel component development.',
      'SMR modules can be shipped by rail or barge, enabling installation in remote mining outposts and arctic communities currently dependent on flown-in diesel fuel.',
    ],
    sources: [
      {
        title: 'Investigating Benefits and Challenges of Converting Retiring Coal Plants into Nuclear Plants',
        url: 'https://www.energy.gov/ne/articles/doe-report-finds-hundreds-retiring-coal-plant-sites-could-convert-nuclear',
        publisher: 'U.S. Department of Energy Office of Nuclear Energy',
        year: '2022',
        category: 'Court / Official Record',
      },
      {
        title: 'Safety Evaluation Report for the NuScale Small Modular Reactor',
        url: 'https://www.nrc.gov/reactors/new-reactors/smr/nuscale.html',
        publisher: 'U.S. Nuclear Regulatory Commission (NRC)',
        year: '2020',
        category: 'Court / Official Record',
      },
    ],
    tags: ['Science & Innovation', 'Energy & Climate', 'Economics'],
    era: '2022–Present',
    relatedIds: ['con-nuc-smr-nuscale-cancellations-cost'],
  },
  {
    id: 'con-nuc-smr-nuscale-cancellations-cost',
    parentId: 'thesis-nuc-smr-viability',
    kind: 'con',
    title: 'NuScale Cancellation and Unproven Factory Economics: SMRs Face the Scaling Paradox',
    summary:
      'Early SMR commercialization reveals severe cost inflation, lost economies of scale, and the catch-22 of needing massive upfront order volumes before factories exist.',
    sections: [
      {
        heading: 'The SMR Chicken-and-Egg Factory Dilemma',
        paragraphs: [
          'The entire economic case for SMRs hinges on factory mass production, yet establishing an advanced automated reactor manufacturing facility requires billions of dollars of upfront investment and a guaranteed backlog of **50 to 100 identical module orders**. Because no utility wants to be the guinea pig buying the expensive first five units, the industry is trapped in a classic chicken-and-egg paralysis.',
          'When **NuScale Power** attempted to commercialize its Utah Carbon Free Power Project, inflation in specialized metals, engineering redesigns, and rising interest rates drove its target levelized electricity price from $58/MWh up to $89/MWh—even after receiving a $1.4 billion taxpayer subsidy. The municipal utilities concluded that building wind, solar, and battery storage was far cheaper, leading to the project’s total cancellation in November 2023.',
        ],
      },
      {
        heading: 'Disproportionate Waste Generation per Megawatt-Hour',
        paragraphs: [
          'A landmark study by researchers at Stanford University and the University of British Columbia published in the *Proceedings of the National Academy of Sciences* (**PNAS 2022**) discovered that most SMR designs will actually increase the volume of radioactive waste by factors of **2 to 30** per unit of energy generated compared to modern gigawatt-scale plants.',
          'Because smaller reactor cores experience higher neutron leakage, structural materials surrounding the core become irradiated at higher rates, creating larger volumes of intermediate-level operational waste and complicating decommissioning economics.',
        ],
      },
    ],
    details: [
      'Kragh et al. (PNAS 2022) found water-, molten salt-, and sodium-cooled SMR designs will increase the volumes of spent fuel and radioactive waste requiring management per unit energy.',
      'NuScale laid off nearly 30% of its workforce in early 2024 following the Utah project cancellation to preserve cash reserves.',
      'A 2024 Institute for Energy Economics and Financial Analysis (IEEFA) report concluded SMRs remain too slow, too expensive, and too speculative to displace near-term renewable rollout.',
    ],
    sources: [
      {
        title: 'Nuclear Waste from Small Modular Reactors',
        url: 'https://www.pnas.org/doi/10.1073/pnas.2111833119',
        publisher: 'Proceedings of the National Academy of Sciences (Lindsay M. Krall, Allison M. Macfarlane, Rodney C. Ewing)',
        year: '2022',
        category: 'Scholarship',
      },
      {
        title: 'Small Modular Reactors: Still Too Expensive, Too Slow and Too Risky',
        url: 'https://ieefa.org/resources/smrs-are-too-expensive-too-slow-and-too-risky',
        publisher: 'IEEFA (David Schlissel)',
        year: '2024',
        category: 'Watchdog / NGO',
      },
    ],
    tags: ['Economics', 'Science & Innovation', 'Energy & Climate'],
    era: '2022–Present',
    relatedIds: ['pro-nuc-smr-factory-modularization'],
  },

  // ============================================================================
  // PILLAR 3: Safety, Radiation & Proliferation
  // ============================================================================
  {
    id: 'pillar-nuc-safety',
    parentId: 'root-nuclear-energy',
    kind: 'pillar',
    title: 'Safety, Radiation & Proliferation',
    summary:
      'Weighs the empirical mortality statistics of nuclear energy—which ranks among the safest power sources per terawatt-hour alongside solar and wind—against catastrophic tail risks, radiophobia, evacuation devastation, and the proliferation hazards of dual-use fuel cycles.',
    sections: [
      {
        heading: 'The Paradox of Statistical Safety vs. Catastrophic Dread',
        paragraphs: [
          'In risk psychology and radiological epidemiology, nuclear power occupies a unique status: empirically, it is one of the safest industrial technologies ever devised, yet culturally, it elicits profound dread. Comprehensive epidemiological assessments published by the **World Health Organization (WHO)**, **UNSCEAR**, and **Our World in Data (Hannah Ritchie 2020)** show that nuclear fission causes roughly **0.03 deaths per terawatt-hour** generated (accounting for Chernobyl, Fukushima, and mining accidents)—a rate roughly equal to solar (~0.02) and wind (~0.04), and **over 800 times lower than brown coal (24.6 deaths/TWh)** and **natural gas (2.8 deaths/TWh)** caused by fine particulate matter (PM2.5) air pollution.',
          'Yet unlike fossil fuel air pollution—which silently kills over 5 million people annually through dispersed respiratory disease—nuclear accidents are high-consequence, highly salient events that trigger mass evacuations, agricultural seizures, hundreds of billions of dollars in cleanup liabilities, and permanent exclusion zones.',
        ],
      },
      {
        heading: 'Passive Safety Physics and Geopolitical Proliferation',
        paragraphs: [
          'Modern **Generation III+ and Generation IV designs** incorporate "walk-away" passive safety systems that utilize gravity-driven water tanks, natural convection cooling, and Doppler temperature-reactivity feedbacks to prevent core meltdowns even in the event of complete electrical blackout (station blackout, as at Fukushima).',
          'However, nuclear power cannot be cleanly divorced from international security and nuclear weapons proliferation. The enrichment of uranium (converting natural U-235 from 0.7% to 3%–5% commercial fuel or >20% HALEU) and the reprocessing of spent fuel (extracting plutonium-239) utilize dual-use centrifuges and chemical separation technologies that enable non-nuclear weapon states to acquire latent breakout capability.',
        ],
      },
    ],
    details: [
      'UNSCEAR confirmed that fewer than 50 direct fatalities occurred from acute radiation syndrome following the 1986 Chernobyl disaster, with thyroid cancer among children being the main long-term health effect (~77% survival rate).',
      'The 2011 Fukushima Daiichi accident resulted in zero direct radiation deaths; however, over 1,500 people died due to physical and psychological stress from hurried, chaotic evacuations (WHO 2013).',
      'Fossil fuel combustion generates chronic toxic air emissions that kill roughly 8.7 million people worldwide every year (Vohra et al., Environmental Research 2021).',
      'The IAEA administers international safeguards and remote optical surveillance across 1,300+ nuclear facilities globally to prevent the diversion of fissile material for weapons.',
    ],
    sources: [
      {
        title: 'What Are the Safest and Cleanest Sources of Energy?',
        url: 'https://ourworldindata.org/safest-sources-of-energy',
        publisher: 'Our World in Data (Hannah Ritchie)',
        year: '2020',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'UNSCEAR 2020/2021 Report: Health Effects of Radiation from the 2011 Fukushima Accident',
        url: 'https://www.unscear.org/unscear/en/publications/2020_2021_2.html',
        publisher: 'United Nations Scientific Committee on the Effects of Atomic Radiation',
        year: '2021',
        category: 'Primary Text / Treaty',
      },
      {
        title: 'Global Mortality from Outdoor Air Pollution Generated by Fossil-Fuel Combustion',
        url: 'https://www.sciencedirect.com/science/article/pii/S0013935121000487',
        publisher: 'Environmental Research (Karn Vohra, Alina Vodonos, et al.)',
        year: '2021',
        category: 'Scholarship',
      },
    ],
    tags: ['Science & Innovation', 'Bioethics', 'Empirical Studies', 'National Security'],
    era: '1986–Present',
  },

  // Thesis 3A
  {
    id: 'thesis-nuc-historical-fatalities',
    parentId: 'pillar-nuc-safety',
    kind: 'thesis',
    title: 'Empirical Mortality Rates per TWh Reveal Nuclear as One of the Safest Energy Sources',
    summary:
      'Analyzes epidemiological data demonstrating that nuclear energy has saved millions of lives by displacing lethal fossil air pollution versus the psychological and geographic trauma of catastrophic meltdowns.',
    sections: [
      {
        heading: 'Statistical Mortality Rates and Displaced Fossil Deaths',
        paragraphs: [
          'A landmark study by **Pushker Kharecha and James Hansen (2013, *Environmental Science & Technology*)** calculated that global nuclear power generation prevented an estimated **1.84 million air-pollution-related deaths** and 64 gigatons of CO2-equivalent emissions between 1971 and 2009 by substituting for coal and oil combustion. When evaluated on a lifecycle mortality basis (deaths per terawatt-hour), nuclear power sits at roughly 0.03 deaths/TWh, comparable to wind (0.04) and solar (0.02), while coal exceeds 24 deaths/TWh.',
          'Because nuclear combustion produces zero airborne particulates, sulfur dioxide, nitrous oxides, or mercury, operating nuclear plants directly protects respiratory and cardiovascular public health in dense metropolitan airsheds.',
        ],
      },
      {
        heading: 'Tail-Risk Asymmetry and Exclusion Zones',
        paragraphs: [
          'Opponents argue that reducing safety to a single "deaths per TWh" metric commits an epistemic category error. While coal plant pollution causes statistical, probabilistic mortality dispersed across millions of individuals, a nuclear meltdown causes concentrated, non-linear **social and institutional collapse**.',
          'The Fukushima disaster required the forced relocation of over 150,000 residents, rendered hundreds of square kilometers of prime agricultural land temporarily uninhabitable, cost the Japanese taxpayer over $200 billion in decommissioning and decontamination expenses, and triggered nationwide reactor shutdowns that pushed Japan back into importing fossil fuels.',
        ],
      },
    ],
    details: [
      'Kharecha & Hansen (2013) estimated nuclear power prevented 1.84 million deaths worldwide and could prevent up to 7 million additional deaths by 2050 by displacing fossil fuels.',
      'The Japanese Reconstruction Agency reported that evacuation stress, disruption of medical care, and depression caused over 2,000 "disaster-related deaths" following Fukushima, while zero died from direct radiation.',
      'Worldwide, more than 350 coal miners die annually in extraction accidents, whereas uranium mining under modern ISL (In-Situ Recovery) methods involves zero underground human excavation.',
    ],
    sources: [
      {
        title: 'Prevented Mortality and Greenhouse Gas Emissions from Historical and Projected Nuclear Power',
        url: 'https://pubs.acs.org/doi/10.1021/es3051197',
        publisher: 'Environmental Science & Technology (Pushker A. Kharecha & James E. Hansen)',
        year: '2013',
        category: 'Scholarship',
      },
      {
        title: 'Health Risk Assessment from the Nuclear Accident Following the 2011 Great East Japan Earthquake',
        url: 'https://www.who.int/publications/i/item/9789241505130',
        publisher: 'World Health Organization (WHO)',
        year: '2013',
        category: 'Watchdog / NGO',
      },
    ],
    tags: ['Bioethics', 'Empirical Studies', 'Energy & Climate'],
    era: '2013–Present',
    relatedIds: ['thesis-nuc-geopolitical-proliferation'],
  },
  {
    id: 'pro-nuc-lowest-mortality-rate-twh',
    parentId: 'thesis-nuc-historical-fatalities',
    kind: 'pro',
    title: 'UNSCEAR and WHO Data: Nuclear Energy Ranks Among the Safest Human Inventions',
    summary:
      'Rigorous scientific epidemiological consensus proves nuclear energy has the lowest mortality rate per unit of energy delivered while preventing millions of fossil fuel air pollution deaths.',
    sections: [
      {
        heading: 'The Definitive Epidemiological Findings of UNSCEAR and the WHO',
        paragraphs: [
          'Scientific consensus from **UNSCEAR (the UN Scientific Committee on the Effects of Atomic Radiation)**, the **World Health Organization**, and the **National Academy of Sciences** consistently refutes sensationalized apocalyptic claims regarding radiation casualties. At Chernobyl—the worst conceivable civilian nuclear disaster involving a military-derived RBMK reactor with no containment building, a graphite fire, and flawed control rods—28 emergency workers died of acute radiation syndrome, and roughly 5,000 cases of thyroid cancer occurred among children who drank milk contaminated with iodine-131, which had a 99% cure rate when treated.',
          'At Fukushima, comprehensive whole-body radiation screenings across Fukushima Prefecture confirmed that radiation exposures to the public were far below clinical toxicity thresholds. UNSCEAR’s 2020 report concluded that no adverse health effects or elevated cancer rates among the general public or Fukushima workers can be attributed to radiation exposure from the accident.',
        ],
      },
      {
        heading: 'Replacing Germany’s Nuclear Fleet Caused Thousands of Preventable Deaths',
        paragraphs: [
          'The real-world human cost of anti-nuclear policy was empirically demonstrated by **Stephen Jarvis, Olivier Deschenes, and Akshaya Jha (2022, *Review of Economics and Statistics*)**, who evaluated Germany’s **Atomausstieg** (nuclear phaseout after Fukushima). The authors found that replacing clean nuclear output with domestic coal and imported gas led to an increase of 36 million tons of CO2 annually and caused over **1,100 additional premature deaths per year in Germany** from local air pollution.',
          'By shutting down zero-carbon, safe nuclear plants ahead of coal-fired facilities, political radiophobia directly sacrificed human lives to preserve an ideological taboo.',
        ],
      },
    ],
    details: [
      'Jarvis et al. (Review of Economics and Statistics 2022) calculated the social cost of Germany’s nuclear phase-out at ~$12 billion per year, dominated by premature deaths from coal plant particulate emissions.',
      'The linear no-threshold (LNT) model used in radiation protection conservatively assumes any dose carries risk, yet background radiation in places like Ramsar, Iran, or Guarapari, Brazil, is 50x higher than normal with no elevated cancer rates.',
      'Rooftop solar installation accidents (falls from heights) result in statistically more worker deaths per TWh than operating commercial nuclear reactors.',
    ],
    sources: [
      {
        title: 'The Private and External Costs of Germany’s Nuclear Phase-Out',
        url: 'https://direct.mit.edu/rest/article/104/5/825/107624/The-Private-and-External-Costs-of-Germany-s',
        publisher: 'Review of Economics and Statistics (Stephen Jarvis, Olivier Deschenes, Akshaya Jha)',
        year: '2022',
        category: 'Scholarship',
      },
      {
        title: 'Chernobyl: Consequences of the Catastrophe for People and the Environment (Critical Review)',
        url: 'https://www.unscear.org/unscear/en/chernobyl.html',
        publisher: 'UNSCEAR',
        year: '2011',
        category: 'Primary Text / Treaty',
      },
    ],
    tags: ['Bioethics', 'Empirical Studies', 'Energy & Climate'],
    era: '2022–Present',
    relatedIds: ['con-nuc-tail-risk-uninhabitable-zones'],
  },
  {
    id: 'con-nuc-tail-risk-uninhabitable-zones',
    parentId: 'thesis-nuc-historical-fatalities',
    kind: 'con',
    title: 'High-Consequence Tail Risks: Exclusion Zones, Decommissioning Trillions, and Public Panic',
    summary:
      'Statistical averages ignore the catastrophic systemic disruption of nuclear meltdowns: permanent land exclusion, generational displacement, and colossal economic cleanup burdens.',
    sections: [
      {
        heading: 'The Non-Linear Social Devastation of Evacuation and Exclusion',
        paragraphs: [
          'Assessing nuclear accidents solely through prompt radiological deaths ignores the fundamental nature of **tail-risk catastrophe**. When a chemical plant or coal station explodes, the damage is localized and cleanup concludes within months. When a nuclear reactor suffers a core breach, radioactive cesium-137 (half-life: 30.1 years) bonds with topsoil, urban concrete, and forest vegetation, transforming thriving cultural communities into **exclusion zones** for decades.',
          'The 30-kilometer Chernobyl Exclusion Zone in Ukraine and Belarus remains largely off-limits nearly four decades later. At Fukushima, over 150,000 people were abruptly uprooted from their ancestral towns; thousands of elderly residents died in temporary shelters, marriages collapsed, agricultural exports were boycotted, and fishing cooperatives suffered catastrophic losses despite radioactive levels being decontaminated.',
        ],
      },
      {
        heading: 'Astronomical Cleanup Liabilities and Uninsurable Risk',
        paragraphs: [
          'No commercial insurance syndicate on Earth will underwrite the full liability of a commercial nuclear power plant. In the United States, commercial reactors can only operate because the **Price-Anderson Act** legally caps private utility liability at roughly $16 billion, socializing all catastrophic damages beyond that onto taxpayers.',
          'The cleanup, fuel removal, water filtration (ALPS), and decommissioning of the four ruined Fukushima reactors is projected by the Japanese government to cost **¥22 trillion ($150 billion to $200 billion)** and take 40 years. For small and medium-sized nations, a single major nuclear catastrophe represents an existential sovereign financial shock capable of bankrupting the state.',
        ],
      },
    ],
    details: [
      'The Japanese Center for Economic Research (JCER) estimated the true long-term cleanup and compensation costs of Fukushima could reach up to $470 billion.',
      'The Price-Anderson Nuclear Industries Indemnity Act of 1957 protects U.S. reactor operators from full tort liability, representing an implicit public subsidy.',
      'Over 1.3 million metric tons of treated wastewater had to be stored in 1,000+ steel tanks at Fukushima before regulated offshore release began in 2023 amid fierce international controversy.',
    ],
    sources: [
      {
        title: 'Fukushima Cleanup Costs and the True Price of Nuclear Meltdowns',
        url: 'https://www.jcer.or.jp/english/',
        publisher: 'Japan Center for Economic Research (JCER)',
        year: '2019',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'The Price-Anderson Act: An Economic and Legal Assessment',
        url: 'https://www.crs.gov/reports/RL30321',
        publisher: 'Congressional Research Service (CRS)',
        year: '2022',
        category: 'Court / Official Record',
      },
    ],
    tags: ['Economics', 'Bioethics', 'Governance', 'Energy & Climate'],
    era: '2019–Present',
    relatedIds: ['pro-nuc-lowest-mortality-rate-twh'],
  },

  // Thesis 3B
  {
    id: 'thesis-nuc-geopolitical-proliferation',
    parentId: 'pillar-nuc-safety',
    kind: 'thesis',
    title: 'Generation IV Passive Safety vs. Nuclear Material Weapons Proliferation Risks',
    summary:
      'Weighs the engineering promise of walk-away passive reactor physics against the dual-use proliferation dangers of uranium enrichment and commercial fuel reprocessing.',
    sections: [
      {
        heading: 'Walk-Away Inherent Physics in Generation IV Reactors',
        paragraphs: [
          'Proponents of advanced nuclear technology maintain that 21st-century **Generation IV systems** fundamentally eliminate the meltdown mechanisms of 20th-century light water reactors. Designs such as **Triso-fuel High-Temperature Gas Reactors (HTGRs)** use micro-encapsulated fuel kernels coated in silicon carbide and pyrolytic carbon that cannot melt even at temperatures exceeding 1,600°C, well beyond any conceivable operational excursion.',
          'Similarly, **Liquid Metal Fast Reactors (SFRs)** and **Molten Salt Reactors (MSRs)** operate at near-atmospheric pressure, eliminating the catastrophic high-pressure steam explosion risks that drove the Chernobyl and Fukushima breaches, while passive cooling loops naturally siphon decay heat to the ambient atmosphere without pumps or electrical power.',
        ],
      },
      {
        heading: 'The Inescapable Dual-Use Nature of the Nuclear Fuel Cycle',
        paragraphs: [
          'Nonproliferation experts, however, stress that nuclear energy cannot be severed from military geopolitics. The same centrifuge cascades that enrich uranium to **3%–5% U-235** for commercial light-water reactors or **19.75% HALEU** for advanced SMRs can be reconfigured within weeks to enrich weapons-grade uranium (**>90% U-235**), as demonstrated by Iran’s nuclear program.',
          'Furthermore, advanced fast-spectrum reactors often rely on fuel cycles that separate plutonium or require closed-loop reprocessing, directly expanding the global stockpile of separated fissile material and increasing the risk of state breakout or illicit diversion by non-state actors.',
        ],
      },
    ],
    details: [
      'TRISO (Tristructural-isotropic) fuel was tested by the Idaho National Laboratory to over 1,800°C without core degradation or fission product release.',
      'Article IV of the 1968 Treaty on the Non-Proliferation of Nuclear Weapons (NPT) protects the "inalienable right" of all signatories to develop peaceful nuclear energy under IAEA safeguards.',
      'High-Assay Low-Enriched Uranium (HALEU) enriched up to 20% is required by most advanced SMR designs, yet commercial production outside of Russia remains severely constrained.',
    ],
    sources: [
      {
        title: 'Treaty on the Non-Proliferation of Nuclear Weapons (NPT)',
        url: 'https://www.un.org/disarmament/wmd/nuclear/npt/text/',
        publisher: 'United Nations Office for Disarmament Affairs',
        year: '1968',
        category: 'Primary Text / Treaty',
      },
      {
        title: 'Advanced Reactor Safety and TRISO Fuel Performance Evaluation',
        url: 'https://inldigitallibrary.inl.gov/',
        publisher: 'Idaho National Laboratory (U.S. DOE)',
        year: '2021',
        category: 'Court / Official Record',
      },
    ],
    tags: ['National Security', 'Science & Innovation', 'Governance'],
    era: '1968–Present',
    relatedIds: ['thesis-nuc-waste-density-recycling'],
  },
  {
    id: 'pro-nuc-geniv-passive-physics',
    parentId: 'thesis-nuc-geopolitical-proliferation',
    kind: 'pro',
    title: 'Gen IV "Walk-Away" Passive Safety: Physics Replaces Engineered Systems',
    summary:
      'Advanced TRISO fuels, molten salts, and liquid metal coolants rely on immutable laws of physics—gravity, thermal expansion, and Doppler broadening—to guarantee meltdown-proof operation.',
    sections: [
      {
        heading: 'Meltdown-Proof TRISO Fuel and Ambient Atmospheric Heat Sinks',
        paragraphs: [
          'In Generation II reactors, core cooling depended on active, engineered safety systems—such as diesel generators, electric water pumps, and high-pressure injection valves—that were vulnerable to common-cause electrical failures (such as the tsunami flooding at Fukushima). In contrast, **Generation IV reactors substitute the laws of physics for active mechanical components**.',
          'In designs utilizing **TRISO (TRi-structural ISOtropic) fuel**, each millimeter-sized uranium oxide kernel is sealed within three ceramic layers that act as individual miniature containment vessels. Even under a complete loss-of-coolant accident (LOCA), the core cannot melt, release fission products, or ignite, as confirmed in full-scale loss-of-flow tests conducted on the **HTR-PM** pebble-bed reactor in Shandong, China.',
        ],
      },
      {
        heading: 'Negative Temperature Coefficient of Reactivity',
        paragraphs: [
          'Advanced reactors are engineered with strong **negative temperature coefficients of reactivity**. As the core heats up, physical phenomena such as **Doppler broadening** increase the capture of neutrons by uranium-238 without causing fission, naturally choking off the nuclear chain reaction and shutting the reactor down without human intervention or control rod insertion.',
          'By operating at near-ambient atmospheric pressures with liquid coolants (such as liquid sodium or fluoride salts), these reactors eliminate high-pressure steam buildup, allowing reactor structures to be smaller, safer, and far simpler to construct.',
        ],
      },
    ],
    details: [
      'China synchronized the world’s first commercial high-temperature gas-cooled pebble-bed reactor (HTR-PM, 200 MW) to the grid in December 2023.',
      'Full loss-of-power tests at China’s HTR-PM demonstrated that decay heat dissipated passively through the reactor vessel wall with zero core meltdown.',
      'Molten salt reactors operate at ambient pressure with freeze-plugs: if power fails, the plug melts and liquid fuel drains by gravity into passively cooled subcritical dump tanks.',
    ],
    sources: [
      {
        title: 'Commercial Operation of the Demonstration HTR-PM Nuclear Power Plant',
        url: 'https://www.iaea.org/newscenter/news/chinas-high-temperature-gas-cooled-reactor-begins-commercial-operation',
        publisher: 'International Atomic Energy Agency (IAEA)',
        year: '2023',
        category: 'Court / Official Record',
      },
      {
        title: 'Passive Safety Features in Advanced Nuclear Power Plants',
        url: 'https://www.oecd-nea.org/jcms/pl_14838/passive-safety-systems',
        publisher: 'OECD Nuclear Energy Agency',
        year: '2022',
        category: 'Scholarship',
      },
    ],
    tags: ['Science & Innovation', 'Energy & Climate', 'Empirical Studies'],
    era: '2023–Present',
    relatedIds: ['con-nuc-enrichment-reprocessing-proliferation'],
  },
  {
    id: 'con-nuc-enrichment-reprocessing-proliferation',
    parentId: 'thesis-nuc-geopolitical-proliferation',
    kind: 'con',
    title: 'Dual-Use Fuel Cycles: Uranium Enrichment and Plutonium Reprocessing Fuel Breakout',
    summary:
      'Civilian nuclear energy spreads dual-use enrichment and reprocessing infrastructure, creating latent nuclear weapons breakout capabilities for non-nuclear states.',
    sections: [
      {
        heading: 'The Inherent Dual-Use Latency of Centrifuge Technology',
        paragraphs: [
          'The fundamental physics of nuclear fission creates an inescapable national security vulnerability: the physical facilities used to enrich uranium for civilian reactor fuel are identical to those required to produce weapons-grade material. A nation possessing an operating commercial enrichment facility (such as gas centrifuge cascades) can reconfigure piping and cascading in a matter of weeks to enrich uranium from commercial 4% U-235 up to **90% weapons-grade U-235**.',
          'Historically, the civilian nuclear programs of **India, Pakistan, South Africa, and North Korea** served as direct technological springboards for developing nuclear weapons. In contemporary geopolitics, Iran’s civilian nuclear program under the guise of medical research and electrical power brought the state within days of weapon-grade enrichment breakout capability.',
        ],
      },
      {
        heading: 'The Plutonium Economy and Non-State Terrorist Hazards',
        paragraphs: [
          'Furthermore, operating nuclear reactors creates plutonium-239 as a natural byproduct of neutron capture in uranium-238. A standard 1,000 MW reactor discharges roughly **250 to 300 kilograms of plutonium annually** in spent fuel—enough for over 30 nuclear warheads.',
          'If nations adopt closed fuel cycles involving chemical reprocessing (as practiced by France, the UK, Russia, and Japan), plutonium is separated into pure oxide form. This creates massive stockpiles of weapons-usable material vulnerable to state diversion, theft, or illicit trafficking, requiring intrusive and perpetual military-grade security protocols.',
        ],
      },
    ],
    details: [
      'Just 4 to 8 kilograms of plutonium-239 or 25 kilograms of highly enriched uranium-235 is sufficient to assemble a crude implosion-type nuclear warhead.',
      'Japan currently holds a stockpile of over 45 metric tons of separated civilian plutonium stored domestically and in Europe—enough for several thousand warheads.',
      'The IAEA Board of Governors has repeatedly cited non-compliance and clandestine enrichment sites under the NPT Additional Protocol.',
    ],
    sources: [
      {
        title: 'Global Fissile Material Report: Plutonium Stocks and Proliferation Risks',
        url: 'https://fissilematerials.org/reports/',
        publisher: 'International Panel on Fissile Materials (IPFM)',
        year: '2023',
        category: 'Watchdog / NGO',
      },
      {
        title: 'IAEA Safeguards Implementation Report for 2023',
        url: 'https://www.iaea.org/publications/reports/safeguards-implementation-report-for-2023',
        publisher: 'International Atomic Energy Agency',
        year: '2024',
        category: 'Court / Official Record',
      },
    ],
    tags: ['National Security', 'Governance', 'International Law'],
    era: '1970–Present',
    relatedIds: ['pro-nuc-geniv-passive-physics'],
  },

  // ============================================================================
  // PILLAR 4: Long-Term Waste & Spent Fuel Solutions
  // ============================================================================
  {
    id: 'pillar-nuc-waste',
    parentId: 'root-nuclear-energy',
    kind: 'pillar',
    title: 'Long-Term Waste & Spent Fuel Solutions',
    summary:
      'Evaluates the political and geological viability of permanent deep geological repositories (such as Finland’s Onkalo), safe interim dry-cask storage, and fast-reactor recycling versus perpetual institutional stewardship over radiotoxic actinides spanning 100,000 years.',
    sections: [
      {
        heading: 'The Volume Paradox: Extreme Energy Density vs. Radiotoxicity',
        paragraphs: [
          'Because nuclear fuel has an energy density roughly **two to three million times greater than coal or oil**, commercial nuclear power produces an extraordinarily tiny physical volume of waste. All commercial spent nuclear fuel produced by the entire U.S. nuclear fleet over the past 70 years—generating roughly 20% of America’s electricity—would fit stacked to a height of 10 yards on a single regulation American football field.',
          'However, while tiny in physical volume, spent nuclear fuel contains highly radioactive fission products (such as cesium-137 and strontium-90, with half-lives of ~30 years) and long-lived **transuranic actinides** (such as plutonium-239, neptunium-237, and americium-241) that remain radiotoxic above natural uranium ore background levels for over **100,000 years**.',
        ],
      },
      {
        heading: 'The Geological Solution: From Yucca Mountain to Onkalo',
        paragraphs: [
          'For decades, political paralysis epitomized by the **Yucca Mountain project** in Nevada—where the U.S. federal government spent over $15 billion before abandoning the repository in 2010 due to state-level political opposition—fueled arguments that humanity is incapable of managing nuclear waste across civilizational time horizons.',
          'That political impasse was shattered by **Finland**. At **Onkalo (Eurajoki)**, Finnish radioactive waste management company **Posiva** successfully licensed, excavated, and constructed the world’s first permanent deep geological repository, tunneling 450 meters into stable 1.9-billion-year-old crystalline bedrock with full local democratic municipal consent, providing a permanent, passive disposal solution without requiring active human maintenance.',
        ],
      },
    ],
    details: [
      'Commercial spent nuclear fuel consists of 95% unreacted uranium-238, 1% unconsumed uranium-235, 1% plutonium, and only 3% true high-level fission products.',
      'Over 90,000 metric tons of commercial spent fuel are currently stored safely across the United States in robust steel-and-concrete dry storage casks (NRC 2024).',
      'Finland’s Onkalo repository is licensed to begin final disposal of spent fuel in copper canisters surrounded by bentonite clay in 2025–2026.',
      'Fast-breeder reactors can theoretically consume long-lived actinides as fuel, reducing the required radiotoxicity storage duration from 100,000 years to under 300 years.',
    ],
    sources: [
      {
        title: 'Safety Case for the Disposal of Spent Nuclear Fuel at Olkiluoto',
        url: 'https://www.posiva.fi/en/index/safetycase.html',
        publisher: 'Posiva Oy / STUK (Finnish Radiation and Nuclear Safety Authority)',
        year: '2022',
        category: 'Court / Official Record',
      },
      {
        title: 'Blue Ribbon Commission on America’s Nuclear Future: Report to the Secretary of Energy',
        url: 'https://www.energy.gov/ne/downloads/blue-ribbon-commission-americas-nuclear-future-report-secretary-energy',
        publisher: 'U.S. Department of Energy',
        year: '2012',
        category: 'Court / Official Record',
      },
      {
        title: 'Spent Nuclear Fuel Storage in Dry Casks: Science, Engineering, and Security',
        url: 'https://www.nrc.gov/waste/spent-fuel-storage/dry-cask-storage.html',
        publisher: 'U.S. Nuclear Regulatory Commission',
        year: '2023',
        category: 'Court / Official Record',
      },
    ],
    tags: ['Energy & Climate', 'Science & Innovation', 'Governance', 'Philosophy & Ethics'],
    era: '1970–Present',
  },

  // Thesis 4A
  {
    id: 'thesis-nuc-geological-repositories',
    parentId: 'pillar-nuc-waste',
    kind: 'thesis',
    title: 'Deep Geological Disposal Solves Nuclear Waste: Finland’s Onkalo Proof of Concept',
    summary:
      'Tests whether deep geological repository engineering resolves the nuclear waste dilemma versus political NIMBYism and unprovable millennia-long institutional containment.',
    sections: [
      {
        heading: 'Onkalo and the KBS-3 Geological Barrier System',
        paragraphs: [
          'Engineers and geological scientists contend that the technical challenge of high-level nuclear waste disposal was solved decades ago through the **KBS-3 multi-barrier concept** developed in Sweden and Finland. The strategy relies on concentric, redundant passive barriers: spent fuel pellets of insoluble uranium dioxide are enclosed in cast-iron inserts, sealed within pure corrosion-resistant copper canisters, surrounded by swelling bentonite clay buffers, and entombed 450 meters underground in stable Precambrian crystalline granite.',
          'At that depth, groundwater movement is microscopic, oxygen is absent, and the bedrock has remained structurally inert for nearly two billion years—surviving ice ages, tectonic shifts, and asteroid impacts. By passive physics, even if a canister were breached after millennia, bentonite clay absorbs and retards isotope migration to harmless background rates.',
        ],
      },
      {
        heading: 'The Enduring Societal Challenge of Democratic Consent',
        paragraphs: [
          'Critics argue that while Finland and Sweden succeeded due to high institutional trust and small, consensual political cultures, the rest of the world remains mired in intractable political gridlock. In democratic societies, no local jurisdiction or state government willingly volunteers to host the nation’s high-level radioactive waste, resulting in intense **NIMBY (Not In My Backyard)** resistance.',
          'The collapse of America’s **Yucca Mountain** repository in Nevada—despite $15 billion in expenditures—demonstrated that geological viability is worthless without social and political durability. Consequently, over 90,000 metric tons of commercial spent fuel remain stranded in temporary pools and concrete dry casks across dozens of lakeshores, rivers, and coastal sites.',
        ],
      },
    ],
    details: [
      'Posiva’s Onkalo repository received final construction licensing from STUK in 2015 after achieving unanimous consent from the local Eurajoki municipal council.',
      'Sweden’s government approved its twin KBS-3 repository at Forsmark in 2022 following extensive local referendums and geological verification.',
      'Dry storage casks are engineered to withstand missile impacts, Category 5 hurricanes, 1,000°C fires, and severe earthquakes for over 100 years without release.',
    ],
    sources: [
      {
        title: 'Swedish Government Approves Final Repository for Spent Nuclear Fuel at Forsmark',
        url: 'https://www.skb.com/news/the-government-has-approved-the-final-repository-for-spent-nuclear-fuel/',
        publisher: 'Swedish Nuclear Fuel and Waste Management Co (SKB)',
        year: '2022',
        category: 'Court / Official Record',
      },
      {
        title: 'Deep Geological Repositories: The Technical and Social Challenges of Nuclear Waste',
        url: 'https://www.science.org/doi/10.1126/science.1256084',
        publisher: 'Science (Rodney C. Ewing)',
        year: '2015',
        category: 'Scholarship',
      },
    ],
    tags: ['Energy & Climate', 'Science & Innovation', 'Governance'],
    era: '2015–Present',
    relatedIds: ['thesis-nuc-waste-density-recycling'],
  },
  {
    id: 'pro-nuc-onkalo-deep-geological-success',
    parentId: 'thesis-nuc-geological-repositories',
    kind: 'pro',
    title: 'Finland’s Onkalo Repository and Proven Dry Cask Safety Settle the Waste Question',
    summary:
      'Finland’s Onkalo proves permanent geological disposal is technically and democratically achievable, while dry cask storage provides decades of safe, passive containment.',
    sections: [
      {
        heading: 'Onkalo: The World’s First Operational Permanent Repository',
        paragraphs: [
          'Finland’s **Onkalo repository** conclusively refutes the claim that humanity cannot solve nuclear waste. Located in Eurajoki, the repository was developed with the active partnership and democratic consent of the host municipality, which welcomed the high-skilled employment and long-term tax revenues. The Finnish Radiation and Nuclear Safety Authority (STUK) verified that even under extreme geological bounding models, maximum radiation doses to humans 100,000 years in the future would remain less than 1% of natural background radiation.',
          'With trial disposal operations successfully conducted in 2024 and final encapsulation commencing in 2025–2026, Finland has established the definitive global blueprint for permanent spent fuel entombment.',
        ],
      },
      {
        heading: 'Flawless Safety Record of Concrete-and-Steel Dry Storage Casks',
        paragraphs: [
          'Furthermore, interim spent fuel management is already exceptionally safe. After spending 5 to 7 years cooling in spent fuel pools, spent fuel assemblies are transferred into massive **welded stainless steel and reinforced concrete dry storage casks**. These monolithic casks are passively cooled by natural airflow, requiring zero electrical power, zero water circulation, and zero mechanical maintenance.',
          'In over 40 years of commercial dry cask deployment across the United States, Europe, and Asia—including through direct earthquakes, storm surges, and the Fukushima tsunami—not a single dry cask has ever suffered a structural breach or radioactive release to the environment.',
        ],
      },
    ],
    details: [
      'STUK modeling demonstrates that the copper canisters in Onkalo are expected to resist corrosion for at least 100,000 years in oxygen-free groundwater.',
      'Dry casks deployed at Fukushima Daiichi survived the 9.0 earthquake and 14-meter tsunami completely undamaged, retaining full containment integrity.',
      'Nuclear waste is the only industrial byproduct in the world where 100% of the toxic residue is tracked, accounted for, contained, and funded through escrow fees by law.',
    ],
    sources: [
      {
        title: 'Trial Run of Final Disposal of Spent Nuclear Fuel at Onkalo',
        url: 'https://www.posiva.fi/en/index/news/pressreleases/2024/trialrunoffinaldisposalbegins.html',
        publisher: 'Posiva Oy',
        year: '2024',
        category: 'Court / Official Record',
      },
      {
        title: 'Safety of Spent Nuclear Fuel Storage: Technical Report',
        url: 'https://www.iaea.org/publications/14715/safety-of-spent-fuel-storage',
        publisher: 'International Atomic Energy Agency',
        year: '2021',
        category: 'Primary Text / Treaty',
      },
    ],
    tags: ['Energy & Climate', 'Science & Innovation', 'Governance'],
    era: '2021–Present',
    relatedIds: ['con-nuc-political-paralysis-yucca-mountain'],
  },
  {
    id: 'con-nuc-political-paralysis-yucca-mountain',
    parentId: 'thesis-nuc-geological-repositories',
    kind: 'con',
    title: 'Yucca Mountain Paralysis, Million-Year Stewardship, and Deep Subterranean Ethics',
    summary:
      'Decades of political failure at Yucca Mountain reveal that stable democratic societies cannot guarantee million-year containment, leaving waste stranded in vulnerable surface casks.',
    sections: [
      {
        heading: 'The Yucca Mountain Debacle and the Illusion of Permanence',
        paragraphs: [
          'In 1987, the U.S. Congress passed the Nuclear Waste Policy Amendments Act—derisively termed the "Screw Nevada Bill"—designating **Yucca Mountain** as the nation’s sole repository without state consent. Despite spending over **$15 billion** and digging miles of subterranean exploratory tunnels, the project was defunded and cancelled in 2010 after ferocious bipartisan opposition led by Nevada Senator Harry Reid and local Native American tribes.',
          'More than 35 years after congressional mandate, the United States still possesses **zero permanent disposal pathways** for over 90,000 tons of commercial high-level spent fuel. This persistent failure proves that in large pluralistic democracies, political longevity does not match the radiological lifespan of transuranic waste.',
        ],
      },
      {
        heading: 'The Bioethical Problem of Deep-Time Nuclear Semiotics',
        paragraphs: [
          'High-level nuclear waste remains hazardous for a duration that dwarfs all of recorded human civilization (~5,000 years). Expecting current political institutions—which struggle to maintain 4-year fiscal budgets—to guarantee the safety of subterranean vaults over **10,000 to 100,000 years** is bioethically reckless.',
          'The U.S. Department of Energy’s **Human Interference Task Force** and the **Waste Isolation Pilot Plant (WIPP)** semiotics panels concluded that warning future humans (who may speak no known modern language and possess different cultural paradigms) not to drill into radioactive repositories is virtually insoluble. Leaving thousands of surface casks vulnerable to terrorist sabotage, rising sea levels, and social breakdown constitutes an unfair intergenerational hazard.',
        ],
      },
    ],
    details: [
      'The U.S. federal Judgment Fund has paid over $10 billion in damage settlements to utilities because the DOE failed its statutory duty to accept spent fuel by 1998.',
      'Surface dry casks are licensed for initial periods of 20 to 40 years and face vulnerability to stress corrosion cracking in salty coastal air.',
      'WIPP semiotics panels designed ominous physical monuments ("Spike Fields" and "Menacing Earthworks") in an attempt to communicate danger 10,000 years into the deep future.',
    ],
    sources: [
      {
        title: 'Permanent Markers Implementation Plan for the Waste Isolation Pilot Plant',
        url: 'https://wipp.energy.gov/',
        publisher: 'U.S. Department of Energy / Sandia National Laboratories',
        year: '2004',
        category: 'Court / Official Record',
      },
      {
        title: 'Uncertainty Underground: Yucca Mountain and the Nation’s High-Level Nuclear Waste',
        url: 'https://mitpress.mit.edu/9780262633321/uncertainty-underground/',
        publisher: 'MIT Press (Allison M. Macfarlane & Rodney C. Ewing)',
        year: '2006',
        category: 'Scholarship',
      },
    ],
    tags: ['Philosophy & Ethics', 'Governance', 'Energy & Climate'],
    era: '1987–Present',
    relatedIds: ['pro-nuc-onkalo-deep-geological-success'],
  },

  // Thesis 4B
  {
    id: 'thesis-nuc-waste-density-recycling',
    parentId: 'pillar-nuc-waste',
    kind: 'thesis',
    title: 'Extreme Waste Density & Fuel Reprocessing vs. Toxic Volume of Fossil & Solar Residues',
    summary:
      'Weighs the high energy density and recyclability of spent nuclear fuel against the economic cost and proliferation dangers of plutonium separation reprocessing.',
    sections: [
      {
        heading: 'Energy Density and Comparative Toxic Waste Arithmetic',
        paragraphs: [
          'Advocates argue that nuclear waste is the only energy waste stream that is comprehensively contained rather than dumped into the public atmosphere or unlined municipal landfills. In generating an equivalent amount of electricity, a 1,000 MW coal plant produces over **300,000 tons of toxic coal ash** containing arsenic, lead, mercury, and radioactive radon, dispersing millions of tons of gaseous CO2 into the biosphere.',
          'Even solar photovoltaics and wind generate immense physical material volumes: the International Renewable Energy Agency (**IRENA**) projects that cumulative decommissioned solar panel waste will reach **78 million metric tons by 2050**, containing toxic heavy metals like lead and cadmium that do not decay and are rarely economically recycled.',
        ],
      },
      {
        heading: 'Fast Breeder Reactors and Closed Fuel Cycles',
        paragraphs: [
          'Furthermore, "spent" nuclear fuel is not truly waste: **roughly 95% to 96% of the original potential energy** remains unconsumed within discharged fuel assemblies. Through chemical reprocessing (as practiced at **La Hague** in France) and recycling in **Fast Neutron Breeder Reactors**, the long-lived transuranic actinides can be fissioned into shorter-lived isotopes, generating carbon-free electricity while reducing the required geological storage footprint by 90% and shortening hazardous decay times to under 300 years.',
          'However, fuel reprocessing involves dissolved nitric acid extraction (**PUREX process**) that separates weapons-usable plutonium, escalating proliferation risks while costing significantly more than once-through direct disposal of cheap mined natural uranium.',
        ],
      },
    ],
    details: [
      'France currently reprocesses its spent nuclear fuel at Orano La Hague, recycling MOX (mixed oxide) fuel to supply ~10% of French nuclear electricity.',
      'IRENA (2016/2024) projects cumulative solar PV waste will exceed 78 million metric tons by 2050, dwarf nuclear spent fuel volumes by orders of magnitude.',
      'U.S. President Jimmy Carter banned commercial reprocessing in 1977 due to proliferation concerns following India’s 1974 "Smiling Buddha" nuclear test.',
    ],
    sources: [
      {
        title: 'End-of-Life Management: Solar Photovoltaic Panels',
        url: 'https://www.irena.org/publications/2016/Jun/End-of-life-management-Solar-Photovoltaic-Panels',
        publisher: 'International Renewable Energy Agency (IRENA) & IEA-PVPS',
        year: '2016',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'Management of Spent Nuclear Fuel and Its Waste Products',
        url: 'https://www.oecd-nea.org/jcms/pl_14838/spent-fuel-management',
        publisher: 'OECD Nuclear Energy Agency',
        year: '2020',
        category: 'Scholarship',
      },
    ],
    tags: ['Energy & Climate', 'Science & Innovation', 'Trade & Industry'],
    era: '1977–Present',
    relatedIds: ['thesis-nuc-geological-repositories'],
  },
  {
    id: 'pro-nuc-extreme-energy-density-recycling',
    parentId: 'thesis-nuc-waste-density-recycling',
    kind: 'pro',
    title: 'Extreme Energy Density and Fast Reactors: Turning "Waste" into Centuries of Clean Fuel',
    summary:
      'Nuclear fuel is recyclable: advanced fast-spectrum reactors can extract the remaining 95% of energy in spent fuel, powering civilization for centuries without new uranium mining.',
    sections: [
      {
        heading: 'Unlocking the 95% Remaining Energy in Spent Fuel',
        paragraphs: [
          'In once-through light water reactors, only roughly 5% of the uranium-235 is consumed before fission product poisons require fuel assembly replacement. The remaining material consists of valuable unburned uranium-238, uranium-235, and plutonium-239. Labeling this resource "waste" is the equivalent of burning 5% of a log in a fireplace and throwing the unburned 95% into a landfill.',
          'Fast-neutron reactors—such as the **BN-800** in Russia, **Natrium** developed by TerraPower in the U.S., and the **EBR-II** prototype demonstrated at Idaho National Laboratory—operate with high-energy neutrons capable of fissioning all transuranic actinides. This unlocks the remaining 95% of energy, rendering spent fuel stockpiles an immense, sovereign strategic fuel reserve capable of powering advanced nations for centuries without mining a single additional ton of uranium.',
        ],
      },
      {
        heading: 'Compressing Radiotoxicity from 100,000 Years to 300 Years',
        paragraphs: [
          'When transuranic actinides (plutonium, americium, curium) are fissioned in fast reactors, the remaining radioactive waste consists exclusively of lighter fission products (such as cesium-137 and strontium-90). These isotopes have half-lives of approximately 30 years and decay to safe background levels in roughly **300 years** (10 half-lives).',
          'This dramatically alters the bioethics of nuclear waste stewardship: instead of requiring deep geological repositories that must withstand million-year deep-time epochs, engineering containment needs to endure for only three centuries—a timeframe fully within the demonstrated durability of Roman concrete, medieval cathedrals, and modern corporate archives.',
        ],
      },
    ],
    details: [
      'The U.S. commercial spent fuel inventory contains enough potential energy in depleted uranium and actinides to power the entire United States for over 400 years.',
      'Russia’s commercial BN-800 fast-breeder reactor at Beloyarsk operates on a 100% recycled MOX (mixed oxide) core, demonstrating industrial-scale closed fuel cycling.',
      'TerraPower’s Natrium reactor received over $1.6 billion in DOE Advanced Reactor Demonstration Program matching funds to construct a commercial sodium fast reactor in Wyoming.',
    ],
    sources: [
      {
        title: 'Plentiful Energy: The Story of the Integral Fast Reactor (EBR-II)',
        url: 'https://www.thesciencecouncil.com/plentiful-energy/',
        publisher: 'CreateSpace (Charles E. Till & Yoon Il Chang)',
        year: '2011',
        category: 'Scholarship',
      },
      {
        title: 'Status of Fast Reactor Research and Technology Development',
        url: 'https://www.iaea.org/publications/14717/status-of-fast-reactor-research-and-technology-development',
        publisher: 'International Atomic Energy Agency',
        year: '2021',
        category: 'Primary Text / Treaty',
      },
    ],
    tags: ['Science & Innovation', 'Energy & Climate', 'Empirical Studies'],
    era: '2011–Present',
    relatedIds: ['con-nuc-plutonium-separation-costs'],
  },
  {
    id: 'con-nuc-plutonium-separation-costs',
    parentId: 'thesis-nuc-waste-density-recycling',
    kind: 'con',
    title: 'Reprocessing Separation Economics and Proliferation of Separated Plutonium',
    summary:
      'Reprocessing spent fuel costs billions more than direct burial while generating liquid chemical waste and creating dangerous stockpiles of weapons-usable plutonium.',
    sections: [
      {
        heading: 'The Crushing Financial Folly of Chemical Reprocessing',
        paragraphs: [
          'Every independent economic evaluation of spent fuel reprocessing—including analyses by **Harvard’s Belfer Center** and the **National Academy of Sciences**—concludes that reprocessing is vastly more expensive than once-through direct disposal. Natural uranium remains abundant and cheap on international spot markets ($40–$80/lb), making the complex chemical dissolution of spent fuel in boiling nitric acid economically absurd.',
          'France’s state-owned nuclear company Areva (now Orano) required billions in state bailouts, and the UK completely abandoned commercial reprocessing at **Sellafield (THORP)** in 2018 after concluding the facility generated staggering environmental cleanup liabilities exceeding £100 billion. Reprocessing simply transforms compact solid fuel rods into millions of liters of corrosive, high-level liquid waste that must be expensively vitrified into glass logs.',
        ],
      },
      {
        heading: 'Normalizing the Proliferation of Weapon-Usable Fissile Materials',
        paragraphs: [
          'Worse than its financial failure, reprocessing fatally undermines the global nuclear nonproliferation regime. The chemical separation of plutonium-239 creates massive civilian stockpiles that eliminate the technical barrier to nuclear weapons production. In Japan, the commercial **Rokkasho Reprocessing Plant** has suffered 26 separate construction delays over three decades while costing over $25 billion.',
          'If commercial reprocessing is legitimized as standard environmental stewardship, non-nuclear weapon states throughout volatile regions can legitimately construct industrial plutonium separation plants, setting up a hair-trigger world where dozens of states sit within days of atomic bomb breakout capability.',
        ],
      },
    ],
    details: [
      'Harvard Belfer Center calculations show electricity generated from recycled MOX fuel costs over 3x to 5x more than electricity from once-through low-enriched uranium fuel.',
      'The UK Nuclear Decommissioning Authority estimated the cleanup of the legacy Sellafield nuclear reprocessing site will cost over £136 billion over 120 years.',
      'The Rokkasho Reprocessing Plant in Japan was originally slated to open in 1997; as of 2024, its operational date has been delayed 26 times.',
    ],
    sources: [
      {
        title: 'The Economics of Reprocessing vs. Direct Disposal of Spent Nuclear Fuel',
        url: 'https://www.belfercenter.org/publication/economics-reprocessing-vs-direct-disposal-spent-nuclear-fuel',
        publisher: 'Harvard Kennedy School Belfer Center (Matthew Bunn et al.)',
        year: '2003',
        category: 'Scholarship',
      },
      {
        title: 'Nuclear Decommissioning Authority Annual Report and Accounts 2023–2024',
        url: 'https://www.gov.uk/government/organisations/nuclear-decommissioning-authority',
        publisher: 'UK Department for Energy Security and Net Zero',
        year: '2024',
        category: 'Court / Official Record',
      },
    ],
    tags: ['Economics', 'National Security', 'Governance'],
    era: '2003–Present',
    relatedIds: ['pro-nuc-extreme-energy-density-recycling'],
  },
];

export const nuclearEnergyDataset: DebateGraphDataset = {
  id: 'nuclear-energy',
  version: '1.0.0',
  shortTitle: 'Nuclear Power',
  title: 'Nuclear Energy: Baseload Essential vs. Costly Hazard',
  subtitle:
    'Zero-carbon firm energy & energy abundance vs. catastrophic meltdown risks, waste & high capital cost',
  searchPlaceholder:
    'Search baseload, SMRs, Vogtle, Dunkelflaute, Chernobyl, Onkalo, Lovins... (/)',
  epistemologyNote:
    'Nuclear energy policy combines nuclear physics, probabilistic risk assessment (PRA), power-system capacity expansion modeling (Joule, NREL, MIT Energy Initiative), levelized vs. system cost metrics, and radiological epidemiology (UNSCEAR, WHO).',
  availableTags: [
    'Energy & Climate',
    'Science & Innovation',
    'AI & Technology',
    'Macroeconomics',
    'Economics',
    'Empirical Studies',
    'Regulation & Markets',
    'National Security',
    'Bioethics',
    'Governance',
    'Philosophy & Ethics',
    'International Law',
    'Trade & Industry',
  ],
  shortPillarLabels: {
    'pillar-nuc-baseload': '1. Baseload & Reliability',
    'pillar-nuc-economics': '2. Capital Cost & Delays',
    'pillar-nuc-safety': '3. Safety & Proliferation',
    'pillar-nuc-waste': '4. Waste & Long-Term Fuel',
  },
  lastUpdated: '2026-03-30',
  nodes: nuclearEnergyNodes,
};
