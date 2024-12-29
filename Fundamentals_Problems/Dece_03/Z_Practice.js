// Practice JavaScript
// let arr = [1, 2, 3, 4, 4, 4, 5, 4, 5, 5, 6, 5, 6, 5];
// let mp = {};
// for (let val of arr) {
//     // console.log(val);
//     if (mp[val]) {
//         mp[val]++;
//     } else {
//         mp[val] = 1;
//     }
// }
// console.log(mp)

// let str = "Javascript";
// let map = {};
// for (let char of str) {
//     // console.log(char);
//     if (map[char]) {
//         map[char]++;
//     } else {
//         map[char] = 1;
//     }
// }
// console.log(map)

// let arr = [1, 2, 3, 4, 5, 6];
// arr[2] = 10;
// console.log(arr);             // arr are muteable

// let str = "chaman";
// str[3] = "v";
// console.log(str);             // string are immutable

// let x = { name: "boby", mob: "unknown" };
// x.name="chaman"
// console.log(x)

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// arr.sort(function (a, b) {
//     return a - b;
// })
// arr[5] = 55;
// console.log(arr);

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
function seperate(arr) {
  let i = 0;
  let j = arr.length - 1;
  while (i <= j) {
    if (arr[i] == 1) {
      swap(arr, i, j);
      j--;
    } else {
      i++;
    }
  }
}

// let arr = [1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0];
let arr = [1, 0, 1, 1, 0];
seperate(arr);
console.log(arr);
