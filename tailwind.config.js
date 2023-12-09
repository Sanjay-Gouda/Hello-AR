/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontWeight: {
        normal: "400",
        extraBold: "700",
      },

      backgroundColor: {
        primary: "#552583",
        secondry: "#E6F7FF",
        // default: "#101920",
        yellow: "#FDB927",
      },
      textColor: {
        primary: "#552583",
        default: "#101920",
        secondry: "#1890FF",
      },
    },
  },
  plugins: [],
};
