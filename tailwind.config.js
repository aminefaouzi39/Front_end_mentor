/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Onest", "sans"],
      },
      textColor: {
        soGray: "#545870",
        whenSel: "#462d3b",
      },
      backgroundColor: {
        con: "#151932",
        subCon: "#f87070",
        subCon2: "#6ff3f8",
        subCon3: "#d981f9",
      },
      letterSpacing: {
        wider: ".6rem",
      },
      inset: {
        "28%": "28%",
        "30%": "30%",
        "54%": "54%",
        "40%": "40%",
        "43%": "43%",
        "83%": "83%",
      },
      boxShadow: {
        shadow: "-30px -35px 100px -25px rgba(255, 255, 255, 0.3)",
      },
    },
  },
  plugins: [],
};
