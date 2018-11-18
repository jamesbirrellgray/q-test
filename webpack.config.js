const path = require('path');
module.exports = {
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