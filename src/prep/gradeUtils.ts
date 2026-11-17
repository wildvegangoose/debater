import { GradeResult } from './types';

export class GraderError extends Error {
  constructor(
    message: string,
    public readonly kind: 'auth' | 'rate_limit' | 'network' | 'refusal' | 'invalid' | 'other'
  ) {
    super(message);
  }
}

/** Weighted mean of 1–5 criterion scores mapped onto 0–100 (3/5 "competent" = 60). */
export function scoreFromCriteria(criteria: Array<{ weight: number; score: number }>): number {
  const totalWeight = criteria.reduce((s, c) => s + c.weight, 0) || 1;
  const weighted = criteria.reduce((s, c) => s + c.weight * c.score, 0) / totalWeight;
  return Math.round((weighted / 5) * 100);
}

export function selfGrade(rating: number): GradeResult {
  const score = Math.min(5, Math.max(1, rating));
  return {
    gradedBy: 'self',
    overall: score * 20,
    headline: 'Self-assessed against the curated answer key.',
    criteria: [],
    strengths: [],
    improvements: [],
    missedPoints: [],
    factualFlags: [],
    modelAnswer: '',
    followUpQuestion: '',
  };
}
