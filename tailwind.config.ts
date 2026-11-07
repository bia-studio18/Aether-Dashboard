import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: "#F8F9F6",
          100: "#E8F0E3",
          200: "#DDE5D8",
          500: "#87A96B",
          600: "#5C6B4F",
          700: "#4A5A3F",
        },
        charcoal: "#2D3436",
        "cool-gray": "#636E72",
      },
    },
  },
  plugins: [],
};

export default config;