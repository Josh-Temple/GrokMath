---
title: "Introductory Quadratic Relations and Parabolas"
slug: "unit-16-introductory-quadratic-relations-and-parabolas"
order: 16
status: "Draft"
level: "high-school"
audience: "Grades 8-10"
description: "Introduces quadratic relations as a next step after linear and systems work, focusing on curved growth patterns and parabola structure."
tags:
  - "quadratic relations"
  - "parabolas"
  - "functions"
  - "graphing"
  - "algebra"
---

# Unit 16 - Introductory Quadratic Relations and Parabolas

## Concept Map

- **Core concept -> key subskills -> representations:** Quadratic relations model changing rates of change -> recognize standard forms like $y = ax^2 + bx + c$ -> connect tables, symbolic rules, and U-shaped graphs (parabolas).
- **Prerequisite link:** Build directly on Unit 9 (linear functions and graphing) and Unit 15 (algebraic structure and multi-equation reasoning).
- **Current unit focus:** Shift from constant rate of change (linear) to curved behavior where outputs change by non-constant amounts.
- **Forward link:** Prepares learners for vertex form, factoring-based solving, quadratic equations, and optimization contexts.
- **Optional visual note:** Compare a linear table with constant first differences against a quadratic table with constant second differences.

## Intuitive Explanation

In linear lessons, each step in $x$ changes $y$ by the same amount, so the graph stays a straight line. Quadratic relations are different: the change itself changes. A simple everyday picture is throwing a ball upward. At first it rises, slows down, stops for a moment, and then falls. The height does not change at a constant rate, so a line cannot describe it well.

A quadratic relation captures that curved pattern. Its graph is called a **parabola**, and it often looks like a U shape (opening up) or an upside-down U shape (opening down). Instead of asking only "How much does $y$ change each step?", we begin asking "How is that change changing?" This idea bridges intuitive motion stories to symbolic expressions such as $y = ax^2 + bx + c$.

## Formal Definition

A **quadratic relation** in two variables is a relation that can be written so the highest power of the variable is 2. In this unit, we focus on quadratic relations expressed as functions of the form

$$
y=ax^2+bx+c, \quad a,b,c\in\mathbb{R}, \ a\neq 0.
$$

- This is the **standard form**.
- The graph of any quadratic function is a **parabola**.

An equivalent and often more informative form is the **vertex form**:

$$
y=a(x-h)^2+k,
$$

where:

- $(h,k)$ is the **vertex** of the parabola,
- $x=h$ is the **axis of symmetry**,
- $a>0$ means the parabola opens upward, and $a<0$ means it opens downward,
- larger $|a|$ gives a narrower parabola, while $0<|a|<1$ gives a wider parabola.

For real coefficients:

- **Domain** is all real numbers, $x\in\mathbb{R}$.
- **Range** depends on the vertex and opening direction:
  - if $a>0$, then $y\ge k$,
  - if $a<0$, then $y\le k$.

## Worked Examples

### Example 1 - Graph features from standard form

**Given:** $y=2x^2-8x+6$.

**Strategy:** Convert to vertex form to read the vertex and axis quickly.

**Steps:**

1. Factor the quadratic and linear part coefficient from the first two terms:
   $$
   y=2(x^2-4x)+6.
   $$
2. Complete the square inside parentheses:
   $$
   y=2\big[(x^2-4x+4)-4\big]+6.
   $$
3. Rewrite:
   $$
   y=2(x-2)^2-8+6=2(x-2)^2-2.
   $$

**Result:** Vertex is $(2,-2)$, axis is $x=2$, and since $a=2>0$, the parabola opens upward.

**Quick check:** Substitute $x=2$: $y=2(0)^2-2=-2$, which matches the vertex $y$-value.

### Example 2 - Convert standard form to vertex form

**Given:** $y=-x^2+6x-5$.

**Strategy:** Complete the square after factoring out the negative from the $x^2$ and $x$ terms.

**Steps:**

1. Group and factor:
   $$
   y=-(x^2-6x)-5.
   $$
2. Complete the square:
   $$
   y=-\big[(x^2-6x+9)-9\big]-5.
   $$
3. Simplify:
   $$
   y=-(x-3)^2+9-5=-(x-3)^2+4.
   $$

**Result:** Vertex form is $y=-(x-3)^2+4$, so vertex $(3,4)$ and axis $x=3$.

**Quick check:** At $x=3$, $y=4$ is the maximum value because the parabola opens downward.

### Example 3 - Find vertex and range directly

**Given:** $y=-\frac{1}{2}(x+4)^2+7$.

**Strategy:** Use vertex form parameters immediately.

**Steps:**

1. Compare with $y=a(x-h)^2+k$.
2. Identify $a=-\frac{1}{2}$, $h=-4$, $k=7$.
3. Determine shape: $a<0$ so opening is downward.

**Result:** Vertex is $(-4,7)$, axis is $x=-4$, domain is $\mathbb{R}$, and range is $y\le 7$.

**Quick check:** Because $(x+4)^2\ge 0$, the term $-\frac{1}{2}(x+4)^2\le 0$, so adding 7 gives values at most 7.

### Example 4 - Real-world quadratic model (projectile)

**Given:** A ball's height (meters) after $t$ seconds is

$$
h(t)=-5t^2+20t+1.
$$

Find the time and height at the highest point.

**Strategy:** Use the vertex time formula for standard form, $t=-\frac{b}{2a}$.

**Steps:**

1. Identify coefficients: $a=-5$, $b=20$, $c=1$.
2. Compute vertex time:
   $$
   t_{\text{max}}=-\frac{20}{2(-5)}=2.
   $$
3. Evaluate height:
   $$
   h(2)=-5(2^2)+20(2)+1=-20+40+1=21.
   $$

**Result:** The ball reaches its maximum height of $21\,\text{m}$ at $t=2\,\text{s}$.

**Quick check:** Since $a<0$, the parabola opens downward, so the vertex is a maximum point.

## Common Mistakes and How to Avoid Them

[List 3-5 high-frequency mistakes. Pair each mistake with a quick correction habit or checkpoint.]

- **Mistake:** [Common misconception].
  **How to avoid it:** [Correction strategy].
- **Mistake:** [Second misconception].
  **How to avoid it:** [Correction strategy].

## Quick Checks

[Include 3-5 short self-checks that can be answered in 1-3 lines each.]
[Mix one conceptual check with computational checks where possible.]

1. [Question 1]
   - **Answer:** [Short answer]
2. [Question 2]
   - **Answer:** [Short answer]
3. [Question 3]
   - **Answer:** [Short answer]

## Graded Exercises

[Use increasing difficulty. Aim for 8-12 exercises total with concise answers or answer outlines.]
[Suggested tiers: Easy (fluency), Medium (multi-step), Hard (transfer/challenge).]

### Level 1 - Warm-up

1. [Exercise 1]
2. [Exercise 2]
3. [Exercise 3]

### Level 2 - Core Practice

4. [Exercise 4]
5. [Exercise 5]
6. [Exercise 6]
7. [Exercise 7]

### Level 3 - Challenge

8. [Exercise 8]
9. [Exercise 9]
10. [Exercise 10]

## Summary and Key Takeaways

- [3-5 concise takeaways in student-friendly language]
- [One line on when to use this idea]
- [One line on what to review if stuck]

## Next Steps / Connections

- [How this lesson connects to the next lesson]
- [Optional extension topic]
