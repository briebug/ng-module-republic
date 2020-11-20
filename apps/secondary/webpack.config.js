const webpack = require('webpack');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const deps = require('../../package.json').dependencies;

module.exports = {
  output: {
    publicPath: 'http://localhost:4203/',
    uniqueName: 'secondary',
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'secondary',
      library: { type: 'var', name: 'secondary' },
      filename: 'remoteEntry.js',
      exposes: {
        './Secondary': './apps/secondary/src/app/secondary/secondary.component.ts',
      },
      shared: {
        '@angular/core': { eager: true, singleton: true, requiredVersion: deps['@angular/core'] },
        '@angular/common': { eager: true, singleton: true, requiredVersion: deps['@angular/common'] },
        '@angular/router': { eager: true, singleton: true, requiredVersion: deps['@angular/router'] },
      },
    }),
  ],
};
