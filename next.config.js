const webpack = require('webpack');

module.exports = {
    webpack5: true,
    webpack: (config, { isServer }) => {
        if (!isServer) {
          config.resolve.fallback = {
            ...config.resolve.fallback,
            zlib: require.resolve('browserify-zlib'),
          };
        }
        return config;
      },
  };