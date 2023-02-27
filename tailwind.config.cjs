/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: () => ({
        "main": "url('https://images.unsplash.com/photo-1530576224787-491411e471b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZGFyayUyMGFlc3RoZXRpY3xlbnwwfHwwfHw%3D&w=1000&q=80')",
      }),
    },
  },
  plugins: [],
};
