/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    container: {
      center: true
    },
    screens: {
      md: '980px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1700px'
    },
    colors: {
      semiwhite: '#DBE2EA',
      bluestive: '#7C9CBF'
    },
    borderRadius: {
      default: '6px',
      full: '9999px'
    },

    extend: {}
  },
  plugins: []
};
