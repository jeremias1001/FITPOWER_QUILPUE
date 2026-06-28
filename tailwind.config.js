/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        graphite: "#20232a",
        ink: "#121318",
        fog: "#f4f1ed",
        warm: "#fbfaf8",
        orangeFit: "#ff6a1a",
        magentaFit: "#e332a5",
        purpleFit: "#6b22c7"
      },
      boxShadow: {
        soft: "0 24px 70px rgba(18, 19, 24, 0.10)",
        lift: "0 18px 45px rgba(18, 19, 24, 0.14)",
        glow: "0 22px 55px rgba(227, 50, 165, 0.20)"
      },
      borderRadius: {
        brand: "2rem"
      }
    }
  },
  plugins: []
};
