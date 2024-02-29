const { getLoader } = require('@craco/craco');
const CracoEsbuildPlugin = require('craco-esbuild');
const webpack = require('webpack');

module.exports = {
  plugins: [
    {
      plugin: CracoEsbuildPlugin,
      options: {
        esbuildMinimizerOptions: {
          target: 'es2015',
          css: true, //  OptimizeCssAssetsWebpackPlugin being replaced by esbuild.
        },
      },
    },
    {
      plugin: {
        overrideWebpackConfig: ({ context, webpackConfig }) => {
          const { isFound, match: fileLoaderMatch } = getLoader(
            webpackConfig,
            (rule) => rule.type === 'asset/resource',
          );

          if (!isFound) {
            throw {
              message: `Can't find file-loader in the ${context.env} webpack config!`,
            };
          }

          fileLoaderMatch.loader.exclude.push(/\.ya?ml$/);

          const yamlLoader = {
            use: 'yaml-loader',
            test: /\.(ya?ml)$/,
          };
          webpackConfig.module.rules.push(yamlLoader);
          return webpackConfig;
        },
      },
    },
  ],
  webpack: {
    plugins: {
      add: [
        new webpack.DefinePlugin({
          process: { browser: {} },
        }),
      ],
    },
    configure: {
      resolve: {
        fallback: {
          fs: false,
          tls: false,
          net: false,
          path: false,
          zlib: false,
          http: false,
          https: false,
          stream: false,
          crypto: false,
          buffer: false,
        },
      },
    },
  },
};
