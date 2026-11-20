import { DebateGraphDataset, DebateNode } from '../../types/debate';
import {
  DebateOpponentPersona,
  DebateUserStance,
  RhetoricBadge,
  StructuredDebateResponse,
} from '../../types/voiceDebate';
import {
  determineNextRoundPhase,
  getScopedDebateNodes,
} from './debateContextBuilder';

const STOP_WORDS = new Set([
  'the', 'and', 'for', 'that', 'this', 'with', 'from', 'have', 'they', 'their',
  'about', 'would', 'could', 'should', 'there', 'which', 'because', 'while',
  'where', 'when', 'what', 'more', 'most', 'some', 'many', 'into', 'over',
  'than', 'then', 'also', 'just', 'like', 'very', 'much', 'even', 'only',
  'really', 'think', 'believe', 'people', 'make', 'makes', 'actually',
]);

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, ' ')
    .split(/\s+/)
    .filter((w) => w.length >= 3 && !STOP_WORDS.has(w));
}

function scoreNodeRelevance(tokens: string[], node: DebateNode): number {
  if (tokens.length === 0) return 0;
  const titleText = node.title.toLowerCase();
  const summaryText = node.summary.toLowerCase();
  const detailText = node.details.join(' ').toLowerCase();
  const tagText = node.tags.join(' ').toLowerCase();

  let score = 0;
  const seen = new Set<string>();
  for (const token of tokens) {
    if (seen.has(token)) continue;
    seen.add(token);
    if (titleText.includes(token)) score += 4.5;
    if (summaryText.includes(token)) score += 2.5;
    if (detailText.includes(token)) score += 1.5;
    if (tagText.includes(token)) score += 2.0;
  }
  return score;
}

function desiredOpponentKind(stance: DebateUserStance, matchedUserNode?: DebateNode): 'pro' | 'con' {
  if (stance === 'pro') return 'con';
  if (stance === 'con') return 'pro';
  if (matchedUserNode?.kind === 'pro') return 'con';
  if (matchedUserNode?.kind === 'con') return 'pro';
  return 'con';
}

function firstSentence(text: string): string {
  const clean = text.replace(/\s+/g, ' ').trim();
  const match = clean.match(/^[^.!?]+[.!?]/);
  return match ? match[0] : clean.slice(0, 180);
}

export function generateOfflineOpening(params: {
  dataset: DebateGraphDataset;
  nodes: DebateNode[];
  pillarId: string | null;
  stance: DebateUserStance;
  persona: DebateOpponentPersona;
}): StructuredDebateResponse {
  const scoped = getScopedDebateNodes(params.nodes, params.pillarId);
  const focusNode =
    (params.pillarId ? scoped.find((n) => n.id === params.pillarId) : null) ??
    scoped.find((n) => n.kind === 'thesis') ??
    scoped.find((n) => n.kind === 'pillar') ??
    scoped[0];

  const stancePrompt =
    params.stance === 'pro'
      ? `You're taking the supporting case, and I'll challenge you with the strongest counter-arguments.`
      : params.stance === 'con'
        ? `You're making the skeptical case, and I'll defend the affirmative side.`
        : `We can trade perspectives and test both sides of the argument.`;

  const personaIntro =
    params.persona === 'oxford'
      ? `Welcome to the floor on ${params.dataset.shortTitle}.`
      : params.persona === 'socratic'
        ? `Let's unpack ${params.dataset.shortTitle} together.`
        : `Hey! Ready to spar on ${params.dataset.shortTitle}?`;

  const focusHint = focusNode
    ? ` We're looking at ${focusNode.title.toLowerCase()}.`
    : '';

  return {
    spokenReply: `${personaIntro}${focusHint} ${stancePrompt} Go ahead — give me your opening take in a couple of sentences.`,
    stanceTag: params.stance === 'pro' ? 'con' : params.stance === 'con' ? 'pro' : 'nuance',
    engagedNodeIds: focusNode ? [focusNode.id] : [],
    userEngagedNodeIds: [],
    argumentStrength: 50,
    persuasionShift: 0,
    roundPhase: 'opening',
    rhetoricBadges: [
      {
        type: 'clarity',
        label: 'Opening Floor',
        detail: 'State your core claim and one piece of reasoning or evidence.',
      },
    ],
    coachingTip: focusNode
      ? `Try framing your opening around "${focusNode.title}" — cite a concrete mechanism or real-world trade-off.`
      : 'Open with your single strongest claim and why it matters.',
    suggestedFollowUpNodeId: focusNode?.id ?? null,
    citedSource: focusNode?.sources?.[0] ?? null,
  };
}

export interface DebateTurnGrounding {
  matchedUserNode?: DebateNode;
  counterNode?: DebateNode;
  suggestedFollowUp?: DebateNode;
  topRelevantNodes: DebateNode[];
  targetKind: 'pro' | 'con';
  strength: number;
  persuasionShift: number;
  badges: RhetoricBadge[];
  coachingTip: string;
  hasNuance: boolean;
  hasEvidence: boolean;
}

export function analyzeDebateTurnForGrounding(params: {
  nodes: DebateNode[];
  pillarId: string | null;
  stance: DebateUserStance;
  userText: string;
  usedNodeIds: Set<string>;
}): DebateTurnGrounding {
  const scoped = getScopedDebateNodes(params.nodes, params.pillarId);
  const argumentNodes = scoped.filter(
    (n) => n.kind === 'pro' || n.kind === 'con' || n.kind === 'thesis'
  );
  const pool = argumentNodes.length > 0 ? argumentNodes : scoped;
  const tokens = tokenize(params.userText);

  // Rank nodes matching what the user actually said
  const ranked = pool
    .map((node) => ({ node, score: scoreNodeRelevance(tokens, node) }))
    .sort((a, b) => b.score - a.score);

  const matchedUserNode = ranked[0] && ranked[0].score >= 2.5 ? ranked[0].node : undefined;
  const targetKind = desiredOpponentKind(params.stance, matchedUserNode);

  // Pick the sharpest counter-node:
  // 1) Direct child of the matched node of opposite kind
  // 2) Sibling under same parent of opposite kind
  // 3) Topically relevant unused node of opposite kind
  // 4) Any unused node of opposite kind
  let counterNode: DebateNode | undefined;

  if (matchedUserNode) {
    counterNode =
      pool.find(
        (n) =>
          n.parentId === matchedUserNode.id &&
          n.kind === targetKind &&
          !params.usedNodeIds.has(n.id)
      ) ??
      pool.find(
        (n) =>
          n.parentId &&
          n.parentId === matchedUserNode.parentId &&
          n.id !== matchedUserNode.id &&
          n.kind === targetKind &&
          !params.usedNodeIds.has(n.id)
      );
  }

  if (!counterNode) {
    counterNode =
      ranked.find(
        (r) =>
          r.node.kind === targetKind &&
          r.node.id !== matchedUserNode?.id &&
          !params.usedNodeIds.has(r.node.id)
      )?.node ??
      pool.find((n) => n.kind === targetKind && !params.usedNodeIds.has(n.id)) ??
      pool.find((n) => !params.usedNodeIds.has(n.id)) ??
      pool[0];
  }

  // Pick a helpful follow-up node for the user's side
  const userSideKind: 'pro' | 'con' = targetKind === 'con' ? 'pro' : 'con';
  const suggestedFollowUp =
    pool.find(
      (n) =>
        n.parentId === counterNode?.id &&
        n.kind === userSideKind &&
        !params.usedNodeIds.has(n.id)
    ) ??
    pool.find(
      (n) =>
        n.parentId === counterNode?.parentId &&
        n.kind === userSideKind &&
        n.id !== matchedUserNode?.id &&
        !params.usedNodeIds.has(n.id)
    ) ??
    pool.find((n) => n.kind === userSideKind && !params.usedNodeIds.has(n.id));

  // Build top 5 relevant nodes (counterNode first, then matchedUserNode, then highest ranked)
  const relevantSet = new Map<string, DebateNode>();
  if (counterNode) relevantSet.set(counterNode.id, counterNode);
  if (matchedUserNode) relevantSet.set(matchedUserNode.id, matchedUserNode);
  for (const r of ranked) {
    if (relevantSet.size >= 5) break;
    if (!relevantSet.has(r.node.id)) {
      relevantSet.set(r.node.id, r.node);
    }
  }
  const topRelevantNodes = Array.from(relevantSet.values());

  // Heuristic rhetorical scoring of the user's turn
  const words = params.userText.trim().split(/\s+/).filter(Boolean);
  const wordCount = words.length;
  const hasReasoning = /\b(because|therefore|since|leads to|causes|results in|if we|trade-?off|incentive|mechanism)\b/i.test(
    params.userText
  );
  const hasEvidence = /\b(\d+%|\d{4}|study|data|evidence|report|history|economist|treaty|court|example|research|shows)\b/i.test(
    params.userText
  );
  const hasNuance = /\b(although|even though|admittedly|fair point|while|however|on the other hand|granted|concede)\b/i.test(
    params.userText
  );
  const hasOverreach = /\b(always|never|everyone knows|obviously|idiotic|stupid|100%)\b/i.test(
    params.userText
  );

  let strength = 52;
  if (wordCount >= 14) strength += 10;
  if (wordCount >= 28) strength += 6;
  if (wordCount < 7) strength -= 14;
  if (hasReasoning) strength += 10;
  if (hasEvidence) strength += 12;
  if (hasNuance) strength += 8;
  if (matchedUserNode) strength += 6;
  if (hasOverreach) strength -= 9;
  strength = Math.max(25, Math.min(96, strength));

  const badges: RhetoricBadge[] = [];
  if (hasNuance) {
    badges.push({
      type: 'steelman',
      label: 'Steelman / Nuance',
      detail: 'Acknowledged complexity before advancing your point.',
    });
  }
  if (hasEvidence) {
    badges.push({
      type: 'evidence',
      label: 'Empirical Anchor',
      detail: 'Grounded the argument with data, examples, or sources.',
    });
  }
  if (hasReasoning && badges.length < 2) {
    badges.push({
      type: 'rebuttal',
      label: 'Causal Chain',
      detail: 'Connected cause and effect rather than just asserting a conclusion.',
    });
  }
  if (hasOverreach) {
    badges.push({
      type: 'fallacy',
      label: 'Watch Overstatement',
      detail: 'Absolutes like "always" or "never" are easy for an opponent to puncture.',
    });
  }
  if (badges.length === 0) {
    badges.push({
      type: 'clarity',
      label: wordCount < 10 ? 'Keep Expanding' : 'Clear Stance',
      detail:
        wordCount < 10
          ? 'Try adding one concrete example or mechanism to fortify your claim.'
          : 'Clear position — adding empirical evidence will boost persuasion.',
    });
  }

  const persuasionShift = Math.max(
    -12,
    Math.min(14, Math.round((strength - 58) / 3.5))
  );

  const coachingTip = suggestedFollowUp
    ? `Next move: Counter using "${suggestedFollowUp.title}" — ${firstSentence(suggestedFollowUp.summary)}`
    : hasEvidence
      ? "Great use of grounding — try directly addressing the opponent's strongest premise before pivoting."
      : 'Try citing a concrete mechanism, historical precedent, or empirical figure on your next turn.';

  return {
    matchedUserNode,
    counterNode,
    suggestedFollowUp,
    topRelevantNodes,
    targetKind,
    strength,
    persuasionShift,
    badges: badges.slice(0, 2),
    coachingTip,
    hasNuance,
    hasEvidence,
  };
}

export function generateOfflineDebateReply(params: {
  dataset: DebateGraphDataset;
  nodes: DebateNode[];
  pillarId: string | null;
  stance: DebateUserStance;
  persona: DebateOpponentPersona;
  userText: string;
  usedNodeIds: Set<string>;
  userTurnCount: number;
}): StructuredDebateResponse {
  const analysis = analyzeDebateTurnForGrounding({
    nodes: params.nodes,
    pillarId: params.pillarId,
    stance: params.stance,
    userText: params.userText,
    usedNodeIds: params.usedNodeIds,
  });

  const { counterNode, matchedUserNode, suggestedFollowUp, targetKind, strength, persuasionShift, badges, coachingTip, hasNuance } =
    analysis;

  // Compose conversational spoken reply from the counterNode
  const summaryLine = counterNode ? firstSentence(counterNode.summary) : 'There is a serious counter-perspective worth testing here.';
  const detailLine = counterNode?.details[0]
    ? firstSentence(counterNode.details[0])
    : '';
  const sourceObj = counterNode?.sources?.[0] ?? null;
  const sourceMention = sourceObj
    ? ` Even ${sourceObj.publisher || sourceObj.title} highlights this tension.`
    : '';

  let opener = '';
  if (params.persona === 'oxford') {
    opener = hasNuance
      ? `That's a fair framing, yet the counter-evidence is hard to dismiss.`
      : `I hear the core claim, but let's test it against the strongest counter-case.`;
  } else if (params.persona === 'socratic') {
    opener = `Interesting point — let me push on one assumption behind that.`;
  } else {
    opener =
      strength >= 72
        ? `Strong point — I can see why you'd argue that. Still, here's the pushback I'd raise:`
        : `I see where you're coming from, though here's the toughest counter-argument on the other side:`;
  }

  const closingHook =
    params.persona === 'socratic'
      ? `How would you reconcile your position with that trade-off?`
      : `How do you answer that counter-argument?`;

  const spokenReply = [
    opener,
    summaryLine,
    detailLine && detailLine.length < 150 ? detailLine : '',
    sourceMention.trim(),
    closingHook,
  ]
    .filter(Boolean)
    .join(' ');

  return {
    spokenReply,
    stanceTag: targetKind,
    engagedNodeIds: counterNode ? [counterNode.id] : [],
    userEngagedNodeIds: matchedUserNode ? [matchedUserNode.id] : [],
    argumentStrength: strength,
    persuasionShift,
    roundPhase: determineNextRoundPhase(params.userTurnCount),
    rhetoricBadges: badges,
    coachingTip,
    suggestedFollowUpNodeId: suggestedFollowUp?.id ?? null,
    citedSource: sourceObj,
  };
}
