/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors:{
         orange:"#de4c14",
         black:"#030712",
         amber:"#fbbf24",
         green:"#22c55e",
         stone:"#fafaf9",
         dark:"#030712",
         gray:"#4b5563"
    },

    screens: {
      sm: '300px',
      md: '500px',
      lg: '700px',
      xl: '1000px',
      xxl: '1500px',

     
    },
    fontFamily:{
     serif :["Dancing Script" ,"serif"]
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('../Assets/bg1.jpg')",
        'restaurant-pic' : "url('../Assets/restaurant_bg.png')",
        'footer-pic' : "url('../Assets/footer.png')"
       
      }
    },
  },
  plugins: [],
}

