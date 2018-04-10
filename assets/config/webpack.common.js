var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var helpers = require('./helpers');

const VENDOR_LIBS = ['react', 'react-dom'];

module.exports = {
  entry: {
    bundle: './assets/src/main.js',
    vendor: VENDOR_LIBS
  },
devServer:{
  proxy: {
            "/api":"http://localhost:3000",
          }
},
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/
      },
      {
          test: /\.sass/,
          loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded&indentedSyntax'
      },
      {
          test: /\.scss/,
          loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded'
      },
      {
          test: /\.less/,
          loader: 'style-loader!css-loader!less-loader'
      },
      {
          test: /\.json/,
          loader: 'json-loader'
      },
      {
          test: /\.(png|jpg|gif)$/,
          loader: 'url-loader?limit=8192'
      },
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor', 'manifest']
    }),

    new HtmlWebpackPlugin({
      template: 'assets/src/index.html'
    })
  ]
};
