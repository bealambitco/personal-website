import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";
import { profile } from "../data/profile";

// RSS feed of every published article, newest first — /rss.xml.
// Linked from <head> in BaseLayout so feed readers auto-discover it.
export async function GET(context: APIContext) {
  const posts = await getCollection("posts", ({ data }) => !data.draft);
  return rss({
    title: `${profile.name} — Writing`,
    description: profile.tagline,
    site: context.site!,
    items: posts
      .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
      .map((post) => ({
        title: post.data.title,
        description: post.data.description,
        pubDate: post.data.date,
        link: `/writing/${post.id}/`,
        categories: post.data.tags,
      })),
  });
}
