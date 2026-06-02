---
title: "Introductory Quadratic Relations and Parabolas"
slug: "unit-16-introductory-quadratic-relations-and-parabolas"
order: 16
status: "Ready"
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

- **Mistake 1: Confusing the sign of $a$ with left/right direction.**
  Learners sometimes think $a>0$ means the graph moves right and $a<0$ means left.
  **How to avoid it:** First decide opening direction only: $a>0$ opens up, $a<0$ opens down. Then find left/right location from the vertex value $h$ in $y=a(x-h)^2+k$.

- **Mistake 2: Reading the vertex incorrectly from vertex form.**
  In $y=(x-3)^2+2$, a common error is writing vertex $(-3,2)$.
  **How to avoid it:** Use the template match habit: compare to $y=a(x-h)^2+k$ and copy $(h,k)$ directly. Here, $h=3$ and $k=2$, so vertex is $(3,2)$.

- **Mistake 3: Using the axis of symmetry formula incorrectly.**
  In standard form $y=ax^2+bx+c$, students may use $x=\frac{b}{2a}$ and miss the negative sign.
  **How to avoid it:** Memorize and checkpoint with a substitution test: axis is always
  $$
  x=-\frac{b}{2a}.
  $$
  After computing, plug that $x$ into the equation to verify it matches the vertex's $x$-coordinate.

- **Mistake 4: Assuming every quadratic has range $y\ge 0$.**
  This confusion comes from overgeneralizing from $y=x^2$.
  **How to avoid it:** Determine opening and vertex first. If $a>0$, range is $y\ge k$; if $a<0$, range is $y\le k$, where $(h,k)$ is the vertex.

- **Mistake 5: Plotting too few points and drawing an unsymmetrical parabola.**
  Learners may plot one side accurately but not reflect points across the axis.
  **How to avoid it:** Use a symmetry checklist: plot the vertex, choose one point on each side of the axis at equal horizontal distance, and confirm equal $y$-values.

## Quick Checks

1. **Concept check:** Why is $y=x^2+4x+7$ not linear?
   - **Answer:** Because the highest power of $x$ is $2$, so it is quadratic, not linear.

2. Find the vertex of $y=(x+1)^2-5$.
   - **Answer:** Compare with $y=a(x-h)^2+k$: $h=-1$, $k=-5$. Vertex is $(-1,-5)$.

3. For $y=-2(x-4)^2+3$, state the opening direction and range.
   - **Answer:** Since $a=-2<0$, it opens downward. Vertex is $(4,3)$, so range is $y\le 3$.

4. Find the axis of symmetry of $y=x^2-6x+1$.
   - **Answer:** $x=-\frac{b}{2a}=-\frac{-6}{2\cdot 1}=3$, so the axis is $x=3$.

5. A ball's height is modeled by $h(t)=-5t^2+10t+2$. At what time is the maximum height reached?
   - **Answer:** Use $t=-\frac{b}{2a}=-\frac{10}{2(-5)}=1$. The maximum occurs at $t=1$ second.

## Graded Exercises

### Level 1 - Warm-up

1. **(Foundational - identify quadratic structure)** Decide whether each relation is quadratic. Explain briefly.
   - (a) $y=4x-7$
   - (b) $y=x^2-3x+2$
   - (c) $y=5(x+1)^2-9$

   **Answer:** (a) Not quadratic; the highest power of $x$ is $1$. (b) Quadratic; it has an $x^2$ term with nonzero coefficient. (c) Quadratic; it is in vertex form with a squared expression.

2. **(Foundational - read vertex form)** For $y=2(x-3)^2-5$, state the vertex, axis of symmetry, opening direction, and range.

   **Answer:** Vertex $(3,-5)$; axis $x=3$; opens upward because $a=2>0$; range $y\ge -5$.

3. **(Foundational - opening and width)** Compare $y=x^2$ and $y=\frac{1}{3}x^2$. Which graph is wider, and why?

   **Answer:** $y=\frac{1}{3}x^2$ is wider because $0<|a|<1$, so outputs grow more slowly away from the vertex.

### Level 2 - Core Practice

4. **(Core - axis from standard form)** Find the axis of symmetry of $y=x^2-8x+6$.

   **Answer:** $x=-\frac{b}{2a}=-\frac{-8}{2\cdot 1}=4$, so the axis is $x=4$.

5. **(Core - vertex from standard form)** Find the vertex of $y=x^2-8x+6$.

   **Answer:** Use the axis $x=4$, then substitute: $y=4^2-8(4)+6=16-32+6=-10$. The vertex is $(4,-10)$.

6. **(Core - convert to vertex form)** Rewrite $y=x^2+6x+11$ in vertex form, then state the vertex and range.

   **Answer:** Complete the square: $y=(x^2+6x+9)+2=(x+3)^2+2$. Vertex $(-3,2)$; since it opens upward, range is $y\ge 2$.

7. **(Core - downward-opening parabola)** For $y=-2(x+1)^2+8$, state the maximum value and where it occurs.

   **Answer:** The vertex is $(-1,8)$. Because $a=-2<0$, the parabola opens downward, so the maximum value is $8$ at $x=-1$.

### Level 3 - Challenge

8. **(Challenge - table reasoning)** A relation has values shown below.

   | $x$ | $-1$ | $0$ | $1$ | $2$ | $3$ |
   |---:|---:|---:|---:|---:|---:|
   | $y$ | $8$ | $3$ | $0$ | $-1$ | $0$ |

   Explain why a quadratic model is reasonable, and identify the axis of symmetry suggested by the table.

   **Answer:** First differences are $-5,-3,-1,1$, so the second differences are $2,2,2$, which supports a quadratic model. The matching values $y=0$ at $x=1$ and $x=3$ are symmetric around $x=2$, so the axis is $x=2$.

9. **(Challenge - projectile model)** A ball's height in meters is modeled by $h(t)=-4t^2+16t+1$. Find the time and height at the maximum.

   **Answer:** The maximum occurs at $t=-\frac{b}{2a}=-\frac{16}{2(-4)}=2$. Then $h(2)=-4(2)^2+16(2)+1=-16+32+1=17$. The maximum height is $17$ meters at $2$ seconds.

10. **(Challenge - build a vertex-form model)** Write a quadratic function with vertex $(2,-3)$ that opens upward and passes through $(4,5)$.

    **Answer:** Start with $y=a(x-2)^2-3$. Substitute $(4,5)$: $5=a(4-2)^2-3=4a-3$, so $8=4a$ and $a=2$. One such function is $y=2(x-2)^2-3$.

## Summary and Key Takeaways

- A **quadratic relation** has a squared variable term and can often be written as $y=ax^2+bx+c$ with $a\neq 0$.
- Quadratic graphs are **parabolas**: they open upward when $a>0$ and downward when $a<0$.
- Vertex form, $y=a(x-h)^2+k$, makes the vertex $(h,k)$ and axis of symmetry $x=h$ easy to read.
- The **range** depends on the vertex and opening direction: if $a>0$, then $y\ge k$; if $a<0$, then $y\le k$.
- Use quadratic models when a situation has curved behavior, symmetry, or changing differences rather than a constant linear rate.

| Big idea | What to remember | Quick example |
|---|---|---|
| Standard form | $y=ax^2+bx+c$, where $a\neq 0$ | $y=2x^2-3x+1$ |
| Vertex form | $y=a(x-h)^2+k$ shows vertex $(h,k)$ | $y=3(x-2)^2-5$ has vertex $(2,-5)$ |
| Opening direction | Sign of $a$ controls up/down | $a<0$ opens downward |
| Axis of symmetry | The vertical mirror line through the vertex | $x=h$ in vertex form |
| Range | Minimum or maximum comes from the vertex | $y\ge k$ if opening upward |

If you are stuck, first identify the form you have, then find the vertex, opening direction, axis of symmetry, and range in that order.

## Next Steps / Connections

- **Next algebra step:** Use parabola structure to solve quadratic equations, where solutions often correspond to $x$-intercepts of the graph.
- **Connection to factoring:** Factored form will make it easier to see where a parabola crosses the $x$-axis.
- **Connection to optimization:** The vertex gives a maximum or minimum value, which supports real-world questions such as highest height, least cost, or greatest area.
- **Review if needed:** Revisit Unit 9 for function and graph language, and Unit 14 for equation-solving habits before moving deeper into quadratic equations.
- **Optional extension:** Compare tables with constant first differences (linear) against tables with constant second differences (quadratic).
