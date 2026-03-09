import { BuildOptions } from "./types/config";
import webpack from "webpack";
import { buildPugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolves";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(
  options: BuildOptions,
): webpack.Configuration {
  const { paths, mode, isdev } = options;

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: "[name].[contenthash].js",
      path: paths.build,
      clean: true,
    },
    plugins: buildPugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    devtool: isdev ? "inline-source-map" : undefined,
    devServer: isdev ? buildDevServer(options) : undefined,
  };
}
