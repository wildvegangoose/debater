import { DebateNode } from '../../types/debate';

export const endgamesSolutionsNodes: DebateNode[] = [
  {
    id: 'pillar-endgames',
    parentId: 'root-ip',
    kind: 'pillar',
    title: 'Competing Endgames: Two States, One State, or Confederation',
    summary:
      'Compares the three primary constitutional horizons for resolving the conflict: Partition into Two Sovereign States, a Single Binational/Civic Democracy, or an Israeli–Palestinian Confederation.',
    details: [
      'Evaluates each endgame against the "trilemma" of the conflict: Jewish national self-determination, Palestinian national self-determination, democracy/equal rights, and physical security.',
      'Maps why each model commands passionate defenders alongside formidable political, demographic, and security objections.'
    ],
    references: [
      'Arab Peace Initiative (Beirut Summit, 2002)',
      'Geneva Initiative Model Permanent Status Treaty (2003)',
      'A Land for All — Two States, One Homeland Confederation Movement'
    ],
    tags: ['Diplomacy', 'Governance', 'Security', 'Demographics'],
    era: 'Future Horizons'
  },

  // THESIS 6A: Two-State Solution
  {
    id: 'thesis-two-state',
    parentId: 'pillar-endgames',
    kind: 'thesis',
    title: 'Two-State Solution (1967 Baseline With Land Swaps & Security Guarantees)',
    summary:
      'Establishing an independent, viable, demilitarized State of Palestine in Gaza and the West Bank (with 1:1 land swaps and shared Jerusalem) alongside Israel remains the only realistic path to fulfill both peoples’ national self-determination.',
    details: [
      'Resolves Israel’s existential "trilemma": without separation, Israel cannot indefinitely remain both a Jewish-majority homeland and a full democracy across a territory where Jews and Arabs are roughly equal in number (~7.2M each between river and sea).',
      'Supported by global diplomatic consensus and regional normalization incentives (2002 Arab Peace Initiative; Saudi–US regional security architecture discussions).',
      'Detailed parameters were already narrowed to small territorial gaps at Taba (2001) and Olmert–Abbas talks (2008: ~93.5–94% of West Bank + ~5.8% swap + safe passage corridor to Gaza).'
    ],
    references: [
      'Clinton Parameters (2000) & Taba Joint Statement (Jan 2001)',
      'Olmert Map & Annapolis Process (2007–2008)',
      'Arab Peace Initiative (2002)'
    ],
    tags: ['Diplomacy', 'Demographics', 'Governance'],
    era: 'Future Horizons',
    relatedIds: ['thesis-zionism-legitimacy', 'con-return-demographic-two-states']
  },
  {
    id: 'pro-two-state-blocs-feasible',
    parentId: 'thesis-two-state',
    kind: 'pro',
    title: '80% of West Bank Settlers Live in Small Border Blocs (~4–5% of Land)',
    summary:
      'Cartographic studies by the Geneva Initiative and Commanders for Israel’s Security show that roughly 75–80% of West Bank settlers reside in compact suburban blocs right next to the 1967 Green Line (Modi’in Illit, Beitar Illit, Gush Etzion, Ma’ale Adumim), allowing annexation via ~4–5% 1:1 land swaps.',
    details: [
      'Counters the claim that partition is physically impossible: >94% of the West Bank remains predominantly Palestinian-populated.',
      'Remaining isolated settlements (~100,000–130,000 residents) could be offered financial relocation incentives (modeled on Sinai 1982 / Gaza 2005) or optional residency under Palestinian sovereignty.',
      'Unlocks a US-led regional security alliance integrating Israel, a reformed Palestinian Authority, Saudi Arabia, UAE, Jordan, and Egypt against Iranian regional proxies.'
    ],
    references: [
      'Shaul Arieli, Messianism Meets Reality: Demographic & Geographic Feasibility of Two States',
      'Geneva Initiative Interactive Map of Land Swaps'
    ],
    tags: ['Diplomacy', 'Demographics'],
    era: 'Future Horizons'
  },
  {
    id: 'pro-two-state-regional-alliance',
    parentId: 'thesis-two-state',
    kind: 'pro',
    title: 'Unlocks Arab Normalization & Preserves Both Democratic National Identities',
    summary:
      'The 2002 Arab Peace Initiative and modern Saudi–US diplomatic frameworks offer Israel full peace, trade, and security integration with 22 Arab and Muslim nations once a credible pathway to Palestinian statehood is established.',
    details: [
      'Without two states, Israel faces an inescapable demographic choice between ceasing to be a Jewish-majority state or ceasing to be a democracy.',
      'International peacekeeping, demilitarization verification, and regional Arab investment create tangible incentives against militant resurgence.'
    ],
    references: [
      'Arab Peace Initiative (2002, Reaffirmed at Riyadh Summits 2023–2024)',
      'Munk Debate: Ehud Olmert & Tzipi Livni For the Two-State Motion (Dec 2025)',
      'CFR / Open to Debate: Dennis Ross & Mohammed Dajani Daoudi (July 2024)'
    ],
    tags: ['Diplomacy', 'Security', 'Demographics'],
    era: 'Future Horizons'
  },
  {
    id: 'pro-two-state-munk-isolation',
    parentId: 'thesis-two-state',
    kind: 'pro',
    title: 'Olmert & Livni (2025 Munk Debate): Rejecting Two States Risks Isolation & Binational Ruin',
    summary:
      'Former Israeli PM Ehud Olmert and FM Tzipi Livni argued on the December 2025 Munk Debate stage that abandoning a two-state horizon consigns Israel to pariah isolation, economic attrition, and an inevitable slide into a non-Jewish or non-democratic single state.',
    details: [
      'Emphasizes that supporting a demilitarized Palestinian state is a hard-headed Israeli national-security imperative—not an altruistic concession—to preserve Western alliances and domestic social cohesion.',
      'Echoed by diplomat Dennis Ross and Palestinian scholar Mohammed Dajani Daoudi (July 2024 CFR Debate): partition need not happen overnight, but preserving its territorial possibility prevents irreversible collapse.'
    ],
    references: [
      'Munk Debate: "Be it Resolved, It Is in Israel’s National Interest to Support a Two-State Solution" (Dec 3, 2025)',
      'Open to Debate / CFR: "Is the Two-State Solution Still Viable?" (July 2024)'
    ],
    tags: ['Diplomacy', 'Demographics', 'Security'],
    era: '2024–2026'
  },
  {
    id: 'con-two-state-settlements',
    parentId: 'thesis-two-state',
    kind: 'con',
    title: 'Entrenched Reality of 700,000+ Settlers Makes Evacuation Politically Impossible',
    summary:
      'Skeptics—including Ilan Pappé and Ghada Karmi at the June 2026 Oxford Union debate—argue that 700,000+ settlers and decades of infrastructure integration prove Israel never intended a sovereign Palestinian state, leaving only fragmented cantons.',
    details: [
      'Settlements such as Ariel, Kiryat Arba/Hebron, Kedumim, and Eli extend deep into the West Bank spine, backed by major highways, water grids, and cabinet representation.',
      'Evacuating 100,000+ interior settlers—12x the 2005 Gaza disengagement—is viewed as politically unthinkable across mainstream Israeli coalitions.'
    ],
    references: [
      'Ian Lustick, Paradigm Lost: From Two-State Solution to One-State Reality (2019)',
      'Oxford Union Debate: "Israel Never Truly Wanted Peace with Palestine" — Proposition Arguments (June 2026)'
    ],
    tags: ['Governance', 'Demographics'],
    era: '1993–Present',
    relatedIds: ['thesis-settlements-illegal']
  },
  {
    id: 'con-two-state-security',
    parentId: 'thesis-two-state',
    kind: 'con',
    title: 'Oren, Shaked & Wilf (2025 Munk / 2026 Oxford): Post-Oct 7 Security & Ideological Veto',
    summary:
      'Winning the Dec 2025 Munk Debate audience vote, Michael Oren and Ayelet Shaked—alongside Einat Wilf at the June 2026 Oxford Union—argued October 7 proved a West Bank Palestinian state would become an existential terror launchpad until Palestinian politics abandons the goal of undoing 1948.',
    details: [
      'Einat Wilf’s "War of Return" thesis argues peace failed in 1937, 1947, 2000, and 2008 not over 1967 settlement borders, but over persistent ideological refusal to accept sovereign Jewish statehood in *any* borders.',
      'Elliott Abrams and Oren contend that relinquishing IDF freedom of action in Judea and Samaria invites an Iranian-armed Hamas takeover overlooking Ben Gurion Airport and Tel Aviv.',
      'Points to post-Oct 7 PCPSR polling, PA governance weakness, and lack of elections since 2006 as evidence that statehood now would reward October 7.'
    ],
    references: [
      'Michael Oren & Ayelet Shaked — Winning Opposition Arguments, Munk Debate (Dec 2025)',
      'Einat Wilf — Opposition Speech, Oxford Union Debate (June 2026) & The War of Return (2020)',
      'Elliott Abrams & Fleur Hassan-Nahoum — CFR / Open to Debate (July 2024)'
    ],
    tags: ['Security', 'Governance', 'History'],
    era: '2020–2026',
    relatedIds: ['con-settlements-strategic-depth']
  },
  {
    id: 'con-rebuttal-camp-david-olmert-nuance',
    parentId: 'con-two-state-security',
    kind: 'con',
    title: '2000/2008 Talks Failed Over Concrete Sovereignty Gaps & Timing, Not Pure Rejectionism',
    summary:
      'Negotiators (including Israeli FM Shlomo Ben-Ami and US advisor Robert Malley) note Camp David (2000) had major territorial/Jerusalem gaps, Taba (Jan 2001) achieved breakthroughs cut short by elections, and Olmert’s Sept 2008 map came as he was resigning.',
    details: [
      'Shlomo Ben-Ami famously remarked that "if I were a Palestinian, I would have rejected Camp David as well," pointing to initial proposals splitting the West Bank and withholding East Jerusalem sovereignty.',
      'The PLO formally recognized Israel along 1967 lines in 1988 and 1993—ceding 78% of historic Mandate Palestine—and PA security forces have coordinated daily with the IDF against Hamas since 2007.'
    ],
    references: [
      'Shlomo Ben-Ami, Scars of War, Wounds of Peace (2006)',
      'Robert Malley & Hussein Agha, "Camp David: The Tragedy of Errors" (NYRB, 2001)',
      'Condoleezza Rice, No Higher Honor — Account of 2008 Annapolis/Olmert Talks (2011)'
    ],
    tags: ['Diplomacy', 'History'],
    era: '2000–2008'
  },

  // THESIS 6B: One Equal Democratic / Binational State
  {
    id: 'thesis-one-state',
    parentId: 'pillar-endgames',
    kind: 'thesis',
    title: 'One Equal Democratic or Binational State ("River to Sea" Civic Equality)',
    summary:
      'Since partition has failed and the entire land between the Jordan River and Mediterranean already operates under one sovereign power, the just solution is a single constitutional democracy guaranteeing equal individual and collective national rights to all inhabitants.',
    details: [
      'Eliminates the need to draw winding borders through Jerusalem, uproot hundreds of thousands of settlers, or bar Palestinian refugees from ancestral towns.',
      'Replaces ethno-national partition with one-person-one-vote civic equality, protected minority rights, bilingual institutions (Hebrew & Arabic), and constitutional power-sharing (consociationalism).',
      'Draws inspiration from post-apartheid South Africa’s transition and Good Friday Agreement power-sharing.'
    ],
    references: [
      'Edward Said, "The One-State Solution" (New York Times Magazine, 1999)',
      'Peter Beinart, "Yavne: A Jewish Case for Equality in Israel-Palestine" (2020)',
      'One Democratic State Campaign Platform'
    ],
    tags: ['Governance', 'Human Rights', 'Demographics'],
    era: 'Future Horizons'
  },
  {
    id: 'pro-one-state-de-facto-reality',
    parentId: 'thesis-one-state',
    kind: 'pro',
    title: 'Recognizes Existing Single-Regime Reality & Universal Equal Citizenship',
    summary:
      'One-state advocates argue there is no "two-state option" left to preserve: one government already controls borders, electromagnetic spectrum, currency, water aquifers, and population registries from the Jordan to the sea—making equal suffrage the only democratic remedy.',
    details: [
      'Avoids traumatic partition violence (which devastated India-Pakistan in 1947 and Mandate Palestine in 1948).',
      'Allows both peoples to maintain attachment to the entire land—Jews to Hebron and Shiloh, Palestinians to Haifa and Jaffa—within a single shared civic framework.'
    ],
    references: [
      'Michael Barnett et al. (eds.), The One State Reality (Cornell Univ. Press, 2023)'
    ],
    tags: ['Governance', 'Human Rights'],
    era: 'Future Horizons'
  },
  {
    id: 'pro-one-state-constitutional-safeguards',
    parentId: 'thesis-one-state',
    kind: 'pro',
    title: 'Binational Constitutional Vetoes Can Protect Both Collectives Against Domination',
    summary:
      'Constitutional designers propose a bicameral binational charter—modeled on Northern Ireland’s Good Friday Agreement and Belgium—requiring concurrent communal majorities on security, immigration, and cultural autonomy.',
    details: [
      'Addresses fears of majoritarian tyranny by guaranteeing neither Jews nor Palestinians can outvote the other on existential communal protections.',
      'Establishes joint truth-and-reconciliation commissions alongside Hebrew and Arabic cultural autonomous councils.'
    ],
    references: [
      'Belfast / Good Friday Agreement Consociational Framework (1998)',
      'Bashir Bashir & Rachel Busbridge — Binationalism and Egalitarian Coexistence Scholarship'
    ],
    tags: ['Governance', 'International Law', 'Human Rights'],
    era: 'Future Horizons'
  },
  {
    id: 'con-one-state-civil-war',
    parentId: 'thesis-one-state',
    kind: 'con',
    title: 'Deep Mutual Rejection & High Risk of Lebanese/Yugoslav Civil War',
    summary:
      'Political scientists and overwhelming majorities of both Israelis and Palestinians reject a unitary state, warning that forcing two traumatized, armed national groups with vast income disparities into one parliament is a recipe for sectarian civil war rather than liberal democracy.',
    details: [
      'Unlike South Africa—where a demographic majority sought integration into an unified economy and shared religious/cultural ties—Israelis and Palestinians possess distinct languages, religions, national movements, and memories of existential war.',
      'Comparative history of binational consociational states after ethnic conflict—Lebanon (1975–1990 civil war and Hezbollah state-within-a-state), Cyprus (1974 division), Yugoslavia (1990s wars), Mandate Palestine itself (1947)—demonstrates institutional paralysis and bloodshed.',
      'For Israelis, losing sovereign control over the IDF and borders after the Holocaust and October 7 represents an unacceptable existential gamble.'
    ],
    references: [
      'PCPSR – Tel Aviv University Joint Israeli-Palestinian Pulse Polls (2020–2024)',
      'Benny Morris, One State, Two States: Resolving the Israel/Palestine Conflict (2009)',
      'Arend Lijphart — Conditions & Breakdown Risks of Consociational Democracy'
    ],
    tags: ['Security', 'Governance', 'Demographics'],
    era: 'Future Horizons'
  },

  // THESIS 6C: Israeli-Palestinian Confederation
  {
    id: 'thesis-confederation',
    parentId: 'pillar-endgames',
    kind: 'thesis',
    title: 'Israeli–Palestinian Confederation ("Two Sovereign States, One Shared Homeland")',
    summary:
      'Proposes two independent, sovereign states (Israel and Palestine) along 1967 borders that pool specific functions—allowing peaceful Israeli settlers to reside in Palestine as permanent residents voting in Israel, and an agreed number of Palestinians to reside in Israel voting in Palestine.',
    details: [
      'Developed jointly by Israeli and Palestinian thinkers ("A Land for All" / "Two States, One Homeland") to solve the exact spoilers that broke classical partition without erasing national self-determination.',
      'Each nation keeps its own sovereign parliament, flag, passport, and demographic majority for national elections, while sharing an open Jerusalem capital district and joint environmental, water, economic, and security bodies.',
      'Decouples sovereign citizenship from physical residency, reducing the need for mass forced evacuations.'
    ],
    references: [
      'A Land for All (Eretz Lekulam / Bilad lil-Jami’) Joint Movement Blueprint',
      'Dahlia Scheindlin & Omer Zanany — Israeli-Palestinian Confederation Proposals (Century Foundation)'
    ],
    tags: ['Diplomacy', 'Governance', 'Human Rights'],
    era: 'Future Horizons'
  },
  {
    id: 'pro-confederation-solves-spoilers',
    parentId: 'thesis-confederation',
    kind: 'pro',
    title: 'Defuses Settler Evacuation & Symbolic Return Without Threatening Majorities',
    summary:
      'By separating citizenship (where you vote) from residency (where you live under local law), confederation preserves both a Jewish-majority Israel and an Arab-majority Palestine while honoring attachments across the 1967 line.',
    details: [
      'Settlers who refuse evacuation can choose either peaceful residency under Palestinian domestic law or relocation to Israel—neutralizing the domestic veto of mass forced evictions.',
      'Reflects geographic reality in a tiny territory (comparable in size to New Jersey) that shares a single mountain aquifer, epidemiological zone, and labor ecosystem.'
    ],
    references: [
      'Yossi Beilin & Hiba Husseini, The Holy Land Confederation Plan (2022)'
    ],
    tags: ['Diplomacy', 'Governance'],
    era: 'Future Horizons'
  },
  {
    id: 'con-confederation-trust-deficit',
    parentId: 'thesis-confederation',
    kind: 'con',
    title: 'Demands High Institutional Trust & Security Coordination Absent Today',
    summary:
      'Critics contend that open residency and porous borders require European Union–level trust, rule of law, and disarmament of militant factions—conditions utterly absent in the aftermath of October 7 and Gaza’s devastation.',
    details: [
      'Protecting Israeli minority residents living inside Palestinian towns (or vice versa) against spoilers and militias would create constant jurisdictional flashpoints.',
      'Most realists argue confederation could only evolve gradually decades *after* two separate, secure states first stabilize hard borders.'
    ],
    references: [
      'INSS Critiques of Premature Hybrid/Confederal Security Models'
    ],
    tags: ['Security', 'Governance'],
    era: 'Future Horizons'
  }
];
