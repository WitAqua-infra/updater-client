/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#121212',
        'brand-light': '#ffffff',
        'brand-dark': '#70adaf',
        'brand-primary': '#00c8ff'
      }
    }
  },
  plugins: []
}
