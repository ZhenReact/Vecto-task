module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', 
  ],
 
  theme: {
    extend: {
      fontFamily: {
        tajawal: ['Tajawal', 'sans-serif'],
      },
    },
  },
   plugins: [
        require('tailwind-scrollbar-hide'),
  ],
};