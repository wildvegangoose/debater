import { DebateGraphDataset, DebateNode } from '../../types/debate';
import {
  ArgumentLandingRating,
  ArgumentTurnReview,
  DebateOpponentPersona,
  DebateSessionRecord,
  DebateSessionVerdict,
  DebateUserStance,
  DebaterCareerStats,
  HistoricalPatternAnalysis,
  ProposedArgumentRevision,
  SessionDeepAnalysis,
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

export function canRunLiveAiCoach(settings: VoiceDebateSettings): boolean {
  if (settings.backend === 'browser-webllm') return true;
  if (settings.backend === 'gemini-flash') return settings.geminiApiKey.trim().length > 10;
  if (settings.backend === 'local-openai') {
    return settings.localEndpoint.trim().startsWith('http');
  }
  return false;
}

export function getCoachEngineLabel(settings: VoiceDebateSettings): string {
  switch (settings.backend) {
    case 'browser-webllm':
      return `On-Device · ${settings.webllmModel.split('-q4')[0]}`;
    case 'gemini-flash':
      return settings.geminiApiKey.trim().length > 10
        ? `Gemini · ${settings.geminiModel || 'gemini-2.5-flash'}`
        : 'Built-in Heuristic';
    case 'local-openai':
      return settings.localEndpoint.trim().startsWith('http')
        ? `Local · ${settings.localModel || 'Custom'}`
        : 'Built-in Heuristic';
    case 'offline-curated':
    default:
      return 'Built-in Heuristic';
  }
}

function extractCoachJson(rawText: string): Record<string, unknown> | null {
  const trimmed = rawText.trim();
  try {
    return JSON.parse(trimmed) as Record<string, unknown>;
  } catch {
    const fenceMatch = trimmed.match(/```(?:json)?\s*([\s\S]*?)```/i);
    if (fenceMatch) {
      try {
        return JSON.parse(fenceMatch[1].trim()) as Record<string, unknown>;
      } catch {
        // continue
      }
    }
    const firstBrace = trimmed.indexOf('{');
    const lastBrace = trimmed.lastIndexOf('}');
    if (firstBrace >= 0 && lastBrace > firstBrace) {
      try {
        return JSON.parse(trimmed.slice(firstBrace, lastBrace + 1)) as Record<string, unknown>;
      } catch {
        return null;
      }
    }
    return null;
  }
}

async function runCoachLlmPrompt(params: {
  settings: VoiceDebateSettings;
  systemPrompt: string;
  userPrompt: string;
  jsonMode?: boolean;
  maxTokens?: number;
  temperature?: number;
}): Promise<string> {
  const {
    settings,
    systemPrompt,
    userPrompt,
    jsonMode = false,
    maxTokens = 900,
    temperature = 0.45,
  } = params;

  if (settings.backend === 'browser-webllm') {
    const { ensureWebLlmEngine } = await import('./webllmEngine');
    const engine = await ensureWebLlmEngine(settings.webllmModel);
    const completion = await engine.chat.completions.create({
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt },
      ],
      temperature,
      max_tokens: maxTokens,
    });
    const text = completion.choices?.[0]?.message?.content?.trim() ?? '';
    if (!text) throw new Error('On-device model returned an empty response.');
    return text;
  }

  if (settings.backend === 'gemini-flash' && settings.geminiApiKey.trim()) {
    const model = settings.geminiModel.trim() || 'gemini-2.5-flash';
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent?key=${encodeURIComponent(settings.geminiApiKey.trim())}`;
    const generationConfig: Record<string, unknown> = {
      temperature,
      maxOutputTokens: maxTokens,
    };
    if (jsonMode) {
      generationConfig.responseMimeType = 'application/json';
    }
    const controller = new AbortController();
    const timer = window.setTimeout(() => controller.abort(), 30000);
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        signal: controller.signal,
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: systemPrompt }] },
          contents: [{ role: 'user', parts: [{ text: userPrompt }] }],
          generationConfig,
        }),
      });
      if (!res.ok) {
        const errBody = await res.text().catch(() => '');
        throw new Error(`Gemini error (HTTP ${res.status}): ${errBody.slice(0, 140) || res.statusText}`);
      }
      const json = (await res.json()) as {
        candidates?: Array<{ content?: { parts?: Array<{ text?: string }> } }>;
      };
      const text = json.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ?? '';
      if (!text) throw new Error('Gemini returned an empty response.');
      return text;
    } catch (err) {
      if (err instanceof DOMException && err.name === 'AbortError') {
        throw new Error('Analysis timed out after 30s. Try again.');
      }
      throw err;
    } finally {
      window.clearTimeout(timer);
    }
  }

  if (settings.backend === 'local-openai' && settings.localEndpoint.trim().startsWith('http')) {
    const baseUrl = settings.localEndpoint.trim().replace(/\/+$/, '');
    const endpoint = baseUrl.endsWith('/chat/completions')
      ? baseUrl
      : `${baseUrl}/chat/completions`;
    const headers: Record<string, string> = { 'Content-Type': 'application/json' };
    if (settings.localApiKey.trim()) {
      headers.Authorization = `Bearer ${settings.localApiKey.trim()}`;
    }
    const controller = new AbortController();
    const timer = window.setTimeout(() => controller.abort(), 35000);
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers,
        signal: controller.signal,
        body: JSON.stringify({
          model: settings.localModel.trim() || 'gemma3:4b',
          messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: userPrompt },
          ],
          temperature,
          max_tokens: maxTokens,
        }),
      });
      if (!res.ok) {
        const errBody = await res.text().catch(() => '');
        throw new Error(`Local AI error (HTTP ${res.status}): ${errBody.slice(0, 140) || res.statusText}`);
      }
      const json = (await res.json()) as {
        choices?: Array<{ message?: { content?: string } }>;
      };
      const text = json.choices?.[0]?.message?.content?.trim() ?? '';
      if (!text) throw new Error('Local server returned an empty response.');
      return text;
    } catch (err) {
      if (err instanceof DOMException && err.name === 'AbortError') {
        throw new Error('Local server timed out after 35s.');
      }
      throw err;
    } finally {
      window.clearTimeout(timer);
    }
  }

  throw new Error('Enable On-Device AI, Gemini Cloud, or Local Server in Settings to run live AI analysis.');
}

function normalizeTitleDetailList(
  raw: unknown,
  fallback: Array<{ title: string; detail: string }>,
  maxItems = 4
): Array<{ title: string; detail: string }> {
  if (!Array.isArray(raw)) return fallback;
  const cleaned = raw
    .filter((item): item is Record<string, unknown> => Boolean(item && typeof item === 'object'))
    .map((item) => ({
      title: String(item.title || item.label || '').trim().slice(0, 80),
      detail: String(item.detail || item.description || item.explanation || '').trim().slice(0, 260),
    }))
    .filter((item) => item.title.length > 0 && item.detail.length > 0)
    .slice(0, maxItems);
  return cleaned.length > 0 ? cleaned : fallback;
}

function buildOfflineSessionDeepAnalysis(session: DebateSessionRecord): SessionDeepAnalysis {
  const sortedByStrength = [...session.turnReviews].sort(
    (a, b) => b.argumentStrength - a.argumentStrength
  );
  const strongest = sortedByStrength[0];
  const weakestTurns = [...session.turnReviews]
    .sort((a, b) => a.argumentStrength - b.argumentStrength)
    .slice(0, 2);

  const strengths: Array<{ title: string; detail: string }> = [
    {
      title: session.topStrength || 'Clear framing',
      detail: strongest
        ? `Turn ${strongest.turnIndex} peaked at ${strongest.argumentStrength}/100: ${strongest.whatWorked[0] || strongest.landingSummary}`
        : 'Maintained a clear thesis throughout the round.',
    },
  ];
  const secondStrength = session.turnReviews
    .flatMap((r) => r.whatWorked)
    .find((w) => !strengths[0].detail.includes(w));
  if (secondStrength) {
    strengths.push({
      title: 'Consistent dialectical grounding',
      detail: secondStrength,
    });
  }

  const weaknesses: Array<{ title: string; detail: string }> = [
    {
      title: 'Primary vulnerability',
      detail: session.primaryFocus,
    },
  ];
  for (const w of weakestTurns) {
    if (weaknesses.length < 3 && w.whatToImprove && !weaknesses[0].detail.includes(w.whatToImprove.slice(0, 24))) {
      weaknesses.push({
        title: `Turn ${w.turnIndex} (${w.landingLabel})`,
        detail: w.whatToImprove,
      });
    }
  }

  const proposedChanges: ProposedArgumentRevision[] = weakestTurns.map((rev) => ({
    turnIndex: rev.turnIndex,
    issue: rev.landingLabel === 'Exposed' ? 'Vulnerable to easy counter-framing' : 'Needs sharper grounding & weighing',
    originalExcerpt: firstSentence(rev.userText),
    proposedRevision:
      rev.aiRewrite ||
      rev.strongerAnglePrompt?.replace(/^[“"]|[”"]$/g, '') ||
      `Even granting the strongest point on the other side, ${firstSentence(rev.userText).replace(/\.$/, '')} — and the decisive trade-off favors ${session.stance.toUpperCase()} because of the concrete downstream impact.`,
    rationale: rev.whatToImprove,
  }));

  const missedOpportunities = session.turnReviews
    .filter((r) => r.strongerAngleTitle)
    .map((r) => `Turn ${r.turnIndex}: Press “${r.strongerAngleTitle}” directly against the opponent’s framing.`)
    .slice(0, 3);

  return {
    generatedAt: new Date().toISOString(),
    engineLabel: 'Built-in Heuristic',
    overallAssessment: `${verdictDisplay(session.verdict).subtitle} Averaged ${session.avgStrength}/100 across ${session.turnCount} turns. Switch to On-Device AI, Gemini Cloud, or Local Server in Settings for full LLM logical critique.`,
    strengths,
    weaknesses,
    missedOpportunities:
      missedOpportunities.length > 0
        ? missedOpportunities
        : ['Weigh scale and permanence explicitly in your closing turn rather than introducing brand-new claims.'],
    proposedChanges,
    nextRoundDrill: session.primaryFocus,
  };
}

/**
 * Full-round deep argument analysis: diagnoses strengths, weaknesses, logical gaps,
 * missed counter-angles, and concrete before -> after proposed argument revisions.
 */
export async function generateSessionDeepAnalysis(params: {
  settings: VoiceDebateSettings;
  session: DebateSessionRecord;
}): Promise<SessionDeepAnalysis> {
  const { settings, session } = params;
  const fallback = buildOfflineSessionDeepAnalysis(session);

  if (!canRunLiveAiCoach(settings)) {
    return fallback;
  }

  const transcriptBlock = session.turnReviews
    .map(
      (rev) =>
        [
          `TURN ${rev.turnIndex} (Score ${rev.argumentStrength}/100, Momentum ${rev.persuasionShift >= 0 ? '+' : ''}${rev.persuasionShift}):`,
          `USER: ${rev.userText}`,
          `OPPONENT COUNTER: ${rev.aiReply}`,
          rev.strongerAngleTitle ? `UNUSED GRAPH ANGLE: ${rev.strongerAngleTitle}` : '',
        ]
          .filter(Boolean)
          .join('\n')
    )
    .join('\n\n');

  const systemPrompt =
    'You are an elite Oxford Union debate coach performing a rigorous post-match critique. Be specific, concrete, and reference actual claims and turn numbers from the transcript. Output valid JSON only.';

  const userPrompt = [
    `MOTION: "${session.topicTitle}"`,
    `DEBATER STANCE: ${session.stance.toUpperCase()} | OPPONENT STYLE: ${session.persona}`,
    `VERDICT: ${verdictDisplay(session.verdict).title} (Avg ${session.avgStrength}/100, Peak ${session.peakStrength}/100)`,
    '',
    'FULL TRANSCRIPT:',
    transcriptBlock,
    '',
    'Return ONLY a JSON object with this exact shape:',
    '{',
    '  "overallAssessment": "2-3 crisp sentences evaluating how well the debater built their case and handled pushback.",',
    '  "strengths": [',
    '    { "title": "Short strength title", "detail": "1-2 sentences citing specific turn(s) and why it worked." }',
    '  ],',
    '  "weaknesses": [',
    '    { "title": "Short weakness/gap title", "detail": "1-2 sentences diagnosing unsupported assumptions, logical flaws, or missed rebuttals." }',
    '  ],',
    '  "missedOpportunities": ["1 sentence on an unexploited counter-angle or weighing move"],',
    '  "proposedChanges": [',
    '    {',
    '      "turnIndex": 1,',
    '      "issue": "Short label of what was weak in that turn",',
    '      "originalExcerpt": "Exact short quote from the debater in that turn",',
    '      "proposedRevision": "Sharp, spoken 2-sentence steelmanned rewrite (35-65 words) that fixes the flaw and anticipates the opponent counter",',
    '      "rationale": "1 sentence explaining why this revision is stronger"',
    '    }',
    '  ],',
    '  "nextRoundDrill": "1 concrete, actionable practice focus for the next round."',
    '}',
    'Include 2-3 strengths, 2-3 weaknesses, 1-3 missedOpportunities, and 2-3 proposedChanges targeting the weakest or highest-leverage turns.',
  ].join('\n');

  const rawText = await runCoachLlmPrompt({
    settings,
    systemPrompt,
    userPrompt,
    jsonMode: true,
    maxTokens: 1200,
    temperature: 0.4,
  });

  const parsed = extractCoachJson(rawText);
  if (!parsed) {
    throw new Error('Could not parse structured critique from AI response. Try again.');
  }

  const validTurns = new Set(session.turnReviews.map((r) => r.turnIndex));
  const proposedChanges: ProposedArgumentRevision[] = Array.isArray(parsed.proposedChanges)
    ? parsed.proposedChanges
        .filter((c): c is Record<string, unknown> => Boolean(c && typeof c === 'object'))
        .map((c) => {
          const rawTurn = Number(c.turnIndex);
          const turnIndex = validTurns.has(rawTurn)
            ? rawTurn
            : session.turnReviews[0]?.turnIndex ?? 1;
          const matchingRev = session.turnReviews.find((r) => r.turnIndex === turnIndex);
          return {
            turnIndex,
            issue: String(c.issue || 'Tighten argument framing').trim().slice(0, 90),
            originalExcerpt: String(
              c.originalExcerpt || (matchingRev ? firstSentence(matchingRev.userText) : '')
            )
              .trim()
              .slice(0, 220),
            proposedRevision: String(c.proposedRevision || '').trim().slice(0, 420),
            rationale: String(c.rationale || '').trim().slice(0, 220),
          };
        })
        .filter((c) => c.proposedRevision.length > 0)
        .slice(0, 4)
    : [];

  const missedOpportunities = Array.isArray(parsed.missedOpportunities)
    ? parsed.missedOpportunities
        .map((m) => String(m).trim())
        .filter((m) => m.length > 0)
        .slice(0, 4)
    : fallback.missedOpportunities;

  return {
    generatedAt: new Date().toISOString(),
    engineLabel: getCoachEngineLabel(settings),
    overallAssessment:
      typeof parsed.overallAssessment === 'string' && parsed.overallAssessment.trim()
        ? parsed.overallAssessment.trim()
        : fallback.overallAssessment,
    strengths: normalizeTitleDetailList(parsed.strengths, fallback.strengths, 4),
    weaknesses: normalizeTitleDetailList(parsed.weaknesses, fallback.weaknesses, 4),
    missedOpportunities:
      missedOpportunities.length > 0 ? missedOpportunities : fallback.missedOpportunities,
    proposedChanges:
      proposedChanges.length > 0 ? proposedChanges : fallback.proposedChanges,
    nextRoundDrill:
      typeof parsed.nextRoundDrill === 'string' && parsed.nextRoundDrill.trim()
        ? parsed.nextRoundDrill.trim()
        : fallback.nextRoundDrill,
  };
}

function buildOfflineHistoricalAnalysis(
  sessions: DebateSessionRecord[]
): HistoricalPatternAnalysis {
  const recent = sessions.slice(0, 10);
  const stats = computeCareerStats(recent);

  // Find weakest turn across recent sessions for a concrete before -> after example
  let weakestPair: { session: DebateSessionRecord; rev: ArgumentTurnReview } | null = null;
  for (const s of recent) {
    for (const rev of s.turnReviews) {
      if (!weakestPair || rev.argumentStrength < weakestPair.rev.argumentStrength) {
        weakestPair = { session: s, rev };
      }
    }
  }

  // Group recurring improvement areas
  const improveCounts = new Map<string, number>();
  for (const s of recent) {
    for (const r of s.turnReviews) {
      const key = r.whatToImprove.slice(0, 90);
      improveCounts.set(key, (improveCounts.get(key) ?? 0) + 1);
    }
  }
  const topWeaknesses = Array.from(improveCounts.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 2)
    .map(([detail], idx) => ({
      title: idx === 0 ? 'Most frequent vulnerability' : 'Secondary pattern',
      detail,
    }));

  return {
    generatedAt: new Date().toISOString(),
    engineLabel: 'Built-in Heuristic',
    sessionsAnalyzed: recent.length,
    executiveSummary: `Across ${recent.length} recent ${recent.length === 1 ? 'round' : 'rounds'} (${stats.totalArguments} arguments), your average strength is ${stats.avgStrength}/100 with a ${stats.edgeRatePct}% edge rate. Enable On-Device AI, Gemini Cloud, or Local Server in Settings for deep LLM synthesis across your history.`,
    recurringStrengths: [
      {
        title: stats.topStrength,
        detail: `Appears consistently as your top rhetorical asset across your recent ${recent.length} rounds.`,
      },
      {
        title: stats.recentTrendDelta >= 0 ? 'Steady execution' : 'Consistent engagement',
        detail:
          stats.recentTrendDelta > 0
            ? `Your average argument strength improved by +${stats.recentTrendDelta} points in recent rounds.`
            : `You averaged ${stats.avgStrength}/100 across ${stats.totalArguments} tracked arguments.`,
      },
    ],
    recurringWeaknesses:
      topWeaknesses.length > 0
        ? topWeaknesses
        : [{ title: 'Primary growth area', detail: stats.primaryFocus }],
    strategicRecommendations: [
      {
        title: 'Target your #1 focus',
        action: stats.primaryFocus,
      },
      {
        title: 'Pre-empt before pivoting',
        action:
          'Open every rebuttal by explicitly naming and narrowing the opponent’s strongest premise in one clause before advancing your counter.',
      },
    ],
    exampleUpgrade: weakestPair
      ? {
          topicTitle: weakestPair.session.topicTitle,
          before: weakestPair.rev.userText,
          after:
            weakestPair.rev.aiRewrite ||
            weakestPair.rev.strongerAnglePrompt?.replace(/^[“"]|[”"]$/g, '') ||
            `Granted the opponent’s concern, the decisive mechanism here is that ${firstSentence(weakestPair.rev.userText).replace(/\.$/, '')}, which outweighs the alternative in real-world impact.`,
          why: weakestPair.rev.whatToImprove,
        }
      : undefined,
  };
}

/**
 * Cross-session historical pattern analysis across the user's recent debate log.
 */
export async function generateHistoricalPatternAnalysis(params: {
  settings: VoiceDebateSettings;
  sessions: DebateSessionRecord[];
}): Promise<HistoricalPatternAnalysis> {
  const { settings, sessions } = params;
  const recent = sessions.slice(0, 10);
  const fallback = buildOfflineHistoricalAnalysis(recent);

  if (recent.length === 0 || !canRunLiveAiCoach(settings)) {
    return fallback;
  }

  const digest = recent
    .map((s, idx) => {
      const sampleTurns = s.turnReviews
        .slice(0, 4)
        .map(
          (r) =>
            `  - T${r.turnIndex} (${r.argumentStrength}/100, ${r.landingLabel}): "${r.userText.slice(0, 190)}" | Countered by: "${r.aiReply.slice(0, 130)}"`
        )
        .join('\n');
      return [
        `ROUND ${idx + 1}: "${s.topicTitle}" (${s.stance.toUpperCase()} vs ${s.persona}) — ${verdictDisplay(s.verdict).title}, Avg ${s.avgStrength}/100`,
        sampleTurns,
      ].join('\n');
    })
    .join('\n\n');

  const systemPrompt =
    'You are an elite debate coach reviewing a debater’s multi-round performance history. Identify concrete cross-round strengths, recurring blind spots, and specific changes they should make. Output valid JSON only.';

  const userPrompt = [
    `Analyze these ${recent.length} debate rounds:`,
    '',
    digest,
    '',
    'Return ONLY a JSON object with this exact shape:',
    '{',
    '  "executiveSummary": "2-3 crisp sentences summarizing the debater’s trajectory, style, and biggest leverage point.",',
    '  "recurringStrengths": [',
    '    { "title": "Short habit title", "detail": "1-2 sentences referencing specific rounds/topics." }',
    '  ],',
    '  "recurringWeaknesses": [',
    '    { "title": "Short recurring flaw", "detail": "1-2 sentences explaining the pattern and how opponents exploited it." }',
    '  ],',
    '  "strategicRecommendations": [',
    '    { "title": "Concrete change to adopt", "action": "1-2 sentences with an exact structural move or drill to apply next round." }',
    '  ],',
    '  "exampleUpgrade": {',
    '    "topicTitle": "Topic name from the weakest turn",',
    '    "before": "Short quote from one weak turn in the history",',
    '    "after": "Sharper 2-sentence rewrite demonstrating the recommended change",',
    '    "why": "1 sentence explaining why this change fixes the recurring flaw"',
    '  }',
    '}',
    'Include 2-3 recurringStrengths, 2-3 recurringWeaknesses, and 2-3 strategicRecommendations.',
  ].join('\n');

  const rawText = await runCoachLlmPrompt({
    settings,
    systemPrompt,
    userPrompt,
    jsonMode: true,
    maxTokens: 1200,
    temperature: 0.4,
  });

  const parsed = extractCoachJson(rawText);
  if (!parsed) {
    throw new Error('Could not parse historical analysis from AI response. Try again.');
  }

  const rawRecs = Array.isArray(parsed.strategicRecommendations)
    ? parsed.strategicRecommendations
        .filter((r): r is Record<string, unknown> => Boolean(r && typeof r === 'object'))
        .map((r) => ({
          title: String(r.title || '').trim().slice(0, 80),
          action: String(r.action || r.detail || '').trim().slice(0, 260),
        }))
        .filter((r) => r.title.length > 0 && r.action.length > 0)
        .slice(0, 4)
    : [];

  let exampleUpgrade = fallback.exampleUpgrade;
  if (parsed.exampleUpgrade && typeof parsed.exampleUpgrade === 'object') {
    const ex = parsed.exampleUpgrade as Record<string, unknown>;
    const before = String(ex.before || '').trim();
    const after = String(ex.after || '').trim();
    if (before && after) {
      exampleUpgrade = {
        topicTitle: String(ex.topicTitle || recent[0]?.topicTitle || 'Recent round').trim(),
        before: before.slice(0, 260),
        after: after.slice(0, 420),
        why: String(ex.why || '').trim().slice(0, 220),
      };
    }
  }

  return {
    generatedAt: new Date().toISOString(),
    engineLabel: getCoachEngineLabel(settings),
    sessionsAnalyzed: recent.length,
    executiveSummary:
      typeof parsed.executiveSummary === 'string' && parsed.executiveSummary.trim()
        ? parsed.executiveSummary.trim()
        : fallback.executiveSummary,
    recurringStrengths: normalizeTitleDetailList(
      parsed.recurringStrengths,
      fallback.recurringStrengths,
      3
    ),
    recurringWeaknesses: normalizeTitleDetailList(
      parsed.recurringWeaknesses,
      fallback.recurringWeaknesses,
      3
    ),
    strategicRecommendations:
      rawRecs.length > 0 ? rawRecs : fallback.strategicRecommendations,
    exampleUpgrade,
  };
}

/**
 * Optional 1-tap AI Coach Rewrite for a specific turn inside the Game Tape review.
 * Works with On-Device WebLLM, Gemini Cloud, or Local Server when configured.
 */
export async function generateAiTurnRewrite(params: {
  settings: VoiceDebateSettings;
  topicTitle: string;
  stance: DebateUserStance;
  review: ArgumentTurnReview;
}): Promise<string> {
  const { settings, topicTitle, stance, review } = params;
  const userPrompt = [
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

  const text = await runCoachLlmPrompt({
    settings,
    systemPrompt:
      'You are a concise debate coach. Output only the improved 2-sentence argument.',
    userPrompt,
    jsonMode: false,
    maxTokens: 160,
    temperature: 0.6,
  });

  return text.replace(/^["']|["']$/g, '').trim();
}
