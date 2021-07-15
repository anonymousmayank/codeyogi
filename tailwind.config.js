module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        primary: {
          100 : 'rgba(27, 84, 228, 0.24)',
          300 : '#4361ee'
        },
        accent: '#3b3f5c'
      },
      height:{
        '4.5':'1.125rem'
      },
      width:{
        '8.5':'2.1875rem'
      },
      fontFamily:{
        'primary':['Nunito', 'sans-serif']
      },
      fontSize:{
        '4.5xl':['2.5rem', '2.8rem'],
        '15':'0.9375rem'
      },
      letterSpacing: {
        'wide':'0.03125em',
        '0.125':'0.125rem'
      },
      fill:{
        primary: 'rgba(27, 84, 228, 0.24)',
        
      },
      margin: {
        '13':'3.125rem'
      }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
