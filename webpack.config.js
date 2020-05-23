var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./js/main.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "main.bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader"
      },
    ],
  },
  stats: {
    colors: true,
  },
  devtool: "source-map",
  devServer: {
    inline: true,
    port: 9005
  },
  plugins: [
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'index.html'
    })
  ]
};
