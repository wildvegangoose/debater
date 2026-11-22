import { DebateGraphDataset, DebateNode } from '../../types/debate';
import {
  DebateOpponentPersona,
  DebateRoundPhase,
  DebateUserStance,
} from '../../types/voiceDebate';

export function getScopedDebateNodes(
  nodes: DebateNode[],
  pillarId: string | null
): DebateNode[] {
  if (!pillarId) return nodes;
  const nodeMap = new Map(nodes.map((n) => [n.id, n]));
  const scoped: DebateNode[] = [];

  for (const node of nodes) {
    if (node.kind === 'root' || node.id === pillarId) {
      scoped.push(node);
      continue;
    }
    let cur: DebateNode | undefined = node;
    const visited = new Set<string>();
    while (cur && !visited.has(cur.id)) {
      visited.add(cur.id);
      if (cur.id === pillarId) {
        scoped.push(node);
        break;
      }
      cur = cur.parentId ? nodeMap.get(cur.parentId) : undefined;
    }
  }
  return scoped.length > 1 ? scoped : nodes;
}

export function buildCompactDossier(
  dataset: DebateGraphDataset,
  nodes: DebateNode[],
  pillarId: string | null
): string {
  const scoped = getScopedDebateNodes(nodes, pillarId);
  const pillars = scoped.filter((n) => n.kind === 'pillar');
  const theses = scoped.filter((n) => n.kind === 'thesis');
  const pros = scoped.filter((n) => n.kind === 'pro');
  const cons = scoped.filter((n) => n.kind === 'con');

  // Keep prompt compact (~2.5-3.5k tokens max) while preserving node IDs & evidence
  const selectedNodes: DebateNode[] = [
    ...pillars.slice(0, 8),
    ...theses.slice(0, 12),
    ...pros.slice(0, 16),
    ...cons.slice(0, 16),
  ];

  const lines: string[] = [
    `TOPIC: ${dataset.title}`,
    `SUBTITLE: ${dataset.subtitle}`,
  ];

  if (pillarId) {
    const activePillar = nodes.find((n) => n.id === pillarId);
    if (activePillar) {
      lines.push(`FOCUSED PILLAR: ${activePillar.title} (${activePillar.summary})`);
    }
  }

  lines.push('', 'CURATED ARGUMENT NODES (use exact [id] values when referencing nodes):');

  for (const n of selectedNodes) {
    const topDetail = n.details[0] ? ` | Data: ${n.details[0].slice(0, 140)}` : '';
    const topSource = n.sources?.[0]
      ? ` | Source: ${n.sources[0].title}${n.sources[0].publisher ? ` (${n.sources[0].publisher})` : ''}`
      : '';
    lines.push(
      `- [${n.id}] (${n.kind.toUpperCase()}) ${n.title}: ${n.summary.slice(0, 180)}${topDetail}${topSource}`
    );
  }

  return lines.join('\n');
}

export function describeStanceInstructions(stance: DebateUserStance): string {
  switch (stance) {
    case 'pro':
      return 'The user is arguing PRO / supporting the affirmative thesis. You play the steelmanned CON / skeptical challenger, pushing back respectfully with concrete counter-evidence.';
    case 'con':
      return 'The user is arguing CON / challenging the thesis. You play the steelmanned PRO / affirmative advocate, defending the strongest version of the affirmative case.';
    case 'switch':
      return 'This is a Steelman Switch drill. Whatever side the user argues on a turn, counter from the opposite perspective, and occasionally invite them to steelman your side too.';
    case 'explore':
    default:
      return 'This is an open conversational exploration. Match the user naturally, steelman whichever side they have not yet considered, and test their intuitions with thoughtful pushback.';
  }
}

export function describePersonaInstructions(persona: DebateOpponentPersona): string {
  switch (persona) {
    case 'oxford':
      return 'Persona: Oxford Union Challenger — articulate, crisp, slightly formal yet conversational, cites specific empirical studies, treaties, or landmark figures naturally in speech.';
    case 'socratic':
      return 'Persona: Socratic Devil\'s Advocate — curious, probing, concise; asks 1 sharp follow-up question each turn that exposes hidden trade-offs or unexamined assumptions.';
    case 'sparring':
    default:
      return 'Persona: Friendly Conversational Sparring Partner — warm, engaging, natural spoken cadence like a smart friend over coffee; acknowledges strong points briefly before landing a clear counter-point.';
  }
}

export function determineNextRoundPhase(userTurnCount: number): DebateRoundPhase {
  if (userTurnCount <= 1) return 'opening';
  if (userTurnCount <= 4) return 'sparring';
  if (userTurnCount <= 7) return 'cross-exam';
  return 'closing';
}

export function buildVoiceSystemPrompt(params: {
  dataset: DebateGraphDataset;
  nodes: DebateNode[];
  pillarId: string | null;
  stance: DebateUserStance;
  persona: DebateOpponentPersona;
  mode: 'live' | 'structured';
}): string {
  const dossier = buildCompactDossier(params.dataset, params.nodes, params.pillarId);
  const stanceText = describeStanceInstructions(params.stance);
  const personaText = describePersonaInstructions(params.persona);

  if (params.mode === 'live') {
    return [
      'You are Steelman, a sharp debate sparring partner.',
      'SPEAKING STYLE: Speak naturally like a real human conversation! Keep every spoken response concise (2 to 4 crisp sentences, ~30-55 words) so there is lively back-and-forth rhythm. Never read bullet points, markdown, or node IDs out loud.',
      stanceText,
      personaText,
      'VISUAL FEEDBACK TOOL: After every substantive user turn, ALWAYS call the `emit_debate_feedback` tool with the matched curated node IDs from the dossier below, an honest argumentStrength (1-100), persuasionShift (-15 to +15 where positive favors the user), 1-2 short rhetoricBadges, a 1-sentence coachingTip for the user\'s next move, and the current roundPhase. Do not mention calling the tool out loud.',
      '',
      dossier,
    ].join('\n');
  }

  return [
    'You are Steelman, a conversational debate sparring partner and rhetoric coach.',
    'SPEAKING STYLE: Keep `spokenReply` natural, sharp, and conversational (2 to 4 sentences, 35-70 words). No markdown, no bullet lists, no node IDs in `spokenReply`. End with a crisp hook or question to invite the user\'s reply.',
    stanceText,
    personaText,
    'EVALUATION: Ground your counter-argument in the curated dossier below whenever relevant. Return valid JSON matching the requested schema, referencing exact node IDs from the dossier in `engagedNodeIds`, `userEngagedNodeIds`, and `suggestedFollowUpNodeId`.',
    '',
    dossier,
  ].join('\n');
}
