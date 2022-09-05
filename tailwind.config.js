/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    colors: {
      black: "#000000",
      white: "#FFFFFF",
      ytext: "hsla(0,0%,100%,.5)!important",
      buynow: "#ad9970",
      black50: "#767676",
      gray: "#6c757d",
      light: "#f8f9fa",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontFamily: {
      poppins: ["Poppins", "ui-sans-serif", "system-ui"],
      inter: ["Inter", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "home-page":
          "url('/img/rode-rodecaster-pro-II-home-page-1920x700-rgb.jpg')",
        frame1:
          "url('./img/images_page_1_modules_5357_microphones-module-1200x300-rgb.png')",
      },
    },
  },
  plugins: [],
};
