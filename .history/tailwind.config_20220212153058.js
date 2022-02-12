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
        "orangeff9": "FF9900"
      }
    },
  },
  plugins: [],
}
