# Dialectica — Debate Prep & Landmark Debate Graphs

A debate preparation app (web + Android) built on interactive dialectical argument maps for **22 landmark debates (2014–2026)** across geopolitics, macroeconomics, AI & technology, climate & energy, and law & society — pairing steelmanned pro/con rebuttal trees with primary-source citations, mobile-first outlines, and spaced-retrieval quiz flashcards.

**Live Site:** https://wildvegangoose.github.io/debater/

## Key Features

- **22 Curated Debate Graphs:** Spanning flagship topics including *AI Existential Risk*, *Israel–Palestine*, *Economic Policies & Market Systems*, *Capitalism vs. Socialism*, *Free Speech vs. Content Moderation*, *Nuclear Energy*, *Russia–Ukraine–NATO*, *Rise of China*, *CRISPR Gene Editing*, and more.
- **Prep Mode (default):** Graded practice drills with an AI debate coach (see below).
- **3 Exploration Views:**
  - **Graph Canvas:** Zoomable dialectical tree with Semantic Level-of-Detail (LOD), bilateral Split / Top-Down / Left-Right layouts, and cross-branch conceptual links.
  - **Outline Feed (`?view=outline`):** Responsive reading view built for phones and deep linear study.
  - **Flashcard Quiz (`?view=flashcards`):** Active-recall steelmanning drills over curated arguments.
- **Rich Evidence Inspector:** Every node carries multi-paragraph analysis, crisp empirical takeaways, and clickable external links to treaties, court dockets, peer-reviewed NBER/academic papers, watchdog audits, and debate transcripts.
- **Local Sandbox + Community Suggestions:** Readers can prototype arguments locally in `localStorage` (with JSON export/import) and submit new nodes directly into a GitHub-backed review pipeline.

## Prep Mode: Graded Debate Practice

Prep is the default view (`?view=prep`). You get a prompt built from the curated argument map, write your answer, and an AI coach grades it against a debate rubric.

| Drill | What you do | What it trains |
| --- | --- | --- |
| **Quick Round** | A mix of every drill | Daily warm-up |
| **Rebuttal** | Refute the opponent's argument | Finding and exploiting weaknesses |
| **Steelman** | Build the strongest case for an assigned side | Constructing arguments for either side |
| **Defend** | Hold your argument against a direct attack | Answering attacks without collapsing |
| **Cross-Ex Gauntlet** | Defend, then answer three follow-up questions from the coach | Composure and consistency under questioning |
| **Evidence Recall** | Name the studies, data and cases behind a claim | Having concrete support ready |
| **Opening Statement** | A timed ~90-second constructive speech | Framing, structure, persuasion |

Each answer gets a 0–100 score: a weighted average of 1–5 rubric scores, where 3/5 ("competent") maps to 60. You also get specific feedback, points you missed, a fact check, a model answer, and the sharpest follow-up question an opponent would ask. History, per-drill averages, streaks and a **weak spots** queue (questions whose latest score was under 60) are stored on the device.

**AI grading setup:** open *Set up AI grading* in Prep and paste an Anthropic API key. The key is stored only on the device and requests go straight to `api.anthropic.com` (or to the optional proxy URL you set). Without a key, you can still practise and self-grade against the curated answer key.

**Tuning the grader:** everything lives in [`src/prep/graderPrompt.ts`](src/prep/graderPrompt.ts):
- `GRADER_SYSTEM_PROMPT` sets the coach persona, the neutrality rule (craft is judged, never the position), how the reference dossier is used, score calibration anchors, and feedback style.
- `RUBRICS` sets per-drill criteria and weights.
- `buildGraderUserMessage()` builds the per-attempt payload.

Users can also set their level (novice / intermediate / advanced) and add notes for the coach in settings. Grading uses structured outputs ([`src/prep/grader.ts`](src/prep/grader.ts)), so the response is always valid, schema-checked JSON.

## Android App

The Android app is the same web app wrapped with [Capacitor](https://capacitorjs.com) (`android/`, config in [`capacitor.config.ts`](capacitor.config.ts)). It runs edge-to-edge with safe-area padding, and the hardware back button steps out of Prep sessions.

```bash
npm run android:sync   # build the web app and copy it into android/
npm run android:open   # open in Android Studio
npm run android:apk    # build a debug APK (needs JDK 21 + Android SDK)
```

Every push to `main` and every PR builds a debug APK via [`.github/workflows/android.yml`](.github/workflows/android.yml); download it from the workflow run's **Artifacts**. For Play Store releases, add a signing config and run `./gradlew bundleRelease`.

## Community Contributions & Automated GitHub Review Pipeline

Visitors can propose new arguments, theses, or source citations directly from the app via the **Suggest Node** modal (or pre-filled **GitHub Issue Form**):

1. **In-App Suggestion Builder (`Suggest Node`):** Helps contributors pick the topic and exact parent node ID, format primary sources (`Title | https://url | Publisher`), export spreadsheet-ready CSV/JSON, preview in their local sandbox, and open a pre-filled GitHub Issue (`node-suggestion.yml`).
2. **Automated Validation Workflow (`.github/workflows/review-node-suggestion.yml`):** On any issue labeled `node-suggestion`, [`scripts/validateSuggestion.mjs`](scripts/validateSuggestion.mjs) verifies:
   - Valid topic ID & existing target `parentId`
   - Valid `DebateNodeKind` (`pro` / `con` / `thesis`) and canonical `DebateTag`s
   - Duplicate headline checks & steelmanning quality checks
   - Live HTTP reachability check (`HEAD` / `GET`) for every submitted primary source URL
   - Clean JSON payload & TypeScript (`npx tsc --noEmit`) verification
3. **One-Click Maintainer Approval (`approved-for-pr`):** When a maintainer adds the `approved-for-pr` label to a validated issue, the workflow appends the formatted [`CommunityContributionEntry`](src/types/debate.ts) to [`src/data/communityContributions.json`](src/data/communityContributions.json), runs `npm run build` to verify static compilation, and opens a **Pull Request** ready for merge.

> **Maintainer Setup Note:** To allow the workflow to open PRs automatically, enable **Settings → Actions → General → Workflow permissions → "Allow GitHub Actions to create and approve pull requests"** in the repository settings.

## Privacy-Friendly Analytics (Optional)

Dialectica ships with an opt-in, cookie-free analytics loader in [`src/utils/analytics.ts`](src/utils/analytics.ts). Set either GitHub repository **Actions Variable** (no secret needed) to activate metrics in production builds:

- `VITE_CF_ANALYTICS_TOKEN` — Cloudflare Web Analytics token
- `VITE_GOATCOUNTER_CODE` — GoatCounter site code (e.g. `dialectica`)

## Local Development

```bash
npm install
npm run dev
```

To verify types, build static assets, and self-test the community validator locally:

```bash
node scripts/validateSuggestion.mjs --self-test
npx tsc --noEmit
npm run build
```

## Deployment

Pushes to `main` automatically build and publish to GitHub Pages via [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), serving [`public/og-image.png`](public/og-image.png), [`public/favicon.svg`](public/favicon.svg), [`public/robots.txt`](public/robots.txt), and [`public/sitemap.xml`](public/sitemap.xml).
