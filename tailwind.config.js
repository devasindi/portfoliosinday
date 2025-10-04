/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",   
    "./pages/**/*.{js,ts,jsx,tsx}", 
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Text
        first : "#4C5270",          
        second : "#4a6fa5", 

        // Brand / gradient
        primary: "#003060",       
        secondary: "#68BBE3",     

        // Background
        main : "#edf7ff",         
        card : "#a5d9ff",     

        // Border
        line: "#cddbe9",
      },
    },
  },
  plugins: [],
}