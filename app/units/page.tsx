import fs from "node:fs/promises";
import path from "node:path";
import Link from "next/link";

type UnitLink = {
  slug: string;
  title: string;
  order: number | null;
};

type FrontmatterFields = {
  title: string | null;
  order: number | null;
};

function humanizeSlug(slug: string) {
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function extractFrontmatter(raw: string): FrontmatterFields {
  if (!raw.startsWith("---\n")) {
    return { title: null, order: null };
  }

  const closingIndex = raw.indexOf("\n---\n", 4);
  if (closingIndex === -1) {
    return { title: null, order: null };
  }

  const frontmatterBlock = raw.slice(4, closingIndex);

  let title: string | null = null;
  let order: number | null = null;

  for (const line of frontmatterBlock.split("\n")) {
    const separatorIndex = line.indexOf(":");
    if (separatorIndex === -1) {
      continue;
    }

    const key = line.slice(0, separatorIndex).trim();
    const rawValue = line.slice(separatorIndex + 1).trim();
    const unquotedValue = rawValue.replace(/^['\"]|['\"]$/g, "").trim();

    if (key === "title" && unquotedValue) {
      title = unquotedValue;
    }

    if (key === "order") {
      const parsedOrder = Number(unquotedValue);
      if (Number.isFinite(parsedOrder)) {
        order = parsedOrder;
      }
    }
  }

  return { title, order };
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

      const frontmatter = extractFrontmatter(rawMarkdown);
      const headingTitle = extractHeadingTitle(rawMarkdown);

      return {
        slug,
        title: frontmatter.title ?? headingTitle ?? humanizeSlug(slug),
        order: frontmatter.order,
      };
    }),
  );

  return units.sort((a, b) => {
    if (a.order !== null && b.order !== null && a.order !== b.order) {
      return a.order - b.order;
    }

    if (a.order !== null && b.order === null) {
      return -1;
    }

    if (a.order === null && b.order !== null) {
      return 1;
    }

    return a.title.localeCompare(b.title);
  });
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
