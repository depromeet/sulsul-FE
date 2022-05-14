const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    'storybook-dark-mode',
    {
      name: '@storybook/addon-storysource',
      options: {
        rule: {
          include: [path.resolve(__dirname, '../src')],
        },
        loaderOptions: {
          prettierConfig: { printWidth: 120, singleQuote: true },
        },
      },
    },
  ],
  framework: '@storybook/react',
  webpackFinal: async (config) => {
    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin({
        extensions: config.resolve.extensions,
      }),
    ];

    config.module.rules.unshift({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    /** refs: https://minoo.medium.com/storybook%EC%97%90%EC%84%9C-nextjs-%EC%97%90%EB%9F%AC%EA%B0%80-%EB%B0%9C%EC%83%9D%ED%95%A0-%EB%95%8C-85ec0b3662af */
    config.resolve.alias['next/router'] = require.resolve('../__mocks__/next/router.js');
    config.resolve.alias['next/link'] = require.resolve('../__mocks__/next/link.js');
    config.resolve.alias['next/image'] = require.resolve('../__mocks__/next/image.js');

    return config;
  },
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
};
