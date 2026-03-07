import Link from "next/link";

const unitLinks = [
  {
    slug: "unit-1-whole-numbers-and-place-value",
    label: "Unit 1: Whole Numbers and Place Value",
  },
];

export default function UnitsPage() {
  return (
    <main className="container">
      <h1>Units</h1>
      <p>Select a unit to open its lesson page.</p>
      <ul>
        {unitLinks.map((unit) => (
          <li key={unit.slug}>
            <Link href={`/units/${unit.slug}`}>{unit.label}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
