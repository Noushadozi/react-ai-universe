/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  themes: [
    {
      mytheme: {
      
"primary": "#6be0ce",
      
"secondary": "#a163d3",
      
"accent": "#410d82",
      
"neutral": "#29222A",
      
"base-100": "#23254D",
      
"info": "#8DB3E2",
      
"success": "#66DBB0",
      
"warning": "#FC9936",
      
"error": "#F22141",
      },
    },
  ],
  plugins: [require("daisyui")],
}

