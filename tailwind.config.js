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
      gridTemplateColumns: {
        "auto-1fr": "auto 1fr",
      },

      gridTemplateRows: {
        "4-h-fixed":
          "minmax(8rem, 8rem) minmax(4rem, 4rem) repeat(3, minmax(10rem, 10rem))",
      },
    },

    colors: {
      primary: {
        100: "rgb(var(--color-primary-100))",
        200: "rgb(var(--color-primary-200))",
        300: "rgb(var(--color-primary-300))",
        400: "rgb(var(--color-primary-400))",
        500: "rgb(var(--color-primary-500))",
        600: "rgb(var(--color-primary-600))",
        700: "rgb(var(--color-primary-700))",
        800: "rgb(var(--color-primary-800))",
        900: "rgb(var(--color-primary-900))",
      },
      temp_range: {
        1: "rgb(var(--color-temp-1))",
        2: "rgb(var(--color-temp-2))",
        3: "rgb(var(--color-temp-3))",
        4: "rgb(var(--color-temp-4))",
        5: "rgb(var(--color-temp-5))",
        6: "rgb(var(--color-temp-6))",
        7: "rgb(var(--color-temp-7))",
        8: "rgb(var(--color-temp-8))",
        9: "rgb(var(--color-temp-9))",
        10: "rgb(var(--color-temp-10))",
        11: "rgb(var(--color-temp-11))",
        12: "rgb(var(--color-temp-12))",
        13: "rgb(var(--color-temp-13))",
        14: "rgb(var(--color-temp-14))",
        15: "rgb(var(--color-temp-15))",
      },
    },
  },
  plugins: [],
};
