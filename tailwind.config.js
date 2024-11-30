/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit', // Enable JIT mode (only necessary in v2.x)
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './public/index.html', // Include index.html (if you're using it)
  ],
  theme: {
    extend: {
      colors: {
        'custom-dark-teal': '#00403D', // Custom color name and its hex value
      },
    },
  },
  plugins: [],
  safelist: [
    'dark:bg-gray-900', // Safelist dark mode background class
    'dark:text-white',  // Safelist dark mode text color class
    // Add any other dynamic classes you use
  ],
}