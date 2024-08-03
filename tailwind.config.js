/** @type {import('tailwindcss').Config} */

import palette from './palette';

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: palette
    },
    fontFamily: {
      regular: ["RobotoRegular"],
      medium: ["RobotoMedium"],
      bold: ["RobotoBold"],
      black: ["RobotBlack"],
    },
  },
  plugins: [],
};
