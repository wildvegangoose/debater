import { DebateTopicId } from '../types/debate';

/**
 * Prep drill types. Each one trains a distinct in-round skill:
 * - rebuttal:  attack an opponent's argument
 * - steelman:  build the strongest case for an assigned side
 * - defend:    hold your position under a direct attack
 * - evidence:  recall the specific data/studies behind a claim
 * - opening:   deliver a short constructive speech on a motion
 * - crossex:   answer a chain of pointed follow-up questions (seeded by `defend`)
 */
export type PrepMode = 'rebuttal' | 'steelman' | 'defend' | 'evidence' | 'opening' | 'crossex';

export type DebateSide = 'pro' | 'con';

export type CoachLevel = 'novice' | 'intermediate' | 'advanced';

export interface ReferenceBlock {
  /** e.g. "Curated counter-argument", "Your position's evidence" */
  label: string;
  title?: string;
  points: string[];
  sources: string[];
}

export interface PrepExchange {
  question: string;
  answer: string;
}

export interface PrepQuestion {
  /** Stable identifier: `${mode}:${nodeId}:${side}` (+ `:fu<n>` for follow-ups) */
  id: string;
  mode: PrepMode;
  topicId: DebateTopicId;
  topicTitle: string;
  pillarId: string;
  pillarTitle: string;
  /** Node the question was built from (used for "Open in graph") */
  nodeId: string;
  /** The side the debater is arguing, when applicable */
  side?: DebateSide;
  /** The overarching motion / thesis that frames the exchange */
  motion: string;
  /** Short headline shown on the question card */
  promptTitle: string;
  /** The opponent's claim, attack, or scenario text */
  promptBody: string;
  /** What the debater must do, in one or two sentences */
  instruction: string;
  /** Hidden answer key from the curated dossier — passed to the grader, revealed after grading */
  reference: ReferenceBlock[];
  /** Suggested length window in words */
  suggestedWords: [number, number];
  /** Suggested speaking time in seconds (used by the optional timer) */
  suggestedSeconds: number;
  /** Earlier rounds of a cross-examination chain, oldest first */
  priorExchanges?: PrepExchange[];
  /** 1-based round number inside a cross-ex chain */
  crossExRound?: number;
}

export interface CriterionResult {
  criterion: string;
  weight: number;
  /** 1–5 */
  score: number;
  feedback: string;
}

export interface GradeResult {
  gradedBy: 'ai' | 'self';
  /** 0–100, computed client-side from weighted criterion scores */
  overall: number;
  headline: string;
  criteria: CriterionResult[];
  strengths: string[];
  improvements: string[];
  missedPoints: string[];
  factualFlags: string[];
  modelAnswer: string;
  followUpQuestion: string;
  model?: string;
}

export interface PrepAttempt {
  id: string;
  createdAt: string;
  question: PrepQuestion;
  answer: string;
  secondsTaken: number;
  grade: GradeResult;
}

export interface PrepSettings {
  apiKey: string;
  model: string;
  level: CoachLevel;
  customInstructions: string;
  /** Optional proxy endpoint; leave blank to call api.anthropic.com directly */
  baseUrl: string;
}
