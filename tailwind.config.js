/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'fRoboto': ['Roboto Mono', 'monospace']
      },
      backgroundImage: {
        '01d': "url('/public/images/bg1.jpg')",
        '02d': "url('/public/images/bg2.jpg')",
      }
    },
  },
  plugins: [],
}

