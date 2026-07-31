import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://bealambitco.com",
  integrations: [
    sitemap({
      // Archive and taxonomy pages remain available to visitors and
      // crawlable via internal links, but only the homepage and substantive
      // article pages belong in the public search sitemap.
      filter: (page) => {
        const pathname = new URL(page).pathname;
        return (
          pathname !== "/resources/" &&
          pathname !== "/topics/" &&
          !pathname.startsWith("/topics/") &&
          pathname !== "/writing/" &&
          !pathname.startsWith("/tags/")
        );
      },
    }),
  ],
});
