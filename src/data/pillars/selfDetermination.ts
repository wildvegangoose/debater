import { DebateNode } from '../../types/debate';

export const selfDeterminationNodes: DebateNode[] = [
  {
    id: 'pillar-self-determination',
    parentId: 'root-ip',
    kind: 'pillar',
    title: 'Historical Roots, Indigeneity & Self-Determination',
    summary:
      'Examines competing national narratives, historical and continuous ties to the land, British Mandate diplomacy, the 1947 UN Partition Plan, and the 1948 War / Nakba.',
    sections: [
      {
        heading: 'Competing Nationalisms & Mandate Diplomacy',
        paragraphs: [
          'At the core of the Israeli–Palestinian conflict lies an asymmetric clash between two modern national movements asserting self-determination over the same narrow strip of land between the **Jordan River** and the **Mediterranean Sea**. In the late nineteenth century, **Zionism** organized politically under **Theodor Herzl** at the **1897 First Zionist Congress** to restore Jewish sovereignty in the ancestral **Land of Israel**, intersecting with an overwhelmingly Arab population under late **Ottoman rule** whose distinct **Palestinian national consciousness** crystallized alongside neighboring Levantine nationalisms.',
          'During World War I, British wartime diplomacy produced overlapping commitments—including the **1915–1916 McMahon–Hussein Correspondence** and the **November 2, 1917 Balfour Declaration** favoring a "national home for the Jewish people" while pledging to safeguard the civil and religious rights of existing non-Jewish communities. Codified into the binding **1922 League of Nations Mandate for Palestine**, these incompatible expectations fueled intercommunal violence in **1920, 1929, and 1936–1939**, prompting Britain’s **1937 Peel Royal Commission** to propose partitioning the territory into separate Jewish and Arab states.'
        ]
      },
      {
        heading: 'Partition, the 1948 War & Foundational Stakes',
        paragraphs: [
          'Unable to reconcile Jewish immigration demands after the **Holocaust** with Arab demands for immediate majority-rule independence, Britain referred the Mandate to the United Nations in 1947. On **November 29, 1947**, the General Assembly adopted **UNGA Resolution 181(II)**—a non-binding recommendation under the UN Charter proposing independent Jewish and Arab states linked by economic union, with **Jerusalem** as an international *corpus separatum*. Mainstream Zionist leaders accepted the plan despite territorial limits, whereas the **Arab Higher Committee** and **Arab League** rejected partition as an unlawful violation of resident majority rights.',
          'The ensuing **1947–1949 War** unfolded in two stages: an intercommunal civil war from November 1947 to May 1948, followed by a conventional invasion by five Arab armies upon **Israel’s Declaration of Independence (May 14, 1948)**. Israel secured roughly **78% of western Mandate Palestine** within the **1949 Armistice Lines**, absorbing hundreds of thousands of Holocaust survivors and Mizrahi Jewish refugees, while **700,000–750,000 Palestinian Arabs** fled or were expelled in what Palestinians commemorate as the **Nakba ("Catastrophe")**.'
        ]
      }
    ],
    details: [
      'Addresses how two distinct national movements—Zionism and Palestinian nationalism—emerged and asserted sovereign claims over the same territory between the Jordan River and Mediterranean Sea.',
      'Weighs ancient historical/cultural continuity, demographic realities under late Ottoman and British rule, international legal instruments, and the displacement of populations in 1947–1949.',
      'Contrasts binding League of Nations Mandate provisions (1922) with contested, non-binding UN General Assembly recommendations such as Resolution 181 (1947) and Resolution 194 (1948).',
      'Forms the foundational moral and legal lens through which subsequent disputes over borders, refugees, and statehood are interpreted.'
    ],
    sources: [
      {
        title: 'League of Nations Mandate for Palestine (July 24, 1922)',
        url: 'https://avalon.law.yale.edu/20th_century/palmanda.asp',
        publisher: 'Yale Law School Avalon Project',
        year: '1922',
        category: 'Primary Text / Treaty'
      },
      {
        title: 'The Balfour Declaration (November 2, 1917)',
        url: 'https://avalon.law.yale.edu/20th_century/balfour.asp',
        publisher: 'Yale Law School Avalon Project',
        year: '1917',
        category: 'Primary Text / Treaty'
      },
      {
        title: 'UNGA Resolution 181(II) — Future Government of Palestine (Partition Recommendation)',
        url: 'https://undocs.org/A/RES/181(II)',
        publisher: 'United Nations General Assembly',
        year: '1947',
        category: 'Court / Official Record'
      },
      {
        title: 'Israel–Jordan General Armistice Agreement (April 3, 1949)',
        url: 'https://avalon.law.yale.edu/20th_century/arm03.asp',
        publisher: 'Yale Law School Avalon Project',
        year: '1949',
        category: 'Primary Text / Treaty'
      }
    ],
    references: [
      'League of Nations Mandate for Palestine (July 24, 1922)',
      'The Balfour Declaration (November 2, 1917)',
      'UNGA Resolution 181(II) — Future Government of Palestine (Partition Recommendation)',
      'Israel–Jordan General Armistice Agreement (April 3, 1949)'
    ],
    tags: ['History', 'International Law', 'Demographics'],
    era: '1880s–1949'
  },

  // THESIS 1A: Jewish National Self-Determination
  {
    id: 'thesis-zionism-legitimacy',
    parentId: 'pillar-self-determination',
    kind: 'thesis',
    title: 'Jewish Indigenous Right to Sovereign Self-Determination',
    summary:
      'The Jewish people constitute an indigenous nation originating in the Land of Israel with a legitimate historical, legal, and moral right to sovereign self-determination in part or all of their ancestral homeland.',
    sections: [
      {
        heading: 'Indigenous Ethnogenesis & International Legal Instruments',
        paragraphs: [
          'Proponents of Jewish self-determination emphasize that Jews constitute not merely a religious denomination, but an ancient, distinct people (*am*) whose **ethnogenesis**, **Hebrew language**, agricultural calendar, legal traditions, and sovereign commonwealths originated specifically in **Judea, Samaria, and Galilee** more than three millennia ago. Across centuries of Roman and subsequent imperial exiles, Jewish communities maintained continuous minority habitation in historic towns alongside unbroken daily liturgical orientation toward **Jerusalem**, preserving collective national identity despite geographic dispersion.',
          'In modern public international law, this historical nexus received binding recognition at the **1920 San Remo Conference** and in the **1922 League of Nations Mandate for Palestine**, whose Preamble explicitly recognized "the historical connection of the Jewish people with Palestine and the grounds for reconstituting their national home." Legal scholars note that these acquired collective rights were preserved via **Article 80 of the 1945 UN Charter** and politically reinforced when two-thirds of voting UN member states backed **UNGA Resolution 181** in November 1947.'
        ]
      },
      {
        heading: 'National Self-Emancipation vs. Colonial Paradigms',
        paragraphs: [
          'Zionist theorists from **Moses Hess** and **Leo Pinsker** to **David Ben-Gurion** framed statehood as the national liberation and decolonization of a persecuted indigenous people returning home rather than European imperial expansion. Culminating in the **May 14, 1948 Israeli Declaration of Independence**, Israel established a parliamentary democracy offering equal civic citizenship to remaining Arab inhabitants while fulfilling its core mission through the **1950 Law of Return** as a sanctuary where Jewish survival would never again depend on host governments.'
        ]
      }
    ],
    details: [
      'Grounded in over three millennia of Jewish ethnogenesis, language (Hebrew), archaeology, religious liturgy, and continuous—though minority—Jewish communities in cities like Jerusalem, Safed, Tiberias, and Hebron.',
      'Reinforced by binding international legal recognition in the 1922 League of Nations Mandate (San Remo Resolution) preserved under UN Charter Article 80, alongside the 1947 UNGA Partition vote.',
      'Framed as national liberation and refuge for a stateless, persecuted people rather than foreign imperial colonization.'
    ],
    sources: [
      {
        title: 'Declaration of Establishment of State of Israel (May 14, 1948)',
        url: 'https://avalon.law.yale.edu/20th_century/israel.asp',
        publisher: 'Yale Law School Avalon Project',
        year: '1948',
        category: 'Primary Text / Treaty'
      },
      {
        title: 'League of Nations Mandate for Palestine, Preamble & Articles 2, 6',
        url: 'https://avalon.law.yale.edu/20th_century/palmanda.asp',
        publisher: 'Yale Law School Avalon Project',
        year: '1922',
        category: 'Primary Text / Treaty'
      },
      {
        title: 'UNGA Resolution 181(II) — Partition Plan Recommendation (Nov 29, 1947)',
        url: 'https://avalon.law.yale.edu/20th_century/res181.asp',
        publisher: 'Yale Law School Avalon Project',
        year: '1947',
        category: 'Court / Official Record'
      }
    ],
    references: [
      'Declaration of Establishment of State of Israel (May 14, 1948)',
      'League of Nations Mandate for Palestine, Preamble & Articles 2, 6',
      'UNGA Resolution 181(II) — Partition Plan Recommendation (Nov 29, 1947)'
    ],
    tags: ['History', 'International Law', 'Religion & Culture'],
    era: '1897–1948',
    relatedIds: ['thesis-two-state']
  },
  {
    id: 'pro-zionism-continuity',
    parentId: 'thesis-zionism-legitimacy',
    kind: 'pro',
    title: 'Millennia of Ethnogenesis & Unbroken Cultural Connection',
    summary:
      'Jewish peoplehood, Hebrew language, calendar, and archaeology originated specifically in Judea and Samaria/Land of Israel, with continuous diaspora longing and uninterrupted local Jewish presence across empires.',
    sections: [
      {
        heading: 'Material Archaeology & Continuous Local Presence',
        paragraphs: [
          'Extensive material evidence—including the **Merneptah Stele** (~1208 BCE), the **Tel Dan Inscription** referencing the House of David, **First and Second Temple** archaeological strata in Jerusalem, the **Dead Sea Scrolls** at Qumran, and **Bar Kokhba Revolt** Hebrew coinage (132–135 CE)—confirms that Jewish language, law, and sovereignty formed organically in Judea and Galilee. Despite Roman, Byzantine, Arab, Crusader, Mamluk, and Ottoman rule, local Jewish communities persisted uninterruptedly in **Jerusalem**, **Safed**, **Tiberias**, **Hebron**, and **Peki’in**.',
          'Demographic surveys compiled by **Ottoman administrators** alongside **British and Prussian consuls** demonstrate that Jews once again formed the largest religious community in **Jerusalem** by the mid-1840s and an absolute majority by the 1870s—decades before the **First Aliyah (1882)** or British rule. Across centuries of diaspora life, Jewish pilgrimage festivals (**Passover**, **Shavuot**, **Sukkot**) and prayers for rain remained locked to the **Land of Israel’s** agricultural seasons rather than European or Mesopotamian climates.'
        ]
      },
      {
        heading: 'Structural Distinction From Classical Settler Colonialism',
        paragraphs: [
          'Historians of nationalism such as **Gideon Shimoni**, **Derek Penslar**, and **Benny Morris** contend that equating Zionism with classical European settler colonialism (such as British Kenya, Dutch South Africa, or French Algeria) erases essential structural distinctions. Zionist immigrants were not agents dispatched by a sovereign **imperial metropole** to extract mineral wealth or remit tribute home; instead, stateless refugees purchased land legally, revived **Hebrew**—the region’s indigenous Canaanite vernacular—and possessed no alternative homeland on earth.'
        ]
      }
    ],
    details: [
      'Archaeological record (Dead Sea Scrolls, City of David, Second Temple inscriptions, Bar Kokhba coins) confirms sovereign and cultural origins in the territory.',
      'Jews were forcibly exiled by Roman and subsequent imperial conquests rather than voluntarily abandoning their homeland; continuous communities persisted in Jerusalem (where Jews formed a plurality/majority by the mid-19th century), Safed, Hebron, and Tiberias.',
      'Unlike European metropoles in classical colonialism (e.g., Britain in Kenya or France in Algeria), Zionist immigrants had no "mother country" sending them to extract resources.'
    ],
    sources: [
      {
        title: 'The Zionist Ideology — Gideon Shimoni',
        url: 'https://brandeisuniversitypress.com/',
        publisher: 'Brandeis University Press',
        year: '1995',
        category: 'Scholarship'
      },
      {
        title: 'Declaration of Establishment of State of Israel (Official Knesset Text)',
        url: 'https://main.knesset.gov.il/en/about/pages/declaration.aspx',
        publisher: 'The Knesset',
        year: '1948',
        category: 'Primary Text / Treaty'
      },
      {
        title: 'Lex Fridman Podcast #418 — Israel–Palestine Debate (Historical Origins Segment)',
        url: 'https://lexfridman.com/israel-palestine-debate/',
        publisher: 'Lex Fridman Podcast',
        year: '2024',
        category: 'Debate / Broadcast'
      }
    ],
    references: [
      'The Zionist Ideology — Gideon Shimoni (1995)',
      'Declaration of Establishment of State of Israel (Official Knesset Text)',
      'Lex Fridman Podcast #418 — Israel–Palestine Debate (2024)'
    ],
    tags: ['History', 'Religion & Culture'],
    era: 'Antiquity–1948'
  },
  {
    id: 'con-zionism-ancient-gap',
    parentId: 'pro-zionism-continuity',
    kind: 'con',
    title: 'Ancient Connection Cannot Override Modern Resident Majority',
    summary:
      'Critics argue that ancient historical or religious ties from 2,000 years ago do not confer a modern political right to establish a sovereign state over an existing population that lived continuously on the land for centuries.',
    sections: [
      {
        heading: 'Wilsonian Self-Determination & Consent of the Governed',
        paragraphs: [
          'Critics of political Zionism argue that modern international law—crystallizing out of **Woodrow Wilson’s Fourteen Points** and **Article 22 of the 1919 League of Nations Covenant**—anchors territorial self-determination in the democratic consent of the actual population inhabiting a country at the moment imperial rule ends. When Ottoman authority collapsed in 1918, Muslim and Christian Arabs comprised roughly **90% of Palestine’s resident population**, rooted in centuries of unbroken familial, agricultural, and urban life.',
          'Dispatched by President Wilson in 1919 to survey Levantine public opinion, the American **King-Crane Commission** explicitly warned the Paris Peace Conference that the Zionist program of unlimited immigration aiming at a Jewish state could not be implemented without "the gravest trespass" upon the civil and political rights of non-Jewish inhabitants—concluding that only armed military force could impose minority-backed partition against **nine-tenths of the living population**.'
        ]
      },
      {
        heading: 'Global Precedent & Non-Statist Attachment',
        paragraphs: [
          'International-law scholars further warn that if **two-millennia-old ancestral claims** were permitted to supersede centuries of continuous demographic habitation, virtually every modern international boundary across Europe, the Americas, and Asia would fracture into endless irredentist upheaval. Moreover, both traditional rabbinic communities of the **Old Yishuv** and cultural or binationalist Zionist thinkers such as **Ahad Ha’am**, **Judah Magnes**, and **Martin Buber** maintained that spiritual and cultural renewal in Zion never required exclusive state sovereignty over Arab neighbors.'
        ]
      }
    ],
    details: [
      'International norms of self-determination (Wilsonian principles, League Covenant Art. 22) prioritize the consent of the living resident majority at the moment of decolonization.',
      'Applying two-millennia-old territorial claims globally would destabilize virtually every modern nation-state border.',
      'Spiritual attachment to Zion historically coexisted with minority residency without requiring exclusive political sovereignty over Arab inhabitants.'
    ],
    sources: [
      {
        title: 'Covenant of the League of Nations, Article 22 (1919)',
        url: 'https://avalon.law.yale.edu/20th_century/leagcov.asp',
        publisher: 'Yale Law School Avalon Project',
        year: '1919',
        category: 'Primary Text / Treaty'
      },
      {
        title: 'King-Crane Commission Report — Foreign Relations of the United States (Paris Peace Conference)',
        url: 'https://history.state.gov/historicaldocuments/frus1919Parisv12',
        publisher: 'U.S. Department of State Office of the Historian',
        year: '1919',
        category: 'Court / Official Record'
      },
      {
        title: 'Before Their Diaspora: A Photographic History of the Palestinians 1876–1948 — Walid Khalidi',
        url: 'https://www.palestine-studies.org/',
        publisher: 'Institute for Palestine Studies',
        year: '1984',
        category: 'Scholarship'
      }
    ],
    references: [
      'Covenant of the League of Nations, Article 22 (1919)',
      'King-Crane Commission Report (1919)',
      'Walid Khalidi, Before Their Diaspora (1984)'
    ],
    tags: ['International Law', 'Demographics', 'History'],
    era: '1919–1948'
  },
  {
    id: 'pro-zionism-existential-refuge',
    parentId: 'thesis-zionism-legitimacy',
    kind: 'pro',
    title: 'Existential Necessity After Global Persecution & Mizrahi Flight',
    summary:
      'Centuries of European antisemitism, Russian pogroms, the Holocaust, closed Western borders (Evian Conference 1938), and the subsequent flight/expulsion of ~850,000 Jews from Arab countries proved sovereign statehood was vital for Jewish survival.',
    sections: [
      {
        heading: 'Failure of Emancipation, Closed Borders & the Shoah',
        paragraphs: [
          'Early Zionism’s core diagnosis—that statelessness left Jewish minorities perpetually exposed to lethal persecution—was tragically confirmed between **1881 and 1945**. Neither Tsarist autocracy (which tolerated deadly **Russian pogroms** in 1881–1884 and 1903–1906) nor Western civic assimilation (shaken by France’s **1894 Dreyfus Affair** and obliterated by **Nazi Germany**) guaranteed physical survival. At the **July 1938 Evian Conference**, 31 of 32 Western and Latin American governments refused to open their borders to desperate German and Austrian Jewish refugees.',
          'Months later, bowing to the 1936–1939 Arab Revolt, London issued the **May 1939 British White Paper**, capping Jewish immigration to Mandate Palestine at **75,000 certificates over five years** and banning Jewish land purchases in 95% of the country. Those restrictions locked the gates of the legally recognized Jewish National Home precisely as **six million European Jews** were murdered in the **Holocaust**, leaving **250,000 stateless survivors** behind barbed wire in postwar Displaced Persons camps.'
        ]
      },
      {
        heading: 'The Mizrahi & Sephardi Exodus From Arab and Muslim Lands',
        paragraphs: [
          'Jewish existential vulnerability extended equally across the Middle East and North Africa, where millennia-old Jewish communities endured escalating mob attacks—including the **1941 Baghdad Farhud**, **1945 Cairo and Tripoli riots**, and **1947 Aden pogrom**—followed after 1948 by denaturalization decrees, mass arrests, and property confiscations. Roughly **850,000 Mizrahi and Sephardi Jews** fled or were expelled from Iraq, Egypt, Yemen, Morocco, Libya, and Syria; Israel absorbed ~600,000 of them, whose descendants now constitute **over half of Israeli Jewry**.'
        ]
      }
    ],
    details: [
      'Six million European Jews were murdered in the Holocaust while Western nations shut borders at Evian (1938) and Mandate quotas (1939 British White Paper) restricted entry to Palestine.',
      'Over half of Israeli Jews today trace some or all ancestry to Middle Eastern and North African (Mizrahi/Sephardi) communities in Iraq, Yemen, Egypt, Morocco, Syria, and Libya—refuting claims that Israeli society is purely "European."',
      'Mainstream Zionist leadership accepted painful territorial compromises in both the 1937 Peel Commission and the 1947 UN Partition Plan to secure an immediate sovereign haven.'
    ],
    sources: [
      {
        title: 'British White Paper of May 1939 on Palestine',
        url: 'https://avalon.law.yale.edu/20th_century/brwh1939.asp',
        publisher: 'Yale Law School Avalon Project',
        year: '1939',
        category: 'Primary Text / Treaty'
      },
      {
        title: 'The Evian Conference on Refugees (July 1938)',
        url: 'https://encyclopedia.ushmm.org/content/en/article/the-evian-conference',
        publisher: 'United States Holocaust Memorial Museum',
        year: '2023',
        category: 'Scholarship'
      },
      {
        title: 'In Ishmael’s House: A History of Jews in Muslim Lands — Martin Gilbert',
        url: 'https://yalebooks.yale.edu/',
        publisher: 'Yale University Press',
        year: '2010',
        category: 'Scholarship'
      }
    ],
    references: [
      'British White Paper of May 1939 on Palestine',
      'The Evian Conference on Refugees (July 1938) — USHMM',
      'Martin Gilbert, In Ishmael’s House: A History of Jews in Muslim Lands (2010)'
    ],
    tags: ['History', 'Human Rights', 'Demographics'],
    era: '1881–1960s',
    relatedIds: ['con-return-mizrahi-exchange']
  },
  {
    id: 'con-zionism-palestinian-cost',
    parentId: 'pro-zionism-existential-refuge',
    kind: 'con',
    title: 'Palestinians Paid the Price for European Persecution',
    summary:
      'Palestinian scholars contend that while European antisemitism and the Holocaust were catastrophic crimes, Palestinians bore no responsibility for them and should not have been dispossessed to resolve Europe’s crime.',
    sections: [
      {
        heading: 'Moral Asymmetry & Postwar Western Border Restrictions',
        paragraphs: [
          'Palestinian scholars including **Edward Said** and **Rashid Khalidi** contend that invoking European persecution and the **Holocaust** to justify partitioning Palestine shifts the moral and territorial cost of Europe’s darkest crimes onto an innocent third party. Centuries of Christian inquisitorial expulsions, Russian pogroms, and Nazi extermination camps originated strictly in Europe, yet Palestinian farmers and townspeople were expected to surrender over half their homeland and become, in Said’s phrase, **"the victims of the victims."**',
          'Diplomatic historians highlight acute Western double standards between **1945 and 1948**: victorious Allied powers—including the **United States** (operating under restrictive 1924 national-origins quotas and the narrow **1948 Displaced Persons Act**), **Canada**, and **Great Britain**—declined to admit large numbers of Jewish **Displaced Persons** domestically, finding it politically convenient to champion partitioning Arab-majority Palestine at the United Nations instead of opening Western doors.'
        ]
      },
      {
        heading: 'Inevitable Resistance to Demographic Transformation',
        paragraphs: [
          'Critics further cite Revisionist Zionist leader **Ze’ev Jabotinsky’s** remarkably candid **1923 essay "The Iron Wall (We and the Arabs)"**, which ridiculed claims that Palestinian Arabs could ever be induced to peacefully forfeit their majority status in exchange for railway modernization or economic investment. Jabotinsky observed that *every* native population throughout history resists external demographic transformation regardless of newcomers’ humanitarian plight—confirming that Palestinian opposition stemmed from ordinary defense of homeland rather than European antisemitism.'
        ]
      }
    ],
    details: [
      'Framing: remedying the persecution of one people by creating a refugee crisis for another violates basic moral reciprocity.',
      'Western powers that restricted Jewish refugee entry into the US, UK, and Canada post-WWII supported partitioning Palestine instead of opening their own borders.',
      'Early Zionist thinkers (e.g., Ze’ev Jabotinsky’s 1923 "Iron Wall" essay) explicitly recognized that native populations naturally resist demographic transformation regardless of newcomers’ humanitarian motives.'
    ],
    sources: [
      {
        title: 'The Iron Wall (We and the Arabs) — Ze’ev Jabotinsky (1923)',
        url: 'https://en.jabotinsky.org/',
        publisher: 'Jabotinsky Institute Archive',
        year: '1923',
        category: 'Primary Text / Treaty'
      },
      {
        title: 'The Question of Palestine — Edward W. Said',
        url: 'https://www.penguinrandomhouse.com/',
        publisher: 'Vintage Books',
        year: '1979',
        category: 'Scholarship'
      },
      {
        title: 'The Hundred Years’ War on Palestine — Rashid Khalidi',
        url: 'https://us.macmillan.com/',
        publisher: 'Metropolitan Books',
        year: '2020',
        category: 'Scholarship'
      }
    ],
    references: [
      'Ze’ev Jabotinsky, "The Iron Wall" (1923)',
      'Edward W. Said, The Question of Palestine (1979)',
      'Rashid Khalidi, The Hundred Years’ War on Palestine (2020)'
    ],
    tags: ['Human Rights', 'History'],
    era: '1920s–1948'
  },
  {
    id: 'con-zionism-demographic-colonial',
    parentId: 'thesis-zionism-legitimacy',
    kind: 'con',
    title: 'Demographic Transformation Under Imperial Patronage',
    summary:
      'In 1880 Jews comprised ~5–8% of Palestine’s population and ~33% by 1947 (owning ~7% of private land), yet UN Resolution 181 allocated 55% of the territory to the proposed Jewish state without local majority consent.',
    sections: [
      {
        heading: 'Imperial Shielding & Demographic Shift (1880–1947)',
        paragraphs: [
          'Critics emphasize that Palestine’s demographic transformation occurred strictly behind the bayonets of the **British Empire**. Ottoman and early British census figures show Jews rising from **~5–8% of Palestine’s population in 1880** (**11.1% in the 1922 British census**) to **~32–33% by 1947**. Throughout the **1917 Balfour Declaration** and **1922 Mandate**, London systematically withheld democratic self-governing parliaments enjoyed incrementally by Iraq, Transjordan, and Egypt precisely because an elected Palestinian legislature would have ended Zionist immigration.',
          'When Palestinians launched a six-month general strike and rural rebellion during the **1936–1939 Arab Revolt**, London deployed **over 25,000 British soldiers**, Royal Air Force squadrons, and British-armed Zionist auxiliary units (**Special Night Squads** under Orde Wingate) to crush the uprising—killing, wounding, imprisoning, or exiling **more than 10% of Palestine’s adult male Arab population** and shattering indigenous military and political organization prior to the 1947–1948 crisis.'
        ]
      },
      {
        heading: 'Disproportionate Territorial Allocation in UNGA Resolution 181',
        paragraphs: [
          'According to the **1945 Mandate Village Statistics** examined by **UNSCOP** in 1947, Jewish individuals and land-purchasing funds held title to roughly **6–7% of Palestine’s total land surface** while Arabs constituted two-thirds of the overall population and a majority in fifteen of sixteen sub-districts. Nonetheless, **UNGA Resolution 181**—a non-binding recommendation adopted over the opposition of every neighboring Middle Eastern and Asian state—awarded **55–56% of Mandate Palestine** to a proposed Jewish state containing **~40–45% Arab inhabitants**.'
        ]
      }
    ],
    details: [
      'The 1917 Balfour Declaration promised a "national home for the Jewish people" while referring to the ~90% Arab majority only as "existing non-Jewish communities" with civil and religious—not national—rights.',
      'British suppression of the 1936–1939 Arab Revolt shattered Palestinian political and military leadership prior to 1947.',
      'In the proposed 1947 Jewish state’s borders, Arabs initially constituted roughly 40–45% of the population alongside ~55% Jews, while Jewish private land ownership stood near ~6–7% of total Mandate territory.'
    ],
    sources: [
      {
        title: 'The Balfour Declaration (November 2, 1917)',
        url: 'https://avalon.law.yale.edu/20th_century/balfour.asp',
        publisher: 'Yale Law School Avalon Project',
        year: '1917',
        category: 'Primary Text / Treaty'
      },
      {
        title: 'UNSCOP Report to the General Assembly (Official Record A/364)',
        url: 'https://undocs.org/A/364',
        publisher: 'United Nations Official Document System',
        year: '1947',
        category: 'Court / Official Record'
      },
      {
        title: 'UNGA Resolution 181(II) — Partition Plan Boundaries & Demographic Annexes',
        url: 'https://undocs.org/A/RES/181(II)',
        publisher: 'United Nations General Assembly',
        year: '1947',
        category: 'Court / Official Record'
      }
    ],
    references: [
      'The Balfour Declaration (November 2, 1917)',
      'UNSCOP Report to the General Assembly (Official Record A/364, 1947)',
      'UNGA Resolution 181(II) — Partition Plan Boundaries (1947)'
    ],
    tags: ['Demographics', 'History', 'International Law'],
    era: '1917–1947'
  },
  {
    id: 'con-rebuttal-partition-land',
    parentId: 'con-zionism-demographic-colonial',
    kind: 'con',
    title: '70%+ of Mandate Land Was Public State Land & Negev Desert',
    summary:
      'Defenders of the 1947 UN Partition note that ~70% of Mandate Palestine was unowned public/state land (not private Arab property), ~60% of the Jewish allocation was the arid Negev desert, and Transjordan (77% of the original Mandate) had already become an Arab state.',
    sections: [
      {
        heading: 'Ottoman State Domains, the Negev & the 1922 Transjordan Separation',
        paragraphs: [
          'Legal and historical defenders of partition point out that citing "~7% private Jewish land ownership" against 100% of Palestine’s surface area commits a category error: private Arab freehold ownership also covered only a minority of the country. Over **70% of western Palestine** consisted of public state domain inherited from **Ottoman *miri* and *mewat* (waste/crown) land categories** held in trust by the British Mandatory government for future sovereign disposition, not owned by private Arab landlords or villagers.',
          'Furthermore, roughly **60% of the territory allocated to the proposed Jewish state** by **UNSCOP** consisted of the arid, sparsely populated **Negev Desert** (inhabited primarily by nomadic Bedouin tribes), while the fertile central highlands of **Judea, Samaria, and western Galilee** were assigned to the Arab state. Defenders also emphasize that Britain’s **June 1922 Churchill White Paper** had already detached **Transjordan**—encompassing **77% of the original Palestine Mandate**—to create an exclusively Arab kingdom closed to Jewish settlement.'
        ]
      },
      {
        heading: 'Market Land Purchases & Refugee Absorption Design',
        paragraphs: [
          'Archival land-registry studies by **Kenneth Stein** confirm that every single parcel acquired by the **Jewish National Fund** and private Jewish buyers prior to the 1947–1948 war was purchased voluntarily through legal contracts at market or steeply inflated prices, frequently sold directly by prominent Palestinian and absentee Levantine Arab landowners. **UNSCOP’s majority** deliberately placed state desert lands inside the Jewish allocation so Europe’s **250,000 Holocaust Displaced Persons** could be absorbed through desert reclamation without displacing settled Arab hill towns.'
        ]
      }
    ],
    details: [
      'Comparing private Jewish land purchases (~7%) to total area obscures that private Arab title also covered only a fraction of total Mandate land, with >70% state domains inherited from Ottoman miri/mewat categories.',
      'Roughly 60% of the 1947 Jewish allocation was the arid Negev desert, and UNSCOP designed those boundaries to absorb Holocaust survivors languishing in Displaced Persons camps.',
      'Every acre acquired by Jewish institutions prior to the 1947–48 war was purchased legally at market or above-market prices, while Transjordan (77% of the original Mandate) had already become an Arab state in 1922–1946.'
    ],
    sources: [
      {
        title: 'British White Paper of June 1922 (Churchill White Paper Separating Transjordan)',
        url: 'https://avalon.law.yale.edu/20th_century/brwh1922.asp',
        publisher: 'Yale Law School Avalon Project',
        year: '1922',
        category: 'Primary Text / Treaty'
      },
      {
        title: 'UNSCOP Majority Plan Justification (Official Record A/364)',
        url: 'https://undocs.org/A/364',
        publisher: 'United Nations Official Document System',
        year: '1947',
        category: 'Court / Official Record'
      },
      {
        title: 'The Land Question in Palestine, 1917–1939 — Kenneth W. Stein',
        url: 'https://uncpress.org/',
        publisher: 'University of North Carolina Press',
        year: '1984',
        category: 'Scholarship'
      }
    ],
    references: [
      'British White Paper of June 1922 (Churchill White Paper)',
      'UNSCOP Majority Plan Justification (Official Record A/364, 1947)',
      'Kenneth W. Stein, The Land Question in Palestine, 1917–1939 (1984)'
    ],
    tags: ['International Law', 'History', 'Demographics'],
    era: '1922–1947'
  },

  // THESIS 1B: Palestinian National Rights & The 1948 Nakba
  {
    id: 'thesis-palestinian-nakba',
    parentId: 'pillar-self-determination',
    kind: 'thesis',
    title: 'Palestinian Indigenous Habitation & Injustice of the 1948 Nakba',
    summary:
      'Palestinians are an indigenous people formed through centuries of continuous habitation in historic Palestine whose collective self-determination was denied and who suffered mass dispossession during the 1947–1949 Nakba ("Catastrophe").',
    sections: [
      {
        heading: 'Shattering of Palestinian Society in 1947–1949',
        paragraphs: [
          'In Palestinian collective memory and human-rights historiography, the **1947–1949 Nakba ("Catastrophe")** marks the sudden dismantling of an indigenous society on its ancestral soil. Between December 1947 and early 1949, approximately **700,000 to 750,000 Palestinian Arabs**—more than half of Mandate Palestine’s entire Arab population and roughly **80% of the Arabs living within the territory that became Israel**—fled or were expelled into tent camps across the **West Bank**, **Gaza Strip**, **Jordan**, **Lebanon**, and **Syria**.',
          'Across the newly established state’s borders, **over 400 Palestinian villages and hamlets** were depopulated, bulldozed, or planted over with forests and new agricultural settlements, while cosmopolitan Arab urban quarters in **Jaffa**, **Haifa**, **West Jerusalem (Qatamon, Talbiya, Baq’a)**, **Acre**, **Lydda**, and **Ramle** lost nearly their entire prewar populations. Once armistice agreements were signed in 1949, Israeli authorities permanently barred civilian repatriation and transferred refugee homes, citrus groves, workshops, and bank accounts into state custody.'
        ]
      },
      {
        heading: 'Inherent Self-Determination & Contested UN Remedies',
        paragraphs: [
          'Proponents ground Palestinian national rights in **Article 1(2) of the UN Charter** and natural rights of continuous habitation: the fact that **Ottoman** and **British** empires ruled Palestine prior to 1948 no more negated Palestinian nationhood than imperial rule negated Indian, Kenyan, or Algerian nationhood. Palestinians also point to **UNGA Resolution 194(III) (December 1948)**—though contested by Israel as a non-binding General Assembly recommendation conditioned on peace—as diplomatic recognition that displaced civilians retained legitimate claims to repatriation or compensation.'
        ]
      }
    ],
    details: [
      'Approximately 700,000–750,000 Palestinian Arabs—roughly half of Mandate Palestine’s Arab population—fled or were expelled from territories that became Israel, and over 400 Arab towns and villages were depopulated or demolished.',
      'Palestinians were barred from returning to their homes after hostilities ended, while their land and urban properties in Jaffa, Haifa, West Jerusalem, Acre, Lydda, and Ramle were transferred to state custody.',
      'Asserts that national self-determination inheres in a settled population regardless of whether prior imperial rulers (Ottoman or British) recognized a standalone state.'
    ],
    sources: [
      {
        title: 'Charter of the United Nations, Article 1(2) — Self-Determination of Peoples',
        url: 'https://www.un.org/en/about-us/un-charter/full-text',
        publisher: 'United Nations',
        year: '1945',
        category: 'Primary Text / Treaty'
      },
      {
        title: 'UNGA Resolution 194(III) — Conciliation Commission for Palestine (Dec 11, 1948)',
        url: 'https://undocs.org/A/RES/194(III)',
        publisher: 'United Nations General Assembly',
        year: '1948',
        category: 'Court / Official Record'
      },
      {
        title: 'The Birth of the Palestinian Refugee Problem Revisited — Benny Morris',
        url: 'https://www.cambridge.org/',
        publisher: 'Cambridge University Press',
        year: '2004',
        category: 'Scholarship'
      }
    ],
    references: [
      'Charter of the United Nations, Article 1(2) (1945)',
      'UNGA Resolution 194(III) — Conciliation Commission for Palestine (Dec 11, 1948)',
      'Benny Morris, The Birth of the Palestinian Refugee Problem Revisited (2004)'
    ],
    tags: ['History', 'Human Rights', 'Demographics'],
    era: '1947–1949',
    relatedIds: ['thesis-right-of-return']
  },
  {
    id: 'pro-nakba-archival-evidence',
    parentId: 'thesis-palestinian-nakba',
    kind: 'pro',
    title: 'Declassified Israeli Archives Confirm Expulsions & Prevented Return',
    summary:
      'Declassified IDF and Cabinet archives examined by Israeli "New Historians" document direct military expulsions (e.g., Lydda and Ramle in July 1948), psychological warfare, atrocities such as Deir Yassin, and a June 1948 Cabinet decision barring refugee return.',
    sections: [
      {
        heading: 'IDF Intelligence Files, Plan Dalet & Operation Dani',
        paragraphs: [
          'Beginning in the late 1980s, Israeli **"New Historians"** (**Benny Morris**, **Avi Shlaim**, **Ilan Pappé**) examined newly declassified **IDF**, **Haganah**, and Cabinet archives, refuting early official claims that Palestinians departed chiefly at the behest of Arab radio broadcasts. An internal **June 1948 IDF Intelligence Service report** concluded that over **70% of Arab flight** up to June 1 resulted directly from Jewish military operations, mortar bombardments, psychological "whispering" campaigns, and panic following the **April 9, 1948 Deir Yassin massacre**.',
          'While historians debate whether **Plan Dalet (March 1948)** represented a premeditated blueprint for ethnic cleansing (Pappé) or a wartime military directive to secure strategic roads ahead of Arab invasion that authorized brigade commanders to expel resisting villages (Morris), declassified operational orders confirm major direct expulsions. During **Operation Dani (July 1948)**, roughly **50,000–70,000 Palestinian civilians in Lydda and Ramle** were forcibly marched eastward toward Arab Legion lines under written instructions signed by **Yitzhak Rabin** with **David Ben-Gurion’s** approval.'
        ]
      },
      {
        heading: 'The June 1948 Cabinet Ban & Absentee Property Law',
        paragraphs: [
          'Crucially, even where villagers fled active artillery or street combat intending to return home once hostilities subsided—the normal pattern in twentieth-century warfare—the **Israeli Provisional Cabinet resolved on June 16, 1948** to prevent Arab refugee return. Israeli forces subsequently mined or bulldozed hundreds of vacated villages, enforced lethal anti-"infiltration" border patrols, and enacted the **1950 Absentee Property Law**, transferring vast private Palestinian lands and urban homes to the **Custodian of Absentee Property** and the **Jewish National Fund**.'
        ]
      }
    ],
    details: [
      'Plan Dalet (March 1948) authorized Haganah commanders to secure strategic corridors and depopulate hostile or resisting villages along vital arteries.',
      'In Operation Dani (July 1948), roughly 50,000–70,000 residents of Lydda and Ramle were ordered out on signed instructions approved by Yitzhak Rabin and David Ben-Gurion.',
      'Even where villagers fled out of wartime terror intending to return once fighting subsided, Israeli forces sealed borders, demolished villages, and passed the 1950 Absentee Property Law.'
    ],
    sources: [
      {
        title: '1948: A History of the First Arab-Israeli War — Benny Morris',
        url: 'https://yalebooks.yale.edu/',
        publisher: 'Yale University Press',
        year: '2008',
        category: 'Scholarship'
      },
      {
        title: 'The Birth of the Palestinian Refugee Problem Revisited — Benny Morris',
        url: 'https://www.cambridge.org/',
        publisher: 'Cambridge University Press',
        year: '2004',
        category: 'Scholarship'
      },
      {
        title: 'Lex Fridman Podcast #418 — Finkelstein, Rabbani, Morris & Bonnell on 1948 Archives',
        url: 'https://lexfridman.com/israel-palestine-debate/',
        publisher: 'Lex Fridman Podcast',
        year: '2024',
        category: 'Debate / Broadcast'
      }
    ],
    references: [
      'Benny Morris, 1948: A History of the First Arab-Israeli War (2008)',
      'Benny Morris, The Birth of the Palestinian Refugee Problem Revisited (2004)',
      'Lex Fridman Podcast #418 — Debate on 1948 Archives (March 2024)'
    ],
    tags: ['History', 'Human Rights', 'International Law'],
    era: '1948–1950'
  },
  {
    id: 'pro-nakba-continuous-society',
    parentId: 'thesis-palestinian-nakba',
    kind: 'pro',
    title: 'Deep-Rooted Urban, Agrarian & Cultural Society Prior to 1948',
    summary:
      'Before 1948, Palestine possessed vibrant Arabic newspapers (Filastin, Al-Karmil), municipal councils, citrus export networks (Jaffa oranges), courts, and distinct regional identity documented in Ottoman and Mandate records.',
    sections: [
      {
        heading: 'Civic Life, Commerce & Print Culture Before 1948',
        paragraphs: [
          'Social historians examining **Ottoman sharia court registers**, **imperial tax cadastres (*defters*)**, and British municipal archives—notably **Beshara Doumani**, **Salim Tamari**, and **Walid Khalidi**—have decisively refuted colonial tropes depicting pre-1948 Palestine as an arid, unpopulated wasteland. For centuries prior to 1948, coastal and highland centers including **Jaffa**, **Haifa**, **Jerusalem**, **Nablus**, **Acre**, **Gaza**, and **Hebron** sustained integrated commercial networks, textile workshops, Nabulsi olive-oil soap factories, municipal councils, labor unions, and women’s civic associations.',
          'Rapid agricultural and port modernization accompanied this urban vitality, spearheaded by the celebrated **Jaffa orange citrus sector**, which cultivated hundreds of thousands of irrigated dunams and exported **more than 15 million crates** to British and continental markets on the eve of World War II. Simultaneously, a flourishing Arabic press—led by **Al-Karmil** (founded in Haifa in 1908) and **Filastin** (founded in Jaffa in 1911)—fostered nationwide political debate across towns and rural literacy circles.'
        ]
      },
      {
        heading: 'Crystallization of Distinct Palestinian Identity',
        paragraphs: [
          'In *Palestinian Identity*, **Rashid Khalidi** demonstrates through nineteenth- and early twentieth-century diaries, petitions, parliamentary speeches, and press editorials that inhabitants of Palestine articulated an overlapping attachment to sacred geography, local town, Arabism, and Ottoman constitutionalism before crystallizing into explicit **modern Palestinian territorial nationalism** between **1908 and 1923**—evolving on the exact same historical trajectory and timeline as neighboring **Syrian**, **Lebanese**, **Iraqi**, and **Jordanian** national identities.'
        ]
      }
    ],
    details: [
      'Refutes "land without a people" tropes: cities such as Jaffa, Haifa, Jerusalem, Acre, Nablus, and Hebron hosted thriving literary, commercial, judicial, and civic institutions.',
      'Pre-1948 Palestine sustained a major export economy (including >15 million crates of Jaffa citrus annually by 1939) and widely read Arabic newspapers such as Al-Karmil (1908) and Filastin (1911).',
      'Like neighboring Lebanese, Syrian, and Iraqi nationalisms, distinct Palestinian national consciousness crystallized in the late Ottoman and post-WWI period around shared attachment to a defined homeland.'
    ],
    sources: [
      {
        title: 'Palestinian Identity: The Construction of Modern National Consciousness — Rashid Khalidi',
        url: 'https://cup.columbia.edu/',
        publisher: 'Columbia University Press',
        year: '1997',
        category: 'Scholarship'
      },
      {
        title: 'Rediscovering Palestine: Merchants and Peasants in Jabal Nablus, 1700–1900 — Beshara Doumani',
        url: 'https://www.ucpress.edu/',
        publisher: 'University of California Press',
        year: '1995',
        category: 'Scholarship'
      },
      {
        title: 'Before Their Diaspora: A Photographic History of the Palestinians 1876–1948 — Walid Khalidi',
        url: 'https://www.palestine-studies.org/',
        publisher: 'Institute for Palestine Studies',
        year: '1984',
        category: 'Scholarship'
      }
    ],
    references: [
      'Rashid Khalidi, Palestinian Identity: The Construction of Modern National Consciousness (1997)',
      'Beshara Doumani, Rediscovering Palestine: Merchants and Peasants in Jabal Nablus, 1700–1900 (1995)',
      'Walid Khalidi, Before Their Diaspora (1984)'
    ],
    tags: ['History', 'Religion & Culture', 'Demographics'],
    era: '1700–1948'
  },
  {
    id: 'con-nakba-war-context',
    parentId: 'thesis-palestinian-nakba',
    kind: 'con',
    title: 'Displacement Occurred in a War Initiated After Rejecting Partition',
    summary:
      'Israeli historians emphasize that no displacement would have occurred had the Arab Higher Committee and neighboring Arab states accepted UN Resolution 181 instead of launching a war in Nov 1947 and invading in May 1948 to prevent Jewish statehood.',
    sections: [
      {
        heading: 'Causal Responsibility & Existential War of Survival',
        paragraphs: [
          'Historians including **Benny Morris** (in his contextual synthesis) and **Efraim Karsh** stress that the Palestinian refugee crisis was the byproduct—not the cause—of a war launched by Palestinian leadership under **Haj Amin al-Husseini** and five neighboring Arab states to strangle the nascent Jewish state at birth. Had the **Arab Higher Committee** and **Arab League** accepted **UNGA Resolution 181** in November 1947 alongside the **Jewish Agency**, an independent Palestinian state would have been established in 1948 with **zero refugees**.',
          'Beginning on **November 30, 1947**, Arab militias ambushed Jewish civilian buses, cut water pipelines, and besieged **100,000 Jews in Jerusalem**, followed on **May 15, 1948** by coordinated conventional invasions from **Egypt, Transjordan, Iraq, Syria, and Lebanon**. Fighting three years after the Holocaust while losing **~6,000 dead (1% of the entire Jewish population)**, Haganah and IDF commanders cleared hostile villages commanding vital supply arteries out of acute wartime survival necessity rather than any prewar expulsion masterplan.'
        ]
      },
      {
        heading: 'Asymmetric Wartime Expulsions & Remaining Arab Citizens',
        paragraphs: [
          'Defenders highlight a stark wartime asymmetry: in **100% of territories captured by invading Arab armies**—including the **Gush Etzion bloc**, northern Jerusalem communities, and the **Old City’s ancient Jewish Quarter**—every single Jew was killed, marched into captivity, or expelled, with synagogues systematically dynamited. Conversely, across dozens of non-belligerent Arab towns inside Israel (such as **Nazareth**, **Abu Ghosh**, and **Fureidis**), **~160,000 Arabs** remained, received Israeli citizenship, and grew into **~2.1 million Arab citizens (~21% of Israel)** today.'
        ]
      }
    ],
    details: [
      'Civil war began immediately after Nov 29, 1947 with attacks on Jewish buses and siege of 100,000 Jews in Jerusalem; on May 15, 1948, regular armies of Egypt, Transjordan, Iraq, Syria, and Lebanon invaded.',
      'Israel lost ~6,000 lives (1% of its entire population) in an existential struggle, and every Jewish community captured by Arab forces (such as Gush Etzion and the Old City Jewish Quarter) was completely expelled or destroyed.',
      'Roughly 160,000 Arabs who remained inside Israel (e.g., Nazareth, Abu Ghosh, Galilee towns) became Israeli citizens (today ~2.1 million Arab citizens of Israel, ~21% of the population).'
    ],
    sources: [
      {
        title: 'Declaration of Establishment of State of Israel (Appeal for Peace & Equal Citizenship)',
        url: 'https://avalon.law.yale.edu/20th_century/israel.asp',
        publisher: 'Yale Law School Avalon Project',
        year: '1948',
        category: 'Primary Text / Treaty'
      },
      {
        title: 'Palestine Betrayed — Efraim Karsh',
        url: 'https://yalebooks.yale.edu/',
        publisher: 'Yale University Press',
        year: '2010',
        category: 'Scholarship'
      },
      {
        title: '1948: A History of the First Arab-Israeli War — Benny Morris',
        url: 'https://yalebooks.yale.edu/',
        publisher: 'Yale University Press',
        year: '2008',
        category: 'Scholarship'
      }
    ],
    references: [
      'Declaration of Establishment of State of Israel (May 14, 1948)',
      'Efraim Karsh, Palestine Betrayed (2010)',
      'Benny Morris, 1948: A History of the First Arab-Israeli War (2008)'
    ],
    tags: ['History', 'Security'],
    era: '1947–1949'
  },
  {
    id: 'con-rebuttal-civilian-immunity',
    parentId: 'con-nakba-war-context',
    kind: 'con',
    title: 'Wartime Decisions by Leaders Do Not Extinguish Civilian Rights',
    summary:
      'Under international humanitarian law, non-combatant civilians do not forfeit their homes, private property, or right to return simply because political leaders or neighboring states rejected a diplomatic proposal or waged war.',
    sections: [
      {
        heading: 'Individual Civilian Rights vs. Collective Punishment',
        paragraphs: [
          'International humanitarian lawyers emphasize a foundational principle codified in **Article 46 of the 1907 Hague Regulations** and customary law of armed conflict: family honor, civilian lives, and private property must be respected, private property "cannot be confiscated," and individual non-combatants never forfeit their homes merely because unelected political elites or neighboring Arab monarchs waged war. Rejecting **UNGA Resolution 181**—a non-binding recommendation to partition their country—did not turn ordinary Palestinian farmers, artisans, and children into lawful targets of permanent exile.',
          'Archival village histories further demonstrate that scores of depopulated Palestinian communities—including **Deir Yassin** west of Jerusalem, **Al-Ghabisiyya** in Western Galilee, and dozens of coastal plain villages—had neither joined **Arab Liberation Army** offensives nor attacked neighboring Jewish traffic, and in multiple documented instances had concluded explicit **local non-aggression and mutual-aid pacts** with adjacent *kibbutzim* shortly before Israeli brigades expelled their residents.'
        ]
      },
      {
        heading: 'Domestic Military Rule & "Present Absentees" (1948–1966)',
        paragraphs: [
          'Even for the **~160,000 Palestinians** who remained inside Israel and became citizens, full civic equality was withheld for nearly two decades. Until **December 1966**, most Arab citizens were governed under domestic **Israeli Military Administration** requiring travel permits to leave their towns, while **30,000–40,000 internally displaced Israeli Arab citizens**—including Christian villagers of **Iqrit** and **Kafr Bir’im** who evacuated peacefully on a promised two-week IDF order—were classified under law as **"present absentees"** whose ancestral lands were permanently expropriated.'
        ]
      }
    ],
    details: [
      'Many depopulated Palestinian villages (including several with non-aggression pacts with neighboring kibbutzim) had not participated in hostilities.',
      'Rejecting a non-binding General Assembly recommendation (Res. 181) that divided one’s homeland did not legally authorize permanent confiscation of private civilian property under Hague Reg. Art. 46.',
      'Inside Israel itself, remaining Arab citizens were kept under domestic military administration until 1966 and tens of thousands lost internal village lands as "present absentees."'
    ],
    sources: [
      {
        title: 'Hague Convention (IV) Respecting the Laws and Customs of War on Land, Article 46 (1907)',
        url: 'https://avalon.law.yale.edu/20th_century/hague04.asp',
        publisher: 'Yale Law School Avalon Project',
        year: '1907',
        category: 'Primary Text / Treaty'
      },
      {
        title: 'ICRC Customary International Humanitarian Law Database — Rules 132 & 133 (Return & Property Rights)',
        url: 'https://ihl-databases.icrc.org/en/customary-ihl',
        publisher: 'International Committee of the Red Cross',
        year: '2005',
        category: 'Primary Text / Treaty'
      },
      {
        title: 'Good Arabs: The Israeli Security Agencies and the Israeli Arabs, 1948–1967 — Hillel Cohen',
        url: 'https://www.ucpress.edu/',
        publisher: 'University of California Press',
        year: '2010',
        category: 'Scholarship'
      }
    ],
    references: [
      'Hague Regulations Respecting the Laws and Customs of War on Land, Art. 46 (1907)',
      'ICRC Customary IHL Database — Rules 132 & 133 (2005)',
      'Hillel Cohen, Good Arabs: The Israeli Security Agencies and the Israeli Arabs, 1948–1967 (2010)'
    ],
    tags: ['International Law', 'Human Rights'],
    era: '1948–1966'
  }
];
