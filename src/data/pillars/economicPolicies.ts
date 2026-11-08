import { DebateNode } from '../../types/debate';

export const economicPoliciesNodes: DebateNode[] = [
  {
    id: 'pillar-economic-policies',
    parentId: 'root-ip',
    kind: 'pillar',
    title: 'Economic Policies: Paris Protocol, Aid, Labor & "Economic Peace"',
    summary:
      'Examines the political economy of the conflict: the 1994 Paris Protocol customs union, clearance tax transfers ("Maqasa") and anti-terror deductions, correspondent banking, cross-border Palestinian labor permits, "Economic Peace" vs. World Bank Area C critiques, Gaza’s aid/tunnel economy, and wartime fiscal impacts on Israel.',
    details: [
      'Maps how currency, customs ports, labor mobility, electricity grids, offshore gas, and international donor flows tie Israeli and Palestinian economies together even amid acute conflict.',
      'Tests competing economic theories: whether prosperity and trade incentives build bottom-up moderation ("Economic Peace") or whether sustainable growth is structurally impossible without sovereign borders and Area C access.'
    ],
    references: [
      'Protocol on Economic Relations (Paris Protocol, Annex IV of Oslo Accords, April 1994)',
      'World Bank & IMF Economic Monitoring Reports to the Ad Hoc Liaison Committee (2013–2025)',
      'Bank of Israel Annual Reports & RAND Corporation Cost-of-Conflict Studies'
    ],
    tags: ['Economics', 'Governance', 'Security', 'Diplomacy'],
    era: '1994–Present'
  },

  // THESIS 9A: 1994 Paris Protocol, Clearance Revenues ("Maqasa") & Correspondent Banking
  {
    id: 'thesis-econ-paris-protocol',
    parentId: 'pillar-economic-policies',
    kind: 'thesis',
    title: '1994 Paris Protocol, Clearance Revenues ("Maqasa") & Correspondent Banking Leverage',
    summary:
      'Designed in April 1994 as a 5-year interim annex to Oslo, the Paris Protocol locked Israel and the Palestinian territories into an asymmetric quasi-customs union—making Israel’s monthly collection of Palestinian import taxes ("Maqasa") and correspondent banking waivers a central fiscal flashpoint.',
    details: [
      'Under the Paris Protocol, the Palestinian territories lack an independent currency or central bank (using primarily the Israeli New Shekel alongside USD and Jordanian Dinar), must keep VAT within 2% of Israel’s rate, and rely on Israel to collect customs and import VAT at ports/crossings—accounting for 65–70% of total Palestinian Authority (PA) domestic revenue (~$2.2B–$2.6B/yr).',
      'Three decades past its 1999 expiration date, economists debate whether the Protocol enforces fiscal dependency or reflects unavoidable geographic integration hedged against terror-financing risks.'
    ],
    references: [
      'Protocol on Economic Relations Between the Government of Israel and the PLO (Paris Protocol, April 29, 1994)',
      'Palestine Monetary Authority (PMA) & World Bank Fiscal Sustainability Assessments (2023–2025)'
    ],
    tags: ['Economics', 'Governance', 'Diplomacy'],
    era: '1994–Present',
    relatedIds: ['pro-oslo-asymmetry']
  },
  {
    id: 'pro-paris-captive-market-strangulation',
    parentId: 'thesis-econ-paris-protocol',
    kind: 'pro',
    title: 'Asymmetric Customs Envelope, Captive Trade & Weaponized Revenue Freezes',
    summary:
      'Palestinian economists, the World Bank, and the IMF argue the Paris Protocol forces a developing economy (~$3,500 GDP/capita) to operate under the tariff and VAT structure of a wealthy OECD tech state (~$53,000 GDP/capita), while allowing Israeli finance ministers to unilaterally withhold Palestinian tax revenues.',
    details: [
      'Control over external crossings, dual-use import lists, and port standards leaves Israel accounting for >55–70% of Palestinian trade while "fiscal leakage" on indirect imports via Israeli intermediaries has cost the PA hundreds of millions of dollars annually.',
      'Repeated Israeli freezes of Maqasa transfers—intensified after October 2023 under Finance Minister Bezalel Smotrich—forced the PA onto partial 50–70% salary payments for teachers, nurses, and civil servants, risking institutional collapse in the West Bank.',
      'Israeli threats in 2024 to revoke annual indemnification waivers for Israeli correspondent banks (Bank Hapoalim and Bank Discount) that clear shekel wires for Palestinian banks prompted urgent U.S. Treasury, G7, and Israeli Shin Bet warnings that severing banking channels would create a cash-only failed state.'
    ],
    references: [
      'World Bank & UNCTAD Assessments of Fiscal Leakage Under the Paris Protocol',
      'U.S. Treasury Secretary Janet Yellen & G7 Finance Ministers Statements on Correspondent Banking Waivers (May–Oct 2024)',
      'Raja Khalidi (MAS), Reshaping Palestinian Economic Policy Beyond the Paris Protocol'
    ],
    tags: ['Economics', 'Governance', 'Human Rights'],
    era: '1994–Present'
  },
  {
    id: 'con-paris-deductions-utilities-aml',
    parentId: 'thesis-econ-paris-protocol',
    kind: 'con',
    title: 'Statutory Deductions Offset PA "Pay-for-Slay" Stipends, Utility Debts & AML/CFT Risks',
    summary:
      'Israeli treasury and legal officials counter that Israel collects customs efficiently on the PA’s behalf, and statutory deductions withhold strictly (1) sums matching PA stipends paid to convicted terrorists, (2) funds destined for Hamas-run Gaza, and (3) billions of shekels in unpaid Palestinian utility and hospital debts.',
    details: [
      'Under Israel’s 2018 Deduction Law, Israel audits the PA’s own published expenditures on prisoner and "martyr" salaries (~600M+ NIS/yr) and deducts 1:1 so tax transfers do not subsidize terrorism against Israelis.',
      'Palestinian electricity distributors chronically accrued ~1.5–2+ billion NIS in unpaid arrears to the Israel Electric Corporation (IEC), as well as unpaid bills to Mekorot water and Israeli hospitals treating Palestinian referrals, necessitating automatic clearance offsets.',
      'Israeli correspondent banks require state indemnification waivers precisely because Palestinian banks face severe civil and criminal liability under U.S. and Israeli Anti-Money Laundering / Counter-Financing of Terrorism (AML/CFT) laws (e.g., *Linde v. Arab Bank*) and massive physical surpluses of >12 billion NIS cash accumulating in Ramallah.'
    ],
    references: [
      'Israel Law on Freeze of Funds Paid by the Palestinian Authority in Connection with Terrorism (2018)',
      'Bank of Israel & Ministry of Finance Frameworks on NIS Cash Quotas & AML/CFT Compliance',
      'Linde v. Arab Bank plc — U.S. Anti-Terrorism Act Banking Liability Precedent'
    ],
    tags: ['Economics', 'Security', 'International Law'],
    era: '2018–Present',
    relatedIds: ['pro-pmw-pay-for-slay-taylor-force']
  },

  // THESIS 9B: "Economic Peace" & Cross-Border Labor vs. Political Sovereignty First
  {
    id: 'thesis-econ-peace-vs-sovereignty',
    parentId: 'pillar-economic-policies',
    kind: 'thesis',
    title: '"Economic Peace" & Cross-Border Labor Integration vs. Political Sovereignty First',
    summary:
      'Tests a core strategic debate from Netanyahu’s 2009 "Economic Peace" doctrine and Kushner’s 2019 $50B "Peace to Prosperity" plan to the post-Oct 7 labor ban: can investment, industrial zones, and high-wage Palestinian work inside Israel foster stability, or do Area C caps and sudden permit freezes prove political sovereignty must come first?',
    details: [
      'Prior to October 7, 2023, ~150,000–180,000 West Bank Palestinians (plus ~18,500 permitted Gazans) worked in Israel and settlements—earning 2.3x to 3x local Palestinian wages and injecting ~$3.5B–$4B annually (~25% of West Bank GNI) into Palestinian towns.',
      'After October 7, Israel froze nearly all Palestinian labor permits over security fears, triggering an ~25–30% West Bank GDP contraction while Israel pivoted toward recruiting tens of thousands of foreign workers from India, Sri Lanka, Malawi, and Thailand.'
    ],
    references: [
      'White House "Peace to Prosperity: A New Vision for the Palestinian People" ($50B Economic Plan, June 2019)',
      'World Bank, Area C and the Future of the Palestinian Economy (2013 & 2023)',
      'Bank of Israel Labor Market Analysis of Post-Oct 7 Construction & Permit Freeze (2024)'
    ],
    tags: ['Economics', 'Security', 'Diplomacy'],
    era: '2009–Present'
  },
  {
    id: 'pro-econ-peace-incentives-prosperity',
    parentId: 'thesis-econ-peace-vs-sovereignty',
    kind: 'pro',
    title: 'High Cross-Border Wages, Joint Industrial Zones & Regional Investment Deter Recruitment',
    summary:
      'Advocates of pragmatic economic integration—alongside Shin Bet and IDF officials urging vetted West Bank worker reentry post-2023—argue that rising household incomes, tech outsourcing hubs (Rawabi/Ramallah), and Gulf-backed infrastructure create middle-class stakes against militancy.',
    details: [
      'Kushner’s 2019 Bahrain workshop blueprint proposed $50 billion in regional capital ($28B for West Bank/Gaza, $22B for Jordan, Egypt, and Lebanon) to double Palestinian GDP within a decade, modernize property registries, and build a West Bank–Gaza transit link.',
      'Israeli defense chiefs repeatedly warned the cabinet in 2024 that keeping 150,000+ West Bank breadwinners unemployed fuels economic desperation exploited by Iranian-funded militant cells in Jenin and Tulkarm—noting vetted, older married permit-holders historically had minimal terror involvement.'
    ],
    references: [
      'Peace to Prosperity Bahrain Workshop Economic Blueprint (June 2019)',
      'INSS Strategic Assessments on West Bank Economic Stability & Vetted Labor Permits (2024)'
    ],
    tags: ['Economics', 'Security', 'Diplomacy'],
    era: '2009–Present'
  },
  {
    id: 'con-rebuttal-gaza-permits-oct7-lesson',
    parentId: 'pro-econ-peace-incentives-prosperity',
    kind: 'con',
    title: 'October 7 Shattered the Premise That Economic Incentives Moderate Ideological Rulers',
    summary:
      'Israeli critics of both "Economic Peace" and the pre-war defense "Conceptzia" point out that between 2021 and Oct 6, 2023, Israel expanded Gazan work permits to ~18,500 and facilitated $30M/month in Qatari funds assuming economic relief would deter Hamas—yet Hamas used that exact calm as strategic deception to prepare October 7.',
    details: [
      'Demonstrates that ideological militant leaderships willingly sacrifice civilian livelihoods—even firing rockets at the Erez and Kerem Shalom crossings used by Gazan workers—when revolutionary goals take precedence.',
      'Heightened post-Oct 7 municipal opposition inside Israeli towns to relying on cross-border Palestinian labor, accelerating structural substitution toward bilateral foreign-worker treaties with Asian states.'
    ],
    references: [
      'Israeli Defense Establishment Post-Mortems on the Pre-Oct 7 Economic Deterrence "Conceptzia" (2024)'
    ],
    tags: ['Security', 'Economics'],
    era: '2021–Present',
    relatedIds: ['con-gaza-pre2023-blockade-impact']
  },
  {
    id: 'con-econ-world-bank-area-c-ceiling',
    parentId: 'thesis-econ-peace-vs-sovereignty',
    kind: 'con',
    title: 'World Bank & RAND Studies: Area C Exclusion Costs ~$3.4B/Yr & Caps Domestic Industry',
    summary:
      'The World Bank, RAND Corporation, and Palestinian business leaders counter that "Economic Peace" without sovereignty is a mirage: barring Palestinian development in Area C (60% of the West Bank—holding contiguous farmland, Dead Sea minerals, stone quarries, solar land, and 4G/5G spectrum) costs the Palestinian economy ~$3.4B+ annually (~35% of GDP).',
    details: [
      'World Bank economists calculated that merely unlocking Area C access and lifting internal movement checkpoints would boost Palestinian GDP by over one-third and halve donor budget deficits, while the RAND Corporation (2015) projected a negotiated two-state peace treaty would yield a $123B 10-year economic dividend for Israel and $50B (+36% per capita income) for Palestine.',
      'Relying on revocable Israeli construction permits rather than sovereign export industries ("de-development," coined by Harvard scholar Sara Roy) leaves Palestinian households vulnerable to instant ruin whenever borders close.',
      'Bank of Israel data also showed the post-Oct 7 Palestinian labor freeze severely bottlenecked Israel’s own construction industry—delaying tens of thousands of apartments and raising housing costs because overseas workers could not quickly replace skilled local craftsmen.'
    ],
    references: [
      'World Bank, Area C and the Future of the Palestinian Economy (Oct 2013 & 2023 Updates)',
      'RAND Corporation, The Costs of the Israeli–Palestinian Conflict (2015)',
      'Sara Roy, The Gaza Strip: The Political Economy of De-Development (3rd ed., 2016)'
    ],
    tags: ['Economics', 'Governance', 'International Law'],
    era: '1995–Present',
    relatedIds: ['pro-settlements-dual-law']
  },

  // THESIS 9C: Gaza's Aid/Tunnel Economy, Natural Resources & Israel's Wartime Fiscal Trajectory
  {
    id: 'thesis-econ-gaza-aid-israeli-fiscal',
    parentId: 'pillar-economic-policies',
    kind: 'thesis',
    title: 'Gaza’s Aid/Tunnel Economy, Resource Control & Israel’s Wartime Fiscal Trajectory',
    summary:
      'Contrasts two intense macro-policy debates: why >$40B in post-Oslo international aid failed to prevent Gaza’s economic ruin (Hamas tunnel diversion vs. blockade de-development and unexploited Gaza Marine gas), and whether prolonged war and demographic subsidies threaten Israel’s "Start-Up Nation" growth model.',
    details: [
      'Examines how illicit rent-seeking, dual-use controls, natural-gas/water rights, sovereign credit ratings, and high-tech human capital shape both sides’ long-term viability.'
    ],
    references: [
      'U.S. Treasury OFAC Sanctions on Hamas Investment Portfolio & Illicit Finance (2022–2024)',
      'UNCTAD Reports on Gaza Closure Costs & Gaza Marine Natural Gas Reserves',
      'Bank of Israel & Credit Rating Agency Assessments of Israel’s Wartime Economy (2024–2025)'
    ],
    tags: ['Economics', 'Security', 'Governance'],
    era: '2005–Present'
  },
  {
    id: 'pro-gaza-aid-diversion-hamas-rentier',
    parentId: 'thesis-econ-gaza-aid-israeli-fiscal',
    kind: 'pro',
    title: 'Hamas Taxed Commerce & Diverted Billions in Aid/Cement Into a Tunnel War Economy',
    summary:
      'Financial intelligence studies (U.S. Treasury OFAC, Washington Institute) document how Hamas built a $500M–$1B+ foreign investment portfolio, levied heavy 20%+ customs/smuggling taxes on impoverished Gazans, and diverted cement, water pipes, fuel, and aid into 350+ miles of military tunnels rather than civilian infrastructure.',
    details: [
      'Between 2007 and 2023, Hamas combined Iranian funding, Qatari cash disbursements (~$1.5B+), Rafah/Salah al-Din commercial border taxes, and wartime seizure/resale of free humanitarian aid trucks to pay fighter salaries and entrench patronage.',
      'Asked on Oct 27, 2023 (MEMRI Clip #10595) why Hamas built 500 km of concrete tunnels without a single bomb shelter for civilians, senior Hamas official Mousa Abu Marzouk replied that tunnels were built strictly to protect Hamas fighters while feeding and sheltering Gazans was the UN’s job.'
    ],
    references: [
      'U.S. Treasury OFAC Designations of Hamas Secret Foreign Investment Portfolio & Crypto Channels (2022–2024)',
      'Matthew Levitt, Hamas: Politics, Charity, and Terrorism in the Service of Jihad (Yale Univ. Press)',
      'MEMRI TV Clip #10595 — Hamas Official Mousa Abu Marzouk Interview on Russia Today Arabic (Oct 27, 2023)'
    ],
    tags: ['Economics', 'Security', 'Governance'],
    era: '2007–Present',
    relatedIds: ['con-rebuttal-aid-diversion-icj']
  },
  {
    id: 'con-gaza-blockade-resources-marine',
    parentId: 'thesis-econ-gaza-aid-israeli-fiscal',
    kind: 'con',
    title: '16-Year Blockade Crushed Private Exports & Blocked Gaza Marine Offshore Gas',
    summary:
      'Development economists (UNCTAD, Gisha, Oxfam) counter that Gaza’s productive private sector—textiles, furniture, agriculture—was asphyxiated by post-2007 export bans, repeated war destruction, fishing limits, and blocked development of the ~1-trillion-cubic-foot Gaza Marine gas field discovered 20 miles offshore in 2000.',
    details: [
      'UNCTAD estimated the cumulative pre-2023 GDP loss from Gaza’s closure and military operations at $16.7 billion (~6x Gaza’s annual GDP), pushing 80% of residents onto international food aid even before October 2023.',
      'Economists note a textbook political-economy trap: when legal factories, banking, and sovereign energy projects (Gaza Marine gas and Oslo Art. 40 West Bank aquifer shares) are blocked, formal entrepreneurs go bankrupt and armed smuggling monopolies become the only lucrative game in town.'
    ],
    references: [
      'UNCTAD, Economic Costs of the Israeli Occupation for the Palestinian People: Gaza Under Closure (2020–2024)',
      'Gaza Marine Offshore Gas Field Development History (BG Group / PA–Egypt–Israel Negotiations, 2000–2023)'
    ],
    tags: ['Economics', 'Human Rights', 'Governance'],
    era: '2000–Present',
    relatedIds: ['con-gaza-pre2023-blockade-impact']
  },
  {
    id: 'pro-israel-wartime-fiscal-strain',
    parentId: 'thesis-econ-gaza-aid-israeli-fiscal',
    kind: 'pro',
    title: 'Israel’s Fiscal Dilemma: Defense Surge, Reservist Burden, Downgrades & Brain-Drain Risk',
    summary:
      'Over 300 senior Israeli economists and Bank of Israel Governor Amir Yaron warn that open-ended war (~250B+ NIS / $65B+ direct cost), defense spending climbing toward 7–9% of GDP, 2024 sovereign credit downgrades (Moody’s, S&P, Fitch), and non-working ultra-Orthodox ("Haredi") subsidies threaten Israel’s growth trajectory.',
    details: [
      'Israel’s prosperity relies heavily on ~12–15% of its workforce in globally mobile high-tech (generating >50% of national exports and ~25% of income taxes); multi-month reserve duty for 300,000+ citizens alongside diplomatic/academic boycotts and rising taxes heightens corporate relocation ("brain drain") risks.',
      'Economists argue sustaining first-world defense and living standards requires cutting coalition sectoral budgets, integrating Haredi men into STEM education and military/workforce participation, and securing regional diplomatic stabilization.'
    ],
    references: [
      'Bank of Israel Annual Reports & Governor Amir Yaron Fiscal Policy Warnings (2024–2025)',
      'Moody’s, S&P & Fitch Sovereign Credit Rating Downgrade Reports on Israel (2024)',
      'Public Warnings by 300+ Israeli Economists (incl. Dan Ben-David, Moshe Hazan, Eugene Kandel, 2023–2025)'
    ],
    tags: ['Economics', 'Governance', 'Security'],
    era: '2023–Present',
    relatedIds: ['pro-two-state-munk-isolation']
  },
  {
    id: 'con-rebuttal-startup-nation-resilience',
    parentId: 'pro-israel-wartime-fiscal-strain',
    kind: 'con',
    title: '"Start-Up Nation" Resilience: $200B+ FX Reserves, Cyber/AI Exits & Gas Exports',
    summary:
      'Market analysts and economic historians respond that Israel’s economy rebounded strongly from every past shock (1973 War, 2001–2003 Second Intifada), anchored in 2024–2026 by $200B+ in Bank of Israel foreign-exchange reserves, record cybersecurity/AI venture deals, and sovereign Leviathan/Tamar natural-gas exports.',
    details: [
      'Even amid active multi-front combat in 2024–2025, Israeli startups raised $10B–$12B+ annually in private venture capital (ranking 3rd globally in AI/cyber deal flow per capita) alongside multi-billion-dollar M&A acquisitions by Alphabet, Nvidia, Palo Alto Networks, and Salesforce.',
      'Israeli defense-tech exports (Arrow-3 to Germany, Iron Dome/David’s Sling components, autonomous drone systems) reached record ~$13B+ annual orders, while Tel Aviv equities and the shekel rallied sharply following strategic degradation of Hezbollah and Iranian air defenses.'
    ],
    references: [
      'Startup Nation Central & IVC Israeli High-Tech Ecosystem Annual Reports (2024–2025)',
      'Bank of Israel Foreign Exchange Reserves & Balance-of-Payments Statistics (2025)',
      'Dan Senor & Saul Singer, Start-Up Nation (2009) & The Genius of Israel (2023)'
    ],
    tags: ['Economics', 'Security'],
    era: '2009–Present'
  }
];
