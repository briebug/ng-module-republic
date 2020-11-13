const webpack = require("webpack");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    publicPath: "http://localhost:4203/",
    uniqueName: "secondary",
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "secondary",
      library: { type: "var", name: "secondary" },
      filename: "remoteEntry.js",
      exposes: {
        SecondaryModule:
          "./apps/secondary/src/app/secondary/secondary.module.ts",
      },
      shared: {
        "@angular/core": { singleton: true },
        "@angular/common": { singleton: true },
        "@angular/router": { singleton: true },
      },
    }),
  ],
};
