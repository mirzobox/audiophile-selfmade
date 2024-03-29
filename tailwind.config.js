/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
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
        75: "rgba(255,255,255,0.75)",
        50: "rgba(255,255,255,0.5)",
        20: "rgba(255,255,255,0.2)",
      },
      dark: {
        100: "#000000",
        50: "rgba(0,0,0,0.5)",
        40: "rgba(0,0,0,0.4)",
        25: "rgba(0,0,0,0.25)",
      },
      "light-gray": "#fafafa",
      "light-orange": "#fbaf85",
      "input-border": "#cfcfcf",
    },
    extend: {
      backgroundImage: {
        arrow: "url('./assets/shared/desktop/icon-arrow-right.svg')",
        "mobile-header-bg": "url('./assets/home/mobile/image-header.jpg')",
        "tablet-header-bg": "url('./assets/home/tablet/image-header.jpg')",
        "desktop-header-bg": "url('./assets/home/desktop/image-hero.jpg')",
        "circles-bg": "url('./assets/home/desktop/pattern-circles.svg')",
      },
    },
  },
  plugins: [require("daisyui")],
};
