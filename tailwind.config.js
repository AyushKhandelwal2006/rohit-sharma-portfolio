/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0066FF",
        secondary: "#FFD60A",
        accent: "#FF006E",
        lime: "#39FF14",
        bg: "#FFF8E7",
        black: "#000000"
      },
      boxShadow: {
        brutal: "6px 6px 0px #000"
      },
      borderWidth: {
        brutal: "4px"
      }
    }
  },
  plugins: []
};
