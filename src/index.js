import { sleep } from "./sleep.js"
// console.log("start");
// await sleep(2000)
// console.log("end");

import { debounce, debouncefff } from './debounce-throttle.js'
var obj = {
  aaa: 33,
  log: function(count){
    console.log('log count', count);
    return count
  }
}
let log2 = debouncefff(obj.log, 300, true)

for (let i = 0; i < 10; i++) {
  await sleep(200)
  // console.log('start', i);
  let s = log2.call(obj, i)
}
