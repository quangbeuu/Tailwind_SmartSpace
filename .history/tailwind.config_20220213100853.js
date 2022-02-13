module.exports = {
  mode:"jit",
  purge: ["./*.html"],
  // Thêm hai cái ở trên đề dùng jit
  content: [],
  theme: {
    extend: {
      fontFamily: {
        'dm': ['"DM Sans"'],
        'roboto': ['"Roboto"']
      },
      colors:{
        "orangeff": "#FF9900",
        "orangef8": "#F85A47",
        "gray31": "#31353B",
        "gray33": "#333",
        "grayda": "#DADADA"
      }
    },
    gridTemplateColumns:{
      "grid-work": "repeate(auto-fit,minmax(300px,1fr))",
    }
  },
  plugins: [],
}
