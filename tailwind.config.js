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
        'bg': '#EDEDED'
      },
      height: {
        "1/8": "12.5%",
        "7/8": "87.5%",
      }
    },
  },
  plugins: [],
}

