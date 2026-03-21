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
      <span className="eyebrow">Installable PWA</span>
      <h1>GrokMath</h1>
      <p className="lead">
        GrokMath now ships with a web app manifest, installable metadata, app
        icons, and an offline-capable service worker for the home page and unit
        index.
      </p>
      <p>
        Curriculum source files remain in <code>content/</code>. This page is a
        lightweight launch surface while lessons continue to expand.
      </p>

      <section className="callout">
        <h2>PWA Highlights</h2>
        <ul>
          <li>Install the app from supported browsers for a standalone experience.</li>
          <li>Revisit the home page and unit index even after losing connectivity.</li>
          <li>Use the same curriculum routes on mobile and desktop with themed app chrome.</li>
        </ul>
      </section>

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
