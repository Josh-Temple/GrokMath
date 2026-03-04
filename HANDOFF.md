# HANDOFF

> **Critical rule:** Update this file at the end of every session.
> **Critical rule:** Read both `README.md` and `HANDOFF.md` at the beginning of every session.

## Session Summary

- Rewrote `README.md` to define the long-term mission: create top-quality math learning materials from elementary through foundational university mathematics.
- Added explicit daily Grok -> Codex collaboration workflow.
- Added strict operating rules:
  - update `HANDOFF.md` every session,
  - review `README.md` + `HANDOFF.md` before any work,
  - keep all app/code/comments in English.
- Clarified deployment direction: Vercel.
- Added curriculum vision and repository standards.

## Decisions Made

1. The repository is process-driven and optimized for continuous daily updates.
2. `HANDOFF.md` is mandatory session memory and must always be refreshed.
3. English is required for all code and code comments.
4. Vercel is the target deployment platform.

## Current State

- Core project guidance is now documented in `README.md`.
- Session continuity baseline is established via this `HANDOFF.md`.
- No application code has been added yet.

## Next Session Priority (Top 5)

1. Define the initial content architecture (folder layout for math levels and units).
2. Create a minimal curriculum index for 8-12 starter units.
3. Define a reusable lesson template (concept, examples, exercises, checks).
4. Decide frontend stack/details for Vercel deployment (if not fixed yet).
5. Add quality gates (content checklist + technical checklist).

## Suggested Next Prompt for Grok

Use or adapt this when asking Grok to generate next instructions for Codex:

"Given the current `README.md` and `HANDOFF.md`, create a concrete implementation plan for the next session to build the first production-ready curriculum skeleton for GrokMath. Include:

- exact files/folders to create,
- lesson template format,
- 8-12 initial units from elementary to university foundations,
- acceptance criteria,
- checks/tests Codex should run,
- required `HANDOFF.md` updates at session end.

All app/code/comments must be in English."

## Risks / Open Questions

- Frontend framework and content format are not finalized yet.
- Assessment strategy (auto-graded vs static) is not decided.
- Internationalization policy (UI language vs content language scope) is not yet defined.

## End-of-Session Checklist (must do every time)

- [ ] Update `README.md` if project direction changed.
- [x] Update `HANDOFF.md` with decisions and next actions.
- [ ] Record validation checks/tests run.
- [ ] Ensure all new app/code/comments are in English.

