module.exports = {
  extends: ['get-off-my-lawn', 'prettier', 'plugin:@next/next/recommended'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['js', 'jsx', 'ts', 'tsx'],
      },
    },
  },
  rules: {
    'node/no-unpublished-import': 'off',
    '@next/next/no-html-link-for-pages': 'off',
    'import/no-unresolved': 'off',
    'react/jsx-curly-brace-presence': 'off',
    'react/display-name': 'off',
    'sort-keys': 'off',
    'react/jsx-sort-props': 'off',
    'objects/no-object-properties-one-line': 'off',
    'objects/no-object-properties-first-line': 'off',
    'objects/no-object-properties-last-line': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ["**/*.spec.*"],
        optionalDependencies: false,
        peerDependencies: false,
        packageDir: './',
      },
    ],
  },
};
