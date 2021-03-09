module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.1em',
      widest: '.13em',
    },
    extend: {
      animation: {
        'pulse-slow': 'pulse 3.5s linear infinite',
      }
    }
  },
  variants: {
    extend: {      transform: ['responsive']},
  },
  plugins: [],
}
