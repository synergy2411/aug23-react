const path = require("path");

module.exports = {
  mode: "production", // production, development, none
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "dist"),
  },
};
