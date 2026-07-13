import { defineCollection, z } from "astro:content";
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
  }),
});

export const collections = { posts };
