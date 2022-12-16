/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    container: {
      center: true
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
