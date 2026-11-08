import { DebateNode } from '../../types/debate';

export const educationMediaUnNodes: DebateNode[] = [
  {
    id: 'pillar-education-media-un',
    parentId: 'root-ip',
    kind: 'pillar',
    title: 'UNRWA Schools, Textbooks, Arabic Media & UN Institutional Bias',
    summary:
      'Examines fierce debates over UNRWA classrooms and Palestinian Authority textbooks (audited by IMPACT-se and UN Watch), primary Arabic-language media and "Pay-for-Slay" stipends (documented by MEMRI and PMW), and whether UN bodies act as neutral arbiters or politicized voting blocs.',
    details: [
      'Investigates ideological drivers of conflict often overlooked in purely territorial diplomacy: what children are taught in refugee schools, what leaders and clerics broadcast in Arabic versus English, and how financial incentives shape militancy.',
      'Directly interrogates the epistemic objectivity of United Nations resolutions, UNHRC standing mandates, and watchdog monitoring institutes.'
    ],
    references: [
      'UN Watch & IMPACT-se Joint Reports on UNRWA Schools & PA Textbooks (2021–2024)',
      'MEMRI (Middle East Media Research Institute) & Palestinian Media Watch (PMW) Primary Broadcast Archives',
      'Colonna Independent Review of UNRWA Neutrality (April 2024) & UNHRC Agenda Item 7 Record'
    ],
    tags: ['Media & Education', 'Governance', 'International Law', 'Security'],
    era: '1950–Present'
  },

  // THESIS 5A: UNRWA Schools, PA Textbooks & Hamas Infiltration
  {
    id: 'thesis-unrwa-schools-incitement',
    parentId: 'pillar-education-media-un',
    kind: 'thesis',
    title: 'UNRWA Schools, PA Textbooks & Hamas Infiltration Fuel Generational Conflict',
    summary:
      'Watchdog audits (IMPACT-se, UN Watch), European Parliament resolutions, and post-October 7 intelligence investigations contend that UNRWA schools and Palestinian Authority textbooks systematically teach children to erase Israel and glorify violent martyrdom, while Hamas deeply infiltrated UNRWA staff unions and facilities.',
    details: [
      'Joint audits by IMPACT-se and UN Watch ("UNRWA Education: Reform or Regression?", 2023) documented PA textbooks and UNRWA-produced study cards erasing Israel from maps, celebrating terrorists such as Dalal Mughrabi (perpetrator of the 1978 Coastal Road massacre of 38 civilians, including 13 children) as role models, and embedding violence into grammar and math exercises.',
      'From 2020 to 2024, the European Parliament passed repeated bipartisan resolutions condemning antisemitism and incitement to violence in EU-funded PA textbooks; in 2024, the U.S. Congress enacted a statutory ban on UNRWA funding and Israel’s Knesset legislated to bar UNRWA operations inside sovereign Israeli territory.'
    ],
    references: [
      'IMPACT-se & UN Watch Joint Report, UNRWA Education: Reform or Regression? (March 2023)',
      'European Parliament Budget Discharge Resolutions Condemning PA Textbook Hate Speech (2020–2024)',
      'U.S. Consolidated Appropriations Act UNRWA Funding Prohibition (March 2024) & Israeli Knesset UNRWA Laws (Oct 2024)'
    ],
    tags: ['Media & Education', 'Security', 'Governance'],
    era: '2000–Present',
    relatedIds: ['con-return-unrwa-hereditary']
  },
  {
    id: 'pro-unrwa-telegram-staff-tunnels',
    parentId: 'thesis-unrwa-schools-incitement',
    kind: 'pro',
    title: 'UN Watch Telegram Exposé, Oct 7 Staff Involvement & Hamas Subterranean Data Center',
    summary:
      'UN Watch exposed a 3,000-member Gaza UNRWA teachers’ Telegram group cheering the October 7 massacres in real time, while investigations confirmed UNRWA employees participated in Oct 7 abductions, Hamas commanders headed UNRWA teachers’ unions, and Hamas operated a military server hub directly beneath UNRWA’s Gaza HQ.',
    details: [
      'UN Watch’s January 2024 dossier ("UNRWA’s Terrorgram") documented UNRWA school principals and teachers celebrating the October 7 killings as "splendid," praising perpetrators as "heroes," and praying for the execution of Israeli hostages.',
      'In August 2024, the UN’s Office of Internal Oversight Services (OIOS) acknowledged that nine investigated UNRWA staffers "may have been involved" in the October 7 armed attacks and terminated them; in September 2024, Hamas officially confirmed that Fateh Sharif—head of UNRWA’s 39,000-student Lebanon teachers’ union—was Hamas’s commander in Lebanon.',
      'In February 2024, international journalists toured a reinforced Hamas military intelligence data center built 20 meters directly beneath UNRWA’s Gaza City headquarters in Rimal, wired into UNRWA’s electrical and telecom infrastructure.'
    ],
    references: [
      'UN Watch, "UNRWA’s Terrorgram: How a 3,000-Member UNRWA Teachers’ Group Celebrated Oct 7" (Jan 2024)',
      'Hillel Neuer Testimony Before the U.S. House Foreign Affairs Subcommittee (Jan 30, 2024)',
      'UN OIOS Investigation Update on UNRWA Personnel & Oct 7 (Aug 5, 2024)'
    ],
    tags: ['Security', 'Media & Education', 'Governance'],
    era: '2023–2025'
  },
  {
    id: 'pro-unrwa-pa-curriculum-rejectionism',
    parentId: 'thesis-unrwa-schools-incitement',
    kind: 'pro',
    title: 'Erasure of Peace Agreements & Glorification of "Shahada" Across STEM & Humanities',
    summary:
      'Longitudinal textbook reviews by IMPACT-se show incitement is not confined to history lessons: post-2016 PA curricula removed prior references to Oslo peace negotiations, labeled all pre-1967 Israeli cities (Tel Aviv, Haifa, Jaffa) as usurped Palestinian cities, and infused physics and elementary poetry with martyrdom themes.',
    details: [
      'Examples documented across Grades 1–12 include Newton’s Second Law taught via slingshot projectiles aimed at soldiers, 4th-grade math addition using numbers of "martyrs" from the Intifadas, and 5th-grade Arabic poems pledging "I will sacrifice my blood to saturate the generous land and remove the usurper."',
      'Analysts (including Einat Wilf and Marcus Sheff) warn that educating over 500,000 UNRWA pupils and 1.3 million PA pupils annually to view Israel’s very existence inside 1948 lines as illegitimate manufactures an ideological veto against any future two-state peace.'
    ],
    references: [
      'IMPACT-se Annual Reviews of the Palestinian Authority Curriculum (2019–2024)',
      'U.S. Government Accountability Office (GAO) Report on UNRWA Textbook Compliance (declassified 2019)'
    ],
    tags: ['Media & Education', 'History', 'Diplomacy'],
    era: '2016–Present',
    relatedIds: ['con-two-state-security']
  },
  {
    id: 'con-unrwa-colonna-host-curriculum',
    parentId: 'thesis-unrwa-schools-incitement',
    kind: 'con',
    title: 'Colonna Review, Host-Authority Curriculum Rules & Irreplaceable Humanitarian Role',
    summary:
      'Defenders of UNRWA cite the April 2024 independent Colonna Review (led by former French FM Catherine Colonna), emphasizing that UN policy requires refugee schools globally to teach accredited host-state curricula, alleged wrongdoers represent <0.1% of 30,000 staff, and defunding UNRWA mid-war collapses Gaza’s humanitarian lifeline.',
    details: [
      'Since the 1950s, UNESCO/UN refugee schools have taught host curricula (Jordanian, Lebanese, Syrian, PA) so refugee children can sit accredited national matriculation ("Tawjihi") exams and enter universities, while UNRWA asserts it trains teachers via a "Critical Thinking" framework to address biased passages.',
      'The 2021 EU-commissioned Georg Eckert Institute study confirmed deeply problematic antisemitic and violent examples in PA textbooks requiring removal, but also found large portions adhered to UNESCO standards and reflected students’ lived experience of military checkpoints and conflict.',
      'Colonna’s review noted UNRWA submitted full staff lists annually to Israel since 2011 without receiving security objections prior to 2024, while UNICEF, WHO, and WFP warned no other agency possesses UNRWA’s clinics, schools, and 13,000-person primary distribution network in Gaza.'
    ],
    references: [
      'Independent Review of Mechanisms and Procedures to Ensure Adherence by UNRWA to Neutrality (Colonna Report, April 2024)',
      'Georg Eckert Institute for International Textbook Research — Report on Palestinian Textbooks for the EU (June 2021)'
    ],
    tags: ['Human Rights', 'Governance', 'Media & Education'],
    era: '2021–Present'
  },
  {
    id: 'con-rebuttal-unrwa-alternatives',
    parentId: 'con-unrwa-colonna-host-curriculum',
    kind: 'con',
    title: 'UNHCR, WFP & Arab Textbook Reforms Prove Safe, De-Radicalized Alternatives Exist',
    summary:
      'Critics of the Colonna Report note its terms of reference barred investigating October 7 atrocities or Hamas tunnels, countering that global agencies (WFP, UNICEF, UNHCR) and local authorities handle food and schooling for 100+ million displaced people elsewhere without Hamas-controlled unions.',
    details: [
      'When UNRWA briefly suspended Lebanon union chief Fateh Sharif in early 2024 over political neutrality violations, UNRWA teachers’ unions staged crippling strikes forcing management retreats—demonstrating structural capture rather than isolated "bad apples."',
      'IMPACT-se’s partnerships with the UAE, Morocco, and gradually Saudi Arabia (2020–2024)—which removed antisemitic tropes and added peace/tolerance units to national textbooks—demonstrate that Arab curricula can preserve national identity while educating for coexistence.'
    ],
    references: [
      'IMPACT-se Assessments of UAE, Moroccan & Saudi Curriculum Reforms (2021–2024)',
      'Einat Wilf & Adi Schwartz, The War of Return — Institutional Critique of UNRWA (2020)'
    ],
    tags: ['Governance', 'Media & Education', 'Diplomacy'],
    era: '2020–Present'
  },

  // THESIS 5B: Arabic Media, Sermons, "Pay-for-Slay" & Watchdog Translations (MEMRI / PMW)
  {
    id: 'thesis-memri-pmw-media-payforslay',
    parentId: 'pillar-education-media-un',
    kind: 'thesis',
    title: 'Arabic Media Broadcasts, Clerical Incitement & PA "Pay-for-Slay" Stipends (MEMRI / PMW)',
    summary:
      'Primary-language media monitors—MEMRI (Middle East Media Research Institute) and Palestinian Media Watch (PMW)—argue that verbatim translations of Arabic/Farsi television, Friday sermons, children’s shows, and PA prisoner-salary laws expose ideological drivers of violence concealed from Western English-language diplomacy.',
    details: [
      'Documents a persistent "two-language gap": moderate diplomatic messaging directed at Western capitals and donors versus domestic Arabic broadcasts, municipal naming of town squares and summer camps after suicide bombers, and statutory financial rewards for attacks.',
      'Maintains searchable archives of thousands of subtitled primary television clips from Hamas’s Al-Aqsa TV, official PA TV, Hezbollah’s Al-Manar, Qatari Al Jazeera Arabic, and Iranian state media since 1996–1998.'
    ],
    references: [
      'Middle East Media Research Institute (MEMRI TV) Translated Broadcast Archives (1998–2026)',
      'Itamar Marcus & Nan Jacques Zilberdik, Deception: Betraying the Peace Process (Palestinian Media Watch, 2011)'
    ],
    tags: ['Media & Education', 'Security', 'Governance'],
    era: '1996–Present'
  },
  {
    id: 'pro-memri-broadcasts-childrens-tv',
    parentId: 'thesis-memri-pmw-media-payforslay',
    kind: 'pro',
    title: 'Unvarnished Primary Clips: Al-Aqsa TV Children’s Shows to Ghazi Hamad’s Oct 24 Vow',
    summary:
      'MEMRI and PMW translations alerted global audiences to Hamas’s Al-Aqsa TV children’s program "Tomorrow’s Pioneers" (using Mickey Mouse lookalike "Farfour" to preach martyrdom and Israel’s destruction) and Hamas official Ghazi Hamad’s Oct 24, 2023 LBC TV interview vowing to repeat October 7 "again and again" until Israel is "annihilated."',
    details: [
      'Verbatim subtitled sermons from official pulpits in Gaza, Doha, and Tehran frequently invoke theological eliminationism rather than 1967 border grievances—directly challenging Western academic models that reduce Islamist movements purely to secular territorial disputes.',
      'MEMRI’s Reform Project simultaneously translates Arab liberal dissidents, journalists, and anti-extremist clerics speaking in Arabic against Hamas, Muslim Brotherhood ideology, and IRGC hegemony.'
    ],
    references: [
      'MEMRI TV Clip #10585 — Hamas Official Ghazi Hamad on LBC TV (Oct 24, 2023)',
      'MEMRI & PMW Video Documentation of Al-Aqsa TV "Tomorrow’s Pioneers" (2007–2009)',
      'MEMRI Reform Project — Voices of Arab & Muslim Reformists Archive'
    ],
    tags: ['Media & Education', 'Security', 'Religion & Culture'],
    era: '2007–Present',
    relatedIds: ['thesis-gaza-self-defense']
  },
  {
    id: 'pro-pmw-pay-for-slay-taylor-force',
    parentId: 'thesis-memri-pmw-media-payforslay',
    kind: 'pro',
    title: 'PA "Martyrs’ Fund" & Prisoner Stipends Financially Reward Mass-Casualty Terrorism',
    summary:
      'Exposed in detail by PMW, Palestinian Authority statutory law (Amended Prisoners Law No. 19 of 2004 & PLO Martyrs’ Fund) pays lifetime monthly salaries scaled strictly by prison sentence length—meaning perpetrators of deadly bombings earn up to 12,000 NIS/month (~3–4x average West Bank civilian or teacher wages).',
    details: [
      'Consuming roughly 7–8% of the PA budget (~$300M+ annually), this statutory sliding scale led the U.S. Congress to pass the bipartisan Taylor Force Act (2018)—named after a U.S. Army veteran murdered in Jaffa—barring direct U.S. economic aid to the PA until terror-linked stipends end.',
      'Israel’s 2018 Deduction Law similarly withholds an equivalent sum shekel-for-shekel from PA clearance tax transfers, arguing no state can transfer funds directly subsidizing attacks on its citizens.'
    ],
    references: [
      'Palestinian Authority Amended Prisoners and Released Prisoners Law No. 19 (2004) & Cabinet Salary Regulations (2010)',
      'U.S. Taylor Force Act, Pub. L. 115-141 (March 23, 2018)',
      'Palestinian Media Watch (PMW) Dossiers on PA Prisoner & Martyr Payment Scales'
    ],
    tags: ['Governance', 'Security', 'Economics'],
    era: '2004–Present',
    relatedIds: ['con-paris-deductions-utilities-aml']
  },
  {
    id: 'con-memri-selection-bias-israeli-rhetoric',
    parentId: 'thesis-memri-pmw-media-payforslay',
    kind: 'con',
    title: 'Critiques of Selective Clip Curation, Prisoner-Welfare Context & Mutual Extremism',
    summary:
      'Media scholars and regional analysts (e.g., Brian Whitaker, Mona Baker) argue watchdog institutes founded by former Israeli officials selectively curate sensationalist clerics and fringe TV segments—distorting diverse Arab opinion while Palestinian/Israeli monitors point to unpunished extremist incitement on Israeli platforms.',
    details: [
      'Critics note that while individual MEMRI translations are generally accurate word-for-word, systematic *selection bias*—spotlighting extreme sermons while ignoring mundane civic broadcasts—fosters Western fatalism that all Arabs harbor unchanging hatred.',
      'Within Palestinian society, prisoner stipends have historically been viewed through the lens of ~800,000 Palestinians detained since 1967 under Israeli military courts (>99% conviction rate and widespread administrative detention without trial)—prompting 2024–2025 U.S.–PA negotiations to replace sentence-length scales with strictly needs-based social welfare audits.',
      'Israeli watchdogs (FakeReporter, Keshev) and ICJ submissions highlight parallel radicalization inside Hebrew media (e.g., Channel 14 calls to flatten Gaza, settler Telegram channels celebrating Huwara arson), arguing incitement scrutiny must apply equally to both societies.'
    ],
    references: [
      'Brian Whitaker, "Selective Memri" (The Guardian, Aug 2002) & Mona Baker, Translation and Conflict (2006)',
      'U.S.–PA Diplomatic Framework on Reforming Prisoner Stipends Into Needs-Based Welfare (2024–2025)'
    ],
    tags: ['Media & Education', 'Human Rights', 'Governance'],
    era: '2002–Present'
  },

  // THESIS 5C: Is the UN an Objective Arbiter or a Politicized Voting Bloc?
  {
    id: 'thesis-un-institutional-bias',
    parentId: 'pillar-education-media-un',
    kind: 'thesis',
    title: 'Is the UN an Objective Legal Arbiter or a Politicized Voting Bloc? (UN Watch Critique)',
    summary:
      'Challenges the widespread practice of citing United Nations General Assembly (UNGA) resolutions and UN Human Rights Council (UNHRC) reports as neutral "primary sources" of international law—contrasting UN Watch empirical voting data and structural asymmetries against arguments for global multilateral consensus.',
    details: [
      'Under UN Charter Articles 10–14, UN General Assembly resolutions (including Res. 181, Res. 194, and annual Palestine resolutions) are non-binding political recommendations—not international law—decided by simple majority vote among 193 states, where the 56-member Organization of Islamic Cooperation (OIC) and 120-member Non-Aligned Movement hold an automatic supermajority.',
      'Examines whether UN institutions apply universal human-rights standards or single out the world’s only Jewish state through permanent one-sided mandates.'
    ],
    references: [
      'UN Charter Articles 10–14 (Non-Binding Status of UNGA Recommendations) vs. Chapter VII (Binding UNSC Action)',
      'UN Watch Statistical Database of UNGA & UNHRC Resolutions (2006–2025)',
      'UN Secretary-General Ban Ki-moon Farewell Address to the Security Council (Dec 16, 2016)'
    ],
    tags: ['International Law', 'Diplomacy', 'Governance'],
    era: '1975–Present',
    relatedIds: ['thesis-diplomatic-recognition', 'con-gaza-march-of-return-2018']
  },
  {
    id: 'pro-un-watch-voting-item7-asymmetry',
    parentId: 'thesis-un-institutional-bias',
    kind: 'pro',
    title: ' ~15-to-6 Annual UNGA Condemnation Ratio, Permanent Agenda Item 7 & Dedicated Bureaus',
    summary:
      'UN Watch data demonstrates that each year from 2015 to 2025, the UN General Assembly adopted ~14–17 resolutions condemning Israel versus ~5–7 for the entire rest of the world combined (Iran, North Korea, Syria, Russia, China, Myanmar), while at the UNHRC Israel is the *only* country subjected to a permanent standing agenda item (Item 7).',
    details: [
      'Every other country on earth—including Sudan, North Korea, and Iran—is examined only under general UNHRC Agenda Item 4, whereas Agenda Item 7 mandates condemnation of Israel at every session in perpetuity, reinforced by an open-ended Commission of Inquiry (chaired by Navi Pillay) and Special Rapporteur Francesca Albanese (condemned by the U.S., France, and Germany in 2024 over antisemitic remarks).',
      'Inside the UN Secretariat, three permanent bodies—the Committee on the Exercise of the Inalienable Rights of the Palestinian People (CEIRPP), the Division for Palestinian Rights, and the Special Committee to Investigate Israeli Practices—are funded solely to campaign for one side, with zero equivalent for Kurds, Tibetans, Uyghurs, or Israeli terror victims (echoing the era of the 1975 "Zionism is Racism" UNGA Res. 3379, repealed in 1991).',
      'Both former UN Secretaries-General Kofi Annan (2006) and Ban Ki-moon (Dec 2016) publicly warned that the UN’s "disproportionate volume of resolutions, reports and conferences criticizing Israel" foiled its ability to fulfill its role effectively.'
    ],
    references: [
      'UN Watch Annual Report Cards on UNGA & UNHRC Voting Records (2015–2025)',
      'UNHRC Institutional Architecture: Standing Agenda Item 7 vs. Item 4 (2006–Present)',
      'Statements of UN Secretaries-General Kofi Annan (Dec 2006) & Ban Ki-moon (Dec 2016) on Disproportionate Focus'
    ],
    tags: ['International Law', 'Governance', 'Diplomacy'],
    era: '1975–Present'
  },
  {
    id: 'pro-un-authoritarian-judges-nonbinding',
    parentId: 'thesis-un-institutional-bias',
    kind: 'pro',
    title: 'Authoritarian Regimes Voting in Judgment & One-Sided ICJ Advisory Referrals',
    summary:
      'Legal critics point out that UNHRC fact-finding mandates and ICJ "advisory opinion" referrals originate from voting blocs regularly populated by severe human-rights violators (e.g., Iran chairing the 2023 UNHRC Social Forum; China, Cuba, Qatar, and Eritrea sitting on UNHRC), tainting downstream reports presented as "UN findings."',
    details: [
      'Unlike contentious interstate litigation requiring bilateral consent, the 2004 and 2024 ICJ West Bank cases were *advisory referrals* drafted by the UNGA majority to ask only about Israeli legal violations while omitting Oslo bilateral commitments and Palestinian armed attacks—a structural asymmetry highlighted in ICJ Vice-President Julia Sebutinde’s 2024 dissent.',
      'Treating politically negotiated UN resolutions or Special Rapporteur press releases as objective "primary sources" confuses diplomatic bloc voting with impartial judicial fact-finding.'
    ],
    references: [
      'Hillel Neuer (UN Watch) Interventions at the UN Human Rights Council & Congressional Briefings',
      'Dissenting Opinion of Vice-President Julia Sebutinde on One-Sided UNGA Referral Framing, ICJ (July 2024)'
    ],
    tags: ['International Law', 'Governance'],
    era: '2004–Present'
  },
  {
    id: 'con-un-veto-prolonged-occupation',
    parentId: 'thesis-un-institutional-bias',
    kind: 'con',
    title: 'High UNGA Volume Reflects 45+ U.S. Security Council Vetoes & a 57-Year Occupation',
    summary:
      'Defenders of UN multilateralism respond that General Assembly and UNHRC resolutions recur annually precisely because the United States has cast 45+ Security Council vetoes blocking binding enforcement—leaving non-binding UNGA votes as the world’s primary avenue to register opposition to an unresolved 57-year military occupation.',
    details: [
      'Core resolutions opposing West Bank settlement expansion or East Jerusalem annexation are not passed solely by authoritarian blocs: they routinely pass by 145–165 votes to ~7, supported by virtually every European liberal democracy, Japan, Canada, Australia, and New Zealand.',
      'Because the League of Nations Mandate (1922) and UN Partition Plan (1947) directly shaped Palestine’s legal status without completing decolonization into two sovereign states, the UN retains a unique historical trusteeship ("permanent responsibility") over the question of Palestine until resolved.',
      'Israel itself cites UN instruments when favorable—including UNGA Res. 181 in its 1948 Declaration of Independence, UN Charter Art. 51, the 2011 UN Palmer Report on the Gaza naval blockade, and the March 2024 UN Patten Report documenting Oct 7 sexual violence.'
    ],
    references: [
      'Security Council Report — Historical Record of U.S. Vetoes on Israel–Palestine (1972–2025)',
      'UNGA Voting Records Showing European & Democratic Supermajorities on 1967 Borders & Settlements'
    ],
    tags: ['International Law', 'Diplomacy', 'Human Rights'],
    era: '1947–Present',
    relatedIds: ['thesis-us-aid-conditioning']
  }
];
