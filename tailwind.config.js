/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        spin: 'spin 3s linear infinite',
      },
      height: {
        164: '41rem',
      },
      minHeight: {
        164: '41rem',
      },
      maxWidth: {
        'full-end': 'calc(100vw - ((100vw - 1152px) / 2))',
      },
    },
  },
  plugins: [],
}
