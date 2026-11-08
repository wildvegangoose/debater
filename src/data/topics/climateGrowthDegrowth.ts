import { DebateGraphDataset, DebateNode } from '../../types/debate';

export const climateGrowthDegrowthNodes: DebateNode[] = [
  // ============================================================================
  // ROOT NODE
  // ============================================================================
  {
    id: 'root-climate-growth-degrowth',
    parentId: null,
    kind: 'root',
    title: 'Climate Strategy: Green Growth vs. Degrowth',
    summary:
      'The defining macroeconomic debate of the ecological transition: evaluating whether technological innovation, clean electrification, and market-driven decoupling can solve climate change while expanding economic prosperity, or whether biophysical planetary limits necessitate planned economic contraction and post-capitalist provisioning.',
    sections: [
      {
        heading: 'The Green Growth Paradigm: Decoupling and Clean Abundance',
        paragraphs: [
          'The mainstream international climate consensus—championed by the **OECD**, the **World Bank**, the **European Commission (European Green Deal)**, and ecomodernist researchers such as **Hannah Ritchie** (*Not the End of the World*) and **Andrew McAfee** (*More from Less*)—asserts that humanity can achieve deep decarbonization through **"Green Growth"**. By pricing negative externalities, subsidizing clean research and development, and deploying steep manufacturing learning curves under **Wright’s Law**, advanced industrial economies can achieve **absolute decoupling**: growing real gross domestic product (GDP) while driving greenhouse gas emissions and material toxicity toward zero.',
          'Proponents point to over 35 industrialized nations that have already reduced territorial and consumption-based carbon emissions over decades while expanding real GDP per capita, arguing that economic growth provides the indispensable capital, tax revenue, and scientific infrastructure needed to develop and deploy multi-trillion-dollar clean technologies.',
        ],
      },
      {
        heading: 'The Degrowth Counter-Paradigm: Planetary Boundaries and Post-Capitalism',
        paragraphs: [
          'Conversely, ecological economists and degrowth scholars led by **Jason Hickel** (*Less is More*), **Giorgos Kallis**, and **Tim Jackson** (*Prosperity Without Growth*) argue that perpetual exponential GDP growth on a finite planet is a physical and thermodynamic impossibility. Grounded in the **Stockholm Resilience Centre’s Planetary Boundaries framework** (Johan Rockström), degrowth theorists emphasize that climate change is merely one symptom of broader **ecological overshoot**, alongside biodiversity collapse, freshwater depletion, nitrogen/phosphorus cycle disruption, and ocean acidification.',
          'They maintain that empirical decoupling is far too slow to prevent catastrophic warming beyond 1.5°C or 2.0°C, and that technological efficiency gains are inevitably canceled out by **Jevons Paradox** (where lower unit costs drive higher aggregate resource consumption). Instead, they advocate an equitable, planned downscaling of throughput in high-income economies, replacing GDP obsession with **Universal Basic Services (UBS)**, shorter working weeks, and democratic post-capitalist provisioning.',
        ],
      },
    ],
    details: [
      'Over 35 high-income nations have decoupled real GDP growth from consumption-based carbon emissions between 2005 and 2024 (Hubacek et al., Lancet Planetary Health 2021).',
      'The Stockholm Resilience Centre declared in 2023 that six of the nine planetary boundaries defining the "safe operating space for humanity" have already been breached.',
      'Global material extraction exceeded 100 billion metric tons annually in the 2020s, having tripled since 1970 (UNEP Global Resources Outlook 2024).',
      'Featured in landmark Oxford Union and Intelligence Squared debates pitting technological optimism against radical ecological downscaling.',
    ],
    sources: [
      {
        title: 'Not the End of the World: How We Can Be the First Generation to Build a Sustainable Planet',
        url: 'https://ourworldindata.org/not-the-end-of-the-world',
        publisher: 'Chatto & Windus / Our World in Data (Hannah Ritchie)',
        year: '2024',
        category: 'Scholarship',
      },
      {
        title: 'Less is More: How Degrowth Will Save the World',
        url: 'https://www.jasonhickel.org/less-is-more',
        publisher: 'William Heinemann (Jason Hickel)',
        year: '2020',
        category: 'Scholarship',
      },
      {
        title: 'Earth Beyond Six of Nine Planetary Boundaries',
        url: 'https://www.science.org/doi/10.1126/sciadv.adh2458',
        publisher: 'Science Advances (Katherine Richardson, Johan Rockström, et al.)',
        year: '2023',
        category: 'Scholarship',
      },
      {
        title: 'Intelligence Squared Debate: Economic Growth is the Only Solution to Climate Change',
        url: 'https://www.intelligencesquared.com/',
        publisher: 'Intelligence Squared',
        year: '2022',
        category: 'Debate / Broadcast',
      },
    ],
    tags: ['Energy & Climate', 'Economics', 'Macroeconomics', 'Philosophy & Ethics', 'Empirical Studies'],
    era: '1972–Present',
  },

  // ============================================================================
  // PILLAR 1: Absolute Decoupling & Technological Solutions
  // ============================================================================
  {
    id: 'pillar-cld-decoupling',
    parentId: 'root-climate-growth-degrowth',
    kind: 'pillar',
    title: 'Absolute Decoupling & Technological Solutions',
    summary:
      'Investigates the empirical reality of absolute decoupling—separating economic expansion from greenhouse gas emissions and resource throughput—driven by clean electrification, dematerialization, and Wright’s Law manufacturing cost drops.',
    sections: [
      {
        heading: 'The Mechanics of Absolute Decoupling',
        paragraphs: [
          'At the foundation of green growth economics lies the distinction between **relative decoupling** (where resource use grows at a slower rate than GDP) and **absolute decoupling** (where GDP grows while absolute resource consumption and emissions decline in total terms). Critics historically claimed that wealthy nations only achieved territorial decoupling by "offshoring" their carbon-intensive heavy manufacturing to developing nations like China and India.',
          'However, comprehensive **consumption-based trade-adjusted carbon accounting** conducted by the **Global Carbon Project** and analyzed by **Hannah Ritchie (2024)** proves that advanced economies—including the United Kingdom, France, Germany, Sweden, and the United States—have achieved sustained absolute decoupling. Since 1990, the UK grew its real GDP per capita by over 70% while slashing its consumption-based emissions by more than 40%.',
        ],
      },
      {
        heading: 'Wright’s Law, Electrification, and Capital Reallocation',
        paragraphs: [
          'This decoupling is propelled by the exponential physics of clean technology learning curves. Under **Wright’s Law**, every doubling of cumulative manufacturing capacity drives down the unit cost of solar photovoltaics by ~24%, lithium-ion batteries by ~20%, and wind turbines by ~15%.',
          'Furthermore, moving from fossil combustion to electrification eliminates massive thermodynamic waste: an internal combustion vehicle wastes 70%–80% of fuel energy as rejected heat, whereas an electric drivetrain operates at >85% efficiency. In *More from Less* (2019), MIT researcher **Andrew McAfee** demonstrates that digital optimization and lightweight materials allow advanced economies to use less physical mass of paper, timber, metals, and fertilizer even as overall output rises.',
        ],
      },
    ],
    details: [
      'Between 1990 and 2022, the United Kingdom cut territorial emissions by 49% and consumption emissions by ~40% while real GDP grew 75% (UK ONS 2023).',
      'Solar PV module prices dropped by 90% between 2010 and 2024, representing the steepest sustained cost decline in the history of human energy production.',
      'Electrifying transportation, home heat, and industry reduces primary energy requirements by 40%–50% due to the elimination of thermal waste heat (Rewiring America 2022).',
      'Degrowth critics argue that absolute decoupling rates are mathematically accelerating and will outpace fossil depletion via market substitution.',
    ],
    sources: [
      {
        title: 'Evidence of Absolute Decoupling in Consumption-Based CO2 Emissions',
        url: 'https://www.thelancet.com/journals/lanplh/article/PIIS2542-5196(21)00205-8/fulltext',
        publisher: 'The Lancet Planetary Health (Klaus Hubacek, et al.)',
        year: '2021',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'More from Less: The Surprising Story of How We Learned to Prosper Using Fewer Resources',
        url: 'https://www.simonandschuster.com/books/More-from-Less/Andrew-McAfee/9781982103576',
        publisher: 'Scribner (Andrew McAfee)',
        year: '2019',
        category: 'Scholarship',
      },
      {
        title: 'Empirical Analysis of Decoupling Economic Growth from CO2 Emissions in OECD Countries',
        url: 'https://www.oecd-ilibrary.org/environment/environment-working-papers_19970900',
        publisher: 'OECD Publishing',
        year: '2023',
        category: 'Court / Official Record',
      },
    ],
    tags: ['Energy & Climate', 'Economics', 'Empirical Studies', 'Macroeconomics'],
    era: '1990–Present',
  },

  // Thesis 1A
  {
    id: 'thesis-cld-empirical-decoupling',
    parentId: 'pillar-cld-decoupling',
    kind: 'thesis',
    title: 'Absolute Decoupling of GDP from Emissions in Advanced Economies',
    summary:
      'Evaluates empirical data showing over 35 nations growing GDP while slashing consumption-adjusted emissions versus the ecological critique that decoupling velocity is mathematically insufficient to avert 1.5°C.',
    sections: [
      {
        heading: 'The Empirical Reality of Consumption-Based Decoupling',
        paragraphs: [
          'For decades, ecological critics maintained that reported emissions cuts in wealthy countries were a statistical mirage created by exporting dirty manufacturing to the Global South while importing finished goods. However, modern multi-regional input-output (MRIO) datasets tracking **consumption-based emissions**—which attribute all embodied carbon from Chinese factories or shipping to the final consumer in London or New York—definitively refute this critique.',
          'Between 2005 and 2022, over 30 OECD economies achieved sustained absolute decoupling, reducing consumption emissions by 20% to 45% while growing real GDP by 15% to 40%. The transition from coal to gas, wind, and solar, alongside energy efficiency standards in buildings and appliances, proved that economic value creation can be structurally detached from carbon molecules.',
        ],
      },
      {
        heading: 'The Insufficiency of Historical Decoupling Rates',
        paragraphs: [
          'In contrast, ecological economists **Jason Hickel and Giorgos Kallis (2020, *New Political Economy*)** demonstrate that while absolute decoupling exists, its historical velocity is catastrophically inadequate. In decoupled nations, consumption emissions have declined at roughly 1% to 2.5% per year, whereas the Intergovernmental Panel on Climate Change (IPCC) carbon budget for **1.5°C requires sustained reductions of 8% to 12% annually**.',
          'Because compounding GDP growth continuously expands the absolute size of the economic pie, clean energy must run on a faster treadmill just to offset newly created demand. They argue that attempting to achieve 10% annual emission cuts while chasing 2%–3% compound GDP growth is mathematically impossible without engineering deep structural demand reductions.',
        ],
      },
    ],
    details: [
      'Hubacek et al. (2021) confirmed 32 developed nations achieved absolute decoupling of consumption-based CO2 emissions between 2005 and 2015.',
      'IPCC Sixth Assessment Report requires global CO2 emissions to fall by 43% by 2030 relative to 2019 to maintain a 50% chance of limiting warming to 1.5°C.',
      'Hickel & Kallis calculated that at a 2% annual GDP growth rate, clean energy buildout rates would need to occur 5x to 10x faster than historical peak deployments.',
    ],
    sources: [
      {
        title: 'Is Green Growth Possible?',
        url: 'https://www.tandfonline.com/doi/abs/10.1080/13563467.2019.1598964',
        publisher: 'New Political Economy (Jason Hickel & Giorgos Kallis)',
        year: '2020',
        category: 'Scholarship',
      },
      {
        title: 'Global Carbon Budget 2023',
        url: 'https://essd.copernicus.org/articles/15/5301/2023/',
        publisher: 'Earth System Science Data (Pierre Friedlingstein et al.)',
        year: '2023',
        category: 'Empirical / Economic Study',
      },
    ],
    tags: ['Energy & Climate', 'Economics', 'Empirical Studies'],
    era: '2005–Present',
    relatedIds: ['thesis-cld-dematerialization-wrights-law'],
  },
  {
    id: 'pro-cld-hannah-ritchie-empirical-decoupling',
    parentId: 'thesis-cld-empirical-decoupling',
    kind: 'pro',
    title: 'Hannah Ritchie and Global Data: Over 35 Nations Decouple GDP from Carbon',
    summary:
      'Rigorous consumption-based trade data proves high-income societies are growing real wealth while shrinking their aggregate environmental footprint and driving carbon emissions down.',
    sections: [
      {
        heading: 'Shattering the Myth of Offshored Emissions',
        paragraphs: [
          'In ***Not the End of the World* (2024)**, Oxford researcher **Hannah Ritchie** provides comprehensive empirical data dismantling the core assertion of ecological defeatism. Using trade-adjusted consumption datasets from the Global Carbon Project, Ritchie shows that per-capita emissions in the United Kingdom, the United States, and the European Union have fallen to levels not seen since the mid-19th century or early 20th century—even while standard of living, lifespans, and real GDP reached historical zeniths.',
          'Crucially, this decline is not a statistical artifact of closing domestic factories and importing goods from developing nations: the UK’s consumption-based emissions peaked in 2007 and have plunged by over **40%**, confirming that modern technological substitution and energy efficiency produce genuine absolute decoupling.',
        ],
      },
      {
        heading: 'Decoupling Across Non-Carbon Environmental Indicators',
        paragraphs: [
          'Decoupling extends far beyond greenhouse gases. Ritchie documents how advanced nations have achieved absolute decoupling in **sulfur dioxide and nitrogen oxide air pollution** (down 80%–90% since 1970), **agricultural land use** (peaking globally as crop yields soar), and **deforestation** (wealthy nations are actively experiencing net reforestation).',
          'Abandoning economic growth would remove the capital surplus and R&D pipelines required to manufacture clean technologies, leaving developing nations stranded in carbon-intensive poverty.',
        ],
      },
    ],
    details: [
      'U.S. per capita CO2 emissions peaked in 1973 and are now lower than in 1950, despite real GDP per capita tripling over that period (Our World in Data).',
      'The United Kingdom’s per capita emissions in 2023 were roughly 5 tons CO2, equivalent to per-capita emissions in 1858 at the height of the Victorian Industrial Revolution.',
      'Global agricultural land use has peaked and flattened despite global population increasing by billions, thanks to synthetic fertilizers, genetic crop breeding, and precision tractors.',
    ],
    sources: [
      {
        title: 'Not the End of the World: How We Can Be the First Generation to Build a Sustainable Planet',
        url: 'https://ourworldindata.org/not-the-end-of-the-world',
        publisher: 'Our World in Data / Chatto & Windus (Hannah Ritchie)',
        year: '2024',
        category: 'Scholarship',
      },
      {
        title: 'Consumption-Based CO2 Emissions: Trends and Drivers Across Nations',
        url: 'https://www.nature.com/articles/nclimate2872',
        publisher: 'Nature Climate Change',
        year: '2016',
        category: 'Empirical / Economic Study',
      },
    ],
    tags: ['Energy & Climate', 'Empirical Studies', 'Macroeconomics'],
    era: '2016–Present',
    relatedIds: ['con-cld-hickel-kallis-insufficient-rate'],
  },
  {
    id: 'con-cld-hickel-kallis-insufficient-rate',
    parentId: 'thesis-cld-empirical-decoupling',
    kind: 'con',
    title: 'Hickel and Kallis: Decoupling Rates Are Mathematically Too Slow to Avoid 1.5°C',
    summary:
      'Historical decoupling rates of 1%–2% per year cannot deliver the 8%–12% annual reductions mandated by physics, making aggregate economic contraction necessary.',
    sections: [
      {
        heading: 'The Arithmetic of Carbon Budget Depletion',
        paragraphs: [
          'In a widely cited systematic review published in *The Lancet Planetary Health*, **Jason Hickel and Jefim Vogel (2023)** evaluated the 11 high-income countries that achieved absolute decoupling between 2013 and 2019. They found that even at their best historical decoupling rates, these nations would take an average of **over 220 years to reduce emissions by 95%**, burning through more than **27 times their fair-share carbon budget** for 1.5°C.',
          'To align with Paris Agreement obligations without relying on unproven, speculative planetary-scale carbon removal, high-income nations must reduce emissions at rates exceeding **10% to 15% per year**. Attempting to achieve these cuts while pursuing 2%–3% compound GDP growth requires technological substitution rates that have never occurred in industrial history.',
        ],
      },
      {
        heading: 'The Compounding Growth Treadmill',
        paragraphs: [
          'Grounded in exponential mathematics, a 3% annual GDP growth rate means an economy doubles in physical and financial scale every 24 years, quadruples in 48 years, and grows eightfold in 72 years. Chasing compound growth on a planetary sphere forces clean energy buildouts onto a runaway treadmill: every newly built solar panel or battery factory must first work to meet the burgeoning energy demands of new consumer electronics, datacenters, and aviation before it can displace existing fossil infrastructure.',
          'Therefore, reducing aggregate energy demand and downscaling low-social-value production (such as private aviation, fast fashion, and military expenditures) is the only realistic way to bring emissions down within safe physical timelines.',
        ],
      },
    ],
    details: [
      'Vogel & Hickel (Lancet Planetary Health 2023) demonstrated no high-income country achieved decoupling rates anywhere near fast enough to comply with Paris 1.5°C equity commitments.',
      'A 3% compound annual growth rate expands an economy by a factor of 19 over a single century.',
      'The IPCC Sixth Assessment Report (2022) acknowledged for the first time that "degrowth" and demand-reduction strategies lower transition risks compared to heavy reliance on carbon dioxide removal (CDR).',
    ],
    sources: [
      {
        title: 'Is Green Growth Happening? An Empirical Analysis of High-Income Countries vs. Paris Targets',
        url: 'https://www.thelancet.com/journals/lanplh/article/PIIS2542-5196(23)00174-2/fulltext',
        publisher: 'The Lancet Planetary Health (Jefim Vogel & Jason Hickel)',
        year: '2023',
        category: 'Scholarship',
      },
      {
        title: 'IPCC AR6 Working Group III: Chapter 5 (Demand, Services, and Social Aspects of Mitigation)',
        url: 'https://www.ipcc.ch/report/ar6/wg3/chapter/chapter-5/',
        publisher: 'Intergovernmental Panel on Climate Change',
        year: '2022',
        category: 'Scholarship',
      },
    ],
    tags: ['Energy & Climate', 'Economics', 'Empirical Studies'],
    era: '2020–Present',
    relatedIds: ['pro-cld-hannah-ritchie-empirical-decoupling'],
  },

  // Thesis 1B
  {
    id: 'thesis-cld-dematerialization-wrights-law',
    parentId: 'pillar-cld-decoupling',
    kind: 'thesis',
    title: 'Clean Electrification, Wright’s Law & Dematerialization vs. Jevons Paradox',
    summary:
      'Weighs the thesis that manufacturing learning curves and digital efficiency achieve physical dematerialization against Jevons Paradox and rebound consumption.',
    sections: [
      {
        heading: 'Dematerialization and the Power of Wright’s Law',
        paragraphs: [
          'Technology analysts and ecomodernists emphasize that advanced capitalism is experiencing structural **dematerialization**: the substitution of information, algorithms, and microelectronics for heavy physical matter. In *More from Less*, **Andrew McAfee** demonstrates that the U.S. economy has reached "peak stuff": total consumption of crucial commodities like timber, paper, steel, aluminum, copper, and fertilizer has plateaued or declined over the past two decades even as population and GDP climbed.',
          'This dynamic is accelerated by **Wright’s Law**, which dictates that manufacturing costs decline predictably with cumulative volume. Clean technology is not an extractive commodity subject to Ricardian diminishing returns (like drilling deeper for depleting oil reserves); it is a manufactured technology that experiences permanent cost collapses through serial fabrication and engineering optimization.',
        ],
      },
      {
        heading: 'The Jevons Paradox and Rebound Effects',
        paragraphs: [
          'Ecological economists counter with the foundational insight of **William Stanley Jevons (1865, *The Coal Question*)**: increases in resource efficiency do not lead to decreased resource consumption; rather, they lower the implicit cost of the resource, spurring economic expansion and driving higher aggregate throughput (**the rebound effect**).',
          'When energy becomes cheaper and more efficient through LEDs or batteries, consumers do not simply bank the savings; they buy bigger cars, illuminate entire building facades overnight, travel further, and construct massive, energy-devouring artificial intelligence datacenters. Without legally binding caps on physical extraction, market efficiency merely accelerates total resource exploitation.',
        ],
      },
    ],
    details: [
      'Total U.S. consumption of 66 out of 72 essential industrial minerals identified by the USGS has peaked and begun absolute decline (USGS / McAfee 2019).',
      'Solar PV module prices dropped from ~$100/watt in 1976 to ~$0.10/watt in 2024, conforming tightly to Wright’s Law learning curves.',
      'Studies of energy rebound effects (Sorrell et al. 2020) find macroeconomic rebounds frequently erode 50% or more of engineering energy efficiency savings.',
    ],
    sources: [
      {
        title: 'The Coal Question: An Inquiry Concerning the Progress of the Nation',
        url: 'https://www.econlib.org/library/YPDBooks/Jevons/jvnCQ.html',
        publisher: 'Macmillan and Co. (William Stanley Jevons)',
        year: '1865',
        category: 'Scholarship',
      },
      {
        title: 'Energy Rebound and Economic Growth: A Review of the Evidence',
        url: 'https://www.sciencedirect.com/science/article/pii/S136403212030048X',
        publisher: 'Renewable and Sustainable Energy Reviews (Steve Sorrell et al.)',
        year: '2020',
        category: 'Scholarship',
      },
    ],
    tags: ['Science & Innovation', 'Economics', 'Energy & Climate'],
    era: '1865–Present',
    relatedIds: ['thesis-cld-critical-minerals-footprint'],
  },
  {
    id: 'pro-cld-wrights-law-mcafee-dematerialization',
    parentId: 'thesis-cld-dematerialization-wrights-law',
    kind: 'pro',
    title: 'Andrew McAfee: Capitalism Has Decoupled from Physical Mass via "Peak Stuff"',
    summary:
      'Digital substitution, precision engineering, and Wright’s Law prove that advanced market capitalism allows humanity to prosper using fewer physical tons of raw materials.',
    sections: [
      {
        heading: 'The Evidence for "Peak Stuff" in Advanced Economies',
        paragraphs: [
          'In *More from Less* (2019), **Andrew McAfee** utilizes physical consumption statistics from the **United States Geological Survey (USGS)** to demonstrate a profound historical reversal: for the first two centuries of the Industrial Revolution, GDP growth moved in lockstep with total physical tons of extracted materials. However, around the year 2000, that relationship snapped.',
          'The United States now uses less steel, less copper, less fertilizer, less timber, and less paper each year in absolute terms than it did at its historical peak, even while its population grew by tens of millions and real economic output expanded by trillions of dollars. A smartphone today consolidates and replaces physical cameras, camcorders, landline phones, answering machines, encyclopedias, radios, flashlights, and GPS units, replacing thousands of pounds of mined materials with tiny silicone microchips.',
        ],
      },
      {
        heading: 'Electrification Eliminates the Massive Waste of Combustion',
        paragraphs: [
          'Furthermore, the transition to clean energy represents a colossal reduction in aggregate physical mass extraction. A coal-fired power station consumes trainloads of thousands of tons of coal every single day, dispersing millions of tons of gaseous ash and CO2 into the atmosphere.',
          'A solar panel or wind turbine, once manufactured, requires zero continuous fuel extraction for 30 years. As clean technology prices drop along **Wright’s Law curves**, deploying clean energy actually decreases the total mass of materials humanity moves, refuting the ecological claim that green growth requires infinite material throughput.',
        ],
      },
    ],
    details: [
      'USGS data shows total U.S. steel consumption peaked in 2000 and has declined by ~15%, while real GDP grew over 50%.',
      'The average weight of aluminum beverage cans decreased by more than 80% since their introduction due to computational structural optimization.',
      'Electric heat pumps deliver 3 to 4 units of thermal heat for every 1 unit of electrical energy consumed, achieving thermodynamic efficiencies exceeding 300%.',
    ],
    sources: [
      {
        title: 'More from Less: The Surprising Story of How We Learned to Prosper Using Fewer Resources',
        url: 'https://www.simonandschuster.com/books/More-from-Less/Andrew-McAfee/9781982103576',
        publisher: 'Scribner (Andrew McAfee)',
        year: '2019',
        category: 'Scholarship',
      },
      {
        title: 'Historical Statistics for Mineral and Material Commodities in the United States',
        url: 'https://www.usgs.gov/centers/national-minerals-information-center/historical-statistics-mineral-and-material-commodities',
        publisher: 'U.S. Geological Survey (USGS)',
        year: '2023',
        category: 'Court / Official Record',
      },
    ],
    tags: ['Science & Innovation', 'Trade & Industry', 'Economics'],
    era: '2019–Present',
    relatedIds: ['con-cld-jevons-paradox-rebound-effects'],
  },
  {
    id: 'con-cld-jevons-paradox-rebound-effects',
    parentId: 'thesis-cld-dematerialization-wrights-law',
    kind: 'con',
    title: 'Jevons Paradox & Rebound Effects: Efficiency Drives Higher Absolute Consumption',
    summary:
      'Technological efficiency lowers unit costs, which stimulates economic expansion and drives higher aggregate material extraction, proving efficiency alone cannot cure overshoot.',
    sections: [
      {
        heading: 'The Relentless Mechanism of the Rebound Effect',
        paragraphs: [
          'Ecological economists emphasize that claiming "dematerialization" based on select wealthy nations commits the fallacy of selective accounting. Global extraction of raw materials—including biomass, fossil fuels, metal ores, and non-metallic minerals—surpassed **100 billion metric tons per year in 2020**, having tripled since 1970 according to the **UN Environment Programme (UNEP) International Resource Panel**.',
          'This explosive growth is the direct consequence of **Jevons Paradox**: making silicon microchips or battery cells cheaper does not cause society to settle for modest sufficiency. Instead, it drives the installation of billions of surveillance sensors, disposable smart devices, autonomous delivery vehicles, and energy-hungry AI server farms, multiplying absolute resource demands.',
        ],
      },
      {
        heading: 'Global Material Footprint vs. Local Domestic Material Consumption',
        paragraphs: [
          'Studies in *Nature Geoscience* and *PNAS* by **Thomas Wiedmann and Stefan Bringezu** track humanity’s comprehensive **Material Footprint (MF)**, which includes all indirect upstream mining, overburden, and processing waste embodied in consumer goods. They show that while domestic material consumption (DMC) may appear to plateau in the West, wealthy nations’ global material footprints continue to expand in lockstep with real GDP.',
          'No high-income country on Earth has achieved absolute decoupling of its overall material footprint from economic growth, confirming that capital accumulation inherently demands biophysical extraction.',
        ],
      },
    ],
    details: [
      'UNEP Global Resources Outlook (2024) reported global material extraction grew from 30 billion tons in 1970 to 106 billion tons in 2024, with high-income countries consuming 6x more per capita than low-income states.',
      'Wiedmann et al. (PNAS 2015) showed that when upstream raw material requirements are fully attributed, no decoupling of GDP from material footprint has occurred globally.',
      'Global computing and datacenter electricity use is growing at over 15% annually, driven by machine learning model training that offsets gains from hardware efficiency.',
    ],
    sources: [
      {
        title: 'Global Resources Outlook 2024: Bend the Trend – Resource Use for the World We Want',
        url: 'https://www.unep.org/resources/Global-Resource-Outlook-2024',
        publisher: 'UN Environment Programme International Resource Panel',
        year: '2024',
        category: 'Watchdog / NGO',
      },
      {
        title: 'The Material Footprint of Nations',
        url: 'https://www.pnas.org/doi/10.1073/pnas.1220362110',
        publisher: 'Proceedings of the National Academy of Sciences (Thomas Wiedmann et al.)',
        year: '2015',
        category: 'Scholarship',
      },
    ],
    tags: ['Economics', 'Energy & Climate', 'Empirical Studies'],
    era: '2015–Present',
    relatedIds: ['pro-cld-wrights-law-mcafee-dematerialization'],
  },

  // ============================================================================
  // PILLAR 2: Planetary Boundaries & Ecological Overshoot
  // ============================================================================
  {
    id: 'pillar-cld-limits',
    parentId: 'root-climate-growth-degrowth',
    kind: 'pillar',
    title: 'Planetary Boundaries & Ecological Overshoot',
    summary:
      'Examines the biophysical carrying capacity of the Earth system—evaluating the breach of six of nine planetary boundaries and critical mineral bottlenecks versus technological substitution and circular economy engineering.',
    sections: [
      {
        heading: 'The Nine Planetary Boundaries Framework',
        paragraphs: [
          'Pioneered by **Johan Rockström** and **Will Steffen** at the **Stockholm Resilience Centre**, the **Planetary Boundaries framework** identifies nine critical Earth system processes that regulate the stability and resilience of the biosphere. These boundaries include climate change, novel entities (synthetic chemicals and plastics), stratospheric ozone depletion, atmospheric aerosol loading, ocean acidification, biogeochemical flows (nitrogen and phosphorus cycles), freshwater change, land system change, and biosphere integrity (extinction rates).',
          'In a definitive 2023 update published in *Science Advances*, an international team of 29 scientists concluded that humanity has already **breached six of the nine boundaries**, pushing the Earth system outside the stable Holocene envelope that enabled the development of human agriculture and complex civilization over the past 10,000 years. Degrowth scholars argue this overshoot proves that focusing narrowly on carbon while chasing GDP expansion ignores widespread ecological degradation.',
        ],
      },
      {
        heading: 'The Clean Energy Mineral Bottleneck',
        paragraphs: [
          'A central point of contention is whether the physical infrastructure of the clean transition will breach ecological limits. Transitioning from fossil fuels to electric vehicles, batteries, wind turbines, and high-voltage transmission lines requires unprecedented quantities of critical minerals: copper, lithium, nickel, cobalt, graphite, and rare earth elements.',
          'According to the **International Energy Agency (IEA)**, an electric car requires six times the mineral inputs of a conventional combustion vehicle. Degrowth theorists argue this shift will spark an aggressive new wave of terrestrial and deep-sea mining, devastating biodiversity hotspots in the Global South, while green growth advocates point out that total clean mineral extraction is dwarfed by the billions of tons of coal and petroleum humanity currently combusts every single year.',
        ],
      },
    ],
    details: [
      'In 2023, the Stockholm Resilience Centre confirmed six boundaries are breached: climate change, biosphere integrity, land system change, freshwater change, biogeochemical flows, and novel entities.',
      'An electric vehicle requires ~200 kg of critical minerals (lithium, nickel, cobalt, copper) compared to ~30 kg in a conventional car (IEA 2022).',
      'Humanity extracts and burns over 8 billion tons of coal, 4 billion tons of oil, and 3 billion tons of natural gas equivalent annually, dwarfing clean energy mineral mass.',
      'Circularity rates: currently only 7.2% of materials cycling through the global economy are recycled back into productive use (Circularity Gap Report 2024).',
    ],
    sources: [
      {
        title: 'Planetary Boundaries: Guiding Human Development on a Changing Planet',
        url: 'https://www.science.org/doi/10.1126/science.1259855',
        publisher: 'Science (Will Steffen, Johan Rockström, et al.)',
        year: '2015',
        category: 'Scholarship',
      },
      {
        title: 'The Role of Critical Minerals in Clean Energy Transitions',
        url: 'https://www.iea.org/reports/the-role-of-critical-minerals-in-clean-energy-transitions',
        publisher: 'International Energy Agency (IEA)',
        year: '2021',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'The Circularity Gap Report 2024',
        url: 'https://www.circularity-gap.world/2024',
        publisher: 'Circle Economy Foundation',
        year: '2024',
        category: 'Watchdog / NGO',
      },
    ],
    tags: ['Energy & Climate', 'Science & Innovation', 'Empirical Studies', 'Trade & Industry'],
    era: '2009–Present',
  },

  // Thesis 2A
  {
    id: 'thesis-cld-earth-system-boundaries',
    parentId: 'pillar-cld-limits',
    kind: 'thesis',
    title: 'Nine Planetary Boundaries & Biophysical Carrying Capacity',
    summary:
      'Assesses whether the breach of six planetary boundaries signals civilizational overshoot requiring economic downscaling or whether technological substitution and circular bio-engineering can expand boundaries.',
    sections: [
      {
        heading: 'Holocene Stability and the Danger of Non-Linear Tipping Points',
        paragraphs: [
          'Earth system scientists argue that the global economic system operates under a dangerous ideological delusion: treating natural systems as infinite sinks for industrial waste and infinite sources of capital inputs. The **Planetary Boundaries framework** establishes that Earth systems do not degrade linearly; instead, pushing ecosystems past critical thresholds risks triggering **abrupt, irreversible tipping points**—such as the collapse of the Atlantic Meridional Overturning Circulation (AMOC), dieback of the Amazon rainforest, or rapid permafrost methane release.',
          'Because these boundaries interact synergistically—where biodiversity loss weakens forest resilience, accelerating climate warming, which in turn acidifies oceans—ecological economists insist that society cannot "solve" climate change through techno-fixes while continuing to expand aggregate industrial production.',
        ],
      },
      {
        heading: 'Technological Substitution and Dynamic Carrying Capacity',
        paragraphs: [
          'Ecomodernists and technological optimists reject the idea of static, fixed ecological carrying capacities. Throughout human history, carrying capacity has been dynamically expanded through scientific innovation: the **Haber-Bosch process** averted Malthusian starvation by fixing atmospheric nitrogen into synthetic fertilizer, while modern **precision agriculture, vertical farming, and synthetic biology** allow society to produce higher crop yields on dramatically shrinking land footprints.',
          'Technological substitutes routinely displace natural resource constraints: fiber optic cables made from abundant silica sand replaced heavy copper telecommunication wires, and advanced sodium-ion batteries eliminate the need for scarce nickel and cobalt.',
        ],
      },
    ],
    details: [
      'Richardson et al. (Science Advances 2023) mapped six breached boundaries and showed ocean acidification is approaching safe limits.',
      'The Haber-Bosch process currently sustains roughly 50% of the global human population through synthetic nitrogen crop fertilization.',
      'Precision fermentation and cellular agriculture can produce animal proteins with 90% less land, water, and greenhouse gas emissions than livestock farming.',
    ],
    sources: [
      {
        title: 'Earth Beyond Six of Nine Planetary Boundaries',
        url: 'https://www.science.org/doi/10.1126/sciadv.adh2458',
        publisher: 'Science Advances (Katherine Richardson et al.)',
        year: '2023',
        category: 'Scholarship',
      },
      {
        title: 'An Ecomodernist Manifesto',
        url: 'https://www.ecomodernism.org/',
        publisher: 'The Breakthrough Institute (Linus Blomqvist, Ted Nordhaus, et al.)',
        year: '2015',
        category: 'Scholarship',
      },
    ],
    tags: ['Energy & Climate', 'Science & Innovation', 'Philosophy & Ethics'],
    era: '2015–Present',
    relatedIds: ['thesis-cld-critical-minerals-footprint'],
  },
  {
    id: 'con-cld-rockstrom-planetary-boundaries-breach',
    parentId: 'thesis-cld-earth-system-boundaries',
    kind: 'con',
    title: 'Rockström and Steffen: Six of Nine Earth System Boundaries Already Breached',
    summary:
      'Empirical Earth system science confirms humanity has exceeded safe biophysical operating limits, proving GDP growth drives comprehensive ecological breakdown beyond carbon.',
    sections: [
      {
        heading: 'The Comprehensive Breach of Earth’s Safe Operating Space',
        paragraphs: [
          'In their definitive assessment published in *Science Advances* (2023), **Johan Rockström, Katherine Richardson, and Will Steffen** proved that the global economic apparatus has pushed the planet deep into dangerous territory. Six of the nine Earth system boundaries are now breached: climate change (atmospheric CO2 at 420+ ppm), biosphere integrity (extinction rates running 100 to 1,000 times higher than baseline), land system change (over 50% of habitable land converted to human use), freshwater change (alteration of green and blue water flows), biogeochemical flows (massive agricultural nitrogen/phosphorus runoff creating ocean dead zones), and novel entities (thousands of unmonitored PFAS chemicals, pesticides, and microplastics contaminating every biome).',
          'These breaches are not independent accidents; they are the systemic, cumulative consequence of an economic engine that requires compound capital accumulation and physical throughput expansion.',
        ],
      },
      {
        heading: 'The Delusion of Infinite Compound Growth on a Finite Orb',
        paragraphs: [
          'Ecological economists emphasize the thermodynamic absurdity of neoclassical economic theory, which treats the economy as an isolated circular flow of money rather than a subsystem embedded within a finite, entropic biosphere. As **Kenneth Boulding** famously observed, "Anyone who believes in indefinite growth on a physically finite planet is either a madman or an economist."',
          'Treating these systemic ecological breaches as mere "market externalities" to be cured by minor carbon taxes misses the fundamental reality: infinite growth in a closed thermodynamic system inevitably triggers systemic overshoot and collapse.',
        ],
      },
    ],
    details: [
      'Species extinction rates are currently running at 100 to 1,000 times background geological rates, qualifying as Earth’s Sixth Mass Extinction event (IPBES 2019).',
      'Agricultural nitrogen and phosphorus pollution has created over 400 hypoxic "dead zones" in coastal waters globally, encompassing an area larger than the United Kingdom.',
      'Plastics and synthetic chemical novel entities have permeated every ecosystem, detected in deep marine trenches, Antarctic snow, human blood, and placentas.',
    ],
    sources: [
      {
        title: 'Global Assessment Report on Biodiversity and Ecosystem Services',
        url: 'https://www.ipbes.net/global-assessment',
        publisher: 'Intergovernmental Science-Policy Platform on Biodiversity and Ecosystem Services (IPBES)',
        year: '2019',
        category: 'Primary Text / Treaty',
      },
      {
        title: 'Planetary Boundaries: Exploring the Safe Operating Space for Humanity',
        url: 'https://www.ecologyandsociety.org/vol14/iss2/art32/',
        publisher: 'Ecology and Society (Johan Rockström et al.)',
        year: '2009',
        category: 'Scholarship',
      },
    ],
    tags: ['Energy & Climate', 'Philosophy & Ethics', 'Empirical Studies'],
    era: '2009–Present',
    relatedIds: ['pro-cld-substitution-circular-economy'],
  },
  {
    id: 'pro-cld-substitution-circular-economy',
    parentId: 'thesis-cld-earth-system-boundaries',
    kind: 'pro',
    title: 'Resource Substitutability, Precision Agriculture, and Circular Bio-Economy',
    summary:
      'Human ingenuity dynamically expands carrying capacity through technological substitution, precision agriculture, closed-loop circular manufacturing, and synthetic biology.',
    sections: [
      {
        heading: 'Technological Decoupling via Intensification and Innovation',
        paragraphs: [
          'The historical record demonstrates that ecological limits are dynamic technological horizons, not rigid brick walls. When humanity ran short of whale oil for lighting in the 19th century, society did not collapse into darkness; innovators developed kerosene, town gas, and the electric lightbulb. Similarly, the **Green Revolution** spearheaded by Nobel laureate **Norman Borlaug** utilized dwarf wheat genetics, synthetic nitrogen, and modern irrigation to save over a billion people from starvation while sparing millions of acres of wild rainforest from agricultural deforestation.',
          'Today, **precision agriculture** using satellite telemetry, drone soil sensing, and targeted drip irrigation reduces nitrogen runoff and freshwater consumption by up to 50% while increasing crop output per hectare.',
        ],
      },
      {
        heading: 'The Potential of Closed-Loop Circular Engineering',
        paragraphs: [
          'Furthermore, industrial manufacturing is transitioning from linear "take-make-waste" models toward **circular bio-economies**. With advanced electrochemical recycling, metals such as aluminum, copper, and battery-grade lithium can be recycled indefinitely without degradation of physical properties, requiring 95% less energy than primary extraction from rock.',
          'Technological substitution continuously replaces scarce physical minerals with abundant materials: sodium-ion battery chemistries replace nickel and cobalt with cheap table salt, and synthetic diamond semiconductors replace scarce rare earths, proving that economic expansion can thrive through high-value informational complexity rather than raw physical mass.',
        ],
      },
    ],
    details: [
      'Norman Borlaug’s agricultural breakthroughs are credited with saving more than 1 billion lives and sparing an estimated 400 million hectares of wild ecosystems.',
      'Recycling aluminum requires only 5% of the energy needed to smelt new bauxite ore, with ~75% of all aluminum ever produced still in active commercial use.',
      'Commercial sodium-ion batteries entered mass automotive production in 2023–2024, eliminating critical mineral bottlenecks (cobalt, nickel, and lithium) for entry-level EVs.',
    ],
    sources: [
      {
        title: 'Ending Hunger: The Green Revolution and Its Continuing Legacy',
        url: 'https://www.nobelprize.org/prizes/peace/1970/borlaug/lecture/',
        publisher: 'The Nobel Foundation (Norman Borlaug)',
        year: '1970',
        category: 'Scholarship',
      },
      {
        title: 'Circular Economy: Principles and Industrial Strategy',
        url: 'https://www.ellenmacarthurfoundation.org/topics/circular-economy-introduction/overview',
        publisher: 'Ellen MacArthur Foundation',
        year: '2023',
        category: 'Watchdog / NGO',
      },
    ],
    tags: ['Science & Innovation', 'Trade & Industry', 'Energy & Climate'],
    era: '1970–Present',
    relatedIds: ['con-cld-rockstrom-planetary-boundaries-breach'],
  },

  // Thesis 2B
  {
    id: 'thesis-cld-critical-minerals-footprint',
    parentId: 'pillar-cld-limits',
    kind: 'thesis',
    title: 'The Material Footprint of Clean Energy vs. Ecological Extraction',
    summary:
      'Weighs the ecological and human devastation of critical mineral mining for clean energy against the vast mass reduction achieved by eliminating fossil fuel combustion.',
    sections: [
      {
        heading: 'The Intensive Mineral Appetite of the Renewable Transition',
        paragraphs: [
          'Critics of green growth highlight an inescapable physical irony: building a zero-carbon energy system requires unprecedented quantities of extracted metals. According to the **International Energy Agency (IEA)**, achieving global net-zero by 2050 requires a sixfold increase in total mineral inputs by 2040, demanding hundreds of new commercial mines for lithium, graphite, cobalt, nickel, and copper.',
          'Mining these materials often inflicts severe ecological and human rights abuses: cobalt extraction in the **Democratic Republic of Congo** involves dangerous artisanal child labor and toxic water contamination; lithium brine evaporation in Chile’s **Atacama Desert** depletes vital Indigenous groundwater aquifers; and nickel processing in Indonesia releases millions of tons of acidic tailings into pristine coral biomes.',
        ],
      },
      {
        heading: 'The Global Mass Balance: Fossil Extraction vs. Mineral Extraction',
        paragraphs: [
          'Clean energy analysts counter by examining the fundamental **global mass balance**. Every single year, the global fossil fuel economy extracts and burns over **8,000 million metric tons of coal, 4,000 million tons of oil, and 3,000 million tons of natural gas equivalent**—totaling roughly **15 billion metric tons** of combustible hydrocarbons ripped from the Earth and dumped into the atmosphere.',
          'By contrast, total cumulative annual mineral extraction required to manufacture all wind turbines, solar panels, and electric batteries needed for a 100% clean global energy system is estimated by the Energy Transitions Commission at roughly **28 million metric tons per year**—more than **500 times smaller** in physical mass than the fossil fuel extraction it permanently eliminates.',
        ],
      },
    ],
    details: [
      'The IEA Net Zero Roadmap projects annual clean energy mineral demand will reach ~28 million metric tons by 2040.',
      'Humanity extracts over 15,000 million tons of fossil fuels every single year, causing 8.7 million annual deaths from fine particulate combustion pollution.',
      'Deep-sea polymetallic nodule mining in the Clarion-Clipperton Zone threatens fragile, unstudied abyssal ecosystems to supply battery metals.',
    ],
    sources: [
      {
        title: 'The Role of Critical Minerals in Clean Energy Transitions',
        url: 'https://www.iea.org/reports/the-role-of-critical-minerals-in-clean-energy-transitions',
        publisher: 'International Energy Agency (IEA)',
        year: '2021',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'Material and Resource Requirements for the Energy Transition',
        url: 'https://www.energy-transitions.org/publications/material-and-resource-requirements-for-the-energy-transition/',
        publisher: 'Energy Transitions Commission',
        year: '2023',
        category: 'Scholarship',
      },
    ],
    tags: ['Energy & Climate', 'Trade & Industry', 'Empirical Studies'],
    era: '2021–Present',
    relatedIds: ['thesis-cld-earth-system-boundaries'],
  },
  {
    id: 'con-cld-mining-ecological-devastation',
    parentId: 'thesis-cld-critical-minerals-footprint',
    kind: 'con',
    title: 'Mining Devastation: Cobalt, Lithium, Copper & Indigenous Dispossession',
    summary:
      'Green growth’s insatiable demand for transition minerals fuels ecological destruction, toxic tailings dams, and human rights violations across the Global South.',
    sections: [
      {
        heading: 'The Sacrifice Zones of the Clean Energy Transition',
        paragraphs: [
          'Environmental justice scholars and human rights investigators emphasize that green growth relies on creating new **ecological sacrifice zones** across vulnerable regions. In *Cobalt Red* (2023), Siddharth Kara documents the harrowing conditions in the cobalt mining belt of the Democratic Republic of Congo (which supplies >70% of world cobalt), where hundreds of thousands of "creuseurs"—including tens of thousands of children—dig toxic open-pit mines with bare hands, suffering severe respiratory diseases and fatal tunnel collapses to feed Western EV battery supply chains.',
          'In South America’s "Lithium Triangle" (Chile, Argentina, and Bolivia), lithium brine extraction pumps millions of liters of hypersaline groundwater per ton of lithium, drying up wetlands, lowering water tables, and destroying the ancestral pastoralism of Indigenous Atacameño communities.',
        ],
      },
      {
        heading: 'Toxic Tailings, Deforestation, and Marine Destruction',
        paragraphs: [
          'Mining transition minerals produces immense quantities of hazardous mine tailings. In Indonesia—which expanded to supply over 50% of the world’s nickel—refining low-grade laterite ore into battery-grade nickel matte utilizes high-pressure acid leaching (HPAL), generating millions of tons of toxic sulfurous tailings and burning vast amounts of captive coal power.',
          'Proponents of mining are now pushing into the deep ocean: mining consortiums petition the **International Seabed Authority** to dredge polymetallic nodules from the abyssal plains of the Pacific, risking irreversible destruction to unique deep-sea benthic organisms that take millions of years to regenerate.',
        ],
      },
    ],
    details: [
      'Over 50% of global lithium, nickel, and cobalt reserves are located on or near Indigenous and peasant lands, triggering severe territorial disputes (Nature Sustainability 2022).',
      'Artisanal cobalt mining in the DRC exposes workers to toxic heavy metals, causing birth defects, skin ulcerations, and fatal respiratory illnesses (Amnesty International 2023).',
      'High-pressure acid leaching (HPAL) for Indonesian nickel generates ~1.5 to 2 tons of toxic hazardous slurry per ton of nickel produced.',
    ],
    sources: [
      {
        title: 'Cobalt Red: How the Blood of the Congo Powers Our Lives',
        url: 'https://us.macmillan.com/books/9781250284303/cobaltred',
        publisher: 'St. Martin’s Press (Siddharth Kara)',
        year: '2023',
        category: 'Scholarship',
      },
      {
        title: 'Energy Transition Minerals and Indigenous Peoples’ Rights',
        url: 'https://www.nature.com/articles/s41893-022-00994-6',
        publisher: 'Nature Sustainability (John R. Owen et al.)',
        year: '2022',
        category: 'Scholarship',
      },
    ],
    tags: ['Human Rights', 'Energy & Climate', 'Trade & Industry'],
    era: '2022–Present',
    relatedIds: ['pro-cld-fossil-vs-clean-mass-balance'],
  },
  {
    id: 'pro-cld-fossil-vs-clean-mass-balance',
    parentId: 'thesis-cld-critical-minerals-footprint',
    kind: 'pro',
    title: 'Mass Balance: 28M Tons of Clean Minerals Displaces 15B Tons of Fossil Combustion',
    summary:
      'Replacing continuous fossil fuel combustion with recyclable clean energy hardware reduces total global material extraction by over 99%, vastly shrinking ecological impact.',
    sections: [
      {
        heading: 'The 500-to-1 Thermodynamic Mass Advantage of Clean Energy',
        paragraphs: [
          'Critiques that portray the clean energy transition as an ecological mining catastrophe suffer from an elementary baseline error: failing to compare renewable mining against the colossal material extraction of the fossil fuel system it replaces. Every year, human society extracts over **8 billion tons of coal, 4 billion tons of petroleum, and 3 billion tons of natural gas equivalent**—a staggering **15 billion metric tons of hydrocarbons** that are combusted once and vented into the atmosphere.',
          'According to comprehensive lifecycle material flow assessments by the **Energy Transitions Commission (2023)**, building and maintaining a 100% clean global energy system requires extracting approximately **28 million metric tons of critical minerals per year** by 2040. In terms of sheer physical mass moved, **clean energy requires extracting less than 1% of the material humanity currently extracts for fossil fuels**.',
        ],
      },
      {
        heading: 'Capital Assets vs. Consumable Fuel Extraction',
        paragraphs: [
          'Crucially, fossil fuels represent **consumable mass**: coal and gas are burned to ash and gas in seconds, requiring perpetual, unending extraction year after year. Clean energy minerals represent **durable capital assets**: once mined, refined, and formed into battery cathodes or solar wafers, these metals remain intact for decades and can be recycled repeatedly.',
          'As electric vehicle batteries reach end-of-life in the 2030s, closed-loop industrial recycling facilities (such as Redwood Materials and Northvolt) are recovering **over 95% of lithium, nickel, cobalt, and copper**, establishing a permanent domestic circular loop that progressively eliminates the need for primary virgin mining.',
        ],
      },
    ],
    details: [
      'The Energy Transitions Commission confirmed cumulative clean energy mineral needs through 2050 represent ~6.5 billion tons of material, compared to over 450 billion tons of fossil fuels burned over the same period.',
      'Closed-loop hydrometallurgical recycling of lithium-ion batteries reduces greenhouse gas emissions by 70% and water use by 80% compared to virgin mining (Argonne GREET model).',
      'Eliminating coal mining eliminates the largest single industrial source of acid mine drainage and mountain-top removal deforestation on Earth.',
    ],
    sources: [
      {
        title: 'Material and Resource Requirements for the Energy Transition',
        url: 'https://www.energy-transitions.org/publications/material-and-resource-requirements-for-the-energy-transition/',
        publisher: 'Energy Transitions Commission',
        year: '2023',
        category: 'Scholarship',
      },
      {
        title: 'Lifecycle Analysis of Battery Recycling and Raw Material Demands',
        url: 'https://greet.es.anl.gov/',
        publisher: 'Argonne National Laboratory (U.S. Department of Energy)',
        year: '2023',
        category: 'Court / Official Record',
      },
    ],
    tags: ['Energy & Climate', 'Science & Innovation', 'Trade & Industry'],
    era: '2023–Present',
    relatedIds: ['con-cld-mining-ecological-devastation'],
  },

  // ============================================================================
  // PILLAR 3: Global Energy Poverty & Development Justice
  // ============================================================================
  {
    id: 'pillar-cld-global-south',
    parentId: 'root-climate-growth-degrowth',
    kind: 'pillar',
    title: 'Global Energy Poverty & Development Justice',
    summary:
      'Addresses the geopolitical and ethical chasm between the Global North and South: weighing the moral imperative of massive energy expansion to lift billions from poverty against the critique of unequal imperial exchange and neo-colonial drain.',
    sections: [
      {
        heading: 'The Stark Reality of Global Energy Inequality',
        paragraphs: [
          'More than **3 billion people** across Sub-Saharan Africa, South Asia, and Latin America live in acute **energy poverty**, consuming less electricity per capita annually than a standard American domestic refrigerator. Over 670 million people have zero access to electricity, and 2.3 billion rely on polluting biomass (wood, dung, and charcoal) for cooking, resulting in millions of premature deaths annually from indoor smoke inhalation.',
          'Leaders and development economists across the Global South argue that achieving basic human rights—modern hospitals, clean running water, mechanized agriculture, air conditioning during heatwaves, and sewage treatment—requires vast, sustained economic growth and massive expansion of physical energy generation.',
        ],
      },
      {
        heading: 'Unequal Exchange and Colonial Resource Drain',
        paragraphs: [
          'Degrowth and anti-imperialist scholars counter that the modern global economic architecture is structurally predatory. In *Imperialist Appropriation in the World Economy* (2022), **Jason Hickel, Christian Dorninger, and colleagues** calculate that high-income nations drain an average of **10 billion tons of raw materials, 800 million hectares of land, and 200 million person-years of labor annually** from the Global South via unequal terms of trade.',
          'They maintain that the Global South does not need Western-style consumer capitalism; rather, developing nations require sovereign self-determination, debt cancellation, and post-extractivist development models (such as Latin America’s **Buen Vivir** or India’s **Eco-Swaraj**) that prioritize local human well-being over export-oriented extraction for the Global North.',
        ],
      },
    ],
    details: [
      'The average citizen in the United States consumes ~12,000 kWh of electricity per year, compared to ~200 kWh in Nigeria and ~50 kWh in South Sudan (IEA 2023).',
      'Hickel et al. (Nature Communications 2022) calculated the net drain of resources from the South to the North from 1990 to 2015 was valued at $242 trillion in constant 2010 dollars.',
      'Indoor air pollution from burning dung and firewood kills over 3.2 million people annually, primarily women and young children in low-income nations (WHO 2023).',
      'Contrasts Western degrowth advocacy with African leaders demanding the right to develop natural gas, hydro, and clean baseload for industrialization.',
    ],
    sources: [
      {
        title: 'Imperialist Appropriation in the World Economy: Drain from the Global South Through Unequal Exchange, 1990–2015',
        url: 'https://www.nature.com/articles/s41467-022-28520-7',
        publisher: 'Nature Communications (Jason Hickel, Christian Dorninger, et al.)',
        year: '2022',
        category: 'Scholarship',
      },
      {
        title: 'Tracking SDG 7: The Energy Progress Report 2023',
        url: 'https://www.irena.org/Publications/2023/Jun/Tracking-SDG-7-2023',
        publisher: 'World Bank, IEA, IRENA, WHO',
        year: '2023',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'Household Air Pollution and Health Fact Sheet',
        url: 'https://www.who.int/news-room/fact-sheets/detail/household-air-pollution-and-health',
        publisher: 'World Health Organization (WHO)',
        year: '2023',
        category: 'Watchdog / NGO',
      },
    ],
    tags: ['Human Rights', 'Economics', 'Energy & Climate', 'Philosophy & Ethics'],
    era: '1990–Present',
  },

  // Thesis 3A
  {
    id: 'thesis-cld-energy-poverty-growth-imperative',
    parentId: 'pillar-cld-global-south',
    kind: 'thesis',
    title: 'Global Energy Poverty and the Moral Imperative of Southern Growth',
    summary:
      'Weighs the thesis that rapid economic expansion is a non-negotiable human rights requirement to lift 4 billion people from poverty against the critique of imperial resource drain.',
    sections: [
      {
        heading: 'The Non-Negotiable Human Right to Modern Energy',
        paragraphs: [
          'Energy is not an optional luxury good; it is the fundamental physical prerequisite for human civilization, public health, and cognitive development. In low-income nations, lack of reliable electricity means vaccines spoil in non-refrigerated rural clinics, surgeons operate by flashlight, students cannot read after sunset, and women spend 4 to 6 hours daily gathering heavy firewood.',
          'As articulated by development economists like **Todd Moss (Energy for Growth Hub)** and Indian economic planners, lifting the bottom four billion people of the Global South to a modest, dignified standard of living—comparable to southern Europe—requires a **four- to five-fold expansion of global electricity generation**. Imposing degrowth constraints on these populations would condemn billions to permanent material deprivation.',
        ],
      },
      {
        heading: 'Unequal Exchange and the Real Beneficiaries of Southern Growth',
        paragraphs: [
          'Ecological and dependency theorists point out that under the existing global capitalist division of labor, economic growth in the Global South does not actually benefit ordinary citizens; it primarily enriches transnational corporations and corrupt local oligarchs while shipping raw materials north.',
          'Between 1990 and 2015, the net transfer of value from South to North exceeded all official development assistance (foreign aid) by a factor of thirty. Degrowth scholars argue that what the South needs is not aggregate GDP growth directed by Western export markets, but **reclaiming sovereign control over domestic resources** to directly provision healthcare, education, clean water, and agroecology.',
        ],
      },
    ],
    details: [
      'The Energy for Growth Hub calculates that achieving basic modern living standards worldwide requires minimum per capita consumption of 1,000 kWh/year, a threshold 3 billion people remain below.',
      'Sub-Saharan Africa (excluding South Africa) has an installed grid capacity of roughly 40 gigawatts for 1.1 billion people—roughly equal to the installed capacity of the United Kingdom alone.',
      'Foreign debt service paid by low-income countries in 2023 reached $443 billion, diverting vital revenues away from domestic healthcare, climate resilience, and education (World Bank).',
    ],
    sources: [
      {
        title: 'The Modern Energy Minimum: The Case for a Higher Global Energy Standard',
        url: 'https://energyforgrowth.org/memo/the-modern-energy-minimum/',
        publisher: 'Energy for Growth Hub (Todd Moss et al.)',
        year: '2021',
        category: 'Scholarship',
      },
      {
        title: 'International Debt Report 2023',
        url: 'https://www.worldbank.org/en/programs/debt-statistics/idr/products',
        publisher: 'World Bank Group',
        year: '2023',
        category: 'Empirical / Economic Study',
      },
    ],
    tags: ['Human Rights', 'Economics', 'Energy & Climate'],
    era: '2021–Present',
    relatedIds: ['thesis-cld-degrowth-as-affluent-luxury'],
  },
  {
    id: 'pro-cld-southern-industrialization-human-dev',
    parentId: 'thesis-cld-energy-poverty-growth-imperative',
    kind: 'pro',
    title: 'Lifting 4 Billion from Energy Poverty Requires Vast Economic Expansion',
    summary:
      'Basic human flourishing, infant survival, climate adaptation, and industrial independence in the Global South depend on rapid, large-scale economic and energetic growth.',
    sections: [
      {
        heading: 'Energy Abundance as Climate Adaptation',
        paragraphs: [
          'Developing countries are on the front lines of global climate change, suffering disproportionately from lethal heatwaves, severe droughts, and catastrophic monsoons. However, climate resilience is fundamentally an **energy-intensive technological accomplishment**: surviving a 45°C wet-bulb heatwave requires air conditioning; surviving a drought requires deep groundwater pumping and desalination; surviving a cyclone requires steel-reinforced concrete shelters and paved evacuation highways.',
          'Telling nations like Nigeria, Pakistan, or Indonesia that they must forgo industrialization and energy abundance to save the global climate is an act of profound moral hypocrisy, as wealthy nations built their immense climate resilience through two centuries of unrestricted fossil fuel combustion.',
        ],
      },
      {
        heading: 'The Empirical Correlation of Growth with Human Well-Being',
        paragraphs: [
          'Across every continent over the past half-century, rapid economic growth has been the single most powerful engine of poverty eradication in human history. In China, four decades of 8%–10% annual GDP growth lifted over **800 million people out of extreme poverty**, slashed infant mortality from over 80 per 1,000 to under 7, and raised life expectancy to 78 years.',
          'No nation has ever achieved high life expectancy, universal primary education, gender equality, and modern infrastructure without substantial economic growth. For the Global South, green growth is not an ideological abstraction; it is the only viable path to human liberation.',
        ],
      },
    ],
    details: [
      'China’s rapid industrialization between 1980 and 2020 lifted 800+ million citizens out of extreme poverty (World Bank 2022).',
      'Air conditioning penetration across South Asia and Sub-Saharan Africa remains below 10%, despite these regions experiencing the most extreme wet-bulb temperatures on Earth.',
      'Infant mortality in low-income nations drops predictably as per-capita electricity consumption and GDP rise, following an inverse logarithmic curve.',
    ],
    sources: [
      {
        title: 'Four Decades of Poverty Reduction in China: Drivers, Insights for the World',
        url: 'https://www.worldbank.org/en/news/press-release/2022/04/01/lifting-800-million-people-out-of-poverty-new-report-looks-at-lessons-from-china-s-experience',
        publisher: 'World Bank & Development Research Center of China’s State Council',
        year: '2022',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'Climate Adaptation and Economic Development: The Role of Energy Infrastructure',
        url: 'https://www.nber.org/papers/w29881',
        publisher: 'National Bureau of Economic Research (NBER)',
        year: '2022',
        category: 'Scholarship',
      },
    ],
    tags: ['Human Rights', 'Macroeconomics', 'Economics', 'Energy & Climate'],
    era: '1980–Present',
    relatedIds: ['con-cld-unequal-exchange-colonial-drain'],
  },
  {
    id: 'con-cld-unequal-exchange-colonial-drain',
    parentId: 'thesis-cld-energy-poverty-growth-imperative',
    kind: 'con',
    title: 'Hickel et al.: Net Drain of Global South Resources via Imperial Exchange',
    summary:
      'Global capitalism net-drains trillions in resources from the South to the North; Southern emancipation requires post-extractivist sovereignty, not more export-oriented growth.',
    sections: [
      {
        heading: 'Quantifying Modern Neo-Colonial Plunder',
        paragraphs: [
          'In a landmark empirical analysis published in *Nature Communications* (2022), **Jason Hickel, Christian Dorninger, Hanspeter Wieland, and Intan Suwandi** quantified the scale of **unequal ecological exchange**. They demonstrated that international commodity prices are systematically manipulated through structural adjustment programs, monopoly capital pricing, and currency wage differentials, allowing the Global North to appropriate vast quantities of physical wealth from the Global South at prices far below their real value.',
          'Between 1990 and 2015, the North net-appropriated **10 billion metric tons of raw materials, 822 million hectares of embodied land, 21 exajoules of embodied energy, and 188 million person-years of embodied labor** annually from the South. The monetary value of this drained wealth exceeded **$242 trillion**, sufficient to end global extreme poverty dozens of times over.',
        ],
      },
      {
        heading: 'Export-Oriented Growth Destroys Domestic Well-Being',
        paragraphs: [
          'Because Southern economies are structurally locked into export-oriented primary extraction (mining copper for Western EVs, logging timber for European furniture, and farming soy for Western feedlots), chasing aggregate GDP growth does not benefit local populations. Instead, it displaces peasant farmers, contaminates domestic river basins, and services foreign dollar debts.',
          'Degrowth theorists argue that Southern nations must decouple from imperial supply chains, enforce resource sovereignty, cancel illegitimate colonial debts, and prioritize domestic agroecology and public provisioning over growth metrics designed by the Washington Consensus.',
        ],
      },
    ],
    details: [
      'Hickel et al. (2022) found the net drain of labor from the Global South to the North embodies roughly 200 million full-time worker-equivalents each year.',
      'The net drain of land embodied in imports to the Global North exceeds twice the total land area of the entire European Union.',
      'Low-income nations received $1 in foreign aid for every $14 extracted in illicit financial outflows, debt interest, and unequal transfer pricing.',
    ],
    sources: [
      {
        title: 'Imperialist Appropriation in the World Economy: Drain from the Global South Through Unequal Exchange, 1990–2015',
        url: 'https://www.nature.com/articles/s41467-022-28520-7',
        publisher: 'Nature Communications (Jason Hickel, Christian Dorninger, et al.)',
        year: '2022',
        category: 'Scholarship',
      },
      {
        title: 'The Divide: A Brief Guide to Global Inequality and its Solutions',
        url: 'https://www.penguin.co.uk/books/293998/the-divide-by-jason-hickel/9781786090034',
        publisher: 'Penguin Random House (Jason Hickel)',
        year: '2017',
        category: 'Scholarship',
      },
    ],
    tags: ['Human Rights', 'Trade & Industry', 'Economics', 'Philosophy & Ethics'],
    era: '2017–Present',
    relatedIds: ['pro-cld-southern-industrialization-human-dev'],
  },

  // Thesis 3B
  {
    id: 'thesis-cld-degrowth-as-affluent-luxury',
    parentId: 'pillar-cld-global-south',
    kind: 'thesis',
    title: 'Critique of Degrowth as an Affluent Western Ideology',
    summary:
      'Examines the critique that degrowth is an aesthetic luxury of comfortable Western elites versus the emergence of authentic Global South post-capitalist movements.',
    sections: [
      {
        heading: 'The Charge of Affluent Western Romanticism',
        paragraphs: [
          'Critics of degrowth—including prominent socialist writers like **Leigh Phillips** (*Austerity Ecology & the Collapse-Porn Addicts*) and center-left economists like **Branko Milanović**—contend that degrowth is fundamentally an **affluent Western bourgeois aesthetic**. It is embraced primarily by tenured academics, upper-middle-class urban professionals, and European activists who already possess guaranteed access to advanced healthcare, high-speed rail, insulated apartments, and tertiary education.',
          'Preaching economic downscaling, reduced consumption, and simple agrarian labor to populations in the Global South who spend backbreaking 14-hour days tilling arid fields by hand is viewed as patronizing and neo-colonial, romantically valorizing pre-industrial poverty.',
        ],
      },
      {
        heading: 'Indigenous and Southern Roots of Post-Extractivism',
        paragraphs: [
          'Degrowth advocates strongly contest this characterization, emphasizing that the intellectual foundations of downscaling originated not in Western universities, but in Indigenous and Southern resistance struggles. Movements such as **Buen Vivir (Sumak Kawsay)** in the Andean regions of Ecuador and Bolivia, **Ubuntu** in Southern Africa, and **Eco-Swaraj (Radical Ecological Democracy)** in India actively reject Western consumer capitalism as a destructive cultural imposition.',
          'These philosophies emphasize communal harmony, ecological reciprocity, and localized direct democracy, explicitly articulating a post-development paradigm that rejects GDP growth while defending territory from multinational extractivism.',
        ],
      },
    ],
    details: [
      'Branko Milanović (2020) argued global degrowth would require catastrophic drops in living standards or enforcing poverty in developing nations.',
      'Ecuador and Bolivia enshrined "Buen Vivir" and the Rights of Nature (Pachamama) directly into their national constitutions in 2008 and 2009.',
      'Over 80% of degrowth academic publications and conferences originate from institutions in Western Europe and North America.',
    ],
    sources: [
      {
        title: 'Austerity Ecology & the Collapse-Porn Addicts: A Defence of Growth, Progress, Industry and Ultra-Leftism',
        url: 'https://www.johnhuntpublishing.com/zer0-books/our-books/austerity-ecology-collapse-porn-addicts',
        publisher: 'Zero Books (Leigh Phillips)',
        year: '2015',
        category: 'Scholarship',
      },
      {
        title: 'Pluriverse: A Post-Development Dictionary',
        url: 'https://tulikabooks.in/pluriverse-a-post-development-dictionary/',
        publisher: 'Authors UpFront / Tulika Books (Ashish Kothari, Ariel Salleh, Arturo Escobar, et al.)',
        year: '2019',
        category: 'Scholarship',
      },
    ],
    tags: ['Philosophy & Ethics', 'Economics', 'Governance'],
    era: '2015–Present',
    relatedIds: ['thesis-cld-energy-poverty-growth-imperative'],
  },
  {
    id: 'pro-cld-degrowth-elite-luxury-critique',
    parentId: 'thesis-cld-degrowth-as-affluent-luxury',
    kind: 'pro',
    title: 'Degrowth as an Affluent Western Aesthetic Imposing Stagnation on the South',
    summary:
      'Degrowth reflects comfortable upper-class European sensibilities that patronize the developing world and romanticize pre-industrial material hardship.',
    sections: [
      {
        heading: 'The Bourgeois Psychology of Voluntary Simplicity',
        paragraphs: [
          'As developmental economist **Branko Milanović** points out, "voluntary simplicity" and downshifting work hours are viable choices only for individuals who already occupy the top 5% of global wealth. An American or European professional with substantial accumulated home equity, high-speed municipal broadband, and state-subsidized pensions can afford to wax poetic about working less, buying artisanal sourdough, and renouncing material consumerism.',
          'For a factory worker in Bangladesh, a rickshaw driver in Delhi, or a subsistence farmer in Malawi, economic growth is not an abstract statistical fetish; it is the physical difference between malnutrition and adequate caloric intake, between watching an infant die of treatable malaria and accessing a modern hospital.',
        ],
      },
      {
        heading: 'The Inescapable Global Inequality Arithmetic',
        paragraphs: [
          'Milanović calculates that if global GDP were frozen or degrown today and redistributed perfectly equally across all 8 billion humans on Earth, every individual would receive roughly **$18,000 per year** in purchasing-power-adjusted terms—roughly the living standard of contemporary Serbia or Costa Rica.',
          'Achieving this under a degrowth framework would require Western citizens to accept massive 60%–70% reductions in their consumption, while completely capping the aspirations of billions in the Global South. Because democratic electorates in the West will never vote to slash their own living standards by two-thirds, degrowth is politically dead on arrival.',
        ],
      },
    ],
    details: [
      'Milanović (2020) demonstrated that equal global redistribution under zero growth yields ~$18,000 per capita (PPP), requiring massive living standard drops across OECD nations.',
      'Polling in developing nations consistently finds over 85% of citizens prioritize economic growth, job creation, and infrastructure development over ecological preservation.',
      'Proponents of green growth emphasize that technological deployment (solar, wind, batteries) expands living standards without imposing forced austerity.',
    ],
    sources: [
      {
        title: 'The Illusion of "Degrowth": A Critical Assessment of Ecological Economics',
        url: 'https://braveneweurope.com/branko-milanovic-the-illusion-of-degrowth',
        publisher: 'Brave New Europe (Branko Milanović)',
        year: '2020',
        category: 'Scholarship',
      },
      {
        title: 'Capitalism, Alone: The Future of the System That Rules the World',
        url: 'https://www.hup.harvard.edu/books/9780674987593',
        publisher: 'Harvard University Press (Branko Milanović)',
        year: '2019',
        category: 'Scholarship',
      },
    ],
    tags: ['Economics', 'Philosophy & Ethics', 'Macroeconomics'],
    era: '2019–Present',
    relatedIds: ['con-cld-southern-buen-vivir-sovereignty'],
  },
  {
    id: 'con-cld-southern-buen-vivir-sovereignty',
    parentId: 'thesis-cld-degrowth-as-affluent-luxury',
    kind: 'con',
    title: 'Buen Vivir, Eco-Swaraj & Indigenous Post-Extractivist Self-Determination',
    summary:
      'Indigenous and Global South traditions—from Buen Vivir to Eco-Swaraj—demonstrate that post-capitalist flourishing is an anti-colonial struggle against Western extractivism.',
    sections: [
      {
        heading: 'Authentic Southern Paradigms of Pluriversal Living',
        paragraphs: [
          'The claim that questioning GDP growth is an exclusively Western elite invention is an act of historical erasure. In *Pluriverse: A Post-Development Dictionary* (2019), scholars **Ashish Kothari, Arturo Escobar, and Alberto Acosta** document rich, centuries-old traditions across the Global South that actively resist Western developmentalism.',
          'In the Andes, the Quechua philosophy of **Sumak Kawsay (Buen Vivir)** articulates human well-being not as individual consumer accumulation, but as living in balance with community and the rights of Mother Earth (*Pachamama*). In India, **Eco-Swaraj** advocates radical ecological democracy grounded in village autonomy, decentralized agroecology, and direct producer control over natural resources, rejecting the toxic industrial model inherited from British colonialism.',
        ],
      },
      {
        heading: 'Degrowth Targets Northern Overconsumption to Free Ecological Space',
        paragraphs: [
          'Furthermore, degrowth theorists have always insisted that **degrowth applies specifically to the Global North**, not to the developing world. By intentionally downscaling excessive, resource-hungry consumption in wealthy countries, the Global North frees up the **ecological space and global carbon budget** necessary for the Global South to build out basic infrastructure and human services.',
          'Far from imposing austerity on poor nations, degrowth is an act of internationalist solidarity: breaking imperialist value chains and stopping the neo-colonial drain of Southern labor and materials to luxury Western markets.',
        ],
      },
    ],
    details: [
      'In 2008, Ecuador became the first nation to enshrine the Rights of Nature in its Constitution, inspired by Indigenous Sumak Kawsay philosophies.',
      'Jason Hickel’s *Less is More* explicitly states: "Degrowth is a demand for the Global North. The Global South must be free to increase resource use to meet human needs."',
      'The Global Tapestry of Alternatives (GTA) coordinates hundreds of grassroots post-development initiatives across Africa, Asia, and Latin America.',
    ],
    sources: [
      {
        title: 'El Buen Vivir: Sumak Kawsay, una oportunidad para imaginar otros mundos',
        url: 'https://icariaeditorial.com/antropologia/3895-el-buen-vivir-sumak-kawsay-una-oportunidad-para-imaginar-otros-mundos.html',
        publisher: 'Icaria Editorial (Alberto Acosta)',
        year: '2013',
        category: 'Scholarship',
      },
      {
        title: 'Radical Ecological Democracy: Reflections from the Global South',
        url: 'https://www.radicalecologicaldemocracy.org/',
        publisher: 'Kalpavriksh / Global Tapestry of Alternatives (Ashish Kothari)',
        year: '2021',
        category: 'Watchdog / NGO',
      },
    ],
    tags: ['Philosophy & Ethics', 'Human Rights', 'Governance'],
    era: '2013–Present',
    relatedIds: ['pro-cld-degrowth-elite-luxury-critique'],
  },

  // ============================================================================
  // PILLAR 4: Post-Capitalist Provisioning & Reduced Work
  // ============================================================================
  {
    id: 'pillar-cld-postcapitalism',
    parentId: 'root-climate-growth-degrowth',
    kind: 'pillar',
    title: 'Post-Capitalist Provisioning & Reduced Work',
    summary:
      'Evaluates structural transformations beyond market capitalism: shortening the workweek, eliminating planned obsolescence, providing Universal Basic Services (UBS), and replacing GDP with ecological well-being frameworks.',
    sections: [
      {
        heading: 'Workweek Reduction and the Liberation of Human Time',
        paragraphs: [
          'A cornerstone policy of degrowth economics is the collective reduction of working hours—such as the **4-day, 32-hour workweek with no loss in pay**. In capitalist economies, labor productivity gains are historically channeled into higher aggregate output and increased consumer throughput, forcing workers into an exhausting cycle of long hours to purchase planned-obsolescent consumer goods.',
          'By capturing productivity gains as **free human time** rather than expanded physical production, workweek reduction slashes commuter emissions, eliminates unnecessary commercial energy use, and restores time for civic participation, caregiving, community gardening, and creative pursuits, breaking the cultural link between human worth and GDP contribution.',
        ],
      },
      {
        heading: 'Universal Basic Services and Doughnut Economics',
        paragraphs: [
          'To ensure economic security without chasing perpetual growth, ecological economists propose **Universal Basic Services (UBS)**: decommodifying essential human needs by guaranteeing universal public access to housing, healthcare, nutrition, transit, and education. When basic survival is decoupled from wage labor, citizens no longer fear unemployment caused by downscaling carbon-intensive industries.',
          'This provisioning model is synthesized in **Kate Raworth’s *Doughnut Economics***, which visualizes an economic compass bounded by a social foundation of human rights on the inside and an ecological ceiling of planetary boundaries on the outside. Mainstream economists counter that without real GDP growth, the public tax base collapses, starving public services of funding and creating pension insolvencies.',
        ],
      },
    ],
    details: [
      'Extensive 4-day workweek trials in the UK, Iceland, and the U.S. (4 Day Week Global 2022–2023) showed 92% of participating companies retained the policy, citing lower burnout and equal productivity.',
      'Kate Raworth’s Doughnut Economics framework has been adopted by municipal governments including Amsterdam, Barcelona, and Brussels to guide urban planning.',
      'A universal basic services framework estimates providing universal housing, transport, and nutrition requires public expenditures equivalent to ~5%–10% of GDP.',
      'Critics point out that European welfare states rely heavily on progressive income and consumption taxes that shrink automatically if GDP contracts.',
    ],
    sources: [
      {
        title: 'Doughnut Economics: Seven Ways to Think Like a 21st-Century Economist',
        url: 'https://www.chelseagreen.com/product/doughnut-economics/',
        publisher: 'Chelsea Green Publishing (Kate Raworth)',
        year: '2017',
        category: 'Scholarship',
      },
      {
        title: 'The Four-Day Week: Assessing the UK National Pilot Results',
        url: 'https://www.4dayweek.com/uk-pilot-results',
        publisher: 'Autonomy / Cambridge University / Boston College (Juliet Schor et al.)',
        year: '2023',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'Universal Basic Services: The Financial and Economic Feasibility',
        url: 'https://www.ucl.ac.uk/bartlett/igp/publications/2017/oct/universal-basic-services',
        publisher: 'UCL Institute for Global Prosperity (Andrew Percy et al.)',
        year: '2017',
        category: 'Scholarship',
      },
    ],
    tags: ['Labor & Welfare', 'Economics', 'Philosophy & Ethics', 'Governance'],
    era: '2017–Present',
  },

  // Thesis 4A
  {
    id: 'thesis-cld-labor-workweek-reduction',
    parentId: 'pillar-cld-postcapitalism',
    kind: 'thesis',
    title: 'Shorter Workweeks and Downscaling High-Carbon Production',
    summary:
      'Tests whether legislating 32-hour workweeks and downscaling high-carbon sectors enhances well-being while shrinking emissions, or whether it cripples productivity and tax revenues.',
    sections: [
      {
        heading: 'Capturing Productivity as Leisure Rather Than Output',
        paragraphs: [
          'In *Plenitude: The New Economics of True Wealth* (2010), sociologist **Juliet Schor** argues that the relentless expansion of industrial work hours is an artifact of capitalist incentives, where employers prefer extracting longer hours from fewer workers to minimize fixed overhead costs. This dynamic generates a destructive "work-and-spend" treadmill where exhausted workers rely on high-carbon conveniences (fast food, single-use delivery, ride-hailing, air travel).',
          'Legislating a **32-hour workweek** directly contracts macroeconomic throughput by trading off marginal physical output for increased leisure time. Empirical trials across hundreds of companies prove that workers in 4-day regimes report dramatic drops in stress, improved sleep, reduced medical expenditures, and lower household carbon footprints.',
        ],
      },
      {
        heading: 'The Threat to Fiscal Solvency and Welfare State Funding',
        paragraphs: [
          'Mainstream labor economists and fiscal analysts warn that mandated workweek reductions carry severe macroeconomic risks. In labor-intensive public services—such as nursing, elder care, surgical theaters, and policing—labor productivity cannot be increased by 20% to make up for lost hours: a nurse cannot monitor patients 25% faster.',
          'Mandating shorter hours without pay cuts causes labor shortages and drives up production costs, fueling cost-push inflation. More critically, an economy with lower physical output generates a significantly smaller tax base, jeopardizing the fiscal revenues required to maintain universal healthcare, state pensions, and massive public transit investments.',
        ],
      },
    ],
    details: [
      'Juliet Schor’s Cambridge/Boston College study of the 2022 UK 4-day workweek trial found revenues increased by 1.4% while sick days dropped by 65%.',
      'France’s historic 35-hour workweek law (Aubry Laws, 2000) created fiscal costs of over €10 billion annually in employer payroll tax exemptions to maintain competitiveness.',
      'Shorter working hours correlate with lower national greenhouse gas footprints across OECD member countries (Knight et al., Global Environmental Change 2013).',
    ],
    sources: [
      {
        title: 'Could Shorter Work Hours Reduce Carbon Emissions? An Empirical Investigation in the OECD',
        url: 'https://www.sciencedirect.com/science/article/pii/S095937801300063X',
        publisher: 'Global Environmental Change (Kyle Knight, Eugene Rosa, Juliet Schor)',
        year: '2013',
        category: 'Scholarship',
      },
      {
        title: 'The Economic Effects of the 35-Hour Week in France',
        url: 'https://www.insee.fr/en/statistiques',
        publisher: 'INSEE (Institut National de la Statistique et des Études Économiques)',
        year: '2008',
        category: 'Court / Official Record',
      },
    ],
    tags: ['Labor & Welfare', 'Economics', 'Macroeconomics'],
    era: '2013–Present',
    relatedIds: ['thesis-cld-wellbeing-metrics-beyond-gdp'],
  },
  {
    id: 'con-cld-four-day-week-wellbeing-gains',
    parentId: 'thesis-cld-labor-workweek-reduction',
    kind: 'con',
    title: 'Four-Day Workweek and Job Guarantees: Slashing Status Work and Carbon Burn',
    summary:
      'A 32-hour workweek, public job guarantee, and ban on planned obsolescence reduce ecological throughput while dramatically increasing worker health and happiness.',
    sections: [
      {
        heading: 'De-Escalating the Veblenian Status Consumption Arms Race',
        paragraphs: [
          'Much of modern economic output does not serve genuine human needs; it represents what **Thorstein Veblen** termed **"conspicuous consumption"** and anthropologist **David Graeber** described as **"bullshit jobs"**—pointless corporate paper-pushing, aggressive commercial marketing, high-frequency financial trading, and planned obsolescence designed solely to induce artificial dissatisfaction.',
          'By establishing a **32-hour workweek with no loss in pay**, paired with a **Federal Job Guarantee** in regenerative sectors (care work, ecological restoration, home weatherization), society can intentionally deflate extractive corporate sectors. Workers reclaim time for family, artistic creation, and community resilience, slashing carbon-intensive convenience consumption.',
        ],
      },
      {
        heading: 'Ending Planned Obsolescence and Banning Commercial Advertising',
        paragraphs: [
          'Degrowth policy pairs work reduction with statutory bans on **planned obsolescence** (mandating modular, repairable electronics with 10-year warranties) and severe restrictions on commercial advertising in public spaces (as enacted in Grenoble and São Paulo).',
          'Eliminating the synthetic corporate demand for disposable fast fashion, yearly smartphone upgrades, and private SUVs frees up vast quantities of human energy and factory capacity, proving that society can achieve higher qualitative well-being while radically lowering material throughput.',
        ],
      },
    ],
    details: [
      'The 2023 UK 4-Day Workweek Pilot found 71% of employees reported reduced levels of burnout and 39% felt less stressed.',
      'The European Union enacted "Right to Repair" legislation in 2024, requiring consumer electronics manufacturers to provide spare parts and schematics for up to 10 years.',
      'David Graeber’s *Bullshit Jobs* (2018) cited surveys showing over 37% of British workers felt their jobs contributed nothing meaningful to society.',
    ],
    sources: [
      {
        title: 'Bullshit Jobs: A Theory',
        url: 'https://www.simonandschuster.com/books/Bullshit-Jobs/David-Graeber/9781501143311',
        publisher: 'Simon & Schuster (David Graeber)',
        year: '2018',
        category: 'Scholarship',
      },
      {
        title: 'EU Right to Repair Directive (Directive (EU) 2024/1799)',
        url: 'https://eur-lex.europa.eu/eli/dir/2024/1799/oj',
        publisher: 'Official Journal of the European Union',
        year: '2024',
        category: 'Primary Text / Treaty',
      },
    ],
    tags: ['Labor & Welfare', 'Philosophy & Ethics', 'Economics'],
    era: '2018–Present',
    relatedIds: ['pro-cld-productivity-drop-tax-base-strain'],
  },
  {
    id: 'pro-cld-productivity-drop-tax-base-strain',
    parentId: 'thesis-cld-labor-workweek-reduction',
    kind: 'pro',
    title: 'Productivity Bottlenecks and Fiscal Contraction Strain Social Services',
    summary:
      'Mandating work reductions in aging societies causes acute labor shortages, shrinks government tax revenues, and threatens public pensions and universal healthcare.',
    sections: [
      {
        heading: 'The Demographic Crisis and Labor Inelasticity',
        paragraphs: [
          'Advocates of degrowth work reductions ignore the acute **demographic reality** confronting every major industrial economy: rapid population aging. In Japan, South Korea, Italy, Germany, and across North America, the ratio of retirees to working-age taxpayers is deteriorating precipitously. Attempting to shorten working hours by 20% in an economy where the domestic labor force is already shrinking creates catastrophic shortages of nurses, elder-care aides, plumbers, electricians, and civil engineers.',
          'In services that require continuous physical presence, cutting hours forces employers to hire additional staff at elevated wages, creating severe cost-push inflation that erodes workers’ real purchasing power.',
        ],
      },
      {
        heading: 'Fiscal Starvation of the Democratic Welfare State',
        paragraphs: [
          'The modern democratic welfare state is entirely funded through taxation levied on **market economic output**—specifically progressive income taxes, payroll taxes, and Value-Added Taxes (VAT). When national GDP deliberately contracts or stagnates, the fiscal tax base shrinks proportionally.',
          'Without robust economic growth, governments face agonizing zero-sum austerity: either cutting healthcare benefits and public education or gutting public investment in renewable energy and high-speed rail. In *Prosperity Without Growth*, even critics acknowledge that zero-growth capitalism under existing debt-based financial systems inevitably descends into mass unemployment, sovereign debt crises, and social instability.',
        ],
      },
    ],
    details: [
      'OECD projections show the elderly dependency ratio (people 65+ per 100 working-age people) across high-income countries will jump from 31 in 2020 to 53 by 2050.',
      'France’s state pension deficit sparked nationwide strikes and civil unrest in 2023 when the Macron government raised the retirement age from 62 to 64 to avert fiscal insolvency.',
      'Public debt-to-GDP ratios across the G7 exceed 120%, requiring ongoing economic growth to prevent sovereign debt servicing from consuming entire national budgets.',
    ],
    sources: [
      {
        title: 'Pensions at a Glance 2023: OECD and G20 Indicators',
        url: 'https://www.oecd.org/en/publications/oecd-pensions-at-a-glance-2023_678055dd-en.html',
        publisher: 'OECD Publishing',
        year: '2023',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'The Economic Consequences of Stagnant Output on Public Finance',
        url: 'https://www.imf.org/en/Publications/WP',
        publisher: 'International Monetary Fund (IMF)',
        year: '2022',
        category: 'Scholarship',
      },
    ],
    tags: ['Economics', 'Macroeconomics', 'Labor & Welfare'],
    era: '2022–Present',
    relatedIds: ['con-cld-four-day-week-wellbeing-gains'],
  },

  // Thesis 4B
  {
    id: 'thesis-cld-wellbeing-metrics-beyond-gdp',
    parentId: 'pillar-cld-postcapitalism',
    kind: 'thesis',
    title: 'Well-Being Metrics Beyond GDP: Doughnut Economics & Universal Basic Services',
    summary:
      'Weighs Kate Raworth’s Doughnut Economics and multidimensional well-being indicators against the empirical evidence that real GDP per capita remains the premier predictor of human flourishing.',
    sections: [
      {
        heading: 'The Flaws of GDP and the Rise of Doughnut Economics',
        paragraphs: [
          'Gross Domestic Product (GDP) was designed in the 1930s by **Simon Kuznets** to measure wartime industrial capacity; Kuznets himself explicitly warned Congress that "the welfare of a nation can scarcely be inferred from a measure of national income." GDP treats environmental devastation, oil spill cleanups, opioid addiction treatments, and divorce litigation as positive additions to economic output, while completely ignoring unpaid domestic labor, child rearing, and intact ecosystems.',
          'In response, **Kate Raworth** formulated **Doughnut Economics**, establishing a dashboard of 21 social and planetary indicators. Paired with frameworks like the **Genuine Progress Indicator (GPI)** and the **OECD Better Life Index**, reformers argue that policy should directly optimize for human flourishing, life expectancy, educational attainment, and environmental stability, subordinating GDP to human well-being.',
        ],
      },
      {
        heading: 'The Unyielding Power of Real GDP Per Capita',
        paragraphs: [
          'Mainstream economists counter that while GDP is imperfect, real GDP per capita remains the single most reliable proxy for broad societal flourishing. Cross-national econometric data shows that higher GDP per capita is overwhelmingly correlated with lower infant mortality, longer life expectancy, higher literacy rates, cleaner local drinking water, greater gender equality, and stronger protection for civil liberties.',
          'When nations experience economic contractions (recessions or depressions), subjective well-being does not rise; rather, suicides increase, mental health deteriorates, political polarization spikes, and tolerance for minority rights and environmental spending collapses, demonstrating that growth is the indispensable lubricant of peaceful democracy.',
        ],
      },
    ],
    details: [
      'Simon Kuznets’ 1934 report to the U.S. Congress cautioned against confusing gross market output with human welfare.',
      'The Genuine Progress Indicator (GPI) incorporates 26 environmental and social metrics, showing GPI in the U.S. peaked in the 1970s despite GDP tripling since.',
      'Cross-country regressions (Stevenson & Wolfers 2008) show a strong, log-linear relationship between GDP per capita and subjective life satisfaction with no satiation point.',
    ],
    sources: [
      {
        title: 'National Income, 1929–1932 (Report to the 73rd Congress)',
        url: 'https://fraser.stlouisfed.org/title/national-income-1929-1932-971',
        publisher: 'U.S. Senate Document No. 124 (Simon Kuznets)',
        year: '1934',
        category: 'Court / Official Record',
      },
      {
        title: 'Economic Growth and Subjective Well-Being: Reassessing the Easterlin Paradox',
        url: 'https://www.brookings.edu/articles/economic-growth-and-subjective-well-being-reassessing-the-easterlin-paradox/',
        publisher: 'Brookings Papers on Economic Activity (Betsey Stevenson & Justin Wolfers)',
        year: '2008',
        category: 'Scholarship',
      },
    ],
    tags: ['Philosophy & Ethics', 'Economics', 'Empirical Studies'],
    era: '1934–Present',
    relatedIds: ['thesis-cld-labor-workweek-reduction'],
  },
  {
    id: 'con-cld-raworth-doughnut-universal-services',
    parentId: 'thesis-cld-wellbeing-metrics-beyond-gdp',
    kind: 'con',
    title: 'Kate Raworth: Doughnut Economics & Universal Basic Services for True Flourishing',
    summary:
      'Doughnut Economics replaces GDP obsession with a balanced dashboard of human rights and planetary boundaries, anchoring society in Universal Basic Services.',
    sections: [
      {
        heading: 'The Compass of Doughnut Economics',
        paragraphs: [
          'In *Doughnut Economics* (2017), **Kate Raworth** presents an intuitive, mathematically grounded compass for 21st-century civilization. The goal of economic policy is not endless compound exponential growth, but bringing humanity into the **"safe and just space"** between two concentric boundaries: the inner social foundation (guaranteeing food, water, housing, energy, healthcare, and democratic voice) and the outer ecological ceiling (respecting the nine planetary boundaries).',
          'Cities such as **Amsterdam, Barcelona, and Dunedin** have officially operationalized the "City Doughnut", using it to redirect municipal procurement toward circular architecture, social housing co-ops, and local regenerative food networks, proving that communities can achieve exceptional livability without chasing regional GDP expansion.',
        ],
      },
      {
        heading: 'Decommodification via Universal Basic Services (UBS)',
        paragraphs: [
          'Paired with the Doughnut is the framework of **Universal Basic Services (UBS)** developed by Anna Coote and Andrew Percy at University College London. Rather than handing out cash transfers that simply subsidize monopolistic landlords and privatized utilities, UBS directly decommodifies life-critical infrastructure: delivering free high-frequency public transit, municipal fiber-optic broadband, social housing, and universal childcare.',
          'By insulating human survival from market dependency, UBS eliminates the economic anxiety that forces workers to tolerate destructive, high-carbon industries, laying the institutional groundwork for a post-capitalist economy of abundance in shared public luxury.',
        ],
      },
    ],
    details: [
      'Amsterdam adopted the Doughnut Economics model in April 2020 as its official framework for post-pandemic economic recovery.',
      'UCL Institute for Global Prosperity research shows Universal Basic Services is larger in antipoverty impact and significantly less inflationary than Universal Basic Income.',
      'Doughnut Economics Action Network (DEAN) now coordinates local policy implementation across dozens of municipalities and community organizations worldwide.',
    ],
    sources: [
      {
        title: 'Doughnut Economics: Seven Ways to Think Like a 21st-Century Economist',
        url: 'https://www.chelseagreen.com/product/doughnut-economics/',
        publisher: 'Chelsea Green Publishing (Kate Raworth)',
        year: '2017',
        category: 'Scholarship',
      },
      {
        title: 'The Case for Universal Basic Services',
        url: 'https://www.politybooks.com/bookdetail?book_slug=the-case-for-universal-basic-services--9781509539826',
        publisher: 'Polity Press (Anna Coote & Andrew Percy)',
        year: '2020',
        category: 'Scholarship',
      },
    ],
    tags: ['Philosophy & Ethics', 'Economics', 'Governance', 'Labor & Welfare'],
    era: '2017–Present',
    relatedIds: ['pro-cld-gdp-correlation-with-social-goods'],
  },
  {
    id: 'pro-cld-gdp-correlation-with-social-goods',
    parentId: 'thesis-cld-wellbeing-metrics-beyond-gdp',
    kind: 'pro',
    title: 'Real GDP Growth Remains Strictly Correlated with Health, Longevity, and Safety',
    summary:
      'Econometric evidence confirms GDP per capita strictly predicts longer life expectancy, lower maternal mortality, superior healthcare, and political stability.',
    sections: [
      {
        heading: 'The Robust Empirical Power of GDP Per Capita',
        paragraphs: [
          'While academic theorists invent composite alternatives to GDP, decades of cross-national econometric analyses confirm that **real GDP per capita** remains the single most reliable predictor of human flourishing. In their landmark study re-evaluating the Easterlin Paradox, **Betsey Stevenson and Justin Wolfers (2008, *Brookings Papers*)** analyzed hundreds of thousands of subjective life satisfaction surveys across 140 countries over three decades.',
          'They established that subjective happiness rises log-linearly with real GDP per capita, finding **no satiation point** or plateau even in the wealthiest economies. Wealthier societies systematically deliver better hospital survival rates, lower cancer mortality, superior educational outcomes, higher investment in basic scientific research, and lower violent crime rates.',
        ],
      },
      {
        heading: 'The Dangerous Political Economy of Zero Growth',
        paragraphs: [
          'In *The Moral Consequences of Economic Growth* (2005), Harvard economist **Benjamin Friedman** demonstrates that economic growth is the essential historical bedrock of open, tolerant, democratic societies. When economies grow, citizens perceive that their children will enjoy better lives without needing to seize wealth from their neighbors, fostering generous social policies, racial tolerance, and international cooperation.',
          'Conversely, when growth halts and the economic pie stagnates, politics degenerates into a vicious, zero-sum war between social classes, generations, and ethnic factions. Far from ushering in peaceful eco-communalism, historical periods of sustained economic contraction consistently breed authoritarian revanchism, xenophobia, and democratic collapse.',
        ],
      },
    ],
    details: [
      'Stevenson & Wolfers (2008) showed the relationship between subjective well-being and GDP per capita is positive and monotonic across all income strata.',
      'Benjamin Friedman’s historical analysis proved that periods of economic stagnation in the 1890s and 1930s directly fueled populist anti-immigrant and fascist movements.',
      'Nations with higher GDP per capita consistently invest larger percentages of national income in environmental protection, pollution remediation, and public parks.',
    ],
    sources: [
      {
        title: 'The Moral Consequences of Economic Growth',
        url: 'https://www.penguinrandomhouse.com/books/56885/the-moral-consequences-of-economic-growth-by-benjamin-m-friedman/',
        publisher: 'Vintage Books / Harvard University (Benjamin M. Friedman)',
        year: '2005',
        category: 'Scholarship',
      },
      {
        title: 'Economic Growth and Subjective Well-Being: Reassessing the Easterlin Paradox',
        url: 'https://www.brookings.edu/articles/economic-growth-and-subjective-well-being-reassessing-the-easterlin-paradox/',
        publisher: 'Brookings Institution (Betsey Stevenson & Justin Wolfers)',
        year: '2008',
        category: 'Scholarship',
      },
    ],
    tags: ['Economics', 'Philosophy & Ethics', 'Macroeconomics', 'Empirical Studies'],
    era: '2005–Present',
    relatedIds: ['con-cld-raworth-doughnut-universal-services'],
  },
];

export const climateGrowthDegrowthDataset: DebateGraphDataset = {
  id: 'climate-growth-degrowth',
  version: '1.0.0',
  shortTitle: 'Green Growth vs. Degrowth',
  title: 'Climate Strategy: Green Growth vs. Degrowth',
  subtitle:
    'Technological decoupling & clean capitalism vs. planetary limits & economic downscaling',
  searchPlaceholder:
    'Search decoupling, Hickel, Ritchie, planetary boundaries, Jevons paradox, material footprint... (/)',
  epistemologyNote:
    'The Green Growth vs. Degrowth divide contrasts neoclassical environmental economics (Kuznets curves, total factor productivity, clean substitution) with ecological economics (thermodynamics, material flow analysis, biophysical limits, Earth system boundaries).',
  availableTags: [
    'Energy & Climate',
    'Economics',
    'Macroeconomics',
    'Empirical Studies',
    'Philosophy & Ethics',
    'Trade & Industry',
    'Governance',
    'Labor & Welfare',
    'Science & Innovation',
    'Human Rights',
  ],
  shortPillarLabels: {
    'pillar-cld-decoupling': '1. Absolute Decoupling',
    'pillar-cld-limits': '2. Planetary Boundaries',
    'pillar-cld-global-south': '3. Global South Justice',
    'pillar-cld-postcapitalism': '4. Post-Capitalist Provisioning',
  },
  lastUpdated: '2026-03-30',
  nodes: climateGrowthDegrowthNodes,
};
