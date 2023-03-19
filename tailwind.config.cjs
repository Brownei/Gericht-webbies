/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
      fontFamily: {
        san: [
          '"Cormorant Upright"',
        ],
        serif: [
          '"Open Sans"'
        ]
      },
    extend: {
      colors: {
        lightBrown: '#DCCA87',
        darkerBlack: '#040404',
        lightBlack : '#272727',
      } 
    },
  },
  plugins: [],
}