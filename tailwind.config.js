/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#EEC52A',
          50: '#EEC52A10',
          100: '#EEC52A20',
          500: '#EEC52A',
          600: '#EEC52A',
          700: '#EEC52A',
        },
        secondary: {
          DEFAULT: '#91BD57',
          500: '#91BD57',
        },
      },
    },
  },
  plugins: [],
};