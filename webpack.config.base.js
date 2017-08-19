const path = require('path')

module.exports = {
  entry: './app/app.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'dialed-webpack.bundle.js'
  },
  module: {
    rules: [
      // files
      { test: /\.(jpe?g|gif|png|svg|wav|mp3)$/, loader: "file-loader" },
      // fonts
      { test: /\.(otf|eot|svg|ttf|woff|woff2)$/, loader: 'url-loader?limit=8192' },
      // css
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      // js
      { test: /\.js?$/, exclude: /node_modules/, loaders: ['babel-loader'] }
    ]
  }
};