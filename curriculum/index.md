# GrokMath Curriculum Roadmap

This file is the planning-layer curriculum map for GrokMath.

- `content/` remains the source of truth for publishable lesson markdown and rendered site content.
- `curriculum/` exists to capture the broader scope, sequencing, and future expansion path for the curriculum.
- When the two areas overlap, keep lesson-ready detail in `content/` and keep roadmap, taxonomy, and sequencing detail here.

## Curriculum Philosophy

Progressive layering:

1. intuitive
2. visual
3. concrete
4. formal
5. proof-aware when appropriate

Every mature unit should eventually include:

- motivation and real-world relevance,
- explanation layers from intuitive to formal,
- worked examples,
- common pitfalls,
- graded practice,
- quick checks and summaries,
- clear links to prerequisite and next-step topics.

## Planning Guardrails

- Do not duplicate the canonical lesson template inside `curriculum/`.
- Use `content/lesson-template.md` for full lesson drafting.
- Use `curriculum/_templates/lesson-template.md` for sequencing notes, scope sketches, and pre-authoring decisions.
- Keep naming aligned with the published lesson inventory in `content/index.md` whenever possible.

## Current Starter Spine (aligned with `content/index.md`)

### Elementary
1. Whole Numbers and Place Value
2. Operations with Whole Numbers
3. Addition and Subtraction
4. Multiplication and Division
5. Introduction to Fractions

### Middle School
6. Introduction to Algebra
7. Geometry Foundations
8. Proportional Reasoning and Percentages

### High School Bridge
9. Functions and Basic Graphing
10. Elementary Probability and Statistics

## Longer-Term Expansion Candidates

Once the current 10-unit starter spine is stable, likely next additions include:

- exponents, roots, and scientific notation,
- linear and quadratic functions,
- proof basics and mathematical logic,
- precalculus function analysis,
- and introductory statistics beyond descriptive summaries.

## Role of Subfolders

- `elementary/` -> long-term roadmap space for elementary-level strands
- `middle-school/` -> roadmap space for pre-algebra and middle-school topics
- `high-school/` -> roadmap space for algebra, geometry, functions, and later secondary topics
- `university-foundations/` -> bridge topics such as precalculus, proof basics, linear algebra, and calculus foundations
- `_templates/` -> planning templates that support curriculum design without replacing the canonical lesson template in `content/`

## Near-Term Planning Notes

- Preserve alignment between roadmap names here and lesson/unit names in `content/`.
- Expand the roadmap only when it helps sequence upcoming authored lessons.
- Avoid introducing a second competing lesson-authoring standard.
- If future sessions add new planning files, they should clarify scope and progression rather than duplicate publishable lesson content.
