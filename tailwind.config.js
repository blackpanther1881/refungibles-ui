const colors = {
  primary: {
    100: "#F5D6D8",
    200: "#EAAEB0",
    300: "#DF8184",
    400: "#D5585C",
    500: "#C73238",
    600: "#9F282C",
    700: "#751E21"
  },
  white: {
    700: "#FCFCFC",
    600: "#ECECEC",
    500: "#EDEDED",
    400: "#D1D9E0",
    300: "#BABABA",
    200: "#A6A6A6",
    100: "#787878"
  },
  black: {
    100: "#737373",
    200: "#4B4B4B",
    300: "#272A37",
    400: "#21272A",
    500: "#121619",
    600: "#181818",
    700: "#000000"
  },
  red: {
    100: "#F8D3D7",
    200: "#F1A7B0",
    300: "#E97C88",
    400: "#E25061",
    500: "#DB2438",
    600: "#AF1D2E",
    700: "#831622"
  },
  green: {
    100: "#D9F2E7",
    200: "#B6E7D1",
    300: "#8FDAB9",
    400: "#6CCFA3",
    500: "#1BB180",
    600: "#35A170",
    700: "#287753"
  },
  yellow: {
    100: "#FDEFDC",
    200: "#FDE0BB",
    300: "#FBD096",
    400: "#FAC075",
    500: "#F9B053",
    600: "#F79410",
    700: "#C07006"
  },
  blue: {
    100: "#D9E4FC",
    200: "#B3C8F9",
    300: "#8DADF6",
    400: "#638EF3",
    500: "#3E73F0",
    600: "#114FDE",
    700: "#0F3CAA"
  },
  transparent: "transparent",
  body: "#030303"
};

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    colors: {
      ...colors,
      activeState: "linear-gradient(90deg, #FD9C3D 0%, #C0266E 100%)"
    },
    backgroundImage: {
      activeState: "linear-gradient(90deg, #FD9C3D 0%, #C0266E 100%)"
    },
    fill: { ...colors },
    backgroundColor: {
      ...colors,
      none: "none",
      transparent: "transparent",
      disabled: "#A9A9A9"
      // activeState: "linear-gradient(90deg, #FD9C3D 0%, #C0266E 100%)"
    },
    fontFamily: {
      primary: ["Poppins", "sans-serif"]
    },
    fontSize: {
      xsm: "0.75rem", // 12px
      sm: "0.875rem", // 14px
      base: "1rem", //16px
      lg: "1.125rem", //18px
      xl: "1.25rem", // 20px
      "2xl": "1.375rem", // 22px
      "3xl": "1.5rem", //24px
      "4xl": "2.25rem", // 36px
      h1: ["6rem", { lineHeight: "7rem" }],
      h2: ["3.75rem", { lineHeight: "4.5rem" }],
      h3: ["3rem", { lineHeight: "3.5rem" }],
      h4: ["2.25rem", { lineHeight: "2.25rem" }],
      h5: ["1.5rem", { lineHeight: "2rem" }],
      h6: ["1.25rem", { lineHeight: "1.5rem" }],
      subtitle1: ["1rem", { lineHeight: "1.5rem" }],
      subtitle2: ["0.875rem", { lineHeight: "1.5rem" }],
      body1: ["1rem", { lineHeight: "1.5rem" }],
      body2: ["0.875rem", { lineHeight: "1.25rem" }],
      button: ["0.875rem", { lineHeight: "1rem" }],
      caption: ["0.75rem", { lineHeight: "0.875rem" }],
      overline: ["0.625rem", { lineHeight: "1rem" }]
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1536px) { ... }
      "1.5xl": { max: "1407px" },
      xl: { max: "1279px" },
      "1.5lg": { max: "1151px" },
      lg: { max: "1023px" },
      "1.5md": { max: "895px" },
      md: { max: "767px" },
      "1.5xs": { max: "639px" },
      sm: { max: "511px" }
    },
    extend: {
      transitionProperty: {
        height: "height"
      },
      keyframes: {
        "menu-open": {
          "0%": {
            opacity: "0",
            transform: "scale(0.9)"
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)"
          }
        },
        openmenu: {
          // initial position
          "0%": { left: "-224px" },
          // final position
          "100%": { left: "0px" }
        },
        closemenu: {
          // initial position
          "0%": { left: "0px" },
          // final position
          "100%": { left: "-224px" }
        },
        "zoom-in": {
          // initial position
          "0%": { opacity: "0", transform: "scale(0.9)" },
          // final position
          "100%": { opacity: "1", transform: "scale(1)" }
        }
      },
      animation: {
        "spin-slow": "spin 1.5s ease-in-out infinite",
        "menu-open": "menu-open 200ms ease-in-out",
        openmenu: "openmenu 1s ease-in",
        closemenu: "closemenu 1s ease-in",
        "zoom-in": "zoom-in .3s cubic-bezier(.16,1,.3,1)"
      },
      screens: {
        "-2xl": { min: "1536px" },
        // => @media (min-width: 1535px) { ... }
        "-1.5xl": { min: "1408px" },
        "-xl": { min: "1280px" },
        "-1.5lg": { min: "1152px" },
        "-lg": { min: "1024px" },
        "-1.5md": { min: "896px" },
        "-md": { min: "768px" },
        "-1.5sm": { min: "640px" },
        "-sm": { min: "512px" }
      },
      height: {}
    }
  },
  plugins: []
};
