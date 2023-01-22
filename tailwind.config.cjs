/** @type {import('tailwindcss').Config} */

/* Fuente */
const defaultTheme = require('tailwindcss/defaultTheme'); 

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Kumbh Sans', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        'rosa-claro' : '#F5DFCC',
        'rosa-oscuro' : '#9D7168',
        'color-verde' : '#999A83', 
        'color-gris' : '#D9D9D9',
        'gris-oscuro' : '#595959'   
      },
      
    },
  },
  plugins: [],
}

/*  Por si quiero modificar algunos estilos que vienen por defecto:fuentes bla bla*/
/* Content, le dice a tailwind a que archivos le vamos a hacer seguimiento  para que utilicen sus extenciones*/