const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minHeight: {
  '0': '0',
  '1/4': '25%',
  '1/2': '50%',
  '3/4': '75%',
  'full': '100%',
},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
        purple:{
          light: '#9575CD',
          DEFAUT: '#855CF8',
        },
  },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
