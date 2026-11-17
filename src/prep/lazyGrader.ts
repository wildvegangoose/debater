import type { gradeAnswer as GradeAnswerFn, testConnection as TestConnectionFn } from './grader';

// The Anthropic SDK is only downloaded the first time someone grades or tests a key.
export async function gradeAnswer(...args: Parameters<typeof GradeAnswerFn>): ReturnType<typeof GradeAnswerFn> {
  const mod = await import('./grader');
  return mod.gradeAnswer(...args);
}

export async function testConnection(...args: Parameters<typeof TestConnectionFn>): ReturnType<typeof TestConnectionFn> {
  const mod = await import('./grader');
  return mod.testConnection(...args);
}
