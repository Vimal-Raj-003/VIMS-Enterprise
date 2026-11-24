/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './contexts/**/*.{ts,tsx}',
    './hooks/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        poppins: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        obsidian: '#09090B',
        graphite: '#111114',
        alabaster: '#FAF8F5',
        vermilion: {
          DEFAULT: '#E8451E',
          hover: '#D93814',
          soft: '#FF6B47',
        },
        champagne: {
          DEFAULT: '#D4AF37',
          soft: '#E8CA6A',
          dark: '#B8860B',
        },
        clinical: {
          DEFAULT: '#10B981',
          dark: '#059669',
        },
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'orbit-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        marquee: 'marquee 28s linear infinite',
        'float-slow': 'float-slow 5.5s ease-in-out infinite',
        'orbit-spin': 'orbit-spin 26s linear infinite',
      },
    },
  },
  plugins: [],
};
