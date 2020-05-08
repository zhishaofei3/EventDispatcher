const path = require('path')

module.exports = {
  entry: './src/EventDispatcher.js',
  output: {
    filename: 'EventDispatcher.min.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{
          loader: 'babel-loader'
        }],
      }
    ]
  },
}
