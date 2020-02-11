

module.exports = {
  output: {
    filename: jsDistFile
  },
  mode: 'none',
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    }]
  }
}

// module.exports = (env, argv) => {

// }
