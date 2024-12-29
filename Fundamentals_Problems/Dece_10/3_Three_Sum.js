// function ThreeSum(arr, target) {
//   for (let i = 0; i < arr.length-2; i++) {
//       for (let j = i + 1; j < arr.length - 1; j++) {
//       for (let k = j + 1; k < arr.length; k++) {
//         if (arr[i] + arr[j] + arr[k] == target) {
//           return [arr[i], arr[j], arr[k]];
//         }
//       }
//     }
//   }
// }

//  Take form leetcode chait  solve
var threeSum = function (nums) {
  const res = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) {
      continue;
    }
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      let threesum = nums[i] + nums[left] + nums[right];
      if (threesum > 0) {
        right--;
      } else if (threesum < 0) {
        left++;
      } else {
        res.push([nums[i], nums[left], nums[right]]);
        left++;

        while (nums[left] == nums[left - 1] && left < right) {
          left++;
        }
      }
    }
  }
  return res;
};

// let nums = [4, 5, 3, 6, 7, 8, 9, 2, 4, 5];
let nums = [-1, 0, 1, 2, -1, -4];
// target = 21;
console.log(threeSum(nums));
