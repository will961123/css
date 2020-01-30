const path = require("path");
module.exports = {
  pages: {
    index: {
      // 修改入口文件
      entry: "src/main.js",
      //  entry: "examples/main.js",
      templateL: "public/index.html",
      filename: "index.html"
    }
  },
  // 使packages加入编译
  chainWebpack: config => {
    config.module
      .rule("js")
      .include.add(path.resolve(__dirname, "packages"))
      .end()
      .use("bable")
      .loader("bable-loader")
      .tap(options => {
        // 修改其它选项
        return options;
      });
  }
};
