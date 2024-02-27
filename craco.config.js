const path = require('path');

const CracoAlias = require('craco-alias');
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
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        tsConfigPath: path.resolve(__dirname, './tsconfig.json'),
        aliases: {
          '@components': path.resolve(__dirname, './src/components'),
          '@utils': path.resolve(__dirname, './src/utils'),
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
