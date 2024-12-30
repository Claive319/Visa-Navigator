/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        banner: "url('./src/assets/light-blue-sky-background-for-landscape-photography_oun.jpeg')"
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

