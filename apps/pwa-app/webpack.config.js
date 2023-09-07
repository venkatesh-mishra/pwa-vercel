const { composePlugins, withNx } = require('@nx/webpack');
const { withReact } = require('@nx/react');
const path = require('path');
const { resolve } = require('path');
const fs = require('fs');
const pwaWebpackConfig = require('@salesforce/pwa-kit-dev/configs/webpack/config');
const { ModuleFederationPlugin } = require('webpack').container;


const projectDir = process.cwd();
const findInProjectThenSDK = (pkg) => {
  const projectPath = resolve(projectDir, 'node_modules', pkg);
  return projectPath;
};

const newConfig = [...pwaWebpackConfig];
newConfig[0] = {
  ...newConfig[0],
  module: {
    ...newConfig[0].module,
    rules: [
      ...newConfig[0].module.rules,
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: findInProjectThenSDK('style-loader'),
          },
          {
            loader: findInProjectThenSDK('css-loader'),
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: findInProjectThenSDK('url-loader'),
        }]
      }
    ],
    // plugins: [
    //   ...newConfig[0].module.plugins,
    //   new ModuleFederationPlugin({
    //     name: 'main_app',
    //     remotes: {
    //       'checkout': 'checkout@http://localhost:3001/_next/static/chunks/remoteEntry.js',
    //     },
    //   }),
    // ]
  },
};
console.log('new webpack config', newConfig[0].module);

module.exports = [...newConfig];
