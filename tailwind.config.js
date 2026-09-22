/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#1C1F26',
        paper: '#F7F7F5',
        accent: '#3F6C51',
        'accent-dark': '#2E4F3B',
        amber: '#C68A2E',
        blue: '#3B6EA5',
        line: '#DFE1E6',
        muted: '#6B7076',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
