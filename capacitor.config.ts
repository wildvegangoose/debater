import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.github.wildvegangoose.dialectica',
  appName: 'Dialectica Prep',
  webDir: 'dist',
  android: {
    // Grading calls go to https://api.anthropic.com; no cleartext traffic is needed.
    allowMixedContent: false,
  },
  plugins: {
    SystemBars: {
      insetsHandling: 'css',
      initialViewportFitValueHint: 'cover',
    },
  },
};

export default config;
