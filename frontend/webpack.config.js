const webpack = require('webpack');
const path = require('path')

module.exports = {
  mode:    'development',
  performance: { hints: false },
  devtool: 'inline-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'ENVIRONMENT': JSON.stringify('development'),
    })
  ],

  entry: [
    '@babel/polyfill',
    './src/app.jsx'
  ],

  output: {
    publicPath: '/',
    path: path.join(__dirname, "/"),
    filename: 'bundle.js',
    chunkFilename: 'chunk/[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: [
          /\.jsx?$/
        ],
        exclude: path.join(__dirname, "/node_modules/"),
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /node_modules\/.*\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: [
          /\.css$/
        ],
        exclude: path.join(__dirname, "/node_modules/"),
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: [
          /\.ya?ml$/
        ],
        exclude: path.join(__dirname, "/node_modules/"),
        use: [
          {
            loader: 'js-yaml-loader',
          }
        ],
      },
      // binary
      {
        test: [
          /\.(png|jpg|gif|ttf|svg|eot|woff)$/
        ],
        loader: 'url-loader',
        options: {
          limit: 8192,
        },
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx', '.css', '.yml', '.yaml'],
    modules: [
      path.resolve('./src'),
      "node_modules"
    ]
  },

  //webpack-dev-server
  devServer: {
    contentBase: [
      // index.html(React root)
      path.join(__dirname, 'public/'),
    ],

    historyApiFallback: {
      rewrites: [
        { from: /^\/*$/, to: 'public/index.html' }
      ]
    },

    watchContentBase: true,
    disableHostCheck: true,
    hot: true,
    open: true,
    openPage: "",
    host: "0.0.0.0",
    port: 8000,
  }
}
