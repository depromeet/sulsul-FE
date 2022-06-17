const { withSentryConfig } = require('@sentry/nextjs');
const intercept = require('intercept-stdout');

const rewrites =
  process.env.NODE_ENV === 'development'
    ? async () => {
        return {
          fallback: [
            {
              source: '/api/:path*',
              destination: `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/:path*`,
            },
            {
              source: '/guest/api/:path*',
              destination: `${process.env.NEXT_PUBLIC_API_BASE_URL}/guest/api/:path*`,
            },
          ],
        };
      }
    : undefined;

/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites,
  reactStrictMode: true,
  webpack(config) {
    /**
     * @note https://stackoverflow.com/questions/55175445/cant-import-svg-into-next-js/70961634#comment125790685_70961634
     * url-loader가 없는 경우
     * export { ReactComponent as Icon } from './icon.svg -> 사용불가
     * export { default as Icon } from './icon.svg -> 사용가능 (이렇게 사용한 경우 스토리북에서 오류)
     */
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack', 'url-loader'],
    });

    return config;
  },
};

const sentryWebpackPluginOptions = {
  // Additional config options for the Sentry Webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  //   release, url, org, project, authToken, configFile, stripPrefix,
  //   urlPrefix, include, ignore

  silent: true, // Suppresses all logs
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
};

// safely ignore recoil stdout warning messages
function interceptStdout(text) {
  if (text.includes('Duplicate atom key')) {
    return '';
  }
  return text;
}

// Intercept in dev and prod
intercept(interceptStdout);

module.exports = withSentryConfig(nextConfig, sentryWebpackPluginOptions);
