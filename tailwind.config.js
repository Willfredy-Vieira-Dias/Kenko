/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.{html,js}', // Diret�rios do seu projeto
    'node_modules/preline/dist/*.js', 
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('preline/plugin'),
  ],
  darkMode: 'class', 
}
