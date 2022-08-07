/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        blue: '#22d3ee',
        dark: '#0f172a',
        second: '#94a3b8',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
};
