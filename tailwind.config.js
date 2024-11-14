/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        rgbaBlack: "rgba(0,0,0,0.9)",
      },
      backgroundImage: {
        gradientBlack:
          "linear-gradient(to right, #2A3663 0%, #C5D3E8 50%, #2A3663 100%)",
        gradientBlackAndWhite:
          "linear-gradient(to right, #000 0%, #fff 50%, #000 100%)",
      },
      animation: {
        nameSlider: "nameSlider 7s ease-in",
      },
      keyframes: {
        nameSlider: {
          "0%": { transform: "translateX(275%)", opacity: "0" },
          "50%": { opacity: "1" },
          "100%": { transform: "translateX(-105%)", opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
