module.exports = {
  mode:"jit",
  purge: ["./*.html"],
  // Thêm hai cái ở trên đề dùng jit
  content: [],
  theme: {
    extend: {
      fontFamily: {
        'dm': ['"DM Sans"']
      },
      colors:{
        "orangeff": "#FF9900",
        "orangef8": "#F85A47",
        "gray": "#31353B"
      }
  },
  plugins: [],
}
