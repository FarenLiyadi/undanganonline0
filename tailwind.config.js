/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        xl: '1200px'
      }
    },
    extend: {
      fontFamily: {
        abeezee: ['abeezee', 'serif'],
        gabriola: ['Gabriola', 'serif'],
        maigre: ['Maigre', 'serif'],
        vintage: ['VintageHeirloom', 'serif'],
        arima: ['Arima', 'serif'],
        arial: ['Arial', 'serif'],
        roboto: ['Roboto', 'sans-serif'],
        robotoslab: ['Roboto Slab', 'serif'],
        playfair: ['Playfair Display', 'serif']
      }
    }
  },
  plugins: []
};
