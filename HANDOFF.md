# HANDOFF

## Session Summary
- Created initial content folder structure: content/, content/units/, content/templates/
- Added content/curriculum-index.md with 10 starter units
- Added content/templates/lesson-template.md with full pedagogical structure

## Decisions Made
- Adopted kebab-case folder/file naming
- Chose markdown-only for initial content (no MDX yet)
- Deferred frontend stack/framework decision to next session(s)
- Selected 10-unit minimal starter curriculum spanning levels

## Current State
- Content architecture defined
- Curriculum index and lesson template ready for population
- Still no app/frontend code

## Next Session Priority
1. Populate first 1–2 units with real content using the template (start with unit-001-arithmetic-basics)
2. Decide minimal frontend stack (Next.js? Static MD? MDX?)
3. Add basic quality checklist / rubric for content review

## Suggested Next Prompt for Grok
"Given current README.md and HANDOFF.md, produce Codex instructions to implement the first real lesson content in unit-001-arithmetic-basics using the template, decide on initial frontend approach for Vercel, and update quality gates."

## Risks / Open Questions
- How to handle LaTeX rendering on web (KaTeX? MathJax?) — decide soon
- Static vs dynamic content generation strategy still open
- Exercise answer format / future auto-grading placeholder needed

## End-of-Session Checklist
- [ ] Updated HANDOFF.md
- [ ] All new content in English
- [ ] Verified markdown rendering

### Session 2026-03-04

- **What changed**: Standardized the content skeleton to `content/units/`, `content/index.md`, and `content/lesson-template.md`; replaced legacy `content/curriculum-index.md` and `content/templates/lesson-template.md` with the new canonical files.
- **Decisions made**: Kept kebab-case paths, fixed scope to a 10-unit starter index, adopted a Markdown-only lesson format (no MDX/components yet), and continued to defer frontend stack decisions.
- **What’s next**: Populate the first 1–2 lessons for Unit 1 or Unit 2, decide a minimal Next.js/React + MDX path for Vercel, and add lightweight content linting rules.
- **Blockers / Risks**: None today. Risk: the template may need minor iteration after drafting the first complete lesson.
- **Suggested next prompt**: "Draft the first two complete lessons for Unit 1 using `content/lesson-template.md`, then propose a minimal Next.js + MDX scaffold for Vercel delivery."
- **Concrete instructions for next session**: Use `content/index.md` and `content/lesson-template.md` as the single source of truth, add only lesson content under `content/units/`, and append a new dated section to this file at the end of the session.
