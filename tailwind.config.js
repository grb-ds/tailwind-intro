module.exports = {
  purge: ['./**/*.html', './**/*.js',],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

const colors = require('tailwindcss/colors');

/*module.exports = {
  theme: {
    colors: {
      // Build your palette here
      emerald: colors.emerald,
      yellow: colors.amber,
    },
  },
};*/

module.exports = {
  theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
        'indigo-lighter': '#b3bcf5',
        'indigo-dark': '#202e78',
      },
    },
  },
};
