import { DebateGraphDataset } from '../../types/debate';

export const chinaWesternOrderDataset: DebateGraphDataset = {
  id: 'china-western-order',
  version: '1.0.0',
  shortTitle: 'Rise of China',
  title: 'The Rise of China & The International Order',
  subtitle: 'Strategic containment & decoupling vs. integration, multilateralism & multipolar coexistence',
  searchPlaceholder: 'Search Taiwan deterrence, Thucydides trap, CHIPS Act, Belt and Road, Mahbubani, McMaster...',
  epistemologyNote:
    'The geopolitical rise of China is assessed through competing grand strategic lenses: Western liberal and realist strategists emphasize Beijing’s revisionist challenge to maritime commons, human rights norms, and democratic sovereignty; conversely, post-colonial and Asian integration theorists emphasize historic modernization, alternative South-South multilateral institutions, and the existential necessity of superpower coexistence.',
  availableTags: [
    'National Security',
    'Diplomacy',
    'Trade & Industry',
    'Macroeconomics',
    'Economics',
    'Governance',
    'Human Rights',
    'Science & Innovation',
    'Energy & Climate',
    'Empirical Studies',
  ],
  shortPillarLabels: {
    'pillar-china-revisionism': '1. Security & Taiwan',
    'pillar-china-integration': '2. Modernization & BRI',
    'pillar-china-decoupling': '3. Tech & Supply Chains',
    'pillar-china-coexistence': '4. Thucydides & Coexistence',
  },
  lastUpdated: '2026-03-30',
  nodes: [
    // -------------------------------------------------------------
    // ROOT NODE
    // -------------------------------------------------------------
    {
      id: 'root-china',
      parentId: null,
      kind: 'root',
      title: 'The Rise of China & The International Order: Containment vs. Multipolar Coexistence',
      summary:
        'A comprehensive dialectical evaluation of China’s emergence as a global superpower, contrasting Western warnings of authoritarian revisionism and economic coercion against arguments championing developing-world modernization, alternative multilateralism, and managed strategic coexistence.',
      sections: [
        {
          heading: 'The Defining Geopolitical Rivalry of the Twenty-First Century',
          paragraphs: [
            'China’s rapid ascent from a war-torn, impoverished agrarian society to the world’s second-largest economy and premier industrial manufacturing powerhouse constitutes the most dramatic geopolitical transformation since the rise of the United States in the late 19th century. This historical shift challenges the post-1945 U.S.-led "liberal international order" and raises profound questions regarding whether a rising power and an established hegemon can avoid catastrophic armed collision.',
            'In the landmark **2019 Munk Debate**, former U.S. National Security Advisor **H.R. McMaster** and China scholar **Michael Pillsbury** argued that the Chinese Communist Party (CCP) represents an existential revisionist threat determined to displace American leadership, subvert democratic norms, and establish a tributary system across Eurasia. In direct rebuttal, former Singaporean diplomat **Kishore Mahbubani** and Center for China and Globalization President **Huiyao Wang** contended that China’s rejuvenation is a natural, peaceful return to historical equilibrium, having lifted 800 million citizens out of extreme poverty and acting as an indispensable engine of global economic growth.',
          ],
        },
        {
          heading: 'Dialectical Structure: Security, Development, Technology, and Coexistence',
          paragraphs: [
            'This debate dataset maps the superpower contestation across four symmetrical pillars: First, **authoritarian revisionism and regional security**, analyzing cross-strait deterrence over democratic Taiwan, militarization of the South China Sea, and defiance of international maritime arbitration; Second, **multilateral modernization**, examining domestic poverty elimination, the Belt and Road Initiative (BRI), and the Asian Infrastructure Investment Bank (AIIB) as alternatives to Bretton Woods institutions.',
            'Third, **technological decoupling and economic warfare**, tracking the CHIPS and Science Act, advanced semiconductor export embargoes, and critical mineral supply chain dependencies; and Fourth, **global coexistence and the Thucydides Trap**, exploring **Graham Allison’s** structural conflict theory, the imperative for managed strategic competition (**Kevin Rudd**), and joint planetary survival on climate change and pandemics.',
          ],
        },
      ],
      details: [
        '**Landmark 2019 Munk Debate:** McMaster & Pillsbury vs. Mahbubani & Wang on whether China is a threat to the international order.',
        '**The Thucydides Trap:** Harvard Belfer Center historical study of 16 power transitions; 12 resulted in catastrophic systemic warfare.',
        '**Technological Chokepoints:** Export bans on extreme ultraviolet (EUV) photolithography and advanced AI semiconductors.',
        '**Global Commons Necessity:** The world’s two largest carbon emitters cannot solve the climate crisis without institutional coordination.',
      ],
      sources: [
        {
          title: 'Munk Debate on China: Is China a Threat to the Liberal International Order?',
          url: 'https://munkdebates.com/debates/china/',
          publisher: 'Munk Debates',
          year: '2019',
          category: 'Debate / Broadcast',
        },
        {
          title: 'Destined for War: Can America and China Escape Thucydides\'s Trap?',
          url: 'https://www.houghtonmifflinharcourt.com/destined-for-war',
          publisher: 'Houghton Mifflin Harcourt / Graham Allison',
          year: '2017',
          category: 'Scholarship',
        },
        {
          title: 'Has China Won? The Chinese Challenge to American Primacy',
          url: 'https://www.publicaffairsbooks.com/titles/kishore-mahbubani/has-china-won/9781541788367/',
          publisher: 'PublicAffairs / Kishore Mahbubani',
          year: '2020',
          category: 'Scholarship',
        },
        {
          title: 'The Long Game: China\'s Grand Strategy to Displace American Order',
          url: 'https://global.oup.com/academic/product/the-long-game-9780197527917',
          publisher: 'Oxford University Press / Rush Doshi',
          year: '2021',
          category: 'Scholarship',
        },
      ],
      tags: ['National Security', 'Diplomacy', 'Trade & Industry', 'Economics'],
      era: '1978–2026',
      relatedIds: ['pillar-china-revisionism', 'pillar-china-integration', 'pillar-china-decoupling', 'pillar-china-coexistence'],
    },

    // -------------------------------------------------------------
    // PILLAR 1: AUTHORITARIAN REVISIONISM & SECURITY CHALLENGE
    // -------------------------------------------------------------
    {
      id: 'pillar-china-revisionism',
      parentId: 'root-china',
      kind: 'pillar',
      title: 'Pillar 1: Authoritarian Revisionism, Regional Hegemony & Taiwan',
      summary:
        'Analyzes the security challenge posed by China’s military modernization, cross-strait threats against democratic Taiwan, unilateral claims across the South China Sea, and export of digital surveillance tools.',
      sections: [
        {
          heading: 'Displacing the First Island Chain Security Architecture',
          paragraphs: [
            'National security analysts like **Rush Doshi** (*The Long Game*) and **Hal Brands** argue that under President **Xi Jinping**, Beijing has abandoned Deng Xiaoping’s dictum of "hide your light and bide your time" (*taoguang yanghui*) in favor of an assertive grand strategy designed to displace the United States as the preeminent power in the Indo-Pacific. At the center of this strategy is the rapid expansion of the People’s Liberation Army Navy (PLAN), now the largest naval fleet by total hulls on earth.',
            'The core strategic prize is **Taiwan**, an autonomous, vibrant democracy of 23.5 million people that manufactures over 60% of the world’s microchips and 90% of its most advanced sub-5nm semiconductors. Beijing insists Taiwan is an inalienable Chinese province and has refused to renounce the use of military force to achieve unification, threatening regional war.',
          ],
        },
        {
          heading: 'Militarization of the South China Sea and UNCLOS Defiance',
          paragraphs: [
            'Simultaneously, China constructed and militarized artificial island fortresses across the Spratly and Paracel archipelagos within its contested "Nine-Dash Line," defying the landmark **2016 Permanent Court of Arbitration** ruling in favor of the Philippines. This unilateral assertion of sovereignty threatens the freedom of navigation in sea lanes that carry over $3.4 trillion in annual global maritime commerce.',
          ],
        },
      ],
      details: [
        '**Naval Expansion:** PLAN surpassed the US Navy in total number of battle-force ships, accelerating submarine and carrier strike capacity.',
        '**Taiwan Strait Flashpoint:** Unification framed by Xi Jinping as an indispensable historical milestone for the "Great Rejuvenation of the Chinese Nation."',
        '**UNCLOS Defiance:** Refusal to recognize the 2016 Hague arbitral tribunal decision regarding the South China Sea.',
        '**Digital Authoritarianism:** Export of AI facial recognition, smart policing tech, and surveillance architectures to authoritarian regimes.',
      ],
      sources: [
        {
          title: 'The Long Game: China\'s Grand Strategy to Displace American Order',
          url: 'https://global.oup.com/academic/product/the-long-game-9780197527917',
          publisher: 'Oxford University Press / Rush Doshi',
          year: '2021',
          category: 'Scholarship',
        },
        {
          title: 'Military and Security Developments Involving the People’s Republic of China (China Military Power Report)',
          url: 'https://www.defense.gov/CMPR/',
          publisher: 'US Department of Defense',
          year: '2023',
          category: 'Court / Official Record',
        },
        {
          title: 'Permanent Court of Arbitration: The South China Sea Arbitration (The Republic of Philippines v. The People\'s Republic of China)',
          url: 'https://pca-cpa.org/en/cases/7/',
          publisher: 'Permanent Court of Arbitration (PCA)',
          year: '2016',
          category: 'Court / Official Record',
        },
      ],
      tags: ['National Security', 'International Law', 'Diplomacy'],
      era: '2013–2026',
      relatedIds: ['thesis-china-taiwan-strait', 'thesis-china-south-sea-expansion', 'pillar-china-integration'],
    },

    // THESIS 1.1
    {
      id: 'thesis-china-taiwan-strait',
      parentId: 'pillar-china-revisionism',
      kind: 'thesis',
      title: 'Thesis 1.1: Taiwan Cross-Strait Deterrence vs. "One China" Sacred Sovereignty',
      summary:
        'Western deterrence views Taiwan as an essential democratic partner and semiconductor chokepoint, while Beijing frames Taiwan\'s unification as an inviolable sacred sovereign duty.',
      sections: [
        {
          heading: 'Taiwan as the Epicenter of Free World Security',
          paragraphs: [
            'Strategically, Taiwan anchors the **First Island Chain** running from Japan to the Philippines, which prevents Chinese naval power from dominating the Western Pacific. A Chinese conquest of Taiwan would rupture the security guarantees undergirding U.S. alliances with Tokyo and Seoul, potentially sparking regional nuclear proliferation.',
            'Furthermore, the concentration of advanced semiconductor manufacturing under the **Taiwan Semiconductor Manufacturing Company (TSMC)** creates what President Tsai Ing-wen termed a "silicon shield." A war over Taiwan would trigger an immediate global economic depression, halting production of smartphones, vehicles, medical equipment, and advanced military aircraft worldwide.',
          ],
        },
        {
          heading: 'The Sacred Principle of National Territorial Integrity',
          paragraphs: [
            'From Beijing’s perspective, Taiwan was torn from China by Imperial Japanese aggression in the 1895 Treaty of Shimonoseki during the "Century of Humiliation." In official CCP doctrine, resolving the Taiwan question and realizing China’s complete reunification is a core national interest that brooks no foreign interference.',
          ],
        },
      ],
      details: [
        '**First Island Chain Fulcrum:** Taiwan prevents Chinese naval domination of the Pacific sea lanes.',
        '**TSMC Silicon Shield:** Taiwan produces over 90% of global leading-edge chips; disruption would induce global depression.',
        '**Century of Humiliation Context:** Reclamation of Taiwan viewed in Beijing as closing the final chapter of imperialist division.',
      ],
      sources: [
        {
          title: 'The Taiwan Catastrophe: What America Standing Aside Would Mean for the World',
          url: 'https://www.foreignaffairs.com/articles/taiwan/2021-06-03/taiwan-catastrophe',
          publisher: 'Foreign Affairs / Elbridge Colby',
          year: '2021',
          category: 'Scholarship',
        },
        {
          title: 'White Paper: The Taiwan Question and China\'s Reunification in the New Era',
          url: 'http://english.www.gov.cn/archive/whitepaper/202208/10/content_WS62f34f46c6d02e533532f0ac.html',
          publisher: 'State Council Information Office of the PRC',
          year: '2022',
          category: 'Primary Text / Treaty',
        },
      ],
      tags: ['National Security', 'Diplomacy', 'Trade & Industry'],
      era: '1949–2024',
      relatedIds: ['pro-china-taiwan-vital-interest', 'con-china-taiwan-one-china-sovereignty'],
    },

    // PRO 1.1.1
    {
      id: 'pro-china-taiwan-vital-interest',
      parentId: 'thesis-china-taiwan-strait',
      kind: 'pro',
      title: 'Evidence: CSIS Wargames & Global Economic Catastrophe of a Taiwan Strait Conflict',
      summary:
        'Comprehensive defense wargames and economic analyses reveal that a Chinese invasion of Taiwan would inflict trillions in global economic damage and catastrophic military losses.',
      sections: [
        {
          heading: 'The CSIS "First Battle of the Next War" Simulation (2023)',
          paragraphs: [
            'In 2023, the **Center for Strategic and International Studies (CSIS)** ran 24 iterations of a comprehensive operational wargame simulating a Chinese amphibious invasion of Taiwan in 2026. In most base scenarios, the United States, Japan, and Taiwan successfully repelled the invasion and kept Taiwan autonomous. However, the cost was staggering: the U.S. lost dozens of ships, hundreds of combat aircraft, and over 3,200 servicemembers within three weeks, while China’s navy lay in ruins with 10,000 soldiers lost.',
            'The study demonstrated that robust pre-war deterrence—stockpiling anti-ship cruise missiles (LRASMs), dispersing air assets across hardened Pacific bases, and arming Taiwan with asymmetric "porcupine" defenses—is the only viable method to prevent a war that would permanently devastate all combatants.',
          ],
        },
        {
          heading: 'The $10 Trillion Global GDP Shock',
          paragraphs: [
            'A 2024 economic projection by **Bloomberg Economics** estimated that a cross-strait conflict and blockade would wipe out **$10 trillion, or 10% of global GDP**, dwarfing the economic impacts of both the 2008 financial crash and the COVID-19 pandemic due to the instantaneous shutdown of global semiconductor supply lines.',
          ],
        },
      ],
      details: [
        '**24 CSIS Wargame Iterations:** Confirmed that defending Taiwan is militarily possible but exacts severe aircraft carrier and air wing attrition.',
        '**Porcupine Strategy:** Requirement for Taiwan to deploy low-cost, mobile asymmetric anti-ship and air-defense missiles.',
        '**$10 Trillion Economic Rupture:** Bloomberg Economics projection of immediate global depression caused by semiconductor stoppage.',
      ],
      sources: [
        {
          title: 'The First Battle of the Next War: Wargaming a Chinese Invasion of Taiwan',
          url: 'https://www.csis.org/analysis/first-battle-next-war-wargaming-chinese-invasion-taiwan',
          publisher: 'Center for Strategic and International Studies (CSIS)',
          year: '2023',
          category: 'Watchdog / NGO',
        },
        {
          title: 'The $10 Trillion Cost of War Over Taiwan: Bloomberg Economics',
          url: 'https://www.bloomberg.com/news/features/2024-01-09/a-war-over-taiwan-would-cost-10-trillion-or-10-of-global-gdp',
          publisher: 'Bloomberg News / Bloomberg Economics',
          year: '2024',
          category: 'Empirical / Economic Study',
        },
      ],
      tags: ['National Security', 'Macroeconomics', 'Empirical Studies'],
      era: '2023–2024',
      relatedIds: ['thesis-china-taiwan-strait', 'con-china-taiwan-one-china-sovereignty'],
    },

    // CON 1.1.2
    {
      id: 'con-china-taiwan-one-china-sovereignty',
      parentId: 'thesis-china-taiwan-strait',
      kind: 'con',
      title: 'Counter-Argument: The Inviolable "One China" Principle & Historical Legitimacy',
      summary:
        'Beijing argues that the One China principle is codified in UN Resolution 2758 and the Three Joint Communiqués, and that Western military support for Taiwan violates international law.',
      sections: [
        {
          heading: 'The Legal Framework of UN Resolution 2758',
          paragraphs: [
            'In October 1971, the **United Nations General Assembly adopted Resolution 2758**, recognizing the representatives of the Government of the People’s Republic of China as the "only legitimate representatives of China to the United Nations," expelling the representatives of Chiang Kai-shek’s Republic of China. Beijing emphasizes that the vast majority of sovereign states, including the United States, officially recognize only one China.',
            'In the **Three Joint Communiqués** (1972 Shanghai, 1979 Normalization, 1982 Arms Sales), Washington acknowledged the Chinese position that there is but one China and Taiwan is part of China. Beijing contends that ongoing U.S. arms sales, high-level congressional visits, and explicit security guarantees violate diplomatic commitments and embolden illegal separatist forces.',
          ],
        },
        {
          heading: 'Closing the Century of Humiliation',
          paragraphs: [
            'In the historical consciousness of the Chinese nation, Taiwan was ceded under imperialist duress to Japan in 1895 and temporarily separated following the 1949 civil war. Allowing foreign powers to permanently detach Taiwan is viewed as an intolerable continuation of imperialist dismemberment that no patriotic Chinese government could accept.',
          ],
        },
      ],
      details: [
        '**UNGA Resolution 2758 (1971):** Replaced Republic of China with PRC as sole legitimate Chinese representative at the UN.',
        '**The Three Joint Communiqués:** U.S. formally acknowledged the Chinese position that Taiwan is part of China.',
        '**Anti-Secession Law (2005):** Chinese domestic statute mandates non-peaceful means if Taiwan formalizes independence.',
      ],
      sources: [
        {
          title: 'UN General Assembly Resolution 2758: Restoration of the Lawful Rights of the People\'s Republic of China in the United Nations',
          url: 'https://digitallibrary.un.org/record/192054',
          publisher: 'United Nations General Assembly',
          year: '1971',
          category: 'Primary Text / Treaty',
        },
        {
          title: 'The Three Joint Communiqués Between the United States and China (1972, 1979, 1982)',
          url: 'https://www.state.gov/u-s-relations-with-china/',
          publisher: 'US Department of State',
          year: '1972–1982',
          category: 'Primary Text / Treaty',
        },
      ],
      tags: ['International Law', 'Diplomacy', 'History'],
      era: '1971–2022',
      relatedIds: ['pro-china-taiwan-vital-interest', 'thesis-china-taiwan-strait'],
    },

    // THESIS 1.2
    {
      id: 'thesis-china-south-sea-expansion',
      parentId: 'pillar-china-revisionism',
      kind: 'thesis',
      title: 'Thesis 1.2: South China Sea Militarization: Asserting Hegemony vs. Defending Commons',
      summary:
        'China’s artificial island fortress construction asserts de facto control over vital maritime chokepoints, challenging the United Nations Convention on the Law of the Sea (UNCLOS).',
      sections: [
        {
          heading: 'Island Building and Anti-Access/Area-Denial (A2/AD)',
          paragraphs: [
            'Beginning in 2013, China dredged and reclaimed over 3,200 acres of land across seven reefs in the Spratly Islands, constructing 10,000-foot military runways, radar domes, deep-water port facilities, and surface-to-air missile batteries on Subi, Mischief, and Fiery Cross reefs. Despite public assurances in 2015 by Xi Jinping that China had no intention to militarize the islands, these outposts now function as unsinkable aircraft carriers.',
            'Maritime security analysts point out that this militarization enables the PLA to enforce an **Anti-Access/Area-Denial (A2/AD)** zone, threatening commercial shipping lanes, harassing Filipino and Vietnamese fishing vessels, and attempting to turn the South China Sea into an internal Chinese maritime lake.',
          ],
        },
        {
          heading: 'Historical Nine-Dash Line Claims',
          paragraphs: [
            'China justifies its maritime control through the "Nine-Dash Line," claiming historic rights dating back centuries to imperial dynasties. Beijing argues that Western naval patrols are provocative attempts to bottle up China’s navy within its home waters.',
          ],
        },
      ],
      details: [
        '**3,200 Acres of Island Dredging:** Transformed submerged atolls into fortified military bastions with long-range airstrips.',
        '**Defiance of Xi\'s 2015 Pledge:** Broken public promise made at the White House not to militarize the Spratly Islands.',
        '**Coercion in Exclusive Economic Zones:** Systematic water-cannon and ramming tactics against Philippine resupply missions at Second Thomas Shoal.',
      ],
      sources: [
        {
          title: 'Asia Maritime Transparency Initiative (AMTI): Tracking Island Building in the South China Sea',
          url: 'https://amti.csis.org/island-tracker/',
          publisher: 'Center for Strategic and International Studies (CSIS)',
          year: '2023',
          category: 'Watchdog / NGO',
        },
        {
          title: 'The South China Sea: The Struggle for Power in Asia',
          url: 'https://yalebooks.yale.edu/book/9780300216776/the-south-china-sea/',
          publisher: 'Yale University Press / Bill Hayton',
          year: '2014',
          category: 'Scholarship',
        },
      ],
      tags: ['National Security', 'International Law'],
      era: '2013–2024',
      relatedIds: ['pro-china-south-sea-arbitration', 'con-china-historic-nine-dash'],
    },

    // PRO 1.2.1
    {
      id: 'pro-china-south-sea-arbitration',
      parentId: 'thesis-china-south-sea-expansion',
      kind: 'pro',
      title: 'Evidence: The 2016 Hague Tribunal Ruling & Freedom of Navigation Operations (FONOPs)',
      summary:
        'The Permanent Court of Arbitration ruled unanimously that China’s Nine-Dash Line has no legal basis under UNCLOS, legitimizing US and allied Freedom of Navigation patrols.',
      sections: [
        {
          heading: 'The Unanimous 2016 Permanent Court of Arbitration Award',
          paragraphs: [
            'In July 2016, an arbitral tribunal convened at the **Permanent Court of Arbitration (PCA) in The Hague** under Annex VII of UNCLOS issued a historic, unanimous ruling in *Philippines v. China*. The tribunal concluded that China’s claim to historic rights within the Nine-Dash Line was extinguished upon its ratification of UNCLOS, and that low-tide elevations and submerged reefs cannot generate an Exclusive Economic Zone (EEZ) or territorial sea.',
            'The court found that China had violated the sovereign rights of the Philippines by constructing artificial islands at Mischief Reef, interfering with Philippine fishing and oil exploration, and causing severe, irreversible environmental damage to coral reef ecosystems.',
          ],
        },
        {
          heading: 'Allied Freedom of Navigation Patrols (FONOPs)',
          paragraphs: [
            'To uphold international maritime law and ensure sea lanes remain open, the U.S. Navy, joined by British, Australian, and Japanese warships, routinely conducts **Freedom of Navigation Operations (FONOPs)**, sailing within 12 nautical miles of disputed features to demonstrate that excessive maritime claims will not be accepted as established customary law.',
          ],
        },
      ],
      details: [
        '**Hague Ruling Against Nine-Dash Line:** Ruled unequivocally that China\'s historic claims have zero standing under international law.',
        '**Mischief Reef Construction Unlawful:** Finding that China breached Philippine sovereign rights by building on submerged maritime features.',
        '**Multilateral FONOP Operations:** Naval enforcement of innocent passage by US, UK, Japanese, and Australian naval vessels.',
      ],
      sources: [
        {
          title: 'PCA Press Release: The South China Sea Arbitration (Award on the Merits)',
          url: 'https://pca-cpa.org/en/news/pca-press-release-the-south-china-sea-arbitration-the-republic-of-the-philippines-v-the-peoples-republic-of-china/',
          publisher: 'Permanent Court of Arbitration (PCA)',
          year: '2016',
          category: 'Court / Official Record',
        },
        {
          title: 'U.S. Department of State: Limits in the Seas No. 150 — People\'s Republic of China: Maritime Claims in the South China Sea',
          url: 'https://www.state.gov/limits-in-the-seas-no-150-peoples-republic-of-china-maritime-claims-in-the-south-china-sea/',
          publisher: 'US Department of State Bureau of Oceans and International Environmental and Scientific Affairs',
          year: '2022',
          category: 'Court / Official Record',
        },
      ],
      tags: ['International Law', 'National Security'],
      era: '2016–2022',
      relatedIds: ['thesis-china-south-sea-expansion', 'con-china-historic-nine-dash'],
    },

    // CON 1.2.2
    {
      id: 'con-china-historic-nine-dash',
      parentId: 'thesis-china-south-sea-expansion',
      kind: 'con',
      title: 'Counter-Argument: Historical Sovereignty & Defense Against Western Naval Hegemony',
      summary:
        'China rejects the Hague ruling as ultra vires and argues its naval presence protects vital trade lifelines against U.S. gunboat encirclement and historical imperialism.',
      sections: [
        {
          heading: 'Rejection of the PCA\'s Jurisdiction as Ultra Vires',
          paragraphs: [
            'The Chinese Ministry of Foreign Affairs maintained a stance of "non-acceptance and non-participation" regarding the Philippines arbitration, arguing that the tribunal lacked jurisdiction because the dispute fundamentally concerned territorial sovereignty over land features and maritime boundary delimitation—matters China explicitly opted out of under Article 298 of UNCLOS in 2006.',
            'Chinese legal scholars assert that Chinese fishermen and navigators explored and named the Nansha (Spratly) and Xisha (Paracel) islands for two millennia, documented in official imperial registers long before European colonial powers or modern Southeast Asian nations drafted borders.',
          ],
        },
        {
          heading: 'Securing the "Malacca Dilemma" Against Blockade',
          paragraphs: [
            'President Hu Jintao famously coined the **"Malacca Dilemma"** to describe China\'s vulnerability: over 80% of its imported crude oil passes through the narrow Strait of Malacca. Beijing views the forward deployment of American carrier strike groups as an existential threat capable of cutting off Chinese energy supplies in a crisis, making defensive naval outposts vital for national survival.',
          ],
        },
      ],
      details: [
        '**Article 298 UNCLOS Exemption:** China legally opted out of compulsory dispute resolution regarding maritime boundaries in 2006.',
        '**Two Millennia of Historical Usage:** Imperial maritime records cited to support historic title over South China Sea atolls.',
        '**The "Malacca Dilemma":** Defensive necessity of securing vital energy maritime supply lines against potential U.S. naval blockades.',
      ],
      sources: [
        {
          title: 'Position Paper of the Government of the People\'s Republic of China on the Matter of Jurisdiction in the South China Sea Arbitration',
          url: 'https://www.fmprc.gov.cn/mfa_eng/wjdt_665385/2649_665393/201412/t20141207_679387.html',
          publisher: 'Ministry of Foreign Affairs of the People\'s Republic of China',
          year: '2014',
          category: 'Primary Text / Treaty',
        },
        {
          title: 'China\'s Maritime Silk Road and the Malacca Dilemma',
          url: 'https://www.csis.org/analysis/chinas-maritime-silk-road-and-malacca-dilemma',
          publisher: 'Center for Strategic and International Studies (CSIS)',
          year: '2018',
          category: 'Scholarship',
        },
      ],
      tags: ['International Law', 'National Security', 'History'],
      era: '2006–2018',
      relatedIds: ['pro-china-south-sea-arbitration', 'thesis-china-south-sea-expansion'],
    },

    // -------------------------------------------------------------
    // PILLAR 2: MULTILATERALISM & DEVELOPING WORLD MODERNIZATION
    // -------------------------------------------------------------
    {
      id: 'pillar-china-integration',
      parentId: 'root-china',
      kind: 'pillar',
      title: 'Pillar 2: Multilateralism, Poverty Alleviation & Global South Modernization',
      summary:
        'Focuses on China’s historic internal development—eradicating extreme poverty for 800 million citizens—and its emergence as the primary infrastructure financier and diplomatic partner for the Global South.',
      sections: [
        {
          heading: 'The Greatest Poverty Reduction in Human History',
          paragraphs: [
            'Following the launch of "Reform and Opening-Up" under Deng Xiaoping in 1978, China achieved an economic miracle unprecedented in scope and velocity. According to official **World Bank data**, between 1978 and 2021, China lifted over **800 million people out of extreme poverty**, contributing to over 70% of global poverty reduction during that period.',
            'As Singaporean scholar **Kishore Mahbubani** emphasizes in *Has China Won?*, the primary moral test of governance is the tangible improvement of the living standards, education, healthcare, and human dignity of the population. For hundreds of millions of ordinary Chinese citizens, the past four decades brought the greatest explosion of material well-being in three thousand years of recorded civilization.',
          ],
        },
        {
          heading: 'Bridging the Global South Infrastructure Gap',
          paragraphs: [
            'Internationally, through the **Belt and Road Initiative (BRI)** and the founding of the **Asian Infrastructure Investment Bank (AIIB)**, Beijing addressed the massive multitrillion-dollar infrastructure deficit across Asia, Africa, and Latin America. While Western development banks imposed painful structural adjustment programs and bureaucratic conditionalities, China built operational railways, ports, power plants, and telecom towers.',
          ],
        },
      ],
      details: [
        '**800 Million Lifted from Poverty:** World Bank-verified reduction of extreme poverty from 88% in 1981 to less than 1% today.',
        '**Belt and Road Scope:** Over 150 participating countries and $1 trillion in cumulative infrastructure investments.',
        '**AIIB Multilateral Success:** Over 100 member countries, earning AAA credit ratings while maintaining governance standards.',
        '**Global South Alignment:** Broad support across Africa, the Middle East, and Latin America for Chinese non-interference diplomacy.',
      ],
      sources: [
        {
          title: 'Four Decades of Poverty Reduction in China: Drivers, Insights for the World, and the Way Ahead',
          url: 'https://www.worldbank.org/en/country/china/publication/four-decades-of-poverty-reduction-in-china',
          publisher: 'World Bank Group & Development Research Center of China\'s State Council',
          year: '2022',
          category: 'Empirical / Economic Study',
        },
        {
          title: 'Has China Won? The Chinese Challenge to American Primacy',
          url: 'https://www.publicaffairsbooks.com/titles/kishore-mahbubani/has-china-won/9781541788367/',
          publisher: 'PublicAffairs / Kishore Mahbubani',
          year: '2020',
          category: 'Scholarship',
        },
        {
          title: 'Belt and Road Economics: Opportunities and Risks of Transport Corridors',
          url: 'https://www.worldbank.org/en/topic/regional-integration/publication/belt-and-road-economics-opportunities-and-risks-of-transport-corridors',
          publisher: 'World Bank Group',
          year: '2019',
          category: 'Empirical / Economic Study',
        },
      ],
      tags: ['Economics', 'Governance', 'Macroeconomics'],
      era: '1978–2026',
      relatedIds: ['thesis-china-poverty-development', 'thesis-china-bri-south-infrastructure', 'pillar-china-revisionism'],
    },

    // THESIS 2.1
    {
      id: 'thesis-china-poverty-development',
      parentId: 'pillar-china-integration',
      kind: 'thesis',
      title: 'Thesis 2.1: The Chinese Development Model: Pragmatic State Capitalism & Social Welfare',
      summary:
        'China’s pragmatic fusion of market mechanisms, strategic state guidance, and long-term infrastructure planning delivered unprecedented human development.',
      sections: [
        {
          heading: 'Targeted Poverty Alleviation and State Capacity',
          paragraphs: [
            'China’s success did not stem merely from market liberalization, but from powerful state mobilization. Under the "Targeted Poverty Alleviation" campaign launched in 2013, the CCP dispatched millions of party cadres to live in impoverished rural villages, auditing individual household needs, connecting remote villages to paved roads and high-speed 5G broadband, and establishing rural industrial cooperatives.',
            'Economist **Justin Yifu Lin** (former Chief Economist of the World Bank) points out that developing countries require a "facilitating state" that identifies comparative advantages and overcomes market coordination failures through infrastructure investment, a model vastly superior to the laissez-faire Washington Consensus.',
          ],
        },
        {
          heading: 'Critiques of Structural Inequity and Human Rights Costs',
          paragraphs: [
            'Critics argue that this economic progress was achieved at a staggering human cost: the suppression of basic civil liberties, the severe cultural and religious persecution of Uyghur Muslims in Xinjiang, the elimination of independent trade unions, and an economic model plagued by massive local government debt and a bursting real estate bubble.',
          ],
        },
      ],
      details: [
        '**Targeted Poverty Campaign:** Mobilization of 3 million party cadres to eradicate extreme rural deprivation.',
        '**Infrastructure Prioritization:** Construction of 45,000 km of high-speed rail—more than the rest of the world combined.',
        '**Facilitating State Theory:** Successful state intervention in industrial clusters, logistics, and renewable manufacturing.',
      ],
      sources: [
        {
          title: 'The Quest for Prosperity: How Developing Economies Can Take Off',
          url: 'https://press.princeton.edu/books/hardcover/9780691155890/the-quest-for-prosperity',
          publisher: 'Princeton University Press / Justin Yifu Lin',
          year: '2012',
          category: 'Scholarship',
        },
        {
          title: 'Targeted Poverty Alleviation in China: A Historic Milestone',
          url: 'https://www.undp.org/china/publications/targeted-poverty-alleviation-china',
          publisher: 'United Nations Development Programme (UNDP)',
          year: '2021',
          category: 'Watchdog / NGO',
        },
      ],
      tags: ['Economics', 'Governance', 'Empirical Studies'],
      era: '2012–2022',
      relatedIds: ['pro-china-historic-poverty-reduction', 'con-china-state-capitalism-inequity'],
    },

    // PRO 2.1.1
    {
      id: 'pro-china-historic-poverty-reduction',
      parentId: 'thesis-china-poverty-development',
      kind: 'pro',
      title: 'Evidence: World Bank Data on Extreme Poverty Elimination (1981–2021)',
      summary:
        'Official World Bank empirical data confirms that China lowered its extreme poverty rate from 88.3% in 1981 to less than 0.5% in 2021, an achievement without historical parallel.',
      sections: [
        {
          heading: 'Empirical Verification of Poverty Eradication',
          paragraphs: [
            'In its definitive joint report *Four Decades of Poverty Reduction in China*, the **World Bank** documented that measured by the international extreme poverty threshold of $1.90 per day (2011 PPP), China\'s poverty headcount dropped from **88.3% of the population (over 870 million people) in 1981 to 0.5% in 2019**.',
            'Average life expectancy in China climbed from 66 years in 1978 to 78.2 years in 2021—surpassing that of the United States—while maternal mortality dropped by over 80% and infant mortality plummeted from 53 per 1,000 live births to under 5.4 per 1,000. These metrics reflect immense improvements in the fundamental human right to life, health, and dignity.',
          ],
        },
        {
          heading: 'Universal Literacy and Infrastructure Access',
          paragraphs: [
            'China achieved virtually 100% electrification across its vast territory, complete rural road connectivity, and near-universal literacy. For billions in the Global South, China’s governance model demonstrates that a developing society can modernize without submitting to Western geopolitical tutelage.',
          ],
        },
      ],
      details: [
        '**88.3% to 0.5% Poverty Drop:** World Bank verification of the complete elimination of extreme poverty.',
        '**Life Expectancy Surpassed the US:** Rose from 66 to 78.2 years, overtaking average American life expectancy in 2021.',
        '**100% Nationwide Electrification:** Universal physical access to power grids, clean water, and transport across all rural counties.',
      ],
      sources: [
        {
          title: 'World Bank Development Indicators: Poverty Headcount Ratio at $1.90 a Day (China)',
          url: 'https://data.worldbank.org/indicator/SI.POV.DDAY?locations=CN',
          publisher: 'World Bank Group',
          year: '2022',
          category: 'Empirical / Economic Study',
        },
        {
          title: 'China’s Path to Ending Poverty: Joint Study by World Bank and DRC',
          url: 'https://openknowledge.worldbank.org/handle/10986/37271',
          publisher: 'World Bank Open Knowledge Repository',
          year: '2022',
          category: 'Empirical / Economic Study',
        },
      ],
      tags: ['Economics', 'Empirical Studies', 'Macroeconomics'],
      era: '1981–2022',
      relatedIds: ['thesis-china-poverty-development', 'con-china-state-capitalism-inequity'],
    },

    // CON 2.1.2
    {
      id: 'con-china-state-capitalism-inequity',
      parentId: 'thesis-china-poverty-development',
      kind: 'con',
      title: 'Counter-Argument: Authoritarian Coercion, Xinjiang Repression & Real Estate Fragility',
      summary:
        'Critics document that Chinese development relies on brutal political repression in Xinjiang, extreme wealth inequality, state-distorted real estate bubbles, and lack of democratic freedoms.',
      sections: [
        {
          heading: 'Human Rights Abuses and the Xinjiang Interrogation',
          paragraphs: [
            'In August 2022, the **UN Office of the High Commissioner for Human Rights (OHCHR)** published its comprehensive assessment on human rights in Xinjiang, concluding that the Chinese government’s mass arbitrary detention of an estimated one million Uyghurs and other Muslim minorities in "vocational re-education centers," accompanied by forced labor, torture, and cultural eradication, may constitute crimes against humanity.',
            'Human rights advocates emphasize that economic metrics cannot excuse the total annihilation of civil liberties, the silencing of political dissent, the dismantling of Hong Kong\'s autonomy in violation of the Sino-British Joint Declaration, and the pervasive surveillance state.',
          ],
        },
        {
          heading: 'Structural Economic Imbalances and Local Debt',
          paragraphs: [
            'China’s growth model relied excessively on debt-fueled property investment. The collapse of major developers like **Evergrande** and **Country Garden**, combined with over $9 trillion in opaque local government financing vehicle (LGFV) debt, youth unemployment exceeding 20%, and rapid demographic aging, exposes severe structural limits in state-directed capitalism.',
          ],
        },
      ],
      details: [
        '**UN OHCHR Xinjiang Report (2022):** Mass arbitrary internment of Uyghurs classified as potential crimes against humanity.',
        '**Hong Kong National Security Law:** Dismantling of judicial independence, free press, and democratic opposition in Hong Kong.',
        '**Property Sector Crisis:** Liquidity collapse of Evergrande highlighting unsustainable real estate speculation and local government debt.',
      ],
      sources: [
        {
          title: 'OHCHR Assessment of Human Rights Concerns in the Xinjiang Uyghur Autonomous Region, People’s Republic of China',
          url: 'https://www.ohchr.org/en/documents/country-reports/ohchr-assessment-human-rights-concerns-xinjiang-uyghur-autonomous-region',
          publisher: 'United Nations Office of the High Commissioner for Human Rights (OHCHR)',
          year: '2022',
          category: 'Court / Official Record',
        },
        {
          title: 'The China Bubble: Local Government Debt and Property Market Contagion',
          url: 'https://www.piie.com/publications/policy-briefs/chinas-looming-local-government-debt-crisis',
          publisher: 'Peterson Institute for International Economics (PIIE)',
          year: '2023',
          category: 'Empirical / Economic Study',
        },
      ],
      tags: ['Human Rights', 'Economics', 'Governance'],
      era: '2020–2023',
      relatedIds: ['pro-china-historic-poverty-reduction', 'thesis-china-poverty-development'],
    },

    // THESIS 2.2
    {
      id: 'thesis-china-bri-south-infrastructure',
      parentId: 'pillar-china-integration',
      kind: 'thesis',
      title: 'Thesis 2.2: Belt and Road Initiative (BRI): Global Public Good vs. "Debt-Trap" Hegemony',
      summary:
        'The Belt and Road provides critical infrastructure across developing nations, but faces accusations of predatory debt-trap diplomacy and geopolitical coercion.',
      sections: [
        {
          heading: 'The Global Infrastructure Deficit and BRI Expansion',
          paragraphs: [
            'Announced by Xi Jinping in 2013, the Belt and Road Initiative encompasses two major corridors: the Silk Road Economic Belt across Eurasia and the 21st-Century Maritime Silk Road. It has financed ports (Piraeus, Gwadar), railways (Jakarta-Bandung, Laos-China high-speed line), and power plants across more than 150 countries, filling an infrastructure void left by Western development aid.',
            'Political scientist **Deborah Bräutigam** (*The Dragon’s Gift*) and empirical research from Johns Hopkins University’s China Africa Research Initiative debunk the myth of intentional "debt-trap diplomacy," demonstrating that Chinese banks routinely renegotiate and restructure loans rather than seizing sovereign assets.',
          ],
        },
        {
          heading: 'Accusations of Predatory Lending and Sovereignty Surrender',
          paragraphs: [
            'Conversely, critics point to high-profile cases like Sri Lanka’s **Hambantota Port**, where the government, unable to service debts, leased the port and 15,000 surrounding acres to a Chinese state-owned enterprise for 99 years. Critics contend that non-transparent lending fuels corruption and mortgages national sovereignty.',
          ],
        },
      ],
      details: [
        '**$1 Trillion in Projects:** Spanning high-speed railways in Laos and Indonesia to ports in Pakistan and Greece.',
        '**Debunking Debt-Trap Myths:** Academic research found Chinese lenders rarely seize assets, preferring maturity extensions.',
        '**Hambantota Port 99-Year Lease:** Cited globally as an alarming precedent for infrastructure distress and strategic asset transfer.',
      ],
      sources: [
        {
          title: 'A Critical Look at the "Debt-Trap" Narrative: China Africa Research Initiative',
          url: 'https://www.sais-cari.org/publications-policy-briefs',
          publisher: 'Johns Hopkins SAIS / Deborah Bräutigam',
          year: '2021',
          category: 'Scholarship',
        },
        {
          title: 'Belt and Road: A Chinese World Order',
          url: 'https://www.hurstpublishers.com/book/belt-and-road/',
          publisher: 'Hurst Publishers / Bruno Maçães',
          year: '2019',
          category: 'Scholarship',
        },
      ],
      tags: ['Economics', 'Trade & Industry', 'Diplomacy'],
      era: '2013–2024',
      relatedIds: ['pro-china-infrastructure-goods', 'con-china-debt-trap-sovereignty'],
    },

    // PRO 2.2.1
    {
      id: 'pro-china-infrastructure-goods',
      parentId: 'thesis-china-bri-south-infrastructure',
      kind: 'pro',
      title: 'Evidence: Tangible Connectivity: Jakarta-Bandung High-Speed Rail & Laos Link',
      summary:
        'Completed Belt and Road projects delivered transformative economic benefits to developing countries, cutting travel times and integrating landlocked economies into regional supply chains.',
      sections: [
        {
          heading: 'Transformative Transport Connectivity in Southeast Asia',
          paragraphs: [
            'In October 2023, Indonesia inaugurated the **Jakarta-Bandung High-Speed Railway ("Whoosh")**, Southeast Asia’s first bullet train, built by a consortium of Chinese state enterprises. Cutting travel time between the two major economic hubs from three hours to 45 minutes, the line carried over 1 million passengers within its first three months of operation, driving substantial regional commercial investment.',
            'Similarly, the 1,035-kilometer **Boten-Vientiane Railway in Laos**, completed in December 2021, transformed Laos from a mountainous, landlocked country into an integrated land-linked hub. Transit costs between Vientiane and Kunming dropped by 30–50%, boosting agricultural exports to China and generating thousands of local logistics jobs.',
          ],
        },
        {
          heading: 'Responsiveness to Developing Country Priorities',
          paragraphs: [
            'Unlike Western aid that arrives with complex political conditionalities, Chinese financing focuses on tangible physical capital: power grids, container ports, and bridges. Former Nigerian Finance Minister **Ngozi Okonjo-Iweala** (Director-General of the WTO) noted: "When we talk to China, we get a hospital or a railway; when we talk to the West, we get a lecture."',
          ],
        },
      ],
      details: [
        '**Jakarta-Bandung Bullet Train:** Reduced 3-hour transit to 45 minutes, transporting millions of passengers in its inaugural year.',
        '**Laos-China Railway:** Transformed landlocked Laos into a regional logistics corridor, reducing freight costs by up to 50%.',
        '**Demand-Driven Infrastructure:** Chinese state finance addressed the real physical bottlenecks constraining African and Asian industrialization.',
      ],
      sources: [
        {
          title: 'World Bank Report: From Landlocked to Land-Linked: Unlocking the Potential of Lao-China Rail Connectivity',
          url: 'https://www.worldbank.org/en/country/lao/publication/from-landlocked-to-land-linked-unlocking-the-potential-of-lao-china-rail-connectivity',
          publisher: 'World Bank Group',
          year: '2020',
          category: 'Empirical / Economic Study',
        },
        {
          title: 'Indonesia Inaugurates Southeast Asia’s First High-Speed Railway',
          url: 'https://www.reuters.com/world/asia-pacific/indonesia-launches-southeast-asias-first-high-speed-railway-2023-10-02/',
          publisher: 'Reuters',
          year: '2023',
          category: 'Debate / Broadcast',
        },
      ],
      tags: ['Trade & Industry', 'Economics', 'Empirical Studies'],
      era: '2020–2023',
      relatedIds: ['thesis-china-bri-south-infrastructure', 'con-china-debt-trap-sovereignty'],
    },

    // CON 2.2.2
    {
      id: 'con-china-debt-trap-sovereignty',
      parentId: 'thesis-china-bri-south-infrastructure',
      kind: 'con',
      title: 'Counter-Argument: Debt Distress, Sovereign Vulnerability & Hambantota Port',
      summary:
        'Opaque Chinese lending contracts, resource-backed financing, and high interest rates pushed fragile economies like Sri Lanka, Zambia, and Kenya toward sovereign default.',
      sections: [
        {
          heading: 'The Mechanics of Sovereign Debt Distress',
          paragraphs: [
            'Comprehensive contract research by the **Center for Global Development** and AidData analyzing over 100 contracts between Chinese state entities and foreign governments revealed pervasive "unusual confidentiality clauses" prohibiting borrowers from disclosing contract terms, as well as cross-default clauses that give Chinese lenders seniority over Paris Club and multilateral creditors.',
            'In **Sri Lanka**, billions borrowed for non-viable vanity projects—including the Hambantota Port and Mattala Rajapaksa International Airport—contributed to the country’s catastrophic 2022 sovereign default. When Sri Lanka could not service its debt, state-owned China Merchants Port acquired an 85% stake in Hambantota on a 99-year lease, sparking widespread fears of dual-use naval access for the PLAN.',
          ],
        },
        {
          heading: 'Zambia’s Default and Paris Club Stalemate',
          paragraphs: [
            'In Zambia, which defaulted on sovereign debt in 2020, Chinese state lenders held over $6 billion in loans and delayed debt-restructuring negotiations for nearly three years, refusing to accept haircuts unless the World Bank and IMF also took losses, paralyzing the country’s economic recovery.',
          ],
        },
      ],
      details: [
        '**AidData Contract Analysis:** Found aggressive confidentiality clauses barring disclosure of debt terms to citizens and IMF auditors.',
        '**Sri Lankan Sovereign Default:** Hambantota port lease cited as the prime example of debt leverage forcing asset concessions.',
        '**Zambia Debt Restructuring Standoff:** Chinese refusal to accept Paris Club haircuts prolonged severe African fiscal crises.',
      ],
      sources: [
        {
          title: 'How China Lends: A Rare Look into 100 Debt Contracts with Foreign Governments',
          url: 'https://www.aiddata.org/publications/how-china-lends',
          publisher: 'AidData at William & Mary / Center for Global Development',
          year: '2021',
          category: 'Empirical / Economic Study',
        },
        {
          title: 'Examining the Debt-Trap Diplomacy Thesis in Sri Lanka’s Hambantota Port',
          url: 'https://www.chathamhouse.org/2020/05/debunking-myth-debt-trap-diplomacy',
          publisher: 'Chatham House',
          year: '2020',
          category: 'Scholarship',
        },
      ],
      tags: ['Economics', 'Macroeconomics', 'Diplomacy'],
      era: '2020–2022',
      relatedIds: ['pro-china-infrastructure-goods', 'thesis-china-bri-south-infrastructure'],
    },

    // -------------------------------------------------------------
    // PILLAR 3: TECH DECOUPLING & SUPPLY CHAINS
    // -------------------------------------------------------------
    {
      id: 'pillar-china-decoupling',
      parentId: 'root-china',
      kind: 'pillar',
      title: 'Pillar 3: Technological Decoupling, Industrial Competition & Reshoring',
      summary:
        'Examines the technological conflict: US export bans on cutting-edge semiconductors, the CHIPS Act, the contest for telecommunications supremacy (5G/Huawei), and critical mineral vulnerabilities.',
      sections: [
        {
          heading: 'The "Small Yard, High Fence" Strategy and the CHIPS Act',
          paragraphs: [
            'Recognizing that advanced microelectronics are the indispensable foundation for artificial intelligence, autonomous weapons, and quantum computing, the United States executed a historic strategic pivot. In October 2022, National Security Advisor **Jake Sullivan** announced a shift from maintaining a relative technological lead over competitors to maintaining "as large of a lead as possible," unveiling comprehensive export restrictions on advanced semiconductors and chip-manufacturing tools.',
            'Coupled with the **$52 billion CHIPS and Science Act of 2022**, the U.S. and allies (Japan, the Netherlands) imposed an embargo on exporting extreme ultraviolet (EUV) photolithography systems (manufactured solely by Dutch firm ASML) and advanced GPUs (Nvidia A100/H100) to Chinese entities, aiming to choke off China’s AI computing capabilities.',
          ],
        },
        {
          heading: 'China’s Counter-Asymmetry: Clean Tech and Critical Minerals',
          paragraphs: [
            'In response, Beijing accelerated its domestic "Made in China 2025" and self-reliance (*zili gengsheng*) drives. Furthermore, China leveraged its near-monopoly on **critical raw minerals and green technology**—refining over 70% of the world’s lithium, 85% of rare earths, and producing 80% of global solar panels and EV batteries—reminding Western capitals that deep supply chain dependencies cannot be easily severed.',
          ],
        },
      ],
      details: [
        '**October 2022 Export Controls:** Comprehensive U.S. ban on exporting advanced AI chips (Nvidia) and lithography tools (ASML) to China.',
        '**CHIPS and Science Act (2022):** $52 billion in federal subsidies to reshore semiconductor fabrication to American soil.',
        '**ASML Monopolistic Chokepoint:** Prohibition on selling EUV machines to China halts sub-5nm domestic mass production.',
        '**Critical Minerals Asymmetry:** China processes 85% of global rare earth elements essential for EV motors, wind turbines, and defense avionics.',
      ],
      sources: [
        {
          title: 'Remarks by National Security Advisor Jake Sullivan at the Special Competitive Studies Project Global Emerging Technologies Summit',
          url: 'https://www.whitehouse.gov/briefing-room/speeches-remarks/2022/09/16/remarks-by-national-security-advisor-jake-sullivan-at-the-special-competitive-studies-project-global-emerging-technologies-summit/',
          publisher: 'The White House',
          year: '2022',
          category: 'Court / Official Record',
        },
        {
          title: 'Chip War: The Fight for the World\'s Most Critical Technology',
          url: 'https://www.simonandschuster.com/books/Chip-War/Chris-Miller/9781982172008',
          publisher: 'Scribner / Chris Miller',
          year: '2022',
          category: 'Scholarship',
        },
        {
          title: 'Implementation of Additional Export Controls: Certain Advanced Computing Items and Semiconductor Manufacturing Items',
          url: 'https://www.federalregister.gov/documents/2022/10/13/2022-21658/implementation-of-additional-export-controls-certain-advanced-computing-items-supercomputer-and',
          publisher: 'US Bureau of Industry and Security (BIS)',
          year: '2022',
          category: 'Court / Official Record',
        },
      ],
      tags: ['Science & Innovation', 'Trade & Industry', 'National Security'],
      era: '2020–2026',
      relatedIds: ['thesis-china-semiconductor-controls', 'thesis-china-critical-minerals-decoupling', 'pillar-china-coexistence'],
    },

    // THESIS 3.1
    {
      id: 'thesis-china-semiconductor-controls',
      parentId: 'pillar-china-decoupling',
      kind: 'thesis',
      title: 'Thesis 3.1: Semiconductor Embargoes: Strategic Containment vs. Spurring Chinese Autarky',
      summary:
        'Western export bans on advanced AI chips seek to freeze China’s military-technological capabilities, but risk accelerating domestic Chinese technological self-sufficiency.',
      sections: [
        {
          heading: 'Choking Military AI and Supercomputing',
          paragraphs: [
            'In *Chip War*, economic historian **Chris Miller** demonstrates that modern military dominance depends on computing horsepower. By cutting off access to Nvidia’s leading-edge tensor core GPUs and high-bandwidth memory (HBM), Washington aims to deny China’s military the processing power needed to train massive foundational AI models, simulate hypersonic weapon aerodynamics, and process satellite surveillance feeds.',
            'Furthermore, by forbidding U.S. persons (citizens and permanent residents) from supporting Chinese semiconductor fabrication without a license, the Bureau of Industry and Security dealt a direct blow to Chinese domestic fabs that relied heavily on American engineering talent.',
          ],
        },
        {
          heading: 'The Unintended Catalyst for Chinese Domestic Innovation',
          paragraphs: [
            'However, technology analysts warn that export controls eliminate American firms\' Chinese revenues—which historically funded massive R&D—while giving Chinese domestic tech companies a captive home market. In August 2023, **Huawei released the Mate 60 Pro smartphone**, featuring a 7-nanometer processor (Kirin 9000s) fabricated by SMIC, demonstrating that export restrictions accelerated, rather than stopped, indigenous breakthrough.',
          ],
        },
      ],
      details: [
        '**Military AI Throttle:** Denying GPU clusters needed for autonomous drone swarms and hypersonic missile targeting.',
        '**Personnel Sanctions:** Prohibition on US engineers working for Chinese semiconductor fabs.',
        '**Huawei Mate 60 Breakthrough:** Demonstration of 7nm manufacturing capability despite stringent Western equipment bans.',
      ],
      sources: [
        {
          title: 'Chip War: The Fight for the World\'s Most Critical Technology',
          url: 'https://www.simonandschuster.com/books/Chip-War/Chris-Miller/9781982172008',
          publisher: 'Scribner / Chris Miller',
          year: '2022',
          category: 'Scholarship',
        },
        {
          title: 'TechInsights Teardown of the Huawei Mate 60 Pro: SMIC 7nm Processor Confirmation',
          url: 'https://www.techinsights.com/blog/huawei-mate-60-pro-teardown',
          publisher: 'TechInsights',
          year: '2023',
          category: 'Empirical / Economic Study',
        },
      ],
      tags: ['Science & Innovation', 'National Security', 'Trade & Industry'],
      era: '2022–2024',
      relatedIds: ['pro-china-chips-export-curbs', 'con-china-indigenous-breakthrough'],
    },

    // PRO 3.1.1
    {
      id: 'pro-china-chips-export-curbs',
      parentId: 'thesis-china-semiconductor-controls',
      kind: 'pro',
      title: 'Evidence: Impact of October 2022 BIS Export Restrictions on Advanced Computing',
      summary:
        'The Department of Commerce’s coordinated controls effectively halted China’s access to ASML extreme ultraviolet lithography and cutting-edge Nvidia AI accelerators.',
      sections: [
        {
          heading: 'The Multilateral Tooling Bottleneck',
          paragraphs: [
            'Extreme ultraviolet (EUV) lithography systems—weighing 180 tons and containing over 100,000 components, including Zeiss mirrors polished to atomic tolerances and laser systems blasting molten tin droplets 50,000 times per second—are manufactured exclusively by Dutch firm **ASML**. Under joint diplomatic agreements between the U.S., the Netherlands, and Japan, ASML was prohibited from selling EUV machines to China.',
            'Without EUV machines, producing semiconductors below the 5-nanometer threshold at commercial yields and profitable scale is physically almost impossible. While Chinese fabs can use older deep ultraviolet (DUV) multi-patterning for low-yield demonstration chips, the cost per functional chip is orders of magnitude higher, creating a severe technological disadvantage in mass AI deployment.',
          ],
        },
        {
          heading: 'Constraining Military Supercomputing Clusters',
          paragraphs: [
            'Prior to the restrictions, Chinese supercomputers like the Sunway TaihuLight and Tianhe-2 regularly dominated the global Top500 list using imported hardware. The export embargo halted the modernization of military research centers like the Chinese Academy of Engineering Physics (CAEP), which oversees nuclear weapons simulation.',
          ],
        },
      ],
      details: [
        '**ASML EUV Monopolistic Leverage:** Absolute physical barrier preventing Chinese sub-5nm high-yield commercial fabrication.',
        '**Yield Penalty of DUV Multi-Patterning:** Fabricating 7nm chips with older DUV systems incurs severe defect rates and unsustainable costs.',
        '**Targeting Military Facilities:** Choked off computing infrastructure at Chinese nuclear weapons design labs and hypersonics institutes.',
      ],
      sources: [
        {
          title: 'U.S. Export Controls on Advanced Computing and Semiconductors to China: Congressional Research Service Report R47523',
          url: 'https://crsreports.congress.gov/product/pdf/R/R47523',
          publisher: 'Congressional Research Service (CRS)',
          year: '2023',
          category: 'Court / Official Record',
        },
        {
          title: 'ASML Annual Report: Export Control Regulations and Business in China',
          url: 'https://www.asml.com/en/investors/financial-results/annual-reports',
          publisher: 'ASML Holding N.V.',
          year: '2023',
          category: 'Empirical / Economic Study',
        },
      ],
      tags: ['Science & Innovation', 'National Security'],
      era: '2022–2024',
      relatedIds: ['thesis-china-semiconductor-controls', 'con-china-indigenous-breakthrough'],
    },

    // CON 3.1.2
    {
      id: 'con-china-indigenous-breakthrough',
      parentId: 'thesis-china-semiconductor-controls',
      kind: 'con',
      title: 'Counter-Argument: Export Controls Accelerate Chinese Self-Reliance and Decoupling Backlash',
      summary:
        'Sanctions cut off American chipmakers from their largest commercial market, depriving them of R&D revenue while forcing China to pour billions into a sovereign supply chain.',
      sections: [
        {
          heading: 'The Loss of the World\'s Largest Semiconductor Market',
          paragraphs: [
            'China consumes more than one-third of global semiconductors. Leaders of American chip corporations, including **Jensen Huang of Nvidia** and **Pat Gelsinger of Intel**, warned that permanently cutting off Chinese commercial customers deprives American firms of billions in annual profits necessary to fund cutting-edge R&D, threatening U.S. technological leadership in the long term.',
            'Furthermore, the Chinese state launched the third phase of the **National Integrated Circuit Industry Investment Fund ("Big Fund")**, mobilizing over $47 billion in state capital to subsidize domestic equipment manufacturers like SMEE (lithography) and Naura (etching), replicating every link of the semiconductor value chain domestically.',
          ],
        },
        {
          heading: 'The Inevitability of Workarounds and Smuggling',
          paragraphs: [
            'Export restrictions inevitably leak: Chinese tech firms quickly designed stripped-down neural chips, accessed cloud compute clusters in third countries, and acquired thousands of banned Nvidia GPUs through secondary markets in Southeast Asia and the Middle East, demonstrating the limits of unilateral techno-containment.',
          ],
        },
      ],
      details: [
        '**Third Phase of the "Big Fund":** $47 billion in state equity dedicated to domestic chip equipment and design.',
        '**Nvidia & Intel Revenue Loss:** US semiconductor firms lost up to 25% of commercial revenues, impacting domestic R&D budgets.',
        '**Cloud and Smuggling Workarounds:** Chinese AI labs easily rent foreign cloud compute or source GPUs via grey markets.',
      ],
      sources: [
        {
          title: 'Nvidia Warns U.S. Chip Curbs Risk "Permanent Loss" of Chinese Market',
          url: 'https://www.ft.com/content/0f0b40eb-7108-4e89-bd7b-f458e6538ec9',
          publisher: 'Financial Times',
          year: '2023',
          category: 'Debate / Broadcast',
        },
        {
          title: 'SIA Factbook: The Importance of the Chinese Market to the US Semiconductor Industry',
          url: 'https://www.semiconductors.org/resources/2023-sia-factbook/',
          publisher: 'Semiconductor Industry Association (SIA)',
          year: '2023',
          category: 'Empirical / Economic Study',
        },
      ],
      tags: ['Science & Innovation', 'Trade & Industry', 'Economics'],
      era: '2023–2024',
      relatedIds: ['pro-china-chips-export-curbs', 'thesis-china-semiconductor-controls'],
    },

    // THESIS 3.2
    {
      id: 'thesis-china-critical-minerals-decoupling',
      parentId: 'pillar-china-decoupling',
      kind: 'thesis',
      title: 'Thesis 3.2: Critical Mineral Dependencies & Clean Tech Asymmetries',
      summary:
        'Western ambitions to decarbonize and re-industrialize depend heavily on Chinese-controlled processing of lithium, cobalt, graphite, and rare earth minerals.',
      sections: [
        {
          heading: 'The Green Transition\'s Supply Chain Bottleneck',
          paragraphs: [
            'While Western governments push for a rapid clean energy transition, the physical hardware required for decarbonization is overwhelmingly dominated by China. According to the **International Energy Agency (IEA)**, China controls **60% of worldwide lithium refining, 70% of cobalt processing, and 90% of graphite and rare earth permanent magnets**.',
            'In December 2023, China’s Ministry of Commerce banned the export of rare-earth extraction and separation technologies, signaling that Beijing can retaliate against Western tech curbs by disrupting the manufacturing of electric vehicle motors, wind turbines, and F-35 fighter jet radar arrays.',
          ],
        },
        {
          heading: 'The Illusion of Rapid "De-risking"',
          paragraphs: [
            'While European and American leaders promote "de-risking" rather than complete decoupling, building domestic processing plants, securing environmental permits, and scaling metallurgical expertise in the West will take at least a decade, ensuring sustained dependence on Chinese industrial supply chains.',
          ],
        },
      ],
      details: [
        '**IEA Clean Energy Minerals Report:** China refines 60–90% of global lithium, cobalt, graphite, and rare earths.',
        '**Rare Earth Export Curbs:** Beijing banned export of processing technologies in response to Western chip sanctions.',
        '**Permitting & Environmental Realities:** Western domestic mining projects face 10–15 year permitting timelines and high environmental opposition.',
      ],
      sources: [
        {
          title: 'The Role of Critical Minerals in Clean Energy Transitions',
          url: 'https://www.iea.org/reports/the-role-of-critical-minerals-in-clean-energy-transitions',
          publisher: 'International Energy Agency (IEA)',
          year: '2021',
          category: 'Empirical / Economic Study',
        },
        {
          title: 'China Bans Export of Rare Earth Processing Technologies',
          url: 'https://www.reuters.com/markets/commodities/china-bans-export-rare-earths-processing-technologies-2023-12-21/',
          publisher: 'Reuters',
          year: '2023',
          category: 'Debate / Broadcast',
        },
      ],
      tags: ['Energy & Climate', 'Trade & Industry'],
      era: '2021–2024',
      relatedIds: ['pro-china-clean-tech-dominance', 'con-china-de-risking-unrealistic'],
    },

    // PRO 3.2.1
    {
      id: 'pro-china-clean-tech-dominance',
      parentId: 'thesis-china-critical-minerals-decoupling',
      kind: 'pro',
      title: 'Evidence: Global Battery and Solar Manufacturing Concentration in China',
      summary:
        'Chinese industrial subsidies generated massive scale, producing over 80% of the world\'s solar panels and battery cells, making Western clean energy targets dependent on Chinese exports.',
      sections: [
        {
          heading: 'Dominance of the Global Clean Energy Hardware Sector',
          paragraphs: [
            'Data from BloombergNEF shows that Chinese manufacturers (led by **CATL and BYD**) produce over **75% of global lithium-ion battery cells**, while Chinese firms control over **80% of all manufacturing stages for solar silicon, wafers, cells, and modules**. Through decades of strategic state subsidies, cheap electricity, and aggressive scaling, China drove the cost of solar energy down by 90% over a decade.',
            'Attempting to exclude Chinese clean technology through tariffs (such as Section 301 tariffs) significantly increases the cost of solar deployment, EV adoption, and grid storage in Western countries, conflicting directly with domestic climate decarbonization goals.',
          ],
        },
        {
          heading: 'The Geopolitical Leverage of Green Hegemony',
          paragraphs: [
            'China’s dominance of green supply chains provides it with profound asymmetric leverage: while the West threatens China’s digital computing future, China holds the keys to the West\'s physical energy transition.',
          ],
        },
      ],
      details: [
        '**75%+ Global Battery Output:** CATL and BYD dominate global EV power packs, supplying Tesla, BMW, and Ford.',
        '**80%+ Solar Manufacturing:** China monopolizes the entire photovoltaic supply chain from polysilicon to finished panels.',
        '**90% Solar Cost Reduction:** Industrial scale in China drove global solar prices down, making global decarbonization economically viable.',
      ],
      sources: [
        {
          title: 'BloombergNEF: Electric Vehicle Outlook and Global Battery Supply Chain Rankings',
          url: 'https://about.bnef.com/electric-vehicle-outlook/',
          publisher: 'BloombergNEF',
          year: '2023',
          category: 'Empirical / Economic Study',
        },
        {
          title: 'IEA Special Report: Global Supply Chains of EV Batteries',
          url: 'https://www.iea.org/reports/global-supply-chains-of-ev-batteries',
          publisher: 'International Energy Agency (IEA)',
          year: '2022',
          category: 'Empirical / Economic Study',
        },
      ],
      tags: ['Energy & Climate', 'Trade & Industry', 'Empirical Studies'],
      era: '2022–2023',
      relatedIds: ['thesis-china-critical-minerals-decoupling', 'con-china-de-risking-unrealistic'],
    },

    // CON 3.2.2
    {
      id: 'con-china-de-risking-unrealistic',
      parentId: 'thesis-china-critical-minerals-decoupling',
      kind: 'con',
      title: 'Counter-Argument: The Dangerous Illusion of Total Supply Chain Autarky',
      summary:
        'Economists and corporate leaders argue that completely decoupling from the world’s factory is an impossible economic fantasy that fuels stagflation and fractures the global economy.',
      sections: [
        {
          heading: 'The Extreme Costs of Supply Chain Duplication',
          paragraphs: [
            'Financial analyst **Stephen Roach** (*Accidental Conflict*) and the **International Monetary Fund (IMF)** warn that fracturing the global economy into competing Western and Chinese geopolitical blocs could reduce global economic output by up to **7% of GDP permanently**—equivalent to the combined annual output of France and Germany.',
            'Decades of globalization established intricate, highly optimized just-in-time supply chains. Rebuilding redundant domestic manufacturing across pharmaceuticals, electronics, industrial tools, and plastics would require trillions in capital expenditure, generating persistent structural inflation and reducing consumer purchasing power across the Western world.',
          ],
        },
        {
          heading: 'Corporate Interdependence Remains Deep',
          paragraphs: [
            'Despite geopolitical posturing, bilateral U.S.-China goods trade reached an all-time record of nearly **$690 billion in 2022**. Major Western multinationals—including Apple, Tesla, Volkswagen, and BASF—continue to expand production and R&D facilities inside China, recognizing that no other country matches its skilled labor force, physical infrastructure, and massive consumer market.',
          ],
        },
      ],
      details: [
        '**IMF Geo-Economic Fragmentation Study:** Warns fragmentation could inflict a permanent 7% loss of global economic output.',
        '**Record $690B US-China Trade (2022):** Proves commercial reality defies political rhetoric of total economic separation.',
        '**Irreplaceable Industrial Ecosystem:** Unrivaled depth of component suppliers, deep-water ports, and engineering labor.',
      ],
      sources: [
        {
          title: 'Accidental Conflict: America, China, and the Clash of False Narratives',
          url: 'https://yalebooks.yale.edu/book/9780300269017/accidental-conflict/',
          publisher: 'Yale University Press / Stephen Roach',
          year: '2022',
          category: 'Scholarship',
        },
        {
          title: 'IMF World Economic Outlook: Geoeconomic Fragmentation and the Future of Multilateralism',
          url: 'https://www.imf.org/en/Publications/WEO/Issues/2023/04/11/world-economic-outlook-april-2023',
          publisher: 'International Monetary Fund',
          year: '2023',
          category: 'Empirical / Economic Study',
        },
      ],
      tags: ['Macroeconomics', 'Trade & Industry'],
      era: '2022–2023',
      relatedIds: ['pro-china-clean-tech-dominance', 'thesis-china-critical-minerals-decoupling'],
    },

    // -------------------------------------------------------------
    // PILLAR 4: GLOBAL COMMONS & THUCYDIDES TRAP
    // -------------------------------------------------------------
    {
      id: 'pillar-china-coexistence',
      parentId: 'root-china',
      kind: 'pillar',
      title: 'Pillar 4: Global Commons Cooperation & Avoiding the Thucydides Trap',
      summary:
        'Explores the structural dynamics of superpower competition: evaluating Graham Allison’s Thucydides Trap theory, the imperative for managed strategic competition, and shared survival on climate change and AI safety.',
      sections: [
        {
          heading: 'The Structural Peril of the Thucydides Trap',
          paragraphs: [
            'In his influential 2017 study *Destined for War*, Harvard political scientist **Graham Allison** identified the "Thucydides Trap"—the severe structural stress that occurs when a rising power (like Athens, or modern China) threatens to displace an established ruling power (like Sparta, or the United States). Reviewing the historical record over the past 500 years, Allison found 16 cases of major power transitions, 12 of which culminated in catastrophic systemic war.',
            'War between the U.S. and China, both armed with extensive nuclear triads, advanced cyber warfare capabilities, and counter-space anti-satellite weapons, would result in mutual catastrophic destruction, potentially ending modern human civilization.',
          ],
        },
        {
          heading: 'The Framework of Managed Strategic Competition',
          paragraphs: [
            'To escape this trap, former Australian Prime Minister and diplomat **Kevin Rudd** (*The Avoidable War*) advocates for **"Managed Strategic Competition."** This framework establishes high-level diplomatic guardrails and clear red lines around core military flashpoints (such as Taiwan and naval encounters), while permitting fierce economic, technological, and ideological competition, alongside mandatory institutional cooperation on shared existential threats like climate change, pandemic prevention, and AI safety.',
          ],
        },
      ],
      details: [
        '**Allison\'s 16 Historical Case Studies:** 12 of 16 power transitions resulted in major systemic warfare; 4 avoided it through strategic accommodation.',
        '**Existential Climate Coordination:** US and China produce over 40% of global greenhouse emissions; planetary survival requires joint mitigation.',
        '**Kevin Rudd\'s Managed Strategic Competition:** Establishes strict communication channels and military deconfliction to prevent accidental war.',
        '**Frontier AI Safety:** Both powers share a mutual interest in preventing autonomous rogue artificial intelligence and cyber catastrophe.',
      ],
      sources: [
        {
          title: 'Destined for War: Can America and China Escape Thucydides\'s Trap?',
          url: 'https://www.houghtonmifflinharcourt.com/destined-for-war',
          publisher: 'Houghton Mifflin Harcourt / Graham Allison',
          year: '2017',
          category: 'Scholarship',
        },
        {
          title: 'The Avoidable War: The Dangers of a Catastrophic Conflict between the US and Xi Jinping\'s China',
          url: 'https://www.publicaffairsbooks.com/titles/kevin-rudd/the-avoidable-war/9781541757561/',
          publisher: 'PublicAffairs / Kevin Rudd',
          year: '2022',
          category: 'Scholarship',
        },
        {
          title: 'The Sunnylands Statement on Enhancing Cooperation to Address the Climate Crisis',
          url: 'https://www.state.gov/sunnylands-statement-on-enhancing-cooperation-to-address-the-climate-crisis/',
          publisher: 'US Department of State & PRC Ministry of Ecology and Environment',
          year: '2023',
          category: 'Primary Text / Treaty',
        },
      ],
      tags: ['National Security', 'Diplomacy', 'Energy & Climate', 'Philosophy & Ethics'],
      era: '2017–2026',
      relatedIds: ['thesis-china-thucydides-trap', 'thesis-china-managed-competition', 'pillar-china-revisionism'],
    },

    // THESIS 4.1
    {
      id: 'thesis-china-thucydides-trap',
      parentId: 'pillar-china-coexistence',
      kind: 'thesis',
      title: 'Thesis 4.1: The Thucydides Trap: Structural Inevitability vs. Nuclear Deterrence',
      summary:
        'Assessing whether structural friction between a rising and ruling power inevitably leads to war, or if nuclear weapons and economic interdependence prevent open conflict.',
      sections: [
        {
          heading: 'The Mechanics of Structural Collision',
          paragraphs: [
            'Graham Allison draws directly on the ancient historian Thucydides: "It was the rise of Athens and the fear that this instilled in Sparta that made war inevitable." As China’s economic and military power expands, its expectations and demands for respect naturally rise; simultaneously, as the United States feels its preeminence threatened, fear and paranoia multiply. In this combustible atmosphere, minor third-party provocations—such as a naval collision in the South China Sea or an election in Taiwan—can trigger uncontrollable escalatory spirals.',
            'Political scientists **Hal Brands and Michael Beckley** (*Danger Zone: The Coming Conflict with China*) argue that China’s peak power window may actually occur in the 2020s before severe demographic decline sets in, making this decade the most dangerous period for revanchist military gambles.',
          ],
        },
        {
          heading: 'The Nuclear Taboo and Modern Systemic Restraints',
          paragraphs: [
            'Conversely, structural realists point out that the Thucydides Trap framework ignores the single greatest difference between antiquity and the 21st century: **nuclear weapons**. The condition of Mutually Assured Destruction (MAD) radically alters cost-benefit calculations, making deliberate superpower war irrational suicide.',
          ],
        },
      ],
      details: [
        '**Thucydides Trap Structural Logic:** Rising power demands deference; established power experiences status anxiety and fear.',
        '**The "Danger Zone" Thesis:** Peaking powers facing future demographic and economic stagnation are historically most prone to launch wars.',
        '**MAD as Peace Anchor:** Nuclear arsenals impose unprecedented rational constraints absent during the Peloponnesian War or WWI.',
      ],
      sources: [
        {
          title: 'Destined for War: Can America and China Escape Thucydides\'s Trap?',
          url: 'https://www.houghtonmifflinharcourt.com/destined-for-war',
          publisher: 'Houghton Mifflin Harcourt / Graham Allison',
          year: '2017',
          category: 'Scholarship',
        },
        {
          title: 'Danger Zone: The Coming Conflict with China',
          url: 'https://wwnorton.com/books/9780393540802',
          publisher: 'W. W. Norton & Company / Hal Brands & Michael Beckley',
          year: '2022',
          category: 'Scholarship',
        },
      ],
      tags: ['National Security', 'History', 'Philosophy & Ethics'],
      era: '2017–2022',
      relatedIds: ['pro-china-power-transition-danger', 'con-china-nuclear-interdependence-peace'],
    },

    // PRO 4.1.1
    {
      id: 'pro-china-power-transition-danger',
      parentId: 'thesis-china-thucydides-trap',
      kind: 'pro',
      title: 'Evidence: Historical Precedents of Power Transitions Culminating in War',
      summary:
        'Harvard Belfer Center historical analysis of 16 power transitions since 1500 reveals that 12 resulted in systemic warfare, including World War I between rising Germany and Britain.',
      sections: [
        {
          heading: 'The 500-Year Historical Record',
          paragraphs: [
            'The Belfer Center’s Thucydides Trap Case File analyzed 16 major structural power transitions over the past five centuries. In 12 instances—including France vs. the Hapsburgs (16th century), the Dutch Republic vs. England (17th century), and the rise of Imperial Germany challenging Great Britain culminating in World War I (1914)—the outcome was catastrophic military conflict.',
            'Crucially, in virtually all cases, neither leader initially desired a catastrophic world war. Instead, entangling alliances, internal nationalist pressures, and minor peripheral crises (such as the assassination of Archduke Franz Ferdinand in Sarajevo) dragged great empires into conflicts they could neither control nor halt.',
          ],
        },
        {
          heading: 'Parallels in Modern Sino-American Tensions',
          paragraphs: [
            'The structural parallels today are deeply alarming: conflicting mutual defense pacts (U.S.-Philippines, U.S.-Japan), hyper-nationalist domestic political environments in both Washington and Beijing where compromising is labeled weakness, and hair-trigger military intercepts in the Taiwan Strait and South China Sea.',
          ],
        },
      ],
      details: [
        '**12 of 16 Historical Transitions Led to War:** Extensive empirical analysis of five centuries of great power rivalry.',
        '**The WWI Parallels:** Germany’s naval buildup and British encirclement fears mirror contemporary PLAN-US Navy tensions.',
        '**Accidental Catalyst Dynamics:** Historic wars were triggered by peripheral sparks, not pre-planned grand invasions.',
      ],
      sources: [
        {
          title: 'Thucydides\'s Trap Case File: Harvard Kennedy School Belfer Center for Science and International Affairs',
          url: 'https://www.belfercenter.org/thucydides-trap/case-file',
          publisher: 'Belfer Center / Graham Allison',
          year: '2017',
          category: 'Scholarship',
        },
        {
          title: 'The Sleepwalkers: How Europe Went to War in 1914',
          url: 'https://www.harpercollins.com/products/the-sleepwalkers-christopher-clark',
          publisher: 'HarperCollins / Christopher Clark',
          year: '2013',
          category: 'Scholarship',
        },
      ],
      tags: ['History', 'National Security'],
      era: '1914–2017',
      relatedIds: ['thesis-china-thucydides-trap', 'con-china-nuclear-interdependence-peace'],
    },

    // CON 4.1.2
    {
      id: 'con-china-nuclear-interdependence-peace',
      parentId: 'thesis-china-thucydides-trap',
      kind: 'con',
      title: 'Counter-Argument: Nuclear Deterrence, Shared Trade & The Cold War Precedent',
      summary:
        'The peaceful resolution of the US-Soviet Cold War and deep economic ties prove that great powers can manage structural rivalry without direct kinetic warfare.',
      sections: [
        {
          heading: 'The Successful Aversion of Nuclear War (1945–1991)',
          paragraphs: [
            'Critics of historical fatalism point out that the most dangerous power transition in human history—the United States versus the Soviet Union—never resulted in direct World War III. Despite profound ideological hostility, an apocalyptic nuclear arms race, and global proxy wars, both superpowers maintained strict red lines, hotlines, and arms control treaties (SALT, INF) that preserved systemic peace.',
            'As political scientist **Joseph Nye** points out, the U.S. and China are far more interdependent than the U.S. and USSR ever were. The Soviets were an autarkic economic island with negligible trade with the West; China is deeply embedded in the heart of the global capitalist economy, where systemic war would immediately collapse both nations’ domestic financial and social orders.',
          ],
        },
        {
          heading: 'Strategic Choice Over Fatalism',
          paragraphs: [
            'History is not biological determinism. War occurs through human political choices, miscalculations, and rhetoric. Framing conflict as "inevitable" becomes a dangerous self-fulfilling prophecy, whereas conscious diplomatic statecraft can construct durable peaceful equilibrium.',
          ],
        },
      ],
      details: [
        '**The Cold War Counter-Example:** US and USSR successfully managed nuclear rivalry without direct armed conflict for 46 years.',
        '**Deep Economic Interdependence:** Total mutual commercial integration makes war economic suicide for both Washington and Beijing.',
        '**Rejecting Fatalism:** Geopolitical outcomes are determined by deliberate diplomatic choices, not ancient structural destiny.',
      ],
      sources: [
        {
          title: 'Is War with China Inevitable? Joseph S. Nye Jr.',
          url: 'https://www.project-syndicate.org/commentary/us-china-conflict-not-inevitable-by-joseph-s-nye-2022-04',
          publisher: 'Project Syndicate',
          year: '2022',
          category: 'Scholarship',
        },
        {
          title: 'The Future of Power',
          url: 'https://www.publicaffairsbooks.com/titles/joseph-s-nye-jr/the-future-of-power/9781586488925/',
          publisher: 'PublicAffairs / Joseph S. Nye Jr.',
          year: '2011',
          category: 'Scholarship',
        },
      ],
      tags: ['Diplomacy', 'National Security', 'Philosophy & Ethics'],
      era: '1945–2022',
      relatedIds: ['pro-china-power-transition-danger', 'thesis-china-thucydides-trap'],
    },

    // THESIS 4.2
    {
      id: 'thesis-china-managed-competition',
      parentId: 'pillar-china-coexistence',
      kind: 'thesis',
      title: 'Thesis 4.2: Managed Strategic Competition & Global Planetary Survival',
      summary:
        'Constructing institutional guardrails to deconflict military competition while sustaining vital cooperation on climate change, pandemic prevention, and AI safety.',
      sections: [
        {
          heading: 'The Architecture of Managed Strategic Competition',
          paragraphs: [
            'In *The Avoidable War*, Kevin Rudd outlines a detailed blueprint for bilateral stability: both superpowers must explicitly negotiate non-negotiable red lines (e.g., U.S. adherence to the One China policy without recognizing Taiwan independence; Chinese cessation of dangerous military intercepts of allied aircraft). Military-to-military communications must remain open 24/7, immune to political disruptions.',
            'Within these hardened guardrails, Washington and Beijing can fiercely compete economically, technologically, and ideologically, while carving out a non-derogable domain of mandatory bilateral cooperation on existential global commons.',
          ],
        },
        {
          heading: 'Planetary Survival Over Geopolitical Ego',
          paragraphs: [
            'As climate scientist **John Kerry** and Chinese climate envoy **Xie Zhenhua** demonstrated in the 2023 **Sunnylands Statement**, the climate crisis does not recognize national borders or ideological systems. If the world’s two largest polluters refuse to coordinate on methane reduction, grid decarbonization, and renewable deployment, catastrophic planetary warming cannot be averted.',
          ],
        },
      ],
      details: [
        '**Rudd’s Managed Framework:** Bilateral red lines, military-to-military crisis communications, and competitive boundaries.',
        '**The Sunnylands Precedent:** Bilateral US-China climate diplomacy produced breakthrough agreements on methane reduction at COP28.',
        '**AI Safety Mandate:** Joint interest in preventing catastrophic autonomous AI proliferation and algorithmic financial collapses.',
      ],
      sources: [
        {
          title: 'The Avoidable War: The Dangers of a Catastrophic Conflict between the US and Xi Jinping\'s China',
          url: 'https://www.publicaffairsbooks.com/titles/kevin-rudd/the-avoidable-war/9781541757561/',
          publisher: 'PublicAffairs / Kevin Rudd',
          year: '2022',
          category: 'Scholarship',
        },
        {
          title: 'Sunnylands Statement on Enhancing Cooperation to Address the Climate Crisis',
          url: 'https://www.state.gov/sunnylands-statement-on-enhancing-cooperation-to-address-the-climate-crisis/',
          publisher: 'US Department of State & PRC Ministry of Ecology and Environment',
          year: '2023',
          category: 'Primary Text / Treaty',
        },
      ],
      tags: ['Diplomacy', 'Energy & Climate', 'National Security'],
      era: '2022–2024',
      relatedIds: ['pro-china-climate-pandemic-synergy', 'con-china-bad-faith-negotiations'],
    },

    // PRO 4.2.1
    {
      id: 'pro-china-climate-pandemic-synergy',
      parentId: 'thesis-china-managed-competition',
      kind: 'pro',
      title: 'Evidence: The Sunnylands Agreement & Bletchley Park AI Safety Consensus',
      summary:
        'Concrete bilateral breakthroughs—such as the 2023 Sunnylands climate accord and joint signing of the Bletchley Declaration on frontier AI safety—prove cooperation remains viable.',
      sections: [
        {
          heading: 'The 2023 Sunnylands Climate Breakthrough',
          paragraphs: [
            'In November 2023, following intense negotiations in California, U.S. Special Presidential Envoy for Climate John Kerry and Chinese Special Envoy Xie Zhenhua released the **Sunnylands Statement on Enhancing Cooperation to Address the Climate Crisis**. China formally agreed for the first time to include all greenhouse gases—specifically **methane and nitrous oxide**, not just carbon dioxide—in its national climate targets, laying the critical foundation for the global consensus reached at COP28 in Dubai.',
            'This diplomatic breakthrough occurred despite fierce ongoing tensions over Taiwan, export controls, and balloon surveillance incidents, demonstrating that functional diplomacy can be successfully compartmentalized to address existential global threats.',
          ],
        },
        {
          heading: 'Frontier AI Safety at Bletchley Park',
          paragraphs: [
            'At the November 2023 UK AI Safety Summit at **Bletchley Park**, the United States, China, the European Union, and 25 other nations unanimously signed the **Bletchley Declaration**, recognizing that frontier artificial intelligence presents shared catastrophic risks to humanity that require coordinated international governance and technical safety protocols.',
          ],
        },
      ],
      details: [
        '**Sunnylands Climate Accord (2023):** China agreed to integrate potent methane emissions into national reduction targets.',
        '**COP28 Momentum:** Bilateral consensus paved the way for the global agreement to transition away from fossil fuels.',
        '**Bletchley Declaration Consensus:** US and Chinese representatives jointly pledged to establish global guardrails on frontier AI risks.',
      ],
      sources: [
        {
          title: 'The Bletchley Declaration by Countries Attending the AI Safety Summit',
          url: 'https://www.gov.uk/government/publications/ai-safety-summit-2023-the-bletchley-declaration',
          publisher: 'UK Department for Science, Innovation and Technology',
          year: '2023',
          category: 'Primary Text / Treaty',
        },
        {
          title: 'Full Text of the Sunnylands Statement on Climate Cooperation',
          url: 'https://www.state.gov/sunnylands-statement-on-enhancing-cooperation-to-address-the-climate-crisis/',
          publisher: 'US Department of State',
          year: '2023',
          category: 'Primary Text / Treaty',
        },
      ],
      tags: ['Energy & Climate', 'AI & Technology', 'Diplomacy'],
      era: '2023–2024',
      relatedIds: ['thesis-china-managed-competition', 'con-china-bad-faith-negotiations'],
    },

    // CON 4.2.2
    {
      id: 'con-china-bad-faith-negotiations',
      parentId: 'thesis-china-managed-competition',
      kind: 'con',
      title: 'Counter-Argument: The Naivete of Compartmentalization & Bad-Faith Diplomacy',
      summary:
        'Critics argue that authoritarian regimes view cooperation purely as tactical leverage, using climate talks to extract concessions on Taiwan and human rights.',
      sections: [
        {
          heading: 'The Failure of Democratic Engagement Theories',
          paragraphs: [
            'For three decades, Western foreign policy was anchored in the liberal conviction that integrating China into the World Trade Organization (2001) and global multilateral institutions would inevitably liberalize its domestic politics and produce a "responsible stakeholder." Former Assistant Secretary of State **Kurt Campbell** and **Ely Ratner** (*Foreign Affairs*, "The China Reckoning") conceded that this engagement policy comprehensively failed.',
            'Instead of democratizing, China constructed the world\'s most sophisticated digital totalitarian state, intensified domestic repression, and utilized its economic wealth to intimidate neighbors. China scholars like **Michael Pillsbury** (*The Hundred-Year Marathon*) document that Beijing systematically views Western appeals for cooperation as evidence of terminal American weakness and decline.',
          ],
        },
        {
          heading: 'Climate Talks Weaponized as Diplomatic Hostages',
          paragraphs: [
            'Beijing routinely suspends climate and military-to-military communications—as it did following Nancy Pelosi\'s August 2022 visit to Taipei—treating existential global survival issues not as universal responsibilities, but as transactional bargaining chips to deter Western defense of human rights and democratic allies.',
          ],
        },
      ],
      details: [
        '**"The China Reckoning":** Bipartisan admission that 30 years of economic engagement failed to induce political liberalization.',
        '**"Hundred-Year Marathon" Critique:** Documentary evidence that Beijing views Western cooperation as tactical accommodation.',
        '**Weaponized Climate Talks:** Beijing suspended climate talks in 2022 to express fury over congressional travel to Taiwan.',
      ],
      sources: [
        {
          title: 'The China Reckoning: How Beijing Defied American Expectations',
          url: 'https://www.foreignaffairs.com/articles/china/2018-02-13/china-reckoning',
          publisher: 'Foreign Affairs / Kurt M. Campbell & Ely Ratner',
          year: '2018',
          category: 'Scholarship',
        },
        {
          title: 'The Hundred-Year Marathon: China\'s Secret Strategy to Replace America as the Global Superpower',
          url: 'https://us.macmillan.com/books/9781250081346/thehundredyearmarathon',
          publisher: 'St. Martin\'s Press / Michael Pillsbury',
          year: '2015',
          category: 'Scholarship',
        },
      ],
      tags: ['Diplomacy', 'National Security', 'Philosophy & Ethics'],
      era: '2015–2022',
      relatedIds: ['pro-china-climate-pandemic-synergy', 'thesis-china-managed-competition'],
    },
  ],
};
