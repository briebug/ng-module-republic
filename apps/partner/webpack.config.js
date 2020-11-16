const webpack = require("webpack");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    publicPath: "http://localhost:4204/",
    uniqueName: "partner",
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "partner",
      library: { type: "var", name: "partner" },
      filename: "remoteEntry.js",
      exposes: {
        "./Feature":
          "./apps/partner/src/app/feature/feature.component.ts",
      },
      shared: {
        "@angular/core": { eager: true, singleton: true },
        "@angular/common": { eager: true, singleton: true },
        "@angular/router": { eager: true, singleton: true },
      },
    }),
  ],
};
