/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",

  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          lg: "2rem",
        },
      },
      colors: {
        primary: {
          50: "#fff5ec",
          100: "#ffe9d2",
          200: "#ffcfa4",
          300: "#ffac6b",
          400: "#ff7e2f",
          500: "#ff5907",
          600: "#f93c00",
          700: "#dd2c00",
          800: "#a32209",
          900: "#831f0b",
          950: "#470c03",
        },
        secondary: {
          50: "#ffffea",
          100: "#fffcc5",
          200: "#fffa85",
          300: "#fff146",
          400: "#ffe31b",
          500: "#ffc400",
          600: "#e29800",
          700: "#bb6c02",
          800: "#985308",
          900: "#7c440b",
          950: "#482300",
        },
        heading: {
          600: "#101a29",
        },
      },
    },
  },
  plugins: [],
};
