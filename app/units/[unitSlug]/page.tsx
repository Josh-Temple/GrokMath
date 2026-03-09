import Link from "next/link";
import { notFound } from "next/navigation";

import { renderLesson } from "../../../lib/markdown";

type UnitPageProps = {
  params: Promise<{
    unitSlug: string;
  }>;
};

export default async function UnitPage({ params }: UnitPageProps) {
  const { unitSlug } = await params;
  const unit = await renderLesson(unitSlug);

  if (!unit) {
    notFound();
  }

  return (
    <main className="container">
      <p>
        <Link href="/units">← Back to units</Link>
      </p>
      <h1>{unit.title}</h1>
      <article
        className="lesson-content"
        dangerouslySetInnerHTML={{ __html: unit.html }}
      />
    </main>
  );
}
