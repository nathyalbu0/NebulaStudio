/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nebula': {
          dark: '#0a0a0f',
          purple: '#b5c6f6',
          blue: '#6366f1',
          cyan: '#22d3ee',
          gray: '#94a3b8',
          light: '#f8fafc',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}