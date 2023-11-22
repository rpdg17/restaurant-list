/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'mainShadow': '0px 4px 4px rgba(0, 0, 0, 0.25)'
      }
    },
  },
  plugins: [],
}

