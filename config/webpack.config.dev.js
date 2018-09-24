const webpackConfigCommon = require("./webpack.config.common.js");

module.exports = Object.assign({}, webpackConfigCommon, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "dist"
  }
});
