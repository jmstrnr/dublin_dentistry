module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  rules: {
    'no-plusplus': 'off',
    'no-use-before-define': 'off',
    'no-confusing-arrow': 'off',
    'implicit-arrow-linebreak': 'off',
    'comma-dangle': 'off',
    'function-paren-newline': 'off',
    'linebreak-style': 'off',
    'spaced-comment': 'off',
    'operator-linebreak': 'off',
    'no-restricted-syntax': 'off',
  },
};
