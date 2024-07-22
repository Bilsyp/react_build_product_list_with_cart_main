/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        ml: "375px",
        Ds: "1440px",
      },
      fontFamily: {
        redhat: ["Red Hat Text", "sans-serif"],
      },
    },
  },
  plugins: [],
};
