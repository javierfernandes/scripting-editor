/* eslint-disable no-var, vars-on-top */
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')
const Dashboard = require('webpack-dashboard')
const DashboardPlugin = require('webpack-dashboard/plugin')

module.exports = merge.smart(baseConfig, {
  plugins: [
    new DashboardPlugin(new Dashboard().setData)
  ],
  devServer: {
    contentBase: 'app/',
  },
  devtool: '#eval-source-map'
})