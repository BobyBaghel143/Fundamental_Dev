let arr = ["abc", "hello", "c", "d", "abc", "c", "d", "f"];
let obj = {};
for (const element of arr) {
  if (!obj[element]) {
    obj[element] = true;
  }
}
for (const key in obj) {
  console.log(key);
}

// b = 5
// 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5

// A = 8
// B = 5
// C = 2

// 1 - 2
// 2 - 3
// 3 - 4
// 4 - 5
// 5 - 1
// 6 - 2
// 7 - 3
// 8 - 4

// let start = C;
// for (let i = 1; i<=A; i++){
//     start = (start + 1)%B + 1;
// }
// console.log(start);
