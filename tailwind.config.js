/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      animation: {
        spin: 'spin 3s linear infinite',
      },
      boxShadow: {
        '3xl': '0px 0px 60px 0px rgba(0, 0, 0, 0.80)',
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
