const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'dialed-webpack.bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      // files
      { test: /\.(jpe?g|gif|png|svg|wav|mp3)$/, loader: "file-loader" },
      // fonts
      { test: /\.(otf|eot|svg|ttf|woff|woff2)$/, loader: 'url-loader?limit=8192' },
      // css
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      // js, jsx
      { test: /\.(js|jsx)?$/, exclude: /node_modules/, loaders: ['babel-loader'] }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './app/index.html'
    })
  ]
};