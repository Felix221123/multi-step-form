/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{html,js}',
    './pages/**/*.{html,js}',
    'index.html',
    'js/*',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          marineBlue: "hsl(213, 96%, 18%)",
          purplishBlue: 'hsl(243, 100%, 62%)',
          pastelBlue: 'hsl(228, 100%, 84%)',
          lightblue: 'hsl(206, 94%, 87%)',
          strawBerryRed : 'hsl(354, 84%, 57%)'
        },
        neutral: {
          coolGray: 'hsl(231, 11%, 63%)',
          lightGray: 'hsl(229, 24%, 87%)',
          magnolia: 'hsl(217, 100%, 97%)',
          alabaster: 'hsl(231, 100%, 99%)',
          white : 'hsl(0, 0%, 100%)'
        }
      },
      backgroundImage : {
        "mobileSideBar": "url('assets/images/bg-sidebar-mobile.svg')",
        "desktopSideBar" : "url('assets/images/bg-sidebar-desktop.svg')",
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      }
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ]
}

