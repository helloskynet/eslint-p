const m = async (id) => {
  return await Promise.resolve(id)
}
console.log(m)

// 规则 arrow-parens 和 space-before-function-paren

// VScode 安装ESlint插件之后
// 使用 Quick Fix --> fix all autofixable problems
// 或者开启保存自动修复之后，保存也会触发

// 在控制台直接执行 eslint --fix index.js 不会出现这个问题

// 格式化之后结果

// const m = asyncid => {
//   return await Promise.resolve(id);
// };
// console.log(m);
