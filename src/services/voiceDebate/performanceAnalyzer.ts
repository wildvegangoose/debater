import { DebateGraphDataset, DebateNode } from '../../types/debate';
import {
  ArgumentLandingRating,
  ArgumentTurnReview,
  DebateOpponentPersona,
  DebateSessionRecord,
  DebateSessionVerdict,
  DebateUserStance,
  DebaterCareerStats,
  StructuredDebateResponse,
  VoiceAIBackend,
  VoiceDebateSettings,
} from '../../types/voiceDebate';

const STOP_WORDS = new Set([
  'the', 'and', 'for', 'that', 'this', 'with', 'from', 'have', 'they', 'their',
  'about', 'would', 'could', 'should', 'there', 'which', 'because', 'while',
  'where', 'when', 'what', 'more', 'most', 'some', 'many', 'into', 'over',
  'than', 'then', 'also', 'just', 'like', 'very', 'much', 'even', 'only',
  'really', 'think', 'believe', 'people', 'make', 'makes', 'actually', 'your',
  'point', 'argument', 'side', 'here',
]);

function significantTokens(text: string): Set<string> {
  return new Set(
    text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, ' ')
      .split(/\s+/)
      .filter((w) => w.length >= 4 && !STOP_WORDS.has(w))
  );
}

function firstSentence(text: string): string {
  const clean = text.replace(/\s+/g, ' ').trim();
  const match = clean.match(/^[^.!?]+[.!?]/);
  return match ? match[0] : clean.slice(0, 175);
}

export function getLandingRating(strength: number): {
  rating: ArgumentLandingRating;
  label: string;
} {
  if (strength >= 80) return { rating: 'knockout', label: 'Strong Hit' };
  if (strength >= 66) return { rating: 'solid', label: 'Solid Point' };
  if (strength >= 50) return { rating: 'mixed', label: 'Needs Grounding' };
  return { rating: 'vulnerable', label: 'Exposed' };
}

export function computeSessionVerdict(finalBalance: number): DebateSessionVerdict {
  if (finalBalance >= 16) return 'won';
  if (finalBalance >= 5) return 'edge';
  if (finalBalance > -8) return 'split';
  return 'outflanked';
}

export function verdictDisplay(verdict: DebateSessionVerdict): {
  title: string;
  subtitle: string;
  tone: 'emerald' | 'amber' | 'rose';
} {
  switch (verdict) {
    case 'won':
      return {
        title: 'Commanding Edge',
        subtitle: 'You consistently pressed concrete mechanisms and held the floor.',
        tone: 'emerald',
      };
    case 'edge':
      return {
        title: 'Narrow Lead',
        subtitle: 'You edged ahead on balance — tighten evidence to close decisively.',
        tone: 'emerald',
      };
    case 'split':
      return {
        title: 'Split Floor',
        subtitle: 'Evenly contested round — sharper rebuttals will tip the momentum.',
        tone: 'amber',
      };
    case 'outflanked':
    default:
      return {
        title: 'Outflanked',
        subtitle: 'The opponent controlled the framing — study the sharper moves below.',
        tone: 'rose',
      };
  }
}

export function buildArgumentTurnReview(params: {
  turnIndex: number;
  userText: string;
  priorAiText?: string;
  response: StructuredDebateResponse;
  cumulativeBalance: number;
  nodes: DebateNode[];
  timestamp: string;
}): ArgumentTurnReview {
  const { turnIndex, userText, priorAiText, response, cumulativeBalance, nodes, timestamp } =
    params;
  const nodeMap = new Map(nodes.map((n) => [n.id, n]));

  const words = userText.trim().split(/\s+/).filter(Boolean);
  const wordCount = words.length;

  const hasReasoning =
    /\b(because|therefore|since|leads to|causes|results in|if we|trade-?off|incentive|mechanism|consequently|means that)\b/i.test(
      userText
    );
  const hasEvidence =
    /\b(\d+%|\d{4}|study|data|evidence|report|history|economist|treaty|court|example|research|shows|according to|empiric)\b/i.test(
      userText
    );
  const hasNuance =
    /\b(although|even though|admittedly|fair point|while|however|on the other hand|granted|concede|true that|even if)\b/i.test(
      userText
    );
  const hasOverreach =
    /\b(always|never|everyone knows|obviously|idiotic|stupid|100%|zero chance|completely wrong)\b/i.test(
      userText
    );

  // Check whether the user directly engaged terms from the opponent's previous turn
  let engagedOpponentDirectly = false;
  if (priorAiText && turnIndex > 1) {
    const aiTokens = significantTokens(priorAiText);
    const userTokens = significantTokens(userText);
    let overlap = 0;
    for (const t of userTokens) {
      if (aiTokens.has(t)) overlap++;
    }
    engagedOpponentDirectly = overlap >= 2;
  }

  const { rating, label } = getLandingRating(response.argumentStrength);

  const whatWorked: string[] = [];
  if (hasNuance) {
    whatWorked.push('Steelmanned or conceded nuance before advancing your counter-claim.');
  }
  if (hasEvidence) {
    whatWorked.push('Anchored the claim with concrete data, examples, or historical precedent.');
  }
  if (hasReasoning) {
    whatWorked.push('Spelled out a clear cause-and-effect mechanism rather than just asserting.');
  }
  if (engagedOpponentDirectly) {
    whatWorked.push('Directly clashed with the opponent’s preceding point instead of talking past it.');
  }
  if ((response.userEngagedNodeIds?.length ?? 0) > 0) {
    const hitNode = nodeMap.get(response.userEngagedNodeIds![0]);
    if (hitNode && whatWorked.length < 3) {
      whatWorked.push(`Landed squarely on a core tension: “${hitNode.title}.”`);
    }
  }
  if (whatWorked.length === 0) {
    whatWorked.push('Stated a clear thesis and kept the debate moving forward.');
  }

  // Construct targeted "how it could have gone better" critique
  let whatToImprove = '';
  if (hasOverreach) {
    whatToImprove =
      'Soften absolute phrasing ("always", "never", "obviously") — absolutes hand your opponent an easy single-counterexample rebuttal.';
  } else if (turnIndex > 1 && !engagedOpponentDirectly) {
    whatToImprove =
      'You pivoted without first neutralizing the opponent’s last point. Briefly concede or dismantle their premise ("Even if X holds, Y outweighs it because...") before advancing your own.';
  } else if (!hasEvidence) {
    whatToImprove =
      'Your reasoning is clear, but adding one specific empirical study, historical case, or number makes it far harder for an opponent to brush aside.';
  } else if (!hasNuance) {
    whatToImprove =
      'Pre-empt the strongest counter-argument in one clause ("Granted X, the decisive trade-off is still Y") to steal the opponent’s thunder.';
  } else if (wordCount < 14) {
    whatToImprove =
      'Expand slightly by naming the concrete mechanism — explain *why* your claim produces the outcome you predict.';
  } else {
    whatToImprove =
      response.coachingTip ||
      'Press the weighing comparison: explain why your impact matters more in scale or permanence than your opponent’s counter-point.';
  }

  const landingSummary =
    rating === 'knockout'
      ? 'Strong, well-grounded move that shifted floor momentum clearly in your favor.'
      : rating === 'solid'
        ? 'Credible, well-structured point that held ground and forced the opponent onto the defensive.'
        : rating === 'mixed'
          ? 'Clear stance, though missing either hard evidence or direct clash left room for an easy counter.'
          : 'Too brief or overstated — left an opening for the opponent to seize the framing.';

  // Build concrete "Sharper Move" upgrade example from the suggested follow-up node
  const upgradeNode = response.suggestedFollowUpNodeId
    ? nodeMap.get(response.suggestedFollowUpNodeId) ?? null
    : null;

  let strongerAnglePrompt: string | undefined;
  if (upgradeNode) {
    const core = firstSentence(upgradeNode.summary);
    const detail = upgradeNode.details[0] ? ` ${firstSentence(upgradeNode.details[0])}` : '';
    const src = upgradeNode.sources?.[0];
    const srcNote = src ? ` (${src.publisher || src.title})` : '';
    strongerAnglePrompt = `“Even granting the concern on the other side, the sharper issue is ${upgradeNode.title.toLowerCase()}: ${core}${detail}${srcNote}”`;
  }

  const citedNode =
    upgradeNode ??
    (response.engagedNodeIds[0] ? nodeMap.get(response.engagedNodeIds[0]) : undefined);

  return {
    turnIndex,
    userText,
    aiReply: response.spokenReply,
    timestamp,
    argumentStrength: response.argumentStrength,
    persuasionShift: response.persuasionShift,
    cumulativeBalance,
    landingRating: rating,
    landingLabel: label,
    landingSummary,
    whatWorked: whatWorked.slice(0, 3),
    whatToImprove,
    strongerAngleNodeId: upgradeNode?.id ?? null,
    strongerAngleTitle: upgradeNode?.title,
    strongerAnglePrompt,
    rhetoricBadges: response.rhetoricBadges,
    userEngagedNodeIds: response.userEngagedNodeIds ?? [],
    aiEngagedNodeIds: response.engagedNodeIds,
    citedSource: upgradeNode?.sources?.[0] ?? response.citedSource ?? citedNode?.sources?.[0] ?? null,
  };
}

export function buildSessionRecord(params: {
  sessionId: string;
  startedAt: string;
  dataset: DebateGraphDataset;
  pillarTitle?: string;
  stance: DebateUserStance;
  persona: DebateOpponentPersona;
  backend: VoiceAIBackend;
  finalBalance: number;
  nodesEngagedCount: number;
  turnReviews: ArgumentTurnReview[];
}): DebateSessionRecord {
  const { turnReviews } = params;
  const strengths = turnReviews.map((r) => r.argumentStrength);
  const avgStrength =
    strengths.length > 0
      ? Math.round(strengths.reduce((a, b) => a + b, 0) / strengths.length)
      : 60;
  const peakStrength = strengths.length > 0 ? Math.max(...strengths) : avgStrength;

  // Summarize top strength & primary focus across the round
  const badgeCounts = new Map<string, number>();
  let evidenceHits = 0;
  let steelmanHits = 0;
  let overreachHits = 0;

  for (const rev of turnReviews) {
    for (const b of rev.rhetoricBadges) {
      badgeCounts.set(b.label, (badgeCounts.get(b.label) ?? 0) + 1);
      if (b.type === 'evidence') evidenceHits++;
      if (b.type === 'steelman' || b.type === 'concession') steelmanHits++;
      if (b.type === 'fallacy') overreachHits++;
    }
  }

  let topStrength = 'Clear thesis framing';
  let topCount = 0;
  for (const [label, count] of badgeCounts.entries()) {
    if (count > topCount && !/overstatement|expanding/i.test(label)) {
      topCount = count;
      topStrength = label;
    }
  }

  let primaryFocus = 'Press comparative weighing (why your impact outweighs the trade-off)';
  if (overreachHits > 0) {
    primaryFocus = 'Avoid absolute claims ("always"/"never") that invite easy counterexamples';
  } else if (evidenceHits === 0) {
    primaryFocus = 'Anchor key claims with at least one concrete study, figure, or precedent';
  } else if (steelmanHits === 0) {
    primaryFocus = 'Concede a slice of the opponent’s strongest premise before rebutting it';
  }

  return {
    id: params.sessionId,
    startedAt: params.startedAt,
    updatedAt: new Date().toISOString(),
    topicId: params.dataset.id,
    topicTitle: params.dataset.shortTitle,
    pillarTitle: params.pillarTitle,
    stance: params.stance,
    persona: params.persona,
    backend: params.backend,
    avgStrength,
    peakStrength,
    finalBalance: params.finalBalance,
    verdict: computeSessionVerdict(params.finalBalance),
    turnCount: turnReviews.length,
    nodesEngagedCount: params.nodesEngagedCount,
    momentumSeries: [0, ...turnReviews.map((r) => r.cumulativeBalance)],
    topStrength,
    primaryFocus,
    turnReviews,
  };
}

export function computeCareerStats(sessions: DebateSessionRecord[]): DebaterCareerStats {
  if (sessions.length === 0) {
    return {
      totalRounds: 0,
      totalArguments: 0,
      avgStrength: 0,
      recentTrendDelta: 0,
      edgeRatePct: 0,
      topStrength: 'Ready for first round',
      primaryFocus: 'Complete a sparring round to log your strengths & growth areas.',
    };
  }

  const totalRounds = sessions.length;
  const totalArguments = sessions.reduce((acc, s) => acc + s.turnCount, 0);
  const avgStrength = Math.round(
    sessions.reduce((acc, s) => acc + s.avgStrength, 0) / totalRounds
  );
  const edgeWins = sessions.filter((s) => s.verdict === 'won' || s.verdict === 'edge').length;
  const edgeRatePct = Math.round((edgeWins / totalRounds) * 100);

  let recentTrendDelta = 0;
  if (sessions.length >= 2) {
    const splitIdx = Math.min(3, Math.ceil(sessions.length / 2));
    const recent = sessions.slice(0, splitIdx);
    const earlier = sessions.slice(splitIdx);
    const recentAvg = recent.reduce((a, s) => a + s.avgStrength, 0) / recent.length;
    const earlierAvg = earlier.reduce((a, s) => a + s.avgStrength, 0) / earlier.length;
    recentTrendDelta = Math.round(recentAvg - earlierAvg);
  }

  // Most common topStrength and primaryFocus
  const strengthFreq = new Map<string, number>();
  const focusFreq = new Map<string, number>();
  for (const s of sessions.slice(0, 10)) {
    strengthFreq.set(s.topStrength, (strengthFreq.get(s.topStrength) ?? 0) + 1);
    focusFreq.set(s.primaryFocus, (focusFreq.get(s.primaryFocus) ?? 0) + 1);
  }

  const topStrength =
    Array.from(strengthFreq.entries()).sort((a, b) => b[1] - a[1])[0]?.[0] ?? 'Clear framing';
  const primaryFocus =
    Array.from(focusFreq.entries()).sort((a, b) => b[1] - a[1])[0]?.[0] ??
    'Anchor claims with empirical evidence';

  return {
    totalRounds,
    totalArguments,
    avgStrength,
    recentTrendDelta,
    edgeRatePct,
    topStrength,
    primaryFocus,
  };
}

/**
 * Optional 1-tap AI Coach Rewrite for a specific turn inside the Game Tape review.
 * Works with On-Device WebLLM or Gemini Flash when configured.
 */
export async function generateAiTurnRewrite(params: {
  settings: VoiceDebateSettings;
  topicTitle: string;
  stance: DebateUserStance;
  review: ArgumentTurnReview;
}): Promise<string> {
  const { settings, topicTitle, stance, review } = params;
  const prompt = [
    `You are an elite Oxford Union debate coach.`,
    `Topic: "${topicTitle}". The debater is arguing: ${stance.toUpperCase()}.`,
    `What the debater said: "${review.userText}"`,
    `How the opponent countered: "${review.aiReply}"`,
    review.strongerAngleTitle
      ? `Key supporting angle available: "${review.strongerAngleTitle}"`
      : '',
    `Task: Rewrite the debater's argument into a sharper, steelmanned 2-sentence version (40-65 words) that anticipates the counter-argument and lands harder. Return ONLY the rewritten spoken sentences with no preamble or quotes.`,
  ]
    .filter(Boolean)
    .join('\n');

  if (settings.backend === 'browser-webllm') {
    const { ensureWebLlmEngine } = await import('./webllmEngine');
    const engine = await ensureWebLlmEngine(settings.webllmModel);
    const completion = await engine.chat.completions.create({
      messages: [
        { role: 'system', content: 'You are a concise debate coach. Output only the improved 2-sentence argument.' },
        { role: 'user', content: prompt },
      ],
      temperature: 0.6,
      max_tokens: 130,
    });
    const text = completion.choices?.[0]?.message?.content?.trim() ?? '';
    if (!text) throw new Error('On-device model returned an empty rewrite.');
    return text.replace(/^["']|["']$/g, '').trim();
  }

  if (settings.backend === 'gemini-flash' && settings.geminiApiKey.trim()) {
    const model = settings.geminiModel.trim() || 'gemini-2.5-flash';
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent?key=${encodeURIComponent(settings.geminiApiKey.trim())}`;
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ role: 'user', parts: [{ text: prompt }] }],
        generationConfig: { temperature: 0.6, maxOutputTokens: 160 },
      }),
    });
    if (!res.ok) throw new Error(`Gemini rewrite failed (HTTP ${res.status}).`);
    const json = (await res.json()) as {
      candidates?: Array<{ content?: { parts?: Array<{ text?: string }> } }>;
    };
    const text = json.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ?? '';
    if (!text) throw new Error('Gemini returned an empty rewrite.');
    return text.replace(/^["']|["']$/g, '').trim();
  }

  throw new Error('Enable On-Device AI or Gemini AI in Settings to generate live AI rewrites.');
}
