const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const WebpackShellPlugin = require('webpack-shell-plugin');

const config = {
  entry: {
    server: './front-end/index.js'
  },
  output: {
    path: path.join(__dirname, '/front-end/dist'),
    publicPath: '/',
    filename: '[name].js'
  },
  target: 'node',
  node: {
    // Need this when working with express, otherwise the build fails
    __dirname: false,   // if you don't put this is, __dirname
    __filename: false,  // and __filename return blank or /
  },
  externals: [nodeExternals()], // Need this to avoid error when working with Express
  module: {
    rules: [
      {
        // Transpiles ES6-8 into ES5
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: []
}

if (process.env.NODE_ENV !== 'production') {
  config.plugins.push(new WebpackShellPlugin({onBuildEnd: ['nodemon ./front-end/dist/server.js --watch dist/**']}));
}

module.exports = config;