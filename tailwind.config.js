const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    fontFamily: {
      Manrope: ['var(--font-manrope)'],
    },
    extend: {
      colors: {
        'Pcolor': '#16829E',
        'Hcolor': '#24126A',
        'Scolor': '#284C88',
        'Tcolor': '#0F0000',
        'Bcolor': '#6E6C80',
        'BGcolor': '#FAFAFA',
        'BGcolor2': '#F9F9F9',
        'Color1': '#6E6C80',
        'BorderColor': '#DDDDDD',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
};
