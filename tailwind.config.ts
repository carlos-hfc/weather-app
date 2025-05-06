import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        clear:
          "radial-gradient(circle at 10% 20%, rgb(145, 183, 231) 0%, rgb(48, 105, 167) 45.5%)",
        cloud:
          "radial-gradient(circle at 10% 20%, rgb(168, 153, 142) 0%, rgb(91, 95, 99) 45.5%)",
        rain: "radial-gradient(circle at 10% 20%, rgb(138, 132, 127) 0%, rgb(69, 71, 73) 45.5%)",
        snow: "radial-gradient(circle at 10% 20%, rgb(205, 206, 207) 0%, rgb(108, 122, 126) 45.5%)",
      },
      dropShadow: {
        image: "2px 3px 6px rgba(0, 0, 0, 0.75)",
      },
    },
  },
  plugins: [],
}
export default config
