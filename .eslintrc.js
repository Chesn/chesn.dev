module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    node: true,
    browser: true,
    jest: true
  },
  extends: [
    'standard',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended'
  ],
  plugins: ['@typescript-eslint', 'react-hooks'],
  parserOptions: {
    jsx: true,
    useJSXTextNode: true
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  globals: {
    // 全局变量
  },
  rules: {
    'no-console': ['error', { allow: ['log', 'info', 'warn', 'error'] }],
    'no-use-before-define': 0,
    'no-useless-constructor': 'off',

    'react/jsx-closing-bracket-location': [
      1,
      {
        selfClosing: 'tag-aligned',
        nonEmpty: 'after-props'
      }
    ],
    'react/jsx-first-prop-new-line': 2,
    'react/jsx-indent-props': [2, 2],
    'react/jsx-max-props-per-line': [1, { when: 'multiline' }],
    'react/jsx-no-target-blank': 0,

    'react-hooks/exhaustive-deps': 'error',
    'react-hooks/rules-of-hooks': 'error',

    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-unused-vars': 2,
    '@typescript-eslint/no-useless-constructor': ['error']
  }
}
