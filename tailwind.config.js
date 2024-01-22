/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        '0d': '#0D0D0D',
        'bg': '#EDEDED',
        'c': '#25A1D2',
        'm': '#CF2485',
        'y': '#E8DF31',
        'k': '#221E1F',
      },
    },
  },
  plugins: [],
}

