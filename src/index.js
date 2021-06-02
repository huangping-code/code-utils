import { sleep } from "./utils/sleep.js"
// console.log("start");
// await sleep(2000)
// console.log("end");

import { debounce } from './utils/debounce-throttle.js'

import { isDate, isRegExp } from './utils/typeTools.js'

console.log('ff', isRegEx);
// console.time('ttt');
// console.log(getType(null));
// console.log(getType(undefined));
// console.log(getType(''));
// console.log(getType(1));
// console.log(getType(NaN));
// console.log(getType([]));
// console.log(getType({}));
// console.log(getType(/a/));
// console.log(getType(new Date()));
// console.timeEnd('ttt')
// console.log('------');
// console.log(isNumber(NaN));
// console.log(isNumber(9));

// var obj = {
//   aaa: 33,
//   log: function(count){
//     console.log('log count', count);
//     return count
//   }
// }
// let log2 = debounce(obj.log, 300, true)

// for (let i = 0; i < 10; i++) {
//   await sleep(200)
//   // console.log('start', i);
//   let s = log2.call(obj, i)
// }
