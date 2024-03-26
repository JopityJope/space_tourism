import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        barlowCondensed: "var(--font-barlow-condensed)",
        barlow: "var(--font-barlow)",
        bellefair: "var(--font-bellefair)",
      },
      fontSize: {
        "heading-1": "15rem",
        "heading-2": "10rem",
        "heading-3": "5.6rem",
        "heading-4": "3.2rem",
        "heading-5": "2.8rem",
        "subheading-1": "2.8rem",
        "subheading-2": "1.4rem",
        "nav-text": "1.6rem",
        paragraph: "1.6rem",
      },
      letterSpacing: {
        "heading-5": "4.75px",
        "subheading-2": "2.35px",
        "nav-text": "2.7px",
        paragraph: "1px",
      },
      lineHeight: {
        paragraph: "3.2rem",
      },
      screens: {
        mobile: "500px",
        tablet: "800px",
        laptop: "1350px",
      },
      colors: {
        primary: "#0B0D17",
        secondary: "#D0D6f9",
        tertiary: "#ffffff",
        hover: "#979797",
        border: "#383B4B",
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
      },
      keyframes: {
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
