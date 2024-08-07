module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: '2021', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  rules: {
    'react/prop-types': 'off',
  },
};
