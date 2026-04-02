/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0f0f0d',
        'bg-2': '#1a1a18',
        'card': '#1e1e1c',
        'card-2': '#242422',
        primary: '#f97316',
        'text-primary': '#f5f0ea',
        'text-secondary': '#c0c0b8',
        'text-muted': '#88887f',
        'text-faint': '#55554f',
        'border-faint': 'rgba(255,255,255,0.06)',
        'mira-color': '#2d6a4f',
        'mira-accent': '#4ade80',
        'kabir-color': '#1e3a5f',
        'kabir-accent': '#60a5fa',
        'myra-color': '#6b3fa0',
        'myra-accent': '#c084fc',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        site: '1100px',
      },
    },
  },
  plugins: [],
}
