const fs = require("fs");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const projectRootDir = fs.realpathSync(process.cwd());
const resolveRoot = (relativePath = "") =>
  path.resolve(projectRootDir, relativePath);

module.exports = {
  entry: resolveRoot("src/index.ts"),
  output: {
    path: resolveRoot("dist"),
    filename: "app-bundle.js"
  },
  module: {
    rules: [{ test: /.ts$/, use: "awesome-typescript-loader" }]
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  plugins: [
    new CleanWebpackPlugin(["dist"], {
      root: resolveRoot()
    }),
    new HtmlWebpackPlugin({
      title: "WebComponents App",
      template: resolveRoot("public/index.html"),
      chunks: "all"
    })
  ],
  optimization: {
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        vendors: {
          test: /node_modules/,
          filename: "vendors-bundle.js",
          priority: -20
        },
        webcomponentsjs: {
          test: /webcomponents-bundle/,
          filename: "webcomponents-bundle.js",
          priority: -10
        }
      }
    }
  }
};
