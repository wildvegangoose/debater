import Anthropic from '@anthropic-ai/sdk';
import { betaZodOutputFormat } from '@anthropic-ai/sdk/helpers/beta/zod';
import { z } from 'zod';
import { buildGraderUserMessage, GRADER_SYSTEM_PROMPT, RUBRICS } from './graderPrompt';
import { GradeResult, PrepQuestion, PrepSettings } from './types';
import { GraderError, scoreFromCriteria } from './gradeUtils';

const GradeSchema = z.object({
  headline: z.string(),
  criteria: z.array(
    z.object({
      criterion: z.string(),
      score: z.number(),
      feedback: z.string(),
    })
  ),
  strengths: z.array(z.string()),
  improvements: z.array(z.string()),
  missed_points: z.array(z.string()),
  factual_flags: z.array(z.string()),
  model_answer: z.string(),
  follow_up_question: z.string(),
});

function makeClient(settings: PrepSettings): Anthropic {
  return new Anthropic({
    apiKey: settings.apiKey.trim(),
    baseURL: settings.baseUrl.trim() || undefined,
    // The key belongs to the person using the app and is stored only on their device.
    dangerouslyAllowBrowser: true,
    maxRetries: 2,
    timeout: 180_000,
  });
}

/** Refusal fallbacks are available for the Opus and Sonnet tiers, not Haiku. */
function supportsServerFallback(model: string): boolean {
  return model.startsWith('claude-opus') || model.startsWith('claude-sonnet') || model.startsWith('claude-fable');
}

function translateError(err: unknown): GraderError {
  if (err instanceof GraderError) return err;
  if (err instanceof Anthropic.AuthenticationError || err instanceof Anthropic.PermissionDeniedError) {
    return new GraderError('Your API key was rejected. Check it in Prep settings.', 'auth');
  }
  if (err instanceof Anthropic.RateLimitError) {
    return new GraderError('Rate limited by the API. Wait a moment and try again.', 'rate_limit');
  }
  if (err instanceof Anthropic.NotFoundError) {
    return new GraderError('That model is not available for your API key. Pick another model in Prep settings.', 'invalid');
  }
  if (err instanceof Anthropic.BadRequestError) {
    return new GraderError(`The grading request was rejected: ${err.message}`, 'invalid');
  }
  if (err instanceof Anthropic.APIConnectionError) {
    return new GraderError('Could not reach the grading service. Check your connection and try again.', 'network');
  }
  if (err instanceof Anthropic.APIError) {
    return new GraderError(`Grading service error (${err.status ?? 'unknown'}). Try again shortly.`, 'other');
  }
  return new GraderError(err instanceof Error ? err.message : 'Unknown grading error.', 'other');
}

export async function gradeAnswer(params: {
  settings: PrepSettings;
  question: PrepQuestion;
  answer: string;
  secondsTaken: number;
  timerSeconds: number | null;
  signal?: AbortSignal;
}): Promise<GradeResult> {
  const { settings, question, answer, secondsTaken, timerSeconds, signal } = params;
  if (!settings.apiKey.trim()) {
    throw new GraderError('Add an Anthropic API key in Prep settings to enable AI grading.', 'auth');
  }

  const client = makeClient(settings);
  const model = settings.model;

  try {
    const response = await client.beta.messages.parse(
      {
        model,
        max_tokens: 16000,
        system: [{ type: 'text', text: GRADER_SYSTEM_PROMPT, cache_control: { type: 'ephemeral' } }],
        messages: [
          {
            role: 'user',
            content: buildGraderUserMessage({
              question,
              answer,
              secondsTaken,
              timerSeconds,
              level: settings.level,
              customInstructions: settings.customInstructions,
            }),
          },
        ],
        output_config: { effort: 'medium', format: betaZodOutputFormat(GradeSchema) },
        ...(supportsServerFallback(model)
          ? { betas: ['server-side-fallback-2026-07-01'], fallbacks: 'default' as const }
          : {}),
      },
      { signal }
    );

    if (response.stop_reason === 'refusal') {
      throw new GraderError('The grader declined to grade this answer. Try rephrasing it, or self-grade instead.', 'refusal');
    }
    if (response.stop_reason === 'max_tokens') {
      throw new GraderError('The grader ran out of room before finishing. Try again.', 'other');
    }
    const parsed = response.parsed_output;
    if (!parsed) {
      throw new GraderError('The grader returned an unreadable result. Try again.', 'invalid');
    }

    const rubric = RUBRICS[question.mode];
    const criteria = rubric.map((r, i) => {
      const match =
        parsed.criteria.find((c) => c.criterion.trim().toLowerCase() === r.criterion.toLowerCase()) ?? parsed.criteria[i];
      const score = Math.min(5, Math.max(1, Math.round(match?.score ?? 1)));
      return { criterion: r.criterion, weight: r.weight, score, feedback: match?.feedback ?? '' };
    });

    return {
      gradedBy: 'ai',
      overall: scoreFromCriteria(criteria),
      headline: parsed.headline,
      criteria,
      strengths: parsed.strengths,
      improvements: parsed.improvements,
      missedPoints: parsed.missed_points,
      factualFlags: parsed.factual_flags,
      modelAnswer: parsed.model_answer,
      followUpQuestion: parsed.follow_up_question,
      model: response.model,
    };
  } catch (err) {
    if (signal?.aborted) throw new GraderError('Grading cancelled.', 'other');
    throw translateError(err);
  }
}

/** Cheap credential check (no tokens billed): look up the selected model. */
export async function testConnection(settings: PrepSettings): Promise<string> {
  try {
    const info = await makeClient(settings).models.retrieve(settings.model);
    return info.display_name ?? info.id;
  } catch (err) {
    throw translateError(err);
  }
}
