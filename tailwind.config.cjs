/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // adds support for grid-cols-19
        19: "repeat(19, minmax(0, 1fr))",
        18: "repeat(18, minmax(0, 1fr))",
      },
      fontFamily: {
        sans: [
          "DM Sans",
          "sans-serif",
          "Inter",
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
