const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');

module.exports = {
  output: {
    filename: 'main-es6.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'dist/index.html',
      hash: true
    }),
    new ScriptExtHtmlWebpackPlugin({
      module: 'js'
    })
  ]
}