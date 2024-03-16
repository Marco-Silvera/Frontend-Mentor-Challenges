/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'Young-Serif': ['Young Serif', 'serif'],
        'Outfit': ['Outfit', 'serif'],
        'Inter': ['Inter', 'serif'],
      }
    },
  },
  plugins: [],
}