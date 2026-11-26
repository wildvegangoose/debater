/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CF_ANALYTICS_TOKEN?: string;
  readonly VITE_GOATCOUNTER_CODE?: string;
  readonly VITE_POSTHOG_KEY?: string;
  readonly VITE_POSTHOG_HOST?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
