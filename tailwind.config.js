/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        sm: "720px",
        md: "800px",
        lg: "976px",
        xl: "1440px",
      },
      colors: {
        primary: colors.sky,
      },
      gridTemplateColumns: {
        "auto-1fr": "auto 1fr",
      },

      gridTemplateRows: {
        "4-h-fixed":
          "minmax(8rem, 8rem) minmax(4rem, 4rem) repeat(3, minmax(10rem, 10rem))",
      },
    },
  },
  plugins: [],
};
