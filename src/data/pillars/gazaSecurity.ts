import { DebateNode } from '../../types/debate';

export const gazaSecurityNodes: DebateNode[] = [
  {
    id: 'pillar-gaza-security',
    parentId: 'root-ip',
    kind: 'pillar',
    title: 'Gaza, Blockade, October 7 & Conduct of Warfare',
    summary:
      'Examines the 2005 disengagement, Hamas’s 2007 takeover and blockade, the October 7, 2023 massacre and hostage crisis, Israel’s military campaign in Gaza, and International Humanitarian Law (IHL) debates over proportionality and civilian harm.',
    details: [
      'Weighs sovereign right and duty of self-defense against a non-state armed actor embedded in dense urban terrain against obligations of distinction, proportionality, humanitarian relief, and prevention of mass civilian devastation.',
      'Addresses competing legal proceedings at the International Court of Justice (ICJ) and International Criminal Court (ICC), alongside strategic debates over whether military force can defeat Hamas without a political horizon.'
    ],
    references: [
      'UN Charter Article 51',
      'Additional Protocol I to the Geneva Conventions (Distinction & Proportionality)',
      'UN Palmer Report on the Gaza Blockade (2011)'
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
    details: [
      'On October 7, 2023, Hamas-led militants breached the border, murdered ~1,200 people (mostly civilians in border kibbutzim, towns, and the Nova music festival), committed widespread atrocities, and abducted 251 hostages into Gaza.',
      'Hamas’s 1988 Charter rejects Israel’s existence in any borders, and senior Hamas officials publicly pledged on television (e.g., Ghazi Hamad, Oct 24, 2023) to repeat October 7 "again and again."',
      'No sovereign state can leave a heavily armed force committed to its destruction governing an adjacent territory minutes from civilian towns.'
    ],
    references: [
      'UN Charter Art. 51 — Inherent Right of Self-Defense',
      'UN SRSG Pramila Patten Report on Conflict-Related Sexual Violence (March 2024)',
      'Hamas Covenant (1988) & 2017 Policy Document'
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
    details: [
      'Under Geneva Conventions (GCIV Art. 28; API Art. 51(7)), using civilian populations or protected sites (including hospitals used as command nodes or hostage holding sites) to shield military objectives is a war crime, and civilian sites lose absolute immunity when used for military purposes.',
      'Urban warfare specialists note the IDF implemented multi-layered precautions rarely seen in modern high-intensity urban combat (evacuation leaflets, millions of phone/SMS alerts, humanitarian corridors, localized tactical pauses for polio vaccination).',
      'High total casualties reflect an unprecedented subterranean battlefield where Hamas barred civilians from entering its tunnel shelters while storing munitions inside residential structures.'
    ],
    references: [
      'Geneva Convention IV Art. 19 & Art. 28',
      'John Spencer (Modern War Institute, West Point) Analysis of Urban Warfare in Gaza (2024)',
      'NATO StratCom Report on Hamas Use of Human Shields (2019)'
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
    details: [
      'In 2005 Israel signed the Agreement on Movement and Access (AMA) to facilitate Gaza trade, greenhouse agriculture, and crossings.',
      'The 2011 UN Secretary-General’s Palmer Commission concluded that Israel faced a "real security threat" from militant groups in Gaza and that the naval blockade was a lawful and legitimate security measure under international law.',
      'Dual-use restrictions aimed to stop Iranian long-range rockets, anti-tank missiles, and industrial concrete/steel diverted from civilian housing into military tunnels.'
    ],
    references: [
      'Agreement on Movement and Access (Nov 2005)',
      'Report of the UN Secretary-General’s Panel of Inquiry (Palmer Report, Sept 2011)'
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
    details: [
      'Satellite damage assessments by UNOSAT indicate over 60–66% of all structures in Gaza—including homes, universities, water plants, bakeries, and hospitals—were damaged or destroyed, displacing ~1.9 million people (~90% of the population) multiple times.',
      'Adversary violations (Hamas’s unlawful embedding) do not release an attacking army from independent obligations under API Art. 51(5)(b) and Art. 57 to refrain from strikes whose expected civilian harm is excessive relative to concrete, direct military advantage.',
      'Investigations scrutinized use of wide-area unguided or heavy 2,000-lb munitions in densely populated neighborhoods/tent zones, permissive collateral-damage thresholds, and strikes killing aid workers and journalists.'
    ],
    references: [
      'Additional Protocol I Art. 51(5)(b), 54, 57, 58 (Customary IHL)',
      'ICJ Provisional Measures Orders in South Africa v. Israel (Jan, March & May 2024)',
      'UNOSAT Gaza Strip Comprehensive Damage Assessments (2024)'
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
    details: [
      'IHL strictly prohibits starvation of civilians as a method of warfare and collective punishment of a civilian population for acts of armed militants (GCIV Art. 33).',
      'Humanitarian agencies (WFP, IPC, UNICEF, Médecins Sans Frontières) documented bureaucratic inspection bottlenecks, crossing closures (e.g., Rafah post-May 2024), and breakdown of civil order obstructing aid distribution.',
      'Statements by far-right coalition ministers advocating "voluntary migration" or resettlement of Gaza reinforced international fears of permanent displacement.'
    ],
    references: [
      'Geneva Convention IV Art. 33 & Art. 55',
      'ICC Prosecutor Applications for Arrest Warrants (May 2024) — Hamas & Israeli Leaders',
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
    details: [
      'Former ICJ President Judge Joan Donoghue clarified publicly (BBC HARDtalk, April 2024) that the Court’s January 2024 interim order held Palestinians had a "plausible right to be protected," NOT that the claim of genocide itself was proven plausible.',
      'Aid distribution failures inside Gaza stemmed heavily from armed Hamas units and criminal gangs hijacking trucks, UN logistical capacity limits inside combat zones, and Hamas rocket attacks against the Kerem Shalom aid crossing itself.',
      'Statements quoted by South Africa were either directed specifically at Hamas fighters in the shock of Oct 7 or uttered by ministers excluded from the operational War Cabinet.'
    ],
    references: [
      'Israel Legal Submissions to the ICJ (Jan 2024)',
      'Judge Joan Donoghue Interview, BBC HARDtalk (April 25, 2024)',
      'COGAT Humanitarian Aid Data Dashboard'
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
    details: [
      'Even the 2011 Palmer Report criticized aspects of the land crossing closures as unsustainable and penalizing ordinary civilians.',
      'Allowing Qatari cash suitcases into Gaza between 2018 and 2023 under a strategy of "managing the conflict" and keeping Gaza politically separated from the West Bank Palestinian Authority failed catastrophically on October 7.',
      'Purely military containment without a credible Palestinian governance partner ("Day After" political framework) risks endless insurgency.'
    ],
    references: [
      'World Bank & UNCTAD Economic Costs of the Gaza Closure Reports',
      'Israeli State Critique of Pre-Oct 7 "Conceptzia" (Containment Doctrine)'
    ],
    tags: ['Human Rights', 'Governance', 'Security'],
    era: '2007–Present'
  },

  // THESIS 3B: Hostage-Ceasefire Priority & "Day After" Governance
  {
    id: 'thesis-gaza-day-after',
    parentId: 'pillar-gaza-security',
    kind: 'thesis',
    title: 'Lasting Gaza Security Requires a Negotiated Ceasefire & Reformed Palestinian Rule',
    summary:
      'Strategic realists, hostage families, and international mediators argue Hamas cannot be eradicated as an idea by force alone; securing hostages and preventing endless insurgency requires a ceasefire paired with an Arab-backed Palestinian governance transition.',
    details: [
      'Former IDF chiefs of staff and defense ministers emphasized that tactical military gains erode rapidly into guerrilla resurgence unless a legitimate non-Hamas Palestinian civilian authority replaces Hamas rule.',
      'Arab partners (UAE, Saudi Arabia, Egypt, Jordan) condition reconstruction funding and peacekeeping support on linking Gaza’s recovery with a credible political pathway for a reformed Palestinian Authority.'
    ],
    references: [
      'UNSC Resolution 2735 — Three-Phase Ceasefire & Reconstruction Framework (June 2024)',
      'Israeli Defense Establishment "Day After" Strategic Briefings (2024)'
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
    details: [
      'Every hostage freed alive in large numbers was released through negotiated pauses rather than high-risk urban assaults, which also endanger captives.',
      'Reuniting Gaza and West Bank administration under a technocratic, audited Palestinian cabinet restores an accountable partner.'
    ],
    references: [
      'US & Regional Mediator Proposals on Revitalized PA Technocratic Governance (2024)'
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
    details: [
      'Points to the 2011 Gilad Shalit exchange—trading 1,027 prisoners (including Oct 7 mastermind Yahya Sinwar) for one soldier—as a cautionary precedent whose strategic cost later proved catastrophic.',
      'Argues the Palestinian Authority lacked the strength to hold Gaza in 2007 and cannot suppress surviving Hamas fighters without overriding IDF security freedom of action.'
    ],
    references: [
      'Shamgar Commission Report on Prisoner Exchange Principles (Israel, 2012)'
    ],
    tags: ['Security'],
    era: '2011–Present'
  }
];
