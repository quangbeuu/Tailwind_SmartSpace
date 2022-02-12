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
        "orangeff": "FF9900"
        "orangef8": "FF9900"
      }
    },
  },
  plugins: [],
}
