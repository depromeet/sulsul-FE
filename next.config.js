/** @type {import('next').NextConfig} */
const nextConfig = {
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

module.exports = nextConfig;
