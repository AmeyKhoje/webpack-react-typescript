const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = ({ mode } = { mode: 'production' }) => {
  return {
    mode,
    entry: './src/index.tsx',
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: `[name].[hash].js?v=${new Date().valueOf()}`,
    },
    devServer: {
      static: {
        directory: path.resolve(__dirname, './public'),
      },
      port: 3000,
      hot: true,
      open: true,
      compress: true,
      historyApiFallback: true,
      static: './public',
    },
    module: {
      rules: [
        {
          test: /\.(js|ts)x?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.s[ac]ss?$/i,
          use: [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
            },
            {
              loader: 'sass-loader',
            },
          ],
        },
        {
          test: /\.(png|svg|jp?g|gif)$/,
          use: {
            loader: 'file-loader',
          },
        },
      ],
    },
    resolve: {
      extensions: ['.jsx', '.js', '.tsx', '.ts'],
      alias: {
        src: path.resolve(__dirname, 'src'),
        components: path.resolve(__dirname, 'src/components'),
        assets: path.resolve(__dirname, 'src/assets'),
      },
    },
    plugins: [
      new HtmlWebpackPlugin({
        cache: true,
        chunks: true,
        filename: 'index.html',
        template: path.resolve(__dirname, 'public', 'index.html'),
      }),
    ],
    optimization: {
      minimize: true,
      minimizer: [
        '...',
        new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: true,
            },
            format: {
              comments: false,
            },
          },
          extractComments: false,
        }),
      ],
    },
  };
};
