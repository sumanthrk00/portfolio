/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        graphite: '#16130f',
        vermilion: '#b4442b',
        ruleline: '#c9c0af',
        paper: '#f7f3ec',
        parchment: '#fbf8f2',
        bodyink: '#4a4337',
        inkdeep: '#2c271f',
        muteink: '#6b6253',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        serif: ['Georgia', '"Times New Roman"', 'serif'],
      },
      keyframes: {
        'iv-drift': {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '40px 30px' },
        },
        'iv-up': {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'none' },
        },
        'iv-draw': {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
        'iv-par': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-8px)' },
        },
        'iv-mq': {
          to: { transform: 'translate(-50%)' },
        },
      },
      animation: {
        'iv-drift': '18s linear infinite iv-drift',
        'anim-up': '0.9s cubic-bezier(0.22, 1, 0.36, 1) both iv-up',
        'rule-draw': '1.2s cubic-bezier(0.22, 1, 0.36, 1) 0.3s both iv-draw',
        'portrait-par': '14s ease-in-out infinite alternate iv-par',
        'ticker-track': '40s linear infinite iv-mq',
      },
    },
  },
  plugins: [],
};
