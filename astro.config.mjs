// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// IMPORTANT: update `site` to your final production domain (or the Vercel URL)
// so canonical URLs, the sitemap and structured data are correct.
export default defineConfig({
  site: "https://dependableroofingpros.com",
  trailingSlash: "ignore",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
