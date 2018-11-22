const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const StartServerPlugin = require('start-server-webpack-plugin');

module.exports = {
  name: "client",
  entry: {
    client: './front-end/src/client.js',
    bundle: './front-end/src/bundle.js'
  },
  output: {
    path: path.resolve(__dirname, 'front-end/assets'),
    filename: "[name].js"
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
 }
}