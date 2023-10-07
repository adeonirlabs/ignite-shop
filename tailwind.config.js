/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      animation: {
        spin: 'spin 3s linear infinite',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      height: {
        164: '41rem',
      },
      width: {
        120: '30rem',
      },
      minHeight: {
        164: '41rem',
      },
      maxWidth: {
        'full-end': 'calc(100vw - ((100vw - 1152px) / 2))',
      },
      spacing: {
        120: '30rem',
      },
    },
  },
  plugins: [],
}
