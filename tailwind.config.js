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
        '4.5':'1.125rem',
        '21':'5.125rem',
        '28%':'28%'
      },
      width:{
        '8.5':'2.1875rem',
        '21':'5.125rem',
        '28%':'28%'
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
      borderRadius: {
        5:'0.3125rem',
      },
      borderWidth: {
        3:'0.1875rem'
      },
      fill:{
        primary: 'rgba(27, 84, 228, 0.24)',
        
      },
      margin: {
        '13':'3.125rem',
        '90' :'5.625rem'
      },
      inset: {
       '1%': '1%',
       '5%': '5%',
      },
      translate: {
        '4.5':'1.0625rem'
      },
      boxShadow: {
        'primary-shadow': '0px 10px 20px -10px #4361ee',
        'secondry-shadow': '0px 10px 20px -10px #757575',
      },
      backgroundImage: theme => ({
        'authHero': "url('./assets/authHero.webp')",
       }),
       backgroundSize: {
         '75%':'75%'
       }

    },
  },
  variants: {
    extend: {
      translate: ['active', 'group-hover'],
      backgroundColor: ['checked'],
      borderColor: ['checked'],
      borderWidth: ['hover','checked'],
    },
  },
  plugins: [],
}
