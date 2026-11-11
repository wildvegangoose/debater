# Dialectica — Interactive Landmark Debate Graphs

Interactive dialectical argument maps for **22 landmark debates (2014–2026)** across geopolitics, macroeconomics, AI & technology, climate & energy, and law & society — pairing steelmanned pro/con rebuttal trees with primary-source citations, mobile-first outlines, and spaced-retrieval quiz flashcards.

**Live Site:** https://wildvegangoose.github.io/debater/

## Key Features

- **22 Curated Debate Graphs:** Spanning flagship topics including *AI Existential Risk*, *Israel–Palestine*, *Economic Policies & Market Systems*, *Capitalism vs. Socialism*, *Free Speech vs. Content Moderation*, *Nuclear Energy*, *Russia–Ukraine–NATO*, *Rise of China*, *CRISPR Gene Editing*, and more.
- **3 Native Views:**
  - **Graph Canvas:** Zoomable dialectical tree with Semantic Level-of-Detail (LOD), bilateral Split / Top-Down / Left-Right layouts, and cross-branch conceptual links.
  - **Outline Feed (`?view=outline`):** Responsive reading view built for phones and deep linear study.
  - **Flashcard Quiz (`?view=flashcards`):** Active-recall steelmanning drills over curated arguments.
- **Rich Evidence Inspector:** Every node carries multi-paragraph analysis, crisp empirical takeaways, and clickable external links to treaties, court dockets, peer-reviewed NBER/academic papers, watchdog audits, and debate transcripts.
- **Local Sandbox + Community Suggestions:** Readers can prototype arguments locally in `localStorage` (with JSON export/import) and submit new nodes directly into a GitHub-backed review pipeline.

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
