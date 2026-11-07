import { DebateNode } from '../../types/debate';

export const bordersSettlementsNodes: DebateNode[] = [
  {
    id: 'pillar-borders-settlements',
    parentId: 'root-ip',
    kind: 'pillar',
    title: '1967 Borders, West Bank Occupation & Settlements',
    summary:
      'Examines the legal, strategic, territorial, and human-rights battle over the West Bank (Judea and Samaria), the 1967 Green Line, Israeli settlements, Oslo governance zones, and defensible borders.',
    details: [
      'Israel captured the West Bank and East Jerusalem from Jordan, Gaza and Sinai from Egypt, and the Golan Heights from Syria during the June 1967 Six-Day War.',
      'Today over 500,000 Israeli settlers live in the West Bank (excluding >220,000 in East Jerusalem) alongside ~3 million Palestinians governed across Oslo Areas A, B, and C.',
      'pits Fourth Geneva Convention prohibitions and ICJ rulings against Israeli arguments of disputed sovereignty, UNSC Resolution 242 phrasing, historical ties, and strategic depth.'
    ],
    references: [
      'UN Security Council Resolution 242 (Nov 22, 1967)',
      'Oslo II Interim Agreement — Areas A, B, C (1995)',
      'ICJ Advisory Opinions (2004 & July 2024)'
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
    details: [
      'Overwhelming international consensus—including the ICJ (2004, 2024), UN Security Council (Res. 446, 2334), ICRC, EU, and UK—classifies Israeli settlements in occupied territory as unlawful.',
      'Area C (60% of the West Bank) remains under full Israeli military and civil control, where Palestinian building permits are approved in <2% of cases while settlement infrastructure expands.',
      'Checkpoints, bypass roads, the Separation Barrier (85% routed inside the West Bank rather than on the Green Line), and settler violence restrict Palestinian freedom of movement and economic life.'
    ],
    references: [
      'Fourth Geneva Convention Art. 49(6) (1949)',
      'UNSC Resolution 2334 (Dec 23, 2016)',
      'ICJ Advisory Opinion on Legal Consequences of Policies in the OPT (July 19, 2024)'
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
    details: [
      'The International Committee of the Red Cross (ICRC) commentary clarifies Art. 49(6) prevents an occupying power from colonizing occupied land to alter its demographic character and create irreversible facts on the ground.',
      'Even Israeli government legal adviser Theodor Meron warned Prime Minister Levi Eshkol in a top-secret September 1967 memo that civilian settlement in administered territories contravened the Fourth Geneva Convention.',
      'In July 2024, the ICJ concluded that Israel’s continued presence in the Occupied Palestinian Territory had become unlawful de facto annexation through permanent settlement integration.'
    ],
    references: [
      'Theodor Meron Legal Memorandum to PM Eshkol (Sept 14, 1967)',
      'ICRC Commentary on GCIV Art. 49(6)',
      'ICJ Advisory Opinion (July 2024)'
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
    details: [
      'Critics—including Israeli NGOs (B’Tselem, Yesh Din) and international human rights groups (HRW, Amnesty)—argue that an indefinite two-tier legal system based on national identity violates international norms against systemic domination.',
      'Over 140 official settlements and 190+ unauthorized outposts bisect the north-south axis between Nablus, Ramallah, Bethlehem, and Hebron.',
      'Escalating settler violence and pastoral displacement in Area C hills have shrunk Palestinian grazing and agricultural access.'
    ],
    references: [
      'Association for Civil Rights in Israel (ACRI), One Rule, Two Legal Systems (2014)',
      'UN OCHA West Bank Movement and Access Reports'
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
    details: [
      'Inside sovereign Israel, 2.1 million Arab citizens hold equal voting rights, serve on the Supreme Court, in the Knesset, and as hospital directors—contradicting racial apartheid analogies.',
      'Under international law of belligerent occupation (Hague Reg. Art. 43), an occupying military cannot unilaterally impose its domestic civil law on non-citizen occupied inhabitants without illegally annexing the territory.',
      'Security checkpoints and the West Bank barrier were erected primarily during the Second Intifada (2000–2005), reducing suicide bombing fatalities inside Israel by over 90%.'
    ],
    references: [
      'Israeli-Palestinian Interim Agreement on the West Bank and the Gaza Strip (Oslo II, 1995)',
      'Israel High Court of Justice — Beit Sourik Village Council Ruling (2004)'
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
    details: [
      'The 1949 "Green Line" was explicitly defined in the Israeli-Jordanian Armistice Agreement (Art. VI.9) as a military armistice line dictated solely by military considerations and "not to be construed as a political or territorial boundary."',
      'Drafters of UNSC Resolution 242 (Lord Caradon, Eugene Rostow) intentionally wrote withdrawal "from territories occupied" (omitting "the" or "all") paired with the right to live within "secure and recognized boundaries."',
      'Under the League of Nations Mandate (Art. 6), close Jewish settlement was encouraged across western Palestine prior to Jordan’s 1948 expulsion of Jewish communities from Gush Etzion and Hebron.'
    ],
    references: [
      '1949 Israel–Jordan General Armistice Agreement Art. II & VI',
      'UNSC Resolution 242 Drafting History — Lord Caradon & Eugene Rostow Statements',
      'Levy Commission Report on the Legal Status of Building in Judea and Samaria (2012)'
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
    details: [
      'The equally authentic French text of Resolution 242 reads "retrait des forces armées israéliennes des territoires occupés" ("from the territories occupied").',
      'Lack of recognized Jordanian sovereignty does not turn the West Bank into terra nullius; sovereignty and self-determination rights vest in the resident Palestinian population, as affirmed by the ICJ.',
      'Even US administrations supporting minor border modifications consistently opposed unilateral settlement expansion deep inside the West Bank.'
    ],
    references: [
      'UNSC Resolution 242 Preamble & French Authentic Text (1967)',
      'ICJ Wall Advisory Opinion Para. 74–101 (2004)'
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
    details: [
      'The Samarian mountain ridge rises up to 3,000 feet directly above Israel’s flat coastal plain, giving line-of-sight range to cheap rockets, mortars, anti-aircraft missiles, and Oct 7-style ground raids.',
      'Control of the Jordan Valley (eastern perimeter) prevents heavy Iranian weapons smuggling from Iraq/Syria through Jordan into the West Bank.',
      'The 2005 unilateral withdrawal from Gaza—evacuating every soldier and all 21 settlements—was followed within two years by Hamas’s armed takeover and 18 years of rocket barrages, shattering Israeli public trust in "land for peace" without ironclad security control.'
    ],
    references: [
      'Gaza Disengagement Implementation (Aug–Sept 2005)',
      'INSS Strategic Assessments on Jordan Valley & Coastal Plain Vulnerability'
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
    details: [
      'Prior to October 7, 2023, large numbers of IDF battalions were diverted from the Gaza border to guard isolated West Bank settlements and outposts.',
      'Compact border blocs (~80% of settlers on ~4–5% of West Bank land) can be annexed via 1:1 land swaps in a negotiated treaty while demilitarizing a future Palestinian state and maintaining multi-year Jordan Valley early-warning arrangements.',
      'Unlike unilateral Gaza withdrawal (done without PA coordination or treaty), a bilateral settlement incorporates phased benchmarks, international monitors, and PA security cooperation.'
    ],
    references: [
      'Commanders for Israel’s Security (CIS) Policy Studies',
      'Clinton Parameters Security Arrangements (Dec 2000)'
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
    details: [
      'Oslo contained no explicit clause halting settlement construction; between 1993 and 2000, the West Bank and East Jerusalem settler population grew by over 100,000.',
      'The November 1995 assassination of Prime Minister Yitzhak Rabin by an Israeli extremist derailed momentum at a pivotal juncture.',
      'Palestinian movement between Gaza and the West Bank—treated as a "single territorial unit" in Oslo—was progressively severed through permit regimes.'
    ],
    references: [
      'Declaration of Principles (Oslo I, Sept 13, 1993)',
      'Seth Anziska, Preventing Palestine (2018)'
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
    details: [
      'Without third-party enforcement mechanisms, bilateral negotiations heavily favored the occupying state with military and economic leverage.',
      'The Paris Protocol (1994) bound the Palestinian economy into a customs union dependent on Israeli clearance revenue transfers.'
    ],
    references: [
      'Paris Protocol on Economic Relations (1994)',
      'World Bank Area C Economic Assessment (2013)'
    ],
    tags: ['Governance', 'Diplomacy'],
    era: '1994–Present'
  },
  {
    id: 'con-oslo-second-intifada',
    parentId: 'thesis-oslo-collapse',
    kind: 'con',
    title: 'Second Intifada Suicide Bombings Destroyed the Israeli Peace Camp',
    summary:
      'Israeli historians and US mediators argue Oslo collapsed primarily because Hamas and Palestinian Islamic Jihad bombed buses throughout the 1990s, culminating in the Second Intifada (2000–2005) launched right after Ehud Barak offered statehood at Camp David.',
    details: [
      'Over 1,000 Israelis—predominantly civilians in cafes, buses, Passover seders, and markets—were killed during the Second Intifada, convincing mainstream Israeli voters that territorial concessions had invited terrorism rather than peace.',
      'Arafat refused to dismantle militant factions or prepare Palestinian public opinion for historical compromise on refugees and Jerusalem.'
    ],
    references: [
      'Dennis Ross, The Missing Peace (2004)',
      'Mitchell Committee Fact-Finding Report (May 2001)'
    ],
    tags: ['Security', 'History', 'Diplomacy'],
    era: '1994–2005'
  }
];
