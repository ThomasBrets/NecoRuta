/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: "DM Serif Display",
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1140px',
    },
    extend: {
      colors:{
        primary: "#3e4095",
        hover: "#5153a0",
        secondHover:"#b2b3d5",
        navHover:"#a3adb5"
      }
    },
    backgroundImage:{
      oficina:"url('./assets/ofi/ofi1.jpg')",
      camiones:"url('./assets/img/11.jpg')"
    },
    zoom: {
      '90': '90%',
    },
  },
  plugins: [],
}
