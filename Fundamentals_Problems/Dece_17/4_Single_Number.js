var singleNumber = function (nums) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    result = result ^ nums[i];
  }
  return result;
};

// let nums = [2, 2, 1];
// let nums = [2, 1, 1, 2, 4];
let nums = [2, 1, 2, 3, 1];
console.log(singleNumber(nums));
