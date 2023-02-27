/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: () => ({
        "main": "url('https://www.pixelstalk.net/wp-content/uploads/images5/Orange-Aesthetic-Wallpaper-Free-Download.png')",
      }),
    },
  },
  plugins: [],
};
