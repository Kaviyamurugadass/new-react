/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ['Quicksand', 'sans-serif'],
        handjet: ['Handjet', 'cursive'],
      },
      colors: {
        'game-gradient-from': '#186a5e',
        'game-gradient-to': '#053339',
        'game-gradient-from-dark': '#0b201d',
        'game-gradient-to-dark': '#021619',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
  important: true,
}
