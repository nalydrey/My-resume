/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {


    extend: {


      screens:{
        laptop: '1150px',
        tablet: '870px',
        mob: '680px',
        small: '500px'
      },
      borderRadius:{
        'half': '50%'
      },
      boxShadow:{
        'deep': '12px 12px 16px 0 rgba(0, 0, 0, 0.25), -1px -1px 1px 0 rgba(255, 255, 255, 0.3)',
        'medium': '7px 7px 16px 0 rgba(0, 0, 0, 0.25), -1px -1px 1px 0 rgba(255, 255, 255, 0.3)',
        'light': '3px 3px 5px 0 rgba(0, 0, 0, 0.25), -1px -1px 1px 0 rgba(255, 255, 255, 0.3)'
      },
      backgroundImage:{
        'klava': 'url(../src/assets/img/klaviatura.jpg)'
      },
      animation:{
        'spin': 'spin 5s linear infinite',
        'time': 'time 3s linear infinite'
      },
      keyframes: {
        time: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(-180deg)' },
        }
      }

    },
  },
  plugins: [],
}

