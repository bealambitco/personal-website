import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Update `site` once you've picked a domain — it's used to generate
// the sitemap and canonical URLs. See README.md for hosting/domain steps.
export default defineConfig({
  site: "https://bealambitco.com",
  integrations: [sitemap()],
});
