const eslintPreset = require('lint/eslint-preset');

module.exports = {
  ...eslintPreset,
  rules: {
    ...eslintPreset.rules,
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
  },
};
