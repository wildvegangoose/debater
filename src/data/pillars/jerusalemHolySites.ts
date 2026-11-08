import { DebateNode } from '../../types/debate';

export const jerusalemHolySitesNodes: DebateNode[] = [
  {
    id: 'pillar-jerusalem',
    parentId: 'root-ip',
    kind: 'pillar',
    title: 'Status of Jerusalem & Sacred Sites',
    summary:
      'Examines competing claims to Jerusalem—undivided Israeli sovereignty versus shared dual capitals (West Jerusalem & Arab East Jerusalem)—and custodianship over the Temple Mount / Haram al-Sharif.',
    details: [
      'Jerusalem sits at the spiritual and national core of both identities: Judaism’s holiest city and ancient capital for 3,000 years, Islam’s third holiest sanctuary (Al-Aqsa / Haram al-Sharif), central to Christian heritage, and home to ~980,000 residents (~61% Jewish, ~39% Palestinian).',
      'Tests whether urban sovereignty can be shared along demographic neighborhoods with special international/custodial regimes for the 0.9-sq-km Old City.'
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
    details: [
      'Roughly 370,000+ Palestinians live in East Jerusalem—comprising ~39% of the city’s population—mostly holding revocable "permanent residency" rather than Israeli citizenship.',
      'Without East Jerusalem’s economic, cultural, healthcare, and religious hub, a West Bank Palestinian state is severed down the middle between Ramallah and Bethlehem.',
      'Under UNSC Resolution 478 (1980) and 2334 (2016), international law does not recognize Israel’s unilateral 1980 Basic Law annexing East Jerusalem.'
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
    details: [
      'Over 14,500 East Jerusalem Palestinians have had their Jerusalem residency revoked since 1967 under "center of life" policies, while municipal master plans zone only ~13–15% of East Jerusalem land for Palestinian residential construction.',
      'Neighborhoods beyond the Separation Barrier (e.g., Kafr Aqab, Shuafat Refugee Camp) pay Jerusalem municipal taxes while receiving minimal police, sanitation, or infrastructure services.',
      'Flashpoints in Sheikh Jarrah and Silwan—where Israeli law allows pre-1948 Jewish property owners to reclaim East Jerusalem properties while barring Palestinians from reclaiming pre-1948 West Jerusalem properties—repeatedly ignite wider conflict (as in May 2021).'
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
    details: [
      'Under the Clinton Parameters formula ("Arab neighborhoods become Palestinian, Jewish neighborhoods become Israeli"), over 95% of residents remain under their own national government.',
      'Modern special-regime policing and electronic transit corridors (modeled by Track-II Jerusalem think tanks) enable seamless tourism and pilgrimage across an open Holy Basin.'
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
    details: [
      'Immediately after capturing the Old City in June 1967, Moshe Dayan preserved the historic Status Quo: leaving daily administration of the Temple Mount/Haram al-Sharif compound in the hands of the Islamic Waqf while opening the Western Wall and safeguarding Christian churches.',
      'Physically re-dividing a densely interwoven metropolis where Jewish and Arab neighborhoods sit meters apart would require walls, checkpoints, or unstable dual policing in the most volatile square kilometer on earth.',
      'At Camp David (2000), Yasser Arafat denied the historical existence of the Jewish Temples in Jerusalem altogether, deepening Israeli conviction that relinquishing sovereignty over the Temple Mount/Old City would endanger Jewish heritage and access.'
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
    details: [
      'Shin Bet directors have repeatedly cautioned Israeli cabinets that perceived threats to Al-Aqsa act as the single most potent catalyst unifying West Bank, Gaza, East Jerusalem, and regional actors.',
      'Ehud Olmert’s 2008 proposal—placing the Old City Holy Basin under an international trusteeship (Israel, Palestine, Jordan, Saudi Arabia, US) with no single exclusive flag—offers a mechanism to guarantee all three faiths’ access without re-building concrete walls.'
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
    details: [
      'UNGA Resolution 67/19 (Nov 2012) upgraded Palestine to a "non-member observer state," unlocking Palestinian accession to international treaties and the International Criminal Court (ICC) in 2015.',
      'By 2024–2025, over 145 UN member states (including Spain, Ireland, Norway, and Slovenia) recognized the State of Palestine, while the US recognized Jerusalem as Israel’s capital in 2017.'
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
    details: [
      'Affirming sovereign parity keeps the two-state legal baseline alive internationally while facts on the ground erode it.',
      'Simultaneously, defenders of the 2017 US Jerusalem Embassy move noted West Jerusalem has been Israel’s factual seat of government since 1949 and final boundaries remained open to negotiation.'
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
    details: [
      'Following 2024 European recognitions of Palestine, Israel’s Knesset voted overwhelmingly against Palestinian statehood, arguing post-Oct 7 recognition rewarded Hamas terrorism.',
      'Similarly, the 2017 US Jerusalem move led the PA to boycott Washington’s mediation for years—illustrating how symbolic unilateralism alienates parties needed at the table.'
    ],
    references: [
      'Dore Gold & Aaron David Miller — IQ2 Opposition Arguments Against Unilateral UN Statehood (2011)',
      'Oslo II Art. XXXI(7) Clause Against Unilateral Status Changes'
    ],
    tags: ['Diplomacy', 'Governance'],
    era: '2011–2024'
  }
];
