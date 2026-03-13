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

Current web output now includes a basic unit navigation flow and server-side markdown rendering for Unit 1 via App Router routes.

- `/` — homepage with links to unit navigation
- `/units` — unit index (auto-generated from `content/units/`, sorted by optional frontmatter `order` then title fallback)
- `/units/unit-1-whole-numbers-and-place-value` — rendered lesson page from `content/units/unit-1-whole-numbers-and-place-value.md`
- `/units/unit-2-operations-with-whole-numbers` — rendered lesson page from `content/units/unit-2-operations-with-whole-numbers.md`
- `/units/unit-3-addition-and-subtraction` — rendered lesson page from `content/units/unit-3-addition-and-subtraction.md`

---

## Current Content Structure

- `content/index.md` — starter curriculum index and unit-level placeholders.
- `content/lesson-template.md` — canonical markdown template for all lessons.
- `content/units/` — destination folder for per-unit lesson files.

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

---

## Current Challenges

- Lesson rendering now routes through a dedicated `lib/markdown.ts` pipeline with frontmatter extraction and optional `remark`/`gray-matter`/KaTeX runtime support; dependency installation constraints currently force fallback behavior in this environment.
- KaTeX stylesheet is wired globally, and math rendering is enabled when the `katex` runtime dependency is available.
- Keep `/units` auto-generation aligned with filename/frontmatter conventions as new lessons are added.
- Expand beyond Units 1–3 while maintaining the same pedagogical quality bar and markdown structure consistency.
- Next.js now uses a patched `^15.2.5` range in `package.json` to stay above the CVE-2025-66478 blocked release while allowing security patch uptake.
- Dependency-install reliability remains a risk factor when introducing parser/rendering upgrades.
