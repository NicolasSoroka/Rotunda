/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('./assets/bg.jpg')",
        'element1': "url('./assets/element1.jpg')",
        'element2': "url('./assets/element2.jpg')",
      }
    },
    plugins: []
  }
}
