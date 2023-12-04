const m = async (id) => {
  return await Promise.resolve(id);
};
console.log(m);

// 规则 arrow-parens 和 space-before-function-paren

// 格式化之后

// const m = asyncid => {
//   return await Promise.resolve(id);
// };
// console.log(m);
