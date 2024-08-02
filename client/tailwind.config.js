/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/components/**/*.{html,js}',
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
        "50":"#D7F3FF",
        "100":"#e0f2fe",
        "200":"#bae6fd",
        "300":"#7dd3fc",
        "400":"#38bdf8",
        "500":"#0ea5e9",
        "600":"#0284c7",
        "700":"#0369a1",
        "800":"#075985",
        "900":"#0c4a6e",
        "950":"#082f49"
        },

      },

      backgroundImage: {
        'angled-gradient': 'linear-gradient(45deg, #bae6fd, #D7F3FF)',
      },
    },
    fontFamily: {
      'body': [
    'Montserrat', 
    'ui-sans-serif', 
    'system-ui', 
    '-apple-system', 
    'system-ui', 
    'Segoe UI', 
    'Roboto', 
    'Helvetica Neue', 
    'Arial', 
    'Noto Sans', 
    'sans-serif', 
    'Apple Color Emoji', 
    'Segoe UI Emoji', 
    'Segoe UI Symbol', 
    'Noto Color Emoji'
  ],
      'sans': [
    'Montserrat', 
    'ui-sans-serif', 
    'system-ui', 
    '-apple-system', 
    'system-ui', 
    'Segoe UI', 
    'Roboto', 
    'Helvetica Neue', 
    'Arial', 
    'Noto Sans', 
    'sans-serif', 
    'Apple Color Emoji', 
    'Segoe UI Emoji', 
    'Segoe UI Symbol', 
    'Noto Color Emoji'
  ]
    }
  },
  plugins: [
    require('tailwindcss-bg-patterns')
  ],
}