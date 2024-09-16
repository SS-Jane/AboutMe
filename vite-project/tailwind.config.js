/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  darkMode: ["class"],
  content: [
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        roboto : ["Roboto", "sans-serif"],
        kanit : ["Kanit", "sans-serif"],
      },
      
    },
  },

  plugins: [
    daisyui,

  ],
};
