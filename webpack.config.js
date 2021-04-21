const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  context:"__dirname",
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "afterCompres.js",
  },
  devServer: {
    historyApiFallback: true
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
