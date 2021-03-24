/*
 * @Author: zhangyanlong
 * @Date: 2021-03-19 00:30:51
 * @LastEditTime: 2021-03-19 02:19:54
 * @LastEditors: zhangyanlong
 * @Description:
 */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': 'off',
    'react/react-in-jsx-scope': 'off',
    'max-len': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/forbid-prop-types': 'off',
    'no-debugger': 'off',
    'linebreak-style': 'off',
    'no-use-before-define': 'off',
    'import/no-mutable-exports': 'off',
    'consistent-return': 'off',
  },
};
