const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        //exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
      hash: true,
      templateParameters: {
        titulo: 'Manual de Webpack en Desarrolloweb',
        encabezamiento: 'Aprendo Webpack en DesarrolloWeb.com',
      }
    }),
    new ScriptExtHtmlWebpackPlugin({ 
      // agrega arbitrariamente cualquier tipo de atributo en la etiqueta SCRIPT
      custom: [
        {
          test: /\.js$/,
          attribute: 'nomodule',
        },
      ]
    })
  ]
}