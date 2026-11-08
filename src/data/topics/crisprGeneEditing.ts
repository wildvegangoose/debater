import { DebateGraphDataset, DebateNode } from '../../types/debate';

const rootNode: DebateNode = {
  id: 'root-crispr-gene-editing',
  parentId: null,
  kind: 'root',
  title: 'Human Germline Editing & CRISPR',
  summary:
    'A multi-layered dialectical map evaluating the ethical, clinical, and evolutionary ramifications of CRISPR-Cas9 genome editing, weighing the eradication of devastating monogenic diseases against the risks of off-target mutations, eugenic inequality, and irreversible alterations to the human gene pool.',
  sections: [
    {
      heading: 'The Genomic Crossroads: Molecular Cures vs. Evolutionary Hubris',
      paragraphs: [
        'The discovery and repurposing of the bacterial **CRISPR-Cas9** adaptive immune system by **Jennifer Doudna** and **Emmanuelle Charpentier** (awarded the 2020 Nobel Prize in Chemistry) granted humanity unprecedented precision to rewrite the code of life. For the first time in biological history, medicine can transcend palliative management and permanently repair the molecular root causes of inherited fatal disorders—such as sickle cell disease, Huntington’s chorea, and cystic fibrosis.',
        'However, the prospect of extending gene editing from consenting adult patients (**somatic editing**) to human embryos, sperm, and eggs (**germline editing**) has ignited profound moral and civilizational alarm. Bioethicists like **Michael Sandel**, former NIH Director **Francis Collins**, and the **World Health Organization** caution that germline alterations are passed down to all subsequent generations without intergenerational consent, opening the door to consumer eugenics, genetic caste divides, and catastrophic off-target chromosomal disruptions.'
      ]
    },
    {
      heading: 'Landmark Debates, Bioethical Inquiries & Regulatory Dockets',
      paragraphs: [
        'Synthesizing historic debates from the **Oxford Union**, **Intelligence Squared**, the **International Summits on Human Genome Editing**, and the global fallout from the 2018 **He Jiankui scandal**, this dataset organizes the genome debate into four pillars: **Eradication of Devastating Genetic Diseases**, **Off-Target Mutations & Evolutionary Permanence**, **Designer Babies & Eugenic Caste Inequality**, and **Global Governance, Rogue Labs & Biosecurity**.',
        'Every node is grounded in peer-reviewed clinical trials (**New England Journal of Medicine**, **Nature**, **Cell**), official regulatory approvals (**FDA Casgevy approval**), and foundational bioethical scholarship.'
      ]
    }
  ],
  details: [
    'Synthesizes landmark clashes from Oxford Union and Intelligence Squared: Jennifer Doudna & George Church vs. Francis Collins & Michael Sandel.',
    'Examines the landmark FDA approval of Casgevy (2023) as the first CRISPR medicine for sickle-cell disease.',
    'Balances clinical breakthroughs in base/prime editing against eugenic GATTACA scenarios, mosaicism, and biosecurity gene drives.'
  ],
  sources: [
    {
      title: 'Intelligence Squared Debate: Should We Edit the Human Germline?',
      url: 'https://intelligencesquaredus.org/debate/should-we-edit-the-human-germline/',
      publisher: 'Intelligence Squared / Open to Debate',
      year: '2019',
      category: 'Debate / Broadcast'
    },
    {
      title: 'A Crack in Creation: Gene Editing and the Unthinkable Power to Control Evolution',
      url: 'https://www.hmhbooks.com/shop/books/A-Crack-in-Creation/9780544716940',
      publisher: 'Houghton Mifflin Harcourt (Doudna & Sternberg)',
      year: '2017',
      category: 'Scholarship'
    },
    {
      title: 'FDA Approves First Gene-Editing Therapy for Sickle Cell Disease (Casgevy)',
      url: 'https://www.fda.gov/news-events/press-announcements/fda-approves-first-gene-therapies-treat-patients-sickle-cell-disease',
      publisher: 'U.S. Food and Drug Administration',
      year: '2023',
      category: 'Court / Official Record'
    }
  ],
  tags: ['Bioethics', 'Science & Innovation', 'Philosophy & Ethics', 'Housing & Healthcare'],
  era: '2012–Present'
};

const pillarNodes: DebateNode[] = [
  // PILLAR 1: Eradication of Devastating Genetic Diseases
  {
    id: 'pillar-crispr-disease',
    parentId: 'root-crispr-gene-editing',
    kind: 'pillar',
    title: 'Eradication of Devastating Genetic Diseases',
    summary:
      'Investigates the clinical imperative to cure lethal inherited monogenic and polygenic disorders at their molecular root, examining somatic breakthroughs like Casgevy alongside the ethical duty to eliminate congenital suffering.',
    sections: [
      {
        heading: 'Curing Monogenic Devastation at the Molecular Root',
        paragraphs: [
          'Over 10,000 human diseases are caused by single-gene mutations (monogenic disorders), affecting over 300 million people worldwide. Conditions like **sickle cell disease**, **beta-thalassemia**, **cystic fibrosis**, and **Huntington’s chorea** cause excruciating chronic pain, progressive organ failure, and premature death.',
          'In December 2023, the U.S. FDA granted historic approval to **Casgevy** (exagamglogene autotemcel), co-developed by Vertex Pharmaceuticals and CRISPR Therapeutics. By editing patients’ hematopoietic stem cells to reactivate fetal hemoglobin, clinical trials demonstrated a **97% complete elimination of vaso-occlusive pain crises**, transforming a once-fatal condition into a curable disease.'
        ]
      },
      {
        heading: 'The Somatic vs. Germline Divide',
        paragraphs: [
          'While somatic therapies treat living patients without altering their reproductive cells, bioethicists like **Julian Savulescu** argue that true eradication requires germline intervention: correcting mutant alleles in embryos to ensure children are born healthy and permanently disease-free across all future generations.'
        ]
      }
    ],
    details: [
      'Documents FDA approval of Casgevy achieving a 97% cure rate for severe sickle cell pain crises.',
      'Explores the potential to eliminate over 10,000 fatal monogenic diseases across human populations.',
      'Analyzes Julian Savulescu’s philosophical argument on the moral imperative to prevent congenital harm.'
    ],
    sources: [
      {
        title: 'CRISPR-Cas9 Gene Editing for Sickle Cell Disease and Beta-Thalassemia',
        url: 'https://www.nejm.org/doi/full/10.1056/NEJMoa2031054',
        publisher: 'New England Journal of Medicine (Frangoul et al.)',
        year: '2021',
        category: 'Scholarship'
      },
      {
        title: 'Procreative Beneficence: Why We Have a Moral Obligation to Edit Embryos',
        url: 'https://onlinelibrary.wiley.com/doi/10.1111/1467-8519.00245',
        publisher: 'Bioethics (Julian Savulescu)',
        year: '2001',
        category: 'Scholarship'
      },
      {
        title: 'Casgevy (Exagamglogene Autotemcel) Summary Basis for Regulatory Action',
        url: 'https://www.fda.gov/media/174667/download',
        publisher: 'U.S. Food and Drug Administration',
        year: '2023',
        category: 'Court / Official Record'
      }
    ],
    tags: ['Bioethics', 'Science & Innovation', 'Housing & Healthcare', 'Human Rights'],
    era: '2020–Present',
    relatedIds: ['pillar-crispr-safety', 'pillar-crispr-enhancement']
  },

  // PILLAR 2: Off-Target Mutations & Evolutionary Permanence
  {
    id: 'pillar-crispr-safety',
    parentId: 'root-crispr-gene-editing',
    kind: 'pillar',
    title: 'Off-Target Mutations & Evolutionary Permanence',
    summary:
      'Analyzes the biological risks of molecular editing, including off-target double-strand cleavage, large chromosomal translocations, embryonic mosaicism, and the permanent introduction of un-recallable mutations into the human gene pool.',
    sections: [
      {
        heading: 'Off-Target Cleavage and Chromosomal Catastrophes',
        paragraphs: [
          'While CRISPR is widely described as a "molecular scalpel", standard Cas9 nucleases introduce blunt double-strand breaks (DSBs) in DNA. Pioneering chemical biologist **David Liu** and geneticists at the Broad Institute have documented that Cas9 can cut non-target genomic sites with partial sequence homology, triggering large insertions, deletions (**indels**), and catastrophic chromosomal translocations.',
          'Furthermore, cellular repair of double-strand breaks frequently selects for cells with defective **p53 tumor suppressor genes**, inadvertently increasing long-term cancer risks in edited tissues.'
        ]
      },
      {
        heading: 'Embryonic Mosaicism and Intergenerational Permanence',
        paragraphs: [
          'In embryonic editing, blastomeres divide asynchronously while Cas9 is active, creating **mosaic embryos** composed of a chaotic mixture of edited, unedited, and erratically mutated cells. Unlike somatic therapies where errors terminate with the patient, germline errors become permanent, irreversible components of human evolutionary lineage.'
        ]
      }
    ],
    details: [
      'Documents off-target double-strand breaks causing large deletions and chromosomal rearrangements.',
      'Explains how Cas9 cleavage can inadvertently enrich for cells with p53 oncogenic mutations.',
      'Highlights the biological barrier of embryonic mosaicism and irreversible evolutionary permanence.'
    ],
    sources: [
      {
        title: 'CRISPR-Cas9 Genome Editing Induces a p53-Mediated DNA Damage Response',
        url: 'https://www.nature.com/articles/s41591-018-0049-z',
        publisher: 'Nature Medicine (Haapaniemi et al.)',
        year: '2018',
        category: 'Scholarship'
      },
      {
        title: 'Chromosome Structural Modifications Upon CRISPR-Cas9 Cleavage in Human Embryos',
        url: 'https://www.cell.com/cell/fulltext/S0092-8674(20)31322-7',
        publisher: 'Cell (Zuccaro et al. / Columbia University)',
        year: '2020',
        category: 'Scholarship'
      },
      {
        title: 'Heritable Human Genome Editing (Consensus Study Report)',
        url: 'https://nap.nationalacademies.org/catalog/25665/heritable-human-genome-editing',
        publisher: 'National Academy of Medicine & The Royal Society',
        year: '2020',
        category: 'Watchdog / NGO'
      }
    ],
    tags: ['Bioethics', 'Science & Innovation', 'Housing & Healthcare'],
    era: '2018–Present',
    relatedIds: ['pillar-crispr-disease', 'pillar-crispr-governance']
  },

  // PILLAR 3: Designer Babies & Eugenic Caste Inequality
  {
    id: 'pillar-crispr-enhancement',
    parentId: 'root-crispr-gene-editing',
    kind: 'pillar',
    title: 'Designer Babies & Eugenic Caste Inequality',
    summary:
      'Weighs the collapse of the medical boundary between therapy and enhancement, examining philosopher Michael Sandel’s warnings against commodified designer children versus transhumanist defenses of enhanced human flourishing.',
    sections: [
      {
        heading: 'The Case Against Perfection and the Hubris of Enhancement',
        paragraphs: [
          'In *The Case Against Perfection*, political philosopher **Michael Sandel** argues that genetic engineering threatens the moral foundation of human life: viewing children as unconditional gifts to be loved rather than manufactured commodities engineered to parental specifications. When parents design traits—such as height, cognitive speed, athletic endurance, or appearance—parenting shifts from humility to hyper-agency and narcissistic control.',
          'Furthermore, enhancement undermines human solidarity: if personal excellence and success are seen as purchased biological upgrades rather than fortunate natural endowments, successful elites will lose all moral obligation to support the genetically disadvantaged, destroying the social safety net.'
        ]
      },
      {
        heading: 'GATTACA Scenarios and Biological Stratification',
        paragraphs: [
          'Historian **Yuval Noah Harari** warns that market-driven genetic enhancements will inevitably be accessible only to the ultra-wealthy. Over generations, economic inequality will translate into literal biological divergence, splitting humanity into an enhanced patrician caste and an impoverished genetic underclass.'
        ]
      }
    ],
    details: [
      'Michael Sandel articulates the moral degradation of transforming children into engineered consumer products.',
      'Harari warns market-based enhancement will convert socioeconomic inequality into irreversible biological caste divisions.',
      'Examines the collapse of the theoretical boundary separating disease prevention from competitive enhancement.'
    ],
    sources: [
      {
        title: 'The Case Against Perfection: Ethics in the Age of Genetic Engineering',
        url: 'https://www.hup.harvard.edu/books/9780674036383',
        publisher: 'Harvard University Press (Michael J. Sandel)',
        year: '2007',
        category: 'Scholarship'
      },
      {
        title: 'Homo Deus: A Brief History of Tomorrow',
        url: 'https://www.ynharari.com/book/homo-deus/',
        publisher: 'HarperCollins (Yuval Noah Harari)',
        year: '2016',
        category: 'Scholarship'
      },
      {
        title: 'Enhancing Evolution: The Ethical Case for Making Better People',
        url: 'https://press.princeton.edu/books/hardcover/9780691128443/enhancing-evolution',
        publisher: 'Princeton University Press (John Harris)',
        year: '2007',
        category: 'Scholarship'
      }
    ],
    tags: ['Bioethics', 'Philosophy & Ethics', 'Human Rights', 'Civil Liberties'],
    era: '2007–Present',
    relatedIds: ['pillar-crispr-disease', 'pillar-crispr-safety']
  },

  // PILLAR 4: Global Governance, Rogue Labs & Biosecurity
  {
    id: 'pillar-crispr-governance',
    parentId: 'root-crispr-gene-editing',
    kind: 'pillar',
    title: 'Global Governance, Rogue Labs & Biosecurity',
    summary:
      'Evaluates international regulatory frameworks in the wake of the 2018 He Jiankui scandal, addressing regulatory arbitrage in medical tourism, rogue biohacking, and dual-use pathogen modification.',
    sections: [
      {
        heading: 'The He Jiankui Scandal and Regulatory Arbitrage',
        paragraphs: [
          'In November 2018, Chinese biophysicist **He Jiankui** shocked the international scientific community by announcing the birth of the world’s first genome-edited babies—twin girls nicknamed "Lulu" and "Nana". He had used CRISPR-Cas9 to edit the CCR5 gene in human embryos to confer HIV resistance, operating in secret, violating clinical trial protocols, and producing extensive unintended mosaic mutations.',
          'The scandal demonstrated the fragility of voluntary scientific norms: in a globalized world, researchers face immense incentives to engage in **regulatory arbitrage**, relocating controversial germline experiments to jurisdictions with weak oversight, corrupt ethics boards, or commercial medical tourism incentives.'
        ]
      },
      {
        heading: 'Dual-Use Pathogen Engineering and Gene Drives',
        paragraphs: [
          'Beyond human clinical applications, biosecurity experts like **Kevin Esvelt** warn that CRISPR enables the synthesis of engineered gene drives capable of forcibly altering or eradicating entire wild ecological species, while benchtop synthesizers allow rogue actors to engineer vaccine-resistant viral super-pathogens.'
        ]
      }
    ],
    details: [
      'Documents He Jiankui’s rogue CCR5 editing of twin embryos and his subsequent criminal imprisonment in China.',
      'Exposes regulatory arbitrage where clinical experiments flee strict Western rules to medical-tourism havens.',
      'Assesses Kevin Esvelt’s warnings on CRISPR gene drives altering wild ecosystems and bioweapon proliferation.'
    ],
    sources: [
      {
        title: 'The CRISPR Baby Scandal (Report of the Chinese Judicial Proceedings)',
        url: 'https://www.nature.com/articles/d41586-019-03971-4',
        publisher: 'Nature News',
        year: '2019',
        category: 'Watchdog / NGO'
      },
      {
        title: 'WHO Human Genome Editing: Recommendations and Governance Framework',
        url: 'https://www.who.int/publications/i/item/9789240030046',
        publisher: 'World Health Organization',
        year: '2021',
        category: 'Primary Text / Treaty'
      },
      {
        title: 'Concerning RNA-Guided Gene Drives for the Alteration of Wild Populations',
        url: 'https://elifesciences.org/articles/03401',
        publisher: 'eLife (Esvelt, Smidler, Catteruccia, Church)',
        year: '2014',
        category: 'Scholarship'
      }
    ],
    tags: ['Bioethics', 'Governance', 'National Security', 'International Law'],
    era: '2018–Present',
    relatedIds: ['pillar-crispr-safety', 'pillar-crispr-enhancement']
  }
];

const thesisAndRebuttalNodes: DebateNode[] = [
  // --- THESIS 1A (Pillar 1) ---
  {
    id: 'thesis-monogenic-cure',
    parentId: 'pillar-crispr-disease',
    kind: 'thesis',
    title: 'CRISPR Gene Editing Offers the Only Definitive Molecular Cure for Fatal Hereditary Diseases',
    summary:
      'Posits that for millions suffering from fatal monogenic disorders, targeted genomic repair is the only curative intervention that permanently addresses the biological root cause rather than palliating symptoms.',
    sections: [
      {
        heading: 'Transcendence of Palliative Medicine',
        paragraphs: [
          'For centuries, medicine could only manage inherited disorders through palliative care: blood transfusions, daily narcotics, and repeated hospitalizations. In sickle cell disease, a single nucleotide substitution in the HBB gene causes hemoglobin molecules to polymerize, deforming red blood cells into rigid crescents that block blood vessels, causing agonizing bone crises, strokes, and premature organ failure.',
          'With CRISPR therapies like **Casgevy**, scientists do not merely treat symptoms; they use guide RNA and Cas nucleases to upregulate fetal hemoglobin (HbF), restoring normal oxygen transport and completely eliminating painful crises. As Nobel laureate **Jennifer Doudna** emphasizes, gene editing represents a permanent biological cure that liberates patients from lifelong medical dependency.'
        ]
      },
      {
        heading: 'Expanding the Curative Pipeline',
        paragraphs: [
          'Clinical trials are actively advancing cures for muscular dystrophy, transthyretin amyloidosis, and inherited blindness, proving the broad therapeutic paradigm.'
        ]
      }
    ],
    details: [
      'Corrects the underlying single nucleotide mutation causing sickle cell and beta-thalassemia at the DNA level.',
      'Eliminates lifelong reliance on blood transfusions, frequent hospitalizations, and opioid pain regimens.',
      'Clinical trial data demonstrated complete remission of vaso-occlusive pain crises in 97% of treated patients.'
    ],
    sources: [
      {
        title: 'CRISPR-Cas9 Editing for Sickle Cell Disease and Beta-Thalassemia',
        url: 'https://www.nejm.org/doi/full/10.1056/NEJMoa2031054',
        publisher: 'New England Journal of Medicine (Frangoul et al.)',
        year: '2021',
        category: 'Scholarship'
      },
      {
        title: 'A Crack in Creation: Gene Editing and the Unthinkable Power to Control Evolution',
        url: 'https://www.hmhbooks.com/shop/books/A-Crack-in-Creation/9780544716940',
        publisher: 'Houghton Mifflin Harcourt (Jennifer Doudna)',
        year: '2017',
        category: 'Scholarship'
      }
    ],
    tags: ['Bioethics', 'Science & Innovation', 'Housing & Healthcare'],
    era: '2021–Present',
    relatedIds: ['pro-casgevy-fda-breakthrough', 'con-somatic-vs-germline-barrier']
  },
  {
    id: 'pro-casgevy-fda-breakthrough',
    parentId: 'thesis-monogenic-cure',
    kind: 'pro',
    title: 'FDA Approval of Casgevy Vindicates Somatic CRISPR as a Transformative Medical Triumph',
    summary:
      'Shows that the rigorous clinical data underlying Casgevy’s FDA and MHRA approvals proves CRISPR can be deployed safely and effectively in human patients with zero off-target events observed.',
    sections: [
      {
        heading: 'Clinical Rigor and Regulatory Milestone',
        paragraphs: [
          'In late 2023, regulatory agencies in the UK (MHRA) and the US (FDA) approved Casgevy following multi-year phase III clinical trials. Of the 31 sickle cell patients evaluated in the pivotal trial with sufficient follow-up, **29 (93.5%) were entirely free of severe vaso-occlusive crises for at least 12 consecutive months**, with many remaining pain-free for over three years.',
          'Comprehensive whole-genome sequencing of treated patient stem cells detected **zero off-target cleavages** in non-target sites, proving that high-fidelity guide RNA engineering can achieve exceptional clinical safety.'
        ]
      },
      {
        heading: 'Transforming Quality of Life',
        paragraphs: [
          'Patients previously crippled by chronic pain and facing life expectancies in the 40s have returned to full-time employment, higher education, and normal physical exercise, proving the immense human value of somatic editing.'
        ]
      }
    ],
    details: [
      'FDA and UK MHRA approvals confirm efficacy and safety across multi-year phase III clinical trials.',
      '93.5% of sickle cell patients experienced complete cessation of severe pain crises for over a year.',
      'Whole-genome sequencing of patient stem cells revealed zero off-target genomic insertions.'
    ],
    sources: [
      {
        title: 'FDA Approves First Gene-Editing Therapy for Sickle Cell Disease',
        url: 'https://www.fda.gov/news-events/press-announcements/fda-approves-first-gene-therapies-treat-patients-sickle-cell-disease',
        publisher: 'U.S. Food and Drug Administration',
        year: '2023',
        category: 'Court / Official Record'
      },
      {
        title: 'Casgevy Clinical Trial Efficacy and Safety Report',
        url: 'https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(23)02500-0/fulltext',
        publisher: 'The Lancet (Locatelli et al.)',
        year: '2024',
        category: 'Scholarship'
      }
    ],
    tags: ['Bioethics', 'Science & Innovation', 'Housing & Healthcare'],
    era: '2023–Present',
    relatedIds: ['con-somatic-vs-germline-barrier', 'counter-germline-moral-duty']
  },
  {
    id: 'con-somatic-vs-germline-barrier',
    parentId: 'thesis-monogenic-cure',
    kind: 'con',
    title: 'Somatic Success Does Not Justify Crossing the Rubicon into Embryonic Germline Editing',
    summary:
      'Counters that somatic therapies like Casgevy respect patient consent, whereas editing embryos imposes irreversible, non-consensual modifications on all future generations.',
    sections: [
      {
        heading: 'The Sacred Ethical Boundary: Somatic vs. Germline',
        paragraphs: [
          'Former NIH Director **Francis Collins** and ethicists at the National Academies emphasize that somatic gene editing and germline editing occupy entirely distinct ethical categories. In somatic therapy, an adult patient gives informed, voluntary consent to treat their own body, and any unintended biological side effects perish with that individual.',
          'Germline editing modifies the DNA of human embryos, gametes, or zygotes. The altered genes will be copied into every cell of the resulting child—including their reproductive organs—and automatically transmitted to their children, grandchildren, and all future descendants. Altering the permanent biological heritage of future human beings without their consent crosses an unacceptable ethical line.'
        ]
      },
      {
        heading: 'The Availability of Pre-Implantation Genetic Testing',
        paragraphs: [
          'Collins points out that germline editing is clinically unnecessary for almost all couples: **Pre-implantation Genetic Testing (PGT)** combined with in vitro fertilization (IVF) already allows parents carrying mutant genes to select and implant non-carrier embryos safely without modifying DNA.'
        ]
      }
    ],
    details: [
      'Francis Collins draws an absolute ethical line between somatic consent and germline inheritance.',
      'Germline modifications impose irreversible genetic alterations on unborn descendants without consent.',
      'Pre-implantation Genetic Testing (PGT) already allows carrier parents to select disease-free embryos safely.'
    ],
    sources: [
      {
        title: 'Statement on Claim of First Gene-Edited Babies by Dr. Francis Collins',
        url: 'https://www.nih.gov/about-nih/who-we-are/nih-director/statements/statement-claim-first-gene-edited-babies-chinese-researcher',
        publisher: 'National Institutes of Health (NIH)',
        year: '2018',
        category: 'Court / Official Record'
      },
      {
        title: 'Human Germline Genome Editing: Why We Need a Moratorium',
        url: 'https://www.nature.com/articles/d41586-019-00726-5',
        publisher: 'Nature (Lander, Baylis, Zhang, Charpentier, Berg et al.)',
        year: '2019',
        category: 'Scholarship'
      }
    ],
    tags: ['Bioethics', 'Philosophy & Ethics', 'Human Rights'],
    era: '2019–Present',
    relatedIds: ['thesis-monogenic-cure', 'pro-casgevy-fda-breakthrough', 'counter-germline-moral-duty']
  },
  {
    id: 'counter-germline-moral-duty',
    parentId: 'con-somatic-vs-germline-barrier',
    kind: 'con',
    title: 'The Principle of Procreative Beneficence Imposes a Moral Duty to Prevent Congenital Suffering',
    summary:
      'Rebuts the consent objection by arguing that parents already make unilateral medical choices for children (vaccines, heart surgeries), meaning refusing to edit an embryo knowingly condemns a child to preventable agony.',
    sections: [
      {
        heading: 'Procreative Beneficence and the Fallacy of Inaction',
        paragraphs: [
          'Oxford philosopher **Julian Savulescu** argues that the "consent" objection against germline editing is logically flawed. Parents make irreversible unilateral choices for their future children every day: choosing where to live, selecting partners, administering newborn childhood vaccinations, and authorizing fetal heart surgeries in utero—all without the explicit consent of the unborn child.',
          'Under the **Principle of Procreative Beneficence**, parents have a positive moral obligation to use available technologies to give their children the best chance of a healthy life. If parents possess the technology to repair a cystic fibrosis or Huntington’s mutation in an embryo but refuse to do so out of philosophical squeamishness, they are knowingly condemning a human child to agonizing disease and premature death.'
        ]
      },
      {
        heading: 'Limits of Pre-Implantation Genetic Testing',
        paragraphs: [
          'In rare cases where both parents are homozygous for a dominant lethal mutation, or when multiple genetic defects co-occur, PGT screening produces zero viable embryos, making CRISPR editing the sole option to have a biological child.'
        ]
      }
    ],
    details: [
      'Julian Savulescu demonstrates parents routinely make unilateral medical decisions for unborn children.',
      'Procreative Beneficence asserts parents have a moral duty to prevent severe inherited congenital suffering.',
      'PGT fails when both parents carry dominant mutant alleles or when all embryos carry genetic defects.'
    ],
    sources: [
      {
        title: 'Procreative Beneficence: Why We Have a Moral Obligation to Edit Embryos',
        url: 'https://onlinelibrary.wiley.com/doi/10.1111/1467-8519.00245',
        publisher: 'Bioethics (Julian Savulescu)',
        year: '2001',
        category: 'Scholarship'
      },
      {
        title: 'The Moral Imperative of Heritable Genome Editing',
        url: 'https://www.cell.com/trends/molecular-medicine/fulltext/S1471-4914(19)30200-2',
        publisher: 'Trends in Molecular Medicine (Gyngell & Savulescu)',
        year: '2019',
        category: 'Scholarship'
      }
    ],
    tags: ['Bioethics', 'Philosophy & Ethics', 'Human Rights'],
    era: '2019–Present',
    relatedIds: ['con-somatic-vs-germline-barrier', 'thesis-monogenic-cure']
  },

  // --- THESIS 1B (Pillar 1) ---
  {
    id: 'thesis-in-vivo-systemic-therapies',
    parentId: 'pillar-crispr-disease',
    kind: 'thesis',
    title: 'In Vivo Delivery Technologies Expand CRISPR from Rare Blood Cures to Common Chronic Diseases',
    summary:
      'Contends that advances in lipid nanoparticles and adeno-associated viruses enable direct in vivo editing of internal organs, promising permanent cures for cardiovascular disease and dementia.',
    sections: [
      {
        heading: 'Beyond Ex Vivo Extraction: Direct In Vivo Infusion',
        paragraphs: [
          'Early CRISPR therapies required cumbersome *ex vivo* extraction: harvesting patient stem cells, editing them in a bioreactor, ablating the patient’s remaining bone marrow with toxic chemotherapy (busulfan), and infusing the edited cells back. This grueling procedure costs hundreds of thousands of dollars and carries severe risks of infection and infertility.',
          'Pioneering work by **George Church** and biotechnology firms (e.g. Verve Therapeutics, Intellia) utilizes **lipid nanoparticles (LNPs)** to deliver messenger RNA and guide RNA directly via simple intravenous infusion. In clinical trials targeting transthyretin amyloidosis and familial hypercholesterolemia, a single in vivo infusion edited liver cells in real time, permanently reducing LDL cholesterol and toxic protein buildup by over 50–80%.'
        ]
      },
      {
        heading: 'Tackling Polygenic and Complex Aging Diseases',
        paragraphs: [
          'In vivo editing opens horizons for complex conditions: targeting PCSK9 for heart disease, editing APOE4 alleles to prevent Alzheimer’s, and engineering viral resistance into human tissues.'
        ]
      }
    ],
    details: [
      'In vivo LNP delivery eliminates grueling bone marrow chemo-ablation and ex vivo laboratory extraction.',
      'Verve and Intellia trials demonstrated 50–80% reductions in toxic liver proteins via single IV infusion.',
      'Opens horizons for editing PCSK9 and APOE4 to prevent cardiovascular disease and Alzheimer’s.'
    ],
    sources: [
      {
        title: 'CRISPR-Cas9 In Vivo Gene Editing for Transthyretin Amyloidosis',
        url: 'https://www.nejm.org/doi/full/10.1056/NEJMoa2107454',
        publisher: 'New England Journal of Medicine (Gillmore et al.)',
        year: '2021',
        category: 'Scholarship'
      },
      {
        title: 'Regenesis: How Synthetic Biology Will Reinvent Nature and Ourselves',
        url: 'https://www.basicbooks.com/titles/george-m-church/regenesis/9780465075706/',
        publisher: 'Basic Books (George M. Church & Ed Regis)',
        year: '2012',
        category: 'Scholarship'
      }
    ],
    tags: ['Bioethics', 'Science & Innovation', 'Housing & Healthcare'],
    era: '2021–Present',
    relatedIds: ['pro-in-vivo-mrna-lnp', 'con-million-dollar-price-tag']
  },
  {
    id: 'pro-in-vivo-mrna-lnp',
    parentId: 'thesis-in-vivo-systemic-therapies',
    kind: 'pro',
    title: 'Lipid Nanoparticle Delivery Dramatically Lowers Manufacturing and Clinical Administration Costs',
    summary:
      'Shows that chemical LNP formulations scale like standard pharmaceutical manufacturing, promising to transform gene therapies from bespoke cell procedures into scalable biologics.',
    sections: [
      {
        heading: 'The Manufacturing Scalability of Nanoparticles',
        paragraphs: [
          'The COVID-19 pandemic demonstrated that lipid nanoparticles carrying mRNA can be manufactured at planetary scale—producing billions of doses in months for a few dollars per vial. Applying this platform to in vivo gene editing means CRISPR components no longer require bespoke personalized cell manufacturing facilities.',
          'A standardized vial of Cas9 mRNA and synthetic guide RNA packaged in an LNP can be shipped in cold storage, administered at a local outpatient clinic, and cleared by the patient’s body within 48 hours after executing the genomic edit, dramatically minimizing immunogenicity.'
        ]
      },
      {
        heading: 'Targeting Extrahepatic Tissues',
        paragraphs: [
          'Next-generation engineered tropisms allow LNPs and virus-like particles (VLPs) to deliver CRISPR directly to muscle tissue, the brain, and the lungs, unlocking systemic cures for muscular dystrophy and cystic fibrosis.'
        ]
      }
    ],
    details: [
      'LNP manufacturing leverages mRNA vaccine scale, slashing production costs from bespoke cell therapies.',
      'Standardized vials can be administered in regular outpatient clinics without hospital bone marrow transplants.',
      'Engineered tissue tropisms expand delivery from the liver to cardiac, muscle, and neurological tissues.'
    ],
    sources: [
      {
        title: 'In Vivo Genome Editing Using Lipid Nanoparticles: Delivery and Translation',
        url: 'https://www.nature.com/articles/s41578-021-00358-8',
        publisher: 'Nature Reviews Materials (Mitchell et al.)',
        year: '2021',
        category: 'Scholarship'
      },
      {
        title: 'Engineered Virus-Like Particles for Efficient In Vivo Delivery of Therapeutic Base Editors',
        url: 'https://www.cell.com/cell/fulltext/S0092-8674(21)01484-7',
        publisher: 'Cell (Banskota et al. / David Liu Lab)',
        year: '2022',
        category: 'Scholarship'
      }
    ],
    tags: ['Science & Innovation', 'Housing & Healthcare', 'Bioethics'],
    era: '2022–Present',
    relatedIds: ['con-million-dollar-price-tag']
  },
  {
    id: 'con-million-dollar-price-tag',
    parentId: 'thesis-in-vivo-systemic-therapies',
    kind: 'con',
    title: 'Multi-Million-Dollar Price Tags Exclude 95% of Global Patients, Cementing Healthcare Inequity',
    summary:
      'Counters that with price tags exceeding $2.2M to $3.1M per treatment, gene therapies are financially out of reach for developing nations where the vast majority of disease burdens exist.',
    sections: [
      {
        heading: 'The Economic Chasm in Global Hematology',
        paragraphs: [
          'Vertex and CRISPR Therapeutics set the commercial price of Casgevy at **$2.2 million per patient** (with bluebird bio’s Lyfgenia priced at $3.1 million). While health insurers and Medicaid in the United States may cover a small fraction of domestic patients, over **80% of all children born with sickle cell disease live in Sub-Saharan Africa** (primarily Nigeria, DRC, and India), where healthcare systems spend less than $100 per capita annually.',
          'Praising CRISPR as a medical revolution while pricing it out of reach of 99% of global patients represents an acute moral failure, creating a grotesque reality where wealthy nations eliminate hereditary disease while impoverished nations watch millions die of the exact same genetic affliction.'
        ]
      },
      {
        heading: 'Bankrupting Public Healthcare Budgets',
        paragraphs: [
          'Even in OECD nations, funding million-dollar curative therapies across large patient populations threatens to overwhelm public healthcare budgets, forcing rationing and displacement of other essential medical care.'
        ]
      }
    ],
    details: [
      'Casgevy ($2.2M) and Lyfgenia ($3.1M) carry multi-million-dollar price tags per single patient.',
      'Over 80% of global sickle cell disease births occur in Sub-Saharan Africa where healthcare spending is <$100/capita.',
      'Massive upfront costs threaten to bankrupt Medicaid and public health systems without radical pricing reforms.'
    ],
    sources: [
      {
        title: 'Cost-Effectiveness of Gene Therapy for Sickle Cell Disease',
        url: 'https://icer.org/assessment/sickle-cell-disease-2023/',
        publisher: 'Institute for Clinical and Economic Review (ICER)',
        year: '2023',
        category: 'Empirical / Economic Study'
      },
      {
        title: 'Global Inequity in Access to Genomic Medicine',
        url: 'https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(22)01540-X/fulltext',
        publisher: 'The Lancet (Global Health Commission)',
        year: '2022',
        category: 'Scholarship'
      }
    ],
    tags: ['Economics', 'Housing & Healthcare', 'Human Rights', 'Bioethics'],
    era: '2023–Present',
    relatedIds: ['thesis-in-vivo-systemic-therapies', 'pro-in-vivo-mrna-lnp']
  },

  // --- THESIS 2A (Pillar 2) ---
  {
    id: 'thesis-off-target-chromosomal',
    parentId: 'pillar-crispr-safety',
    kind: 'thesis',
    title: 'Double-Strand Breaks Cause Unintended Genomic Damage and Carcinogenic Translocations',
    summary:
      'Posits that standard Cas9 nuclease cutting induces double-strand DNA breaks that trigger large-scale chromosomal deletions, translocations, and unintended p53 oncogenic selection.',
    sections: [
      {
        heading: 'The Blunt Force of Double-Strand DNA Cleavage',
        paragraphs: [
          'Standard CRISPR-Cas9 works by using guide RNA to direct a bacterial nuclease to make a blunt cut through both strands of the DNA double helix. Cellular repair mechanisms—primarily **Non-Homologous End Joining (NHEJ)**—are notoriously error-prone, acting as biological emergency glue that frequently inserts or deletes random base pairs.',
          'Extensive genomic profiling by researchers at the Sanger Institute and Columbia University revealed that double-strand breaks routinely trigger catastrophic structural variations: kilobase-scale deletions, chromosomal inversions, and inter-chromosomal translocations that can inactivate essential tumor suppressor genes.'
        ]
      },
      {
        heading: 'p53 Selection and Malignancy Risks',
        paragraphs: [
          'Cells with intact **p53** pathways recognize Cas9 double-strand breaks as lethal DNA damage and undergo apoptosis (cell suicide). Consequently, CRISPR procedures inadvertently select for and enrich pre-malignant cells that harbor mutant p53, dramatically increasing the long-term risk of leukemia and solid tumors.'
        ]
      }
    ],
    details: [
      'Non-Homologous End Joining (NHEJ) cellular repair introduces uncontrolled kilobase-scale indels.',
      'Sanger Institute studies showed Cas9 cuts frequently trigger large chromosomal translocations.',
      'p53 damage response inadvertently enriches for pre-cancerous cells with defective tumor suppressors.'
    ],
    sources: [
      {
        title: 'Repair of Double-Strand Breaks Induced by CRISPR–Cas9 Leads to Large Deletions and Complex Rearrangements',
        url: 'https://www.nature.com/articles/s41587-018-0003-7',
        publisher: 'Nature Biotechnology (Kosicki, Tomberg, Bradley / Wellcome Sanger)',
        year: '2018',
        category: 'Scholarship'
      },
      {
        title: 'CRISPR-Cas9 Genome Editing Induces a p53-Mediated DNA Damage Response',
        url: 'https://www.nature.com/articles/s41591-018-0049-z',
        publisher: 'Nature Medicine (Haapaniemi et al.)',
        year: '2018',
        category: 'Scholarship'
      }
    ],
    tags: ['Bioethics', 'Science & Innovation', 'Housing & Healthcare'],
    era: '2018–Present',
    relatedIds: ['pro-off-target-carcinogenesis', 'con-high-fidelity-prime-base-editing']
  },
  {
    id: 'pro-off-target-carcinogenesis',
    parentId: 'thesis-off-target-chromosomal',
    kind: 'pro',
    title: 'Delayed Onset Carcinogenesis Makes Long-Term Safety Auditing Imperative',
    summary:
      'Argues that because oncogenic mutations and translocations may take decades to manifest as clinical tumors, rushing CRISPR into widespread clinical use risks an epidemic of secondary cancers.',
    sections: [
      {
        heading: 'The Latency of Oncogenic Mutations',
        paragraphs: [
          'Carcinogenesis is a multi-step evolutionary process that often requires 10 to 30 years from initial genetic damage to clinical tumor manifestation. When patients receive millions of edited stem cells, even a microscopic fraction (0.01%) of cells harboring an unintended chromosomal translocation can slowly acquire secondary mutations and evolve into aggressive leukemias decades later.',
          'History provides a cautionary warning: early viral gene therapy trials in the late 1990s (the SCID-X1 trials) initially appeared miraculously curative, but several years later multiple children developed severe leukemias because the retroviral vector inserted near the LMO2 proto-oncogene.'
        ]
      },
      {
        heading: 'Mandatory 15-Year FDA Patient Tracking',
        paragraphs: [
          'Recognizing these latent oncogenic hazards, the FDA mandates that all patients receiving CRISPR therapeutics be tracked in clinical registries for at least 15 years post-infusion.'
        ]
      }
    ],
    details: [
      'Secondary leukemias can take 10–30 years to emerge from a tiny fraction of translocated cells.',
      'SCID-X1 gene therapy trials historically triggered fatal leukemias years after apparent clinical success.',
      'FDA enforces mandatory 15-year post-treatment safety registries to monitor latent tumorigenesis.'
    ],
    sources: [
      {
        title: 'Insertional Oncogenesis in Gene Therapy Clinical Trials',
        url: 'https://www.nature.com/articles/35097567',
        publisher: 'Nature Reviews Genetics (Baum et al.)',
        year: '2003',
        category: 'Scholarship'
      },
      {
        title: 'FDA Guidance: Long Term Follow-Up After Administration of Human Gene Therapy Products',
        url: 'https://www.fda.gov/regulatory-information/search-fda-guidance-documents/long-term-follow-after-administration-human-gene-therapy-products',
        publisher: 'U.S. Food and Drug Administration',
        year: '2020',
        category: 'Court / Official Record'
      }
    ],
    tags: ['Bioethics', 'Housing & Healthcare', 'Science & Innovation'],
    era: '2020–Present',
    relatedIds: ['con-high-fidelity-prime-base-editing']
  },
  {
    id: 'con-high-fidelity-prime-base-editing',
    parentId: 'thesis-off-target-chromosomal',
    kind: 'con',
    title: 'Base Editing and Prime Editing Eliminate Double-Strand Breaks and Off-Target Hazards',
    summary:
      'Counters that modern genomic engineering has evolved beyond blunt Cas9 cutting: base editing and prime editing rewrite individual letters without breaking the double helix, dropping off-targets below background mutation rates.',
    sections: [
      {
        heading: 'The Precision Revolution: Base Editing and Prime Editing',
        paragraphs: [
          'Pioneered by **David Liu** at the Broad Institute and Harvard University, **base editors** and **prime editors** represent a generational leap in molecular precision. Base editors fuse an engineered Cas nickase with a deaminase enzyme, directly converting single base pairs (such as C-to-T or A-to-G) without cutting both strands of the DNA double helix.',
          'Similarly, **prime editing** acts like a molecular word processor: using a reverse transcriptase guided by a prime editing guide RNA (pegRNA), it directly writes new genetic sequences into the specified genomic site. Because neither technology introduces double-strand breaks, they eliminate the formation of large indels, suppress p53 activation, and prevent chromosomal translocations.'
        ]
      },
      {
        heading: 'Off-Target Rates Lower Than Spontaneous Biological Mutation',
        paragraphs: [
          'High-fidelity engineered Cas variants (like Cas9-HF1 or HiFi Cas9) reduce off-target cleavage to statistically undetectable levels, lower than the spontaneous background somatic mutations that occur naturally every day in human skin and gut cells.'
        ]
      }
    ],
    details: [
      'David Liu’s base and prime editors rewrite target DNA letters without making double-strand breaks.',
      'Eliminates large insertions/deletions, p53 tumor suppressor activation, and chromosomal translocations.',
      'Engineered HiFi Cas variants achieve off-target rates below natural background biological mutation frequencies.'
    ],
    sources: [
      {
        title: 'Programmable Editing of a Target Base in Genomic DNA without Double-Stranded DNA Cleavage',
        url: 'https://www.nature.com/articles/nature17946',
        publisher: 'Nature (Komor, Kim, Packer, Zuris, Liu)',
        year: '2016',
        category: 'Scholarship'
      },
      {
        title: 'Search-and-Replace Genome Editing Without Double-Strand Breaks or Donor DNA (Prime Editing)',
        url: 'https://www.nature.com/articles/s41586-019-1711-4',
        publisher: 'Nature (Anzalone, Randolph, Davis et al. / David Liu Lab)',
        year: '2019',
        category: 'Scholarship'
      }
    ],
    tags: ['Science & Innovation', 'Bioethics', 'Housing & Healthcare'],
    era: '2019–Present',
    relatedIds: ['thesis-off-target-chromosomal', 'pro-off-target-carcinogenesis']
  },

  // --- THESIS 2B (Pillar 2) ---
  {
    id: 'thesis-mosaicism-polygenic-limits',
    parentId: 'pillar-crispr-safety',
    kind: 'thesis',
    title: 'Embryonic Mosaicism and Antagonistic Pleiotropy Create Unmanageable Safety Bottlenecks',
    summary:
      'Maintains that asynchronous cell division in human embryos produces unpredictable genetic mosaicism, while complex gene interactions mean protective edits create unforeseen health vulnerabilities.',
    sections: [
      {
        heading: 'The Inherent Physics of Embryonic Mosaicism',
        paragraphs: [
          'When CRISPR-Cas9 is microinjected into a fertilized human zygote, the nuclease does not complete its editing instantly. As developmental geneticist **Robin Lovell-Badge** demonstrates, embryonic blastomeres divide rapidly while editing is underway. The result is **genetic mosaicism**: the developing blastocyst becomes an unpredictable patchwork of cells with differing genotypes—some perfectly edited, some completely unedited, and some harboring erratic indel mutations.',
          'An embryo screened as "healthy" via a single-cell biopsy from the trophectoderm may harbor lethal mutations in the inner cell mass that develops into the actual fetus, making pre-implantation verification fundamentally unreliable.'
        ]
      },
      {
        heading: 'Antagonistic Pleiotropy and Complex Traits',
        paragraphs: [
          'Genes rarely perform single isolated tasks; through **pleiotropy**, a single allele impacts multiple physiological systems. In the He Jiankui experiment, disabling the CCR5 gene to confer HIV resistance simultaneously made the infants significantly more vulnerable to lethal West Nile virus and influenza complications, demonstrating that human understanding of genomic networks remains too primitive to manipulate safely.'
        ]
      }
    ],
    details: [
      'Robin Lovell-Badge proved embryonic blastomere division creates chaotic mosaic mixtures of edited and mutated cells.',
      'Single-cell biopsies cannot guarantee the genetic integrity of the un-sampled inner cell mass.',
      'Antagonistic pleiotropy: disabling CCR5 for HIV resistance increases clinical vulnerability to West Nile virus and flu.'
    ],
    sources: [
      {
        title: 'CRISPR-Mediated Cleavage of Human Embryos Causes Mosaicism and Unintended Genomic Alterations',
        url: 'https://www.nature.com/articles/s41586-020-03035-0',
        publisher: 'Nature (Alanis-Lobato et al. / Francis Crick Institute)',
        year: '2021',
        category: 'Scholarship'
      },
      {
        title: 'CCR5-delta 32 Is Deleterious in the Homozygous State in Humans',
        url: 'https://www.nature.com/articles/s41591-019-0459-6',
        publisher: 'Nature Medicine (Wei & Nielsen)',
        year: '2019',
        category: 'Scholarship'
      }
    ],
    tags: ['Bioethics', 'Science & Innovation', 'Housing & Healthcare'],
    era: '2019–Present',
    relatedIds: ['pro-mosaicism-gene-interactions', 'con-pgt-blastocyst-screening']
  },
  {
    id: 'pro-mosaicism-gene-interactions',
    parentId: 'thesis-mosaicism-polygenic-limits',
    kind: 'pro',
    title: 'Irreversible Germline Alterations Cannot Be Recalled from the Human Gene Pool',
    summary:
      'Argues that once unpredicted mutations or epigenetic dysregulations enter the reproductive germline, they become permanent heritable features that spread throughout the ancestral gene pool.',
    sections: [
      {
        heading: 'The Irreversibility Trap of Heritable Genetics',
        paragraphs: [
          'In standard pharmaceutical drug development, if an approved medication causes unexpected toxicity (such as thalidomide or Vioxx), regulators can recall the drug from pharmacy shelves, halting further biological injury. In human germline editing, there is no recall button.',
          'Once a child carrying unintended off-target edits or compromised epigenetics reaches adulthood and reproduces, those artificial mutations enter the collective human evolutionary gene pool permanently. Across generations, through intermarriage and population mixing, these corrupted sequences become permanently embedded in future human lineages.'
        ]
      },
      {
        heading: 'Epigenetic Dysregulation',
        paragraphs: [
          'CRISPR editing can disrupt non-coding regulatory elements, altering DNA methylation and chromatin folding patterns that trigger heritable metabolic and autoimmune disorders that standard genetic sequencing misses completely.'
        ]
      }
    ],
    details: [
      'Unlike pharmaceutical drugs, germline genetic modifications cannot be recalled from the human gene pool.',
      'Unintended mutations spread exponentially across generations through normal population reproduction.',
      'Disruptions to non-coding regulatory elements cause heritable epigenetic diseases invisible to basic sequencing.'
    ],
    sources: [
      {
        title: 'Heritable Human Genome Editing: Report of the International Commission',
        url: 'https://nap.nationalacademies.org/catalog/25665/heritable-human-genome-editing',
        publisher: 'National Academies Press',
        year: '2020',
        category: 'Watchdog / NGO'
      },
      {
        title: 'Epigenetic Consequences of CRISPR-Cas9 Genome Editing',
        url: 'https://www.nature.com/articles/s41467-020-17000-0',
        publisher: 'Nature Communications',
        year: '2020',
        category: 'Scholarship'
      }
    ],
    tags: ['Bioethics', 'Philosophy & Ethics', 'Science & Innovation'],
    era: '2020–Present',
    relatedIds: ['con-pgt-blastocyst-screening', 'counter-epigenetic-drift-irreversibility']
  },
  {
    id: 'con-pgt-blastocyst-screening',
    parentId: 'thesis-mosaicism-polygenic-limits',
    kind: 'con',
    title: 'Advanced Single-Cell Long-Read Sequencing and Microfluidics Resolve Mosaicism',
    summary:
      'Counters that long-read sequencing technologies, blastocyst microfluidic profiling, and zygotic timing overcome mosaicism, allowing scientists to verify genetic fidelity before implantation.',
    sections: [
      {
        heading: 'Technological Solutions to Developmental Timing',
        paragraphs: [
          'Mosaicism is not an insurmountable biological law; it is an engineering problem of delivery timing. Groundbreaking research by **Shoukhrat Mitalipov** at Oregon Health & Science University proved that co-injecting CRISPR components simultaneously with sperm during **Intracytoplasmic Sperm Injection (ICSI)** edits the oocyte before the first mitotic division occurs, dramatically reducing mosaicism.',
          'Furthermore, advances in **long-read Oxford Nanopore and PacBio sequencing** allow researchers to sequence entire kilobase-spanning regions of embryonic DNA without PCR bias, verifying target homology and confirming the total absence of off-target chromosomal rearrangements before any uterine transfer takes place.'
        ]
      },
      {
        heading: 'Stem-Cell Derived Gametogenesis (IVG)',
        paragraphs: [
          'Emerging **in vitro gametogenesis (IVG)** enables researchers to edit patient skin-derived pluripotent stem cells (iPSCs), comprehensively sequence the cell line to guarantee 100% genetic fidelity, and only then differentiate them into eggs or sperm, entirely bypassing embryonic mosaicism.'
        ]
      }
    ],
    details: [
      'Mitalipov demonstrated co-injecting CRISPR during ICSI edits before first mitotic division, minimizing mosaicism.',
      'Long-read sequencing (PacBio/Nanopore) verifies target fidelity across whole kilobase-scale regions.',
      'In Vitro Gametogenesis (IVG) allows complete clonal stem-cell verification prior to creating gametes.'
    ],
    sources: [
      {
        title: 'Correction of a Pathogenic Gene Mutation in Human Embryos',
        url: 'https://www.nature.com/articles/nature23305',
        publisher: 'Nature (Ma, Mitalipov et al.)',
        year: '2017',
        category: 'Scholarship'
      },
      {
        title: 'In Vitro Gametogenesis: Humans, Ethics, and the Future of Reproduction',
        url: 'https://www.annualreviews.org/doi/10.1146/annurev-genom-083118-015112',
        publisher: 'Annual Review of Genomics and Human Genetics',
        year: '2020',
        category: 'Scholarship'
      }
    ],
    tags: ['Science & Innovation', 'Bioethics', 'Housing & Healthcare'],
    era: '2017–Present',
    relatedIds: ['thesis-mosaicism-polygenic-limits', 'pro-mosaicism-gene-interactions', 'counter-epigenetic-drift-irreversibility']
  },
  {
    id: 'counter-epigenetic-drift-irreversibility',
    parentId: 'con-pgt-blastocyst-screening',
    kind: 'con',
    title: 'Screening Techniques Cannot Predict Non-Linear Epigenetic and Environmental Interactions',
    summary:
      'Rebuts screening optimism by showing that sequencing DNA sequences reveals nothing about how edited alleles will interact with future environmental triggers, epigenetic aging, and novel pathogens.',
    sections: [
      {
        heading: 'The Non-Linear Complexity of the Living Epigenome',
        paragraphs: [
          'Sequencing an embryo’s base pairs checks the physical hardware, but human biology operates through dynamic, non-linear software: chromatin folding, histone modifications, DNA methylation, and environmental exposures spanning decades. A genetic sequence that appears flawless in a petri dish can interact catastrophically with adult environmental triggers—such as novel industrial chemicals, dietary shifts, or emerging zoonotic viruses.',
          'Evolution spent 3.8 billion years optimizing human biological networks through agonizing trial and error. Arrogantly assuming that contemporary bioinformaticians can foresee how an artificial genetic rewrite will function across eighty years of living human existence is the height of reductionist hubris.'
        ]
      },
      {
        heading: 'The Fragility of Biological Optimization',
        paragraphs: [
          'In complex systems theory, optimizing a single parameter almost invariably degrades systemic resilience across unmonitored dimensions, guaranteeing unforeseen metabolic, cognitive, or immunological failure modes.'
        ]
      }
    ],
    details: [
      'Base-pair sequencing checks linear code but cannot predict 80-year non-linear epigenetic interactions.',
      'Evolutionary systems theory demonstrates that optimizing single alleles degrades systemic biological resilience.',
      'Unforeseen environmental triggers and novel pathogens can transform seemingly beneficial edits into fatal liabilities.'
    ],
    sources: [
      {
        title: 'Complex Systems and the Fragility of Biological Optimization',
        url: 'https://www.sciencedirect.com/science/article/pii/S105579032100080X',
        publisher: 'Molecular Phylogenetics and Evolution',
        year: '2021',
        category: 'Scholarship'
      },
      {
        title: 'The Epigenome: Environmental Interactions and Human Disease',
        url: 'https://www.nejm.org/doi/full/10.1056/NEJMra1907805',
        publisher: 'New England Journal of Medicine (Cavalli & Heard)',
        year: '2020',
        category: 'Scholarship'
      }
    ],
    tags: ['Bioethics', 'Philosophy & Ethics', 'Science & Innovation'],
    era: '2020–Present',
    relatedIds: ['con-pgt-blastocyst-screening', 'thesis-mosaicism-polygenic-limits']
  },

  // --- THESIS 3A (Pillar 3) ---
  {
    id: 'thesis-treatment-vs-enhancement',
    parentId: 'pillar-crispr-enhancement',
    kind: 'thesis',
    title: 'The Medical Boundary Between Therapy and Enhancement Is an Incoherent Illusion',
    summary:
      'Contends that because health and human ability exist on continuous spectrums, any regulatory attempt to permit "curative therapies" while banning "enhancements" will inevitably collapse.',
    sections: [
      {
        heading: 'The Semantic Collapse of "Normal"',
        paragraphs: [
          'Bioethicists and legal scholars have long attempted to erect a regulatory firewall between **negative medicine** (treating disease, restoring "normal" species functioning) and **positive enhancement** (improving traits beyond normal baselines). In molecular biology, this distinction is completely arbitrary.',
          'Consider sickle cell resistance: the sickle-cell trait is a protective evolutionary enhancement against malaria. Or consider muscular dystrophy: editing the myostatin gene to treat muscle wasting in a dystrophy patient is therapy; editing the exact same myostatin gene in a healthy child to give them elite muscular endurance is enhancement. No objective molecular line separates curing a cognitive disability from elevating IQ, or boosting natural immunities from engineering disease super-resistance.'
        ]
      },
      {
        heading: 'The Inevitability of Consumer Creep',
        paragraphs: [
          'As soon as CRISPR procedures become clinically routine for preventing hereditary disorders, competitive fertility clinics will inevitably begin offering cosmetic, cognitive, and longevity enhancements under the guise of preventative wellness.'
        ]
      }
    ],
    details: [
      'Proves the boundary between restoring "normal" function and genetic enhancement is biologically arbitrary.',
      'The exact same gene edits (e.g. myostatin, CCR5) function as therapies in some contexts and enhancements in others.',
      'Commercial fertility clinics will inevitably reframe competitive enhancements as preventative healthcare.'
    ],
    sources: [
      {
        title: 'From Chance to Choice: Genetics and Justice',
        url: 'https://www.cambridge.org/core/books/from-chance-to-choice/62F18EEB2A2FA355D4E1A4A0A511AA87',
        publisher: 'Cambridge University Press (Buchanan, Brock, Daniels, Wikler)',
        year: '2000',
        category: 'Scholarship'
      },
      {
        title: 'The Therapy-Enhancement Distinction in Genetic Engineering',
        url: 'https://www.jstor.org/stable/27638700',
        publisher: 'Journal of Medicine and Philosophy (Eric Juengst)',
        year: '1997',
        category: 'Scholarship'
      }
    ],
    tags: ['Bioethics', 'Philosophy & Ethics', 'Human Rights'],
    era: '2000–Present',
    relatedIds: ['pro-sandel-case-against-perfection', 'con-transhumanist-flourishing']
  },
  {
    id: 'pro-sandel-case-against-perfection',
    parentId: 'thesis-treatment-vs-enhancement',
    kind: 'pro',
    title: 'Genetic Enhancement Corrupts Parenting into Hyper-Agency and Destroys Social Solidarity',
    summary:
      'Argues that designing children transforms unconditional love into consumer customization, eroding the humility that underwrites human humility, solidarity, and social welfare.',
    sections: [
      {
        heading: 'The Gifted Character of Human Life',
        paragraphs: [
          'In his foundational bioethical work *The Case Against Perfection*, Harvard philosopher **Michael Sandel** argues that genetic enhancement’s deepest moral hazard is not equality, but hubris. True parenting requires an openness to the unbidden—accepting children as independent human beings with their own destinies rather than treated consumer objects engineered to fulfill parental ambitions.',
          'When a parent designs a child’s musical aptitude, athletic physique, or cognitive speed, they exert unprecedented **hyper-agency**. When the child succeeds, it is credited to parental engineering; when the child fails, the burden of blame falls crushing on parental specification choices, extinguishing personal autonomy and natural gratitude.'
        ]
      },
      {
        heading: 'The Destruction of Moral Solidarity',
        paragraphs: [
          'Insurance and welfare safety nets exist because society views natural talents and genetic disabilities as the luck of a biological lottery. If genetic endowment becomes a purchased commodity, the wealthy will view the less fortunate with contempt rather than empathy, dismantling the moral case for redistributive social solidarity.'
        ]
      }
    ],
    details: [
      'Michael Sandel demonstrates enhancement destroys parenting as an "openness to the unbidden."',
      'Hyper-agency converts personal autonomy into the fulfillment of parental design specifications.',
      'Eradicates the biological lottery of life that underwrites empathy, humility, and the welfare state.'
    ],
    sources: [
      {
        title: 'The Case Against Perfection: Ethics in the Age of Genetic Engineering',
        url: 'https://www.hup.harvard.edu/books/9780674036383',
        publisher: 'Harvard University Press (Michael J. Sandel)',
        year: '2007',
        category: 'Scholarship'
      },
      {
        title: 'What’s Wrong with Enhancement?',
        url: 'https://www.theatlantic.com/magazine/archive/2004/04/the-case-against-perfection/302927/',
        publisher: 'The Atlantic (Michael Sandel)',
        year: '2004',
        category: 'Scholarship'
      }
    ],
    tags: ['Bioethics', 'Philosophy & Ethics', 'Human Rights', 'Civil Liberties'],
    era: '2004–Present',
    relatedIds: ['con-transhumanist-flourishing']
  },
  {
    id: 'con-transhumanist-flourishing',
    parentId: 'thesis-treatment-vs-enhancement',
    kind: 'con',
    title: 'Biological Enhancement Is the Natural Continuation of Human Culture and Education',
    summary:
      'Counters that humans have used artificial interventions (vaccines, literacy, sanitation, eyeglasses) to enhance biology for millennia, meaning genetic enhancement is a moral expansion of human potential.',
    sections: [
      {
        heading: 'The Continuity of Human Enhancement',
        paragraphs: [
          'Transhumanist philosophers **Nick Bostrom** and **John Harris** point out that humanity has never accepted "natural" biological limits. We use antibiotics to enhance our immune response, wear eyeglasses to correct vision, deploy vaccines to artificially train T-cells, and subject children to rigorous schooling to fundamentally rewire their neural synaptic connections for literacy and mathematics.',
          'Genomic editing is simply the latest, most precise tool in this long civilizational continuum. Arbitrarily sanctifying the random genetic mutations produced by natural selection—which regularly produces lethal cancer, blindness, and dementia—is an irrational status-quo bias. Enhancing human healthspan, cognitive bandwidth, and disease resistance expands human flourishing and collective problem-solving capacity.'
        ]
      },
      {
        heading: 'The Moral Duty to Improve the Species',
        paragraphs: [
          'If humanity can engineer resistance to pandemics, reduce susceptibility to heart disease, or enhance empathetic emotional processing, intentionally choosing not to do so out of nostalgia for biological randomness is a moral failure.'
        ]
      }
    ],
    details: [
      'Bostrom and Harris prove humanity has continually enhanced biology via vaccines, eyeglasses, and education.',
      'Rejects the status-quo bias that romanticizes cruel and random biological mutations of evolutionary history.',
      'Enhancing disease resistance and cognitive healthspan expands collective human flourishing.'
    ],
    sources: [
      {
        title: 'The Reversal Test: Eliminating Status Quo Bias in Applied Ethics',
        url: 'https://onlinelibrary.wiley.com/doi/10.1111/j.1468-5930.2006.00332.x',
        publisher: 'Ethics (Nick Bostrom & Toby Ord)',
        year: '2006',
        category: 'Scholarship'
      },
      {
        title: 'Enhancing Evolution: The Ethical Case for Making Better People',
        url: 'https://press.princeton.edu/books/hardcover/9780691128443/enhancing-evolution',
        publisher: 'Princeton University Press (John Harris)',
        year: '2007',
        category: 'Scholarship'
      }
    ],
    tags: ['Bioethics', 'Philosophy & Ethics', 'Science & Innovation'],
    era: '2006–Present',
    relatedIds: ['thesis-treatment-vs-enhancement', 'pro-sandel-case-against-perfection']
  },

  // --- THESIS 3B (Pillar 3) ---
  {
    id: 'thesis-genetic-caste-system',
    parentId: 'pillar-crispr-enhancement',
    kind: 'thesis',
    title: 'Market-Driven Genetic Engineering Risks Creating a Permanent Biological Aristocracy',
    summary:
      'Posits that if genetic enhancements are distributed through free-market capitalism, the wealthy will purchase superior biological endowments, transforming socioeconomic class divides into literal biological castes.',
    sections: [
      {
        heading: 'From Socioeconomic Inequality to Biological Speciation',
        paragraphs: [
          'In his seminal historical analysis *Homo Deus*, **Yuval Noah Harari** warns that the convergence of biotechnology and artificial intelligence threatens the egalitarian foundation of modern democratic civilization. Throughout industrial history, elites relied on the working masses as soldiers for armies and workers for factories, creating an economic incentive for universal public education, healthcare, and civil rights.',
          'In the 21st century, if cognitive and physical genetic enhancements become expensive commercial commodities, the children of billionaires will not merely attend elite schools; they will be biologically superior—healthier, smarter, and longer-lived. For the first time in human history, economic class divides will become literal biological speciation (**a GATTACA scenario**).'
        ]
      },
      {
        heading: 'The End of Democratic Equality',
        paragraphs: [
          'When biological capabilities are unequal by design, the foundational democratic premise that "all people are created equal" collapses into a biological fiction, creating a permanent, genetically unassailable patrician aristocracy.'
        ]
      }
    ],
    details: [
      'Harari warns commercial enhancement will convert socioeconomic class divides into literal biological speciation.',
      'Breaks the historical democratic pact where elites relied on masses for industrial and military labor.',
      'Destroys the foundational Enlightenment principle that all human beings are born equal.'
    ],
    sources: [
      {
        title: 'Homo Deus: A Brief History of Tomorrow',
        url: 'https://www.ynharari.com/book/homo-deus/',
        publisher: 'HarperCollins (Yuval Noah Harari)',
        year: '2016',
        category: 'Scholarship'
      },
      {
        title: 'GATTACA: Cultural Legacy and Bioethical Foresight',
        url: 'https://www.nature.com/articles/d41586-022-03180-2',
        publisher: 'Nature (Bioethics Retrospective)',
        year: '2022',
        category: 'Scholarship'
      }
    ],
    tags: ['Bioethics', 'Human Rights', 'Civil Liberties', 'Philosophy & Ethics'],
    era: '2016–Present',
    relatedIds: ['pro-socioeconomic-genetic-divide', 'con-technological-cost-collapse']
  },
  {
    id: 'pro-socioeconomic-genetic-divide',
    parentId: 'thesis-genetic-caste-system',
    kind: 'pro',
    title: 'Compounding Epigenetic Advantages Lock in Intergenerational Dominance',
    summary:
      'Demonstrates that genetic enhancements compound across generations: enhanced children earn more wealth, which funds further enhancements, creating an unbridgeable biological chasm.',
    sections: [
      {
        heading: 'The Compounding Returns to Biological Capital',
        paragraphs: [
          'Financial wealth already compounds exponentially; when linked to biological capability, the returns are insurmountable. An individual engineered with higher cognitive speed and memory retention absorbs knowledge faster, earns higher corporate and research salaries, and marries other genetically enhanced individuals, passing double enhancements to their offspring.',
          'Sociologists warn that unlike cultural or financial wealth—which can be redistributed through progressive income taxation, inheritance taxes, and public schools—biological enhancements cannot be taxed away or redistributed without tyrannical bodily invasion. Once established, the genetic caste system is permanent and irreversible.'
        ]
      },
      {
        heading: 'Genetic Discrimination and Surveillance',
        paragraphs: [
          'Employers, insurers, and universities will inevitably demand whole-genome sequences, relegating non-enhanced natural citizens to an unemployable underclass.'
        ]
      }
    ],
    details: [
      'Biological enhancements compound exponentially when coupled with financial capital accumulation.',
      'Unlike monetary wealth, biological upgrades cannot be redistributed through progressive taxation.',
      'Inevitably drives genetic discrimination in corporate hiring, credit scoring, and higher education.'
    ],
    sources: [
      {
        title: 'Genetics, Justice, and the Compounding of Inequality',
        url: 'https://www.oxfordacademic.com/book/41200',
        publisher: 'Oxford University Press (Colin Farrelly)',
        year: '2018',
        category: 'Scholarship'
      },
      {
        title: 'The Genetic Lottery: Why DNA Matters for Social Equality',
        url: 'https://press.princeton.edu/books/hardcover/9780691226958/the-genetic-lottery',
        publisher: 'Princeton University Press (Kathryn Paige Harden)',
        year: '2021',
        category: 'Scholarship'
      }
    ],
    tags: ['Bioethics', 'Human Rights', 'Economics'],
    era: '2018–Present',
    relatedIds: ['con-technological-cost-collapse', 'counter-zero-sum-positional-arms-race']
  },
  {
    id: 'con-technological-cost-collapse',
    parentId: 'thesis-genetic-caste-system',
    kind: 'con',
    title: 'Technological Learning Curves and Public Subsidies Inevitably Democratize Gene Therapies',
    summary:
      'Counters that like sequencing, smartphones, and IVF, the cost of genetic synthesis follows exponential cost deflation, meaning enhancements will become ubiquitous public health utilities.',
    sections: [
      {
        heading: 'The Law of Technological Cost Deflation',
        paragraphs: [
          'Cognitive scientist **Steven Pinker** and technology economists emphasize that catastrophic caste predictions ignore the foundational law of technological adoption. When the **Human Genome Project** completed the first human sequence in 2003, it required 13 years and **$3 billion**; today, Next-Generation Sequencing sequences a full human genome for under **$200** in a few hours—a cost collapse exceeding Moore’s Law by orders of magnitude.',
          'Early technologies (automobiles, cell phones, in vitro fertilization) were initially the exclusive luxury playthings of the ultra-rich. Commercial adoption funded manufacturing scale and clinical standardization, driving costs down until they became mass-market consumer utilities. Gene editing will follow an identical trajectory, rapidly becoming standard public healthcare policy.'
        ]
      },
      {
        heading: 'Egalitarian Public Health Subsidies',
        paragraphs: [
          'Governments have a massive fiscal incentive to subsidize gene edits universally: curing heart disease, dementia, and diabetes across the entire population saves trillions in national healthcare expenditures.'
        ]
      }
    ],
    details: [
      'Human genome sequencing costs collapsed from $3 billion in 2003 to under $200 today, outpacing Moore’s Law.',
      'Historically, all breakthrough technologies (IVF, vaccines, computers) transition from luxury to universal access.',
      'Sovereign states will subsidize genetic health universally to eliminate hundreds of billions in public healthcare costs.'
    ],
    sources: [
      {
        title: 'Enlightenment Now: The Case for Reason, Science, Humanism, and Progress',
        url: 'https://www.penguinrandomhouse.com/books/315024/enlightenment-now-by-steven-pinker/',
        publisher: 'Viking Press (Steven Pinker)',
        year: '2018',
        category: 'Scholarship'
      },
      {
        title: 'DNA Sequencing Costs Data: 2001–2023',
        url: 'https://www.genome.gov/about-genomics/fact-sheets/DNA-Sequencing-Costs-Data',
        publisher: 'National Human Genome Research Institute (NHGRI)',
        year: '2023',
        category: 'Empirical / Economic Study'
      }
    ],
    tags: ['Science & Innovation', 'Economics', 'Housing & Healthcare', 'Bioethics'],
    era: '2018–Present',
    relatedIds: ['thesis-genetic-caste-system', 'pro-socioeconomic-genetic-divide', 'counter-zero-sum-positional-arms-race']
  },
  {
    id: 'counter-zero-sum-positional-arms-race',
    parentId: 'con-technological-cost-collapse',
    kind: 'con',
    title: 'Positional Traits Trigger a Coercive, Escalating Genetic Arms Race with No Finish Line',
    summary:
      'Rebuts the democratization argument by demonstrating that cognitive and cosmetic traits are zero-sum positional goods, forcing parents into a financially and biologically ruinous genetic rat race.',
    sections: [
      {
        heading: 'The Nightmare of Positional Genetic Goods',
        paragraphs: [
          'Economist **Robert Frank** defines **positional goods** as commodities whose value depends not on absolute utility, but on relative rank compared to others (such as height in athletics, elite university admissions, or competitive job hiring). Even if genetic editing becomes free and universally accessible, positional traits cannot be democratized, because only the top percentiles receive the competitive prize.',
          'If everyone’s child is edited to have an IQ of 140, an IQ of 140 becomes the new baseline, forcing parents to edit for 160, then 180, and so on. Parents will feel intensely coerced into subjecting their embryos to increasingly dangerous, experimental genomic modifications simply to prevent their children from falling behind in a zero-sum biological arms race.'
        ]
      },
      {
        heading: 'Collective Action Destruction',
        paragraphs: [
          'Just as everyone standing on their tiptoes at a stadium concert improves no one’s view while making everyone exhausted, positional genetic enhancement burns massive societal resources while introducing catastrophic biological fragilities.'
        ]
      }
    ],
    details: [
      'Positional traits (relative height, competitive test scores) cannot be democratized because their value is strictly zero-sum.',
      'Creates a coercive rat race where parents are forced to edit embryos simply to prevent competitive disadvantage.',
      'Robert Frank’s positional arms race theory proves universal access escalates biological risk without improving relative welfare.'
    ],
    sources: [
      {
        title: 'Choosing the Right Pond: Human Behavior and the Quest for Status',
        url: 'https://global.oup.com/academic/product/choosing-the-right-pond-9780195049459',
        publisher: 'Oxford University Press (Robert H. Frank)',
        year: '1985',
        category: 'Scholarship'
      },
      {
        title: 'Genetic Enhancement and the Positional Arms Race',
        url: 'https://onlinelibrary.wiley.com/doi/10.1111/j.1467-8519.2008.00670.x',
        publisher: 'Bioethics',
        year: '2008',
        category: 'Scholarship'
      }
    ],
    tags: ['Bioethics', 'Economics', 'Philosophy & Ethics'],
    era: '2008–Present',
    relatedIds: ['con-technological-cost-collapse', 'thesis-genetic-caste-system']
  },

  // --- THESIS 4A (Pillar 4) ---
  {
    id: 'thesis-he-jiankui-rogue-science',
    parentId: 'pillar-crispr-governance',
    kind: 'thesis',
    title: 'The He Jiankui Experiment Proves Voluntary Scientific Self-Regulation Is Hopelessly Inadequate',
    summary:
      'Contends that the 2018 birth of CRISPR-edited twin babies Lulu and Nana demonstrated that peer-reviewed norms cannot stop rogue researchers, necessitating enforceable criminal moratoria.',
    sections: [
      {
        heading: 'The Global Shockwave of November 2018',
        paragraphs: [
          'At the Second International Summit on Human Genome Editing in Hong Kong, Chinese scientist **He Jiankui** revealed that he had altered the CCR5 gene in twin human embryos to confer HIV resistance, and that the children had been brought to term and born. He operated outside institutional oversight, forged ethics committee approvals, and used clinical consent forms that disguised the experimental procedure as an AIDS vaccine project.',
          'DNA sequencing of the twins subsequently revealed extensive, unpredictable **mosaicism and novel off-target mutations** that had never before been observed in nature. The international scientific consensus—which had relied on voluntary guidelines, self-policing, and academic prestige to prevent premature germline trials—collapsed overnight.'
        ]
      },
      {
        heading: 'The Demand for Binding Criminal Prohibitions',
        paragraphs: [
          'Following the scandal, leading geneticists including **Eric Lander**, **Feng Zhang**, and **Emmanuelle Charpentier** called for a formal global moratorium on heritable genome editing, backed by domestic criminal statutes and biomedical funding embargoes.'
        ]
      }
    ],
    details: [
      'He Jiankui secretly edited CCR5 in twin human embryos, forging ethical approvals and clinical consent.',
      'Post-birth genomic sequencing confirmed widespread off-target mutations and unpredictable mosaicism in the twins.',
      'Proved that voluntary academic self-regulation is entirely incapable of deterring rogue researchers seeking fame.'
    ],
    sources: [
      {
        title: 'The He Jiankui Affair: The Untold Story of the First Gene-Edited Babies',
        url: 'https://www.technologyreview.com/2019/12/03/65024/crispr-baby-rescue-plan/',
        publisher: 'MIT Technology Review (Antonio Regalado)',
        year: '2019',
        category: 'Watchdog / NGO'
      },
      {
        title: 'Adopt a Moratorium on Heritable Genome Editing',
        url: 'https://www.nature.com/articles/d41586-019-00726-5',
        publisher: 'Nature (Lander, Baylis, Zhang, Charpentier, Berg et al.)',
        year: '2019',
        category: 'Scholarship'
      }
    ],
    tags: ['Bioethics', 'Governance', 'International Law', 'Criminal Justice'],
    era: '2018–Present',
    relatedIds: ['pro-global-moratorium-enforcement', 'con-moratorium-chills-legitimate-research']
  },
  {
    id: 'pro-global-moratorium-enforcement',
    parentId: 'thesis-he-jiankui-rogue-science',
    kind: 'pro',
    title: 'Binding Treaties and Criminal Sanctions Are Necessary to Prevent Regulatory Arbitrage',
    summary:
      'Shows that voluntary declarations fail in a globalized economy: without international biosecurity treaties and extradition mandates, rogue clinics will offer illicit germline services in medical-tourism havens.',
    sections: [
      {
        heading: 'The Reality of Biomedical Regulatory Arbitrage',
        paragraphs: [
          'In a globalized medical market, strict domestic bans in the United States or Western Europe simply push rogue scientists across borders into offshore regulatory havens. Medical tourism clinics in the Caribbean, Cyprus, Ukraine, and Southeast Asia have long exploited legal loopholes to sell unproven and dangerous stem cell therapies to desperate families.',
          'The World Health Organization (WHO) and international legal scholars argue that preventing illicit germline editing requires a binding multilateral treaty—modeled on the **Convention on Human Rights and Biomedicine (Oviedo Convention)** and the Nuclear Non-Proliferation Treaty—enforcing criminal sanctions, revocation of medical licenses, and strict biomedical embargoes against non-compliant nations.'
        ]
      },
      {
        heading: 'Criminal Deterrence in Action',
        paragraphs: [
          'Following his trial in Shenzhen, Chinese courts sentenced He Jiankui to three years in prison for "illegally practicing medicine", proving that robust criminal prosecution is the only effective deterrent against rogue human experimentation.'
        ]
      }
    ],
    details: [
      'Strict domestic bans without international treaties drive experimental clinics to offshore medical-tourism havens.',
      'Advocates a binding international treaty modeled on the Oviedo Convention and Nuclear Non-Proliferation Treaty.',
      'He Jiankui’s 3-year prison sentence in China proved that criminal enforcement is the only credible deterrent.'
    ],
    sources: [
      {
        title: 'Convention on Human Rights and Biomedicine (Oviedo Convention - Treaty ETS No. 164)',
        url: 'https://www.coe.int/en/web/conventions/full-list?module=treaty-detail&treatynum=164',
        publisher: 'Council of Europe',
        year: '1997',
        category: 'Primary Text / Treaty'
      },
      {
        title: 'WHO Framework for Governance of Human Genome Editing',
        url: 'https://www.who.int/publications/i/item/9789240030046',
        publisher: 'World Health Organization',
        year: '2021',
        category: 'Primary Text / Treaty'
      }
    ],
    tags: ['Bioethics', 'Governance', 'International Law', 'Criminal Justice'],
    era: '2021–Present',
    relatedIds: ['con-moratorium-chills-legitimate-research']
  },
  {
    id: 'con-moratorium-chills-legitimate-research',
    parentId: 'thesis-he-jiankui-rogue-science',
    kind: 'con',
    title: 'Rigid Criminal Bans Paralyze Legitimate Science and Delay Life-Saving Cures',
    summary:
      'Counters that sweeping legal bans and moratoria create a climate of regulatory fear that freezes academic funding, slows safety benchmarking, and forces talented researchers out of molecular genetics.',
    sections: [
      {
        heading: 'The Chilling Effect on Legitimate Biomedical Research',
        paragraphs: [
          'Synthetic biologist **George Church** and clinical geneticists warn that broad, open-ended moratoria are catastrophic for scientific progress. In the early 2000s, political bans on federal funding for human embryonic stem cell research severely set back American regenerative medicine for a decade, allowing diseases to progress untreated while foreign laboratories forged ahead.',
          'Criminalizing human germline research deters legitimate academic laboratories—operating under rigorous institutional review boards (IRBs) and transparent safety standards—from performing the preclinical safety benchmarking and off-target characterization required to make the technology safe. The only way to discover whether germline editing can be made safe is through rigorously supervised, well-funded scientific inquiry.'
        ]
      },
      {
        heading: 'Driving Research Underground',
        paragraphs: [
          'History demonstrates that prohibition never stops technological adoption; it merely drives it into unregulated black markets and clandestine private laboratories where safety protocols are completely abandoned.'
        ]
      }
    ],
    details: [
      'George Church argues sweeping moratoria paralyze academic safety benchmarking while curing zero diseases.',
      'Historical embryonic stem cell funding bans set back regenerative medicine by over a decade in the United States.',
      'Prohibition forces research into black-market private laboratories, making oversight and auditing impossible.'
    ],
    sources: [
      {
        title: 'Why a Moratorium on Gene Editing Is a Mistake',
        url: 'https://www.statnews.com/2019/03/14/george-church-moratorium-gene-editing-mistake/',
        publisher: 'STAT News (George M. Church)',
        year: '2019',
        category: 'Scholarship'
      },
      {
        title: 'The Costs of Precaution: How Stem Cell Moratoria Delayed Medical Progress',
        url: 'https://www.sciencedirect.com/science/article/pii/S1744165X2030045X',
        publisher: 'Cell Stem Cell',
        year: '2020',
        category: 'Scholarship'
      }
    ],
    tags: ['Science & Innovation', 'Bioethics', 'Governance'],
    era: '2019–Present',
    relatedIds: ['thesis-he-jiankui-rogue-science', 'pro-global-moratorium-enforcement']
  },

  // --- THESIS 4B (Pillar 4) ---
  {
    id: 'thesis-biosecurity-pathogen-engineering',
    parentId: 'pillar-crispr-governance',
    kind: 'thesis',
    title: 'Dual-Use CRISPR Proliferation Enables Dangerous Pathogen Synthesis and Ecological Disruption',
    summary:
      'Maintains that the democratization of CRISPR gene editing and synthetic biology lowers the barrier for bad actors to engineer vaccine-resistant pandemics and deploy uncontrollable ecological gene drives.',
    sections: [
      {
        heading: 'The Democratization of Asymmetric Pathogen Engineering',
        paragraphs: [
          'Prior to CRISPR, genetic engineering required specialized virology laboratories, expensive restriction enzymes, and multi-year wet-lab expertise. Today, CRISPR-Cas systems can be ordered online for a few hundred dollars. In dual-use research of concern (**DURC**), researchers have demonstrated the ability to resurrect extinct poxviruses (horsepox) from synthetic DNA fragments ordered via commercial mail order.',
          'Biosecurity experts and intelligence agencies warn that malevolent actors or non-state terror cells could use CRISPR to introduce immune-evasive mutations into influenza, smallpox, or coronavirus strains, engineering biological pathogens that defeat existing vaccines and therapeutics.'
        ]
      },
      {
        heading: 'The Uncontrollability of Wild Gene Drives',
        paragraphs: [
          'Furthermore, **CRISPR gene drives**—designed to alter the rules of Mendelian inheritance to eradicate malaria-carrying *Anopheles* mosquitoes or invasive agricultural pests—can cross international borders and jump species barriers, potentially triggering irreversible ecological cascade collapses.'
        ]
      }
    ],
    details: [
      'CRISPR lowers technical and financial barriers to pathogen modification from millions of dollars to hundreds.',
      'Mail-order synthetic biology demonstrated the ability to resurrect extinct poxviruses from ordered DNA fragments.',
      'CRISPR gene drives can cross international boundaries and jump species, posing irreversible ecological risks.'
    ],
    sources: [
      {
        title: 'Concerning RNA-Guided Gene Drives for the Alteration of Wild Populations',
        url: 'https://elifesciences.org/articles/03401',
        publisher: 'eLife (Esvelt, Smidler, Catteruccia, Church)',
        year: '2014',
        category: 'Scholarship'
      },
      {
        title: 'Biosecurity in the Age of Synthetic Biology and CRISPR',
        url: 'https://nap.nationalacademies.org/catalog/24890/biodefense-in-the-age-of-synthetic-biology',
        publisher: 'National Academies of Sciences, Engineering, and Medicine',
        year: '2018',
        category: 'Watchdog / NGO'
      }
    ],
    tags: ['National Security', 'Bioethics', 'Science & Innovation'],
    era: '2018–Present',
    relatedIds: ['pro-crispr-bioweapon-proliferation', 'con-metagenomic-early-defense']
  },
  {
    id: 'pro-crispr-bioweapon-proliferation',
    parentId: 'thesis-biosecurity-pathogen-engineering',
    kind: 'pro',
    title: 'Global DNA Synthesis Providers Lack Mandatory Biosecurity Screening Protocols',
    summary:
      'Argues that voluntary commercial screening protocols are thoroughly porous, allowing automated desktop DNA printers to synthesize regulated toxin sequences without identity verification.',
    sections: [
      {
        heading: 'The Porous Guardrails of Commercial Gene Synthesis',
        paragraphs: [
          'Biosecurity pioneer **Kevin Esvelt** (MIT Media Lab) has proven through empirical red-teaming audits that commercial gene synthesis providers routinely fulfill orders containing dangerous pathogen fragments. While members of the International Gene Synthesis Consortium (IGSC) screen customer orders against select agent databases, participation in the consortium is purely voluntary.',
          'Dozens of providers across East Asia and Eastern Europe operate with zero order screening. Furthermore, the rapid emergence of decentralized **desktop enzymatic DNA printers** completely circumvents centralized screening pipelines, enabling malicious actors to synthesize lethal genetic sequences in a residential garage without ever pinging a commercial screening server.'
        ]
      },
      {
        heading: 'The Asymmetric Advantage of the Attacker',
        paragraphs: [
          'In biological warfare, the attacker needs only a single successful viral release to initiate an exponential pandemic, whereas biodefense systems must maintain 100% containment across global borders.'
        ]
      }
    ],
    details: [
      'Kevin Esvelt’s biosecurity audits proved commercial DNA synthesis providers routinely ship dangerous pathogen sequences.',
      'International Gene Synthesis Consortium (IGSC) screening is voluntary and easily evaded by non-member providers.',
      'Decentralized desktop DNA printers allow individuals to synthesize regulated pathogens in unmonitored home settings.'
    ],
    sources: [
      {
        title: 'Inoculating Science Against Potential Pandemics and Bioweapons',
        url: 'https://www.science.org/doi/10.1126/science.adi3832',
        publisher: 'Science (Kevin Esvelt)',
        year: '2023',
        category: 'Scholarship'
      },
      {
        title: 'Biosecurity Screening for the Gene Synthesis Industry: A Regulatory Imperative',
        url: 'https://www.nti.org/analysis/articles/biosecurity-screening-gene-synthesis/',
        publisher: 'Nuclear Threat Initiative (NTI)',
        year: '2023',
        category: 'Watchdog / NGO'
      }
    ],
    tags: ['National Security', 'Bioethics', 'Governance'],
    era: '2023–Present',
    relatedIds: ['con-metagenomic-early-defense', 'counter-synthesis-screening-loopholes']
  },
  {
    id: 'con-metagenomic-early-defense',
    parentId: 'thesis-biosecurity-pathogen-engineering',
    kind: 'con',
    title: 'CRISPR-Based Diagnostics and Rapid mRNA Platforms Provide Overwhelming Biodefense',
    summary:
      'Counters that CRISPR fundamentally strengthens defensive biotechnology: enabling point-of-care virus detection (SHERLOCK) and accelerating synthetic vaccine counter-measures within days of pathogen detection.',
    sections: [
      {
        heading: 'CRISPR as an Ultra-Fast Diagnostic Shield',
        paragraphs: [
          'The exact same biochemical mechanisms that enable gene editing provide unprecedented tools for pathogen defense. Diagnostic platforms like **SHERLOCK** (using Cas13) and **DETECTR** (using Cas12), developed by Feng Zhang and Jennifer Doudna, turn CRISPR into an ultra-sensitive molecular sensor: paper-strip assays can detect single viral RNA molecules in blood, saliva, or wastewater in under 15 minutes without expensive lab equipment.',
          'Coupled with automated metagenomic wastewater sequencing across international airports and municipal transit hubs, emerging biological threats can be identified and computationally sequenced within hours of patient zero entering a population.'
        ]
      },
      {
        heading: 'Rapid mRNA Countermeasures',
        paragraphs: [
          'Once a novel pathogen is sequenced, computational structural biology and mRNA synthesis allow defense agencies to design, manufacture, and distribute targeted candidate vaccines in under 60 days, providing an asymmetric advantage to public health defenders.'
        ]
      }
    ],
    details: [
      'Cas12/Cas13 diagnostics (SHERLOCK, DETECTR) identify novel viral pathogens in under 15 minutes at point of care.',
      'Metagenomic wastewater monitoring detects emerging biological pathogens days before patients seek hospital care.',
      'mRNA vaccine platforms and computational biology compress therapeutic counter-measure timelines to under 60 days.'
    ],
    sources: [
      {
        title: 'Field-Deployable Viral Diagnostics Using CRISPR-Cas13 (SHERLOCK)',
        url: 'https://www.science.org/doi/10.1126/science.aas8836',
        publisher: 'Science (Gootenberg, Abudayyeh, Kellner et al. / Feng Zhang Lab)',
        year: '2018',
        category: 'Scholarship'
      },
      {
        title: 'CRISPR-Cas12-Based Detection of SARS-CoV-2 (DETECTR)',
        url: 'https://www.nature.com/articles/s41587-020-0513-4',
        publisher: 'Nature Biotechnology (Broughton et al. / Jennifer Doudna Lab)',
        year: '2020',
        category: 'Scholarship'
      }
    ],
    tags: ['Science & Innovation', 'National Security', 'Housing & Healthcare'],
    era: '2020–Present',
    relatedIds: ['thesis-biosecurity-pathogen-engineering', 'pro-crispr-bioweapon-proliferation', 'counter-synthesis-screening-loopholes']
  },
  {
    id: 'counter-synthesis-screening-loopholes',
    parentId: 'con-metagenomic-early-defense',
    kind: 'con',
    title: 'Point-of-Care Diagnostics Cannot Stop Stealth Pandemics with Long Asymptomatic Incubation',
    summary:
      'Rebuts the defensive diagnostic solution by demonstrating that an engineered pathogen with an asymptomatic incubation period of weeks will infect millions globally before any diagnostic assay is deployed.',
    sections: [
      {
        heading: 'The Biological Asymmetry of Asymptomatic Transmission',
        paragraphs: [
          'While rapid diagnostics like SHERLOCK work once a pathogen is known, they are useless during the initial stealth phase of an engineered outbreak. If a malicious actor utilizes CRISPR to engineer a pathogen combining the high aerosol transmissibility of measles, the fatality rate of MERS, and a three-week asymptomatic incubation period, the virus will circulate across every continent on commercial flights long before any municipal health agency registers anomalous hospital admissions.',
          'By the time paper-strip diagnostic assays are manufactured and distributed to clinics, hundreds of millions will have been infected. The fundamental reality of biological warfare remains stark: offense possesses an overwhelming temporal advantage over defense.'
        ]
      },
      {
        heading: 'The Global Vaccination Bottleneck',
        paragraphs: [
          'Even if mRNA vaccines are formulated within 60 days, manufacturing, cold-chain transport, syringe supply chains, and political vaccine hesitancy ensure that mass vaccination of eight billion people takes over a year—a window in which an engineered pathogen could devastate global civilization.'
        ]
      }
    ],
    details: [
      'Engineered pathogens with long asymptomatic incubation periods infect millions globally before detection.',
      'Paper-strip diagnostics require knowing the target sequence in advance; novel stealth pathogens evade initial screening.',
      'Global physical manufacturing and syringe distribution bottlenecks leave human populations vulnerable for months.'
    ],
    sources: [
      {
        title: 'The Threat of Stealth Pathogens and Synthetic Biology Proliferation',
        url: 'https://www.rand.org/pubs/research_reports/RRA1358-1.html',
        publisher: 'RAND Corporation',
        year: '2022',
        category: 'Empirical / Economic Study'
      },
      {
        title: 'Preventing a Biological Disaster in the Age of Gene Editing',
        url: 'https://www.foreignaffairs.com/articles/world/2021-04-20/preventing-biological-disaster',
        publisher: 'Foreign Affairs (Tara O’Toole)',
        year: '2021',
        category: 'Scholarship'
      }
    ],
    tags: ['National Security', 'Bioethics', 'Housing & Healthcare'],
    era: '2022–Present',
    relatedIds: ['con-metagenomic-early-defense', 'thesis-biosecurity-pathogen-engineering']
  }
];

export const crisprGeneEditingDataset: DebateGraphDataset = {
  id: 'crispr-gene-editing',
  version: '2.0.0',
  shortTitle: 'CRISPR & Gene Editing',
  title: 'Human Germline Editing & CRISPR',
  subtitle:
    'Eradicating inherited genetic diseases vs. eugenic inequality & transhumanist boundary risks',
  searchPlaceholder: 'Search Casgevy, sickle cell, germline ethics, Sandel, He Jiankui, base editing...',
  epistemologyNote:
    'Synthesizes landmark clinical trials (Casgevy), National Academies bioethical commissions, international governance dockets (WHO), and canonical philosophical critiques of enhancement.',
  availableTags: [
    'Bioethics',
    'Science & Innovation',
    'Philosophy & Ethics',
    'Housing & Healthcare',
    'Human Rights',
    'National Security',
    'Governance',
    'Civil Liberties',
    'International Law',
    'Criminal Justice',
    'Economics',
    'Empirical Studies'
  ],
  shortPillarLabels: {
    'pillar-crispr-disease': '1. Disease Eradication',
    'pillar-crispr-safety': '2. Safety & Permanence',
    'pillar-crispr-enhancement': '3. Enhancement & Eugenics',
    'pillar-crispr-governance': '4. Governance & Biosecurity'
  },
  lastUpdated: '2026-11-08',
  nodes: [rootNode, ...pillarNodes, ...thesisAndRebuttalNodes]
};
