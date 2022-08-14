module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/widgets/**/*.{js,ts,jsx,tsx}',
    './src/layouts/**/*.{js,ts,jsx,tsx}',
    './src/utils/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      'wide': '991.98px',
    },
    extend: {
        transitionProperty: {
            height: 'height'
        },
        keyframes: {
          open: {
            '0%': { 
             height: '0px'
            },
            '100%': { height: '383px' 
            },
          },
          opac:{
            '0%':{
              opacity:0
            },
            '100%':{
              opacity:1
            }
          }
        },
        animation: {
          open: 'open 0.5s linear forwards',
          opac:'opac 0.7s linear forwards'
        }
    }
  },
  plugins: [],
}
