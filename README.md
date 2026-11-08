# Dialectica — Interactive Dialectical Debate Graphs

An interactive, infinitely zoomable argument-mapping platform covering two comprehensive deep-dive datasets—the **Israeli–Palestinian Conflict** and **Economic Policies & Market Systems**—complete with multi-section background dossiers and direct links to original treaties, watchdog audits, empirical studies, and broadcasts.

## Live Deep-Dive Datasets

1. **Israeli–Palestinian Conflict (`?topic=israel-palestine` — 10 Symmetrical Pillars, 124 Nodes):**
   - Covers historical roots & 1948, 1967 borders & settlements, Gaza/Oct 7/ICJ law, regional geopolitics (Abraham Accords, Iran, U.S. aid), **UNRWA schools/textbooks, Arabic media & UN institutional bias** (UN Watch, IMPACT-se, MEMRI, PMW), refugees & equality, Jerusalem, global discourse (BDS, IHRA/JDA, apartheid law), conflict economic policies (Paris Protocol, *Maqasa*, labor permits), and constitutional endgames.
2. **Economic Policies & Market Systems (`?topic=economic-policies` — 8 Symmetrical Pillars, 90+ Nodes):**
   - Covers fiscal stimulus, sovereign debt & central bank independence; progressive wealth taxes vs. supply-side & Georgist land-value taxes; free trade vs. tariffs & industrial policy (CHIPS/IRA); minimum wage, unions & AI/UBI; YIMBY zoning reform vs. rent control; Neo-Brandeisian antitrust vs. consumer welfare & deregulation; single-payer healthcare, school vouchers & pensions; and carbon pricing vs. nuclear abundance & green growth.

## Key Features

- **Rich Node Dossiers & Original Source Links:**
  - Clicking any card opens an expandable side dossier featuring an executive summary, multi-paragraph background & empirical analysis (`**bold**` key concepts, metrics, and mechanisms), scannable takeaways, and clickable external cards linking directly to original primary documents (Yale Avalon Project, NBER, World Bank, CBO, UN Watch, IMPACT-se, MEMRI, ICJ, ICRC, etc.).
- **3-Tier Semantic Zoom (Level-of-Detail Rendering):**
  - **Macro Overview (`< 36%`):** High-contrast poster headlines and Pro/Con branch counts.
  - **Standard Exploration (`36% – 90%`):** Summaries, eras, thematic lens tags, and expand/collapse controls.
  - **Deep Citations (`>= 90%`):** Inline evidence previews and clickable primary source links right on canvas cards.
- **Multi-Topic Switcher & Live Deep-Linking:**
  - Switch seamlessly via the header toggle or share direct URLs (`?topic=israel-palestine#node=...` and `?topic=economic-policies#node=...`).
- **Interactive Local Sandbox:**
  - Add supporting (`+`) or challenging (`−`) arguments, edit rich markdown dossiers and source links, import/export JSON, or reset to the curated baseline.

## Local Development & Deployment

```bash
npm install
npm run dev      # Local server at http://localhost:5173/
npm run build    # Production bundle
npm run deploy   # Deploy to GitHub Pages
```
