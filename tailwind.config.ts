import { Chakra_Petch } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      brand: "#609CFF",
      neon: "#8B7FFF",
      orgs: "#E2AA06",
      faq: "#00FF84",
      sponsors: "#E2AA06",
      partner: "#F84335",
      blite: "#FBBC0440",
      black: "#000000",
      white: "#FFFFFF",
      timeline: '#C23B30',
      grey: "#CCCCCC",
      team: "#44A7F0",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        kleemax: ["var(--font-kleemax)"],
        chakra: ["var(--font-chakra)"],
      },
      dropShadow: {
        gold: [
          "0 0 1vw rgba(220,170, 6, 1)",
        ],
        green: [
          "0 0px 1vw rgba(0,255,132, 1)",
        ],
        red: [
          "0 0 1vw rgba(248,57,63, 1)",
        ],
        redmini: [
          "0 0 1vw rgba(248,57,63, 1)",
        ],
        blue: [
          "0 0 1vw rgba(96,156,255, 1)",
        ],
        sky: [
          "0 0 1vw rgba(68,167,240, 1)",
        ],
        neon: [
          "0 0 1vw rgba(139,127,255, 1)",
        ],
      },
      maxWidth: {
        '1/5': '20%',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
      }
    },
  },
  plugins: [],
};
export default config;
