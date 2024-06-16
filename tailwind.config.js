/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "lime-green": "hsl(163, 72%, 41%)",
        "bright-red": "hsl(356, 69%, 56%)",
        facebook: "hsl(208, 92%, 53%)",
        twitter: "hsl(203, 89%, 53%)",
        instagram: {
          from: "hsl(37, 97%, 70%)",
          to: "hsl(329, 70%, 58%)",
        },
        youtube: "hsl(348, 97%, 39%)",
        "light-theme-toggle": "hsl(230, 22%, 74%)",
        "very-pale-blue": "hsl(225, 100%, 98%)",
        "light-grayish-blue": "hsl(227, 47%, 96%)",
        "dark-grayish-blue": "hsl(228, 12%, 44%)",
        "very-dark-blue": "hsl(230, 17%, 14%)",
        "desaturated-blue": "hsl(228, 28%, 20%)",
        "desaturated-blue-text": "hsl(228, 34%, 66%)",
        "blue-toggle": "hsl(210, 78%, 56%)",
        "green-toggle": "hsl(146, 68%, 55%)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
