import { DebateNode } from '../../types/debate';

export const bordersSettlementsNodes: DebateNode[] = [
  {
    id: 'pillar-borders-settlements',
    parentId: 'root-ip',
    kind: 'pillar',
    title: '1967 Borders, West Bank Occupation & Settlements',
    summary:
      'Examines the legal, strategic, territorial, and human-rights battle over the West Bank (Judea and Samaria), the 1967 Green Line, Israeli settlements, Oslo governance zones, and defensible borders.',
    sections: [
      {
        heading: 'From the 1949 Armistice Lines to the 1967 Six-Day War',
        paragraphs: [
          'Between 1949 and June 1967, the **West Bank** and **East Jerusalem** were held by **Jordan** and the **Gaza Strip** by **Egypt** along the **1949 Armistice Demarcation Lines ("Green Line")**. During the **June 1967 Six-Day War**, Israel captured the West Bank, East Jerusalem, Gaza, the Sinai Peninsula, and the Golan Heights. While Israel later returned Sinai under the **1979 Egypt–Israel Peace Treaty** and withdrew unilaterally from Gaza in **2005**, the fate of the West Bank (**Judea and Samaria** in Israeli statutory usage) remains the central territorial fault line of the conflict.',
          'Under the bilateral **1995 Oslo II Interim Agreement**, West Bank administration was partitioned into **Area A** (~18% of the land, under Palestinian Authority civil and internal security rule), **Area B** (~22%, under PA civil governance and joint/Israeli security control), and **Area C** (~60%, under full Israeli military and civil jurisdiction). Today more than **500,000 Israeli settlers** reside across Area C settlements alongside **>220,000 Israelis in East Jerusalem** and roughly **3 million West Bank Palestinians** living across fragmented urban and rural zones.'
        ]
      },
      {
        heading: 'International Humanitarian Law vs. Disputed-Territory & Security Claims',
        paragraphs: [
          'International legal consensus—reflected in **Fourth Geneva Convention Article 49(6)**, Chapter VI **UNSC Resolution 2334 (2016)**, and non-binding **ICJ Advisory Opinions (2004 and July 2024)**—treats the West Bank as occupied territory in which civilian settlement construction and de facto annexation are unlawful. Conversely, Israeli jurists and strategists contest UNGA-referred advisory opinions, citing the absence of a recognized pre-1967 sovereign, the deliberately negotiated phrasing of **UNSC Resolution 242 (1967)** calling for "secure and recognized boundaries," ancestral Jewish ties, and the vulnerability of Israel’s **9-mile-wide coastal plain**.'
        ]
      }
    ],
    details: [
      'Israel captured the West Bank and East Jerusalem from Jordan, Gaza and Sinai from Egypt, and the Golan Heights from Syria during the June 1967 Six-Day War.',
      'Today over 500,000 Israeli settlers live in the West Bank (excluding >220,000 in East Jerusalem) alongside ~3 million Palestinians governed across Oslo Areas A, B, and C.',
      'Pits Fourth Geneva Convention prohibitions and contested non-binding ICJ advisory opinions against Israeli arguments of disputed sovereignty, UNSC Resolution 242 phrasing, historical ties, and strategic depth.'
    ],
    sources: [
      {
        title: 'Israel–Jordan General Armistice Agreement (April 3, 1949)',
        url: 'https://avalon.law.yale.edu/20th_century/arm03.asp',
        publisher: 'Yale Law School Avalon Project',
        year: '1949',
        category: 'Primary Text / Treaty'
      },
      {
        title: 'UN Security Council Resolution 242 (November 22, 1967)',
        url: 'https://undocs.org/S/RES/242(1967)',
        publisher: 'United Nations Security Council',
        year: '1967',
        category: 'Primary Text / Treaty'
      },
      {
        title: 'Fourth Geneva Convention Relative to the Protection of Civilian Persons in Time of War',
        url: 'https://ihl-databases.icrc.org/en/ihl-treaties/gciv-1949',
        publisher: 'ICRC International Humanitarian Law Databases',
        year: '1949',
        category: 'Primary Text / Treaty'
      },
      {
        title: 'ICJ Case 186 — Legal Consequences Arising from Policies and Practices in the OPT (Advisory Opinion)',
        url: 'https://www.icj-cij.org/case/186',
        publisher: 'International Court of Justice',
        year: '2024',
        category: 'Court / Official Record'
      }
    ],
    references: [
      'Israel–Jordan General Armistice Agreement (April 3, 1949)',
      'UN Security Council Resolution 242 (Nov 22, 1967)',
      'Fourth Geneva Convention (1949)',
      'ICJ Non-Binding Advisory Opinions on UNGA Referrals (2004 & July 2024)'
    ],
    tags: ['International Law', 'Security', 'Human Rights'],
    era: '1967–Present'
  },

  // THESIS 2A: Settlements & Prolonged Occupation Violate International Law & Block Peace
  {
    id: 'thesis-settlements-illegal',
    parentId: 'pillar-borders-settlements',
    kind: 'thesis',
    title: 'Prolonged Occupation & Settlements Are Unlawful and Obstruct Peace',
    summary:
      'Israel’s 57+ year military occupation of the West Bank and state-backed expansion of civilian settlements violate international humanitarian law, fragment Palestinian territory, and create unequal dual legal regimes.',
    sections: [
      {
        heading: 'Prohibition of Permanent Demographic Transformation Under Occupation',
        paragraphs: [
          'Under the modern law of belligerent occupation codified in the **1907 Hague Regulations** and **1949 Fourth Geneva Convention**, military occupation is strictly a temporary trusteeship pending a peace treaty: the occupying power exercises administrative authority (*usufruct*) without acquiring sovereign title. Critics emphasize that across **57+ years**, successive Israeli cabinets have financed housing, highways, water networks, tax incentives, and industrial zones for **over 700,000 settlers** in the West Bank and East Jerusalem, converting temporary military administration into permanent territorial incorporation.',
          'While Israel contests the impartiality and binding authority of UN organs, **UNSC Resolution 2334 (December 2016)** (adopted 14–0 under Chapter VI with a U.S. abstention), the **International Committee of the Red Cross (ICRC)**, the **European Union**, the **United Kingdom**, and the **ICJ’s 2004 and July 2024 Advisory Opinions** concur that Israeli civilian settlements in occupied territory possess "no legal validity," violate international humanitarian law, and physically foreclose a contiguous, viable Palestinian state.'
        ]
      },
      {
        heading: 'Area C Permit Regimes, Barrier Routing & Everyday Restrictions',
        paragraphs: [
          'Across **Area C**—encompassing **60% of the West Bank** and holding its vital agricultural valleys, aquifers, and land reserves—Israeli Civil Administration planning committees reject **more than 98% of Palestinian building permit applications**, triggering regular demolitions of Palestinian homes and solar or water structures while retroactively legalizing unauthorized Israeli outposts. Coupled with **85% of the West Bank Separation Barrier** snaking east of the 1967 Green Line, hundreds of checkpoints, and rising settler violence, Palestinian movement and economic development face systemic suffocation.'
        ]
      }
    ],
    details: [
      'Broad international legal opinion—including the ICRC, EU, UK, UNSC Res. 2334, and ICJ advisory opinions (2004, 2024, though contested by Israel as non-binding UNGA-referred opinions)—classifies Israeli settlements in occupied territory as unlawful.',
      'Area C (60% of the West Bank) remains under full Israeli military and civil control, where Palestinian building permits are approved in <2% of cases while settlement infrastructure expands.',
      'Checkpoints, bypass roads, the Separation Barrier (85% routed inside the West Bank rather than on the Green Line), and settler violence restrict Palestinian freedom of movement and economic life.'
    ],
    sources: [
      {
        title: 'Fourth Geneva Convention, Article 49(6) (1949)',
        url: 'https://ihl-databases.icrc.org/en/ihl-treaties/gciv-1949',
        publisher: 'ICRC International Humanitarian Law Databases',
        year: '1949',
        category: 'Primary Text / Treaty'
      },
      {
        title: 'UN Security Council Resolution 2334 (December 23, 2016)',
        url: 'https://undocs.org/S/RES/2334(2016)',
        publisher: 'United Nations Security Council',
        year: '2016',
        category: 'Court / Official Record'
      },
      {
        title: 'ICJ Advisory Opinion — Legal Consequences Arising from Policies and Practices in the OPT',
        url: 'https://www.icj-cij.org/case/186',
        publisher: 'International Court of Justice',
        year: '2024',
        category: 'Court / Official Record'
      }
    ],
    references: [
      'Fourth Geneva Convention Art. 49(6) (1949)',
      'UNSC Resolution 2334 (Dec 23, 2016 — Chapter VI)',
      'ICJ Advisory Opinion on Legal Consequences of Policies in the OPT (July 19, 2024 — Non-Binding)'
    ],
    tags: ['International Law', 'Human Rights', 'Governance'],
    era: '1967–Present',
    relatedIds: ['con-two-state-settlements']
  },
  {
    id: 'pro-settlements-geneva-icj',
    parentId: 'thesis-settlements-illegal',
    kind: 'pro',
    title: 'Fourth Geneva Convention Art. 49(6) & 2024 ICJ Ruling',
    summary:
      'Article 49(6) explicitly states that "The Occupying Power shall not deport or transfer parts of its own civilian population into the territory it occupies," reinforced by the ICJ’s 2004 and 2024 opinions.',
    sections: [
      {
        heading: 'Text & Drafting Purpose of Article 49(6) & the 1967 Meron Memo',
        paragraphs: [
          'Unlike Article 49(1) of the **Fourth Geneva Convention**, which forbids "forcible" deportations of protected persons *out* of occupied territory, **Article 49(6)** omits the word "forcible" and flatly bars an Occupying Power from transferring parts of its own civilian population *into* occupied territory—whether by coercion, state incentives, tax subsidies, or infrastructure allocation. As **Jean Pictet’s 1958 ICRC Commentary** explains, the clause was drafted specifically to prevent occupying states from colonizing captured territories for political or demographic reasons.',
          'Declassified Israeli state archives confirm that this legal reading was recognized internally immediately after the Six-Day War. On **September 14, 1967**, Israeli Foreign Ministry legal adviser **Theodor Meron** (who later served as President of the UN International Criminal Tribunal for the former Yugoslavia) sent Prime Minister **Levi Eshkol** a top-secret memorandum concluding unequivocally that civilian settlement in the newly administered territories contravened **Article 49(6)** because its prohibition is "categorical and not conditional on the motives for the transfer."'
        ]
      },
      {
        heading: 'The 2004 Wall & July 2024 ICJ Advisory Opinions',
        paragraphs: [
          'In both its **July 2004 Wall Advisory Opinion** (unanimous on settlement illegality, including American Judge Thomas Buergenthal) and its **July 19, 2024 OPT Advisory Opinion**, the **International Court of Justice** rejected Israel’s argument that the Fourth Geneva Convention does not apply *de jure* to the West Bank. Although Israel objected that non-binding UNGA referrals circumvent bilateral **Oslo** negotiations, the Court ruled that transferring civilian ministry powers and entrenching permanent settlements constituted unlawful *de facto* annexation.'
        ]
      }
    ],
    details: [
      'The International Committee of the Red Cross (ICRC) commentary clarifies Art. 49(6) prevents an occupying power from colonizing occupied land to alter its demographic character and create irreversible facts on the ground.',
      'Even Israeli government legal adviser Theodor Meron warned Prime Minister Levi Eshkol in a top-secret September 1967 memo that civilian settlement in administered territories contravened the Fourth Geneva Convention.',
      'In July 2024, the ICJ’s non-binding advisory opinion concluded that Israel’s continued presence in the Occupied Palestinian Territory had become unlawful de facto annexation through permanent settlement integration.'
    ],
    sources: [
      {
        title: 'Fourth Geneva Convention Article 49 & 1958 ICRC Commentary',
        url: 'https://ihl-databases.icrc.org/en/ihl-treaties/gciv-1949',
        publisher: 'ICRC International Humanitarian Law Databases',
        year: '1949',
        category: 'Primary Text / Treaty'
      },
      {
        title: 'ICJ Case 131 — Legal Consequences of the Construction of a Wall in the OPT',
        url: 'https://www.icj-cij.org/case/131',
        publisher: 'International Court of Justice',
        year: '2004',
        category: 'Court / Official Record'
      },
      {
        title: 'ICJ Case 186 — Legal Consequences Arising from Policies and Practices in the OPT',
        url: 'https://www.icj-cij.org/case/186',
        publisher: 'International Court of Justice',
        year: '2024',
        category: 'Court / Official Record'
      }
    ],
    references: [
      'Theodor Meron Legal Memorandum to PM Eshkol (Sept 14, 1967)',
      'Fourth Geneva Convention Art. 49(6) & ICRC Commentary (1949)',
      'ICJ Advisory Opinions on the OPT (2004 & July 2024)'
    ],
    tags: ['International Law'],
    era: '1967–2024'
  },
  {
    id: 'pro-settlements-dual-law',
    parentId: 'thesis-settlements-illegal',
    kind: 'pro',
    title: 'Dual Legal System & Territorial Fragmentation in Area C',
    summary:
      'In the same West Bank territory, Israeli settlers live under Israeli civil law with full voting rights and state services, while neighboring Palestinians live under Israeli military orders without voting in the government controlling their borders and airspace.',
    sections: [
      {
        heading: 'Two Populations, Two Legal Regimes on the Same Hilltops',
        paragraphs: [
          'Through personal extraterritorial Knesset legislation ("enclave law") and IDF military decrees, two neighbors living hundreds of meters apart in the **West Bank** inhabit starkly unequal legal systems. An Israeli settler suspected of an offense is arrested under **Israeli domestic criminal procedure**, brought rapidly before a civilian judge, guaranteed full constitutional protections, supplied subsidized municipal services, and empowered to vote for the **Knesset** that exercises ultimate control over West Bank borders, water, and land.',
          'By contrast, a Palestinian neighbor residing in **Area C**—or detained by IDF forces anywhere across the West Bank—is governed by **more than 1,800 military orders**, prosecuted in **IDF military courts** (where conviction rates exceed 99%, predominantly via plea bargains induced by lengthy remand detention) or held without trial under **administrative detention**, barred from unlicensed political marches under **Military Order 101**, and denied any vote in the Israeli government whose ministers manage West Bank territory.'
        ]
      },
      {
        heading: 'Enclave Geography & Pastoral Displacement',
        paragraphs: [
          'Field documentation compiled by **B’Tselem**, **Yesh Din**, **ACRI**, and **UN OCHA** illustrates how **more than 140 official settlements** and **190+ unauthorized hilltop outposts**—linked to metropolitan Israel by modern bypass highways—splinter Palestinian communities along the central **Jenin–Nablus–Ramallah–Bethlehem–Hebron** ridge into disconnected enclaves. Since 2022–2023, escalating armed harassment from agricultural outposts amid minimal police indictment rates has forcibly displaced **dozens of Palestinian Bedouin and herding hamlets** from tens of thousands of grazing dunams across central **Area C**.'
        ]
      }
    ],
    details: [
      'Critics—including Israeli NGOs (B’Tselem, Yesh Din, ACRI) and international human rights groups—argue that an indefinite two-tier legal system based on national identity violates international norms against systemic domination.',
      'Over 140 official settlements and 190+ unauthorized outposts bisect the north-south axis between Nablus, Ramallah, Bethlehem, and Hebron.',
      'Escalating settler violence and pastoral displacement in Area C hills have shrunk Palestinian grazing and agricultural access.'
    ],
    sources: [
      {
        title: 'B’Tselem — Settlements, Land Takeover & Dual Legal Regime Reports',
        url: 'https://www.btselem.org/',
        publisher: 'B’Tselem (Israeli Information Center for Human Rights in the Occupied Territories)',
        year: '2024',
        category: 'Watchdog / NGO'
      },
      {
        title: 'UN OCHA Occupied Palestinian Territory — West Bank Movement, Access & Humanitarian Snapshots',
        url: 'https://www.ochaopt.org/',
        publisher: 'UN Office for the Coordination of Humanitarian Affairs',
        year: '2024',
        category: 'Empirical / Economic Study'
      },
      {
        title: 'ICJ Case 186 — Analysis of Dual Legal Regimes in the West Bank',
        url: 'https://www.icj-cij.org/case/186',
        publisher: 'International Court of Justice',
        year: '2024',
        category: 'Court / Official Record'
      }
    ],
    references: [
      'B’Tselem Reports on West Bank Dual Legal Regimes (2021–2024)',
      'UN OCHA West Bank Movement and Access Reports',
      'ICJ Advisory Opinion on Legal Consequences in the OPT (2024)'
    ],
    tags: ['Human Rights', 'Governance', 'International Law'],
    era: '1995–Present'
  },
  {
    id: 'con-dual-law-oslo-security',
    parentId: 'pro-settlements-dual-law',
    kind: 'con',
    title: 'Distinction Is Citizenship-Based Under Bilateral Oslo Accords, Not Racial',
    summary:
      'Legal defenders respond that over 90% of West Bank Palestinians live in Areas A and B under Palestinian Authority civil governance pursuant to the mutually signed 1995 Oslo II Accords, and legal differentiation reflects citizenship and military occupation law rather than race.',
    sections: [
      {
        heading: 'Citizenship vs. Race & Mandatory Law of Belligerent Occupation',
        paragraphs: [
          'Constitutional and international-law scholars reject analogies to South African *apartheid*, demonstrating that West Bank legal differentiation turns strictly on **citizenship and bilateral treaty jurisdiction**, never on race or ethnicity. Inside sovereign Israel, **2.1 million Arab citizens (~21% of the population)** exercise identical voting rights, parliamentary representation, university access, and judicial authority—including **Arab Supreme Court justices**—and an Arab citizen of Israel driving through **Area C** is governed by the exact same Israeli civil laws as a Jewish Israeli.',
          'Paradoxically, under **Article 43 of the 1907 Hague Regulations**, an occupying military is *legally forbidden* from unilaterally imposing its domestic civil law and citizenship upon non-citizen inhabitants of occupied territory, because doing so constitutes unlawful sovereign annexation. Meanwhile, over **90% of West Bank Palestinians** live in **Areas A and B**, where taxes, schools, civil courts, and municipal policing are administered by the **Palestinian Authority** pursuant to the **PLO-signed 1995 Oslo II Interim Agreement**.'
        ]
      },
      {
        heading: 'Second Intifada Security Imperatives & Judicial Oversight',
        paragraphs: [
          'Defenders underscore that West Bank checkpoints and the **Security Barrier** did not exist in the early 1990s when traffic flowed openly; they were erected out of urgent self-defense during the **Second Intifada (2000–2005)** to stop suicide bombers entering from West Bank cities, reducing mass-casualty terror fatalities inside Israel by **more than 90%**. Moreover, the **Israel High Court of Justice** (e.g., *Beit Sourik*, 2004) grants direct standing to non-citizen Palestinian petitioners and has repeatedly ordered barrier rerouting to protect village farmland.'
        ]
      }
    ],
    details: [
      'Inside sovereign Israel, 2.1 million Arab citizens hold equal voting rights, serve on the Supreme Court, in the Knesset, and as hospital directors—contradicting racial apartheid analogies.',
      'Under international law of belligerent occupation (Hague Reg. Art. 43), an occupying military cannot unilaterally impose its domestic civil law on non-citizen occupied inhabitants without illegally annexing the territory.',
      'Security checkpoints and the West Bank barrier were erected primarily during the Second Intifada (2000–2005), reducing suicide bombing fatalities inside Israel by over 90%.'
    ],
    sources: [
      {
        title: 'Declaration of Principles on Interim Self-Government Arrangements (Oslo I, Sept 13, 1993)',
        url: 'https://avalon.law.yale.edu/20th_century/isrplo.asp',
        publisher: 'Yale Law School Avalon Project',
        year: '1993',
        category: 'Primary Text / Treaty'
      },
      {
        title: 'Hague Convention (IV) Regulations, Article 43 — Maintenance of Existing Laws Under Occupation',
        url: 'https://avalon.law.yale.edu/20th_century/hague04.asp',
        publisher: 'Yale Law School Avalon Project',
        year: '1907',
        category: 'Primary Text / Treaty'
      },
      {
        title: 'Supreme Court of Israel — Beit Sourik Village Council v. Government of Israel (HCJ 2056/04)',
        url: 'https://versa.cardozo.yu.edu/',
        publisher: 'Versa — Opinions of the Supreme Court of Israel (Cardozo Law)',
        year: '2004',
        category: 'Court / Official Record'
      }
    ],
    references: [
      'Israel–PLO Declaration of Principles (Oslo I, 1993) & Oslo II Interim Agreement (1995)',
      'Hague Regulations Art. 43 (1907)',
      'Israel High Court of Justice — Beit Sourik Village Council v. Government of Israel (2004)'
    ],
    tags: ['International Law', 'Security', 'Governance'],
    era: '1995–Present'
  },

  // COUNTER-THESIS / CHALLENGES ON 1967 & SETTLEMENTS
  {
    id: 'con-settlements-disputed-242',
    parentId: 'thesis-settlements-illegal',
    kind: 'con',
    title: '"Disputed Territory," Missing Prior Sovereign & UNSC Res. 242',
    summary:
      'Israeli legal arguments contend the West Bank was captured in a defensive war in 1967 from Jordan—whose 1950 annexation was internationally unrecognized—and that UNSC Resolution 242 deliberately rejected full return to fragile 1949 armistice lines.',
    sections: [
      {
        heading: 'Absence of a Lawful Pre-1967 Sovereign & Armistice Line Clause',
        paragraphs: [
          'Jurists including **Stephen Schwebel** (later ICJ President), **Julius Stone**, **Eugene Rostow**, and the **2012 Levy Commission** argue that **Article 2 of the Fourth Geneva Convention** applies strictly to occupation of "the territory of a High Contracting Party." Because **Jordan’s 1948 invasion and 1950 annexation** of the West Bank were rejected by the international community (including the Arab League, recognized only by Britain and Pakistan), Jordan held no valid sovereign title in June 1967 when it shelled West Jerusalem despite Israeli pleas to stay out of the war.',
          'Furthermore, the **April 1949 Israel–Jordan General Armistice Agreement (Article II.2 and Article VI.9)** explicitly recorded—at Arab insistence so as not to legitimize Israel’s 1949 boundaries—that the **Green Line** was dictated "exclusively by military considerations" and was *not* to be construed as a political or territorial border nor to prejudice either party’s claims in an eventual peace settlement. Consequently, Israeli jurists classify the West Bank as **disputed territory** awaiting bilateral border demarcation.'
        ]
      },
      {
        heading: 'Drafting History of UNSC Resolution 242 & Mandate Article 6',
        paragraphs: [
          'When negotiating **UNSC Resolution 242 (November 22, 1967)**, British sponsor **Lord Caradon** and U.S. Undersecretary **Eugene Rostow** defeated Soviet amendments demanding withdrawal from *"all* the territories," intentionally adopting **"from territories occupied in the recent conflict"** paired with the right to **"secure and recognized boundaries."** Defenders also note **Article 6 of the 1922 Palestine Mandate** encouraged close Jewish settlement across western Palestine, including **Hebron** and **Gush Etzion**, whose historic Jewish communities Jordan had expelled in 1948.'
        ]
      }
    ],
    details: [
      'The 1949 "Green Line" was explicitly defined in the Israeli-Jordanian Armistice Agreement (Art. VI.9) as a military armistice line dictated solely by military considerations and "not to be construed as a political or territorial boundary."',
      'Drafters of UNSC Resolution 242 (Lord Caradon, Eugene Rostow) intentionally wrote withdrawal "from territories occupied" (omitting "the" or "all") paired with the right to live within "secure and recognized boundaries."',
      'Under the League of Nations Mandate (Art. 6), close Jewish settlement was encouraged across western Palestine prior to Jordan’s 1948 expulsion of Jewish communities from Gush Etzion and Hebron.'
    ],
    sources: [
      {
        title: 'Israel–Jordan General Armistice Agreement, Articles II & VI (April 3, 1949)',
        url: 'https://avalon.law.yale.edu/20th_century/arm03.asp',
        publisher: 'Yale Law School Avalon Project',
        year: '1949',
        category: 'Primary Text / Treaty'
      },
      {
        title: 'UN Security Council Resolution 242 (November 22, 1967)',
        url: 'https://avalon.law.yale.edu/20th_century/un242.asp',
        publisher: 'Yale Law School Avalon Project',
        year: '1967',
        category: 'Primary Text / Treaty'
      },
      {
        title: 'League of Nations Mandate for Palestine, Article 6 (1922)',
        url: 'https://avalon.law.yale.edu/20th_century/palmanda.asp',
        publisher: 'Yale Law School Avalon Project',
        year: '1922',
        category: 'Primary Text / Treaty'
      }
    ],
    references: [
      '1949 Israel–Jordan General Armistice Agreement Art. II & VI',
      'UNSC Resolution 242 (Nov 22, 1967) — Drafting History',
      'League of Nations Mandate for Palestine Art. 6 (1922)'
    ],
    tags: ['International Law', 'History', 'Diplomacy'],
    era: '1949–Present'
  },
  {
    id: 'con-rebuttal-242-inadmissibility',
    parentId: 'con-settlements-disputed-242',
    kind: 'con',
    title: 'Res. 242 Preamble Bars Acquiring Territory by War & French Text Says "des territoires"',
    summary:
      'International lawyers counter that Resolution 242’s opening principle affirms "the inadmissibility of the acquisition of territory by war"—allowing at most minor, mutually agreed border rectifications, never unilateral settlement of hundreds of thousands of civilians.',
    sections: [
      {
        heading: 'Inadmissibility Principle & Authentic Bilingual Text of Res. 242',
        paragraphs: [
          'Public international-law scholars counter that treating the omitted English word "the" in **UNSC Resolution 242** as a blank check for sweeping territorial retention or civilian colonization directly violates the resolution’s opening preambular principle—**"the inadmissibility of the acquisition of territory by war."** Rooted in **UN Charter Article 2(4)**, this peremptory prohibition applies equally whether force was used aggressively or in lawful self-defense: defensive military victory confers temporary belligerent occupation authority, never sovereign title over captured land.',
          'Moreover, under UN Security Council practice, the **equally authentic French text** of Resolution 242 explicitly calls for *"retrait des forces armées israéliennes des territoires occupés"* ("from *the* territories occupied"). Even **Lord Caradon** and **U.S. Secretary of State William Rogers (December 1969)** clarified publicly that the English wording envisioned only **"insubstantial alterations required for mutual security"** negotiated between the parties—never unilateral state settlement of **700,000+ civilians** deep inside the West Bank.'
        ]
      },
      {
        heading: 'Humanitarian Object & Purpose Over Technical Sovereign Gaps',
        paragraphs: [
          'Both the **International Committee of the Red Cross** and the **International Court of Justice (2004 Wall Opinion, paras. 90–101)** rejected Israel’s "missing reversioner" argument under **Vienna Convention treaty interpretation rules**. Because the **Fourth Geneva Convention** was enacted to safeguard *protected civilian populations* falling under an adversary army’s power rather than to adjudicate competing state land titles, Jordan’s unrecognized 1950 annexation never turned the West Bank into *terra nullius* nor extinguished resident Palestinians’ right of self-determination.'
        ]
      }
    ],
    details: [
      'The equally authentic French text of Resolution 242 reads "retrait des forces armées israéliennes des territoires occupés" ("from the territories occupied"), paired with the preamble barring territorial acquisition by war.',
      'Lack of recognized Jordanian sovereignty does not turn the West Bank into terra nullius; humanitarian protections and self-determination rights vest in the resident Palestinian population.',
      'Even US administrations supporting minor mutually agreed border modifications consistently opposed unilateral settlement expansion deep inside the West Bank.'
    ],
    sources: [
      {
        title: 'UN Security Council Resolution 242 — Bilingual Official Record S/RES/242(1967)',
        url: 'https://undocs.org/S/RES/242(1967)',
        publisher: 'United Nations Security Council',
        year: '1967',
        category: 'Primary Text / Treaty'
      },
      {
        title: 'ICJ Case 131 — Wall Advisory Opinion, Paras. 74–101 (Applicability of GCIV & Res. 242)',
        url: 'https://www.icj-cij.org/case/131',
        publisher: 'International Court of Justice',
        year: '2004',
        category: 'Court / Official Record'
      },
      {
        title: 'U.S. UN Ambassador Bill Richardson Statement on Israeli Settlements (April 25, 1997)',
        url: 'https://avalon.law.yale.edu/20th_century/mid039.asp',
        publisher: 'Yale Law School Avalon Project',
        year: '1997',
        category: 'Court / Official Record'
      }
    ],
    references: [
      'UNSC Resolution 242 Preamble & French Authentic Text (1967)',
      'ICJ Wall Advisory Opinion Para. 74–101 (2004)',
      'U.S. Diplomatic Record on Settlements & Minor Border Modifications (Avalon Project)'
    ],
    tags: ['International Law', 'Diplomacy'],
    era: '1967–2024'
  },
  {
    id: 'con-settlements-strategic-depth',
    parentId: 'thesis-settlements-illegal',
    kind: 'con',
    title: 'Strategic Depth: West Bank Highlands Overlook Israel’s Narrow Waist',
    summary:
      'Military strategists argue that full Israeli military withdrawal to the 1967 lines would leave Israel just 9 miles (14 km) wide at Netanya/Tel Aviv, with Judea-Samaria hilltops dominating Ben Gurion Airport and 70% of Israel’s population and GDP.',
    sections: [
      {
        heading: 'Topography of the Samarian Ridge & the Jordan Valley Perimeter',
        paragraphs: [
          'Israeli military planners emphasize unforgiving operational geography: along the pre-1967 **Green Line**, Israel’s coastal waist between **Tulkarm/Qalqilya** and the Mediterranean Sea at **Netanya** measures barely **9 miles (14 km)** wide—narrower than Manhattan’s length. Immediately east, the **Judean and Samarian mountain spine** rises **2,500 to 3,300 feet**, giving direct topographical and line-of-sight dominance over metropolitan **Tel Aviv (Gush Dan)**, **Ben Gurion International Airport**, high-tech corridors, and **~70% of Israel’s population and industrial economy**.',
          'Even inexpensive improvised mortars, short-range rockets, shoulder-fired surface-to-air missiles (**MANPADS**), or pickup-truck commando raids launched from those western foothills could shut down Israel’s sole international aviation gateway and bisect its highway grid in minutes. Simultaneously, IDF control of the **Jordan Valley**—forming a sheer **4,000-foot eastern escarpment** along the Jordanian frontier—serves as Israel’s forward shield preventing **Iranian smuggling networks** operating across Iraq and Syria from flooding West Bank cities with heavy munitions.'
        ]
      },
      {
        heading: 'The 2005 Gaza Disengagement Precedent & Post-October 7 Trauma',
        paragraphs: [
          'For a wide majority of Israeli voters, the **August 2005 Gaza Disengagement**—in which Prime Minister **Ariel Sharon** uprooted all **21 Gaza settlements**, evacuated ~8,500 civilians, and withdrew every IDF soldier to the 1967 line—served as a live empirical test of unilateral territorial withdrawal. Within two years, **Hamas** violently seized Gaza, fired tens of thousands of rockets, and ultimately perpetrated the **October 7, 2023 massacre** across a flat border twenty times shorter than the **310-km West Bank seam line**.'
        ]
      }
    ],
    details: [
      'The Samarian mountain ridge rises up to 3,000 feet directly above Israel’s 9-mile-wide coastal plain, giving line-of-sight range to Ben Gurion Airport and 70% of Israel’s population and GDP.',
      'Control of the Jordan Valley (eastern perimeter) prevents heavy Iranian weapons smuggling from Iraq/Syria through Jordan into the West Bank.',
      'The 2005 unilateral withdrawal from Gaza—evacuating every soldier and all 21 settlements—was followed within two years by Hamas’s armed takeover and October 7, shattering Israeli trust in withdrawal without overriding security control.'
    ],
    sources: [
      {
        title: 'Institute for National Security Studies (INSS) — Strategic Assessments on West Bank & Jordan Valley Security',
        url: 'https://www.inss.org.il/',
        publisher: 'INSS Tel Aviv University',
        year: '2024',
        category: 'Scholarship'
      },
      {
        title: 'UNSC Resolution 242 — Right to "Secure and Recognized Boundaries"',
        url: 'https://avalon.law.yale.edu/20th_century/un242.asp',
        publisher: 'Yale Law School Avalon Project',
        year: '1967',
        category: 'Primary Text / Treaty'
      },
      {
        title: 'Performance-Based Roadmap to a Permanent Two-State Solution (Security Benchmarks)',
        url: 'https://avalon.law.yale.edu/21st_century/roadmap.asp',
        publisher: 'Yale Law School Avalon Project',
        year: '2003',
        category: 'Primary Text / Treaty'
      }
    ],
    references: [
      'INSS Strategic Assessments on Jordan Valley & Coastal Plain Vulnerability (2024)',
      'UNSC Resolution 242 — Secure and Recognized Boundaries (1967)',
      'Gaza Disengagement Implementation & Aftermath (2005–2023)'
    ],
    tags: ['Security', 'Diplomacy'],
    era: '2005–Present',
    relatedIds: ['thesis-gaza-self-defense', 'con-two-state-security']
  },
  {
    id: 'con-rebuttal-settlements-weaken-security',
    parentId: 'con-settlements-strategic-depth',
    kind: 'con',
    title: 'Civilian Settlements Stretch the IDF Thin Rather Than Enhancing Security',
    summary:
      'Hundreds of retired Israeli generals, Shin Bet, and Mossad chiefs (Commanders for Israel’s Security) argue that military presence in the Jordan Valley is entirely distinct from scattering civilian settlements among millions of Palestinians, which actually burdens the IDF.',
    sections: [
      {
        heading: 'Military Deployments vs. Isolated Civilian Outposts',
        paragraphs: [
          '**Commanders for Israel’s Security (CIS)**—a non-partisan movement comprising **over 500 retired IDF generals, Mossad directors, Shin Bet heads, and National Security Council chiefs**—insists on a sharp operational distinction between **IDF military deployments along the Jordan Valley** and scattering civilian families deep inside densely populated Palestinian areas around **Nablus**, **Ramallah**, and **Hebron**. Rather than defending coastal Israel, isolated settlements and unauthorized hilltop outposts act as static tactical liabilities requiring round-the-clock IDF protection.',
          'That strategic opportunity cost became tragically unmistakable on **October 7, 2023**: while **only three IDF battalions** stood guard along the entire **Gaza Strip** perimeter fence, **more than twenty IDF combat battalions** had been diverted into the **West Bank** to guard isolated settlements, escort civilian traffic along shared roads, and police friction generated around provocative outposts—degrading army readiness, unit training schedules, and strategic force concentration on hostile borders.'
        ]
      },
      {
        heading: 'Land Swaps, Demilitarization & Bilateral vs. Unilateral Exit',
        paragraphs: [
          'Security-focused two-state planners emphasize that **roughly 80% of West Bank settlers** live inside compact border blocs adjacent to the Green Line (**Gush Etzion**, **Ma’ale Adumim**, **Modi’in Illit**, **Ariel**) covering only **4–5% of West Bank land**, which can be annexed under **1:1 territorial swaps** in the **Clinton/Olmert frameworks**. Unlike the **unilateral 2005 Gaza exit**—conducted without a treaty or PA security handover—a negotiated peace requires a **demilitarized Palestinian state**, Israeli airspace control, and phased **Jordan Valley** early-warning stations.'
        ]
      }
    ],
    details: [
      'Prior to October 7, 2023, over 20 IDF battalions were diverted from the Gaza border to guard West Bank settlements, roads, and outposts.',
      'Compact border blocs (~80% of settlers on ~4–5% of West Bank land) can be annexed via 1:1 land swaps in a negotiated treaty while demilitarizing a future Palestinian state and maintaining Jordan Valley security arrangements.',
      'Unlike unilateral Gaza withdrawal (done without PA coordination or treaty), a bilateral settlement incorporates phased benchmarks, international monitors, and PA security cooperation.'
    ],
    sources: [
      {
        title: 'Commanders for Israel’s Security (CIS) — Security First & Two-State Policy Studies',
        url: 'https://en.cis.org.il/',
        publisher: 'Commanders for Israel’s Security',
        year: '2024',
        category: 'Empirical / Economic Study'
      },
      {
        title: 'President Clinton Statement on the Camp David Peace Talks (July 25, 2000)',
        url: 'https://avalon.law.yale.edu/21st_century/mid027.asp',
        publisher: 'Yale Law School Avalon Project',
        year: '2000',
        category: 'Court / Official Record'
      },
      {
        title: 'Sharm el-Sheikh Fact-Finding Committee Report (Mitchell Plan, April 30, 2001)',
        url: 'https://avalon.law.yale.edu/21st_century/mitchell_plan.asp',
        publisher: 'Yale Law School Avalon Project',
        year: '2001',
        category: 'Court / Official Record'
      }
    ],
    references: [
      'Commanders for Israel’s Security (CIS) Policy Studies (2024)',
      'Camp David & Clinton Parameters Security Arrangements (2000)',
      'Mitchell Committee Fact-Finding Report (2001)'
    ],
    tags: ['Security', 'Diplomacy'],
    era: '2000–Present'
  },

  // THESIS 2B: Collapse of the Oslo Peace Process
  {
    id: 'thesis-oslo-collapse',
    parentId: 'pillar-borders-settlements',
    kind: 'thesis',
    title: 'Oslo Failed Primarily Due to Asymmetric Power & Settlement Growth',
    summary:
      'Critics of the Oslo framework argue the 1993–1995 interim accords failed because they left final-status issues unresolved without freezing settlements, allowing the stronger party to entrench Area C control while outsourcing policing to the PA.',
    sections: [
      {
        heading: 'Structural Flaws of Incrementalism Without a Settlement Freeze',
        paragraphs: [
          'Signed on the White House lawn on **September 13, 1993**, the **Oslo I Declaration of Principles** and subsequent **1995 Oslo II Interim Agreement** postponed every core driver of the conflict—**Jerusalem**, **Palestinian refugees**, **permanent borders**, **Israeli settlements**, **water rights**, and **sovereignty**—to final-status talks slated for **May 1999**. Critically, while the **PLO** formally recognized Israel in 1993, Israel neither recognized a Palestinian right to sovereign statehood nor agreed to freeze settlement construction during interim talks.',
          'Consequently, between **1993 and 2000**—the exact seven-year span of active Oslo diplomacy under both Labor and Likud governments—the Israeli settler population across the **West Bank and East Jerusalem** surged by **more than 100,000 residents**, accompanied by hundreds of kilometers of dedicated bypass highways, hilltop outposts, and military land requisitions. To ordinary Palestinians watching bulldozers expand settlements daily while **Area C** remained sealed, incremental diplomacy appeared to mask permanent territorial consolidation rather than transition toward sovereignty.'
        ]
      },
      {
        heading: 'Extremist Spoilers, Rabin’s Assassination & Severed Movement',
        paragraphs: [
          'Violent spoilers further destabilized the interim design: in **February 1994**, American-born Israeli settler **Baruch Goldstein** murdered 29 Palestinian worshippers inside Hebron’s **Ibrahim Mosque (Cave of the Patriarchs)**, and on **November 4, 1995**, Israeli religious-nationalist extremist **Yigal Amir** assassinated Prime Minister **Yitzhak Rabin**, helping bring outspoken Oslo critic **Benjamin Netanyahu** to office in 1996. Simultaneously, expanding permit and closure regimes severed **Gaza** from the **West Bank**, eroding Oslo’s pledge to treat them as a "single territorial unit."'
        ]
      }
    ],
    details: [
      'Oslo deferred borders, Jerusalem, and refugees while containing no explicit clause halting settlement construction; between 1993 and 2000, the West Bank and East Jerusalem settler population grew by over 100,000.',
      'The February 1994 Hebron massacre and November 1995 assassination of Prime Minister Yitzhak Rabin by Israeli extremists derailed momentum at pivotal junctures.',
      'Palestinian movement between Gaza and the West Bank—treated as a "single territorial unit" in Oslo—was progressively severed through permit regimes while the PA became viewed as an unpaid security subcontractor.'
    ],
    sources: [
      {
        title: 'Israel–PLO Declaration of Principles on Interim Self-Government Arrangements (Sept 13, 1993)',
        url: 'https://avalon.law.yale.edu/20th_century/isrplo.asp',
        publisher: 'Yale Law School Avalon Project',
        year: '1993',
        category: 'Primary Text / Treaty'
      },
      {
        title: 'Preventing Palestine: A Political History from Camp David to Oslo — Seth Anziska',
        url: 'https://press.princeton.edu/',
        publisher: 'Princeton University Press',
        year: '2018',
        category: 'Scholarship'
      },
      {
        title: 'Wye River Memorandum (October 23, 1998)',
        url: 'https://avalon.law.yale.edu/20th_century/wyeriv.asp',
        publisher: 'Yale Law School Avalon Project',
        year: '1998',
        category: 'Primary Text / Treaty'
      }
    ],
    references: [
      'Declaration of Principles (Oslo I, Sept 13, 1993)',
      'Seth Anziska, Preventing Palestine: A Political History from Camp David to Oslo (2018)',
      'Wye River Memorandum (Oct 23, 1998)'
    ],
    tags: ['Diplomacy', 'History', 'Governance'],
    era: '1993–2005'
  },
  {
    id: 'pro-oslo-asymmetry',
    parentId: 'thesis-oslo-collapse',
    kind: 'pro',
    title: 'Interim Five-Year Period Hardened Into Permanent Fragmentation',
    summary:
      'What Oslo II designed as a temporary 5-year transition (supposed to end by May 1999) froze in place for three decades, turning Areas A and B into 165 disconnected enclaves surrounded by Israeli-controlled Area C.',
    sections: [
      {
        heading: 'From Five-Year Interim Map to Thirty-Year Archipelago',
        paragraphs: [
          'Under **Oslo II (September 1995)**, the division of the West Bank into Areas A, B, and C was strictly a **five-year transitional mechanism**: Israel committed to carry out three phased "further redeployments" transferring the vast majority of **Area C** to Palestinian jurisdiction ahead of a **May 1999** permanent treaty. When those redeployments stalled after the **1997 Hebron Protocol** and **1998 Wye River Memorandum**, a temporary administrative map hardened into a **30+ year archipelago** leaving **Areas A and B** split into **165 disconnected islands**.',
          'Diplomatic veterans including **Aaron David Miller** (who famously described U.S. envoys as acting as "Israel’s lawyer") alongside historians such as **Rashid Khalidi** and **Seth Anziska** emphasize that because **Washington** monopolized mediation while maintaining an ironclad strategic alliance and UN Security Council veto shielding Israel, bilateral Oslo talks lacked any independent **international arbitration, monitoring, or enforcement mechanism** whenever asymmetric military, fiscal, and territorial leverage dictated outcomes on the ground.'
        ]
      },
      {
        heading: 'Fiscal Dependency Under the 1994 Paris Economic Protocol',
        paragraphs: [
          'On the economic front, the **April 1994 Paris Protocol** bound the fledgling **Palestinian Authority** into an asymmetric customs union aligned to advanced Israeli tariff schedules, empowering Israel to collect **import duties and VAT clearance revenues** (~65–70% of total PA budget revenue) and periodically freeze transfers during political disputes. Landmark **World Bank** and **UNCTAD** studies estimated that ongoing Israeli restrictions across resource-rich **Area C** deprived the Palestinian economy of **more than 35% of potential annual GDP**.'
        ]
      }
    ],
    details: [
      'Phased redeployments envisioned under Oslo II stalled, freezing Areas A and B into 165 disconnected Palestinian enclaves surrounded by Israeli-controlled Area C.',
      'Without independent third-party enforcement mechanisms, bilateral negotiations heavily favored the occupying state possessing military, border, and territorial leverage.',
      'The Paris Protocol (1994) bound the Palestinian economy into an asymmetric customs union dependent on Israeli clearance revenue transfers, while Area C restrictions cost an estimated ~35% of Palestinian GDP (World Bank).'
    ],
    sources: [
      {
        title: 'World Bank Country Overview & Area C Economic Assessments — West Bank and Gaza',
        url: 'https://www.worldbank.org/en/country/westbankandgaza',
        publisher: 'The World Bank',
        year: '2023',
        category: 'Empirical / Economic Study'
      },
      {
        title: 'UNCTAD — Economic Costs of Occupation for the Palestinian People',
        url: 'https://unctad.org/topic/palestinian-people',
        publisher: 'UN Trade and Development (UNCTAD)',
        year: '2023',
        category: 'Empirical / Economic Study'
      },
      {
        title: 'Agreement on Preparatory Transfer of Powers and Responsibilities Between Israel and the PLO (1994)',
        url: 'https://avalon.law.yale.edu/20th_century/transfer_powers.asp',
        publisher: 'Yale Law School Avalon Project',
        year: '1994',
        category: 'Primary Text / Treaty'
      }
    ],
    references: [
      'Paris Protocol on Economic Relations & Preparatory Transfer Agreements (1994)',
      'World Bank Area C Economic Assessments',
      'UNCTAD Reports on the Palestinian Economy'
    ],
    tags: ['Governance', 'Diplomacy', 'Economics'],
    era: '1994–Present'
  },
  {
    id: 'con-oslo-second-intifada',
    parentId: 'thesis-oslo-collapse',
    kind: 'con',
    title: 'Second Intifada Suicide Bombings Destroyed the Israeli Peace Camp',
    summary:
      'Israeli historians and US mediators argue Oslo collapsed primarily because Hamas and Palestinian Islamic Jihad bombed buses throughout the 1990s, culminating in the Second Intifada (2000–2005) launched right after Ehud Barak offered statehood at Camp David.',
    sections: [
      {
        heading: '1990s Bus Bombings & Rejection of Camp David / Clinton Parameters',
        paragraphs: [
          'Israeli historians and chief American negotiator **Dennis Ross** contend that Oslo’s foundational bargain—territorial withdrawal and Palestinian self-government in exchange for ending violence—was fatally undermined by relentless terror attacks and **Yasser Arafat’s** refusal to dismantle militant factions. Even as Israel handed over **Gaza**, **Jericho**, and six major West Bank population centers in 1994–1995, **Hamas** and **Palestinian Islamic Jihad** detonated suicide bombs on commuter buses in **Tel Aviv** and **Jerusalem** in February–March 1996, directly tipping the May 1996 election against **Shimon Peres**.',
          'At the **July 2000 Camp David Summit** and in President Bill Clinton’s **December 2000 Parameters**, Prime Minister **Ehud Barak** broke generations-old Israeli taboos by offering a sovereign Palestinian state across **~92–96% of the West Bank** (with land swaps), **100% of Gaza**, and a Palestinian capital in **Arab East Jerusalem**—yet **Arafat** rejected the proposals without presenting a counteroffer and refused to waive a mass refugee return into sovereign Israel.'
        ]
      },
      {
        heading: 'Trauma of the Second Intifada (2000–2005)',
        paragraphs: [
          'Weeks after Camp David, following **Ariel Sharon’s** September 2000 visit to the Temple Mount / Haram al-Sharif, the **Second Intifada** erupted—escalating rapidly into a coordinated suicide-bombing campaign waged by **Hamas**, **PIJ**, and Fatah’s own **Al-Aqsa Martyrs’ Brigades** (with PA Iranian arms smuggling exposed aboard the **Karine A** freighter in 2002). More than **1,000 Israelis**—roughly 70% civilians in buses, cafes, and the **2002 Netanya Passover Seder**—were murdered, convincing centrist Israeli voters that land concessions had brought terror rather than peace.'
        ]
      }
    ],
    details: [
      'Hamas and PIJ bus bombings in 1994–1996 undermined Israeli public confidence during the height of Oslo withdrawals, contributing directly to Shimon Peres’s 1996 election loss.',
      'At Camp David (July 2000) and under the Clinton Parameters (Dec 2000), Yasser Arafat rejected statehood proposals covering >92–96% of the West Bank, 100% of Gaza, and Arab East Jerusalem neighborhoods without offering a counterproposal.',
      'Over 1,000 Israelis—predominantly civilians in cafes, buses, Passover seders, and markets—were killed during the Second Intifada (2000–2005), convincing mainstream Israeli voters that territorial concessions had invited mass terror.'
    ],
    sources: [
      {
        title: 'President Clinton Statement on the Camp David Peace Talks (July 25, 2000)',
        url: 'https://avalon.law.yale.edu/21st_century/mid027.asp',
        publisher: 'Yale Law School Avalon Project',
        year: '2000',
        category: 'Court / Official Record'
      },
      {
        title: 'Sharm el-Sheikh Fact-Finding Committee Report (The Mitchell Plan, April 30, 2001)',
        url: 'https://avalon.law.yale.edu/21st_century/mitchell_plan.asp',
        publisher: 'Yale Law School Avalon Project',
        year: '2001',
        category: 'Court / Official Record'
      },
      {
        title: 'The Missing Peace: The Inside Story of the Fight for Middle East Peace — Dennis Ross',
        url: 'https://us.macmillan.com/',
        publisher: 'Farrar, Straus and Giroux',
        year: '2004',
        category: 'Scholarship'
      }
    ],
    references: [
      'President Clinton Statement on the Camp David Summit (July 25, 2000)',
      'Mitchell Committee Fact-Finding Report (April 30, 2001)',
      'Dennis Ross, The Missing Peace (2004)'
    ],
    tags: ['Security', 'History', 'Diplomacy'],
    era: '1994–2005'
  }
];
