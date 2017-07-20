const path = require("path");
const webpack = require("webpack");

module.exports = {
  context: __dirname,
  entry: ["./source/App.jsx"],
  devtool: "cheap-eval-source-map",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/dist/"
  },
  devServer: {
    publicPath: "/dist/"
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"]
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  }
};
