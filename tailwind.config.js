/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
     lg: '993px',
     md:'800px'
    },
    extend: 
    {
      backgroundImage: 
      {
        'hero-pattern': "url('/src/img/ice-hero.jpg')",
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'bricolage': ['Bricolage', 'sans-serif']
      },
    },
  },
  plugins: [],
}