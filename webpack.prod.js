const base = require('./webpack.base.js');
const { merge } = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = merge(base, {
  mode: 'production',
  entry: {
    app: './src/index.tsx',
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
      reportFilename: 'bundle_sizes.html',
    }),
  ],
});
