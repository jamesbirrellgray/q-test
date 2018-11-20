const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const StartServerPlugin = require('start-server-webpack-plugin');

module.exports = [{
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
},
// Graph-API Pack
{
  name: "graph",
  mode: "development",
  entry: ['./graph-api/src'],
  watch: true,
  watchOptions: {
    poll: true
  },
  target: 'node',
  node: {
      __filename: true,
      __dirname: true
  },
  externals: [nodeExternals({ whitelist: ['webpack/hot/poll?1000'] })],
  module: {
      rules: [
          {
              test: /\.js?$/,
              use: [
                  {
                      loader: 'babel-loader',
                      options: {
                          babelrc: false,
                          presets: [["@babel/env", { "targets": { "node": "current" } }]],
                          plugins: ['@babel/plugin-transform-regenerator', '@babel/plugin-transform-runtime']
                      }
                  }
              ],
              exclude: /node_modules/
          }
      ]
  },
  serve: { //object
    port: 4000,
    content: './dist',
    // ...
  },
  // lets you provide options for webpack-serve
  stats: "errors-only",  // lets you precisely control what bundle information gets displayed
  devServer: {
    contentBase: path.join(__dirname, 'public'), // boolean | string | array, static file location
    compress: true, // enable gzip compression
    historyApiFallback: true, // true for index.html upon 404, object for multiple paths
    hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
    https: false, // true for self-signed, object for cert authority
    noInfo: true, // only errors & warns on hot reload
  },
  plugins: [
      new StartServerPlugin('server.js'),
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
      new webpack.DefinePlugin({
          'process.env': { BUILD_TARGET: JSON.stringify('server') }
      })
  ],
  output: { path: path.join(__dirname, 'graph-api/dist'), filename: 'server.js' }
},
]