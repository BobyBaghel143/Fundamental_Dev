// 93ms 
var twoSum = function (arr, target) {
  for (let i = 0; i <= arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == target) {
        return [i, j];
      }
    }
  }
};
let arr = [2, 7, 9, 15];
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let arr = [5, 3, 9, 6, 8, 2, 4, 7, 1];
let target = 11;
x = twoSum(arr, target);
console.log(x);









// function ThreeSum(arr, target) {
//     for (let i = 0; i <= arr.length - 3; i++) {
//         for (let j = i + 1; j <= arr.length - 2; j++) {
//             for (let k = j + 1; k <= arr.length - 1; k++) {
//                 if (arr[i] + arr[j] + arr[k] == target) {
//                     return [i, j, k];
//                 }
//             }
//         }
//     }
// }
// let arr = [6, 5, 9, 3, 4, 1, 8, 2, 7], target = 13;
// x = ThreeSum(arr, target);
// console.log(x);

// function FourSum(arr, target) {
//     for (let i = 0; i <= arr.length - 4; i++) {
//         for (let j = i + 1; j <= arr.length - 3; j++) {
//             for (let k = j + 1; k <= arr.length - 2; k++) {
//                 for (let l = k + 1; l <= arr.length - 1; l++) {
//                     if (arr[i] + arr[j] + arr[k] + arr[l] == target) {
//                         return [i, j, k, l]
//                     }
//                 }
//             }
//         }
//     }
// }
// let arr = [6, 5, 9, 3, 4, 1, 8, 2, 7], target = 24;
// x = FourSum(arr, target);
// console.log(x);
