/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./public/profile.html", "./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage : {
        'bali': "url('../img/bali.jpg')",
        'chicago': "url('../img/chicago.jpg')",
        'europe': "url('../img/europe.jpg')",
        'europe2': "url('../img/Europe2.jpg')",
        'iceland': "url('../img/iceland.jpg')",
        'LA': "url('../img/LA.jpg')",
        'miami': "url('../img/miami.jpg')",
        'new_york': "url('../img/new_york.jpg')",
        'norway': "url('../img/norway.jpg')",
        'sanFrancisco': "url('../img/sanFrancisco.jpg')",
        'sanFranciscoDesktop': "url('../img/sanFranciscoDesktop.jpg')",
        'seattle': "url('../img/seattle.jpg')",
        'switzerland': "url('../img/switzerland.jpg')",
        'sydney': "url('../img/sydney.jpg')",
        'yosemite': "url('../img/yosemite.jpg')",
        'cartagena': "url('../img/Cartagena.jpg')",
        'san_andres': "url('../img/SanAndres.jpg')",
        'cancun': "url('../img/Cancun.jpg')",
        'rio': "url('../img/Rio_de_Janeiro.jpg')"

      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'primaryBg': '#CC2D4A',
        'secondary': '#8FA206',
        'terciary': '#61AEC9',
        'fourth': '#F9FAFB'
        
      }),
      textColor:{
        'primary': '#CC2D4A',
        'secondary': '#8FA206',
        'terciary': '#61AEC9',
        'fourth': '#4525d4 ',
        'fifth': '#A8A29E'
      },
      fontFamily:{
        Montserrat:['Montserrat', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

