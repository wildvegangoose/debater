import { DebateGraphDataset, DebateNode } from '../../types/debate';

export const drugDecriminalizationNodes: DebateNode[] = [
  // ============================================================================
  // ROOT NODE
  // ============================================================================
  {
    id: 'root-drug-decriminalization',
    parentId: null,
    kind: 'root',
    title: 'Drug Decriminalization & Legalization',
    summary:
      'The defining debate over drug prohibition and drug policy reform: weighing public health harm reduction, the dismantling of racist mass incarceration, defunding criminal cartels, and individual bodily autonomy against escalating overdose deaths, public street disorder, open-air drug scenes, and the danger of corporate commercialization.',
    sections: [
      {
        heading: 'The War on Drugs and the Harm Reduction Revolution',
        paragraphs: [
          'For over fifty years following President Richard Nixon’s 1971 declaration of the "War on Drugs," global drug policy has relied on criminal prohibition, border interdiction, mandatory minimum prison sentences, and crop eradication. Yet despite hundreds of billions of dollars expended and millions of people incarcerated—disproportionately Black, Latino, and marginalized working-class citizens—illicit narcotics have become demonstrably cheaper, purer, and vastly more lethal with the proliferation of synthetic opioids like **fentanyl** and chemical sedatives like xylazine.',
          'Reformers led by neuroscientist **Dr. Carl Hart** (*Drug Use for Grown-Ups*), **Ethan Nadelmann** (Drug Policy Alliance), and former Swiss and Portuguese health ministers argue that prohibition is an abysmal, deadly failure. Grounded in the philosophy of **harm reduction**, they advocate treating drug use as a public health issue rather than a criminal offense: decriminalizing personal possession, establishing **supervised consumption sites (overdose prevention centers)**, expanding drug checking, and ending the militarized policing that fuels inner-city violence and empowers brutal transnational cartels.',
        ],
      },
      {
        heading: 'The Counter-Reaction: Public Disorder, Addiction Surges, and Commercialization',
        paragraphs: [
          'Conversely, public health scholars including **Keith Humphreys** (Stanford University), **Kevin Sabet** (Smart Approaches to Marijuana), and municipal leaders emphasize that unconstrained decriminalization carries severe social and medical externalities. When **Oregon passed Measure 110 in 2020**—decriminalizing personal possession of all hard drugs without establishing mandatory treatment off-ramps—the state suffered a 40% surge in fentanyl overdoses, rampant open-air drug markets, widespread public retail theft, and overwhelmed municipal services, culminating in a bipartisan legislative **repeal of Measure 110 in 2024**.',
          'Furthermore, drug policy experts warn against the perils of corporate commercialization: replacing the criminal cartel with an unregulated "Big Cannabis" or "Big Pharma" corporate model that relies on marketing high-potency addictive substances to the most vulnerable 20% of users who consume 80% of volume.',
        ],
      },
    ],
    details: [
      'Over 107,000 Americans died from drug overdoses in 2023, with over 70% driven by illicit synthetic fentanyl (CDC National Center for Health Statistics).',
      'Portugal decriminalized the personal possession of all drugs in 2001, replacing criminal penalties with administrative dissuasion commissions and voluntary treatment.',
      'In April 2024, Oregon Governor Tina Kotek signed House Bill 4002, formally repealing Measure 110 and reinstating misdemeanor criminal penalties for drug possession.',
      'Featured in historic debates at the Soho Forum and Oxford Union pitting Carl Hart and Ethan Nadelmann against Kevin Sabet and Keith Humphreys.',
    ],
    sources: [
      {
        title: 'Drug Use for Grown-Ups: Chasing Liberty in the Land of Fear',
        url: 'https://www.penguinrandomhouse.com/books/534764/drug-use-for-grown-ups-by-dr-carl-l-hart/',
        publisher: 'Penguin Press (Dr. Carl L. Hart)',
        year: '2021',
        category: 'Scholarship',
      },
      {
        title: 'Responding to the Opioid Crisis in North America and Beyond: Stanford-Lancet Commission',
        url: 'https://www.thelancet.com/commissions/opioids-north-america',
        publisher: 'The Lancet (Keith Humphreys et al.)',
        year: '2022',
        category: 'Scholarship',
      },
      {
        title: 'Soho Forum Debate: All Drugs Should Be Legalized for Adult Use',
        url: 'https://www.thesohoforum.org/debates',
        publisher: 'The Soho Forum (Carl Hart vs. Nick Gillespie)',
        year: '2021',
        category: 'Debate / Broadcast',
      },
      {
        title: 'Provisional Drug Overdose Death Counts',
        url: 'https://www.cdc.gov/nchs/nvss/vsrr/drug-overdose-data.htm',
        publisher: 'CDC National Center for Health Statistics',
        year: '2024',
        category: 'Court / Official Record',
      },
    ],
    tags: ['Criminal Justice', 'Civil Liberties', 'Housing & Healthcare', 'Philosophy & Ethics', 'Empirical Studies'],
    era: '1971–Present',
  },

  // ============================================================================
  // PILLAR 1: Harm Reduction & Ending Cartel Violence
  // ============================================================================
  {
    id: 'pillar-drug-harm-reduction',
    parentId: 'root-drug-decriminalization',
    kind: 'pillar',
    title: 'Harm Reduction & Ending Cartel Violence',
    summary:
      'Investigates the core pillar of drug reform: replacing criminal prosecution with public health harm reduction (Portugal model, supervised injection sites, needle exchanges) to reduce infectious diseases and defund violent illicit black-market cartels.',
    sections: [
      {
        heading: 'The Paradigm of Public Health Harm Reduction',
        paragraphs: [
          'The fundamental premise of **harm reduction** is that drug use has existed across all human cultures throughout recorded history, and that completely eliminating it through state coercion is an impossible, moralistic fantasy. Instead of attempting to force abstinence through handcuffs and cages, harm reduction policies focus pragmatically on **minimizing the adverse health, social, and economic consequences** of drug use.',
          'Interventions such as needle exchange programs, **Overdose Prevention Centers (OPCs / supervised consumption sites)**, naloxone (Narcan) distribution, and mass spectrometry drug-checking strips meet people "where they are." In cities from Vancouver and Zurich to New York City, supervised consumption sites have supervised millions of injections without a single fatal overdose on site, while connecting marginalized users to primary medical care, housing, and addiction treatment.',
        ],
      },
      {
        heading: 'Prohibition as the Engine of Cartel Violence and Mass Incarceration',
        paragraphs: [
          'Economists and criminologists emphasize that criminal prohibition creates an artificial, state-sponsored **black-market monopoly profit margin**. Because the state outlaws chemical supply while consumer demand remains inelastic, illicit drug prices are inflated by up to 10,000% above agricultural production costs, generating hundreds of billions of dollars in untaxed revenue for violent organized crime syndicates.',
          'In Mexico, Central America, and Colombia, this prohibition-induced profit margin has funded heavily armed cartels (Sinaloa, CJNG) that corrupt judicial systems, assassinate political leaders, and have killed over 300,000 citizens. Domestically, the War on Drugs fueled the expansion of American **mass incarceration**, driving U.S. prison populations from 300,000 in 1970 to over 2 million by the 2000s, with deep racial disparities.',
        ],
      },
    ],
    details: [
      'Portugal’s 2001 decriminalization reform was followed by an ~80% reduction in new HIV diagnoses among people who inject drugs over two decades (EMCDDA 2023).',
      'Over 200 supervised consumption facilities operate across 14 countries, with zero recorded overdose deaths inside any facility worldwide (Lancet Public Health 2022).',
      'The American Civil Liberties Union (ACLU) documents that Black Americans are arrested for drug possession at 3.6 times the rate of white Americans despite nearly identical usage rates.',
      'Prohibition inflates the wholesale street price of cocaine and heroin by 20x to 100x above their agricultural and chemical production costs.',
    ],
    sources: [
      {
        title: 'Drug Policy in Portugal: The Benefits of Decriminalizing Drug Use',
        url: 'https://www.emcdda.europa.eu/publications/topic-overviews/content/portugal-drug-laws_en',
        publisher: 'European Monitoring Centre for Drugs and Drug Addiction (EMCDDA)',
        year: '2023',
        category: 'Court / Official Record',
      },
      {
        title: 'Supervised Consumption Sites and Overdose Prevention: A Systematic Review',
        url: 'https://www.thelancet.com/journals/lanpub/article/PIIS2468-2667(22)00213-9/fulltext',
        publisher: 'The Lancet Public Health',
        year: '2022',
        category: 'Scholarship',
      },
      {
        title: 'The New Jim Crow: Mass Incarceration in the Age of Colorblindness',
        url: 'https://thenewjimcrow.com/',
        publisher: 'The New Press (Michelle Alexander)',
        year: '2010',
        category: 'Scholarship',
      },
    ],
    tags: ['Criminal Justice', 'Civil Liberties', 'Human Rights', 'Housing & Healthcare', 'Empirical Studies'],
    era: '1986–Present',
  },

  // Thesis 1A
  {
    id: 'thesis-drug-portugal-decriminalization',
    parentId: 'pillar-drug-harm-reduction',
    kind: 'thesis',
    title: 'The Portugal Model: Decriminalization Paired with Dissuasion and Treatment',
    summary:
      'Weighs the landmark empirical success of Portugal’s 2001 decriminalization of all drug possession against recent backlashes caused by budget cuts, public drug scenes, and police frustration.',
    sections: [
      {
        heading: 'The Architecture of Portugal’s 2001 Reform',
        paragraphs: [
          'In 2001, facing a national heroin epidemic where 1% of its population was addicted and HIV infection rates were the highest in the European Union, Portugal enacted Law 30/2000, decriminalizing the acquisition and personal possession of up to a 10-day supply of all illicit drugs. Critically, Portugal did not legalize drug sales or abandon state intervention; instead, it reclassified possession as an administrative offense.',
          'Individuals detained with drugs are referred to non-judicial **Commissions for the Dissuasion of Drug Addiction (CDTs)**—composed of a psychologist, a social worker, and a legal expert. The commission evaluates whether the individual is an experimental user, a recreational user, or suffers from severe addiction, directing them toward free public treatment, psychological support, or community service.',
        ],
      },
      {
        heading: 'Long-Term Success and Modern Strains',
        paragraphs: [
          'Over the subsequent fifteen years, Portugal achieved extraordinary public health gains: drug-induced deaths fell to among the lowest in Europe (roughly 3 to 6 per million, compared to an EU average of 17 and a U.S. rate exceeding 300 per million), HIV infections among injecting drug users plummeted by over 90%, and the prison population serving drug-related sentences dropped from 44% down to under 15%.',
          'However, following severe public spending austerity during the eurozone debt crisis, funding for outreach teams, street monitors, and addiction treatment centers was slashed by over 50%. By 2023, open-air drug consumption resurfaced in Porto and Lisbon, sparking public outrage, rising petty crime, and calls from conservative parties to recriminalize public use.',
        ],
      },
    ],
    details: [
      'New HIV diagnoses among Portuguese drug injectors plunged from 1,016 cases in 2001 to fewer than 50 cases in 2022 (SICAD).',
      'Portugal’s overdose death rate sits at roughly 6 per million residents, compared to ~320 per million in the United States (CDC 2023).',
      'A 2023 Washington Post investigation reported that street outreach teams were operating at 40% staffing due to municipal funding reallocations, eroding early intervention.',
    ],
    sources: [
      {
        title: 'Decriminalization of Drug Use in Portugal: The Alternative to a "War on Drugs"',
        url: 'https://academic.oup.com/bjc/article-abstract/50/6/999/408892',
        publisher: 'British Journal of Criminology (Caitlin Elizabeth Hughes & Alex Stevens)',
        year: '2010',
        category: 'Scholarship',
      },
      {
        title: 'Once a Model for Decriminalizing Drugs, Portugal Is Having Second Thoughts',
        url: 'https://www.washingtonpost.com/world/2023/07/07/portugal-drugs-decriminalization-crisis/',
        publisher: 'The Washington Post (Terrence McCoy)',
        year: '2023',
        category: 'Debate / Broadcast',
      },
    ],
    tags: ['Criminal Justice', 'Housing & Healthcare', 'Empirical Studies'],
    era: '2001–Present',
    relatedIds: ['thesis-drug-mass-incarceration-cartels'],
  },
  {
    id: 'pro-drug-portugal-overdose-hiv-drop',
    parentId: 'thesis-drug-portugal-decriminalization',
    kind: 'pro',
    title: 'Portugal 2001 Reform: HIV Plunged, Overdoses Collapsed, and Incarceration Fell',
    summary:
      'Replacing police handcuffs with medical dissuasion commissions enabled Portugal to slash HIV infections by 90%, cut drug-related incarceration by two-thirds, and maintain the EU’s lowest overdose rates.',
    sections: [
      {
        heading: 'Shattering the Prohibitionist Prophecy',
        paragraphs: [
          'When Portugal debated decriminalization in 2000, prohibitionist opponents predicted catastrophic doom: that Lisbon would become a global narcotics tourism hub, youth addiction would explode, and public hospitals would be overrun. Over two decades of rigorous empirical epidemiology conclusively proved these fears wrong.',
          'Youth drug experimentation in Portugal actually declined or mirrored regional European trends, while adult lifetime use remained stable. Most dramatically, by removing the fear of criminal arrest, dependent individuals voluntarily sought healthcare: enrollment in state-funded **substitution therapy (methadone and buprenorphine)** increased by over 150% in the first seven years.',
        ],
      },
      {
        heading: 'Decarceration and Public Health Reallocation',
        paragraphs: [
          'Decriminalization transformed the criminal justice system. In 1999, nearly half (44%) of all prisoners in Portuguese penitentiaries were incarcerated for minor drug offenses. By reallocating judicial, policing, and correctional budgets away from processing low-level drug users, Portugal redirected scarce state resources toward mobile methadone vans, free needle exchanges, and subsidized housing.',
          'The Portuguese experience proved that drug addiction is a chronic health condition that responds to medical and social support, whereas criminal punishment exacerbates isolation, poverty, and overdose risk.',
        ],
      },
    ],
    details: [
      'The number of people in drug substitution treatment in Portugal expanded from ~6,000 in 1999 to over 25,000 by 2008.',
      'Drug-related court caseloads dropped by over 60%, allowing judges to focus on violent organized crime and corruption.',
      'The social cost of drug abuse in Portugal (health expenditures, judicial costs, lost productivity) declined by 18% in the first decade following reform (Hughes & Stevens 2010).',
    ],
    sources: [
      {
        title: 'What Can We Learn from the Portuguese Decriminalization of Illicit Drugs?',
        url: 'https://academic.oup.com/bjc/article-abstract/50/6/999/408892',
        publisher: 'British Journal of Criminology (Caitlin Elizabeth Hughes & Alex Stevens)',
        year: '2010',
        category: 'Scholarship',
      },
      {
        title: 'SICAD Annual Report: The State of the Drugs Problem in Portugal',
        url: 'https://www.sicad.pt/',
        publisher: 'General Directorate for Intervention on Addictive Behaviours and Dependencies (SICAD)',
        year: '2022',
        category: 'Court / Official Record',
      },
    ],
    tags: ['Criminal Justice', 'Housing & Healthcare', 'Empirical Studies'],
    era: '2001–Present',
    relatedIds: ['con-drug-portugal-relapse-funding-decay'],
  },
  {
    id: 'con-drug-portugal-relapse-funding-decay',
    parentId: 'thesis-drug-portugal-decriminalization',
    kind: 'con',
    title: 'Recent Portuguese Backlash: Funding Cuts, Open Drug Scene Resurgence & Police Frustration',
    summary:
      'Recent years show severe cracks in the Portuguese model: austerity budget cuts, rising open-air drug scenes in Porto, and police helplessness to intervene against public disorder.',
    sections: [
      {
        heading: 'The Vulnerability of Harm Reduction to Fiscal Austerity',
        paragraphs: [
          'The modern crisis in Portugal exposes the critical prerequisite of the Portugal model: **decriminalization cannot function without vast, sustained public health funding**. Following the 2011 European sovereign debt crisis, Portugal decentralized drug oversight and cut budgets for street outreach teams, psychological evaluation panels, and rehabilitation beds by roughly 50%.',
          'Without proactive outreach workers engaging drug users on the streets and shuttling them to treatment clinics, the Dissuasion Commissions became toothless administrative bodies. In cities like Porto and Lisbon, open-air drug markets proliferated along residential streets and school routes, with used syringes littering public parks and tourists confronting aggressive begging.',
        ],
      },
      {
        heading: 'Police Disillusionment and the Limits of Voluntary Care',
        paragraphs: [
          'Portuguese law enforcement officials increasingly voice frustration over their inability to maintain public order. Because drug possession is entirely civil and penalties are purely administrative, police officers can do nothing more than issue paper citations that chronic street users routinely ignore.',
          'A 2023 national survey showed that over 60% of Portuguese citizens favored tightening drug laws to penalize open public consumption, demonstrating that when harm reduction fails to manage public disorder, democratic electorates inevitably turn back toward criminalization.',
        ],
      },
    ],
    details: [
      'In Porto’s Pasteleira neighborhood, residents organized protests in 2022–2023 against large open-air drug markets that operated adjacent to primary schools.',
      'Overdose deaths in Portugal reached a 12-year high in 2021, and drug residues in wastewater in Lisbon and Porto showed sharp increases in cocaine and ketamine (EMCDDA).',
      'Porto’s municipal council voted in 2023 to criminalize drug consumption in public spaces, challenging the national decriminalization framework.',
    ],
    sources: [
      {
        title: 'Open-Air Drug Markets and Municipal Backlash in Urban Portugal',
        url: 'https://www.publico.pt/2023/07/09/sociedade/noticia/pasteleira-consumo-droga-rua-2056234',
        publisher: 'Público (Portugal)',
        year: '2023',
        category: 'Debate / Broadcast',
      },
      {
        title: 'European Drug Report 2023: Trends and Developments',
        url: 'https://www.emcdda.europa.eu/publications/edr/trends-developments/2023_en',
        publisher: 'European Monitoring Centre for Drugs and Drug Addiction',
        year: '2023',
        category: 'Court / Official Record',
      },
    ],
    tags: ['Criminal Justice', 'Housing & Healthcare', 'Governance'],
    era: '2021–Present',
    relatedIds: ['pro-drug-portugal-overdose-hiv-drop'],
  },

  // Thesis 1B
  {
    id: 'thesis-drug-mass-incarceration-cartels',
    parentId: 'pillar-drug-harm-reduction',
    kind: 'thesis',
    title: 'Ending Racist Mass Incarceration & Bankrupting Criminal Cartels',
    summary:
      'Weighs the argument that legalizing drugs dismantles racialized mass incarceration and bankrupts organized crime against the reality that criminal cartels easily diversify into extortion and synthetic chemicals.',
    sections: [
      {
        heading: 'Dismantling the Architecture of Mass Incarceration',
        paragraphs: [
          'In *The New Jim Crow* (2010), legal scholar **Michelle Alexander** exposed how the War on Drugs functioned as a racialized caste system in the United States. Although Black and white Americans use and sell drugs at remarkably similar rates, Black men were imprisoned on drug charges at up to **20 to 50 times the rate** of white men in some states, stripped of their voting rights, excluded from public housing, and denied employment.',
          'Decriminalizing drug possession and legalizing regulated distribution is therefore an indispensable civil rights imperative: eliminating the primary pretext police use for pretextual traffic stops, stop-and-frisk searches, civil asset forfeiture, and racially biased mass incarceration.',
        ],
      },
      {
        heading: 'The Resilience of Transnational Organized Crime',
        paragraphs: [
          'Prohibition critics historically argued that legalizing drugs would bankrupt violent cartels by stripping away their black-market profits. However, modern criminologists note that organized crime syndicates are highly diversified, multi-industry criminal enterprises.',
          'When American states legalized cannabis, Mexican cartels did not dissolve; they simply pivoted to **fentanyl synthesis, methamphetamine production, extortion, human trafficking, fuel theft (huachicol), and monopolizing the multi-billion-dollar avocado export trade**. Legalizing recreational drugs does not dismantle violent criminal structures whose core comparative advantage is wielding violence to enforce monopoly rents.',
        ],
      },
    ],
    details: [
      'Between 1980 and 2010, the number of Americans incarcerated for drug offenses surged from 40,900 to nearly 500,000 (The Sentencing Project).',
      'The Mexican Cartel Jalisco Nueva Generación (CJNG) and Sinaloa Cartel derive a growing fraction of revenue from extortion of legal agricultural and mining businesses.',
      'Civil asset forfeiture allows U.S. law enforcement agencies to seize billions in cash and property without charging the owner with a crime, creating a direct financial incentive for aggressive drug arrests.',
    ],
    sources: [
      {
        title: 'The New Jim Crow: Mass Incarceration in the Age of Colorblindness',
        url: 'https://thenewjimcrow.com/',
        publisher: 'The New Press (Michelle Alexander)',
        year: '2010',
        category: 'Scholarship',
      },
      {
        title: 'Organized Crime and Violence in Mexico: Special Report',
        url: 'https://www.wilsoncenter.org/program/mexico-institute',
        publisher: 'Woodrow Wilson International Center for Scholars',
        year: '2023',
        category: 'Scholarship',
      },
    ],
    tags: ['Criminal Justice', 'Human Rights', 'Civil Liberties', 'National Security'],
    era: '2010–Present',
    relatedIds: ['thesis-drug-portugal-decriminalization'],
  },
  {
    id: 'pro-drug-dismantling-prohibition-incarceration',
    parentId: 'thesis-drug-mass-incarceration-cartels',
    kind: 'pro',
    title: 'The War on Drugs Built Racialized Incarceration and Enriched Violent Cartels',
    summary:
      'Prohibition has been the single most destructive domestic policy in modern history: locking up millions of minority citizens while creating multi-billion-dollar black market cartels.',
    sections: [
      {
        heading: 'The Devastating Domestic Toll of Drug Prohibition',
        paragraphs: [
          'Fifty years of the War on Drugs has delivered zero reduction in drug availability while inflicting catastrophic damage on American civil society. Mandatory minimum sentencing, three-strikes laws, and militarized SWAT raids destroyed millions of families, leaving one in nine Black children with an incarcerated parent.',
          'Criminal records permanently brand individuals with a lifelong civil disability: denying them student loans, federal food assistance, occupational licenses, and voting rights. By removing criminal penalties, decriminalization directly eliminates the primary legal machinery through which racial bias is codified in the justice system.',
        ],
      },
      {
        heading: 'Prohibition Creates the Black-Market Profit Engine',
        paragraphs: [
          'Basic economics proves that violence is not an intrinsic property of the coca leaf or poppy flower; it is the inevitable physical consequence of **prohibition-created property rights enforcement**. Because illegal drug merchants cannot resolve commercial contract disputes or territorial claims in court, they must resolve them with Kalashnikovs and car bombs.',
          'During alcohol prohibition in the 1920s, Al Capone and violent syndicates terrorized American cities; when the 21st Amendment repealed prohibition in 1933, mob shootouts over whiskey supply lines vanished overnight. Legalizing, regulating, and taxing drugs is the only mechanism that strips criminal syndicates of their multi-billion-dollar profit margins.',
        ],
      },
    ],
    details: [
      'Over 1.1 million people are arrested in the United States every year for non-violent drug violations, with over 80% arrested for simple possession (FBI UCR 2022).',
      'Alcohol prohibition in the U.S. (1920–1933) saw the homicide rate rise by 78%, before dropping back to pre-prohibition levels following repeal.',
      'The Sentencing Project documented that racial disparities in drug sentencing persist despite federal legislation (Fair Sentencing Act of 2010).',
    ],
    sources: [
      {
        title: 'Federal Drug Sentencing: Decades of Disparity and Reform',
        url: 'https://www.sentencingproject.org/reports/federal-drug-sentencing/',
        publisher: 'The Sentencing Project',
        year: '2022',
        category: 'Watchdog / NGO',
      },
      {
        title: 'The Economics of the Drug War',
        url: 'https://www.cato.org/policy-analysis/economics-drug-war',
        publisher: 'Cato Institute (Jeffrey A. Miron)',
        year: '2019',
        category: 'Scholarship',
      },
    ],
    tags: ['Criminal Justice', 'Civil Liberties', 'Human Rights', 'Economics'],
    era: '2019–Present',
    relatedIds: ['con-drug-cartel-diversification-extortion'],
  },
  {
    id: 'con-drug-cartel-diversification-extortion',
    parentId: 'thesis-drug-mass-incarceration-cartels',
    kind: 'con',
    title: 'Cartel Resilience: Organized Crime Diversifies into Fentanyl, Extortion, and Smuggling',
    summary:
      'Legalization does not defund cartels: organized crime effortlessly pivots into synthetic chemicals, migrant smuggling, and extorting legal agricultural industries.',
    sections: [
      {
        heading: 'The Illusion of Defunding Cartels Through Cannabis Legalization',
        paragraphs: [
          'Proponents of legalization promised that legalizing adult-use cannabis across American states and Canada would deal a crippling financial blow to Mexican drug trafficking organizations. In reality, the cartels adapted with ruthless agility. As wholesale cannabis margins collapsed, the **Sinaloa Cartel and CJNG** invested in clandestine industrial chemical laboratories, importing precursor chemicals from China to synthesize **fentanyl and methamphetamine** at pennies per dose.',
          'Because synthetic drugs require no land, no rain, and no seasonal agricultural cycles, cartel profit margins skyrocketed to unprecedented heights. Furthermore, illegal black-market cannabis continues to thrive across California and New York by undercutting legal dispensary prices that are inflated by 30% to 40% in state excise and sales taxes.',
        ],
      },
      {
        heading: 'Predatory Extortion of the Legal Terrestrial Economy',
        paragraphs: [
          'Transnational criminal syndicates are not commodity merchants; they are predatory **monopolies of violence**. In Michoacán and Guerrero, Mexican cartels generate hundreds of millions of dollars by taxing legal lime growers, packing facilities, and multinational avocado exporters under threat of kidnapping and murder.',
          'They control human trafficking corridors along the U.S. southern border, charging migrants $5,000 to $15,000 per crossing. Legalizing specific narcotics does not dissolve criminal armies equipped with military-grade Barrett .50-caliber rifles, armored gun trucks, and weaponized drones.',
        ],
      },
    ],
    details: [
      'Fentanyl synthesis costs less than $1,000 to manufacture 1 kilogram, which yields up to $100,000 in wholesale street profit in the United States (DEA 2024).',
      'The black market for cannabis in California continues to account for over 60% of total state consumption due to high taxes and municipal retail bans.',
      'U.S. border human smuggling generated an estimated $13 billion in illicit revenues for Mexican cartels in 2022 (Homeland Security Investigations).',
    ],
    sources: [
      {
        title: 'DEA National Drug Threat Assessment 2024',
        url: 'https://www.dea.gov/ndta',
        publisher: 'U.S. Drug Enforcement Administration',
        year: '2024',
        category: 'Court / Official Record',
      },
      {
        title: 'Illicit Cannabis Markets in Legalized States: A Systematic Assessment',
        url: 'https://www.rand.org/pubs/research_reports/RRA1000-1.html',
        publisher: 'RAND Corporation (Beau Kilmer et al.)',
        year: '2021',
        category: 'Scholarship',
      },
    ],
    tags: ['National Security', 'Criminal Justice', 'Economics'],
    era: '2021–Present',
    relatedIds: ['pro-drug-dismantling-prohibition-incarceration'],
  },

  // ============================================================================
  // PILLAR 2: Addiction Surges & Public Disorder
  // ============================================================================
  {
    id: 'pillar-drug-public-health',
    parentId: 'root-drug-decriminalization',
    kind: 'pillar',
    title: 'Addiction Surges & Public Disorder',
    summary:
      'Examines the acute public health and civic challenges of decriminalization: the rise of open-air drug markets, retail crime, municipal street disorder, the lessons of Oregon Measure 110’s repeal, and the lethal synthetic chemistry of illicit fentanyl.',
    sections: [
      {
        heading: 'The Oregon Measure 110 Experiment and Bipartisan Repeal',
        paragraphs: [
          'In November 2020, Oregon voters passed **Measure 110 (the Drug Addiction Treatment and Recovery Act)** with 58% of the vote, making Oregon the first American state to decriminalize the personal possession of all hard drugs, including methamphetamine, heroin, and cocaine. Under Measure 110, police could no longer arrest individuals for drug possession; instead, they issued a $100 civil citation that was waived if the individual called a phone hotline for an addiction health assessment.',
          'The result was widely viewed as a municipal catastrophe. Less than 1% of cited individuals ever called the treatment hotline. Over the next three years, downtown Portland and Eugene witnessed sprawling encampments with visible open-air fentanyl consumption, discarded syringes in business doorways, severe retail property theft, and a **44% surge in synthetic opioid overdose deaths**. In April 2024, the Oregon Legislature overwhelmingly passed House Bill 4002 with broad bipartisan supermajorities, formally repealing Measure 110 and reinstating misdemeanor criminal penalties.',
        ],
      },
      {
        heading: 'Synthetic Chemistry and the Iron Law of Prohibition',
        paragraphs: [
          'At the root of the modern drug mortality crisis is the shift from plant-based drugs (heroin, cocaine) to ultra-potent **synthetic chemicals (fentanyl, carfentanil, nitazenes)**. Proponents of decriminalization cite **Richard Cowan’s "Iron Law of Prohibition"**: as law enforcement tightens border interdiction, suppliers substitute bulkier, weaker substances for ultra-concentrated, easily hidden synthetic compounds.',
          'However, public health experts emphasize that synthetic fentanyl is fundamentally different from cannabis or even pharmaceutical heroin: its lethal dose is a microscopic 2 milligrams, it hijacks brain opioid receptors instantly, and its rapid pharmacokinetics cause respiratory arrest within minutes, rendering purely voluntary harm reduction inadequate to prevent street death.',
        ],
      },
    ],
    details: [
      'In Oregon, synthetic opioid overdose fatalities jumped from 280 in 2019 to 1,268 in 2023 following the passage of Measure 110 (Oregon Health Authority).',
      'Of the first 4,000 civil citations issued by Oregon police under Measure 110, only 92 individuals called the hotline to request an addiction assessment.',
      'Fentanyl is 50 times more potent than heroin and 100 times more potent than morphine, allowing a suitcase of pure fentanyl powder to supply tens of millions of doses.',
      'In April 2024, Oregon House Bill 4002 passed the House 51-7 and Senate 21-8, restoring up to six months of jail time for drug possession while offering "deflection" treatment pathways.',
    ],
    sources: [
      {
        title: 'The Oregon Experiment: Evaluating Measure 110 Implementation and Outcomes',
        url: 'https://health.oregon.gov/oha/HSD/AMH/Pages/Measure110.aspx',
        publisher: 'Oregon Health Authority (OHA)',
        year: '2023',
        category: 'Court / Official Record',
      },
      {
        title: 'Evaluating the Effects of Oregon Measure 110 on Overdose Mortality',
        url: 'https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2809968',
        publisher: 'JAMA Network Open (Spicer et al.)',
        year: '2023',
        category: 'Scholarship',
      },
      {
        title: 'Oregon Enacts House Bill 4002: Recriminalization of Drug Possession',
        url: 'https://olis.oregonlegislature.gov/liz/2024R1/Measures/Overview/HB4002',
        publisher: 'Oregon Legislative Information System (OLIS)',
        year: '2024',
        category: 'Court / Official Record',
      },
    ],
    tags: ['Housing & Healthcare', 'Criminal Justice', 'Empirical Studies', 'Governance'],
    era: '2020–Present',
  },

  // Thesis 2A
  {
    id: 'thesis-drug-oregon-measure-110',
    parentId: 'pillar-drug-public-health',
    kind: 'thesis',
    title: 'The Failure & Recriminalization of Oregon Measure 110',
    summary:
      'Evaluates the debate over why Oregon’s landmark decriminalization experiment failed—whether due to intrinsic policy flaws in removing legal leverage or administrative failures to fund treatment during a historic fentanyl surge.',
    sections: [
      {
        heading: 'The Structural Breakdown of Measure 110',
        paragraphs: [
          'Critics of Oregon Measure 110—including addiction medicine doctors, urban mayors, and downtown merchants—argue that the law committed an elementary mistake: **decriminalizing drug possession before building treatment infrastructure, while removing all legal leverage to mandate care**. In Portugal, users who refuse help face administrative sanctions (confiscation of assets, bans on visiting specific districts, suspension of professional licenses).',
          'In Oregon, the only penalty was a nominal $100 ticket with zero enforcement mechanism: if an individual threw the ticket in the gutter, there was no bench warrant, no fine escalation, and no legal consequence. Without any coercive leverage or mandated intervention, individuals suffering from severe fentanyl and methamphetamine psychosis remained on public sidewalks, leading to skyrocketing retail theft, public transit abandonment, and unprecedented overdose death rates.',
        ],
      },
      {
        heading: 'The Confounding Fentanyl Wave and Bureaucratic Delays',
        paragraphs: [
          'Defenders of decriminalization contend that Measure 110 was unfairly scapegoated for a broader North American **fentanyl epidemic** that devastated cities regardless of drug laws. States with aggressive criminal prohibition—such as Washington, California, and West Virginia—suffered comparable or even higher percentage increases in synthetic opioid mortality over the same period.',
          'Furthermore, the Oregon Health Authority experienced severe administrative paralysis, taking over two years to distribute $265 million in voter-approved cannabis tax revenues to community behavioral health providers. Decriminalization was blamed for street disorder before the promised treatment facilities, recovery housing, and detox clinics were even opened.',
        ],
      },
    ],
    details: [
      'Fentanyl deaths surged by over 400% across the entire Pacific Northwest between 2020 and 2023, driven by the mass arrival of cheap illicit "blues" pills.',
      'A 2023 survey by DHM Research found that 56% of Oregonians supported repealing Measure 110 entirely and restoring criminal penalties.',
      'Oregon ranked 50th out of 50 U.S. states in access to addiction treatment services according to Mental Health America.',
    ],
    sources: [
      {
        title: 'Oregon’s Measure 110: The Flawed Implementation of Drug Decriminalization',
        url: 'https://www.brookings.edu/articles/oregons-measure-110-drug-decriminalization/',
        publisher: 'Brookings Institution',
        year: '2023',
        category: 'Scholarship',
      },
      {
        title: 'Rapid Proliferation of Illicit Fentanyl in the Western United States',
        url: 'https://www.cdc.gov/mmwr/volumes/72/wr/mm7240a1.htm',
        publisher: 'CDC Morbidity and Mortality Weekly Report (MMWR)',
        year: '2023',
        category: 'Court / Official Record',
      },
    ],
    tags: ['Housing & Healthcare', 'Criminal Justice', 'Governance', 'Empirical Studies'],
    era: '2020–Present',
    relatedIds: ['thesis-drug-fentanyl-toxic-supply'],
  },
  {
    id: 'con-drug-oregon-overdose-disorder-repeal',
    parentId: 'thesis-drug-oregon-measure-110',
    kind: 'con',
    title: 'Oregon Measure 110 Repeal: 2024 Overdose Spikes, Open-Air Markets & Voluntary Failure',
    summary:
      'Removing legal consequences without mandatory treatment created sprawling open-air drug scenes, municipal chaos, and public despair, forcing a bipartisan recriminalization.',
    sections: [
      {
        heading: 'The Collapse of Public Space and Urban Safety',
        paragraphs: [
          'The practical outcome of Oregon Measure 110 was not a European-style public health renaissance; it was the collapse of basic urban civility and public safety in downtown Portland. Open consumption of illicit powdered fentanyl smoked off tin foil became ubiquitous on public sidewalks, outside retail shops, and on light-rail trains. First responders were overwhelmed, with ambulances reviving the same individuals with Narcan multiple times in a single shift only for them to immediately return to the street.',
          'Violent crime, shootings linked to street dealers, and retail shoplifting skyrocketed, driving major corporate retailers (Nike, REI, Target) and small local businesses to close their flagship downtown locations. Measure 110 proved that completely eliminating legal deterrence creates concentrated zones of human despair.',
        ],
      },
      {
        heading: 'The Myth of Purely Voluntary Addiction Recovery',
        paragraphs: [
          'Addiction psychiatrists and public health scholars point out that severe substance use disorder damages the brain’s **prefrontal cortex**, severely impairing executive function, risk perception, and long-term rational planning. Assuming that a person deep in the throes of an excruciating fentanyl or methamphetamine dependency will voluntarily dial a phone number because a police officer handed them a polite paper slip is a profound medical absurdity.',
          'By passing **House Bill 4002 in 2024**, Oregon lawmakers recognized that compassionate public policy requires **therapeutic legal leverage**: offering diversion and probation where completion of addiction treatment expunges the criminal record, but where the threat of jail time provides the necessary structural boundary.',
        ],
      },
    ],
    details: [
      'A 2023 study by NYU and Portland State researchers found that while Measure 110 eliminated thousands of drug arrests, it failed to produce a measurable increase in treatment admissions.',
      'Emergency medical services in Portland responded to over 8,000 overdose calls in 2023, averaging more than 20 overdoses per day.',
      'The bipartisan passage of HB 4002 was championed by urban mayors and progressive district attorneys who concluded voluntary citations were completely unenforceable.',
    ],
    sources: [
      {
        title: 'The Rise and Fall of Oregon’s Drug Decriminalization Experiment',
        url: 'https://www.theatlantic.com/ideas/archive/2024/03/oregon-measure-110-recriminalization/677708/',
        publisher: 'The Atlantic (Rachel M. Cohen)',
        year: '2024',
        category: 'Debate / Broadcast',
      },
      {
        title: 'Overdose Mortality and Treatment Utilization Following Oregon Measure 110',
        url: 'https://www.nature.com/articles/s41591-023-02424-6',
        publisher: 'Nature Medicine',
        year: '2023',
        category: 'Scholarship',
      },
    ],
    tags: ['Criminal Justice', 'Housing & Healthcare', 'Governance'],
    era: '2024–Present',
    relatedIds: ['pro-drug-oregon-fentanyl-timing-treatment-delay'],
  },
  {
    id: 'pro-drug-oregon-fentanyl-timing-treatment-delay',
    parentId: 'thesis-drug-oregon-measure-110',
    kind: 'pro',
    title: 'Fentanyl Wave Confounded Measure 110: Bureaucratic Delays in Funding Care',
    summary:
      'Measure 110 coincided with a 50x lethal fentanyl wave that hit all states equally, while state bureaucracy delayed voter-approved treatment funding by two years.',
    sections: [
      {
        heading: 'The Confounding Continental Fentanyl Tsunami',
        paragraphs: [
          'Blaming Oregon Measure 110 for the surge in drug overdoses ignores basic epidemiological chronology. Prior to 2020, illicit synthetic fentanyl was concentrated primarily east of the Mississippi River; West Coast markets were dominated by Mexican black tar heroin. Between 2020 and 2023, synthetic fentanyl flooded the entire western seaboard, driving catastrophic overdose spikes in prohibitionist states like Washington (+65%), Idaho (+48%), and Nevada (+50%).',
          'A rigorous econometric study published in *JAMA Network Open* by **Spicer et al. (2023)** compared Oregon to 48 synthetic control states, concluding that after controlling for the arrival of fentanyl in western drug markets, **Measure 110 was not associated with any statistically significant increase in overdose mortality**.',
        ],
      },
      {
        heading: 'Bureaucratic Failure, Not Policy Failure',
        paragraphs: [
          'Voters enacted Measure 110 with a clear mandate: redirect cannabis tax dollars into building hundreds of new detox beds, peer-support recovery centers, and supportive housing. However, the **Oregon Health Authority (OHA)** mismanaged the rollout, mired in bureaucratic inertia that delayed grant disbursements until late 2022.',
          'By the time behavioral health providers received funding and opened 300+ new recovery programs, the political narrative had already been captured by corporate lobby groups and conservative media. Scrapping decriminalization returns Oregon to the failed status quo: spending $40,000 per year per inmate to warehouse addicted citizens in jail cells with zero long-term recovery support.',
        ],
      },
    ],
    details: [
      'Spicer et al. (JAMA Network Open 2023) analyzed CDC mortality data using synthetic controls and found no statistically significant excess overdose deaths attributable to Measure 110.',
      'By late 2023, Measure 110 funding had distributed over $265 million, supporting services for over 60,000 individuals across Oregon.',
      'Misdemeanor recriminalization will cost Oregon counties an estimated $40 million to $50 million annually in judicial processing and jail bed operations.',
    ],
    sources: [
      {
        title: 'Evaluating the Effects of Oregon Measure 110 on Overdose Mortality',
        url: 'https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2809968',
        publisher: 'JAMA Network Open (Corey S. Davis, Noah Spicer, et al.)',
        year: '2023',
        category: 'Scholarship',
      },
      {
        title: 'Oregon Measure 110 Grant Disbursements and Behavioral Health Provider Capacity',
        url: 'https://www.oregon.gov/oha/HSD/AMH/Pages/Measure110.aspx',
        publisher: 'Oregon Health Authority',
        year: '2023',
        category: 'Court / Official Record',
      },
    ],
    tags: ['Housing & Healthcare', 'Empirical Studies', 'Criminal Justice'],
    era: '2023–Present',
    relatedIds: ['con-drug-oregon-overdose-disorder-repeal'],
  },

  // Thesis 2B
  {
    id: 'thesis-drug-fentanyl-toxic-supply',
    parentId: 'pillar-drug-public-health',
    kind: 'thesis',
    title: 'The Iron Law of Prohibition vs. Fentanyl Synthetic Lethality & Safe Supply',
    summary:
      'Weighs Cowan’s Iron Law of Prohibition—that banning drugs mathematically creates ultra-potent synthetic poisons—against the real-world hazards of "safe supply" diversion.',
    sections: [
      {
        heading: 'Cowan’s Iron Law of Prohibition and Poisoned Markets',
        paragraphs: [
          'In 1986, activist **Richard Cowan** coined the **"Iron Law of Prohibition"**: *the harder the enforcement, the harder the drugs*. When the state outlaws a substance and conducts border interdiction, suppliers face severe penalties per shipment. To maximize profits and minimize detection volume, smugglers substitute bulky, milder substances for ultra-concentrated, potent chemical analogues.',
          'During alcohol prohibition, moonshiners abandoned beer and wine in favor of high-proof bathtub gin. In modern drug markets, prohibition directly engineered the extermination of natural poppy-based heroin in favor of synthetic **fentanyl** (50x stronger) and **carfentanil** (10,000x stronger), which can be mailed in tiny envelopes. Prohibition transformed a manageable dependency into an unregulated chemical game of Russian roulette.',
        ],
      },
      {
        heading: 'The Hazard of Prescribed "Safe Supply" Diversion',
        paragraphs: [
          'In response to the poisoned fentanyl supply, jurisdictions like British Columbia, Canada, pioneered government-funded **"Prescribed Safe Supply"** programs, providing pharmaceutical-grade hydromorphone (Dilaudid) tablets to dependent individuals to prevent fentanyl overdoses.',
          'However, investigative journalists and addiction researchers found that many patients did not ingest their prescribed Dilaudid (which could not satisfy their high fentanyl tolerance); instead, they sold their government-subsidized tablets on the black market to teenagers and novice users to obtain cash for street fentanyl. This massive **diversion** caused local street prices of hydromorphone to plunge by 70%, creating a new wave of adolescent opioid addiction.',
        ],
      },
    ],
    details: [
      'Illicit fentanyl now contaminates counterfeit prescription pills (Xanax, Percocet, Adderall) and cocaine, causing thousands of fatal poisonings in people with zero opioid tolerance.',
      'British Columbia’s Safe Supply program prescribed over 5 million hydromorphone tablets between 2020 and 2023, sparking nationwide debate over black-market diversion.',
      'Synthetic nitazenes (such as protonitazene), which are up to 10 times more potent than fentanyl, were detected in 20+ U.S. states in 2023–2024 (DEA).',
    ],
    sources: [
      {
        title: 'How the Federal Government Created the Fentanyl Crisis',
        url: 'https://www.nationalreview.com/magazine/2023/07/03/how-the-federal-government-created-the-fentanyl-crisis/',
        publisher: 'National Review (Richard Cowan / David French)',
        year: '2023',
        category: 'Debate / Broadcast',
      },
      {
        title: 'Prescribed Safer Supply in Canada: Evidence, Practice, and Policy Debates',
        url: 'https://www.cmaj.ca/content/195/37/E1256',
        publisher: 'Canadian Medical Association Journal (CMAJ)',
        year: '2023',
        category: 'Scholarship',
      },
    ],
    tags: ['Housing & Healthcare', 'Criminal Justice', 'Regulation & Markets'],
    era: '1986–Present',
    relatedIds: ['thesis-drug-oregon-measure-110'],
  },
  {
    id: 'pro-drug-iron-law-synthetic-potency',
    parentId: 'thesis-drug-fentanyl-toxic-supply',
    kind: 'pro',
    title: 'Cowan’s Iron Law: Prohibition Selects for Ultra-Concentrated Lethal Synthetics',
    summary:
      'Interdiction drives the synthetic revolution: banning drugs forces cartels to substitute manageable plant compounds with microscopic, lethal fentanyl and nitazenes.',
    sections: [
      {
        heading: 'The Thermodynamic Economics of Illicit Smuggling',
        paragraphs: [
          'The transition of the illicit drug supply from organic crops (coca and opium) to synthetic chemical powders was not a consumer preference; it was the inevitable mathematical consequence of **border interdiction logistics**. Smuggling 1,000 kilograms of morphine requires bulk shipping containers, truck fleets, and vulnerable border crossings. Delivering the equivalent psychoactive doses via synthetic carfentanil requires just 100 grams—a package that easily slips through international postal mail sorting centers undetected.',
          'Prohibition creates an evolutionary selection pressure where the most lethal, compact, and chemically volatile substances survive and dominate the black market. Overdose deaths are not caused by the intrinsic molecular chemistry of opiates, but by the **unknown potency and adulteration** of an unregulated street supply.',
        ],
      },
      {
        heading: 'Regulation as the Only Path to Quality Control',
        paragraphs: [
          'No consumer dies of poisoning from legal alcohol because bottles are strictly regulated: a buyer knows precisely whether they are drinking 5% beer or 40% vodka, and the liquid is certified free of lethal methanol. During alcohol prohibition, thousands of Americans went blind or died from tainted wood alcohol.',
          'Establishing a legally regulated market—where substances have certified purities, standardized dosages, child-proof packaging, and explicit toxicity warnings—is the only physical mechanism that can eliminate the lethal counterfeit pills and toxic adulterants that kill 100,000 citizens each year.',
        ],
      },
    ],
    details: [
      'DEA laboratory testing in 2023 revealed that 7 out of 10 seized fake prescription pills contained a potentially lethal dose of fentanyl (≥2 mg).',
      'Xylazine ("tranq"), an animal sedative that causes necrotic skin ulcers and is impervious to naloxone, was found in over 90% of Philadelphia street opioid samples in 2023.',
      'Switzerland pioneered prescription heroin-assisted treatment (HAT) in 1994, eliminating overdose deaths and street crime among long-term dependent participants.',
    ],
    sources: [
      {
        title: 'The Iron Law of Prohibition and the Opioid Crisis',
        url: 'https://onlinelibrary.wiley.com/doi/abs/10.1111/ecaf.12351',
        publisher: 'Economic Affairs (Mark Thornton)',
        year: '2019',
        category: 'Scholarship',
      },
      {
        title: 'Heroin-Assisted Treatment in Switzerland: A 20-Year Retrospective Assessment',
        url: 'https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(09)61420-3/fulltext',
        publisher: 'The Lancet (Ambros Uchtenhagen)',
        year: '2010',
        category: 'Scholarship',
      },
    ],
    tags: ['Housing & Healthcare', 'Criminal Justice', 'Economics'],
    era: '2019–Present',
    relatedIds: ['con-drug-safe-supply-diversion-tolerance'],
  },
  {
    id: 'con-drug-safe-supply-diversion-tolerance',
    parentId: 'thesis-drug-fentanyl-toxic-supply',
    kind: 'con',
    title: 'Safe Supply Diversion: Dilaudid Floods Secondary Markets and Escalates Youth Addiction',
    summary:
      'Prescribed "safe supply" hydromorphone is diverted onto the black market at massive scale, collapsing street opioid prices and addicting a new generation of teenagers.',
    sections: [
      {
        heading: 'The Mechanics of Secondary Market Flooding',
        paragraphs: [
          'In Canada, the federal government’s endorsement of "Prescribed Safer Supply" programs—dispensing hundreds of 8 mg hydromorphone (Dilaudid) tablets daily to individuals with severe opioid use disorder—unleashed severe unintended consequences. Because chronic fentanyl users have acquired astronomical opioid tolerances, Dilaudid does not prevent their withdrawal; consequently, recipients divert their prescribed tablets to secondary black-market dealers for $1 to $2 per pill to buy street fentanyl.',
          'In British Columbia, seizures of diverted hydromorphone jumped by over 1,000% between 2020 and 2023. Diverted pharmaceutical pills entered high schools and college campuses, marketed to adolescents as "safe, government-approved" pills, seeding a devastating new wave of adolescent dependency.',
        ],
      },
      {
        heading: 'The Fallacy of Fueling Addiction with Public Funds',
        paragraphs: [
          'Stanford addiction medicine specialist **Keith Humphreys** and the Stanford-Lancet Commission warn that supplying unlimited pharmaceutical opioids without mandatory witnessed ingestion ignores the fundamental neurobiology of substance use disorder.',
          'Historically, the opioid crisis began precisely because pharmaceutical companies (Purdue Pharma) claimed prescribed OxyContin was a "safe, non-addictive" pharmaceutical alternative. Replicating that commercial flooding under the guise of harm reduction merely fuels the addiction pipeline while eroding public support for legitimate treatment services.',
        ],
      },
    ],
    details: [
      'In 2024, the British Columbia government was forced to restrict safe supply guidelines, requiring witnessed consumption after widespread police reports of organized crime diversion.',
      'Street prices of 8 mg Dilaudid pills in Vancouver dropped from $15–$20 down to $1–$2 as government-subsidized supplies flooded street corners.',
      'The Stanford-Lancet Commission warned that uncontrolled pharmaceutical supply expansion inevitably drives upward trends in overall population addiction.',
    ],
    sources: [
      {
        title: 'Responding to the Opioid Crisis in North America and Beyond: Stanford-Lancet Commission',
        url: 'https://www.thelancet.com/commissions/opioids-north-america',
        publisher: 'The Lancet (Keith Humphreys et al.)',
        year: '2022',
        category: 'Scholarship',
      },
      {
        title: 'RCMP Investigation into Widespread Diversion of Prescribed Safer Supply Hydromorphone',
        url: 'https://www.rcmp-grc.gc.ca/en/news',
        publisher: 'Royal Canadian Mounted Police (RCMP)',
        year: '2024',
        category: 'Court / Official Record',
      },
    ],
    tags: ['Housing & Healthcare', 'Criminal Justice', 'Regulation & Markets'],
    era: '2022–Present',
    relatedIds: ['pro-drug-iron-law-synthetic-potency'],
  },

  // ============================================================================
  // PILLAR 3: Bodily Autonomy & Cognitive Liberty
  // ============================================================================
  {
    id: 'pillar-drug-liberty',
    parentId: 'root-drug-decriminalization',
    kind: 'pillar',
    title: 'Bodily Autonomy & Cognitive Liberty',
    summary:
      'Examines the profound philosophical and constitutional debate over individual sovereignty: cognitive liberty, self-ownership, and the limits of state paternalism versus neurobiological addiction and social externalities.',
    sections: [
      {
        heading: 'Sovereignty Over One’s Body and Consciousness',
        paragraphs: [
          'At the philosophical core of drug legalization is the principle of **bodily autonomy and cognitive liberty**. Articulated by classical liberal thinkers like **John Stuart Mill** (*On Liberty*, 1859), libertarian legal theorists like **Thomas Szasz** (*Ceremonial Chemistry*), and contemporary neuroscientists like **Dr. Carl Hart**, this view holds that an adult human being is the absolute sovereign owner of their own body and mind.',
          'Mill famously established the Harm Principle: the only purpose for which power can be rightfully exercised over any member of a civilized community against his will is to prevent harm to others; his own good, either physical or moral, is not a sufficient warrant. Criminalizing what a person chooses to ingest, smoke, or swallow into their own bloodstream constitutes illegitimate state moral paternalism.',
        ],
      },
      {
        heading: 'The Destruction of Agency via Neurobiological Addiction',
        paragraphs: [
          'Conversely, philosophers and neurobiologists emphasize that severe substance addiction directly undermines the foundational premise of liberal autonomy: **rational agency and free will**. Chronic consumption of high-potency drugs fundamentally hijacks the brain’s mesolimbic dopamine reward pathway, impairing the prefrontal cortex’s capacity for self-regulation, rational risk assessment, and consent.',
          'An individual experiencing severe physical withdrawal from heroin or fentanyl is not exercising free choice; they are suffering from a compulsion that overrides parental love, personal safety, and basic survival. Furthermore, drug use produces immense social externalities—child neglect, fetal alcohol/opioid syndrome, vehicular manslaughter, and violent domestic abuse—that directly harm non-consenting third parties.',
        ],
      },
    ],
    details: [
      'John Stuart Mill’s *On Liberty* (1859) established that "Over himself, over his own body and mind, the individual is sovereign."',
      'National Survey on Drug Use and Health (NSDUH 2023) shows ~85% of illicit drug users do not meet clinical criteria for substance use disorder, functioning as normal adults.',
      'Neuroimaging demonstrates chronic opioid and methamphetamine use causes structural downregulation of D2 dopamine receptors in the striatum, impairing inhibitory control.',
      'Contrasts libertarian bodily autonomy against communitarian frameworks prioritizing collective family and child welfare.',
    ],
    sources: [
      {
        title: 'On Liberty',
        url: 'https://www.gutenberg.org/ebooks/34901',
        publisher: 'John W. Parker and Son (John Stuart Mill)',
        year: '1859',
        category: 'Scholarship',
      },
      {
        title: 'Drug Use for Grown-Ups: Chasing Liberty in the Land of Fear',
        url: 'https://www.penguinrandomhouse.com/books/534764/drug-use-for-grown-ups-by-dr-carl-l-hart/',
        publisher: 'Penguin Press (Dr. Carl L. Hart)',
        year: '2021',
        category: 'Scholarship',
      },
      {
        title: 'Ceremonial Chemistry: The Ritual Persecution of Drugs, Addicts, and Pushers',
        url: 'https://www.syracuseuniversitypress.syr.edu/',
        publisher: 'Anchor Books / Syracuse University Press (Thomas Szasz)',
        year: '1974',
        category: 'Scholarship',
      },
    ],
    tags: ['Civil Liberties', 'Philosophy & Ethics', 'Human Rights', 'Criminal Justice'],
    era: '1859–Present',
  },

  // Thesis 3A
  {
    id: 'thesis-drug-sovereignty-consciousness',
    parentId: 'pillar-drug-liberty',
    kind: 'thesis',
    title: 'Sovereignty Over Consciousness & Cognitive Liberty vs. Neurobiological Hijacking',
    summary:
      'Weighs the thesis that adult cognitive liberty permits altering one’s own consciousness against the neurobiological reality that severe addiction destroys the capacity for genuine autonomy.',
    sections: [
      {
        heading: 'The Case for Adult Cognitive Liberty',
        paragraphs: [
          'In *Drug Use for Grown-Ups* (2021), Columbia University psychology professor **Dr. Carl Hart** challenges the pervasive cultural myth that narcotics possess magical demonic powers that instantly turn anyone who tries them into a helpless, depraved addict. Citing long-term epidemiological data from the **Substance Abuse and Mental Health Services Administration (SAMHSA)**, Hart demonstrates that between **80% and 90% of people who use illicit drugs**—including heroin, cocaine, MDMA, and methamphetamine—do not become addicted.',
          'They are responsible, employed adults who use psychoactive substances recreationally to enhance relaxation, intimacy, and aesthetic perception, in exactly the same manner millions of responsible adults consume alcohol or espresso. Criminalizing their private pursuit of happiness violates fundamental constitutional rights to liberty and privacy.',
        ],
      },
      {
        heading: 'Addiction as the Erasure of True Volition',
        paragraphs: [
          'Neuroscientists led by **Dr. Nora Volkow** (Director of the National Institute on Drug Abuse) counter that Hart’s perspective ignores the biological reality of clinical addiction. Substance use disorder is a chronic, relapsing brain disease: repeated exposure to high-dopamine chemical spikes reorganizes synaptic pathways between the amygdala, nucleus accumbens, and prefrontal cortex.',
          'As tolerance builds, the brain downregulates natural dopamine receptors, rendering the individual incapable of experiencing pleasure from food, relationships, or work. Under severe dependency, the survival drive for the chemical overwhelms voluntary conscious agency. Protecting autonomy requires intervening to rescue individuals from a biological trap that has effectively extinguished their capacity for self-determination.',
        ],
      },
    ],
    details: [
      'SAMHSA NSDUH data indicates that roughly 10% to 15% of people who try cocaine or alcohol develop clinical dependency over their lifetimes.',
      'Dr. Nora Volkow’s PET scan studies proved that chronic drug use significantly reduces dopamine D2 receptor availability in human striatal brain regions.',
      'The Declaration of Independence enshrines "Life, Liberty and the pursuit of Happiness," which advocates argue includes cognitive liberty over one’s own nervous system.',
    ],
    sources: [
      {
        title: 'Drug Use for Grown-Ups: Chasing Liberty in the Land of Fear',
        url: 'https://www.penguinrandomhouse.com/books/534764/drug-use-for-grown-ups-by-dr-carl-l-hart/',
        publisher: 'Penguin Press (Dr. Carl L. Hart)',
        year: '2021',
        category: 'Scholarship',
      },
      {
        title: 'Neurobiologic Advances from the Brain Disease Model of Addiction',
        url: 'https://www.nejm.org/doi/full/10.1056/NEJMra1511480',
        publisher: 'New England Journal of Medicine (Nora D. Volkow, George F. Koob, A. Thomas McLellan)',
        year: '2016',
        category: 'Scholarship',
      },
    ],
    tags: ['Civil Liberties', 'Philosophy & Ethics', 'Housing & Healthcare'],
    era: '2016–Present',
    relatedIds: ['thesis-drug-moral-paternalism'],
  },
  {
    id: 'pro-drug-carl-hart-cognitive-liberty',
    parentId: 'thesis-drug-sovereignty-consciousness',
    kind: 'pro',
    title: 'Carl Hart and Thomas Szasz: Adult Autonomy, Cognitive Liberty & Most Users Non-Addicted',
    summary:
      'Adults possess an inalienable right to control their own consciousness; empirical data proves 85%+ of illicit drug consumers are responsible, non-addicted citizens.',
    sections: [
      {
        heading: 'The Inalienable Right to Cognitive Self-Determination',
        paragraphs: [
          'Psychiatrist **Thomas Szasz** argued in *Ceremonial Chemistry* (1974) that the War on Drugs is the modern equivalent of medieval religious inquisitions: the state persecutes internal mental heresies and stigmatizes scapegoated substances under the guise of public hygiene. If an individual owns their own body, the state has no more right to dictate what molecules cross their blood-brain barrier than it does to dictate what books they read or what religious dogmas they believe.',
          'Columbia neuroscientist **Dr. Carl Hart** emphasizes that the Declaration of Independence guarantees the right to "the pursuit of happiness." If an adult chooses to consume a chemical that produces joy, relaxation, or spiritual insight, and does so without causing physical harm to others, the state’s prohibition is tyrannical moral paternalism.',
        ],
      },
      {
        heading: 'Debunking the Demonization of Chemical Molecules',
        paragraphs: [
          'Society hypocritically normalizes and advertises alcohol—a toxic, carcinogenic solvent linked to thousands of domestic assaults and car crashes—while arresting people for using cannabis, MDMA, or psilocybin. In blind clinical trials, human subjects routinely cannot distinguish the psychoactive effects of pharmaceutical amphetamine from illicit methamphetamine, or pure diacetylmorphine from prescription hospital pain medication.',
          'The social harms attributed to drugs are overwhelmingly the artificial product of **criminalization, poverty, and contaminated black-market products**, not the chemical molecules themselves.',
        ],
      },
    ],
    details: [
      'Over 90% of the millions of Americans who consumed illicit drugs in the past month attended work, paid taxes, and fulfilled family responsibilities without incident (NSDUH).',
      'The FDA granted "Breakthrough Therapy" designation to MDMA and psilocybin in 2017–2019 for severe PTSD and treatment-resistant depression.',
      'Szasz argued that labeling addiction a "disease" invalidates individual moral accountability and creates a coercive psychiatric state.',
    ],
    sources: [
      {
        title: 'Drug Use for Grown-Ups: Chasing Liberty in the Land of Fear',
        url: 'https://www.penguinrandomhouse.com/books/534764/drug-use-for-grown-ups-by-dr-carl-l-hart/',
        publisher: 'Penguin Press (Dr. Carl L. Hart)',
        year: '2021',
        category: 'Scholarship',
      },
      {
        title: 'Ceremonial Chemistry: The Ritual Persecution of Drugs, Addicts, and Pushers',
        url: 'https://www.syracuseuniversitypress.syr.edu/',
        publisher: 'Syracuse University Press (Thomas Szasz)',
        year: '1974',
        category: 'Scholarship',
      },
    ],
    tags: ['Civil Liberties', 'Philosophy & Ethics', 'Human Rights'],
    era: '1974–Present',
    relatedIds: ['con-drug-addiction-hijacks-autonomy'],
  },
  {
    id: 'con-drug-addiction-hijacks-autonomy',
    parentId: 'thesis-drug-sovereignty-consciousness',
    kind: 'con',
    title: 'Addiction Neurobiology: Severe Substance Use Disorder Destroys Agency and Volition',
    summary:
      'Severe addiction rewires dopamine reward circuitry and impairs prefrontal cortex executive control, turning "free choice" into a biological compulsion.',
    sections: [
      {
        heading: 'The Biological Destruction of Free Agency',
        paragraphs: [
          'The libertarian argument for cognitive liberty relies on a flawed Enlightenment model of the human mind: the rational actor exercising unconstrained free will. In reality, modern neuroimaging (**Nora Volkow, George Koob**) shows that addictive chemical agents induce profound neuro-adaptations in the mesolimbic dopamine pathway that overpower conscious executive control.',
          'High-potency opioids flood the brain with dopamine levels up to ten times higher than natural biological rewards (such as food or sex). The brain compensates by pruning dopamine receptors, plunging the user into agonizing **dysphoria and hyperkatifeia** (extreme emotional pain) whenever the drug wears off. At that stage, seeking the drug is not an exercise of liberty; it is a desperate attempt to alleviate excruciating neurological agony.',
        ],
      },
      {
        heading: 'Coercive Exploitation of Vulnerable Neurochemistry',
        paragraphs: [
          'Allowing corporations or cartels to market hyper-potent addictive substances in the name of "liberty" is a grotesque perversion of freedom. Addictive products are unique in capitalism because they systematically **destroy the consumer’s capacity to choose not to buy them**.',
          'Legalizing commercial markets for substances that chemically seize the brain’s volition creates an army of chemically trapped consumers, transferring wealth from desperate, impoverished individuals into the hands of predatory corporate entities.',
        ],
      },
    ],
    details: [
      'Chronic opiate exposure causes long-lasting epigenetic changes in the nucleus accumbens, reinforcing conditioned cue-induced drug cravings years after detoxification.',
      'Koob & Volkow (NEJM 2016) established the three-stage addiction cycle: binge/intoxication, withdrawal/negative affect, and preoccupation/anticipation.',
      'Over 75% of incarcerated individuals with substance use disorders relapse within three months of release without targeted medical intervention.',
    ],
    sources: [
      {
        title: 'Neurobiologic Advances from the Brain Disease Model of Addiction',
        url: 'https://www.nejm.org/doi/full/10.1056/NEJMra1511480',
        publisher: 'New England Journal of Medicine (Nora D. Volkow et al.)',
        year: '2016',
        category: 'Scholarship',
      },
      {
        title: 'The Neurobiology of Addiction: A Neuroadaptational View',
        url: 'https://jamanetwork.com/journals/jamapsychiatry/fullarticle/209149',
        publisher: 'JAMA Psychiatry (George F. Koob & Michel Le Moal)',
        year: '2001',
        category: 'Scholarship',
      },
    ],
    tags: ['Housing & Healthcare', 'Philosophy & Ethics', 'Civil Liberties'],
    era: '2001–Present',
    relatedIds: ['pro-drug-carl-hart-cognitive-liberty'],
  },

  // Thesis 3B
  {
    id: 'thesis-drug-moral-paternalism',
    parentId: 'pillar-drug-liberty',
    kind: 'thesis',
    title: 'The Limits of State Moral Paternalism and Sumptuary Laws vs. Social Externalities',
    summary:
      'Weighs the critique that the state has no legitimate authority to police consensual private morality against the crushing social externalities drug addiction inflicts on children, families, and public order.',
    sections: [
      {
        heading: 'The Illegitimacy of Moral Paternalism',
        paragraphs: [
          'Constitutional scholars and civil libertarians argue that drug prohibition is the last remaining vestige of **sumptuary laws**—ancient statutory regimes where the state used criminal violence to dictate what clothes citizens could wear, what food they could eat, and what sexual positions they could practice. In a free, pluralistic democracy, the criminal law cannot legitimately be deployed to enforce moral puritanism.',
          'Adults engage in numerous voluntary activities that carry severe health risks: eating ultra-processed sugar-laden foods that cause obesity and diabetes, engaging in extreme sports like base-jumping, or gambling life savings in state-run lotteries. Singling out chemical alteration of consciousness for armed SWAT raids and prison sentences is an arbitrary, hypocritical exercise of state violence.',
        ],
      },
      {
        heading: 'The Massive Externalities Inflicted on Innocent Third Parties',
        paragraphs: [
          'Communitarians and family welfare advocates respond that drug use is never a purely private, self-regarding act. Unlike solitary reading or skydiving, severe substance dependency radiates severe, destructive **externalities onto innocent third parties**—most tragically, children and elderly relatives.',
          'Over 60% of children placed in the U.S. foster care system enter due to parental substance abuse, neglect, and domestic violence. Furthermore, drug-impaired driving causes thousands of fatal traffic collisions, emergency room resources are consumed by preventable overdoses, and local downtown business districts are destabilized by street crime and public disorder, fully justifying state intervention under Mill’s Harm Principle.',
        ],
      },
    ],
    details: [
      'The U.S. Department of Health and Human Services reports that parental substance abuse is cited as a contributing factor in over 35% of child welfare foster removals.',
      'Alcohol and drug impairment contributed to over 13,000 fatal vehicular crashes in the United States in 2022 (NHTSA).',
      'The National Bureau of Economic Research (NBER) calculates the annual total social cost of the opioid crisis at over $1.5 trillion in healthcare, lost productivity, and judicial expenses.',
    ],
    sources: [
      {
        title: 'Parental Substance Use as a Factor in Foster Care Placements',
        url: 'https://aspe.hhs.gov/reports/substance-use-foster-care',
        publisher: 'U.S. Department of Health and Human Services (ASPE)',
        year: '2021',
        category: 'Court / Official Record',
      },
      {
        title: 'The Economic Cost of the Opioid Crisis: Trillion-Dollar Externalities',
        url: 'https://www.nber.org/papers/w29871',
        publisher: 'National Bureau of Economic Research (NBER)',
        year: '2022',
        category: 'Scholarship',
      },
    ],
    tags: ['Philosophy & Ethics', 'Civil Liberties', 'Human Rights', 'Criminal Justice'],
    era: '2021–Present',
    relatedIds: ['thesis-drug-sovereignty-consciousness'],
  },
  {
    id: 'pro-drug-paternalism-illegitimate-coercion',
    parentId: 'thesis-drug-moral-paternalism',
    kind: 'pro',
    title: 'State Paternalism Lacks Moral Authority to Punish Consensual Self-Harm',
    summary:
      'The state has no moral legitimacy to cage citizens for voluntary, consensual consumption; harm to self cannot justify the violence of criminal incarceration.',
    sections: [
      {
        heading: 'The Absurdity of Caging People to Protect Their Health',
        paragraphs: [
          'The core philosophical paradox of drug prohibition is that the state claims it is intervening out of benevolent compassion to protect an individual from the harms of drug abuse—and it demonstrates this "compassion" by kicking in their door with armed SWAT teams, shooting their family pets, locking them in a concrete cage alongside violent felons, saddling them with a criminal record that guarantees lifetime unemployment, and destroying their family structure.',
          'As legal scholar **Douglas Husak** (*Overcriminalization*, 2008) argues, punishment is the most severe coercive sanction the state possesses. To inflict state violence on a person simply because they engaged in a risky, self-regarding behavior destroys ten times more human well-being than the drug itself ever could.',
        ],
      },
      {
        heading: 'Parity with Legal Risky Behaviors',
        paragraphs: [
          'If the state possessed legitimate authority to criminalize anything that harms public health or causes healthcare costs, consistency would require criminalizing fast food, soda, tobacco, sedentary lifestyles, football, skiing, and extreme sports. Tobacco combustion kills over 480,000 Americans each year—more than four times the toll of all illegal drugs combined—yet tobacco possession has never been criminalized.',
          'Criminalizing select drugs is not about health; it is about cultural prejudice and selective moral enforcement against stigmatized groups.',
        ],
      },
    ],
    details: [
      'Tobacco smoking remains the leading cause of preventable death in the U.S. (480,000/year), yet no smoker is arrested or imprisoned for possessing cigarettes.',
      'Douglas Husak’s *Legalize This! The Case for Decriminalizing Drugs* (2002) proves prohibition fails every test of criminal justice proportionality.',
      'Over 95% of state drug arrests in the U.S. result in plea bargains under threat of catastrophic mandatory minimum prison sentences.',
    ],
    sources: [
      {
        title: 'Legalize This! The Case for Decriminalizing Drugs',
        url: 'https://www.versobooks.com/en-gb/products/1888-legalize-this',
        publisher: 'Verso Books (Douglas N. Husak)',
        year: '2002',
        category: 'Scholarship',
      },
      {
        title: 'Overcriminalization: The Limits of the Criminal Law',
        url: 'https://global.oup.com/academic/product/overcriminalization-9780195399011',
        publisher: 'Oxford University Press (Douglas Husak)',
        year: '2008',
        category: 'Scholarship',
      },
    ],
    tags: ['Civil Liberties', 'Philosophy & Ethics', 'Criminal Justice'],
    era: '2002–Present',
    relatedIds: ['con-drug-social-externalities-family-harm'],
  },
  {
    id: 'con-drug-social-externalities-family-harm',
    parentId: 'thesis-drug-moral-paternalism',
    kind: 'con',
    title: 'Social Externalities: Child Neglect, Public Disorder, Emergency Costs & Road Carnage',
    summary:
      'Drug addiction is never victimless: it inflicts devastating externalities on neglected children, family members, overwhelmed emergency rooms, and public order.',
    sections: [
      {
        heading: 'The Innocent Victims of Substance Abuse',
        paragraphs: [
          'The libertarian slogan that drug use is a "victimless crime" is an insult to the millions of children who grow up in homes traumatized by parental substance addiction. Child welfare social workers routinely document horrific conditions: toddlers left unattended in squalor near exposed fentanyl foil, infants born with neonatal abstinence syndrome suffering agonizing drug withdrawal, and children suffering chronic physical abuse and psychological terror.',
          'Under **John Stuart Mill’s own Harm Principle**, society has a moral duty to prevent harm to innocent third parties. When an adult’s chemical consumption directly results in the severe neglect or abuse of a dependent child, the state’s intervention is not illegitimate paternalism; it is the fundamental protection of vulnerable human life.',
        ],
      },
      {
        heading: 'The Public Taxpayer Burden and Community Destruction',
        paragraphs: [
          'Beyond the family, drug addiction imposes massive collective financial and civic costs on the entire community. Municipal taxpayers fund the millions of dollars required for emergency EMS dispatches, repeat intensive care hospitalizations, and needle sweep crews in public parks.',
          'Public spaces—libraries, parks, transit stations—are civic commons that belong to all citizens, including children and the elderly. When these commons are dominated by aggressive drug dealing, public defecation, and unpredictable erratic behavior, the liberty and safety of the entire community is curtailed, justifying legal prohibition.',
        ],
      },
    ],
    details: [
      'Neonatal Abstinence Syndrome (NAS) increased over 500% in the United States between 2004 and 2018 (CDC).',
      'The Congressional Joint Economic Committee estimated the total economic burden of the opioid epidemic was nearly $1.5 trillion in 2020 alone (7% of GDP).',
      'Over 25% of all emergency room visits on weekend evenings in major metropolitan hospitals involve acute substance intoxication or drug-related trauma.',
    ],
    sources: [
      {
        title: 'The Full Economic Cost of the Opioid Epidemic: $1.5 Trillion in 2020',
        url: 'https://www.jec.senate.gov/public/index.cfm/democrats/2022/9/the-full-economic-cost-of-the-opioid-epidemic-1-5-trillion-in-2020',
        publisher: 'U.S. Congress Joint Economic Committee',
        year: '2022',
        category: 'Court / Official Record',
      },
      {
        title: 'Child Welfare and Substance Use: Trends and Policy Solutions',
        url: 'https://www.childwelfare.gov/',
        publisher: 'Child Welfare Information Gateway (U.S. Children’s Bureau)',
        year: '2023',
        category: 'Watchdog / NGO',
      },
    ],
    tags: ['Human Rights', 'Housing & Healthcare', 'Criminal Justice'],
    era: '2020–Present',
    relatedIds: ['pro-drug-paternalism-illegitimate-coercion'],
  },

  // ============================================================================
  // PILLAR 4: Corporate Commercialization vs. Regulated Medical Treatment
  // ============================================================================
  {
    id: 'pillar-drug-commercialization',
    parentId: 'root-drug-decriminalization',
    kind: 'pillar',
    title: 'Corporate Commercialization vs. Regulated Medical Treatment',
    summary:
      'Weighs the danger of corporate commercialization—replicating the predatory Big Tobacco playbook with high-potency cannabis and synthetic drugs—against non-profit public monopolies and leveraged court-mandated treatment.',
    sections: [
      {
        heading: 'The Threat of Predatory Corporate Commercialization',
        paragraphs: [
          'A critical distinction in modern drug policy is the chasm between **decriminalization** (removing criminal penalties for possession) and **commercial legalization** (creating a private, for-profit commercial marketplace). Public health researchers like **Keith Humphreys** and **Kevin Sabet** warn that commercial legalization inevitably replicates the destructive corporate playbook perfected by **Big Tobacco, Big Alcohol, and Purdue Pharma**.',
          'In a private commercial market, corporate profits are driven by extreme volume consumption. In addiction markets, **the top 20% of heavy daily users consume roughly 80% of total volume**. Therefore, private corporations are financially incentivized to engineer maximum chemical potency, design aggressive marketing campaigns, fight regulatory restrictions, and foster chronic chemical dependency among vulnerable consumers.',
        ],
      },
      {
        heading: 'State Monopolies and Coerced Therapeutic Leverage',
        paragraphs: [
          'To avoid corporate predation while ending the drug war, policy scholars propose **state-run non-profit monopolies** (modeled on alcohol retailing in Scandinavia or Canada) with plain packaging, complete bans on commercial advertising, and state-set prices that discourage consumption while eliminating black-market cartels.',
          'Concurrently, criminologists like **Mark Kleiman** advocate **"Swift, Certain, and Fair" (HOPE) leveraged probation and drug courts**: utilizing the legal system not to inflict harsh prison sentences, but as a therapeutic lever that mandates monitored sobriety, providing rapid, predictable intermediate sanctions that keep people in treatment and out of graves.',
        ],
      },
    ],
    details: [
      'Commercial cannabis legalization in the U.S. saw average THC potency surge from ~4% in the 1990s to over 20% in modern flower and 90%+ in commercial vape cartridges (ElSohly et al. 2021).',
      'The top 10% of alcohol drinkers in the United States consume over 50% of all alcohol sold, illustrating the heavy-user profit dependence of addiction industries.',
      'Hawaii’s Opportunity Probation with Enforcement (HOPE) program pioneered rapid, modest sanctions (1–2 days in jail) for drug violations, cutting positive drug tests by over 70%.',
      'Scandinavian state alcohol monopolies (Systembolaget in Sweden, Alko in Finland) achieve dramatically lower rates of alcohol mortality than commercial U.S. markets.',
    ],
    sources: [
      {
        title: 'Smokescreen: What the Marijuana Industry Doesn’t Want You to Know',
        url: 'https://www.simonandschuster.com/books/Smokescreen/Kevin-A-Sabet/9781948677875',
        publisher: 'Forefront Books (Kevin A. Sabet)',
        year: '2021',
        category: 'Scholarship',
      },
      {
        title: 'When Brute Force Fails: How to Have Less Crime and Less Punishment',
        url: 'https://press.princeton.edu/books/paperback/9780691148649/when-brute-force-fails',
        publisher: 'Princeton University Press (Mark A.R. Kleiman)',
        year: '2009',
        category: 'Scholarship',
      },
      {
        title: 'Changes in Cannabis Potency Over the Last Two Decades',
        url: 'https://www.biologicalpsychiatryjournal.com/article/S0006-3223(20)31802-5/fulltext',
        publisher: 'Biological Psychiatry (Mahmoud A. ElSohly et al.)',
        year: '2021',
        category: 'Empirical / Economic Study',
      },
    ],
    tags: ['Regulation & Markets', 'Housing & Healthcare', 'Criminal Justice', 'Economics'],
    era: '2009–Present',
  },

  // Thesis 4A
  {
    id: 'thesis-drug-big-cannabis-big-tobacco',
    parentId: 'pillar-drug-commercialization',
    kind: 'thesis',
    title: 'The Hazard of Corporate Commercialization ("Big Cannabis" & "Big Pharma")',
    summary:
      'Weighs the danger that commercial legalization models foster predatory corporate monopolies that maximize profits via dependency against non-profit state monopoly frameworks.',
    sections: [
      {
        heading: 'The Commercial Addiction Profit Playbook',
        paragraphs: [
          'In *Smokescreen* (2021), former White House drug policy advisor **Kevin Sabet** documents how the commercialization of cannabis in the United States was rapidly co-opted by Wall Street venture capital and transnational tobacco giants (e.g., Altria investing $1.8 billion in Cronos Group). Private cannabis corporations did not promote mild natural herb; they manufactured ultra-concentrated **THC gummies, vape pens, and dabs containing 80% to 99% THC**.',
          'High-potency THC products have been linked by researchers at King’s College London (**Sir Robin Murray**) to a **three- to five-fold increase in the risk of psychosis and schizophrenia**. By lobbying state legislatures to lower taxes, loosen marketing bans, and block warnings, "Big Cannabis" acts exactly like Big Tobacco in the 1950s.',
        ],
      },
      {
        heading: 'State Monopolies and Decommodified Regulation',
        paragraphs: [
          'Drug policy reformers emphasize that rejecting prohibition does not require embracing corporate commercial capitalism. Instead, governments can adopt a **public health monopoly model**, similar to Sweden’s state-owned **Systembolaget** or Canada’s provincial liquor distribution boards.',
          'Under a state monopoly model, retail outlets are run by civil servants with no commission incentives; prices are kept high enough to discourage excessive use; commercial advertising, celebrity branding, and cartoon packaging are strictly prohibited; and all revenues are redirected into public health, addiction science, and education.',
        ],
      },
    ],
    details: [
      'Robin Murray et al. (Lancet Psychiatry 2019) demonstrated daily use of high-potency cannabis (THC >10%) accounts for ~30% of new psychosis cases in London and 50% in Amsterdam.',
      'Altria (parent company of Marlboro) and Constellation Brands (Corona beer) acquired multi-billion-dollar equity stakes in commercial Canadian cannabis corporations.',
      'Canada’s federal Cannabis Act mandated plain, standardized packaging with prominent health warnings and strict limits on public celebrity marketing.',
    ],
    sources: [
      {
        title: 'The Contribution of Cannabis and Cannabis Potency to First-Episode Psychosis: European Multisite Study',
        url: 'https://www.thelancet.com/journals/lanpsy/article/PIIS2215-0366(19)30048-3/fulltext',
        publisher: 'The Lancet Psychiatry (Marta Di Forti, Robin M. Murray, et al.)',
        year: '2019',
        category: 'Scholarship',
      },
      {
        title: 'Can Cannabis Markets Be Regulated Like Alcohol and Tobacco? Lessons from Monopolies',
        url: 'https://www.rand.org/pubs/research_reports/RR3100.html',
        publisher: 'RAND Drug Policy Research Center',
        year: '2020',
        category: 'Scholarship',
      },
    ],
    tags: ['Regulation & Markets', 'Housing & Healthcare', 'Economics'],
    era: '2019–Present',
    relatedIds: ['thesis-drug-coerced-treatment-courts'],
  },
  {
    id: 'con-drug-corporate-profit-predation',
    parentId: 'thesis-drug-big-cannabis-big-tobacco',
    kind: 'con',
    title: 'Commercial Legalization Models Maximize Profits via Heavy User Dependency',
    summary:
      'For-profit commercialization creates "Big Cannabis" and "Big Narcotics": corporate giants that maximize revenue by marketing ultra-high-potency products to addicted heavy users.',
    sections: [
      {
        heading: 'The 80/20 Rule of Addiction Capitalism',
        paragraphs: [
          'Under capitalist market incentives, every for-profit business must maximize shareholder returns. In the market for psychoactive substances, business models are governed by the **Pareto Principle**: casual, occasional users who buy a product once a month generate virtually zero profits; corporate profits are overwhelmingly derived from **the small minority of daily, compulsive, heavy users**.',
          'Therefore, a commercial cannabis, psychedelic, or cocaine company cannot survive on mindful microdosers; it must intentionally cultivate and expand heavy chronic consumption. This drives the relentless increase in chemical potency, the engineering of rapid delivery mechanisms (vapes, synthetics), and the saturation of retail outlets in low-income neighborhoods.',
        ],
      },
      {
        heading: 'Regulatory Capture and the Inevitable Destruction of Public Health',
        paragraphs: [
          'Once a commercial industry achieves multi-billion-dollar scale, it deploys massive lobbying expenditures to achieve **regulatory capture**. Just as the tobacco industry successfully suppressed evidence of lung cancer for forty years and Purdue Pharma corrupted FDA reviewers to push OxyContin, commercial cannabis and psychedelics corporations lobby state governments to dismantle potency caps, block mandatory warning labels, and permit sweet child-friendly edible flavorings.',
          'Replacing criminal cartels with corporate marketing conglomerates merely trades street gangs for corporate boardroom pushers who inflict far more widespread, systemic addiction across society.',
        ],
      },
    ],
    details: [
      'Cannabis hyperemesis syndrome (CHS), an agonizing condition of uncontrollable vomiting caused by chronic high-potency THC, has experienced a 400% surge in Colorado emergency rooms.',
      'The U.S. cannabis industry spent over $100 million in federal and state lobbying between 2018 and 2023 to block potency caps and banking regulations.',
      'Cannabis packaging mimicking popular candy brands (e.g., "Stoney Patch Kids") drove a 1,300% increase in pediatric accidental cannabis ingestions (AAP 2023).',
    ],
    sources: [
      {
        title: 'Commercial Cannabis Legalization and Public Health: Evidence from Colorado and Washington',
        url: 'https://www.annualreviews.org/doi/10.1146/annurev-publhealth-031816-044232',
        publisher: 'Annual Review of Public Health (Wayne Hall & Michael Lynskey)',
        year: '2020',
        category: 'Scholarship',
      },
      {
        title: 'Pediatric Edible Cannabis Toxicities and Poison Center Trends',
        url: 'https://publications.aap.org/pediatrics/article/151/2/e2022057761/190427/Pediatric-Edible-Cannabis-Exposures',
        publisher: 'Pediatrics (American Academy of Pediatrics)',
        year: '2023',
        category: 'Scholarship',
      },
    ],
    tags: ['Regulation & Markets', 'Housing & Healthcare', 'Economics'],
    era: '2020–Present',
    relatedIds: ['pro-drug-state-monopoly-non-profit-model'],
  },
  {
    id: 'pro-drug-state-monopoly-non-profit-model',
    parentId: 'thesis-drug-big-cannabis-big-tobacco',
    kind: 'pro',
    title: 'State Monopolies, Plain Packaging & Ban on Marketing Safeguard Health',
    summary:
      'A non-profit state monopoly model eliminates cartel violence and stops corporate marketing: setting high prices, plain packaging, and funding universal public healthcare.',
    sections: [
      {
        heading: 'The Middle Ground Between Prohibition and Commercial Chaos',
        paragraphs: [
          'Drug policy debates too often present a false dichotomy between a militarized, racist War on Drugs and an unregulated, predatory Silicon Valley corporate free-for-all. Economists and public health researchers demonstrate that the optimal solution is **public health regulation via state monopoly**.',
          'By establishing a state-owned alcohol-and-drug authority, the government controls production, wholesale importation, and retail dispensing. Because the state has zero incentive to maximize sales, it sets prices through Pigouvian taxation to deter consumption, mandates universal unbranded plain packaging with graphic health warnings, strictly limits transaction quantities, and uses age-verified biometric scanning to eliminate underage access.',
        ],
      },
      {
        heading: 'Siphoning Black-Market Revenues into Universal Treatment',
        paragraphs: [
          'Under a state-regulated system, the multi-billion-dollar profits that previously enriched murderous cartels and money-laundering international banks are converted directly into public tax revenue. In Canada, legal cannabis taxes generate over **$1.5 billion annually** in public revenues.',
          'By law, these revenues can be dedicated to funding universal mental health clinics, youth sports programs, public housing, and free addiction treatment on demand, turning a former engine of destruction into a sustainable pillar of public well-being.',
        ],
      },
    ],
    details: [
      'Uruguay became the first nation to legalize cannabis in 2013, implementing a state-monopoly model where citizens register with the state pharmacy system with strict monthly purchase caps.',
      'Sweden’s Systembolaget state retail monopoly is estimated by researchers to prevent over 1,400 alcohol-related deaths annually compared to a privatized retail market.',
      'Canada’s regulated cannabis market displaced over 70% of the illicit black market within five years while maintaining stable youth consumption rates (Statistics Canada 2023).',
    ],
    sources: [
      {
        title: 'The Regulation of Cannabis in Uruguay: A Public Health Approach',
        url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6062438/',
        publisher: 'International Journal of Drug Policy (Rosario Queirolo et al.)',
        year: '2019',
        category: 'Scholarship',
      },
      {
        title: 'Public Health Benefits of the Swedish Alcohol Monopoly Systembolaget',
        url: 'https://www.sciencedirect.com/science/article/pii/S037687161830206X',
        publisher: 'Drug and Alcohol Dependence',
        year: '2018',
        category: 'Scholarship',
      },
    ],
    tags: ['Regulation & Markets', 'Economics', 'Housing & Healthcare', 'Governance'],
    era: '2018–Present',
    relatedIds: ['con-drug-corporate-profit-predation'],
  },

  // Thesis 4B
  {
    id: 'thesis-drug-coerced-treatment-courts',
    parentId: 'pillar-drug-commercialization',
    kind: 'thesis',
    title: 'Mandatory Treatment, Drug Courts & Leveraged Intervention',
    summary:
      'Weighs the effectiveness of coerced treatment and drug courts utilizing legal leverage to save lives against civil liberties critiques of forced abstinence and punitive commitment.',
    sections: [
      {
        heading: 'The Power of "Swift, Certain, and Fair" Leveraged Sobriety',
        paragraphs: [
          'In *When Brute Force Fails* (2009), the late criminologist **Mark A.R. Kleiman** demonstrated that traditional criminal justice fails because sanctions are delayed, catastrophic, and random: a person violates probation for months, and then is suddenly sentenced to five years in state prison. Instead, Kleiman pioneered **"Swift, Certain, and Fair" (SCF)** supervision, modeled on Hawaii’s **HOPE (Opportunity Probation with Enforcement)** program.',
          'Under SCF probation, drug users on conditional release undergo frequent, randomized urine drug screens. If they test positive, they do not go to prison for years; they receive an immediate, guaranteed **24- to 48-hour jail stay**. By providing immediate, predictable boundaries, HOPE cut positive drug tests by over 70% and reduced re-incarceration days by half, proving that gentle but firm legal coercion saves lives.',
        ],
      },
      {
        heading: 'The Civil Liberties Critique of Coerced Abstinence',
        paragraphs: [
          'Human rights attorneys and harm reduction advocates argue that **coerced treatment is a medical and ethical contradiction in terms**. Coerced abstinence programs—such as specialized Drug Courts or civil commitment laws (e.g., Massachusetts Section 35)—frequently mandate complete, drug-free abstinence while barring patients from life-saving **medication-assisted treatment (MAT)** like buprenorphine and methadone.',
          'When patients are coerced into abstinence-only programs, their physiological opioid tolerance collapses. Upon inevitable relapse, their risk of **fatal respiratory overdose increases by over 300% to 500%**. Locking individuals in psychiatric facilities against their will violates constitutional due process while generating high relapse rates.',
        ],
      },
    ],
    details: [
      'Hawaii’s HOPE probation model reduced missed probation appointments by 68% and positive drug screens by 72% (National Institute of Justice 2010).',
      'Massachusetts Section 35 allows family members or police to petition a judge to civilly commit an individual with substance use disorder to involuntary treatment for up to 90 days.',
      'A Massachusetts Department of Public Health study found individuals involuntarily committed under Section 35 were 2.2 times more likely to die of a fatal opioid overdose than those in voluntary treatment.',
    ],
    sources: [
      {
        title: 'Managing Drug-Involved Probationers with Swift and Certain Sanctions: Evaluating Hawaii’s HOPE',
        url: 'https://www.ojp.gov/pdffiles1/nij/grants/229023.pdf',
        publisher: 'National Institute of Justice (Angela Hawken & Mark Kleiman)',
        year: '2009',
        category: 'Court / Official Record',
      },
      {
        title: 'Involuntary Commitment for Substance Use Disorder and Subsequent Overdose Death',
        url: 'https://www.mass.gov/doc/section-35-evaluation-report/download',
        publisher: 'Massachusetts Department of Public Health',
        year: '2021',
        category: 'Court / Official Record',
      },
    ],
    tags: ['Criminal Justice', 'Housing & Healthcare', 'Civil Liberties', 'Philosophy & Ethics'],
    era: '2009–Present',
    relatedIds: ['thesis-drug-big-cannabis-big-tobacco'],
  },
  {
    id: 'con-drug-coerced-treatment-ineffective-punitive',
    parentId: 'thesis-drug-coerced-treatment-courts',
    kind: 'con',
    title: 'Coerced Abstinence Fails: Relapse Rates High and Involuntary Commitment Kills',
    summary:
      'Forced abstinence without medication-assisted therapy destroys opioid tolerance, multiplying fatal overdose risks upon release and violating bodily integrity.',
    sections: [
      {
        heading: 'The Fatal Consequence of Forced Tolerance Loss',
        paragraphs: [
          'Addiction medicine consensus from the **World Health Organization (WHO)** and the **American Society of Addiction Medicine (ASAM)** confirms that involuntary treatment has zero evidence of long-term efficacy and significantly increases mortality. When an individual is forcibly locked in a 30- to 90-day involuntary commitment facility, they undergo forced detoxification, losing their physiological tolerance to opioids.',
          'Because involuntary commitment does not cure the underlying psychological trauma, poverty, or neurochemical dysregulation that drives addiction, over 80% of civilly committed patients relapse within days of release. Injecting their prior dosage with zero opioid tolerance results in immediate, fatal respiratory arrest, turning state "treatment" into an accidental death sentence.',
        ],
      },
      {
        heading: 'The Due Process Trap of Drug Courts',
        paragraphs: [
          'In *Drug Courts and the Criminalization of Addiction*, legal advocates document how specialized **Drug Courts** routinely violate basic constitutional due process. Participants are forced to waive their right to trial and plead guilty to felonies in exchange for entering treatment programs. If a participant suffers a biological relapse (an expected symptom of a chronic medical condition), judges—who possess zero medical training—punish them with jail sentences far harsher than they would have received in ordinary criminal court.',
          'True healthcare cannot be delivered at the point of a judge’s gavel; voluntary, dignified access to methadone, buprenorphine, and housing is the only evidence-based path to recovery.',
        ],
      },
    ],
    details: [
      'The World Health Organization (2012) issued a joint UN statement calling for the closure of all compulsory drug detention and rehabilitation centers.',
      'A systematic review in the *International Journal of Drug Policy* (Werb et al. 2016) found that 9 of 13 studies showed compulsory treatment had no positive impact or resulted in increased mortality.',
      'Drug courts often require participants to attend faith-based 12-step programs (Alcoholics Anonymous), violating the First Amendment Establishment Clause (Inouye v. Kemna, 9th Cir. 2007).',
    ],
    sources: [
      {
        title: 'The Effectiveness of Compulsory Drug Treatment: A Systematic Review',
        url: 'https://www.sciencedirect.com/science/article/pii/S0955395915003588',
        publisher: 'International Journal of Drug Policy (Dan Werb et al.)',
        year: '2016',
        category: 'Scholarship',
      },
      {
        title: 'Joint UN Statement on Compulsory Drug Detention and Rehabilitation Centres',
        url: 'https://www.who.int/publications/m/item/joint-un-statement-on-compulsory-drug-detention-and-rehabilitation-centres',
        publisher: 'World Health Organization (WHO) & UNAIDS',
        year: '2012',
        category: 'Primary Text / Treaty',
      },
    ],
    tags: ['Civil Liberties', 'Housing & Healthcare', 'Criminal Justice', 'Human Rights'],
    era: '2012–Present',
    relatedIds: ['pro-drug-swift-certain-fair-coercion-saves-lives'],
  },
  {
    id: 'pro-drug-swift-certain-fair-coercion-saves-lives',
    parentId: 'thesis-drug-coerced-treatment-courts',
    kind: 'pro',
    title: 'Humphreys and Kleiman: Swift, Certain & Fair Coercion Keeps Users Alive and Off Streets',
    summary:
      'Therapeutic legal leverage—predictable, mild sanctions and mandated treatment—provides the external cognitive scaffolding necessary to break the cycle of street overdose.',
    sections: [
      {
        heading: 'The Necessity of External Behavioral Scaffolding',
        paragraphs: [
          'Addiction policy experts **Keith Humphreys (Stanford)** and the late **Mark Kleiman (NYU/Harvard)** emphasize that waiting for an individual suffering from severe fentanyl and methamphetamine psychosis to experience "spontaneous internal motivation" is often an unconscionable death sentence. The neurobiology of addiction renders rational voluntary recovery exceedingly difficult without **external behavioral scaffolding**.',
          'Leveraged intervention—using diversion programs, conditional probation, and drug courts—provides the exact boundary that allows individuals to survive long enough for prefrontal neuroplasticity to heal. By conditioning legal diversion on attending medication-assisted therapy and maintaining sobriety, the state uses its authority to rescue citizens from fatal overdose.',
        ],
      },
      {
        heading: 'Empirical Evidence of HOPE and Problem-Solving Courts',
        paragraphs: [
          'The empirical record of well-designed problem-solving courts is decisively positive. National Institute of Justice evaluations show that participants in modern **adult drug courts** that incorporate evidence-based medications (buprenorphine and methadone) exhibit **re-arrest rates 15% to 30% lower** than matched defendants processed through standard criminal adjudication.',
          'By providing drug testing accountability paired with social workers, housing navigators, and employment training, leveraged courts transform criminal justice into a therapeutic gateway, saving billions of dollars in correctional costs and thousands of human lives.',
        ],
      },
    ],
    details: [
      'National Institute of Justice Multi-Site Adult Drug Court Evaluation found drug courts reduce criminal recidivism by an average of 24% while yielding $5,680 in net taxpayer savings per participant.',
      'Mandating medication-assisted treatment (MAT) in criminal justice diversion programs reduces post-release overdose mortality by over 60% (Lancet Psychiatry 2020).',
      'Over 3,800 drug treatment courts operate across the United States, representing the largest diversion apparatus in American jurisprudence.',
    ],
    sources: [
      {
        title: 'The Multi-Site Adult Drug Court Evaluation: Executive Summary',
        url: 'https://www.ojp.gov/pdffiles1/nij/grants/237112.pdf',
        publisher: 'National Institute of Justice (Shelli B. Rossman et al.)',
        year: '2011',
        category: 'Court / Official Record',
      },
      {
        title: 'Methadone and Buprenorphine in Criminal Justice Systems: A Review of Clinical Evidence',
        url: 'https://www.thelancet.com/journals/lanpsy/article/PIIS2215-0366(20)30172-5/fulltext',
        publisher: 'The Lancet Psychiatry (Keith Humphreys et al.)',
        year: '2020',
        category: 'Scholarship',
      },
    ],
    tags: ['Criminal Justice', 'Housing & Healthcare', 'Empirical Studies', 'Governance'],
    era: '2011–Present',
    relatedIds: ['con-drug-coerced-treatment-ineffective-punitive'],
  },
];

export const drugDecriminalizationDataset: DebateGraphDataset = {
  id: 'drug-decriminalization',
  version: '1.0.0',
  shortTitle: 'Drug Decriminalization',
  title: 'Drug Decriminalization & Legalization',
  subtitle:
    'Harm reduction, ending mass incarceration & autonomy vs. addiction surges & public health crises',
  searchPlaceholder:
    'Search Portugal, Measure 110, fentanyl, harm reduction, Carl Hart, Keith Humphreys, safe supply... (/)',
  epistemologyNote:
    'Drug policy analysis brings together substance pharmacology, epidemiological surveillance (CDC, EMCDDA), criminal justice statistics (incarceration rates, racial disparities), behavioral economics, and constitutional jurisprudence on bodily autonomy.',
  availableTags: [
    'Criminal Justice',
    'Civil Liberties',
    'Housing & Healthcare',
    'Philosophy & Ethics',
    'Empirical Studies',
    'Human Rights',
    'Governance',
    'Regulation & Markets',
    'Economics',
    'National Security',
  ],
  shortPillarLabels: {
    'pillar-drug-harm-reduction': '1. Harm Reduction & Justice',
    'pillar-drug-public-health': '2. Public Health & Surges',
    'pillar-drug-liberty': '3. Autonomy & Liberty',
    'pillar-drug-commercialization': '4. Commercialization & Care',
  },
  lastUpdated: '2026-03-30',
  nodes: drugDecriminalizationNodes,
};
