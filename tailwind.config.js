/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        orange: {
          50:  '#fff7ed',
          100: '#ffedd5',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
        },
        dark: {
          bg:      '#30302e', // main background
          surface: '#3a3a37', // cards, nav
          raised:  '#444441', // elevated elements
          border:  '#4a4a47', // borders/dividers
          muted:   '#5e5e5a', // subtle text
        },
      },
      fontFamily: {
        serif: ['"DM Serif Display"', 'serif'],
        sans:  ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
