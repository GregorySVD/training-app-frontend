import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: "#1E40AF", // Add a custom blue color
        customGreen: "#10B981", // Add a custom green color
      },
      spacing: {
        "72": "18rem", // Add a custom spacing value
        "84": "21rem",
        "96": "24rem",
      },
      fontFamily: {
        customFont: ['"Roboto Mono"', "monospace"], // Add a custom font family
      },
    },
  },
  plugins: [],
};

export default config;
