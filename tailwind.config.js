/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        black100: '#131316',
        lightBlue:'#4891FF',
        lightGray:'#F5F5F5',
        lightBlueHover:'#1570F9',
        extraLightBlue:'#DBE7F9'
      },
      fontFamily:{
        poppins: ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}

