/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.{html,js}'
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        black: "#000",
        white: "#fff",
        gray: {
          50: "#FAFAFA",
          100: "#F4F4F5",
          200: "#E3E5E8",
          300: "#D2D5DA",
          400: "#9DA3AE",
          500: "#6C727F",
          600: "#4F545E",
          700: "#3D4148",
          800: "#25272C",
          900: "#17191C",
        },
        'icon-bg': "rgba(169, 73, 73, 0.2)",/*Icon bg*/
        'rose-ebony': "#A94949", /*icon color, color of cadastrar button*/
      },
    },
  },
  plugins: [],
}
