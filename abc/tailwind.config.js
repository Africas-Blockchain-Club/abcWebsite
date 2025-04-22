// tailwind.config.js
const colors = require('tailwindcss/colors');

module.exports = {
  theme: {
    extend: {
      colors: {
        stone: colors.stone,
      },
    },
  },
};
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("tailwind-scrollbar"),
  ],
};
