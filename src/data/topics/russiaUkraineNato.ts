import { DebateGraphDataset } from '../../types/debate';

export const russiaUkraineNatoDataset: DebateGraphDataset = {
  id: 'russia-ukraine-nato',
  version: '1.0.0',
  shortTitle: 'Russia, Ukraine & NATO',
  title: 'Russia, Ukraine & NATO Expansion',
  subtitle: 'Western deterrence & territorial integrity vs. great power realism & sphere-of-influence security',
  searchPlaceholder: 'Search NATO expansion, Mearsheimer, McFaul, Budapest Memorandum, Crimea, sanctions...',
  epistemologyNote:
    'The Russia-Ukraine war is analyzed through competing structural paradigms: liberal international legalists emphasize the inviolability of sovereign borders under the UN Charter and the democratic right to choose security alliances, whereas structural realists analyze geopolitical security dilemmas, great-power buffer zones, and the predictable consequences of expanding military alliances into historical borderlands.',
  availableTags: [
    'National Security',
    'International Law',
    'Diplomacy',
    'History',
    'Governance',
    'Macroeconomics',
    'Trade & Industry',
    'Energy & Climate',
    'Empirical Studies',
  ],
  shortPillarLabels: {
    'pillar-ukr-law': '1. International Law',
    'pillar-ukr-realism': '2. Realist Geopolitics',
    'pillar-ukr-sanctions': '3. Economic Warfare',
    'pillar-ukr-escalation': '4. Escalation & Endgames',
  },
  lastUpdated: '2026-03-30',
  nodes: [
    // -------------------------------------------------------------
    // ROOT NODE
    // -------------------------------------------------------------
    {
      id: 'root-ukraine',
      parentId: null,
      kind: 'root',
      title: 'Russia, Ukraine & NATO Expansion: International Order vs. Great Power Realism',
      summary:
        'A multi-layered dialectical map of the war in Ukraine and the European security architecture, contrasting the defense of sovereign self-determination and territorial integrity against realist theories of NATO expansion provocation and sphere-of-influence competition.',
      sections: [
        {
          heading: 'The Rupture of the Post-Cold War European Order',
          paragraphs: [
            'Russia’s full-scale invasion of Ukraine on February 24, 2022, triggered the most destructive armed conflict on the European continent since World War II, fundamentally shattering the security architecture established by the **1975 Helsinki Final Act** and the **1990 Charter of Paris for a New Europe**. The war reignited profound debates within international relations theory over the primary causes of state conflict and the limits of international law.',
            'In the landmark **2022 Munk Debate**, offensive realist political scientists **John Mearsheimer and Stephen Walt** argued that Western policy—specifically the eastward expansion of NATO and the goal of integrating Ukraine into Western security architecture—created an existential threat for Moscow that provoked a catastrophic military response. In direct opposition, former U.S. Ambassador **Michael McFaul** and Polish Foreign Minister **Radosław Sikorski** asserted that the conflict was driven by Vladimir Putin’s imperial revanchism and that sovereign nations possess an inalienable right to choose their alliances free from imperial subjugation.',
          ],
        },
        {
          heading: 'The Dialectical Structure: Law, Power, Economics, and Nuclear Risk',
          paragraphs: [
            'This debate graph systematically examines the conflict across four interconnected dimensions: First, the **international legal order**, evaluating the prohibition on territorial conquest under **UN Charter Article 2(4)** and the binding commitments of the **1994 Budapest Memorandum**; Second, the **offensive realist perspective**, analyzing great power security dilemmas, strategic depth, and the fateful **2008 Bucharest NATO Summit Declaration**.',
            'Third, the global economic fallout of **weaponized financial interdependence**, including the unprecedented freeze of over $300 billion in Russian sovereign assets and energy market realignment; and Fourth, the existential **escalation hazards**, balancing Western conventional deterrence against the peril of tactical nuclear weapons and the competing horizons of total military liberation versus a negotiated armistice.',
          ],
        },
      ],
      details: [
        '**Landmark 2022 Munk Debate:** John Mearsheimer & Stephen Walt vs. Michael McFaul & Radosław Sikorski on Western policy and NATO enlargement.',
        '**International Law at Stake:** Direct challenge to UN Charter Article 2(4) prohibiting the alteration of borders by military force.',
        '**Realist Security Dilemma:** Competing interpretations of NATO\'s open-door policy as collective security vs. great-power encirclement.',
        '**Global Systemic Realignment:** Western financial weaponization, SWIFT cutoffs, and the consolidation of an anti-Western axis (Russia, China, Iran, North Korea).',
      ],
      sources: [
        {
          title: 'Munk Debate on the Russia-Ukraine War: Was Western Policy to Blame?',
          url: 'https://munkdebates.com/debates/ukraine/',
          publisher: 'Munk Debates',
          year: '2022',
          category: 'Debate / Broadcast',
        },
        {
          title: 'Charter of the United Nations — Article 2(4)',
          url: 'https://www.un.org/en/about-us/un-charter/chapter-1',
          publisher: 'United Nations',
          year: '1945',
          category: 'Primary Text / Treaty',
        },
        {
          title: 'Why the Ukraine Crisis Is the West\'s Fault: The Liberal Delusions That Provoked Putin',
          url: 'https://www.foreignaffairs.com/articles/russia-fsu/2014-08-18/why-ukraine-crisis-wests-fault',
          publisher: 'Foreign Affairs',
          year: '2014',
          category: 'Scholarship',
        },
        {
          title: 'Bucharest Summit Declaration: Issued by NATO Heads of State and Government',
          url: 'https://www.nato.int/cps/en/natolive/official_texts_8443.htm',
          publisher: 'North Atlantic Treaty Organization (NATO)',
          year: '2008',
          category: 'Primary Text / Treaty',
        },
      ],
      tags: ['National Security', 'International Law', 'Diplomacy', 'History'],
      era: '1991–2026',
      relatedIds: ['pillar-ukr-law', 'pillar-ukr-realism', 'pillar-ukr-sanctions', 'pillar-ukr-escalation'],
    },

    // -------------------------------------------------------------
    // PILLAR 1: INTERNATIONAL LAW & SOVEREIGNTY
    // -------------------------------------------------------------
    {
      id: 'pillar-ukr-law',
      parentId: 'root-ukraine',
      kind: 'pillar',
      title: 'Pillar 1: Sovereign Self-Determination & Inviolability of International Law',
      summary:
        'Focuses on the normative bedrock of post-1945 security: the sovereign equality of states under the UN Charter, legal obligations under the 1994 Budapest Memorandum, and the right to choose security alliances.',
      sections: [
        {
          heading: 'The Non-Derogable Prohibition of Territorial Conquest',
          paragraphs: [
            'The foundational achievement of international law following World War II was the categorical prohibition of aggressive conquest codified in **Article 2(4) of the UN Charter**, which mandates that all members shall refrain from the threat or use of force against the territorial integrity or political independence of any state. As international legal scholars like **Philippe Sands** emphasize, allowing a nuclear-armed power to unilaterally erase sovereign borders returns the world to 19th-century imperial lawlessness.',
            'Furthermore, the **1975 Helsinki Final Act** established the principle that European borders could not be modified by force, a principle re-ratified by the Russian Federation in the **1997 Russia-Ukraine Friendship Treaty**, in which Moscow explicitly acknowledged Ukraine’s borders including Crimea and the Donbas.',
          ],
        },
        {
          heading: 'The Breach of Explicit Security Assurances',
          paragraphs: [
            'In 1994, Ukraine possessed the world\'s third-largest nuclear arsenal. Under the **Budapest Memorandum on Security Assurances**, Ukraine voluntarily surrendered over 1,900 strategic nuclear warheads in exchange for formal commitments by the United States, the United Kingdom, and the Russian Federation to respect its territorial integrity and refrain from economic coercion or military aggression. Moscow\'s subsequent invasion constitutes an existential blow to global nuclear non-proliferation.',
          ],
        },
      ],
      details: [
        '**UN Charter Article 2(4):** Absolute international legal ban on annexing territory through military invasion.',
        '**1994 Budapest Memorandum:** Ukraine surrendered the 3rd largest nuclear arsenal in exchange for territorial guarantees from Russia, the US, and UK.',
        '**1997 Bilateral Friendship Treaty:** Russia formally recognized Ukraine’s post-Soviet borders, including sovereignty over Crimea.',
        '**Non-Proliferation Peril:** Demonstrates to non-nuclear states that surrendering atomic weapons invites foreign invasion.',
      ],
      sources: [
        {
          title: 'Memorandum on Security Assurances in Connection with Ukraine’s Accession to the Treaty on the Non-Proliferation of Nuclear Weapons (Budapest Memorandum)',
          url: 'https://treaties.un.org/pages/showDetails.aspx?objid=0800000280401fbb',
          publisher: 'United Nations Treaty Series (UNTS)',
          year: '1994',
          category: 'Primary Text / Treaty',
        },
        {
          title: 'Helsinki Final Act: Conference on Security and Co-operation in Europe',
          url: 'https://www.osce.org/helsinki-final-act',
          publisher: 'Organization for Security and Co-operation in Europe (OSCE)',
          year: '1975',
          category: 'Primary Text / Treaty',
        },
        {
          title: 'East West Street: On the Origins of Genocide and Crimes Against Humanity',
          url: 'https://www.penguinrandomhouse.com/books/240722/east-west-street-by-philippe-sands/',
          publisher: 'Alfred A. Knopf',
          year: '2016',
          category: 'Scholarship',
        },
      ],
      tags: ['International Law', 'Diplomacy', 'National Security'],
      era: '1945–2026',
      relatedIds: ['thesis-ukr-charter-sovereignty', 'thesis-ukr-alliance-freedom', 'pillar-ukr-realism'],
    },

    // THESIS 1.1
    {
      id: 'thesis-ukr-charter-sovereignty',
      parentId: 'pillar-ukr-law',
      kind: 'thesis',
      title: 'Thesis 1.1: Aggressive Conquest Directly Violates Peremptory Norms of International Law',
      summary:
        'Russia’s invasion and attempted annexation of Ukrainian oblasts constitutes an egregious crime of aggression and a direct violation of jus cogens norms prohibiting territorial conquest.',
      sections: [
        {
          heading: 'The Crime of Aggression and Jus Cogens Norms',
          paragraphs: [
            'Under customary international law and the **Rome Statute of the International Criminal Court**, the planning, preparation, and execution of a war of conquest against a sovereign state constitutes the crime of aggression—termed by the Nuremberg Tribunal as "the supreme international crime differing only from other war crimes in that it contains within itself the accumulated evil of the whole."',
            'On March 2, 2022, the **UN General Assembly adopted Resolution ES-11/1** by an overwhelming 141-5 vote, demanding that Russia immediately and unconditionally withdraw all military forces from Ukraine and condemning the violation of Ukrainian sovereignty.',
          ],
        },
        {
          heading: 'Illegal Annexations and the Non-Recognition Doctrine',
          paragraphs: [
            'The unilateral annexation of Crimea in 2014 and four southeastern oblasts (Donetsk, Luhansk, Zaporizhzhia, Kherson) in September 2022 following sham referendums violates the **Stimson Doctrine** and UN legal precedent, which obligates the international community never to recognize territorial changes achieved through military aggression.',
          ],
        },
      ],
      details: [
        '**UNGA Resolution ES-11/1:** 141 nations voted to condemn Russian aggression and demand full military withdrawal.',
        '**Nuremberg Precedent:** Aggressive war confirmed as the supreme international crime violating jus cogens.',
        '**The Stimson Doctrine:** Universal legal obligation of states to deny diplomatic recognition to territories acquired by armed force.',
      ],
      sources: [
        {
          title: 'UN General Assembly Resolution ES-11/1: Aggression Against Ukraine',
          url: 'https://digitallibrary.un.org/record/3959039',
          publisher: 'United Nations General Assembly',
          year: '2022',
          category: 'Court / Official Record',
        },
        {
          title: 'International Court of Justice: Order on Provisional Measures in Ukraine v. Russian Federation',
          url: 'https://www.icj-cij.org/case/182',
          publisher: 'International Court of Justice (ICJ)',
          year: '2022',
          category: 'Court / Official Record',
        },
      ],
      tags: ['International Law', 'Human Rights', 'Governance'],
      era: '2022–2024',
      relatedIds: ['pro-ukr-budapest-assurances', 'con-ukr-western-hypocrisy-legality'],
    },

    // PRO 1.1.1
    {
      id: 'pro-ukr-budapest-assurances',
      parentId: 'thesis-ukr-charter-sovereignty',
      kind: 'pro',
      title: 'Evidence: The Budapest Memorandum & Nuclear Non-Proliferation Integrity',
      summary:
        'Ukraine surrendered the world’s third-largest atomic stockpile based on explicit Russian, US, and British written guarantees of territorial integrity, which Russia flagrantly violated.',
      sections: [
        {
          heading: 'The Denuclearization of Ukraine (1994)',
          paragraphs: [
            'Following the dissolution of the Soviet Union, Ukraine held approximately 1,900 strategic nuclear warheads, 176 intercontinental ballistic missiles (ICBMs), and 44 strategic bombers. Under intense diplomatic pressure from Washington and Moscow, Kyiv acceded to the **Nuclear Non-Proliferation Treaty (NPT)** as a non-nuclear weapon state.',
            'In paragraph 1 and 2 of the Budapest Memorandum, the Russian Federation explicitly reaffirmed its commitment to "respect the independence and sovereignty and the existing borders of Ukraine" and to "refrain from the threat or use of force against the territorial integrity or political independence of Ukraine." Russia’s 2014 and 2022 invasions directly violated every clause of this agreement.',
          ],
        },
        {
          heading: 'Disastrous Consequences for Global Non-Proliferation',
          paragraphs: [
            'Historian **Serhii Plokhy** (*Chernobyl: The History of a Nuclear Catastrophe* and *The Gates of Europe*) notes that Russia’s violation demonstrated to aspiring nuclear states like Iran and North Korea that abandoning nuclear capability invites existential military subjugation, permanently undermining future international disarmament diplomacy.',
          ],
        },
      ],
      details: [
        '**1,900 Nuclear Warheads Dismantled:** Ukraine gave up massive nuclear deterrent in good-faith reliance on international law.',
        '**Explicit Paragraph 1 & 2 Guarantees:** Russia swore in writing never to use military or economic force against Ukrainian borders.',
        '**Collapse of Disarmament Credibility:** Completely disincentivizes potential proliferators from signing denuclearization treaties.',
      ],
      sources: [
        {
          title: 'Text of the Budapest Memorandum on Security Assurances',
          url: 'https://treaties.un.org/pages/showDetails.aspx?objid=0800000280401fbb',
          publisher: 'United Nations Treaty Series',
          year: '1994',
          category: 'Primary Text / Treaty',
        },
        {
          title: 'The Gates of Europe: A History of Ukraine',
          url: 'https://www.basicbooks.com/titles/serhii-plokhy/the-gates-of-europe/9780465073948/',
          publisher: 'Basic Books',
          year: '2015',
          category: 'Scholarship',
        },
      ],
      tags: ['International Law', 'National Security', 'History'],
      era: '1994–2022',
      relatedIds: ['thesis-ukr-charter-sovereignty', 'con-ukr-western-hypocrisy-legality'],
    },

    // CON 1.1.2
    {
      id: 'con-ukr-western-hypocrisy-legality',
      parentId: 'thesis-ukr-charter-sovereignty',
      kind: 'con',
      title: 'Counter-Argument: Western Precedents and the Erosion of Legal Norms (Kosovo & Iraq)',
      summary:
        'Realist and Russian jurists argue that the West severely eroded the post-1945 legal order through unauthorized military operations in Kosovo, Iraq, and Libya, neutralizing Western moral standing.',
      sections: [
        {
          heading: 'The Precedent of Kosovo (1999)',
          paragraphs: [
            'Realist critics and Russian diplomats argue that the Western powers dealt a fatal blow to the sanctity of state borders when **NATO launched a 78-day bombing campaign against Yugoslavia in 1999** without UN Security Council authorization. In 2008, the West recognized Kosovo’s unilateral declaration of independence from Serbia, despite UN Resolution 1244 confirming Serbian sovereignty.',
            'Political scientist **Richard Sakwa** (*Frontline Ukraine*) points out that Moscow explicitly cited the "Kosovo precedent" when recognizing the independence of Abkhazia and South Ossetia in 2008, and again in Crimea in 2014, arguing that the Western alliance had selectively discarded sovereignty whenever it suited its strategic objectives.',
          ],
        },
        {
          heading: 'The 2003 Iraq Invasion and "Rules-Based Order" Cynicism',
          paragraphs: [
            'The US-led invasion of Iraq in 2003—launched without UN Security Council authorization under fabricated intelligence regarding WMDs—fundamentally undermined the credibility of the "rules-based international order" across the Global South. Developing nations view Western indignation over Ukraine not as principled defense of law, but as self-serving hypocrisy.',
          ],
        },
      ],
      details: [
        '**1999 NATO Bombing of Yugoslavia:** Undertaken without UN Security Council mandate, severing Kosovo from Serbia.',
        '**The Kosovo Precedent:** Directly cited by Vladimir Putin in 2008 (Georgia) and 2014 (Crimea) to justify border changes.',
        '**2003 Iraq War:** Unilateral invasion severely damaged Western moral authority to enforce Article 2(4) in the Global South.',
      ],
      sources: [
        {
          title: 'Frontline Ukraine: Crisis in the Borderlands',
          url: 'https://www.bloomsbury.com/us/frontline-ukraine-9781784530648/',
          publisher: 'I.B. Tauris / Bloomsbury',
          year: '2015',
          category: 'Scholarship',
        },
        {
          title: 'UN Security Council Resolution 1244 on the Situation Relating to Kosovo',
          url: 'https://digitallibrary.un.org/record/274488',
          publisher: 'United Nations Security Council',
          year: '1999',
          category: 'Primary Text / Treaty',
        },
      ],
      tags: ['International Law', 'History', 'Diplomacy'],
      era: '1999–2015',
      relatedIds: ['pro-ukr-budapest-assurances', 'thesis-ukr-charter-sovereignty'],
    },

    // THESIS 1.2
    {
      id: 'thesis-ukr-alliance-freedom',
      parentId: 'pillar-ukr-law',
      kind: 'thesis',
      title: 'Thesis 1.2: Sovereign Freedom to Choose Alliances vs. "Indivisible Security"',
      summary:
        'Western diplomacy defends the sovereign right of all nations to choose their own alliances, while Russia invokes the OSCE principle that no state may enhance its security at the expense of another.',
      sections: [
        {
          heading: 'The Principle of Sovereign Alliance Choice',
          paragraphs: [
            'Under Principle I of the **1975 Helsinki Final Act** and Article 10 of the **1949 North Atlantic Treaty**, all independent European nations possess the sovereign prerogative to determine their foreign policy and security arrangements, including joining collective defense alliances. Demanding that Ukraine accept neutral status under Russian coercion violates its fundamental status as an equal sovereign entity.',
            'As former U.S. Ambassador **Michael McFaul** argued in the Munk Debate, treating Eastern European countries as passive bargaining chips between great empires denies them democratic agency and revives the imperial logic of the 1945 Yalta Conference.',
          ],
        },
        {
          heading: 'The Counter-Doctrine of Indivisible Security',
          paragraphs: [
            'Conversely, Russian foreign policy bases its legal critique on the **1999 OSCE Istanbul Charter for European Security** and the **2010 Astana Declaration**, which state the principle of "indivisible security": states have the right to choose alliances, but they cannot strengthen their security at the expense of the security of other states.',
          ],
        },
      ],
      details: [
        '**Helsinki Final Act Principle I:** Guaranteed sovereign right of states to belong or not belong to international alliances.',
        '**NATO Article 10 "Open Door":** Open to any European state in a position to further the principles of the Treaty.',
        '**OSCE Indivisible Security:** Prohibits states from strengthening their defense at the direct expense of neighboring security.',
      ],
      sources: [
        {
          title: 'Charter for European Security (OSCE Istanbul Document)',
          url: 'https://www.osce.org/mc/39569',
          publisher: 'Organization for Security and Co-operation in Europe (OSCE)',
          year: '1999',
          category: 'Primary Text / Treaty',
        },
        {
          title: 'From Cold War to Hot Peace: An American Ambassador in Putin’s Russia',
          url: 'https://www.harpercollins.com/products/from-cold-war-to-hot-peace-michael-mcfaul',
          publisher: 'Houghton Mifflin Harcourt',
          year: '2018',
          category: 'Scholarship',
        },
      ],
      tags: ['International Law', 'Diplomacy', 'Governance'],
      era: '1975–2022',
      relatedIds: ['pro-ukr-eastern-european-agency', 'con-ukr-indivisible-security'],
    },

    // PRO 1.2.1
    {
      id: 'pro-ukr-eastern-european-agency',
      parentId: 'thesis-ukr-alliance-freedom',
      kind: 'pro',
      title: 'Evidence: Democratic Will of Eastern Europe & Fear of Imperial Subjugation',
      summary:
        'NATO expansion was not an aggressive Western imperial plot, but an urgent, democratic demand by sovereign Eastern European nations seeking refuge from centuries of Russian subjugation.',
      sections: [
        {
          heading: 'Eastern European States Begged for NATO Entry',
          paragraphs: [
            'Historian **Mary Elise Sarotte** (*Not One Inch: America, Russia, and the Making of Post-Cold War Stalemate*) documents that NATO did not aggressively expand eastward; rather, newly liberated democracies—Poland, the Czech Republic, Hungary, and the Baltic States—desperately lobbied Washington for membership throughout the 1990s. Leaders like **Lech Wałęsa** and **Václav Havel** made clear that without security guarantees, their nations would remain vulnerable to recurring Russian imperial conquest.',
            'Polish Foreign Minister **Radosław Sikorski** emphasized that Eastern European nations were not abducted into NATO by the United States; they exercised their hard-won democratic sovereignty after decades of Soviet military occupation and brutal suppression in 1956 (Hungary) and 1968 (Czechoslovakia).',
          ],
        },
        {
          heading: 'Ukrainian Democratic Realignment',
          paragraphs: [
            'In Ukraine, support for NATO membership was historically mixed until Russia invaded and annexed Crimea in 2014. By 2022, Ukrainian public support for NATO entry surged past 80%, demonstrating that Russian military aggression, rather than Western marketing, cemented Ukraine\'s westward geopolitical orientation.',
          ],
        },
      ],
      details: [
        '**Democratic "Pull" vs. Imperial "Push":** Poland, Czechia, and Baltic states intensely lobbied for NATO membership.',
        '**Memory of Soviet Domination:** 1956 Budapest and 1968 Prague invasions drove visceral desire for Article 5 security guarantees.',
        '**Post-2014 Ukrainian Polling:** Russian annexation of Crimea caused Ukrainian support for NATO to surge from under 30% to over 80%.',
      ],
      sources: [
        {
          title: 'Not One Inch: America, Russia, and the Making of Post-Cold War Stalemate',
          url: 'https://yalebooks.yale.edu/book/9780300259933/not-one-inch/',
          publisher: 'Yale University Press',
          year: '2021',
          category: 'Scholarship',
        },
        {
          title: 'Kyiv International Institute of Sociology: Dynamics of Public Attitudes Toward NATO (2000–2023)',
          url: 'https://www.kiis.com.ua/?lang=eng',
          publisher: 'KIIS',
          year: '2023',
          category: 'Empirical / Economic Study',
        },
      ],
      tags: ['Diplomacy', 'History', 'National Security'],
      era: '1991–2023',
      relatedIds: ['thesis-ukr-alliance-freedom', 'con-ukr-indivisible-security'],
    },

    // CON 1.2.2
    {
      id: 'con-ukr-indivisible-security',
      parentId: 'thesis-ukr-alliance-freedom',
      kind: 'con',
      title: 'Counter-Argument: The Violation of Indivisible Security Treaties',
      summary:
        'Russia argues that advancing the world\'s most powerful military alliance to its borders violated binding OSCE consensus agreements that European security must not be zero-sum.',
      sections: [
        {
          heading: 'The Legal Doctrine of Indivisible Security',
          paragraphs: [
            'In December 2021, Russian Foreign Minister **Sergey Lavrov** sent formal diplomatic letters to all NATO and OSCE member states quoting the **1999 Istanbul Charter for European Security** (paragraph 8) and the **2010 Astana Declaration** (paragraph 3). These documents state that no state or group of states can consider any part of the OSCE area as its sphere of influence, nor can they enhance their security at the expense of others.',
            'Moscow contends that NATO’s continual eastward expansion—deploying Aegis Ashore missile defense installations in Poland and Romania, conducting joint naval exercises in the Black Sea, and providing lethal arms to Ukraine—progressively degraded Russian defensive security, violating the commitment to indivisible security.',
          ],
        },
        {
          heading: 'The Exclusion of Russia from European Architecture',
          paragraphs: [
            'Instead of creating an inclusive, pan-European security architecture that integrated post-Soviet Russia as an equal stakeholder, Western capitals chose to maintain and expand a Cold War military alliance specifically designed to contain Moscow, inevitably forcing Russia into an adversarial posture.',
          ],
        },
      ],
      details: [
        '**OSCE Istanbul & Astana Commitments:** Formal international agreements prohibiting states from strengthening security at others\' expense.',
        '**Aegis Ashore Missile Systems:** Deployment in Poland and Romania viewed by Moscow as dual-capable offensive strike systems.',
        '**Exclusionary European Order:** Failure to build an inclusive pan-European security architecture post-1991.',
      ],
      sources: [
        {
          title: 'Astana Commemorative Declaration: Towards a Security Community',
          url: 'https://www.osce.org/mc/74985',
          publisher: 'OSCE Astana Summit',
          year: '2010',
          category: 'Primary Text / Treaty',
        },
        {
          title: 'Diplomatic Demands on Security Guarantees: Draft Treaty Between the Russian Federation and the United States',
          url: 'https://mid.ru/en/foreign_policy/news/1790818/',
          publisher: 'Ministry of Foreign Affairs of the Russian Federation',
          year: '2021',
          category: 'Primary Text / Treaty',
        },
      ],
      tags: ['International Law', 'Diplomacy', 'National Security'],
      era: '1999–2021',
      relatedIds: ['pro-ukr-eastern-european-agency', 'thesis-ukr-alliance-freedom'],
    },

    // -------------------------------------------------------------
    // PILLAR 2: REALIST GEOPOLITICS & NATO EXPANSION
    // -------------------------------------------------------------
    {
      id: 'pillar-ukr-realism',
      parentId: 'root-ukraine',
      kind: 'pillar',
      title: 'Pillar 2: Realist Geopolitics, NATO Expansion & Strategic Depth',
      summary:
        'Analyzes offensive realist arguments that great powers are fundamentally driven by balance-of-power imperatives, and that absorbing Ukraine into Western military alignment crossed Russia’s brightest red line.',
      sections: [
        {
          heading: 'Offensive Realism and Great Power Security Dilemmas',
          paragraphs: [
            'In structural realist theory, as articulated by **John Mearsheimer** (*The Tragedy of Great Power Politics*), the international system is anarchic, states can never be certain of other states\' future intentions, and great powers possess offensive military capability. Consequently, great powers prioritize survival and regional hegemony above all else, aggressively resisting rival military blocs entering their immediate strategic backyards.',
            'This realist perspective was shared by distinguished Cold War statesmen. In 1997, the architect of containment, **George F. Kennan**, warned in *The New York Times* that expanding NATO eastward was "the most fateful error of American policy in the entire post-Cold War era," predicting it would inflame Russian nationalism and restore Cold War militarism.',
          ],
        },
        {
          heading: 'The 2008 Bucharest Summit as Geopolitical Catalyst',
          paragraphs: [
            'The pivotal turning point occurred at the **April 2008 NATO Bucharest Summit**, where under intense pressure from President George W. Bush—and despite fierce warnings from German Chancellor Angela Merkel and French President Nicolas Sarkozy—NATO declared: "These countries [Ukraine and Georgia] will become members of NATO." Realists maintain this decision put Ukraine on an unavoidable collision course with Russian power.',
          ],
        },
      ],
      details: [
        '**Mearsheimer’s Structural Realism:** Great powers instinctively defend buffer zones against rival military alliances.',
        '**George Kennan’s 1997 Warning:** Presciently predicted NATO expansion would inflame Russian revanchism.',
        '**William Burns\' "Nyet Means Nyet" Memo:** 2008 diplomatic cable warned that Ukrainian NATO entry crossed Russia’s absolute red line.',
        '**Bucharest 2008 Blunder:** Pledged future membership without providing immediate Article 5 collective defense protection.',
      ],
      sources: [
        {
          title: 'The Tragedy of Great Power Politics',
          url: 'https://wwnorton.com/books/9780393020250',
          publisher: 'W. W. Norton & Company',
          year: '2001',
          category: 'Scholarship',
        },
        {
          title: 'A Fateful Error: George F. Kennan on NATO Expansion',
          url: 'https://www.nytimes.com/1997/02/05/opinion/a-fateful-error.html',
          publisher: 'The New York Times',
          year: '1997',
          category: 'Debate / Broadcast',
        },
        {
          title: 'Nyet Means Nyet: Russia’s NATO Enlargement Redlines (Diplomatic Cable 08MOSCOW265)',
          url: 'https://wikileaks.org/plusd/cables/08MOSCOW265_a.html',
          publisher: 'US Embassy Moscow / State Department',
          year: '2008',
          category: 'Court / Official Record',
        },
      ],
      tags: ['National Security', 'Diplomacy', 'History'],
      era: '1997–2022',
      relatedIds: ['thesis-ukr-mearsheimer-realism', 'thesis-ukr-buffer-psychology', 'pillar-ukr-law'],
    },

    // THESIS 2.1
    {
      id: 'thesis-ukr-mearsheimer-realism',
      parentId: 'pillar-ukr-realism',
      kind: 'thesis',
      title: 'Thesis 2.1: Western Liberal Hubris and the Provocation of War',
      summary:
        'By treating NATO enlargement, EU integration, and democracy promotion as benign liberal universalism, the West ignored Russian security sensitivities and sleepwalked into catastrophe.',
      sections: [
        {
          heading: 'The Fatal Triad: NATO, EU, and Color Revolutions',
          paragraphs: [
            'John Mearsheimer argues that the crisis was ignited by a triple-pronged Western strategy: NATO expansion, EU expansion, and democracy promotion (such as the 2004 Orange Revolution and 2014 Maidan uprising). While Western leaders viewed these initiatives as benevolent efforts to build a "Europe whole and free," Moscow perceived them as an orchestrated campaign to encircle Russia and facilitate regime change in the Kremlin.',
            'As political scientist **Stephen Walt** noted, the United States vigorously enforces its own Monroe Doctrine, which prohibits foreign great powers from stationing military forces in the Western Hemisphere. Expecting Moscow to complacently accept a hostile military alliance on its 1,200-mile border represented staggering geopolitical hubris.',
          ],
        },
        {
          heading: 'The 2014 Maidan Coup / Revolution',
          paragraphs: [
            'The February 2014 overthrow of democratically elected pro-Russian President Viktor Yanukovych—openly cheered by U.S. diplomats like Victoria Nuland—was viewed by Moscow as an illegal Western-backed coup designed to pull Ukraine decisively into NATO orbit, precipitating the seizure of Crimea to protect Russia’s Sevastopol naval base.',
          ],
        },
      ],
      details: [
        '**The Liberal Triad:** Western policy combined military expansion, economic absorption, and regime-change democracy promotion.',
        '**The American Monroe Doctrine Parallels:** Washington would never tolerate a Chinese or Russian military alliance in Mexico or Canada.',
        '**Maidan 2014 Turning Point:** The unconstitutional ouster of Yanukovych triggered the immediate Russian annexation of Crimea.',
      ],
      sources: [
        {
          title: 'Why the Ukraine Crisis Is the West\'s Fault: The Liberal Delusions That Provoked Putin',
          url: 'https://www.foreignaffairs.com/articles/russia-fsu/2014-08-18/why-ukraine-crisis-wests-fault',
          publisher: 'Foreign Affairs',
          year: '2014',
          category: 'Scholarship',
        },
        {
          title: 'The Hell of Good Intentions: America\'s Foreign Policy Elite and the Decline of U.S. Primacy',
          url: 'https://us.macmillan.com/books/9780374280031/thehellofgoodintentions',
          publisher: 'Farrar, Straus and Giroux',
          year: '2018',
          category: 'Scholarship',
        },
      ],
      tags: ['National Security', 'Diplomacy', 'History'],
      era: '2014–2022',
      relatedIds: ['pro-ukr-bucharest-trigger', 'con-ukr-imperial-ideology'],
    },

    // PRO 2.1.1
    {
      id: 'pro-ukr-bucharest-trigger',
      parentId: 'thesis-ukr-mearsheimer-realism',
      kind: 'pro',
      title: 'Evidence: Ambassador William Burns’ "Nyet Means Nyet" & Bucharest Warning',
      summary:
        'In 2008, then-U.S. Ambassador to Moscow William Burns explicitly warned Washington that offering Ukraine NATO membership crossed Russia\'s absolute red line and would trigger civil war and Russian invasion.',
      sections: [
        {
          heading: 'The Prescient Warning of William J. Burns (2008)',
          paragraphs: [
            'In February 2008, two months prior to the Bucharest Summit, U.S. Ambassador to Russia **William J. Burns** (later CIA Director) sent a classified cable titled *"Nyet Means Nyet: Russia\'s NATO Enlargement Redlines"*. Burns warned Secretary of State Condoleezza Rice that Ukrainian entry into NATO was the "brightest of all redlines for the Russian elite (not just Putin)."',
            'Burns stated: "In more than two and a half years of conversations with key Russian players... I have yet to find anyone who views Ukraine in NATO as anything other than a direct challenge to Russian interests." He warned that pushing membership would create a fertile environment for Russian meddling in Crimea and eastern Ukraine, potentially leading to civil war and forcing Russia to intervene.',
          ],
        },
        {
          heading: 'Worst-of-Both-Worlds Summit Compromise',
          paragraphs: [
            'Despite Burns\' explicit warnings, President George W. Bush pushed for membership. The resulting Bucharest Declaration produced the worst possible outcome: it pledged that Ukraine would join, maximizing Russian hostility, while refusing to grant a Membership Action Plan (MAP), denying Ukraine any actual NATO defense guarantee.',
          ],
        },
      ],
      details: [
        '**Burns\' 2008 Redline Cable:** Documented that all factions of Russian leadership viewed Ukrainian NATO entry as an intolerable existential threat.',
        '**Predicted Crimean Intervention:** Presciently warned that NATO agitation would split Ukraine and provoke Russian military intervention.',
        '**Strategic Incoherence:** Extended a rhetorical promise of protection without extending Article 5 collective defense deterrence.',
      ],
      sources: [
        {
          title: 'Cable 08MOSCOW265: Nyet Means Nyet — Russia’s NATO Enlargement Redlines',
          url: 'https://wikileaks.org/plusd/cables/08MOSCOW265_a.html',
          publisher: 'US Embassy Moscow / State Department',
          year: '2008',
          category: 'Court / Official Record',
        },
        {
          title: 'The Back Channel: A Memoir of American Diplomacy and the Case for Its Renewal',
          url: 'https://www.penguinrandomhouse.com/books/567439/the-back-channel-by-william-j-burns/',
          publisher: 'Random House',
          year: '2019',
          category: 'Scholarship',
        },
      ],
      tags: ['National Security', 'Diplomacy', 'History'],
      era: '2008–2019',
      relatedIds: ['thesis-ukr-mearsheimer-realism', 'con-ukr-imperial-ideology'],
    },

    // CON 2.1.2
    {
      id: 'con-ukr-imperial-ideology',
      parentId: 'thesis-ukr-mearsheimer-realism',
      kind: 'con',
      title: 'Counter-Argument: Putin’s Imperial Revanchism and Denial of Nationhood Caused the War',
      summary:
        'Extensive primary evidence shows that Vladimir Putin’s invasion was driven not by fear of NATO, but by Russian imperial ideology that denies Ukraine’s historical existence as a separate sovereign nation.',
      sections: [
        {
          heading: 'Putin’s Ideological Manifesto: "On the Historical Unity of Russians and Ukrainians"',
          paragraphs: [
            'In July 2021, Vladimir Putin published a 5,000-word historical essay titled *"On the Historical Unity of Russians and Ukrainians"*, in which he explicitly argued that Russians and Ukrainians are "one people" and that Ukrainian statehood is an illegitimate, artificial construct created by Vladimir Lenin and Bolshevik boundary-makers.',
            'Historians like **Timothy Snyder** (*The Road to Unfreedom*) and **Fiona Hill** point out that on the eve of the invasion and throughout 2022, Putin compared himself to **Peter the Great**, declaring that Russia was engaged in the historical mission of "returning and reinforcing" historic Russian lands. NATO was merely an operational excuse to justify a classic 18th-century war of colonial conquest.',
          ],
        },
        {
          heading: 'NATO Membership Was Already Dormant in 2022',
          paragraphs: [
            'In February 2022, Ukraine was nowhere near joining NATO: Germany and France held an ironclad veto, President Volodymyr Zelensky had offered to negotiate permanent neutrality, and US leadership openly acknowledged Ukrainian membership was off the table. Putin invaded anyway because his objective was the total subjugation of Ukrainian identity.',
          ],
        },
      ],
      details: [
        '**Putin’s July 2021 Manifesto:** Primary text explicitly denying Ukrainian national identity, language, and right to sovereign statehood.',
        '**Peter the Great Comparisons:** Putin explicitly framed the war as imperial reclamation of historical Russian lands, not defensive containment.',
        '**Zero Imminent NATO Threat:** Major NATO European powers had vetoed Ukrainian membership for 14 straight years prior to the invasion.',
      ],
      sources: [
        {
          title: 'Article by Vladimir Putin: "On the Historical Unity of Russians and Ukrainians"',
          url: 'http://en.kremlin.ru/events/president/news/66181',
          publisher: 'President of Russia (Official Kremlin Portal)',
          year: '2021',
          category: 'Primary Text / Treaty',
        },
        {
          title: 'The Road to Unfreedom: Russia, Europe, America',
          url: 'https://www.penguinrandomhouse.com/books/567432/the-road-to-unfreedom-by-timothy-snyder/',
          publisher: 'Tim Duggan Books / Crown Publishing',
          year: '2018',
          category: 'Scholarship',
        },
      ],
      tags: ['History', 'National Security', 'Philosophy & Ethics'],
      era: '2021–2022',
      relatedIds: ['pro-ukr-bucharest-trigger', 'thesis-ukr-mearsheimer-realism'],
    },

    // THESIS 2.2
    {
      id: 'thesis-ukr-buffer-psychology',
      parentId: 'pillar-ukr-realism',
      kind: 'thesis',
      title: 'Thesis 2.2: Geographic Determinism: The North European Plain and Strategic Depth',
      summary:
        'Russia’s vulnerable topography along the flat North European Plain has instilled a multi-century strategic imperative for physical buffer zones against foreign invasions.',
      sections: [
        {
          heading: 'The Geography of Russian Vulnerability',
          paragraphs: [
            'Geopolitical analysts like **Tim Marshall** (*Prisoners of Geography*) demonstrate that Russia has no natural geographical barriers—such as mountain ranges or wide deserts—defending its western heartland. From Poland through Belarus and Ukraine, the flat **North European Plain** narrows in the west and widens dramatically as it enters Russia, presenting an open highway for invading armies.',
            'Throughout Russian history, this topography enabled devastating invasions: the Poles in 1612, the Swedes under Charles XII in 1709, Napoleon\'s Grande Armée in 1812, and Nazi Germany in 1941 (Operation Barbarossa), which cost 27 million Soviet lives. Strategic depth in Ukraine has historically been viewed in Moscow as essential to national survival.',
          ],
        },
        {
          heading: 'The Geopolitical Shock of Soviet Disintegration',
          paragraphs: [
            'The collapse of the USSR pushed Russia\'s western border hundreds of miles eastward, bringing hostile military infrastructure within short flight times of Moscow. For Russian military planners, a NATO-integrated Ukraine was viewed as a dagger aimed directly at the soft underbelly of the Russian Federation.',
          ],
        },
      ],
      details: [
        '**North European Plain:** Lack of geographical barriers makes Russian heartland inherently vulnerable to land invasions.',
        '**Historic Trauma:** Catastrophic invasions by Sweden (1709), France (1812), and Nazi Germany (1941; 27 million dead).',
        '**Flight Times to Moscow:** Ukrainian NATO bases would place Western hypersonic missiles within 5–7 minutes of the Kremlin.',
      ],
      sources: [
        {
          title: 'Prisoners of Geography: Ten Maps That Explain Everything About the World',
          url: 'https://www.simonandschuster.com/books/Prisoners-of-Geography/Tim-Marshall/9781501121470',
          publisher: 'Scribner',
          year: '2015',
          category: 'Scholarship',
        },
        {
          title: 'Russia and the West: From Alexander to Putin',
          url: 'https://global.oup.com/academic/product/russia-and-the-west-from-alexander-to-putin-9780198813989',
          publisher: 'Oxford University Press',
          year: '2019',
          category: 'Scholarship',
        },
      ],
      tags: ['History', 'National Security'],
      era: '1812–2022',
      relatedIds: ['pro-ukr-historical-invasions', 'con-ukr-anachronistic-spheres'],
    },

    // PRO 2.2.1
    {
      id: 'pro-ukr-historical-invasions',
      parentId: 'thesis-ukr-buffer-psychology',
      kind: 'pro',
      title: 'Evidence: Russian Strategic Doctrine and Soviet Loss of Strategic Depth',
      summary:
        'The loss of Eastern European buffer states after 1989 fundamentally altered Russian military doctrine, producing a consensus that Ukraine must remain neutral or friendly.',
      sections: [
        {
          heading: 'The Shrinking Strategic Cushion',
          paragraphs: [
            'During the Cold War, the Warsaw Pact provided the Soviet Union with a buffer zone stretching nearly 1,000 miles west to the border of West Germany. With the absorption of Poland, the Baltic states, Romania, and Bulgaria into NATO, that defensive perimeter collapsed. If Ukraine were to join NATO, Russia\'s strategic depth would be reduced to virtually zero.',
            'Russian military theorists, such as General Staff Chief **Valery Gerasimov**, developed doctrine emphasizing that Western "hybrid warfare" and color revolutions are precursors to military encirclement, justifying pre-emptive military action to preserve strategic space.',
          ],
        },
        {
          heading: 'Sevastopol and the Black Sea Fleet',
          paragraphs: [
            'Crimea holds Russia\'s only major warm-water naval base at Sevastopol, founded by Catherine the Great in 1783. The prospect that a NATO-aligned Ukraine would terminate Russia\'s naval lease and turn Sevastopol into an American naval port was an intolerable scenario for Moscow\'s military high command.',
          ],
        },
      ],
      details: [
        '**1,000-Mile Cold War Buffer Vanished:** NATO\'s border moved from the Elbe River directly to the borders of Belarus and Russia.',
        '**Warm-Water Naval Access:** Sevastopol lease in Crimea guaranteed Russian naval projection into the Mediterranean and Middle East.',
        '**Russian Military Doctrine (2014/2020):** Officially lists NATO military buildup along Russian borders as the primary external military danger.',
      ],
      sources: [
        {
          title: 'Military Doctrine of the Russian Federation (Approved by the President)',
          url: 'https://www.rusemb.org.uk/press/2029',
          publisher: 'Embassy of the Russian Federation / Kremlin',
          year: '2014',
          category: 'Primary Text / Treaty',
        },
        {
          title: 'The Value of Science Is in Foresight: New Challenges Demand Rethinking the Forms and Methods of Warfare',
          url: 'https://www.armyupress.army.mil/Portals/7/military-review/Archives/English/MilitaryReview_20160228_art008.pdf',
          publisher: 'Military Review / General Valery Gerasimov',
          year: '2016',
          category: 'Scholarship',
        },
      ],
      tags: ['National Security', 'History'],
      era: '2014–2020',
      relatedIds: ['thesis-ukr-buffer-psychology', 'con-ukr-anachronistic-spheres'],
    },

    // CON 2.2.2
    {
      id: 'con-ukr-anachronistic-spheres',
      parentId: 'thesis-ukr-buffer-psychology',
      kind: 'con',
      title: 'Counter-Argument: The Obsolescence of Imperial Spheres in Modern Statecraft',
      summary:
        'Treating sovereign countries as passive geographic "buffer zones" is an obsolete 19th-century imperial doctrine that violates the democratic self-determination of 44 million Ukrainians.',
      sections: [
        {
          heading: 'Human Agency vs. Cartographic Fatalism',
          paragraphs: [
            'Political scientists and Eastern European scholars reject the premise that smaller nations exist merely to provide "strategic comfort" for larger neighboring empires. Ukraine is not an empty buffer space; it is a sovereign nation of 44 million citizens with distinct political institutions, culture, and democratic aspirations.',
            'As Polish diplomat **Radosław Sikorski** argued in the Munk Debate, Russian complaints of "encirclement" are absurd: NATO is a defensive alliance that posed zero threat of launching an unprovoked ground invasion into nuclear-armed Russia. No Russian territory has ever been claimed by NATO.',
          ],
        },
        {
          heading: 'Imperial Paranoia as Self-Fulfilling Prophecy',
          paragraphs: [
            'By invading Ukraine under the pretext of preventing NATO expansion, Russia achieved the exact opposite outcome: Sweden and Finland abandoned centuries of neutrality to join NATO, doubling Russia\'s direct border with the alliance by over 830 miles and turning the Baltic Sea into a virtual "NATO lake."',
          ],
        },
      ],
      details: [
        '**Sovereign Agency:** 44 million Ukrainian citizens cannot have their civil rights subordinated to Russian imperial paranoia.',
        '**Zero NATO Invasion Threat:** A conventional NATO ground assault on a state with 6,000 nuclear warheads is militarily impossible.',
        '**Geopolitical Backfire:** Russian invasion drove historically non-aligned Finland and Sweden directly into NATO.',
      ],
      sources: [
        {
          title: 'Ukraine: What Everyone Needs to Know',
          url: 'https://global.oup.com/academic/product/ukraine-9780197532102',
          publisher: 'Oxford University Press',
          year: '2020',
          category: 'Scholarship',
        },
        {
          title: 'Finland and Sweden’s Accession to NATO: Strategic and Operational Implications',
          url: 'https://www.csis.org/analysis/finland-and-swedens-accession-nato',
          publisher: 'Center for Strategic and International Studies (CSIS)',
          year: '2023',
          category: 'Watchdog / NGO',
        },
      ],
      tags: ['Diplomacy', 'Governance', 'National Security'],
      era: '2020–2023',
      relatedIds: ['pro-ukr-historical-invasions', 'thesis-ukr-buffer-psychology'],
    },

    // -------------------------------------------------------------
    // PILLAR 3: ECONOMIC SANCTIONS & GLOBAL FRAGMENTATION
    // -------------------------------------------------------------
    {
      id: 'pillar-ukr-sanctions',
      parentId: 'root-ukraine',
      kind: 'pillar',
      title: 'Pillar 3: Economic Sanctions, Weaponized Finance & Global Realignment',
      summary:
        'Assesses the global economic war: the unprecedented freezing of $300B in Russian central bank reserves, the SWIFT expulsion, European energy decoupling, and the counter-rise of BRICS de-dollarization.',
      sections: [
        {
          heading: 'The Crossing of Financial Rubicons',
          paragraphs: [
            'In response to the 2022 invasion, the G7 nations crossed unprecedented financial thresholds by freezing over **$300 billion in Russian Central Bank foreign exchange reserves** held abroad and disconnecting major Russian financial institutions from the **SWIFT messaging network**. This marked the most aggressive weaponization of international reserve currencies in modern history.',
            'As political economist **Agathe Demarais** (*Backfire: How Sanctions Reshape the World Against U.S. Interests*) and financial historian **Adam Tooze** point out, while these sanctions delivered an initial liquidity shock to Moscow, they also accelerated systemic efforts across non-Western economies to de-dollarize bilateral trade, insulate central bank reserves, and build alternative financial messaging architectures.',
          ],
        },
        {
          heading: 'Energy Decoupling and Global Supply Chain Rerouting',
          paragraphs: [
            'Simultaneously, Europe embarked on an astonishingly rapid decoupling from Russian fossil fuels, replacing piped natural gas with American and Qatari LNG, while Moscow redirected crude oil exports to China, India, and Turkey via an expansive "shadow tanker fleet," permanently reconfiguring global commodity flows.',
          ],
        },
      ],
      details: [
        '**$300 Billion Asset Freeze:** Unprecedented immobilization of a sovereign G20 central bank’s foreign currency reserves.',
        '**SWIFT Disconnection:** Expulsion of Russian banks from global interbank messaging system.',
        '**Energy Reorientation:** European elimination of Russian piped gas; massive redirection of Russian oil to India and China.',
        '**BRICS Expansion & De-Dollarization:** Acceleration of local-currency settlement agreements (yuan, rupee, ruble).',
      ],
      sources: [
        {
          title: 'Backfire: How Sanctions Reshape the World Against U.S. Interests',
          url: 'https://cup.columbia.edu/book/backfire/9780231199902',
          publisher: 'Columbia University Press',
          year: '2022',
          category: 'Scholarship',
        },
        {
          title: 'The Economic Weapon: The Rise of Sanctions as a Tool of Modern War',
          url: 'https://yalebooks.yale.edu/book/9780300259360/the-economic-weapon/',
          publisher: 'Yale University Press',
          year: '2022',
          category: 'Scholarship',
        },
        {
          title: 'IMF World Economic Outlook: War Sets Back the Global Recovery',
          url: 'https://www.imf.org/en/Publications/WEO/Issues/2022/04/19/world-economic-outlook-april-2022',
          publisher: 'International Monetary Fund',
          year: '2022',
          category: 'Empirical / Economic Study',
        },
      ],
      tags: ['Macroeconomics', 'Trade & Industry', 'Energy & Climate'],
      era: '2022–2026',
      relatedIds: ['thesis-ukr-reserve-weaponization', 'thesis-ukr-energy-reconfiguration', 'pillar-ukr-escalation'],
    },

    // THESIS 3.1
    {
      id: 'thesis-ukr-reserve-weaponization',
      parentId: 'pillar-ukr-sanctions',
      kind: 'thesis',
      title: 'Thesis 3.1: Sovereign Asset Freezes: Crippling Deterrent vs. De-Dollarization Backlash',
      summary:
        'Freezing $300B in Russian foreign reserves paralyzed Moscow’s currency stabilization tools, but triggered global fears that the US dollar has been permanently weaponized.',
      sections: [
        {
          heading: 'Neutralizing the Fortress Russia Strategy',
          paragraphs: [
            'Prior to 2022, Bank of Russia Governor **Elvira Nabiullina** had constructed a $640 billion "Fortress Russia" war chest designed to insulate the economy from sanctions. By coordinating across the US Treasury, European Central Bank, and Bank of Japan, the G7 immobilized over half of these assets overnight, denying Moscow the foreign exchange required to defend the ruble or settle foreign debt.',
            'Proponents argue that without this decisive action, Russia would have effortlessly cushioned the costs of war and funded continuous military expansion without economic strain.',
          ],
        },
        {
          heading: 'The Threat to Reserve Currency Status',
          paragraphs: [
            'However, global economists warn of a profound systemic backlash. Central banks across Asia, the Middle East, and Latin America realized that sovereign reserves held in Western currencies are conditional on political alignment with Washington and Brussels, sparking record-breaking central bank gold purchases and bilateral trade settled in Chinese renminbi.',
          ],
        },
      ],
      details: [
        '**Fortress Russia Pierced:** Over $300 billion in sovereign reserves immobilized overnight.',
        '**Loss of Neutral Reserve Status:** US Treasuries and Eurobonds reclassified from risk-free assets to politically contingent assets.',
        '**Record Central Bank Gold Buying:** World Gold Council documented historic surges in sovereign gold reserves post-2022.',
      ],
      sources: [
        {
          title: 'U.S. Department of the Treasury — Russia Sanctions and Central Bank Immobilization',
          url: 'https://home.treasury.gov/policy-issues/financial-sanctions/recent-actions',
          publisher: 'US Department of the Treasury',
          year: '2022',
          category: 'Court / Official Record',
        },
        {
          title: 'World Gold Council: Central Bank Gold Demand Surges to Multi-Decade High',
          url: 'https://www.gold.org/goldhub/research/gold-demand-trends',
          publisher: 'World Gold Council',
          year: '2023',
          category: 'Empirical / Economic Study',
        },
      ],
      tags: ['Macroeconomics', 'Trade & Industry'],
      era: '2022–2024',
      relatedIds: ['pro-ukr-sanctions-attrition', 'con-ukr-reserve-backlash'],
    },

    // PRO 3.1.1
    {
      id: 'pro-ukr-sanctions-attrition',
      parentId: 'thesis-ukr-reserve-weaponization',
      kind: 'pro',
      title: 'Evidence: Technological Attrition & Long-Term Squeeze on Russian Defense Industry',
      summary:
        'Sanctions and export controls cut off Russian access to advanced Western microchips, ball bearings, and avionics, severely degrading high-tech military manufacturing.',
      sections: [
        {
          heading: 'The Stranglehold on Advanced Dual-Use Components',
          paragraphs: [
            'Detailed battlefield hardware analyses by the **Royal United Services Institute (RUSI)** (*Silicon Lifeline*) examined captured Russian precision-guided missiles (such as the Kalibr and Iskander) and found over 450 distinct foreign-made components, mostly manufactured by American, European, and Japanese semiconductor firms. Coordinated export controls severely constricted Moscow’s ability to mass-produce advanced guided munitions.',
            'To compensate, Russian manufacturers were forced to cannibalize microchips from commercial refrigerators, source low-grade Chinese replacements with high failure rates, and rely on antique Soviet-era tanks (T-54/T-55) pulled from deep cold storage.',
          ],
        },
        {
          heading: 'Macroeconomic Cannibalization by Military Spending',
          paragraphs: [
            'By 2024, Russia was forced to allocate over 30% of its federal budget to defense and security, crowding out public investment in healthcare, education, and domestic infrastructure, and fueling persistent double-digit inflation that required Bank of Russia benchmark interest rates to exceed 16%.',
          ],
        },
      ],
      details: [
        '**RUSI "Silicon Lifeline" Findings:** Captured Russian precision missiles contained 450+ foreign-manufactured semiconductors.',
        '**Degraded Precision Capability:** Inability to replace advanced thermal sights and avionics without Western components.',
        '**Wartime Cannibalization:** 30%+ of national budget diverted to military spending, generating chronic domestic inflation.',
      ],
      sources: [
        {
          title: 'Silicon Lifeline: Western Electronics at the Heart of Russia\'s War Machine',
          url: 'https://www.rusi.org/explore-our-research/publications/special-resources/silicon-lifeline-western-electronics-heart-russias-war-machine',
          publisher: 'Royal United Services Institute (RUSI)',
          year: '2022',
          category: 'Watchdog / NGO',
        },
        {
          title: 'Russian Economy: From Growth to Stagnation Under Wartime Mobilization',
          url: 'https://carnegieendowment.org/politika/91285',
          publisher: 'Carnegie Endowment for International Peace',
          year: '2024',
          category: 'Scholarship',
        },
      ],
      tags: ['Trade & Industry', 'National Security', 'Empirical Studies'],
      era: '2022–2024',
      relatedIds: ['thesis-ukr-reserve-weaponization', 'con-ukr-reserve-backlash'],
    },

    // CON 3.1.2
    {
      id: 'con-ukr-reserve-backlash',
      parentId: 'thesis-ukr-reserve-weaponization',
      kind: 'con',
      title: 'Counter-Argument: De-Dollarization & Rise of Alternative Settlement Architectures',
      summary:
        'Freezing sovereign assets undermined international confidence in the dollar-dominated financial system, incentivizing China, Russia, and the Global South to build non-Western alternatives.',
      sections: [
        {
          heading: 'Accelerating the Demise of Dollar Hegemony',
          paragraphs: [
            'Financial analyst and former White House adviser **Zoltan Pozsar** heralded the dawn of "Bretton Woods III"—a new monetary order centered on commodity-based currencies rather than Western sovereign debt. By proving that dollar reserves can be confiscated during diplomatic disputes, the US Treasury incentivized non-Western states to settle trade in national currencies.',
            'By 2023, over 90% of bilateral trade between Russia and China was settled in rubles and yuan, bypassing SWIFT and the U.S. CHIPS clearing system entirely. Furthermore, the expansion of the **BRICS grouping** (adding Saudi Arabia, UAE, Iran, Egypt, and Ethiopia) created a powerful economic bloc explicitly committed to non-dollar financial mechanisms.',
          ],
        },
        {
          heading: 'The Resilience of the Russian War Machine',
          paragraphs: [
            'Despite Western predictions of immediate economic collapse, the Russian economy grew by over 3% in 2023, outpacing Germany and the UK, due to extensive military Keynesianism, domestic import substitution, and porous third-party transit trade through Kazakhstan, Armenia, Turkey, and China.',
          ],
        },
      ],
      details: [
        '**Bretton Woods III Concept:** Shift from foreign currency reserve accumulation to commodities and gold.',
        '**90%+ Russia-China Trade De-Dollarized:** Complete transition to yuan-ruble settlements outside the dollar clearing system.',
        '**Russian GDP Growth Outperformed Europe:** Military spending stimulus and rerouted trade allowed Moscow to defy collapse predictions.',
      ],
      sources: [
        {
          title: 'Bretton Woods III: The Inevitable Rise of Outside Money',
          url: 'https://www.credit-suisse.com/about-us/en/reports-research.html',
          publisher: 'Credit Suisse Investment Research / Zoltan Pozsar',
          year: '2022',
          category: 'Empirical / Economic Study',
        },
        {
          title: 'BRICS Expansion and the Geopolitics of De-Dollarization',
          url: 'https://www.cfr.org/backgrounder/what-brics-group-and-why-it-expanding',
          publisher: 'Council on Foreign Relations (CFR)',
          year: '2023',
          category: 'Watchdog / NGO',
        },
      ],
      tags: ['Macroeconomics', 'Trade & Industry'],
      era: '2022–2024',
      relatedIds: ['pro-ukr-sanctions-attrition', 'thesis-ukr-reserve-weaponization'],
    },

    // THESIS 3.2
    {
      id: 'thesis-ukr-energy-reconfiguration',
      parentId: 'pillar-ukr-sanctions',
      kind: 'thesis',
      title: 'Thesis 3.2: Energy Decoupling: European Resilience vs. Shadow-Fleet Rerouting',
      summary:
        'Europe severed its historic dependency on Russian pipeline natural gas without economic breakdown, while Russia preserved revenue by redirecting seaborne crude via a shadow fleet.',
      sections: [
        {
          heading: 'The Weaponization of Piped Gas and Europe’s Pivot',
          paragraphs: [
            'Prior to 2022, Germany and Central Europe relied on Russia for over **40% of their natural gas**. In late 2022, following mysterious undersea explosions that destroyed three of the four Nord Stream pipeline conduits, Moscow halted gas flows to coerce European capitals. In response, the European Union rapidly built floating storage and regasification units (FSRUs), diversified to Norwegian, American, and Qatari LNG, and instituted massive energy conservation.',
            'Contrary to Russian predictions that European industry would freeze and collapse, European gas storage facilities remained at record high capacity throughout subsequent winters, permanently dissolving Moscow’s primary geopolitical energy leverage.',
          ],
        },
        {
          heading: 'The G7 Price Cap and the Dark Fleet',
          paragraphs: [
            'In December 2022, the G7 and EU imposed an innovative **$60-per-barrel price cap** on Russian seaborne crude oil, aiming to restrict Kremlin oil revenue while keeping volumes flowing to prevent global price spikes. Russia countered by assembling an untraceable "shadow fleet" of aging tankers operating without Western maritime insurance, rerouting crude directly to Indian and Chinese refineries.',
          ],
        },
      ],
      details: [
        '**Nord Stream Sabotage:** Destruction of pipelines ended four decades of cheap Russian piped gas to Germany.',
        '**European FSRU Infrastructure:** Record-speed construction of LNG import terminals eliminated supply bottlenecks.',
        '**G7 $60 Oil Price Cap:** Aimed to squeeze Kremlin profits while preventing a global inflationary oil shock.',
        '**Shadow Fleet Evasion:** Hundreds of aging, flag-of-convenience tankers successfully circumvented Western insurance sanctions.',
      ],
      sources: [
        {
          title: 'IEA Europe’s Energy Crisis: The Acceleration of Decoupling from Russian Gas',
          url: 'https://www.iea.org/reports/europe-energy-crisis',
          publisher: 'International Energy Agency (IEA)',
          year: '2023',
          category: 'Empirical / Economic Study',
        },
        {
          title: 'The Shadow Fleet: How Russia Circumvented Western Oil Sanctions',
          url: 'https://www.ft.com/content/88b0f555-5c24-4f80-8703-99b82e21b18d',
          publisher: 'Financial Times',
          year: '2023',
          category: 'Debate / Broadcast',
        },
      ],
      tags: ['Energy & Climate', 'Trade & Industry', 'Macroeconomics'],
      era: '2022–2024',
      relatedIds: ['pro-ukr-europe-energy-resilience', 'con-ukr-shadow-tanker-rerouting'],
    },

    // PRO 3.2.1
    {
      id: 'pro-ukr-europe-energy-resilience',
      parentId: 'thesis-ukr-energy-reconfiguration',
      kind: 'pro',
      title: 'Evidence: The Rapid Elimination of European Reliance on Russian Gas',
      summary:
        'Between 2021 and 2023, the European Union reduced the share of Russian pipeline gas in its total imports from 45% to under 8%, shattering Moscow’s primary economic weapon.',
      sections: [
        {
          heading: 'The Historic Structural Transition',
          paragraphs: [
            'Official Eurostat and European Commission data show that Russian pipeline gas imports plummeted from **150 billion cubic meters (bcm) in 2021 to less than 25 bcm in 2023**. Germany, historically the most dependent major economy, completely eliminated direct Russian gas imports without experiencing the catastrophic industrial shutdowns predicted by industry lobbies.',
            'This transition was facilitated by a 15% mandated reduction in gas consumption, massive expansions in solar and wind generation, and the rapid deployment of regasification terminals in Wilhelmshaven, Lubmin, and Eemshaven, proving the resilience of liberal market democracies under external coercion.',
          ],
        },
        {
          heading: 'Permanent Loss of Russia\'s Most Lucrative Market',
          paragraphs: [
            'Pipeline infrastructure cannot be redirected overnight. Unlike oil, gas relies on fixed Siberian pipelines built toward Europe. Lacking export pipelines to Asia, state gas monopoly **Gazprom** posted its first annual net loss in 25 years in 2023 ($7 billion), permanently forfeiting its most lucrative export revenue stream.',
          ],
        },
      ],
      details: [
        '**45% to Under 8% Collapse:** European reliance on Russian pipeline gas dropped by over 80% in 24 months.',
        '**Gazprom’s First Loss in 25 Years:** 2023 net loss of $7 billion directly caused by the loss of the European market.',
        '**Permanent Geostrategic Shift:** European energy infrastructure permanently reoriented toward transatlantic and global maritime LNG.',
      ],
      sources: [
        {
          title: 'Eurostat: EU Energy Mix and Gas Supply Diversification Statistics',
          url: 'https://ec.europa.eu/eurostat/statistics-explained/index.php?title=EU_energy_mix_and_gas_supply_diversification',
          publisher: 'Eurostat / European Commission',
          year: '2023',
          category: 'Court / Official Record',
        },
        {
          title: 'Gazprom Posts First Annual Net Loss in 25 Years as European Sales Collapse',
          url: 'https://www.reuters.com/business/energy/gazprom-posts-69-bln-net-loss-2023-sales-fall-2024-05-02/',
          publisher: 'Reuters',
          year: '2024',
          category: 'Debate / Broadcast',
        },
      ],
      tags: ['Energy & Climate', 'Macroeconomics', 'Empirical Studies'],
      era: '2022–2024',
      relatedIds: ['thesis-ukr-energy-reconfiguration', 'con-ukr-shadow-tanker-rerouting'],
    },

    // CON 3.2.2
    {
      id: 'con-ukr-shadow-tanker-rerouting',
      parentId: 'thesis-ukr-energy-reconfiguration',
      kind: 'con',
      title: 'Counter-Argument: Shadow Fleets & Asian Demand Maintained Russian Oil Profits',
      summary:
        'By redirecting oil exports to India and China through an unmonitored shadow fleet, Russia maintained crude export volumes and generated tens of billions in petrodollar revenue.',
      sections: [
        {
          heading: 'The Indian and Chinese Refinement Loophole',
          paragraphs: [
            'Center for Research on Energy and Clean Air (CREA) data revealed that while direct Russian exports to Europe declined, Russian crude exports to India skyrocketed from less than 1% pre-war to over **35% of India\'s total oil imports**. Indian refiners processed cheap Urals crude into refined diesel and jet fuel, which was then legally re-exported into European ports, effectively laundering Russian petroleum for Western consumers.',
            'Furthermore, by creating an offshore shadow fleet of over 600 aging tankers registered in Panama, Liberia, and Gabon, Moscow bypassed Western maritime insurance entirely, selling substantial volumes above the G7 $60 price cap and generating hundreds of millions of dollars per day to sustain military operations.',
          ],
        },
        {
          heading: 'High Global Energy Prices Cushioning the Blow',
          paragraphs: [
            'Global inflationary pressure on commodity markets ensured that even when selling at a $10–$15 discount, Russia earned higher net oil and gas revenue in 2022 ($168 billion) than in any year since 2011, disproving Western claims that energy sanctions would quickly paralyze the Kremlin’s war budget.',
          ],
        },
      ],
      details: [
        '**Indian Import Surge:** Russian oil exports to India expanded thirty-fold, turning India into a major refined fuel exporter to Europe.',
        '**Laundering Refined Products:** European countries continued consuming Russian crude refined in third-party Asian facilities.',
        '**Record 2022 Hydrocarbon Revenues:** Russia accrued $168 billion in oil/gas revenues due to wartime commodity price spikes.',
      ],
      sources: [
        {
          title: 'CREA Report: Laundromat: How the G7 Countries Buy Normalised Russian Oil Via Third Countries',
          url: 'https://energyandcleanair.org/publication/the-laundromat-coalition-how-g7-countries-buy-normalised-russian-oil/',
          publisher: 'Centre for Research on Energy and Clean Air (CREA)',
          year: '2023',
          category: 'Watchdog / NGO',
        },
        {
          title: 'Kpler Commodity Intelligence: Global Crude Flows and Shadow Fleet Tracking',
          url: 'https://www.kpler.com/insights',
          publisher: 'Kpler',
          year: '2023',
          category: 'Empirical / Economic Study',
        },
      ],
      tags: ['Energy & Climate', 'Trade & Industry'],
      era: '2022–2024',
      relatedIds: ['pro-ukr-europe-energy-resilience', 'thesis-ukr-energy-reconfiguration'],
    },

    // -------------------------------------------------------------
    // PILLAR 4: ESCALATION & LONG-TERM SECURITY
    // -------------------------------------------------------------
    {
      id: 'pillar-ukr-escalation',
      parentId: 'root-ukraine',
      kind: 'pillar',
      title: 'Pillar 4: Escalation Hazards, Nuclear Brinkmanship & European Security Endgames',
      summary:
        'Explores the precarious balance between calibrated Western military assistance and nuclear escalation hazards, contrasting total Ukrainian victory models against armistice settlements.',
      sections: [
        {
          heading: 'Deterrence in the Shadow of the Nuclear Abyss',
          paragraphs: [
            'Throughout the conflict, the United States and NATO executed a strategy of **calibrated incrementalism**—initially providing anti-tank Javelins, then HIMARS rocket artillery, Patriot air defense batteries, M1 Abrams and Leopard tanks, ATACMS ballistic missiles, and F-16 fighter jets. This slow escalation was explicitly designed to avoid crossing Russian nuclear thresholds while steadily attriting invading forces.',
            'Strategic scholars like **Lawrence Freedman** and **Barry Posen** debate whether this policy succeeded as a masterclass in nuclear deterrence management or failed as a self-deterred strategy that prolonged the war, prevented decisive Ukrainian counter-offensives, and needlessly multiplied human casualties.',
          ],
        },
        {
          heading: 'Compromised Peace vs. Perpetual Conflict',
          paragraphs: [
            'The debate over the war\'s endgame pits the principle of absolute territorial restoration (restoring the 1991 borders including Crimea) against pragmatic partition models, such as a **Korean-style armistice** along the line of contact paired with ironclad Western security guarantees or eventual NATO membership for unoccupied territory.',
          ],
        },
      ],
      details: [
        '**Calibrated Incrementalism:** Gradual Western arms provision (HIMARS, tanks, ATACMS, F-16s) designed to prevent direct NATO-Russia clash.',
        '**Nuclear Brinkmanship:** Russian nuclear alerts and deployment of tactical warheads to Belarus tested Western resolve.',
        '**Crimean Red Line:** Defense analysts identify the potential liberation of Crimea as the highest-risk nuclear escalation trigger.',
        '**Korean Armistice Model:** Ceasefire without formal peace treaty, backed by demilitarized zones and Western security guarantees.',
      ],
      sources: [
        {
          title: 'Ukraine and the Future of Offensive Warfare',
          url: 'https://www.foreignaffairs.com/articles/ukraine/2023-01-09/ukraine-and-future-offensive-warfare',
          publisher: 'Foreign Affairs / Barry Posen',
          year: '2023',
          category: 'Scholarship',
        },
        {
          title: 'Command: The Politics of Military Operations from Korea to Ukraine',
          url: 'https://www.penguinrandomhouse.com/books/673195/command-by-lawrence-freedman/',
          publisher: 'Allen Lane / Penguin Books',
          year: '2022',
          category: 'Scholarship',
        },
        {
          title: 'Avoiding a Long War: U.S. Policy and the Trajectory of the Russia-Ukraine Conflict',
          url: 'https://www.rand.org/pubs/perspectives/PEA2510-1.html',
          publisher: 'RAND Corporation',
          year: '2023',
          category: 'Watchdog / NGO',
        },
      ],
      tags: ['National Security', 'Diplomacy', 'International Law'],
      era: '2022–2026',
      relatedIds: ['thesis-ukr-nuclear-brinkmanship', 'thesis-ukr-endgame-settlement', 'pillar-ukr-law'],
    },

    // THESIS 4.1
    {
      id: 'thesis-ukr-nuclear-brinkmanship',
      parentId: 'pillar-ukr-escalation',
      kind: 'thesis',
      title: 'Thesis 4.1: Nuclear Deterrence Thresholds & Escalation Dominance',
      summary:
        'Managing Russian nuclear brinkmanship requires clear conventional deterrence signals without backing Moscow into an existential corner where tactical nuclear employment seems rational.',
      sections: [
        {
          heading: 'Russian Nuclear Signalling and Doctrine',
          paragraphs: [
            'In September 2022, following Ukrainian breakthroughs in Kharkiv and Kherson, Vladimir Putin publicly warned: "In the event of a threat to the territorial integrity of our country and to defend Russia and our people, we will certainly make use of all weapon systems available to us. This is not a bluff." U.S. intelligence assessed the probability of a Russian tactical nuclear strike in Ukraine in late 2022 at nearly 50%.',
            'In response, the Biden administration conducted private "backchannel" communications via National Security Advisor **Jake Sullivan** and CIA Director **William Burns**, warning Moscow that any nuclear detonation in Ukraine would trigger "catastrophic consequences," including conventional NATO strikes that would annihilate Russian Black Sea and ground forces in Ukraine.',
          ],
        },
        {
          heading: 'Self-Deterrence vs. Responsible Prudence',
          paragraphs: [
            'Critics argue that Western fear of Russian nuclear rhetoric led to paralyzed "self-deterrence," delaying decisive weapons systems by 12–18 months and allowing Russia to build the impregnable **Surovikin Line** of minefields and fortifications that blocked Ukraine’s 2023 counteroffensive.',
          ],
        },
      ],
      details: [
        '**Autumn 2022 Nuclear Crisis:** U.S. intelligence estimated 50% probability of tactical nuclear use following Russian territorial collapses.',
        '**U.S. Deterrent Response:** Warning of catastrophic conventional military destruction of Russian forces in Ukraine.',
        '**The Cost of "Self-Deterrence":** Delayed weapons shipments enabled Russian construction of the fortified Surovikin Line.',
      ],
      sources: [
        {
          title: 'Address of the President of the Russian Federation (Nuclear Signalling and Partial Mobilization)',
          url: 'http://en.kremlin.ru/events/president/news/69390',
          publisher: 'Kremlin Portal',
          year: '2022',
          category: 'Primary Text / Treaty',
        },
        {
          title: 'The Nuclear Taboo in Ukraine: How U.S. Diplomacy Avoided a Catastrophe',
          url: 'https://www.foreignaffairs.com/ukraine/nuclear-taboo-ukraine',
          publisher: 'Foreign Affairs',
          year: '2023',
          category: 'Scholarship',
        },
      ],
      tags: ['National Security', 'Diplomacy'],
      era: '2022–2024',
      relatedIds: ['pro-ukr-deterrence-credibility', 'con-ukr-tactical-nuclear-hazard'],
    },

    // PRO 4.1.1
    {
      id: 'pro-ukr-deterrence-credibility',
      parentId: 'thesis-ukr-nuclear-brinkmanship',
      kind: 'pro',
      title: 'Evidence: Calling Putin’s Nuclear Bluffs Restores Conventional Deterrence',
      summary:
        'Every time the West crossed Moscow’s supposed "red lines"—supplying HIMARS, main battle tanks, Patriot systems, and cruise missiles—Russia retreated from its nuclear threats.',
      sections: [
        {
          heading: 'The Progressive Demystification of Russian Red Lines',
          paragraphs: [
            'Throughout 2022 and 2023, Russian officials explicitly declared that supplying Western artillery, tanks, and fighter jets would make NATO a direct combatant subject to retaliatory strikes. In each instance, when the West ultimately provided the systems, Moscow failed to escalate, proving that its nuclear saber-rattling was an asymmetric psychological operation aimed at coercing Western public opinion.',
            'Furthermore, diplomatic pressure from Chinese President **Xi Jinping** and Indian Prime Minister **Narendra Modi**—both of whom explicitly warned Moscow that nuclear use was unacceptable—demonstrated that deploying atomic weapons would render Russia a total global pariah, cut off from Asian markets.',
          ],
        },
        {
          heading: 'The Fatal Hazard of Yielding to Nuclear Blackmail',
          paragraphs: [
            'If the international community permits nuclear-armed states to conquer sovereign neighbors simply by brandishing nuclear arsenals, the post-1945 non-proliferation regime collapses entirely, incentivizing dozens of middle powers to immediately acquire nuclear weapons.',
          ],
        },
      ],
      details: [
        '**Crossed Red Lines Without Retaliation:** Provision of HIMARS, Patriots, Storm Shadows, Leopards, and F-16s met with conventional accommodation.',
        '**Chinese & Indian Nuclear Rebuke:** Xi Jinping and Narendra Modi publicly warned that nuclear weapons must never be used in Ukraine.',
        '**Preventing Nuclear Blackmail Precedent:** Submitting to nuclear coercion would incentivize global nuclear proliferation.',
      ],
      sources: [
        {
          title: 'Joint Statement by President of the People\'s Republic of China and President of the Russian Federation (Nuclear Non-Use)',
          url: 'https://www.fmprc.gov.cn/mfa_eng/zxxx_662805/202303/t20230322_11046191.html',
          publisher: 'Ministry of Foreign Affairs of the People\'s Republic of China',
          year: '2023',
          category: 'Primary Text / Treaty',
        },
        {
          title: 'The Real Nuclear Danger: How Fear of Escalation Paralyzed the West in Ukraine',
          url: 'https://www.foreignaffairs.com/ukraine/real-nuclear-danger',
          publisher: 'Foreign Affairs',
          year: '2024',
          category: 'Scholarship',
        },
      ],
      tags: ['National Security', 'Diplomacy'],
      era: '2022–2024',
      relatedIds: ['thesis-ukr-nuclear-brinkmanship', 'con-ukr-tactical-nuclear-hazard'],
    },

    // CON 4.1.2
    {
      id: 'con-ukr-tactical-nuclear-hazard',
      parentId: 'thesis-ukr-nuclear-brinkmanship',
      kind: 'con',
      title: 'Counter-Argument: The Catastrophic Tail-Risk of Crimean Collapse',
      summary:
        'Russian military doctrine explicitly authorizes nuclear weapons use if the state’s existential survival or vital territory is threatened; an imminent loss of Crimea crosses that threshold.',
      sections: [
        {
          heading: 'Crimea as an Existential Red Line',
          paragraphs: [
            'Strategic analysts, including former U.S. National Security Council director for European and Russian affairs **Fiona Hill**, emphasize that Crimea holds a status in Russian political theology fundamentally distinct from newly occupied Donbas territories. Sevastopol has been Russian naval headquarters for 240 years and is deeply woven into national military identity.',
            'Under paragraph 19 of the **Basic Principles of the Russian Federation State Policy in the Field of Nuclear Deterrence (2020)**, Russia reserves the right to use nuclear weapons in response to conventional aggression that "threatens the very existence of the state." If a Ukrainian counteroffensive breached the Perekop Isthmus and threatened to capture or annihilate the Russian Crimean garrison, the probability of a tactical nuclear demonstration shot in the Black Sea or against Ukrainian command centers would approach certainty.',
          ],
        },
        {
          heading: 'The Illusion of Controlled Escalation',
          paragraphs: [
            'Cold War nuclear game theory formulated by **Thomas Schelling** (*The Strategy of Conflict*) demonstrates that escalatory spirals cannot be finely tuned. A single low-yield tactical nuclear detonation would shatter the 80-year nuclear taboo, carrying a severe probability of uncontrolled escalation to a civilization-ending global thermonuclear exchange.',
          ],
        },
      ],
      details: [
        '**Russian Nuclear Policy (2020):** Formal doctrine permits atomic strikes if conventional warfare threatens core state existence.',
        '**The Crimean Flashpoint:** Loss of Sevastopol naval base viewed by Russian leadership as a catastrophic domestic existential threat.',
        '**Schelling’s Escalation Dynamics:** Once a tactical nuclear weapon is detonated, preventing escalation to full strategic exchange is nearly impossible.',
      ],
      sources: [
        {
          title: 'Executive Order on Basic Principles of State Policy of the Russian Federation on Nuclear Deterrence (Decree No. 355)',
          url: 'https://www.mid.ru/en/foreign_policy/news/1435219/',
          publisher: 'Ministry of Foreign Affairs of the Russian Federation',
          year: '2020',
          category: 'Primary Text / Treaty',
        },
        {
          title: 'The Strategy of Conflict',
          url: 'https://www.hup.harvard.edu/books/9780674840317',
          publisher: 'Harvard University Press / Thomas C. Schelling',
          year: '1960',
          category: 'Scholarship',
        },
      ],
      tags: ['National Security', 'Philosophy & Ethics'],
      era: '1960–2024',
      relatedIds: ['pro-ukr-deterrence-credibility', 'thesis-ukr-nuclear-brinkmanship'],
    },

    // THESIS 4.2
    {
      id: 'thesis-ukr-endgame-settlement',
      parentId: 'pillar-ukr-escalation',
      kind: 'thesis',
      title: 'Thesis 4.2: Conflict Termination: Total Victory vs. Korean-Style Armistice',
      summary:
        'Debating long-term security horizons: Ukrainian insistence on total restoration of 1991 borders vs. pragmatic acceptance of a frozen conflict with Western security guarantees.',
      sections: [
        {
          heading: 'Zelensky’s Ten-Point Peace Formula',
          paragraphs: [
            'Ukrainian President **Volodymyr Zelensky** articulated a non-negotiable **Ten-Point Peace Formula**, demanding the complete withdrawal of all Russian troops from every square kilometer of Ukrainian sovereign territory (including Crimea and the pre-2014 Donbas), the prosecution of Russian war criminals by a special tribunal, and billions in sovereign reparations.',
            'Ukrainian leadership maintains that any territorial concession rewards aggression, invites future Russian invasions after Moscow replenishes its forces, and signals to authoritarian regimes worldwide that the international border regime can be redrawn with force.',
          ],
        },
        {
          heading: 'The Reality of Attritional Stalemate',
          paragraphs: [
            'Conversely, foreign policy analysts like **Richard Haass and Charles Kupchan** (*Foreign Affairs*) argue that neither side possesses the manpower, munitions, or air superiority to achieve decisive military victory. Prolonging an unwinnable war of attrition risks the total demographic collapse of Ukraine and depletes Western military arsenals.',
          ],
        },
      ],
      details: [
        '**Zelensky’s 10-Point Peace Formula:** Total withdrawal to 1991 borders, war crimes tribunals, and full Russian reparations.',
        '**Moral Hazard of Territorial Concessions:** Ceding land sets a catastrophic precedent rewarding military expansion.',
        '**The Demography of Attrition:** Massive population displacement and soldier casualty rates threaten Ukraine’s long-term societal vitality.',
      ],
      sources: [
        {
          title: 'President Zelensky Presents Ukraine’s Peace Formula to the G20 Summit',
          url: 'https://www.president.gov.ua/en/news/vistup-prezidenta-ukrayini-na-samiti-grupi-dvadcyati-79141',
          publisher: 'Official Website of the President of Ukraine',
          year: '2022',
          category: 'Primary Text / Treaty',
        },
        {
          title: 'Redefining Success in Ukraine: A New Strategy Must Balance Means and Ends',
          url: 'https://www.foreignaffairs.com/ukraine/redefining-success-ukraine',
          publisher: 'Foreign Affairs / Richard Haass & Charles Kupchan',
          year: '2023',
          category: 'Scholarship',
        },
      ],
      tags: ['Diplomacy', 'National Security', 'International Law'],
      era: '2022–2024',
      relatedIds: ['pro-ukr-complete-restoration', 'con-ukr-korean-armistice'],
    },

    // PRO 4.2.1
    {
      id: 'pro-ukr-complete-restoration',
      parentId: 'thesis-ukr-endgame-settlement',
      kind: 'pro',
      title: 'Evidence: The Lessons of 2014 & The Fatal Flaws of Frozen Conflicts',
      summary:
        'The failure of the 2014–2015 Minsk Accords proves that territorial appeasement merely grants Russia time to re-arm, regroup, and launch an even more destructive invasion later.',
      sections: [
        {
          heading: 'The Failure of the Minsk Agreements',
          paragraphs: [
            'Following Russia\'s 2014 incursions, France and Germany brokered the **Minsk I and Minsk II Accords**, freezing the conflict lines and demanding special status for the Donbas. Rather than producing peace, Minsk created an unstable grey zone. Russia used the seven-year lull to build sanctions-resilient financial reserves, upgrade its military, and launch a full-scale assault in 2022.',
            'Political scientist **Timothy Garton Ash** argues that forcing Ukraine to accept a ceasefire along current battle lines would leave 20% of its territory under brutal Russian occupation—subject to documented war crimes, deportations, and cultural eradication—while creating an economically unviable, landlocked rump state perpetually vulnerable to renewed attack.',
          ],
        },
        {
          heading: 'The Global Deterrent Signal',
          paragraphs: [
            'A compromised peace that cedes territory directly greenlights Chinese aggression against Taiwan, Venezuelan claims on Guyana, and regional revanchism worldwide, completely demolishing 80 years of international peace architecture.',
          ],
        },
      ],
      details: [
        '**The Minsk Accord Lesson:** 2014–2015 diplomatic freeze failed to prevent full-scale war and merely gave Moscow time to prepare.',
        '**Human Rights Under Occupation:** UN reports document arbitrary detention, forced deportations of children, and torture in occupied territories.',
        '**Global Domino Effect:** Territorial concessions incentivize authoritarian powers to pursue revisionist territorial conquest.',
      ],
      sources: [
        {
          title: 'Package of Measures for the Implementation of the Minsk Agreements (Minsk II)',
          url: 'https://peacemaker.un.org/ukraine-minsk2-2015',
          publisher: 'United Nations Peacemaker Database',
          year: '2015',
          category: 'Primary Text / Treaty',
        },
        {
          title: 'Homelands: A Personal History of Europe',
          url: 'https://yalebooks.yale.edu/book/9780300257014/homelands/',
          publisher: 'Yale University Press / Timothy Garton Ash',
          year: '2023',
          category: 'Scholarship',
        },
      ],
      tags: ['Diplomacy', 'International Law', 'Human Rights'],
      era: '2015–2023',
      relatedIds: ['thesis-ukr-endgame-settlement', 'con-ukr-korean-armistice'],
    },

    // CON 4.2.2
    {
      id: 'con-ukr-korean-armistice',
      parentId: 'thesis-ukr-endgame-settlement',
      kind: 'con',
      title: 'Counter-Argument: The Korean Armistice Model as a Pragmatic Path to Prosperity',
      summary:
        'A formal armistice along current lines—without de jure recognition of Russian annexations—paired with Article 5 NATO membership or Western guarantees offers Ukraine survival, defense, and economic boom.',
      sections: [
        {
          heading: 'The Korean Precedent for Democratic Flourishing',
          paragraphs: [
            'Proponents of the armistice model cite the **1953 Korean Armistice Agreement**. South Korea never signed a permanent peace treaty with North Korea, nor did it formally renounce its claims over northern territory. Yet by freezing the frontline, establishing a demilitarized zone, and securing an ironclad U.S. bilateral defense treaty with stationed American troops, South Korea transitioned from a war-torn ruin into one of the world\'s leading economic, technological, and democratic powers.',
            'Former NATO Supreme Allied Commander **James Stavridis** and political scientist **Carter Malkasian** argue that securing the 80% of Ukraine currently free—integrating it rapidly into the European Union and extending NATO Article 5 protection over government-controlled territory—achieves a massive strategic victory over Moscow while preventing further generational bloodshed.',
          ],
        },
        {
          heading: 'West Germany Precedent in NATO (1955)',
          paragraphs: [
            'When the **Federal Republic of Germany (West Germany) joined NATO in 1955**, it remained formally committed to German reunification and did not recognize the legitimacy of the Soviet-occupied East Germany. NATO extended Article 5 protection only to West German territory. This arrangement protected German democracy for 35 years until peaceful reunification occurred in 1990.',
          ],
        },
      ],
      details: [
        '**1953 Korean Armistice Precedent:** South Korea flourished into a high-tech democratic superpower without signing a peace treaty.',
        '**West Germany 1955 Precedent:** West Germany entered NATO with Article 5 covering only free territory while East Germany remained occupied.',
        '**Saving the Ukrainian Future:** Preserves Ukrainian demographic viability, halts city destruction, and enables immediate EU integration.',
      ],
      sources: [
        {
          title: 'Text of the Korean War Armistice Agreement',
          url: 'https://avalon.law.yale.edu/20th_century/kor001.asp',
          publisher: 'Yale Law School Avalon Project',
          year: '1953',
          category: 'Primary Text / Treaty',
        },
        {
          title: 'The West German Model for Ukraine: How NATO Can Protect a Divided Nation',
          url: 'https://www.foreignaffairs.com/ukraine/west-german-model-ukraine',
          publisher: 'Foreign Affairs',
          year: '2023',
          category: 'Scholarship',
        },
      ],
      tags: ['Diplomacy', 'National Security', 'History'],
      era: '1953–2024',
      relatedIds: ['pro-ukr-complete-restoration', 'thesis-ukr-endgame-settlement'],
    },
  ],
};
