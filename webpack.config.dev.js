'use strict';

const path = require('path');
const webpack = require('webpack');
const NODE_ENV = process.env.NODE_ENV;

module.exports = {
  target: 'web',

  devtool: 'cheap-module-eval-source-map',

  entry: [
    'babel-polyfill',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/dev-server',
    './assets/main.js',
  ],

  output: {
    path: path.join(__dirname, '/public/dist/'),
    filename: 'bundle.js',
    pathInfo: true,
    publicPath: 'http://localhost:8080/dist/',
    hot: true,
  },

  resolve: {
    root: path.join(__dirname, ''),
    modulesDirectories: [
      'web_modules',
      'node_modules',
      'assets',
      'assets/components',
      'assets/styles',
    ],
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx'],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      __ENV__: NODE_ENV,
    }),
  ],

  module: {
    loaders: [
      {
        test: /\.scss$/, // sass files
        loader: 'style!css!autoprefixer?browsers=last 2 version!sass?outputStyle=expanded',
      },
      {
          test: /\.css$/,
          loader: 'style!css'
      },
      {
          test: /\.sass/,
          loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded&indentedSyntax'
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
      {
        test: /\.(ttf|eot|svg|woff)(\?[a-z0-9]+)?$/, // fonts files
        loader: 'file-loader?name=[path][name].[ext]',
      },
      {
        test: /\.jsx?$/, // react files
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel?presets[]=es2015,presets[]=stage-0,presets[]=react'],
        include: path.join(__dirname, 'assets'),
      },
    ],

    noParse: /\.min\.js/,
  },
};
