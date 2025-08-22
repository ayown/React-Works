// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      keyframes: {
        move: {
          '0%, 49.99%': { opacity: '0', zIndex: '1' },
          '50%, 100%': { opacity: '1', zIndex: '5' },
        },
      },
      animation: {
        move: 'move 0.6s ease-in-out',
      },
    },
  },
  plugins: [],
};
