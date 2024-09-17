/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    colors: {
      'charcoal': ['#334155'],
      'black': ['#191919'],
      'white': ['#ffffff'],
      'gloden': ['#fee198'],
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
      'roboto': ['Roboto', 'sans-serif']
    },
  },
  plugins: [],
}

