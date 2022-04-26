module.exports = {
  experimental: {
    optimizeUniversalDefaults: true
  },
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
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      colors:{
        blue: 'hsl(210, 100%, 50%)',
        green: 'hsl(120, 100%, 50%)',
        red: 'hsl(0, 100%, 50%)',
        yellow: 'hsl(60, 100%, 50%)',
        purple: 'hsl(300, 100%, 50%)',
        orange: 'hsl(30, 100%, 50%)',
        teal: 'hsl(180, 100%, 50%)',
        gray: 'hsl(0, 0%, 50%)',
        navy: 'hsl(240, 100%, 50%)',
        amber: 'hsl(30, 100%, 50%)',
        indigo: 'hsl(240, 100%, 50%)',
        cyan: 'hsl(180, 100%, 50%)',
        pink: 'hsl(330, 100%, 50%)',
        lime: 'hsl(120, 100%, 50%)',
        brown: 'hsl(30, 100%, 50%)',
        bluegray: 'hsl(210, 100%, 50%)',
        black: 'hsl(0, 0%, 0%)',
        white: 'hsl(0, 0%, 100%)',
      },
    },
  },
  plugins: [],
};