/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'average': {'max': '850px'},
        // => @media (max-width: 850px) { ... }

        'small': {'max': '425px'},
        // => @media (max-width: 425px) { ... }
      },

      colors: {
        "cur-lang": "#ccc",
        gioi_thieu: "#8D8D8D",
      },
      fontSize: {
        'span': '1.15em'
      },
      fontWeight: {
        'span': '600'
      },
      lineHeight: {
        'span': '1.05'
      },
      letterSpacing: {
        'span': '.05em'
      }
    },
  },
  plugins: [],
};
