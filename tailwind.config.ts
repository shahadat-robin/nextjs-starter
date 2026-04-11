import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/tw-elements-react/dist/js/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: 'var(--color-brand)',
          soft: 'var(--color-brand-soft)',
        },

        'foreground-text': 'var(--color-text)',
        'muted-text': 'var(--color-text-muted)',
        'inverse-text': 'var(--color-text-inverse)',

        surface: {
          DEFAULT: 'var(--color-surface)',
          soft: 'var(--color-surface-soft)',
          muted: 'var(--color-surface-muted)',
          inverse: 'var(--color-surface-inverse)',
          overlay: 'var(--color-surface-overlay)',
        },
      },
      borderColor: {
        DEFAULT: 'var(--color-border)',
      },
      fontFamily: {
        heading: ['"Averia Serif Libre"', 'serif'],
        body: ['"Roboto Slab"', 'Roboto', 'serif'],
      },
      container: {
        center: true,
        screens: {
          sm: '100%',
          '2xl': '1280px',
        },
      },
    },
  },
  plugins: [require('tw-elements-react/dist/plugin.cjs')],
};
export default config;
