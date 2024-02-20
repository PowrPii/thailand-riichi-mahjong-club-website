/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      height : {
        '8vh' : '8vh',
        '9/10' : '90vh',
      },
      backgroundImage : {
        'about-banner' : 'url("../images/banner.JPG")',
      }
    },
  },
  plugins: [],
}

