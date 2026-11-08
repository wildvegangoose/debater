import { DebateNode } from '../../types/debate';

export const jerusalemHolySitesNodes: DebateNode[] = [
  {
    id: 'pillar-jerusalem',
    parentId: 'root-ip',
    kind: 'pillar',
    title: 'Status of Jerusalem & Sacred Sites',
    summary:
      'Examines competing claims to Jerusalem—undivided Israeli sovereignty versus shared dual capitals (West Jerusalem & Arab East Jerusalem)—and custodianship over the Temple Mount / Haram al-Sharif.',
    sections: [
      {
        heading: 'Sacred Geography, Partition History & Competing Legal Regimes',
        paragraphs: [
          'No square kilometer on earth concentrates deeper overlapping religious and national attachments than Jerusalem’s **Old City** and **Holy Basin**. Revered in Judaism for three millennia as King David’s capital and the site of the First and Second Temples (**Har HaBayit / Temple Mount** and the **Western Wall**), honored in Islam as the third holiest sanctuary (**Al-Haram al-Sharif**, housing the **Al-Aqsa Mosque** and **Dome of the Rock**), and central to Christianity via the **Church of the Holy Sepulchre**, Jerusalem is home today to roughly **980,000 residents (~61% Jewish and ~39% Palestinian)**.',
          'Legally, **UNGA Resolution 181 (1947)** envisioned Jerusalem as an internationalized *corpus separatum*, a plan overtaken by the 1948 war, which left Israel governing **West Jerusalem** and Jordan annexing **East Jerusalem** and the Old City until **June 1967**. Following the Six-Day War, Israel expanded Jerusalem’s municipal boundaries and enacted the **1980 Basic Law: Jerusalem, Capital of Israel**, a move rejected by **UN Security Council Resolution 478** (adopted under Chapter VI rather than coercive Chapter VII enforcement) while Jordan’s special custodial role over Muslim holy shrines was later recognized in **Article 9 of the 1994 Israel–Jordan Peace Treaty**.'
        ]
      },
      {
        heading: 'Dual-Capital Diplomacy vs. Undivided Municipal Sovereignty',
        paragraphs: [
          'In final-status negotiations at **Camp David (2000)**, **Taba (2001)**, and **Annapolis/Olmert (2008)**, mediators tested whether modern Jerusalem could serve simultaneously as the recognized capital of two sovereign states—**Yerushalayim** in West Jerusalem and Jewish neighborhoods for Israel, and **Al-Quds** in Arab East Jerusalem for Palestine—paired with a multilateral custodial regime over the **0.9-square-kilometer Old City**. Supporters of undivided Israeli rule counter that only post-1967 Israeli sovereignty has guaranteed multi-faith worship, whereas urban division risks reviving pre-1967 walls and insecurity.',
          'Parallel to municipal governance sits the diplomatic debate over unilateral recognition prior to a negotiated peace treaty—exemplified by **Palestine’s 2012 UN observer-state upgrade (UNGA Res. 67/19)**, the **2017 U.S. recognition of Jerusalem as Israel’s capital**, and **2024 European statehood recognitions** backed by non-binding **UNGA Resolution ES-10/23**. Diplomats and international lawyers remain sharply divided over whether external recognition preserves sovereign parity against steady settlement expansion on the ground or hardens maximalist domestic politics away from bilateral compromise.'
        ]
      }
    ],
    details: [
      'Jerusalem sits at the spiritual and national core of both identities: Judaism’s holiest city and ancient capital for 3,000 years, Islam’s third holiest sanctuary (Al-Aqsa / Haram al-Sharif), central to Christian heritage, and home to ~980,000 residents (~61% Jewish, ~39% Palestinian).',
      'Divided between Israeli West Jerusalem and Jordanian East Jerusalem from 1949 to 1967, then brought under Israeli municipal law in 1967 and the contested 1980 Basic Law.',
      'Article 9 of the 1994 Israel–Jordan Peace Treaty formally recognizes the "special role of the Hashemite Kingdom of Jordan in Muslim Holy shrines in Jerusalem."',
      'Tests whether urban sovereignty can be shared along demographic neighborhoods with special custodial arrangements for the 0.9-sq-km Old City.'
    ],
    sources: [
      {
        title: 'UN Security Council Resolution 478 on Basic Law: Jerusalem',
        url: 'https://undocs.org/S/RES/478(1980)',
        publisher: 'United Nations Security Council',
        year: '1980',
        category: 'Primary Text / Treaty'
      },
      {
        title: 'Treaty of Peace Between the State of Israel and the Hashemite Kingdom of Jordan (Article 9)',
        url: 'https://avalon.law.yale.edu/20th_century/jordan_treaty.asp',
        publisher: 'Yale Law School Avalon Project',
        year: '1994',
        category: 'Primary Text / Treaty'
      },
      {
        title: 'Basic Law: Jerusalem, Capital of Israel (1980, Amended 2000 & 2018)',
        url: 'https://main.knesset.gov.il/EN/activity/Pages/BasicLaws.aspx',
        publisher: 'The Knesset Official Portal',
        year: '1980',
        category: 'Primary Text / Treaty'
      }
    ],
    references: [
      'UNSC Resolution 478 (1980)',
      'Israel–Jordan Peace Treaty Art. 9 — Hashemite Custodianship (1994)',
      'Clinton Parameters on Jerusalem ("Jewish is Israeli, Arab is Palestinian", 2000)'
    ],
    tags: ['Religion & Culture', 'Diplomacy', 'International Law'],
    era: '1947–Present'
  },

  // THESIS 5A: Shared Capital & Divided Sovereignty
  {
    id: 'thesis-jerusalem-shared',
    parentId: 'pillar-jerusalem',
    kind: 'thesis',
    title: 'Shared Jerusalem: Two Capitals With a Special Old City Regime',
    summary:
      'A durable peace requires West Jerusalem (and Jewish neighborhoods) as Israel’s recognized capital and Arab East Jerusalem (Al-Quds) as Palestine’s capital, paired with neutral/joint custodial governance over the Holy Basin.',
    sections: [
      {
        heading: 'Demographic Geography & Viability of a Palestinian State',
        paragraphs: [
          'Proponents of a shared Jerusalem emphasize that **over 370,000 Palestinians**—comprising roughly **39% of the city’s population**—live in East Jerusalem neighborhoods that remain socially, linguistically, and commercially distinct from West Jerusalem. Because metropolitan East Jerusalem sits squarely at the geographic waist of the West Bank, severing **Al-Quds** from a Palestinian state splits northern **Ramallah** from southern **Bethlehem**, whereas **President Clinton’s December 2000 Parameters** ("what is Arab is Palestinian; what is Jewish is Israeli") secure global recognition for **West Jerusalem** alongside **East Jerusalem**.'
        ]
      },
      {
        heading: 'International Trusteeship Models for the Holy Basin',
        paragraphs: [
          'To overcome zero-sum sovereignty battles over the walled **Old City** and adjacent sacred sites (the **Holy Basin**, encompassing the Mount of Olives and Silwan), former Israeli Prime Minister **Ehud Olmert** proposed in **September 2008** placing the Holy Basin under an **international five-nation trusteeship** composed of **Israel, Palestine, Jordan, Saudi Arabia, and the United States**. Refined by Track-II blueprints such as the **Geneva Initiative** and the **Jerusalem Old City Initiative**, this model suspends exclusive flags over sacred shrines while preserving **Islamic Waqf**, Christian, and rabbinical administration.'
        ]
      }
    ],
    details: [
      'Roughly 370,000+ Palestinians live in East Jerusalem (~39% of the city’s population), mostly holding revocable "permanent residency" rather than citizenship.',
      'Without East Jerusalem’s transport, healthcare, commercial, and religious hub, a West Bank Palestinian state is severed between Ramallah in the north and Bethlehem in the south.',
      'Under UNSC Resolutions 478 (1980) and 2334 (2016)—contested by Israel as politically one-sided—international consensus withholds recognition of unilateral East Jerusalem annexation pending a negotiated peace.',
      'Ehud Olmert’s 2008 five-nation Holy Basin trusteeship and the Clinton Parameters provide concrete models for dual capitals without physical Old City walls.'
    ],
    sources: [
      {
        title: 'Geneva Initiative Model Permanent Status Accord (Article 6: Jerusalem)',
        url: 'https://geneva-accord.org/',
        publisher: 'Geneva Initiative',
        year: '2003',
        category: 'Primary Text / Treaty'
      },
      {
        title: 'UN Security Council Resolution 2334 on Settlements and East Jerusalem',
        url: 'https://undocs.org/S/RES/2334(2016)',
        publisher: 'United Nations Security Council',
        year: '2016',
        category: 'Primary Text / Treaty'
      },
      {
        title: 'Maps & Policy Studies on Equitable Shared Futures in Jerusalem',
        url: 'https://www.iramim.org.il/en',
        publisher: 'Ir Amim',
        year: '2024',
        category: 'Watchdog / NGO'
      }
    ],
    references: [
      'Clinton Parameters on Jerusalem (Dec 2000)',
      'Olmert 2008 Five-Nation Trusteeship Proposal for the Holy Basin',
      'Geneva Initiative Art. 6 — Jerusalem (2003)'
    ],
    tags: ['Diplomacy', 'International Law', 'Religion & Culture'],
    era: '1967–Present'
  },
  {
    id: 'pro-jerusalem-inequality-residency',
    parentId: 'thesis-jerusalem-shared',
    kind: 'pro',
    title: 'Civic Inequality & Fragile Status of East Jerusalem Palestinians',
    summary:
      'Despite declaring Jerusalem "united," municipal realities reflect stark disparities in zoning permits, infrastructure funding, home demolitions, and revocable residency status—proving unilateral annexation has produced division rather than true integration.',
    sections: [
      {
        heading: 'Permanent Residency Revocations & Municipal Service Gaps',
        paragraphs: [
          'When Israel annexed **70 square kilometers** of East Jerusalem and surrounding West Bank land in June 1967, Palestinian inhabitants received revocable **"permanent residency"** under the **1952 Entry into Israel Law** rather than citizenship—allowing the Interior Ministry to revoke **over 14,500 residencies** under "center of life" rules. Monitoring by **Ir Amim** further documents how **120,000+ Jerusalem ID holders** in **Kafr Aqab** and **Shuafat Refugee Camp** live walled off behind the **Separation Barrier**, paying municipal taxes while receiving minimal policing, sanitation, or infrastructure.'
        ]
      },
      {
        heading: 'Zoning Restrictions & Statutory Property Asymmetry in Sheikh Jarrah',
        paragraphs: [
          'Municipal master plans expropriate roughly **35% of East Jerusalem land** for Jewish neighborhoods while zoning only **~13–15%** for Palestinian residential construction despite Palestinians comprising **~39% of the city**, driving severe housing shortages and unpermitted-home demolitions. Legal asymmetry peaks in **Sheikh Jarrah** and **Silwan**: Israel’s **1970 Legal and Administrative Matters Law** lets Jewish trusts reclaim pre-1948 East Jerusalem properties (evicting 1948 refugee families), whereas the **1950 Absentee Property Law** bars those exact same Palestinian families from reclaiming their pre-1948 homes in **West Jerusalem**.'
        ]
      }
    ],
    details: [
      'Over 14,500 East Jerusalem Palestinians have had their Jerusalem residency revoked since 1967 under Interior Ministry "center of life" regulations.',
      'Municipal master plans zone only ~13–15% of East Jerusalem land for Palestinian residential construction, driving acute housing shortages and unpermitted-home demolitions.',
      'Over 120,000 Jerusalem ID holders in Kafr Aqab and Shuafat Camp live beyond the Separation Barrier with minimal municipal policing, sanitation, or infrastructure.',
      'Statutory asymmetry between the 1970 Legal and Administrative Matters Law and the 1950 Absentee Property Law fuels recurring eviction crises in Sheikh Jarrah and Silwan.'
    ],
    sources: [
      {
        title: 'East Jerusalem Monitoring Reports: Residency, Planning & Municipal Budget Allocation',
        url: 'https://www.iramim.org.il/en',
        publisher: 'Ir Amim',
        year: '2024',
        category: 'Watchdog / NGO'
      },
      {
        title: 'Legal Analysis of East Jerusalem Property Restitution & Residency Laws',
        url: 'https://www.adalah.org/en',
        publisher: 'Adalah Legal Center',
        year: '2022',
        category: 'Watchdog / NGO'
      }
    ],
    references: [
      'Ir Amim Municipal Budget & Zoning Reports on East Jerusalem',
      'Legal Administrative Matters Law (1970) vs. Absentee Property Law (1950)'
    ],
    tags: ['Human Rights', 'Governance', 'International Law'],
    era: '1967–Present'
  },
  {
    id: 'pro-jerusalem-international-law',
    parentId: 'thesis-jerusalem-shared',
    kind: 'pro',
    title: 'UNSC Res. 478 Non-Recognition & Neighborhood-Based Feasibility',
    summary:
      'UN Security Council Resolution 478 declared Israel’s unilateral annexation of East Jerusalem "null and void," and urban cartographers show Jerusalem’s neighborhoods are largely distinct—allowing two capitals without physical concrete walls in the Old City.',
    sections: [
      {
        heading: 'Non-Recognition of Unilateral Annexation Under International Law',
        paragraphs: [
          'Following the Knesset’s passage of the **1980 Basic Law: Jerusalem**, the **UN Security Council** adopted **Resolution 478** (14–0–1), censuring unilateral annexation, affirming that the **Fourth Geneva Convention** applies to East Jerusalem, and calling on states to withdraw diplomatic missions. Although adopted under non-coercive Chapter VI rather than Chapter VII enforcement—and reiterated in the non-binding **2004 and July 2024 ICJ Advisory Opinions** (contested by Israel)—proponents argue under **UN Charter Article 2(4)** that only a mutually ratified bilateral treaty can confer recognized sovereign title over Jerusalem.'
        ]
      },
      {
        heading: 'Urban Cartography & Open-City Border Engineering',
        paragraphs: [
          'Urban geographer **Shaul Arieli** and researchers at the **Geneva Initiative** challenge the claim that dual capitals require re-erecting pre-1967 barbed wire. Because Jerusalem’s residential geography remains sharply distinct along national lines, applying **President Clinton’s neighborhood formula** keeps **over 95% of Jewish residents under Israeli sovereignty** and **over 95% of Arab residents under Palestinian sovereignty**. Detailed Track-II blueprints from the **Jerusalem Old City Initiative** model outer customs perimeters, electronic transit portals, and joint security liaison units to preserve a physically open Holy Basin.'
        ]
      }
    ],
    details: [
      'UN Security Council Resolution 478 (1980, passed 14–0–1) declared Israel’s Basic Law annexing East Jerusalem "null and void" and called on states to keep embassies outside the city.',
      'Under the Clinton Parameters formula ("Arab neighborhoods become Palestinian, Jewish neighborhoods become Israeli"), over 95% of residents remain under their own national government.',
      'Israel itself gained recognized international legitimacy for West Jerusalem in major peace blueprints precisely through pairing it with Palestinian sovereignty in Arab East Jerusalem.',
      'Track-II urban security studies model an open Holy Basin using coordinated policing and outer customs perimeters rather than concrete walls inside the Old City.'
    ],
    sources: [
      {
        title: 'UN Security Council Resolution 478 (Aug 20, 1980)',
        url: 'https://undocs.org/S/RES/478(1980)',
        publisher: 'United Nations Security Council',
        year: '1980',
        category: 'Primary Text / Treaty'
      },
      {
        title: 'ICJ Case 186: Legal Consequences Arising from Policies and Practices in the OPT (Including East Jerusalem)',
        url: 'https://www.icj-cij.org/case/186',
        publisher: 'International Court of Justice (Non-Binding Advisory Opinion)',
        year: '2024',
        category: 'Court / Official Record'
      },
      {
        title: 'Geneva Initiative Detailed Jerusalem Maps & Annexes',
        url: 'https://geneva-accord.org/',
        publisher: 'Geneva Initiative',
        year: '2003',
        category: 'Primary Text / Treaty'
      }
    ],
    references: [
      'UN Security Council Resolution 478 (Aug 20, 1980)',
      'Jerusalem Old City Initiative Security & Governance Studies'
    ],
    tags: ['International Law', 'Diplomacy'],
    era: '1980–Present'
  },
  {
    id: 'con-jerusalem-undivided-access',
    parentId: 'thesis-jerusalem-shared',
    kind: 'con',
    title: 'Only Israeli Sovereignty Has Guaranteed Multi-Faith Access & Urban Unity',
    summary:
      'Supporters of undivided Israeli sovereignty point out that when Jordan controlled East Jerusalem (1948–1967), every Jew was expelled from the Old City, 50+ synagogues were destroyed or desecrated, and Israelis were barred from the Western Wall—whereas since 1967 all faiths worship freely.',
    sections: [
      {
        heading: 'The 1948–1967 Division Record vs. Protection of Holy Places Law',
        paragraphs: [
          'Defenders of undivided Israeli sovereignty contrast paper international guarantees with historical reality. Under Jordanian occupation (**1948–1967**), every Jew was expelled from the Old City, **more than 50 synagogues** (including the **Hurva Synagogue**) were demolished or desecrated, Mount of Olives graves were uprooted, and Jews were barred from the **Western Wall** despite **Article VIII of the 1949 Armistice Agreement**. Days after reunifying the city in **June 1967**, Israel passed the **Protection of Holy Places Law** while **Moshe Dayan** preserved **Islamic Waqf** administration on the Temple Mount.'
        ]
      },
      {
        heading: 'Urban Inseparability & Temple Denial Concerns',
        paragraphs: [
          'Practically, former Jerusalem mayors such as **Teddy Kollek** and **Nir Barkat** argue that post-1967 Jerusalem is an interwoven metropolis where Jewish neighborhoods (**French Hill**, **Gilo**, **Pisgat Ze’ev**) and Arab neighborhoods (**Beit Safafa**, **Shuafat**) share light-rail transit, **Hadassah** hospitals, and utilities—meaning partition would erect fortified checkpoints in a living city. Furthermore, U.S. mediator **Dennis Ross** (*The Missing Peace*, 2004) documented **Yasser Arafat’s** denial at **Camp David (2000)** that a Jewish Temple ever stood in Jerusalem, deepening fears that ceding sovereignty endangers Jewish heritage.'
        ]
      }
    ],
    details: [
      'Under Jordanian rule (1948–1967), Jews were expelled from the Old City, 50+ synagogues were destroyed or desecrated, and Israelis were barred from the Western Wall despite 1949 Armistice Art. VIII.',
      'In June 1967, Israel enacted the Protection of Holy Places Law and Moshe Dayan preserved Islamic Waqf day-to-day administration on the Temple Mount while opening access to all faiths.',
      'East Jerusalem permanent residents hold the legal option to apply for full Israeli citizenship, and thousands have increasingly applied in recent years alongside integrating into Jerusalem’s job market and light rail.',
      'Yasser Arafat’s denial at Camp David (2000) that the Jewish Temples ever existed in Jerusalem hardened Israeli opposition to relinquishing Old City sovereignty.'
    ],
    sources: [
      {
        title: 'Israel–Jordan General Armistice Agreement (Article VIII: Unfulfilled Holy Sites Access)',
        url: 'https://avalon.law.yale.edu/20th_century/arm03.asp',
        publisher: 'Yale Law School Avalon Project',
        year: '1949',
        category: 'Primary Text / Treaty'
      },
      {
        title: 'Protection of Holy Places Law (1967) & Basic Law: Jerusalem',
        url: 'https://main.knesset.gov.il/EN/activity/Pages/BasicLaws.aspx',
        publisher: 'The Knesset Official Portal',
        year: '1967',
        category: 'Primary Text / Treaty'
      },
      {
        title: 'Historical & Diplomatic Studies on Jerusalem’s Holy Sites and Sovereignty',
        url: 'https://www.washingtoninstitute.org/',
        publisher: 'The Washington Institute for Near East Policy',
        year: '2020',
        category: 'Scholarship'
      }
    ],
    references: [
      'Protection of Holy Places Law (Israel, June 1967)',
      '1949 Armistice Agreement Art. VIII (Unfulfilled Access Clauses under Jordanian Rule)',
      'Dennis Ross, The Missing Peace — Camp David Jerusalem Negotiations (2004)'
    ],
    tags: ['Religion & Culture', 'Security', 'History'],
    era: '1948–Present'
  },
  {
    id: 'con-rebuttal-status-quo-erosion',
    parentId: 'con-jerusalem-undivided-access',
    kind: 'con',
    title: 'Erosion of the Temple Mount / Al-Aqsa Status Quo Fuels Regional Escalation',
    summary:
      'Jordan, Palestinian leaders, and Israeli security chiefs warn that growing activist and ministerial visits/prayers on the Temple Mount/Haram al-Sharif—alongside age restrictions on Muslim worshippers—are eroding the 1967 Status Quo and turning a national conflict into a religious war.',
    sections: [
      {
        heading: 'Breakdown of the 1967 Dayan–Waqf Understanding',
        paragraphs: [
          'Under the **1967 Status Quo** established by **Moshe Dayan** (and Chief Rabbinate rulings), Muslims worshiped inside **Al-Haram al-Sharif / Al-Aqsa** while non-Muslims visited without conducting organized prayer. Over the past decade, however, activist groups and senior ministers—notably National Security Minister **Itamar Ben-Gvir**—have conducted police-escorted ascents and open Jewish prayer. Both **Jordan** (citing **Article 9 of the 1994 Peace Treaty**) and former **Shin Bet** chiefs warn these shifts stoke Muslim fears of partitioning Al-Aqsa on the model of Hebron’s **Ibrahimi Mosque**.'
        ]
      },
      {
        heading: 'Religious Flashpoints as Catalysts for Wider War',
        paragraphs: [
          'Modern history shows how Old City tensions ignite wider conflagrations: the **1996 Western Wall Tunnel clashes**, **September 2000** riots starting the Second Intifada, **May 2021** escalations at Al-Aqsa and Sheikh Jarrah triggering an 11-day Gaza war, and Hamas’s naming of October 7 **"Al-Aqsa Flood"** to mobilize regional sentiment. Veteran Israeli security officials and Track-II diplomats therefore argue unilateral control breeds chronic volatility, whereas **Ehud Olmert’s 2008 five-state Holy Basin trusteeship** (**Israel, Palestine, Jordan, Saudi Arabia, U.S.**) insulates sacred shrines from coalition provocations.'
        ]
      }
    ],
    details: [
      'High-profile ministerial ascents and activist prayers on the Temple Mount/Haram al-Sharif have strained the 1967 Dayan–Waqf Status Quo and bilateral ties with Jordan.',
      'Successive Shin Bet chiefs have warned Israeli cabinets that perceived changes at Al-Aqsa are the fastest catalyst transforming a territorial dispute into a regional religious war.',
      'Clashes around Al-Aqsa and East Jerusalem repeatedly preceded wider escalations, including September 2000 and the May 2021 Gaza conflict.',
      'Multilateral Holy Basin trusteeship proposals (such as Olmert’s 2008 five-state model) aim to lock in all three faiths’ access free from unilateral political manipulation.'
    ],
    sources: [
      {
        title: 'Israel–Jordan Peace Treaty (Article 9: Hashemite Custodianship of Muslim Holy Shrines)',
        url: 'https://avalon.law.yale.edu/20th_century/jordan_treaty.asp',
        publisher: 'Yale Law School Avalon Project',
        year: '1994',
        category: 'Primary Text / Treaty'
      },
      {
        title: 'Monitoring Reports on the Old City & Temple Mount / Haram al-Sharif Status Quo',
        url: 'https://www.iramim.org.il/en',
        publisher: 'Ir Amim',
        year: '2024',
        category: 'Watchdog / NGO'
      },
      {
        title: 'Security Assessments on Jerusalem Flashpoints & Regional Stability',
        url: 'https://en.cis.org.il/',
        publisher: 'Commanders for Israel’s Security (CIS)',
        year: '2023',
        category: 'Scholarship'
      }
    ],
    references: [
      'Olmert Holy Basin Five-State Trusteeship Proposal (2008)',
      'Jerusalem Old City Initiative (University of Windsor Track-II Blueprint)'
    ],
    tags: ['Security', 'Religion & Culture', 'Diplomacy'],
    era: '2000–Present'
  },

  // THESIS 5B: Diplomatic Recognition & UN Statehood Before a Final Treaty
  {
    id: 'thesis-diplomatic-recognition',
    parentId: 'pillar-jerusalem',
    kind: 'thesis',
    title: 'UN Statehood & Early Recognition Preserve Parity vs. Bypass Negotiations',
    summary:
      'Debated since Palestine’s 2011–2012 UN bid (IQ2 Debate: Mustafa Barghouti & Daniel Levy vs. Dore Gold & Aaron David Miller), the 2017 US Jerusalem Embassy move, and 2024 European recognitions: does unilateral recognition help or hurt peace?',
    sections: [
      {
        heading: 'From the 2011–2012 UN Statehood Bid to 2024 European Recognitions',
        paragraphs: [
          'After two decades of stalled **Oslo** talks, PA President **Mahmoud Abbas** sought UN membership in **2011**, prompting an **Intelligence Squared U.S.** clash between **Mustafa Barghouti** & **Daniel Levy** and **Dore Gold** & **Aaron David Miller**. In **November 2012**, **UNGA Resolution 67/19** (138–9–41, a non-binding General Assembly vote) upgraded Palestine to **"non-member observer state,"** enabling **ICC** accession in 2015, followed in **May 2024** by **Spain**, **Ireland**, **Norway**, and **Slovenia** joining **145+ states** in recognizing Palestine alongside non-binding **UNGA Resolution ES-10/23** (143–9).'
        ]
      },
      {
        heading: 'Symmetric Unilateralism: The 2017 U.S. Jerusalem Proclamation',
        paragraphs: [
          'Unilateral recognition has operated symmetrically from the opposite side as well. In **December 2017**, U.S. President **Donald Trump** reversed decades of diplomatic restraint by formally recognizing **Jerusalem as Israel’s capital** and moving the **U.S. Embassy** from Tel Aviv in May 2018—arguing Washington was merely acknowledging Israel’s governmental reality in **West Jerusalem** under the **1995 Jerusalem Embassy Act** while leaving final borders open. Together, statehood recognitions and capital proclamations test whether altering baseline diplomatic status breaks deadlock or destroys incentives for bilateral compromise.'
        ]
      }
    ],
    details: [
      'UNGA Resolution 67/19 (Nov 2012, passed 138–9) upgraded Palestine to a "non-member observer state," unlocking Palestinian accession to international treaties and the ICC in 2015.',
      'Debated directly at Intelligence Squared U.S. (Oct 2011) between Mustafa Barghouti & Daniel Levy (For) and Dore Gold & Aaron David Miller (Against).',
      'By 2024–2025, over 145 UN member states—including Spain, Ireland, Norway, and Slovenia—recognized the State of Palestine, backed by non-binding UNGA Res. ES-10/23.',
      'Conversely, the December 2017 U.S. recognition of Jerusalem as Israel’s capital tested unilateral recognition from the Israeli side.'
    ],
    sources: [
      {
        title: 'UNGA Resolution 67/19: Status of Palestine in the United Nations',
        url: 'https://undocs.org/A/RES/67/19',
        publisher: 'United Nations General Assembly (Observer-State Resolution)',
        year: '2012',
        category: 'Primary Text / Treaty'
      },
      {
        title: 'UNGA Resolution ES-10/23: Admission of New Members to the United Nations',
        url: 'https://undocs.org/A/RES/ES-10/23',
        publisher: 'United Nations General Assembly (Non-Binding Vote)',
        year: '2024',
        category: 'Primary Text / Treaty'
      },
      {
        title: 'Debate Archive: "The U.N. Should Admit Palestine as a Full Member State"',
        url: 'https://opentodebate.org/',
        publisher: 'Open to Debate (Intelligence Squared U.S.)',
        year: '2011',
        category: 'Debate / Broadcast'
      }
    ],
    references: [
      'Intelligence Squared U.S.: "The U.N. Should Admit Palestine as a Full Member State" (Oct 2011)',
      'UNGA Res. 67/19 (2012) & ES-10/23 (May 2024) — Non-Binding General Assembly Votes',
      'US Presidential Proclamation Recognizing Jerusalem as Israel’s Capital (Dec 6, 2017)'
    ],
    tags: ['Diplomacy', 'International Law'],
    era: '2011–Present'
  },
  {
    id: 'pro-recognition-counters-veto',
    parentId: 'thesis-diplomatic-recognition',
    kind: 'pro',
    title: 'Removes an Indefinite Veto Over Self-Determination & Unlocks Legal Accountability',
    summary:
      'Mustafa Barghouti, Daniel Levy, and European governments argue conditioning statehood on Israeli cabinet approval grants an indefinite veto to governments expanding settlements, while UN observer-state status gave Palestinians lawful recourse to the ICJ and ICC.',
    sections: [
      {
        heading: 'Ending the Occupier’s Veto Over Self-Determination',
        paragraphs: [
          'Arguing for the motion at **Intelligence Squared U.S. (2011)**, **Mustafa Barghouti** and former Israeli negotiator **Daniel Levy** contended that conditioning Palestinian statehood on Israeli cabinet consent creates a perverse incentive: coalitions opposed to independence can stall talks indefinitely while expanding settlements, then denounce UN appeals as "unilateral." European governments in **Madrid**, **Dublin**, and **Oslo** echoed this logic in **May 2024**, noting Israel’s own **1949 UN admission (Res. 273)** was never conditioned on prior peace treaties with neighboring states.'
        ]
      },
      {
        heading: 'Non-Violent Legal Recourse & Capital Parity',
        paragraphs: [
          'Proponents emphasize that multilateral diplomacy channels grievance away from violence into rule-of-law forums: **UNGA Resolution 67/19** allowed Palestine to ratify core treaties and access the **International Criminal Court** and **ICJ**, narrowing the power gap between a sovereign state and an occupied population. From a parallel realist angle, supporters of the **2017 U.S. Jerusalem Embassy move** argued recognizing **West Jerusalem**—seat of Israel’s **Knesset** and **Supreme Court** since 1949—ended an artificial diplomatic anomaly without foreclosing negotiated East Jerusalem boundaries.'
        ]
      }
    ],
    details: [
      'Conditioning recognition on bilateral talks grants settlement-expanding coalitions an indefinite veto over Palestinian self-determination.',
      'Israel’s own 1949 UN admission occurred prior to permanent peace treaties with its neighbors, setting a precedent for recognition before final border demarcation.',
      'UN observer-state status (Res. 67/19) gave Palestinians non-violent institutional recourse to international treaties, the ICC, and ICJ proceedings.',
      'Defenders of the 2017 U.S. Jerusalem proclamation similarly argued recognizing West Jerusalem acknowledged 70 years of governmental reality while leaving final borders open.'
    ],
    sources: [
      {
        title: 'IQ2 Debate: Mustafa Barghouti & Daniel Levy For Palestinian UN Membership',
        url: 'https://opentodebate.org/',
        publisher: 'Open to Debate (Intelligence Squared U.S.)',
        year: '2011',
        category: 'Debate / Broadcast'
      },
      {
        title: 'State of Palestine Situation & Rome Statute Accession Records',
        url: 'https://www.icc-cpi.int/palestine',
        publisher: 'International Criminal Court (ICC)',
        year: '2015',
        category: 'Court / Official Record'
      }
    ],
    references: [
      'Mustafa Barghouti & Daniel Levy — IQ2 Pro-UN Membership Arguments (2011)',
      'Joint Statements of Spain, Ireland, Norway & Slovenia Recognizing Palestine (May 2024)'
    ],
    tags: ['Diplomacy', 'International Law'],
    era: '2011–2024'
  },
  {
    id: 'con-recognition-hardens-positions',
    parentId: 'thesis-diplomatic-recognition',
    kind: 'con',
    title: 'Internationalizing the Conflict Hardens Maximalism & Substitutes Lawfare for Compromise',
    summary:
      'Dore Gold, Aaron David Miller, and veteran mediators argue that unilateral UN bids, ICC "lawfare," or unreciprocated embassy moves polarize domestic politics, violate Oslo’s bilateral commitment, and create hollow paper symbols without changing reality on the ground.',
    sections: [
      {
        heading: 'Montevideo Criteria, Oslo Commitments & Diplomatic Illusion',
        paragraphs: [
          'Opposing UN statehood at **Intelligence Squared U.S. (2011)**, former Israeli UN Ambassador **Dore Gold** and U.S. negotiator **Aaron David Miller** argued that General Assembly votes cannot manufacture sovereignty on the ground. Under **Article 1 of the 1933 Montevideo Convention**, statehood requires unified effective governance—absent amid the split between the **Palestinian Authority** and **Hamas**—while **Article XXXI(7) of the 1995 Oslo II Accord** barred unilateral status steps, leaving paper symbols that heighten public disillusionment when checkpoints remain unchanged.'
        ]
      },
      {
        heading: 'Polarization, Moral Hazard & Mediation Breakdown',
        paragraphs: [
          'Critics warn that substituting **ICC/ICJ** "lawfare" or unconditioned recognition for bilateral compromise hardens maximalism on both sides. After **Spain**, **Ireland**, and **Norway** recognized Palestine in **May 2024** following Hamas’s **October 7** massacre, Israel’s **Knesset** voted **68–9** against Palestinian statehood, arguing unconditioned post-attack recognition rewarded mass terror. Conversely, Washington’s unreciprocated **2017 Jerusalem proclamation** prompted the **Palestinian Authority** to boycott U.S. mediation for over three years—demonstrating how unilateralism alienates the partners needed for peace.'
        ]
      }
    ],
    details: [
      'Oslo II Article XXXI(7) committed both Israel and the PLO not to take unilateral steps changing the legal status of the West Bank and Gaza outside negotiations.',
      'Under the 1933 Montevideo Convention, statehood requires unified effective governance—absent amid the Hamas–Fatah split and lack of PA elections since 2006.',
      'Following May 2024 European recognitions of Palestine, Israel’s Knesset voted 68–9 against statehood, viewing post-Oct 7 recognition as a moral hazard rewarding Hamas.',
      'Similarly, the unreciprocated 2017 U.S. Jerusalem proclamation triggered a multi-year PA boycott of U.S. mediation without advancing a peace settlement.'
    ],
    sources: [
      {
        title: 'IQ2 Debate: Dore Gold & Aaron David Miller Against Unilateral UN Statehood',
        url: 'https://opentodebate.org/',
        publisher: 'Open to Debate (Intelligence Squared U.S.)',
        year: '2011',
        category: 'Debate / Broadcast'
      },
      {
        title: 'Israeli-Palestinian Interim Agreement on the West Bank and the Gaza Strip (Oslo II, Art. XXXI)',
        url: 'https://peacemaker.un.org/',
        publisher: 'United Nations Peacemaker Treaty Database',
        year: '1995',
        category: 'Primary Text / Treaty'
      },
      {
        title: 'Analysis of European Statehood Recognitions & Bilateral Peace Process Impacts',
        url: 'https://www.cfr.org/',
        publisher: 'Council on Foreign Relations (CFR)',
        year: '2024',
        category: 'Scholarship'
      }
    ],
    references: [
      'Dore Gold & Aaron David Miller — IQ2 Opposition Arguments Against Unilateral UN Statehood (2011)',
      'Oslo II Art. XXXI(7) Clause Against Unilateral Status Changes'
    ],
    tags: ['Diplomacy', 'Governance'],
    era: '2011–2024'
  }
];
