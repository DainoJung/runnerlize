/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3449FF',
        secondary: '#00B894',
        warning: '#FF9F43',
        'bg-default': '#F9FAFC',
        'gray-100': '#F1F1F1',
        'gray-500': '#A0AEC0',
        success: '#2ECC71',
        danger: '#FF6B6B',
      },
      fontFamily: {
        sans: ['Noto Sans KR', 'sans-serif'],
        display: ['Pacifico', 'cursive'],
        mono: ['Inter', 'monospace'],
      },
      fontSize: {
        'heading-xl': ['24px', { lineHeight: '1.2', fontWeight: '700' }],
        'heading-l': ['20px', { lineHeight: '1.2', fontWeight: '700' }],
        'heading-m': ['16px', { lineHeight: '1.2', fontWeight: '600' }],
        'body': ['14px', { lineHeight: '1.5', fontWeight: '400' }],
        'caption': ['12px', { lineHeight: '1.4', fontWeight: '400' }],
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
      },
      borderRadius: {
        'none': '0px',
        'sm': '4px',
        DEFAULT: '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '20px',
        '2xl': '24px',
        '3xl': '32px',
        'full': '9999px',
        'button': '8px',
        'card': '16px',
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0,0,0,0.05)',
        'card-hover': '0 4px 12px rgba(0,0,0,0.1)',
      },
    },
  },
  plugins: [],
} 