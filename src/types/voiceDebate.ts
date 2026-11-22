import { DebateSourceLink, DebateTopicId } from './debate';

export type VoiceAIBackend =
  | 'browser-webllm'
  | 'gemini-flash'
  | 'local-openai'
  | 'offline-curated';

export type DebateUserStance = 'pro' | 'con' | 'switch' | 'explore';

export type DebateOpponentPersona = 'sparring' | 'oxford' | 'socratic';

export type DebateRoundPhase = 'opening' | 'sparring' | 'cross-exam' | 'closing';

export type RhetoricBadgeType =
  | 'steelman'
  | 'evidence'
  | 'rebuttal'
  | 'concession'
  | 'fallacy'
  | 'clarity';

export interface RhetoricBadge {
  type: RhetoricBadgeType;
  label: string;
  detail: string;
}

export interface VoiceDebateTurn {
  id: string;
  speaker: 'user' | 'ai';
  text: string;
  timestamp: string;
  stanceTag?: 'pro' | 'con' | 'nuance';
  engagedNodeIds?: string[];
  argumentStrength?: number;
  persuasionShift?: number;
  rhetoricBadges?: RhetoricBadge[];
  coachingTip?: string;
  suggestedFollowUpNodeId?: string;
  citedSource?: DebateSourceLink;
}

export interface VoiceDebateSettings {
  backend: VoiceAIBackend;
  webllmModel: string;
  geminiApiKey: string;
  geminiModel: string;
  localEndpoint: string;
  localModel: string;
  localApiKey: string;
}

export interface LiveVisualFeedback {
  argumentStrength: number;
  /** -100 (AI / Opponent dominant) to +100 (User dominant), 0 is balanced */
  persuasionBalance: number;
  roundPhase: DebateRoundPhase;
  latestBadges: RhetoricBadge[];
  coachingTip: string;
  suggestedNodeId: string | null;
  engagedByUserIds: string[];
  engagedByAiIds: string[];
  lastTurnDelta: number;
}

export interface StructuredDebateResponse {
  spokenReply: string;
  stanceTag: 'pro' | 'con' | 'nuance';
  engagedNodeIds: string[];
  userEngagedNodeIds?: string[];
  argumentStrength: number;
  persuasionShift: number;
  roundPhase: DebateRoundPhase;
  rhetoricBadges: RhetoricBadge[];
  coachingTip: string;
  suggestedFollowUpNodeId?: string | null;
  citedSource?: DebateSourceLink | null;
}

/** Chess-style landing verdict for each individual argument turn */
export type ArgumentLandingRating = 'knockout' | 'solid' | 'mixed' | 'vulnerable';

export interface ArgumentTurnReview {
  turnIndex: number;
  userText: string;
  aiReply: string;
  timestamp: string;
  argumentStrength: number;
  persuasionShift: number;
  cumulativeBalance: number;
  landingRating: ArgumentLandingRating;
  landingLabel: string;
  landingSummary: string;
  whatWorked: string[];
  whatToImprove: string;
  strongerAngleNodeId?: string | null;
  strongerAngleTitle?: string;
  strongerAnglePrompt?: string;
  aiRewrite?: string;
  rhetoricBadges: RhetoricBadge[];
  userEngagedNodeIds: string[];
  aiEngagedNodeIds: string[];
  citedSource?: DebateSourceLink | null;
}

export type DebateSessionVerdict = 'won' | 'edge' | 'split' | 'outflanked';

export interface DebateSessionRecord {
  id: string;
  startedAt: string;
  updatedAt: string;
  topicId: DebateTopicId;
  topicTitle: string;
  pillarTitle?: string;
  stance: DebateUserStance;
  persona: DebateOpponentPersona;
  backend: VoiceAIBackend;
  avgStrength: number;
  peakStrength: number;
  finalBalance: number;
  verdict: DebateSessionVerdict;
  turnCount: number;
  nodesEngagedCount: number;
  momentumSeries: number[];
  topStrength: string;
  primaryFocus: string;
  turnReviews: ArgumentTurnReview[];
}

export interface DebaterCareerStats {
  totalRounds: number;
  totalArguments: number;
  avgStrength: number;
  recentTrendDelta: number; // recent 3 rounds avg minus earlier rounds avg
  edgeRatePct: number;      // % of rounds ending 'won' or 'edge'
  topStrength: string;
  primaryFocus: string;
}
