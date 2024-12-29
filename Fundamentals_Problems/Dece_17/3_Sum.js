   // Nested 
var threeSum = function (nums, target) {
    for (let i = 0; i <= nums.length - 3; i++) {
        for (let j = i + 1; j < nums.length - 2; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if (nums[i] + nums[j] + nums[k] == target) {
                    return [i, j, k];
                }
            }
        }
    }
}

let nums = [4, 3, 6, 4, 6, 2, 7], target = 9;
console.log(threeSum(nums, target));
