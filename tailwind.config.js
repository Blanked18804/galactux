/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-main': 'linear-gradient(180deg, rgba(255, 41, 102, 0.15) 0%, rgba(255, 41, 102, 0.30) 100%)',
      },
      backgroundColor: {
        'main': '#FF2966',
      },
      borderColor: {
        'main': '#FF2966',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.text-regular': {
          fontSize: '14px',
          lineHeight: '200%',
        },
        '.text-regular-12': {
          fontSize: '12px',
          lineHeight: '200%',
        },
        '.text-bold-60': {
          fontSize: '60px',
          lineHeight: '135%',
          fontWeight: 'bold',
        },
        '.text-bold-45': {
          fontSize: '45px',
          lineHeight: '135%',
          fontWeight: 'bold',
        },
        '.text-bold-30': {
          fontSize: '30px',
          lineHeight: '140%',
          fontWeight: 'bold',
        },
        '.text-bold-22': {
          fontSize: '22px',
          lineHeight: '150%',
          fontWeight: 'bold',
        },
        '.text-bold-16': {
          fontSize: '16px',
          lineHeight: '150%',
          fontWeight: 'bold',
        },
        '.absolute-center': {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
        },
      })
    }
  ],
}

