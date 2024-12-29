//   // PrintSubArrays
// function printSubArrays(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let str = "";
//     for (let j = i; j < arr.length; j++) {
//       str += arr[j];
//       console.log(str);
//     }
//   }
// }

// // let arr = [1, 2, 3, 4, 5];
// // console.log(printSubArrays(arr));
// printSubArrays([1, 2, 3, 4, 5])

// // Intersection  of Two arr
// function Intersection(Arr1, Arr2) {
//   let freqNums1 = {};
//   for (let i = 0; i < Arr1.length; i++) {
//     let element = Arr1[i];
//     if (freqNums1[element]) {
//       freqNums1[element]++;
//     } else {
//       freqNums1[element] = 1;
//     }
//   }
//   let freqNums2 = {};
//   for (let i = 0; i < Arr2.length; i++) {
//     let element = Arr2[i];
//     if (freqNums1[element]) {
//       freqNums2[element] = 1;
//     }
//   }
//   return Object.keys(freqNums2);
// }
// // let Arr1 = [1, 2, 3, 4, 5];
// // let Arr2 = [4, 5, 6, 7, 8];
// let Arr1 = [2, 9, 1, 2, 2, 3, 9];
// let Arr2 = [2, 1, 1, 7, 6, 8, 3];
// console.log(Intersection(Arr1, Arr2));

// // Majority Possible
// function Majority(nums) {
//   let currPossibleMajority = -1;
//   let count = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (count == 0) {
//       currPossibleMajority = nums[i];
//     }
//     if ((currPossibleMajority = nums[i])) {
//       count++;
//     } else {
//       count--;
//     }
//   }
//   return currPossibleMajority;
// }
// // let nums = [1, 2, 3, 3, 3, 3, 4, 5,];
// let nums = [1, 2, 2];
// console.log(Majority(nums));

// // 3Sum
// function ThreeSum(arr, target){
//     for (let i = 0; i < arr.length - 2; i++){
//         for (let j = i+1; j < arr.length - 1; j++){
//             for (let k = j + 1; k < arr.length; k++){
//                 if (arr[i] + arr[j] + arr[k] == target) {
//                    return [i, j, k]
//                }
//             }
//         }
//     }
// }
// let arr = [2, 4, 5, 3, 3, 4, 7], target = 10;
// console.log(ThreeSum(arr, target))

// // Single Number
// function SingleNumber(arr) {
//   let result = 0;
//   for (let i = 0; i < arr.length; i++) {
//     result = result ^ arr[i];
//   }
//   return result;
// }
// let arr = [2, 3, 4, 3, 4, 5, 2];
// console.log(SingleNumber(arr));
