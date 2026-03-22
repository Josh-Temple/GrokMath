# GrokMath

GrokMath is a long-term project to build **best-in-class learning materials** from elementary mathematics through foundational university mathematics.

This repository is designed for a daily collaboration loop:

1. Grok drafts instructions for Codex.
2. The user pastes those instructions into Codex.
3. Codex updates this repository (content, structure, roadmap, and handoff notes).
4. Repeat daily to continuously improve quality.

---

## Mission

Create a world-class, continuously improving math curriculum that:

- starts from elementary arithmetic,
- progresses through middle and high school mathematics,
- reaches foundational university-level topics,
- balances intuition, rigor, exercises, and assessment,
- and is production-ready for web delivery.

---

## Non-Negotiable Operating Rules

### 1) Always update `HANDOFF.md` every session (critical)

At the end of **every** session, Codex must update `HANDOFF.md` with:

- what changed,
- what was decided,
- what is next,
- blockers/risks,
- and concrete instructions for the next session.

This is mandatory for continuity.

### 2) Always review `README.md` and `HANDOFF.md` before editing

At the start of **every** session, read both files and align changes with the latest plan.

### 3) App/code/comments must be written in English

All application code and all code comments must be in English for consistency and maintainability.

---

## Product Direction

- **Primary delivery target:** Vercel deployment.
- **Content quality bar:** pedagogically excellent, structured, and progressively rigorous.
- **Approach:** explore broadly (including research/search-driven ideas), test alternatives, and keep the best solutions.

---

## Suggested Daily Workflow (Grok -> Codex)

Use this loop every day:

1. Grok analyzes current repo state and learning goals.
2. Grok writes a precise instruction set for Codex.
3. User pastes the instruction set to Codex.
4. Codex implements updates and validates changes.
5. Codex updates `HANDOFF.md` for the next session.

### Recommended instruction structure from Grok

Ask Grok to include:

- session objective,
- prioritized task list,
- explicit deliverables,
- quality checks/tests,
- acceptance criteria,
- handoff requirements.

---

## Curriculum Vision (Draft)

- Arithmetic and number sense
- Pre-algebra and algebra foundations
- Geometry and measurement
- Functions and graph literacy
- Trigonometry
- Calculus foundations
- Linear algebra foundations
- Introductory probability/statistics
- Introductory discrete mathematics
- Proof basics and mathematical writing

Each unit should eventually include:

- concept map,
- explanation layers (intuitive -> formal),
- worked examples,
- graded exercises,
- common mistakes,
- quick checks and summary.

---

## Vercel Deployment Baseline

A minimal Next.js App Router scaffold is included so the repository can be deployed directly on Vercel.

### Local development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Open `http://localhost:3000`.

### Production check

```bash
npm run build
npm run start
```

### Vercel deployment

- Import this repository in Vercel.
- Framework preset: **Next.js** (auto-detected).
- Build command: `npm run build`.
- Output setting: default Next.js output.

Current web output now includes a basic unit navigation flow, server-side markdown rendering for Unit 1 via App Router routes, and baseline Progressive Web App (PWA) support through a manifest, installable metadata, custom icons, and a service worker that caches the home page and unit index for offline revisits.

- `/` — homepage with links to unit navigation
- `/units` — unit index (auto-generated from `content/units/`, sorted by optional frontmatter `order` then title fallback)
- `/units/unit-1-whole-numbers-and-place-value` — rendered lesson page from `content/units/unit-1-whole-numbers-and-place-value.md`
- `/units/unit-2-operations-with-whole-numbers` — rendered lesson page from `content/units/unit-2-operations-with-whole-numbers.md`
- `/units/unit-3-addition-and-subtraction` — rendered lesson page from `content/units/unit-3-addition-and-subtraction.md`
- `/units/unit-4-multiplication-and-division` — rendered lesson page from `content/units/unit-4-multiplication-and-division.md`
- `/units/unit-5-introduction-to-fractions` — rendered lesson page from `content/units/unit-5-introduction-to-fractions.md`
- `/units/unit-6-introduction-to-algebra` — rendered lesson page from `content/units/unit-6-introduction-to-algebra.md`
- `/units/unit-7-geometry-foundations` — rendered lesson page from `content/units/unit-7-geometry-foundations.md`
- `/units/unit-8-proportional-reasoning-and-percentages` — rendered lesson page from `content/units/unit-8-proportional-reasoning-and-percentages.md`

## PWA Support

The Next.js app is now configured as a baseline installable PWA:

- `app/manifest.ts` generates the web app manifest consumed by supported browsers.
- `public/sw.js` registers an offline-first service worker for same-origin GET requests, pre-caching `/` and `/units`.
- `public/icons/` contains app icons for standard and maskable install surfaces.
- `app/layout.tsx` exposes manifest, icon, Apple web app, and theme-color metadata while registering the service worker on the client.

This is a pragmatic first PWA pass focused on installability plus offline access to the home page and unit index; deeper lesson-page pre-caching can be added later if desired.

---

## Current Content Structure

- `content/index.md` — starter curriculum index with audience guidance and status tracking for Units 1–10.
- `content/lesson-template.md` — canonical markdown template for all lesson authoring.
- `content/units/` — destination folder for per-unit lesson files that feed the Next.js routes.
- `curriculum/index.md` — planning-layer curriculum roadmap used to track sequencing, level bands, and future expansion.
- `curriculum/_templates/lesson-template.md` — lightweight planning template for roadmap/unit design notes; not a replacement for the canonical lesson template in `content/`.

### Planning Layer Alignment

To avoid template drift and duplicated sources of truth:

- keep `content/` as the publishable lesson layer,
- keep `curriculum/` as the roadmap and sequencing layer,
- update `content/lesson-template.md` when lesson-authoring standards change,
- use `curriculum/_templates/lesson-template.md` only for planning notes before a full lesson is drafted,
- and avoid introducing additional top-level lesson templates unless the repository structure itself changes.

---

## Repository Standards

- Keep structure and naming consistent.
- Prefer clear, maintainable, modular content and code.
- Record major decisions in `HANDOFF.md`.
- Keep `README.md` aligned with current project direction.

---

## Immediate Priority

Build a reliable daily production loop where each session improves both:

1. the learning product itself, and
2. the quality of the process (planning, verification, handoff).

Near-term curriculum work should preserve alignment between the publishable `content/` layer and the planning-oriented `curriculum/` layer before adding new roadmap branches or alternate templates.

---

## Current Challenges

- Lesson rendering now routes through a dedicated `lib/markdown.ts` pipeline with frontmatter extraction and optional `remark`/`gray-matter`/KaTeX runtime support; dependency installation constraints currently force fallback behavior in this environment.
- KaTeX stylesheet is wired globally, and math rendering is enabled when the `katex` runtime dependency is available.
- Keep `/units` auto-generation aligned with filename/frontmatter conventions as new lessons are added.
- Expand beyond Units 1–8 while maintaining the same pedagogical quality bar and markdown structure consistency.
- Next.js now uses a patched `^15.2.5` range in `package.json` to stay above the CVE-2025-66478 blocked release while allowing security patch uptake.
- Dependency-install reliability remains a risk factor when introducing parser/rendering upgrades.
- ESLint configuration is now checked into the repo, but environments without `npm install` on the new lint packages may need `next.config.mjs`'s build-time lint bypass until dependencies are materialized.
- The current service worker intentionally pre-caches only `/` and `/units`; if offline lesson reading becomes a product requirement, expand the caching strategy carefully to avoid serving stale curriculum updates.
