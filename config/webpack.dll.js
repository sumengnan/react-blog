const { resolve } = require('path')
const webpack = require('webpack')
const TerserPlugin = require('terser-webpack-plugin')

// webpack --config webpack.dll.js
module.exports = {
  entry: {
    'react_redux': ['react', 'react-dom', 'react-router-dom', 'react-redux', 'redux-thunk'],
  },
  output: {
    filename: '[name].js',
    path: resolve(__dirname, '../dll'),
    library: '[name]_[hash]' // 打包的库里面向外暴露出去的内容叫什么名字
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]_[hash]', // 映射库的暴露的内容名称
      path: resolve(__dirname, '../dll/manifest.json') // 输出文件路径
    })
  ],
  mode: 'production',

  // optimization: {
  //   minimize: true,
  //   minimizer: [
  //     new TerserPlugin()
  //   ]
  // }
}
