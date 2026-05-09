---
title: Systems of Linear Equations with Rational Coefficients
order: 15
level: middle-school
status: draft
description: Extends one-variable solving to pairs of linear equations and interprets shared solutions in algebraic and contextual forms.
tags:
  - systems-of-equations
  - linear-equations
  - rational-numbers
---

# Unit 15: Systems of Linear Equations with Rational Coefficients

## Concept Map

- **Bridge from Unit 14:** Single-equation solving now extends to two equations that must be true at the same time.
- **Core object:** A system of linear equations models two relationships over the same variables.
- **Solution meaning:** A solution is an ordered pair that satisfies both equations simultaneously.
- **Primary methods:** Substitution and elimination use equivalent transformations to isolate or combine variables.
- **Connection forward:** System-solving supports linear modeling, function intersection reasoning, and later multi-variable algebra.

## Intuitive Explanation

In Unit 14, you solved one equation by preserving balance and isolating one unknown. A system asks a related but richer question: when do two conditions hold at the same time?

Imagine two pricing rules for the same product setup, or two motion rules for objects traveling at different rates. Each equation describes one rule. The system solution is the value pair where both rules agree.

You can think of this in two complementary ways:

1. **Algebra view:** manipulate equations carefully until one variable is isolated (substitution) or removed (elimination).
2. **Graph view:** each equation is a line, and the solution is their intersection point when it exists.

This unit keeps the same rational-number fluency from Units 12-14, but now emphasizes structure: coordinate pairs, consistency across equations, and method choice based on equation form.

## Formal Definition

A **system of two linear equations in two variables** is a pair of equations that must be true at the same time:

$$
\begin{cases}
a_1x + b_1y = c_1 \\
a_2x + b_2y = c_2
\end{cases}
$$

where $a_1, b_1, c_1, a_2, b_2, c_2 \in \mathbb{Q}$ (rational numbers), and at least one coefficient of each equation is nonzero.

A **solution** is an ordered pair $(x, y)$ such that both equations are satisfied when the same values are substituted into each equation.

Two common algebraic solving methods are:

1. **Substitution:** solve one equation for one variable, then substitute into the other equation.
2. **Elimination:** add or subtract equations (after scaling if needed) to eliminate one variable.

A system can have three possible outcomes:

- **One solution (consistent, independent):** the two lines intersect at exactly one point.
- **No solution (inconsistent):** the lines are parallel and distinct.
- **Infinitely many solutions (consistent, dependent):** the two equations represent the same line.

When checking a proposed answer, always substitute into **both** equations. A pair is a valid system solution only if it satisfies both simultaneously.

## Worked Examples

### Example 1 - Foundational (Substitution with Integer Coefficients)

**Given**

$$
\begin{cases}
y = x + 1 \\
2x + y = 7
\end{cases}
$$

**Strategy**  
Use substitution because one equation already isolates $y$.

**Steps**

1. Substitute $y = x + 1$ into $2x + y = 7$:
   $$
   2x + (x + 1) = 7
   $$
2. Solve for $x$:
   $$
   3x + 1 = 7 \Rightarrow 3x = 6 \Rightarrow x = 2
   $$
3. Back-substitute into $y = x + 1$:
   $$
   y = 2 + 1 = 3
   $$

**Result**  
$(x, y) = (2, 3)$.

**Quick check**  
$2(2) + 3 = 7$ and $3 = 2 + 1$, so the pair satisfies both equations.

### Example 2 - Standard Variation (Elimination with Rational Coefficients)

**Given**

$$
\begin{cases}
\frac{1}{2}x + y = 4 \\
\frac{3}{2}x - y = 2
\end{cases}
$$

**Strategy**  
Use elimination because the $y$-coefficients are opposites.

**Steps**

1. Add the equations:
   $$
   \left(\frac{1}{2}x + y\right) + \left(\frac{3}{2}x - y\right) = 4 + 2
   $$
2. Simplify:
   $$
   2x = 6 \Rightarrow x = 3
   $$
3. Substitute into the first equation:
   $$
   \frac{1}{2}(3) + y = 4 \Rightarrow \frac{3}{2} + y = 4 \Rightarrow y = \frac{5}{2}
   $$

**Result**  
$(x, y) = \left(3, \frac{5}{2}\right)$.

**Quick check**  
$\frac{1}{2}(3) + \frac{5}{2} = 4$ and $\frac{3}{2}(3) - \frac{5}{2} = 2$.

### Example 3 - Scaling Before Elimination

**Given**

$$
\begin{cases}
\frac{1}{3}x + \frac{1}{2}y = 2 \\
\frac{2}{3}x - \frac{1}{2}y = 1
\end{cases}
$$

**Strategy**  
Eliminate $y$ by adding equations directly (since $+\frac{1}{2}y$ and $-\frac{1}{2}y$ cancel).

**Steps**

1. Add equations:
   $$
   \left(\frac{1}{3}x + \frac{1}{2}y\right) + \left(\frac{2}{3}x - \frac{1}{2}y\right) = 2 + 1
   $$
2. Simplify:
   $$
   x = 3
   $$
3. Substitute into the first equation:
   $$
   \frac{1}{3}(3) + \frac{1}{2}y = 2 \Rightarrow 1 + \frac{1}{2}y = 2 \Rightarrow \frac{1}{2}y = 1 \Rightarrow y = 2
   $$

**Result**  
$(x, y) = (3, 2)$.

**Quick check**  
$\frac{1}{3}(3) + \frac{1}{2}(2) = 2$ and $\frac{2}{3}(3) - \frac{1}{2}(2) = 1$.

### Example 4 - Detecting No Solution

**Given**

$$
\begin{cases}
2x - y = 1 \\
4x - 2y = 5
\end{cases}
$$

**Strategy**  
Compare equations by scaling the first equation.

**Steps**

1. Multiply the first equation by $2$:
   $$
   4x - 2y = 2
   $$
2. Compare with the second equation $4x - 2y = 5$.
3. The left sides are identical but constants differ ($2 \ne 5$), which is impossible.

**Result**  
No solution.

**Quick check**  
This corresponds to parallel lines with different intercepts, so they never intersect.

### Example 5 - Detecting Infinitely Many Solutions

**Given**

$$
\begin{cases}
3x + 6y = 9 \\
x + 2y = 3
\end{cases}
$$

**Strategy**  
Check whether one equation is a scalar multiple of the other.

**Steps**

1. Multiply the second equation by $3$:
   $$
   3(x + 2y) = 3(3) \Rightarrow 3x + 6y = 9
   $$
2. This is exactly the first equation, so both equations represent the same line.

**Result**  
Infinitely many solutions.

**Quick check**  
Any point that satisfies $x + 2y = 3$ also satisfies $3x + 6y = 9$.

## Common Mistakes and How to Avoid Them

[Placeholder for next bounded pass.]

## Quick Checks

[Placeholder for next bounded pass.]

## Graded Exercises

[Placeholder for next bounded pass.]

## Summary and Key Takeaways

[Placeholder for next bounded pass.]

## Next Steps / Connections

[Placeholder for next bounded pass.]
