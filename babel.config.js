const is_dev = process.env.NODE_ENV === 'development'

module.exports = {
  // 执行顺序由右往左，所以先处理 ts，再处理 jsx，最后再试一下 babel 转换为低版本语法
  "presets": [
    [
      "@babel/preset-env",
      {
        // 设置兼容目标浏览器版本，这里可以不写，babel-loader 会自动寻找上面配置好的文件 .browserslistrc
        // "targets": {
        //  "chrome": 35,
        //  "ie": 9
        // },
        "useBuiltIns": "usage", // 根据配置的浏览器兼容，以及代码中使用到的 api 进行引入 polyfill 按需添加
        "corejs": 3 // 配置使用 core-js 使用的版本
      }
    ],
    "@babel/preset-react",
    "@babel/preset-typescript"
  ],

  "plugins": [
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    is_dev && require.resolve('react-refresh/babel'), // 如果是开发模式,就启动react热更新插件
  ].filter(Boolean)
}