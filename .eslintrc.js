module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src', '@types'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  plugins: ['react', 'react-hooks', 'prettier', '@typescript-eslint'],
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'eslint:recommended',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  ignorePatterns: ['webpack*.js'],
  rules: {
    'import/prefer-default-export': 'off',
    'react/jsx-filename-extension': 'off',
    'no-unused-vars': 'off',
    'object-curly-newline': 'off',
    'react/prop-types': 'off',
    'implicit-arrow-linebreak': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-closing-bracket-location': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    indent: 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
};
