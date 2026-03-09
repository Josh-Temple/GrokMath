import fs from "node:fs/promises";
import path from "node:path";

type Frontmatter = Record<string, string>;

type RenderedLesson = {
  frontmatter: Frontmatter;
  title: string;
  html: string;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function formatInlineMarkdown(value: string) {
  let formatted = escapeHtml(value);

  formatted = formatted.replace(/`([^`]+)`/g, "<code>$1</code>");
  formatted = formatted.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  formatted = formatted.replace(/\*([^*]+)\*/g, "<em>$1</em>");

  return formatted;
}

function parseFrontmatter(raw: string) {
  if (!raw.startsWith("---\n")) {
    return { frontmatter: {}, markdown: raw };
  }

  const closingIndex = raw.indexOf("\n---\n", 4);

  if (closingIndex === -1) {
    return { frontmatter: {}, markdown: raw };
  }

  const block = raw.slice(4, closingIndex);
  const markdown = raw.slice(closingIndex + 5);

  const frontmatter: Frontmatter = {};

  for (const line of block.split("\n")) {
    const separator = line.indexOf(":");
    if (separator === -1) {
      continue;
    }

    const key = line.slice(0, separator).trim();
    const value = line.slice(separator + 1).trim();

    if (key) {
      frontmatter[key] = value;
    }
  }

  return { frontmatter, markdown };
}

function markdownToHtml(markdown: string) {
  const lines = markdown.split("\n");
  const html: string[] = [];
  let inUnorderedList = false;
  let inOrderedList = false;

  const closeLists = () => {
    if (inUnorderedList) {
      html.push("</ul>");
      inUnorderedList = false;
    }

    if (inOrderedList) {
      html.push("</ol>");
      inOrderedList = false;
    }
  };

  for (const line of lines) {
    const trimmed = line.trim();

    if (!trimmed) {
      closeLists();
      continue;
    }

    if (/^#{1,6}\s+/.test(trimmed)) {
      closeLists();
      const level = trimmed.match(/^#+/)?.[0].length ?? 1;
      const text = trimmed.replace(/^#{1,6}\s+/, "");
      html.push(`<h${level}>${formatInlineMarkdown(text)}</h${level}>`);
      continue;
    }

    if (/^\d+\.\s+/.test(trimmed)) {
      if (!inOrderedList) {
        closeLists();
        html.push("<ol>");
        inOrderedList = true;
      }
      const text = trimmed.replace(/^\d+\.\s+/, "");
      html.push(`<li>${formatInlineMarkdown(text)}</li>`);
      continue;
    }

    if (/^[-*]\s+/.test(trimmed)) {
      if (!inUnorderedList) {
        closeLists();
        html.push("<ul>");
        inUnorderedList = true;
      }
      const text = trimmed.replace(/^[-*]\s+/, "");
      html.push(`<li>${formatInlineMarkdown(text)}</li>`);
      continue;
    }

    closeLists();
    html.push(`<p>${formatInlineMarkdown(trimmed)}</p>`);
  }

  closeLists();
  return html.join("\n");
}

async function maybeRenderWithRemark(markdown: string): Promise<string | null> {
  try {
    const dynamicImport = new Function("moduleName", "return import(moduleName);") as (
      moduleName: string,
    ) => Promise<any>;

    const [{ default: remark }, { default: remarkHtml }] = await Promise.all([
      dynamicImport("remark"),
      dynamicImport("remark-html"),
    ]);

    const rendered = await remark().use(remarkHtml, { sanitize: false }).process(markdown);
    return String(rendered);
  } catch {
    return null;
  }
}

async function maybeRenderMath(html: string): Promise<string> {
  try {
    const dynamicImport = new Function("moduleName", "return import(moduleName);") as (
      moduleName: string,
    ) => Promise<any>;
    const katexModule = await dynamicImport("katex");
    const katex = katexModule.default ?? katexModule;

    let rendered = html;

    rendered = rendered.replace(/\$\$([\s\S]+?)\$\$/g, (_match: string, expression: string) => {
      return katex.renderToString(expression.trim(), {
        throwOnError: false,
        displayMode: true,
      });
    });

    rendered = rendered.replace(/\$([^$\n]+?)\$/g, (_match: string, expression: string) => {
      return katex.renderToString(expression.trim(), {
        throwOnError: false,
        displayMode: false,
      });
    });

    return rendered;
  } catch {
    return html;
  }
}

export async function renderLesson(slug: string): Promise<RenderedLesson | null> {
  const unitPath = path.join(process.cwd(), "content", "units", `${slug}.md`);

  try {
    const rawMarkdown = await fs.readFile(unitPath, "utf8");
    const { frontmatter, markdown } = parseFrontmatter(rawMarkdown);
    const markdownLines = markdown.split("\n");
    const firstHeading = markdownLines[0]?.match(/^#\s+(.+)/)?.[1]?.trim();
    const contentWithoutTopHeading = firstHeading
      ? markdownLines.slice(1).join("\n").trimStart()
      : markdown;

    const remarkHtml = await maybeRenderWithRemark(contentWithoutTopHeading);
    const baseHtml = remarkHtml ?? markdownToHtml(contentWithoutTopHeading);

    return {
      frontmatter,
      title: frontmatter.title ?? firstHeading ?? slug,
      html: await maybeRenderMath(baseHtml),
    };
  } catch {
    return null;
  }
}
