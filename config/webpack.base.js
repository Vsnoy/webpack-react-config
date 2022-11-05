const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

const is_dev = process.env.NODE_ENV === 'development'

module.exports = {
  // 入口
  entry: path.join(__dirname, '../index.tsx'),

  // 输出
  output: {
    filename: 'static/js/[name].[chunkhash:8].js', // 每个输出js的名称
    path: path.join(__dirname, '../dist'), // 打包结果输出路径
    clean: true, // webpack4需要配置clean-webpack-plugin来删除dist文件,webpack5内置了
    publicPath: '/' // 打包后文件的公共前缀路径
  },

  // 模块
  module: {
    rules: [
      {
        test: /.(ts|tsx)$/,
        use: ['babel-loader']
      },
      {
        test: /.(css|less)$/,
        use: [
          // 'style-loader',
          // 开发环境使用 style-looader 内联样式，打包模式抽离 css 到外部样式
          is_dev ? 'style-loader' : MiniCssExtractPlugin.loader, 
          'css-loader',
          // {
          //   loader: 'css-loader',
          //   options: {
          //     modules: {
          //       auto: true,
          //     },
          //   }
          // },
          'postcss-loader',
          'less-loader'
        ]
      },
      {
        test:/.(png|jpg|jpeg|gif|svg)$/, // 匹配图片文件
        type: "asset", 
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 小于 10kb 转 base64
          }
        },
        generator:{ 
          filename:'static/img/[name].[contenthash:8][ext]', // 文件输出目录和命名
        },
      },
    ]
  },

  // 插件
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'), // 模板取定义root节点的模板
      inject: true, // 自动注入静态资源
    })
  ],
  
  // 解析
  resolve: {
    extensions: ['.js', '.tsx', '.ts'],
    plugins: [
      // 别名配置从 tsconfig.json 文件中引入，避免太过分散
      new TsconfigPathsPlugin({
        configFile: path.join(__dirname, '../tsconfig.json') 
      })
    ]
    // alias: { // 别名
    //   '@': path.join(__dirname, '../src')
    // }
  },

  // 缓存
  cache: {
    type: 'filesystem' // 使用文件缓存
  },
}