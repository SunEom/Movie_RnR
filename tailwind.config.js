const colors = require('tailwindcss/colors');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      beige: { DEFAULT: '#d7ccc8', dark: '#a69b97' },
      gray: {
        DEFAULT: '#E1E2E1',
        dark: '#9e9e9e',
        light: '#e0e0e0',
        darker: '#616161',
      },
      white: {
        DEFAULT: '#FFFFFF',
      },
      brown: {
        DEFAULT: '#8d6e63',
      },
      black: {
        DEFAULT: '#000000',
        light: '#212121',
        lighter: '#484848',
      },
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      transparent: 'transparent',
      current: 'currentColor',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
