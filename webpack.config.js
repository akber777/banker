const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "build/static/js/4.23078a0a.chunk.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "afterCompres.js",
    chunkFilename: "[name].js",
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        defaultVendors: {
          filename: "[name].bundle.js",
        },
      },
    },
  },
};
