// // Merge_2_Array
// function mergeArray(nums1, m, nums2, n) {
//   let result = Array(m + n).fill(0);
//   let i = 0; // nums1
//   let j = 0; // nums2
//   let k = 0; // result
//   while (i < m && j < n) {
//     if (nums1[i] < nums2[j]) {
//       result[k] = nums1[i];
//       i++;
//       k++;
//     } else {
//       result[k] = nums2[j];
//       j++;
//       k++;
//     }
//   }
//   while (i < m) {
//     result[k] = nums1[i];
//     i++;
//     k++;
//   }
//   while (j < n) {
//     result[k] = nums2[j];
//     j++;
//     k++;
//   }
//   for (let i = 0; i < result.length; i++) {
//     nums1[i] = result[i];
//   }
//   return result;
// }
// let nums1 = [1, 2, 3, 4, 5],
//   m = 5;
// let nums2 = [6, 7, 8, 9, 10, 11],
//   n = 6;
// x = mergeArray(nums1, m, nums2, n);
// console.log(x);

// // Pattern
// function pattern(n) {
//   // Upper part
//   for (let row = 1; row <= n; row++) {
//     let str = "";
//     let spaces = row - 1;
//     for (let i = 0; i <= spaces; i++) {
//       str += " ";
//     }
//     let num = row;
//     while (num <= n) {
//       str += num + " ";
//       num++;
//     }
//     console.log(str);
//   }

//   // lower part
//   for (let row = 1; row <= n - 1; row++) {
//     let str = "";

//     let spaces = n - row;
//     for (let i = 1; i <= spaces; i++) {
//       str += " ";
//     }

//     let num = n - row;
//     while (num <= n) {
//       str += num + " ";
//       num++;
//     }
//     console.log(str);
//   }
// }
// pattern(5);

// // Consucative ones
// function consecutiveOnes(nums) {
//   let ans = 0;
//   let consecutiveone = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] == 1) {
//       consecutiveone++;
//     } else {
//       ans = Math.max(ans, consecutiveone);
//       consecutiveone = 0;
//     }
//   }
//   return ans;
// }
// let nums = [1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 5];
// console.log(consecutiveOnes(nums));

// // FintAllDisappearNumber
// function findAllDisNum(nums) {
//   for (let i = 0; i < nums.length; i++) {
//     let x = Math.abs(nums[i]);
//     let idx = x - 1;
//     if (nums[idx] > 0) {
//       nums[idx] *= -1;
//     }
//   }

//   let result = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] > 0) {
//       result.push(i + 1);
//     }
//   }
//   return result;
// }
// let nums = [4, 5, 8, 3, 9, 2];
// console.log(findAllDisNum(nums));
