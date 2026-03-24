---
title: Functions and Basic Graphing
order: 9
level: high-school
status: draft
description: Build function thinking through input-output rules, tables, coordinate graphs, slope, and linear patterns.
prerequisites:
  - Proportional Reasoning and Percentages
next:
  - Elementary Probability and Statistics
tags:
  - functions
  - graphing
  - slope
  - linear-relationships
---

# Unit 9: Functions and Basic Graphing

## Core Idea
A function is a rule that matches each input with exactly one output. Graphs, tables, and equations are different ways to show the same relationship, so learning to move between them helps you see patterns clearly.

## Visual / Real-World Anchor
Imagine a taxi ride with a fixed starting fee plus the same cost for each mile. If the starting fee is 4 dollars and each mile costs 2 dollars, then the total cost changes in a predictable way as the number of miles changes. A table can list possible fares, an equation can describe the rule, and a graph can show the pattern at a glance.

## Intuitive Introduction
Earlier units focused on single calculations: one ratio, one percent, one answer. Functions shift the focus from one answer to a whole pattern. Instead of asking only, "What is 30% of 50?" we now ask, "What rule tells me the output for any input?"

An **input-output machine** is a helpful mental model. You put a value in, the rule acts on it, and exactly one output comes out. For example, if the rule is "double the input and add 1," then input 3 gives output 7, input 5 gives output 11, and input 10 gives output 21.

Tables help us organize repeated inputs and outputs. Graphs help us see how quickly outputs change. Equations help us write the rule compactly. When a pattern changes at a constant rate, we often get a straight-line graph, which is why linear functions are the natural first step.

A coordinate graph is like a map for number pairs. The first coordinate tells how far to move left or right, and the second coordinate tells how far to move up or down. Plotting many input-output pairs lets us see the overall shape of a relationship.

## Formal Statement / Definition
- A **function** is a rule that assigns each input exactly one output.
- The set of input values is the **domain**.
- The set of possible output values is the **range**.
- An **ordered pair** $(x, y)$ shows one input and its output.
- The **graph** of a function is the set of all ordered pairs that satisfy the rule.
- A **linear function** has the form:

$$
y = mx + b
$$

where $m$ is the **slope** and $b$ is the **$y$-intercept**.

- The **slope** measures rate of change:

$$
m = \frac{\text{change in } y}{\text{change in } x} = \frac{y_2 - y_1}{x_2 - x_1}
$$

when $x_2 \ne x_1$.

- A proportional relationship is a special linear function with equation:

$$
y = kx
$$

In this case the graph passes through the origin $(0, 0)$.

## Worked Examples
### Example 1 – Use a Rule to Find Outputs
Suppose a function is defined by:

$$
y = 2x + 1
$$

Find the output when $x = 0$, $x = 3$, and $x = 5$.

Step 1: Substitute each input into the rule.

For $x = 0$:

$$
y = 2(0) + 1 = 1
$$

For $x = 3$:

$$
y = 2(3) + 1 = 7
$$

For $x = 5$:

$$
y = 2(5) + 1 = 11
$$

So the ordered pairs are $(0, 1)$, $(3, 7)$, and $(5, 11)$.

### Example 2 – Build a Table and Decide if the Pattern Is Linear
A rule is given by "start at 4 and add 3 each time the input increases by 1." Complete a table for $x = 0, 1, 2, 3$.

| $x$ | 0 | 1 | 2 | 3 |
|---|---:|---:|---:|---:|
| $y$ | 4 | 7 | 10 | 13 |

The outputs increase by 3 each time, so the rate of change is constant. This means the relationship is linear. One equation is:

$$
y = 3x + 4
$$

### Example 3 – Find the Slope from Two Points
Find the slope of the line passing through $(2, 5)$ and $(6, 13)$.

Use the slope formula:

$$
m = \frac{13 - 5}{6 - 2} = \frac{8}{4} = 2
$$

So the slope is **2**. This means that for each increase of 1 in $x$, the value of $y$ increases by 2.

### Example 4 – Identify the $y$-Intercept and Interpret It
A phone plan costs 15 dollars per month plus 8 dollars for each gigabyte of extra data. Write an equation and interpret the intercept.

Let $x$ be the number of gigabytes and $y$ be the total cost.

$$
y = 8x + 15
$$

The slope is 8 because each extra gigabyte adds 8 dollars.

The $y$-intercept is 15. This means that when $x = 0$, the cost is still 15 dollars because of the monthly base fee.

### Example 5 – Recognize a Proportional Function from a Table
Consider the table:

| $x$ | 1 | 2 | 4 | 6 |
|---|---:|---:|---:|---:|
| $y$ | 5 | 10 | 20 | 30 |

Check whether the ratio $\frac{y}{x}$ stays constant:

$$
\frac{5}{1} = 5, \quad \frac{10}{2} = 5, \quad \frac{20}{4} = 5, \quad \frac{30}{6} = 5
$$

The ratio is always 5, so the relationship is proportional.

Its equation is:

$$
y = 5x
$$

The graph would be a straight line through the origin.

### Example 6 – Plot Points and Describe the Graph
For the function:

$$
y = -x + 4
$$

find three points and describe the graph.

Choose convenient inputs.

If $x = 0$, then $y = 4$, so one point is $(0, 4)$.

If $x = 1$, then $y = 3$, so another point is $(1, 3)$.

If $x = 4$, then $y = 0$, so another point is $(4, 0)$.

These points lie on a straight line. Because the slope is $-1$, the graph goes downward from left to right.

## Common Mistakes & How to Avoid Them
- **Mistake 1:** Mixing up input and output.  
  **Fix:** In an ordered pair $(x, y)$, the first number is always the input and the second is the output.
- **Mistake 2:** Thinking every table shows a linear function.  
  **Fix:** Check whether the change in $y$ is constant when $x$ increases by equal amounts.
- **Mistake 3:** Confusing slope with the $y$-intercept.  
  **Fix:** The slope tells how fast the line changes; the intercept tells where the graph crosses the $y$-axis.
- **Mistake 4:** Assuming every linear function is proportional.  
  **Fix:** Only equations of the form $y = kx$ are proportional; if $b \ne 0$ in $y = mx + b$, the relationship is not proportional.

## Graded Exercises
### Level 1 – Warm-up
1. For $y = x + 6$, find the output when $x = 2$.
2. Write the ordered pair produced by input $4$ for the rule $y = 3x$.
3. In the ordered pair $(5, 12)$, which number is the input?
4. Does the table below represent a linear pattern?

| $x$ | 0 | 1 | 2 |
|---|---:|---:|---:|
| $y$ | 7 | 10 | 13 |

### Level 2 – Standard
1. Complete the table for $y = 2x - 1$ when $x = 0, 1, 2, 3$.
2. Find the slope of the line through $(1, 4)$ and $(5, 12)$.
3. A streaming service charges 9 dollars per month plus 2 dollars for each movie rental. Write a linear equation for the total cost $y$ in terms of the number of rentals $x$.
4. Is the function $y = 4x$ proportional? Explain briefly.
5. Find the $y$-intercept of $y = 6x + 3$ and explain what it means.

### Level 3 – Challenge
1. A plant is 10 cm tall at the start and grows 1.5 cm each week. Write an equation for its height after $w$ weeks, then find the height after 8 weeks.
2. A table shows points $(0, 2)$, $(2, 6)$, $(4, 10)$, and $(6, 14)$. Determine whether the relationship is linear, find the slope, and write an equation.
3. Compare the functions $y = 3x$ and $y = 3x + 5$. How are their graphs similar, and how are they different?

### Exercise Answers
<details>
<summary>Show answers</summary>

#### Level 1
1. $y = 2 + 6 = 8$.
2. Input $4$ gives $y = 12$, so the ordered pair is $(4, 12)$.
3. The input is **5**.
4. Yes. The outputs increase by 3 each time, so the pattern is linear.

#### Level 2
1. The outputs are $-1, 1, 3, 5$.
2. $m = \frac{12 - 4}{5 - 1} = \frac{8}{4} = 2$.
3. $y = 2x + 9$.
4. Yes. It has the form $y = kx$, so it is proportional.
5. The $y$-intercept is 3. It means the output is 3 when $x = 0$.

#### Level 3
1. $h = 1.5w + 10$. After 8 weeks, $h = 1.5(8) + 10 = 22$ cm.
2. Yes, it is linear. The slope is $\frac{6 - 2}{2 - 0} = 2$, and one equation is $y = 2x + 2$.
3. Both graphs are straight lines with slope 3, so they are parallel. The graph of $y = 3x + 5$ is shifted upward by 5 units and does not pass through the origin.

</details>

## Quick Check / Self-Quiz
1. What does the slope of a line measure?
2. Which equation is proportional: $y = 5x$ or $y = 5x + 2$?
3. Find the slope of the line through $(0, 1)$ and $(3, 7)$.
4. For $y = -2x + 6$, what is the output when $x = 2$?

### Quick Check Answers
1. The slope measures the rate of change: how much $y$ changes when $x$ changes.
2. $y = 5x$ is proportional because it has no added constant term.
3. $m = \frac{7 - 1}{3 - 0} = \frac{6}{3} = 2$.
4. $y = -2(2) + 6 = 2$.

## Summary Card
- A function assigns each input exactly one output.
- Tables, equations, ordered pairs, and graphs are connected ways to describe the same relationship.
- Linear functions have a constant rate of change and graph as straight lines.
- The slope tells how fast a line changes, and the $y$-intercept tells where it starts on the vertical axis.
- Proportional relationships are special linear functions of the form $y = kx$ and connect directly to Unit 8.

## References / Further Reading
- Review Unit 8 on proportional reasoning to see how $y = kx$ grows from ratio tables.
- In the next unit, statistics will organize and interpret data rather than model one rule for all inputs.
