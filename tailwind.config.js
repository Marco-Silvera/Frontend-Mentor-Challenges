/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'selector',
  theme: {
    extend: {
      fontFamily: {
        'Young-Serif': ['Young Serif', 'serif'],
        'Outfit': ['Outfit', 'serif'],
        'Inter': ['Inter', 'serif'],
        'Figtree': ['Figtree', 'serif'],
        'Jakarta': ['Plus Jakarta Sans', 'serif']
      }
    },
  },
  plugins: [],
}