import globals from 'globals'
import prettier from 'eslint-plugin-prettier'

export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser
    },
    plugins: {
      prettier
    },
    rules: {
      'prettier/prettier': 'error'
    }
  }
]
