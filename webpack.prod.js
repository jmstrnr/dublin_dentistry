const path = require('path');

const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const corejs = require('core-js'); // Not needed if useBuiltIns: 'usage', but keep just in case changed in future update
const regeneratorRuntime = require('regenerator-runtime');

module.exports = merge(common, {
  output: {
    filename: './scripts/[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
  },
  mode: 'production',
  optimization: {
    splitChunks: {
      chunks: 'all', // include all types of chunks, change to async if issues arise
    },
    minimizer: [
      new OptimizeCssAssetsPlugin(),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        chunks: ['main'],
        template: './src/index.html',
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true,
        },
      }),
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './styles/[name].[contentHash:5].css',
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader, // Extract css into files
          },
          {
            loader: 'css-loader', // Turns css into commonjs
            options: {
              url: false, // Must be false for background image urls to work in production
            },
          },
          {
            loader: 'postcss-loader', // Adds vendor prefixes
          },
          {
            loader: 'resolve-url-loader', // Rewrites relative URLs
          },
        ],
      },
      {
        test: /\.m?js$/i,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader', // Transpiles js
          options: {
            presets: [
              [
                // contains preset-env and its options
                '@babel/preset-env',
                {
                  useBuiltIns: 'usage',
                  corejs: {
                    version: 3,
                  },
                },
              ],
            ],
          },
        },
      },
    ],
  },
});
