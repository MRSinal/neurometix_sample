/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      fontFamily : {
        futura: 'Futura, sans-serif',
        josefin: 'Josefin, sans-serif',
        futura_light: 'FuturaLight, sans-serif',
        josefin_light: 'JosefinLight, sans-serif',
      },
      colors : {
        'title' : '#fff8de',
        'custom' : '#c68f20',

      },

    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '7rem',
      '5_8': '5.8rem'
    },
  },
  plugins: [],
}
