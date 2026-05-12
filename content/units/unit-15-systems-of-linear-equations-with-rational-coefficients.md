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

1. **Solving only one equation and forgetting to verify both**  
   - **Mistake:** A learner finds values from one transformed equation and assumes they solve the entire system.  
   - **Avoid it:** Always substitute the final pair $(x, y)$ into **both** original equations before accepting the answer.

2. **Sign errors during elimination**  
   - **Mistake:** When adding or subtracting equations, learners drop a negative sign (for example, treating $-\frac{3}{4}y$ as $+\frac{3}{4}y$).  
   - **Avoid it:** Rewrite each full equation with parentheses before combining:
   $$
   \left(\frac{1}{2}x - \frac{3}{4}y\right) + \left(-\frac{1}{2}x + \frac{1}{4}y\right).
   $$
   Then combine like terms slowly.

3. **Incorrect distribution when scaling an equation**  
   - **Mistake:** Multiplying one term but not every term, such as turning $2x - y = 5$ into $4x - y = 10$ instead of $4x - 2y = 10$.  
   - **Avoid it:** Treat scaling as multiplying the **entire** equation by the same constant:
   $$
   2(2x - y) = 2(5) \Rightarrow 4x - 2y = 10.
   $$

4. **Fraction handling errors in substitution**  
   - **Mistake:** Learners substitute correctly but then combine rational terms incorrectly (common denominator mistakes).  
   - **Avoid it:** Pause and simplify arithmetic line by line; when needed, clear denominators carefully by multiplying both sides by the least common denominator.

5. **Misclassifying special cases (no solution vs. infinitely many)**  
   - **Mistake:** Seeing similar-looking equations and assuming infinitely many solutions without checking constants.  
   - **Avoid it:** After elimination/scaling, compare resulting statements:
   - If you get a contradiction like $0 = 3$, the system has **no solution**.
   - If you get an identity like $0 = 0$, the system has **infinitely many solutions**.

## Quick Checks

1. Solve the system:
   $$
   \begin{cases}
   y = 2x - 1 \\
   x + y = 8
   \end{cases}
   $$
   **Answer:** $(3, 5)$.  
   **Why:** Substitute $y = 2x - 1$ into $x + y = 8$: $x + (2x - 1) = 8 \Rightarrow 3x = 9 \Rightarrow x = 3$, then $y = 5$.

2. Classify the system (one solution, no solution, or infinitely many):
   $$
   \begin{cases}
   3x - 6y = 9 \\
   x - 2y = 1
   \end{cases}
   $$
   **Answer:** No solution.  
   **Why:** Multiplying the second equation by $3$ gives $3x - 6y = 3$, which conflicts with $3x - 6y = 9$.

3. Solve the system:
   $$
   \begin{cases}
   \frac{1}{2}x + y = 1 \\
   \frac{1}{2}x - y = 3
   \end{cases}
   $$
   **Answer:** $(4, -1)$.  
   **Why:** Add equations to eliminate $y$: $x = 4$. Then substitute: $\frac{1}{2}(4) + y = 1 \Rightarrow y = -1$.

4. True or false: If substitution leads to $0 = 0$, the system has exactly one solution.  
   **Answer:** False.  
   **Why:** $0 = 0$ indicates the equations are dependent (same line), so there are infinitely many solutions.

## Graded Exercises

1. **(Foundational — substitution with integer result)** Solve:
   $$
   \begin{cases}
   y = x + 2 \\
   2x + y = 11
   \end{cases}
   $$
   **Answer:** $(3, 5)$.  
   **Key steps:** Substitute $y=x+2$ into $2x+y=11$: $2x+(x+2)=11 \Rightarrow 3x=9 \Rightarrow x=3$, then $y=5$.

2. **(Foundational — elimination with easy scaling)** Solve:
   $$
   \begin{cases}
   3x + 2y = 4 \\
   3x - 2y = 8
   \end{cases}
   $$
   **Answer:** $(2, -1)$.  
   **Key steps:** Add equations to eliminate $y$: $6x=12 \Rightarrow x=2$. Substitute into $3x+2y=4$: $6+2y=4 \Rightarrow y=-1$.

3. **(Core — rational coefficients via substitution)** Solve:
   $$
   \begin{cases}
   y = \frac{3}{4}x - 2 \\
   \frac{1}{2}x + y = 1
   \end{cases}
   $$
   **Answer:** $\left(\frac{12}{5},-\frac{1}{5}\right)$.  
   **Key steps:** Substitute into the second equation: $\frac{1}{2}x + \left(\frac{3}{4}x-2\right)=1$, so $\frac{5}{4}x-2=1$. Then $\frac{5}{4}x=3 \Rightarrow x=\frac{12}{5}$, and  
   $y=\frac{3}{4}\cdot\frac{12}{5}-2=\frac{9}{5}-2=-\frac{1}{5}$.

4. **(Core — clear denominators then eliminate)** Solve:
   $$
   \begin{cases}
   \frac{1}{3}x + \frac{1}{2}y = 2 \\
   \frac{1}{6}x - \frac{1}{2}y = -1
   \end{cases}
   $$
   **Answer:** $\left(2, \frac{8}{3}\right)$.  
   **Key steps:** Multiply both equations by $6$: $2x+3y=12$ and $x-3y=-6$. Add to get $3x=6 \Rightarrow x=2$. Then $2(2)+3y=12 \Rightarrow 3y=8 \Rightarrow y=\frac{8}{3}$.

5. **(Core+ — classify special case)** Determine whether the system has one solution, no solution, or infinitely many:
   $$
   \begin{cases}
   2x - \frac{1}{2}y = 3 \\
   4x - y = 6
   \end{cases}
   $$
   **Answer:** Infinitely many solutions.  
   **Key steps:** Multiplying the first equation by $2$ gives exactly the second equation, so both equations represent the same line.

6. **(Core+ — classify inconsistency)** Determine the number of solutions:
   $$
   \begin{cases}
   x + \frac{2}{3}y = 5 \\
   3x + 2y = 12
   \end{cases}
   $$
   **Answer:** No solution.  
   **Key steps:** Multiply the first equation by $3$: $3x+2y=15$, which contradicts $3x+2y=12$.

7. **(Challenge — parameter check for a target solution)** Find $k$ so that $(2,-1)$ solves:
   $$
   \begin{cases}
   kx + y = 5 \\
   2x - \frac{1}{2}y = \frac{9}{2}
   \end{cases}
   $$
   **Answer:** $k=3$.  
   **Key steps:** Substitute $(2,-1)$ into first equation: $2k-1=5 \Rightarrow 2k=6 \Rightarrow k=3$. (Second equation checks: $4+\frac{1}{2}=\frac{9}{2}$.)

8. **(Challenge — modeling and solving with rationals)** A school club sells smoothie cups: small cups cost $\$\frac{5}{2}$ each and large cups cost $\$\frac{7}{2}$ each. They sell $18$ cups total for $\$56$ in revenue. Let $s$ be small cups and $\ell$ be large cups. Find $(s,\ell)$.

   Model:
   $$
   \begin{cases}
   s + \ell = 18 \\
   \frac{5}{2}s + \frac{7}{2}\ell = 56
   \end{cases}
   $$
   **Answer:** $(s,\ell)=(7,11)$.  
   **Key steps:** Multiply the revenue equation by $2$: $5s+7\ell=112$. From $s=18-\ell$, substitute:  
   $5(18-\ell)+7\ell=112 \Rightarrow 90+2\ell=112 \Rightarrow \ell=11$, so $s=7$.

## Summary and Key Takeaways

[Placeholder for next bounded pass.]

## Next Steps / Connections

[Placeholder for next bounded pass.]
