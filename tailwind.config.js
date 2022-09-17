/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Syne: ['Syne', 'sans-serif'],
        Archivo: ['Archivo', 'sans-serif'],
        OxygenMono: ['Oxygen Mono', 'sans-serif']
      },
      colors: {
        midnight: "#0E1219",
      },
    },
  },
  plugins: [],
}
