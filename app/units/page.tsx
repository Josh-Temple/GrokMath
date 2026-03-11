import fs from "node:fs/promises";
import path from "node:path";
import Link from "next/link";

type UnitLink = {
  slug: string;
  title: string;
};

function humanizeSlug(slug: string) {
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function extractFrontmatterTitle(raw: string) {
  if (!raw.startsWith("---\n")) {
    return null;
  }

  const closingIndex = raw.indexOf("\n---\n", 4);
  if (closingIndex === -1) {
    return null;
  }

  const frontmatterBlock = raw.slice(4, closingIndex);
  for (const line of frontmatterBlock.split("\n")) {
    const separatorIndex = line.indexOf(":");
    if (separatorIndex === -1) {
      continue;
    }

    const key = line.slice(0, separatorIndex).trim();
    if (key !== "title") {
      continue;
    }

    const rawValue = line.slice(separatorIndex + 1).trim();
    const unquotedValue = rawValue.replace(/^['\"]|['\"]$/g, "").trim();
    return unquotedValue || null;
  }

  return null;
}

function extractHeadingTitle(raw: string) {
  const headingMatch = raw.match(/^#\s+(.+)$/m);
  return headingMatch?.[1]?.trim() ?? null;
}

async function getUnitLinks(): Promise<UnitLink[]> {
  const unitsDirectoryPath = path.join(process.cwd(), "content", "units");
  const files = await fs.readdir(unitsDirectoryPath);

  const markdownFiles = files.filter((fileName) => fileName.endsWith(".md"));

  const units = await Promise.all(
    markdownFiles.map(async (fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const filePath = path.join(unitsDirectoryPath, fileName);
      const rawMarkdown = await fs.readFile(filePath, "utf8");

      const frontmatterTitle = extractFrontmatterTitle(rawMarkdown);
      const headingTitle = extractHeadingTitle(rawMarkdown);

      return {
        slug,
        title: frontmatterTitle ?? headingTitle ?? humanizeSlug(slug),
      };
    }),
  );

  return units.sort((a, b) => a.title.localeCompare(b.title));
}

export default async function UnitsPage() {
  const unitLinks = await getUnitLinks();

  return (
    <main className="container">
      <h1>Units</h1>
      <p>Select a unit to open its lesson page.</p>
      <ul>
        {unitLinks.map((unit) => (
          <li key={unit.slug}>
            <Link href={`/units/${unit.slug}`}>{unit.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
