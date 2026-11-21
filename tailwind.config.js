/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hotel: {
          bg: '#F3EBDD', // Warm beige / ivory
          dark: '#171717', // Deep black
          charcoal: '#222222',
          card: '#FAF6EE',
          border: '#E3D7C5',
          gold: '#C5A059',
          goldLight: '#E8D2A6',
          muted: '#6B655B',
          accent: '#A07D3E'
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif']
      },
      boxShadow: {
        'luxury': '0 12px 32px -8px rgba(23, 23, 23, 0.15)',
        'luxury-lg': '0 20px 40px -12px rgba(23, 23, 23, 0.22)',
        'inner-subtle': 'inset 0 1px 2px rgba(255, 255, 255, 0.15)'
      }
    },
  },
  plugins: [],
}
