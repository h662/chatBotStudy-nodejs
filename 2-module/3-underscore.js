const _ = require("underscore");
const arr = ["가", "나", "다", "라", "마"];

// 첫번째 인자 접근
console.log(arr[0]);
console.log(_.first(arr));

// 마지막 인자 접근
console.log(arr[arr.length - 1]);
console.log(_.last(arr));
