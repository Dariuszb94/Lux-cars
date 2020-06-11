module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'better-styled-components'
  ],
  rules: {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    'max-len': ["error", { "code": 480 }],
    "react/prop-types": 0,
    "react/destructuring-assignment": [0, "always", { "ignoreClassFields": false }],
    "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
    'react/jsx-props-no-spreading': [0, {
      html: "ignore",
      custom: "ignore",
      exceptions: [],
    }],
    "react/no-string-refs": [0],
    "class-methods-use-this": [0]
  },
};
