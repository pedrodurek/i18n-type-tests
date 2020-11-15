module.exports = {
  presets: ['@babel/env', '@babel/typescript', '@babel/react'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          components: './src/components',
        },
      },
    ],
  ],
};
