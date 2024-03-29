/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    require("path").join(
      require.resolve("@skeletonlabs/skeleton"),
      "../**/*.{html,js,svelte,ts,astro}"
    ),
  ],
  theme: {
    extend: {
      width: {
        100: "25rem",
        104: "26rem",
        112: "28rem",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        purple: "#3f3cbb",
        midnight: "#121063",
        metal: "#565584",
        tahiti: "#3ab7bf",
        silver: "#ecebff",
        "bubble-gum": "#ff77e9",
        bermuda: "#78dcca",
        tan: "#c09580",
        blackboard: "#565656",
        darkgrain: "#ACA49F",
        grain: "#d7cec7",
      },
      fontFamily: {
        Stardom: "Stardom-Regular",
        Chillax: [
          "Chillax-Regular",
          "Chillax-Medium",
          "Chillax-Semibold",
          "Chillax-Bold",
          "Chillax-Light",
          "Chillax-Extralight",
          "Chillax-Variable",
        ],
        Array: ["Array-Regular", "Array-Semibold", "Array-Bold"],
      },
      spacing: {
        3.5: "0.845rem",
        "1,5": "0.375rem",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    ...require("@skeletonlabs/skeleton/tailwind/skeleton.cjs")(),
  ],
};
