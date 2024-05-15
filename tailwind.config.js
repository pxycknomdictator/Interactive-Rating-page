/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Orange: "hsl(25, 98%, 53%)",
        White: "hsl(0, 0%, 100%)",
        cricleBG: "hsl(210, 19%, 19%)",
        description: "hsl(215, 7%, 55%)",
        cardBG: "hsl(215, 21%, 16%)",
        mainBG: "hsl(228, 11%, 9%)",
        activecircleBG: "hsl(214, 12%, 54%)",
        starBG: "hsl(200, 17%, 18%)",
      },
    },
  },
  plugins: [],
};
