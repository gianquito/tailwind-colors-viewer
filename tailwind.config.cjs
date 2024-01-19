/** @type {import('tailwindcss').Config} */
module.exports = {
  content:["./src/**/*.{js,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('./node_modules/tailwind-percentage-heights-plugin')(),
  ]
}
