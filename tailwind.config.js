module.exports = {
  future: {},
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
    },
    minHeight: {
      0: "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%",
      "10rem": "10rem",
      "20rem": "20rem",
      "30rem": "30rem",
      "40rem": "40rem",
      "50rem": "50rem",
    },
    extend: {
      colors: {
        "accent-1": "#333",
      },
    },
  },
  variants: {
    transitionProperty: ["responsive", "motion-safe", "motion-reduce"],
    extend: {
      translate: ["active", "group-hover"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
