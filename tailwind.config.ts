import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        // Primary colors
        primary: 'var(--primary)',
        'primary-50': 'var(--primary-50)',
        'primary-100': 'var(--primary-100)',
        'primary-200': 'var(--primary-200)',
        'primary-300': 'var(--primary-300)',
        'primary-400': 'var(--primary-400)',
        'primary-500': 'var(--primary-500)',
        'primary-600': 'var(--primary-600)',
        'primary-700': 'var(--primary-700)',
        'primary-800': 'var(--primary-800)',
        'primary-900': 'var(--primary-900)',
        'primary-950': 'var(--primary-950)',
        'primary-content': 'var(--primary-content)',
        'primary-hover': 'var(--primary-hover)',

        // Secondary colors
        secondary: 'var(--secondary)',
        'secondary-50': 'var(--secondary-50)',
        'secondary-100': 'var(--secondary-100)',
        'secondary-200': 'var(--secondary-200)',
        'secondary-300': 'var(--secondary-300)',
        'secondary-400': 'var(--secondary-400)',
        'secondary-500': 'var(--secondary-500)',
        'secondary-600': 'var(--secondary-600)',
        'secondary-700': 'var(--secondary-700)',
        'secondary-800': 'var(--secondary-800)',
        'secondary-900': 'var(--secondary-900)',
        'secondary-950': 'var(--secondary-950)',

        // Accent colors
        accent: 'var(--accent)',
        'accent-50': 'var(--accent-50)',
        'accent-100': 'var(--accent-100)',
        'accent-200': 'var(--accent-200)',
        'accent-300': 'var(--accent-300)',
        'accent-400': 'var(--accent-400)',
        'accent-500': 'var(--accent-500)',
        'accent-600': 'var(--accent-600)',
        'accent-700': 'var(--accent-700)',
        'accent-800': 'var(--accent-800)',
        'accent-900': 'var(--accent-900)',
        'accent-950': 'var(--accent-950)',

        // Dark accent
        'dark-accent': 'var(--dark-accent)',
        'dark-accent-hover': 'var(--dark-accent-hover)',
        'dark-accent-content': 'var(--dark-accent-content)',

        // Background colors
        background: 'var(--background)',
        'background-dark': 'var(--background-dark)',

        // Content/Text colors
        content: 'var(--content)',
        'content-secondary': 'var(--content-secondary)',
        'content-disabled': 'var(--content-disabled)',
        'content-dark': 'var(--content-dark)',
        'content-dark-secondary': 'var(--content-dark-secondary)',

        // Border colors
        border: 'var(--border)',
        'border-dark': 'var(--border-dark)',

        // Feedback colors
        success: 'var(--success)',
        'success-content': 'var(--success-content)',
        warning: 'var(--warning)',
        'warning-content': 'var(--warning-content)',
        destructive: 'var(--destructive)',
        'destructive-content': 'var(--destructive-content)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-heading)', 'Georgia', 'serif'], // Mapping 'serif' to '--font-heading'
        mono: ['var(--font-mono)', 'monospace'],
      },
    },
  },
  plugins: [
    typography,
  ],
} satisfies Config;
