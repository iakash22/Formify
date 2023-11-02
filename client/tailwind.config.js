/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode : 'class',
  theme: {
    extend: {
      fontFamily : {
        Nunito : ['Nunito'],
        Roboto : ['Roboto'],
      },
      colors : {
        greenBg : '#05CB0D',
        greenText1 : "#05E20E",
        greenText2 : "#2ECC00",
        grayLight : "#393e46",
        grayDark : "#899B9B",
        myblack : "#0D0D0D",
      },
      boxShadow : {
        customshadow1 : "-10px -10px 30px 4px rgba(0,0,0,0.1), 10px 10px 30px 4px rgba(45,78,255,0.15)",
        customshadow2 : "0 3px 10px rgb(0,0,0,0.2)",

      }
    },
  },
  plugins: [],
}

