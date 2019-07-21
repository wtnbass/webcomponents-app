const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const prodConfig = {
  mode: "production"
};

const devConfig = {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "dist"
  }
};

module.exports = Object.assign(
  process.env.NODE_ENV === "production" ? prodConfig : devConfig,
  {
    entry: "./src/index.ts",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "app-bundle.js"
    },
    module: {
      rules: [{ test: /.ts$/, use: "ts-loader" }]
    },
    resolve: {
      extensions: [".ts", ".js"]
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        title: "WebComponents App",
        template: "public/index.html",
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
  }
);
