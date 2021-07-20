module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [ [
    'istanbul', {
      extension: [
        '.js',
        '.ts',
        '.vue',
      ]
    }]
  ],
}
