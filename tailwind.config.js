/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#d4af37",
        golddark: "#b8962e",
        dark: "#0f0f0f",
      },
    },
  },
  plugins: [],
}
