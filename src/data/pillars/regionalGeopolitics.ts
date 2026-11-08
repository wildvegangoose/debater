import { DebateNode } from '../../types/debate';

export const regionalGeopoliticsNodes: DebateNode[] = [
  {
    id: 'pillar-regional-geopolitics',
    parentId: 'root-ip',
    kind: 'pillar',
    title: 'Regional Geopolitics, Abraham Accords, Iran & U.S. Policy',
    summary:
      'Examines whether Arab–Israeli normalization can precede Palestinian statehood ("Outside-In"), the role of Iran’s regional "Axis of Resistance," and debates over U.S. mediation and conditioning military aid.',
    details: [
      'Captures the major geopolitical debates of 2012–2026 across the Council on Foreign Relations (CFR), Intelligence Squared, U.S. Senate hearings, and Middle East strategic forums.',
      'Tests whether the Israeli–Palestinian conflict is primarily a local national dispute or an arena shaped by regional bloc competition and superpower patronage.'
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
    details: [
      'Reversed the decades-old Khartoum (1967) and Beirut (2002) sequence ("Inside-Out") that conditioned any Arab diplomatic recognition on first resolving every final-status Palestinian issue.',
      'Demonstrated resilient diplomatic architecture even through the post-2023 war, including regional trade corridors (IMEC) and coordinated air defense against Iranian missile barrages in April 2024.'
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
    details: [
      'Diplomatic embassies, trade, and security partnerships allow moderate Arab states (UAE, Egypt, Jordan, Morocco) to deliver humanitarian aid into Gaza and shape post-war reconstruction plans.',
      'Builds people-to-people, technological, water, and clean-energy interdependence across a historically polarized region.'
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
    details: [
      'Without addressing the statelessness of ~5 million Palestinians in Gaza and the West Bank, bilateral treaties between governments remain "cold peace" arrangements unpopular on the Arab street.',
      'Following 2023–2024, Saudi Arabia explicitly hardened its stance, declaring no diplomatic recognition of Israel would occur without an irreversible pathway to an independent Palestinian state.'
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
    details: [
      'Iran openly rejects any two-state compromise; Supreme Leader Khamenei and IRGC commanders frame Israel in *any* borders—including Tel Aviv and Haifa—as a "cancerous tumor" to be eliminated.',
      'Crucially, Hezbollah attacked from Lebanon (which Israel fully exited in 2000 along the UN-certified Blue Line) and Hamas attacked from Gaza (which Israel fully exited in 2005), demonstrating aggression detached from territorial occupation.'
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
    details: [
      'Captured Gaza intelligence documents and public IRGC funding estimates ($100M–$350M annually to Hamas/PIJ, ~$700M+ to Hezbollah) show sophisticated external weapons engineering, drone tech, and financial lifelines.',
      'Houthi attacks on global Red Sea shipping demonstrate how Tehran weaponizes the conflict for broader regional hegemony.'
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
    details: [
      'Prior to the 1979 Iranian Revolution—and for decades under secular Arab nationalism (PLO/Fatah)—the Israeli–Palestinian conflict already raged over land, refugees, and sovereignty.',
      'Empowering a sovereign, viable Palestinian state backed by Sunni Arab neighbors (Saudi Arabia, UAE, Jordan, Egypt) is argued to be the single most effective way to strip Tehran of its primary ideological wedge.'
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
    details: [
      'Debated prominently in Intelligence Squared U.S. ("Uncle Sam Should Butt Out," 2012) and intense 2023–2025 U.S. Senate debates over withholding offensive 2,000-lb munitions.',
      'Invokes U.S. domestic statutes—Foreign Assistance Act Sec. 620I (barring aid to countries restricting U.S. humanitarian delivery) and the Leahy Law—alongside Biden’s NSM-20 compliance framework.'
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
    details: [
      'Similarly, Ronald Reagan paused F-16 deliveries during the 1981–1982 Lebanon crisis and demanded an immediate halt to the shelling of West Beirut.',
      'Argues that verbal U.S. "red lines" paired with uninterrupted weapons shipments strip Washington of leverage while exposing the U.S. to global diplomatic isolation and legal complicity claims.'
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
    details: [
      'Joint U.S.–Israeli defense R&D (Iron Dome, David’s Sling, Arrow-3 missile defense, F-35 combat telemetry, counter-tunnel tech) directly benefits U.S. military readiness and intelligence.',
      'Historically, major Israeli peace concessions (Sinai 1979, Oslo 1993, Camp David 2000, Gaza 2005) occurred only when Israelis felt militarily secure and backed by Washington—whereas public arms embargoes trigger domestic rally-around-the-flag defiance.'
    ],
    references: [
      'U.S.–Israel 10-Year Memorandum of Understanding ($3.8B/yr, 2016–2028) & QME Statute',
      'Michael Oren & Dennis Ross — Strategic Arguments Against Public Aid Conditioning'
    ],
    tags: ['Security', 'Diplomacy'],
    era: '2012–Present'
  }
];
