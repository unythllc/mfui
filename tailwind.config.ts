import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#2C2450",
        primary: "#CFABF9",
        accent: "#FFE161",
        "secondary-accent": "#9DD7A7",
        violet: colors.violet,
        fuchsia: colors.fuchsia,
        orange: colors.orange,
        teal: colors.teal,
        amber: colors.amber,
        "dark-gray": "#393A6A",
        "dark-green": "#56EB8A",
        "dark-red": "#EB5654",
        "dark-background": "#111038",
        "dark-input": "#6B689E",
        "dark-black": "#030423",
        "dark-gray-text": "#8F90B7",
      },
      fontFamily: {
        halyard: ["halyard-display", "sans-serif"],
        sriracha: ["Sriracha", "cursive"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
