/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#F6F1E7',
        beige: '#E8DFCF',
        stone: '#C9BFA9',
        walnut: '#3B2418',
        charcoal: '#2B2118',
        bronze: '#8C6A3F',
        'bronze-dark': '#6E5230',
        olive: '#6B6A3A',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        eyebrow: ['11px', { lineHeight: '1.2', letterSpacing: '0.2em' }],
        'display-sm': ['clamp(2.25rem, 4vw, 3rem)', { lineHeight: '1.05' }],
        'display-md': ['clamp(2.75rem, 5.5vw, 4.5rem)', { lineHeight: '1.05' }],
        'display-lg': ['clamp(3rem, 7vw, 6.5rem)', { lineHeight: '1.02' }],
      },
      letterSpacing: {
        editorial: '0.18em',
      },
      transitionTimingFunction: {
        luxury: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      transitionDuration: {
        400: '400ms',
        600: '600ms',
        700: '700ms',
        800: '800ms',
      },
      maxWidth: {
        container: '1440px',
        prose: '720px',
      },
    },
  },
  plugins: [],
}
