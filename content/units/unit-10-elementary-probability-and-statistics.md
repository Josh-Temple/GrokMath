---
title: Elementary Probability and Statistics
order: 10
level: middle-to-high
status: Ready
description: Introduces probability, data summaries, and interpretation of uncertainty through real-world contexts.
prerequisites:
  - Functions and Basic Graphing
next:
  - Algebraic Modeling and Proof-Oriented Reasoning
tags:
  - probability
  - statistics
  - data
  - chance
---

# Unit 10: Elementary Probability and Statistics

## Concept Map

- **Random experiment:** a process with uncertain outcomes (coin tosses, dice rolls, survey responses).
- **Sample space and events:** list all possible outcomes, then describe subsets you care about.
- **Probability model:** assign values from 0 to 1 showing how likely events are.
- **Descriptive statistics:** summarize data with mean, median, mode, and range.
- **Representation and interpretation:** tables, frequency charts, and simple distributions reveal patterns and variability.
- **Bridge from Unit 9:** use function and graph literacy to interpret trends in data and expected behavior.

## Intuitive Explanation

In Unit 9, you worked with predictable rules: input 3, get output 7. Probability and statistics ask a different kind of question: what happens when results are not fully predictable?

If you flip a fair coin once, you do not know exactly what will happen. But if you flip it many times, you can reason about long-run patterns. That is the heart of probability: measuring uncertainty with numbers.

Statistics takes real data (test scores, daily temperatures, sports results) and turns it into understandable summaries. Instead of memorizing dozens of values, you use measures like average and median to describe the whole set.

So this unit has two connected goals:

1. Use probability to model uncertain events.
2. Use statistics to summarize and interpret data.

Together, these ideas prepare you for more advanced modeling, scientific reasoning, and data-informed decisions.

A helpful bridge from Unit 9 is this: function graphs describe predictable relationships, while probability models describe likely outcomes when exact prediction is not possible.

## Formal Definition

- A **random experiment** is a process with uncertain outcome.
- The **sample space** $S$ is the set of all possible outcomes.
- An **event** $A$ is any subset of $S$.
- For equally likely outcomes,

$$
P(A) = \frac{\text{number of favorable outcomes}}{\text{total number of outcomes}}.
$$

- Probability values satisfy

$$
0 \le P(A) \le 1,
$$

with $P(A) = 0$ impossible and $P(A) = 1$ certain.

- For a data set $x_1, x_2, \dots, x_n$, the **mean** is

$$
\bar{x} = \frac{x_1 + x_2 + \cdots + x_n}{n}.
$$

- The **median** is the middle value after sorting (or average of two middle values for an even number of data points).
- The **mode** is the most frequent value.
- The **range** is

$$
\text{range} = \text{maximum} - \text{minimum}.
$$

## Worked Examples

### Example 1 - Foundational: Single Event Probability (Die Roll)

A fair six-sided die is rolled once. What is the probability of getting an even number?

1. Write the sample space: $S=\{1,2,3,4,5,6\}$.
2. Identify favorable outcomes for "even": $\{2,4,6\}$.
3. Compute

$$
P(\text{even}) = \frac{3}{6} = \frac{1}{2}.
$$

### Example 2 - Standard Variation: Combined Event Probability (Two Coins)

Two fair coins are tossed. What is the probability of getting exactly one head?

1. List equally likely outcomes: $\{HH, HT, TH, TT\}$.
2. Favorable outcomes for exactly one head: $\{HT, TH\}$.
3. Compute

$$
P(\text{exactly one head}) = \frac{2}{4} = \frac{1}{2}.
$$

### Example 3 - Standard Variation: Compute Mean and Median

A student records quiz scores: $6, 8, 7, 9, 10$.

1. Mean:

$$
\bar{x} = \frac{6+8+7+9+10}{5} = \frac{40}{5} = 8.
$$

2. Sort values: $6,7,8,9,10$.
3. Median is the middle value: $8$.
4. Interpretation: both mean and median are $8$, so the center of the data is stable around $8$.

### Example 4 - Extension / Edge Case: Outlier Effect on Mean vs Median

Daily study hours for one week: $1,2,2,2,3,3,10$.

1. Mean:

$$
\bar{x} = \frac{1+2+2+2+3+3+10}{7} = \frac{23}{7} \approx 3.29.
$$

2. Sorted data is already listed; median is the 4th value: $2$.
3. Compare results: the large value 10 pulls the mean upward more than the median.
4. Conclusion: with outliers, the median often represents the "typical" value better.

## Common Mistakes and How to Avoid Them

- **Mistake:** Writing a probability greater than 1.
  **How to avoid it:** Always check that probability stays between 0 and 1.
- **Mistake:** Forgetting to list the full sample space before counting favorable outcomes.
  **How to avoid it:** Start every probability problem by explicitly listing or describing all possible outcomes.
- **Mistake:** Mixing up mean and median.
  **How to avoid it:** Mean uses all values and arithmetic; median uses order and the middle position.
- **Mistake:** Assuming short-run outcomes must match probability exactly.
  **How to avoid it:** Remember probability predicts long-run tendency, not guaranteed short-run results.
- **Mistake:** Treating dependent events as if they were independent (for example, drawing two marbles without replacement).
  **How to avoid it:** Ask whether the first outcome changes the second event's sample space; if it does, update probabilities after each step.

## Quick Checks

1. A fair coin is tossed once. What is $P(\text{tails})$?
   - **Answer:** $\frac{1}{2}$.
2. A fair die is rolled once. What is $P(\text{number greater than }4)$?
   - **Answer:** $\frac{2}{6}=\frac{1}{3}$.
3. Find the mean of $4, 6, 8$.
   - **Answer:** $\frac{4+6+8}{3}=6$.
4. Find the median of $1, 3, 9, 10$.
   - **Answer:** $\frac{3+9}{2}=6$.
5. Which is more affected by an extreme value: mean or median?
   - **Answer:** Mean.

## Graded Exercises

### Level 1 - Warm-up

1. A fair die is rolled once. Find $P(\text{odd})$.
2. A bag has 5 red and 3 blue marbles. One marble is drawn at random. Find $P(\text{blue})$.
3. Find the mean of $2, 5, 7, 10$.

### Level 2 - Core Practice

4. Two fair coins are tossed. Find $P(\text{at least one head})$.
5. A spinner has 8 equal sections numbered 1 to 8. Find $P(\text{number is a multiple of }3)$.
6. Find median and range of the data set: $4, 8, 5, 5, 9, 2$.
7. Data values are $3, 3, 5, 6, 6, 6, 8$. Find mode and mean.
8. In 20 free-throw attempts, a player makes 15. Estimate experimental probability of making a shot.

### Level 3 - Challenge

9. A survey records commute times (minutes): $12, 15, 15, 18, 20, 45$. Compute mean and median, then explain which better represents a typical commute.
10. A class rolls a die 60 times and gets a 6 exactly 6 times. Compare experimental probability to theoretical probability and explain one possible reason for the difference.
11. Two dice are rolled. Find $P(\text{sum is }7)$.
12. A dataset has mean 10. If one new data point of 40 is added, explain qualitatively what happens to mean and median and why.

### Solutions

1. $\frac{3}{6}=\frac{1}{2}$
2. $\frac{3}{8}$
3. $\frac{2+5+7+10}{4}=6$
4. Sample space: $\{HH,HT,TH,TT\}$, so $P(\text{at least one head})=1-P(TT)=1-\frac14=\frac34$.
5. Multiples of 3 are $3, 6$, so $P(\text{multiple of }3)=\frac{2}{8}=\frac{1}{4}$.
6. Sorted: $2, 4, 5, 5, 8, 9$, so median $=\frac{5+5}{2}=5$ and range $=9-2=7$.
7. Mode $=6$, mean $=\frac{3+3+5+6+6+6+8}{7}=\frac{37}{7}\approx 5.29$.
8. Experimental probability $=\frac{15}{20}=0.75$ (or 75%).
9. Mean $=\frac{125}{6}\approx 20.83$, median $=16.5$; median is more typical because 45 is an outlier.
10. Experimental: $\frac{6}{60}=0.10$, theoretical: $\frac{1}{6}\approx 0.167$; random variation in limited trials can cause differences, and 60 trials may still be too small for close agreement.
11. Favorable pairs: $(1,6), (2,5), (3,4), (4,3), (5,2), (6,1)$, so $P(\text{sum }=7)=\frac{6}{36}=\frac{1}{6}$.
12. Mean increases noticeably because 40 is far above current average; median may stay similar unless middle positions shift.

## Summary and Key Takeaways

- Probability measures uncertainty on a scale from 0 to 1.
- A clear sample space is essential for correct probability calculations.
- Statistics summarizes data using center and spread measures such as mean, median, mode, and range.
- Mean is sensitive to outliers; median is often more stable.
- Comparing theoretical and experimental probability helps connect mathematical models to real-world data.

## Next Steps / Connections

- Use these probability and statistics tools to evaluate claims from data and media more critically.
- Connect probability models to algebraic representations, including expected-value style linear models.
- Prepare for proof-aware reasoning by justifying why a probability model is valid and why a summary statistic is appropriate.
