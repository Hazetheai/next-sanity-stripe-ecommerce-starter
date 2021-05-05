module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
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
  },
  plugins: [require("@tailwindcss/custom-forms")],
};
