/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fontGreen: "#1b3228ff",
        fontSandal: "#d7b56dff",
        overlay: "rgba(0, 0, 0, 0.30)",
      },
      screens: {
        xs: "550px",
        md: "850px",
        xl: "1180px",
        "2xl": "1280px",
      },
      fontFamily: {
        secondary: ["Space Mono", "monospace"],
        primary: ["DM Sans", "sans-serif"]
      },
    },
  },
  plugins: [],
}