/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: () => ({
        "main": "url('https://img.freepik.com/premium-photo/blurred-interior-hospital-clinical-with-people-abstract-medical-background_1484-1309.jpg')",
      }),
    },
  },
  plugins: [],
};
