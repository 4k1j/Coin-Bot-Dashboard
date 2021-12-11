module.exports = function (api) {
  api.cache(true);

  const presets = [
    [
      'next/babel',
      {
        'preset-react': {
          runtime: 'automatic',
          importSource: '@emotion/react',
        },
      },
    ],
  ];

  const plugins = [
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['@babel/plugin-proposal-private-methods', { loose: true }],
    ['@babel/plugin-transform-async-to-generator'],
    ['@babel/plugin-transform-runtime'],
    ['@emotion/babel-plugin'],
  ];

  return {
    presets,
    plugins,
  };
};
