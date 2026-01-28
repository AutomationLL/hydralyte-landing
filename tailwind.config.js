/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hydra: {
          orange: '#F37021',
          blue: '#00AEEF',
          lightBlue: '#E6F7FE', // Very light blue for backgrounds
          dark: '#1A1A1A',
        }
      },
      fontFamily: {
        sans: ['IBM Plex Sans Arabic', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
