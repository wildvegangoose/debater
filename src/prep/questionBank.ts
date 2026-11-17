import { DebateGraphDataset, DebateNode, DebateSourceLink } from '../types/debate';
import { DebateSide, PrepExchange, PrepMode, PrepQuestion, ReferenceBlock } from './types';

/** Strip lightweight markdown (bold/italic markers) used in the curated dossiers. */
export function stripMd(text: string): string {
  return text.replace(/\*\*(.+?)\*\*/g, '$1').replace(/(^|\s)\*(\S.+?)\*/g, '$1$2');
}

function formatSource(s: DebateSourceLink): string {
  const meta = [s.publisher, s.year].filter(Boolean).join(', ');
  return `${s.title}${meta ? ` (${meta})` : ''}${s.url ? ` — ${s.url}` : ''}`;
}

function referenceFromNode(label: string, node: DebateNode, opts: { maxPoints?: number; includeSections?: boolean } = {}): ReferenceBlock {
  const points: string[] = [stripMd(node.summary)];
  for (const d of node.details.slice(0, opts.maxPoints ?? 5)) points.push(stripMd(d));
  if (opts.includeSections) {
    for (const sec of (node.sections ?? []).slice(0, 2)) {
      const para = sec.paragraphs[0];
      if (para) points.push(`${sec.heading}: ${stripMd(para)}`);
    }
  }
  return {
    label,
    title: stripMd(node.title),
    points,
    sources: [...(node.sources ?? []).slice(0, 4).map(formatSource), ...(node.references ?? []).slice(0, 2)],
  };
}

function truncate(text: string, max: number): string {
  return text.length > max ? `${text.slice(0, max).trimEnd()}…` : text;
}

const opposite = (side: DebateSide): DebateSide => (side === 'pro' ? 'con' : 'pro');

export function buildQuestionBank(dataset: DebateGraphDataset, nodes: DebateNode[]): PrepQuestion[] {
  const byId = new Map(nodes.map((n) => [n.id, n]));
  const childrenOf = new Map<string, DebateNode[]>();
  for (const n of nodes) {
    if (!n.parentId) continue;
    const list = childrenOf.get(n.parentId) ?? [];
    list.push(n);
    childrenOf.set(n.parentId, list);
  }

  const pillarOf = (node: DebateNode): DebateNode | null => {
    let cur: DebateNode | undefined = node;
    const seen = new Set<string>();
    while (cur && !seen.has(cur.id)) {
      seen.add(cur.id);
      if (cur.kind === 'pillar') return cur;
      cur = cur.parentId ? byId.get(cur.parentId) : undefined;
    }
    return null;
  };

  const root = nodes.find((n) => n.kind === 'root');
  const rootTitle = root ? stripMd(root.title) : dataset.title;
  const questions: PrepQuestion[] = [];

  const base = (node: DebateNode) => {
    const pillar = pillarOf(node);
    return {
      topicId: dataset.id,
      topicTitle: dataset.title,
      pillarId: pillar?.id ?? root?.id ?? 'root',
      pillarTitle: pillar ? stripMd(pillar.title) : dataset.shortTitle,
    };
  };

  for (const thesis of nodes.filter((n) => n.kind === 'thesis')) {
    const kids = childrenOf.get(thesis.id) ?? [];
    const sideNode: Record<DebateSide, DebateNode | undefined> = {
      pro: kids.find((k) => k.kind === 'pro'),
      con: kids.find((k) => k.kind === 'con'),
    };
    const motion = stripMd(thesis.title);

    for (const side of ['pro', 'con'] as DebateSide[]) {
      const mine = sideNode[side];
      const theirs = sideNode[opposite(side)];

      // Steelman: build the strongest case for the assigned side of this thesis.
      if (mine) {
        questions.push({
          id: `steelman:${thesis.id}:${side}`,
          mode: 'steelman',
          ...base(thesis),
          nodeId: thesis.id,
          side,
          motion,
          promptTitle: motion,
          promptBody: truncate(stripMd(thesis.summary), 420),
          instruction: `You are ${side === 'pro' ? 'PRO' : 'CON'}. Make the strongest possible case ${side === 'pro' ? 'for' : 'against'} this claim, the way its best advocates would.`,
          reference: [referenceFromNode(`Curated ${side.toUpperCase()} case`, mine, { includeSections: true })],
          suggestedWords: [120, 220],
          suggestedSeconds: 120,
        });
      }

      // Rebuttal: the opponent argues `theirs`; you refute it.
      if (mine && theirs) {
        const counterRebuttals = (childrenOf.get(theirs.id) ?? []).map((c) => referenceFromNode('Curated counter-rebuttal', c, { maxPoints: 3 }));
        questions.push({
          id: `rebuttal:${theirs.id}:${side}`,
          mode: 'rebuttal',
          ...base(theirs),
          nodeId: theirs.id,
          side,
          motion,
          promptTitle: `Your opponent argues: "${stripMd(theirs.title)}"`,
          promptBody: stripMd(theirs.summary),
          instruction: "Rebut your opponent's argument directly: find where it breaks, and say why your side still wins.",
          reference: [
            referenceFromNode('Curated response from your side', mine, { includeSections: true }),
            ...counterRebuttals,
          ],
          suggestedWords: [80, 160],
          suggestedSeconds: 90,
        });

        // Defend: you hold `mine`; the opponent attacks with `theirs`.
        questions.push({
          id: `defend:${mine.id}:${side}`,
          mode: 'defend',
          ...base(mine),
          nodeId: mine.id,
          side,
          motion,
          promptTitle: `You argued: "${stripMd(mine.title)}"`,
          promptBody: `Your opponent attacks: "${stripMd(theirs.title)}" — ${stripMd(theirs.summary)}`,
          instruction: 'Defend your argument against this attack without giving up your core position.',
          reference: [
            referenceFromNode('Your position', mine, { includeSections: true }),
            referenceFromNode("The opponent's attack (for context)", theirs, { maxPoints: 3 }),
            ...counterRebuttals,
          ],
          suggestedWords: [80, 160],
          suggestedSeconds: 90,
        });
      }

      // Evidence recall: name the evidence behind a claim.
      if (mine && mine.details.length >= 2) {
        questions.push({
          id: `evidence:${mine.id}:${side}`,
          mode: 'evidence',
          ...base(mine),
          nodeId: mine.id,
          side,
          motion,
          promptTitle: `Claim: "${stripMd(mine.title)}"`,
          promptBody: `This is the ${side.toUpperCase()} argument on "${motion}".`,
          instruction:
            'List the strongest specific evidence (studies, data, cases, dates, sources) that supports this claim, and say briefly how each piece supports it.',
          reference: [referenceFromNode('Curated evidence', mine, { maxPoints: 6 })],
          suggestedWords: [60, 160],
          suggestedSeconds: 90,
        });
      }
    }
  }

  // Opening statements: one per pillar plus one on the overall motion, for each side.
  const pillars = nodes.filter((n) => n.kind === 'pillar');
  const openingTargets: DebateNode[] = [...(root ? [root] : []), ...pillars];
  for (const target of openingTargets) {
    const theses =
      target.kind === 'root'
        ? pillars.flatMap((p) => (childrenOf.get(p.id) ?? []).filter((c) => c.kind === 'thesis'))
        : (childrenOf.get(target.id) ?? []).filter((c) => c.kind === 'thesis');
    if (theses.length === 0) continue;

    for (const side of ['pro', 'con'] as DebateSide[]) {
      const sideArgs = theses
        .map((t) => (childrenOf.get(t.id) ?? []).find((c) => c.kind === side))
        .filter((n): n is DebateNode => Boolean(n));
      if (sideArgs.length === 0) continue;

      const motion = target.kind === 'root' ? rootTitle : `${stripMd(target.title)} (${dataset.shortTitle})`;
      questions.push({
        id: `opening:${target.id}:${side}`,
        mode: 'opening',
        ...base(target),
        nodeId: target.id,
        side,
        motion,
        promptTitle: motion,
        promptBody: truncate(stripMd(target.summary), 480),
        instruction: `Deliver a ~90-second opening statement for the ${side === 'pro' ? 'PRO side (the case for)' : 'CON side (the case against)'} on this motion: frame the debate, present your two or three strongest arguments, and close.`,
        reference: [
          {
            label: `Curated ${side.toUpperCase()} arguments in this area`,
            points: sideArgs.slice(0, 8).map((a) => `${stripMd(a.title)}: ${truncate(stripMd(a.summary), 260)}`),
            sources: sideArgs.flatMap((a) => (a.sources ?? []).slice(0, 1).map(formatSource)).slice(0, 6),
          },
          {
            label: 'Key theses in contention',
            points: theses.slice(0, 8).map((t) => stripMd(t.title)),
            sources: [],
          },
        ],
        suggestedWords: [180, 260],
        suggestedSeconds: 120,
      });
    }
  }

  return questions;
}

/** Build the next cross-examination round from the grader's follow-up question. */
export function buildCrossExFollowUp(previous: PrepQuestion, previousAnswer: string, followUp: string): PrepQuestion {
  const priorExchanges: PrepExchange[] = [
    ...(previous.priorExchanges ?? []),
    { question: previous.mode === 'crossex' ? previous.promptBody : `${previous.promptTitle}\n${previous.promptBody}`, answer: previousAnswer },
  ];
  const round = (previous.crossExRound ?? 0) + 1;
  const seedId = previous.id.split(':fu')[0];
  return {
    ...previous,
    id: `${seedId.replace(/^\w+:/, 'crossex:')}:fu${round}`,
    mode: 'crossex',
    promptTitle: `Cross-examination — question ${round}`,
    promptBody: followUp,
    instruction: 'Answer the question directly and concisely. Stay consistent with what you said before.',
    suggestedWords: [30, 90],
    suggestedSeconds: 45,
    priorExchanges,
    crossExRound: round,
  };
}

export const MODE_META: Record<PrepMode, { label: string; short: string; blurb: string }> = {
  rebuttal: { label: 'Rebuttal', short: 'Rebut', blurb: "Hear the opponent's argument, then take it apart." },
  steelman: { label: 'Steelman', short: 'Steelman', blurb: 'Build the strongest case for an assigned side.' },
  defend: { label: 'Defend', short: 'Defend', blurb: 'Hold your position under a direct attack.' },
  crossex: { label: 'Cross-Ex Gauntlet', short: 'Cross-Ex', blurb: 'Defend, then answer three follow-up questions in a row.' },
  evidence: { label: 'Evidence Recall', short: 'Evidence', blurb: 'Name the studies, data and cases behind a claim.' },
  opening: { label: 'Opening Statement', short: 'Opening', blurb: 'Deliver a timed 90-second constructive speech.' },
};

export type SessionMode = PrepMode | 'mixed';

export function pickSessionQuestions(params: {
  bank: PrepQuestion[];
  mode: SessionMode;
  count: number;
  pillarId: string | null;
  side: DebateSide | 'any';
  /** Question IDs to prioritise (e.g. weak spots) */
  priorityIds?: Set<string>;
}): PrepQuestion[] {
  const { bank, mode, count, pillarId, side, priorityIds } = params;
  // Cross-ex chains are seeded from defend questions.
  const seedMode: PrepMode | 'mixed' = mode === 'crossex' ? 'defend' : mode;
  let pool = bank.filter((q) => (seedMode === 'mixed' ? true : q.mode === seedMode));
  if (pillarId) {
    const filtered = pool.filter((q) => q.pillarId === pillarId);
    if (filtered.length > 0) pool = filtered;
  }
  if (side !== 'any') {
    const filtered = pool.filter((q) => !q.side || q.side === side);
    if (filtered.length > 0) pool = filtered;
  }

  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  if (priorityIds && priorityIds.size > 0) {
    shuffled.sort((a, b) => Number(priorityIds.has(b.id)) - Number(priorityIds.has(a.id)));
  }

  if (seedMode !== 'mixed') return shuffled.slice(0, count);

  // Mixed: round-robin across drill types for variety.
  const byMode = new Map<PrepMode, PrepQuestion[]>();
  for (const q of shuffled) {
    const list = byMode.get(q.mode) ?? [];
    list.push(q);
    byMode.set(q.mode, list);
  }
  const order = [...byMode.keys()].sort(() => Math.random() - 0.5);
  const picked: PrepQuestion[] = [];
  while (picked.length < count && order.some((m) => (byMode.get(m)?.length ?? 0) > 0)) {
    for (const m of order) {
      const next = byMode.get(m)?.shift();
      if (next && picked.length < count) picked.push(next);
    }
  }
  return picked;
}
