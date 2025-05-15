import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

export default defineConfig({
  site: "https://b8e473bf.astro-ade.pages.dev/",
  integrations: [svelte(), tailwind(), mdx(), sitemap(), icon()],
});
