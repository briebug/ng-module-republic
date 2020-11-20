const webpack = require('webpack');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const deps = require('../../package.json').dependencies;

module.exports = {
  output: {
    publicPath: 'http://localhost:4201/',
    uniqueName: 'dashboard',
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'dashboard',
      library: { type: 'var', name: 'dashboard' },
      filename: 'remoteEntry.js',
      shared: {
        '@angular/core': { eager: true, singleton: true, requiredVersion: deps['@angular/core'] },
        '@angular/common': { eager: true, singleton: true, requiredVersion: deps['@angular/common'] },
        '@angular/router': { eager: true, singleton: true, requiredVersion: deps['@angular/router'] },
      },
    }),
  ],
};
