import { DebateNode } from '../../types/debate';

export const selfDeterminationNodes: DebateNode[] = [
  {
    id: 'pillar-self-determination',
    parentId: 'root-ip',
    kind: 'pillar',
    title: 'Historical Roots, Indigeneity & Self-Determination',
    summary:
      'Examines competing national narratives, historical and continuous ties to the land, British Mandate diplomacy, the 1947 UN Partition Plan, and the 1948 War / Nakba.',
    details: [
      'Addresses how two distinct national movements—Zionism and Palestinian nationalism—emerged and asserted sovereign claims over the same territory between the Jordan River and Mediterranean Sea.',
      'Weighs ancient historical/cultural continuity, demographic realities under late Ottoman and British rule, international legal instruments, and the displacement of populations in 1947–1949.',
      'Forms the foundational moral and legal lens through which subsequent disputes over borders, refugees, and statehood are interpreted.'
    ],
    references: [
      'League of Nations Mandate for Palestine (1922)',
      'UN General Assembly Resolution 181 — Partition Plan (1947)',
      'Peel Commission Report (1937)'
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
    details: [
      'Grounded in over three millennia of Jewish ethnogenesis, language (Hebrew), archaeology, religious liturgy, and continuous—though minority—Jewish communities in cities like Jerusalem, Safed, Tiberias, and Hebron.',
      'Reinforced by explicit international legal recognition in the 1922 League of Nations Mandate and 1947 UN Partition Resolution 181.',
      'Framed as national liberation and refuge for a stateless, persecuted people rather than foreign imperial colonization.'
    ],
    references: [
      'Israeli Declaration of Independence (May 14, 1948)',
      'League of Nations Palestine Mandate Preamble & Art. 2 (1922)',
      'UNGA Resolution 181 (Nov 29, 1947)'
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
    details: [
      'Archaeological record (Dead Sea Scrolls, City of David, Second Temple inscriptions, Bar Kokhba coins) confirms sovereign and cultural origins in the territory.',
      'Jews were forcibly exiled by Roman and subsequent imperial conquests rather than voluntarily abandoning their homeland; continuous communities persisted in Jerusalem (where Jews formed a plurality/majority by the mid-19th century), Safed, Hebron, and Tiberias.',
      'Unlike European metropoles in classical colonialism (e.g., Britain in Kenya or France in Algeria), Zionist immigrants had no "mother country" sending them to extract resources.'
    ],
    references: [
      'Ottoman & British Consular Censuses of Jerusalem (1844–1922)',
      'Gideon Shimoni, The Zionist Ideology (1995)'
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
    details: [
      'International norms of self-determination (Wilsonian principles, League Covenant Art. 22) prioritize the consent of the living resident majority at the moment of decolonization.',
      'Applying two-millennia-old territorial claims globally would destabilize virtually every modern nation-state border.',
      'Spiritual attachment to Zion historically coexisted with minority residency without requiring exclusive political sovereignty over Arab inhabitants.'
    ],
    references: [
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
    details: [
      'Six million European Jews were murdered in the Holocaust while Mandate immigration quotas (1939 British White Paper) restricted entry to Palestine.',
      'Over half of Israeli Jews today trace some or all ancestry to Middle Eastern and North African (Mizrahi/Sephardi) communities in Iraq, Yemen, Egypt, Morocco, Syria, and Libya—refuting claims that Israeli society is purely "European".',
      'Mainstream Zionist leadership accepted territorial compromise in both the 1937 Peel Commission and the 1947 UN Partition Plan to secure an immediate haven.'
    ],
    references: [
      'Evian Conference Proceedings (1938)',
      'British White Paper of 1939',
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
    details: [
      'Framing: remedying the persecution of one people by creating a refugee crisis for another violates basic moral reciprocity.',
      'Western powers that restricted Jewish refugee entry into the US, UK, and Canada post-WWII supported partitioning Palestine instead of opening their own borders.',
      'Early Zionist thinkers (e.g., Ze’ev Jabotinsky’s 1923 "Iron Wall" essay) explicitly recognized that native populations naturally resist demographic transformation regardless of newcomers’ humanitarian motives.'
    ],
    references: [
      'Ze’ev Jabotinsky, "The Iron Wall" (1923)',
      'Edward Said, The Question of Palestine (1979)',
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
    details: [
      'The 1917 Balfour Declaration promised a "national home for the Jewish people" while referring to the ~90% Arab majority only as "existing non-Jewish communities" with civil and religious—not national—rights.',
      'British suppression of the 1936–1939 Arab Revolt shattered Palestinian political and military leadership prior to 1947.',
      'In the proposed 1947 Jewish state’s borders, Arabs initially constituted roughly 40–45% of the population alongside ~55% Jews (including large tracts of the sparsely populated Negev desert).'
    ],
    references: [
      'Balfour Declaration (Nov 2, 1917)',
      'Village Statistics, Mandate Government of Palestine (1945)',
      'UNSCOP Report to the General Assembly (1947)'
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
    details: [
      'Comparing private Jewish land purchases (~7%) to total area obscures that private Arab title also covered only a fraction of total Mandate land, with vast state domains inherited from Ottoman miri/mewat categories.',
      'UNSCOP designed the Jewish state boundaries to absorb hundreds of thousands of Holocaust survivors languishing in European Displaced Persons camps.',
      'Every acre acquired by Jewish institutions prior to the 1947–48 war was purchased legally at market or above-market prices, not seized.'
    ],
    references: [
      'UNSCOP Majority Plan Justification (1947)',
      'Kenneth Stein, The Land Question in Palestine, 1917–1939 (1984)'
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
    details: [
      'Approximately 700,000–750,000 Palestinian Arabs—roughly half of Mandate Palestine’s Arab population—fled or were expelled from territories that became Israel, and over 400 Arab towns and villages were depopulated or demolished.',
      'Palestinians were barred from returning to their homes after hostilities ended, while their land and urban properties in Jaffa, Haifa, West Jerusalem, Acre, Lydda, and Ramle were transferred to state custody.',
      'Asserts that national self-determination inheres in a settled population regardless of whether prior imperial rulers (Ottoman or British) recognized a standalone state.'
    ],
    references: [
      'UN Conciliation Commission for Palestine Refugee Estimates (1949)',
      'Benny Morris, The Birth of the Palestinian Refugee Problem Revisited (2004)',
      'UN Charter Art. 1(2) — Principle of Self-Determination'
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
    details: [
      'Plan Dalet (March 1948) authorized Haganah commanders to secure strategic corridors and depopulate hostile or resisting villages along vital arteries.',
      'In Operation Dani (July 1948), roughly 50,000–70,000 residents of Lydda and Ramle were ordered out on signed instructions approved by Yitzhak Rabin and David Ben-Gurion.',
      'Even where villagers fled out of wartime terror intending to return once fighting subsided, Israeli forces sealed borders, demolished villages, and passed the 1950 Absentee Property Law.'
    ],
    references: [
      'IDF Intelligence Service Report on Arab Flight (June 1948)',
      'Benny Morris, 1948: A History of the First Arab-Israeli War (2008)',
      'Absentee Property Law, 5710-1950 (Israel)'
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
    details: [
      'Refutes "land without a people" tropes: cities such as Jaffa, Haifa, Jerusalem, Acre, Nablus, and Hebron hosted thriving literary, commercial, and civic institutions.',
      'Like neighboring Lebanese, Syrian, and Iraqi nationalisms, distinct Palestinian national consciousness crystallized in the late Ottoman and post-WWI period around shared attachment to a defined homeland.'
    ],
    references: [
      'Beshara Doumani, Rediscovering Palestine: Merchants and Peasants in Jabal Nablus, 1700–1900 (1995)',
      'Rashid Khalidi, Palestinian Identity: The Construction of Modern National Consciousness (1997)'
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
    details: [
      'Civil war began immediately after Nov 29, 1947 with attacks on Jewish buses and siege of 100,000 Jews in Jerusalem; on May 15, 1948, regular armies of Egypt, Transjordan, Iraq, Syria, and Lebanon invaded.',
      'Israel lost ~6,000 lives (1% of its entire population) in an existential struggle, and every Jewish community captured by Arab forces (such as Gush Etzion and the Old City Jewish Quarter) was completely expelled or destroyed.',
      'Roughly 160,000 Arabs who remained inside Israel (e.g., Nazareth, Abu Ghosh, Galilee towns) became Israeli citizens (today ~2.1 million Arab citizens of Israel, ~21% of the population).'
    ],
    references: [
      'Arab League Secretary-General Azzam Pasha Statements & Invasion Cables (May 1948)',
      'Efraim Karsh, Palestine Betrayed (2010)',
      'Benny Morris — Contextual Synthesis on Two-Stage 1948 War'
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
    details: [
      'Many depopulated Palestinian villages (including several with non-aggression pacts with neighboring kibbutzim) had not participated in hostilities.',
      'Rejecting a non-binding General Assembly recommendation (Res. 181) that divided one’s homeland did not legally authorize permanent confiscation of private civilian property.',
      'Inside Israel itself, remaining Arab citizens were kept under domestic military administration until 1966 and lost significant internal lands as "present absentees".'
    ],
    references: [
      'Hague Regulations Respecting the Laws and Customs of War on Land (1907, Art. 46)',
      'Hillel Cohen, Good Arabs (2010)'
    ],
    tags: ['International Law', 'Human Rights'],
    era: '1948–1966'
  }
];
