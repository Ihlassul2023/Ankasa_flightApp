/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        section3: "url('../assets/img/Group 387.png')",
        bgSelectTicket: "url('../assets/img/bgSelectTicket.png')",
      },
      spacing: {
        hAuth: "90%",
        marbotAuth: "4rem",
        topPassword: "11px",
        findTicket: "500px",
        rNavbar: "-100%",
        section3: "600px",
        wSection: "70%",
      },
      colors: {
        buttonSign: "rgba(35, 149, 255, 1)",
        bgInput: "rgba(245, 245, 245, 1)",
        textColor: "rgba(151, 151, 151, 1)",
        textFooter: "rgba(107, 107, 107, 1)",
        bgSelectTicket2: "rgba(245, 246, 250, 1)",
        bgPassenger: "rgba(35, 149, 255, 0.1)",
        buttonWaiting: "rgba(255, 127, 35, 1)",
        buttonSuccess: "rgba(79, 207, 77, 1)",
      },
      padding: {
        pl: "35px",
      },
      boxShadow: {
        buttonShadow: "0 1px 3px 0 rgba(35, 149, 255, 1), 0 1px 2px -1px rgba(35, 149, 255, 1)",
        ticketFindShadow: "0 1px 3px 0 rgba(245, 245, 245, 1), 0 1px 2px -1px rgba(245, 245, 245, 1)",
      },
    },
  },
  plugins: [],
};
