import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";
import { pillars } from "./data/pillars";

const pillarIds = pillars.map((p) => p.id) as [string, ...string[]];

// Every future article/post is a markdown file in src/content/posts/.
// See src/content/posts/_template.md for the frontmatter fields to copy.
const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pillar: z.enum(pillarIds),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
    // Set this only if the "real"/original version of this post lives
    // somewhere else (e.g. you wrote it on LinkedIn/Substack first and are
    // mirroring it here) — it tells search engines the other URL is
    // canonical, so this copy doesn't compete with it. Leave unset for
    // anything written here first — self-canonical is the correct default.
    canonicalUrl: z.url().optional(),
  }),
});

export const collections = { posts };
