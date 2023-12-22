/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#8ACDD7",
        primaryColorDark: "#3C9FAE",
        secondaryColor: "#F9F9E0",
      },
    },
  },
  plugins: [],
};
