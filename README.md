# Dialectica — Israeli–Palestinian Conflict Debate Graph

An interactive, infinitely zoomable dialectical argument map exploring the primary historical, legal, security, humanitarian, and diplomatic claims and counter-arguments of the Israeli–Palestinian conflict.

## Key Features

- **3-Tier Semantic Zoom (Level-of-Detail Rendering):**
  - **Macro Overview (`< 36%`):** High-contrast poster headlines and Pro/Con branch counts readable from 30,000 feet.
  - **Standard Exploration (`36% – 90%`):** Full summaries, historical eras, thematic lens tags, and expand/collapse branch controls.
  - **Deep Citations (`>= 90%`):** Reveals primary legal/historical context bullets and source citations directly on cards.
- **3 Tree Layout Modes:**
  - **Bilateral Mindmap (`SPLIT`):** Centered root inquiry with 4 pillars branching left and 4 pillars branching right for widescreen symmetry.
  - **Left → Right (`LR`)** and **Top → Bottom (`TB`)** hierarchical trees.
- **Eight Curated Thematic Pillars (95+ Steelmanned Nodes, Including 2011–2026 Landmark Debates):**
  1. Historical Roots, Indigeneity & Self-Determination (1880s–1949)
  2. 1967 Borders, West Bank Occupation & Settlements
  3. Gaza, Blockade, October 7, IHL & ICJ Genocide Convention Threshold
  4. Regional Geopolitics, Abraham Accords, Iran’s "Axis of Resistance" & U.S. Military Aid
  5. Refugees, Right of Return, Mizrahi Dispossession & Civic Equality
  6. Status of Jerusalem, Sacred Sites & Unilateral Diplomatic Recognition
  7. Global Discourse: Anti-Zionism vs. Antisemitism (IHRA/JDA), BDS & "Apartheid" Legal Framework
  8. Competing Endgames: Two-State Solution, One Democratic State, or Confederation
- **Interactive Local Sandbox:**
  - Add supporting (`+`) or challenging (`−`) arguments to any node, edit existing claims, import/export JSON, copy deep-links (`#node=<id>`), or reset to the curated baseline.

## Local Development

```bash
npm install
npm run dev
```

## Production Build & GitHub Pages Deployment

```bash
npm run build
npm run deploy
```

A GitHub Actions workflow (`.github/workflows/deploy.yml`) is also included for automatic deployment to GitHub Pages on pushes to `main`.
