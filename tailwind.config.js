/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      spacing: {
        120: '480px'
      },
      borderWidth: {
        6: '6px'
      },
      colors: {
        customDarkGray: {
          300: '#444444',
          400: '#2b2a2a'
        }
      }
    }
  },
  plugins: []
}
