/* eslint-disable no-var, vars-on-top */
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');
const Dashboard = require('webpack-dashboard');
const DashboardPlugin = require('webpack-dashboard/plugin');

const dashboard = new Dashboard();

const devConfig = {
  plugins: [
    new DashboardPlugin(dashboard.setData)
  ],
  devServer: {
    contentBase: 'app/',
  },
  devtool: '#eval-source-map'
}

module.exports = merge.smart(baseConfig, devConfig);

