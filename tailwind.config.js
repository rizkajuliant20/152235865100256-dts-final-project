/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  content: ["./src/**/*.{html,js, jsx}"],
  theme: {
    extend: {
      fontFamily: {
        Mono: ['"JetBrains Mono"'],
      },
    },
  },
  plugins: [],
};
