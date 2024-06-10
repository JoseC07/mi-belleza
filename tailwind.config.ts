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
      borderRadius: {
        xlg: "0.8rem",
      },
      borderWidth: {
        "1": "1px",
        "1.5": "1.5px",
      },
      colors: {
        "lightbrown": {
          "100": "#f9f8f6",
          "200": "#f1f0ec",
          "300": "#e9e8e2",
          "400": "#d3c29e",
          "500": "#bda47a",
          "600": "#a78656",
          "700": "#8f6832",
          "800": "#774a0e",
          "900": "#5f2c00",
        },
      },
      height: {
        "60vh" : "60vh",
        "70vh" : "70vh",
        "75vh" : "75vh",
        "80vh" : "80vh",
      }
    },
  },
  plugins: [],
};
export default config;
