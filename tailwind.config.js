/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
        colors: {
          primary: "#0B1215",
          mint:{
            100:"#00C7BE",
            87:"#01AFA8",
            bg:"#DCFFF6"
          },
          secondary:"#101A1E",
          white_87:"#DFE0E1",
          white_60: "#9DA0A1",
          white_38:"#686C6E",
          stroke_38:"#6B7376",
          darkGray:"#424242",
          lava:"#352F36",
          requested: "#1F67FF",
          orange:"#F78208",
          bgOrange:"#FFFAF5",
          purple: "#896BFF",
          bgPurple:"#F5F2FF",
          red: "#FF3B30",
          tertiary: "#131B1E",
        },
      },
  },
  plugins: [],
}

