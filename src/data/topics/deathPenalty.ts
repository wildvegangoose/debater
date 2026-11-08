import { DebateGraphDataset } from '../../types/debate';

export const deathPenaltyDataset: DebateGraphDataset = {
  id: 'death-penalty',
  version: '1.0.0',
  shortTitle: 'Capital Punishment',
  title: 'The Death Penalty: Justice vs. Abolition',
  subtitle: 'Moral retribution & ultimate deterrence vs. irreversible state execution & systemic injustice',
  searchPlaceholder: 'Search death penalty, Bryan Stevenson, Blecker, McCleskey, Innocence Project, retribution...',
  epistemologyNote:
    'The capital punishment debate is evaluated across rival normative and empirical disciplines: retributive deontologists and victims’ advocates assert that heinous crimes require an ultimate moral penalty proportional to the act, whereas constitutionalists, human rights ethicists, and criminologists analyze systemic racial bias, astronomical fiscal costs, and the irreversible statistical certainty of executing innocent individuals.',
  availableTags: [
    'Criminal Justice',
    'Civil Liberties',
    'Human Rights',
    'Philosophy & Ethics',
    'International Law',
    'Governance',
    'Empirical Studies',
    'History',
  ],
  shortPillarLabels: {
    'pillar-dp-retribution': '1. Retribution & Justice',
    'pillar-dp-innocence': '2. State Error & Innocence',
    'pillar-dp-bias': '3. Racial & Economic Bias',
    'pillar-dp-deterrence': '4. Deterrence & Fiscal Costs',
  },
  lastUpdated: '2026-03-30',
  nodes: [
    // -------------------------------------------------------------
    // ROOT NODE
    // -------------------------------------------------------------
    {
      id: 'root-death-penalty',
      parentId: null,
      kind: 'root',
      title: 'The Death Penalty: Moral Retribution vs. Absolute Abolition',
      summary:
        'A comprehensive dialectical investigation into the ethics, constitutionality, and empirical reality of capital punishment, weighing claims of moral desert, proportional retribution, and victim closure against the irreversible risk of executing innocent people, systemic racial disparity, and human rights prohibitions.',
      sections: [
        {
          heading: 'The Ultimate Penalty in Modern Civilized Society',
          paragraphs: [
            'Capital punishment—the state-sanctioned execution of a human being as punishment for a crime—stands as the most definitive exercise of sovereign power over an individual. While more than 100 nations have abolished the death penalty in law or practice, it remains an active legal sanction in several major world economies, including the United States, China, Japan, Saudi Arabia, and Iran, sparking intense moral and constitutional contestation.',
            'In landmark debates hosted by the **Oxford Union** and **Open to Debate (formerly Intelligence Squared)**, retributive legal philosopher **Robert Blecker** (*The Death of Punishment*) argued that justice is fundamentally about moral balance, and that perpetrators of atrocities—such as mass shooters and sadistic killers—deserve to suffer and die for their deeds. In sharp contrast, Equal Justice Initiative founder **Bryan Stevenson** (*Just Mercy*) and **Sister Helen Prejean** (*Dead Man Walking*) asserted that the fundamental question is not whether people deserve to die for crimes, but whether the state deserves to kill, given the pervasive reality of fallibility, racism, and poverty in the justice system.',
          ],
        },
        {
          heading: 'Dialectical Structure: Retribution, Error, Bias, and Utility',
          paragraphs: [
            'This debate dataset maps the capital punishment controversy across four interconnected pillars: First, **retributive justice and moral proportionality**, examining Kantian "just deserts," survivor closure, and the limits of state power; Second, **inevitable state error and innocence exonerations**, documenting over 195 death row exonerations in the US since 1973 and the fallibility of eyewitness testimony.',
            'Third, **systemic racial and socioeconomic inequity**, analyzing empirical studies on the race-of-victim disparity (*McCleskey v. Kemp*) and indigent defense representation; and Fourth, **utilitarian deterrence and fiscal realities**, contrasting claims of crime prevention against National Research Council findings and the millions of dollars in excess litigation costs required for capital appeals over Life Without Parole (LWOP).',
          ],
        },
      ],
      details: [
        '**Landmark Debates Integrated:** Robert Blecker vs. Bryan Stevenson and Sister Helen Prejean at Oxford Union and Open to Debate.',
        '**195+ Death Row Exonerations:** Death Penalty Information Center data confirms nearly 200 wrongfully convicted individuals freed from US death rows.',
        '**Global Abolitionist Trajectory:** Over 70% of the world\'s countries have abolished capital punishment in law or practice.',
        '**Four Dialectical Pillars:** Encompasses retributive ethics, innocence and state error, racial and economic disparities, and deterrence/fiscal costs.',
      ],
      sources: [
        {
          title: 'Open to Debate: Abolish the Death Penalty (Robert Blecker vs. Diann Rust-Tierney)',
          url: 'https://opentodebate.org/debate/abolish-the-death-penalty/',
          publisher: 'Open to Debate (formerly Intelligence Squared US)',
          year: '2015',
          category: 'Debate / Broadcast',
        },
        {
          title: 'Just Mercy: A Story of Justice and Redemption',
          url: 'https://eji.org/just-mercy/',
          publisher: 'Spiegel & Grau / Bryan Stevenson',
          year: '2014',
          category: 'Scholarship',
        },
        {
          title: 'The Death of Punishment: Searching for Justice among the Worst of the Worst',
          url: 'https://us.macmillan.com/books/9781137279323/thedeathofpunishment',
          publisher: 'Palgrave Macmillan / Robert Blecker',
          year: '2013',
          category: 'Scholarship',
        },
        {
          title: 'Death Penalty Information Center (DPIC): Innocence Database and Exonerations',
          url: 'https://deathpenaltyinfo.org/policy-issues/innocence',
          publisher: 'Death Penalty Information Center',
          year: '2024',
          category: 'Watchdog / NGO',
        },
      ],
      tags: ['Criminal Justice', 'Civil Liberties', 'Human Rights', 'Philosophy & Ethics'],
      era: '1764–2026',
      relatedIds: ['pillar-dp-retribution', 'pillar-dp-innocence', 'pillar-dp-bias', 'pillar-dp-deterrence'],
    },

    // -------------------------------------------------------------
    // PILLAR 1: RETRIBUTIVE JUSTICE & MORAL PROPORTIONALITY
    // -------------------------------------------------------------
    {
      id: 'pillar-dp-retribution',
      parentId: 'root-death-penalty',
      kind: 'pillar',
      title: 'Pillar 1: Retributive Justice, Moral Desert & Proportionality',
      summary:
        'The deontological case for capital punishment: justice requires that perpetrators of monstrous mass atrocities receive a punishment proportional to their moral wickedness, restoring moral order and validating victims.',
      sections: [
        {
          heading: 'Kantian Retributivism and the Categorical Imperative',
          paragraphs: [
            'In *The Metaphysics of Morals* (1797), philosopher **Immanuel Kant** formulated the classical retributive defense of capital punishment: justice is an uncompromisable categorical imperative. If a person commits murder, Kant argued, they have effectively declared that human life possesses no value; executing them does not degrade their humanity, but respects their moral autonomy by subjecting them to the universalized consequences of their own actions.',
            'Contemporary retributive philosopher **Robert Blecker** (*The Death of Punishment*) argues that punishment must be measured by "just deserts." For the "worst of the worst"—such as the perpetrators of the Oklahoma City bombing (Timothy McVeigh), the Charleston church massacre (Dylann Roof), or the Tree of Life synagogue shooting—mere life imprisonment with television, exercise, and library access is morally offensive and fails to express the community’s righteous indignation.',
          ],
        },
        {
          heading: 'Victim Solace and the Expressive Function of Criminal Law',
          paragraphs: [
            'Retributivists maintain that the primary objective of criminal justice is not rehabilitation or deterrence, but moral retribution (*lex talionis*). By formally executing a murderer, the sovereign community affirms the sacred value of the innocent victim\'s life, demonstrating that their destruction cannot be balanced by mere prison maintenance.',
          ],
        },
      ],
      details: [
        '**Kantian Retribution:** Punishment must be imposed strictly because the crime was committed, not for utilitarian social utility.',
        '**"Worst of the Worst" Doctrine:** Reserving capital punishment strictly for perpetrators of premeditated, cruel mass slaughter.',
        '**Expressive Function of Law:** Public execution functions as the ultimate societal condemnation of absolute evil.',
        '**Victim Dignity Affirmation:** Execution affirms that the victim\'s life was sacred and irreplaceable.',
      ],
      sources: [
        {
          title: 'The Metaphysics of Morals: The Philosophy of Law',
          url: 'https://www.cambridge.org/core/books/kant-the-metaphysics-of-morals/9C8DCF0B461EE2FB3CF5BC6A42921DE1',
          publisher: 'Cambridge University Press / Immanuel Kant',
          year: '1797',
          category: 'Scholarship',
        },
        {
          title: 'The Death of Punishment: Searching for Justice among the Worst of the Worst',
          url: 'https://us.macmillan.com/books/9781137279323/thedeathofpunishment',
          publisher: 'Palgrave Macmillan / Robert Blecker',
          year: '2013',
          category: 'Scholarship',
        },
        {
          title: 'The Ultimate Punishment: A Defense',
          url: 'https://www.jstor.org/stable/1341082',
          publisher: 'Harvard Law Review / Ernest van den Haag',
          year: '1986',
          category: 'Scholarship',
        },
      ],
      tags: ['Philosophy & Ethics', 'Criminal Justice', 'Governance'],
      era: '1797–2026',
      relatedIds: ['thesis-dp-moral-proportionality', 'thesis-dp-victim-closure', 'pillar-dp-innocence'],
    },

    // THESIS 1.1
    {
      id: 'thesis-dp-moral-proportionality',
      parentId: 'pillar-dp-retribution',
      kind: 'thesis',
      title: 'Thesis 1.1: Moral Proportionality & Desert vs. The Inherent Sanctity of Human Life',
      summary:
        'Retributivists argue heinous atrocities require proportional execution, while abolitionists maintain that human dignity is inalienable and state execution degrades human rights.',
      sections: [
        {
          heading: 'The Moral Imperative of Proportional Desert',
          paragraphs: [
            'Retributive justice asserts that the severity of punishment must match the moral depravity of the crime. When an individual plans and executes the horrific torture and murder of children or mass terror attacks, allowing them to live out decades in a secure facility with three meals a day, medical care, and correspondence insults basic human justice.',
            'As legal scholar **Ernest van den Haag** famously argued in the *Harvard Law Review*, to spare the life of a murderer is to place a higher value on the life of the killer than on the lives of their victims, creating a profound moral imbalance.',
          ],
        },
        {
          heading: 'The Inalienability of Human Dignity',
          paragraphs: [
            'Conversely, philosophical abolitionists like **Sister Helen Prejean** and the **Catholic Church under Pope Francis** (who amended the Catechism in 2018 to declare the death penalty inadmissible in all cases) argue that human dignity is conferred by existence, not by moral merit. When the state cold-bloodedly straps a defenseless human being to a gurney and poisons their veins, it mirrors the very violence it purports to condemn.',
          ],
        },
      ],
      details: [
        '**Moral Proportionality:** The punishment must correspond to the heinousness of the crime to achieve justice.',
        '**Van den Haag\'s Asymmetry:** Sparing the killer devalues the life of the innocent victim.',
        '**Pope Francis Catechism Revision (2018):** Catholic Church formally declared capital punishment inadmissible in all circumstances.',
      ],
      sources: [
        {
          title: 'Catechism of the Catholic Church: Revision of No. 2267 on the Death Penalty',
          url: 'https://press.vatican.va/content/salastampa/en/bollettino/pubblico/2018/08/02/180802a.html',
          publisher: 'Holy See Press Office / Pope Francis',
          year: '2018',
          category: 'Primary Text / Treaty',
        },
        {
          title: 'The Ultimate Punishment: A Defense',
          url: 'https://www.jstor.org/stable/1341082',
          publisher: 'Harvard Law Review / Ernest van den Haag',
          year: '1986',
          category: 'Scholarship',
        },
      ],
      tags: ['Philosophy & Ethics', 'Human Rights', 'Criminal Justice'],
      era: '1986–2018',
      relatedIds: ['pro-dp-heinous-monsters', 'con-dp-state-violence-sanctity'],
    },

    // PRO 1.1.1
    {
      id: 'pro-dp-heinous-monsters',
      parentId: 'thesis-dp-moral-proportionality',
      kind: 'pro',
      title: 'Evidence: The Execution of Mass Terrorists (McVeigh, Roof, Tsarnaev)',
      summary:
        'Sentencing records in mass casualty terrorism cases illustrate public consensus that crimes of supreme malice require the ultimate penalty.',
      sections: [
        {
          heading: 'The Federal Execution of Timothy McVeigh (2001)',
          paragraphs: [
            'In April 1995, **Timothy McVeigh** detonated a truck bomb outside the Alfred P. Murrah Federal Building in Oklahoma City, slaughtering 168 innocent people, including 19 infants and toddlers in a day-care center. McVeigh showed zero remorse, characterizing the dead children as "collateral damage."',
            'In June 2001, McVeigh was executed by lethal injection at the federal penitentiary in Terre Haute, Indiana. A broad bipartisan supermajority of the American public—exceeding 80%—supported the execution, recognizing that for an unrepentant terrorist who deliberately murdered dozens of children to overthrow democratic government, life imprisonment was completely insufficient to answer for the crime.',
          ],
        },
        {
          heading: 'Racist Massacres and Hate Crime Capital Verdicts',
          paragraphs: [
            'Similar moral consensus surrounded the federal death sentences of **Dylann Roof** (who murdered nine African American churchgoers in Charleston in 2016) and **Robert Bowers** (who murdered eleven Jewish worshippers at the Tree of Life Synagogue in Pittsburgh in 2018), where juries unanimously affirmed that mass racist and anti-Semitic slaughter demanded the supreme penalty.',
          ],
        },
      ],
      details: [
        '**Oklahoma City Bombing (168 Dead):** Execution of Timothy McVeigh supported by over 80% of the US public.',
        '**Unanimous Hate Crime Verdicts:** Dylann Roof and Robert Bowers sentenced to death for white supremacist and anti-Semitic massacres.',
        '**Moral Boundary Defense:** Proves execution is reserved for deliberate acts of mass terrorism that shock the conscience of mankind.',
      ],
      sources: [
        {
          title: 'United States v. Timothy James McVeigh: Tenth Circuit Court of Appeals Affirmance',
          url: 'https://law.justia.com/cases/federal/appellate-courts/f3/153/1166/579979/',
          publisher: 'US Court of Appeals for the Tenth Circuit',
          year: '1998',
          category: 'Court / Official Record',
        },
        {
          title: 'Jury Sentences Tree of Life Synagogue Shooter to Death',
          url: 'https://www.justice.gov/opa/pr/jury-recommends-death-sentence-perpetrator-pittsburgh-synagogue-shooting',
          publisher: 'US Department of Justice Office of Public Affairs',
          year: '2023',
          category: 'Court / Official Record',
        },
      ],
      tags: ['Criminal Justice', 'National Security', 'Philosophy & Ethics'],
      era: '2001–2023',
      relatedIds: ['thesis-dp-moral-proportionality', 'con-dp-state-violence-sanctity'],
    },

    // CON 1.1.2
    {
      id: 'con-dp-state-violence-sanctity',
      parentId: 'thesis-dp-moral-proportionality',
      kind: 'con',
      title: 'Counter-Argument: The State Lacks Moral Authority to Execute: Inherent Human Dignity',
      summary:
        'Civil liberties and human rights theorists argue that granting the state the power to kill its own citizens is the ultimate authoritarian overreach and violates the Eighth Amendment.',
      sections: [
        {
          heading: 'Cesare Beccaria and the Rejection of State Homicide',
          paragraphs: [
            'In his foundational 1764 treatise *On Crimes and Punishments*, **Cesare Beccaria** argued that the social contract cannot logically include the right of the state to execute citizens. In entering civil society, individuals surrender small portions of their natural liberty in exchange for protection; no rational human being ever surrendered their very right to life.',
            'Beccaria observed: "Is it not absurd that the laws, which detest and punish homicide, should, in order to prevent murder, commit murder themselves?" State execution transforms cold-blooded premeditated killing into a public spectacle, brutalizing the moral sensibilities of society rather than elevating them.',
          ],
        },
        {
          heading: 'Bryan Stevenson on the Limits of State Authority',
          paragraphs: [
            'Bryan Stevenson continually emphasizes that the central moral question of capital punishment is not whether the offender deserves to die, but: **"Do we deserve to kill?"** Given the proven history of governmental corruption, fallibility, and violence, granting the bureaucratic state the sovereign power to extinguish human life is fundamentally incompatible with a free, constitutional republic.',
          ],
        },
      ],
      details: [
        '**Beccaria’s Social Contract Critique (1764):** The right to execute cannot be logically derived from the social contract.',
        '**State Murder Paradox:** The law cannot consistently condemn homicide by committing deliberate, planned homicide.',
        '**Bryan Stevenson\'s Question:** Whether a fallible, biased state possesses the moral authority to extinguish human existence.',
      ],
      sources: [
        {
          title: 'On Crimes and Punishments (Dei delitti e delle pene)',
          url: 'https://oll.libertyfund.org/title/beccaria-an-essay-on-crimes-and-punishments',
          publisher: 'Liberty Fund / Cesare Beccaria',
          year: '1764',
          category: 'Scholarship',
        },
        {
          title: 'Just Mercy: A Story of Justice and Redemption',
          url: 'https://eji.org/just-mercy/',
          publisher: 'Spiegel & Grau / Bryan Stevenson',
          year: '2014',
          category: 'Scholarship',
        },
      ],
      tags: ['Civil Liberties', 'Human Rights', 'Philosophy & Ethics'],
      era: '1764–2014',
      relatedIds: ['pro-dp-heinous-monsters', 'thesis-dp-moral-proportionality'],
    },

    // THESIS 1.2
    {
      id: 'thesis-dp-victim-closure',
      parentId: 'pillar-dp-retribution',
      kind: 'thesis',
      title: 'Thesis 1.2: Victim Rights and Solace: Cathartic Finality vs. Protracted Retraumatization',
      summary:
        'Advocates argue execution brings final closure to grieving families, but victims’ relatives frequently report decades of appeals inflict continuous psychological trauma.',
      sections: [
        {
          heading: 'The Promise of Cathartic Finality for Grieving Families',
          paragraphs: [
            'Advocates for victims’ families maintain that the execution of a murderer provides necessary psychological closure. For families who lost loved ones to horrific violence, knowing that the killer remains alive—exercising, eating, and giving media interviews—feels like an ongoing, continuous assault on the memory of the deceased.',
            'A capital sentence brings definitive finality: the murderer is permanently eradicated from existence, ensuring they can never kill a prison guard, escape, or threaten the victim’s surviving family members again.',
          ],
        },
        {
          heading: 'Decades of Appeals as a "Trauma Machine"',
          paragraphs: [
            'Conversely, organizations like **Murder Victims’ Families for Human Rights** demonstrate that the capital punishment process acts as a secondary victimization machine. In the United States, the average wait time on death row exceeds **20 years**, forcing victims’ families to endure dozens of traumatizing appellate hearings, stays of execution, and media frenzies, preventing genuine healing.',
          ],
        },
      ],
      details: [
        '**Cathartic Finality Thesis:** Execution permanently terminates the threat and provides a formal endpoint to grief.',
        '**20+ Year Death Row Delays:** Bureaucratic appeals drag on for decades, trapping families in continuous judicial limbo.',
        '**Victims\' Families Divided:** Many surviving families (e.g., Boston Marathon bombing victims) explicitly advocate for Life Without Parole.',
      ],
      sources: [
        {
          title: 'The Impact of the Death Penalty on Victims\' Families: Healing or Hurting?',
          url: 'https://deathpenaltyinfo.org/policy-issues/victims-families',
          publisher: 'Death Penalty Information Center',
          year: '2023',
          category: 'Watchdog / NGO',
        },
        {
          title: 'The Death of Punishment',
          url: 'https://us.macmillan.com/books/9781137279323/thedeathofpunishment',
          publisher: 'Palgrave Macmillan / Robert Blecker',
          year: '2013',
          category: 'Scholarship',
        },
      ],
      tags: ['Criminal Justice', 'Philosophy & Ethics'],
      era: '2013–2024',
      relatedIds: ['pro-dp-survivor-closure', 'con-dp-trauma-prolongation'],
    },

    // PRO 1.2.1
    {
      id: 'pro-dp-survivor-closure',
      parentId: 'thesis-dp-victim-closure',
      kind: 'pro',
      title: 'Evidence: Testimonies of Closure and Total Elimination of Escapes / Prison Murders',
      summary:
        'Victim impact statements show executions provide closure, while permanently eliminating the risk of prison escape or violence against guards and fellow inmates.',
      sections: [
        {
          heading: 'The Finality of Capital Execution for Families',
          paragraphs: [
            'In numerous high-profile executions, surviving family members testified that witnessing the execution brought an overwhelming sense of peace and relief. During the execution of serial killer Ted Bundy in Florida in 1989, or John Wayne Gacy in Illinois in 1994, families of the victims stated that knowing the predator had ceased to breathe allowed them to finally lay their grief to rest without fearing parole or judicial commutation.',
            'Furthermore, the death penalty eliminates the risk of future violence inside correctional facilities. Sociologist **Ernest van den Haag** noted that convicted murderers sentenced to life imprisonment have literally nothing to lose; they can murder correctional officers, prison nurses, and fellow inmates with absolute impunity unless capital punishment exists as a final deterrent.',
          ],
        },
        {
          heading: 'Inability to Commit Future Harm',
          paragraphs: [
            'History records multiple instances of murderers escaping custody or being erroneously paroled to kill again. Execution is the single 100% irreversible guarantee that a dangerous predator will never harm another human being.',
          ],
        },
      ],
      details: [
        '**Psychological Closure Testimonies:** Documented relief among surviving families following the execution of serial murderers.',
        '**Zero Incarcerated Murder Immunity:** Without the death penalty, lifers can kill guards and inmates with zero additional punishment.',
        '**Absolute Incapacitation:** The only completely foolproof protection against prison escapes, commutations, and recidivism.',
      ],
      sources: [
        {
          title: 'Victim Impact Testimony in Capital Sentencing Hearings',
          url: 'https://www.ojp.gov/ncjrs/virtual-library/abstracts/victim-impact-evidence-capital-sentencing-hearings',
          publisher: 'US Department of Justice Office of Justice Programs',
          year: '2004',
          category: 'Court / Official Record',
        },
        {
          title: 'The Ultimate Punishment: A Defense',
          url: 'https://www.jstor.org/stable/1341082',
          publisher: 'Harvard Law Review / Ernest van den Haag',
          year: '1986',
          category: 'Scholarship',
        },
      ],
      tags: ['Criminal Justice', 'Philosophy & Ethics'],
      era: '1986–2020',
      relatedIds: ['thesis-dp-victim-closure', 'con-dp-trauma-prolongation'],
    },

    // CON 1.2.2
    {
      id: 'con-dp-trauma-prolongation',
      parentId: 'thesis-dp-victim-closure',
      kind: 'con',
      title: 'Counter-Argument: Decades of Appellate Limbo Re-Traumatizes Victims’ Families',
      summary:
        'Empirical psychological studies show families of murder victims in Life Without Parole states heal significantly faster than those trapped in 20-year capital appellate marathons.',
      sections: [
        {
          heading: 'The Rigby Study on Victim Healing and Capital Appeals',
          paragraphs: [
            'A landmark study by researchers **Marilyn Armour and Mark Umbreit** published in the *Marquette Law Review* compared family members of murder victims in Texas (an active death penalty state) with those in Minnesota (a Life Without Parole state). The study revealed that survivors in Minnesota exhibited **significantly greater psychological well-being, less depression, and faster healing** than survivors in Texas.',
            'In capital cases, survivors were subjected to decades of retrials, appeals, and stays of execution, keeping the murderer at the center of the news media and reopening trauma over and over again. By contrast, a sentence of Life Without Parole brings immediate, swift finality on day one: the killer vanishes into a maximum-security prison and is never spoken of in court again.',
          ],
        },
        {
          heading: 'Victims\' Families Opposing Capital Punishment',
          paragraphs: [
            'Following the 2013 Boston Marathon bombing, the parents of eight-year-old victim Martin Richard published a front-page editorial in *The Boston Globe* urging the Department of Justice not to seek the death penalty for Dzhokhar Tsarnaev, pleading: "We know that the government has its reasons for seeking the death penalty, but the continued pursuit of that punishment could bring years of painful appeals and prolong the most painful day of our lives."',
          ],
        },
      ],
      details: [
        '**Marquette Law Review Study:** Proved families in LWOP states heal faster and experience less trauma than in capital states.',
        '**Media Erasure with LWOP:** Life without parole immediately erases the offender from the public stage without endless appeals.',
        '**Boston Marathon Family Plea:** Parents of 8-year-old Martin Richard begged DOJ to abandon the death penalty to avoid decades of retraumatization.',
      ],
      sources: [
        {
          title: 'Assessing the Impact of the Ultimate Penal Sanction on Homicide Survivors: A Two State Comparison',
          url: 'https://scholarship.law.marquette.edu/mulr/vol96/iss1/3/',
          publisher: 'Marquette Law Review / Marilyn Armour & Mark Umbreit',
          year: '2012',
          category: 'Empirical / Economic Study',
        },
        {
          title: 'To End the Anguish, Drop the Death Penalty (Bill and Denise Richard)',
          url: 'https://www.bostonglobe.com/metro/2015/04/17/end-anguish-drop-death-penalty/oclyAZeNxSZ8rpakew7t4K/story.html',
          publisher: 'The Boston Globe',
          year: '2015',
          category: 'Debate / Broadcast',
        },
      ],
      tags: ['Criminal Justice', 'Empirical Studies', 'Civil Liberties'],
      era: '2012–2015',
      relatedIds: ['pro-dp-survivor-closure', 'thesis-dp-victim-closure'],
    },

    // -------------------------------------------------------------
    // PILLAR 2: STATE ERROR & INNOCENCE EXONERATIONS
    // -------------------------------------------------------------
    {
      id: 'pillar-dp-innocence',
      parentId: 'root-death-penalty',
      kind: 'pillar',
      title: 'Pillar 2: Inevitable State Error, Fallibility & Innocence Exonerations',
      summary:
        'Examines the irreversible epistemic danger of capital punishment: human justice systems are fundamentally fallible, and over 195 individuals have been exonerated from US death rows since 1973.',
      sections: [
        {
          heading: 'The Irreversible Black Swan: Executing the Innocent',
          paragraphs: [
            'In all human endeavors, institutional error is inevitable. In property disputes or commercial litigation, judicial mistakes can be remedied through financial compensation; in standard criminal incarceration, a wrongfully convicted prisoner can be released and indemnified. In capital punishment, however, the sanction is **completely irreversible**. Once the state poisons or electrocutes a citizen, a subsequent discovery of innocence cannot undo the execution.',
            'Founded by **Barry Scheck and Peter Neufeld** in 1992, the **Innocence Project** pioneered the use of post-conviction DNA testing, revealing hundreds of wrongful convictions in cases where eyewitnesses were 100% confident, confession statements were signed, and prosecutors secured capital convictions beyond all reasonable doubt.',
          ],
        },
        {
          heading: 'The Empirical Exoneration Rate: The Gross Study',
          paragraphs: [
            'A landmark statistical study published in the *Proceedings of the National Academy of Sciences (PNAS)* by law professor and statistician **Samuel Gross** calculated that at least **4.1% of all defendants sentenced to death in the United States are factually innocent**. In a system that has sentenced over 8,500 people to death since 1973, this means hundreds of innocent Americans have faced execution.',
          ],
        },
      ],
      details: [
        '**195+ Death Row Exonerations:** Verified by the Death Penalty Information Center across 29 US states.',
        '**PNAS 4.1% Innocence Rate:** Peer-reviewed statistical calculation that 1 in 25 death row inmates is innocent.',
        '**Irreversible Finality:** No judicial mechanism exists to restore life once an innocent citizen is executed.',
        '**Causes of Wrongful Conviction:** Eyewitness misidentification, coerced confessions, incentivized jailhouse informants, and junk forensic science.',
      ],
      sources: [
        {
          title: 'Rate of False Conviction of Criminal Defendants Who Are Sentenced to Death',
          url: 'https://www.pnas.org/doi/10.1073/pnas.1306417111',
          publisher: 'Proceedings of the National Academy of Sciences (PNAS) / Samuel R. Gross et al.',
          year: '2014',
          category: 'Empirical / Economic Study',
        },
        {
          title: 'Innocence and the Crisis in the American Death Penalty',
          url: 'https://deathpenaltyinfo.org/policy-issues/innocence',
          publisher: 'Death Penalty Information Center',
          year: '2024',
          category: 'Watchdog / NGO',
        },
        {
          title: 'Actual Innocence: When Justice Goes Wrong and How to Make It Right',
          url: 'https://www.penguinrandomhouse.com/books/161474/actual-innocence-by-barry-scheck-peter-neufeld-and-jim-dwyer/',
          publisher: 'Doubleday / Barry Scheck, Peter Neufeld, & Jim Dwyer',
          year: '2000',
          category: 'Scholarship',
        },
      ],
      tags: ['Criminal Justice', 'Civil Liberties', 'Human Rights', 'Empirical Studies'],
      era: '1973–2026',
      relatedIds: ['thesis-dp-exoneration-record', 'thesis-dp-flawed-evidence', 'pillar-dp-bias'],
    },

    // THESIS 2.1
    {
      id: 'thesis-dp-exoneration-record',
      parentId: 'pillar-dp-innocence',
      kind: 'thesis',
      title: 'Thesis 2.1: The Statistical Inevitability of Executing the Innocent',
      summary:
        'The documented exoneration of nearly 200 death row prisoners demonstrates that innocent people are inevitably sentenced to death and executed by fallible state courts.',
      sections: [
        {
          heading: 'Documenting the 195+ Exonerations',
          paragraphs: [
            'According to the **Death Penalty Information Center (DPIC)** National Innocence Database, since 1973, at least **197 individuals** in 29 states have been formally exonerated from death row after being sentenced to die for crimes they did not commit. In dozens of these cases, the innocent prisoner came within hours of execution before last-minute stays or newly discovered DNA evidence proved their total innocence.',
            'In landmark cases like **Kirk Bloodsworth** (the first person in the US exonerated from death row through DNA in 1993) and **Anthony Ray Hinton** (who spent 30 years on Alabama\'s death row for a crime he could not physically have committed), wrongful convictions occurred because prosecutors suppressed exculpatory evidence and relied on faulty ballistics analysis.',
          ],
        },
        {
          heading: 'Cases of Likely Innocent Executed Individuals',
          paragraphs: [
            'Abolitionists point to post-execution investigations—such as the case of **Cameron Todd Willingham** in Texas (executed in 2004 for an arson fire that forensic experts later proved was an accidental electrical fire) and **Carlos DeLuna** in Texas (executed in 1989 for a murder committed by a lookalike)—as conclusive proof that the state has executed completely innocent citizens.',
          ],
        },
      ],
      details: [
        '**197 Verified Exonerations:** Nearly 200 individuals released from death row due to factual innocence.',
        '**Kirk Bloodsworth Precedent (1993):** First death row inmate exonerated through post-conviction DNA testing.',
        '**Cameron Todd Willingham Investigation:** Arson science analysis proved Willingham was executed for an accidental house fire.',
      ],
      sources: [
        {
          title: 'The National Registry of Exonerations: Death Row Exonerations Data',
          url: 'https://www.law.umich.edu/special/exoneration/Pages/about.aspx',
          publisher: 'University of Michigan Law School & National Registry of Exonerations',
          year: '2024',
          category: 'Court / Official Record',
        },
        {
          title: 'Trial by Fire: Did Texas Execute an Innocent Man?',
          url: 'https://www.newyorker.com/magazine/2009/09/07/trial-by-fire',
          publisher: 'The New Yorker / David Grann',
          year: '2009',
          category: 'Debate / Broadcast',
        },
      ],
      tags: ['Criminal Justice', 'Civil Liberties', 'Empirical Studies'],
      era: '1973–2024',
      relatedIds: ['pro-dp-dna-revolution', 'con-dp-super-due-process'],
    },

    // PRO 2.1.1
    {
      id: 'pro-dp-dna-revolution',
      parentId: 'thesis-dp-exoneration-record',
      kind: 'pro',
      title: 'Evidence: Kirk Bloodsworth, Anthony Ray Hinton & The 4.1% Innocence Study',
      summary:
        'Empirical data confirms that for every 8.2 people executed in the United States since 1976, one innocent person on death row has been exonerated.',
      sections: [
        {
          heading: 'The Staggering 1-in-8 Error Ratio',
          paragraphs: [
            'Between 1976 and 2024, the United States executed 1,582 individuals. During that exact same period, 197 death row inmates were exonerated. This means that for every **8.2 executions carried out, one innocent person was discovered and exonerated**—an astonishingly high error rate that would be deemed catastrophic and intolerable in any other public or commercial system (such as commercial aviation or pharmaceutical medicine).',
            'In *The Sun Does Shine*, **Anthony Ray Hinton** documents how he was arrested in 1985 for two robbery-murders in Birmingham, Alabama, solely because the state claimed his mother’s revolver fired the fatal bullets. Despite possessing an ironclad alibi—he was working inside a locked factory warehouse 15 miles away at the exact time of the crimes—an all-white jury convicted him. Thirty years later, modern ballistics tests confirmed the gun could not have fired the bullets, proving his absolute innocence.',
          ],
        },
        {
          heading: 'Statistical Certainty of Wrongful Execution',
          paragraphs: [
            'Given the 4.1% baseline error rate calculated by Samuel Gross at the University of Michigan, it is a statistical certainty that among the more than 1,500 people executed since 1976, dozens were innocent individuals whose cases were never unraveled in time.',
          ],
        },
      ],
      details: [
        '**1 Exoneration for Every 8.2 Executions:** Unprecedented error ratio in modern criminal jurisprudence.',
        '**Anthony Ray Hinton\'s 30 Years on Death Row:** Exonerated after three decades of false imprisonment on debunked ballistics.',
        '**Statistical Certainty:** PNAS calculations prove that wrongful executions are mathematically inevitable in a fallible system.',
      ],
      sources: [
        {
          title: 'Rate of False Conviction of Criminal Defendants Who Are Sentenced to Death',
          url: 'https://www.pnas.org/doi/10.1073/pnas.1306417111',
          publisher: 'PNAS / Samuel R. Gross et al.',
          year: '2014',
          category: 'Empirical / Economic Study',
        },
        {
          title: 'The Sun Does Shine: How I Found Life and Freedom on Death Row',
          url: 'https://us.macmillan.com/books/9781250124715/thesundoesshine',
          publisher: 'St. Martin\'s Press / Anthony Ray Hinton',
          year: '2018',
          category: 'Scholarship',
        },
      ],
      tags: ['Criminal Justice', 'Empirical Studies', 'Human Rights'],
      era: '2014–2018',
      relatedIds: ['thesis-dp-exoneration-record', 'con-dp-super-due-process'],
    },

    // CON 2.1.2
    {
      id: 'con-dp-super-due-process',
      parentId: 'thesis-dp-exoneration-record',
      kind: 'con',
      title: 'Counter-Argument: Modern "Super Due Process" and Post-Gregg Safeguards',
      summary:
        'Defenders argue that post-1976 capital jurisprudence imposes extraordinary procedural safeguards, state and federal habeas reviews, and DNA certainty that prevent wrongful executions.',
      sections: [
        {
          heading: 'The Constitutional Doctrine of "Death Is Different"',
          paragraphs: [
            'In *Gregg v. Georgia* (1976), the U.S. Supreme Court established the doctrine that "death is different." The Court mandated bifurcated trials (separating guilt determination from sentencing), required juries to weigh statutory aggravating and mitigating factors, and guaranteed automatic direct appeals to state supreme courts followed by state post-conviction review and federal habeas corpus petitions.',
            'Legal defenders argue that the very fact that 197 individuals were exonerated **proves that the appellate system works**: the multi-layered, 15-to-20-year legal review successfully discovers errors, hears newly discovered evidence, and frees innocent defendants before execution occurs.',
          ],
        },
        {
          heading: 'The Modern Era of Forensic DNA Certainty',
          paragraphs: [
            'Most historical exonerations stemmed from trials conducted in the 1970s and 1980s, before the advent of computerized database fingerprinting, high-resolution forensic video surveillance, and digital STR DNA profiling. In contemporary capital prosecutions, prosecutors rarely seek the death penalty without overwhelming physical, digital, and genetic proof of guilt.',
          ],
        },
      ],
      details: [
        '**Bifurcated Trials under Gregg (1976):** Guilt phase completely separated from sentencing phase with statutory aggravating factors.',
        '**Exonerations Prove Appellate Success:** Multi-tiered appeals successfully identified and corrected erroneous verdicts.',
        '**Contemporary Forensic Precision:** Modern digital surveillance and DNA testing eliminate the ambiguities of historical trials.',
      ],
      sources: [
        {
          title: 'Gregg v. Georgia, 428 U.S. 153 (1976)',
          url: 'https://supreme.justia.com/cases/federal/us/428/153/',
          publisher: 'Supreme Court of the United States',
          year: '1976',
          category: 'Court / Official Record',
        },
        {
          title: 'Capital Punishment and the Presumption of Innocence',
          url: 'https://scholarship.law.wm.edu/wmlr/vol55/iss4/3/',
          publisher: 'William & Mary Law Review',
          year: '2014',
          category: 'Scholarship',
        },
      ],
      tags: ['Criminal Justice', 'Civil Liberties'],
      era: '1976–2014',
      relatedIds: ['pro-dp-dna-revolution', 'thesis-dp-exoneration-record'],
    },

    // THESIS 2.2
    {
      id: 'thesis-dp-flawed-evidence',
      parentId: 'pillar-dp-innocence',
      kind: 'thesis',
      title: 'Thesis 2.2: Epistemic Fallibility: Eyewitness Misidentification & Unvalidated Forensics',
      summary:
        'Capital trials routinely rely on unvalidated forensic "junk science," incentivized jailhouse informants, and fallible eyewitness identifications that deceive jurors.',
      sections: [
        {
          heading: 'The Fragility of Eyewitness Memory and Coerced Confessions',
          paragraphs: [
            'Psychological research by cognitive scientist **Elizabeth Loftus** (*Eyewitness Testimony*) has conclusively proven that human memory does not operate like a video recording; it is highly malleable, easily contaminated by suggestive police lineups, and degrades rapidly under stress. Eyewitness misidentification is the single leading contributing factor in over **70% of wrongful convictions overturned by DNA**.',
            'Furthermore, intensive police interrogation techniques (such as the Reid Technique) routinely elicit false confessions from frightened, young, or intellectually disabled suspects, who falsely confess to avoid physical exhaustion or in response to false police promises.',
          ],
        },
        {
          heading: 'The Dismantling of Forensic "Junk Science"',
          paragraphs: [
            'In a devastating 2009 report, the **National Academy of Sciences (NAS)** (*Strengthening Forensic Science in the United States*) concluded that aside from nuclear DNA analysis, virtually none of the traditional forensic disciplines routinely used to secure death sentences—including **bite-mark matching, microscopic hair comparison, shoe-print analysis, and firearm tool-mark identification**—possesses rigorous scientific validity.',
          ],
        },
      ],
      details: [
        '**70%+ DNA Exonerations Involve Eyewitness Error:** Psychological proof that confident eyewitnesses are routinely mistaken.',
        '**NAS Forensic Science Report (2009):** Bite-mark and microscopic hair comparisons debunked as unscientific junk science.',
        '**Incentivized Informants:** Jailhouse "snitches" fabricate confessions in exchange for sentence reductions and cash.',
      ],
      sources: [
        {
          title: 'Strengthening Forensic Science in the United States: A Path Forward',
          url: 'https://nap.nationalacademies.org/catalog/12585/strengthening-forensic-science-in-the-united-states-a-path-forward',
          publisher: 'National Academies of Sciences, Engineering, and Medicine (NASEM)',
          year: '2009',
          category: 'Empirical / Economic Study',
        },
        {
          title: 'Eyewitness Testimony',
          url: 'https://www.hup.harvard.edu/books/9780674287778',
          publisher: 'Harvard University Press / Elizabeth F. Loftus',
          year: '1979',
          category: 'Scholarship',
        },
      ],
      tags: ['Criminal Justice', 'Empirical Studies', 'Civil Liberties'],
      era: '1979–2009',
      relatedIds: ['pro-dp-junk-science-coercion', 'con-dp-appellate-safeguards'],
    },

    // PRO 2.2.1
    {
      id: 'pro-dp-junk-science-coercion',
      parentId: 'thesis-dp-flawed-evidence',
      kind: 'pro',
      title: 'Evidence: FBI Microscopic Hair Comparison Review & Bite-Mark Exonerations',
      summary:
        'In 2015, the FBI formally admitted that its microscopic hair analysis testimony was scientifically flawed in over 90% of reviewed capital cases, leading to multiple wrongful executions.',
      sections: [
        {
          heading: 'The FBI Microscopic Hair Comparison Scandal (2015)',
          paragraphs: [
            'In April 2015, following an exhaustive joint audit conducted with the Innocence Project and the National Association of Criminal Defense Lawyers (NACDL), the **Federal Bureau of Investigation (FBI)** and the **U.S. Department of Justice** made a historic public admission: FBI forensic examiners gave flawed, scientifically unsupportable testimony in **over 90% of reviewed criminal trials** involving microscopic hair analysis over a twenty-year period.',
            'The audit reviewed cases of 268 defendants where FBI hair examiners testified; errors were found in 257 cases (96%). Shockingly, **32 of those defendants had been sentenced to death**, and **14 had already been executed or died in prison** before the scientific falsehoods of the state’s forensic evidence were acknowledged.',
          ],
        },
        {
          heading: 'The Total Discrediting of Bite-Mark Analysis',
          paragraphs: [
            'Similarly, forensic odontology (bite-mark analysis)—used for decades to secure capital murder convictions—was thoroughly repudiated by the **President\'s Council of Advisors on Science and Technology (PCAST)** in 2016, noting that forensic dentists cannot even agree on whether an injury is a human bite mark, let alone match it to an individual suspect.',
          ],
        },
      ],
      details: [
        '**FBI Forensic Admission (2015):** Flawed testimony in 96% of hair comparison trials involving 32 death row prisoners.',
        '**14 Death Row Prisoners Died or Executed:** Killed by the state before the fraudulent hair forensics were exposed.',
        '**PCAST Repudiation of Bite Marks (2016):** Confirmed bite-mark matching lacks any foundational scientific validity.',
      ],
      sources: [
        {
          title: 'FBI Testimony on Microscopic Hair Analysis Contained Errors in at Least 90 Percent of Cases',
          url: 'https://www.fbi.gov/news/press-releases/fbi-testimony-on-microscopic-hair-analysis-contained-errors-in-at-least-90-percent-of-cases-in-ongoing-review',
          publisher: 'Federal Bureau of Investigation (FBI)',
          year: '2015',
          category: 'Court / Official Record',
        },
        {
          title: 'Report on Forensic Science in Criminal Courts: Ensuring Scientific Validity of Feature-Comparison Methods',
          url: 'https://obamawhitehouse.archives.gov/sites/default/files/microsites/ostp/PCAST/pcast_forensic_science_report_final.pdf',
          publisher: 'President\'s Council of Advisors on Science and Technology (PCAST)',
          year: '2016',
          category: 'Court / Official Record',
        },
      ],
      tags: ['Criminal Justice', 'Empirical Studies', 'Civil Liberties'],
      era: '2015–2016',
      relatedIds: ['thesis-dp-flawed-evidence', 'con-dp-appellate-safeguards'],
    },

    // CON 2.2.2
    {
      id: 'con-dp-appellate-safeguards',
      parentId: 'thesis-dp-flawed-evidence',
      kind: 'con',
      title: 'Counter-Argument: Judicial Daubert Standards and Post-Conviction Forensic Auditing',
      summary:
        'Courts have systematically excluded junk science under strict Daubert evidentiary gatekeeping rules, while state legislatures created specialized innocence commissions.',
      sections: [
        {
          heading: 'Judicial Gatekeeping Under Daubert v. Merrell Dow Pharmaceuticals',
          paragraphs: [
            'Proponents of capital sentencing emphasize that criminal trial procedures have been radically transformed. Under the Supreme Court\'s landmark ruling in *Daubert v. Merrell Dow Pharmaceuticals* (1993) and Federal Rule of Evidence 702, trial judges are legally mandated to act as active gatekeepers, excluding any expert scientific testimony that lacks peer-reviewed empirical testing, known error rates, and general scientific acceptance.',
            'As a result of *Daubert*, federal and state courts routinely exclude unvalidated forensic techniques like bite-mark analysis or voiceprint matching prior to trial, ensuring that capital juries are presented only with validated scientific methodologies.',
          ],
        },
        {
          heading: 'State Forensic Science Commissions',
          paragraphs: [
            'States with high capital sentencing rates, such as Texas, established independent **Forensic Science Commissions** empowered to review past convictions, order new DNA testing, and issue moratoriums on dubious investigative techniques, creating an active administrative safety net that constantly self-corrects historical errors.',
          ],
        },
      ],
      details: [
        '**Daubert Judicial Gatekeeping (1993):** Mandates exclusion of unscientific forensic testimony lacking verifiable error rates.',
        '**Federal Rule of Evidence 702:** Restricts expert testimony to methodologies shown to be reliably applied to the facts.',
        '**State Forensic Commissions:** Institutional bodies in Texas and other states dedicated to auditing legacy forensic convictions.',
      ],
      sources: [
        {
          title: 'Daubert v. Merrell Dow Pharmaceuticals, Inc., 509 U.S. 579 (1993)',
          url: 'https://supreme.justia.com/cases/federal/us/509/579/',
          publisher: 'Supreme Court of the United States',
          year: '1993',
          category: 'Court / Official Record',
        },
        {
          title: 'Texas Forensic Science Commission: Annual Report and Forensic Disciplinary Reviews',
          url: 'https://www.fsc.texas.gov/',
          publisher: 'Texas Forensic Science Commission',
          year: '2023',
          category: 'Court / Official Record',
        },
      ],
      tags: ['Criminal Justice', 'Governance'],
      era: '1993–2023',
      relatedIds: ['pro-dp-junk-science-coercion', 'thesis-dp-flawed-evidence'],
    },

    // -------------------------------------------------------------
    // PILLAR 3: SYSTEMIC RACIAL & SOCIOECONOMIC INEQUITY
    // -------------------------------------------------------------
    {
      id: 'pillar-dp-bias',
      parentId: 'root-death-penalty',
      kind: 'pillar',
      title: 'Pillar 3: Systemic Racial & Socioeconomic Inequity in Capital Sentencing',
      summary:
        'Examines the profound constitutional challenge: capital punishment is administered arbitrarily and discriminatorily based on the race of the victim (*McCleskey v. Kemp*), geographic venue, and the quality of indigent legal defense.',
      sections: [
        {
          heading: 'The Enduring Shadow of Racial Disparity',
          paragraphs: [
            'In his seminal historical scholarship, Equal Justice Initiative director **Bryan Stevenson** traces the direct genealogical connection between historical lynching in the American South and modern capital punishment. Capital trials in the United States operate in the shadow of this history, exhibiting statistically undeniable disparities based on the race of the defendant and, above all, the **race of the victim**.',
            'In the landmark case **McCleskey v. Kemp (1987)**, the U.S. Supreme Court reviewed the rigorous **Baldus Study**, which analyzed over 2,000 Georgia murder cases. Controlling for 230 non-racial variables, the study proved that a defendant accused of killing a white victim was **4.3 times more likely to receive the death penalty** than if the victim was Black, proving that capital sentencing systematically values white lives over Black lives.',
          ],
        },
        {
          heading: 'Economic Disparity: "Capital Punishment Means Them Without Capital"',
          paragraphs: [
            'Beyond race, capital punishment is an overwhelmingly class-based penalty. Wealthy individuals accused of heinous murders (such as O.J. Simpson or Robert Durst) hire elite private defense teams and almost never receive the death penalty. Death row in the United States is populated almost exclusively by impoverished defendants represented by overworked, underfunded public defenders.',
          ],
        },
      ],
      details: [
        '**The Baldus Study (1987):** Defendants who killed white victims were 4.3 times more likely to be sentenced to death in Georgia.',
        '**McCleskey v. Kemp 5-4 Decision:** Supreme Court accepted statistical racial disparity but refused to strike down the death penalty.',
        '**Poverty as Primary Predictor:** Virtually 100% of death row inmates were indigent and could not afford private defense counsel.',
        '**Geographic Lottery:** A tiny fraction of US counties (less than 2%) account for over 50% of all executions carried out nationwide.',
      ],
      sources: [
        {
          title: 'McCleskey v. Kemp, 481 U.S. 279 (1987)',
          url: 'https://supreme.justia.com/cases/federal/us/481/279/',
          publisher: 'Supreme Court of the United States',
          year: '1987',
          category: 'Court / Official Record',
        },
        {
          title: 'Equal Justice and the Death Penalty: A Legal and Empirical Analysis',
          url: 'https://openlibrary.org/books/OL1861787M/Equal_justice_and_the_death_penalty',
          publisher: 'Northeastern University Press / David C. Baldus, George Woodworth, & Charles A. Pulaski',
          year: '1990',
          category: 'Scholarship',
        },
        {
          title: 'Lynching in America: Confronting the Legacy of Racial Terror',
          url: 'https://lynchinginamerica.eji.org/report/',
          publisher: 'Equal Justice Initiative (EJI)',
          year: '2015',
          category: 'Watchdog / NGO',
        },
      ],
      tags: ['Civil Liberties', 'Criminal Justice', 'Human Rights', 'Empirical Studies'],
      era: '1987–2026',
      relatedIds: ['thesis-dp-racial-disparity', 'thesis-dp-indigent-defense', 'pillar-dp-deterrence'],
    },

    // THESIS 3.1
    {
      id: 'thesis-dp-racial-disparity',
      parentId: 'pillar-dp-bias',
      kind: 'thesis',
      title: 'Thesis 3.1: The Race-of-Victim Effect: Systemic Racism vs. Individual Culpability',
      summary:
        'Empirical studies consistently prove that killing a white person is vastly more likely to yield execution than killing a Black person, violating equal protection.',
      sections: [
        {
          heading: 'The Unrefuted Statistical Reality of the Baldus Study',
          paragraphs: [
            'In *McCleskey v. Kemp*, law professor **David Baldus** presented an exhaustive empirical study of 2,484 Georgia homicide cases. The data revealed that prosecutors sought the death penalty in **70% of cases involving Black defendants and white victims**, but in only **15% of cases involving Black defendants and Black victims**, and 19% of cases involving white defendants and Black victims.',
            'Even when controlling for the brutality of the murder, prior criminal record, and statutory aggravating circumstances, the race of the victim remained the single most powerful predictor of whether a human being would be condemned to die, creating an unequal tier of legal protection based on racial status.',
          ],
        },
        {
          heading: 'Justice Powell’s Troubling Majority Opinion',
          paragraphs: [
            'Writing for the 5-4 majority in *McCleskey*, Justice Lewis Powell conceded that the statistical disparities existed, but shockingly held that accepting statistical proof of racial disparity would open the door to challenging the entire criminal justice system. Justice Powell later publicly expressed deep regret for his vote, stating: "I have come to think that capital punishment should be abolished."',
          ],
        },
      ],
      details: [
        '**70% vs. 15% Prosecutorial Charging Disparity:** Black defendants killing white victims prosecuted for death at five times the rate of Black victims.',
        '**Controlling for 230 Variables:** Baldus study ruled out non-racial explanations like prior record and crime severity.',
        '**Justice Powell’s Post-Retirement Regret:** Conceded his McCleskey vote was a profound judicial mistake.',
      ],
      sources: [
        {
          title: 'McCleskey v. Kemp: The Supreme Court Record',
          url: 'https://supreme.justia.com/cases/federal/us/481/279/',
          publisher: 'Supreme Court of the United States',
          year: '1987',
          category: 'Court / Official Record',
        },
        {
          title: 'Justice Lewis F. Powell Jr.: A Biography',
          url: 'https://www.simonandschuster.com/books/Justice-Lewis-F-Powell-Jr/John-C-Jeffries/9780823221103',
          publisher: 'Fordham University Press / John C. Jeffries Jr.',
          year: '2001',
          category: 'Scholarship',
        },
      ],
      tags: ['Civil Liberties', 'Criminal Justice', 'Empirical Studies'],
      era: '1987–2001',
      relatedIds: ['pro-dp-baldus-mccleskey-data', 'con-dp-individualized-culpability'],
    },

    // PRO 3.1.1
    {
      id: 'pro-dp-baldus-mccleskey-data',
      parentId: 'thesis-dp-racial-disparity',
      kind: 'pro',
      title: 'Evidence: Modern Replication of the Race-of-Victim Disparity Across States',
      summary:
        'Modern empirical studies in Pennsylvania, North Carolina, and Louisiana replicate Baldus’ findings, showing race of victim remains the decisive factor in capital charging.',
      sections: [
        {
          heading: 'Contemporary Studies Confirm Persistent Racial Bias',
          paragraphs: [
            'Decades after *McCleskey*, modern econometric studies across multiple jurisdictions have replicated the race-of-victim effect. A comprehensive study by political scientists **Frank Baumgartner and Isaac Unah** (*The Death Penalty in North Carolina*) analyzing over 4,000 homicides found that defendants whose victims were white were **more than twice as likely to receive the death penalty** as those whose victims were Black, even after controlling for multiple statutory aggravating circumstances.',
            'In Louisiana, legal scholars found that the odds of a death sentence for a Black defendant who killed a white victim were **30 times higher** than for a Black defendant who killed a Black victim, demonstrating that systemic racial hierarchies continue to dictate capital charging decisions.',
          ],
        },
        {
          heading: 'The Batson Peremptory Strike Abuse',
          paragraphs: [
            'Furthermore, investigative audits show prosecutors routinely use peremptory jury strikes to illegally remove African American jurors from capital juries (e.g., *Foster v. Chatman*, 2016), ensuring all-white juries decide the fate of Black defendants.',
          ],
        },
      ],
      details: [
        '**North Carolina 4,000-Homicide Study:** Replicated 2x death penalty probability when victim is white.',
        '**Louisiana 30x Disparity:** Extreme racial skew in capital charging decisions for inter-racial homicides.',
        '**Foster v. Chatman (2016):** US Supreme Court uncovered notes showing Georgia prosecutors intentionally struck every Black prospective juror.',
      ],
      sources: [
        {
          title: 'Foster v. Chatman, 578 U.S. 488 (2016)',
          url: 'https://supreme.justia.com/cases/federal/us/578/488/',
          publisher: 'Supreme Court of the United States',
          year: '2016',
          category: 'Court / Official Record',
        },
        {
          title: 'The Impact of Race in North Carolina Capital Sentencing: 1990–2009',
          url: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1982142',
          publisher: 'North Carolina Law Review / Frank R. Baumgartner et al.',
          year: '2012',
          category: 'Empirical / Economic Study',
        },
      ],
      tags: ['Civil Liberties', 'Criminal Justice', 'Empirical Studies'],
      era: '2012–2016',
      relatedIds: ['thesis-dp-racial-disparity', 'con-dp-individualized-culpability'],
    },

    // CON 3.1.2
    {
      id: 'con-dp-individualized-culpability',
      parentId: 'thesis-dp-racial-disparity',
      kind: 'con',
      title: 'Counter-Argument: Individualized Guilt and Aggravating Factors Refute Aggregate Statistics',
      summary:
        'Capital juries evaluate individual culpability, horrific aggravating facts, and remorse, which aggregate statistical models fail to capture.',
      sections: [
        {
          heading: 'The Failure of Macro-Statistics to Capture Micro-Level Facts',
          paragraphs: [
            'Proponents of capital punishment and conservative jurists point out that criminal justice is not administered across statistical aggregates; it is administered on unique, individual cases. No two murders are identical in their cruelty, planning, or depravity. Statistical regression models cannot quantify qualitative factors like a defendant’s demeanor on the witness stand, the graphic brutality of crime scene photos, or the subjective credibility of mitigating witnesses.',
            'In *McCleskey*, Justice Powell correctly observed that requiring an absence of statistical disparity would paralyze the discretionary nature of jury trials. Discretion allows juries to exercise mercy; removing discretion in favor of rigid statistical quotas would violate the constitutional requirement for individualized sentencing established in *Lockett v. Ohio*.',
          ],
        },
        {
          heading: 'Focusing on Heinous Murder Aggravators',
          paragraphs: [
            'Capital sentencing statutes strictly enumerate statutory aggravating factors—such as murder of a police officer, torture, murder committed during a kidnapping, or prior murder convictions. When a jury sentences a heinous killer to death, they act on the specific evidence of extreme cruelty, not unconscious racial bias.',
          ],
        },
      ],
      details: [
        '**Individualized Sentencing Mandate (Lockett v. Ohio):** Juries are constitutionally required to weigh the unique facts of the individual offender.',
        '**Limits of Statistical Models:** Regression models cannot measure crime scene graphicness or defendant courtroom remorse.',
        '**Statutory Aggravating Factors:** Focuses juror deliberation on objective legal thresholds of extreme depravity.',
      ],
      sources: [
        {
          title: 'Lockett v. Ohio, 438 U.S. 586 (1978)',
          url: 'https://supreme.justia.com/cases/federal/us/438/586/',
          publisher: 'Supreme Court of the United States',
          year: '1978',
          category: 'Court / Official Record',
        },
        {
          title: 'The Constitutionality of Capital Sentencing Discretion',
          url: 'https://chicagounbound.uchicago.edu/uclrev/vol55/iss3/3/',
          publisher: 'University of Chicago Law Review',
          year: '1988',
          category: 'Scholarship',
        },
      ],
      tags: ['Criminal Justice', 'Governance', 'Philosophy & Ethics'],
      era: '1978–1988',
      relatedIds: ['pro-dp-baldus-mccleskey-data', 'thesis-dp-racial-disparity'],
    },

    // THESIS 3.2
    {
      id: 'thesis-dp-indigent-defense',
      parentId: 'pillar-dp-bias',
      kind: 'thesis',
      title: 'Thesis 3.2: Economic Inequity: Quality of Counsel Determines Life or Death',
      summary:
        'Indigent defendants are routinely represented by overworked, underpaid court-appointed attorneys who sleep during trials or fail to present mitigating evidence.',
      sections: [
        {
          heading: 'The Indigent Defense Crisis in Capital Cases',
          paragraphs: [
            'In his seminal essay *Counsel for the Poor: The Death Sentence Not for the Worst Crime but for the Worst Lawyer*, civil rights attorney **Stephen B. Bright** documented that the single most decisive factor determining whether a defendant receives the death penalty is not the horrific nature of the crime, but the competence and funding of their defense lawyer.',
            'Across the American South, appointed counsel were often paid flat fees as low as $1,000 for entire capital murder trials. State appellate records reveal shocking examples of capital defense attorneys who were actively drunk during trial, used racial slurs against their own clients, or literally fell asleep during cross-examination of prosecution witnesses.',
          ],
        },
        {
          heading: 'The Failure of the Strickland v. Washington Standard',
          paragraphs: [
            'Under the Supreme Court’s weak standard for ineffective assistance of counsel (*Strickland v. Washington*, 1984), defendants must prove not only that their lawyer’s performance fell below an objective standard of reasonableness, but that there is a reasonable probability the outcome would have been different, creating a nearly insurmountable appellate barrier.',
          ],
        },
      ],
      details: [
        '**Stephen Bright\'s Landmark Thesis:** Capital punishment is meted out for the worst lawyer, not the worst crime.',
        '**Grossly Inadequate Compensation:** Court-appointed attorneys paid sub-minimum wages, disincentivizing forensic investigation.',
        '**Strickland v. Washington Barrier:** Supreme Court doctrine makes overturning verdicts based on incompetent counsel nearly impossible.',
      ],
      sources: [
        {
          title: 'Counsel for the Poor: The Death Sentence Not for the Worst Crime but for the Worst Lawyer',
          url: 'https://openyls.law.yale.edu/handle/20.500.13051/15720',
          publisher: 'Yale Law Journal / Stephen B. Bright',
          year: '1994',
          category: 'Scholarship',
        },
        {
          title: 'Strickland v. Washington, 466 U.S. 668 (1984)',
          url: 'https://supreme.justia.com/cases/federal/us/466/668/',
          publisher: 'Supreme Court of the United States',
          year: '1984',
          category: 'Court / Official Record',
        },
      ],
      tags: ['Criminal Justice', 'Civil Liberties', 'Human Rights'],
      era: '1984–1994',
      relatedIds: ['pro-dp-sleeping-lawyers', 'con-dp-qualified-capital-counsel'],
    },

    // PRO 3.2.1
    {
      id: 'pro-dp-sleeping-lawyers',
      parentId: 'thesis-dp-indigent-defense',
      kind: 'pro',
      title: 'Evidence: Fifth Circuit "Sleeping Lawyer" Cases & Flat-Fee Contract Defense',
      summary:
        'Federal appellate courts repeatedly upheld death sentences where defense attorneys slept through substantial portions of testimony, demonstrating systemic defense failures.',
      sections: [
        {
          heading: 'The Notorious Texas "Sleeping Lawyer" Precedents',
          paragraphs: [
            'In the infamous capital trial of **George McFarland** in Texas, defense attorney John Benn was repeatedly observed sleeping by both the trial judge and jury foreman. When challenged, Benn explained to the court: "It’s boring." Shockingly, the Texas Court of Criminal Appeals and the Fifth Circuit Court of Appeals initially upheld the conviction, ruling that the Constitution guarantees counsel, but does not guarantee that counsel must be awake at every moment.',
            'In *Burdine v. Johnson* (2001), the en banc Fifth Circuit finally ruled that a sleeping lawyer constitutes a constructive denial of counsel, but only after innocent death row inmate Joe Burdine had languished for 16 years on death row.',
          ],
        },
        {
          heading: 'Failure to Investigate Mitigating Biographies',
          paragraphs: [
            'In countless capital trials, appointed counsel failed to conduct basic mitigation investigations, failing to interview family members, request school records, or discover that their client suffered from severe traumatic brain injury, fetal alcohol syndrome, or childhood sexual abuse—evidence that consistently persuades jurors to choose life imprisonment.',
          ],
        },
      ],
      details: [
        '**McFarland and Burdine Precedents:** Documented court-appointed attorneys sleeping through capital trial proceedings in Texas.',
        '**Zero Mitigation Investigation:** Counsel routinely presented zero mitigating witnesses during life-or-death sentencing phases.',
        '**16 Years to Correct Sleeping Counsel:** Languished on death row for nearly two decades before the federal courts granted relief.',
      ],
      sources: [
        {
          title: 'Burdine v. Johnson, 262 F.3d 336 (5th Cir. 2001)',
          url: 'https://law.justia.com/cases/federal/appellate-courts/F3/262/336/534125/',
          publisher: 'US Court of Appeals for the Fifth Circuit',
          year: '2001',
          category: 'Court / Official Record',
        },
        {
          title: 'Gideon\'s Broken Promise: America\'s Continuing Quest for Equal Justice',
          url: 'https://www.americanbar.org/groups/legal_aid_indigent_defense/resources/gideons_broken_promise/',
          publisher: 'American Bar Association (ABA)',
          year: '2004',
          category: 'Watchdog / NGO',
        },
      ],
      tags: ['Criminal Justice', 'Civil Liberties'],
      era: '2001–2004',
      relatedIds: ['thesis-dp-indigent-defense', 'con-dp-qualified-capital-counsel'],
    },

    // CON 3.2.2
    {
      id: 'con-dp-qualified-capital-counsel',
      parentId: 'thesis-dp-indigent-defense',
      kind: 'con',
      title: 'Counter-Argument: ABA Capital Defense Guidelines and Specialized Capital Defender Units',
      summary:
        'Modern statutory reforms mandate specialized capital defender units, state funding for mitigation specialists, and strict adherence to ABA Death Penalty Representation Guidelines.',
      sections: [
        {
          heading: 'The Modernization of Capital Defense Standards',
          paragraphs: [
            'In 2003, the **American Bar Association (ABA)** published its updated *Guidelines for the Appointment and Performance of Defense Counsel in Death Penalty Cases*. Today, most capital jurisdictions require that capital defendants be represented by at least two certified capital-qualified attorneys, a licensed investigator, and a dedicated mitigation specialist.',
            'States have established statewide, specialized **Public Capital Defender Offices** (such as in Georgia, Colorado, and Virginia) staffed by elite, career criminal defense attorneys with extensive forensic resources. In jurisdictions where specialized capital defender units were created, death sentences dropped by over 80% because juries are presented with exhaustive, humanizing mitigating biographies.',
          ],
        },
        {
          heading: 'Aggressive Habeas Corpus Representation',
          paragraphs: [
            'At the appellate and post-conviction level, capital defendants receive representation from federal public defender capital habeas units and pro bono teams from top international corporate law firms, ensuring that every legal and factual claim is vigorously litigated.',
          ],
        },
      ],
      details: [
        '**ABA 2003 Capital Guidelines:** Mandates two qualified attorneys, an investigator, and a mitigation specialist for every capital defendant.',
        '**Specialized Public Defender Units:** Professionalized state capital defense offices caused capital sentences to plummet.',
        '**Pro Bono Elite Representation:** Top national law firms contribute tens of thousands of pro bono hours to death row appeals.',
      ],
      sources: [
        {
          title: 'ABA Guidelines for the Appointment and Performance of Defense Counsel in Death Penalty Cases',
          url: 'https://www.americanbar.org/groups/committees/death-penalty-representation/resources/aba-guidelines/',
          publisher: 'American Bar Association (ABA)',
          year: '2003',
          category: 'Primary Text / Treaty',
        },
        {
          title: 'Courting Death: The Supreme Court and Capital Punishment',
          url: 'https://www.hup.harvard.edu/books/9780674737792',
          publisher: 'Harvard University Press / Carol S. Steiker & Jordan M. Steiker',
          year: '2016',
          category: 'Scholarship',
        },
      ],
      tags: ['Criminal Justice', 'Governance'],
      era: '2003–2016',
      relatedIds: ['pro-dp-sleeping-lawyers', 'thesis-dp-indigent-defense'],
    },

    // -------------------------------------------------------------
    // PILLAR 4: DETERRENCE & FISCAL COSTS
    // -------------------------------------------------------------
    {
      id: 'pillar-dp-deterrence',
      parentId: 'root-death-penalty',
      kind: 'pillar',
      title: 'Pillar 4: Deterrence Fallacy, Brutalization & Astronomical Fiscal Costs vs. LWOP',
      summary:
        'Evaluates the utilitarian balance: comprehensive scientific studies fail to find evidence that capital punishment deters murder, while capital prosecution costs taxpayers millions more than Life Without Parole (LWOP).',
      sections: [
        {
          heading: 'The Scientific Consensus: Absence of Deterrent Effect',
          paragraphs: [
            'The primary utilitarian justification for capital punishment is that executing murderers saves innocent lives by deterring potential killers. However, in 2012, the definitive committee of the **National Research Council of the National Academies (NRC)** (*Deterrence and the Death Penalty*) reviewed three decades of empirical econometric research and concluded that **none of the existing studies provide credible evidence that the death penalty deters murder**.',
            'Criminological theory explains why: the vast majority of homicides are impulsive crimes of passion, committed under the acute influence of drugs, alcohol, or intense emotional rage, where perpetrators do not rationally calculate distant legal probabilities. For premeditated killers, the certainty of apprehension—not the severity of punishment—is the only proven deterrent.',
          ],
        },
        {
          heading: 'The Astronomical Fiscal Reality of Capital Punishment',
          paragraphs: [
            'Simultaneously, extensive independent state legislative audits confirm that the death penalty is astronomically more expensive than sentencing an inmate to **Life Without Parole (LWOP)**. Capital trials require longer jury selection, specialized expert witnesses, dual-phase trials, and decades of constitutionally mandated appeals, costing taxpayers millions of dollars per execution.',
          ],
        },
      ],
      details: [
        '**National Research Council 2012 Report:** Unanimous conclusion that empirical studies claiming a deterrent effect are fundamentally flawed.',
        '**Crimes of Passion Reality:** Most homicides committed impulsively under alcohol/drugs without rational risk calculation.',
        '**Astronomical Fiscal Premium:** Capital cases cost 2 to 4 times more than Life Without Parole trials and incarceration.',
        '**California $4+ Billion Audit:** California spent over $4 billion on capital punishment since 1978 while executing only 13 people ($308M per execution).',
      ],
      sources: [
        {
          title: 'Deterrence and the Death Penalty',
          url: 'https://nap.nationalacademies.org/catalog/13363/deterrence-and-the-death-penalty',
          publisher: 'National Academies of Sciences, Engineering, and Medicine (NASEM) / Daniel S. Nagin et al.',
          year: '2012',
          category: 'Empirical / Economic Study',
        },
        {
          title: 'Executing the Will of the Voters? A Roadmap to Mend or End the California Legislature\'s Multi-Billion-Dollar Death Penalty Debacle',
          url: 'https://digitalcommons.lmu.edu/llr/vol44/iss0/1/',
          publisher: 'Loyola of Los Angeles Law Review / Judge Arthur L. Alarcón & Paula M. Mitchell',
          year: '2011',
          category: 'Scholarship',
        },
        {
          title: 'The Economic Costs of the Death Penalty: A Comprehensive Survey',
          url: 'https://deathpenaltyinfo.org/policy-issues/costs',
          publisher: 'Death Penalty Information Center',
          year: '2023',
          category: 'Watchdog / NGO',
        },
      ],
      tags: ['Empirical Studies', 'Criminal Justice', 'Economics'],
      era: '2011–2026',
      relatedIds: ['thesis-dp-empirical-deterrence', 'thesis-dp-fiscal-reality', 'pillar-dp-retribution'],
    },

    // THESIS 4.1
    {
      id: 'thesis-dp-empirical-deterrence',
      parentId: 'pillar-dp-deterrence',
      kind: 'thesis',
      title: 'Thesis 4.1: The Deterrence Debate: Rational Calculus vs. Impulsive Violence',
      summary:
        'Proponents claim execution deters prospective murderers, but the National Research Council and state murder statistics show no measurable deterrence benefit over LWOP.',
      sections: [
        {
          heading: 'The Theoretical Rational Deterrence Argument',
          paragraphs: [
            'Economist **Isaac Ehrlich** and later scholars like **Cass Sunstein and Adrian Vermeule** (*Is Capital Punishment Morally Required?*) argued that capital punishment acts as a rational deterrent: death is uniquely feared by human beings, and increasing the cost of an activity inevitably reduces its incidence. Sunstein argued that if each execution deters a significant number of murders, the state has a moral obligation to execute killers to save innocent lives.',
            'Proponents note that common sense suggests criminals will think twice before committing capital crimes if they know the penalty is death rather than a lifetime in prison.',
          ],
        },
        {
          heading: 'The National Research Council’s Definitive Refutation',
          paragraphs: [
            'However, in its definitive report, the **National Research Council** demonstrated that deterrence studies fail because they compare the death penalty to no punishment, rather than comparing it to the real-world baseline: **Life Without Parole**. Furthermore, FBI Uniform Crime Reporting statistics reveal that states without the death penalty consistently exhibit **lower murder rates** than death penalty states, disproving the deterrence thesis.',
          ],
        },
      ],
      details: [
        '**Sunstein & Vermeule Hypothesis:** Claimed capital punishment may be morally required if it saves net innocent lives.',
        '**National Research Council Rebuttal:** Concluded all modern deterrence models are plagued by fatal methodological flaws.',
        '**State Murder Rate Paradox:** Non-death-penalty states have consistently maintained murder rates 15–30% lower than death penalty states.',
      ],
      sources: [
        {
          title: 'Is Capital Punishment Morally Required? Acts, Omissions, and Life-Life Tradeoffs',
          url: 'https://chicagounbound.uchicago.edu/law_and_economics/255/',
          publisher: 'Stanford Law Review / Cass R. Sunstein & Adrian Vermeule',
          year: '2005',
          category: 'Scholarship',
        },
        {
          title: 'Deterrence and the Death Penalty',
          url: 'https://nap.nationalacademies.org/catalog/13363/deterrence-and-the-death-penalty',
          publisher: 'National Academies Press',
          year: '2012',
          category: 'Empirical / Economic Study',
        },
      ],
      tags: ['Empirical Studies', 'Criminal Justice', 'Philosophy & Ethics'],
      era: '2005–2012',
      relatedIds: ['pro-dp-rational-calculation', 'con-dp-impulsive-crimes-no-effect'],
    },

    // PRO 4.1.1
    {
      id: 'pro-dp-rational-calculation',
      parentId: 'thesis-dp-empirical-deterrence',
      kind: 'pro',
      title: 'Evidence: Sunstein-Vermeule Life-Life Tradeoff & Dezhbakhsh Econometric Models',
      summary:
        'Econometric regression models by Hashem Dezhbakhsh and Paul Rubin claimed each capital execution deters an average of 18 homicides.',
      sections: [
        {
          heading: 'The Dezhbakhsh, Rubin, and Shepherd Econometric Study (2003)',
          paragraphs: [
            'In a widely cited study published in the *Journal of Law and Economics*, Emory University economists **Hashem Dezhbakhsh, Paul Rubin, and Joanna Shepherd** analyzed county-level panel data from 1977 to 1996 across the United States. Controlling for arrest rates, economic indicators, and demographic variables, the authors concluded that **each execution deterred, on average, 18 homicides**.',
            'They argued that capital punishment produces a powerful substitution effect: criminals contemplating robbery or rape avoid killing their victims because crossing the threshold into homicide invites the ultimate capital sanction.',
          ],
        },
        {
          heading: 'The Deontological Life-Life Tradeoff',
          paragraphs: [
            'Legal scholars Cass Sunstein and Adrian Vermeule took this empirical premise to its ethical conclusion: if each execution saves 18 innocent lives, then government abolition of the death penalty is not an act of mercy, but an active policy decision that condemns dozens of innocent future victims to death.',
          ],
        },
      ],
      details: [
        '**Emory Econometric Study (2003):** Claimed statistical finding that each execution deterred 18 murders.',
        '**County-Level Panel Regression:** Controlled for demographic and economic variables across 3,000+ US counties.',
        '**The Life-Life Tradeoff Argument:** Failing to execute culpable killers leads directly to the death of innocent victims.',
      ],
      sources: [
        {
          title: 'Does Capital Punishment Have a Deterrent Effect? New Evidence from Postmoratorium Panel Data',
          url: 'https://www.jstor.org/stable/10.1086/382602',
          publisher: 'Journal of Law and Economics / Hashem Dezhbakhsh, Paul H. Rubin, & Joanna M. Shepherd',
          year: '2003',
          category: 'Empirical / Economic Study',
        },
        {
          title: 'Is Capital Punishment Morally Required? Acts, Omissions, and Life-Life Tradeoffs',
          url: 'https://chicagounbound.uchicago.edu/law_and_economics/255/',
          publisher: 'Stanford Law Review / Cass R. Sunstein & Adrian Vermeule',
          year: '2005',
          category: 'Scholarship',
        },
      ],
      tags: ['Empirical Studies', 'Economics', 'Philosophy & Ethics'],
      era: '2003–2005',
      relatedIds: ['thesis-dp-empirical-deterrence', 'con-dp-impulsive-crimes-no-effect'],
    },

    // CON 4.1.2
    {
      id: 'con-dp-impulsive-crimes-no-effect',
      parentId: 'thesis-dp-empirical-deterrence',
      kind: 'con',
      title: 'Counter-Argument: Donohue-Wolfers Econometric Refutation & FBI Crime Data',
      summary:
        'Economists John Donohue and Justin Wolfers thoroughly debunked the Dezhbakhsh study, proving that small model adjustments completely eliminate the supposed deterrent effect.',
      sections: [
        {
          heading: 'The Donohue and Wolfers Methodological Demolition',
          paragraphs: [
            'In *Uses and Abuses of Empirical Evidence in the Death Penalty Debate* published in the *Stanford Law Review*, economists **John Donohue (Stanford) and Justin Wolfers (Wharton)** re-analyzed the Dezhbakhsh dataset. They demonstrated that the supposed "18 murders deterred" finding was an artifact of fragile model specifications: omitting a single outlier state (Texas) or altering basic control variables reversed the sign completely, suggesting executions increased homicides.',
            'Donohue and Wolfers showed that the annual number of executions is so minuscule relative to the total number of homicides (roughly 20 executions compared to 15,000–20,000 homicides annually) that detecting a statistical signal against background crime noise is mathematically impossible.',
          ],
        },
        {
          heading: 'FBI Homicide Trends Across Bordering States',
          paragraphs: [
            'Furthermore, comparing pairs of culturally and economically identical neighboring states where one has the death penalty and the other does not (e.g., North Dakota vs. South Dakota, or Michigan vs. Ohio) shows virtually identical homicide trajectories over 50 years, proving that capital punishment exerts zero independent deterrent effect.',
          ],
        },
      ],
      details: [
        '**Donohue & Wolfers Stanford Law Review Refutation:** Proved deterrence models collapse when minor statistical adjustments are applied.',
        '**Texas Outlier Distortion:** Dezhbakhsh findings depended almost entirely on skewed data from a single state.',
        '**Twin State Comparisons:** Identical murder rates in non-death states (North Dakota) vs. death states (South Dakota).',
      ],
      sources: [
        {
          title: 'Uses and Abuses of Empirical Evidence in the Death Penalty Debate',
          url: 'https://www.stanfordlawreview.org/print/article/uses-and-abuses-of-empirical-evidence-in-the-death-penalty-debate/',
          publisher: 'Stanford Law Review / John J. Donohue & Justin Wolfers',
          year: '2005',
          category: 'Empirical / Economic Study',
        },
        {
          title: 'FBI Uniform Crime Reports: Murder Rates by State (1970–2022)',
          url: 'https://cde.ucr.cjis.gov/',
          publisher: 'Federal Bureau of Investigation (FBI)',
          year: '2023',
          category: 'Court / Official Record',
        },
      ],
      tags: ['Empirical Studies', 'Criminal Justice', 'Economics'],
      era: '2005–2023',
      relatedIds: ['pro-dp-rational-calculation', 'thesis-dp-empirical-deterrence'],
    },

    // THESIS 4.2
    {
      id: 'thesis-dp-fiscal-reality',
      parentId: 'pillar-dp-deterrence',
      kind: 'thesis',
      title: 'Thesis 4.2: The Astronomical Cost of Capital Litigation vs. Life Without Parole',
      summary:
        'State audits prove capital prosecutions cost taxpayers millions more than Life Without Parole, diverting critical funds away from police officers and crime prevention.',
      sections: [
        {
          heading: 'The Extraordinary Cost of Super Due Process',
          paragraphs: [
            'Because the Constitution mandates heightened scrutiny in capital cases, every phase of a death penalty prosecution is exponentially more expensive than a non-capital murder trial. Pre-trial motions take months; specialized mitigation specialists, neuropsychologists, and forensic experts must be hired; jury selection takes weeks to "death-qualify" jurors; and trials are bifurcated into separate guilt and penalty phases.',
            'Following conviction, constitutionally mandated state and federal habeas appeals require 15 to 25 years of intensive litigation by teams of state attorneys general, public defenders, and appellate judges, costing taxpayers tens of millions of dollars for each individual case.',
          ],
        },
        {
          heading: 'The Opportunity Cost of Wasted Taxpayer Millions',
          paragraphs: [
            'Criminologists point out that the hundreds of millions wasted on maintaining death rows could instead fund thousands of community police officers, clear thousands of untested rape kits, and fund youth violence intervention programs that demonstrably prevent violent crime.',
          ],
        },
      ],
      details: [
        '**Bifurcated Trial Costs:** Pre-trial, jury selection, and forensic expert costs multiply trial budgets by 3x to 5x.',
        '**20-Year Appellate Litigation:** Millions spent on state attorneys general, federal habeas corpus, and public defenders.',
        '**Opportunity Cost:** Wasting public safety budgets on symbolic executions rather than solving cold cases and hiring detectives.',
      ],
      sources: [
        {
          title: 'The Financial Facts About the Death Penalty',
          url: 'https://deathpenaltyinfo.org/policy-issues/costs',
          publisher: 'Death Penalty Information Center',
          year: '2023',
          category: 'Watchdog / NGO',
        },
        {
          title: 'The Cost of the Death Penalty in Maryland',
          url: 'https://www.urban.org/research/publication/cost-death-penalty-maryland',
          publisher: 'Urban Institute / John Roman et al.',
          year: '2008',
          category: 'Empirical / Economic Study',
        },
      ],
      tags: ['Economics', 'Criminal Justice', 'Governance'],
      era: '2008–2024',
      relatedIds: ['pro-dp-california-millions', 'con-dp-streamlined-habeas'],
    },

    // PRO 4.2.1
    {
      id: 'pro-dp-california-millions',
      parentId: 'thesis-dp-fiscal-reality',
      kind: 'pro',
      title: 'Evidence: The California $4 Billion Death Penalty Audit & Maryland Cost Studies',
      summary:
        'An exhaustive study by federal judge Arthur Alarcón revealed California spent over $4 billion on capital punishment to execute just 13 people ($308 million per execution).',
      sections: [
        {
          heading: 'The Landmark California Cost Study (Alarcón & Mitchell)',
          paragraphs: [
            'In a definitive study published in the *Loyola of Los Angeles Law Review*, Senior Ninth Circuit Federal Judge **Arthur L. Alarcón and Paula M. Mitchell** conducted a comprehensive audit of California’s capital punishment system. They revealed that since 1978, **California taxpayers spent over $4 billion** to maintain its death penalty system, while carrying out exactly **13 executions**—a staggering cost of **$308 million per execution**.',
            'The study documented that death penalty trials and appeals cost California taxpayers an additional $184 million every single year above what a system of Life Without Parole would cost, with over 700 inmates languishing on death row at San Quentin before Governor Gavin Newsom imposed an executive moratorium.',
          ],
        },
        {
          heading: 'The Maryland Urban Institute Audit',
          paragraphs: [
            'In Maryland, an **Urban Institute study** found that pursuing the death penalty in a single case cost taxpayers an average of **$3 million—$1.9 million more than an identical murder case seeking Life Without Parole**. These devastating fiscal findings prompted the Maryland legislature to abolish the death penalty entirely in 2013.',
          ],
        },
      ],
      details: [
        '**$308 Million Per Execution in California:** Audit proved $4+ billion expended to execute only 13 people since 1978.',
        '**$184 Million Annual Surplus Cost:** Recurring yearly cost premium in California solely to maintain the death penalty system.',
        '**Maryland Urban Institute Audit:** Documented $1.9 million net fiscal penalty per capital case, directly catalyzing repeal in 2013.',
      ],
      sources: [
        {
          title: 'Executing the Will of the Voters? A Roadmap to Mend or End the California Legislature\'s Multi-Billion-Dollar Death Penalty Debacle',
          url: 'https://digitalcommons.lmu.edu/llr/vol44/iss0/1/',
          publisher: 'Loyola of Los Angeles Law Review / Judge Arthur L. Alarcón & Paula M. Mitchell',
          year: '2011',
          category: 'Scholarship',
        },
        {
          title: 'The Cost of the Death Penalty in Maryland',
          url: 'https://www.urban.org/research/publication/cost-death-penalty-maryland',
          publisher: 'Urban Institute / John Roman et al.',
          year: '2008',
          category: 'Empirical / Economic Study',
        },
      ],
      tags: ['Economics', 'Criminal Justice', 'Empirical Studies'],
      era: '2008–2011',
      relatedIds: ['thesis-dp-fiscal-reality', 'con-dp-streamlined-habeas'],
    },

    // CON 4.2.2
    {
      id: 'con-dp-streamlined-habeas',
      parentId: 'thesis-dp-fiscal-reality',
      kind: 'con',
      title: 'Counter-Argument: Streamlining Frivolous Appeals and Enforcing the AEDPA',
      summary:
        'Proponents argue that astronomical costs are an artificial creation of anti-death penalty litigators filing frivolous dilatory appeals that should be curtailed through statutory habeas reform.',
      sections: [
        {
          heading: 'The Abuse of Habeas Corpus by Abolitionist Litigators',
          paragraphs: [
            'Proponents of capital punishment argue that high litigation costs and 20-year delays are not inherent to capital punishment, but are manufactured by abolitionist defense lawyers filing endless repetitive appeals and federal habeas petitions on procedural technicalities. In response, Congress enacted the **Antiterrorism and Effective Death Penalty Act of 1996 (AEDPA)** to strictly limit repetitive habeas petitions.',
            'Under AEDPA, federal courts must grant great deference to state court findings and enforce a strict one-year statute of limitations on federal filings. Proponents maintain that if courts vigorously enforce AEDPA statutory deadlines and dismiss frivolous delay tactics, capital cases could be resolved within 5 to 7 years at a fraction of the cost.',
          ],
        },
        {
          heading: 'The Cost of Geriatric Prison Incarceration',
          paragraphs: [
            'Furthermore, Life Without Parole carries immense hidden costs: maintaining aging, infirm, and geriatric prisoners until natural death at age 70 or 80 costs state departments of corrections upwards of $100,000 per inmate per year in specialized dementia and cancer healthcare.',
          ],
        },
      ],
      details: [
        '**Antiterrorism and Effective Death Penalty Act (AEDPA 1996):** Designed to eliminate dilatory appeals and enforce one-year habeas limits.',
        '**Manufactured Delays:** Proponents contend abolitionist lawyers deliberately drag out litigation to inflate fiscal costs.',
        '**Geriatric Prison Healthcare Costs:** Housing elderly lifers with chronic illnesses costs taxpayers over $100k annually per inmate.',
      ],
      sources: [
        {
          title: 'Antiterrorism and Effective Death Penalty Act of 1996 (Public Law 104-132)',
          url: 'https://www.congress.gov/bill/104th-congress/senate-bill/735',
          publisher: '104th US Congress / US Government Publishing Office',
          year: '1996',
          category: 'Primary Text / Treaty',
        },
        {
          title: 'The High Cost of Geriatric Prison Healthcare',
          url: 'https://www.vera.org/publications/the-high-cost-of-geriatric-prison-healthcare',
          publisher: 'Vera Institute of Justice',
          year: '2020',
          category: 'Watchdog / NGO',
        },
      ],
      tags: ['Criminal Justice', 'Governance', 'Economics'],
      era: '1996–2020',
      relatedIds: ['pro-dp-california-millions', 'thesis-dp-fiscal-reality'],
    },
  ],
};
