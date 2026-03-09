import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/config";

// const cssLoader = {
//   test: /\.s[ac]ss$/i,
//   exclude: /\.module\.s[ac]ss$/i,
//   use: [
//     options.isdev ? "style-loader" : MiniCssExtractPlugin.loader,
//     "css-loader",
//     "sass-loader",
//   ],
// };

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const cssLoader = {
    test: /\.s[ac]ss$/i,
    exclude: /\.module\.s[ac]ss$/i,
    use: [
      // MiniCssExtractPlugin позволяет выносить css код в отдельные файлы
      options.isdev ? "style-loader" : MiniCssExtractPlugin.loader,
      "css-loader",
      "sass-loader",
    ],
  };

  const svgLoader = {
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: "file-loader",
      },
    ],
  };

  const cssModuleLoader = {
    test: /\.module\.s[ac]ss$/i,
    use: [
      options.isdev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          esModule: false,
          modules: {
            localIdentName: options.isdev
              ? "[path][name]__[local]"
              : "[hash:base64:8]",
          },
        },
      },
      "sass-loader",
    ],
  };

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  return [fileLoader, svgLoader, typescriptLoader, cssModuleLoader, cssLoader];
}
