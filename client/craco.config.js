const path = require("path");

module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      // 번들링된 파일의 경로를 수정하는 설정을 추가합니다.
      webpackConfig.output = {
        ...webpackConfig.output,
        publicPath: "../server/public/", // 원하는 경로로 수정합니다.
      };

      return webpackConfig;
    },
  },
};
