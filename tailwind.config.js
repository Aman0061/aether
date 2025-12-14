/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Cormorant Garamond', 'serif'],
        'sans': ['Manrope', 'sans-serif'],
      },
      colors: {
        'theme-yellow': '#FAC638',
        'theme-green': '#019863',
        'theme-black': '#0D1C0D',
      },
    },
  },
  plugins: [],
}

