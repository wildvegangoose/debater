import { DebateNode } from '../../types/debate';

export const refugeesReturnNodes: DebateNode[] = [
  {
    id: 'pillar-refugees-return',
    parentId: 'root-ip',
    kind: 'pillar',
    title: 'Refugees, Right of Return & Mutual Dispossession',
    summary:
      'Examines the legal, moral, demographic, and diplomatic claims surrounding ~5.9 million UNRWA-registered Palestinian refugees, UNGA Resolution 194, Mizrahi Jewish refugees from Arab lands, and compensation/resettlement frameworks.',
    details: [
      'One of the core "final status" issues alongside borders and Jerusalem, often responsible for deadlock in permanent-status summits (Camp David 2000, Taba 2001, Annapolis/Olmert 2008).',
      'Pits individual human rights to return and property restitution against Israel’s demographic survival as a Jewish-majority state and comparative 20th-century refugee precedents.'
    ],
    references: [
      'UNGA Resolution 194(III), Para. 11 (Dec 1948 — Non-Binding General Assembly Recommendation)',
      'Universal Declaration of Human Rights Art. 13(2) (1948)',
      'Taba Summit Non-Paper on Refugees & Clinton Parameters (2000–2001)'
    ],
    tags: ['Human Rights', 'International Law', 'Demographics'],
    era: '1948–Present'
  },

  // THESIS 4A: Palestinian Right of Return
  {
    id: 'thesis-right-of-return',
    parentId: 'pillar-refugees-return',
    kind: 'thesis',
    title: 'Palestinian Refugees Hold an Inalienable Right of Return & Restitution',
    summary:
      'Palestinian refugees displaced in 1948 and 1967—and their descendants—possess an individual legal and moral right under international law to choose return to their original homes inside Israel alongside full property restitution and compensation.',
    details: [
      'Proponents anchor this claim in UNGA Resolution 194 (a non-binding General Assembly recommendation reaffirmed annually by UNGA majorities, which advocates argue reflects customary law alongside UDHR Art. 13(2) and ICCPR Art. 12(4)).',
      'Highlights a sharp asymmetry: Israel’s 1950 Law of Return grants automatic citizenship to any Jew worldwide based on ancestral origin two millennia ago while barring Palestinians born in Jaffa, Acre, or Galilee—or their children—from returning.',
      'For millions of stateless Palestinians in camps in Lebanon, Syria, Gaza, and the West Bank, the right of return is the central pillar of historical justice and national identity.'
    ],
    references: [
      'UNGA Resolution 194(III) Para. 11 (1948 — Non-Binding UNGA Recommendation)',
      'International Covenant on Civil and Political Rights Art. 12(4) (1966)',
      'Susan Akram & Lex Takkenberg, Palestinian Refugees in International Law (2020)'
    ],
    tags: ['International Law', 'Human Rights', 'Demographics'],
    era: '1948–Present',
    relatedIds: ['thesis-palestinian-nakba']
  },
  {
    id: 'pro-return-property-individual',
    parentId: 'thesis-right-of-return',
    kind: 'pro',
    title: 'Individual Rights Cannot Be Bargained Away Without Refugee Consent',
    summary:
      'Human rights jurists argue that return and private property ownership are individual rights belonging to each displaced family—not merely collective bargaining chips—and that peace agreements in Bosnia (Dayton Annex 7) recognized refugee return after ethnic conflict.',
    details: [
      'UN Conciliation Commission for Palestine (UNCCP) land records meticulously cataloged hundreds of thousands of individual Palestinian land parcels transferred to Israel’s Custodian of Absentee Property.',
      'Even if many refugees practically choose financial compensation or residency in a Palestinian state once offered a real choice, moral and symbolic recognition of the right by Israel is viewed by Palestinian negotiators as indispensable for closure.',
      'Denying return strictly to preserve an ethno-religious demographic majority contravenes the International Convention on the Elimination of All Forms of Racial Discrimination (ICERD Art. 5).'
    ],
    references: [
      'UNCCP Refugee Property Identification Records (1951–1964)',
      'Dayton Peace Agreement Annex 7 Precedent (1995)'
    ],
    tags: ['International Law', 'Human Rights'],
    era: '1948–Present'
  },
  {
    id: 'con-return-demographic-two-states',
    parentId: 'thesis-right-of-return',
    kind: 'con',
    title: 'Mass Return Inside Israel Ends Jewish Self-Determination ("Two Arab States")',
    summary:
      'Across the Israeli political spectrum—including peace-camp advocates of a Palestinian state (e.g., Amos Oz, Yossi Beilin)—admitting millions of Palestinian descendants inside pre-1967 Israel is rejected as a formula to abolish Israel by demographic means rather than achieve two states for two peoples.',
    details: [
      'With ~7.2 million Jewish citizens and ~2.1 million Arab citizens inside Israel today, an influx of millions of UNRWA-registered Palestinians would turn Jews into a minority, creating two Palestinian-majority states and zero Jewish-majority states.',
      'UNGA Resolution 194 is a non-binding General Assembly recommendation (not a Chapter VII Security Council mandate), explicitly conditioned return on refugees "wishing to live at peace with their neighbours," and was voted against by every Arab League member in December 1948.',
      'Post-WWII international precedents—12 million ethnic Germans from Eastern Europe, 14 million Hindus and Muslims in the 1947 India–Pakistan Partition, Greeks and Turks in 1923—resolved violent partitions through permanent resettlement and integration in co-national states, not multi-generational return across hostile borders.'
    ],
    references: [
      'Ruth Lapidoth, "Legal Aspects of the Palestinian Refugee Question" (2002)',
      'Amos Oz, How to Cure a Fanatic — Two-State Logic on Return (2006)',
      'Clinton Parameters Formula on Return to the Homeland/State of Palestine (2000)'
    ],
    tags: ['Demographics', 'International Law', 'Diplomacy'],
    era: '1948–Present',
    relatedIds: ['thesis-two-state']
  },
  {
    id: 'con-return-unrwa-hereditary',
    parentId: 'thesis-right-of-return',
    kind: 'con',
    title: 'UNRWA’s Multi-Generational Definition Perpetuates Statelessness',
    summary:
      'Critics argue UNRWA uniquely transmits patrilineal refugee status indefinitely across 4th and 5th generations—expanding ~700,000 original 1948 refugees (~30,000 still living) to 5.9 million registrants, including over 2 million who already hold full Jordanian citizenship.',
    details: [
      'Whereas UNHCR’s global mandate actively pursues local integration or third-country resettlement when return is blocked, Arab host states (notably Lebanon and Syria) barred Palestinians from citizenship and dozens of professions to keep the conflict open.',
      'Critics also point to watchdog findings (UN Watch, IMPACT-se) documenting textbook incitement, UNRWA teachers celebrating Oct 7, and Hamas tunnel infrastructure beneath UNRWA facilities.',
      'Pragmatic peace plans (Clinton Parameters, Geneva Initiative, Olmert 2008 offer) proposed fulfilling "return" primarily into the sovereign State of Palestine, backed by a $30B+ international compensation fund and symbolic humanitarian admission (~5,000–25,000 over several years) into Israel.'
    ],
    references: [
      'Clinton Parameters on Refugees (Dec 23, 2000) & Olmert–Abbas Proposal (Sept 2008)',
      'IMPACT-se & UN Watch Audits of UNRWA Neutrality & Curriculum (2023–2024)',
      'Colonna Independent Review of UNRWA Neutrality (April 2024)'
    ],
    tags: ['Governance', 'Diplomacy', 'Demographics', 'Media & Education'],
    era: '1950–Present'
  },
  {
    id: 'con-rebuttal-unhcr-descendants',
    parentId: 'con-return-unrwa-hereditary',
    kind: 'con',
    title: 'UNHCR Also Registers Descendants in Protracted Unresolved Crises',
    summary:
      'UNHCR and international refugee scholars clarify that derivative refugee status for children born in exile is standard UNHCR practice in protracted conflicts (e.g., Afghans in Pakistan, Somalis in Kenya) whenever no durable political solution has been reached.',
    details: [
      'Refugees remain refugees not because of UNRWA’s existence, but because Israel barred return and no sovereign Palestinian state has been established to offer citizenship.',
      'UNRWA provides essential primary schooling, vaccinations, and healthcare to millions of impoverished residents; dismantling it without a political settlement transfers governance burdens onto an unstable vacuum.'
    ],
    references: [
      'UNHCR Procedural Standards on Derivative Refugee Status',
      'Joint Statement by UN Agencies on Indispensability of UNRWA Operations (2024)'
    ],
    tags: ['Human Rights', 'International Law', 'Governance'],
    era: '1950–Present'
  },
  {
    id: 'con-return-mizrahi-exchange',
    parentId: 'thesis-right-of-return',
    kind: 'con',
    title: 'Parallel Dispossession of ~850,000 Jews From Arab Countries',
    summary:
      'Between 1948 and the early 1970s, roughly 850,000 indigenous Jews fled or were expelled from Iraq, Egypt, Yemen, Libya, Syria, and North Africa amid pogroms (e.g., 1941 Farhud, 1945 Tripoli, 1947 Aden), citizenship revocations, and vast asset seizures—integrated fully as citizens by Israel.',
    details: [
      'Ancient 2,500-year-old Jewish communities in Baghdad and Cairo virtually vanished within a generation, leaving behind homes, synagogues, businesses, and land exceeding the area of Israel itself.',
      'Proponents of a bilateral claims framework argue any comprehensive peace compensation mechanism (as envisioned in Camp David II / Clinton talks) must recognize both Palestinian refugees and Jewish refugees from Arab lands as an irreversible regional population exchange.'
    ],
    references: [
      'Lyn Julius, Uprooted: How 3,000 Years of Jewish Civilization in the Arab World Vanished Overnight (2018)',
      'US House Resolution 185 & Israeli Law on Compensation for Jewish Refugees from Arab Countries (2010)'
    ],
    tags: ['History', 'Human Rights', 'Diplomacy'],
    era: '1948–1970s',
    relatedIds: ['pro-zionism-existential-refuge']
  },
  {
    id: 'con-rebuttal-mizrahi-third-party',
    parentId: 'con-return-mizrahi-exchange',
    kind: 'con',
    title: 'Iraqi or Egyptian State Wrongs Cannot Cancel Palestinian Rights in Jaffa',
    summary:
      'Legal scholars respond that Mizrahi Jews hold legitimate restitution claims against the governments of Iraq, Egypt, Libya, and Syria—not against Palestinian villagers from Galilee or Jaffa who had no control over policies in Baghdad or Cairo.',
    details: [
      'International law does not permit extinguishing Individual Population A’s property rights because Third-Party State B mistreated Population C.',
      'Moreover, Zionist emissaries actively encouraged aliyah (immigration) from countries such as Morocco and Yemen alongside push factors of persecution, complicating a uniform "mutual exchange" narrative.'
    ],
    references: [
      'Michael Fischbach, Jewish Property Claims Against Arab Countries (2008)',
      'Avi Shlaim, Three Worlds: Memoirs of an Arab-Jew (2023)'
    ],
    tags: ['International Law', 'History'],
    era: '1948–Present'
  },

  // THESIS 4B: Civic Status of Palestinian/Arab Citizens Inside Israel
  {
    id: 'thesis-arab-citizens-israel',
    parentId: 'pillar-refugees-return',
    kind: 'thesis',
    title: 'Tension Between "Jewish and Democratic" Identity & Minority Civic Equality',
    summary:
      'Debates whether Israel successfully harmonizes its identity as the nation-state of the Jewish people with full civic and structural equality for its ~2.1 million Palestinian/Arab citizens (~21% of Israel’s citizenry).',
    details: [
      'Arab citizens inside pre-1967 Israel hold full voting rights, Knesset parties (including joining the 2021–2022 governing coalition via Ra’am), Arabic-language schools, and prominent roles in medicine, law, and academia.',
      'Critics point to the 2018 Basic Law: Israel as the Nation-State of the Jewish People, municipal budget/zoning disparities, and community admissions committees as enshrining constitutional hierarchy.'
    ],
    references: [
      'Israeli Declaration of Independence Equality Pledge (1948)',
      'Basic Law: Israel — The Nation-State of the Jewish People (2018)',
      'Or Commission Report on Clashes Between Security Forces and Israeli Citizens (2003)'
    ],
    tags: ['Governance', 'Human Rights', 'Demographics'],
    era: '1948–Present'
  },
  {
    id: 'pro-nation-state-european-norm',
    parentId: 'thesis-arab-citizens-israel',
    kind: 'pro',
    title: 'Comparable to Democratic European Nation-States Protecting Individual Rights',
    summary:
      'Israel’s Supreme Court (10–1 ruling in 2021) upheld the Nation-State Law as declaratory of national symbols—comparable to Greece, Ireland, Latvia, or Denmark—while affirming that Basic Law: Human Dignity and Liberty continues to protect full individual equality for all citizens.',
    details: [
      'Major multi-billion-shekel five-year government plans (Resolutions 922 and 550) dramatically expanded Arab-sector higher education enrollment, tech employment, and municipal funding.',
      'Druze, Bedouin, Christian, and Muslim citizens serve across state institutions, including Supreme Court Justice Khaled Kabub.'
    ],
    references: [
      'Israel High Court of Justice Ruling on the Nation-State Basic Law (July 2021)',
      'Alexander Yakobson & Amnon Rubinstein, Israel and the Family of Nations (2008)'
    ],
    tags: ['Governance', 'International Law'],
    era: '2018–Present'
  },
  {
    id: 'con-nation-state-exclusion',
    parentId: 'thesis-arab-citizens-israel',
    kind: 'con',
    title: '2018 Nation-State Law Omitted "Equality" & Downgraded Arabic’s Official Status',
    summary:
      'Arab citizens, Druze veterans, and constitutional scholars criticize the 2018 Basic Law for stating that national self-determination in Israel is "unique to the Jewish people," omitting any explicit constitutional right to equality, and declaring "Jewish settlement" a national value.',
    details: [
      'Over 70 unrecognized Bedouin villages in the Negev lack municipal recognition and basic utility connections, while virtually no new Arab towns have been established since 1948 compared to hundreds of Jewish communities.',
      'The 2003 Citizenship and Entry into Israel Law restricts family unification for Arab citizens who marry Palestinians from the West Bank or Gaza.'
    ],
    references: [
      'Adalah Legal Center Analysis of the 2018 Nation-State Basic Law',
      'Druze Community Petition to the High Court of Justice (2018)'
    ],
    tags: ['Human Rights', 'Governance'],
    era: '2003–Present'
  }
];
