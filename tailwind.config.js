/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html"],
  darkMode:"media",
  theme: {
    extend: {
      inset:{
        "widthCalc" : "calc(50% - 85px) "
      },
      boxShadow : {
        "articleShadow" : '-3px 3px 3px 0px rgba(0,0,0,0.1)',
        "articleShadow_dark" : '-3px 3px 3px 0px rgba(0,0,0,0.5)'
      },
      colors:{
        "hospitalColor" : 'rgb(188, 190, 192)',
        "socialInfoColor" : 'rgb(129, 133, 136)'
      }
    },
    screens:{
      "mobile":"340px",
      "desktop":"1000px"
    }
  },
  plugins: [],
}

