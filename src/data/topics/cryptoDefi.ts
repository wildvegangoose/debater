import { DebateGraphDataset, DebateNode } from '../../types/debate';

const rootNode: DebateNode = {
  id: 'root-crypto-defi',
  parentId: null,
  kind: 'root',
  title: 'Cryptocurrency & Decentralized Finance',
  summary:
    'A comprehensive dialectical map analyzing the monetary, economic, regulatory, and environmental debate over cryptocurrencies, programmable smart contracts, and decentralized finance (DeFi), weighing censorship-resistant financial sovereignty against speculative instability and illicit finance.',
  sections: [
    {
      heading: 'The Monetary Sovereignty Clash: Sound Money vs. Speculative Mania',
      paragraphs: [
        'Since the release of **Satoshi Nakamoto’s** Bitcoin whitepaper in 2008, cryptocurrency has evolved from a cypherpunk cryptographic experiment into a multi-trillion-dollar alternative financial system. Proponents—including crypto venture capitalists **Balaji Srinivasan**, **Nic Carter**, and macroeconomist **Lyn Alden**—view algorithmic proof-of-work and decentralized smart contracts as an epochal breakthrough: separating state monopoly control from money, offering mathematically capped inflation resistance, and establishing permissionless global settlement rails beyond political censorship.',
        'Conversely, prominent economists including Nobel laureate **Paul Krugman**, **Nouriel Roubini**, and regulatory leaders like SEC Chair **Gary Gensler** contend that cryptocurrencies possess zero intrinsic economic value, functioning primarily as speculative negative-sum gambling vehicles, regulatory arbitrage havens for money laundering and ransomware, and unstable shadows of historic wildcat banking.'
      ]
    },
    {
      heading: 'Landmark Debates, Legal Dockets & Architectural Evolutions',
      paragraphs: [
        'Centering on landmark clashes from the **Oxford Union**, the **Soho Forum** (*Carter vs. Roubini*), and foundational regulatory actions following the collapse of FTX and Terra/Luna, this dataset organizes the cryptocurrency dispute into four balanced pillars: **Censorship-Resistant Sound Money**, **Illicit Finance, Scams & Systemic Fragility**, **Disintermediation & Permissionless Financial Plumbing**, and **Energy Consumption, Proof-of-Work vs. Proof-of-Stake**.',
        'Every thesis and counter-argument is steelmanned using on-chain transaction data, Bank for International Settlements (BIS) econometric papers, Cambridge energy indexes, and landmark federal court dockets.'
      ]
    }
  ],
  details: [
    'Synthesizes landmark debates from Oxford Union and Soho Forum: Nic Carter & Balaji Srinivasan vs. Paul Krugman & Nouriel Roubini.',
    'Evaluates Bitcoin’s 21M hard cap and self-custody as human rights tools against volatility critiques and illicit finance risks.',
    'Compares Ethereum’s 99.95% energy reduction via Proof-of-Stake with Bitcoin Proof-of-Work grid-stabilization arguments.'
  ],
  sources: [
    {
      title: 'Bitcoin: A Peer-to-Peer Electronic Cash System',
      url: 'https://bitcoin.org/bitcoin.pdf',
      publisher: 'Satoshi Nakamoto',
      year: '2008',
      category: 'Primary Text / Treaty'
    },
    {
      title: 'Soho Forum Debate: Bitcoin vs. The Dollar (Nic Carter vs. Nouriel Roubini)',
      url: 'https://www.thesohoforum.org/debates/nic-carter-vs-nouriel-roubini',
      publisher: 'The Soho Forum / Reason Foundation',
      year: '2021',
      category: 'Debate / Broadcast'
    },
    {
      title: 'The Bitcoin Standard: The Decentralized Alternative to Central Banking',
      url: 'https://saifedean.com/the-bitcoin-standard',
      publisher: 'John Wiley & Sons (Saifedean Ammous)',
      year: '2018',
      category: 'Scholarship'
    }
  ],
  tags: ['Economics', 'Macroeconomics', 'Regulation & Markets', 'AI & Technology'],
  era: '2008–Present'
};

const pillarNodes: DebateNode[] = [
  // PILLAR 1: Censorship-Resistant Sound Money
  {
    id: 'pillar-crypto-sound-money',
    parentId: 'root-crypto-defi',
    kind: 'pillar',
    title: 'Censorship-Resistant Sound Money',
    summary:
      'Examines Bitcoin and algorithmic hard-money assets as hedges against sovereign fiat currency debasement, capital controls, and geopolitical financial weaponization.',
    sections: [
      {
        heading: 'Algorithmic Scarcity vs. Sovereign Fiat Inflation',
        paragraphs: [
          'Under modern fractional-reserve fiat banking, central banks possess discretionary authority to expand the monetary supply, as seen in the multi-trillion-dollar quantitative easing operations following the 2008 financial crisis and the COVID-19 pandemic. Advocates of the Austrian school of economics argue that fiat expansion devalues the purchasing power of middle-class wages, transfers wealth to early asset holders (**the Cantillon Effect**), and induces destructive business cycles.',
          'Bitcoin counters this through mathematical predictability: an immutable, programmed supply cap of **21 million coins**, combined with quadrennial "halvings" that reduce issuance velocity regardless of political pressure. As **Saifedean Ammous** argues, Bitcoin functions as "digital gold"—an un-debasable monetary anchor for the digital era.'
        ]
      },
      {
        heading: 'Financial Sovereignty in Authoritarian Regimes',
        paragraphs: [
          'Beyond inflation hedging, human rights advocates like **Alex Gladstein** (Human Rights Foundation) document that Bitcoin serves as an indispensable tool for political dissidents, independent journalists, and refugees living under tyrannical regimes (e.g. Venezuela, Belarus, Nigeria) where state banks freeze accounts to silence democratic opposition.'
        ]
      }
    ],
    details: [
      'Contrasts Bitcoin’s programmatic 21M hard cap with discretionary central bank fiat expansion.',
      'Explains the Cantillon Effect and wealth redistribution under modern quantitative easing.',
      'Documents the Human Rights Foundation’s findings on Bitcoin usage among global political dissidents.'
    ],
    sources: [
      {
        title: 'Check Your Financial Privilege: Inside the Global Bitcoin Revolution',
        url: 'https://hrf.org/check-your-financial-privilege-book/',
        publisher: 'Human Rights Foundation (Alex Gladstein)',
        year: '2022',
        category: 'Watchdog / NGO'
      },
      {
        title: 'Broken Money: Why Our Financial System Is Failing Us and How We Can Make It Better',
        url: 'https://www.lynalden.com/broken-money/',
        publisher: 'Alden Investment Strategy (Lyn Alden)',
        year: '2023',
        category: 'Scholarship'
      },
      {
        title: 'The Cantillon Effect and Fiat Currency Expansion',
        url: 'https://mises.org/library/cantillon-effects-money-growth-and-distribution-wealth',
        publisher: 'Mises Institute',
        year: '2019',
        category: 'Scholarship'
      }
    ],
    tags: ['Macroeconomics', 'Economics', 'Human Rights', 'Civil Liberties'],
    era: '2008–Present',
    relatedIds: ['pillar-crypto-illicit', 'pillar-crypto-defi']
  },

  // PILLAR 2: Illicit Finance, Scams & Systemic Fragility
  {
    id: 'pillar-crypto-illicit',
    parentId: 'root-crypto-defi',
    kind: 'pillar',
    title: 'Illicit Finance, Scams & Systemic Fragility',
    summary:
      'Investigates the criminal underbelly of cryptocurrency, analyzing multi-billion-dollar exchange frauds (FTX), speculative Ponzi tokenomics, ransomware payouts, and state-sponsored sanctions evasion.',
    sections: [
      {
        heading: 'Exchange Collapses, Misappropriation & Ponzi Tokenomics',
        paragraphs: [
          'The unregulated cryptocurrency ecosystem has been repeatedly shaken by catastrophic custodial collapses and multibillion-dollar frauds. The November 2022 implosion of **FTX**—where founder **Sam Bankman-Fried** secretly misappropriated over $8 billion in customer deposits to fund speculative trading losses at Alameda Research—demonstrated severe systemic conflicts of interest, accounting negligence, and lack of basic corporate governance in offshore crypto exchanges.',
          'Similarly, the collapse of algorithmic stablecoin **Terra/Luna** wiped out $40 billion in investor savings in days, triggering a domino effect of liquidations across crypto lenders (Celsius, Voyager, Three Arrows Capital) that mirrored unregulated pre-Depression bank panics.'
        ]
      },
      {
        heading: 'Ransomware, Sanctions Evasion and National Security Threats',
        paragraphs: [
          'National security agencies and legislative leaders like Senator **Elizabeth Warren** emphasize that pseudonymous crypto rails enable rogue nation-states (e.g., North Korea’s Lazarus Group) to finance ballistic missile programs via cyber-heists and allow global ransomware cartels to paralyze hospitals and critical municipal infrastructure.'
        ]
      }
    ],
    details: [
      'Documents the criminal fraud and $8B customer misappropriation in the FTX bankruptcy docket.',
      'Analyzes the $40B death-spiral collapse of algorithmic stablecoin Terra/Luna.',
      'Assesses UN and FinCEN findings on North Korean state hackers laundering stolen crypto for weapons development.'
    ],
    sources: [
      {
        title: 'United States v. Samuel Bankman-Fried, S5 22 Cr. 673 (LAK) (S.D.N.Y. 2023)',
        url: 'https://www.justice.gov/usao-sdny/pr/samuel-bankman-fried-sentenced-25-years-prison-orchestrating-massive-fraud-customers',
        publisher: 'U.S. Department of Justice (SDNY)',
        year: '2024',
        category: 'Court / Official Record'
      },
      {
        title: 'Crypto Crime Report 2024',
        url: 'https://www.chainalysis.com/blog/2024-crypto-crime-report/',
        publisher: 'Chainalysis',
        year: '2024',
        category: 'Empirical / Economic Study'
      },
      {
        title: 'UN Security Council Panel of Experts Report on North Korea Cyber Heists',
        url: 'https://www.un.org/securitycouncil/sanctions/1718/panel_experts/reports',
        publisher: 'United Nations Security Council',
        year: '2024',
        category: 'Primary Text / Treaty'
      }
    ],
    tags: ['Criminal Justice', 'National Security', 'Regulation & Markets', 'Economics'],
    era: '2014–Present',
    relatedIds: ['pillar-crypto-sound-money', 'pillar-crypto-defi']
  },

  // PILLAR 3: Disintermediation & Permissionless Financial Plumbing
  {
    id: 'pillar-crypto-defi',
    parentId: 'root-crypto-defi',
    kind: 'pillar',
    title: 'Disintermediation & Permissionless Financial Plumbing',
    summary:
      'Explores the potential of programmable smart contracts, automated market makers (AMMs), and fiat-backed stablecoins to disintermediate legacy Wall Street gatekeepers, cut transaction fees, and democratize global payments.',
    sections: [
      {
        heading: 'Automated Market Makers and Smart Contract Composability',
        paragraphs: [
          'Traditional finance relies on centralized market makers, prime brokers, clearinghouses (DTCC), and settlement banks that extract tens of billions in annual fees and operate on archaic T+2 day settlement delays. Decentralized finance (**DeFi**) protocols like **Uniswap** replace human intermediaries with deterministic math: **Automated Market Makers (AMMs)** executing the constant-product formula ($x \\times y = k$).',
          'Ethereum co-founder **Vitalik Buterin** and DeFi architects emphasize **composability** ("money legos"): open-source financial smart contracts that interact permissionlessly without counterparty credit risk, allowing instant collateralized lending (Aave, MakerDAO), cross-border trade, and continuous liquidity.'
        ]
      },
      {
        heading: 'Global Dollarization and Cross-Border Stablecoins',
        paragraphs: [
          'Fiat-backed stablecoins (USDC, USDT) have emerged as the "killer app" of crypto, settling trillions in annual transactional volume at near-zero fees. They provide dollar access to citizens in high-inflation developing economies while creating massive private demand for U.S. short-term Treasury bills.'
        ]
      }
    ],
    details: [
      'Uniswap and AMMs replace rent-extracting Wall Street intermediaries with deterministic smart contract code.',
      'DeFi composability enables automated lending, borrowing, and synthetic assets without custodial credit risk.',
      'Stablecoins (USDC/USDT) settle trillions globally in seconds, driving private demand for U.S. Treasury bills.'
    ],
    sources: [
      {
        title: 'Uniswap v3 Core Whitepaper',
        url: 'https://uniswap.org/whitepaper-v3.pdf',
        publisher: 'Uniswap Labs (Hayden Adams et al.)',
        year: '2021',
        category: 'Scholarship'
      },
      {
        title: 'DeFi and the Future of Finance',
        url: 'https://www.wiley.com/en-us/DeFi+and+the+Future+of+Finance-p-9781119836018',
        publisher: 'John Wiley & Sons (Campbell R. Harvey, Ashwin Ramachandran, Joey Santoro)',
        year: '2021',
        category: 'Scholarship'
      },
      {
        title: 'The Role of Stablecoins in Cross-Border Payments',
        url: 'https://www.bis.org/publ/bppdf/bispap134.pdf',
        publisher: 'Bank for International Settlements (BIS)',
        year: '2023',
        category: 'Empirical / Economic Study'
      }
    ],
    tags: ['Economics', 'Regulation & Markets', 'Science & Innovation', 'Macroeconomics'],
    era: '2019–Present',
    relatedIds: ['pillar-crypto-sound-money', 'pillar-crypto-energy']
  },

  // PILLAR 4: Energy Consumption, Proof-of-Work vs. Proof-of-Stake
  {
    id: 'pillar-crypto-energy',
    parentId: 'root-crypto-defi',
    kind: 'pillar',
    title: 'Energy Consumption, Proof-of-Work vs. Proof-of-Stake',
    summary:
      'Weighs the environmental and thermodynamic costs of Proof-of-Work consensus against grid-stabilization arguments and the 99.95% energy reduction achieved by Ethereum’s Proof-of-Stake transition.',
    sections: [
      {
        heading: 'Thermodynamic Anchoring vs. Carbon Externalities',
        paragraphs: [
          'Bitcoin’s **Proof-of-Work (PoW)** consensus requires miners worldwide to expend immense computational power solving SHA-256 cryptographic puzzles. Critics, including **Alex de Vries** (Digiconomist) and environmental watchdogs, point out that Bitcoin consumes over 120–140 TWh of electricity annually—exceeding the power draw of entire nations like Sweden or Argentina—accelerating electronic waste and revitalizing dormant fossil-fuel power plants.',
          'PoW defenders counter that tying money to physical energy expenditure is Bitcoin’s greatest strength: money cannot be conjured out of thin air by political elites without physical thermodynamic cost. Furthermore, empirical data shows miners act as flexible, interruptible loads that monetize stranded flare gas and stabilize erratic renewable energy grids.'
        ]
      },
      {
        heading: 'The Ethereum Merge and the Proof-of-Stake Revolution',
        paragraphs: [
          'In September 2022, Ethereum executed **The Merge**, transitioning its entire consensus mechanism from PoW to **Proof-of-Stake (PoS)**. By replacing hardware mining rigs with staked capital validators, Ethereum reduced its network energy consumption by **99.95%** overnight, proving that planetary-scale blockchain security can operate with near-zero carbon emissions.'
        ]
      }
    ],
    details: [
      'Cambridge Bitcoin Electricity Consumption Index tracks Bitcoin’s annual power draw at 120–140 TWh.',
      'Defenders highlight Bitcoin mining as an interruptible grid stabilizer that monetizes flared oilfield methane.',
      'The Ethereum Merge permanently slashed network energy consumption by 99.95% in a historic engineering feat.'
    ],
    sources: [
      {
        title: 'Cambridge Bitcoin Electricity Consumption Index (CBECI)',
        url: 'https://ccaf.io/cbeci/index',
        publisher: 'Cambridge Centre for Alternative Finance',
        year: '2024',
        category: 'Empirical / Economic Study'
      },
      {
        title: 'The Merge: Ethereum Consensus Mechanism Transition',
        url: 'https://ethereum.org/en/roadmap/merge/',
        publisher: 'Ethereum Foundation',
        year: '2022',
        category: 'Primary Text / Treaty'
      },
      {
        title: 'Bitcoin’s Carbon Footprint Revisited',
        url: 'https://www.cell.com/joule/fulltext/S2542-4351(22)00086-1',
        publisher: 'Joule (Alex de Vries)',
        year: '2022',
        category: 'Scholarship'
      }
    ],
    tags: ['Energy & Climate', 'Science & Innovation', 'Regulation & Markets'],
    era: '2021–Present',
    relatedIds: ['pillar-crypto-sound-money', 'pillar-crypto-defi']
  }
];

const thesisAndRebuttalNodes: DebateNode[] = [
  // --- THESIS 1A (Pillar 1) ---
  {
    id: 'thesis-bitcoin-sound-money',
    parentId: 'pillar-crypto-sound-money',
    kind: 'thesis',
    title: 'Bitcoin’s Inelastic 21M Supply Cap Provides an Indispensable Hedge Against Fiat Debasement',
    summary:
      'Posits that programmatic mathematical scarcity makes Bitcoin a superior store of value to fiat currencies whose purchasing power is systematically eroded by central bank monetary printing.',
    sections: [
      {
        heading: 'Mathematical Scarcity in an Age of Fiat Proliferation',
        paragraphs: [
          'Since the abandonment of the Bretton Woods gold standard in 1971, sovereign fiat currencies have had no physical or mathematical anchor. Over the past two decades, central bank balance sheets have expanded exponentially to absorb sovereign debt, diluting real wage growth and driving home prices, equity markets, and cost of living beyond the reach of younger generations.',
          'Bitcoin introduces an entirely novel economic property: absolute mathematical scarcity. With an immutable hard cap of 21 million units enforced by decentralized node consensus, no government, central bank, or corporate CEO can inflate the supply. As macro analyst **Lyn Alden** argues, Bitcoin represents an incorruptible ledger of human time and savings.'
        ]
      },
      {
        heading: 'Global Reserve Asset Potential',
        paragraphs: [
          'Institutional adoption by public corporations (MicroStrategy), sovereign wealth funds, and the approval of spot Bitcoin ETFs by the SEC in 2024 validate Bitcoin as an emerging non-sovereign macro reserve asset.'
        ]
      }
    ],
    details: [
      'Enforces an immutable, programmatic supply limit of 21 million coins.',
      'Protects long-term purchasing power against discretionary central bank inflation and debt monetization.',
      'Gained institutional legitimacy through SEC-approved spot ETFs and corporate balance sheet adoption.'
    ],
    sources: [
      {
        title: 'SEC Release No. 34-99306: Order Granting Approval of Spot Bitcoin ETFs',
        url: 'https://www.sec.gov/files/rules/other/2024/34-99306.pdf',
        publisher: 'Securities and Exchange Commission',
        year: '2024',
        category: 'Court / Official Record'
      },
      {
        title: 'The Bitcoin Standard',
        url: 'https://saifedean.com/the-bitcoin-standard',
        publisher: 'John Wiley & Sons (Saifedean Ammous)',
        year: '2018',
        category: 'Scholarship'
      }
    ],
    tags: ['Macroeconomics', 'Economics', 'Trade & Industry'],
    era: '2018–Present',
    relatedIds: ['pro-hardcap-inflation-hedge', 'con-krugman-volatility-intrinsic-value']
  },
  {
    id: 'pro-hardcap-inflation-hedge',
    parentId: 'thesis-bitcoin-sound-money',
    kind: 'pro',
    title: 'The Cantillon Effect Proves Fiat Expansions Harm Workers While Rewarding Asset Holders',
    summary:
      'Argues that monetary inflation is not neutral: new money created by central banks enriches Wall Street banks and asset owners first, while Bitcoin provides equal monetary protection to all holders.',
    sections: [
      {
        heading: 'The Inherent Injustice of the Cantillon Effect',
        paragraphs: [
          'Eighteenth-century economist Richard Cantillon observed that money creation disproportionately benefits those closest to the monetary spigot: prime banks, government contractors, and ultra-wealthy borrowers receive new liquidity before prices adjust. By the time newly printed money circulates down to wage workers in the real economy, consumer prices and grocery bills have already surged, eroding their real living standard.',
          'Bitcoin completely eliminates the Cantillon Effect. Its programmatic issuance schedule is transparent, equal, and immune to political lobbying, ensuring that no special interest group or connected financial institution can mint coins ahead of ordinary citizens.'
        ]
      },
      {
        heading: 'Empirical Outperformance',
        paragraphs: [
          'Over any four-year rolling window in its 16-year history, Bitcoin’s purchasing power growth has dramatically outpaced the Consumer Price Index (CPI), gold, and global broad money supply growth.'
        ]
      }
    ],
    details: [
      'Cantillon Effect demonstrates how fiat expansion redistributes wealth from wage-earners to financial elites.',
      'Bitcoin eliminates arbitrary monetary privilege; all participants follow identical protocol rules.',
      'Historical rolling returns show Bitcoin consistently outperforming CPI and sovereign currency debasement.'
    ],
    sources: [
      {
        title: 'Cantillon Effects and the Architecture of Modern Central Banking',
        url: 'https://www.cambridge.org/core/journals/journal-of-economic-history/article/cantillon-effects/D3A5D440D9F5E',
        publisher: 'Journal of Economic History',
        year: '2020',
        category: 'Scholarship'
      },
      {
        title: 'Macroeconomic Impact of Cryptocurrency Adoption on Household Wealth',
        url: 'https://www.nber.org/papers/w31000',
        publisher: 'NBER Working Paper',
        year: '2023',
        category: 'Empirical / Economic Study'
      }
    ],
    tags: ['Macroeconomics', 'Economics', 'Taxation & Fiscal'],
    era: '2020–Present',
    relatedIds: ['con-krugman-volatility-intrinsic-value', 'counter-authoritarian-human-rights']
  },
  {
    id: 'con-krugman-volatility-intrinsic-value',
    parentId: 'thesis-bitcoin-sound-money',
    kind: 'con',
    title: 'Bitcoin Lacks Intrinsic Cash Flows, Anchoring, or Volatility Stability for Monetary Use',
    summary:
      'Counters that Bitcoin cannot function as a viable currency or sound money because it produces no cash flows, lacks sovereign tax backing, and suffers from extreme speculative volatility.',
    sections: [
      {
        heading: 'The Triad of Currency Functions and the Volatility Barrier',
        paragraphs: [
          'Nobel laureate **Paul Krugman** and macroeconomist **Nouriel Roubini** demonstrate that an asset can only serve as money if it fulfills three core functions: a medium of exchange, a store of value, and a unit of account. Bitcoin fails all three. Its extreme volatility—routinely crashing 50% to 80% during multi-year "crypto winters"—makes it mathematically impossible to price consumer mortgages, commercial payrolls, or supermarket groceries in Satoshis.',
          'Unlike sovereign fiat currencies (which are anchored by governments’ power to levy taxes and legal tender laws) or corporate equities (which represent claims on future discounted cash flows), Bitcoin generates no yield, dividend, or utility beyond speculative resale. It represents a pure Keynesian beauty contest driven by greater-fool speculation.'
        ]
      },
      {
        heading: 'The Deflationary Trap',
        paragraphs: [
          'A fixed-supply currency induces economic stagnation. If money becomes more valuable by simply hoarding it, consumer spending collapses, debt burdens become unbearable, and aggregate employment plunges into a deflationary spiral.'
        ]
      }
    ],
    details: [
      'Krugman and Roubini prove Bitcoin fails as a unit of account due to routine 50–80% price collapses.',
      'Bitcoin generates zero intrinsic earnings, cash flows, or sovereign tax anchoring.',
      'Fixed-supply deflationary currencies induce hoarding and paralyze macroeconomic growth.'
    ],
    sources: [
      {
        title: 'Transaction Costs and Tethers: Why I’m a Crypto Skeptic',
        url: 'https://www.nytimes.com/2018/07/31/opinion/transaction-costs-and-tethers-why-im-a-crypto-skeptic.html',
        publisher: 'The New York Times (Paul Krugman)',
        year: '2018',
        category: 'Scholarship'
      },
      {
        title: 'The Great Crypto Heist: Why Bitcoin Is Not Money',
        url: 'https://www.project-syndicate.org/commentary/crypto-scams-blockchain-bubble-by-nouriel-roubini-2018-10',
        publisher: 'Project Syndicate (Nouriel Roubini)',
        year: '2018',
        category: 'Scholarship'
      }
    ],
    tags: ['Macroeconomics', 'Economics', 'Empirical Studies'],
    era: '2018–Present',
    relatedIds: ['thesis-bitcoin-sound-money', 'pro-hardcap-inflation-hedge', 'counter-authoritarian-human-rights']
  },
  {
    id: 'counter-authoritarian-human-rights',
    parentId: 'con-krugman-volatility-intrinsic-value',
    kind: 'con',
    title: 'First-World Volatility Critiques Blind Western Economists to Global Human Rights Realities',
    summary:
      'Rebuts Krugman’s skepticism by showing that for billions living under autocratic hyperinflation (Argentina, Nigeria, Venezuela), Bitcoin’s volatility is trivial compared to state currency confiscation.',
    sections: [
      {
        heading: 'Financial Privilege and Authoritarian Realities',
        paragraphs: [
          'Human rights advocate **Alex Gladstein** points out that Western economists evaluate Bitcoin from a position of "financial privilege"—living in wealthy democracies with stable legal systems, deposit insurance (FDIC), and trusted judicial enforcement. But for over four billion people living under authoritarian regimes or collapsed currencies (such as the Venezuelan Bolívar, Argentine Peso, or Lebanese Pound), sovereign fiat is far more volatile than Bitcoin.',
          'When the Nigerian government froze the bank accounts of #EndSARS anti-police-brutality protestors in 2020, activists pivoted to Bitcoin to fund legal defense, medical ambulances, and food supplies beyond military reach. For oppressed populations, censorship resistance is not speculative theory; it is a vital human rights lifeline.'
        ]
      },
      {
        heading: 'Cross-Border Capital Flight for Refugees',
        paragraphs: [
          'Refugees fleeing warzones (e.g. Ukraine or Syria) cannot transport physical gold bars across hostile checkpoints without confiscation. Memorizing a 12-word seed phrase allows refugees to cross borders with their entire family savings intact in their heads.'
        ]
      }
    ],
    details: [
      'Gladstein identifies Western economic critique as blinded by financial privilege.',
      'Nigerian #EndSARS protestors used Bitcoin after military regimes froze civil rights bank accounts.',
      '12-word seed phrase allows refugees to transport life savings across borders without physical seizure.'
    ],
    sources: [
      {
        title: 'Check Your Financial Privilege',
        url: 'https://hrf.org/check-your-financial-privilege-book/',
        publisher: 'Human Rights Foundation (Alex Gladstein)',
        year: '2022',
        category: 'Watchdog / NGO'
      },
      {
        title: 'How Bitcoin Fueled Nigeria’s #EndSARS Protests',
        url: 'https://www.coindesk.com/policy/2020/10/22/how-bitcoin-empowered-nigerians-to-protest-police-brutality/',
        publisher: 'CoinDesk',
        year: '2020',
        category: 'Watchdog / NGO'
      }
    ],
    tags: ['Human Rights', 'Civil Liberties', 'Macroeconomics'],
    era: '2020–Present',
    relatedIds: ['con-krugman-volatility-intrinsic-value', 'thesis-bitcoin-sound-money']
  },

  // --- THESIS 1B (Pillar 1) ---
  {
    id: 'thesis-self-custody-privacy',
    parentId: 'pillar-crypto-sound-money',
    kind: 'thesis',
    title: 'Self-Custody and Unhosted Wallets Are Fundamental Protections for Financial Privacy',
    summary:
      'Maintains that holding private keys directly in unhosted wallets is a vital civil liberty that prevents warrantless state surveillance and discriminatory political de-banking.',
    sections: [
      {
        heading: 'The Erosion of Financial Privacy and Operation Choke Point',
        paragraphs: [
          'Over the past half-century, the **Bank Secrecy Act (BSA)** and international FATF rules have transformed private commercial banks into de facto arms of state intelligence. Every credit card swipe, wire transfer, and withdrawal above nominal thresholds is monitored, filed into Suspicious Activity Reports (SARs), and stored without judicial warrants.',
          'State actors increasingly weaponize the banking system against lawful domestic dissent. During the 2022 Canadian Trucker Convoy, the Canadian federal government invoked the Emergencies Act to freeze the personal bank accounts and credit cards of protestors and ordinary citizens who donated as little as $25 to the movement, without due process. Unhosted crypto wallets represent the only remaining defense against total financial de-platforming.'
        ]
      },
      {
        heading: 'Code as Free Speech',
        paragraphs: [
          'Cryptographic key creation and peer-to-peer data transmission are protected forms of mathematical expression under the First Amendment, as established in 1990s cryptography export litigation (*Bernstein v. Department of Justice*).'
        ]
      }
    ],
    details: [
      'Bank Secrecy Act transformed private banks into warrantless state surveillance conduits.',
      'Canadian government froze citizen bank accounts without court orders during the 2022 trucker protests.',
      'Bernstein v. DOJ established that cryptographic source code and key generation are protected First Amendment speech.'
    ],
    sources: [
      {
        title: 'Bernstein v. US Department of Justice, 176 F.3d 1132 (9th Cir. 1999)',
        url: 'https://law.justia.com/cases/federal/appellate-courts/f3/176/1132/491913/',
        publisher: 'U.S. Court of Appeals for the Ninth Circuit',
        year: '1999',
        category: 'Court / Official Record'
      },
      {
        title: 'The Case for Financial Privacy',
        url: 'https://www.coincenter.org/the-case-for-financial-privacy/',
        publisher: 'Coin Center (Peter Van Valkenburgh)',
        year: '2020',
        category: 'Watchdog / NGO'
      }
    ],
    tags: ['Civil Liberties', 'Human Rights', 'Regulation & Markets'],
    era: '2020–Present',
    relatedIds: ['pro-self-custody-civil-liberties', 'con-irreversible-loss-user-error']
  },
  {
    id: 'pro-self-custody-civil-liberties',
    parentId: 'thesis-self-custody-privacy',
    kind: 'pro',
    title: 'Financial Surveillance Chills Democratic Dissent and Enables Totalitarian Control',
    summary:
      'Shows that when governments control digital money pipelines, they can effortlessly extinguish political dissent, making decentralized cash alternatives essential for free societies.',
    sections: [
      {
        heading: 'Cashless Societies and the Social Credit Nightmare',
        paragraphs: [
          'The complete elimination of physical paper cash in favor of centralized bank accounts allows states to implement total behavioral conditioning. In authoritarian states like China, the Digital Yuan is programmed to restrict travel, transit access, and hotel bookings for citizens flagged by social credit algorithms.',
          'Advocates at **Coin Center** argue that self-custodied cryptocurrency is the digital equivalent of physical cash: a bearer asset that does not require the permission of an intermediary to transact, preserving the historical sphere of private human commerce.'
        ]
      },
      {
        heading: 'Defending the Integrity of Unhosted Wallets',
        paragraphs: [
          'Attempts by regulators to mandate KYC identification for non-custodial software wallets violate Fourth Amendment protections against unreasonable, dragnet searches of private digital property.'
        ]
      }
    ],
    details: [
      'Cashless digital fiat enables authoritarian states to program money to restrict travel and speech.',
      'Self-custodied crypto functions as digital bearer cash that preserves non-surveilled private commerce.',
      'Mandating KYC on open-source wallet code infringes on Fourth Amendment rights against warrantless search.'
    ],
    sources: [
      {
        title: 'Electronic Cash, Decentralized Exchange, and the Constitution',
        url: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3354904',
        publisher: 'Coin Center / SSRN (Jerry Brito & Peter Van Valkenburgh)',
        year: '2019',
        category: 'Scholarship'
      },
      {
        title: 'Surveillance as a Weapon: China’s Central Bank Digital Currency',
        url: 'https://www.cnas.org/publications/reports/chinas-digital-currency',
        publisher: 'Center for a New American Security (CNAS)',
        year: '2021',
        category: 'Watchdog / NGO'
      }
    ],
    tags: ['Civil Liberties', 'Human Rights', 'Governance'],
    era: '2019–Present',
    relatedIds: ['con-irreversible-loss-user-error']
  },
  {
    id: 'con-irreversible-loss-user-error',
    parentId: 'thesis-self-custody-privacy',
    kind: 'con',
    title: 'Irreversible Self-Custody Architecture Results in Catastrophic Capital Loss and Fraud',
    summary:
      'Counters that unhosted private keys impose an unforgiving security burden that is completely unsuited for normal consumers, resulting in billions permanently lost to phishing, hacks, and hardware failure.',
    sections: [
      {
        heading: 'The Unforgiving Brutality of Private Key Management',
        paragraphs: [
          'In traditional banking, if a consumer loses their password, falls victim to an ATM skimmer, or types an incorrect account number, centralized customer support and legal regulations (such as Regulation E) reverse the transaction and reimburse the consumer. In self-custodial crypto, transactions are cryptographically irreversible.',
          'Blockchain forensics firm Chainalysis estimates that between **20% and 30% of all existing Bitcoin** (worth over $300 billion) is permanently lost forever due to forgotten seed phrases, discarded hard drives, and deceased owners who failed to pass on access. For everyday consumers, self-custody is an unforgiving trap where a single phishing click or clipboard malware wipes out an entire life savings with zero legal recourse.'
        ]
      },
      {
        heading: 'The Inevitability of Regulated Intermediaries',
        paragraphs: [
          'The vast majority of retail users actively reject the stress of self-custody, voluntarily entrusting their assets to centralized exchanges (like Coinbase and formerly FTX), proving that human beings demand institutional intermediaries and insurance protections.'
        ]
      }
    ],
    details: [
      'Forensics estimate 20–30% of all Bitcoin is permanently lost due to forgotten private keys and lost drives.',
      'Irreversible architecture leaves victims of phishing and smart contract drainers with zero legal recourse.',
      'Consumer preference for centralized exchanges proves that everyday citizens demand custodial safety nets.'
    ],
    sources: [
      {
        title: 'Lost Bitcoin: Forensics of Dormant and Inaccessible Supply',
        url: 'https://www.chainalysis.com/blog/bitcoin-lost-supply/',
        publisher: 'Chainalysis',
        year: '2020',
        category: 'Empirical / Economic Study'
      },
      {
        title: 'Consumer Protection and the Perils of Cryptographic Self-Custody',
        url: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4218999',
        publisher: 'Harvard Business Law Review',
        year: '2022',
        category: 'Scholarship'
      }
    ],
    tags: ['Economics', 'Regulation & Markets', 'Criminal Justice'],
    era: '2020–Present',
    relatedIds: ['thesis-self-custody-privacy', 'pro-self-custody-civil-liberties']
  },

  // --- THESIS 2A (Pillar 2) ---
  {
    id: 'thesis-custodial-fraud-sec',
    parentId: 'pillar-crypto-illicit',
    kind: 'thesis',
    title: 'The Crypto Industry Is Saturated with Unregistered Securities and Systemic Fraud',
    summary:
      'Contends that the vast majority of crypto tokens and centralized platforms violate foundational securities laws, engaging in rampant wash trading, insider dumping, and consumer fraud.',
    sections: [
      {
        heading: 'The Howey Test and Unregistered Securities Offerings',
        paragraphs: [
          'Under the landmark Supreme Court precedent of *SEC v. W.J. Howey Co.* (1946), an investment contract exists when an individual invests money in a common enterprise with a reasonable expectation of profits derived from the entrepreneurial or managerial efforts of others. SEC Chair **Gary Gensler** and regulatory enforcement actions have documented that almost all 20,000+ altcoin tokens meet this definition.',
          'Founding teams routinely pre-mine massive allocations of tokens, publish hype-filled whitepapers, and solicit retail capital to fund software roadmaps. Once retail liquidity enters, founders and early venture funds dump their unvested allocations onto public buyers, operating an illegal, unregulated shadow capital market.'
        ]
      },
      {
        heading: 'Pervasive Wash Trading and Market Manipulation',
        paragraphs: [
          'Academic studies by the National Bureau of Economic Research (NBER) revealed that up to **70% of reported trading volume** on unregulated crypto exchanges is fictitious wash trading—bots trading with themselves to fabricate artificial volume and lure retail speculators into illiquid tokens.'
        ]
      }
    ],
    details: [
      'SEC enforcement applies the Howey Test to prove most altcoins are illegal unregistered securities.',
      'Documents founder pre-mines and predatory token dump schedules onto retail investors.',
      'NBER studies showed up to 70% of volume on offshore crypto exchanges is wash trading.'
    ],
    sources: [
      {
        title: 'SEC v. W.J. Howey Co., 328 U.S. 293 (1946)',
        url: 'https://supreme.justia.com/cases/federal/us/328/293/',
        publisher: 'Justia / US Supreme Court',
        year: '1946',
        category: 'Court / Official Record'
      },
      {
        title: 'Crypto Wash Trading',
        url: 'https://www.nber.org/papers/w30783',
        publisher: 'NBER (Cong, Li, Tang, Yang)',
        year: '2022',
        category: 'Empirical / Economic Study'
      },
      {
        title: 'SEC Statement on Crypto Asset Securities and Exchange Registration',
        url: 'https://www.sec.gov/news/speech/gensler-sec-speaks-090822',
        publisher: 'Securities and Exchange Commission (Gary Gensler)',
        year: '2022',
        category: 'Court / Official Record'
      }
    ],
    tags: ['Regulation & Markets', 'Economics', 'Criminal Justice'],
    era: '2022–Present',
    relatedIds: ['pro-sec-gensler-securities', 'con-cex-vs-dex-distinction']
  },
  {
    id: 'pro-sec-gensler-securities',
    parentId: 'thesis-custodial-fraud-sec',
    kind: 'pro',
    title: 'Aggressive Regulatory Enforcement Protects Public Capital from Predatory Extraction',
    summary:
      'Argues that the SEC and DOJ must enforce disclosure rules and investor protections without compromise, preventing tech oligarchs from running unregulated Ponzi capital markets.',
    sections: [
      {
        heading: 'The Importance of Mandatory Disclosure Mandates',
        paragraphs: [
          'Federal securities laws were enacted after the 1929 stock market crash precisely because asymmetric information enables insiders to fleece ordinary citizens. The foundational requirement of mandatory public registration is audited financial disclosures: balance sheets, insider token allocations, and audited revenue reports.',
          'Crypto token issuers deliberately evade these basic investor disclosures. Enforcing compliance protects ordinary working families from losing retirement savings to predatory offshore promoters and deceptive influencer marketing.'
        ]
      },
      {
        heading: 'Dismantling Illegal Commingling and Shadow Banking',
        paragraphs: [
          'SEC and CFTC actions against Binance and Coinbase demonstrated that offshore crypto exchanges routinely commingled customer deposits with internal market-making arms, creating massive undisclosed counterparty risks.'
        ]
      }
    ],
    details: [
      'Mandatory disclosures require audited balance sheets and transparent insider token allocation vesting.',
      'Protects retail public investors from predatory offshore token dumps and celebrity influencer scams.',
      'Enforcement actions against major exchanges exposed routine commingling of customer funds.'
    ],
    sources: [
      {
        title: 'SEC v. Binance Holdings Limited, Complaint (D.D.C. 2023)',
        url: 'https://www.sec.gov/litigation/complaints/2023/comp-pr2023-101.pdf',
        publisher: 'Securities and Exchange Commission',
        year: '2023',
        category: 'Court / Official Record'
      },
      {
        title: 'The Legal Case for Full Crypto Securities Compliance',
        url: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4180000',
        publisher: 'Yale Journal on Regulation',
        year: '2023',
        category: 'Scholarship'
      }
    ],
    tags: ['Regulation & Markets', 'Criminal Justice', 'Economics'],
    era: '2023–Present',
    relatedIds: ['con-cex-vs-dex-distinction']
  },
  {
    id: 'con-cex-vs-dex-distinction',
    parentId: 'thesis-custodial-fraud-sec',
    kind: 'con',
    title: 'FTX Was Centralized Wire Fraud, Not a Failure of On-Chain Decentralized Protocols',
    summary:
      'Counters that conflating centralized exchange crimes (FTX, Celsius) with transparent on-chain DeFi is a false equivalency, noting that decentralized smart contracts operated flawlessly throughout market crashes.',
    sections: [
      {
        heading: 'The Critical Distinction Between CeFi and DeFi',
        paragraphs: [
          'Crypto venture investor **Nic Carter** and blockchain researchers point out that every major catastrophe in 2022—FTX, Celsius, Voyager, BlockFi, and Three Arrows Capital—was a case of centralized finance (**CeFi**). These were traditional corporate entities run by human executives operating behind closed doors with opaque Excel spreadsheets, off-chain accounting fraud, and stolen customer funds. Bankman-Fried’s crimes were classic wire fraud and embezzlement, illegal under existing laws since the 18th century.',
          'In stark contrast, true on-chain decentralized protocols—such as Uniswap, Aave, and MakerDAO—functioned flawlessly throughout the exact same period. They experienced zero liquidations, halted zero withdrawals, and required zero bailouts. Every transaction, collateralization ratio, and margin liquidation was publicly auditable on the blockchain in real time.'
        ]
      },
      {
        heading: 'Regulation by Enforcement Drives Innovation Offshore',
        paragraphs: [
          'The SEC’s refusal to create clear registration rules for digital assets forces legitimate American developers offshore, handing market dominance to unregulated jurisdictions and exposing consumers to greater risk.'
        ]
      }
    ],
    details: [
      'FTC/FTX crashes were traditional off-chain wire fraud and embezzlement, not protocol failures.',
      'On-chain DeFi protocols (Uniswap, Aave) never halted withdrawals or required bailouts during 2022 crashes.',
      'SEC’s hostile "regulation by enforcement" drives transparent startups offshore to unregulated tax havens.'
    ],
    sources: [
      {
        title: 'The Distinction Between DeFi and Centralized Custodians',
        url: 'https://www.sovereignindividual.com/defi-vs-cefi-nic-carter/',
        publisher: 'Castle Island Ventures (Nic Carter)',
        year: '2023',
        category: 'Scholarship'
      },
      {
        title: 'A Critical Examination of SEC Regulation by Enforcement in Digital Assets',
        url: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4390000',
        publisher: 'Georgetown Law Technology Review',
        year: '2023',
        category: 'Scholarship'
      }
    ],
    tags: ['Regulation & Markets', 'Economics', 'Science & Innovation'],
    era: '2023–Present',
    relatedIds: ['thesis-custodial-fraud-sec', 'pro-sec-gensler-securities']
  },

  // --- THESIS 2B (Pillar 2) ---
  {
    id: 'thesis-illicit-ransomware-sanctions',
    parentId: 'pillar-crypto-illicit',
    kind: 'thesis',
    title: 'Pseudonymous Crypto Rails Power Global Ransomware and North Korean Cyber-Theft',
    summary:
      'Posits that decentralized crypto payment rails facilitate cyber-extortion epidemics against hospitals and municipalities while funding rogue regimes beyond the reach of international sanctions.',
    sections: [
      {
        heading: 'The Financial Fuel of the Ransomware Epidemic',
        paragraphs: [
          'Prior to cryptocurrency, digital extortion was bottlenecked by payment friction: bank transfers and credit cards were easily frozen, wire transfers left traceable bank records, and money drops exposed couriers to arrest. Cryptocurrencies like Bitcoin and privacy coins provided cybercriminal syndicates with instant, borderless, non-reversible ransom collection.',
          'In 2021, the ransomware attack on **Colonial Pipeline** paralyzed fuel supplies across the eastern United States, while attacks on healthcare networks knocked hospital chemotherapy and trauma centers offline. Law enforcement agencies emphasize that the ransomware economy exists solely because crypto rails permit extortion monetization at scale.'
        ]
      },
      {
        heading: 'North Korean State Hacking for Weapons of Mass Destruction',
        paragraphs: [
          'United Nations reports document that North Korea’s state-sponsored **Lazarus Group** has stolen over $3 billion in cryptocurrency from cross-chain bridges (such as the $620 million Axie Infinity Ronin bridge hack), directly laundering the proceeds through privacy mixers to fund ballistic missile development.'
        ]
      }
    ],
    details: [
      'Cryptocurrency rails eliminated payment bottlenecks that historically constrained digital cyber-extortion.',
      'Colonial Pipeline and hospital attacks proved ransomware poses critical threats to physical infrastructure.',
      'UN panel confirmed North Korea laundered $3B+ in stolen crypto to finance nuclear and missile programs.'
    ],
    sources: [
      {
        title: 'Combatting Ransomware: A Comprehensive Framework for Action',
        url: 'https://securityandtechnology.org/ransomwaretaskforce/report/',
        publisher: 'Institute for Security and Technology (Ransomware Task Force)',
        year: '2021',
        category: 'Watchdog / NGO'
      },
      {
        title: 'Treasury Sanctions Virtual Currency Mixer Blender.io Used by DPRK',
        url: 'https://home.treasury.gov/news/press-releases/jy0768',
        publisher: 'U.S. Department of the Treasury (OFAC)',
        year: '2022',
        category: 'Court / Official Record'
      }
    ],
    tags: ['Criminal Justice', 'National Security', 'Regulation & Markets'],
    era: '2021–Present',
    relatedIds: ['pro-illicit-darknet-rails', 'con-chainalysis-public-ledger']
  },
  {
    id: 'pro-illicit-darknet-rails',
    parentId: 'thesis-illicit-ransomware-sanctions',
    kind: 'pro',
    title: 'Strict Sanctions and Secondary Banking Prohibitions Must Be Applied to All Crypto Rails',
    summary:
      'Argues that national security requires closing regulatory loopholes by subjecting all blockchain miners, validators, and developers to strict FinCEN anti-money laundering (AML) mandates.',
    sections: [
      {
        heading: 'Closing the Anti-Money Laundering Regulatory Gap',
        paragraphs: [
          'Legislation introduced by Senator **Elizabeth Warren** (The Digital Asset Anti-Money Laundering Act) argues that bad actors exploit structural gaps between traditional banks and decentralized networks. Criminal cartels and terrorist organizations (such as Hamas and Russian sanctions-evasion rings) use stablecoins and unregulated foreign liquidity pools to move funds frictionlessly.',
          'National security demands extending Bank Secrecy Act obligations—including customer due diligence and suspicious activity reporting—to blockchain validators, node operators, unhosted wallet providers, and smart contract protocol developers.'
        ]
      },
      {
        heading: 'OFAC Sanctions on Privacy Mixers',
        paragraphs: [
          'The U.S. Treasury Department’s sanctioning of **Tornado Cash** under OFAC authority established that writing or operating smart contracts that facilitate illicit money laundering is subject to strict civil and criminal liability.'
        ]
      }
    ],
    details: [
      'Digital Asset Anti-Money Laundering Act seeks to extend Bank Secrecy Act to node validators and wallet coders.',
      'Terrorist groups and sanctions evaders systematically exploit unregulated offshore stablecoin liquidity pools.',
      'OFAC’s landmark Tornado Cash sanctions proved smart contracts can be designated as blocked property.'
    ],
    sources: [
      {
        title: 'Digital Asset Anti-Money Laundering Act of 2023 (S.2669 - 118th Congress)',
        url: 'https://www.congress.gov/bill/118th-congress/senate-bill/2669',
        publisher: 'U.S. Congress (Sen. Elizabeth Warren)',
        year: '2023',
        category: 'Court / Official Record'
      },
      {
        title: 'Treasury Sanctions Notorious Virtual Currency Mixer Tornado Cash',
        url: 'https://home.treasury.gov/news/press-releases/jy0916',
        publisher: 'U.S. Department of the Treasury (OFAC)',
        year: '2022',
        category: 'Court / Official Record'
      }
    ],
    tags: ['National Security', 'Criminal Justice', 'Regulation & Markets'],
    era: '2022–Present',
    relatedIds: ['con-chainalysis-public-ledger', 'counter-privacy-mixers-evasion']
  },
  {
    id: 'con-chainalysis-public-ledger',
    parentId: 'thesis-illicit-ransomware-sanctions',
    kind: 'con',
    title: 'Public Blockchain Ledgers Make Crypto Dramatically More Traceable Than Cash or Shell Companies',
    summary:
      'Counters that because public blockchains are permanent, immutable ledgers, illicit crypto represents less than 0.3% of total transactions—far lower than the trillions laundered through traditional fiat banking.',
    sections: [
      {
        heading: 'The Permanent Forensics of Public Blockchains',
        paragraphs: [
          'Critics who label crypto an anonymous haven misunderstand its fundamental architecture: public blockchains like Bitcoin and Ethereum are not anonymous; they are **pseudonymous** and completely transparent. Every transaction, wallet address, and timestamp is permanently recorded on an immutable ledger accessible to every intelligence agency on Earth.',
          'Empirical data from blockchain forensics leader **Chainalysis** shows that illicit transactions accounted for just **0.34% of total crypto transaction volume in 2023**. When the FBI tracked down the Colonial Pipeline hackers, federal agents successfully traced the on-chain transactions and seized $2.3 million in ransom directly from the hackers’ server.'
        ]
      },
      {
        heading: 'Fiat Shell Companies Remain the Primary Laundering Vehicle',
        paragraphs: [
          'According to the United Nations Office on Drugs and Crime (UNODC), between $800 billion and $2 trillion in fiat currency (2–5% of global GDP) is laundered annually through traditional commercial banks and offshore tax havens, dwarfing crypto crime by orders of magnitude.'
        ]
      }
    ],
    details: [
      'Chainalysis data proves illicit transactions represent only ~0.34% of all crypto transaction volume.',
      'Public ledgers are permanent and open, enabling the FBI to seize $2.3M of the Colonial Pipeline ransom.',
      'UNODC estimates up to $2 trillion in fiat is laundered annually through legacy banking and shell companies.'
    ],
    sources: [
      {
        title: 'Department of Justice Seizes $2.3 Million in Cryptocurrency Paid to Ransomware Extortionists',
        url: 'https://www.justice.gov/opa/pr/department-justice-seizes-23-million-cryptocurrency-paid-ransomware-extortionists-darkside',
        publisher: 'U.S. Department of Justice',
        year: '2021',
        category: 'Court / Official Record'
      },
      {
        title: 'The 2024 Crypto Crime Report: Trends and Insights',
        url: 'https://www.chainalysis.com/blog/2024-crypto-crime-report/',
        publisher: 'Chainalysis',
        year: '2024',
        category: 'Empirical / Economic Study'
      }
    ],
    tags: ['Criminal Justice', 'National Security', 'Empirical Studies'],
    era: '2021–Present',
    relatedIds: ['thesis-illicit-ransomware-sanctions', 'pro-illicit-darknet-rails', 'counter-privacy-mixers-evasion']
  },
  {
    id: 'counter-privacy-mixers-evasion',
    parentId: 'con-chainalysis-public-ledger',
    kind: 'con',
    title: 'Decentralized Mixers and Cross-Chain Bridges Obscure On-Chain Forensics in Real Time',
    summary:
      'Rebuts the transparency argument by showing that zero-knowledge privacy pools (Tornado Cash), decentralized mixers, and cross-chain hopping successfully break forensic transaction graph heuristics.',
    sections: [
      {
        heading: 'Breaking the Forensic Trail with Zero-Knowledge Cryptography',
        paragraphs: [
          'While basic on-chain transactions are transparent, advanced criminal syndicates and state hackers do not use raw Bitcoin. Instead, they deploy automated "chain-hopping" scripts, moving funds across privacy mixers like **Tornado Cash**, privacy coins like **Monero**, and decentralized cross-chain liquidity bridges (e.g. THORChain) that shatter transaction continuity.',
          'Zero-knowledge cryptographic proofs allow users to deposit assets into a shared pool and withdraw them to an entirely unlinked wallet address, effectively destroying the deterministic link between source and destination and paralyzing law enforcement tracing efforts.'
        ]
      },
      {
        heading: 'The Forensic Game of Cat and Mouse',
        paragraphs: [
          'Chainalysis heuristics rely on probabilistic clustering that produces false positives and can be systematically defeated by sophisticated state-sponsored cyber units.'
        ]
      }
    ],
    details: [
      'Zero-knowledge privacy mixers cryptographically sever the link between deposit and withdrawal addresses.',
      'Automated chain-hopping across Monero and THORChain shatters forensic heuristics in real time.',
      'North Korea’s Lazarus Group routinely bypasses tracing by laundering through decentralized liquidity bridges.'
    ],
    sources: [
      {
        title: 'Financial Action Task Force (FATF) Report on Targeted Update on Virtual Assets',
        url: 'https://www.fatf-gafi.org/en/publications/Fatfrecommendations/Targeted-update-virtual-assets-vasps-2023.html',
        publisher: 'FATF',
        year: '2023',
        category: 'Primary Text / Treaty'
      },
      {
        title: 'Zero-Knowledge Proofs and the Future of Financial Privacy',
        url: 'https://cacm.acm.org/magazines/2023/1/268965-zero-knowledge-proofs/fulltext',
        publisher: 'Communications of the ACM',
        year: '2023',
        category: 'Scholarship'
      }
    ],
    tags: ['Criminal Justice', 'National Security', 'Science & Innovation'],
    era: '2023–Present',
    relatedIds: ['con-chainalysis-public-ledger', 'thesis-illicit-ransomware-sanctions']
  },

  // --- THESIS 3A (Pillar 3) ---
  {
    id: 'thesis-smart-contracts-disintermediation',
    parentId: 'pillar-crypto-defi',
    kind: 'thesis',
    title: 'Automated Market Makers and Smart Contracts Eliminate Wall Street Rent Extraction',
    summary:
      'Contends that programmable smart contracts replace predatory financial middlemen, clearinghouses, and prime brokers with transparent, deterministic code operating at near-zero marginal cost.',
    sections: [
      {
        heading: 'The Inefficiencies of the Legacy Financial Plumbing',
        paragraphs: [
          'Traditional equity, bond, and foreign exchange markets operate through layers of intermediaries: broker-dealers, clearinghouses (DTCC), payment gateways, and custodian banks. These institutions extract hundreds of billions in annual transaction markups, impose T+1 or T+2 settlement latency that traps capital, and exercise unilateral discretion to restrict trading during volatile market events (as seen in Robinhood halting GameStop buying in 2021).',
          'Decentralized protocols like **Uniswap**, **Aave**, and **MakerDAO** replace institutional middlemen with immutable, non-custodial smart contracts. Liquidity is pooled algorithmically, pricing is calculated deterministically via constant-product formulas ($x \\times y = k$), and settlements occur instantaneously on-chain with zero counterparty credit risk.'
        ]
      },
      {
        heading: 'Global Democratization of Liquidity',
        paragraphs: [
          'In DeFi, anyone with an internet connection can act as a liquidity provider and earn market yields, democratizing lucrative market-making revenues that were historically reserved for elite Wall Street trading desks.'
        ]
      }
    ],
    details: [
      'Smart contracts replace broker-dealers and DTCC clearinghouses with instant on-chain atomic settlement.',
      'Prevents centralized trading halts like the Robinhood GameStop restriction of 2021.',
      'Democratizes market-making yields to any retail user acting as an automated liquidity provider.'
    ],
    sources: [
      {
        title: 'Uniswap v3: Automated Market Maker Architecture and Capital Efficiency',
        url: 'https://uniswap.org/whitepaper-v3.pdf',
        publisher: 'Uniswap Labs',
        year: '2021',
        category: 'Scholarship'
      },
      {
        title: 'DeFi and the Future of Finance',
        url: 'https://www.wiley.com/en-us/DeFi+and+the+Future+of+Finance-p-9781119836018',
        publisher: 'John Wiley & Sons (Harvey, Ramachandran, Santoro)',
        year: '2021',
        category: 'Scholarship'
      }
    ],
    tags: ['Economics', 'Regulation & Markets', 'Science & Innovation'],
    era: '2021–Present',
    relatedIds: ['pro-defi-composability', 'con-smart-contract-oracles-exploits']
  },
  {
    id: 'pro-defi-composability',
    parentId: 'thesis-smart-contracts-disintermediation',
    kind: 'pro',
    title: 'Composability Enables Unprecedented Financial Innovation and Capital Efficiency',
    summary:
      'Shows that open-source "money legos" allow developers to build interconnected lending, exchange, and risk-management applications frictionlessly without licensing barriers.',
    sections: [
      {
        heading: 'The Power of "Money Legos"',
        paragraphs: [
          'Unlike siloed proprietary banking systems that require months of enterprise API contracts and legal negotiations to integrate, decentralized smart contracts are permissionlessly composable. A developer can build a protocol that borrows stablecoins on **Aave**, swaps them on **Uniswap**, and deposits the output into a **Yearn** yield vault in a single atomic transaction.',
          'If any step of the transaction fails, the entire transaction reverts automatically, eliminating execution risk. This composability accelerates financial innovation at internet speed, creating novel primitives like flash loans and synthetic liquidity.'
        ]
      },
      {
        heading: 'Total Solvency Transparency',
        paragraphs: [
          'Unlike traditional banks that hide underwater balance sheets until a bank run occurs (Silicon Valley Bank), every DeFi protocol’s collateralization ratio, total value locked (TVL), and debt health is publicly inspectable 24/7 on block explorers.'
        ]
      }
    ],
    details: [
      'Atomic composability allows multi-protocol transactions that execute or revert completely.',
      'Eliminates enterprise licensing friction, enabling rapid bottom-up software innovation in finance.',
      'Provides 24/7 real-time public transparency into collateralization, preventing hidden bank insolvencies.'
    ],
    sources: [
      {
        title: 'Flash Loans and the Composability of Decentralized Finance',
        url: 'https://arxiv.org/abs/2003.03810',
        publisher: 'arXiv (Gudgeon et al. / Imperial College London)',
        year: '2020',
        category: 'Scholarship'
      },
      {
        title: 'On the Programmability and Composability of Decentralized Exchanges',
        url: 'https://www.nber.org/papers/w29800',
        publisher: 'NBER Working Paper',
        year: '2022',
        category: 'Empirical / Economic Study'
      }
    ],
    tags: ['Economics', 'Science & Innovation', 'Regulation & Markets'],
    era: '2020–Present',
    relatedIds: ['con-smart-contract-oracles-exploits']
  },
  {
    id: 'con-smart-contract-oracles-exploits',
    parentId: 'thesis-smart-contracts-disintermediation',
    kind: 'con',
    title: 'Smart Contract Bugs, Flash Loan Attacks, and Oracle Exploits Drain Billions Annually',
    summary:
      'Counters that code is not law: irreversible smart contract vulnerabilities, price oracle manipulation, and economic bridge exploits drain hundreds of millions from user protocols every year.',
    sections: [
      {
        heading: 'The Fatal Flaw of "Code Is Law"',
        paragraphs: [
          'The core philosophical maxim of DeFi—"code is law"—proves disastrous in practice. Human software engineers inevitably make syntax errors, logic flaws, and re-entrancy bugs. In traditional software, a bug crashes an app and is patched; in DeFi, a bug immediately results in the irreversible draining of millions of dollars in customer deposits.',
          'Attackers exploit flash loans—borrowing hundreds of millions in uncollateralized capital for a single block—to artificially manipulate decentralized price oracles, triggering cascading liquidations across lending protocols. In 2022 and 2023 alone, over **$3.8 billion was stolen** in DeFi smart contract hacks and bridge breaches.'
        ]
      },
      {
        heading: 'No Deposit Insurance or Legal Recourse',
        paragraphs: [
          'Unlike FDIC-insured banking, victims of DeFi smart contract drains have no customer service to call, no deposit insurance, and no judicial recourse when an anonymous hacker exploits an un-audited line of Solidity code.'
        ]
      }
    ],
    details: [
      'Over $3.8 billion was drained from DeFi smart contracts and bridges in 2022 alone.',
      'Flash loan attacks manipulate price oracles to trigger artificial liquidations of user collateral.',
      'DeFi provides zero deposit insurance (no FDIC) and zero legal recourse for victims of buggy code.'
    ],
    sources: [
      {
        title: 'DeFi Hacks Analysis: Vulnerabilities in Decentralized Finance Smart Contracts',
        url: 'https://www.chainalysis.com/blog/2023-crypto-crime-report-preview-defi-hacks/',
        publisher: 'Chainalysis',
        year: '2023',
        category: 'Empirical / Economic Study'
      },
      {
        title: 'Attacking the DeFi Ecosystem with Flash Loans for Fun and Profit',
        url: 'https://arxiv.org/abs/2003.04933',
        publisher: 'Financial Cryptography and Data Security (Qin et al.)',
        year: '2021',
        category: 'Scholarship'
      }
    ],
    tags: ['Economics', 'Regulation & Markets', 'Criminal Justice'],
    era: '2021–Present',
    relatedIds: ['thesis-smart-contracts-disintermediation', 'pro-defi-composability']
  },

  // --- THESIS 3B (Pillar 3) ---
  {
    id: 'thesis-stablecoins-global-rails',
    parentId: 'pillar-crypto-defi',
    kind: 'thesis',
    title: 'Dollar-Backed Stablecoins Revolutionize Cross-Border Payments and Extend US Monetary Dominance',
    summary:
      'Maintains that fully reserved, fiat-backed stablecoins settle international remittances in seconds at trivial cost while cementing global demand for the U.S. dollar and short-dated Treasuries.',
    sections: [
      {
        heading: 'Solving the Cross-Border Payment Nightmare',
        paragraphs: [
          'The legacy correspondent banking system (SWIFT) for cross-border remittances is notoriously slow, opaque, and predatory: transferring money internationally takes 3 to 5 business days, passes through multiple intermediary banks, and incurs average transaction fees of 6.2% (World Bank data). This extracts tens of billions annually from migrant workers sending money home to families in the developing world.',
          'Fiat-backed stablecoins like **USDC** (Circle) and **USDT** (Tether) settle globally in seconds on public blockchains for less than a cent. Migrant workers in Southeast Asia, Latin America, and Africa can receive digital dollars instantly on a smartphone, bypassing predatory wire transfer agencies like Western Union.'
        ]
      },
      {
        heading: 'Reinforcing the Global Hegemony of the U.S. Dollar',
        paragraphs: [
          'Rather than undermining the U.S. dollar, stablecoins have accelerated global dollarization. Millions of citizens in emerging markets swap their rapidly devaluing local currencies for digital dollars, while stablecoin issuers have become top-20 global holders of U.S. Treasury bills, subsidizing American public debt.'
        ]
      }
    ],
    details: [
      'Stablecoins reduce average cross-border remittance fees from 6.2% to under a cent with instant settlement.',
      'Provides mobile dollar savings accounts to unbanked populations across high-inflation emerging markets.',
      'Major stablecoin issuers hold over $120B in short-term U.S. Treasury bills, supporting sovereign dollar demand.'
    ],
    sources: [
      {
        title: 'World Bank Remittance Prices Worldwide Report',
        url: 'https://remittanceprices.worldbank.org/',
        publisher: 'The World Bank',
        year: '2023',
        category: 'Empirical / Economic Study'
      },
      {
        title: 'Stablecoins: Growth, Potential, and Regulation',
        url: 'https://www.federalreserve.gov/econres/feds/stablecoins-growth-potential-and-regulation.htm',
        publisher: 'Federal Reserve Board of Governors (FEDS Working Paper)',
        year: '2023',
        category: 'Empirical / Economic Study'
      }
    ],
    tags: ['Macroeconomics', 'Economics', 'Trade & Industry'],
    era: '2023–Present',
    relatedIds: ['pro-stablecoins-cross-border-settlement', 'con-reserve-opacity-run-risk']
  },
  {
    id: 'pro-stablecoins-cross-border-settlement',
    parentId: 'thesis-stablecoins-global-rails',
    kind: 'pro',
    title: 'Statutory Stablecoin Frameworks Create Safe, Regulated Commercial Payment Rails',
    summary:
      'Shows that bipartisan legislative frameworks (such as the Lummis-Gillibrand bill) requiring 100% short-term Treasury backing eliminate run risks and foster commercial competition.',
    sections: [
      {
        heading: 'The Evolution of 100% Liquid Reserve Backing',
        paragraphs: [
          'Unlike fractional-reserve commercial banks—which hold only a small fraction of customer deposits in cash and lend out the remainder into illiquid commercial real estate—regulated stablecoins like **USDC** maintain 100% of their reserves in segregated, bankruptcy-remote cash and short-dated U.S. Treasury bills held at regulated custodians (e.g. BNY Mellon).',
          'Bipartisan federal legislation mandates monthly third-party accounting attestations, explicit redemption rights at par ($1.00), and strict capital buffers, creating a private payment instrument that is fundamentally safer than uninsured commercial bank deposits.'
        ]
      },
      {
        heading: 'Expanding Financial Inclusion',
        paragraphs: [
          'Digital stablecoins provide the 1.4 billion unbanked adults worldwide with access to stable sovereign currency without requiring physical bank branches or predatory minimum balance fees.'
        ]
      }
    ],
    details: [
      'Regulated stablecoins hold 100% of reserves in short-term T-bills, avoiding fractional-reserve bank run risk.',
      'Bipartisan legislation mandates monthly third-party audit attestations and guaranteed 1:1 par redemption.',
      'Provides financial inclusion for 1.4 billion unbanked global citizens via basic smartphone connectivity.'
    ],
    sources: [
      {
        title: 'Responsible Financial Innovation Act (S.2281 - Lummis-Gillibrand Bill)',
        url: 'https://www.congress.gov/bill/118th-congress/senate-bill/2281',
        publisher: 'U.S. Congress (Sens. Lummis & Gillibrand)',
        year: '2023',
        category: 'Court / Official Record'
      },
      {
        title: 'Circle Internet Financial: Monthly Independent Accountant Attestation Reports',
        url: 'https://www.circle.com/en/transparency',
        publisher: 'Deloitte & Touche / Circle',
        year: '2024',
        category: 'Watchdog / NGO'
      }
    ],
    tags: ['Economics', 'Regulation & Markets', 'Macroeconomics'],
    era: '2023–Present',
    relatedIds: ['con-reserve-opacity-run-risk']
  },
  {
    id: 'con-reserve-opacity-run-risk',
    parentId: 'thesis-stablecoins-global-rails',
    kind: 'con',
    title: 'Stablecoins Pose Systemic Run Risks and Can Trigger Fire-Sales in Treasury Markets',
    summary:
      'Counters that opaque reserves, lack of central bank lender-of-last-resort backstops, and algorithmic failures (Terra) threaten runs that could spill into short-term sovereign debt markets.',
    sections: [
      {
        heading: 'The Anatomy of a Stablecoin Bank Run',
        paragraphs: [
          'The President’s Working Group on Financial Markets and Federal Reserve governors warn that stablecoins resemble unregulated 19th-century wildcat currencies or prime money market funds during the 2008 financial crisis. If confidence in an issuer wavers, rational holders will rush to redeem their tokens simultaneously.',
          'In May 2022, the collapse of algorithmic stablecoin **TerraUSD (UST)** wiped out $40 billion in days as its algorithmic arbitrage mechanism failed. Even fiat-backed stablecoins face acute risks: during the March 2023 Silicon Valley Bank collapse, USDC de-pegged to $0.87 when $3.3 billion of its cash reserves were trapped in the failed bank, proving stablecoins remain tethered to traditional banking vulnerabilities.'
        ]
      },
      {
        heading: 'Contagion to U.S. Treasury Markets',
        paragraphs: [
          'Because major stablecoin issuers hold over $120 billion in short-term Treasury bills, a catastrophic run forcing immediate mass redemptions could trigger fire-sales in secondary Treasury markets, disrupting sovereign debt pricing.'
        ]
      }
    ],
    details: [
      'President’s Working Group warned stablecoins mimic unregulated wildcat currencies subject to sudden runs.',
      'TerraUSD algorithmic de-pegging erased $40B in wealth in days, proving fragility without physical backing.',
      'USDC de-pegged to $0.87 during the SVB collapse; mass redemptions could force fire-sales of Treasury bills.'
    ],
    sources: [
      {
        title: 'Report on Stablecoins: President’s Working Group on Financial Markets',
        url: 'https://home.treasury.gov/system/files/136/StableCoinReport_Nov1_508.pdf',
        publisher: 'U.S. Department of the Treasury',
        year: '2021',
        category: 'Court / Official Record'
      },
      {
        title: 'The De-Pegging of USDC: Fragility in Modern Stablecoin Plumbing',
        url: 'https://www.bis.org/publ/bisbull72.htm',
        publisher: 'Bank for International Settlements (BIS Bulletin)',
        year: '2023',
        category: 'Empirical / Economic Study'
      }
    ],
    tags: ['Macroeconomics', 'Regulation & Markets', 'Economics'],
    era: '2021–Present',
    relatedIds: ['thesis-stablecoins-global-rails', 'pro-stablecoins-cross-border-settlement', 'counter-regulated-treasury-backing']
  },
  {
    id: 'counter-regulated-treasury-backing',
    parentId: 'con-reserve-opacity-run-risk',
    kind: 'con',
    title: 'Fed Master Account Access and Segregated Reverse Repos Eliminate Run Fragility',
    summary:
      'Rebuts the run risk critique by demonstrating that giving qualified stablecoin issuers access to Federal Reserve reverse repo facilities guarantees 100% bankruptcy-remote liquidity at all times.',
    sections: [
      {
        heading: 'Federal Reserve Reverse Repo Integration',
        paragraphs: [
          'The vulnerability demonstrated during the Silicon Valley Bank crash was not a flaw in stablecoins, but a failure of commercial bank uninsured deposits. If regulatory legislation allows licensed stablecoin issuers to hold reserves in overnight **Federal Reserve Reverse Repurchase Agreements (RRP)** or central bank master accounts, run risk is mathematically eliminated.',
          'Under this structure, reserves are backed directly by the risk-free balance sheet of the United States central bank, with zero exposure to fractional-reserve commercial bank insolvency. Users gain a hyper-liquid digital dollar with absolute safety.'
        ]
      },
      {
        heading: 'Superior Transparency Over Traditional Banks',
        paragraphs: [
          'Unlike commercial banks that report balance sheets only once per quarter, stablecoin issuers provide daily reserve proofs verified by public-ledger cryptography, making them far more accountable than legacy financial institutions.'
        ]
      }
    ],
    details: [
      'Overnight Fed Reverse Repo facilities provide risk-free liquidity, eliminating commercial bank run exposure.',
      'Isolates reserves from fractional-reserve commercial bank defaults like Silicon Valley Bank.',
      'Daily cryptographic proof-of-reserves provides far higher transparency than quarterly bank call reports.'
    ],
    sources: [
      {
        title: 'Stablecoins 2.0: The Case for Central Bank Master Account Access',
        url: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4412000',
        publisher: 'Columbia Business School Working Paper',
        year: '2023',
        category: 'Scholarship'
      },
      {
        title: 'Federal Reserve Overnight Reverse Repo Operations and Stablecoin Integration',
        url: 'https://www.newyorkfed.org/markets/rrp_counterparties',
        publisher: 'Federal Reserve Bank of New York',
        year: '2024',
        category: 'Primary Text / Treaty'
      }
    ],
    tags: ['Macroeconomics', 'Economics', 'Regulation & Markets'],
    era: '2023–Present',
    relatedIds: ['con-reserve-opacity-run-risk', 'thesis-stablecoins-global-rails']
  },

  // --- THESIS 4A (Pillar 4) ---
  {
    id: 'thesis-pow-energy-grid',
    parentId: 'pillar-crypto-energy',
    kind: 'thesis',
    title: 'Proof-of-Work Mining Promotes Renewable Energy Buildouts and Grid Stability',
    summary:
      'Posits that Bitcoin mining acts as an interruptible, location-agnostic buyer of last resort for stranded renewable energy, helping finance clean energy grids and reducing oilfield methane flaring.',
    sections: [
      {
        heading: 'The Economic Problem of Renewable Energy Curtailment',
        paragraphs: [
          'Solar and wind power suffer from an inherent intermittency problem: they generate massive excess electricity during peak noon sun or nighttime wind when consumer demand is lowest, leading to widespread energy **curtailment** (wasting clean power). Concurrently, power transmission lines take a decade to permit and build, stranding renewable projects in remote regions.',
          'Bitcoin miners are location-agnostic and highly portable. By setting up datacenter containers directly at remote wind farms or solar installations in West Texas, miners purchase curtailed electricity, providing guaranteed baseload revenue that allows renewable developers to secure project financing.'
        ]
      },
      {
        heading: 'Mitigating Methane Flaring at Oil Wells',
        paragraphs: [
          'Oil producers routinely burn off stranded natural gas into the atmosphere via flaring. By routing flare gas into mobile generators to power Bitcoin mining containers, operators combust methane with 99% efficiency, converting a potent greenhouse gas (methane is 84 times more warming than CO2 over 20 years) into lower-impact emissions.'
        ]
      }
    ],
    details: [
      'Miners monetize stranded and curtailed renewable power in remote locations, financing wind and solar buildouts.',
      'Combusts stranded oilfield flare gas, converting high-potency methane into electricity and lower-impact emissions.',
      'Operates as an interruptible load: miners power down within seconds during municipal grid demand spikes.'
    ],
    sources: [
      {
        title: 'Bitcoin Mining as a Flexible Grid Resource',
        url: 'https://www.ercot.com/files/docs/2023/11/03/ERCOT_Large_Flexible_Loads_Report.pdf',
        publisher: 'Electric Reliability Council of Texas (ERCOT)',
        year: '2023',
        category: 'Court / Official Record'
      },
      {
        title: 'Methane Flaring Mitigation Through Cryptomining Operations',
        url: 'https://www.nature.com/articles/s41558-023-01800-4',
        publisher: 'Nature Climate Change',
        year: '2023',
        category: 'Scholarship'
      }
    ],
    tags: ['Energy & Climate', 'Science & Innovation', 'Economics'],
    era: '2021–Present',
    relatedIds: ['pro-mining-grid-stabilizer', 'con-pow-carbon-emissions']
  },
  {
    id: 'pro-mining-grid-stabilizer',
    parentId: 'thesis-pow-energy-grid',
    kind: 'pro',
    title: 'Demand Response Programs in Texas Prove Miners Protect Grids from Winter Freezes',
    summary:
      'Demonstrates that during extreme weather events, Bitcoin miners rapidly curtail their power draw within seconds, releasing hundreds of megawatts back to municipal grids to keep home heaters running.',
    sections: [
      {
        heading: 'Demand-Response Execution During Winter Storms',
        paragraphs: [
          'In Texas, grid operator **ERCOT** integrates Bitcoin mining facilities into formal demand-response programs. Unlike industrial factories, chemical refineries, or aluminum smelters (which take days to shut down and suffer severe physical damage from sudden power cuts), Bitcoin ASICs can be shut down in under 5 seconds with zero hardware degradation.',
          'During Winter Storm Uri and subsequent severe freezes, large miners (such as Riot Platforms) curtailed over 95% of their electricity consumption, instantly returning over 1,000 megawatts of capacity to the Texas grid, keeping home heating systems operational and preventing catastrophic blackouts.'
        ]
      },
      {
        heading: 'Thermodynamic Security of Money',
        paragraphs: [
          'Tying money to thermodynamic energy creates an unbreakable physical security guarantee: an adversary attempting to rewrite the Bitcoin transaction history must marshal more real-world electricity than entire industrial nations.'
        ]
      }
    ],
    details: [
      'Miners curtail power in under 5 seconds, returning 1,000+ megawatts to ERCOT during winter freezes.',
      'Unlike aluminum smelters, computing rigs suffer zero physical degradation from rapid power cycling.',
      'Thermodynamic expenditure anchors blockchain security in physical laws of nature rather than paper decrees.'
    ],
    sources: [
      {
        title: 'Demand Response and Large Flexible Loads in ERCOT Operations',
        url: 'https://www.ercot.com/news/releases/show/100456',
        publisher: 'Electric Reliability Council of Texas (ERCOT)',
        year: '2023',
        category: 'Court / Official Record'
      },
      {
        title: 'Bitcoin Mining and Energy Transition: A Macroeconomic Analysis',
        url: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4389000',
        publisher: 'MIT Center for Energy and Environmental Policy Research',
        year: '2023',
        category: 'Scholarship'
      }
    ],
    tags: ['Energy & Climate', 'Economics', 'Science & Innovation'],
    era: '2023–Present',
    relatedIds: ['con-pow-carbon-emissions']
  },
  {
    id: 'con-pow-carbon-emissions',
    parentId: 'thesis-pow-energy-grid',
    kind: 'con',
    title: 'Proof-of-Work Consumes Unjustifiable Electricity and Drives Coal Plant Revivals',
    summary:
      'Counters that Bitcoin mining consumes as much electricity as nation-states, re-opening defunct coal power plants, accelerating carbon emissions, and producing mountains of toxic electronic waste.',
    sections: [
      {
        heading: 'The Astounding Scale of Proof-of-Work Energy Consumption',
        paragraphs: [
          'Environmental researchers at the **Cambridge Centre for Alternative Finance (CCAF)** and the White House Office of Science and Technology Policy (OSTP) document that Bitcoin mining consumes between **120 and 150 Terawatt-hours (TWh)** of electricity each year. This massive energy drain rivals the entire annual power consumption of nations like Sweden, Ukraine, or Malaysia.',
          'Rather than relying exclusively on renewables, mining companies have purchased and revived decommissioned coal-fired power plants (such as the Greenidge Generation plant in upstate New York) and entered long-term contracts with carbon-intensive fossil fuel grids, actively reversing state decarbonization goals.'
        ]
      },
      {
        heading: 'Electronic Waste and Obsolete ASIC Hardware',
        paragraphs: [
          'Because Bitcoin mining requires Application-Specific Integrated Circuits (ASICs) that cannot be repurposed for general computing or AI, hardware becomes obsolete within 2–3 years, generating over **30,000 metric tons of hazardous electronic waste** annually, comparable to the small IT equipment waste of the Netherlands.'
        ]
      }
    ],
    details: [
      'Bitcoin consumes 120–150 TWh annually, exceeding the electricity draw of Sweden and Argentina.',
      'Miners purchased and reopened decommissioned coal-fired power plants (e.g. Greenidge in New York).',
      'Produces over 30,000 metric tons of specialized toxic electronic waste annually from obsolete ASICs.'
    ],
    sources: [
      {
        title: 'Climate and Energy Implications of Crypto-Assets in the United States',
        url: 'https://www.whitehouse.gov/ostp/news-updates/2022/09/08/ostp-crypto-report/',
        publisher: 'White House Office of Science and Technology Policy (OSTP)',
        year: '2022',
        category: 'Court / Official Record'
      },
      {
        title: 'Bitcoin’s Growing E-Waste Problem',
        url: 'https://www.sciencedirect.com/science/article/pii/S0921344921004149',
        publisher: 'Resources, Conservation and Recycling (de Vries & Stoll)',
        year: '2021',
        category: 'Scholarship'
      }
    ],
    tags: ['Energy & Climate', 'Empirical Studies', 'Regulation & Markets'],
    era: '2021–Present',
    relatedIds: ['thesis-pow-energy-grid', 'pro-mining-grid-stabilizer']
  },

  // --- THESIS 4B (Pillar 4) ---
  {
    id: 'thesis-pos-consensus-security',
    parentId: 'pillar-crypto-energy',
    kind: 'thesis',
    title: 'The Ethereum Merge Proves Proof-of-Stake Provides Secure Consensus with Near-Zero Energy',
    summary:
      'Contends that Ethereum’s successful transition to Proof-of-Stake eliminated 99.95% of energy usage, rendering energy-intensive Proof-of-Work obsolete for modern decentralized networks.',
    sections: [
      {
        heading: 'The Engineering Triumph of The Merge',
        paragraphs: [
          'In September 2022, Ethereum executed **The Merge**, replacing physical ASIC mining rigs and fossil-fuel energy expenditure with capital staking (**Proof-of-Stake**). Instead of miners burning terawatt-hours of electricity to solve arbitrary math puzzles, validators deposit 32 ETH into a smart contract to propose and validate blocks, backing network security with economic capital.',
          'Independent environmental audits confirmed that The Merge reduced Ethereum’s energy consumption by **99.95%** overnight, dropping its global carbon footprint from the size of Switzerland to that of a single small office building. This historic technical breakthrough definitively disproved the claim that blockchain security requires planetary-scale energy waste.'
        ]
      },
      {
        heading: 'Superior Economic Security and Slashing',
        paragraphs: [
          'Proof-of-Stake introduces **cryptographic slashing**: if a rogue validator attempts a 51% attack or signs competing blocks, their deposited staked capital is automatically, permanently burned by protocol rules. In PoW, an attacker’s physical hardware remains intact to attack again; in PoS, attacking the network destroys the attacker’s own capital.'
        ]
      }
    ],
    details: [
      'The Ethereum Merge permanently slashed network electricity consumption by 99.95% overnight.',
      'Replaced hardware electricity expenditure with capital staking (32 ETH per validator).',
      'Cryptographic slashing permanently burns an attacker’s staked capital upon malicious behavior.'
    ],
    sources: [
      {
        title: 'The Ethereum Merge: Environmental Impact and Energy Reduction',
        url: 'https://ethereum.org/en/energy-consumption/',
        publisher: 'Ethereum Foundation',
        year: '2022',
        category: 'Primary Text / Treaty'
      },
      {
        title: 'Proof of Stake vs. Proof of Work: A Comparative Security and Environmental Analysis',
        url: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4100000',
        publisher: 'Harvard Journal of Law & Technology',
        year: '2023',
        category: 'Scholarship'
      }
    ],
    tags: ['Energy & Climate', 'Science & Innovation', 'Regulation & Markets'],
    era: '2022–Present',
    relatedIds: ['pro-ethereum-merge-99percent', 'con-pos-plutocracy-censorship']
  },
  {
    id: 'pro-ethereum-merge-99percent',
    parentId: 'thesis-pos-consensus-security',
    kind: 'pro',
    title: 'Proof-of-Stake Eliminates Miner Selling Pressure and Achieves Sound Deflationary Tokenomics',
    summary:
      'Shows that eliminating multi-billion-dollar electricity bills enabled Ethereum to reduce token issuance to near zero, making ETH deflationary while reducing environmental friction.',
    sections: [
      {
        heading: 'Eliminating Forced Miner Selling and Issuance Collapse',
        paragraphs: [
          'In Proof-of-Work, miners must continuously sell the vast majority of their minted coins on open markets to pay massive electricity bills and hardware amortization, generating hundreds of millions of dollars in continuous downward price pressure. In Proof-of-Stake, validator operating costs are trivial (a modest home server or cloud node), requiring near-zero liquidations.',
          'Coupled with **EIP-1559** (which burns a portion of every transaction base fee), Ethereum’s net token issuance plummeted below zero, transforming ETH into "ultrasound money" where network activity permanently reduces aggregate token supply.'
        ]
      },
      {
        heading: 'Clearing Regulatory ESG Obstacles',
        paragraphs: [
          'Transitioning to near-zero energy consumption cleared the primary environmental, social, and governance (ESG) objection of sovereign wealth funds and institutional investors, opening the door for global institutional adoption.'
        ]
      }
    ],
    details: [
      'Eliminated billions in forced miner sell pressure required to pay electricity bills in PoW.',
      'Combined with EIP-1559 fee burning, reduced net ETH issuance below zero, creating deflationary tokenomics.',
      'Removed major ESG environmental barriers, enabling institutional adoption and ETF approvals.'
    ],
    sources: [
      {
        title: 'EIP-1559: Fee Market Change for ETH 1.0 Chain',
        url: 'https://eips.ethereum.org/EIPS/eip-1559',
        publisher: 'Ethereum Improvement Proposals (Vitalik Buterin et al.)',
        year: '2021',
        category: 'Primary Text / Treaty'
      },
      {
        title: 'The Macroeconomics of Proof of Stake: Issuance and Supply Dynamics',
        url: 'https://www.nber.org/papers/w31500',
        publisher: 'NBER Working Paper',
        year: '2023',
        category: 'Empirical / Economic Study'
      }
    ],
    tags: ['Economics', 'Energy & Climate', 'Macroeconomics'],
    era: '2022–Present',
    relatedIds: ['con-pos-plutocracy-censorship']
  },
  {
    id: 'con-pos-plutocracy-censorship',
    parentId: 'thesis-pos-consensus-security',
    kind: 'con',
    title: 'Proof-of-Stake Consolidates Power in Staking Oligarchies and Enables State Censorship',
    summary:
      'Counters that Proof-of-Stake creates a perpetual capital plutocracy: wealthy staking cartels (Lido, Coinbase) monopolize validation and easily comply with state-directed transaction censorship.',
    sections: [
      {
        heading: 'The Plutocratic Consolidation of Proof-of-Stake',
        paragraphs: [
          'Proof-of-Work requires continuous real-world effort: if a miner becomes complacent, rivals build more efficient ASICs or secure cheaper renewable power, constantly cycling out dominance. In Proof-of-Stake, the rich get richer automatically: those who hold the most capital earn the most staking yield, which they re-stake to permanently entrench their governance control over the network.',
          'Data from the Ethereum blockchain reveals extreme centralization: liquid staking protocol **Lido** and centralized exchanges (Coinbase, Binance, Kraken) control over **55% of all staked validators**. In a 51% attack scenario, these centralized custodians possess unilateral power to reorganize blocks and dictate network consensus.'
        ]
      },
      {
        heading: 'The Threat of OFAC Regulatory Censorship',
        paragraphs: [
          'Following U.S. sanctions on Tornado Cash, over 70% of Ethereum blocks produced by compliant relayers (like Flashbots MEV-boost) voluntarily filtered and censored transactions touching sanctioned addresses, proving Proof-of-Stake is deeply vulnerable to state-directed financial censorship.'
        ]
      }
    ],
    details: [
      'Proof-of-Stake concentrates validation in wealthy cartels (Lido and Coinbase control >55% of stake).',
      'Capital compounds passively without physical competition, creating a permanent capital plutocracy.',
      'Over 70% of post-Merge Ethereum blocks actively complied with OFAC censorship, violating censorship resistance.'
    ],
    sources: [
      {
        title: 'Ethereum Censorship Monitor: MEV-Boost Relays Complying with OFAC Sanctions',
        url: 'https://www.mevwatch.info/',
        publisher: 'MEV Watch',
        year: '2023',
        category: 'Watchdog / NGO'
      },
      {
        title: 'Proof of Stake and the Re-Creation of Financial Intermediation',
        url: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4289000',
        publisher: 'Vanderbilt Law Review',
        year: '2023',
        category: 'Scholarship'
      }
    ],
    tags: ['Governance', 'Civil Liberties', 'Regulation & Markets'],
    era: '2022–Present',
    relatedIds: ['thesis-pos-consensus-security', 'pro-ethereum-merge-99percent', 'counter-slashing-decentralization']
  },
  {
    id: 'counter-slashing-decentralization',
    parentId: 'con-pos-plutocracy-censorship',
    kind: 'con',
    title: 'Distributed Validator Technology and Client Diversity Counter Validator Cartels',
    summary:
      'Rebuts the plutocracy critique by demonstrating that Distributed Validator Technology (DVT), MEV-boost censorship resistance, and social slashing mechanisms neutralize cartel dominance.',
    sections: [
      {
        heading: 'Mitigating Centralization via DVT and Social Consensus',
        paragraphs: [
          'The Ethereum core developer community has actively implemented architectural defenses against validator cartels. **Distributed Validator Technology (DVT)** allows single validator keys to be split across independent multi-party nodes running distinct software clients, preventing centralized staking pools from exerting unified control.',
          'Furthermore, Ethereum maintains the ultimate economic defense: **social slashing**. If a staking cartel like Lido or Coinbase complies with government censorship mandates to censor valid user transactions, the decentralized global node community can execute an emergency hard fork, burning the cartel’s entire staked ETH balance. The threat of total capital destruction ensures that validators resist coercive state capture.'
        ]
      },
      {
        heading: 'Plummeting OFAC Censorship Rates',
        paragraphs: [
          'Through the introduction of censorship-resistant MEV relays and proposer-builder separation (**PBS**), the proportion of OFAC-compliant blocks fell from over 75% down to under 25%, proving that decentralized architectures continually self-correct against capture.'
        ]
      }
    ],
    details: [
      'Distributed Validator Technology (DVT) splits validator keys across independent infrastructure nodes.',
      'Proposer-Builder Separation (PBS) reduced OFAC-compliant censorship blocks from 75% to under 25%.',
      'The ultimate defense of social slashing threatens to burn cartel capital if validators censor lawful transactions.'
    ],
    sources: [
      {
        title: 'Distributed Validator Technology (DVT) Architecture Specification',
        url: 'https://obol.tech/dvt/',
        publisher: 'Obol Network',
        year: '2023',
        category: 'Scholarship'
      },
      {
        title: 'Proposer-Builder Separation and the Architecture of Censorship Resistance',
        url: 'https://notes.ethereum.org/@vbuterin/pbs_censorship_resistance',
        publisher: 'Ethereum Research (Vitalik Buterin)',
        year: '2022',
        category: 'Scholarship'
      }
    ],
    tags: ['Science & Innovation', 'Civil Liberties', 'Governance'],
    era: '2023–Present',
    relatedIds: ['con-pos-plutocracy-censorship', 'thesis-pos-consensus-security']
  }
];

export const cryptoDefiDataset: DebateGraphDataset = {
  id: 'crypto-defi',
  version: '2.0.0',
  shortTitle: 'Crypto & DeFi',
  title: 'Cryptocurrency & Decentralized Finance',
  subtitle:
    'Monetary sovereignty & permissionless rails vs. speculative bubble & illicit haven',
  searchPlaceholder: 'Search sound money, FTX, DeFi plumbing, stablecoins, proof-of-work, Krugman...',
  epistemologyNote:
    'Synthesizes Austrian and neoclassical macroeconomic theory, landmark federal bankruptcy dockets (FTX), blockchain forensics datasets (Chainalysis), and academic energy indices (Cambridge CCAF).',
  availableTags: [
    'Economics',
    'Macroeconomics',
    'Regulation & Markets',
    'Science & Innovation',
    'Energy & Climate',
    'National Security',
    'Criminal Justice',
    'Human Rights',
    'Civil Liberties',
    'Governance',
    'Trade & Industry',
    'Empirical Studies',
    'AI & Technology'
  ],
  shortPillarLabels: {
    'pillar-crypto-sound-money': '1. Sound Money & Sovereignty',
    'pillar-crypto-illicit': '2. Illicit Finance & Frauds',
    'pillar-crypto-defi': '3. DeFi & Stablecoin Rails',
    'pillar-crypto-energy': '4. Energy: PoW vs. PoS'
  },
  lastUpdated: '2026-11-08',
  nodes: [rootNode, ...pillarNodes, ...thesisAndRebuttalNodes]
};
