const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */

module.exports = withMT({

  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {

    fontFamily: {
      'robot': ['Roboto', 'sans-serif'],
    },
    
    container: {
      center: true,
    },
    screens: {
      'sm': '400px',
      'md': '600px',
      'lg': '1140px',
    },

    extend: {},
  },


  plugins: [require("daisyui")],

});