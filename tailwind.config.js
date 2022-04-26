module.exports = {
  mode: 'jit',
  content: [
    './*.{html,htm,php,rb,py,js}',
    './**/*.{html,htm,php,rb,py,js}',
    './**/**/*.{html,htm,php,rb,py,js}',
    './**/**/**/*.{html,htm,php,rb,py,js}',
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors:{
        gray: {
          '400': 'hsl(210,1%,59.2%)',
          '500': 'hsl(0,0%,40%)',
          '700': 'hsl(0,0%,20.8%)',
          '800': 'hsl(0,0%,14.9%)',
          '900': 'hsl(180,2.1%,9.2%)',
        },
      },
    },
  },
  plugins: [],
};