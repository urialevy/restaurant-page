const path = require('path');

module.exports = {
    mode:'development',
    entry: {
      entry: './src/index.js',
      about: './src/about.js'},
  devServer: {
    static: './dist',
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};