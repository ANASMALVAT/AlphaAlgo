module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily:{
      'jura' : ['Open Sans','Helvetica','Arial','sans-serif']
    },

    extend: {
      colors: {
        primary: "#0B243A",
        vesuvius: "#000020",
        algoblack:"#12151D",
        algoprob:"#1B3B6F",
        algocodeOutput: "#1E293B"
      }
    },
    minWidth:{
      '3/4':'75%'
    }
  },
  plugins: [],
};