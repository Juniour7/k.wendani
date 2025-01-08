/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'body': ['Ubuntu'],
        'title': ["Kumbh Sans", 'sans-serif'],
        'media': ['Aladin'],
        'About': ['Pacifico']
      },
      colors: {
        Hero: {
        50: '#daffff',
        100: '#aff9ff',
        200: '#80f4ff',
        300: '#52f0fe',
        400: '#31eafe',
        500: '#24d1e5',
        600: '#12a3b2',
        700: '#007580',
        800: '#00464e',
        900: '#00191d',
        },
        Main: {
          50: '#fff7dc',
          100: '#fce6b1',
          200: '#f8d685',
          300: '#f4c556',
          400: '#f0b528',
          500: '#d79b0f',
          600: '#a77907',
          700: '#785603',
          800: '#493400',
          900: '#1c1000',
        }
      }
    },
  },
  plugins: [],
}

