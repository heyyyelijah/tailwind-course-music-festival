/** @type {import('tailwindcss').Config} */
module.exports = {
  // WILL OVERRIDE THE DEFAULT THEME OF THE DESKTOP OR BROWSER TO NOT BE IN SYNC W IT
  darkMode: "class",
  // TELLS NPM TO WATCH OUT FOR CHANGES INSIDE THESE FILES WHENEVER A BUILD IS DONE
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        wavey: {
          "0%, 100%": {
            transform: "scaleY(0.5)"
          },
          "50%": {
            transform: "scaleY(1.5)"
          }
        }
      },
      // animation-wavey
      animation: {
        wavey: "wavey 1000ms linear infinite"
      }
    },
  },
  plugins: [
    require("./plugins/openVariant"), 
    require("./plugins/animationDelay"),
    require("./plugins/tableCaption"),
    require("./plugins/buttonPlugin"),
  ],
}