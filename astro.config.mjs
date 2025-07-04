import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import PinyAstro from "@pinegrow/piny-astro";

export default defineConfig({
  site: "https://b8e473bf.astro-ade.pages.dev/",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Questrial", "sans-serif"], // InterVariable is used by @fontsource/inter/variable.css
      },
    },
  },
  integrations: [svelte(), tailwind(), mdx(), sitemap(), icon(), PinyAstro()],
});
