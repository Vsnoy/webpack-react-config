module.exports = {
  printWidth: 100, // 一行的字符数，如果超过会进行换行
  tabWidth: 2, // 一个 tab 代表几个空格数，默认就是2
  useTabs: false, // 是否启用 tab 取代空格符缩进，.editorconfig 设置空格缩进，所以设置为 false
  semi: false, // 行尾是否使用分号
  singleQuote: true, // 字符串是否使用单引号
  trailingComma: 'none', // 对象或数组末尾是否添加逗号
  jsxSingleQuote: true, // jsx 中是否使用单引号
  bracketSpacing: true, // 对象大括号之间是否有空格，默认为 true，效果：{ foo: bar }
  arrowParens: 'avoid' // 箭头函数如果只有一个参数则省略括号
}
