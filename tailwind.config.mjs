/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
    },
    extend: {
      colors: {
        oxide: {
          bg: '#0C1220',
          surface: '#131A2A',
          titlebar: '#1A2236',
          hover: '#1C2640',
          accent: '#5B9BD5',
          'accent-bright': '#7BB3E8',
          green: '#28C840',
          red: '#E8583B',
          yellow: '#FFBD2E',
          text: '#E6EDF3',
          'text-mid': '#8B949E',
          'text-dim': '#3D4550',
          border: '#1E2A3A',
        },
      },
      boxShadow: {
        'accent-glow': '0 0 40px rgba(91,155,213,0.12)',
        'accent-glow-lg': '0 0 60px rgba(91,155,213,0.18)',
      },
    },
  },
  plugins: [],
};
