/*
 * @Author: sifengyuan
 * @Date: 2022-07-23 10:50:48
 * @LastEditors: sifengyuan
 * @LastEditTime: 2022-07-23 18:33:40
 * @FilePath: /iuUI/.eslintrc.js
 * @Description: update here
 */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true 
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/essential',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: [
    // "vue",

    '@typescript-eslint'
  ],
  rules: {
    quotes: [
      'error',
      'single',
      { avoidEscape: true, allowTemplateLiterals: true }
    ],
    'no-undef': 2,
    'vue/max-attributes-per-line': 'off',
    'vue/no-multiple-template-root': 'off',
    'vue/script-setup-uses-vars': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'none',
          requireLast: false
        },
        singleline: {
          delimiter: 'semi',
          requireLast: true
        }
      }
    ],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error']
  }
}
