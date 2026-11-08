import { DebateGraphDataset, DebateNode } from '../../types/debate';

const rootNode: DebateNode = {
  id: 'root-higher-education-debt',
  parentId: null,
  kind: 'root',
  title: 'Higher Education Value & Student Debt Forgiveness',
  summary:
    'A defining cultural and economic debate in modern social policy: whether student loan debt constitutes an unjust tax on social mobility that must be cancelled as a public good, or whether mass debt forgiveness is an intensely regressive giveaway to affluent professionals that ignores credential inflation and fuels university tuition spirals.',
  sections: [
    {
      heading: 'The $1.77 Trillion Crisis: Public Good or Personal Asset?',
      paragraphs: [
        'Total outstanding U.S. federal student loan debt reached **$1.77 trillion across 43 million borrowers** in 2024—surpassing aggregate credit card and auto loan balances. Progressive advocates and debt-relief coalitions—led by **Astra Taylor (The Debt Collective)** and former Labor Secretary **Robert Reich**—argue that higher education is a foundational public good, analogous to K-12 education, clean water, or physical infrastructure. They contend that shifting the financing burden from public funding to individual debt has locked an entire generation out of homeownership, delayed family formation, and severely widened racial wealth gaps.',
        'Debt-jubilee proponents argue that broad student debt cancellation unburdens millions of low- and middle-income families, providing an immediate boost to economic mobility and dismantling predatory for-profit higher education traps.',
      ],
    },
    {
      heading: 'The Regressivity Critique, Credential Inflation & The Bennett Hypothesis',
      paragraphs: [
        'Conversely, mainstream economists and fiscal scholars—including **Adam Looney (Brookings)**, **Beth Akers (AEI)**, and **Jason Delisle (Urban Institute)**—counter that broad loan cancellation is the single most regressive domestic policy proposed in modern American history. Because college graduates earn over **$1 million more over their lifetimes** than high school graduates, forgiving their loans transfers wealth from the 60% of working-class Americans who never attended college to high-earning doctors, corporate lawyers, and white-collar professionals.',
        'Furthermore, educational skeptics like **Bryan Caplan (*The Case Against Education*)** argue that much of modern university education is wasteful **credential signaling** rather than genuine human capital skill acquisition, while the **Bennett Hypothesis** warns that forgiving loans without structural reform merely guarantees universities will raise tuition even faster.',
      ],
    },
  ],
  details: [
    '**Racial Wealth Gap vs. Regressivity:** Balances data showing Black women hold disproportionate, compounding student debt against Brookings evidence that the top 40% of income earners hold over 60% of total debt dollars.',
    '**Human Capital vs. Credential Signaling:** Evaluates the $1.2 million lifetime college wage premium against Bryan Caplan’s thesis that 80% of higher ed value represents sheepskin sorting rather than productivity.',
    '**The Bennett Hypothesis & University Skin-in-the-Game:** Explores empirical NY Fed studies on how federal loan expansions drive tuition inflation, and debates requiring colleges to share default risk.',
  ],
  sources: [
    {
      title: 'Open to Debate: Forgive Student Loan Debt?',
      url: 'https://opentodebate.org/debate/forgive-student-loan-debt/',
      publisher: 'Open to Debate (Astra Taylor vs. Beth Akers)',
      year: '2021',
      category: 'Debate / Broadcast',
    },
    {
      title: 'Intelligence Squared U.S.: Is College Worth It?',
      url: 'https://www.intelligencesquaredus.org/debate/too-many-kids-go-to-college/',
      publisher: 'Intelligence Squared (Bryan Caplan & Peter Thiel vs. Vivek Wadhwa)',
      year: '2012',
      category: 'Debate / Broadcast',
    },
    {
      title: 'The Distributional Consequences of Student Debt Forgiveness',
      url: 'https://www.brookings.edu/articles/the-distributional-consequences-of-student-debt-forgiveness/',
      publisher: 'Brookings Institution (Adam Looney)',
      year: '2021',
      category: 'Empirical / Economic Study',
    },
    {
      title: 'The Case Against Education: Why the Education System Is a Waste of Time and Money',
      url: 'https://press.princeton.edu/books/hardcover/9780691169644/the-case-against-education',
      publisher: 'Princeton University Press (Bryan Caplan)',
      year: '2018',
      category: 'Scholarship',
    },
  ],
  tags: ['Labor & Welfare', 'Taxation & Fiscal', 'Macroeconomics', 'Media & Education'],
  era: '1965–Present',
  relatedIds: ['pillar-hed-mobility', 'pillar-hed-regressive', 'pillar-hed-bubble', 'pillar-hed-reform'],
};

const pillarNodes: DebateNode[] = [
  {
    id: 'pillar-hed-mobility',
    parentId: 'root-higher-education-debt',
    kind: 'pillar',
    title: 'Public Good, Racial Wealth Equity & Debt Relief',
    summary:
      'Argues that higher education is critical democratic infrastructure, that student debt systematically entrenches racial wealth gaps, and that debt relief unfreezes household formation and entrepreneurship.',
  sections: [
      {
        heading: 'Higher Education as Universal Public Infrastructure',
        paragraphs: [
          'In *Can’t Pay, Won’t Pay*, **Astra Taylor** and the Debt Collective argue that treating higher education as an individual financial gamble rather than a collective public good is a profound societal failure. Until the 1970s, premier public university systems (such as the University of California and City University of New York) were essentially tuition-free for resident students, recognizing that an educated citizenry generates massive societal externalities: higher civic participation, public scientific breakthroughs, and improved public health.',
          'Shifting funding from public state subsidies to privatized debt has turned universities into financialized collection engines, saddling working-class youth with mortgages before they even own a home.',
        ],
      },
      {
        heading: 'Compounding Racial Wealth Disparities',
        paragraphs: [
          'Because Black families have been systematically denied generational wealth through historical redlining, segregation, and discriminatory banking, Black students borrow at higher rates and in larger amounts. A landmark Brandeis University study revealed that **twenty years after starting college, median white borrowers had paid off 94% of their debt, while median Black borrowers still owed 95%** of their initial balance.',
        ],
      },
    ],
    details: [
      'Over 43 million Americans hold $1.77 trillion in federal student loan debt, with average undergraduate balances exceeding $37,000.',
      'Brandeis University longitudinal data shows Black borrowers still owe 95% of their student loan balances twenty years after entering college.',
      'Federal Reserve studies link high student loan debt burdens directly to delayed home purchases, lower marriage rates, and depressed small business startup activity.',
    ],
    sources: [
      {
        title: 'Can’t Pay, Won’t Pay: The Case for Economic Disobedience and Debt Abolition',
        url: 'https://www.haymarketbooks.org/books/1525-can-t-pay-won-t-pay',
        publisher: 'Haymarket Books (The Debt Collective / Astra Taylor)',
        year: '2020',
        category: 'Scholarship',
      },
      {
        title: 'Stalled Dreams: How Student Debt Entrenches the Racial Wealth Gap',
        url: 'https://heller.brandeis.edu/iere/pdfs/racial-wealth-equity/racial-wealth-gap/stalled-dreams.pdf',
        publisher: 'Institute on Assets and Social Policy at Brandeis University',
        year: '2019',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'Student Loan Debt and Aggregate Consumption (Federal Reserve Bulletin)',
        url: 'https://www.federalreserve.gov/econres/notes/feds-notes/student-loans-and-homeownership-20190116.html',
        publisher: 'Federal Reserve Board of Governors',
        year: '2019',
        category: 'Court / Official Record',
      },
    ],
    tags: ['Media & Education', 'Labor & Welfare', 'Human Rights', 'Taxation & Fiscal'],
    era: '1965–Present',
    relatedIds: ['pillar-hed-regressive', 'pillar-hed-reform'],
  },
  {
    id: 'pillar-hed-regressive',
    parentId: 'root-higher-education-debt',
    kind: 'pillar',
    title: 'Regressivity, Moral Hazard & Non-College Workers',
    summary:
      'Contends that broad student debt forgiveness acts as an upward wealth redistribution from working-class non-degree holders to elite professionals, creating massive moral hazard for future students.',
    sections: [
      {
        heading: 'The Upward Distribution of College Debt',
        paragraphs: [
          'Detailed administrative analyses by **Adam Looney (Brookings)** and **Jason Delisle (Urban Institute)** demonstrate that broad debt cancellation is profoundly regressive. The highest-earning 40% of households hold almost **60% of outstanding student loan debt**, and over **one-third of all debt is held by graduate degree holders**—including doctors, corporate attorneys, and MBAs who command peak lifetime earnings.',
          'Under blanket cancellation, a federal government funded heavily by payroll and sales taxes paid by mechanics, machinists, and truckers would effectively write off $100,000+ debts for physicians and corporate consultants earning $250,000 annually.',
        ],
      },
      {
        heading: 'Moral Hazard and the Destruction of Repayment Norms',
        paragraphs: [
          'Cancelling current debt without fixing underlying university tuition structures creates catastrophic **moral hazard**: future high school seniors will borrow maximally under the expectation of periodic political debt jubilees, prompting universities to raise tuition even more aggressively.',
        ],
      },
    ],
    details: [
      'Brookings Institution data proves the top two quintiles of income earners hold 56% of total student debt, while the lowest quintile holds under 12%.',
      'Graduate and professional degree holders represent only 15% of all students but hold over 47% of total federal student loan balances.',
      'Over 60% of American adults do not hold a bachelor’s degree, making universal cancellation an upward transfer of tax revenue.',
    ],
    sources: [
      {
        title: 'The Distributional Consequences of Student Debt Forgiveness',
        url: 'https://www.brookings.edu/articles/the-distributional-consequences-of-student-debt-forgiveness/',
        publisher: 'Brookings Institution (Adam Looney)',
        year: '2021',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'Game of Loans: The Rhetoric and Reality of Student Debt',
        url: 'https://press.princeton.edu/books/hardcover/9780691163550/game-of-loans',
        publisher: 'Princeton University Press (Beth Akers & Matthew M. Chingos)',
        year: '2016',
        category: 'Scholarship',
      },
      {
        title: 'The Graduate Student Debt Bubble',
        url: 'https://www.urban.org/research/publication/graduate-student-debt-bubble',
        publisher: 'Urban Institute (Jason Delisle)',
        year: '2022',
        category: 'Empirical / Economic Study',
      },
    ],
    tags: ['Taxation & Fiscal', 'Labor & Welfare', 'Macroeconomics'],
    era: '2016–Present',
    relatedIds: ['pillar-hed-mobility', 'pillar-hed-bubble'],
  },
  {
    id: 'pillar-hed-bubble',
    parentId: 'root-higher-education-debt',
    kind: 'pillar',
    title: 'Credential Inflation & The College Wage Premium',
    summary:
      'Weighs Bryan Caplan’s signaling model—which argues degree requirements represent wasteful credential inflation—against the empirical persistence of the $1.2 million college lifetime wage premium.',
    sections: [
      {
        heading: 'The Signaling Thesis and Sheepskin Sclerosis',
        paragraphs: [
          'In *The Case Against Education*, George Mason University economist **Bryan Caplan** presents extensive empirical evidence that the vast majority of university coursework does not teach job-relevant skills. Instead, higher education functions primarily as a costly, wasteful **sorting mechanism (signaling)** that filters individuals for raw intelligence, conscientiousness, and conformity.',
          'As more citizens obtain college degrees, employers simply escalate degree requirements for jobs that never previously required one (e.g. administrative assistants, claims adjusters, hotel managers), setting off a credential arms race that wastes trillions in economic capital without increasing net human productivity.',
        ],
      },
      {
        heading: 'The Enduring Strength of the College Wage Premium',
        paragraphs: [
          'In contrast, Federal Reserve Bank of New York researchers **Jaison Abel and Richard Deitz** show that despite tuition inflation, the **college wage premium remains near historic highs**: the average bachelor’s degree graduate earns **$30,000 more per year** (or $1.2 million over a 40-year career) than a high school graduate, providing an annual return on investment exceeding **14%**.',
        ],
      },
    ],
    details: [
      'Bryan Caplan calculates that roughly 80% of the financial return to college reflects signaling rather than human capital skill acquisition.',
      'Federal Reserve Bank of New York research documents that the college wage premium averages $1.2 million over a typical working lifetime.',
      'Credential inflation has led to 41% of recent college graduates being underemployed in jobs that do not require a bachelor’s degree.',
    ],
    sources: [
      {
        title: 'The Case Against Education: Why the Education System Is a Waste of Time and Money',
        url: 'https://press.princeton.edu/books/hardcover/9780691169644/the-case-against-education',
        publisher: 'Princeton University Press (Bryan Caplan)',
        year: '2018',
        category: 'Scholarship',
      },
      {
        title: 'Do the Benefits of College Still Outweigh the Costs?',
        url: 'https://www.newyorkfed.org/research/current_issues/ci20-3.html',
        publisher: 'Current Issues in Economics and Finance / NY Fed (Abel & Deitz)',
        year: '2014',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'The Labor Market for Recent College Graduates: Underemployment Statistics',
        url: 'https://www.newyorkfed.org/research/college-labor-market#--:explore:underemployment',
        publisher: 'Federal Reserve Bank of New York',
        year: '2024',
        category: 'Court / Official Record',
      },
    ],
    tags: ['Media & Education', 'Labor & Welfare', 'Macroeconomics'],
    era: '2014–Present',
    relatedIds: ['pillar-hed-reform', 'pillar-hed-regressive'],
  },
  {
    id: 'pillar-hed-reform',
    parentId: 'root-higher-education-debt',
    kind: 'pillar',
    title: 'Structural University Cost Accountability',
    summary:
      'Examines root causes of tuition inflation, evaluating whether federal loan subsidies drive up costs (the Bennett Hypothesis) and debating institutional risk-sharing and endowment accountability.',
    sections: [
      {
        heading: 'The Bennett Hypothesis and Federal Aid Subsidies',
        paragraphs: [
          'In **1987**, Secretary of Education **William Bennett** published a controversial thesis: that federal increases in student loan availability and grants do not make college more affordable, but rather incentivize universities to arbitrarily inflate tuition and build luxury amenities. In **2019**, Federal Reserve Bank of New York economists **Lucca, Nadauld & Shen** validated this empirically, finding that **every $1.00 increase in federal subsidized loan caps caused a 60-cent hike in sticker tuition**.',
          'Between 1980 and 2020, average undergraduate tuition and fees rose by **over 180% in real inflation-adjusted terms**, driven by administrative bloat, where non-teaching administrative staff grew five times faster than tenured faculty.',
        ],
      },
      {
        heading: 'Institutional Skin-in-the-Game and Risk-Sharing',
        paragraphs: [
          'Reformers advocate ending the federal blank check: universities whose graduates default or fail to earn more than high school graduates should be legally required to refund federal loans or pay a **risk-sharing default penalty**, aligning institutional incentives with student financial solvency.',
        ],
      },
    ],
    details: [
      'Lucca, Nadauld & Shen (2019 NY Fed / Journal of Finance) confirmed that a $1 increase in federal subsidized loan limits leads to a 60-cent tuition increase.',
      'Administrative positions at U.S. colleges surged over 250% between 1980 and 2020 while full-time instructional faculty grew by less than 50%.',
      'Bipartisan proposals for "institutional risk-sharing" require universities to reimburse taxpayers for a percentage of defaulted student loans.',
    ],
    sources: [
      {
        title: 'Credit Supply and the Rise in College Tuition: Evidence from the Expansion in Federal Student Aid Limits',
        url: 'https://onlinelibrary.wiley.com/doi/10.1111/jofi.12777',
        publisher: 'The Journal of Finance (David O. Lucca, Taylor Nadauld & Karen Shen)',
        year: '2019',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'Our Greedy Colleges (The Original Bennett Hypothesis)',
        url: 'https://www.nytimes.com/1987/02/18/opinion/our-greedy-colleges.html',
        publisher: 'The New York Times (William J. Bennett)',
        year: '1987',
        category: 'Scholarship',
      },
      {
        title: 'Skin in the Game: How Risk-Sharing Can Fix Higher Education',
        url: 'https://www.aei.org/research-products/report/skin-in-the-game-how-to-fix-higher-education/',
        publisher: 'American Enterprise Institute (Beth Akers & Jason Delisle)',
        year: '2021',
        category: 'Scholarship',
      },
    ],
    tags: ['Media & Education', 'Taxation & Fiscal', 'Regulation & Markets'],
    era: '1987–Present',
    relatedIds: ['pillar-hed-bubble', 'pillar-hed-regressive'],
  },
];

const thesisNodes: DebateNode[] = [
  // Pillar 1 Theses
  {
    id: 'thesis-hed-racial-wealth-gap',
    parentId: 'pillar-hed-mobility',
    kind: 'thesis',
    title: 'Redressing Racial Wealth Disparities & Systemic Debt Traps',
    summary:
      'Argues that because centuries of structural racism deprived Black and Latino families of home equity and generational wealth, student loans disproportionately burden minority borrowers.',
    sections: [
      {
        heading: 'The Discriminatory Burden of College Debt',
        paragraphs: [
          'White families hold eight times the median net worth of Black families. Consequently, Black students must borrow significantly more to attend the exact same universities, and they face documented labor-market hiring discrimination upon graduation that depresses starting salaries.',
          'Data from the National Center for Education Statistics reveals that **nearly 90% of Black students borrow federal student loans**, compared to 66% of white students. Forgiving student debt provides a direct, race-conscious wealth infusion that closes the racial wealth gap far more effectively than color-blind policies.',
        ],
      },
      {
        heading: 'Pell Grant Expansions as a Superior Targeted Alternative',
        paragraphs: [
          'Opponents counter that broad debt jubilee is poorly targeted for racial equity: because high-earning white borrowers hold the lion’s share of total dollars, cancelling debt across the board transfers more absolute wealth to white households. Expanding need-based **Pell Grants** directly targets low-income minority students without enriching affluent graduates.',
        ],
      },
    ],
    details: [
      'Over 85% of Black bachelor’s degree graduates carry student loan debt, compared to 66% of white peers.',
      'Twelve years after entering college, the median white borrower paid off 35% of their original loan balance, while the median Black borrower’s balance *grew by 13%* due to interest capitalization.',
      'Debt cancellation of up to $50,000 would increase the wealth of Black households by up to 40%, according to Roosevelt Institute modeling.',
    ],
    sources: [
      {
        title: 'Quicksand: Borrowers of Color & the Student Debt Crisis',
        url: 'https://www.demos.org/research/quicksand-borrowers-color-student-debt-crisis',
        publisher: 'Demos (Mark Huelsman)',
        year: '2019',
        category: 'Watchdog / NGO',
      },
      {
        title: 'Student Debt Forgiveness Is Good for the Economy and Racial Wealth Equity',
        url: 'https://rooseveltinstitute.org/publications/student-debt-forgiveness-racial-wealth-equity/',
        publisher: 'Roosevelt Institute (Louise Seamster et al.)',
        year: '2021',
        category: 'Scholarship',
      },
    ],
    tags: ['Media & Education', 'Human Rights', 'Labor & Welfare'],
    era: '2019–Present',
    relatedIds: ['thesis-hed-macro-drag'],
  },
  {
    id: 'thesis-hed-macro-drag',
    parentId: 'pillar-hed-mobility',
    kind: 'thesis',
    title: 'Student Debt as a Chokehold on Household Formation & Entrepreneurship',
    summary:
      'Posits that monthly student loan payments act as a direct macro drag, suppressing first-time homeownership, delaying marriage and childbirth, and dampening small business formation.',
    sections: [
      {
        heading: 'Freezing Generational Milestones',
        paragraphs: [
          'Federal Reserve researchers estimate that student loan debt accounts for a **20% decline in homeownership among young adults** between 2005 and 2014. Facing monthly payments of $400 to $800, young workers cannot save for down payments, qualify for standard debt-to-income mortgage underwriting, or take entrepreneurial risks to launch startups.',
          'A study by the **Levy Economics Institute** found that full cancellation of student debt would increase U.S. real GDP by **$86 billion to $108 billion per year** and add over 1 million jobs over a decade by freeing up consumer purchasing power.',
        ],
      },
      {
        heading: 'Inflationary Demand Stimulus Risks',
        paragraphs: [
          'Fiscal watchdogs point out that injecting tens of billions of annualized student debt relief during a macroeconomic supply crunch adds fuel to inflation, requiring the Federal Reserve to keep interest rates higher for longer.',
        ],
      },
    ],
    details: [
      'Federal Reserve Board study (Mezza et al., 2019) proved every $1,000 in student loan debt causes a 1 to 2 percentage point drop in homeownership rates for 20-somethings.',
      'Levy Economics Institute modeled that forgiving all $1.7T in debt would generate between 1.2 million and 1.5 million net new jobs over a ten-year horizon.',
      'Small business formation among millennials is at a 25-year low, driven partly by debt-to-income credit constraints.',
    ],
    sources: [
      {
        title: 'Can Student Loan Debt Explain the Low Homeownership Rate of Young Adults? (Federal Reserve FEDS)',
        url: 'https://www.federalreserve.gov/econres/feds/can-student-loan-debt-explain-the-low-homeownership-rate-of-young-adults.htm',
        publisher: 'Federal Reserve Board (Alvaro Mezza, Daniel Ringo, Shane Sherlund & Kamila Sommer)',
        year: '2019',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'The Macroeconomic Effects of Student Debt Cancellation',
        url: 'https://www.levyinstitute.org/publications/the-macroeconomic-effects-of-student-debt-cancellation',
        publisher: 'Levy Economics Institute of Bard College (Fullwiler et al.)',
        year: '2018',
        category: 'Scholarship',
      },
    ],
    tags: ['Macroeconomics', 'Housing & Healthcare', 'Labor & Welfare'],
    era: '2018–Present',
    relatedIds: ['thesis-hed-distributional-regressivity'],
  },

  // Pillar 2 Theses
  {
    id: 'thesis-hed-distributional-regressivity',
    parentId: 'pillar-hed-regressive',
    kind: 'thesis',
    title: 'Upward Redistribution to Affluent Professional Degree Holders',
    summary:
      'Demonstrates that student loan debt is heavily concentrated among the highest lifetime earners, making universal debt cancellation an intensely regressive policy.',
    sections: [
      {
        heading: 'Who Holds the Debt: The Empirical Distribution',
        paragraphs: [
          'Unlike consumer credit card debt or medical debt, educational debt is uniquely held by society’s most credentialed and highest-earning cohort. Federal Reserve SCF data confirms that the **highest-income quintile holds three times more student debt than the lowest quintile**.',
          'Moreover, the largest individual debt balances belong to medical doctors, dentists, corporate lawyers, and MBA holders who borrowed $150,000 to $300,000 but go on to earn $200,000 to $500,000+ annually. Forgiving their debt represents an upward transfer from median workers to the future upper-middle class.',
        ],
      },
      {
        heading: 'Income-Driven Repayment (IDR) as the Proper Safety Valve',
        paragraphs: [
          'Economists emphasize that the U.S. already possesses **Income-Driven Repayment (IDR)** programs (such as SAVE), which limit payments to 5% to 10% of discretionary income and forgive balances after 10 to 20 years for borrowers who truly struggle, making blanket debt wipeouts unnecessary.',
        ],
      },
    ],
    details: [
      'Brookings research shows that the top 20% of earners hold more student debt than the bottom 40% combined.',
      'Physicians, lawyers, and business executives hold an average debt of over $160,000 but earn average salaries exceeding $200,000.',
      'Targeted Income-Driven Repayment (IDR) already caps payments at a low percentage of disposable income for low-wage earners.',
    ],
    sources: [
      {
        title: 'Who Owes the Most Student Debt? (Brookings Report)',
        url: 'https://www.brookings.edu/articles/who-owes-the-most-student-debt-an-update/',
        publisher: 'Brookings Institution (Adam Looney)',
        year: '2020',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'Income-Driven Repayment Plans for Federal Student Loans',
        url: 'https://www.cbo.gov/publication/55968',
        publisher: 'Congressional Budget Office',
        year: '2020',
        category: 'Court / Official Record',
      },
    ],
    tags: ['Taxation & Fiscal', 'Labor & Welfare', 'Empirical Studies'],
    era: '2020–Present',
    relatedIds: ['thesis-hed-moral-hazard'],
  },
  {
    id: 'thesis-hed-moral-hazard',
    parentId: 'pillar-hed-regressive',
    kind: 'thesis',
    title: 'Moral Hazard, Inequity to Working-Class Non-Graduates & Future Borrowers',
    summary:
      'Highlights the profound unfairness of forcing non-college workers to subsidize college graduates, alongside the destructive moral hazard of incentivizing future debt accumulation.',
    sections: [
      {
        heading: 'The Fairness Problem: Plumbers Paying for Lawyers',
        paragraphs: [
          'Over **60% of American adults over age 25 do not hold a four-year college degree**. These working-class Americans—plumbers, mechanics, electricians, hospitality workers, and truck drivers—chose not to take on college debt, worked early in life, or sacrificed to pay off vocational training fees.',
          'Using general taxpayer revenues to forgive the debts of four-year degree holders who will out-earn working-class citizens by over $1 million is perceived as deeply unjust, eroding social solidarity and deepening populist resentment.',
        ],
      },
      {
        heading: 'The Day-After Problem: Future Borrowers',
        paragraphs: [
          'If the federal government executes a student debt jubilee today, what happens to the high school senior borrowing loans tomorrow? Expecting future debt cancellations, colleges will aggressively raise tuition and students will borrow irresponsibly, recreating the entire $1.7 trillion crisis within eight years.',
        ],
      },
    ],
    details: [
      'Over 60% of American adults do not hold a bachelor’s degree and earn significantly lower lifetime incomes than college graduates.',
      'One-time debt cancellation does not alter underlying college costs, recreating the $1.7 trillion debt total within 8 to 10 years.',
      'Surveys indicate that working-class non-college voters overwhelmingly oppose across-the-board student debt cancellation.',
    ],
    sources: [
      {
        title: 'The Moral Hazard of Student Loan Forgiveness',
        url: 'https://www.nationalreview.com/2022/08/the-moral-hazard-of-student-loan-forgiveness/',
        publisher: 'National Review / AEI (Beth Akers)',
        year: '2022',
        category: 'Scholarship',
      },
      {
        title: 'Education Attainment in the United States: Current Population Reports',
        url: 'https://www.census.gov/data/tables/2023/demo/educational-attainment/cps-detailed-tables.html',
        publisher: 'U.S. Census Bureau',
        year: '2023',
        category: 'Court / Official Record',
      },
    ],
    tags: ['Taxation & Fiscal', 'Philosophy & Ethics', 'Labor & Welfare'],
    era: '2022–Present',
    relatedIds: ['thesis-hed-distributional-regressivity'],
  },

  // Pillar 3 Theses
  {
    id: 'thesis-hed-signaling-bubble',
    parentId: 'pillar-hed-bubble',
    kind: 'thesis',
    title: 'Bryan Caplan’s Signaling Thesis & Credential Sclerosis',
    summary:
      'Posits that universities primarily function as expensive credential sorting mechanisms rather than teaching practical job skills, triggering wasteful educational arms races.',
    sections: [
      {
        heading: 'The Sheepskin Effect and Credential Arms Race',
        paragraphs: [
          'In *The Case Against Education*, **Bryan Caplan** argues that if higher education truly transformed human productivity, college seniors who drop out one semester before graduation should earn roughly 7/8ths of a graduate’s wage. In reality, dropouts suffer a massive wage penalty—the **"sheepskin effect"** proves employers pay for the diploma as a signal of intelligence, work ethic, and social conformity, not the classroom knowledge.',
          'When the state subsidizes college attendance, it does not make society smarter; it simply inflates degree requirements. Jobs that once required high school diplomas now require bachelor’s degrees, and bachelor’s roles require master’s degrees, generating massive waste.',
        ],
      },
      {
        heading: 'Vocational and Apprenticeship Alternatives',
        paragraphs: [
          'Caplan and labor economists advocate expanding European-style **vocational apprenticeships** (as in Germany and Switzerland), where teenagers transition directly into skilled technical trades (precision machining, mechatronics, healthcare) earning high wages with zero student debt.',
        ],
      },
    ],
    details: [
      'Empirical studies document large "sheepskin effects" where completing the final semester of college generates over 50% of the total degree wage premium.',
      'Underemployment among recent college graduates hovers between 35% and 42%, with graduates working in retail, food service, and office support.',
      'German dual-track vocational apprenticeships yield youth unemployment rates under 6%, far below the OECD average.',
    ],
    sources: [
      {
        title: 'The Case Against Education: Why the Education System Is a Waste of Time and Money',
        url: 'https://press.princeton.edu/books/hardcover/9780691169644/the-case-against-education',
        publisher: 'Princeton University Press (Bryan Caplan)',
        year: '2018',
        category: 'Scholarship',
      },
      {
        title: 'The Sheepskin Effect and the Returns to Education',
        url: 'https://academic.oup.com/qje/article/108/1/229/1873766',
        publisher: 'Quarterly Journal of Economics (David Jaeger & Marianne Page)',
        year: '1996',
        category: 'Scholarship',
      },
    ],
    tags: ['Media & Education', 'Labor & Welfare', 'Empirical Studies'],
    era: '2018–Present',
    relatedIds: ['thesis-hed-wage-premium-robustness'],
  },
  {
    id: 'thesis-hed-wage-premium-robustness',
    parentId: 'pillar-hed-bubble',
    kind: 'thesis',
    title: 'The Enduring Empirical Strength of the Lifetime College Wage Premium',
    summary:
      'Maintains that a college degree remains the single most reliable investment for upward mobility, generating an undeniable $1.2 million lifetime earnings premium.',
    sections: [
      {
        heading: 'The Unbroken Economic Value of the Bachelor’s Degree',
        paragraphs: [
          'Extensive longitudinal research from the **Federal Reserve Bank of New York (Abel & Deitz)** and Georgetown University’s Center on Education and the Workforce demonstrates that despite soaring tuition, the **college wage premium has not collapsed**. Over a 40-year career, a bachelor’s degree holder earns a median of **$2.8 million**, compared to **$1.6 million** for a high school graduate.',
          'Furthermore, college graduates experience dramatically lower unemployment rates during recessions (typically half the rate of non-degree workers) and enjoy significantly higher job satisfaction, workplace safety, and employer-sponsored retirement benefits.',
        ],
      },
      {
        heading: 'Major Heterogeneity and For-Profit Traps',
        paragraphs: [
          'Economists concede that the college premium varies wildly by field: STEM, nursing, and business degrees generate massive returns, while predatory for-profit colleges and low-ROI arts master’s programs leave students buried in unpayable debt.',
        ],
      },
    ],
    details: [
      'Georgetown CEW data shows median lifetime earnings are $2.8M for bachelor’s degree holders vs. $1.6M for high school graduates—a $1.2M premium.',
      'Unemployment among workers with a bachelor’s degree was 2.2% in 2024, compared to 4.2% for high school graduates.',
      'Abel & Deitz (2014) calculated the annualized internal rate of return (IRR) on a four-year college degree at roughly 14%—outperforming the S&P 500.',
    ],
    sources: [
      {
        title: 'The College Payoff: More Education Doesn’t Always Mean More Money',
        url: 'https://cew.georgetown.edu/cew-reports/the-college-payoff/',
        publisher: 'Georgetown University Center on Education and the Workforce (Anthony Carnevale et al.)',
        year: '2021',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'Do the Benefits of College Still Outweigh the Costs?',
        url: 'https://www.newyorkfed.org/research/current_issues/ci20-3.html',
        publisher: 'Current Issues in Economics and Finance / NY Fed (Abel & Deitz)',
        year: '2014',
        category: 'Empirical / Economic Study',
      },
    ],
    tags: ['Media & Education', 'Labor & Welfare', 'Empirical Studies'],
    era: '2014–Present',
    relatedIds: ['thesis-hed-signaling-bubble'],
  },

  // Pillar 4 Theses
  {
    id: 'thesis-hed-bennett-hypothesis',
    parentId: 'pillar-hed-reform',
    kind: 'thesis',
    title: 'The Bennett Hypothesis: Federal Aid Driving Tuition Inflation',
    summary:
      'Examines empirical evidence proving that unconditional federal loan programs incentivize universities to inflate tuition and expand non-academic administrative bloat.',
    sections: [
      {
        heading: 'Empirical Confirmation of the Bennett Hypothesis',
        paragraphs: [
          'In **2019**, **David Lucca, Taylor Nadauld, and Karen Shen (Journal of Finance)** published the definitive econometric test of former Education Secretary William Bennett’s 1987 thesis. Analyzing federal policy changes in loan caps, they demonstrated that **institutions with greater exposure to subsidized loan limit increases raised tuition more aggressively**: every additional $1.00 of federal subsidized loans led to a **60-cent increase in published sticker tuition**.',
          'Uncapped federal loan programs (such as Grad PLUS and Parent PLUS) created an elastic money spigot, allowing universities to build luxury climbing walls, expand administrative bureaucracies, and hike executive compensation with zero market discipline.',
        ],
      },
      {
        heading: 'The State Disinvestment Counter-Thesis',
        paragraphs: [
          'Higher education advocates counter that public university tuition rose primarily because state legislatures slashed direct state tax appropriations per student following the 2008 recession, forcing public universities to replace lost state revenues with higher student tuition.',
        ],
      },
    ],
    details: [
      'Lucca, Nadauld & Shen (2019) demonstrated a 60% pass-through from federal subsidized loan limit hikes to university tuition increases.',
      'Federal Grad PLUS loans allow graduate students to borrow unlimited funds up to the university’s self-reported "cost of attendance."',
      'State higher education appropriations per student fell by nearly 20% in real terms between 2008 and 2018 before stabilizing.',
    ],
    sources: [
      {
        title: 'Credit Supply and the Rise in College Tuition (Journal of Finance)',
        url: 'https://onlinelibrary.wiley.com/doi/10.1111/jofi.12777',
        publisher: 'The Journal of Finance (Lucca, Nadauld & Shen)',
        year: '2019',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'State Higher Education Finance (SHEF) Report',
        url: 'https://shef.sheeo.org/',
        publisher: 'State Higher Education Executive Officers Association (SHEEO)',
        year: '2023',
        category: 'Court / Official Record',
      },
    ],
    tags: ['Media & Education', 'Taxation & Fiscal', 'Empirical Studies'],
    era: '1987–Present',
    relatedIds: ['thesis-hed-risk-sharing'],
  },
  {
    id: 'thesis-hed-risk-sharing',
    parentId: 'pillar-hed-reform',
    kind: 'thesis',
    title: 'Institutional Skin-in-the-Game & Default Risk-Sharing',
    summary:
      'Debates requiring colleges and universities to assume financial liability for former students who default on federal loans, aligning institutional incentives with graduate earnings.',
    sections: [
      {
        heading: 'Ending the Federal Blank Check: Skin-in-the-Game',
        paragraphs: [
          'Under current federal law, universities keep 100% of student loan tuition dollars upfront on day one of classes. If a student drops out after three semesters with $25,000 in debt and cannot find a job, the university keeps the money and the taxpayer bears 100% of the default risk. This broken structure encourages predatory enrollment of underprepared students.',
          'Bipartisan reformers propose **institutional risk-sharing**: requiring universities to repay a portion of defaulted loan balances (e.g., 10% to 20%) or pay fines if graduate median earnings fail to exceed the earnings of high school graduates in their state.',
        ],
      },
      {
        heading: 'Risks of Cream-Skimming and Minority Exclusion',
        paragraphs: [
          'Opponents warn that risk-sharing penalties create perverse incentives: universities might preemptively reject low-income, minority, or first-generation college applicants who statistically face higher default risks, or shut down vital low-earning humanities and social work programs.',
        ],
      },
    ],
    details: [
      'Universities currently bear 0% financial liability when their graduates default on federal student loans.',
      'Gainful Employment regulations cut off federal aid to career training programs where graduate debt payments exceed 8% of total earnings.',
      'Opponents warn risk-sharing could cause universities to eliminate low-wage public service degree tracks like social work, teaching, and music.',
    ],
    sources: [
      {
        title: 'Institutional Risk-Sharing in Higher Education: A Policy Blueprint',
        url: 'https://www.thirdway.org/report/risk-sharing-in-higher-education',
        publisher: 'Third Way (Michael Itzkowitz)',
        year: '2021',
        category: 'Watchdog / NGO',
      },
      {
        title: 'Department of Education Final Rule on Gainful Employment and Financial Value Transparency',
        url: 'https://www.ed.gov/news/press-releases/biden-harris-administration-releases-final-rules-protect-students-unmanageable-debt-gainful-employment',
        publisher: 'U.S. Department of Education',
        year: '2023',
        category: 'Court / Official Record',
      },
    ],
    tags: ['Media & Education', 'Regulation & Markets', 'Labor & Welfare'],
    era: '2021–Present',
    relatedIds: ['thesis-hed-bennett-hypothesis'],
  },
];

const proConNodes: DebateNode[] = [
  // Under thesis-hed-racial-wealth-gap
  {
    id: 'pro-hed-black-borrowers-disparity',
    parentId: 'thesis-hed-racial-wealth-gap',
    kind: 'pro',
    title: 'Student Debt Entrenches the Racial Wealth Gap and Traps Black Women',
    summary:
      'Because Black women hold the highest average student debt burdens of any demographic, debt forgiveness is an urgent civil rights intervention.',
    sections: [
      {
        heading: 'The Intersectional Crisis of Black Student Debt',
        paragraphs: [
          'According to the American Association of University Women (AAUW), **Black women carry the highest average student debt burden of any group** in America ($41,466 upon graduation). Because of the compounding effects of the gender pay gap and the racial wealth gap, Black female graduates take significantly longer to repay their debt while earning 64 cents for every dollar paid to white men.',
          'Cancelling student loan debt immediately restores wealth equity, enabling minority graduates to build credit, start businesses, and pass down generational wealth.',
        ],
      },
      {
        heading: 'Redressing Historical Educational Exclusion',
        paragraphs: [
          'Minority families were historically excluded from the post-WWII GI Bill and suburban home equity accumulation; forcing their children to mortgage their futures for basic educational parity perpetuates systemic inequality.',
        ],
      },
    ],
    details: [
      'Black women hold an average of over $41,000 in undergraduate student loan debt, compared to $31,000 for white women.',
      'Black college graduates face an unemployment rate twice as high as their white counterparts with the same credentials.',
      'Broad student debt cancellation would instantly increase Black household median net worth by an estimated 40%.',
    ],
    sources: [
      {
        title: 'Deeper in Debt: Women and Student Loans',
        url: 'https://www.aauw.org/resources/research/deeper-in-debt/',
        publisher: 'American Association of University Women (AAUW)',
        year: '2021',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'The Color of Debt: How Collection Practices Deepen Racial Inequality',
        url: 'https://www.aclu.org/news/racial-justice/the-color-of-debt',
        publisher: 'ACLU',
        year: '2020',
        category: 'Watchdog / NGO',
      },
    ],
    tags: ['Human Rights', 'Labor & Welfare', 'Media & Education'],
    era: '2020–Present',
    relatedIds: ['con-hed-targeted-pell-alternative'],
  },
  {
    id: 'con-hed-targeted-pell-alternative',
    parentId: 'thesis-hed-racial-wealth-gap',
    kind: 'con',
    title: 'Expanding Pell Grants and HBCU Funding Is Far More Equitable Than Cancellation',
    summary:
      'Across-the-board debt cancellation hands the largest dollar windfalls to white borrowers; doubling Pell Grants targets aid exclusively to needy minority students.',
    sections: [
      {
        heading: 'The Dollar Allocation Distortion of Jubilee',
        paragraphs: [
          'Because white students attend more expensive private universities and elite graduate schools in higher numbers, **white borrowers hold over 60% of total student loan dollar volume**. A universal cancellation transfers substantially more federal cash to affluent white households in absolute terms than to minority families.',
        ],
      },
      {
        heading: 'Direct Front-End Investment in Need-Based Aid',
        paragraphs: [
          'Doubling the maximum **Pell Grant to $15,000** and directly funding Historically Black Colleges and Universities (HBCUs) solves the problem at its root: students from low-income families attend college tuition-free upfront without ever taking on debt in the first place.',
        ],
      },
    ],
    details: [
      'Over 70% of Black undergraduate students rely on federal need-based Pell Grants to pay for college.',
      'Doubling the Pell Grant would allow over 6 million low-income students to graduate with near-zero debt burdens.',
      'Direct endowment funding for HBCUs addresses institutional funding inequities without providing windfalls to wealthy professional degree holders.',
    ],
    sources: [
      {
        title: 'Double Pell: The Key to Affordable Higher Education',
        url: 'https://doublepell.org/',
        publisher: 'Coalition of Higher Education Organizations',
        year: '2023',
        category: 'Watchdog / NGO',
      },
      {
        title: 'HBCUs and the Pell Grant: Powering Upward Mobility',
        url: 'https://www.cbpp.org/research/state-budget-and-tax/state-higher-education-funding-cuts-have-pushed-costs-to-students',
        publisher: 'Center on Budget and Policy Priorities',
        year: '2022',
        category: 'Empirical / Economic Study',
      },
    ],
    tags: ['Media & Education', 'Taxation & Fiscal', 'Human Rights'],
    era: '2022–Present',
    relatedIds: ['pro-hed-black-borrowers-disparity'],
  },

  // Under thesis-hed-macro-drag
  {
    id: 'pro-hed-unleashing-homeownership',
    parentId: 'thesis-hed-macro-drag',
    kind: 'pro',
    title: 'Debt Relief Unfreezes Household Formation, Marriage and New Business Startups',
    summary:
      'Eliminating monthly loan payments frees up purchasing power, allowing millions of young adults to buy homes, start families, and launch entrepreneurial ventures.',
  sections: [
      {
        heading: 'Unlocking Millennial and Gen Z Homeownership',
        paragraphs: [
          'When college graduates face monthly student debt payments of $400 to $800, mortgage underwriting algorithms reject them due to elevated **debt-to-income (DTI) ratios**. Eliminating this balance immediately qualifies millions of creditworthy young adults for first-time home loans, revitalizing local real estate markets and community stability.',
        ],
      },
      {
        heading: 'Sparking an Entrepreneurship Renaissance',
        paragraphs: [
          'Individuals burdened by fixed monthly debt service cannot afford the risk of leaving salaried jobs to launch new businesses. Studies of corporate and personal debt jubilees confirm that unburdening young educated cohorts triggers an explosion in small business creation and regional innovation.',
        ],
      },
    ],
    details: [
      'Over 50% of millennial non-homeowners cite student loan debt as the primary obstacle preventing them from saving for a down payment.',
      'Research from the Philadelphia Federal Reserve found that growth in student loan debt had a significant dampening effect on small business starts with 1 to 4 employees.',
      'Relieving debt service stimulates local consumer demand across retail, home renovation, and childcare sectors.',
    ],
    sources: [
      {
        title: 'The Impact of Student Loan Debt on Small Business Formation',
        url: 'https://www.philadelphiafed.org/surveys-of-consumers/special-reports/the-impact-of-student-loan-debt-on-small-business-formation',
        publisher: 'Federal Reserve Bank of Philadelphia (Ambrose, Cordell & Ma)',
        year: '2015',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'Student Loan Debt and the Housing Market',
        url: 'https://www.nar.realtor/research-and-statistics/research-reports/student-loan-debt-and-housing-report',
        publisher: 'National Association of Realtors',
        year: '2021',
        category: 'Watchdog / NGO',
      },
    ],
    tags: ['Housing & Healthcare', 'Labor & Welfare', 'Macroeconomics'],
    era: '2015–Present',
    relatedIds: ['con-hed-macro-demand-inflation'],
  },
  {
    id: 'con-hed-macro-demand-inflation',
    parentId: 'thesis-hed-macro-drag',
    kind: 'con',
    title: 'Broad Debt Cancellation Injects Fiscal Stimulus at the Worst Time for Inflation',
    summary:
      'Cancelling hundreds of billions in debt acts as an un-targeted cash injection that fuels consumer demand during supply-constrained inflationary periods.',
    sections: [
      {
        heading: 'The Macroeconomic Price of Debt Cancellation',
        paragraphs: [
          'The **Committee for a Responsible Federal Budget (CRFB)** calculated that President Biden’s initial proposal to cancel $10,000 to $20,000 in student loans would cost taxpayers **over $400 billion**. Injecting hundreds of billions into consumer spending when the economy is already experiencing supply-side constraints directly counteracts Federal Reserve inflation-fighting efforts.',
          'Borrowers who suddenly have an extra $400 per month will spend it on dining, travel, and durable goods, increasing aggregate demand and forcing the central bank to keep interest rates higher for longer.',
        ],
      },
    ],
    details: [
      'CRFB estimated student debt cancellation proposals would cost federal taxpayers between $350B and $500B over ten years.',
      'Former Treasury Secretary Lawrence Summers warned that student debt relief represents regressive macroeconomic demand stimulus during high-inflation periods.',
      'Higher central bank interest rates induced by fiscal stimulus raise mortgage rates, worsening home affordability for the broader public.',
    ],
    sources: [
      {
        title: 'Student Debt Cancellation: Distributional and Macroeconomic Impacts',
        url: 'https://www.crfb.org/blogs/canceling-student-debt-poor-economic-stimulus',
        publisher: 'Committee for a Responsible Federal Budget (CRFB)',
        year: '2022',
        category: 'Watchdog / NGO',
      },
      {
        title: 'Lawrence Summers on Student Loan Forgiveness and Inflation',
        url: 'https://www.washingtonpost.com/opinions/2022/08/22/larry-summers-student-loan-forgiveness-inflation/',
        publisher: 'The Washington Post',
        year: '2022',
        category: 'Debate / Broadcast',
      },
    ],
    tags: ['Macroeconomics', 'Taxation & Fiscal', 'Empirical Studies'],
    era: '2022–Present',
    relatedIds: ['pro-hed-unleashing-homeownership'],
  },

  // Under thesis-hed-distributional-regressivity
  {
    id: 'pro-hed-looney-regressivity',
    parentId: 'thesis-hed-distributional-regressivity',
    kind: 'pro',
    title: 'Brookings Data Proves Debt Cancellation Disproportionately Enriches High Earners',
    summary:
      'Adam Looney’s definitive tax registry research shows the top 40% of income earners hold over half of all student debt, making forgiveness an upward handout.',
    sections: [
      {
        heading: 'The Empirical Distribution of Student Debt',
        paragraphs: [
          'Using Treasury administrative tax files and Federal Reserve data, **Adam Looney (2021 Brookings)** proved that the top 20% of households by income hold more student debt than the entire bottom 40% combined. Nearly **one-third of all student debt is held by households in the top quartile**.',
          'Because student loan balances correlate with degree level and future earnings potential, cancelling debt delivers average benefits of $5,000+ to top-decile earners while providing nearly zero benefit to minimum-wage non-college workers.',
        ],
      },
      {
        heading: 'The Disconnect from Actual Poverty',
        paragraphs: [
          'Only a tiny fraction of student debt is held by individuals living below the federal poverty line. Delivering broad cancellation is an extraordinarily inefficient mechanism for aiding genuinely destitute citizens.',
        ],
      },
    ],
    details: [
      'The top two income quintiles hold 56% of total outstanding student loan debt.',
      'Less than 10% of student loan debt is held by individuals in the lowest income quintile.',
      'Physicians, lawyers, pharmacists, and dentists hold an average debt balance of over $150,000 but earn top-tier incomes.',
    ],
    sources: [
      {
        title: 'Putting Student Debt in Perspective',
        url: 'https://www.brookings.edu/articles/putting-student-loan-forgiveness-in-perspective/',
        publisher: 'Brookings Institution (Adam Looney)',
        year: '2021',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'The Distributional Impacts of Student Debt Relief Proposals',
        url: 'https://budgetmodel.wharton.upenn.edu/issues/2022/8/23/biden-student-loan-forgiveness',
        publisher: 'Penn Wharton Budget Model',
        year: '2022',
        category: 'Empirical / Economic Study',
      },
    ],
    tags: ['Taxation & Fiscal', 'Labor & Welfare', 'Empirical Studies'],
    era: '2021–Present',
    relatedIds: ['con-hed-net-worth-trap'],
  },
  {
    id: 'con-hed-net-worth-trap',
    parentId: 'thesis-hed-distributional-regressivity',
    kind: 'con',
    title: 'Current Income Metrics Mask the Reality of Severe Negative Net Worth',
    summary:
      'Measuring borrowers by current annual income is misleading: young professionals burdened by six-figure debt have negative net worth and zero financial safety cushion.',
    sections: [
      {
        heading: 'The Fallacy of the Wealthy Young Professional',
        paragraphs: [
          'Critics of debt relief point to a young veterinarian or public defender earning $70,000 and label them "affluent." But if that worker has **$180,000 in student loan debt and zero family assets**, their net worth is negative $110,000. They are financially more precarious than a union machinist with a high school diploma who owns a home and has $50,000 in home equity.',
          'Confounding high human capital with liquid financial wealth obscures the severe precarity of young educated workers who cannot handle a $1,000 medical emergency.',
        ],
      },
    ],
    details: [
      'Over 40% of millennial college graduates hold negative net worth due to compounding student loan balances.',
      'Public service professionals (social workers, public defenders, nurses, teachers) require graduate degrees but earn modest wages.',
      'Net worth—not transitory annual income—is the true metric of financial security and intergenerational resilience.',
    ],
    sources: [
      {
        title: 'Millennials with Negative Net Worth: The Student Debt Anchor',
        url: 'https://www.urban.org/urban-wire/millennials-student-debt-and-wealth-accumulation',
        publisher: 'Urban Institute',
        year: '2021',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'Public Service Loan Forgiveness Data and Implementation Tracking',
        url: 'https://studentaid.gov/data-center/student/loan-forgiveness/pslf-data',
        publisher: 'Federal Student Aid / U.S. Department of Education',
        year: '2024',
        category: 'Court / Official Record',
      },
    ],
    tags: ['Taxation & Fiscal', 'Labor & Welfare', 'Philosophy & Ethics'],
    era: '2021–Present',
    relatedIds: ['pro-hed-looney-regressivity'],
  },

  // Under thesis-hed-moral-hazard
  {
    id: 'pro-hed-blue-collar-unfairness',
    parentId: 'thesis-hed-moral-hazard',
    kind: 'pro',
    title: 'Debt Forgiveness Unfairly Taxes Non-College Workers to Subsidize the Privileged',
    summary:
      'Working-class citizens who paid their own way or chose skilled vocational trades should not be forced to pay off debts for white-collar graduates.',
    sections: [
      {
        heading: 'The Basic Moral Inequity of Debt Redistribution',
        paragraphs: [
          'A carpenter who worked twelve-hour shifts at age 19 to buy his own tools and truck, or a veteran who enlisted for four years to earn the GI Bill, has every right to ask: why should my federal taxes pay off the student loans of someone who attended a private liberal arts college and works from home on a laptop?',
          'Universal debt cancellation violates basic principles of fairness and personal responsibility, driving an explosive wedge between non-college working-class voters and cultural elites.',
        ],
      },
    ],
    details: [
      'Two-thirds of American taxpayers do not have a bachelor’s degree.',
      'Federal debt cancellation is funded from the general revenue fund, which relies heavily on working-class payroll and sales taxes.',
      'Creates bitter resentment among borrowers who sacrificed to pay off their loans prior to cancellation.',
    ],
    sources: [
      {
        title: 'The Working-Class Case Against Student Debt Forgiveness',
        url: 'https://americancompass.org/the-working-class-case-against-student-debt-cancellation/',
        publisher: 'American Compass (Oren Cass)',
        year: '2022',
        category: 'Scholarship',
      },
      {
        title: 'Voter Attitudes on Higher Education and Student Debt Relief',
        url: 'https://www.pewresearch.org/politics/2022/10/06/public-views-on-student-loan-forgiveness/',
        publisher: 'Pew Research Center',
        year: '2022',
        category: 'Watchdog / NGO',
      },
    ],
    tags: ['Philosophy & Ethics', 'Labor & Welfare', 'Taxation & Fiscal'],
    era: '2022–Present',
    relatedIds: ['con-hed-public-good-infrastructure'],
  },
  {
    id: 'con-hed-public-good-infrastructure',
    parentId: 'thesis-hed-moral-hazard',
    kind: 'con',
    title: 'Higher Education Is Democratic Public Infrastructure That Benefits All Citizens',
    summary:
      'Society collectively funds public goods—like high schools, libraries, and roads—even if not every citizen uses them; educated societies benefit all members.',
    sections: [
      {
        heading: 'Positive Externalities and the Public Good Framework',
        paragraphs: [
          'Childless taxpayers pay property taxes to fund public elementary schools because an educated population reduces crime, boosts public health, and strengthens democracy. Similarly, everyone benefits when society trains doctors to treat diseases, engineers to design clean bridges, and scientists to invent vaccines.',
          'Viewing higher education as an individual consumer purchase rather than public infrastructure is the exact neoliberal misconception that created the student debt catastrophe in the first place.',
        ],
      },
    ],
    details: [
      'Societal returns to higher education include higher tax revenues, lower crime rates, and accelerated technological innovation.',
      'Public high schools were originally controversial in the nineteenth century under identical arguments that non-parents should not pay.',
      'Every major developed nation except the United States treats university education primarily as tuition-free public infrastructure.',
    ],
    sources: [
      {
        title: 'Education at a Glance 2023: OECD Indicators on Public Good Returns',
        url: 'https://www.oecd.org/en/publications/education-at-a-glance-2023_e13befba-en.html',
        publisher: 'OECD',
        year: '2023',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'The Public Good Case for Tuition-Free College',
        url: 'https://rooseveltinstitute.org/publications/the-public-good-case-for-tuition-free-college/',
        publisher: 'Roosevelt Institute (Suzanne Kahn)',
        year: '2020',
        category: 'Scholarship',
      },
    ],
    tags: ['Media & Education', 'Philosophy & Ethics', 'Macroeconomics'],
    era: '2020–Present',
    relatedIds: ['pro-hed-blue-collar-unfairness'],
  },

  // Under thesis-hed-signaling-bubble
  {
    id: 'pro-hed-caplan-sheepskin-waste',
    parentId: 'thesis-hed-signaling-bubble',
    kind: 'pro',
    title: 'Bryan Caplan Shows 80% of College Value Is Wasteful Sheepskin Signaling',
    summary:
      'Rigorous labor economics demonstrates that most university courses do not teach job skills; college functions as a wasteful arms race for employer sorting.',
    sections: [
      {
        heading: 'The Irrelevance of the College Curriculum',
        paragraphs: [
          'In *The Case Against Education*, **Bryan Caplan** notes a glaring paradox: students spend four years studying 19th-century French poetry, ancient art history, and higher calculus, yet remember almost none of it five years later and use none of it in their corporate jobs. If human capital were being accumulated, summer learning loss and subject amnesia would destroy careers.',
          'Instead, what employers pay for is the **signal**: the college diploma proves the graduate was smart enough to get admitted, dutiful enough to complete tedious assignments, and conformist enough to sit still for four years.',
        ],
      },
      {
        heading: 'The Negative Sum Credential Race',
        paragraphs: [
          'When everyone gets a college degree, no one gains a competitive advantage. Employers simply raise the barrier, requiring master’s degrees for entry-level jobs that high schoolers performed effortlessly in the 1970s.',
        ],
      },
    ],
    details: [
      'Caplan calculates that roughly 80% of college’s financial return reflects signaling and only 20% human capital skill formation.',
      'Over 35% of college graduates report using zero material from their major in their current professional career.',
      'Credential inflation artificially raises the cost of entry for basic administrative and management positions across the economy.',
    ],
    sources: [
      {
        title: 'The Case Against Education: Why the Education System Is a Waste of Time and Money',
        url: 'https://press.princeton.edu/books/hardcover/9780691169644/the-case-against-education',
        publisher: 'Princeton University Press (Bryan Caplan)',
        year: '2018',
        category: 'Scholarship',
      },
      {
        title: 'Job Market Signaling',
        url: 'https://academic.oup.com/qje/article/87/3/355/1885669',
        publisher: 'Quarterly Journal of Economics (Michael Spence)',
        year: '1973',
        category: 'Scholarship',
      },
    ],
    tags: ['Media & Education', 'Labor & Welfare', 'Philosophy & Ethics'],
    era: '2018–Present',
    relatedIds: ['con-hed-human-capital-foundations'],
  },
  {
    id: 'con-hed-human-capital-foundations',
    parentId: 'thesis-hed-signaling-bubble',
    kind: 'con',
    title: 'College Builds Cognitive Adaptability, Critical Thinking and Technological Agility',
    summary:
      'Modern knowledge economies require cognitive agility, communication skills, and critical problem solving that higher education systematically cultivates.',
    sections: [
      {
        heading: 'Foundational Human Capital for an AI Economy',
        paragraphs: [
          'Dismissing university education as mere "signaling" misunderstands the modern cognitive economy. College does not train workers for a single static occupation; it cultivates **foundational cognitive capabilities**: written synthesis, quantitative literacy, collaborative problem solving, and intellectual adaptability.',
          'In an era where artificial intelligence automates routine repetitive tasks, workers who possess deep critical thinking and liberal arts analytical flexibility adapt and upskill far faster than narrowly trained vocational specialists.',
        ],
      },
    ],
    details: [
      'David Autor’s research shows college graduates adapt far more effectively to technological automation waves than non-degree workers.',
      'College-educated individuals exhibit higher voter turnout, greater civic volunteering, and significantly better long-term health outcomes.',
      'The ability to synthesize complex unstructured data is systematically developed through university-level writing and seminar dialogue.',
    ],
    sources: [
      {
        title: 'The Race between Education and Technology',
        url: 'https://www.hup.harvard.edu/books/9780674035300',
        publisher: 'Harvard University Press (Claudia Goldin & Lawrence Katz)',
        year: '2008',
        category: 'Scholarship',
      },
      {
        title: 'Higher Education and Civic Engagement',
        url: 'https://www.pewresearch.org/social-trends/2014/02/11/the-rising-cost-of-not-going-to-college/',
        publisher: 'Pew Research Center',
        year: '2014',
        category: 'Empirical / Economic Study',
      },
    ],
    tags: ['Media & Education', 'Labor & Welfare', 'Science & Innovation'],
    era: '2008–Present',
    relatedIds: ['pro-hed-caplan-sheepskin-waste'],
  },

  // Under thesis-hed-wage-premium-robustness
  {
    id: 'pro-hed-million-dollar-premium',
    parentId: 'thesis-hed-wage-premium-robustness',
    kind: 'pro',
    title: 'Longitudinal Data Confirms an Enduring Million-Dollar College Wage Premium',
    summary:
      'Federal Reserve and Georgetown CEW data confirms that even after accounting for tuition costs and lost wages, bachelor’s degrees yield over $1.2M in lifetime earnings.',
    sections: [
      {
        heading: 'The Definitive Lifetime Earnings Advantage',
        paragraphs: [
          'In their definitive study tracking millions of earnings records, the **Georgetown University Center on Education and the Workforce (2021)** documented that median lifetime earnings for a high school graduate are **$1.6 million**, while median earnings for a bachelor’s degree holder are **$2.8 million**—an astonishing **$1.2 million premium**.',
          'Master’s degree holders earn $3.2 million, and professional degree holders (doctors, lawyers) earn $4.7 million. Even during periods of tuition inflation, the internal rate of return on completing a four-year college degree exceeds 14% annually.',
        ],
      },
    ],
    details: [
      'The median lifetime college wage premium is $1.2 million across all majors and demographic categories.',
      'The unemployment rate for bachelor’s degree holders is consistently half that of high school graduates across all business cycles.',
      'Over 85% of all new high-wage jobs created since the 2008 recession require postsecondary education.',
    ],
    sources: [
      {
        title: 'The College Payoff: Lifetime Earnings by Degree Level',
        url: 'https://cew.georgetown.edu/cew-reports/the-college-payoff/',
        publisher: 'Georgetown CEW (Carnevale, Cheah & Hanson)',
        year: '2021',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'The Value of College',
        url: 'https://www.newyorkfed.org/research/college-labor-market/college-labor-market_valueofcollege.html',
        publisher: 'Federal Reserve Bank of New York (Abel & Deitz)',
        year: '2023',
        category: 'Court / Official Record',
      },
    ],
    tags: ['Labor & Welfare', 'Media & Education', 'Empirical Studies'],
    era: '2021–Present',
    relatedIds: ['con-hed-major-heterogeneity'],
  },
  {
    id: 'con-hed-major-heterogeneity',
    parentId: 'thesis-hed-wage-premium-robustness',
    kind: 'con',
    title: 'Aggregate Averages Mask Extreme Major Inequality and Negative ROI Degrees',
    summary:
      'Quoting average wage premiums obscures that over 25% of college degrees—especially in arts, humanities, and for-profit colleges—produce negative financial returns.',
    sections: [
      {
        heading: 'The Myth of the Homogeneous Degree Return',
        paragraphs: [
          'A study by **FREOPP (Foundation for Research on Equal Opportunity)** analyzing Department of Education College Scorecard data found that **over 28% of bachelor’s degree programs have a negative return on investment (ROI)**: graduates earn less over their working lives than high school graduates from the same background.',
          'While chemical engineering or computer science degrees generate $2 million in net return, degrees in fine arts, theater, anthropology, and philosophy frequently leave graduates with $50,000 in debt and earnings that barely exceed minimum wage.',
        ],
      },
    ],
    details: [
      'FREOPP analysis of 30,000 degree programs found 28% of college bachelor’s degrees produce negative net financial ROI.',
      'Over 40% of master’s degree programs have a negative return on investment after factoring in tuition debt service.',
      'Aggregating STEM and fine arts degrees into a single "average" creates a false picture of financial solvency for students.',
    ],
    sources: [
      {
        title: 'Is College Worth It? A Comprehensive Return on Investment Analysis',
        url: 'https://freopp.org/is-college-worth-it-a-comprehensive-return-on-investment-analysis-1b2ad17f84c8',
        publisher: 'Foundation for Research on Equal Opportunity (Preston Cooper)',
        year: '2022',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'College Scorecard Data Repository',
        url: 'https://collegescorecard.ed.gov/data/',
        publisher: 'U.S. Department of Education',
        year: '2024',
        category: 'Court / Official Record',
      },
    ],
    tags: ['Media & Education', 'Labor & Welfare', 'Empirical Studies'],
    era: '2022–Present',
    relatedIds: ['pro-hed-million-dollar-premium'],
  },

  // Under thesis-hed-bennett-hypothesis
  {
    id: 'pro-hed-bennett-evidence',
    parentId: 'thesis-hed-bennett-hypothesis',
    kind: 'pro',
    title: 'New York Fed Study Proves Federal Loans Fuel University Tuition Spirals',
    summary:
      'Lucca, Nadauld, and Shen documented that for every dollar of subsidized federal loans, universities increase sticker tuition by 60 cents.',
    sections: [
      {
        heading: 'The 60-Cent Pass-Through of Federal Aid',
        paragraphs: [
          'Federal Reserve Bank of New York researchers **Lucca, Nadauld & Shen (2019)** tracked institutional tuition responses to statutory federal loan limit increases. They established that universities systematically capture student aid: each $1.00 increase in federal subsidized loan limits causes an immediate **60-cent hike in private tuition** and a **40-cent hike in public university tuition**.',
          'Federal student aid functions as an open-ended subsidy to university administrators, funding bureaucratic bloat, marketing campaigns, and luxury recreational facilities rather than educational instruction.',
        ],
      },
    ],
    details: [
      'Lucca et al. (2019 Journal of Finance) proved that federal loan expansions directly cause over half of subsequent tuition increases.',
      'Uncapped Parent PLUS and Grad PLUS loans removed any natural market ceiling on university tuition pricing.',
      'Federal student loan programs act as a price-discriminating subsidy captured primarily by higher education institutions.',
    ],
    sources: [
      {
        title: 'Credit Supply and the Rise in College Tuition',
        url: 'https://onlinelibrary.wiley.com/doi/10.1111/jofi.12777',
        publisher: 'The Journal of Finance (Lucca, Nadauld & Shen)',
        year: '2019',
        category: 'Empirical / Economic Study',
      },
      {
        title: 'The Great College Price Hike: Why Aid Increases Costs',
        url: 'https://www.cato.org/cato-journal/winter-2018/how-federal-student-aid-drives-college-tuition-costs',
        publisher: 'Cato Institute',
        year: '2018',
        category: 'Scholarship',
      },
    ],
    tags: ['Media & Education', 'Taxation & Fiscal', 'Empirical Studies'],
    era: '2019–Present',
    relatedIds: ['con-hed-state-divestment-driver'],
  },
  {
    id: 'con-hed-state-divestment-driver',
    parentId: 'thesis-hed-bennett-hypothesis',
    kind: 'con',
    title: 'State Disinvestment in Public Higher Education Is the True Cost Driver',
    summary:
      'Public university tuition rose primarily because state legislatures slashed taxpayer funding per student, forcing colleges to raise tuition to keep doors open.',
    sections: [
      {
        heading: 'The Collapse of State Higher Education Funding',
        paragraphs: [
          'State Higher Education Executive Officers Association (SHEEO) data demonstrates that between **2008 and 2018, state spending per student plummeted by 18% in real terms** across public university systems. State legislatures diverted funds from higher education to pay for rising Medicaid costs and prisons.',
          'Public universities did not raise tuition out of greed; they raised tuition to replace lost state funding. Federal student loans did not cause the tuition hike; they stepped in to prevent public universities from shuttering classrooms.',
        ],
      },
    ],
    details: [
      'State legislative funding per college student fell from over $10,500 in 2001 to under $8,600 in 2018 in inflation-adjusted terms.',
      'In states like Pennsylvania and Illinois, state funding cuts accounted for over 75% of public university tuition increases.',
      'The Bennett Hypothesis fails to explain why tuition at public universities rose fastest in states with the largest legislative budget cuts.',
    ],
    sources: [
      {
        title: 'State Higher Education Finance Report: 2023 Overview',
        url: 'https://shef.sheeo.org/',
        publisher: 'SHEEO (Sophia Laderman et al.)',
        year: '2023',
        category: 'Court / Official Record',
      },
      {
        title: 'Unsettling Sights: The Real Cost of State Divestment from Higher Education',
        url: 'https://www.cbpp.org/research/state-budget-and-tax/state-higher-education-funding-cuts-have-pushed-costs-to-students',
        publisher: 'Center on Budget and Policy Priorities (Michael Mitchell et al.)',
        year: '2019',
        category: 'Empirical / Economic Study',
      },
    ],
    tags: ['Media & Education', 'Taxation & Fiscal', 'Empirical Studies'],
    era: '2019–Present',
    relatedIds: ['pro-hed-bennett-evidence'],
  },

  // Under thesis-hed-risk-sharing
  {
    id: 'pro-hed-institutional-accountability',
    parentId: 'thesis-hed-risk-sharing',
    kind: 'pro',
    title: 'Mandatory Institutional Risk-Sharing Forces Universities to Cut Tuition and Bloat',
    summary:
      'Holding colleges financially liable for a percentage of defaulted loans aligns institutional incentives with actual student career success.',
    sections: [
      {
        heading: 'Realigning University Incentives With Student Outcomes',
        paragraphs: [
          'If a university knew it would have to pay a **15% penalty on every dollar of defaulted debt** accumulated by its graduates, its behavior would change overnight. Administrators would stop launching low-ROI master’s programs, freeze tuition increases, eliminate redundant diversity and dean bureaucracies, and invest heavily in career placement services.',
          'Bipartisan legislation introduced by Senators Mitt Romney and Jack Reed would require colleges with high default rates to reimburse the federal government, protecting taxpayers and future students.',
        ],
      },
    ],
    details: [
      'Institutions currently bear zero financial penalty when graduates default or face delinquency on federal loans.',
      'Bipartisan risk-sharing proposals require colleges to reimburse taxpayers between 5% and 20% of defaulted loan balances.',
      'Forces universities to eliminate non-performing vocational degrees and unaccredited graduate diploma mills.',
    ],
    sources: [
      {
        title: 'Skin in the Game: Higher Education Accountability Act',
        url: 'https://www.romney.senate.gov/romney-introduces-bill-to-hold-colleges-accountable-for-student-debt/',
        publisher: 'U.S. Senate Press Release (Sen. Mitt Romney)',
        year: '2023',
        category: 'Court / Official Record',
      },
      {
        title: 'Why Colleges Need Skin in the Game',
        url: 'https://www.aei.org/articles/why-colleges-need-skin-in-the-game/',
        publisher: 'American Enterprise Institute (Beth Akers)',
        year: '2021',
        category: 'Scholarship',
      },
    ],
    tags: ['Media & Education', 'Regulation & Markets', 'Taxation & Fiscal'],
    era: '2021–Present',
    relatedIds: ['con-hed-cherry-picking-risk'],
  },
  {
    id: 'con-hed-cherry-picking-risk',
    parentId: 'thesis-hed-risk-sharing',
    kind: 'con',
    title: 'Risk-Sharing Penalties Would Cause Universities to Exclude Low-Income Students',
    summary:
      'Penalizing universities for student loan defaults creates perverse incentives to reject low-income, minority, and first-generation applicants.',
    sections: [
      {
        heading: 'The Perverse Incentive to Cream-Skim Affluent Applicants',
        paragraphs: [
          'If universities are legally liable for loan defaults, admissions offices will rationally protect themselves by rejecting students with lower family wealth, first-generation college applicants, and students entering vital but low-paying public service careers (such as preschool teaching, social work, and elder care).',
          'Elite colleges would admit only affluent students whose parents can co-sign or pay cash, worsening educational segregation and gutting social work and fine arts departments.',
        ],
      },
    ],
    details: [
      'Low-income and minority students face statistically higher default rates due to lack of family emergency wealth reserves.',
      'Universities facing risk-sharing penalties could terminate low-wage public service degrees in social work and elementary education.',
      'Risk-sharing without risk-adjustment metrics exacerbates admissions discrimination against first-generation students.',
    ],
    sources: [
      {
        title: 'The Hazards of Risk-Sharing in Higher Education',
        url: 'https://www.americanprogress.org/article/the-hazards-of-risk-sharing-in-higher-education/',
        publisher: 'Center for American Progress (Antoinette Flores)',
        year: '2019',
        category: 'Watchdog / NGO',
      },
      {
        title: 'Accountability Without Discrimination: Protecting Low-Income Students in Higher Ed Reform',
        url: 'https://tcf.org/content/report/accountability-without-discrimination/',
        publisher: 'The Century Foundation',
        year: '2020',
        category: 'Scholarship',
      },
    ],
    tags: ['Media & Education', 'Civil Liberties', 'Human Rights'],
    era: '2019–Present',
    relatedIds: ['pro-hed-institutional-accountability'],
  },
];

export const higherEducationDebtDataset: DebateGraphDataset = {
  id: 'higher-education-debt',
  version: '1.0.0',
  shortTitle: 'Higher Ed & Student Debt',
  title: 'Higher Education Value & Student Debt Forgiveness',
  subtitle: 'Universal college access & debt jubilee vs. credential inflation, regressivity & moral hazard',
  searchPlaceholder: 'Search student debt, Caplan, Bennett Hypothesis, Brookings, wage premium... (/)',
  epistemologyNote:
    'This graph balances econometric evaluations of higher education returns and debt distributions (Brookings, NY Fed, Georgetown CEW) against sociological analyses of racial wealth gaps and structural models of university cost inflation.',
  availableTags: [
    'Labor & Welfare',
    'Taxation & Fiscal',
    'Macroeconomics',
    'Media & Education',
    'Human Rights',
    'Empirical Studies',
    'Philosophy & Ethics',
    'Housing & Healthcare',
    'Regulation & Markets',
    'Civil Liberties',
    'Science & Innovation',
    'History',
  ],
  shortPillarLabels: {
    'pillar-hed-mobility': '1. Public Good & Racial Equity',
    'pillar-hed-regressive': '2. Regressivity & Moral Hazard',
    'pillar-hed-bubble': '3. Credential Inflation vs. ROI',
    'pillar-hed-reform': '4. Cost Reform & Risk-Sharing',
  },
  lastUpdated: '2026-11',
  nodes: [rootNode, ...pillarNodes, ...thesisNodes, ...proConNodes],
};
