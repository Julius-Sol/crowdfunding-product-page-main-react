/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'commissioner': ['Commissioner', 'sans-serif'],
      },
      colors: {
        'Moderate-cyan': 'hsl(176, 50%, 47%)',
        'Dark-cyan': 'hsl(176, 72%, 28%)',
        'Dark-gray': 'hsl(0, 0%, 48%)',
      },
    },
  },
  plugins: [],
}
