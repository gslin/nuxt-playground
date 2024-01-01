module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    '@nuxt/eslint-config'
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        '.eslintrc.{js,cjs}'
      ],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'vue'
  ],
  root: true,
  rules: {
  }
}
