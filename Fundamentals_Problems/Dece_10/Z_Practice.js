// var checkForTarget = function (nums, target) {
//     let left = 0;
//     let right = nums.length - 1;

//     while (left < right) {
//         let curr = nums[left] + nums[right];
//         if (curr == target) {
//             return true;
//         }

//         if (curr > target) {
//             right--;
//         } else {
//             left++;
//         }
//     }
//     return false;
// }

// // 2_Sum_Nested
// function twoSum(arr) {
//   for (let i = 0; i < arr.length - 2; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] == target) {
//         return [i, j];
//       }
//     }
//   }
// }
// let arr = [5, 3, 9, 6, 8, 2, 4, 7, 1];
// target = 9;
// x = twoSum(arr);
// console.log(x);

// //  TwoSum
// function fn(x, y) {
//   return x[0] - y[0];
// }

// function TwoSum(arr, target) {
//   for (let i = 0; i < arr.length ; i++) {
//     arr[i] = [arr[i], i];
//   }
//   arr.sort(fn);
//   let start = 0;
//   let end = arr.length-1;
//   while (start < end) {
//     if (arr[start][0] + arr[end][0] == target) {
//       return [arr[start][1], arr[end][1]];
//     } else if (arr[start][0] + arr[end][0] > target) {
//       end--;
//     } else {
//       start++;
//     }
//   }
// }
// let arr = [8, 9, 2, 1, 5, 3, 4, 7];  target = 4;
// console.log(TwoSum(arr, target));

// // Count all Pair 2_sum
// function CountAllPair2Sum(arr, target) {
//   let start = 0;
//   let end = arr.length - 1;
//   let count = 0;
//   while (start < end) {
//     if (arr[start] + arr[end] < target) {
//       start++;
//     } else if (arr[start] + arr[end] > target) {
//       end--;
//     } else {
//       if (arr[start] == arr[end]) {
//         let freq = end - start + 1;
//         count += Math.floor(freq(freq - 1) / 2);
//         return count;
//       } else {
//         let x = 0;
//         let y = 0;
//         let a_s = arr[start];
//         while (arr[start] == a_s) {
//           start++;
//           x++;
//         }
//         let a_e = arr[end];
//         while (arr[end] == a_e) {
//           end--;
//           y++;
//         }
//         count += x * y;
//       }
//     }
//   }
//   return count;
// }
// let arr = [1, 2, 3, 4, 5, 6];
// let target = 8;
// console.log(CountAllPair2Sum(arr, target));

// PrintingAllPairs
// function PrintAllPairs(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i; j < arr.length; j++) {
//       console.log(arr[i], arr[j]);
//     }
//   }
// }
// let arr = [1, 2, 3, 4, 5];
// console.log(PrintAllPairs(arr));
// PrintAllPairs([1, 2, 3, 4, 5]);


// leetcode problems  number identifier pairs
function fn(x, y) {
  return x - y;
}

function numberIdentifierPair(arr) {
  // arr.sort(fn)
  let count = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        // console.log(arr[i], arr[j]);
        // console.log(i, j);
        count++;
      }
    }
  }
  return count;
}

let arr = [1, 2, 3, 1, 1, 3];
// let arr = [1, 1, 1, 1];
// let arr = [1, 2, 3];
console.log(numberIdentifierPair(arr));
