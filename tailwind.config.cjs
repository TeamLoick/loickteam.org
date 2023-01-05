/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        loick: {
          red: "#942D40",
          white: "#FAFAFA",
          light_grey: "#D9D9D9",
          black: "#171717",
          grey: "#272727",
        },
      },
    },
  },
  plugins: [],
};
