import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderRadius:{
        'xlg': '0.8rem'
      },
      borderWidth:{
        '1': '1px',
        '1.5': '1.5px'
      },
      colors:{
        'lightbrown':'#d3c29e'
      },
    },
  },
  plugins: [],
};
export default config;
