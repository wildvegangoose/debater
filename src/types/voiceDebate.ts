import { DebateSourceLink } from './debate';

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
