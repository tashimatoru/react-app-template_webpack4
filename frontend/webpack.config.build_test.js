const { merge } = require('webpack-merge')
const common = require('./webpack.config.js')
const webpack = require('webpack');
const path = require('path')

module.exports = merge(common, {
  mode: 'production',
  performance: { hints: false },
  output: {
    path: path.join(__dirname, "/build/test_build"),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.DefinePlugin({
    }),
  ]
})
