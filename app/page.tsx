import Link from "next/link";

const units = [
  "Whole Numbers and Place Value",
  "Addition and Subtraction",
  "Multiplication and Division",
  "Fractions and Decimals",
  "Negative Numbers and Integers",
  "Expressions, Equations and Inequalities",
  "Geometry Foundations",
  "Ratio, Proportion and Percent",
  "Linear Relationships and Functions",
  "Introduction to Data and Probability",
];

export default function HomePage() {
  return (
    <main className="container">
      <h1>GrokMath</h1>
      <p className="lead">
        Vercel deployment baseline is now ready with a minimal Next.js scaffold.
      </p>
      <p>
        Curriculum source files remain in <code>content/</code>. This page is a
        temporary launch surface while lessons are drafted.
      </p>

      <h2>Start Learning</h2>
      <ul>
        <li>
          <Link href="/units">Open Unit Index</Link>
        </li>
        <li>
          <Link href="/units/unit-1-whole-numbers-and-place-value">
            Open Unit 1 Lesson
          </Link>
        </li>
      </ul>

      <h2>Starter Units</h2>
      <ol>
        {units.map((unit) => (
          <li key={unit}>{unit}</li>
        ))}
      </ol>
    </main>
  );
}
