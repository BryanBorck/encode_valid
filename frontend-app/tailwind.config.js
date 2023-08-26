/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
      colors: {
          primary: "#4adf86",
          secondary: "#3a3a3a",
          tertiary: "#D3D3D3",
          black2: "#212121",
          light: "#FCFCFC",
          gray2: "#E0E0E0",
      },
      extend: {},
  },
  plugins: [],
};