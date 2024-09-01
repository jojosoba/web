/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["SVBasicManual", "Mali", "sans-serif"],
        serif: ["Mali"],
      },
      colors: {
        context: "var(--context-color)",
        primary: {
          50: "#f4f6f7",
          100: "#e2e8eb",
          200: "#c9d4d8",
          300: "#a3b5bd",
          400: "#768f9a",
          500: "#627d8a",
          600: "#4e616c",
          700: "#43525b",
          800: "#3c464e",
          900: "#363e43",
          950: "#21262b",
        },
        secondary: {
          50: "#fef6ee",
          100: "#fcead8",
          200: "#f8d0b0",
          300: "#f3af7e",
          400: "#ed844a",
          500: "#e86224",
          600: "#da4b1c",
          700: "#b53819",
          800: "#902e1c",
          900: "#74291a",
          950: "#3f120b",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
