import { DebateNode } from '../../types/debate';

export const globalDiscourseLegalNodes: DebateNode[] = [
  {
    id: 'pillar-global-discourse',
    parentId: 'root-ip',
    kind: 'pillar',
    title: 'Global Discourse, BDS, Antisemitism & Legal Labels',
    summary:
      'Examines fierce international debates over where criticism of Zionism crosses into antisemitism (IHRA vs. JDA), the Boycott, Divestment, Sanctions (BDS) movement, campus protests, and the "apartheid" legal classification.',
    sections: [
      {
        heading: 'Battlegrounds of Global Vocabulary, Law & Academic Governance',
        paragraphs: [
          'Over the past two decades, the Israeli–Palestinian conflict has increasingly been waged across Western legislatures, university senates, international courts, and premier debate chambers—from **Intelligence Squared U.S. (2020)** and the **Oxford Union (2015, 2024)** to the **Munk Debates in Toronto (June 2024)**. Global discourse centers on foundational legal and moral classifications: whether opposing Jewish statehood constitutes antisemitism, whether **Boycott, Divestment, and Sanctions (BDS)** represents protected civil-society leverage or delegitimization, and whether Israeli governance meets the treaty definition of **apartheid**.',
          'Institutional frameworks now compete directly to codify these boundaries in public law and higher education. More than forty governments and hundreds of universities have adopted the **2016 International Holocaust Remembrance Alliance (IHRA) Working Definition of Antisemitism**, citing a surge in anti-Jewish hostility masked as anti-Zionism, whereas **over 350 scholars** drafted the **2021 Jerusalem Declaration on Antisemitism (JDA)** to safeguard wider academic and political latitude for anti-Zionist critique, binational proposals, and non-violent boycott advocacy.'
        ]
      },
      {
        heading: 'Human Rights Jurisprudence & Free-Speech Tensions',
        paragraphs: [
          'Between **2021 and 2022**, major reports by **B’Tselem**, **Human Rights Watch**, and **Amnesty International** reshaped human rights debates by applying the **1973 Apartheid Convention** and **1998 Rome Statute** to Israeli rule, followed in **July 2024** by a contested, non-binding **International Court of Justice (ICJ) Advisory Opinion** referencing **ICERD Article 3**. Critics—including Arab-Israeli leader **Mansour Abbas**, jurist **Richard Goldstone**, and ICJ Vice-President **Julia Sebutinde**—reject the apartheid framework as legally flawed and historically distortive.',
          'Following the **October 7, 2023** attacks and the ensuing Gaza war, Western university encampments, endowment divestment votes, state **anti-BDS procurement laws** across **35+ U.S. states**, and record antisemitic incident counts brought constitutional free-speech doctrines (such as **U.S. Supreme Court First Amendment** boycott precedent) and civil-rights anti-discrimination mandates (**Title VI of the 1964 Civil Rights Act**) into acute legal collision across North American and European legislatures, courts, and university boards.'
        ]
      }
    ],
    details: [
      'Draws directly on landmark mainstage clashes at Intelligence Squared U.S. (2020), the Oxford Union (2015 & 2024), and the Munk Debates (June 2024).',
      'Contrasts competing institutional definitions of antisemitism: the 2016 IHRA Working Definition versus the 2021 Jerusalem Declaration on Antisemitism (JDA).',
      'Evaluates the 2005 Palestinian BDS call alongside U.S. First Amendment litigation over state anti-boycott procurement laws.',
      'Weighs 2021–2022 NGO "apartheid" legal reports and the non-binding 2024 ICJ Advisory Opinion against counter-arguments from constitutional and international jurists.'
    ],
    sources: [
      {
        title: 'Munk Debate: "Be it Resolved, Anti-Zionism is Antisemitism" (Murray & Hausdorff vs. Hasan & Levy)',
        url: 'https://munkdebates.com/',
        publisher: 'Munk Debates',
        year: '2024',
        category: 'Debate / Broadcast'
      },
      {
        title: 'IHRA Non-Legally Binding Working Definition of Antisemitism',
        url: 'https://holocaustremembrance.com/resources/working-definition-antisemitism',
        publisher: 'International Holocaust Remembrance Alliance (IHRA)',
        year: '2016',
        category: 'Primary Text / Treaty'
      },
      {
        title: 'The Jerusalem Declaration on Antisemitism (JDA)',
        url: 'https://jerusalemdeclaration.org/',
        publisher: 'Jerusalem Declaration Signatories',
        year: '2021',
        category: 'Scholarship'
      }
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
    sections: [
      {
        heading: 'Mainstage Clashes: IQ2 (2020) & the Munk Debates (2024)',
        paragraphs: [
          'Two landmark debates defined the modern clash over anti-Zionism. In **February 2020**, **Intelligence Squared U.S.** pitted **Bret Stephens** and **Einat Wilf** against **Peter Beinart** and **Yousef Munayyer** on *"Anti-Zionism Is the New Anti-Semitism."* In **June 2024**, Toronto’s **Munk Debates** saw **Douglas Murray** and **Natasha Hausdorff** defeat **Mehdi Hasan** and **Gideon Levy** (**66% to 34%**) on *"Be it Resolved, Anti-Zionism is Antisemitism"*—centering not on policy critique of Israeli cabinets, which all participants deemed legitimate, but on opposing the existence of a Jewish state altogether.'
        ]
      },
      {
        heading: 'IHRA Working Definition vs. the Jerusalem Declaration',
        paragraphs: [
          'Institutionally, the dispute turns on illustrative examples attached to the **2016 IHRA Working Definition of Antisemitism**, notably its clause that **"denying the Jewish people their right to self-determination, e.g., by claiming that the existence of a State of Israel is a racist endeavor,"** may constitute antisemitism depending on context. Conversely, the **2021 Jerusalem Declaration on Antisemitism (JDA)** defines antisemitism strictly as hostility toward Jews *as Jews*, arguing that advocating binationalism or opposing ethnic nationalism remains protected political speech when equal individual rights are respected.'
        ]
      }
    ],
    details: [
      'Debated directly by Bret Stephens & Einat Wilf vs. Peter Beinart & Yousef Munayyer (IQ2, 2020) and Douglas Murray & Natasha Hausdorff vs. Mehdi Hasan & Gideon Levy (Munk Debates, June 2024).',
      'Distinguishes policy criticism of Israeli governments from anti-Zionism—the ideological rejection of Jewish national self-determination.',
      'Centers institutionally on whether universities and governments should adopt the 2016 IHRA Working Definition or the 2021 Jerusalem Declaration (JDA).',
      'Tests whether collective national identity is inseparable from contemporary Jewish existence or separable as a 19th-century political ideology.'
    ],
    sources: [
      {
        title: 'Debate Broadcast: "Anti-Zionism Is the New Anti-Semitism"',
        url: 'https://opentodebate.org/',
        publisher: 'Open to Debate (Intelligence Squared U.S.)',
        year: '2020',
        category: 'Debate / Broadcast'
      },
      {
        title: 'Munk Debate Broadcast: "Be it Resolved, Anti-Zionism is Antisemitism"',
        url: 'https://munkdebates.com/',
        publisher: 'Munk Debates',
        year: '2024',
        category: 'Debate / Broadcast'
      },
      {
        title: 'IHRA Working Definition of Antisemitism & Illustrative Examples',
        url: 'https://holocaustremembrance.com/resources/working-definition-antisemitism',
        publisher: 'International Holocaust Remembrance Alliance',
        year: '2016',
        category: 'Primary Text / Treaty'
      },
      {
        title: 'The Jerusalem Declaration on Antisemitism',
        url: 'https://jerusalemdeclaration.org/',
        publisher: 'Jerusalem Declaration Signatories',
        year: '2021',
        category: 'Scholarship'
      }
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
    sections: [
      {
        heading: 'Sharansky’s 3Ds & the Selective Elimination of One State',
        paragraphs: [
          'Invoking former Soviet dissident **Natan Sharansky’s "3D Test"** (**Demonization, Double Standards, Delegitimization**), **Einat Wilf**, **Bret Stephens**, **Douglas Murray**, and **Natasha Hausdorff** point out that dozens of modern nation-states—including **Pakistan**, **India**, **Turkey**, **Poland**, and **Jordan**—emerged in the 1920s–1940s amid partitions, population transfers, or explicit religious/national identities, yet no global campaign demands abolishing Pakistan or expelling Turkey. Singling out the world’s sole Jewish state—occupying **under 0.2% of Middle Eastern landmass** alongside 22 Arab states—as uniquely illegitimate applies a discriminatory standard to Jewish peoplehood.'
        ]
      },
      {
        heading: 'Existential Consequence for Half of World Jewry & Historical Continuity',
        paragraphs: [
          'Proponents also reject portraying Zionism as a detachable 19th-century European invention: longing for **Zion** and **Jerusalem** pervades three millennia of Jewish liturgy and indigenous identity, and today roughly **7.2 million Jews—nearly half of world Jewry**—live in Israel, mostly descending from **Holocaust survivors** and **Mizrahi refugees** from Arab lands. Dismantling Jewish sovereignty against their will would strip millions of physical security, while post-**October 7** hate-crime monitoring by **CST (UK)** and the **ADL** documented "anti-Zionist" slogans routinely spilling into attacks on diaspora synagogues and Jewish students.'
        ]
      }
    ],
    details: [
      'Applies Natan Sharansky’s "3Ds" test: global movements do not campaign to abolish Pakistan, Turkey, or other states born out of 1940s partitions and displacements.',
      'Nearly half of world Jewry (~7.2 million people) resides in Israel; abolishing Jewish sovereignty threatens their physical survival rather than an abstract theory.',
      'Zion and return to Jerusalem are embedded across 3,000 years of Jewish peoplehood, liturgy, and indigenous history rather than invented in 1897.',
      'Empirical hate-crime audits post-Oct 2023 recorded anti-Zionist rhetoric frequently spilling into attacks on diaspora synagogues, schools, and Jewish students.'
    ],
    sources: [
      {
        title: 'Munk Debate Opening & Rebuttal Speeches: Douglas Murray & Natasha Hausdorff',
        url: 'https://munkdebates.com/',
        publisher: 'Munk Debates',
        year: '2024',
        category: 'Debate / Broadcast'
      },
      {
        title: 'IQ2 Debate Arguments: Bret Stephens & Einat Wilf',
        url: 'https://opentodebate.org/',
        publisher: 'Open to Debate (Intelligence Squared U.S.)',
        year: '2020',
        category: 'Debate / Broadcast'
      },
      {
        title: 'IHRA Working Definition of Antisemitism',
        url: 'https://holocaustremembrance.com/resources/working-definition-antisemitism',
        publisher: 'International Holocaust Remembrance Alliance',
        year: '2016',
        category: 'Primary Text / Treaty'
      }
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
    sections: [
      {
        heading: 'Palestinian Experience of Dispossession & Universal Civic Principles',
        paragraphs: [
          'Arguing against the motion, **Yousef Munayyer**, **Mehdi Hasan**, **Peter Beinart**, and **Gideon Levy** contend that Palestinian opposition to Zionism arises from concrete lived dispossession—losing homes in **1948**, stateless refugee camps, or military rule in **Hebron** and **Gaza**—not anti-Jewish animus. As Munayyer argued at **IQ2 (2020)**, Palestinians would have resisted any movement establishing an exclusive demographic majority on their land regardless of religion, and advocating a civic **one-person-one-vote** democracy for Jews and Arabs alike reflects liberal universalism, not bigotry.'
        ]
      },
      {
        heading: 'Jewish Non-Zionist Traditions & Chilling Effects of IHRA Codification',
        paragraphs: [
          'Historians further note that major Jewish movements—from the socialist **Jewish Labour Bund**, classical **Reform Judaism**, and ethical binationalists like **Martin Buber** and **Hannah Arendt** to **Haredi** communities today—rejected state-centric political Zionism from within Jewish tradition, meaning equating anti-Zionism with antisemitism smears Jewish thinkers themselves. Moreover, **Kenneth Stern**—lead drafter of the **IHRA** precursor text—testified before Congress alongside the **350+ scholars of the Jerusalem Declaration** warning that codifying IHRA into law weaponizes antisemitism charges to chill Palestinian speech.'
        ]
      }
    ],
    details: [
      'Mehdi Hasan and Yousef Munayyer emphasize Palestinians resisted territorial dispossession and statelessness—as they would against any group—not Jewish religion or ethnicity.',
      'Rich Jewish traditions—from pre-1948 Bundists, Hannah Arendt, and Martin Buber to contemporary Haredi and post-Zionist Jews—have opposed state Zionism from within Jewish thought.',
      'Advocating a civic or binational democracy with equal individual rights for Jews and Arabs rejects ethno-national hierarchy everywhere rather than singling out Jews.',
      'Over 350 scholars signed the 2021 Jerusalem Declaration (JDA), warning alongside IHRA drafter Kenneth Stern against weaponizing IHRA examples to censor speech.'
    ],
    sources: [
      {
        title: 'The Jerusalem Declaration on Antisemitism (Guidelines & Preamble)',
        url: 'https://jerusalemdeclaration.org/',
        publisher: 'Jerusalem Declaration Signatories',
        year: '2021',
        category: 'Scholarship'
      },
      {
        title: 'Munk Debate Counter-Arguments: Mehdi Hasan & Gideon Levy',
        url: 'https://munkdebates.com/',
        publisher: 'Munk Debates',
        year: '2024',
        category: 'Debate / Broadcast'
      },
      {
        title: 'IQ2 Debate Counter-Arguments: Peter Beinart & Yousef Munayyer',
        url: 'https://opentodebate.org/',
        publisher: 'Open to Debate (Intelligence Squared U.S.)',
        year: '2020',
        category: 'Debate / Broadcast'
      }
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
    sections: [
      {
        heading: 'The 2005 Civil-Society Call & the South African Anti-Apartheid Model',
        paragraphs: [
          'On **July 9, 2005**—one year after the non-binding **2004 ICJ Wall Advisory Opinion**—over **170 Palestinian unions, NGOs, and civic groups** issued the **Palestinian Civil Society Call for Boycott, Divestment and Sanctions (BDS)**, modeled on the 1980s boycott of apartheid **South Africa**. Co-founded by **Omar Barghouti**, the call set three goals: ending occupation and dismantling the Wall, full equality for Arab citizens of Israel, and refugee return under **UNGA Resolution 194**—arguing **Oslo** diplomacy failed because Israel faced zero economic cost.'
        ]
      },
      {
        heading: 'Oxford Union Clashes & University Endowment Divestment',
        paragraphs: [
          'BDS was debated prominently at the **Oxford Union in November 2015** (*"This House Believes the BDS Movement Against Israel Is Wrong"*, pitting **Alan Dershowitz** against **Peter Tatchell**) and became a central flashpoint across Western universities in **2023–2025**. Student coalitions demanded endowment disclosure and divestment from defense contractors, tech firms supplying cloud infrastructure (**Project Nimbus**), and firms operating in West Bank settlements—sparking fierce disputes over whether divestment targets the 1967 occupation or seeks to dismantle Israel itself.'
        ]
      }
    ],
    details: [
      'Launched on July 9, 2005 by 170+ Palestinian civil-society groups demanding an end to occupation, full equality inside Israel, and refugee return under UNGA Res. 194.',
      'Explicitly modeled on the 1980s international economic, cultural, and sporting boycott campaign against apartheid South Africa.',
      'Debated on the mainstage of the Oxford Union (Nov 2015) and across Western university endowment boards during 2023–2025.',
      'Encompasses distinct tiers ranging from targeted divestment from West Bank settlement enterprises to comprehensive academic and cultural boycotts.'
    ],
    sources: [
      {
        title: 'Palestinian Civil Society Call for Boycott, Divestment and Sanctions against Israel',
        url: 'https://bdsmovement.net/',
        publisher: 'BDS National Committee (BNC)',
        year: '2005',
        category: 'Primary Text / Treaty'
      },
      {
        title: 'Oxford Union Debate Archive: "This House Believes the BDS Movement Against Israel Is Wrong"',
        url: 'https://www.oxford-union.org/',
        publisher: 'The Oxford Union Society',
        year: '2015',
        category: 'Debate / Broadcast'
      }
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
    sections: [
      {
        heading: 'Closing Off Every Non-Violent Avenue & Moral Consistency',
        paragraphs: [
          'As British human-rights campaigner **Peter Tatchell** argued at the **Oxford Union (2015)**, Western democracies routinely employ economic sanctions in foreign policy—yet condemn Palestinians when they appeal for peaceful boycotts. When Palestinians are told armed resistance is terrorism, **UN/ICC** petitions are unilateral "lawfare," and **BDS** is illegitimate, occupied civilians are left with zero non-violent leverage. Institutional funds such as **Norway’s Government Pension Fund Global** likewise apply targeted divestment specifically to firms listed in the **UN OHCHR settlement database**.'
        ]
      },
      {
        heading: 'First Amendment Precedent (*NAACP v. Claiborne Hardware*)',
        paragraphs: [
          'In the United States, **over 35 states** enacted **anti-BDS laws** requiring state contractors—including public-school speech pathologists, freelancers, and university lecturers—to sign pledges promising not to boycott Israel or Israeli-controlled territories. The **American Civil Liberties Union (ACLU)** and First Amendment jurists challenge these statutes under the U.S. Supreme Court’s unanimous ruling in ***NAACP v. Claiborne Hardware Co.* (1982)**, which held that non-violent political boycotts sit on the **"highest rung of the hierarchy of First Amendment values."**'
        ]
      }
    ],
    details: [
      'Condemning peaceful boycotts alongside UN/ICC diplomacy leaves stateless Palestinians with zero non-violent mechanisms to challenge military occupation.',
      'The ACLU challenges 35+ U.S. state anti-BDS contractor laws under U.S. Supreme Court precedent (*NAACP v. Claiborne Hardware*, 1982) protecting political boycotts.',
      'Targeted divestment campaigns focus specifically on companies profiting from West Bank settlements or supplying munitions used in civilian areas.',
      'European pension funds (such as Norway’s sovereign wealth fund) apply ethical-investment screening to settlement-linked enterprises.'
    ],
    sources: [
      {
        title: 'Constitutional Challenges & Free Speech Briefs Against State Anti-BDS Laws',
        url: 'https://www.aclu.org/',
        publisher: 'American Civil Liberties Union (ACLU)',
        year: '2023',
        category: 'Watchdog / NGO'
      },
      {
        title: 'Oxford Union BDS Debate: Opposition Arguments on Non-Violent Boycotts',
        url: 'https://www.oxford-union.org/',
        publisher: 'The Oxford Union Society',
        year: '2015',
        category: 'Debate / Broadcast'
      }
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
    sections: [
      {
        heading: 'Strategic Ambiguity Over Israel’s Existence Within 1967 Lines',
        paragraphs: [
          'Winning the **November 2015 Oxford Union debate**, Harvard Law professor **Alan Dershowitz** noted that the **BDS National Committee (BNC)** refuses to endorse two states or recognize Israel within *any* borders. Even fierce Israel critic **Norman Finkelstein** broke with BDS leadership in **2012**, observing that combining "ending colonization of all Arab lands" with unrestricted 1948 return seeks to dissolve Israel—a goal co-founder **Omar Barghouti** confirmed directly: **"Definitely, most definitely we oppose a Jewish state in any part of Palestine."**'
        ]
      },
      {
        heading: 'Academic Freedom Violations & Counterproductive Economic Harm',
        paragraphs: [
          'Academic associations including the **AAUP** and scholar **Cary Nelson** condemn boycotts of Israeli universities as violations of academic freedom, pointing out that Israeli campuses, scientists, and novelists like **David Grossman** represent Israel’s leading voices for Arab-Jewish coexistence and peace, while authoritarian human-rights abusers globally face zero campus boycotts. Economically, boycotts have barely dented Israel’s tech sector while harming Palestinian workers—as when **SodaStream** closed its **Mishor Adumim** plant in **2015**, costing **~500 Palestinians** high-wage unionized jobs.'
        ]
      }
    ],
    details: [
      'BDS co-founder Omar Barghouti stated explicitly: "Definitely, most definitely we oppose a Jewish state in any part of Palestine," prompting critiques even from Norman Finkelstein.',
      'Alan Dershowitz prevailed at the 2015 Oxford Union debate by arguing BDS singles out the world’s only Jewish democracy while ignoring severe human-rights abusers globally.',
      'Academic and cultural boycotts target Israeli universities, scientists, and peace-camp artists inside pre-1967 Israel, violating core norms of academic freedom.',
      'When SodaStream relocated its Mishor Adumim plant in 2015 amid boycott campaigns, ~500 West Bank Palestinian workers lost high-paying unionized jobs.'
    ],
    sources: [
      {
        title: 'Oxford Union BDS Debate: Winning Proposition Arguments (Alan Dershowitz)',
        url: 'https://www.oxford-union.org/',
        publisher: 'The Oxford Union Society',
        year: '2015',
        category: 'Debate / Broadcast'
      },
      {
        title: 'Policy Analyses of BDS Goals, Campus Boycotts & Economic Impacts',
        url: 'https://www.washingtoninstitute.org/',
        publisher: 'The Washington Institute for Near East Policy',
        year: '2019',
        category: 'Scholarship'
      }
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
    sections: [
      {
        heading: 'Universal Treaty Law vs. Historical Analogy to South Africa',
        paragraphs: [
          'Between **January 2021 and February 2022**, **B’Tselem**, **Human Rights Watch (*A Threshold Crossed*)**, and **Amnesty International** published comprehensive legal reports concluding Israeli rule constitutes the crime of **apartheid**. These authors stress that in international law, apartheid is evaluated not by exact likeness to South Africa’s *petty apartheid*, but under universal treaty definitions in **Article II of the 1973 Apartheid Convention** and **Article 7(2)(h) of the 1998 Rome Statute**—with HRW locating apartheid in the **Occupied Territories** and B’Tselem/Amnesty river-to-sea.'
        ]
      },
      {
        heading: 'The Contested July 2024 ICJ Advisory Opinion & Article 3 of ICERD',
        paragraphs: [
          'In **July 2024**, the **International Court of Justice** issued its non-binding **Advisory Opinion on Israeli Policies in the OPT** (Case 186, rejected by Israel and Washington). Reviewing West Bank dual legal regimes, road restrictions, and settlement enclaves, the Court found in **Paragraph 229** a breach of **ICERD Article 3**, which prohibits **"racial segregation and apartheid"**—though separate opinions by Judges **Nawaf Salam**, **Dire Tladi**, **Georg Nolte**, and **Sarah Cleveland** differed over whether the breach constituted apartheid, segregation, or both.'
        ]
      }
    ],
    details: [
      'Evaluated under the universal treaty definitions in the 1973 Apartheid Convention (Art. II) and 1998 Rome Statute (Art. 7(2)(h)), rather than exact identity with South Africa.',
      'HRW (April 2021) applied the apartheid finding to the Occupied Territories, whereas B’Tselem (Jan 2021) and Amnesty (Feb 2022) extended the analysis across the entire river-to-sea area.',
      'In its contested, non-binding July 2024 Advisory Opinion (Para. 229), the ICJ found a breach of ICERD Article 3 ("racial segregation and apartheid") in the OPT, with judges writing divergent separate opinions.',
      'Entered mainstream Western cultural discourse via works such as Ta-Nehisi Coates’s *The Message* (2024) and statements by retired Israeli officials.'
    ],
    sources: [
      {
        title: 'A Regime of Jewish Supremacy from the Jordan River to the Mediterranean Sea: This Is Apartheid',
        url: 'https://www.btselem.org/publications/fulltext/202101_this_is_apartheid',
        publisher: 'B’Tselem',
        year: '2021',
        category: 'Watchdog / NGO'
      },
      {
        title: 'A Threshold Crossed: Israeli Authorities and the Crimes of Apartheid and Persecution',
        url: 'https://www.hrw.org/report/2021/04/27/threshold-crossed/israeli-authorities-and-crimes-apartheid-and-persecution',
        publisher: 'Human Rights Watch',
        year: '2021',
        category: 'Watchdog / NGO'
      },
      {
        title: 'Israel’s Apartheid Against Palestinians: Cruel System of Domination and Crime Against Humanity',
        url: 'https://www.amnesty.org/en/latest/campaigns/2022/02/israels-system-of-apartheid/',
        publisher: 'Amnesty International',
        year: '2022',
        category: 'Watchdog / NGO'
      },
      {
        title: 'ICJ Case 186: Advisory Opinion on Policies and Practices of Israel in the OPT',
        url: 'https://www.icj-cij.org/case/186',
        publisher: 'International Court of Justice (Non-Binding Advisory Opinion)',
        year: '2024',
        category: 'Court / Official Record'
      }
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
    sections: [
      {
        heading: 'Satisfying the Three-Pronged Statutory Test in the West Bank',
        paragraphs: [
          'Under **Article 7(2)(h) of the 1998 Rome Statute** and **ICERD Article 1** (which defines "racial" groups to include **national or ethnic origin**), apartheid requires an institutionalized regime of domination, inhumane acts, and intent to maintain control. Legal authors such as **Omar Shakir (HRW)** highlight West Bank **Area C**, where Israeli settlers enjoy civil law, municipal planning, and Knesset suffrage while Palestinian neighbors across the road live after **57+ years** under **IDF military courts**, movement permits, and zero voting rights.'
        ]
      },
      {
        heading: 'Permanence Over Temporariness & Warnings From Former Israeli Officials',
        paragraphs: [
          'Whereas defenders long argued military occupation is legally temporary, proponents respond that **700,000+ settlers**, coalition guidelines claiming exclusive sovereignty from river to sea, and transferring West Bank civil powers to civilian minister **Bezalel Smotrich** prove permanence. Several retired Israeli security and legal chiefs reached similar conclusions regarding the West Bank: former Mossad director **Tamir Pardo** stated in **September 2023** that *"there is an apartheid state here — in a territory where two people are judged under two legal systems,"* echoing former Attorney General **Michael Ben-Yair**.'
        ]
      }
    ],
    details: [
      'Under ICERD Art. 1, "racial" groups in international treaty law encompass national and ethnic origins, not solely biological race.',
      'Points to two parallel legal regimes operating in the same West Bank territory: civil democracy for ~500,000+ West Bank settlers vs. stateless military rule for ~3 million Palestinians.',
      'After 57+ years of settlement integration and explicit cabinet rejection of Palestinian statehood, legal scholars argue occupation can no longer be excused as temporary.',
      'Former Mossad chief Tamir Pardo and former Attorney General Michael Ben-Yair publicly stated in 2022–2023 that indefinite two-tier West Bank rule constitutes apartheid.'
    ],
    sources: [
      {
        title: 'A Threshold Crossed: Statutory Analysis Under the Rome Statute & Apartheid Convention',
        url: 'https://www.hrw.org/report/2021/04/27/threshold-crossed/israeli-authorities-and-crimes-apartheid-and-persecution',
        publisher: 'Human Rights Watch',
        year: '2021',
        category: 'Watchdog / NGO'
      },
      {
        title: 'International Convention on the Elimination of All Forms of Racial Discrimination (Articles 1 & 3)',
        url: 'https://www.ohchr.org/en/instruments-mechanisms/instruments/international-convention-elimination-all-forms-racial',
        publisher: 'UN OHCHR',
        year: '1965',
        category: 'Primary Text / Treaty'
      },
      {
        title: 'Rome Statute of the International Criminal Court (Article 7(2)(h))',
        url: 'https://www.icc-cpi.int/palestine',
        publisher: 'International Criminal Court',
        year: '1998',
        category: 'Primary Text / Treaty'
      }
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
    sections: [
      {
        heading: 'Civic Participation Inside Israel: Goldstone & Mansour Abbas',
        paragraphs: [
          'Critics point first to sovereign Israel, where **~2.1 million Arab citizens** share equal ballots, universities, hospitals, and Supreme Court benches with Jewish citizens—unlike South Africa, which disenfranchised Black citizens and criminalized integrated life. South African Justice **Richard Goldstone** wrote in the *New York Times* (2011) that *"there is no apartheid here,"* and in **February 2022** Arab-Israeli coalition leader **Mansour Abbas (Ra’am)** told the **Washington Institute**: **"I would not call Israel an apartheid state,"** championing civic partnership within Israeli democracy.'
        ]
      },
      {
        heading: 'Law of Belligerent Occupation, Oslo Jurisdiction & Sebutinde’s Dissent',
        paragraphs: [
          'In the West Bank, jurists **Eugene Kontorovich** and **Yuval Shany** note legal distinctions track **citizenship and bilateral Oslo jurisdiction**, not race: an Arab citizen of Israel in Area C enjoys full Israeli civil law, whereas **90%+ of West Bank Palestinians** live in **Areas A and B** under **Palestinian Authority** law per the **1995 Oslo II Accords**, and **Fourth Geneva Convention Article 64** bars imposing domestic citizenship law on occupied non-citizens. Dissenting in **July 2024**, ICJ Vice-President **Julia Sebutinde** emphasized security measures address lethal militancy in a territorial conflict, not racial supremacy.'
        ]
      }
    ],
    details: [
      'In February 2022, Arab-Israeli coalition leader Mansour Abbas explicitly rejected Amnesty’s report: "I would not call Israel an apartheid state."',
      'Inside Israel, Arab and Jewish citizens vote on equal ballots and serve together on the Supreme Court—meaning West Bank legal distinctions track citizenship and Oslo Accords jurisdiction, not race.',
      'Under Fourth Geneva Convention Art. 64, belligerent occupation inherently applies military law rather than domestic citizenship law to non-citizen occupied territories pending peace.',
      'ICJ Vice-President Judge Julia Sebutinde dissented in July 2024, emphasizing that Israeli security measures reflect an unresolved territorial and security conflict rather than racial domination.'
    ],
    sources: [
      {
        title: 'Mansour Abbas Policy Forum Address Rejecting the "Apartheid" Classification',
        url: 'https://www.washingtoninstitute.org/',
        publisher: 'The Washington Institute for Near East Policy',
        year: '2022',
        category: 'Debate / Broadcast'
      },
      {
        title: 'Dissenting Opinion of Vice-President Judge Julia Sebutinde (ICJ Case 186)',
        url: 'https://www.icj-cij.org/case/186',
        publisher: 'International Court of Justice',
        year: '2024',
        category: 'Court / Official Record'
      },
      {
        title: 'Critical Legal Analyses of NGO Apartheid Reports & Belligerent Occupation Law',
        url: 'https://en.idi.org.il/',
        publisher: 'Israel Democracy Institute (IDI)',
        year: '2022',
        category: 'Scholarship'
      }
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
