const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development", // production, development, none
  // entry: "./src/index.js",
  entry: {
    index: "./src/index.js",
    app: "./src/app.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.join(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/,
        use: ["babel-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      // title: "Webpack HTML Demo",
      template: path.join(__dirname, "index.html"),
    }),
  ],
  devServer: {
    port: 3030,
    open: true,
  },
};
