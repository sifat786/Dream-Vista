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
      'sm': '360px',
      'md': '700px',
      'lg': '1140px',
    },

    animatedSettings: {
      animatedSpeed: 1000,
      heartBeatSpeed: 500,
      hingeSpeed: 2000,
      bounceInSpeed: 750,
      bounceOutSpeed: 750,
      animationDelaySpeed: 500,
      classes: ['bounce', 'heartBeat','animate__backInDown']
    },

    extend: {},
  },


  plugins: [
    require("daisyui"),
    require('tailwindcss-animatecss'),
  ]
  

});