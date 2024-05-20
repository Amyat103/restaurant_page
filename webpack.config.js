const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
      filename: 'index_bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    devtool: 'inline-source-map',
    plugins: [
      new HtmlWebpackPlugin({
        inject: 'body',
        template: path.resolve(__dirname, 'src', 'index.html'),
      })
    ],
    module: {
      rules: [
        {
          test: /\.(png|jpg|jpeg)$/i,
          type: 'asset/resource',
        }
      ]
    }
};

