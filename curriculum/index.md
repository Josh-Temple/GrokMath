# GrokMath Curriculum Roadmap

This file is the planning-layer curriculum map for GrokMath.

- `content/` remains the source of truth for publishable lesson markdown and rendered site content.
- `curriculum/` exists to capture the broader scope, sequencing, and future expansion path for the curriculum.
- When the two areas overlap, keep lesson-ready detail in `content/` and keep roadmap/taxonomy detail here.

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

## Current Starter Spine (aligned with `content/index.md`)

### Elementary Foundations
1. Whole Numbers and Place Value
2. Operations with Whole Numbers
3. Addition and Subtraction
4. Multiplication and Division
5. Introduction to Fractions

### Middle School / Early Secondary Bridge
6. Introduction to Algebra
7. Geometry Foundations
8. Proportional Reasoning and Percentages

### Next Planned Expansion
9. Functions and Basic Graphing
10. Elementary Probability and Statistics

## Role of Subfolders

- `elementary/` -> long-term roadmap space for elementary-level strands
- `middle-school/` -> roadmap space for pre-algebra and middle-school topics
- `high-school/` -> roadmap space for algebra, geometry, functions, and later secondary topics
- `university-foundations/` -> bridge topics such as precalculus, proof basics, linear algebra, and calculus foundations
- `_templates/` -> planning templates that support curriculum design without replacing the canonical lesson template in `content/`

## Near-Term Planning Notes

- Preserve alignment between roadmap names here and lesson/unit names in `content/`.
- Expand the roadmap only when it helps sequence upcoming authored lessons.
- Avoid introducing a second competing lesson-authoring standard; use `content/lesson-template.md` as the canonical lesson template.
