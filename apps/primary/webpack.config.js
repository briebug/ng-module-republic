const webpack = require("webpack");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    publicPath: "http://localhost:4202/",
    uniqueName: "primary",
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "primary",
      library: { type: "var", name: "primary" },
      filename: "remoteEntry.js",
      exposes: {
        PrimaryModule:
          "./apps/primary/src/app/primary/primary.module.ts",
      },
      shared: {
        "@angular/core": { singleton: true },
        "@angular/common": { singleton: true },
        "@angular/router": { singleton: true },
      },
    }),
  ],
};
