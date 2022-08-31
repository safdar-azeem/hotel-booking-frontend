/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bodyBG:{
          200:'#f8fafc'
        },
        btnBG:{
          900:'#111827'
        }
      }
    },
  },
  plugins: [],
}
