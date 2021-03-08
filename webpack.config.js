const path = require("path");
const MinifyBundledPlugin = require('minifiy-bundled-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, "build/static/js/2.2f3f2b4e.chunk"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "afterCompres.js",
  },
  plugins: [
    new MinifyBundledPlugin({
      patterns: ["**/assets/*.+(json|css|js)"],
    }),
  ],
};
