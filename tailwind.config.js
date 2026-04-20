/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#C9A96E',
          light: '#E8D5B0',
          dark: '#A88B4A',
          50: '#FBF7F0',
          100: '#F5EDD9',
          200: '#E8D5B0',
          300: '#D4BC8A',
          400: '#C9A96E',
          500: '#B8944F',
          600: '#A07D3A',
          700: '#7D6130',
          800: '#5A4522',
          900: '#382B15',
        },
        navy: {
          DEFAULT: '#1A1A2E',
          deep: '#0F0F1A',
          light: '#2D2D3A',
          50: '#E8E8EC',
          100: '#C5C5D0',
          200: '#9E9EB2',
          300: '#777794',
          400: '#595976',
          500: '#3B3B58',
          600: '#2D2D3A',
          700: '#1A1A2E',
          800: '#0F0F1A',
          900: '#08080E',
        },
        ivory: {
          DEFAULT: '#F5F0E8',
          dark: '#E8DFD0',
          light: '#FAF8F4',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(3rem, 8vw, 6rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'section': ['clamp(2rem, 5vw, 3.5rem)', { lineHeight: '1.1', letterSpacing: '-0.015em' }],
        'stat': ['clamp(3rem, 7vw, 6rem)', { lineHeight: '1', letterSpacing: '-0.03em' }],
        'subtitle': ['clamp(1rem, 2vw, 1.25rem)', { lineHeight: '1.6', letterSpacing: '0.02em' }],
      },
      animation: {
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient': 'gradient 8s ease infinite',
        'scroll-hint': 'scrollHint 2s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
      },
      keyframes: {
        shimmer: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        scrollHint: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '1' },
          '50%': { transform: 'translateY(12px)', opacity: '0.3' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gold-gradient': 'linear-gradient(135deg, #C9A96E 0%, #E8D5B0 50%, #C9A96E 100%)',
      },
    },
  },
  plugins: [],
}
