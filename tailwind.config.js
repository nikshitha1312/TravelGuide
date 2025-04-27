/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Uncut Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: '#4B6BFB',
        secondary: '#7B92FF',
        dark: {
          DEFAULT: '#1E1E1E',
          lighter: '#2D2D2D',
        },
      },
    },
  },
  plugins: [],
} 