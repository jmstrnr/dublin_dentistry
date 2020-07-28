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
    // To be turned on and off as needed
    'no-console': 'off',
    'no-unused-vars': 'off',
    'func-names': 'off',

    // Likely will always be unneeded and turned off
    'no-plusplus': 'off',
    'no-use-before-define': 'off',

    // Style rules disabled so wont conflict with Prettier
  },
};
