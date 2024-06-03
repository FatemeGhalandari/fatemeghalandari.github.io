/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        mountains: "url('/mountains.png')",
        planets: "url('/planets.png')",
        stars: "url('/stars.png')",
        bg:"url('/bg.jpg')",
        star:"url('/star.jpg')",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
        manrope: ["Manrope", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        merriweather: ["Merriweather", "serif"],
      },
    },
  },
  plugins: [],
};
