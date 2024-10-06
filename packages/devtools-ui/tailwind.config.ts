import containerQueriesPlugin from '@tailwindcss/container-queries'
import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  darkMode: ['selector', '[data-theme="dark"]'],
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: {
          100: 'hsl(var(--background-100))',
          200: 'hsl(var(--background-200))',
        },
        gray: {
          100: 'hsl(var(--gray-100))',
          200: 'hsl(var(--gray-200))',
          300: 'hsl(var(--gray-300))',
          400: 'hsl(var(--gray-400))',
          500: 'hsl(var(--gray-500))',
          600: 'hsl(var(--gray-600))',
          700: 'hsl(var(--gray-700))',
          800: 'hsl(var(--gray-800))',
          900: 'hsl(var(--gray-900))',
          1000: 'hsl(var(--gray-1000))',
        },
        blue: {
          100: 'hsl(var(--blue-100))',
          200: 'hsl(var(--blue-200))',
          300: 'hsl(var(--blue-300))',
          400: 'hsl(var(--blue-400))',
          500: 'hsl(var(--blue-500))',
          600: 'hsl(var(--blue-600))',
          700: 'hsl(var(--blue-700))',
          800: 'hsl(var(--blue-800))',
          900: 'hsl(var(--blue-900))',
          1000: 'hsl(var(--blue-1000))',
        },
        red: {
          100: 'hsl(var(--red-100))',
          200: 'hsl(var(--red-200))',
          300: 'hsl(var(--red-300))',
          400: 'hsl(var(--red-400))',
          500: 'hsl(var(--red-500))',
          600: 'hsl(var(--red-600))',
          700: 'hsl(var(--red-700))',
          800: 'hsl(var(--red-800))',
          900: 'hsl(var(--red-900))',
          1000: 'hsl(var(--red-1000))',
        },
        amber: {
          100: 'hsl(var(--amber-100))',
          200: 'hsl(var(--amber-200))',
          300: 'hsl(var(--amber-300))',
          400: 'hsl(var(--amber-400))',
          500: 'hsl(var(--amber-500))',
          600: 'hsl(var(--amber-600))',
          700: 'hsl(var(--amber-700))',
          800: 'hsl(var(--amber-800))',
          900: 'hsl(var(--amber-900))',
          1000: 'hsl(var(--amber-1000))',
        },
        green: {
          100: 'hsl(var(--green-100))',
          200: 'hsl(var(--green-200))',
          300: 'hsl(var(--green-300))',
          400: 'hsl(var(--green-400))',
          500: 'hsl(var(--green-500))',
          600: 'hsl(var(--green-600))',
          700: 'hsl(var(--green-700))',
          800: 'hsl(var(--green-800))',
          900: 'hsl(var(--green-900))',
          1000: 'hsl(var(--green-1000))',
        },
        teal: {
          100: 'hsl(var(--teal-100))',
          200: 'hsl(var(--teal-200))',
          300: 'hsl(var(--teal-300))',
          400: 'hsl(var(--teal-400))',
          500: 'hsl(var(--teal-500))',
          600: 'hsl(var(--teal-600))',
          700: 'hsl(var(--teal-700))',
          800: 'hsl(var(--teal-800))',
          900: 'hsl(var(--teal-900))',
          1000: 'hsl(var(--teal-1000))',
        },
        purple: {
          100: 'hsl(var(--purple-100))',
          200: 'hsl(var(--purple-200))',
          300: 'hsl(var(--purple-300))',
          400: 'hsl(var(--purple-400))',
          500: 'hsl(var(--purple-500))',
          600: 'hsl(var(--purple-600))',
          700: 'hsl(var(--purple-700))',
          800: 'hsl(var(--purple-800))',
          900: 'hsl(var(--purple-900))',
          1000: 'hsl(var(--purple-1000))',
        },
        pink: {
          100: 'hsl(var(--pink-100))',
          200: 'hsl(var(--pink-200))',
          300: 'hsl(var(--pink-300))',
          400: 'hsl(var(--pink-400))',
          500: 'hsl(var(--pink-500))',
          600: 'hsl(var(--pink-600))',
          700: 'hsl(var(--pink-700))',
          800: 'hsl(var(--pink-800))',
          900: 'hsl(var(--pink-900))',
          1000: 'hsl(var(--pink-1000))',
        },
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', ...defaultTheme.fontFamily.mono],
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [containerQueriesPlugin],
} satisfies Config
