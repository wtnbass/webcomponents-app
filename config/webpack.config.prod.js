const webpackConfigCommon = require("./webpack.config.common.js");

module.exports = Object.assign({}, webpackConfigCommon, {
  mode: "production"
});
