const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'production',
  entry: './src/js/index.js',
  output: {
   filename: 'js/main.js',
    path: path.resolve(__dirname, 'docs'),
  },
  devServer: {
    static: './docs',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Index template',
      template: 'src/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ]
          }
        }
      }
    ]
  }
};
