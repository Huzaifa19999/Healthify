/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './index.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: '#384628',
        'primary-hover': '#2A361E',
        'primary-dark': '#122016',
        'primary-light': '#EEF3EA',
        'primary-border': '#D8E2D5',
        accent: '#4C6134',
        'accent-light': '#EBF1E6',
        'bg-light': '#F3F6F1',
        'bg-card': '#FFFFFF',
        'bg-alt': '#F8FAF6',
        'text-dark': '#1D261C',
        'text-primary': '#2B382D',
        'text-secondary': '#5A6B5F',
        'text-light': '#85968A',
        kicker: '#485C31',
        'star-gold': '#EBA525',
        'border-light': '#E2E8DF',
        'border-hover': '#BCCBC0',
        whatsapp: '#25D366',
      },
      fontFamily: {
        serif: ["'Playfair Display'", 'Georgia', 'serif'],
        sans: ["'Plus Jakarta Sans'", '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        script: ["'Caveat'", 'cursive'],
      },
      maxWidth: {
        container: '1240px',
      },
    },
  },
  plugins: [],
};
