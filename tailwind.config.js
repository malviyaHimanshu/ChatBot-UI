/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'primary': '#EFEFEF',
        'secondary': '#7B7B7B',
        'primaryGreen': '#B9FF66',
        'primaryPurple': '#8973FE',
      },
      textColor: {
        'primary': '#EFEFEF',
        'secondary': '#7B7B7B',
        'primaryGreen': '#B9FF66',
        'primaryPurple': '#8973FE',
      },
      borderColor: {
        'primary': '#EFEFEF',
        'secondary': '#7B7B7B',
        'primaryGreen': '#B9FF66',
        'primaryPurple': '#8973FE',
      },
    },
  },
  plugins: [],
}
