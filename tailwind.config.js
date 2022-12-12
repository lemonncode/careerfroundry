const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto"],
      },
      colors: {
        darkblue: "#223C50",
        middleblue: "#2F6690",
        darkbluegreen: "#1C7488",
        lightgreen: "#54D0C6",
        purple: "#78679E",
        grayrose: "#AD7A99",
        rose:"#FA6357"
      },
    },
  },
  plugins: [],
};
