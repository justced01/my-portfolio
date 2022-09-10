/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    fontFamily: {
      'primary': ['Titillium Web', 'sans-serif'],
      'secondary': ['Fira Code', 'sans-serif'],
      'header': ['Inter', 'sans-serif'],
    },
    colors: {
      'primary': '#dbe8d4',
      'secondary': '#73cca8',
      'body': '#242A37',
    },
    screens: {
      'sm': {'max': '425px'},
      'md': '768px',
      'lg': '1024px',
    },
    extend: {},
  },
  plugins: [],
}
