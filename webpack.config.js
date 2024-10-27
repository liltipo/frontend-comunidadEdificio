/* eslint-disable max-lines-per-function */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (_, argv) => ({
  entry: './src/index.js',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
    new HtmlWebpackPlugin({
      title: 'Comunidad Edificio'
    })
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react']
        }
      },
      {
        test: /\.s?css$/,
        use: argv.mode === 'production'
          ? [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
          : ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      },
      {
        test: /\.pdf$/,  // Añadido para manejar archivos PDF
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]', // Mantiene el nombre original del archivo
              outputPath: 'assets/'  // Coloca el archivo en la carpeta 'assets'
            }
          }
        ]
      }
    ]
  },
  devServer: {
    port: 5050,
    hot: false,
    historyApiFallback: {
      index: '/'
    }
  }
});
