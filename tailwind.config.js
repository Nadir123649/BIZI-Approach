/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        float: 'float 3s ease-in-out infinite', 
        right: 'right 3s ease-in-out infinite', 
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        right: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-20px)' },
        },
      },
    },
  },
  plugins: [],
};