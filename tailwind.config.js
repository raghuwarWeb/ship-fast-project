/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');
const rotateX = plugin(function ({ addUtilities }) {
 addUtilities({
    '.rotate-y-180': {
      transform: 'rotateY(180deg)',
    },
 });
});
module.exports = {
 content: ['./app/**/*.tsx'],
 darkMode: 'class', // Enables dark mode
 theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1142px',
    },
    fontFamily: {
      mulish: ['Mulish', 'sans-serif'],
      reey: ['reey', 'sans-serif'],
      sans: ['ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
      monospace: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
    },
    extend: {
      animation: {
        'spin-slow': 'spin 5s linear infinite',
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray'),
            fontSize: '1.125rem',
          },
        },
      }),
      colors: {
        primary: {
          DEFAULT: '#47BDFF',
          '100': '#F3F4F6',
          '200': '#E5E7EB',
          '300': '#D1D5DB',
          '400': '#9CA3AF',
          '500': '#6B7280', // This is the default primary color
          '600': '#4B5563',
          '700': '#374151',
          '800': '#1F2937',
          '900': '#111827',
          contrast: '#fff'
        },
        // Secondary color
        secondary: '#B476E5',
        // Gray color palette
        gray: {
          DEFAULT: '#7780A1',
          dark: '#1C2331',
          '100': '#F3F4F6',
          '200': '#E5E7EB',
          '300': '#D1D5DB',
          '400': '#9CA3AF',
          '500': '#6B7280',
          '600': '#4B5563',
          '700': '#374151',
          '800': '#1F2937',
          '900': '#111827',
        },
        // Black color palette
        black: {
          DEFAULT: '#08111f',
          dark: "020711",
          '100': '#F3F4F6',
          '200': '#E5E7EB',
          '300': '#D1D5DB',
          '400': '#9CA3AF',
          '500': '#6B7280',
          '600': '#4B5563',
          '700': '#374151',
          '800': '#1F2937',
          '900': '#111827',
        },
        // White color palette
        white: {
          DEFAULT: '#fff',
          '100': '#F3F4F6',
          '200': '#E5E7EB',
          '300': '#D1D5DB',
          '400': '#9CA3AF',
          '500': '#6B7280',
          '600': '#4B5563',
          '700': '#374151',
          '800': '#1F2937',
          '900': '#111827',
        },
      },
    },
 },
 plugins: [
    require('@tailwindcss/line-clamp'),
    rotateX,
    require('@tailwindcss/typography'),
 ],
};