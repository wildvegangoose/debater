import { DebateNode } from '../../types/debate';

export const gazaSecurityNodes: DebateNode[] = [
  {
    id: 'pillar-gaza-security',
    parentId: 'root-ip',
    kind: 'pillar',
    title: 'Gaza, Blockade, October 7 & Conduct of Warfare',
    summary:
      'Examines the 2005 disengagement, Hamas’s 2007 takeover and blockade, the October 7, 2023 massacre and hostage crisis, Israel’s military campaign in Gaza, and International Humanitarian Law (IHL) debates over proportionality and civilian harm.',
    sections: [
      {
        heading: 'From the 2005 Disengagement & 2007 Blockade to October 7',
        paragraphs: [
          'In **August–September 2005**, Prime Minister Ariel Sharon executed a unilateral withdrawal from the **Gaza Strip**, uprooting all **21 Israeli settlements** (~8,500 residents) and pulling every IDF soldier back to the 1967 armistice line. After **Hamas** won the January 2006 Palestinian legislative vote and violently expelled **Palestinian Authority (Fatah)** forces from Gaza in **June 2007**, Israel and **Egypt** imposed strict land, air, and naval closures—initiating a sixteen-year cycle of cross-border rocket wars (2008–09, 2012, 2014, 2021) alongside severe civilian economic isolation.',
          'That long-standing containment posture collapsed catastrophically at dawn on **October 7, 2023**, when roughly **3,000–5,000 Hamas-led fighters** breached the Gaza perimeter fence under a barrage of thousands of rockets, massacred **approximately 1,200 people** (overwhelmingly civilians inside border *kibbutzim*, towns like **Sderot** and **Ofakim**, and the **Nova music festival**), committed widespread sexual and physical atrocities, and abducted **251 living and deceased hostages** into subterranean Gaza tunnels.'
        ]
      },
      {
        heading: 'Urban Counter-Insurgency, IHL & International Courts',
        paragraphs: [
          'Israel’s ensuing air and ground campaign to dismantle Hamas’s **24 territorial battalions** and **350–450 miles of fortified tunnels** triggered the deadliest and most destructive war in the conflict’s history. Across **International Humanitarian Law (IHL)**, states, legal scholars, and military analysts fiercely contest how to weigh **UN Charter Article 51 sovereign self-defense** against an enemy systematically embedded beneath civilian homes and hospitals versus **Additional Protocol I** duties of distinction, proportionality, and humanitarian relief—questions litigated simultaneously before the **ICJ** and **ICC**.'
        ]
      }
    ],
    details: [
      'Traces the trajectory from Israel’s 2005 unilateral withdrawal and Hamas’s 2007 armed takeover of Gaza through sixteen years of blockade and rocket warfare to the October 7, 2023 massacre.',
      'Weighs sovereign right and duty of self-defense against a non-state armed actor embedded in dense urban terrain against obligations of distinction, proportionality, humanitarian relief, and prevention of mass civilian devastation.',
      'Addresses competing legal proceedings at the International Court of Justice (ICJ) and International Criminal Court (ICC), alongside strategic debates over whether military force can defeat Hamas without a political horizon.'
    ],
    sources: [
      {
        title: 'Charter of the United Nations, Article 51 — Inherent Right of Self-Defense',
        url: 'https://www.un.org/en/about-us/un-charter/full-text',
        publisher: 'United Nations',
        year: '1945',
        category: 'Primary Text / Treaty'
      },
      {
        title: 'Protocol Additional to the Geneva Conventions (Protocol I) — Distinction & Proportionality (Arts. 51, 57, 58)',
        url: 'https://ihl-databases.icrc.org/en/ihl-treaties/api-1977',
        publisher: 'ICRC International Humanitarian Law Databases',
        year: '1977',
        category: 'Primary Text / Treaty'
      },
      {
        title: 'ICJ Case 192 — Application of the Genocide Convention in the Gaza Strip (South Africa v. Israel)',
        url: 'https://www.icj-cij.org/case/192',
        publisher: 'International Court of Justice',
        year: '2024',
        category: 'Court / Official Record'
      }
    ],
    references: [
      'UN Charter Article 51 (1945)',
      'Additional Protocol I to the Geneva Conventions — Distinction & Proportionality (1977)',
      'ICJ Case 192 Docket — South Africa v. Israel (2024)'
    ],
    tags: ['Security', 'International Law', 'Human Rights'],
    era: '2005–Present'
  },

  // THESIS 3A: Self-Defense, Deterrence & Dismantling Hamas
  {
    id: 'thesis-gaza-self-defense',
    parentId: 'pillar-gaza-security',
    kind: 'thesis',
    title: 'Right & Obligation to Dismantle Hamas and Enforce Security Controls',
    summary:
      'Following years of indiscriminate rocket fire and the October 7, 2023 atrocities, Israel has an inherent right and sovereign duty to dismantle Hamas’s military and governing capacity, rescue hostages, and prevent weapons entry into Gaza.',
    sections: [
      {
        heading: 'October 7 Atrocities & Hamas’s Declared Eliminatory Intent',
        paragraphs: [
          'Defenders of Israel’s war aims emphasize that **October 7, 2023** was the deadliest single-day massacre of Jews since the Holocaust—proportionally equivalent to over 40,000 Americans killed in one morning. Hamas-led operatives systematically executed families in safe rooms in **Be’eri**, **Kfar Aza**, and **Nir Oz**, slaughtered **364 young attendees at the Nova festival**, perpetrated conflict-related sexual violence documented by **UN SRSG Pramila Patten (March 2024)**, and seized **251 hostages** ranging from infants to octogenarian Holocaust survivors.',
          'Crucially, Hamas leadership explicitly declared that October 7 was not a one-time protest over border restrictions, but the opening phase of Israel’s total eradication—grounded in **Hamas’s 1988 Founding Covenant** and reaffirmed publicly on **October 24, 2023**, when senior Hamas politburo member **Ghazi Hamad** stated on Lebanese **LBC TV** (translated by **MEMRI**) that Israel "must be wiped off all Palestinian lands" and vowed Hamas would repeat the **Al-Aqsa Flood** massacre *"time and again—a second, a third, a fourth time."*'
        ]
      },
      {
        heading: 'Sovereign Duty Under UN Charter Article 51',
        paragraphs: [
          'Under **Article 51 of the UN Charter** and customary international *jus ad bellum*, proponents maintain that no sovereign government on earth could leave an Iran-financed army of **30,000–40,000 fighters**—holding hundreds of civilian hostages underground while firing **more than 19,000 unguided rockets** toward Israeli towns—standing intact across an immediate border. Dismantling Hamas’s military brigades, rocket workshops, and governing control over Gaza is thus framed as an inescapable sovereign duty to allow displaced southern Israelis to return safely home.'
        ]
      }
    ],
    details: [
      'On October 7, 2023, Hamas-led militants breached the border, murdered ~1,200 people (mostly civilians in border kibbutzim, towns, and the Nova music festival), committed widespread atrocities, and abducted 251 hostages into Gaza.',
      'Hamas’s 1988 Charter rejects Israel’s existence in any borders, and senior Hamas officials publicly pledged on Arabic television (e.g., Ghazi Hamad on LBC TV, Oct 24, 2023, translated by MEMRI) to repeat October 7 "again and again."',
      'No sovereign state can leave a heavily armed force committed to its destruction governing an adjacent territory minutes from civilian towns.'
    ],
    sources: [
      {
        title: 'Charter of the United Nations, Article 51 — Inherent Right of Self-Defense',
        url: 'https://www.un.org/en/about-us/un-charter/full-text',
        publisher: 'United Nations',
        year: '1945',
        category: 'Primary Text / Treaty'
      },
      {
        title: 'The Covenant of the Islamic Resistance Movement (Hamas Charter, August 18, 1988)',
        url: 'https://avalon.law.yale.edu/20th_century/hamas.asp',
        publisher: 'Yale Law School Avalon Project',
        year: '1988',
        category: 'Primary Text / Treaty'
      },
      {
        title: 'Hamas Official Ghazi Hamad on LBC TV: "We Will Repeat October 7 Again and Again"',
        url: 'https://www.memri.org/tv/hamas-official-ghazi-hamad-we-will-repeat-october-seven-again-and-again-until-israel-annihilated',
        publisher: 'MEMRI TV Monitor Project',
        year: '2023',
        category: 'Debate / Broadcast'
      }
    ],
    references: [
      'UN Charter Art. 51 — Inherent Right of Self-Defense',
      'Hamas Covenant (1988) & MEMRI TV Clip #10585 — Ghazi Hamad LBC TV Interview (Oct 24, 2023)',
      'UN SRSG Pramila Patten Report on Conflict-Related Sexual Violence (March 2024)'
    ],
    tags: ['Security', 'International Law'],
    era: '2007–Present',
    relatedIds: ['con-settlements-strategic-depth']
  },
  {
    id: 'pro-gaza-human-shields-tunnels',
    parentId: 'thesis-gaza-self-defense',
    kind: 'pro',
    title: 'Asymmetric Urban Warfare & Hamas’s Embedded Tunnel Network',
    summary:
      'Military-law analysts argue Hamas systematically constructed 350–450 miles of reinforced military tunnels beneath homes, schools, mosques, and hospitals while fighting out of uniform, unlawfully exploiting civilian immunity under the Law of Armed Conflict.',
    sections: [
      {
        heading: 'Subterranean Fortification & Loss of Protected Immunity Under LOAC',
        paragraphs: [
          'Urban warfare scholars—including **John Spencer**, Chair of Urban Warfare Studies at West Point’s **Modern War Institute**, and **NATO StratCom** analysts—emphasize that Hamas spent sixteen years designing a "human sacrifice strategy" unmatched in modern military history. Rather than building a single civilian bomb shelter, Hamas diverted billions of dollars of cement and aid into **350–450 miles of reinforced subterranean command centers, rocket factories, and shafts** engineered directly beneath apartment blocks, UNRWA schools, mosques, and medical complexes such as **Shifa** and **Nasser**.',
          'Under **Fourth Geneva Convention Articles 19 and 28** and **Additional Protocol I Articles 51(7) and 58**, deliberately co-locating military objectives inside or underneath dense civilian neighborhoods and hospitals to deter enemy strikes is a grave war crime. Crucially, under settled **Law of Armed Conflict (LOAC)**, otherwise protected civilian structures—including hospitals—forfeit absolute immunity from attack once converted into active military command posts, weapons depots, sniper positions, or hostage-detention facilities after due warning.'
        ]
      },
      {
        heading: 'Precautionary Warnings & Combatant-to-Civilian Ratios',
        paragraphs: [
          'Military analysts observe that despite confronting an out-of-uniform adversary fighting across booby-trapped high-rises where Hamas barred Gazan families from sheltering inside its tunnel network, the IDF executed extensive **Article 57 precautions**—dropping **millions of evacuation leaflets**, placing **tens of thousands of live phone calls and SMS sector alerts**, opening mapped **humanitarian corridors**, and implementing localized tactical pauses for **polio vaccination**—sacrificing tactical surprise to reduce non-combatant harm below historical UN averages for comparable high-intensity urban sieges like **Mosul (2016–2017)**.'
        ]
      }
    ],
    details: [
      'Under Geneva Conventions (GCIV Art. 19 & 28; API Art. 51(7)), using civilian populations or protected sites (including hospitals used as command nodes or hostage holding sites) to shield military objectives is a war crime, and civilian sites lose absolute immunity when used for military purposes.',
      'Urban warfare specialists note the IDF implemented multi-layered precautions rarely seen in modern high-intensity urban combat (evacuation leaflets, millions of phone/SMS alerts, humanitarian corridors, localized tactical pauses for polio vaccination).',
      'High total casualties reflect an unprecedented subterranean battlefield where Hamas barred civilians from entering its 350–450 miles of tunnel shelters while storing munitions inside residential structures.'
    ],
    sources: [
      {
        title: 'Fourth Geneva Convention, Articles 19 & 28 (Discontinuance of Hospital Protection & Prohibition of Human Shields)',
        url: 'https://ihl-databases.icrc.org/en/ihl-treaties/gciv-1949',
        publisher: 'ICRC International Humanitarian Law Databases',
        year: '1949',
        category: 'Primary Text / Treaty'
      },
      {
        title: 'Modern War Institute at West Point — Urban Warfare Analyses on Gaza (John Spencer)',
        url: 'https://mwi.westpoint.edu/',
        publisher: 'Modern War Institute, U.S. Military Academy',
        year: '2024',
        category: 'Scholarship'
      },
      {
        title: 'NATO Strategic Communications Centre of Excellence — Hamas’s Use of Human Shields in Gaza',
        url: 'https://stratcomcoe.org/',
        publisher: 'NATO StratCom COE',
        year: '2019',
        category: 'Empirical / Economic Study'
      }
    ],
    references: [
      'Fourth Geneva Convention Art. 19 & Art. 28 (1949)',
      'John Spencer (Modern War Institute, West Point) Analysis of Urban Warfare in Gaza (2024)',
      'NATO StratCom COE Report on Hamas’s Use of Human Shields (2019)'
    ],
    tags: ['Security', 'International Law'],
    era: '2007–Present'
  },
  {
    id: 'pro-gaza-blockade-lawful',
    parentId: 'thesis-gaza-self-defense',
    kind: 'pro',
    title: '2007 Blockade Imposed Only After Hamas Takeover & Rocket Attacks',
    summary:
      'When Israel withdrew completely from Gaza in September 2005, there was no blockade; Israel and Egypt imposed strict border and naval controls only in 2007 after Hamas violently ousted the Palestinian Authority and escalated cross-border attacks.',
    sections: [
      {
        heading: 'Chronology of the 2005 Withdrawal & 2007 Hamas Coup',
        paragraphs: [
          'Diplomatic chronology refutes assertions that Israel evacuated Gaza in 2005 only to immediately seal it behind an unprovoked blockade. Right after completing its **September 2005 withdrawal**, Israel signed the U.S.-mediated **November 2005 Agreement on Movement and Access (AMA)** with the Palestinian Authority to open the **Rafah crossing** under European Union monitors, expand **Karni** commercial truck exports, facilitate West Bank bus convoys, and export produce from **$14 million of intact Israeli greenhouses** purchased by American donors for Gazan farmers.',
          'Sweeping border and maritime restrictions were imposed two years later—only after **Hamas** spurned the international **Quartet Principles** (renouncing terror and honoring prior PLO accords), tunneled into Israel in **June 2006** to kidnap Corporal **Gilad Shalit**, intensified rocket fire into **Sderot**, and staged a violent **June 2007 military coup** throwing Fatah officers off rooftops—prompting *both* **Israel** and **Egypt** to restrict crossings so Gaza would not become an unrestricted Iranian missile base.'
        ]
      },
      {
        heading: 'Naval Blockade Law & the 2011 UN Palmer Report',
        paragraphs: [
          'Under the customary **1994 San Remo Manual on International Law Applicable to Armed Conflicts at Sea**, naval blockades represent a lawful wartime measure to prevent weapons delivery by sea to enemy forces. Examining the May 2010 *Mavi Marmara* flotilla clash, the **September 2011 UN Secretary-General’s Panel of Inquiry (chaired by former New Zealand Prime Minister Sir Geoffrey Palmer)** concluded that Israel faced a "real security threat" from militant groups in Gaza and that its **naval blockade was lawful and legitimate under international law**.'
        ]
      }
    ],
    details: [
      'In November 2005—after withdrawing every soldier and settler—Israel signed the Agreement on Movement and Access (AMA) to facilitate Gaza trade, greenhouse exports, and border crossings.',
      'The 2011 UN Secretary-General’s Palmer Commission concluded—though contested by critics regarding land restrictions—that Israel faced a real security threat and that the naval blockade was a lawful security measure under international law.',
      'Dual-use restrictions aimed to stop Iranian long-range rockets, anti-tank missiles, and industrial concrete/steel diverted from civilian housing into military tunnels.'
    ],
    sources: [
      {
        title: 'San Remo Manual on International Law Applicable to Armed Conflicts at Sea (Blockade Rules)',
        url: 'https://ihl-databases.icrc.org/en/ihl-treaties/san-remo-manual-1994',
        publisher: 'ICRC International Humanitarian Law Databases',
        year: '1994',
        category: 'Primary Text / Treaty'
      },
      {
        title: 'INSS Strategic Surveys on the 2005 Gaza Disengagement, 2007 Hamas Takeover & Naval Blockade',
        url: 'https://www.inss.org.il/',
        publisher: 'Institute for National Security Studies (INSS)',
        year: '2023',
        category: 'Scholarship'
      },
      {
        title: 'Lex Fridman Podcast #418 — Debate on the 2011 UN Palmer Report & Legality of the Gaza Blockade',
        url: 'https://lexfridman.com/israel-palestine-debate/',
        publisher: 'Lex Fridman Podcast',
        year: '2024',
        category: 'Debate / Broadcast'
      }
    ],
    references: [
      'Agreement on Movement and Access (Nov 2005)',
      'San Remo Manual on Naval Blockades (1994) & UN Palmer Report (Sept 2011)',
      'Lex Fridman Podcast #418 — Blockade Legality Debate (2024)'
    ],
    tags: ['Security', 'International Law', 'History'],
    era: '2005–2023'
  },

  // CHALLENGES / COUNTER-ARGUMENTS ON GAZA WAR & BLOCKADE
  {
    id: 'con-gaza-disproportionate-ihl',
    parentId: 'thesis-gaza-self-defense',
    kind: 'con',
    title: 'Catastrophic Civilian Toll, Infrastructure Destruction & IHL Violations',
    summary:
      'Humanitarian organizations, UN bodies, and legal scholars contend Israel’s campaign in Gaza has violated IHL principles of proportionality, distinction, and humane treatment—killing tens of thousands of civilians (including >13,000 children) and rendering much of Gaza uninhabitable.',
    sections: [
      {
        heading: 'Scale of Physical Devastation & Mass Displacement',
        paragraphs: [
          'High-resolution satellite imagery analyzed by the **United Nations Satellite Centre (UNOSAT)** and academic remote-sensing researchers documented that by late 2024 **roughly 60–66% of all structures across the Gaza Strip**—including entire residential districts in **Gaza City**, **Jabalia**, **Khan Younis**, and **Rafah**, **all twelve universities**, water desalination and sewage facilities, bakeries, mosques, and most hospitals—had been damaged or leveled. Health authorities recorded **over 45,000+ Palestinian fatalities** (with children, women, and elderly persons forming the majority of identified dead) alongside **more than 100,000 injured**.',
          'Approximately **1.9 million Palestinians (~90% of Gaza’s prewar population)** were uprooted—frequently five, six, or more times under shifting evacuation grids—into severely overcrowded coastal tent zones such as **Al-Mawasi** lacking clean water, sewage treatment, or adequate shelter, where displaced families nevertheless suffered repeated deadly airstrikes throughout 2024 while Gaza’s medical and emergency-rescue infrastructure collapsed.'
        ]
      },
      {
        heading: 'Non-Reciprocity of IHL & Permissive Targeting Thresholds',
        paragraphs: [
          'International humanitarian lawyers stress a bedrock rule codified in **Additional Protocol I Article 51(8)**: IHL obligations are *non-reciprocal*, meaning **Hamas’s unlawful use of human shields never absolves the IDF** from its independent duties under **Articles 51(5)(b) and 57** to cancel strikes where expected civilian harm is excessive relative to concrete, direct military advantage. Investigative reports scrutinized Israel’s deployment of wide-crater **2,000-pound (MK-84) bombs** in dense neighborhoods, AI-assisted targeting queues, and strikes killing **over 300 humanitarian aid workers** (including the **April 2024 World Central Kitchen convoy**) and **scores of journalists**.'
        ]
      }
    ],
    details: [
      'Satellite damage assessments by UNOSAT indicate over 60–66% of all structures in Gaza—including homes, universities, water plants, bakeries, and hospitals—were damaged or destroyed, displacing ~1.9 million people (~90% of the population) multiple times.',
      'Adversary violations (Hamas’s unlawful embedding) do not release an attacking army from independent obligations under API Art. 51(5)(b) and Art. 57 to refrain from strikes whose expected civilian harm is excessive relative to concrete, direct military advantage.',
      'Investigations scrutinized use of heavy 2,000-lb munitions in densely populated neighborhoods/tent zones, permissive collateral-damage thresholds, and strikes killing aid workers and journalists.'
    ],
    sources: [
      {
        title: 'Additional Protocol I to the Geneva Conventions, Articles 51, 54, 57 & 58',
        url: 'https://ihl-databases.icrc.org/en/ihl-treaties/api-1977',
        publisher: 'ICRC International Humanitarian Law Databases',
        year: '1977',
        category: 'Primary Text / Treaty'
      },
      {
        title: 'UNOSAT Gaza Strip Comprehensive Building & Infrastructure Damage Assessments',
        url: 'https://unosat.org/products',
        publisher: 'United Nations Satellite Centre (UNITAR/UNOSAT)',
        year: '2024',
        category: 'Empirical / Economic Study'
      },
      {
        title: 'ICJ Case 192 — Provisional Measures Orders (Jan 26, March 28 & May 24, 2024)',
        url: 'https://www.icj-cij.org/case/192',
        publisher: 'International Court of Justice',
        year: '2024',
        category: 'Court / Official Record'
      }
    ],
    references: [
      'Additional Protocol I Art. 51(5)(b), 54, 57, 58 (Customary IHL)',
      'UNOSAT Gaza Strip Comprehensive Damage Assessments (2024)',
      'ICJ Provisional Measures Orders in South Africa v. Israel (Jan, March & May 2024)'
    ],
    tags: ['Human Rights', 'International Law'],
    era: 'Oct 2023–Present'
  },
  {
    id: 'pro-con-gaza-siege-aid',
    parentId: 'con-gaza-disproportionate-ihl',
    kind: 'pro',
    title: 'Siege Restrictions, Aid Bottlenecks & Statements by Coalition Ministers',
    summary:
      'Critics point to the initial "complete siege" declaration (Oct 9, 2023), severe restrictions on food, fuel, water, and medical entry leading to acute malnutrition warnings, and inflammatory rhetoric by senior Israeli officials cited by the ICJ and ICC prosecutor.',
    sections: [
      {
        heading: 'Siege Warfare Limits, Starvation Prohibitions & Aid Bottlenecks',
        paragraphs: [
          'On **October 9, 2023**, Defense Minister **Yoav Gallant** announced a "complete siege" cutting electricity, food, water, and fuel to the Gaza Strip—a posture only partially eased two weeks later under intense U.S. diplomatic pressure, leaving truck entries far below prewar levels of ~500 commercial and humanitarian loads daily. Under **Fourth Geneva Convention Articles 33 and 55**, **Additional Protocol I Article 54**, and **Rome Statute Article 8(2)(b)(xxv)**, collective punishment of a civilian population and starvation of civilians as a method of warfare are strictly prohibited.',
          'Throughout 2024, field monitors from the **Integrated Food Security Phase Classification (IPC)**, **UN OCHA**, **UNICEF**, and **Médecins Sans Frontières (MSF)** documented acute malnutrition alerts—particularly in isolated northern Gaza—attributing scarcity to sweeping "dual-use" rejections of water filters, medical generators, tent poles, and surgical anesthetics, multi-layered border inspection queues, the May 2024 closure of the **Rafah crossing**, and strikes disabling local bakeries and civil convoy escorts.'
        ]
      },
      {
        heading: 'ICC Arrest Warrants & Coalition Rhetoric',
        paragraphs: [
          'In **November 2024**, Pre-Trial Chamber I of the **International Criminal Court** issued arrest warrants (whose jurisdiction non-party **Israel** and the **United States** formally contest) alleging war crimes of starvation as a method of warfare and crimes against humanity alongside warrants targeting Hamas military chief **Mohammed Deif**. Critics further point to repeated public statements by far-right Israeli coalition ministers **Itamar Ben-Gvir** and **Bezalel Smotrich** urging aid cutoffs, "voluntary migration" of Gazans, and restoration of Israeli settlements inside Gaza.'
        ]
      }
    ],
    details: [
      'IHL strictly prohibits starvation of civilians as a method of warfare and collective punishment of a civilian population for acts of armed militants (GCIV Art. 33; API Art. 54).',
      'Humanitarian agencies (IPC, UN OCHA, UNICEF, MSF) documented inspection bottlenecks, crossing closures (e.g., Rafah post-May 2024), and breakdown of civil order obstructing aid distribution.',
      'ICC Pre-Trial Chamber warrants (contested on jurisdictional and factual grounds by Israel and the U.S.) and statements by far-right coalition ministers advocating Gaza resettlement intensified legal scrutiny.'
    ],
    sources: [
      {
        title: 'Fourth Geneva Convention, Articles 33 & 55 (Prohibition of Collective Punishment & Food/Medical Duty)',
        url: 'https://ihl-databases.icrc.org/en/ihl-treaties/gciv-1949',
        publisher: 'ICRC International Humanitarian Law Databases',
        year: '1949',
        category: 'Primary Text / Treaty'
      },
      {
        title: 'Situation in the State of Palestine — ICC Pre-Trial Chamber I Filings & Decisions',
        url: 'https://www.icc-cpi.int/palestine',
        publisher: 'International Criminal Court',
        year: '2024',
        category: 'Court / Official Record'
      },
      {
        title: 'Integrated Food Security Phase Classification (IPC) — Gaza Strip Acute Food Insecurity Reports',
        url: 'https://www.ipcinfo.org/',
        publisher: 'IPC Global Initiative',
        year: '2024',
        category: 'Empirical / Economic Study'
      },
      {
        title: 'UN OCHA Occupied Palestinian Territory — Humanitarian Access & Aid Tracking',
        url: 'https://www.ochaopt.org/',
        publisher: 'UN Office for the Coordination of Humanitarian Affairs',
        year: '2024',
        category: 'Watchdog / NGO'
      }
    ],
    references: [
      'Geneva Convention IV Art. 33 & Art. 55 (1949)',
      'ICC Situation in the State of Palestine Filings (2024 — Contested Jurisdiction)',
      'Integrated Food Security Phase Classification (IPC) Gaza Reports (2024)'
    ],
    tags: ['Human Rights', 'International Law'],
    era: '2023–Present'
  },
  {
    id: 'con-rebuttal-aid-diversion-icj',
    parentId: 'pro-con-gaza-siege-aid',
    kind: 'con',
    title: 'COGAT Aid Surges, Hamas Looting & Rejection of Genocide Intent Claims',
    summary:
      'Israeli legal teams at the ICJ argue that Israel facilitated hundreds of thousands of tons of food, water pipelines, field hospitals, and medical evacuations via COGAT while fighting an active war—behavior incompatible with intent to destroy a population.',
    sections: [
      {
        heading: 'Supply Volumes, Hamas Diversion & Crossings Under Fire',
        paragraphs: [
          'Israel’s legal and defense officials note that under **Fourth Geneva Convention Article 23**, a belligerent’s obligation to allow free passage of consignments is explicitly conditioned on having no serious grounds to fear supplies will be **diverted to enemy forces**. Despite active combat, Israel’s **COGAT** opened new northern crossings (**Erez West / Zikim**), repaired cross-border water pipelines, facilitated **over one million tons of humanitarian aid** across tens of thousands of inspected trucks, and coordinated **WHO polio vaccination campaigns** reaching >550,000 Gaza children.',
          'Empirical supply-chain studies and **COGAT** crossing logs demonstrate that hundreds of fully inspected aid trucks frequently sat uncollected inside the **Gaza side of Kerem Shalom** due to UN last-mile logistical shortfalls, armed **Hamas units and criminal gangs** hijacking convoys to hoard rations in tunnels or resell donated flour at exorbitant black-market prices to pay fighters, and Hamas mortar attacks killing four IDF soldiers guarding the **Kerem Shalom humanitarian crossing** in May 2024.'
        ]
      },
      {
        heading: 'Judge Joan Donoghue’s Clarification of the Jan 2024 ICJ Order',
        paragraphs: [
          'Crucially, in a widely cited **April 25, 2024 BBC HARDtalk interview**, former ICJ President **Judge Joan Donoghue**—who presided over and delivered the Court’s **January 26, 2024 provisional measures order**—expressly corrected widespread media and activist mischaracterizations: the Court did **not** rule that South Africa’s allegation of genocide was plausible, but held only at a preliminary jurisdictional threshold that Palestinians in Gaza possessed a *"plausible right to be protected from genocide"* under the 1948 Convention.'
        ]
      }
    ],
    details: [
      'Former ICJ President Judge Joan Donoghue clarified publicly (BBC HARDtalk, April 2024) that the Court’s January 2024 interim order held Palestinians had a "plausible right to be protected," NOT that the claim of genocide itself was proven plausible.',
      'Israel facilitated over one million tons of food, water, fuel, field-hospital equipment, and polio vaccines while Hamas looted convoys and fired rockets at the Kerem Shalom aid crossing.',
      'Statements quoted by South Africa were either directed specifically at Hamas terrorists in the shock of Oct 7 or uttered by politicians excluded from the operational War Cabinet.'
    ],
    sources: [
      {
        title: 'Former ICJ President Joan Donoghue Clarifies "Plausibility" Ruling on BBC HARDtalk (April 25, 2024)',
        url: 'https://www.bbc.com/news/articles/c3g9g63jl17o',
        publisher: 'BBC News',
        year: '2024',
        category: 'Debate / Broadcast'
      },
      {
        title: 'ICJ Case 192 — Oral Observations & Counter-Submissions of the State of Israel',
        url: 'https://www.icj-cij.org/case/192',
        publisher: 'International Court of Justice',
        year: '2024',
        category: 'Court / Official Record'
      },
      {
        title: 'Fourth Geneva Convention, Article 23 — Safeguards Against Aid Diversion to Enemy Forces',
        url: 'https://ihl-databases.icrc.org/en/ihl-treaties/gciv-1949',
        publisher: 'ICRC International Humanitarian Law Databases',
        year: '1949',
        category: 'Primary Text / Treaty'
      }
    ],
    references: [
      'Judge Joan Donoghue Interview, BBC HARDtalk / BBC News (April 25, 2024)',
      'Israel Legal Submissions to the ICJ in Case 192 (2024)',
      'Fourth Geneva Convention Art. 23 (1949)'
    ],
    tags: ['International Law', 'Security'],
    era: '2024–Present'
  },
  {
    id: 'con-gaza-pre2023-blockade-impact',
    parentId: 'pro-gaza-blockade-lawful',
    kind: 'con',
    title: '16-Year Blockade Created Socioeconomic Collapse Without Weakening Hamas',
    summary:
      'Critics—including Israeli security analysts and humanitarian groups—note that 16 years of sweeping restrictions devastated Gaza’s private sector (~45% unemployment, >60% youth unemployment, 96% undrinkable aquifer water) while actually entrenching Hamas’s monopoly over smuggling and patronage.',
    sections: [
      {
        heading: 'De-Development of Gaza’s Civilian Economy (2007–2023)',
        paragraphs: [
          'Economists at the **World Bank** and **UNCTAD** alongside Israeli freedom-of-movement watchdog **Gisha** documented that sixteen years of sweeping land, air, and maritime closure—curtailing agricultural and textile exports, shrinking maritime fishing zones, barring West Bank university and family travel, and restricting industrial inputs—decimated Gaza’s legitimate private middle class. By 2022, Gaza suffered **~45% overall unemployment** (**>60% among youth**), ~80% civilian dependence on international food aid, rolling electricity blackouts, and **96% of coastal aquifer water** unfit for human consumption.',
          'Even the **September 2011 UN Palmer Report**—frequently cited by Israel because it upheld the maritime blockade—explicitly criticized sweeping land-crossing restrictions on ordinary commercial goods and exports as unsustainable, noting that collective economic deprivation penalized Gaza’s two million civilians while strengthening Hamas’s taxation and tunnel-smuggling monopoly over basic necessities.'
        ]
      },
      {
        heading: 'Failure of the Pre-October 7 "Conceptzia" Containment Doctrine',
        paragraphs: [
          'Inside Israel itself, security analysts sharply indict the pre-October 7 **"Conceptzia" (containment doctrine)** pursued under **Benjamin Netanyahu’s** cabinets between **2018 and 2023**, which facilitated hundreds of millions of dollars in **Qatari cash transfers** into Gaza on the flawed assumption that economic calm bought Hamas deterrence—and that keeping Gaza governed by Hamas conveniently split Palestinian governance from the **West Bank Palestinian Authority**, side-stepping two-state diplomacy until Hamas launched its October 7 invasion.'
        ]
      }
    ],
    details: [
      'Sixteen years of sweeping closure devastated Gaza’s private industry (~45% unemployment, >60% youth unemployment, 96% undrinkable aquifer water) while entrenching Hamas’s taxation and patronage monopoly.',
      'Even the 2011 UN Palmer Report criticized aspects of the land crossing closures as unsustainable and penalizing ordinary civilians.',
      'Allowing Qatari cash into Gaza (2018–2023) under a "conflict-management" strategy keeping Gaza severed from the West Bank PA failed catastrophically on October 7.'
    ],
    sources: [
      {
        title: 'World Bank Economic Monitoring Reports — Gaza Socioeconomic & Closure Impacts',
        url: 'https://www.worldbank.org/en/country/westbankandgaza',
        publisher: 'The World Bank',
        year: '2023',
        category: 'Empirical / Economic Study'
      },
      {
        title: 'UNCTAD Reports on Gaza’s De-Development & Economic Costs of Closure',
        url: 'https://unctad.org/topic/palestinian-people',
        publisher: 'UN Trade and Development (UNCTAD)',
        year: '2023',
        category: 'Empirical / Economic Study'
      },
      {
        title: 'INSS Post-October 7 Strategic Inquiries Into the Collapse of the Gaza Containment Doctrine',
        url: 'https://www.inss.org.il/',
        publisher: 'Institute for National Security Studies (INSS)',
        year: '2024',
        category: 'Scholarship'
      }
    ],
    references: [
      'World Bank Economic Monitoring Reports on Gaza (2007–2023)',
      'UNCTAD Economic Costs of the Gaza Closure Reports',
      'INSS Strategic Critiques of the Pre-Oct 7 "Conceptzia" Containment Doctrine (2024)'
    ],
    tags: ['Human Rights', 'Governance', 'Security', 'Economics'],
    era: '2007–Present'
  },
  {
    id: 'con-gaza-march-of-return-2018',
    parentId: 'pro-gaza-blockade-lawful',
    kind: 'con',
    title: '2018–2019 "Great March of Return": Lethal Force Against Mass Border Protests',
    summary:
      'Debated prominently on Lex Fridman #418 (Finkelstein & Rabbani vs. Morris & Destiny), critics cite human-rights and UNHRC inquiry findings that IDF snipers killed ~189+ Palestinians and wounded thousands with live ammunition during weekly demonstrations against the blockade.',
    sections: [
      {
        heading: 'Civil-Society Origins & Lethal Live-Fire Casualties',
        paragraphs: [
          'Initiated in **March 2018** by Gaza poet and journalist **Ahmed Abu Artema** as a civic tent protest before broader faction endorsement, the weekly **"Great March of Return"** drew tens of thousands of Gazan families to the eastern buffer zone to protest a decade of blockade and highlight refugee displacement. Over the ensuing year, IDF snipers positioned behind fortified berms killed **189 to 214+ Palestinians**—including **over 40 children**, visibly vested paramedics such as **Razan al-Najjar**, and press photographers such as **Yaser Murtaja**—while wounding **more than 6,100 demonstrators with live rifle ammunition**.',
          'Highlighted extensively during the five-hour **March 2024 Lex Fridman Podcast #418 debate** by **Norman Finkelstein** and **Mouin Rabbani**, the 2018–2019 marches serve as a central empirical rebuttal to commentators who ask why Palestinians do not pursue mass non-violent mobilization: even unarmed protesters standing hundreds of meters inside Gaza faced lethal military sniper fire and thousands of life-altering lower-limb amputations.'
        ]
      },
      {
        heading: 'Law-Enforcement vs. Armed-Conflict Rules of Engagement',
        paragraphs: [
          'Israeli and international human-rights monitors (**B’Tselem**, **Yesh Din**, **Amnesty International**) alongside a **March 2019 UNHRC Commission of Inquiry** (whose institutional mandate **Israel** and the **United States** rejected as structurally biased under permanent UNHRC Agenda Item 7 practices) contended that policing civilian demonstrations along an unbreached barrier is governed by **international law-enforcement standards**, under which lethal gunfire is lawful *solely* to stop an immediate threat to human life—never against unarmed "key instigators."'
        ]
      }
    ],
    details: [
      'Cited repeatedly to challenge the question "Why don’t Palestinians use non-violent protest?": investigators documented medics, journalists, children, and unarmed demonstrators shot with live rounds inside Gaza.',
      'Over 6,100 Palestinians suffered live-ammunition gunshot wounds (principally lower-limb injuries overwhelming Gaza’s blockaded hospitals) alongside ~189–214 killed during 2018–2019.',
      'The 2019 UNHRC Commission of Inquiry (whose mandate Israel and the U.S. rejected as structurally biased under UNHRC practices) alleged IDF open-fire rules designating "key instigators" violated international policing law.'
    ],
    sources: [
      {
        title: 'Lex Fridman Podcast #418 — Finkelstein & Rabbani vs. Morris & Bonnell (March of Return Segment)',
        url: 'https://lexfridman.com/israel-palestine-debate/',
        publisher: 'Lex Fridman Podcast',
        year: '2024',
        category: 'Debate / Broadcast'
      },
      {
        title: 'Report of the Independent International Commission of Inquiry on the 2018 Protests in the OPT (A/HRC/40/74)',
        url: 'https://undocs.org/A/HRC/40/74',
        publisher: 'UN Human Rights Council (Contested Mandate)',
        year: '2019',
        category: 'Court / Official Record'
      },
      {
        title: 'B’Tselem Investigations Into Open-Fire Regulations Along the Gaza Perimeter (2018–2019)',
        url: 'https://www.btselem.org/',
        publisher: 'B’Tselem',
        year: '2019',
        category: 'Watchdog / NGO'
      }
    ],
    references: [
      'Lex Fridman Podcast #418 Debate — Finkelstein & Rabbani vs. Morris & Bonnell (March 2024)',
      'UNHRC Commission of Inquiry Report on the 2018 Protests (A/HRC/40/74, March 2019 — Contested Mandate)',
      'B’Tselem Reports on Gaza Perimeter Open-Fire Regulations (2018–2019)'
    ],
    tags: ['Human Rights', 'International Law'],
    era: '2018–2019'
  },
  {
    id: 'con-rebuttal-march-hamas-breach',
    parentId: 'con-gaza-march-of-return-2018',
    kind: 'con',
    title: 'High Court & IDF: Hamas Used Fence Riots for Armed Breaches & Incendiaries',
    summary:
      'Israel’s Supreme Court (unanimously upholding open-fire rules in May 2018) and military historians note Hamas co-opted the marches—deploying tire-smoke screens, IEDs, grenade attacks, incendiary kites burning thousands of Israeli acres, and armed cells attempting to breach into border kibbutzim.',
    sections: [
      {
        heading: 'Israel Supreme Court Ruling (Yesh Din v. IDF Chief of Staff, 2018)',
        paragraphs: [
          'In **May 2018**, a three-justice panel of the **Supreme Court of Israel** (*Yesh Din v. IDF Chief of Staff*, HCJ 3003/18) unanimously upheld IDF rules of engagement, ruling that violent mass riots organized by a hostile armed regime along an active conflict boundary triggered a hybrid **Law of Armed Conflict / law-enforcement paradigm** rather than ordinary domestic riot policing. Under IDF directives, live ammunition to the legs was authorized only as a last resort when non-lethal tear gas failed to halt imminent fence breaches just **hundreds of meters from Israeli family homes** in kibbutzim like **Nahal Oz** and **Kfar Aza**.',
          'Hamas’s own senior leadership corroborated that the border clashes were neither spontaneous nor purely non-violent: in a **May 2018 Al-Jazeera interview**, Hamas co-founder **Mahmoud al-Zahar** stated candidly that portraying the border campaign as "peaceful resistance" when bolstered by Hamas weapons and operatives was a deliberate *"deception"* designed to shield fighters behind civilian crowds while probing IDF perimeter defenses.'
        ]
      },
      {
        heading: 'Militant Fatalities, Incendiary Kites & Rehearsal for October 7',
        paragraphs: [
          'Detailed roster cross-checks of official **Hamas** and **Palestinian Islamic Jihad** martyrdom announcements confirmed that **over half of those killed**—and on the peak day of **May 14, 2018**, **50 out of 62 fatalities**, as senior Hamas official **Salah Bardawil** boasted on Palestinian television—were members of Hamas or allied militant factions. Operatives planted **fence-line IEDs**, tossed grenades, launched thousands of **incendiary kites and balloons** scorching Israeli nature reserves and wheat fields, and rehearsed the exact fence-breaching tactics later unleashed on **October 7, 2023**.'
        ]
      }
    ],
    details: [
      'Senior Hamas officials Salah Bardawil (claiming 50 of 62 killed on May 14, 2018 as Hamas members) and Mahmoud al-Zahar publicly acknowledged armed operatives were embedded in border crowds.',
      'Israel’s Supreme Court unanimously ruled in Yesh Din v. IDF Chief of Staff (May 2018) that preventing mass breaches seconds away from border kibbutzim was a mortal security imperative.',
      'Rioters deployed dense black tire-smoke screens, fence-line IEDs, sniper fire, and incendiary kites/balloons burning thousands of Israeli agricultural acres—later viewed as an operational rehearsal for Oct 7.'
    ],
    sources: [
      {
        title: 'Supreme Court of Israel — Yesh Din v. IDF Chief of Staff (HCJ 3003/18, May 24, 2018)',
        url: 'https://versa.cardozo.yu.edu/',
        publisher: 'Versa — Opinions of the Supreme Court of Israel (Cardozo Law)',
        year: '2018',
        category: 'Court / Official Record'
      },
      {
        title: 'Lex Fridman Podcast #418 — Benny Morris & Steven Bonnell Rebuttal on 2018 Border Breaches',
        url: 'https://lexfridman.com/israel-palestine-debate/',
        publisher: 'Lex Fridman Podcast',
        year: '2024',
        category: 'Debate / Broadcast'
      },
      {
        title: 'INSS Operational Analyses of the 2018–2019 Gaza Fence Clashes & Militant Identifications',
        url: 'https://www.inss.org.il/',
        publisher: 'Institute for National Security Studies (INSS)',
        year: '2019',
        category: 'Scholarship'
      }
    ],
    references: [
      'Israel Supreme Court Ruling — Yesh Din v. IDF Chief of Staff, HCJ 3003/18 (May 24, 2018)',
      'Lex Fridman Podcast #418 — Rebuttals on Hamas Fence Breaches & Salah Bardawil Admissions (2024)',
      'INSS Operational Assessments of 2018–2019 Gaza Border Violence'
    ],
    tags: ['Security', 'International Law'],
    era: '2018–2019'
  },

  // THESIS 3B: Hostage-Ceasefire Priority & "Day After" Governance
  {
    id: 'thesis-gaza-day-after',
    parentId: 'pillar-gaza-security',
    kind: 'thesis',
    title: 'Lasting Gaza Security Requires a Negotiated Ceasefire & Reformed Palestinian Rule',
    summary:
      'Strategic realists, hostage families, and international mediators argue Hamas cannot be eradicated as an idea by force alone; securing hostages and preventing endless insurgency requires a ceasefire paired with an Arab-backed Palestinian governance transition.',
    sections: [
      {
        heading: 'Clausewitzian Limits of Pure Force & "Day After" Planning',
        paragraphs: [
          'Senior veterans of Israel’s own defense establishment—including former IDF Chiefs of Staff **Gadi Eisenkot** and **Benny Gantz**, Defense Minister **Yoav Gallant**, and **Commanders for Israel’s Security**—repeatedly warned that waging open-ended combat without a political **"Day After" governance plan** defies Clausewitzian strategy. Each time IDF divisions cleared districts such as **Jabalia**, **Shuja’iyya**, or **Khan Younis** and pulled out without transferring streets to a non-Hamas Palestinian civilian authority, surviving Hamas cells rapidly re-emerged to police markets and aid distribution.',
          'Endorsed by **UN Security Council Resolution 2735 (June 10, 2024)**, mediators from the **United States**, **Egypt**, and **Qatar** argued that translating tactical degradation of Hamas’s brigades into lasting border security—and bringing remaining living and deceased **hostages** home before time runs out—requires a phased ceasefire coupled with transitional non-Hamas Palestinian administration and monitored demilitarization.'
        ]
      },
      {
        heading: 'Arab Regional Integration & Reconstruction Conditioning',
        paragraphs: [
          'Pragmatic Arab partners—led by **Saudi Arabia**, the **United Arab Emirates**, **Egypt**, and **Jordan**—have expressed readiness to underwrite Gaza’s **$40–50+ billion physical reconstruction**, train vetted Palestinian civil police, and integrate Israel into a broader regional counter-Iran security architecture expanding the **Abraham Accords**. However, every Arab capital flatly refuses to deploy peacekeepers or capital to administer an indefinite Israeli military occupation, conditioning participation on inviting a **reformed, technocratic Palestinian Authority** back into Gaza alongside a credible two-state horizon.'
        ]
      }
    ],
    details: [
      'Former IDF chiefs of staff and defense ministers emphasized that tactical military gains erode rapidly into guerrilla resurgence unless a legitimate non-Hamas Palestinian civilian authority replaces Hamas rule.',
      'Phased diplomatic frameworks such as UNSC Resolution 2735 (June 2024) link hostage releases and ceasefire stages to governance transition and reconstruction.',
      'Arab partners (UAE, Saudi Arabia, Egypt, Jordan) condition reconstruction funding and security support on linking Gaza’s recovery with a credible political pathway for a reformed Palestinian Authority.'
    ],
    sources: [
      {
        title: 'UN Security Council Resolution 2735 — Three-Phase Ceasefire, Hostage Release & Reconstruction Plan',
        url: 'https://undocs.org/S/RES/2735(2024)',
        publisher: 'United Nations Security Council',
        year: '2024',
        category: 'Court / Official Record'
      },
      {
        title: 'Commanders for Israel’s Security — "Day After" Regional & Gaza Governance Proposals',
        url: 'https://en.cis.org.il/',
        publisher: 'Commanders for Israel’s Security',
        year: '2024',
        category: 'Empirical / Economic Study'
      },
      {
        title: 'INSS Strategic Roadmaps for Post-War Gaza Stabilization & Regional Normalization',
        url: 'https://www.inss.org.il/',
        publisher: 'Institute for National Security Studies (INSS)',
        year: '2024',
        category: 'Scholarship'
      }
    ],
    references: [
      'UNSC Resolution 2735 — Three-Phase Ceasefire & Reconstruction Framework (June 2024)',
      'Commanders for Israel’s Security (CIS) "Day After" Policy Briefs (2024)',
      'INSS Strategic Assessments on Post-War Gaza Governance (2024)'
    ],
    tags: ['Diplomacy', 'Security', 'Governance'],
    era: '2024–Present'
  },
  {
    id: 'pro-day-after-counterinsurgency',
    parentId: 'thesis-gaza-day-after',
    kind: 'pro',
    title: 'Counterinsurgency Doctrine Shows Vacuum Breeds Re-Recruitment',
    summary:
      'Modern counterinsurgency history (Iraq, Afghanistan, Southern Lebanon) demonstrates that clearing territory without installing viable local governance allows insurgents to regroup among a destitute population.',
    sections: [
      {
        heading: '"Clear, Hold, Build" Lessons From Modern Counterinsurgency',
        paragraphs: [
          'Modern counterinsurgency history—spanning Israel’s costly **18-year occupation of Southern Lebanon (1982–2000)** alongside American campaigns in **Iraq (2003–2011)** and **Afghanistan**—confirms the foundational operational rule of **"Clear, Hold, Build"**: kinetic "clearing" sweeps inevitably fail whenever no legitimate local authority exists to "hold" neighborhoods and "build" municipal order. Leaving two million traumatized, destitute Gazans amid uncollected rubble without jobs or civil policing hands **Hamas** an inexhaustible pool of desperate young recruits to replenish lost fighters.'
        ]
      },
      {
        heading: 'Empirical Record of Hostage Recovery & Unified Governance',
        paragraphs: [
          'Hostage-family forums and intelligence veterans underscore a stark empirical reality: whereas heroic special-forces raids rescued fewer than ten captives alive over more than a year (while other hostages died in bombings or were executed by guards as troops approached in **Rafah**), **over 100 living hostages** were brought home safely during the **November 2023 negotiated pause** and subsequent phased deals. Reunifying Gaza and West Bank civil institutions under an audited, technocratic cabinet backed by Arab and Western monitors offers the only non-Hamas alternative to permanent IDF military rule.'
        ]
      }
    ],
    details: [
      'Comparative counterinsurgency lessons from Southern Lebanon (1982–2000), Iraq, and Afghanistan confirm that clearing urban terrain without installing local civil governance breeds perpetual guerrilla re-recruitment.',
      'The vast majority of hostages returned alive were freed through negotiated ceasefire phases rather than high-risk urban assaults, which repeatedly endangered captives held underground.',
      'Reuniting Gaza and West Bank administration under a technocratic, internationally audited Palestinian cabinet restores an accountable governance partner and unlocks Gulf reconstruction capital.'
    ],
    sources: [
      {
        title: 'UN Security Council Resolution 2735 — Reunification & Reconstruction Framework',
        url: 'https://undocs.org/S/RES/2735(2024)',
        publisher: 'United Nations Security Council',
        year: '2024',
        category: 'Court / Official Record'
      },
      {
        title: 'Modern War Institute at West Point — Counterinsurgency & Post-Clearance Governance Studies',
        url: 'https://mwi.westpoint.edu/',
        publisher: 'Modern War Institute, U.S. Military Academy',
        year: '2024',
        category: 'Scholarship'
      },
      {
        title: 'Commanders for Israel’s Security — Technocratic Gaza Transition Plan',
        url: 'https://en.cis.org.il/',
        publisher: 'Commanders for Israel’s Security',
        year: '2024',
        category: 'Empirical / Economic Study'
      }
    ],
    references: [
      'UNSC Resolution 2735 (June 2024)',
      'Modern War Institute Counterinsurgency & Urban Stabilization Studies (2024)',
      'Commanders for Israel’s Security Proposals on Technocratic PA Governance (2024)'
    ],
    tags: ['Security', 'Diplomacy', 'Governance'],
    era: '2024–Present'
  },
  {
    id: 'con-day-after-premature-exit',
    parentId: 'thesis-gaza-day-after',
    kind: 'con',
    title: 'Leaving Hamas Intact Rewards Mass Hostage-Taking & Invites Repeat Attacks',
    summary:
      'Opponents of an early permanent IDF withdrawal warn that ending the war while Hamas retains armed brigades and Philadelphi Corridor smuggling routes hands Hamas a strategic victory, validates mass kidnapping, and guarantees rearmament.',
    sections: [
      {
        heading: 'The 2011 Shalit Precedent & Moral Hazard of Asymmetric Exchanges',
        paragraphs: [
          'Defense hawks warn that accepting a permanent IDF pullout while **Hamas** survives as Gaza’s armed sovereign hands Islamist movements across the region proof that mass civilian abduction forces democracies to capitulate. Critics point directly to the **October 2011 Gilad Shalit exchange**, in which Israel freed **1,027 security prisoners**—including **Yahya Sinwar**, who immediately resumed command in Gaza and masterminded the **October 7, 2023 massacre**—prompting Israel’s **2012 Shamgar Commission** to warn sharply against lopsided deals that incentivize future mass kidnappings.'
        ]
      },
      {
        heading: 'Philadelphi Smuggling Tunnels & Weakness of the Palestinian Authority',
        paragraphs: [
          'During its **May 2024 Rafah campaign**, IDF engineers uncovered dozens of cross-border smuggling tunnels along the **14-km Philadelphi Corridor** bordering Egypt through which Hamas had imported factory-grade Iranian rockets, anti-tank missiles, and machinery for years despite international assurances. Skeptics argue that a **Palestinian Authority** that already collapsed violently before Hamas in **June 2007**—and cannot even police **Jenin** or **Nablus** without IDF raids—would become a powerless facade behind which Hamas reconstitutes a **Hezbollah-style terror army**.'
        ]
      }
    ],
    details: [
      'Points to the 2011 Gilad Shalit exchange—trading 1,027 prisoners (including Oct 7 mastermind Yahya Sinwar) for one soldier—as a cautionary precedent whose strategic cost later proved catastrophic.',
      'Argues relinquishing control of the Philadelphi Corridor (Gaza–Egypt border) would allow Hamas to rapidly re-import Iranian rockets and anti-tank weaponry.',
      'Contends the Palestinian Authority lacked the strength to hold Gaza in 2007 and cannot suppress surviving Hamas fighters without overriding IDF security freedom of action.'
    ],
    sources: [
      {
        title: 'INSS Strategic Debate — Philadelphi Corridor Control, Prisoner Exchanges & Preventing Hamas Rearmament',
        url: 'https://www.inss.org.il/',
        publisher: 'Institute for National Security Studies (INSS)',
        year: '2024',
        category: 'Scholarship'
      },
      {
        title: 'Open to Debate: "Were Israel’s Actions in the Gaza War Justified?" (Deterrence & Hamas Survival Arguments)',
        url: 'https://opentodebate.org/',
        publisher: 'Open to Debate',
        year: '2024',
        category: 'Debate / Broadcast'
      }
    ],
    references: [
      'Shamgar Commission Report Principles on Prisoner Exchanges (2012) & INSS Strategic Analyses (2024)',
      'Open to Debate: "Were Israel’s Actions in the Gaza War Justified?" (Sept 2024)'
    ],
    tags: ['Security'],
    era: '2011–Present'
  },

  // THESIS 3C: The ICJ "Genocide" Legal Threshold Debate (Dolus Specialis)
  {
    id: 'thesis-icj-genocide-threshold',
    parentId: 'pillar-gaza-security',
    kind: 'thesis',
    title: 'Gaza Campaign Crosses the 1948 Genocide Convention Legal Threshold',
    summary:
      'Argued before the ICJ in South Africa v. Israel (2024) and debated globally (Open to Debate Sept 2024; Oxford Union Nov 2024), proponents contend the cumulative destruction of life-sustaining infrastructure paired with official rhetoric establishes genocidal intent.',
    sections: [
      {
        heading: 'Article II of the 1948 Genocide Convention & South Africa v. Israel',
        paragraphs: [
          'Adopted unanimously by the UN General Assembly in the aftermath of the Holocaust on **December 9, 1948**, **Article II of the Genocide Convention** defines genocide as specific acts—including killing (**Art. II(a)**), causing serious bodily or mental harm (**Art. II(b)**), and *"deliberately inflicting on the group conditions of life calculated to bring about its physical destruction in whole or in part"* (**Art. II(c)**)—committed with **special intent (*dolus specialis*)** to destroy a protected national, ethnical, racial, or religious group *as such*.',
          'On **December 29, 2023**, **South Africa** instituted contentious proceedings against Israel before the **International Court of Justice** (*Case 192*) under Article IX of the Convention, contending that the totality of Israel’s bombardment, mass displacement, and siege conditions crossed beyond individual war crimes into the systemic physical destruction of Palestinians in Gaza as a substantial part of the Palestinian people.'
        ]
      },
      {
        heading: 'Global Legal, Parliamentary & Broadcast Flashpoint (2024–2026)',
        paragraphs: [
          'Although final ICJ adjudication on the merits spans multiple years—with intervening states such as **Ireland**, **Spain**, and **Colombia** aligned against **Israel** and strong legal pushback from **the United States**, **Germany**, and the **United Kingdom**—the dispute over whether Gaza satisfies the strict **1948 Convention** threshold became a defining moral and legal flashpoint across global politics, universities, and public debates, notably the **September 2024 Open to Debate clash between Mehdi Hasan and Eylon Levy**.'
        ]
      }
    ],
    details: [
      'Distinguishes war crimes / disproportionate strikes under IHL from the crime of genocide under Article II(c) of the 1948 Convention ("deliberately inflicting on the group conditions of life calculated to bring about its physical destruction in whole or in part").',
      'Litigated under contentious ICJ jurisdiction in South Africa v. Israel (Case 192), where interim orders directed humanitarian safeguards while deferring a final merits ruling on genocidal intent.',
      'Became one of the fiercest legal and moral flashpoints in international courts, parliaments, and public debates (e.g., Open to Debate Sept 2024) between 2024 and 2026.'
    ],
    sources: [
      {
        title: 'Convention on the Prevention and Punishment of the Crime of Genocide (December 9, 1948)',
        url: 'https://ihl-databases.icrc.org/en/ihl-treaties/genocide-conv-1948',
        publisher: 'ICRC International Humanitarian Law Databases',
        year: '1948',
        category: 'Primary Text / Treaty'
      },
      {
        title: 'ICJ Case 192 — Application of the Convention on the Prevention and Punishment of the Crime of Genocide in the Gaza Strip',
        url: 'https://www.icj-cij.org/case/192',
        publisher: 'International Court of Justice',
        year: '2024',
        category: 'Court / Official Record'
      },
      {
        title: 'Open to Debate: "Were Israel’s Actions in the Gaza War Justified?" — Eylon Levy vs. Mehdi Hasan',
        url: 'https://opentodebate.org/',
        publisher: 'Open to Debate',
        year: '2024',
        category: 'Debate / Broadcast'
      }
    ],
    references: [
      'Convention on the Prevention and Punishment of the Crime of Genocide Art. II (1948)',
      'ICJ Case 192 — South Africa v. Israel Docket & Oral Arguments (2024)',
      'Open to Debate: Eylon Levy vs. Mehdi Hasan (Sept 2024)'
    ],
    tags: ['International Law', 'Human Rights'],
    era: '2024–Present'
  },
  {
    id: 'pro-genocide-conditions-statements',
    parentId: 'thesis-icj-genocide-threshold',
    kind: 'pro',
    title: 'Cumulative Destruction of Life Systems Coupled With Incendiary Official Rhetoric',
    summary:
      'South Africa’s legal team (Blinne Ní Ghrálaigh, Vaughan Lowe), Amnesty International (Dec 2024), and genocide scholars cite the razing of neighborhoods, collapse of hospitals and sanitation, acute hunger, and "Amalek"/"human animals" quotes as evidence of intent.',
    sections: [
      {
        heading: 'Article II(c) Conditions of Life & Systemic Urbicide',
        paragraphs: [
          'Oral advocates for **South Africa** (**Blinne Ní Ghrálaigh KC**, **Vaughan Lowe KC**, **Adila Hassim SC**) alongside **Amnesty International’s December 2024 legal report** argue that genocide need not take the form of industrial extermination camps to violate **Article II(c)**; systematically destroying hospitals, maternal wards, water and sewage plants, orchards, fishing boats, bakeries, universities, and **more than 60% of housing** while repeatedly bombing overcrowded tent zones calculates the physical destruction of Gazan society.',
          'Proponents contend that under a realistic reading of the **1948 Genocide Convention**, **dual intent**—pursuing military war aims against Hamas *while simultaneously* treating the collective devastation of Gaza’s protected civilian population as an instrument of deterrence or collective retribution—must not shield state officials from liability where foreseeable, cumulative lethality is sustained month after month despite three binding **ICJ provisional measures orders**.'
        ]
      },
      {
        heading: 'Pattern of Dehumanizing Rhetoric & Soldier Videos',
        paragraphs: [
          'Unlike historical atrocity trials where officials hid incriminating directives, South Africa’s dossier compiled dozens of public statements—including Prime Minister **Benjamin Netanyahu’s** invocation of biblical **"Amalek"**, Defense Minister **Yoav Gallant’s** October 9 **"human animals"** declaration, President **Isaac Herzog’s** remark that *"an entire nation out there is responsible,"* Heritage Minister **Amihai Eliyahu’s** nuclear remarks, and viral videos of IDF ground soldiers chanting Amalek slogans while detonating residential blocks—as direct evidence linking official rhetoric to battlefield conduct.'
        ]
      }
    ],
    details: [
      'Cites cumulative destruction of hospitals, water sanitation, farmland, universities, and >60% of housing alongside severe hunger as fulfilling Article II(c) ("conditions of life calculated to bring about physical destruction").',
      'Argues genocidal intent (dolus specialis) can coexist alongside military counter-insurgency goals if destroying part of the protected group becomes an accepted means.',
      'Links operational devastation with public rhetoric ("Amalek," "human animals," "no uninvolved civilians") echoed in filmed ground-troop demolitions.'
    ],
    sources: [
      {
        title: 'ICJ Case 192 — South Africa Application & Verbatim Oral Pleadings (Jan 11 & May 16, 2024)',
        url: 'https://www.icj-cij.org/case/192',
        publisher: 'International Court of Justice',
        year: '2024',
        category: 'Court / Official Record'
      },
      {
        title: 'Amnesty International — Legal & Field Assessments on Gaza Conduct (2024)',
        url: 'https://www.amnesty.org/en/',
        publisher: 'Amnesty International',
        year: '2024',
        category: 'Watchdog / NGO'
      },
      {
        title: 'Genocide Convention, Articles II & III (1948)',
        url: 'https://ihl-databases.icrc.org/en/ihl-treaties/genocide-conv-1948',
        publisher: 'ICRC International Humanitarian Law Databases',
        year: '1948',
        category: 'Primary Text / Treaty'
      }
    ],
    references: [
      'South Africa Verbatim Oral Arguments Before the ICJ Peace Palace (Jan 11 & May 16, 2024)',
      'Amnesty International Legal Assessment on Gaza (Dec 2024)',
      'Genocide Convention Art. II & III (1948)'
    ],
    tags: ['International Law', 'Human Rights'],
    era: '2024–Present'
  },
  {
    id: 'con-genocide-dolus-specialis-strict',
    parentId: 'thesis-icj-genocide-threshold',
    kind: 'con',
    title: 'ICJ Jurisprudence Requires Dolus Specialis as the "Only Reasonable Inference"',
    summary:
      'Israel’s ICJ counsel (Tal Becker, Malcolm Shaw) and international-law scholars emphasize that settled ICJ precedent (Bosnia v. Serbia; Croatia v. Serbia) requires special intent to physically destroy a people as such—which must be the *only* reasonable inference from state conduct.',
    sections: [
      {
        heading: 'Settled ICJ Precedent: Bosnia v. Serbia (2007) & Operational Mitigation',
        paragraphs: [
          'Israel’s ICJ counsel (**Dr. Tal Becker** and **Prof. Malcolm Shaw KC**), backed by legal interventions or positions from **Germany**, the **United Kingdom**, and the **United States**, emphasize binding **ICJ jurisprudence in *Bosnia v. Serbia* (2007, para. 373)** and ***Croatia v. Serbia* (2015, para. 148)**: when *dolus specialis* is inferred from a pattern of conduct, intent to physically destroy the protected group *as such* must be the **only reasonable inference**—meaning plausible military objectives (destroying tunnels and embedded brigades) defeat a genocide claim (tellingly, **Amnesty International** explicitly urged the ICJ in Dec 2024 to *lower* its settled legal standard).',
          'Operational behavior on the ground is flatly irreconcilable with extermination intent: a military seeking to annihilate a civilian population does not distribute **millions of advance evacuation leaflets**, place **tens of thousands of warning phone calls**, map **humanitarian corridors**, facilitate **over one million tons of food, water, fuel, and polio vaccines**, or risk **hundreds of its own young soldiers’ lives** clearing booby-trapped buildings in close combat instead of bombing unwarned cities from afar.'
        ]
      },
      {
        heading: 'Selective Quote-Splicing & Inversion of October 7',
        paragraphs: [
          'Declassified **Israeli War Cabinet orders** refute South Africa’s selectively edited quotes: **Gallant’s** "human animals" remark explicitly described Hamas terrorists hours after October 7; **Herzog** stated in his very next breath that Israel must uphold international humanitarian law and distinguish non-combatants; and **Netanyahu’s** "Amalek" verse is inscribed permanently at **Yad Vashem** and **The Hague** referring to genocidal attackers. Equating tragic urban counter-insurgency—like Allied battles in **Mosul** against ISIS—with genocide hollows out and inverts the **1948 Convention**.'
        ]
      }
    ],
    details: [
      'Under settled ICJ jurisprudence (Bosnia v. Serbia para. 373), genocidal intent inferred from conduct must be the ONLY reasonable inference—a standard so strict that Amnesty’s Dec 2024 report openly lobbied to dilute it.',
      'Issuing millions of advance evacuation warnings, mapping safe corridors, facilitating >1M tons of food/vaccines, and losing hundreds of soldiers in close-quarters combat instead of bombing unwarned cities are incompatible with intent to exterminate civilians.',
      'High urban destruction—even where critics allege IHL proportionality breaches (as in Mosul against ISIS)—legally constitutes counter-insurgency warfare that Hamas could have ended any day by releasing hostages and surrendering.'
    ],
    sources: [
      {
        title: 'ICJ Case 91 — Bosnia and Herzegovina v. Serbia and Montenegro Judgment (Para. 373, "Only Reasonable Inference" Standard)',
        url: 'https://www.icj-cij.org/case/91',
        publisher: 'International Court of Justice',
        year: '2007',
        category: 'Court / Official Record'
      },
      {
        title: 'ICJ Case 192 — Verbatim Oral Arguments for Israel by Dr. Tal Becker & Prof. Malcolm Shaw KC (Jan 12, 2024)',
        url: 'https://www.icj-cij.org/case/192',
        publisher: 'International Court of Justice',
        year: '2024',
        category: 'Court / Official Record'
      },
      {
        title: 'Open to Debate: Eylon Levy Rebuttal on Dolus Specialis & Urban Counter-Insurgency vs. Genocide',
        url: 'https://opentodebate.org/',
        publisher: 'Open to Debate',
        year: '2024',
        category: 'Debate / Broadcast'
      }
    ],
    references: [
      'ICJ Judgment, Bosnia and Herzegovina v. Serbia and Montenegro Para. 373 (2007)',
      'Tal Becker & Prof. Malcolm Shaw KC Oral Arguments for Israel, ICJ Case 192 (Jan 12, 2024)',
      'Open to Debate — Eylon Levy vs. Mehdi Hasan (Sept 2024)'
    ],
    tags: ['International Law', 'Security'],
    era: '2024–Present',
    relatedIds: ['con-rebuttal-aid-diversion-icj']
  }
];
