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
      },
    },
  },
  plugins: [],
}
export default config
