let num = 266219;

let str = String(num);

array = str.split('');

const reducer = (accumulator, currentValue) => accumulator * currentValue;

// console.log(array.reduce(reducer));

// 1296

let result = array.reduce(reducer) ** 3;

// console.log(result);

// 2176782336

let nowStr = String(result);

console.log(nowStr.substring(0,2));

