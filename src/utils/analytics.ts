interface PostHogClient {
  capture: (eventName: string, properties?: Record<string, unknown>) => unknown;
}

export type FeedbackSentiment = 'love' | 'good' | 'confusing' | 'frustrating';
export type FeedbackCategory = 'idea' | 'bug' | 'ux_friction' | 'topic_request';

export interface UserFeedbackPayload {
  sentiment: FeedbackSentiment;
  category: FeedbackCategory;
  message: string;
  viewMode: string;
  topicId: string;
  topicTitle: string;
  isDark: boolean;
}

let posthogInstance: PostHogClient | null = null;
let initStarted = false;
const pendingEvents: Array<{ name: string; props: Record<string, unknown> }> = [];

function getPostHogKey(): string {
  return import.meta.env.VITE_POSTHOG_KEY?.trim() ?? '';
}

function getPostHogHost(): string {
  return import.meta.env.VITE_POSTHOG_HOST?.trim() || 'https://us.i.posthog.com';
}

export function isPostHogConfigured(): boolean {
  return Boolean(getPostHogKey()) && !import.meta.env.DEV;
}

/**
 * Privacy-respecting analytics loader.
 * Supports PostHog (funnels, retention, session replays with masked inputs, and feedback)
 * via GitHub repository variables `VITE_POSTHOG_KEY` (and optional `VITE_POSTHOG_HOST`),
 * plus legacy optional Cloudflare Web Analytics / GoatCounter beacons.
 */
export function initAnalytics(): void {
  if (typeof document === 'undefined' || import.meta.env.DEV) return;

  const phKey = getPostHogKey();
  if (phKey && !initStarted) {
    initStarted = true;
    void import('posthog-js')
      .then((mod) => {
        const ph = mod.default;
        ph.init(phKey, {
          api_host: getPostHogHost(),
          person_profiles: 'identified_only',
          autocapture: true,
          capture_pageview: true,
          capture_pageleave: true,
          disable_session_recording: false,
          session_recording: {
            maskAllInputs: true,
            maskTextSelector: '[data-ph-no-capture]',
          },
          loaded: (client) => {
            posthogInstance = client;
            while (pendingEvents.length > 0) {
              const evt = pendingEvents.shift();
              if (evt) client.capture(evt.name, evt.props);
            }
          },
        });
        posthogInstance = ph;
        while (pendingEvents.length > 0) {
          const evt = pendingEvents.shift();
          if (evt) ph.capture(evt.name, evt.props);
        }
      })
      .catch(() => {
        // Never block app startup if analytics fails to load (e.g. adblock / offline)
      });
  }

  const cfToken = import.meta.env.VITE_CF_ANALYTICS_TOKEN?.trim();
  if (cfToken && !document.querySelector('script[data-cf-beacon]')) {
    const script = document.createElement('script');
    script.defer = true;
    script.src = 'https://static.cloudflareinsights.com/beacon.min.js';
    script.setAttribute('data-cf-beacon', JSON.stringify({ token: cfToken }));
    document.head.appendChild(script);
  }

  const gcCode = import.meta.env.VITE_GOATCOUNTER_CODE?.trim();
  if (gcCode && !document.querySelector('script[data-goatcounter]')) {
    const script = document.createElement('script');
    script.async = true;
    script.src = '//gc.zgo.at/count.js';
    script.setAttribute('data-goatcounter', `https://${gcCode}.goatcounter.com/count`);
    document.head.appendChild(script);
  }
}

/**
 * Track structured product events (never send raw user debate prose or API keys).
 */
export function trackEvent(
  eventName: string,
  properties: Record<string, string | number | boolean | null | undefined> = {}
): void {
  if (typeof window === 'undefined' || import.meta.env.DEV) return;

  const cleanProps: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(properties)) {
    if (v !== undefined) cleanProps[k] = v;
  }

  if (posthogInstance) {
    posthogInstance.capture(eventName, cleanProps);
  } else if (getPostHogKey()) {
    if (pendingEvents.length < 40) {
      pendingEvents.push({ name: eventName, props: cleanProps });
    }
  }
}

/**
 * Send explicit user feedback directly to PostHog (linked to the user's session replay).
 * Returns true if delivered to PostHog, false if PostHog is not configured.
 */
export function submitUserFeedback(payload: UserFeedbackPayload): boolean {
  const props: Record<string, unknown> = {
    sentiment: payload.sentiment,
    category: payload.category,
    message: payload.message.trim(),
    view_mode: payload.viewMode,
    topic_id: payload.topicId,
    topic_title: payload.topicTitle,
    theme: payload.isDark ? 'dark' : 'light',
    viewport_width: typeof window !== 'undefined' ? window.innerWidth : undefined,
    user_agent: typeof navigator !== 'undefined' ? navigator.userAgent : undefined,
  };

  if (posthogInstance) {
    posthogInstance.capture('user_feedback', props);
    return true;
  }

  if (isPostHogConfigured()) {
    pendingEvents.push({ name: 'user_feedback', props });
    return true;
  }

  return false;
}
