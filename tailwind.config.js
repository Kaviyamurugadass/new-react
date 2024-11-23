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
        'game': {
          'primary': '#54a399',
          'primary-hover': '#3c8379',
          'text': '#c1e2dd',
          'text-light': '#d1f0ec',
          'text-dark': '#061e1a',
          'input-bg': '#192f2b',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
  important: true,
}
