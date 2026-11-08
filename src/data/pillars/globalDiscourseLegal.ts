import { DebateNode } from '../../types/debate';

export const globalDiscourseLegalNodes: DebateNode[] = [
  {
    id: 'pillar-global-discourse',
    parentId: 'root-ip',
    kind: 'pillar',
    title: 'Global Discourse, BDS, Antisemitism & Legal Labels',
    summary:
      'Examines fierce international debates over where criticism of Zionism crosses into antisemitism (IHRA vs. JDA), the Boycott, Divestment, Sanctions (BDS) movement, campus protests, and the "apartheid" legal classification.',
    details: [
      'Draws directly on landmark mainstage debates at Intelligence Squared U.S. (2020), the Oxford Union (2015 & 2024), the Munk Debates (June 2024), and major human-rights legal reports (2021–2024).',
      'Explores how competing moral vocabularies, international criminal law definitions, and free-speech norms shape global engagement with the conflict.'
    ],
    references: [
      'Munk Debate: "Be it Resolved, Anti-Zionism is Antisemitism" (June 2024)',
      'Oxford Union Debate on the BDS Movement (Nov 2015)',
      'IHRA Working Definition (2016) vs. Jerusalem Declaration on Antisemitism (2021)'
    ],
    tags: ['International Law', 'Human Rights', 'Religion & Culture', 'Governance'],
    era: '2011–Present'
  },

  // THESIS 8A: Anti-Zionism vs. Antisemitism
  {
    id: 'thesis-antizionism-antisemitism',
    parentId: 'pillar-global-discourse',
    kind: 'thesis',
    title: 'Anti-Zionism vs. Antisemitism: Double Standard or Protected Political Critique?',
    summary:
      'Tests the motion debated at IQ2 (2020) and the Munk Debates (2024): that opposing the existence of a Jewish nation-state (anti-Zionism)—as distinct from criticizing Israeli policies—constitutes a modern form of antisemitism.',
    details: [
      'Featured Bret Stephens, Einat Wilf, Douglas Murray, and Natasha Hausdorff arguing For vs. Peter Beinart, Yousef Munayyer, Mehdi Hasan, and Gideon Levy arguing Against.',
      'Centers on competing institutional standards: the International Holocaust Remembrance Alliance (IHRA) Working Definition versus the 2021 Jerusalem Declaration on Antisemitism (JDA).'
    ],
    references: [
      'Intelligence Squared U.S.: "Anti-Zionism Is the New Anti-Semitism" (Feb 2020)',
      'Munk Debate: Murray & Hausdorff vs. Hasan & Levy (June 17, 2024)',
      'IHRA Working Definition of Antisemitism (2016)'
    ],
    tags: ['Religion & Culture', 'Human Rights', 'Governance'],
    era: '2016–Present',
    relatedIds: ['thesis-zionism-legitimacy']
  },
  {
    id: 'pro-antizionism-unique-denial',
    parentId: 'thesis-antizionism-antisemitism',
    kind: 'pro',
    title: 'Singling Out Only Jews to Deny Self-Determination Applies a Discriminatory Standard',
    summary:
      'Proponents of the motion argue that while criticizing Israeli cabinets, settlements, or military conduct is completely legitimate, demanding the dismantling of the world’s only Jewish state denies Jews alone a right accorded to other peoples.',
    details: [
      'Applies Natan Sharansky’s "3Ds" test (Demonization, Double Standards, Delegitimization): critics do not campaign to abolish Pakistan, Turkey, or other states born amid violent 1940s partitions and population displacements.',
      'Approximately half the world’s Jewish population (~7.2 million) lives in Israel; abolishing Jewish sovereignty against their will would strip millions of Jews of physical security.',
      'Empirical monitoring post-Oct 2023 documented anti-Zionist slogans routinely spilling into attacks on diaspora synagogues, Jewish schools, and classic blood-libel/conspiracy tropes.'
    ],
    references: [
      'Douglas Murray & Natasha Hausdorff — Munk Debate Opening Arguments (June 2024)',
      'Einat Wilf & Bret Stephens — IQ2 Debate Arguments (2020)',
      'Natan Sharansky, "3D Test of Anti-Semitism" (2004)'
    ],
    tags: ['Religion & Culture', 'Human Rights'],
    era: '2016–Present'
  },
  {
    id: 'con-antizionism-political-ideology',
    parentId: 'thesis-antizionism-antisemitism',
    kind: 'con',
    title: 'Opposing Ethno-Nationalism Is a Political Position, Not Hatred of Jews',
    summary:
      'Opponents respond that Zionism is a late-19th-century political ideology—not identical to Judaism—and that Palestinians dispossessed in 1948 or advocates of an equal civic state oppose political exclusion regardless of the dominant group’s identity.',
    details: [
      'Mehdi Hasan and Yousef Munayyer emphasize that Palestinians would have resisted dispossession regardless of whether the state-builders were British, French, Christian, or Jewish.',
      'Substantial Jewish traditions—from pre-1948 Bundists and Reform universalists to contemporary Haredi communities and post-Zionist Jewish intellectuals—have rejected political Zionism from within Jewish ethics.',
      'Over 350 scholars signed the 2021 Jerusalem Declaration on Antisemitism (JDA), warning that codifying IHRA Israel-examples in universities and law weaponizes antisemitism charges to chill Palestinian speech.'
    ],
    references: [
      'Mehdi Hasan & Gideon Levy — Munk Debate Counter-Arguments (June 2024)',
      'Peter Beinart & Yousef Munayyer — IQ2 Debate Arguments (2020)',
      'The Jerusalem Declaration on Antisemitism (March 2021)'
    ],
    tags: ['Human Rights', 'Governance', 'Religion & Culture'],
    era: '2020–Present'
  },

  // THESIS 8B: BDS Movement, Academic Boycotts & Campus Divestment
  {
    id: 'thesis-bds-movement',
    parentId: 'pillar-global-discourse',
    kind: 'thesis',
    title: 'BDS Is a Legitimate Non-Violent Strategy to Enforce International Law',
    summary:
      'Launched by Palestinian civil society in 2005 and debated at the Oxford Union (2015) and on global campuses (2024), Boycott, Divestment, and Sanctions (BDS) seeks economic and institutional pressure until Israel ends occupation, ensures equality, and respects refugee rights.',
    details: [
      'Explicitly modeled on the international anti-apartheid boycott and divestment movement against white-minority South Africa in the 1980s.',
      'Became a central flashpoint on Western university campuses during the 2023–2025 Gaza war over endowment divestment from defense contractors and Israeli institutions.'
    ],
    references: [
      'Palestinian Civil Society Call for BDS (July 9, 2005)',
      'Oxford Union Debate: "This House Believes the BDS Movement Against Israel Is Wrong" (Nov 2015)',
      'Omar Barghouti, Boycott, Divestment, Sanctions (2011)'
    ],
    tags: ['Human Rights', 'International Law', 'Governance'],
    era: '2005–Present'
  },
  {
    id: 'pro-bds-peaceful-first-amendment',
    parentId: 'thesis-bds-movement',
    kind: 'pro',
    title: 'Peaceful Civil-Society Leverage & Protected Free Speech',
    summary:
      'Defenders argue that when Palestinians are criticized both for armed resistance and for diplomatic appeals at the UN/ICJ, condemning non-violent economic boycotts leaves occupied Palestinians with zero lawful avenues of leverage.',
    details: [
      'Civil liberties groups such as the ACLU oppose the 35+ U.S. state anti-BDS laws requiring government contractors to pledge not to boycott Israel, citing U.S. Supreme Court precedent (*NAACP v. Claiborne Hardware*, 1982) protecting political boycotts.',
      'Targeted divestment proposals focus on companies supplying military equipment or operating inside illegal West Bank settlements (e.g., UN OHCHR settlement business database).'
    ],
    references: [
      'Peter Tatchell — Oxford Union Opposition Speech Defending Peaceful Boycotts (2015)',
      'ACLU Constitutional Challenges to State Anti-BDS Laws'
    ],
    tags: ['Human Rights', 'Governance', 'International Law'],
    era: '2014–Present'
  },
  {
    id: 'con-bds-maximalist-delegitimization',
    parentId: 'thesis-bds-movement',
    kind: 'con',
    title: 'BDS Rejects Two States & Boycotts Peace Advocates Inside Pre-1967 Israel',
    summary:
      'Critics—spanning Alan Dershowitz at the 2015 Oxford Union to two-state leftists and even Norman Finkelstein—point out that BDS’s three demands omit two states and include full 1948 return, seeking to dissolve Israel rather than end the 1967 occupation.',
    details: [
      'BDS co-founder Omar Barghouti stated publicly: "Definitely, most definitely we oppose a Jewish state in any part of Palestine."',
      'Academic and cultural boycotts target Israeli universities, writers, and filmmakers—the exact domestic constituencies most supportive of Palestinian rights—while leaving militant or authoritarian states elsewhere untouched.',
      'Economic boycotts have also backfired on Palestinian workers, as when SodaStream relocated its Mishor Adumim plant in 2015, costing ~500 Palestinians high-paying jobs.'
    ],
    references: [
      'Alan Dershowitz — Winning Proposition Speech, Oxford Union BDS Debate (Nov 2015)',
      'Norman Finkelstein — Critique of BDS Movement’s Refusal to Endorse Israel Within 1967 Borders (2012)',
      'Cary Nelson, Dreams Deferred: A Concise Guide to the Israeli-Palestinian Conflict and the Movement to Boycott Israel (2016)'
    ],
    tags: ['Diplomacy', 'Governance'],
    era: '2012–Present'
  },

  // THESIS 8C: The "Apartheid" Legal Classification Debate
  {
    id: 'thesis-apartheid-framework',
    parentId: 'pillar-global-discourse',
    kind: 'thesis',
    title: 'Israeli Governance Meets the Legal Definition of "Apartheid" Under International Law',
    summary:
      'Major 2021–2022 reports by B’Tselem, Human Rights Watch, and Amnesty International—echoed in 2024 Oxford Union and literary debates—argue Israel maintains an institutionalized regime of systematic domination by one group over another.',
    details: [
      'Evaluated not by exact historical identity with South Africa’s "petty apartheid" (park benches), but by the universal treaty definition in the 1973 Apartheid Convention (Art. II) and 1998 Rome Statute (Art. 7(2)(h)).',
      'In July 2024, the ICJ found Israel’s policies in the Occupied Palestinian Territory breached Article 3 of ICERD ("racial segregation and apartheid"), though judges differed on whether the breach constituted apartheid vs. segregation.'
    ],
    references: [
      'B’Tselem, "A Regime of Jewish Supremacy from the Jordan River to the Mediterranean Sea" (Jan 2021)',
      'Human Rights Watch, A Threshold Crossed (April 2021) & Amnesty International Report (Feb 2022)',
      'Ta-Nehisi Coates, The Message (2024) & ICJ Advisory Opinion Para. 225–229 (July 2024)'
    ],
    tags: ['International Law', 'Human Rights', 'Governance'],
    era: '2021–Present',
    relatedIds: ['pro-settlements-dual-law', 'thesis-one-state']
  },
  {
    id: 'pro-apartheid-rome-statute-elements',
    parentId: 'thesis-apartheid-framework',
    kind: 'pro',
    title: 'Three Rome Statute Elements: Intent to Maintain Control, Oppression & Inhumane Acts',
    summary:
      'Legal authors of the HRW and Amnesty reports contend all three statutory elements are met in the OPT: demographic engineering to ensure permanent Jewish control, systematic fragmentation of Palestinians into enclaves, and indefinite denial of basic civil rights.',
    details: [
      'Points to five decades of military rule without an exit timeline, confiscation of West Bank land and water resources for exclusive settler municipalities, and restrictions barring Gaza/West Bank family unification.',
      'Former Mossad chief Tamir Pardo and former Attorney General Michael Ben-Yair publicly warned in 2022–2023 that indefinite West Bank rule had crossed into an apartheid state.'
    ],
    references: [
      'Rome Statute of the International Criminal Court Art. 7(2)(h) (1998)',
      'Tamir Pardo (Former Mossad Director) AP Interview on West Bank Governance (Sept 2023)'
    ],
    tags: ['International Law', 'Human Rights'],
    era: '2021–Present'
  },
  {
    id: 'con-apartheid-national-not-racial',
    parentId: 'thesis-apartheid-framework',
    kind: 'con',
    title: 'False Analogy: Arab Citizens Vote Inside Israel & West Bank Status Is National/Security-Based',
    summary:
      'South African jurist Richard Goldstone, Arab-Israeli Ra’am party leader Mansour Abbas, and international lawyers counter that Israel is a multi-ethnic democracy inside its borders and its West Bank military administration reflects unresolved national borders and security—not racial supremacy.',
    details: [
      'In February 2022, Mansour Abbas—head of the Arab Islamist Ra’am party in Israel’s governing coalition—explicitly stated: "I would not call Israel an apartheid state," pointing to Arab political participation, judges, doctors, and equal ballot rights.',
      'Under international law, belligerent occupation inherently distinguishes between citizens of the occupying state and non-citizen occupied residents pending a peace treaty—just as Allied occupation of Germany/Japan did without being "apartheid."',
      'ICJ Vice-President Judge Julia Sebutinde and several concurring ICJ judges emphasized the conflict is fundamentally territorial and security-driven between two national movements, warning misapplying "apartheid" criminalizes negotiated partition.'
    ],
    references: [
      'Richard Goldstone, "Israel and the Apartheid Slander" (New York Times, Oct 31, 2011)',
      'Mansour Abbas Address at Washington Institute Rejecting Apartheid Label (Feb 2022)',
      'Dissenting Opinion of Vice-President Julia Sebutinde, ICJ Advisory Opinion (July 2024)'
    ],
    tags: ['International Law', 'Governance', 'Security'],
    era: '2011–Present',
    relatedIds: ['con-dual-law-oslo-security']
  }
];
