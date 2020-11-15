module.exports = {
  presets: [
    '@babel/env',
    '@babel/typescript',
    [
      '@babel/react',
      {
        runtime: 'automatic',
      },
    ],
  ],
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
