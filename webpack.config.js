const path = require('path');
const { VueLoaderPlugin } = require('vue-loader')


module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ],
  },
  plugins:[new VueLoaderPlugin()],
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.esm-bundler.js'
    }
  }
};