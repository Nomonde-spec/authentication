const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './hooks/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1.25rem',
      screens: { '2xl': '1280px' },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        success: {
          DEFAULT: 'hsl(var(--success))',
          foreground: 'hsl(var(--success-foreground))',
        },
        warning: {
          DEFAULT: 'hsl(var(--warning))',
          foreground: 'hsl(var(--warning-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        '2xs': ['0.6875rem', { lineHeight: '1rem' }],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'fade-out': {
          from: { opacity: '1' },
          to: { opacity: '0' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        'shine': {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        'blob': {
          '0%, 100%': { transform: 'translate(0,0) scale(1)' },
          '33%': { transform: 'translate(30px,-30px) scale(1.05)' },
          '66%': { transform: 'translate(-20px,20px) scale(0.95)' },
        },
        'caret-blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.4s ease-out',
        'fade-out': 'fade-out 0.4s ease-out',
        shimmer: 'shimmer 2s linear infinite',
        shine: 'shine 2.5s linear infinite',
        'pulse-soft': 'pulse-soft 2.4s ease-in-out infinite',
        blob: 'blob 20s ease-in-out infinite',
        'caret-blink': 'caret-blink 1s ease-in-out infinite',
      },
      boxShadow: {
        soft: '0 8px 30px rgba(2,6,23,0.06)',
        'soft-lg': '0 25px 50px -12px rgba(2,6,23,0.10)',
        'inner-glow': 'inset 0 1px 0 0 rgba(255,255,255,0.04)',
        'glow-primary': '0 0 0 1px hsl(var(--primary)/0.4), 0 8px 30px -8px hsl(var(--primary)/0.5)',
      },
      backgroundImage: {
        'grid-pattern':
          "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M0 0h1v40H0zM39 0h1v40h-1zM0 0h40v1H0zM0 39h40v1H0z' fill='currentColor' fill-opacity='0.06'/%3E%3C/svg%3E\")",
        'dot-pattern':
          "radial-gradient(circle at 1px 1px, hsl(var(--foreground)/0.10) 1px, transparent 0)",
        'gradient-radial': 'radial-gradient(ellipse at top, hsl(var(--primary)/0.18), transparent 60%)',
        'mesh-light':
          'radial-gradient(at 0% 0%, hsl(var(--primary)/0.18) 0px, transparent 50%), radial-gradient(at 100% 0%, hsl(var(--accent)/0.15) 0px, transparent 50%), radial-gradient(at 50% 100%, hsl(var(--primary)/0.10) 0px, transparent 50%)',
        'mesh-dark':
          'radial-gradient(at 0% 0%, hsl(220 90% 60% / 0.20) 0px, transparent 50%), radial-gradient(at 100% 0%, hsl(280 80% 65% / 0.18) 0px, transparent 50%), radial-gradient(at 50% 100%, hsl(195 90% 55% / 0.16) 0px, transparent 50%)',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, hsl(var(--primary)) 0deg, hsl(var(--accent)) 120deg, hsl(var(--primary)) 240deg, hsl(var(--accent)) 360deg)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};