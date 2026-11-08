import { DebateNode } from '../../types/debate';

export const regionalGeopoliticsNodes: DebateNode[] = [
  {
    id: 'pillar-regional-geopolitics',
    parentId: 'root-ip',
    kind: 'pillar',
    title: 'Regional Geopolitics, Abraham Accords, Iran & U.S. Policy',
    summary:
      'Examines whether Arab–Israeli normalization can precede Palestinian statehood ("Outside-In"), the role of Iran’s regional "Axis of Resistance," and debates over U.S. mediation and conditioning military aid.',
    sections: [
      {
        heading: 'Competing Paradigms: Outside-In Integration vs. Inside-Out Linkage',
        paragraphs: [
          'For over five decades, Arab–Israeli diplomacy was governed by an **"Inside-Out"** consensus—first hardened in the **1967 Khartoum Resolution** and later reframed conditionally in the **2002 Beirut Arab Peace Initiative**—stipulating that broader Arab normalization could occur only after a final-status Israeli–Palestinian settlement. While **Egypt (1979)** and **Jordan (1994)** broke ranks via bilateral security treaties, most Sunni states withheld formal ties until the **September 2020 Abraham Accords** with the **UAE**, **Bahrain**, **Morocco**, and **Sudan** inverted that diplomatic sequence.',
          'Strategists remain sharply divided over the durability of this **"Outside-In"** architecture. Proponents argue regional trade corridors, intelligence sharing, and diplomatic embassies strip rejectionist factions of a veto over Arab state interests while giving moderate capitals constructive leverage inside Jerusalem. Critics counter that **October 7, 2023** exposed the peril of treating **~5.3 million stateless Palestinians** as an afterthought, prompting **Saudi Arabia** to condition future recognition on an irreversible pathway to Palestinian statehood.'
        ]
      },
      {
        heading: 'Iran’s Regional Axis & the American Patronage Debate',
        paragraphs: [
          'Simultaneously, regional security analysts debate whether escalation stems primarily from indigenous Palestinian statelessness or from **Tehran’s Islamic Revolutionary Guard Corps (IRGC)** orchestrating a multi-front **"Axis of Resistance"** across **Hezbollah**, **Hamas**, **Palestinian Islamic Jihad (PIJ)**, Iraqi militias, and Yemen’s **Houthis**. Direct Iranian ballistic and cruise missile barrages against Israel in **April and October 2024** transformed decades of shadow proxy warfare into overt state-to-state confrontation.',
          'In Washington, these regional dynamics intersect with an unprecedented policy debate over the **$3.8 billion annual U.S.–Israel Memorandum of Understanding** and **45+ U.S. Security Council vetoes**. Lawmakers and diplomats clash over whether enforcing **Foreign Assistance Act Section 620I**, the **Leahy Law**, and **National Security Memorandum 20 (NSM-20)** restores American leverage and legal compliance, or dangerously erodes allied deterrence mid-war.'
        ]
      }
    ],
    details: [
      'Contrasts "Outside-In" Arab–Israeli normalization (2020 Abraham Accords) against the "Inside-Out" sequence requiring Palestinian statehood first (2002 Arab Peace Initiative).',
      'Evaluates whether multi-front escalation is driven primarily by Iran’s IRGC "Ring of Fire" or by unresolved Palestinian statelessness that Tehran opportunistically exploits.',
      'Weighs conditioning U.S. military aid ($3.8B/yr MOU) and ending UNSC vetoes under FAA Sec. 620I and Leahy statutes against preserving Israel’s Qualitative Military Edge (QME).',
      'Synthesizes debates from the Council on Foreign Relations (CFR), Open to Debate (Intelligence Squared U.S.), U.S. Senate hearings, and INSS strategic forums.'
    ],
    sources: [
      {
        title: 'The Abraham Accords Declaration & Bilateral Peace Agreements',
        url: 'https://www.state.gov/the-abraham-accords/',
        publisher: 'U.S. Department of State',
        year: '2020',
        category: 'Primary Text / Treaty'
      },
      {
        title: 'U.S. Foreign Aid to Israel (CRS Report RL33222)',
        url: 'https://crsreports.congress.gov/product/pdf/RL/RL33222',
        publisher: 'Congressional Research Service',
        year: '2024',
        category: 'Court / Official Record'
      },
      {
        title: 'Global Conflict Tracker: Israeli–Palestinian Conflict',
        url: 'https://www.cfr.org/global-conflict-tracker/conflict/israeli-palestinian-conflict',
        publisher: 'Council on Foreign Relations',
        year: '2025',
        category: 'Scholarship'
      },
      {
        title: 'Open to Debate (Intelligence Squared U.S.) Middle East Policy Archives',
        url: 'https://opentodebate.org/',
        publisher: 'Open to Debate',
        year: '2012–2024',
        category: 'Debate / Broadcast'
      }
    ],
    references: [
      'Abraham Accords Peace Agreement (Sept 15, 2020)',
      'Intelligence Squared U.S. Debate on U.S. Mediation Role (2012)',
      'U.S. National Security Memorandum 20 (NSM-20) & Foreign Assistance Act Sec. 620I'
    ],
    tags: ['Diplomacy', 'Security', 'International Law'],
    era: '2011–Present'
  },

  // THESIS 7A: Abraham Accords & "Outside-In" Normalization
  {
    id: 'thesis-abraham-accords',
    parentId: 'pillar-regional-geopolitics',
    kind: 'thesis',
    title: 'Abraham Accords: "Outside-In" Regional Integration Builds Peace',
    summary:
      'Normalizing diplomatic, economic, and security ties between Israel and Arab states (UAE, Bahrain, Morocco, and potentially Saudi Arabia) advances regional stability and moderates the conflict without granting rejectionist actors a veto.',
    sections: [
      {
        heading: 'Reversing the Khartoum & Beirut Diplomatic Sequence',
        paragraphs: [
          'Signed on **September 15, 2020**, the **Abraham Accords** among Israel, the **United Arab Emirates**, and **Bahrain**—quickly followed by normalization agreements with **Morocco** and **Sudan**—shattered a half-century diplomatic taboo. Architects including **Jared Kushner** and veteran envoy **Dennis Ross** argued that conditioning Arab–Israeli peace on prior final-status agreement with Palestinian leaders had inadvertently handed **Hamas** and maximalist factions a permanent veto over regional modernization.',
          'Rather than abandoning Palestinian aspirations, proponents contend **"Outside-In"** integration constructs a pragmatic Sunni–Israeli coalition aligned against Islamist extremism and Iranian hegemony. By normalizing embassies, direct commercial flights, dual-use technology ventures, and interfaith institutions such as Abu Dhabi’s **Abrahamic Family House**, Arab states model coexistence and create tangible incentives for Israeli moderation.'
        ]
      },
      {
        heading: 'Economic Corridors & Integrated Air Defense Under Fire',
        paragraphs: [
          'Between 2020 and 2024, bilateral Israel–UAE non-oil trade surged past **$3.2 billion annually** under a comprehensive Free Trade Agreement, while the **March 2022 Negev Summit** convened foreign ministers from Israel, the U.S., UAE, Bahrain, Morocco, and Egypt. At the **September 2023 G20 Summit**, Washington unveiled the **India–Middle East–Europe Economic Corridor (IMEC)** envisioned to link Gulf rail networks through Jordan to Israel’s **Haifa port**.',
          'Supporters highlight that not a single Abraham Accords signatory severed diplomatic relations during the post-October 2023 Gaza war—standing in sharp contrast to earlier eras when regional crises triggered instant diplomatic ruptures. Under **U.S. CENTCOM** coordination, regional radar early-warning networks and **Jordanian** airspace interceptions actively helped defeat **Iran’s April and October 2024** drone and ballistic missile salvos.'
        ]
      }
    ],
    details: [
      'Reversed the 1967 Khartoum and 2002 Beirut "Inside-Out" sequence that froze Arab–Israeli ties until all final-status Palestinian issues were resolved.',
      'Generated $3.2B+ in annual UAE–Israel bilateral trade, the 2022 Negev Summit framework, and the G20 India–Middle East–Europe Economic Corridor (IMEC) blueprint.',
      'Maintained intact diplomatic relations across the UAE, Bahrain, and Morocco throughout the post-2023 war despite intense regional street pressure.',
      'Enabled U.S. CENTCOM-integrated early warning and air-defense coordination during Iran’s April and October 2024 missile barrages.'
    ],
    sources: [
      {
        title: 'The Abraham Accords Peace Agreement & Declarations',
        url: 'https://www.state.gov/the-abraham-accords/',
        publisher: 'U.S. Department of State',
        year: '2020',
        category: 'Primary Text / Treaty'
      },
      {
        title: 'Abraham Accords & Regional Strategic Architecture Studies',
        url: 'https://www.inss.org.il/',
        publisher: 'Institute for National Security Studies (INSS)',
        year: '2024',
        category: 'Scholarship'
      },
      {
        title: 'Abraham Accords Policy Tracker & Trade Metrics',
        url: 'https://www.washingtoninstitute.org/',
        publisher: 'The Washington Institute for Near East Policy',
        year: '2024',
        category: 'Empirical / Economic Study'
      }
    ],
    references: [
      'Abraham Accords Declaration (Sept 2020)',
      'Dennis Ross & Jared Kushner — Arguments for Outside-In Regional Integration (CFR / Foreign Affairs)',
      'India–Middle East–Europe Economic Corridor (IMEC) MOU (Sept 2023)'
    ],
    tags: ['Diplomacy', 'Security'],
    era: '2020–Present',
    relatedIds: ['pro-two-state-regional-alliance']
  },
  {
    id: 'pro-abraham-leverage-annexation',
    parentId: 'thesis-abraham-accords',
    kind: 'pro',
    title: 'Constructive Engagement Gives Arab States Direct Leverage Over Israeli Policy',
    summary:
      'Supporters note that UAE normalization in August 2020 directly halted Israel’s planned unilateral annexation of up to 30% of the West Bank—achieving concrete restraint that decades of diplomatic boycotts failed to secure.',
    sections: [
      {
        heading: 'The August 2020 Annexation Freeze & Diplomatic Trade-Offs',
        paragraphs: [
          'In June 2020, Emirati Ambassador **Yousef Al Otaiba** took the unprecedented step of publishing a front-page Hebrew op-ed in *Yediot Ahronoth* appealing directly to the Israeli public: Israel could have either **regional normalization** or unilateral **West Bank annexation**, but not both. On **August 13, 2020**, the **Joint US–Israel–UAE Statement** formally suspended Prime Minister **Benjamin Netanyahu’s** coalition pledge to annex up to **30% of Area C**.',
          'Advocates point to this episode as empirical proof that diplomatic recognition creates a high-value asset Israeli governments are reluctant to forfeit. Whereas seventy years of Arab League boycotts gave Jerusalem zero diplomatic incentive to accommodate Arab preferences, tangible partnerships force Israeli cabinets to weigh far-right coalition demands against lucrative Gulf trade, overflight rights, and security cooperation.'
        ]
      },
      {
        heading: 'Humanitarian Access, Resource Interdependence & Post-War Leverage',
        paragraphs: [
          'During the 2023–2025 Gaza war, diplomatic channels allowed the **UAE**, **Egypt**, **Jordan**, and **Morocco** to negotiate directly with Israeli defense authorities to deliver aid. Under **Operation Gallant Knight 3**, Abu Dhabi established field hospitals in Rafah and floating medical ships at Al-Arish, financed cross-border **desalinated water pipelines**, and coordinated overland and air-dropped food convoys.',
          'Beyond crisis relief, trilateral initiatives such as **Project Prosperity**—designed to exchange **Jordanian solar power** for **Israeli desalinated water** financed by the **UAE**—embed ecological interdependence across climate-stressed borders. Proponents argue only engaged Arab states hold the credibility with both Washington and Jerusalem to shape Gaza reconstruction and condition post-war funding on a revitalized **Palestinian Authority**.'
        ]
      }
    ],
    details: [
      'UAE normalization in August 2020 directly compelled Israel to suspend planned unilateral annexation of up to 30% of the West Bank.',
      'Direct diplomatic channels enabled UAE Operation Gallant Knight 3 field hospitals, desalination pipelines, and Moroccan/Jordanian aid deliveries into Gaza.',
      'Cross-border water-for-solar projects (Project Prosperity) create tangible ecological and economic stakes that deter unilateral rupture.',
      'Positions moderate Sunni states to shape post-war Gaza governance and condition reconstruction capital on institutional reform.'
    ],
    sources: [
      {
        title: 'Joint Statement of the United States, Israel, and the UAE (Abraham Accords Archive)',
        url: 'https://www.state.gov/the-abraham-accords/',
        publisher: 'U.S. Department of State',
        year: '2020',
        category: 'Primary Text / Treaty'
      },
      {
        title: 'Arab–Israeli Normalization & Leverage Over West Bank Policy',
        url: 'https://www.inss.org.il/',
        publisher: 'Institute for National Security Studies (INSS)',
        year: '2023',
        category: 'Scholarship'
      },
      {
        title: 'Middle East Regional Integration & Climate/Water Diplomacy',
        url: 'https://www.washingtoninstitute.org/',
        publisher: 'The Washington Institute for Near East Policy',
        year: '2023',
        category: 'Scholarship'
      }
    ],
    references: [
      'Joint US–Israel–UAE Statement Suspending West Bank Annexation Plans (Aug 13, 2020)'
    ],
    tags: ['Diplomacy', 'Governance'],
    era: '2020–Present'
  },
  {
    id: 'con-abraham-oct7-bypass-failure',
    parentId: 'thesis-abraham-accords',
    kind: 'con',
    title: 'October 7 Shattered the Illusion That Palestine Can Be Sidelined',
    summary:
      'Critics argue the "Outside-In" thesis lulled Washington and Jerusalem into believing the Palestinian question had shrunk to a marginal nuisance—leaving an explosive grievance festering until October 7 plunged the entire Middle East into war.',
    sections: [
      {
        heading: 'Strategic Complacency & the Collapse of Conflict Management',
        paragraphs: [
          'Analysts such as **Khaled Elgindy** and former Jordanian Foreign Minister **Marwan Muasher** argue the Abraham Accords fostered a dangerous illusion in Washington and Jerusalem that the conflict could be bypassed indefinitely. Eight days before **October 7, 2023**, U.S. National Security Advisor **Jake Sullivan** famously wrote that the Middle East was *"quieter than it has been for decades"*—reflecting elite consensus that regional deals had rendered Palestinian statelessness geopolitically peripheral.',
          'Furthermore, critics emphasize that the August 2020 annexation "freeze" halted formal *de jure* sovereignty declarations while *de facto* settlement expansion, outpost legalization, and settler violence surged to record highs across the West Bank in **2022–2024**. Signing peace treaties with distant Gulf monarchies that had never fought a war with Israel left the core territorial dispute between the Jordan River and the Mediterranean completely unresolved.'
        ]
      },
      {
        heading: 'Cold Peace on the Arab Street & Riyadh’s Statehood Condition',
        paragraphs: [
          'Public opinion polling conducted by **Arab Barometer** and the **Washington Institute** across 2022–2024 showed **75–90%+** of citizens in Saudi Arabia, Jordan, Egypt, and even Accords states opposing normalization absent Palestinian freedom. Without popular legitimacy, elite-to-elite pacts risk devolving into brittle **"cold peace"** security regimes reliant on domestic censorship and vulnerable to regional shocks.',
          'Post-October 7 instability froze public progress on **IMEC** rail transit and prompted **Saudi Crown Prince Mohammed bin Salman** and the **Saudi Foreign Ministry** in **2024–2025** to harden Riyadh’s red line: no Saudi diplomatic recognition of Israel will occur without an independent Palestinian state along **1967 lines** with East Jerusalem as its capital, effectively reinstating the core logic of the **2002 Arab Peace Initiative**.'
        ]
      }
    ],
    details: [
      'Critics argue "Outside-In" diplomacy bred pre-Oct 7 complacency while ~5.3 million Palestinians remained stateless under occupation or blockade.',
      'De jure annexation was paused in 2020, yet de facto West Bank settlement expansion and outpost construction hit record highs in 2023–2024.',
      'Polling by the Washington Institute and Arab Barometer shows 75–90%+ public opposition across Arab societies when Palestinian rights are sidelined.',
      'Saudi Arabia explicitly conditioned any normalization in 2024–2025 on an irreversible pathway to an independent Palestinian state.'
    ],
    sources: [
      {
        title: 'Carnegie Middle East Analysis: Why Palestine Cannot Be Bypassed',
        url: 'https://carnegieendowment.org/middle-east',
        publisher: 'Carnegie Endowment for International Peace',
        year: '2024',
        category: 'Scholarship'
      },
      {
        title: 'Fikra Forum & Arab Public Opinion Polling on Normalization',
        url: 'https://www.washingtoninstitute.org/',
        publisher: 'The Washington Institute for Near East Policy',
        year: '2024',
        category: 'Empirical / Economic Study'
      },
      {
        title: 'CFR Conflict Tracker: Post-2023 Regional Fallout & Saudi Diplomacy',
        url: 'https://www.cfr.org/global-conflict-tracker/conflict/israeli-palestinian-conflict',
        publisher: 'Council on Foreign Relations',
        year: '2025',
        category: 'Scholarship'
      }
    ],
    references: [
      'Khaled Elgindy & Marwan Muasher — Critiques of Bypassing the Palestinian Core (Carnegie / MEI)',
      'Saudi Foreign Ministry Official Statements Conditioning Normalization on Palestinian Statehood (2024–2025)'
    ],
    tags: ['Diplomacy', 'Security', 'Human Rights'],
    era: '2020–Present'
  },

  // THESIS 7B: Iran's "Axis of Resistance" vs. Indigenous Grievance
  {
    id: 'thesis-iran-axis',
    parentId: 'pillar-regional-geopolitics',
    kind: 'thesis',
    title: 'Escalation Is Driven Primarily by Iran’s Ideological "Axis of Resistance"',
    summary:
      'Strategic analysts argue modern multi-front warfare is orchestrated by Tehran’s Islamic Revolutionary Guard Corps (IRGC)—arming Hamas, Hezbollah, PIJ, and the Houthis to destroy Israel and block U.S.-aligned regional order regardless of 1967 borders.',
    sections: [
      {
        heading: 'Tehran’s IRGC "Ring of Fire" & Eliminationist Doctrine',
        paragraphs: [
          'Over three decades, the **IRGC Quds Force**—architected by **Qasem Soleimani** and continued under **Esmail Qaani**—constructed a transnational **"Ring of Fire"** encircling Israel through **Hezbollah** in Lebanon, **Hamas** and **Palestinian Islamic Jihad (PIJ)** in Gaza and the West Bank, Shiite militias in Iraq and Syria, and the **Ansar Allah (Houthi)** movement in Yemen. Supreme Leader **Ali Khamenei** officially designates the entirety of sovereign Israel—including pre-1967 **Tel Aviv** and **Haifa**—as a *"cancerous tumor"* slated for eradication.',
          'Strategists at **INSS** and the **Washington Institute** emphasize that Tehran opposes a two-state solution even more fiercely than Israeli hardliners: Iran’s revolutionary state ideology rejects any Muslim recognition of Jewish sovereignty in the Levant and uses armed anti-Zionism to project Shiite imperial influence across predominantly Sunni Arab capitals and expel **U.S. forces** from the Middle East.'
        ]
      },
      {
        heading: 'Empirical Test of Territorial Withdrawal: 2000 & 2005',
        paragraphs: [
          'As decisive evidence that aggression is detached from 1967 border grievances, security analysts point to two full Israeli territorial withdrawals. In **May 2000**, Israel withdrew completely from southern Lebanon to the UN-certified **Blue Line** under **UNSC Resolution 425**, yet Hezbollah amassed **150,000+ Iranian rockets** and opened unprovoked cross-border fire on **October 8, 2023**. Similarly, Israel evacuated every soldier and settler from **Gaza in August 2005**, only for Iran-backed Hamas and PIJ to turn the enclave into a fortified launchpad.',
          'In **April 2024** (~300+ drones, cruise, and ballistic missiles) and **October 2024** (~180 ballistic missiles), Iran discarded proxy deniability altogether and launched the largest direct ballistic missile attacks in military history against Israeli territory—demonstrating the conflict’s transformation into a regional clash led from Tehran.'
        ]
      }
    ],
    details: [
      'Iran’s IRGC Quds Force arms, funds, and coordinates Hezbollah, Hamas, PIJ, Iraqi militias, and Yemen’s Houthis in a unified "Axis of Resistance."',
      'Tehran explicitly rejects any two-state peace along 1967 lines, framing sovereign Israel in any borders as an illegitimate entity to be eliminated.',
      'Full Israeli withdrawals from Lebanon (UN Blue Line, 2000) and Gaza (2005) were followed not by peace, but by massive Iranian-supplied rocket arsenals.',
      'Direct Iranian ballistic and drone strikes on Israel in April and October 2024 moved Tehran from covert proxy patronage to overt state warfare.'
    ],
    sources: [
      {
        title: 'Country Reports on Terrorism: Iran State Sponsorship',
        url: 'https://www.state.gov/country-reports-on-terrorism/',
        publisher: 'U.S. Department of State',
        year: '2023',
        category: 'Court / Official Record'
      },
      {
        title: 'Iran’s "Ring of Fire" & Multi-Front Strategic Assessments',
        url: 'https://www.inss.org.il/',
        publisher: 'Institute for National Security Studies (INSS)',
        year: '2024',
        category: 'Scholarship'
      },
      {
        title: 'Iran Military & Proxy Network Research Program',
        url: 'https://www.washingtoninstitute.org/',
        publisher: 'The Washington Institute for Near East Policy',
        year: '2024',
        category: 'Scholarship'
      }
    ],
    references: [
      'INSS & Washington Institute Assessments on Iran’s "Ring of Fire" Strategy (2023–2025)',
      'Direct Iranian Ballistic & Cruise Missile Attacks on Israel (April & Oct 2024)'
    ],
    tags: ['Security', 'Diplomacy'],
    era: '2000–Present',
    relatedIds: ['thesis-gaza-self-defense']
  },
  {
    id: 'pro-iran-spoiler-timing',
    parentId: 'thesis-iran-axis',
    kind: 'pro',
    title: 'Proxy Escalations Repeatedly Target Diplomatic Peace Breakthroughs',
    summary:
      'Historically, Iranian-backed factions escalated violence specifically when Arab–Israeli diplomacy advanced—from 1990s Oslo bus bombings to October 7 disrupting imminent U.S.–Saudi–Israeli normalization talks.',
    sections: [
      {
        heading: 'Systematic Spoiler Attacks From Oslo to U.S.–Saudi Talks',
        paragraphs: [
          'Diplomatic historians highlight a recurring strategic pattern across thirty years: whenever Israeli–Arab reconciliation gains momentum, Iranian-sponsored militants launch mass-casualty "spoiler" attacks designed to radicalize both publics. Between **1994 and 1996**, **Hamas** and **PIJ** suicide bombings inside Tel Aviv and Jerusalem buses killed scores of Israeli civilians at the height of the **Oslo peace process**, directly undermining Prime Minister **Shimon Peres** in the May 1996 election.',
          'Captured Hamas Politburo minutes recovered from Gaza subterranean compounds in **2024**—including correspondence between **Yahya Sinwar**, **Mohammed Deif**, and IRGC commanders—confirmed that **October 7, 2023** was launched in significant part to torpedo accelerating **U.S.–Saudi–Israeli** normalization negotiations that threatened to isolate Tehran’s axis permanently.'
        ]
      },
      {
        heading: 'IRGC Financial Lifelines, Weapons Engineering & Red Sea Coercion',
        paragraphs: [
          'According to **U.S. State Department** and **Treasury OFAC** intelligence assessments, Iran provides **$700 million+ annually** to Hezbollah and **$100 million to $350 million annually** to Hamas and PIJ. Beyond cash and cryptocurrency transfers, IRGC engineers supplied **Kornet** anti-tank guided missiles, **Fajr-5** and **Badr-3** rocket blueprints, lathe machinery for underground Gaza munitions factories, and **Shahed** loitering-drone technology.',
          'Following October 2023, Yemen’s IRGC-equipped **Houthis** attacked dozens of commercial vessels transiting the **Bab el-Mandeb Strait**—over 1,200 miles from Gaza—slashing **Suez Canal** container volume by more than **60%** and illustrating how Tehran weaponizes the Palestinian arena to hold global maritime trade hostage.'
        ]
      }
    ],
    details: [
      'Hamas/PIJ bus bombings in 1994–1996 derailed Oslo momentum, and captured Sinwar minutes show Oct 7 targeted U.S.–Saudi–Israeli normalization.',
      'U.S. intelligence estimates IRGC funding at ~$700M+/yr to Hezbollah and ~$100M–$350M/yr to Hamas and Palestinian Islamic Jihad.',
      'IRGC Quds Force transferred rocket blueprints, underground manufacturing lathes, anti-tank systems, and UAV technology into Gaza and Lebanon.',
      'Houthi missile and drone attacks on Bab el-Mandeb commercial shipping diverted >60% of Suez container traffic, globalizing regional coercion.'
    ],
    sources: [
      {
        title: 'Country Reports on Terrorism: State Sponsors of Terrorism (Iran)',
        url: 'https://www.state.gov/country-reports-on-terrorism/',
        publisher: 'U.S. Department of State',
        year: '2023',
        category: 'Court / Official Record'
      },
      {
        title: 'OFAC Sanctions on IRGC Quds Force & Hamas/Houthi Finance Networks',
        url: 'https://ofac.treasury.gov/',
        publisher: 'U.S. Department of the Treasury',
        year: '2024',
        category: 'Court / Official Record'
      },
      {
        title: 'Captured Gaza Documents & Axis Coordination Analysis',
        url: 'https://www.inss.org.il/',
        publisher: 'Institute for National Security Studies (INSS)',
        year: '2024',
        category: 'Scholarship'
      }
    ],
    references: [
      'U.S. State Department Country Reports on Terrorism — Iran State Sponsorship'
    ],
    tags: ['Security', 'Diplomacy'],
    era: '1993–Present'
  },
  {
    id: 'con-iran-opportunistic-grievance',
    parentId: 'thesis-iran-axis',
    kind: 'con',
    title: 'Iranian Influence Is Opportunistic—Feeding on Unresolved Statelessness',
    summary:
      'Middle East historians and realists counter that blaming Tehran confuses an external beneficiary with the root cause: Hamas is an indigenous Sunni Palestinian movement, and prolonged occupation is the oxygen allowing Iran to project power into the Levant.',
    sections: [
      {
        heading: 'Indigenous Conflict Predates the 1979 Iranian Revolution',
        paragraphs: [
          'Historians **Rashid Khalidi** and **Mouin Rabbani**, alongside foreign-policy realists, caution against reducing the Israeli–Palestinian struggle to an Iranian proxy plot. For over sixty years prior to **Ayatollah Khomeini’s 1979 Islamic Revolution**—spanning the **1936–1939 Arab Revolt**, the **1948 War**, the **1967 occupation**, and decades of secular nationalist **PLO/Fatah** insurgency—the conflict raged intensely while Imperial Iran under **Shah Mohammad Reza Pahlavi** was a covert strategic partner of Israel.',
          'Even after 1979, Palestinian factions retained autonomous local agency. **Hamas**, founded in **1987** out of Gaza’s Sunni **Muslim Brotherhood** network, openly broke with Tehran and Damascus between **2012 and 2017** during the **Syrian Civil War** rather than endorse **Bashar al-Assad’s** slaughter of Sunni rebels—forfeiting hundreds of millions in Iranian subsidies before later repairing ties.'
        ]
      },
      {
        heading: 'Statelessness as Tehran’s Geopolitical Oxygen',
        paragraphs: [
          'Furthermore, intelligence post-mortems reported by U.S. and Israeli officials after October 7 indicated that while Iran armed and trained Hamas over years, **Yahya Sinwar** concealed the exact date and operational blueprint of the October 7 assault even from Tehran and Hezbollah—demonstrating indigenous decision-making driven by Gaza’s blockade and Palestinian prisoner grievances.',
          'Proponents of the **Arab Peace Initiative** argue that ongoing West Bank settlement expansion and statelessness provide non-Arab, Shiite Iran its sole ideological foothold in the Sunni Arab heartland. Establishing a sovereign Palestinian state anchored by **Saudi Arabia**, **Egypt**, **Jordan**, and the **UAE** would sever Tehran’s primary wedge issue overnight.'
        ]
      }
    ],
    details: [
      'Decades of Zionist–Palestinian war (1948, 1967, PLO insurgency) predated Iran’s 1979 Revolution, when the Shah’s Iran partnered closely with Israel.',
      'Hamas is an indigenous Sunni Muslim Brotherhood movement that broke with Iran in 2012–2017 over Syria, proving transactional rather than puppet ties.',
      'Intelligence assessments indicate Sinwar decided the exact timing of October 7 locally without prior operational sign-off from Tehran.',
      'Arab diplomats argue ending occupation via a Sunni-backed Palestinian state is the surest way to strip Iran of its Levantine ideological pretext.'
    ],
    sources: [
      {
        title: 'Carnegie Middle East Analysis: Beyond Proxy Reductionism',
        url: 'https://carnegieendowment.org/middle-east',
        publisher: 'Carnegie Endowment for International Peace',
        year: '2024',
        category: 'Scholarship'
      },
      {
        title: 'Avalon Project: Middle East Diplomatic & Historical Primary Texts',
        url: 'https://avalon.law.yale.edu/subject_menus/mideast.asp',
        publisher: 'Yale Law School',
        year: '2002',
        category: 'Primary Text / Treaty'
      },
      {
        title: 'CFR Conflict Tracker: Historical Roots & Regional Actors',
        url: 'https://www.cfr.org/global-conflict-tracker/conflict/israeli-palestinian-conflict',
        publisher: 'Council on Foreign Relations',
        year: '2024',
        category: 'Scholarship'
      }
    ],
    references: [
      'Mouin Rabbani & Rashid Khalidi — Critiques of Proxy-Reductionist Framing',
      'Arab Peace Initiative Regional Security Logic (2002–2024)'
    ],
    tags: ['History', 'Diplomacy', 'Security'],
    era: '1979–Present'
  },

  // THESIS 7C: Conditioning U.S. Military Aid & Diplomatic Shielding
  {
    id: 'thesis-us-aid-conditioning',
    parentId: 'pillar-regional-geopolitics',
    kind: 'thesis',
    title: 'The U.S. Should Condition Military Aid & End Automatic UN Vetoes',
    summary:
      'Critics in U.S. foreign policy debates argue Washington’s unconditional $3.8B+ annual military aid and 40+ UN Security Council vetoes create moral hazard, enabling settlement expansion and IHL violations while undermining U.S. mediation credibility.',
    sections: [
      {
        heading: 'Moral Hazard, "Israel’s Lawyer" & U.S. Statutory Law',
        paragraphs: [
          'As cumulative inflation-adjusted U.S. aid to Israel surpasses **$300 billion**—currently **$3.8 billion annually** under the 2016–2028 MOU plus **$14B+ in 2024 emergency wartime appropriations**—foreign-policy critics argue blank-check patronage breeds classic **moral hazard**. Former U.S. negotiator **Aaron David Miller** famously diagnosed Washington’s failure to broker peace as acting like **"Israel’s lawyer"** rather than an honest broker enforcing consequences when settlements expand.',
          'Legally, advocates emphasize that conditioning military transfers requires no new legislation, only faithful execution of binding U.S. law: **Foreign Assistance Act Section 620I** (**22 U.S.C. § 2378-1**) prohibits security aid to any government restricting U.S. humanitarian assistance, while the **Leahy Law** (**22 U.S.C. § 2378d**) bars equipping foreign military units credibly implicated in gross human-rights violations.'
        ]
      },
      {
        heading: 'NSM-20, Senate Resolutions & UN Security Council Vetoes',
        paragraphs: [
          'In **February 2024**, President Joe Biden issued **National Security Memorandum 20 (NSM-20)** requiring written assurances from aid recipients regarding international humanitarian law compliance, and in **May 2024** paused a shipment of **1,800 MK-84 2,000-pound bombs** over civilian density in Rafah. In the U.S. Senate, **Bernie Sanders** and **Chris Van Hollen** introduced Joint Resolutions of Disapproval to halt offensive tank shells and JDAM kits, garnering historic support within the Democratic caucus.',
          'Diplomatically, critics note that **45+ U.S. vetoes** at the **UN Security Council** since 1972 have shielded Israel from Chapter VII enforcement while severely eroding Washington’s global standing across the **Global South**, where diplomats contrast Western enforcement of international law in Ukraine with diplomatic impunity in Gaza and the West Bank.'
        ]
      }
    ],
    details: [
      'Challenges unconditional $3.8B/yr U.S. military aid and 45+ UNSC vetoes as creating moral hazard that insulates settlement expansion.',
      'Cites existing U.S. domestic statutes—FAA Section 620I (humanitarian access) and the Leahy Law (unit-level human-rights vetting)—plus NSM-20.',
      'Highlights Aaron David Miller’s "Israel’s Lawyer" critique and 2024 U.S. Senate Joint Resolutions of Disapproval on offensive 2,000-lb munitions.',
      'Warns perceived "double standards" between Ukraine and Gaza weaken U.S. diplomatic credibility across European and Global South partners.'
    ],
    sources: [
      {
        title: '22 U.S.C. § 2378-1 — Prohibition on Aid to Countries Restricting U.S. Humanitarian Assistance (Sec. 620I)',
        url: 'https://www.law.cornell.edu/uscode/text/22/2378-1',
        publisher: 'Cornell Law School Legal Information Institute',
        year: '1996',
        category: 'Primary Text / Treaty'
      },
      {
        title: '22 U.S.C. § 2378d — Limitation on Assistance to Security Forces (Leahy Law)',
        url: 'https://www.law.cornell.edu/uscode/text/22/2378d',
        publisher: 'Cornell Law School Legal Information Institute',
        year: '1997',
        category: 'Primary Text / Treaty'
      },
      {
        title: 'U.S. Foreign Aid to Israel: Statutory Conditions & Oversight (CRS RL33222)',
        url: 'https://crsreports.congress.gov/product/pdf/RL/RL33222',
        publisher: 'Congressional Research Service',
        year: '2024',
        category: 'Court / Official Record'
      },
      {
        title: 'Open to Debate: U.S. Mediation & Israel Policy Debates',
        url: 'https://opentodebate.org/',
        publisher: 'Open to Debate (Intelligence Squared U.S.)',
        year: '2012–2024',
        category: 'Debate / Broadcast'
      }
    ],
    references: [
      'Aaron David Miller, The Much Too Promised Land ("Israel’s Lawyer" Critique, 2008 / 2012 IQ2)',
      'U.S. Foreign Assistance Act Section 620I & Leahy Law (22 U.S.C. § 2378d)',
      'Sen. Bernie Sanders & Sen. Chris Van Hollen Senate Conditioning Resolutions (2024)'
    ],
    tags: ['Diplomacy', 'International Law', 'Human Rights'],
    era: '2011–Present'
  },
  {
    id: 'pro-us-aid-1991-precedent',
    parentId: 'thesis-us-aid-conditioning',
    kind: 'pro',
    title: 'Historical Precedent Shows Tangibly Conditioned U.S. Aid Produces Restraint',
    summary:
      'Advocates of conditioning point to President George H.W. Bush and Secretary James Baker withholding $10 billion in U.S. loan guarantees in 1991 over West Bank settlements—successfully compelling PM Yitzhak Shamir to attend the Madrid Peace Conference.',
    sections: [
      {
        heading: '1991 Bush–Baker Loan Guarantees & Reagan’s 1982 Arms Pauses',
        paragraphs: [
          'Proponents of conditioning reject claims that U.S. pressure inevitably backfires, pointing to bipartisan Republican and Democratic precedents. In **September 1991**, President **George H.W. Bush** and Secretary of State **James Baker** refused to approve **$10 billion in U.S. housing loan guarantees** unless Prime Minister **Yitzhak Shamir** froze West Bank settlement construction—compelling Shamir to join the **October 1991 Madrid Peace Conference** and helping catalyze **Yitzhak Rabin’s** pro-peace victory in 1992.',
          'Earlier precedents reinforce the pattern: in **1956–1957**, **Dwight Eisenhower** threatened financial sanctions to compel Israeli withdrawal from Sinai; in **1975**, **Gerald Ford** ordered a formal *"reassessment"* of U.S.–Israeli defense ties that unlocked the **Sinai II** disengagement; and in **1981–1982**, **Ronald Reagan** delayed **F-16 fighter** and cluster-artillery shipments while demanding **Menachem Begin** halt the bombardment of West Beirut within hours.'
        ]
      },
      {
        heading: 'Credible Leverage vs. Unenforced Verbal "Red Lines"',
        paragraphs: [
          'Former State Department official **Josh Paul**—who resigned from the Bureau of Political-Military Affairs in October 2023—and diplomatic historians argue that private U.S. scolding paired with uninterrupted munitions pipelines signals to Israeli coalition hardliners like **Bezalel Smotrich** and **Itamar Ben-Gvir** that defying Washington carries zero material cost.',
          'By contrast, transparent, rule-based conditioning—such as deducting settlement outlays dollar-for-dollar from non-defensive credits or withholding offensive heavy bombs while maintaining **Iron Dome** defensive interceptors—clarifies trade-offs for Israeli voters without compromising civilian air defense.'
        ]
      }
    ],
    details: [
      'Bush and Baker’s 1991 withholding of $10B in loan guarantees over settlements brought Shamir to Madrid and preceded Rabin’s 1992 election.',
      'Eisenhower (1957 Sinai), Ford (1975 reassessment), and Reagan (1981–1982 F-16/cluster pauses) all used tangible leverage to achieve diplomatic restraint.',
      'Argues unenforced verbal U.S. "red lines" empower Israeli coalition extremists by removing material costs for settlement expansion.',
      'Distinguishes restricting offensive 2,000-lb munitions and settlement subsidies from preserving purely defensive Iron Dome/Arrow interceptors.'
    ],
    sources: [
      {
        title: 'Milestones in the History of U.S. Foreign Relations: The Madrid Conference, 1991',
        url: 'https://history.state.gov/milestones/1989-1992/madrid-conference',
        publisher: 'U.S. Department of State Office of the Historian',
        year: '1991',
        category: 'Court / Official Record'
      },
      {
        title: 'Historical U.S. Arms Pauses & Loan Guarantee Conditioning (CRS RL33222)',
        url: 'https://crsreports.congress.gov/product/pdf/RL/RL33222',
        publisher: 'Congressional Research Service',
        year: '2024',
        category: 'Scholarship'
      },
      {
        title: 'Carnegie Analysis: U.S. Leverage, Arms Transfers & Middle East Diplomacy',
        url: 'https://carnegieendowment.org/middle-east',
        publisher: 'Carnegie Endowment for International Peace',
        year: '2024',
        category: 'Scholarship'
      }
    ],
    references: [
      'Bush–Baker 1991 Loan Guarantee Conditioning & Madrid Conference Diplomacy',
      'Josh Paul (Former State Dept. PM Bureau Director) Resignation & Policy Critiques (2023–2024)'
    ],
    tags: ['Diplomacy', 'History'],
    era: '1982–Present'
  },
  {
    id: 'con-us-aid-qme-deterrence',
    parentId: 'thesis-us-aid-conditioning',
    kind: 'con',
    title: 'Withholding Arms Mid-War Erodes Deterrence & Risks Wider Regional War',
    summary:
      'Bipartisan U.S. defense officials counter that restricting munitions while Israel faces multi-front threats from Iran, Hezbollah, and Hamas signals alliance fracture, invites adversary escalation, and undermines Israel’s legally mandated Qualitative Military Edge (QME).',
    sections: [
      {
        heading: 'Statutory Qualitative Military Edge (QME) & Adversary Calculus',
        paragraphs: [
          'Under the **Naval Vessel Transfer Act of 2008** (**22 U.S.C. § 2776(h)**), Congress legally mandated that U.S. administrations uphold Israel’s **Qualitative Military Edge (QME)** to offset vast quantitative asymmetries across a hostile region. Bipartisan defense officials warn that publicly rationing ammunition while Israel confronts **Iran**, **Hezbollah**, **Hamas**, and the **Houthis** projects alliance fracture and invites **Tehran** to escalate.',
          'Furthermore, intelligence negotiators noted during **2024 Gaza ceasefire talks** that whenever public daylight widened between Washington and Jerusalem—or threats of arms embargoes gained traction—**Yahya Sinwar** hardened Hamas’s hostage terms, calculating that international pressure would force Israel to halt operations unilaterally without Hamas surrendering captives or power.'
        ]
      },
      {
        heading: 'Two-Way Defense Returns & the Security-For-Peace Paradox',
        paragraphs: [
          'Unlike U.S. deployments requiring tens of thousands of American troops in Europe or East Asia, Israel defends itself solely with its own soldiers while spending the vast majority of **$3.8B annual FMF** inside U.S. defense factories. In return, the Pentagon acquires battle-tested co-developed technologies—**Iron Dome**, **David’s Sling**, **Arrow-3**, **Trophy** active armor on U.S. Abrams tanks, **F-35I** combat telemetry against Russian-made S-300 radars, and counter-tunnel warfare doctrine.',
          'Diplomats **Dennis Ross** and **Michael Oren** also underscore a core historical pattern: Israel took major territorial risks for peace—withdrawing from **Sinai (1979)**, signing **Oslo (1993)**, offering statehood at **Camp David (2000)**, and exiting **Gaza (2005)**—only when Israelis felt militarily secure and backed by Washington, whereas public coercion triggers domestic siege-mentality defiance and accelerates self-reliant domestic munitions production (potentially reducing precision guidance).'
        ]
      }
    ],
    details: [
      'U.S. statute (22 U.S.C. § 2776(h)) mandates preserving Israel’s Qualitative Military Edge (QME) against multi-front regional adversaries.',
      'Defense officials warn mid-war munition freezes embolden Iran and Hezbollah while incentivizing Hamas to stall hostage negotiations.',
      'Joint R&D returns battle-tested capabilities to the U.S. military: Arrow-3, Trophy tank protection, F-35I combat data, and counter-tunnel tech.',
      'Historically, Israeli territorial concessions (1979, 1993, 2000, 2005) occurred only when backed by ironclad U.S. security guarantees.'
    ],
    sources: [
      {
        title: '22 U.S.C. § 2776(h) — Statutory Definition & Mandate of Qualitative Military Edge (QME)',
        url: 'https://www.law.cornell.edu/uscode/text/22/2776',
        publisher: 'Cornell Law School Legal Information Institute',
        year: '2008',
        category: 'Primary Text / Treaty'
      },
      {
        title: 'U.S. Foreign Aid to Israel: 2016–2028 MOU & Cooperative Missile Defense (CRS RL33222)',
        url: 'https://crsreports.congress.gov/product/pdf/RL/RL33222',
        publisher: 'Congressional Research Service',
        year: '2024',
        category: 'Court / Official Record'
      },
      {
        title: 'Strategic Arguments on U.S.–Israel Deterrence & Defense Cooperation',
        url: 'https://www.washingtoninstitute.org/',
        publisher: 'The Washington Institute for Near East Policy',
        year: '2024',
        category: 'Scholarship'
      }
    ],
    references: [
      'U.S.–Israel 10-Year Memorandum of Understanding ($3.8B/yr, 2016–2028) & QME Statute',
      'Michael Oren & Dennis Ross — Strategic Arguments Against Public Aid Conditioning'
    ],
    tags: ['Security', 'Diplomacy'],
    era: '2012–Present'
  }
];
