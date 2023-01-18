/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },

      gridTemplateColumns: {
        "auto-1fr": "auto 1fr",
      },

      gridTemplateRows: {
        "4-h-fixed": "minmax(200px, 200px) repeat(3, minmax(160px, 160px))",
      },
    },

    colors: {
      primary: colors.sky,
    },
  },
  plugins: [],
};
