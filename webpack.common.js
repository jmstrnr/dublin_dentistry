const webpack = require('webpack');

module.exports = {
  entry: {
    main: './src/index.js',
  },
  plugins: [new webpack.ProgressPlugin()],
  module: {
    rules: [
      {
        test: /\.html$/i,
        use: ['html-loader'],
      },
      {
        test: /\.(gif|png|jpe?g|svg|ico)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              // Dont use a content hash in the name, or background-image urls wont work.
              name: '[name].[ext]',
              publicPath: 'styles/images',
              outputPath: 'styles/images',
              limit: 8192,
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65,
              },
              pngquant: {
                quality: [0.65, 0.9],
                speed: 10,
              },
              gifsicle: {
                interlaced: false,
                optimizationLevel: 2,
              },
              svgo: {
                cleanupAttrs: true,
              },
            },
          },
        ],
      },
    ],
  },
};
