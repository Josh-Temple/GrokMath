# GrokMath Curriculum Roadmap

This file is the planning-layer curriculum map for GrokMath.

- `content/` remains the source of truth for publishable lesson markdown and rendered site content.
- `curriculum/` captures broader scope, sequencing, and expansion planning.
- Keep lesson-ready detail in `content/`; keep roadmap and progression logic in `curriculum/`.

## Curriculum Philosophy

Progressive layering:

1. intuitive
2. visual
3. concrete
4. formal
5. proof-aware when appropriate

Every mature unit should eventually include:

- concept map,
- explanation layers from intuitive to formal,
- worked examples,
- common pitfalls,
- graded practice,
- quick checks and summary,
- clear links to prerequisite and next-step topics.

## Planning Guardrails

- Do not duplicate the canonical lesson template inside `curriculum/`.
- Use `content/lesson-template.md` for full lesson drafting.
- Use `curriculum/_templates/lesson-template.md` for sequencing notes and scope sketches.
- Keep naming aligned with the published lesson inventory in `content/index.md`.

## Starter Spine (Units 1-14)

1. Whole Numbers and Place Value
2. Operations with Whole Numbers
3. Addition and Subtraction
4. Multiplication and Division
5. Introduction to Fractions
6. Introduction to Algebra
7. Geometry Foundations
8. Proportional Reasoning and Percentages
9. Functions and Basic Graphing
10. Elementary Probability and Statistics
11. Bridge to Fractions and Rational Numbers
12. Operations with Rational Numbers
13. Advanced Rational Applications and Mixed Operations
14. Linear Equations and Inequalities with Rational Numbers

## Sequencing Rationale

- Units 1-5 build arithmetic fluency and number sense.
- Units 6-8 shift learners into algebraic, geometric, and proportional structures.
- Unit 9 introduces function representation and graph interpretation as a bridge into secondary mathematics.
- Unit 10 introduces uncertainty models, descriptive statistics, and foundational data interpretation.
- Unit 11 consolidates rational-number prerequisites (signed values, equivalence, ordering, and number-line interpretation) before full operations.
- Unit 12 establishes full rational-number operation fluency (including signs and mixed forms) as a computation core.
- Unit 13 shifts from pure computation toward multi-step application and operation-selection strategy.
- Unit 14 converts rational fluency into one-variable linear equation and inequality solving as a direct pre-function algebra bridge.

## Longer-Term Expansion Candidates

After stabilizing the starter spine, likely next additions include:

- exponents, roots, and scientific notation,
- linear and quadratic functions,
- precalculus function analysis,
- introductory statistics beyond descriptive summaries,
- and foundational calculus concepts.

## Role of Subfolders

- `elementary/` -> long-term roadmap space for elementary-level strands
- `middle-school/` -> roadmap space for pre-algebra and middle-school topics
- `high-school/` -> roadmap space for algebra, geometry, and secondary function topics
- `university-foundations/` -> bridge topics such as precalculus, proof basics, linear algebra, and calculus foundations
- `_templates/` -> planning templates that support curriculum design without replacing the canonical lesson template in `content/`

## Near-Term Planning Notes

- Keep `content/index.md` and this roadmap synchronized for starter-spine naming.
- Units 1-8 now pass the structural heading-order alignment check as of 2026-03-29; subsequent passes should focus on quality depth, not heading migration.
- Units 1-8 also completed a light answer-key consistency sweep on 2026-04-02; remaining work is targeted micro-polish rather than structural or scope expansion.
- Units 9-10 completed a light answer-key consistency follow-up on 2026-04-03 with minimal section-local solution-key clarity/notation refinements, completing the starter-spine (Units 1-10) consistency sweep cycle.
- Unit 10 has passed the planned polish/review step and is synchronized as `Ready` with the publishable index.
- Unit 11 is fully drafted and lightly polished (micro-pass completed on 2026-04-11) and is synchronized as `Ready` with the publishable index.
- Unit 12 is synchronized as `Ready` with the publishable index.
- Unit 13 is synchronized as `Ready` after exercises/summary completion and a notation/tone harmonization micro-pass.
- Unit 14 is synchronized as `Draft` (full template-aligned draft present; dedicated polish/review remains next).
