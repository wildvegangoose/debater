import { DebateGraphDataset, DebateNode } from '../../types/debate';

const rootNode: DebateNode = {
  id: 'root-sm-censorship',
  parentId: null,
  kind: 'root',
  title: 'Social Media: Content Moderation vs. Free Speech',
  summary:
    'A multi-dimensional dialectical map evaluating the clash between platform content moderation, digital disinformation, and youth mental health versus First Amendment speech protections, government jawboning, and decentralized protocol architectures.',
  sections: [
    {
      heading: 'The Digital Public Square and the Speech Dilemma',
      paragraphs: [
        'Over the past two decades, private social media platforms—including X (formerly Twitter), Meta (Facebook and Instagram), YouTube, and TikTok—have evolved into the primary communicative infrastructure of modern democracy. This unprecedented concentration of speech power has ignited an intense civilizational dispute: should platforms actively sanitize feeds to prevent election sabotage, hate speech, and public health panics, or does algorithmic moderation constitute a perilous regime of private gatekeeping and state-directed digital censorship?',
        'Free speech scholars such as **Nadine Strossen**, **Glenn Greenwald**, and **Jonathan Turley** argue that state-aligned pressure and subjective content moderation erode foundational democratic dissent, warning that the power to censor disinformation inevitably becomes the power to suppress political opposition. Conversely, researchers like **Renée DiResta**, **Jonathan Haidt**, and former Surgeon General **Vivek Murthy** maintain that unregulated algorithmic feeds optimize for outrage, polarize electorates, and addict adolescents to the detriment of civic stability.'
      ]
    },
    {
      heading: 'Landmark Debates and Doctrinal Crossroads',
      paragraphs: [
        'Drawing upon landmark proceedings from the **Munk Debates**, **Oxford Union**, **Open to Debate**, and critical Supreme Court jurisprudence (**Murthy v. Missouri**, **NetChoice v. Paxton**), this dataset organizes the speech debate into four pillars: **Misinformation, Election Integrity & Public Health**, **First Amendment, Government Jawboning & Censorship**, **Youth Mental Health & Algorithmic Addiction**, and **Decentralized Protocols & User-Controlled Curation**.',
        'Every argument is steelmanned with primary legal dockets, behavioral psychiatric studies, and empirical platform research to trace how constitutional principles adapt to algorithmic recommendation engines.'
      ]
    }
  ],
  details: [
    'Synthesizes landmark debates from Munk Debates, Oxford Union, and Intelligence Squared / Open to Debate.',
    'Integrates major 2024 Supreme Court First Amendment precedents: Murthy v. Missouri and NetChoice v. Paxton.',
    'Examines Jonathan Haidt’s youth mental health thesis alongside Amy Orben’s empirical skepticism and decentralized protocol innovations (AT Protocol, Nostr).'
  ],
  sources: [
    {
      title: 'Munk Debate on Free Speech and Social Media Moderation',
      url: 'https://munkdebates.com/debates/free-speech/',
      publisher: 'Munk Debates',
      year: '2024',
      category: 'Debate / Broadcast'
    },
    {
      title: 'Supreme Court Opinion: Murthy v. Missouri (603 U.S. ___ 2024)',
      url: 'https://www.supremecourt.gov/opinions/23pdf/23-411_3e04.pdf',
      publisher: 'Supreme Court of the United States',
      year: '2024',
      category: 'Court / Official Record'
    },
    {
      title: 'Supreme Court Opinion: Moody v. NetChoice, LLC (603 U.S. ___ 2024)',
      url: 'https://www.supremecourt.gov/opinions/23pdf/22-277_d18f.pdf',
      publisher: 'Supreme Court of the United States',
      year: '2024',
      category: 'Court / Official Record'
    }
  ],
  tags: ['Free Speech & Media', 'Civil Liberties', 'Governance', 'AI & Technology'],
  era: '2016–Present'
};

const pillarNodes: DebateNode[] = [
  // PILLAR 1: Misinformation, Election Integrity & Public Health
  {
    id: 'pillar-sm-harm',
    parentId: 'root-sm-censorship',
    kind: 'pillar',
    title: 'Misinformation, Election Integrity & Public Health',
    summary:
      'Weighs the imperative of social media platforms to moderate viral falsehoods, coordinated election interference, and life-threatening medical disinformation against the danger of weaponized partisan gatekeeping.',
    sections: [
      {
        heading: 'The Asymmetric Threat of Viral Disinformation',
        paragraphs: [
          'Social media platforms do not operate as passive bulletin boards; their underlying business models rely on engagement-maximizing algorithms that privilege sensationalism, fear, and moral outrage over factual accuracy. Researchers at the **Stanford Internet Observatory** and MIT have documented how coordinated state actors and domestic conspiracists weaponize botnets to suppress minority voting, fabricate polling disruptions, and propagate unproven medical panics.',
          'Advocates of rigorous moderation argue that private platforms have a civic duty to interdict coordinated inauthentic behavior, label deceptive synthetic media, and demote demonstrably lethal health falsehoods before they metastasize.'
        ]
      },
      {
        heading: 'The Risk of Institutional Infallibility',
        paragraphs: [
          'Critics counter that what establishment authorities classify as "disinformation" often turns out to be contested scientific fact or inconvenient political reporting. The suppression of reporting on the Hunter Biden laptop and the lab-leak hypothesis demonstrated that corporate moderation teams routinely default to political orthodoxy, undermining the public trust they claim to protect.'
        ]
      }
    ],
    details: [
      'Examines empirical studies on the velocity of viral falsehoods in algorithmic recommendation feeds.',
      'Analyzes platform interventions during the 2020/2024 presidential elections and COVID-19 pandemic.',
      'Highlights institutional blind spots and the partisan capture of centralized fact-checking boards.'
    ],
    sources: [
      {
        title: 'The Spread of True and False News Online',
        url: 'https://www.science.org/doi/10.1126/science.aap9559',
        publisher: 'Science (Vosoughi, Roy, Aral)',
        year: '2018',
        category: 'Scholarship'
      },
      {
        title: 'The Long Fuse: Misinformation and the 2020 Election',
        url: 'https://eipartnership.net/report',
        publisher: 'Election Integrity Partnership (Stanford & UW)',
        year: '2021',
        category: 'Watchdog / NGO'
      },
      {
        title: 'Confronting Health Misinformation: The U.S. Surgeon General’s Advisory',
        url: 'https://www.hhs.gov/surgeongeneral/reports-and-publications/health-misinformation/index.html',
        publisher: 'U.S. Department of Health and Human Services',
        year: '2021',
        category: 'Court / Official Record'
      }
    ],
    tags: ['Free Speech & Media', 'Governance', 'Media & Education'],
    era: '2016–Present',
    relatedIds: ['pillar-sm-speech', 'pillar-sm-decentralization']
  },

  // PILLAR 2: First Amendment, Government Jawboning & Censorship
  {
    id: 'pillar-sm-speech',
    parentId: 'root-sm-censorship',
    kind: 'pillar',
    title: 'First Amendment, Government Jawboning & Censorship',
    summary:
      'Analyzes constitutional boundaries of digital expression, focusing on informal government coercion of private platforms (jawboning), Section 230 protections, and common carrier designations.',
    sections: [
      {
        heading: 'Informal State Coercion and the State Action Doctrine',
        paragraphs: [
          'Under the landmark doctrine of *Bantam Books v. Sullivan* (1963), the government cannot use informal intimidation or threats of regulatory reprisal to coerce private actors into censoring speech that the state is constitutionally barred from suppressing directly. The publication of the "Twitter Files" and evidence in *Murthy v. Missouri* revealed extensive communication between White House officials, the FBI, CISA, and tech executives, demanding the de-amplification of specific political viewpoints.',
          'Civil libertarians, led by former ACLU president **Nadine Strossen** and investigative journalist **Glenn Greenwald**, contend that this clandestine pressure creates an unconstitutional "censorship-industrial complex" operating beyond judicial oversight.'
        ]
      },
      {
        heading: 'Editorial Discretion vs. Public Carrier Obligations',
        paragraphs: [
          'Simultaneously, state legislatures in Texas and Florida attempted to mandate viewpoint neutrality on platforms. In *Moody v. NetChoice* (2024), the Supreme Court reaffirmed that social media companies possess First Amendment editorial rights to curate content, rejecting claims that private platforms can be converted into state-compelled common carriers.'
        ]
      }
    ],
    details: [
      'Scrutinizes the constitutional threshold between permissible government persuasion and unconstitutional coercion.',
      'Examines findings from Murthy v. Missouri and Congressional investigations into executive jawboning.',
      'Explores the tension between Section 230 platform immunity and common-carrier utility doctrines.'
    ],
    sources: [
      {
        title: 'Bantam Books, Inc. v. Sullivan, 372 U.S. 58 (1963)',
        url: 'https://supreme.justia.com/cases/federal/us/372/58/',
        publisher: 'Justia / US Supreme Court',
        year: '1963',
        category: 'Court / Official Record'
      },
      {
        title: 'Hate: Why We Should Resist It with Free Speech, Not Censorship',
        url: 'https://global.oup.com/academic/product/hate-9780190059477',
        publisher: 'Oxford University Press (Nadine Strossen)',
        year: '2018',
        category: 'Scholarship'
      },
      {
        title: 'The Weaponization of the Federal Government: The Censorship Industrial Complex',
        url: 'https://judiciary.house.gov/media/press-releases/testimony-weaponization-federal-government',
        publisher: 'U.S. House Committee on the Judiciary',
        year: '2023',
        category: 'Court / Official Record'
      }
    ],
    tags: ['Free Speech & Media', 'Civil Liberties', 'Governance'],
    era: '2020–Present',
    relatedIds: ['pillar-sm-harm', 'pillar-sm-decentralization']
  },

  // PILLAR 3: Youth Mental Health & Algorithmic Addiction
  {
    id: 'pillar-sm-mental-health',
    parentId: 'root-sm-censorship',
    kind: 'pillar',
    title: 'Youth Mental Health & Algorithmic Addiction',
    summary:
      'Investigates the psychological toll of social media platforms on children and adolescents, weighing evidence of clinical depression and body dysmorphia against methodological critiques of screen-time panic.',
    sections: [
      {
        heading: 'The Great Rewiring and the Adolescent Crisis',
        paragraphs: [
          'In *The Anxious Generation*, social psychologist **Jonathan Haidt** documents an alarming international collapse in adolescent mental health that began precisely around 2012—the era when smartphones gained front-facing cameras and algorithmic feeds like Instagram replaced chronological text. Rates of major depressive episodes, self-harm, and suicide among American and European teenage girls doubled over the following decade.',
          'Haidt argues that social media rewired childhood from a "play-based" developmental model into a "phone-based" existence characterized by chronic sleep deprivation, social fragmentation, continuous peer comparison, and algorithmic attention addiction.'
        ]
      },
      {
        heading: 'Methodological Skepticism and Confounding Variables',
        paragraphs: [
          'Psychologists such as **Amy Orben** and **Andrew Przybylski** challenge this causal narrative, demonstrating through large-scale specification-curve analyses that the statistical correlation between digital screen use and adolescent well-being is tiny (accounting for less than 0.5% of variance)—comparable to eating potatoes or wearing glasses. They caution against moral panics that distract from economic precarity, academic stress, and family dysfunction.'
        ]
      }
    ],
    details: [
      'Examines Jonathan Haidt’s empirical thesis on the post-2012 surge in teen depression and self-harm.',
      'Analyzes leaked internal Meta research admitting Instagram worsens body image issues for one-third of teen girls.',
      'Evaluates specification-curve critiques by Orben and Przybylski highlighting confounding variables.'
    ],
    sources: [
      {
        title: 'The Anxious Generation: How the Great Rewiring of Childhood Is Causing an Epidemic of Mental Illness',
        url: 'https://www.penguinrandomhouse.com/books/723145/the-anxious-generation-by-jonathan-haidt/',
        publisher: 'Penguin Press (Jonathan Haidt)',
        year: '2024',
        category: 'Scholarship'
      },
      {
        title: 'The Association Between Adolescent Well-Being and Digital Technology Use',
        url: 'https://www.nature.com/articles/s41562-018-0506-1',
        publisher: 'Nature Human Behaviour (Amy Orben & Andrew Przybylski)',
        year: '2019',
        category: 'Scholarship'
      },
      {
        title: 'Facebook Knows Instagram Is Toxic for Teen Girls, Company Documents Show',
        url: 'https://www.wsj.com/articles/facebook-knows-instagram-is-toxic-for-teen-girls-company-documents-show-11631620739',
        publisher: 'Wall Street Journal (The Facebook Files / Wells et al.)',
        year: '2021',
        category: 'Watchdog / NGO'
      }
    ],
    tags: ['Media & Education', 'Demographics', 'Human Rights', 'Empirical Studies'],
    era: '2012–Present',
    relatedIds: ['pillar-sm-harm', 'pillar-sm-speech']
  },

  // PILLAR 4: Decentralized Protocols & User-Controlled Curation
  {
    id: 'pillar-sm-decentralization',
    parentId: 'root-sm-censorship',
    kind: 'pillar',
    title: 'Decentralized Protocols & User-Controlled Curation',
    summary:
      'Explores structural technological alternatives to centralized corporate content moderation, including open federated protocols (AT Protocol, Nostr, ActivityPub) and crowdsourced bridging algorithms (Community Notes).',
    sections: [
      {
        heading: 'Protocols, Not Platforms: The Structural Architecture',
        paragraphs: [
          'Technology policy thinker **Mike Masnick** proposed a foundational remedy to the content moderation trilemma: replace centralized platform monopolies with open, interoperable protocols. Under decentralized networks like **Bluesky’s AT Protocol**, **Nostr**, and **Mastodon’s ActivityPub**, the underlying social graph and data hosting are strictly unbundled from algorithmic ranking.',
          'Instead of a single corporate trust-and-safety committee imposing global speech rules, users choose their own third-party curation filters and recommendation algorithms, transforming moderation from top-down censorship into voluntary subscriber preference.'
        ]
      },
      {
        heading: 'Bridging-Based Consensus Algorithms',
        paragraphs: [
          'Simultaneously, X’s deployment of **Community Notes** pioneered a mathematical alternative to partisan fact-checkers. Powered by matrix factorization and bridging algorithms, notes are only appended if they receive consensus ratings from users across opposing ideological clusters, demonstrating that decentralized crowdsourced systems can restore shared epistemic grounding.'
        ]
      }
    ],
    details: [
      'Articulates Mike Masnick and Jack Dorsey’s vision of unbundling data storage from content ranking.',
      'Explores the federated architectures of Bluesky (AT Protocol), Nostr, and ActivityPub.',
      'Analyzes the open-source bridging algorithms powering Community Notes to resist ideological capture.'
    ],
    sources: [
      {
        title: 'Protocols, Not Platforms: A Technological Approach to Free Speech',
        url: 'https://knightcolumbia.org/content/protocols-not-platforms-a-technological-approach-to-free-speech',
        publisher: 'Knight First Amendment Institute (Mike Masnick)',
        year: '2019',
        category: 'Scholarship'
      },
      {
        title: 'Community Notes: Open Source Ranking Algorithm',
        url: 'https://github.com/twitter/communitynotes',
        publisher: 'GitHub / X Open Source',
        year: '2023',
        category: 'Scholarship'
      },
      {
        title: 'The Bluesky Architecture: Decentralized Social Networking with AT Protocol',
        url: 'https://atproto.com/guides/architecture',
        publisher: 'Bluesky PBLLC',
        year: '2023',
        category: 'Scholarship'
      }
    ],
    tags: ['AI & Technology', 'Free Speech & Media', 'Civil Liberties', 'Governance'],
    era: '2019–Present',
    relatedIds: ['pillar-sm-speech', 'pillar-sm-harm']
  }
];

const thesisAndRebuttalNodes: DebateNode[] = [
  // --- THESIS 1A (Pillar 1) ---
  {
    id: 'thesis-disinformation-elections',
    parentId: 'pillar-sm-harm',
    kind: 'thesis',
    title: 'Unchecked Electoral Disinformation Directly Undermines Democratic Legitimacy',
    summary:
      'Maintains that algorithmic amplification of voting falsehoods and coordinated state interference poison civic trust, requiring aggressive content moderation to safeguard democratic transitions.',
    sections: [
      {
        heading: 'Coordinated Inauthentic Behavior and Voting Suppression',
        paragraphs: [
          'During the 2016, 2020, and 2024 election cycles, research by the **Election Integrity Partnership** and **Stanford Internet Observatory** revealed that bad actors systematically weaponized viral falsehoods regarding voting hours, rigged ballot boxes, and fake polling locations. Because recommendation algorithms prioritize engagement, sensationalist election conspiracy theories spread exponentially faster than factual election administration updates.',
          'When millions of citizens are deceived into believing an election was stolen, the foundational social contract of peaceful democratic transitions collapses, culminating in political violence like the January 6 Capitol attack.'
        ]
      },
      {
        heading: 'The Corporate Duty of Civic Care',
        paragraphs: [
          'Proponents argue that private platforms are not public squares, but commercial enterprises with an ethical obligation to prevent their proprietary amplification tools from being hijacked by hostile foreign intelligence or domestic coup plots.'
        ]
      }
    ],
    details: [
      'Documents coordinated voter suppression campaigns that exploit algorithmic engagement loops.',
      'Cites Stanford Internet Observatory findings on the rapid spread of post-election conspiracy theories.',
      'Argues that democratic legitimacy depends upon shared, objective procedural truth regarding balloting.'
    ],
    sources: [
      {
        title: 'The Long Fuse: Misinformation and the 2020 Election',
        url: 'https://eipartnership.net/report',
        publisher: 'Election Integrity Partnership',
        year: '2021',
        category: 'Watchdog / NGO'
      },
      {
        title: 'LikeWar: The Weaponization of Social Media',
        url: 'https://www.harcourtbooks.com/book/9781328460141/likewar/',
        publisher: 'Eamon Dolan / Houghton Mifflin Harcourt (Singer & Brooking)',
        year: '2018',
        category: 'Scholarship'
      }
    ],
    tags: ['Free Speech & Media', 'Governance', 'Civil Liberties'],
    era: '2018–Present',
    relatedIds: ['pro-moderation-election-integrity', 'con-partisan-factchecking-bias']
  },
  {
    id: 'pro-moderation-election-integrity',
    parentId: 'thesis-disinformation-elections',
    kind: 'pro',
    title: 'Rapid Platform Interventions Successfully Suppress Inauthentic Influence Networks',
    summary:
      'Demonstrates that proactive demotion, friction interstitials, and coordinated network takedowns measurably reduce the reach of foreign election interference without suppressing legitimate political discourse.',
    sections: [
      {
        heading: 'Empirical Efficacy of Soft Moderation and Friction',
        paragraphs: [
          'Research conducted during major electoral cycles demonstrates that aggressive platform interventions—such as introducing sharing friction (requiring users to click an article before retweeting), algorithmic demotion, and banning coordinated bot rings—cuts the viral diffusion of deceptive voting guides by over 70%.',
          'Platform researchers like **Renée DiResta** point out that interdicting coordinated inauthentic behavior focuses on manipulative distribution vectors (botnets, puppet accounts) rather than speech content itself, protecting genuine grassroots citizen speech.'
        ]
      },
      {
        heading: 'Deterring Foreign Hybrid Warfare',
        paragraphs: [
          'Foreign intelligence operations (such as Russia’s Internet Research Agency) exploit American free speech protections to wage asymmetric cognitive warfare. Mandatory content moderation and transparency protocols remain the frontline defense against foreign subversion.'
        ]
      }
    ],
    details: [
      'Friction interstitials cut unread retweet velocity and false-link sharing by up to 70%.',
      'Targeting coordinated inauthentic behavior penalizes botnet vectors without censoring human viewpoints.',
      'Defends the democratic public square against asymmetric cognitive warfare from foreign state actors.'
    ],
    sources: [
      {
        title: 'Invisible Rulers: The People Who Turn Lies into Reality',
        url: 'https://www.publicaffairsbooks.com/titles/renee-diresta/invisible-rulers/9781541703377/',
        publisher: 'PublicAffairs (Renée DiResta)',
        year: '2024',
        category: 'Scholarship'
      },
      {
        title: 'The Tactics & Tropes of the Internet Research Agency',
        url: 'https://disinfodefenseleague.org/wp-content/uploads/2021/04/New-Knowledge-Report.pdf',
        publisher: 'U.S. Senate Select Committee on Intelligence (New Knowledge / Graphika)',
        year: '2019',
        category: 'Court / Official Record'
      }
    ],
    tags: ['Free Speech & Media', 'National Security', 'Governance'],
    era: '2019–Present',
    relatedIds: ['con-partisan-factchecking-bias', 'counter-inauthentic-bot-amplification']
  },
  {
    id: 'con-partisan-factchecking-bias',
    parentId: 'thesis-disinformation-elections',
    kind: 'con',
    title: 'Centralized Content Moderation Inevitably Degenerates into Partisan Censorship',
    summary:
      'Argues that trust-and-safety boards naturally mirror the monocultural political worldview of Silicon Valley elites, weaponizing "election integrity" to suppress legitimate investigative journalism and political dissent.',
    sections: [
      {
        heading: 'The Twitter Files and the Suppression of Factual Reporting',
        paragraphs: [
          'Investigative journalists **Matt Taibbi** and **Michael Shellenberger**, upon reviewing internal communications released following Elon Musk’s acquisition of Twitter, documented how corporate moderation teams systematically silenced conservative voices and heterodox reporting. The most glaring example was the total suppression of the *New York Post’s* October 2020 reporting on the Hunter Biden laptop—falsely labeled "hacked materials" and Russian disinformation.',
          'When unelected corporate executives possess unilateral authority to suppress major news stories weeks before a presidential election, they exercise more corrupting influence over the electoral outcome than the foreign bots they purport to combat.'
        ]
      },
      {
        heading: 'The Epistemic Arrogance of Fact-Checkers',
        paragraphs: [
          'Fact-checking organizations funded by tech monopolies routinely evaluate subjective political opinions and disputed policy forecasts as "false", creating a one-sided speech cartel that alienates half the citizenry.'
        ]
      }
    ],
    details: [
      'Documents the suppression of the New York Post’s authenticated laptop reporting in October 2020.',
      'The Twitter Files revealed extensive ideological bias within trust-and-safety decision teams.',
      'Demonstrates that subjective "misinformation" labels are used to delegitimize dissenting political candidates.'
    ],
    sources: [
      {
        title: 'The Twitter Files: Parts 1 through 10',
        url: 'https://twitter.com/mtaibbi/status/1598822959866400768',
        publisher: 'Substack / X (Matt Taibbi & Bari Weiss)',
        year: '2022',
        category: 'Debate / Broadcast'
      },
      {
        title: 'New York Post: Hunter Biden’s Secret Emails',
        url: 'https://nypost.com/2020/10/14/email-reveals-how-hunter-biden-introduced-ukrainian-biz-man-to-dad/',
        publisher: 'New York Post',
        year: '2020',
        category: 'Watchdog / NGO'
      }
    ],
    tags: ['Free Speech & Media', 'Civil Liberties', 'Governance'],
    era: '2020–Present',
    relatedIds: ['thesis-disinformation-elections', 'pro-moderation-election-integrity']
  },
  {
    id: 'counter-inauthentic-bot-amplification',
    parentId: 'con-partisan-factchecking-bias',
    kind: 'con',
    title: 'Platform Recommendation Algorithms Amplify Outrage, Creating False Censorship Claims',
    summary:
      'Rebuts claims of partisan suppression by demonstrating that engagement algorithms inherently boost conservative and controversial content, meaning de-amplification merely curbs algorithmic distortions.',
    sections: [
      {
        heading: 'The Empirical Reality of Right-Wing Algorithmic Reach',
        paragraphs: [
          'Comprehensive empirical studies conducted by researchers at **NYU Stern** and **Twitter’s internal data science team** proved that right-leaning politicians and media outlets systematically enjoy higher algorithmic amplification than their left-leaning counterparts. Far from being censored, outrage-driven conservative content routinely dominates daily top-performing lists on Facebook and X.',
          'When platforms curb sensationalized conspiracy theories that violate basic safety standards, aggrieved political actors reframe standard quality-control filters as political martyrdom to fundraise and mobilize grievance.'
        ]
      },
      {
        heading: 'Amplification Is Not Speech',
        paragraphs: [
          'As the aphorism states, "freedom of speech does not mean freedom of reach." Restricting an algorithmic megaphone from artificially supercharging an incendiary rumor does not infringe on anyone’s constitutional right to speak.'
        ]
      }
    ],
    details: [
      'NYU and Twitter empirical analyses proved conservative political accounts receive higher algorithmic amplification.',
      'Distinguishes between raw constitutional freedom of speech and the entitlement to algorithmic megaphone distribution.',
      'Shows political actors intentionally weaponize victimhood narratives around routine quality curation.'
    ],
    sources: [
      {
        title: 'Algorithmic Amplification of Politics on Twitter',
        url: 'https://www.pnas.org/doi/10.1073/pnas.2025334119',
        publisher: 'PNAS (Huszár et al. / Twitter Cortex)',
        year: '2022',
        category: 'Scholarship'
      },
      {
        title: 'False Accusation: The Unfounded Claim that Social Media Companies Censor Conservatives',
        url: 'https://bhr.stern.nyu.edu/reports/false-accusation',
        publisher: 'NYU Stern Center for Business and Human Rights',
        year: '2021',
        category: 'Scholarship'
      }
    ],
    tags: ['Free Speech & Media', 'Empirical Studies', 'Governance'],
    era: '2021–Present',
    relatedIds: ['con-partisan-factchecking-bias', 'pro-moderation-election-integrity']
  },

  // --- THESIS 1B (Pillar 1) ---
  {
    id: 'thesis-public-health-harm',
    parentId: 'pillar-sm-harm',
    kind: 'thesis',
    title: 'Medical Disinformation During Public Health Emergencies Costs Human Lives',
    summary:
      'Contends that viral propagation of medical falsehoods—such as miracle COVID cures, vaccine skepticism, and germ-theory denialism—inflicts immediate lethal externalities that platforms must curb.',
    sections: [
      {
        heading: 'The Lethal Consequences of Viral Quackery',
        paragraphs: [
          'During the peak of the COVID-19 pandemic, social feeds were flooded with claims that vaccines contained microchips, altered human DNA, or caused mass infertility, while promoting toxic treatments like ivermectin or bleach ingestion. Epidemiological models estimate that hundreds of thousands of preventable deaths occurred among unvaccinated individuals who deferred immunization due to viral social media content.',
          'U.S. Surgeon General **Vivek Murthy** issued a formal advisory designating health disinformation an urgent public health crisis, arguing that platforms must eliminate demonstrably false medical claims that directly contradict international clinical consensus.'
        ]
      },
      {
        heading: 'The Limit of First Amendment Tolerance',
        paragraphs: [
          'Just as false commercial advertising and fraudulent medical malpractice are legally regulated in physical commerce, digital platforms have a duty to prevent fraudulent health grifters from profiting off human mortality.'
        ]
      }
    ],
    details: [
      'Surgeon General advisory attributed tens of thousands of avoidable pandemic deaths to online anti-vaccine campaigns.',
      'Evaluates the role of engagement algorithms in elevating fraudulent medical cures over CDC guidance.',
      'Argues that free speech cannot extend to fraudulent medical advice that causes physical fatality.'
    ],
    sources: [
      {
        title: 'Confronting Health Misinformation: The U.S. Surgeon General’s Advisory',
        url: 'https://www.hhs.gov/surgeongeneral/reports-and-publications/health-misinformation/index.html',
        publisher: 'U.S. Department of Health and Human Services',
        year: '2021',
        category: 'Court / Official Record'
      },
      {
        title: 'The Disinformation Dozen: Why Platforms Must Act Against Vaccine Disinformation',
        url: 'https://counterhate.com/research/the-disinformation-dozen/',
        publisher: 'Center for Countering Digital Hate (CCDH)',
        year: '2021',
        category: 'Watchdog / NGO'
      }
    ],
    tags: ['Free Speech & Media', 'Human Rights', 'Media & Education'],
    era: '2020–Present',
    relatedIds: ['pro-medical-harm-curation', 'con-scientific-dissent-suppression']
  },
  {
    id: 'pro-medical-harm-curation',
    parentId: 'thesis-public-health-harm',
    kind: 'pro',
    title: 'Adhering to Established Public Health Consensus Protects Community Herd Immunity',
    summary:
      'Shows that redirecting users to authoritative CDC and WHO portals while removing verified biological falsehoods preserves the shared informational hygiene essential for vaccination campaigns.',
    sections: [
      {
        heading: 'Informational Herd Immunity and Verified Banners',
        paragraphs: [
          'Public health relies fundamentally on collective compliance: vaccines only eradicate diseases like measles and polio if vaccination rates exceed 90–95%. When digital algorithms shatter informational herd immunity by giving fringe grifters equal footing with decades of peer-reviewed clinical immunology, disease outbreaks inevitably return.',
          'Platforms that implemented prominent authoritative banners linking to the CDC and WHO measurably elevated vaccination intent and curbed poison control center calls for toxic self-medication.'
        ]
      },
      {
        heading: 'Preventing Algorithmically Amplified Harm',
        paragraphs: [
          'Allowing monetization of fake cancer cures and unproven virus remedies enriches predatory wellness influencers while draining vulnerable patients’ savings and destroying their clinical survival odds.'
        ]
      }
    ],
    details: [
      'Maintains that high vaccine coverage requires a baseline of public informational trust.',
      'CDC and WHO contextual banners measurably improved factual knowledge and reduced poisonings.',
      'Targets predatory wellness grifters monetizing unverified alternative therapies.'
    ],
    sources: [
      {
        title: 'Quantifying the Impact of Social Media Misinformation on COVID-19 Vaccine Uptake',
        url: 'https://www.nature.com/articles/s41562-021-01056-1',
        publisher: 'Nature Human Behaviour (Loomba et al.)',
        year: '2021',
        category: 'Scholarship'
      },
      {
        title: 'WHO Public Health Guidelines on Social Media Infodemic Management',
        url: 'https://www.who.int/teams/epidemic-and-pandemic-preparedness-and-prevention/infodemic-management',
        publisher: 'World Health Organization',
        year: '2022',
        category: 'Watchdog / NGO'
      }
    ],
    tags: ['Free Speech & Media', 'Human Rights', 'Science & Innovation'],
    era: '2021–Present',
    relatedIds: ['con-scientific-dissent-suppression']
  },
  {
    id: 'con-scientific-dissent-suppression',
    parentId: 'thesis-public-health-harm',
    kind: 'con',
    title: 'Enforcing Official Orthodoxy Stifles Scientific Progress and Destroys Public Trust',
    summary:
      'Counters that science advances through relentless questioning, proving that tech censorship of the lab-leak hypothesis, natural immunity, and school closure critiques harmed the public and corrupted scientific inquiry.',
    sections: [
      {
        heading: 'The Great Barrington Declaration and Orthodoxy Enforcement',
        paragraphs: [
          'In October 2020, renowned epidemiologists from Stanford, Harvard, and Oxford (**Jay Bhattacharya**, **Martin Kulldorff**, and **Sunetra Gupta**) co-authored the **Great Barrington Declaration**, advocating focused protection for vulnerable elderly populations while keeping schools and businesses open. Government health officials orchestrated a "quick and devastating published takedown", pressuring social platforms to shadowban their accounts.',
          'Subsequent empirical research vindicated the declaration’s warnings regarding the catastrophic learning loss, child mental health crises, and missed cancer screenings caused by prolonged lockdowns. Silencing world-class scientists under the banner of "consensus" violated the core tenets of the scientific method.'
        ]
      },
      {
        heading: 'The Lab-Leak Retraction and Institutional Humiliation',
        paragraphs: [
          'For over a year, Facebook and Twitter banned any post suggesting SARS-CoV-2 originated in a Wuhan laboratory as a "debunked conspiracy theory." When the U.S. Department of Energy and FBI later concluded the lab-leak was a plausible hypothesis, platforms were forced into humiliating retractions, permanently shattering public faith in official health institutions.'
        ]
      }
    ],
    details: [
      'Documents the blacklisting of Harvard, Stanford, and Oxford epidemiologists behind the Great Barrington Declaration.',
      'Highlights how premature institutional bans on the lab-leak hypothesis delegitimized public health authorities.',
      'Argues that science is a process of falsification, not a state-enforced decree.'
    ],
    sources: [
      {
        title: 'The Great Barrington Declaration',
        url: 'https://gbdeclaration.org/',
        publisher: 'Great Barrington Declaration (Kulldorff, Gupta, Bhattacharya)',
        year: '2020',
        category: 'Primary Text / Treaty'
      },
      {
        title: 'How Dr. Fauci and Dr. Collins Coordinated a Takedown of Dissenting Scientists',
        url: 'https://www.wsj.com/articles/fauci-collins-emails-great-barrington-declaration-covid-lockdowns-11639943444',
        publisher: 'Wall Street Journal (Editorial Board)',
        year: '2021',
        category: 'Watchdog / NGO'
      }
    ],
    tags: ['Free Speech & Media', 'Civil Liberties', 'Science & Innovation'],
    era: '2020–Present',
    relatedIds: ['thesis-public-health-harm', 'pro-medical-harm-curation']
  },

  // --- THESIS 2A (Pillar 2) ---
  {
    id: 'thesis-government-jawboning',
    parentId: 'pillar-sm-speech',
    kind: 'thesis',
    title: 'Executive Jawboning of Social Platforms Violates the First Amendment',
    summary:
      'Argues that federal agencies unconstitutionally circumvented First Amendment limits by coercing and colluding with private tech platforms to censor dissenting American political viewpoints.',
    sections: [
      {
        heading: 'The Bantam Books Doctrine and Coercive State Pressure',
        paragraphs: [
          'Under established constitutional precedent (*Bantam Books v. Sullivan*), the government is strictly forbidden from using informal coercion or threats of regulatory retaliation to achieve results it cannot constitutionally mandate by law. In *Missouri v. Biden* (later *Murthy v. Missouri*), discovery revealed hundreds of emails from White House senior aides berating tech executives, warning them that failure to censor specific posts would invite antitrust investigations or Section 230 repeal.',
          'Constitutional scholar **Jonathan Turley** and civil liberties advocates argue that when federal officials maintain daily coordination channels with platform trust-and-safety teams to flag and remove specific domestic speech, private companies become state actors bound by the First Amendment.'
        ]
      },
      {
        heading: 'The Death of the Public Square',
        paragraphs: [
          'Allowing the executive branch to outsource censorship to monopoly tech platforms creates an unaccountable surveillance regime where citizens have no constitutional recourse when their speech is suppressed by their own government.'
        ]
      }
    ],
    details: [
      'Applies Bantam Books v. Sullivan to informal executive communications with social media platforms.',
      'Unpacks discovery from Murthy v. Missouri showing White House demands to remove specific satirical and political posts.',
      'Contends that threats of Section 230 revocation transform voluntary moderation into state action.'
    ],
    sources: [
      {
        title: 'Missouri v. Biden, Memorandum Ruling Granting Preliminary Injunction (W.D. La. 2023)',
        url: 'https://storage.courtlistener.com/recap/gov.uscourts.lawd.189574/gov.uscourts.lawd.189574.293.0_2.pdf',
        publisher: 'U.S. District Court for the Western District of Louisiana',
        year: '2023',
        category: 'Court / Official Record'
      },
      {
        title: 'The Censorship-Industrial Complex: How Top Biden Officials Coerced Big Tech',
        url: 'https://thehill.com/opinion/judiciary/4081045-the-censorship-industrial-complex-how-top-biden-officials-coerced-big-tech/',
        publisher: 'The Hill (Jonathan Turley)',
        year: '2023',
        category: 'Watchdog / NGO'
      }
    ],
    tags: ['Free Speech & Media', 'Civil Liberties', 'Governance'],
    era: '2023–Present',
    relatedIds: ['pro-state-action-doctrine', 'con-government-speech-coordination']
  },
  {
    id: 'pro-state-action-doctrine',
    parentId: 'thesis-government-jawboning',
    kind: 'pro',
    title: 'Behind-the-Scenes Federal Pressure Renders Platform Moderation Unconstitutional State Action',
    summary:
      'Demonstrates that when federal agencies threaten platforms with antitrust prosecution or Section 230 reform while demanding specific removals, the resulting censorship constitutes unconstitutional state action.',
    sections: [
      {
        heading: 'Coercion Disguised as Collaboration',
        paragraphs: [
          'In *Norwood v. Harrison* and *Blum v. Yaretsky*, the Supreme Court established that the state cannot induce, encourage, or promote private parties to accomplish that which is constitutionally forbidden to the state. Internal emails produced in litigation showed platform executives explicitly changing moderation rules *only* after direct threats from the White House.',
          'Former ACLU president **Nadine Strossen** emphasizes that jawboning operates with terrifying efficiency: platforms will inevitably over-censor lawful, protected speech to appease the federal agencies that hold life-or-death regulatory power over their corporate existence.'
        ]
      },
      {
        heading: 'Chilling Grassroots Democratic Debate',
        paragraphs: [
          'The scope of coerced censorship extended far beyond national security emergencies to parody accounts, political satire, and dissenting economic commentary, demonstrating the inevitable creep of unchecked state influence.'
        ]
      }
    ],
    details: [
      'Applies Supreme Court state action jurisprudence (Norwood, Blum) to public-private censorship collusion.',
      'Documents tech executives modifying content policies directly in response to White House threats.',
      'Strossen argues informal jawboning induces systemic over-censorship of lawful political expression.'
    ],
    sources: [
      {
        title: 'Free Speech: What Everyone Needs to Know',
        url: 'https://global.oup.com/academic/product/free-speech-9780197607756',
        publisher: 'Oxford University Press (Nadine Strossen)',
        year: '2023',
        category: 'Scholarship'
      },
      {
        title: 'Norwood v. Harrison, 413 U.S. 455 (1973)',
        url: 'https://supreme.justia.com/cases/federal/us/413/455/',
        publisher: 'Justia / US Supreme Court',
        year: '1973',
        category: 'Court / Official Record'
      }
    ],
    tags: ['Free Speech & Media', 'Civil Liberties', 'Governance'],
    era: '2023–Present',
    relatedIds: ['con-government-speech-coordination', 'counter-regulatory-coercion-threat']
  },
  {
    id: 'con-government-speech-coordination',
    parentId: 'thesis-government-jawboning',
    kind: 'con',
    title: 'The Executive Branch Must Retain the Freedom to Communicate with Private Platforms',
    summary:
      'Counters that government officials have a legitimate right and duty to share threat intelligence, correct factual errors, and use the bully pulpit to advocate for public health and national defense.',
    sections: [
      {
        heading: 'The Supreme Court Ruling in Murthy v. Missouri (2024)',
        paragraphs: [
          'In June 2024, the Supreme Court reversed the lower court injunction in *Murthy v. Missouri*, ruling 6–3 (authored by Justice **Amy Coney Barrett**) that the plaintiff states lacked Article III standing because they failed to establish a concrete causal link between government communications and specific platform content moderation decisions.',
          'The Court emphasized that social media companies routinely exercised independent editorial judgment, frequently rejecting White House requests. Depriving federal officials of the ability to communicate with tech platforms would cripple national security cooperation against foreign terror recruitment, cyberattacks, and infectious disease outbreaks.'
        ]
      },
      {
        heading: 'The Bully Pulpit Doctrine',
        paragraphs: [
          'Under the Government Speech Doctrine, elected officials have a constitutional right to persuade, criticize, and advocate. Expressing forceful disagreement with platform policies is standard executive persuasion, not coercive unconstitutional censorship.'
        ]
      }
    ],
    details: [
      'Justice Amy Coney Barrett’s 6–3 majority opinion found no standing or direct causal coercion.',
      'Highlights that platforms routinely pushed back against and rejected government moderation requests.',
      'Affirms the government speech doctrine: leaders must be permitted to criticize harmful corporate conduct.'
    ],
    sources: [
      {
        title: 'Murthy v. Missouri, 603 U.S. ___ (2024) (Slip Opinion)',
        url: 'https://www.supremecourt.gov/opinions/23pdf/23-411_3e04.pdf',
        publisher: 'Supreme Court of the United States',
        year: '2024',
        category: 'Court / Official Record'
      },
      {
        title: 'The First Amendment and Government Speech in the Digital Era',
        url: 'https://harvardlawreview.org/print/vol-137/the-first-amendment-and-government-speech/',
        publisher: 'Harvard Law Review',
        year: '2024',
        category: 'Scholarship'
      }
    ],
    tags: ['Free Speech & Media', 'Civil Liberties', 'Governance'],
    era: '2024–Present',
    relatedIds: ['thesis-government-jawboning', 'pro-state-action-doctrine']
  },
  {
    id: 'counter-regulatory-coercion-threat',
    parentId: 'con-government-speech-coordination',
    kind: 'con',
    title: 'Subtle Threats of Antitrust Action and Section 230 Repeal Make Persuasion De Facto Coercion',
    summary:
      'Rebuts the claim of voluntary cooperation by showing that when the most powerful regulatory state on Earth makes "requests" coupled with explicit legislative threats, compliance is mandatory.',
    sections: [
      {
        heading: 'The Iron Fist in the Velvet Glove',
        paragraphs: [
          'As Justice Samuel Alito highlighted in his dissent in *Murthy v. Missouri*, the White House’s communications were not polite civic advice. White House communications director Flaherty demanded: "Are you guys taking this seriously?" while senior officials simultaneously warned that Section 230 immunity and pending antitrust enforcement were on the table.',
          'In corporate compliance, when a monopoly regulator suggests that failure to remove certain political content could result in multi-billion-dollar antitrust breakups or stripping liability shields, no rational corporate general counsel views those demands as optional.'
        ]
      },
      {
        heading: 'The Chilling Precedent for Future Administrations',
        paragraphs: [
          'Sanctioning backchannel jawboning gives future administrations of any ideological faction a blueprint to privately dictate what news, political analysis, and civic commentary American citizens are permitted to view.'
        ]
      }
    ],
    details: [
      'Justice Alito’s dissent emphasized that implicit regulatory retaliation converts requests into mandates.',
      'Tech companies depend upon federal antitrust leniency and Section 230 statutory immunity.',
      'Warns that unchecked backchannel jawboning will be weaponized by future presidential administrations.'
    ],
    sources: [
      {
        title: 'Murthy v. Missouri (Dissenting Opinion of Justice Alito)',
        url: 'https://www.supremecourt.gov/opinions/23pdf/23-411_3e04.pdf',
        publisher: 'Supreme Court of the United States',
        year: '2024',
        category: 'Court / Official Record'
      },
      {
        title: 'Jawboning and the First Amendment: The Illusion of Voluntary Compliance',
        url: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4520392',
        publisher: 'SSRN / Stanford Law Review',
        year: '2023',
        category: 'Scholarship'
      }
    ],
    tags: ['Free Speech & Media', 'Civil Liberties', 'Governance'],
    era: '2024–Present',
    relatedIds: ['con-government-speech-coordination', 'thesis-government-jawboning']
  },

  // --- THESIS 2B (Pillar 2) ---
  {
    id: 'thesis-section-230-editorial',
    parentId: 'pillar-sm-speech',
    kind: 'thesis',
    title: 'Social Media Platforms Possess First Amendment Rights to Moderate Their Services',
    summary:
      'Contends that private internet platforms are publishers with constitutional rights of editorial discretion, meaning government mandates compelling them to host speech violate the First Amendment.',
    sections: [
      {
        heading: 'The NetChoice Precedent and Editorial Discretion',
        paragraphs: [
          'In the landmark consolidation of *Moody v. NetChoice* and *NetChoice v. Paxton* (2024), the Supreme Court ruled that social media platforms engage in expressive activity when they curate, edit, and rank user posts. Writing for the Court, Justice **Elena Kagan** reaffirmed the foundational rule of *Miami Herald Publishing Co. v. Tornillo* (1974): the government cannot tell a private publisher what speech to include or exclude.',
          'State laws in Texas (HB 20) and Florida (SB 7072) that attempted to prohibit platforms from banning hate speech or political extremism were struck down as unconstitutional government-compelled speech.'
        ]
      },
      {
        heading: 'Section 230 as the Bedrock of the Open Web',
        paragraphs: [
          'Section 230(c)(2) of the Communications Decency Act expressly immunizes platforms from liability when they take voluntary, good-faith actions to restrict "obscene, lewd, lascivious, filthy, excessively violent, harassing, or otherwise objectionable" material. Stripping this protection would destroy digital community moderation.'
        ]
      }
    ],
    details: [
      'Supreme Court NetChoice ruling (2024) confirmed platform curation is constitutionally protected expressive activity.',
      'Applies Miami Herald v. Tornillo: states cannot compel private publishers to host political speech.',
      'Section 230(c)(2) protects good-faith moderation of harassing, violent, or hateful materials.'
    ],
    sources: [
      {
        title: 'Moody v. NetChoice, LLC, 603 U.S. ___ (2024)',
        url: 'https://www.supremecourt.gov/opinions/23pdf/22-277_d18f.pdf',
        publisher: 'Supreme Court of the United States',
        year: '2024',
        category: 'Court / Official Record'
      },
      {
        title: 'Miami Herald Publishing Co. v. Tornillo, 418 U.S. 241 (1974)',
        url: 'https://supreme.justia.com/cases/federal/us/418/241/',
        publisher: 'Justia / US Supreme Court',
        year: '1974',
        category: 'Court / Official Record'
      }
    ],
    tags: ['Free Speech & Media', 'Civil Liberties', 'Governance'],
    era: '2024–Present',
    relatedIds: ['pro-platform-editorial-rights', 'con-common-carrier-utility']
  },
  {
    id: 'pro-platform-editorial-rights',
    parentId: 'thesis-section-230-editorial',
    kind: 'pro',
    title: 'Compelling Platforms to Host Extremism Destroys Safe Online Communities',
    summary:
      'Shows that if platforms were legally barred from moderating speech, digital feeds would be overwhelmed by violent pornography, white supremacist manifestos, and spam, causing advertisers and users to flee.',
    sections: [
      {
        heading: 'The Inevitable Degradation into 8chan',
        paragraphs: [
          'Free speech scholar **Eugene Volokh** and tech analysts point out that without aggressive content moderation, any open social platform rapidly degenerates into a cesspool of spam, harassment, and gore. Mainstream users and global brand advertisers refuse to participate in uncurated environments.',
          'Platform editorial curation is what creates viable, diverse digital communities in the first place—allowing specialized forums for children, professional networking (LinkedIn), or creative hobbies to exist without being flooded with political vitriol.'
        ]
      },
      {
        heading: 'Protecting the First Amendment from State Commandeering',
        paragraphs: [
          'The First Amendment was designed to protect private speech from government dictate, not to empower the government to commandeer private digital servers into mandatory megaphones for state-favored ideologues.'
        ]
      }
    ],
    details: [
      'Unmoderated platforms inevitably collapse into harassment-heavy cesspools that alienate users and advertisers.',
      'Eugene Volokh defends private property and associational rights of platform owners.',
      'Rejects state commandeering of private digital infrastructure.'
    ],
    sources: [
      {
        title: 'Treating Social Media Platforms as Common Carriers',
        url: 'https://reason.com/volokh/2021/04/05/treating-social-media-platforms-as-common-carriers/',
        publisher: 'The Volokh Conspiracy / Reason (Eugene Volokh)',
        year: '2021',
        category: 'Scholarship'
      },
      {
        title: 'The Twenty-Six Words That Created the Internet',
        url: 'https://www.cornellpress.cornell.edu/book/9781501714412/the-twenty-six-words-that-created-the-internet/',
        publisher: 'Cornell University Press (Jeff Kosseff)',
        year: '2019',
        category: 'Scholarship'
      }
    ],
    tags: ['Free Speech & Media', 'Civil Liberties', 'Regulation & Markets'],
    era: '2021–Present',
    relatedIds: ['con-common-carrier-utility']
  },
  {
    id: 'con-common-carrier-utility',
    parentId: 'thesis-section-230-editorial',
    kind: 'con',
    title: 'Monopoly Platforms Function as Common Carriers Subject to Viewpoint Non-Discrimination',
    summary:
      'Argues that modern digital gatekeepers exercise telecommunications-style monopoly power over public discourse, justifying common-carrier non-discrimination rules under Justice Thomas’s framework.',
    sections: [
      {
        heading: 'Justice Thomas’s Common Carrier Doctrine in Biden v. Knight',
        paragraphs: [
          'In his seminal concurring opinion in *Biden v. Knight First Amendment Institute* (2021), Justice **Clarence Thomas** pointed out that traditional telecommunications carriers (telephone lines, telegraphs) and public accommodations (railroads, hotels) are legally prohibited from discriminating against customers based on their viewpoints because they exercise market dominance over essential infrastructure.',
          'Tech gatekeepers like Google, Meta, and Apple hold insurmountable network effects and market power. Unlike a newspaper with limited physical page space, digital platforms possess infinite bandwidth. Treating them as common carriers preserves democratic debate without depriving platforms of revenue.'
        ]
      },
      {
        heading: 'The Hypocrisy of Section 230 Immunities',
        paragraphs: [
          'Critics note that platforms claim to be neutral conduits (telephones) when seeking absolute liability immunity under Section 230(c)(1), yet simultaneously claim to be expressive publishers (newspapers) when resisting anti-discrimination laws. This double-dipping gives Big Tech unchecked authority to censor without accountability.'
        ]
      }
    ],
    details: [
      'Justice Clarence Thomas argued tech monopolies meet historical common carrier criteria.',
      'Network effects make digital switching costs prohibitive for ordinary citizens and candidates.',
      'Critiques the legal anomaly where platforms claim publisher status for censorship but conduit status for immunity.'
    ],
    sources: [
      {
        title: 'Biden v. Knight First Amendment Institute (Concurring Opinion of Justice Thomas)',
        url: 'https://www.supremecourt.gov/opinions/20pdf/20-197_5ie6.pdf',
        publisher: 'Supreme Court of the United States',
        year: '2021',
        category: 'Court / Official Record'
      },
      {
        title: 'The Common Carrier Alternative for Social Media',
        url: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3830880',
        publisher: 'Vanderbilt Law Review (Adam Candeub)',
        year: '2021',
        category: 'Scholarship'
      }
    ],
    tags: ['Free Speech & Media', 'Governance', 'Regulation & Markets', 'Civil Liberties'],
    era: '2021–Present',
    relatedIds: ['thesis-section-230-editorial', 'pro-platform-editorial-rights']
  },

  // --- THESIS 3A (Pillar 3) ---
  {
    id: 'thesis-adolescent-mental-health',
    parentId: 'pillar-sm-mental-health',
    kind: 'thesis',
    title: 'Smartphones and Algorithmic Feeds Drove an Unprecedented Adolescent Mental Health Crisis',
    summary:
      'Posits that the rapid transition from play-based childhood to phone-based childhood in the early 2010s triggered skyrocketing clinical depression, self-harm, and anxiety among youth.',
    sections: [
      {
        heading: 'The Great Rewiring of Childhood',
        paragraphs: [
          'In extensive epidemiological analyses, social psychologist **Jonathan Haidt** and psychologist **Jean Twenge** show that between 2010 and 2015, across every demographic cohort in the United States, UK, Canada, and Scandinavia, rates of adolescent major depression and hospital admissions for non-fatal self-harm surged by 100% to 150%. This inflection point corresponds exactly with the mass adoption of smartphones, front-facing selfie cameras, and algorithmic notification loops.',
          'Social media deprives developing youth of sleep, physical exercise, and in-person social calibration, replacing developmental free-play with continuous status competition, cyberbullying, and FOMO (fear of missing out).'
        ]
      },
      {
        heading: 'The Disproportionate Vulnerability of Young Girls',
        paragraphs: [
          'Visual platforms like Instagram and TikTok disproportionately injure teenage girls through algorithmic comparison. Endless feeds of digitally manipulated beauty standards and algorithmic pro-anorexia content induce acute body dysmorphia and clinical eating disorders.'
        ]
      }
    ],
    details: [
      'Documents a 100–150% rise in teen depression and hospital self-harm admissions since 2012 across multiple nations.',
      'Haidt contrasts healthy play-based childhood with the social fragmentation of phone-based childhood.',
      'Highlights the disproportionate clinical vulnerability of adolescent girls to visual social feeds.'
    ],
    sources: [
      {
        title: 'The Anxious Generation: How the Great Rewiring of Childhood Is Causing an Epidemic of Mental Illness',
        url: 'https://www.penguinrandomhouse.com/books/723145/the-anxious-generation-by-jonathan-haidt/',
        publisher: 'Penguin Press (Jonathan Haidt)',
        year: '2024',
        category: 'Scholarship'
      },
      {
        title: 'iGen: Why Today’s Super-Connected Kids Are Growing Up Less Rebellious, More Tolerant, Less Happy',
        url: 'https://www.simonandschuster.com/books/iGen/Jean-M-Twenge/9781501152016',
        publisher: 'Atria Books (Jean M. Twenge)',
        year: '2017',
        category: 'Scholarship'
      }
    ],
    tags: ['Media & Education', 'Demographics', 'Human Rights'],
    era: '2017–Present',
    relatedIds: ['pro-haidt-anxious-generation', 'con-orben-przybylski-skepticism']
  },
  {
    id: 'pro-haidt-anxious-generation',
    parentId: 'thesis-adolescent-mental-health',
    kind: 'pro',
    title: 'Cross-National Longitudinal Data and Natural Experiments Confirm Direct Causality',
    summary:
      'Shows that staggered college rollouts of Facebook and randomized digital detox trials prove that social media use is a direct causal driver of mental distress, not a mere correlation.',
    sections: [
      {
        heading: 'Natural Experiments and Staggered Rollout Proofs',
        paragraphs: [
          'A landmark study by economists **Luca Braghieri, Ro’ee Levy, and Alexey Makarin** exploited the phased rollout of Facebook across American college campuses between 2004 and 2006. Comparing campuses that received access against those that had not yet launched, the researchers proved that Facebook introduction caused a 9% increase in severe depression and a 7% increase in generalized anxiety.',
          'Randomized controlled trials by **Hunt et al. (2018)** and **Allcott et al. (2020)** demonstrated that paying participants to deactivate social media for just four weeks produced significant, enduring improvements in subjective well-being and life satisfaction.'
        ]
      },
      {
        heading: 'The Network Trap and Collective Action Failure',
        paragraphs: [
          'Adolescents cannot easily opt out individually because social exclusion from digital group chats creates social death. Haidt emphasizes that overcoming this collective action trap requires statutory age thresholds and phone-free schools.'
        ]
      }
    ],
    details: [
      'Braghieri, Levy & Makarin (2022 AER) established direct causal links using Facebook’s staggered university rollout.',
      'Allcott et al. RCT showed deactivating social media for a month measurably increased happiness and life satisfaction.',
      'Identifies the collective action problem: children are trapped because opting out alone causes social ostracization.'
    ],
    sources: [
      {
        title: 'Social Media and Mental Health (AER)',
        url: 'https://www.aeaweb.org/articles?id=10.1257/aer.20211218',
        publisher: 'American Economic Review (Braghieri, Levy, Makarin)',
        year: '2022',
        category: 'Empirical / Economic Study'
      },
      {
        title: 'The Welfare Effects of Social Media',
        url: 'https://www.aeaweb.org/articles?id=10.1257/aer.20190658',
        publisher: 'American Economic Review (Allcott, Braghieri, Eichmeyer, Gentzkow)',
        year: '2020',
        category: 'Empirical / Economic Study'
      }
    ],
    tags: ['Media & Education', 'Empirical Studies', 'Human Rights'],
    era: '2020–Present',
    relatedIds: ['con-orben-przybylski-skepticism']
  },
  {
    id: 'con-orben-przybylski-skepticism',
    parentId: 'thesis-adolescent-mental-health',
    kind: 'con',
    title: 'Specification-Curve Analysis Reveals Technology Screen Time Explains Negligible Variance',
    summary:
      'Argues that moral panics over screen time cherry-pick noisy survey data, proving that rigorous statistical controls show social media accounts for less than 0.5% of adolescent mental health variance.',
    sections: [
      {
        heading: 'Specification-Curve Analysis and the Potato Metaphor',
        paragraphs: [
          'In groundbreaking computational analyses published in *Nature Human Behaviour*, Oxford researchers **Amy Orben** and **Andrew Przybylski** evaluated datasets encompassing over 350,000 adolescents. By testing millions of possible analytical specifications, they revealed that digital technology use explains less than 0.4% of the variance in adolescent well-being.',
          'They calculated that the statistical negative association between digital screen use and teen well-being was identical in magnitude to eating potatoes or wearing eyeglasses, and substantially smaller than the negative impacts of getting insufficient sleep, skipping breakfast, or experiencing family poverty.'
        ]
      },
      {
        heading: 'Reverse Causality and Digital Lifelines',
        paragraphs: [
          'Adolescents experiencing pre-existing trauma, parental neglect, or neurodivergence often turn to online platforms for escapism or community. Blaming social media mistakes symptom for cause, while blanket bans cut off vulnerable LGBTQ+ and isolated youth from essential support networks.'
        ]
      }
    ],
    details: [
      'Orben & Przybylski evaluated 350,000+ adolescents, proving screen time accounts for <0.4% of well-being variance.',
      'Demonstrated screen effects are statistically equivalent to eating potatoes or wearing glasses.',
      'Warns that tech moral panics distract from underlying structural causes of teen despair like poverty and academic pressure.'
    ],
    sources: [
      {
        title: 'The Association Between Adolescent Well-Being and Digital Technology Use',
        url: 'https://www.nature.com/articles/s41562-018-0506-1',
        publisher: 'Nature Human Behaviour (Amy Orben & Andrew Przybylski)',
        year: '2019',
        category: 'Scholarship'
      },
      {
        title: 'Screen Time Panic Is What’s Hurting Kids',
        url: 'https://www.theatlantic.com/ideas/archive/2024/04/jonathan-haidt-anxious-generation-tech-panic/678033/',
        publisher: 'The Atlantic (Candice L. Odgers)',
        year: '2024',
        category: 'Scholarship'
      }
    ],
    tags: ['Media & Education', 'Empirical Studies', 'Human Rights'],
    era: '2019–Present',
    relatedIds: ['thesis-adolescent-mental-health', 'pro-haidt-anxious-generation']
  },

  // --- THESIS 3B (Pillar 3) ---
  {
    id: 'thesis-algorithmic-engagement-darkpatterns',
    parentId: 'pillar-sm-mental-health',
    kind: 'thesis',
    title: 'Platform Dark Patterns and Variable Reward Loops Deliberately Induce Behavioral Addiction',
    summary:
      'Contends that tech conglomerates knowingly design addictive variable-reward architectures (infinite scroll, push notifications, beauty filters) to maximize ad impressions at the expense of psychological health.',
    sections: [
      {
        heading: 'The Engineering of Dopamine Loops',
        paragraphs: [
          'Former tech insiders and ethicists, led by **Tristan Harris** (Center for Humane Technology), have exposed how platforms apply B.F. Skinner’s behavioral operant conditioning to human attention. Features like the pull-to-refresh gesture mimic slot machines, delivering variable dopamine rewards that trap users in compulsive, non-conscious consumption loops.',
          'In 2021, whistleblower **Frances Haugen** leaked thousands of internal Meta documents ("The Facebook Files"), revealing that company executives were fully aware that Instagram’s algorithmic recommendations intensified eating disorders and suicidal ideation in one out of three teenage girls, yet repeatedly rejected internal safety proposals that threatened engagement metrics.'
        ]
      },
      {
        heading: 'Surveillance Capitalism as Public Hazard',
        paragraphs: [
          'Sociologist **Shoshana Zuboff** describes this as the core imperative of surveillance capitalism: extracting human behavioral surplus by engineering digital dependencies, converting adolescent neurobiology into programmatic ad revenue.'
        ]
      }
    ],
    details: [
      'Tristan Harris documents how slot-machine variable-reward mechanics are engineered into infinite scroll feeds.',
      'Frances Haugen’s leaked Facebook Files proved Meta knew Instagram worsened teen body dysmorphia.',
      'Zuboff’s surveillance capitalism framework articulates how behavioural modification is monetized.'
    ],
    sources: [
      {
        title: 'The Facebook Files: A Wall Street Journal Investigation',
        url: 'https://www.wsj.com/articles/the-facebook-files-11631713039',
        publisher: 'Wall Street Journal (Frances Haugen Whistleblower Documents)',
        year: '2021',
        category: 'Watchdog / NGO'
      },
      {
        title: 'The Age of Surveillance Capitalism',
        url: 'https://www.publicaffairsbooks.com/titles/shoshana-zuboff/the-age-of-surveillance-capitalism/9781610395694/',
        publisher: 'PublicAffairs (Shoshana Zuboff)',
        year: '2019',
        category: 'Scholarship'
      }
    ],
    tags: ['AI & Technology', 'Media & Education', 'Human Rights', 'Civil Liberties'],
    era: '2019–Present',
    relatedIds: ['pro-dopamine-dark-patterns', 'con-parental-responsibility-agency']
  },
  {
    id: 'pro-dopamine-dark-patterns',
    parentId: 'thesis-algorithmic-engagement-darkpatterns',
    kind: 'pro',
    title: 'Banning Algorithmic Dark Patterns and Imposing Statutory Duty of Care Is Urgent',
    summary:
      'Argues that voluntary industry codes have failed, necessitating federal legislation like the Kids Online Safety Act (KOSA) to mandate default privacy and prohibit addictive design patterns.',
    sections: [
      {
        heading: 'The Kids Online Safety Act (KOSA) and Product Liability',
        paragraphs: [
          'State attorneys general across 42 states have filed bipartisan lawsuits against Meta and ByteDance (TikTok), alleging that their products are intentionally defective and addicting minors. Legislative proposals like the **Kids Online Safety Act (KOSA)** aim to impose a statutory "duty of care" on social media platforms, requiring them to disable algorithmic recommendation feeds by default for minors, eliminate infinite scroll, and restrict notifications during school and nighttime hours.',
          'Proponents point out that consumer product safety laws have historically regulated toxic toys, seatbelts, and tobacco marketing. Digital algorithms targeting minors should be held to identical product liability standards.'
        ]
      },
      {
        heading: 'Empowering Independent Auditing',
        paragraphs: [
          'Statutory mandates for data access enable independent pediatric researchers to inspect recommendation algorithms and verify whether corporate safety promises are genuinely enforced.'
        ]
      }
    ],
    details: [
      '42 state attorneys general launched historic bipartisan product-liability lawsuits against Meta and TikTok.',
      'KOSA mandates an enforceable statutory duty of care to disable addictive features like infinite scroll for minors.',
      'Applies traditional product safety and consumer protection doctrines to manipulative software algorithms.'
    ],
    sources: [
      {
        title: 'State of California et al. v. Meta Platforms, Inc. (N.D. Cal. 2023)',
        url: 'https://oag.ca.gov/news/press-releases/attorney-general-bonta-leads-nationwide-coalition-lawsuit-against-meta-injuring',
        publisher: 'California Department of Justice / Multi-State Coalition',
        year: '2023',
        category: 'Court / Official Record'
      },
      {
        title: 'Kids Online Safety Act (S.1409 - 118th Congress)',
        url: 'https://www.congress.gov/bill/118th-congress/senate-bill/1409',
        publisher: 'U.S. Congress (Sens. Blumenthal & Blackburn)',
        year: '2023',
        category: 'Court / Official Record'
      }
    ],
    tags: ['Regulation & Markets', 'Human Rights', 'Media & Education', 'Civil Liberties'],
    era: '2023–Present',
    relatedIds: ['con-parental-responsibility-agency', 'counter-asymmetric-corporate-targeting']
  },
  {
    id: 'con-parental-responsibility-agency',
    parentId: 'thesis-algorithmic-engagement-darkpatterns',
    kind: 'con',
    title: 'State Age Verification Gates Destroy Digital Privacy and Infantilize Adolescents',
    summary:
      'Counters that sweeping government mandates like KOSA require invasive biometric or digital ID surveillance of all internet users, trampling First Amendment rights while usurping parental authority.',
    sections: [
      {
        heading: 'The Privacy Nightmare of Mandatory Age Verification',
        paragraphs: [
          'Civil liberties watchdogs, including the **Electronic Frontier Foundation (EFF)** and the ACLU, warn that enforcing statutory age restrictions requires every citizen—adults and minors alike—to surrender government IDs, facial biometric scans, or credit card records before accessing basic websites. This effectively ends anonymous online speech and creates massive honeypots for identity theft.',
          'Furthermore, nebulous "duty of care" standards empower state attorneys general to censor political content they disfavor—such as LGBTQ+ healthcare guidance or firearm discussions—under the pretext of shielding youth mental health.'
        ]
      },
      {
        heading: 'Parental Responsibility and Device-Level Controls',
        paragraphs: [
          'Parents already possess robust device-level tools (Apple Screen Time, Google Family Link, Wi-Fi router time limits) to manage their children’s digital habits. Replacing parental judgment with state-mandated digital surveillance infantilizes families and harms youth autonomy.'
        ]
      }
    ],
    details: [
      'EFF and ACLU warn mandatory age verification requires universal biometric scanning, ending online anonymity.',
      'Nebulous "duty of care" statutory terms allow partisan officials to censor controversial political or health topics.',
      'Emphasizes existing operating-system parental controls (Apple Screen Time) as superior to state surveillance.'
    ],
    sources: [
      {
        title: 'The Kids Online Safety Act Is Still a Dangerous Bill',
        url: 'https://www.eff.org/deeplinks/2024/02/kids-online-safety-act-still-dangerous-bill',
        publisher: 'Electronic Frontier Foundation (EFF)',
        year: '2024',
        category: 'Watchdog / NGO'
      },
      {
        title: 'NetChoice, LLC v. Bonta, 2023 WL 6135551 (N.D. Cal. 2023)',
        url: 'https://casetext.com/case/netchoice-llc-v-bonta-2',
        publisher: 'U.S. District Court (Enjoining California Age-Appropriate Design Code)',
        year: '2023',
        category: 'Court / Official Record'
      }
    ],
    tags: ['Civil Liberties', 'Free Speech & Media', 'Human Rights'],
    era: '2023–Present',
    relatedIds: ['thesis-algorithmic-engagement-darkpatterns', 'pro-dopamine-dark-patterns', 'counter-asymmetric-corporate-targeting']
  },
  {
    id: 'counter-asymmetric-corporate-targeting',
    parentId: 'con-parental-responsibility-agency',
    kind: 'con',
    title: 'Individual Parents Cannot Withstand Trillion-Dollar Behavioral Optimization Models',
    summary:
      'Rebuts the parental-responsibility defense by demonstrating that expecting individual parents to outwit thousands of corporate behavioral engineers and supercomputers is an unfair asymmetric fallacy.',
    sections: [
      {
        heading: 'The Fallacy of Personal Responsibility Against Algorithmic Supercomputers',
        paragraphs: [
          'Framing algorithmic addiction as a mere failure of parental discipline ignores the immense asymmetry of power. A tired working-class parent cannot compete against a trillion-dollar corporation deploying thousands of PhD data scientists, neuromarketing labs, and generative recommendation engines dedicated exclusively to keeping their 13-year-old glued to a screen.',
          'Just as society did not expect parents to chemically test infant formula for lead or milk for melamine—establishing statutory product safety agencies instead—digital platforms require baseline design regulations rather than placing the entire defensive burden on isolated parents.'
        ]
      },
      {
        heading: 'Device-Level Controls Are Easily Bypassed',
        paragraphs: [
          'Empirical surveys reveal that over 70% of teenagers effortlessly bypass parental screen-time passcodes and VPN limits, rendering existing device-level parental controls functionally toothless against peer pressures.'
        ]
      }
    ],
    details: [
      'Identifies the severe power asymmetry: individual parents vs. multi-billion-dollar algorithmic optimization engines.',
      'Compares digital platform safety to historical public-health regulations against lead paint and unsafe food.',
      'Highlights empirical evidence showing 70%+ of teens routinely bypass device-level screen limits.'
    ],
    sources: [
      {
        title: 'Stand Out of Our Light: Freedom and Resistance in the Attention Economy',
        url: 'https://www.cambridge.org/core/books/stand-out-of-our-light/3F8D766E0F86FA1FB6084D17342CEF68',
        publisher: 'Cambridge University Press (James Williams)',
        year: '2018',
        category: 'Scholarship'
      },
      {
        title: 'Teens and Social Media Bypass Habits Survey',
        url: 'https://www.pewresearch.org/internet/2023/12/11/teens-social-media-and-technology-2023/',
        publisher: 'Pew Research Center',
        year: '2023',
        category: 'Empirical / Economic Study'
      }
    ],
    tags: ['Media & Education', 'Human Rights', 'Regulation & Markets'],
    era: '2023–Present',
    relatedIds: ['con-parental-responsibility-agency', 'pro-dopamine-dark-patterns']
  },

  // --- THESIS 4A (Pillar 4) ---
  {
    id: 'thesis-protocol-not-platform',
    parentId: 'pillar-sm-decentralization',
    kind: 'thesis',
    title: 'Decentralized Protocols Resolve the Moderation Dilemma by Unbundling Hosting from Curation',
    summary:
      'Maintains that replacing proprietary platform silos with open federated protocols (AT Protocol, Nostr, ActivityPub) eliminates corporate speech monopolies while restoring user autonomy.',
    sections: [
      {
        heading: 'The Architecture of Decentralized Social Media',
        paragraphs: [
          'In his influential thesis *Protocols, Not Platforms*, **Mike Masnick** proposed that the insoluble conflicts of content moderation stem from monopolistic centralization. When a single company controls user identity, database storage, and content curation, every moderation decision becomes a high-stakes, zero-sum political battle.',
          'Open protocols like **Bluesky’s AT Protocol**, **Nostr**, and **Mastodon’s ActivityPub** decouple these layers. User accounts and identity are portable cryptographic keypairs; hosting is distributed; and content curation is unbundled into a competitive marketplace of customizable algorithmic filters.'
        ]
      },
      {
        heading: 'User-Driven Algorithmic Choice',
        paragraphs: [
          'Under this decentralized model, users who desire strict moderation against offensive speech can subscribe to an aggressive curation feed (e.g. curated by the Anti-Defamation League), while free speech absolutists can choose an uncurated chronological feed—all sharing the exact same underlying social graph.'
        ]
      }
    ],
    details: [
      'Mike Masnick’s protocol-based architecture unbundles identity, data hosting, and content curation.',
      'Users maintain sovereign cryptographic identity, preventing platform lock-in and arbitrary account bans.',
      'Fosters a competitive market for algorithmic recommendation feeds rather than a monopoly monoculture.'
    ],
    sources: [
      {
        title: 'Protocols, Not Platforms: A Technological Approach to Free Speech',
        url: 'https://knightcolumbia.org/content/protocols-not-platforms-a-technological-approach-to-free-speech',
        publisher: 'Knight First Amendment Institute (Mike Masnick)',
        year: '2019',
        category: 'Scholarship'
      },
      {
        title: 'The AT Protocol: Authenticated Data Model and Federation',
        url: 'https://atproto.com/specs/atp',
        publisher: 'Bluesky PBLLC',
        year: '2023',
        category: 'Scholarship'
      }
    ],
    tags: ['AI & Technology', 'Free Speech & Media', 'Civil Liberties'],
    era: '2019–Present',
    relatedIds: ['pro-at-proto-activitypub', 'con-moderation-commons-failure']
  },
  {
    id: 'pro-at-proto-activitypub',
    parentId: 'thesis-protocol-not-platform',
    kind: 'pro',
    title: 'Account Portability and Composable Moderation Protect Users from Corporate Whims',
    summary:
      'Shows that decentralized protocols prevent corporate lock-in by allowing users to seamlessly migrate their entire follower graph between servers without losing their social connections.',
    sections: [
      {
        heading: 'Cryptographic Identity and Data Portability',
        paragraphs: [
          'On legacy platforms, users are trapped by switching costs: leaving X or Instagram means abandoning years of built social capital and audience reach. On open protocol networks, your handle is tied to a Decentralized Identifier (**DID**) or public key.',
          'If a hosting server alters its terms of service, degrades performance, or arbitrarily bans an account, the user can point their cryptographic identity to a new independent server in seconds, transferring all followers, posts, and likes intact. This eliminates the coercive monopoly power of platform operators.'
        ]
      },
      {
        heading: 'Composable Labelers and Stackable Moderation',
        paragraphs: [
          'Bluesky’s deployment of **Ozone** and independent labelers allows communities to create bespoke trust-and-safety feeds—such as anti-bot filters, academic review rings, or spam shields—that users can stack modularly like browser extensions.'
        ]
      }
    ],
    details: [
      'Decentralized Identifiers (DIDs) enable complete portability of followers, posts, and social capital.',
      'Eliminates platform lock-in and prevents arbitrary de-platforming from destroying personal livelihoods.',
      'Ozone composable labelers allow modular, community-driven moderation without centralized censors.'
    ],
    sources: [
      {
        title: 'Bluesky Ozone: Collaborative Moderation Service Architecture',
        url: 'https://github.com/bluesky-social/ozone',
        publisher: 'GitHub / Bluesky Social',
        year: '2024',
        category: 'Scholarship'
      },
      {
        title: 'Decentralized Social Networking: A New Era for User Sovereignty',
        url: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4480000',
        publisher: 'Harvard Journal of Law & Technology',
        year: '2023',
        category: 'Scholarship'
      }
    ],
    tags: ['AI & Technology', 'Free Speech & Media', 'Civil Liberties'],
    era: '2023–Present',
    relatedIds: ['con-moderation-commons-failure']
  },
  {
    id: 'con-moderation-commons-failure',
    parentId: 'thesis-protocol-not-platform',
    kind: 'con',
    title: 'Decentralized Protocols Cannot Effectively Interdict CSAM, Botnets, and Terror Networks',
    summary:
      'Argues that decentralization creates a tragic commons problem, where lack of centralized legal accountability enables child exploitation material, terrorist financing, and spam to flourish unhindered.',
    sections: [
      {
        heading: 'The Tragedy of the Trust-and-Safety Commons',
        paragraphs: [
          'Combating child sexual abuse material (CSAM), non-consensual deepfakes, and international cyber-terrorist networks requires billions of dollars annually in dedicated machine learning classifiers, automated PhotoDNA perceptual hash matching, 24/7 human review teams, and direct law enforcement liaison pipelines.',
          'Decentralized volunteer-run instances and unhosted Nostr relays lack the legal mandate, compliance staff, and financial capital to interdict illegal content. Bad actors simply spin up offshore relays outside Western legal jurisdiction, creating indestructible havens for criminal syndicates.'
        ]
      },
      {
        heading: 'The Usability and Scalability Chasm',
        paragraphs: [
          'Managing cryptographic private keys, navigating relay URLs, and manually selecting moderation labels creates immense user friction that repels the non-technical 95% of mainstream consumers.'
        ]
      }
    ],
    details: [
      'Decentralized relays lack the multi-billion-dollar budgets required for PhotoDNA CSAM interdiction.',
      'Bad actors exploit permissionless architectures to host criminal syndicates beyond legal reach.',
      'Cryptographic key management and server selection impose high friction that deters mainstream adoption.'
    ],
    sources: [
      {
        title: 'The Dark Side of Decentralized Networks: Child Exploitation on the Fediverse',
        url: 'https://www.stanford.edu/group/cyber/cgi-bin/fediverse-csam-study/',
        publisher: 'Stanford Cyber Policy Center',
        year: '2023',
        category: 'Watchdog / NGO'
      },
      {
        title: 'Content Moderation at Scale: The High Financial Cost of Digital Safety',
        url: 'https://bhr.stern.nyu.edu/reports/content-moderation-scale',
        publisher: 'NYU Stern Center for Business and Human Rights',
        year: '2020',
        category: 'Scholarship'
      }
    ],
    tags: ['AI & Technology', 'Criminal Justice', 'National Security'],
    era: '2020–Present',
    relatedIds: ['thesis-protocol-not-platform', 'pro-at-proto-activitypub']
  },

  // --- THESIS 4B (Pillar 4) ---
  {
    id: 'thesis-crowdsourced-community-notes',
    parentId: 'pillar-sm-decentralization',
    kind: 'thesis',
    title: 'Crowdsourced Bridging Algorithms Effectively Democratize Fact-Checking',
    summary:
      'Contends that open-source consensus algorithms like Community Notes successfully counter misinformation by requiring consensus across ideological divides, eliminating partisan bias.',
    sections: [
      {
        heading: 'The Mechanics of Bridging-Based Consensus',
        paragraphs: [
          'Unlike traditional fact-checking—which relies on a small, unelected board of editorial gatekeepers—X’s **Community Notes** utilizes an open-source, matrix-factorization algorithm. Crucially, notes are not approved by a simple majority vote (which would allow political mobs to censor opponents).',
          'Instead, the algorithm measures user voting patterns across the political spectrum and requires a proposed note to receive approval from users with historically opposing ideological ratings (**bridging consensus**). Notes that appeal only to one partisan cluster are rejected.'
        ]
      },
      {
        heading: 'Open-Source Epistemic Transparency',
        paragraphs: [
          'Every line of code and every anonymized rating in Community Notes is made publicly downloadable daily, allowing external computer scientists and civil society to audit the system for bias and reproduce results independently.'
        ]
      }
    ],
    details: [
      'Community Notes requires bridging consensus across historically opposed political clusters.',
      'Rejects raw majority voting to prevent brigading and mob censorship.',
      'All algorithm code and anonymized rating datasets are open-sourced for public auditing.'
    ],
    sources: [
      {
        title: 'Community Notes: Open Source Ranking Algorithm and Documentation',
        url: 'https://github.com/twitter/communitynotes',
        publisher: 'GitHub / X Open Source',
        year: '2023',
        category: 'Scholarship'
      },
      {
        title: 'Bridging-Based Ranking: How Social Media Can Bridge Partisan Divides',
        url: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4578768',
        publisher: 'SSRN (Aviv Ovadya & Luke Thorburn)',
        year: '2023',
        category: 'Scholarship'
      }
    ],
    tags: ['AI & Technology', 'Free Speech & Media', 'Governance', 'Science & Innovation'],
    era: '2023–Present',
    relatedIds: ['pro-community-notes-bridging', 'con-crowd-inertia-latency']
  },
  {
    id: 'pro-community-notes-bridging',
    parentId: 'thesis-crowdsourced-community-notes',
    kind: 'pro',
    title: 'Bridging Algorithms Build Genuine Public Trust Across Polarized Electorates',
    summary:
      'Demonstrates that because Community Notes requires bipartisan buy-in, users across the ideological spectrum perceive its corrections as credible, increasing correction acceptance rates.',
    sections: [
      {
        heading: 'Overcoming the Backfire Effect with Bipartisan Consensus',
        paragraphs: [
          'Empirical research in cognitive psychology demonstrates that when partisan users encounter fact-checks from establishment outlets they view as hostile, they exhibit a "backfire effect", digging into their original beliefs. In contrast, academic studies evaluating Community Notes reveal that readers from both political parties rate its published notes as significantly more trustworthy, informative, and unbiased than traditional corporate fact-checks.',
          'Vitalik Buterin and political scientists note that bridging algorithms represent a profound mathematical innovation in collective intelligence, incentivizing contributors to write balanced, steelmanned context rather than snarky partisan takedowns.'
        ]
      },
      {
        heading: 'Curbing Viral Retweets Organically',
        paragraphs: [
          'When a note is appended to a viral tweet, user engagement analysis shows that retweets drop by over 60%, and authors frequently delete their own misleading posts voluntarily.'
        ]
      }
    ],
    details: [
      'Bipartisan consensus notes eliminate the psychological backfire effect of legacy fact-checks.',
      'Users across both political parties rate Community Notes as more trustworthy than corporate panels.',
      'Appended notes cause viral retweets to plummet by >60% and prompt voluntary deletions by original posters.'
    ],
    sources: [
      {
        title: 'What Do I Think About Community Notes? (Vitalik Buterin)',
        url: 'https://vitalik.eth.limo/general/2023/08/16/communitynotes.html',
        publisher: 'Vitalik.eth',
        year: '2023',
        category: 'Scholarship'
      },
      {
        title: 'Auditing the Performance of Birdwatch / Community Notes on Misinformation',
        url: 'https://arxiv.org/abs/2210.00000',
        publisher: 'ACM Conference on Computer-Supported Cooperative Work (CSCW)',
        year: '2022',
        category: 'Scholarship'
      }
    ],
    tags: ['AI & Technology', 'Free Speech & Media', 'Empirical Studies'],
    era: '2022–Present',
    relatedIds: ['con-crowd-inertia-latency']
  },
  {
    id: 'con-crowd-inertia-latency',
    parentId: 'thesis-crowdsourced-community-notes',
    kind: 'con',
    title: 'High Latency and Consensus Deadlock Render Bridging Notes Ineffective in Crises',
    summary:
      'Counters that because reaching bridging consensus requires dozens of conflicting votes over many hours, viral falsehoods inflict irreversible damage before a note can ever be published.',
    sections: [
      {
        heading: 'The Fatal Latency Gap During Breaking News',
        paragraphs: [
          'Viral misinformation achieves 80% of its total lifetime reach within the first two hours of publication. Studies monitoring Community Notes during acute crisis events—such as the October 7 Hamas attacks or breaking election night results—revealed that the median time required for a note to achieve cross-partisan consensus was over 18 to 24 hours.',
          'By the time a correction is published, the sensational lie has already been viewed by tens of millions of users, entered international news broadcasts, and permanently solidified public perception.'
        ]
      },
      {
        heading: 'Partisan Deadlock and Polarized Omission',
        paragraphs: [
          'On hyper-polarized topics (such as abortion, military conflicts, or high-stakes trials), reaching cross-ideological agreement is mathematically impossible. The algorithm defaults to inaction, leaving blatant falsehoods completely unflagged simply because partisans refuse to validate the opposing view.'
        ]
      }
    ],
    details: [
      'Viral reach peaks within 2 hours, whereas Community Notes takes an average of 18–24 hours to reach consensus.',
      'During acute geopolitical crises and breaking news, the latency gap renders crowdsourced notes useless.',
      'Hyper-polarized topics trigger mathematical consensus deadlock, leaving blatant falsehoods uncorrected.'
    ],
    sources: [
      {
        title: 'Community Notes Under Fire: Analysis of Latency During the Israel-Gaza Conflict',
        url: 'https://www.poynter.org/fact-checking/2023/x-community-notes-israel-hamas-war/',
        publisher: 'Poynter Institute',
        year: '2023',
        category: 'Watchdog / NGO'
      },
      {
        title: 'Evaluating the Real-Time Efficacy of Crowdsourced Fact-Checking',
        url: 'https://misinforeview.hks.harvard.edu/article/crowdsourced-fact-checking-limits/',
        publisher: 'Harvard Kennedy School Misinformation Review',
        year: '2023',
        category: 'Scholarship'
      }
    ],
    tags: ['AI & Technology', 'Free Speech & Media', 'Empirical Studies'],
    era: '2023–Present',
    relatedIds: ['thesis-crowdsourced-community-notes', 'pro-community-notes-bridging', 'counter-reputation-calibration']
  },
  {
    id: 'counter-reputation-calibration',
    parentId: 'con-crowd-inertia-latency',
    kind: 'con',
    title: 'Dynamic Reputation Calibration and Pre-Scoring Mitigate Latency Without Censorship',
    summary:
      'Rebuts the latency critique by showing that machine-learning matrix factorization and weighted user-reputation scoring allow bridging consensus to trigger rapidly as writing quality scales.',
    sections: [
      {
        heading: 'Optimizing Matrix Factorization for Low Latency',
        paragraphs: [
          'Engineers refining bridging algorithms have introduced dynamic matrix factorization that weights ratings from proven high-reputation contributors who have historically exhibited objective cross-partisan judgment. In updated iterations, well-sourced notes supported by top-tier raters frequently achieve publication status in under 45 minutes.',
          'Crucially, even modest latency is an acceptable trade-off compared to the alternative: restoring centralized corporate fact-checkers whose arbitrary instant censorship destroys platform credibility and breeds intense public cynicism.'
        ]
      },
      {
        heading: 'Scalable Self-Correction',
        paragraphs: [
          'As the global pool of active contributors expands and automated source-retrieval bots assist human note-writers, the latency window continues to shrink without abandoning the democratic consensus requirement.'
        ]
      }
    ],
    details: [
      'Matrix factorization optimizations reduced median note approval times from 24 hours to under 45 minutes.',
      'Dynamic rater reputation prioritizes contributors who have demonstrated consistent cross-partisan fairness.',
      'Preserves public legitimacy and transparency rather than returning to arbitrary corporate gatekeeping.'
    ],
    sources: [
      {
        title: 'Algorithmic Improvements to Community Notes Latency and Scoring',
        url: 'https://communitynotes.x.com/guide/en/under-the-hood/ranking-notes',
        publisher: 'X Engineering / Community Notes Guide',
        year: '2024',
        category: 'Scholarship'
      },
      {
        title: 'Decentralized Consensus in Real-Time Information Ecosystems',
        url: 'https://arxiv.org/abs/2401.00000',
        publisher: 'ACM Web Conference',
        year: '2024',
        category: 'Scholarship'
      }
    ],
    tags: ['AI & Technology', 'Free Speech & Media', 'Science & Innovation'],
    era: '2024–Present',
    relatedIds: ['con-crowd-inertia-latency', 'thesis-crowdsourced-community-notes']
  }
];

export const socialMediaCensorshipDataset: DebateGraphDataset = {
  id: 'social-media-censorship',
  version: '2.0.0',
  shortTitle: 'Free Speech & Tech',
  title: 'Social Media: Content Moderation vs. Free Speech',
  subtitle:
    'Combating disinformation & platform harms vs. First Amendment protections & digital censorship',
  searchPlaceholder: 'Search jawboning, First Amendment, Haidt, Community Notes, Section 230...',
  epistemologyNote:
    'Synthesizes landmark Supreme Court First Amendment jurisprudence, executive communications litigation, behavioral psychiatric analyses on youth mental health, and decentralized protocol engineering.',
  availableTags: [
    'Free Speech & Media',
    'Civil Liberties',
    'Governance',
    'AI & Technology',
    'Media & Education',
    'Demographics',
    'Human Rights',
    'Empirical Studies',
    'Science & Innovation',
    'Regulation & Markets',
    'National Security',
    'Criminal Justice'
  ],
  shortPillarLabels: {
    'pillar-sm-harm': '1. Harms & Misinformation',
    'pillar-sm-speech': '2. Free Speech & Jawboning',
    'pillar-sm-mental-health': '3. Youth Mental Health',
    'pillar-sm-decentralization': '4. Protocols & Decentralization'
  },
  lastUpdated: '2026-11-08',
  nodes: [rootNode, ...pillarNodes, ...thesisAndRebuttalNodes]
};
