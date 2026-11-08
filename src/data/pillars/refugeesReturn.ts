import { DebateNode } from '../../types/debate';

export const refugeesReturnNodes: DebateNode[] = [
  {
    id: 'pillar-refugees-return',
    parentId: 'root-ip',
    kind: 'pillar',
    title: 'Refugees, Right of Return & Mutual Dispossession',
    summary:
      'Examines the legal, moral, demographic, and diplomatic claims surrounding ~5.9 million UNRWA-registered Palestinian refugees, UNGA Resolution 194, Mizrahi Jewish refugees from Arab lands, and compensation/resettlement frameworks.',
    sections: [
      {
        heading: 'Origins of Dual Displacement & International Frameworks',
        paragraphs: [
          'The 1947–1949 war and its regional aftermath triggered two profound demographic transformations across the Middle East. Approximately **700,000 to 750,000 Palestinian Arabs** fled or were expelled from territory that became the State of Israel, registering with the newly created **United Nations Relief and Works Agency (UNRWA)** across Gaza, the West Bank, Jordan, Lebanon, and Syria. Over the subsequent two decades, roughly **850,000 indigenous Jews** departed or were driven from Arab and Muslim countries amid riots, denaturalization decrees, and property sequestrations, with the majority absorbed as citizens in Israel.',
          'International diplomacy initially addressed the Palestinian displacement through **UNGA Resolution 194(III)** in December 1948—a non-binding General Assembly recommendation whose legal meaning remains fiercely contested. Palestinian jurists read Paragraph 11 alongside the **Universal Declaration of Human Rights (Article 13)** and **ICCPR Article 12(4)** as codifying an individual right of return and restitution, whereas Israeli legal scholars emphasize its non-binding status, its explicit peaceful-coexistence proviso, and comparative mid-century precedents where post-partition populations were permanently resettled in co-national homelands.'
        ]
      },
      {
        heading: 'Final-Status Negotiations & Internal Civic Debates',
        paragraphs: [
          'At permanent-status summits including **Camp David (2000)**, **Taba (2001)**, and the **Olmert–Abbas talks (2008)**, negotiators sought formulas reconciling Palestinian historical redress with Israel’s survival as a Jewish-majority democracy. Proposals such as the **Clinton Parameters** and the **2003 Geneva Initiative** envisioned directing physical return primarily into a sovereign State of Palestine alongside a **$30 billion+ international compensation fund** and limited humanitarian admission inside Israel, yet final agreement repeatedly stalled over symbolic acknowledgment of historical responsibility and binding admission quotas.',
          'Parallel to the external refugee question sits an internal constitutional debate concerning the **~2.1 million Palestinian/Arab citizens of Israel**—descendants of the roughly **156,000 Arabs** who remained inside the 1949 Armistice lines. Their civic status—combining full Knesset suffrage, governing coalition entry in 2021, and Supreme Court participation with persistent disputes over municipal land zoning and the **2018 Nation-State Basic Law**—tests whether a state constitutionally defined as Jewish can simultaneously deliver full structural equality.'
        ]
      }
    ],
    details: [
      'One of the core "final status" issues alongside borders and Jerusalem, repeatedly stalling permanent-status summits at Camp David (2000), Taba (2001), and Annapolis/Olmert (2008).',
      'Pits individual human rights claims to return and property restitution against Israel’s demographic survival as a Jewish-majority state and comparative 20th-century partition precedents.',
      'Encompasses ~5.9 million UNRWA-registered Palestinians across five fields of operation alongside historical claims of ~850,000 Mizrahi and Sephardi Jews displaced from Arab states.',
      'Links external refugee diplomacy to internal constitutional debates over the civic equality of Israel’s ~2.1 million Arab citizens (~21% of the population).'
    ],
    sources: [
      {
        title: 'UNGA Resolution 194(III): Palestine — Progress Report of the United Nations Mediator',
        url: 'https://undocs.org/A/RES/194(III)',
        publisher: 'United Nations General Assembly (Non-Binding Recommendation)',
        year: '1948',
        category: 'Primary Text / Treaty'
      },
      {
        title: 'Universal Declaration of Human Rights (Article 13)',
        url: 'https://avalon.law.yale.edu/20th_century/udhr.asp',
        publisher: 'Yale Law School Avalon Project',
        year: '1948',
        category: 'Primary Text / Treaty'
      },
      {
        title: 'Palestine Refugees: Overview & Registration Statistics',
        url: 'https://www.unrwa.org/palestine-refugees',
        publisher: 'UNRWA Official Portal',
        year: '2024',
        category: 'Court / Official Record'
      }
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
    sections: [
      {
        heading: 'Customary Law, Treaty Norms & Resolution 194',
        paragraphs: [
          'Legal scholars such as **Susan Akram**, **Lex Takkenberg**, and **John Quigley** argue that the right of displaced civilians to return to their homes after hostilities cease was already anchored in customary humanitarian law and the **1907 Hague Regulations** prior to 1948. While acknowledging that **UNGA Resolution 194(III)** is formally a non-binding General Assembly recommendation, proponents contend Paragraph 11 did not invent a novel privilege; rather, it restated binding norms subsequently codified in **Article 12(4) of the International Covenant on Civil and Political Rights (ICCPR)** ("No one shall be arbitrarily deprived of the right to enter his own country") and **Article 5 of ICERD**.',
          'Under established international law on state succession and nationality, advocates maintain that changes in sovereignty over former British Mandate territory could not lawfully denationalize habitual residents who fled active combat zones. By enacting the **1950 Absentee Property Law** and the **1952 Nationality Law**, Israel retroactively barred hundreds of thousands of native-born Palestinian inhabitants from re-entering their towns while granting immediate citizenship under the **1950 Law of Return** to Jewish immigrants worldwide—an asymmetry critics characterize as unlawful ethno-national exclusion.'
        ]
      },
      {
        heading: 'Statelessness, Camp Conditions & Historical Redress',
        paragraphs: [
          'Beyond doctrinal treaty debates, the right of return (**"Haqq al-Awda"**) forms the moral anchor of Palestinian collective memory across multi-generational refugee camps in **Lebanon**, **Syria**, **Jordan**, the **West Bank**, and the **Gaza Strip** (where roughly two-thirds of the **2.1 million population** descend from 1948 refugees). Particularly in Lebanon—where stateless Palestinians face severe statutory bars on real-estate ownership and dozens of licensed professions—the absence of return or citizenship leaves hundreds of thousands in permanent legal and economic limbo.',
          'Advocates emphasize that recognizing an individual right of choice does not mechanically dictate how every displaced family exercises it in practice. Empirical surveys such as **Khalil Shikaki’s PCPSR refugee polls** indicate that practical household choices depend heavily on political sovereignty, housing availability, and compensation packages, yet Palestinian negotiators insist that without formal Israeli acknowledgment of historical responsibility and legal entitlement, no permanent-status treaty can command popular legitimacy or bring historical closure.'
        ]
      }
    ],
    details: [
      'Proponents anchor this claim in UNGA Resolution 194 (a non-binding General Assembly recommendation reaffirmed annually by UNGA majorities, which advocates argue reflects customary law alongside UDHR Art. 13(2) and ICCPR Art. 12(4)).',
      'Highlights a sharp legal asymmetry: Israel’s 1950 Law of Return grants automatic citizenship to any Jew worldwide while barring Palestinians born in Jaffa, Haifa, or Galilee—and their descendants—from returning.',
      'Roughly two-thirds of Gaza’s 2.1 million residents and hundreds of thousands of stateless camp residents in Lebanon and Syria are 1948 refugees and their descendants.',
      'For Palestinian society across exile and the occupied territories, formal recognition of the right of return remains the central benchmark of historical justice.'
    ],
    sources: [
      {
        title: 'UNGA Resolution 194(III), Paragraph 11',
        url: 'https://undocs.org/A/RES/194(III)',
        publisher: 'United Nations General Assembly (Non-Binding Recommendation)',
        year: '1948',
        category: 'Primary Text / Treaty'
      },
      {
        title: 'International Covenant on Civil and Political Rights (Article 12)',
        url: 'https://www.ohchr.org/en/instruments-mechanisms/instruments/international-covenant-civil-and-political-rights',
        publisher: 'UN Office of the High Commissioner for Human Rights',
        year: '1966',
        category: 'Primary Text / Treaty'
      },
      {
        title: 'Palestinian Public Opinion & Refugee Preference Surveys',
        url: 'https://www.pcpsr.org/',
        publisher: 'Palestinian Center for Policy and Survey Research (PCPSR)',
        year: '2003–2024',
        category: 'Empirical / Economic Study'
      }
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
    sections: [
      {
        heading: 'Private Property Title & UNCCP Land Archives',
        paragraphs: [
          'International property law separates sovereign territorial control from private real-estate ownership: even when sovereignty changes hands, private title remains protected against uncompensated confiscation under **Article 46 of the 1907 Hague Regulations**. Between 1951 and 1964, the **UN Conciliation Commission for Palestine (UNCCP)** compiled British Mandate land-registry and tax records documenting **over 450,000 individual Palestinian property parcels** transferred to Israel’s **Custodian of Absentee Property**—records that historians **Michael Fischbach** and **Salman Abu Sitta** cite alongside the **2005 UN Pinheiro Principles** (a soft-law UN restitution standard) to prove individual valuation and restitution are administratively feasible.'
        ]
      },
      {
        heading: 'Modern Peace Treaty Precedents & Individual Agency',
        paragraphs: [
          'Human rights jurists contend that bilateral diplomats cannot extinguish vested individual human rights through state-to-state horse-trading without refugee consent. They point directly to **Annex 7 of the 1995 Dayton Peace Agreement** in Bosnia-Herzegovina—as well as post-conflict property commissions in **Kosovo**, **Guatemala**, and **South Africa**—where peace treaties explicitly guaranteed every displaced family’s individual right to reclaim pre-war homes after severe ethnic warfare. In Bosnia, many returnees ultimately sold restituted homes under **Commission for Real Property Claims** deeds and relocated voluntarily, demonstrating how legal recognition restores dignity and unlocks capital for rebuilding.'
        ]
      }
    ],
    details: [
      'UN Conciliation Commission for Palestine (UNCCP) land records meticulously cataloged over 450,000 individual Palestinian land parcels transferred to Israel’s Custodian of Absentee Property.',
      'Annex 7 of the 1995 Dayton Peace Agreement affirmed individual refugee return and property restitution in Bosnia even after severe inter-ethnic warfare.',
      'Even if many refugees practically opt for compensation or residency in Palestine when given a genuine choice, symbolic and legal recognition of the right is viewed as indispensable for closure.',
      'Denying return strictly to preserve an ethno-religious demographic majority is challenged under Article 5(d)(ii) of the International Convention on the Elimination of All Forms of Racial Discrimination (ICERD).'
    ],
    sources: [
      {
        title: 'UN Conciliation Commission for Palestine (UNCCP) Refugee Property Records Archive',
        url: 'https://www.un.org/unispal/',
        publisher: 'United Nations Information System on the Question of Palestine',
        year: '1964',
        category: 'Court / Official Record'
      },
      {
        title: 'General Framework Agreement for Peace in Bosnia and Herzegovina (Dayton Annex 7)',
        url: 'https://peacemaker.un.org/',
        publisher: 'United Nations Peacemaker Treaty Database',
        year: '1995',
        category: 'Primary Text / Treaty'
      },
      {
        title: 'International Convention on the Elimination of All Forms of Racial Discrimination (Art. 5)',
        url: 'https://www.ohchr.org/en/instruments-mechanisms/instruments/international-convention-elimination-all-forms-racial',
        publisher: 'UN OHCHR',
        year: '1965',
        category: 'Primary Text / Treaty'
      }
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
    sections: [
      {
        heading: 'Narrow Legal Text of Resolution 194 & ICCPR Article 12(4)',
        paragraphs: [
          'Israeli international lawyer **Ruth Lapidoth** and historians **Efraim Karsh** and **Alexander Yakobson** emphasize that **UNGA Resolution 194(III)** is a non-binding General Assembly recommendation under **UN Charter Articles 10–11**, not a binding Security Council mandate—and was unanimously voted *against* by all six Arab League member states in December 1948. Paragraph 11 avoided the word "right," stating that refugees **"wishing to live at peace with their neighbours *should* be permitted"** to return while placing resettlement on equal footing, just as the drafting history of **ICCPR Article 12(4)** ("his own country") targeted citizen exile rather than fourth-generation foreign-born descendants.'
        ]
      },
      {
        heading: 'Two-State Logic & Mid-Century Partition Precedents',
        paragraphs: [
          'Israeli peace-camp voices such as novelist **Amos Oz**, **A.B. Yehoshua**, and **Geneva Initiative** co-architect **Yossi Beilin** argue that "two states for two peoples" collapses if Palestinians establish an Arab state in the West Bank and Gaza while simultaneously exercising mass return into Israel, where **~7.2 million Jewish citizens** and **~2.1 million Arab citizens** live today. Comparative historians note that every mid-20th-century violent partition—**14 million Hindus, Sikhs, and Muslims** in India–Pakistan (1947), **12 million ethnic Germans** from Eastern Europe (1945–1948), and **1.6 million Greeks and Turks** (1923)—resolved displacement through integration in co-national states.'
        ]
      }
    ],
    details: [
      'With ~7.2 million Jewish citizens and ~2.1 million Arab citizens inside Israel today, admitting millions of UNRWA registrants would turn Jews into a minority, creating two Palestinian-majority states.',
      'UNGA Resolution 194 is a non-binding General Assembly recommendation, conditioned return on "wishing to live at peace with their neighbours," and was voted against by every Arab League member in December 1948.',
      'President Bill Clinton’s December 2000 Parameters explicitly proposed that "return" apply to the new sovereign State of Palestine rather than an unrestricted right into Israel.',
      'Post-WWII precedents—12 million ethnic Germans in Central Europe and 14 million people in the 1947 India–Pakistan Partition—resolved mass displacements via co-national resettlement, not multi-generational return.'
    ],
    sources: [
      {
        title: 'Geneva Initiative Model Permanent Status Accord (Article 7: Refugees)',
        url: 'https://geneva-accord.org/',
        publisher: 'Geneva Initiative',
        year: '2003',
        category: 'Primary Text / Treaty'
      },
      {
        title: 'UNGA Resolution 194(III) — Text & Voting Record Context',
        url: 'https://undocs.org/A/RES/194(III)',
        publisher: 'United Nations General Assembly (Non-Binding Recommendation)',
        year: '1948',
        category: 'Primary Text / Treaty'
      },
      {
        title: 'Legal & Demographic Studies on the Two-State Imperative',
        url: 'https://www.inss.org.il/',
        publisher: 'Institute for National Security Studies (INSS)',
        year: '2022',
        category: 'Scholarship'
      }
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
    sections: [
      {
        heading: 'Institutional Divergence Between UNRWA and UNHCR',
        paragraphs: [
          'Created by **UNGA Resolution 302(IV)** in December 1949, **UNRWA** operates outside the **1951 Refugee Convention** and **UNHCR** mandate governing all other global refugees. Whereas **Article 1C of the 1951 Convention** terminates refugee status once an individual acquires a new nationality, UNRWA continues registering **over 2.3 million people in Jordan**—most holding full Jordanian citizenship—alongside native-born residents of Gaza and the West Bank. Scholars **Adi Schwartz** and **Einat Wilf** (*The War of Return*, 2020) document how Arab League states blocked early 1950s reintegration projects and barred naturalization in Lebanon and Syria to keep 1948 open.'
        ]
      },
      {
        heading: 'Neutrality Controversies & Pragmatic Compensation Blueprints',
        paragraphs: [
          'Scrutiny of UNRWA intensified after **October 7, 2023** amid Israeli intelligence allegations regarding staff participation in the attacks, Hamas tunnel infrastructure beneath Gaza facilities, and curriculum audits by **IMPACT-se** and **UN Watch**. Former French Foreign Minister **Catherine Colonna’s April 2024 Independent Review** found persistent "neutrality-related issues" in staff politicization, unions, and textbooks. Critics argue lasting peace requires replacing perpetual refugee rolls with sovereign state-building—channeling international funds (such as the **$30 billion+ mechanism** proposed in the **Clinton Parameters** and **Olmert 2008 offer**) into Palestinian citizenship and host-country development.'
        ]
      }
    ],
    details: [
      'Whereas UNHCR’s 1951 Convention cessation clause ends refugee status upon acquiring new citizenship, UNRWA counts over 2 million full Jordanian citizens among its 5.9 million registrants.',
      'Arab host states such as Lebanon barred Palestinian camp residents from citizenship and dozens of licensed professions for seven decades.',
      'Audits by IMPACT-se, UN Watch, and the April 2024 Colonna Independent Review highlighted recurring staff politicization, textbook controversies, and militant exploitation near facilities.',
      'Pragmatic peace plans (Clinton Parameters, Olmert 2008 offer) proposed fulfilling "return" into the State of Palestine backed by a $30B+ international compensation fund and symbolic humanitarian admission into Israel.'
    ],
    sources: [
      {
        title: 'UNGA Resolution 302(IV): Assistance to Palestine Refugees (Establishing UNRWA)',
        url: 'https://undocs.org/A/RES/302(IV)',
        publisher: 'United Nations General Assembly',
        year: '1949',
        category: 'Primary Text / Treaty'
      },
      {
        title: 'Audits of UNRWA Schools, Textbooks & Institutional Neutrality',
        url: 'https://www.impact-se.org/',
        publisher: 'Institute for Monitoring Peace and Cultural Tolerance in School Education (IMPACT-se)',
        year: '2024',
        category: 'Watchdog / NGO'
      },
      {
        title: 'Monitoring Reports on UNRWA Governance & Neutrality Breaches',
        url: 'https://unwatch.org/',
        publisher: 'UN Watch',
        year: '2024',
        category: 'Watchdog / NGO'
      }
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
    sections: [
      {
        heading: 'Derivative Status & Family Unity Under UNHCR Guidelines',
        paragraphs: [
          'International refugee scholars and official **UNHCR** legal advisories directly refute the claim that multi-generational registration is unique to Palestinians. Under **UNHCR’s Procedural Standards for Refugee Status Determination** and the principle of family unity, children born in protracted exile—including third-generation **Afghans in Pakistan**, **Somalis in Dadaab (Kenya)**, and **Rohingya in Bangladesh**—routinely receive derivative refugee status until a durable political solution is achieved. Because **UNRWA** holds purely a humanitarian relief mandate without authority to confer citizenship, blaming the agency confuses the symptom of statelessness with its unresolved political root cause.'
        ]
      },
      {
        heading: 'Humanitarian Indispensability & the Colonna Report Findings',
        paragraphs: [
          'Humanitarian directors across **UNICEF**, **WHO**, and the **World Food Programme** emphasize that UNRWA operates the backbone of civilian public services—educating **over 500,000 children**, running **140+ primary health clinics**, and coordinating famine-prevention logistics across Gaza and the West Bank. Dismantling UNRWA without a sovereign Palestinian state transfers legal obligations directly onto Israel as occupying power under the **Fourth Geneva Convention** or leaves an acute governance vacuum. Defenders also note the **April 2024 Colonna Review** confirmed UNRWA shared annual staff lists with Israel since 2011, recommending oversight reforms rather than abolition.'
        ]
      }
    ],
    details: [
      'UNHCR routinely grants derivative refugee status to multi-generational descendants in protracted crises such as Afghans in Pakistan, Somalis in Kenya, and Rohingya in Bangladesh.',
      'Refugees remain unresolved not because of UNRWA’s existence, but because Israel barred return and no sovereign Palestinian state exists to confer citizenship.',
      'UNRWA educates over 500,000 schoolchildren and operates 140+ primary clinics; dismantling it without a political transition leaves a severe governance and humanitarian vacuum.',
      'The April 2024 Colonna Review recommended strengthening internal vetting and neutrality safeguards while affirming UNRWA remained "irreplaceable and indispensable" for civilian survival.'
    ],
    sources: [
      {
        title: '1951 Refugee Convention & UNHCR Procedural Standards on Family Unity',
        url: 'https://www.unhcr.org/about-unhcr/who-we-are/1951-refugee-convention',
        publisher: 'UN High Commissioner for Refugees (UNHCR)',
        year: '1951',
        category: 'Primary Text / Treaty'
      },
      {
        title: 'Frequently Asked Questions: Do Only Palestinians Inherit Refugee Status?',
        url: 'https://www.unrwa.org/palestine-refugees',
        publisher: 'UNRWA Official Documentation',
        year: '2024',
        category: 'Court / Official Record'
      }
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
    sections: [
      {
        heading: 'End of Millennia-Old Indigenous Middle Eastern Communities',
        paragraphs: [
          'Jewish communities in **Iraq**, **Egypt**, **Yemen**, **Syria**, and **North Africa** predated the 7th-century Arab-Islamic conquests by over a millennium. Amid the **1941 Baghdad Farhud pogrom**, riots in **Tripoli (1945)** and **Aden (1947)**, and **1947–1948 Arab League** decrees, roughly **850,000 indigenous Jews** were uprooted within a generation. Iraq’s **1950–1951 denaturalization and asset-freeze laws** and Egypt’s **1956 expulsions** stripped ancient communities of homes, synagogues, and businesses; documentation by **Lyn Julius** and **Justice for Jews from Arab Countries (JJAC)** estimates seized Jewish land exceeded **100,000 square kilometers**, four times the size of Israel.'
        ]
      },
      {
        heading: 'Civic Absorption vs. Bilateral Compensation Parity',
        paragraphs: [
          'Approximately **600,000 Mizrahi and Sephardi refugees** arrived nearly penniless in Israel during the 1950s, enduring harsh canvas transit camps (*ma’abarot*) before achieving full civic integration—today comprising **over half of Israel’s Jewish citizens**. Proponents view these twin displacements as an irreversible regional population exchange akin to **Greece–Turkey (1923)** or **India–Pakistan (1947)**. Reflected in **President Clinton’s July 2000 Camp David** remarks, **U.S. House Resolution 185 (2008)**, and **Israel’s 2010 Rights of Compensation Law**, this framework insists any international peace fund must address both Jewish and Palestinian refugee property losses.'
        ]
      }
    ],
    details: [
      'Ancient 2,500-year-old Jewish communities in Baghdad (~135,000), Cairo/Alexandria (~80,000), Yemen (~55,000), and Libya (~38,000) virtually vanished amid riots, denaturalization laws, and asset freezes.',
      'Confiscated Jewish private and communal land across Arab countries is estimated at ~100,000 sq km—more than four times the land area of pre-1967 Israel.',
      'Israel absorbed ~600,000 Mizrahi refugees into full citizenship without dedicated UN agencies, and their descendants now form the majority of Israeli Jews.',
      'Bilateral peace frameworks (Clinton 2000 remarks, 2010 Israeli statutory mandate) propose an international claims mechanism recognizing both Jewish and Palestinian refugee losses.'
    ],
    sources: [
      {
        title: 'Historical & Legal Documentation of Jewish Refugees from Arab Countries',
        url: 'https://www.justiceforjews.com/',
        publisher: 'Justice for Jews from Arab Countries (JJAC)',
        year: '2019',
        category: 'Watchdog / NGO'
      },
      {
        title: 'Law for Preservation of the Rights to Compensation of Jewish Refugees from Arab Countries and Iran',
        url: 'https://main.knesset.gov.il/EN/activity/Pages/BasicLaws.aspx',
        publisher: 'The Knesset Official Legislative Portal',
        year: '2010',
        category: 'Court / Official Record'
      }
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
    sections: [
      {
        heading: 'Non-Transferability of Third-Party Liability in International Law',
        paragraphs: [
          'Historian **Michael Fischbach** (*Jewish Property Claims Against Arab Countries*, 2008) and international legal scholars stress a foundational principle of law: individual property rights and state liability are specific to the parties involved, not interchangeable across a shared language or ethnicity. Palestinians displaced from **Jaffa**, **Lydda**, or **Galilee** exercised zero authority over decrees enacted in **Baghdad**, **Cairo**, or **Tripoli**. Unlike the **1923 Treaty of Lausanne**—a bilateral treaty signed voluntarily between sovereign Greece and Turkey—using Iraqi state confiscations to cancel Palestinian claims imposes collective ethnic liability barred by human rights law.'
        ]
      },
      {
        heading: 'Diverse Migration Histories & Mizrahi Perspectives',
        paragraphs: [
          'Baghdad-born Oxford historian **Avi Shlaim** (*Three Worlds: Memoirs of an Arab-Jew*, 2023) and sociologist **Yehouda Shenhav** (*The Arab Jews*, 2006) also question conflating all **850,000 departures** across ten countries over twenty-five years into one uniform expulsion. While Jews in **Iraq**, **Egypt**, and **Libya** suffered acute state persecution, migrations from **Morocco**, **Tunisia**, and **Algeria** combined decolonization, French citizenship options, and active **Jewish Agency** *aliyah* organizing—and Israeli Finance Ministry archives show officials in the 1950s held Iraqi-Jewish claims in reserve primarily as a diplomatic counterclaim against Palestinian **Absentee Property** restitution.'
        ]
      }
    ],
    details: [
      'International law prohibits extinguishing Individual Population A’s property rights against State X because Third-Party States Y and Z mistreated Population B.',
      'Unlike the 1923 Lausanne Treaty between Greece and Turkey, no sovereign Palestinian authority ever consented to a population or property exchange treaty.',
      'Mizrahi departures spanned 25 years across starkly different contexts—from acute Iraqi and Egyptian asset seizures to gradual Moroccan and Algerian postcolonial emigration.',
      'Mizrahi Jews retain entirely valid direct restitution claims against the governments of Iraq, Egypt, Libya, and Syria without negating Palestinian claims.'
    ],
    sources: [
      {
        title: 'Universal Declaration of Human Rights (Article 17: Protection Against Arbitrary Property Deprivation)',
        url: 'https://avalon.law.yale.edu/20th_century/udhr.asp',
        publisher: 'Yale Law School Avalon Project',
        year: '1948',
        category: 'Primary Text / Treaty'
      },
      {
        title: 'Treaty of Peace with Jordan (Article 8: Refugees and Displaced Persons Bilateral Claims)',
        url: 'https://avalon.law.yale.edu/20th_century/jordan_treaty.asp',
        publisher: 'Yale Law School Avalon Project',
        year: '1994',
        category: 'Primary Text / Treaty'
      }
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
    sections: [
      {
        heading: 'From Military Administration to Knesset Coalition Participation',
        paragraphs: [
          'Israel’s **May 1948 Declaration of Independence** defined the state as Jewish while pledging **"complete equality of social and political rights to all its inhabitants irrespective of religion, race or sex."** Between 1948 and **1966**, however, the roughly **156,000 Arabs** remaining inside Israel lived under domestic military administration restricting travel across Galilee and the Triangle and facilitating major land expropriations under the **1953 Land Acquisition Law**, even while Arab citizens voted in Knesset elections from 1949 onward and served in early parliamentary sessions.',
          'Over subsequent decades, Israel’s Arab citizenry grew to **~2.1 million (~21% of citizens)**—encompassing Muslim, Christian, Druze, and Negev Bedouin communities—achieving substantial integration across public life. Today Arab citizens comprise **nearly half of newly licensed pharmacists and ~25% of new physicians**, hold seats on the **Supreme Court**, direct major public hospitals, and made constitutional history when **Mansour Abbas’s Ra’am party** entered the **2021–2022 Bennett–Lapid governing coalition** to secure multi-billion-shekel civic investment budgets.'
        ]
      },
      {
        heading: 'Structural Disparities, Or Commission Findings & the 2018 Basic Law',
        paragraphs: [
          'Despite formal individual ballot equality, official state inquiries—most notably Justice **Theodor Or’s 2003 State Commission of Inquiry** following the lethal October 2000 clashes between police and Arab demonstrators—documented decades of systematic neglect across municipal infrastructure, land zoning, industrial tax bases, and law enforcement in Arab localities. Today, violent organized-crime homicide rates in Arab towns, municipal poverty disparities, and unrecognized **Negev Bedouin** communities remain acute domestic flashpoints.',
          'Constitutional friction intensified in July 2018 when the Knesset enacted **Basic Law: Israel — The Nation-State of the Jewish People** by a narrow **62–55 vote**, enshrining exclusive Jewish collective self-determination, state symbols, Hebrew language primacy, and "Jewish settlement" at constitutional rank while omitting any explicit right to equality—testing whether "Jewish and democratic" functions as a durable liberal synthesis or an inherent hierarchy.'
        ]
      }
    ],
    details: [
      'Arab citizens inside pre-1967 Israel (~2.1 million, or ~21% of citizens) hold full voting rights, Knesset parties (including Ra’am joining the 2021–2022 coalition), Arabic-language schools, and rising representation in medicine and law.',
      'Justice Theodor Or’s 2003 official State Commission of Inquiry documented historical state neglect in municipal funding, land allocation, and policing toward Arab localities.',
      'Critics point to the 2018 Nation-State Basic Law, community admissions committees, and family-unification bans as enshrining constitutional hierarchy.',
      'Defenders counter that Israel’s Supreme Court enforces individual equality under Basic Law: Human Dignity and Liberty on par with European nation-states.'
    ],
    sources: [
      {
        title: 'Declaration of Israel’s Independence (May 14, 1948)',
        url: 'https://avalon.law.yale.edu/20th_century/israel.asp',
        publisher: 'Yale Law School Avalon Project',
        year: '1948',
        category: 'Primary Text / Treaty'
      },
      {
        title: 'The Basic Laws of the State of Israel (Human Dignity and Liberty; Nation-State Law)',
        url: 'https://main.knesset.gov.il/EN/activity/Pages/BasicLaws.aspx',
        publisher: 'The Knesset Official Portal',
        year: '2018',
        category: 'Primary Text / Treaty'
      },
      {
        title: 'Statistical Report on Arab Society in Israel',
        url: 'https://en.idi.org.il/',
        publisher: 'Israel Democracy Institute (IDI)',
        year: '2023',
        category: 'Empirical / Economic Study'
      }
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
    sections: [
      {
        heading: 'Comparative Constitutionalism & the 2021 High Court Ruling',
        paragraphs: [
          'Constitutional scholars **Alexander Yakobson** and **Amnon Rubinstein** (*Israel and the Family of Nations*, 2008) show that numerous European liberal democracies—including **Ireland**, **Greece**, **Spain**, **Finland**, and **Latvia**—constitutionally define the state as the homeland of a core national majority, feature religious crosses on state flags, and maintain diaspora kin-state repatriation laws while protecting minority citizens. In **July 2021 (*Hasson v. Knesset*, HCJ 5555/18)**, Israel’s **Supreme Court** ruled **10–1** that the Nation-State Law must be read harmoniously with **Basic Law: Human Dignity and Liberty (1992)**, preserving full constitutional protection for individual equality.'
        ]
      },
      {
        heading: 'Landmark Civic Investment & Institutional Representation',
        paragraphs: [
          'Defenders highlight unprecedented socio-economic integration driven by **Government Resolution 922 (2015, ~15 billion NIS)** and **Resolution 550 (2021, ~30 billion NIS)**—five-year public investment packages expanding Arab municipal transit, STEM education, high-tech hubs, and university access, roughly doubling Arab enrollment in Israeli higher education over fifteen years. Arab citizens simultaneously serve across senior state posts, including Supreme Court Justice **Khaled Kabub**, hospital directors, diplomats, and senior IDF and police commanders from **Druze**, **Bedouin**, and **Christian** communities—refuting claims of statutory disenfranchisement inside sovereign Israel.'
        ]
      }
    ],
    details: [
      'In July 2021 (HCJ 5555/18), Israel’s Supreme Court ruled 10–1 that the Nation-State Law does not diminish individual equality protected under Basic Law: Human Dignity and Liberty.',
      'Dozens of European democracies (e.g., Greece, Ireland, Finland, Latvia) pair majority national symbols and diaspora kin-return laws with equal individual citizenship.',
      'Government Resolutions 922 (~15B NIS) and 550 (~30B NIS) directed historic multi-year public investments into Arab education, infrastructure, and tech employment.',
      'Arab citizens serve across top state institutions, including Supreme Court Justice Khaled Kabub, hospital directors, and Knesset committee chairs.'
    ],
    sources: [
      {
        title: 'Supreme Court of Israel Judgments Database (HCJ 5555/18 Hasson v. Knesset)',
        url: 'https://supreme.court.gov.il/',
        publisher: 'Supreme Court of Israel (High Court of Justice)',
        year: '2021',
        category: 'Court / Official Record'
      },
      {
        title: 'Constitutional Analysis of the Nation-State Basic Law & European Comparators',
        url: 'https://en.idi.org.il/',
        publisher: 'Israel Democracy Institute (IDI)',
        year: '2021',
        category: 'Scholarship'
      }
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
    sections: [
      {
        heading: 'Deliberate Omission of Equality & Druze Constitutional Objections',
        paragraphs: [
          'Critics—including **Adalah Legal Center**, former Supreme Court Justice **Salim Joubran**, and **Druze** IDF brigadier generals who led mass Tel Aviv protests in August 2018—note that Knesset sponsors deliberately defeated amendments inserting **"equality"** into the **2018 Nation-State Basic Law**. The statute reserves national self-determination **"uniquely to the Jewish people"** (Article 1c), downgrades **Arabic** from an official language (Article 4), and declares **"Jewish settlement"** a constitutional value (Article 7), prompting lone Arab dissenting Justice **George Karra** in *Hasson v. Knesset* (2021) to warn it institutionalizes constitutional estrangement for indigenous minorities.'
        ]
      },
      {
        heading: 'Land Zoning, Unrecognized Negev Villages & Family Unification Bars',
        paragraphs: [
          'Legal advocates connect this constitutional framework to **over 65 statutory provisions** shaping land, housing, and family life. Roughly **93% of land inside Israel** is managed by the **Israel Land Authority** alongside the **Jewish National Fund (JNF)**, while the **2011 Admissions Committees Law** (expanded in 2023) lets hundreds of rural towns screen applicants for "social suitability." Meanwhile, **35+ unrecognized Negev Bedouin citizen villages** (~80,000–100,000 residents) lack basic municipal utilities, and the **2003 Citizenship and Entry into Israel Law** (renewed 2022) bars Arab citizens from unifying inside Israel with West Bank or Gaza spouses.'
        ]
      }
    ],
    details: [
      'Knesset drafters explicitly rejected amendments incorporating the word "equality" into the 2018 Nation-State Law while downgrading Arabic from an official language.',
      'Druze IDF officers petitioned the High Court against the 2018 law, arguing it reduced loyal minority citizens to second-tier constitutional status.',
      'Dozens of unrecognized Bedouin citizen villages in the Negev lack municipal utilities, while virtually no new Arab towns (outside Bedouin townships) have been built since 1948.',
      'The 2003 Citizenship and Entry into Israel Law (renewed 2022) restricts family unification for Arab citizens who marry Palestinians from the West Bank or Gaza.'
    ],
    sources: [
      {
        title: 'The Discriminatory Laws Database & Nation-State Law Petition Briefs',
        url: 'https://www.adalah.org/en',
        publisher: 'Adalah — The Legal Center for Arab Minority Rights in Israel',
        year: '2021',
        category: 'Watchdog / NGO'
      },
      {
        title: 'Basic Law: Israel — The Nation-State of the Jewish People (Full Official English Text)',
        url: 'https://main.knesset.gov.il/EN/activity/Pages/BasicLaws.aspx',
        publisher: 'The Knesset Official Portal',
        year: '2018',
        category: 'Primary Text / Treaty'
      }
    ],
    references: [
      'Adalah Legal Center Analysis of the 2018 Nation-State Basic Law',
      'Druze Community Petition to the High Court of Justice (2018)'
    ],
    tags: ['Human Rights', 'Governance'],
    era: '2003–Present'
  }
];
