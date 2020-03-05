var path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    RayQ: './src/main.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: 'RayQ',
    libraryTarget: 'umd',
    umdNamedDefine: true
  }
};
