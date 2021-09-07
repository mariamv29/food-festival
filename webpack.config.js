// const path = require('path');
// const webpack = require("webpack");




// module.exports = {entry: './assets/js/script.js', output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'main.bundle.js',
//     plugins: [  new webpack.ProvidePlugin({
//         $: "jquery",
//         jQuery: "jquery"
//       }),],
//   }, mode: 'development'};

const webpack = require("webpack")
const path = require("path");

module.exports = {
  entry: "./assets/js/script",
  output: {
    path: path.join(__dirname + "/dist"),
    filename: "main.bundle.js"
  },
  plugins: [
  new webpack.ProvidePlugin({
    $: "jquery",
    jQuery: "jquery"
  }),
  ],
  mode: "development"
};