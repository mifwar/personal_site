/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Lato: ["Lato", "sans-serif"],
      Poppins: ["Poppins", "sans-serif"],
      Mono: ["Roboto Mono", "sans-serif"],
    },
    extend: {
      screens: {
        xs: { max: "640px" },
        x2s: { max: "456px" },
      },
    },
  },

  plugins: [],
};
