/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    fontFamily: {
      manrope: ["Manrope", "Arial", "sans-serif"],
    },
    colors: {
      transparent: "transparent",
      orange: "#d87d4a",
      black: "#101010",
      dark: "#000000",
      gray: "#f1f1f1",
      white: {
        100: "#ffffff",
        50: "rgba(255,255,255,0.5)",
        20: "rgba(255,255,255,0.2)",
      },
      dark: {
        100: "#000000",
        50: "rgba(0,0,0,0.5)",
        40: "rgba(0,0,0,0.4)",
      },
      "light-gray": "#fafafa",
      "light-orange": "#fbaf85",
      "input-border": "#cfcfcf",
    },
    extend: {
      backgroundImage: {
        arrow: "url('./assets/shared/desktop/icon-arrow-right.svg')",
      },
    },
  },
  plugins: [],
};
