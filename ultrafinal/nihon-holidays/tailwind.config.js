/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      colors: {
        // --- CUSTOM EARTHY PALETTE ---
        // Source: https://colorhunt.co/palette/1b211a6281418bae66ebd5ab
        
        primary: {
          50:  '#f4f9f0',
          100: '#e2ecd6',
          200: '#c5dcb3',
          300: '#a3c480',
          400: '#8bae66', // <--- Your Light Green (Accents)
          500: '#628141', // <--- Your Main Green (Buttons/Highlights)
          600: '#4b6630', // Hover Darker Green
          700: '#3b4f27',
          800: '#314023',
          900: '#29351f',
        },
        
        secondary: {
          500: '#5a6b5c',
          800: '#2d362c',
          900: '#1b211a', // <--- Your Deep Black-Green (Text & Dark BG)
          950: '#121611', // Slightly darker for gradients
        },
        
        // Mapping your Beige to the background utility
        slate: {
            ...colors.stone, // Keep default stone grays for borders
            50: '#ebd5ab',   // <--- Your Beige (Main Page Background)
            100: '#e3cca3',  // Slightly darker beige for cards/sections
            900: '#1b211a',  // <--- Ensure text matches the dark green theme
        }
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}