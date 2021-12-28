const path = require('path');

module.exports = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: config => {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');

    return config;
  },
};
