import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Existing tokens (kept — used across service/portfolio/about pages)
        primary: {
          navy: '#0F172A',
          blue: '#3B82F6',
        },
        secondary: {
          cyan: '#06B6D4',
        },
        success: '#10B981',
        warning: '#F59E0B',
        neutral: {
          dark: '#1E293B',
          light: '#F8FAFC',
        },
        text: {
          gray: '#64748B',
        },
        // Design-system tokens ("Kinetic Precision")
        'slate-deep': '#0F172A',
        'electric-blue': '#3B82F6',
        'vibrant-cyan': '#06B6D4',
        surface: '#F8F9FF',
        'surface-light': '#F8FAFC',
        'text-main': '#1E293B',
        'outline-variant': '#C6C6CD',
      },
      fontFamily: {
        heading: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      spacing: {
        'section-gap': '8rem',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(-15px) translateX(5px)' },
        },
        'float-sm': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        'float-slow': 'float 7s ease-in-out infinite',
        'float-delayed': 'float 9s ease-in-out 1.5s infinite',
        'float-sm': 'float-sm 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config
