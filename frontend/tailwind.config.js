/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-to-tl-custom":
          "linear-gradient(to top left, #39b385, #9be15d)",
      },
      colors: {
        "custom-red-1": "#e52a5a",
        "custom-red-2": "#ff585f",
        darkGray: "#333", // Name this color as "darkGray" or any name you prefer
        "custom-green-1": "#39b385",
        "custom-green-2": "#9be15d",
        "custom-red-1": "#e52a5a",
        "custom-red-2": "#ff585f",
        grayCustom: "rgb(136, 136, 136)",
        "yellow-400": "#FFC107",
        "green-400": "#4CAF50",
        "red-400": "#F44336",
        customGreen: "#CBD6CC",
        customOrangeDark: "#E3432B",
        customOrangeLight: "#E65640",
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          950: "#172554",
        },
      },
      height: {
        "screen-75": "75vh",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        body: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
    },
  },
  plugins: [],
};
