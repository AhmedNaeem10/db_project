module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: "#1F618D",
      secondary: "#1F618D",
      transparent: "transparent",
      current: "currentColor",
      formColor: "rgba(41,39,39,0.3)",
      btnColor: "#f5f5dc",
      white: {
        DEFAULT: "#ffffff",
      },
      green: {
        light: "#6fcf97",
        DEFAULT: "#27AE60",
        dark: "#219653",
        darker: "#1e874b",
      },
      red: {
        light: "#FFEAEA",
        DEFAULT: "#EB5757",
        dark: "#C20D0D",
      },
      orange: {
        light: "#FFEBDA",
        DEFAULT: "#F66A0A",
        dark: "#A04100",
      },
      warning: {
        DEFAULT: "#D1711C",
      },
    },
    extend: {
      // backgroundImage: {
      //   "Log-Reg": "url('/src/Images/multipleGameImage.jpeg')",
      // },
      boxShadow: {
        default: "0px 5px 30px rgba(0, 0, 0, 1)",
      },
      fontSize: {
        "2rem": "2rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
