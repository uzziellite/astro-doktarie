/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{vue,astro,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
          sans: ['Poppins'],
      },
      colors:{
        'doktarie-blue':'#00409A'
      },
      height:{
        '128':'28rem',
        '138':'38rem'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio')
  ],
}
