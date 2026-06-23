/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0C0C0C',
        accent: {
          light: '#D7E2EA',
        }
      },
      fontFamily: {
        sans: ['Kanit', 'sans-serif'],
      },
      animation: {
        'marquee-left': 'marquee-left var(--speed, 30s) linear infinite',
        'marquee-right': 'marquee-right var(--speed, 30s) linear infinite',
      },
      keyframes: {
        'marquee-left': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-33.333%)' },
        },
        'marquee-right': {
          '0%': { transform: 'translateX(-33.333%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [],
}
