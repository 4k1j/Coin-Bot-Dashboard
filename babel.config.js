module.exports = function (api) {
  api.cache(true);

  const presets = [['next/babel']];

  const plugins = [
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['@babel/plugin-proposal-private-methods', { loose: true }],
    ['@babel/plugin-transform-async-to-generator'],
    ['@babel/plugin-transform-runtime'],
    [
      'babel-plugin-styled-components',
      {
        ssr: true,
        displayName: true,
      },
    ],
  ];

  return {
    presets,
    plugins,
  };
};
