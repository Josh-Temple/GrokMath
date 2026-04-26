---
title: Advanced Rational Applications and Mixed Operations
order: 13
level: middle-school
status: draft
description: Extends rational-number operations into mixed-operation contexts and real-world applications with sign-aware reasoning.
tags:
  - rational-numbers
  - mixed-operations
  - applications
---

# Unit 13: Advanced Rational Applications and Mixed Operations

## Concept Map

- **Bridge from Unit 12:** We now combine all four rational-number operations inside multi-step tasks instead of isolated computations.
- **Operation choice matters:** Real problems require deciding whether to add, subtract, multiply, or divide before calculating.
- **Sign and magnitude stay central:** Every result depends on both size and direction, especially in comparison and net-change contexts.
- **Representation fluency:** Fractions, decimals, and signed values can be converted to make multi-step reasoning clearer.
- **Connection forward:** These habits prepare learners for equations, linear modeling, and function-based problem solving.

## Intuitive Explanation

In Unit 12, you practiced each operation with rational numbers one at a time. In this unit, the challenge changes: many problems mix operations, context clues, and multiple representations.

Think of tracking money in an account over a week. A refund might add a positive amount, a purchase might subtract, a discount might scale a value by a fraction, and splitting a bill might require division. You are still using the same four operations, but now you must choose and sequence them correctly.

A helpful mindset is: first understand the story, then map each action to an operation, and only then compute. When you keep sign meaning and operation meaning connected to the context, mixed-operation problems become much more manageable.

## Formal Definition

Let $\mathbb{Q}$ be the set of rational numbers, where each value can be written as $\frac{a}{b}$ with integers $a, b$ and $b \ne 0$.

In mixed-operation expressions over $\mathbb{Q}$:

1. **Operation mapping from context**: each action in a word problem maps to one operation:
   - combine/net total $\rightarrow$ addition or subtraction,
   - repeated scaling $\rightarrow$ multiplication,
   - equal sharing or unit rate $\rightarrow$ division.
2. **Order of operations** is preserved exactly as in whole-number algebra: $\text{Parentheses} \to \text{Multiplication/Division} \to \text{Addition/Subtraction}$.
3. **Equivalent-form flexibility**: a rational value may be rewritten as a fraction, decimal, or signed mixed form when it makes structure clearer, without changing value.
4. **Division restriction**: for $r, s \in \mathbb{Q}$, $r \div s = r \cdot \frac{1}{s}$ with $s \ne 0$.
5. **Sign consistency rule**: signs must be interpreted through both the operation and context meaning (for example, subtracting a negative value represents an increase).

A complete solution is valid only when the chosen operations, operation order, and final sign all match the original context.

## Worked Examples

### Example 1 - Foundational (net temperature change)

A city starts at $-3.5^\circ\mathrm{C}$. During the day, temperature rises by $2.25^\circ\mathrm{C}$ and then falls by $1.75^\circ\mathrm{C}$. Find the final temperature.

1. Map the context to operations: $-3.5 + 2.25 - 1.75$.
2. Add first two values: $-3.5 + 2.25 = -1.25$.
3. Subtract the last change: $-1.25 - 1.75 = -3.0$.
4. Final answer: $-3^\circ\mathrm{C}$, which matches a net return to a colder value.

### Example 2 - Standard Variation (discount then tax)

An item costs $48$ dollars. A store gives a $25\%$ discount, then applies $8\%$ tax to the discounted price. Find the final price.

1. Convert rates to rational multipliers: $25\% = 0.25$ and $8\% = 0.08$.
2. Apply discount (keep $75\%$ of price): $48 \cdot (1 - 0.25) = 48 \cdot 0.75 = 36$.
3. Apply tax to discounted price: $36 \cdot (1 + 0.08) = 36 \cdot 1.08 = 38.88$.
4. Final answer: $38.88$ dollars. (Order matters: discount then tax is not the same as tax then discount on the original list price.)

### Example 3 - Extension / Edge Case (subtracting a negative and dividing)

A diver is at $-18$ meters relative to sea level and rises by $\frac{9}{2}$ meters. The total rise happened evenly over $3$ minutes. Find the diver's new depth and average vertical change per minute.

1. New depth expression: $-18 + \frac{9}{2} = -\frac{36}{2} + \frac{9}{2} = -\frac{27}{2} = -13.5$.
2. Interpret sign: $-13.5$ m means still below sea level, but less deep than before.
3. Average change per minute: $\frac{\frac{9}{2}}{3} = \frac{9}{2} \cdot \frac{1}{3} = \frac{9}{6} = \frac{3}{2} = 1.5$.
4. Final answers: new depth $=-13.5$ m, average rise rate $=1.5$ m/min upward.

### Example 4 - Mixed signs in a financial adjustment

A balance change is modeled by $12.5 - (-3.75) - 4.5$. Evaluate and interpret.

1. Rewrite subtraction of a negative as addition: $12.5 + 3.75 - 4.5$.
2. Compute left to right for addition/subtraction: $12.5 + 3.75 = 16.25$, then $16.25 - 4.5 = 11.75$.
3. Final answer: $11.75$. The negative subtraction increased the total before the final decrease.

## Common Mistakes and How to Avoid Them

- **Mistake:** Doing operations in story order instead of expression order.
  **How to avoid it:** Translate the story first, then apply order of operations (parentheses, multiplication/division, addition/subtraction) before computing.
- **Mistake:** Losing the sign when combining changes (especially with subtraction of negatives).
  **How to avoid it:** Rewrite each step with explicit signs, for example $a - (-b) = a + b$, and interpret whether the quantity should increase or decrease.
- **Mistake:** Mixing percent language with add/subtract rules incorrectly.
  **How to avoid it:** Convert each percent action to a multiplier first (for example, $-25\% \rightarrow \times 0.75$, $+8\% \rightarrow \times 1.08$), then multiply in sequence.
- **Mistake:** Dividing by a rational number without using its reciprocal.
  **How to avoid it:** Replace division with multiplication by the reciprocal: $r \div s = r \cdot \frac{1}{s}$ for $s \ne 0$, then simplify carefully.
- **Mistake:** Reporting a numerically correct value with an incorrect context meaning.
  **How to avoid it:** Add a short interpretation sentence at the end (for example, "negative means below sea level" or "positive means net gain").

## Quick Checks

1. Evaluate and interpret: $-6.5 + 2.25 - 1.75$.
   - **Answer:** $-6.0$. The final value is still negative, so the quantity remains below zero.
2. True or false: applying a $20\%$ discount and then a $10\%$ tax is equivalent to multiplying by $0.9$ then $1.1$.
   - **Answer:** True. The combined multiplier is $0.9 \times 1.1 = 0.99$.
3. Compute: $3 - (-\frac{5}{4})$.
   - **Answer:** $3 + \frac{5}{4} = \frac{12}{4} + \frac{5}{4} = \frac{17}{4}$.
4. Compute: $\frac{7}{3} \div \left(-\frac{14}{9}\right)$.
   - **Answer:** $\frac{7}{3} \cdot \left(-\frac{9}{14}\right) = -\frac{63}{42} = -\frac{3}{2}$.

These checks reinforce the same core habits from this unit: map context to operations, keep sign meaning visible, use operation order consistently, and verify that your final interpretation matches the situation.

## Graded Exercises

### Level 1 - Warm-up

1. Evaluate: $-4.5 + 1.2 - 0.7$.
   - **Answer:** $-4.0$.
2. Compute: $\frac{5}{6} - \left(-\frac{1}{3}\right)$.
   - **Answer:** $\frac{5}{6} + \frac{2}{6} = \frac{7}{6}$.
3. Compute: $\frac{9}{10} \div \left(-\frac{3}{5}\right)$.
   - **Answer:** $\frac{9}{10} \cdot \left(-\frac{5}{3}\right) = -\frac{45}{30} = -\frac{3}{2}$.

### Level 2 - Core Practice

4. A hiking elevation is $-120.5$ m relative to sea level. The group climbs $35.25$ m, then descends $18.75$ m. Find the final elevation.
   - **Answer:** $-120.5 + 35.25 - 18.75 = -104.0$ m.
5. A jacket costs $80$ dollars. It is discounted by $15\%$, then taxed by $6\%$. Find the final price.
   - **Answer:** $80 \cdot 0.85 \cdot 1.06 = 72.08$ dollars.
6. Simplify and interpret sign: $-2.4 - (-1.1) + 0.3$.
   - **Answer:** $-2.4 + 1.1 + 0.3 = -1.0$; final value is negative.
7. A tank is filled by $\frac{3}{4}$ liter each minute for $6$ minutes, then $\frac{5}{2}$ liters are removed. How much water remains from this process?
   - **Answer:** Total added $= 6 \cdot \frac{3}{4} = \frac{18}{4} = \frac{9}{2}$. Remaining $= \frac{9}{2} - \frac{5}{2} = \frac{4}{2} = 2$ liters.

### Level 3 - Challenge

8. Evaluate: $\left(-\frac{7}{3}\right) + \frac{5}{6} \cdot \left(\frac{9}{5}\right) - \left(-\frac{1}{2}\right)$.
   - **Answer:** $\frac{5}{6} \cdot \frac{9}{5} = \frac{3}{2}$, so expression is $-\frac{7}{3} + \frac{3}{2} + \frac{1}{2} = -\frac{7}{3} + 2 = -\frac{1}{3}$.
9. A value decreases by $20\%$, then increases by $25\%$. Starting from $240$, find the final value and net percent change.
   - **Answer:** $240 \cdot 0.8 \cdot 1.25 = 240$. Net change is $0\%$.
10. A submarine at $-42$ m rises at a constant rate of $\frac{9}{4}$ m/min for $8$ minutes, then descends $3.5$ m. Find the final depth.
   - **Answer:** Rise $= 8 \cdot \frac{9}{4} = 18$ m, so depth becomes $-42 + 18 = -24$ m. After descending $3.5$ m: $-24 - 3.5 = -27.5$ m.

## Summary and Key Takeaways

This unit extends rational-number skills from single-operation practice to multi-step decision making. The main goal is not just to calculate correctly, but to map context to operations, keep signs meaningful, and apply operation order reliably.

- Mixed rational applications require both **operation choice** and **operation order**.
- Sign interpretation is part of the mathematics: negative values and subtraction of negatives must match context meaning.
- Percent and scale problems are safest when rewritten as multipliers (for example, $\times 0.85$, then $\times 1.06$).
- Division by a rational is multiplication by its reciprocal, with nonzero divisor checks.
- This connects directly to Unit 12 operation fluency and prepares for equation modeling and linear relationships in later units.

## Next Steps / Connections

- [How this lesson connects to the next lesson]
- [Optional extension topic]
