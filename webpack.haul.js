const webpack = require('webpack');

module.exports = ({ platform }, defaults) => ({
  entry: `./index.${platform}.js`,
  module: {
    ...defaults.module,
    rules: [
      ...defaults.module.rules,
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [
          /node_modules\/native-base-shoutem-theme/,
          /node_modules\/@shoutem/,
          /node_modules\/react-native-vector-icons/,
        ],
        options: {
          presets: ['react-native'],
        },
      },
      {
        test: /\.(otf|eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader',
      },
    ],
  },
  resolve: {
    ...defaults.resolve,
    plugins: [
      ...defaults.resolve.plugins,
      // Always expose NODE_ENV to webpack, in order to use `process.env.NODE_ENV`
      // inside your code for any environment checks;
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        },
      }),
    ],
  },
});
