/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        mountains: "url('/mountains.png')",
        planets: "url('/planets.png')",
        stars: "url('/stars.png')",
      },
    },
  },
  plugins: [],
};
