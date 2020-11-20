const webpack = require('webpack');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const deps = require('../../package.json').dependencies;

module.exports = {
  output: {
    publicPath: 'http://localhost:4200/',
    uniqueName: 'ledger',
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      shared: {
        '@angular/core': { eager: true, singleton: true, requiredVersion: deps['@angular/core'] },
        '@angular/common': { eager: true, singleton: true, requiredVersion: deps['@angular/common'] },
        '@angular/router': { eager: true, singleton: true, requiredVersion: deps['@angular/router'] },
      },
    }),
  ],
};