// export default {
//   env: {
//     browser: true,
//     es2021: true,
//   },
//   extends: [
//     'plugin:react/recommended',
//     'airbnb',
//     'plugin:prettier/recommended',
//   ],
//   parser: '@typescript-eslint/parser',
//   parserOptions: {
//     ecmaFeatures: {
//       jsx: true,
//     },
//     ecmaVersion: 12,
//     sourceType: 'module',
//   },
//   plugins: [
//     'react',
//     '@typescript-eslint',
//     'react-hooks',
//     'unused-imports',
//     'prettier',
//   ],
//   settings: {
//     react: {
//       version: 'detect',
//     },
//   },
//   rules: {
//     'react/jsx-filename-extension': [
//       2,
//       { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
//     ],
//     'react/jsx-props-no-spreading': ['off'],
//     'jsx-a11y/label-has-associated-control': ['error', { assert: 'either' }],
//     'react/jsx-indent': 'off',
//     'react/jsx-indent-props': 'off',
//     'react/jsx-curly-newline': 'off',
//     'react/prop-types': 'off',
//     'import/no-unresolved': 'off',
//     'no-param-reassign': 'off',
//     'prettier/prettier': [
//       'error',
//       {
//         endOfLine: 'auto',
//       },
//     ],
//     'react-hooks/rules-of-hooks': 'error',
//     'import/prefer-default-export': 'off',
//     'react/function-component-definition': 'off',
//     'no-unused-vars ': ['off'],
//     'import/extensions': 'off',
//     'no-shadow': 'off',
//     'no-use-before-define': 'off',
//     'react/require-default-props': 'off',
//     'no-promise-executor-return': 'off',
//     'no-unused-vars': 'off',
//     'import/no-extraneous-dependencies': 'off',
//   },
// };






// // module.exports = {
// //   root: true,
// //   env: { browser: true, es2020: true },
// //   extends: [
// //     'eslint:recommended',
// //     'plugin:react/recommended',
// //     'plugin:react/recommended',
// //     'plugin:react/jsx-runtime',
// //     'plugin:react-hooks/recommended',
// //   ],
// //   ignorePatterns: ['dist', '.eslintrc.cjs'],
// //   parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
// //   settings: { react: { version: '18.2' } },
// //   plugins: ['react-refresh'],
// //   rules: {
// //     "rules": {
// //       "no-unused-vars": ["error", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }]
// //   },
// //     'react-refresh/only-export-components': [
// //       'warn',
// //       { allowConstantExport: true },
// //     ],
// //   },
// // }
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:@typescript-eslint/recommended', // Add TypeScript support
    'prettier', // Integrate Prettier
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'react-hooks',
    'prettier',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/jsx-props-no-spreading': 'off', // Enable spreading of props
    'react/jsx-indent': 'off',
    'react/jsx-indent-props': 'off',
    'react/jsx-curly-newline': 'off',
    'react/prop-types': 'off', // Disable prop-types check when using TypeScript
    'react-hooks/rules-of-hooks': 'error',
    'prettier/prettier': 'error', // Enforce Prettier rules
    'import/prefer-default-export': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { args: 'after-used', ignoreRestSiblings: true }], // Enable TypeScript's unused-vars check
    'import/extensions': 'off',
    'no-shadow': 'off',
    'no-use-before-define': 'off',
    'react/require-default-props': 'off', // Disable default props check when using TypeScript
    'no-promise-executor-return': 'off',
    'import/no-extraneous-dependencies': 'off',
  },
};
