var majorityElement = function (nums) {
    let currPossibleMajority = -1;
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (count == 0) {
            currPossibleMajority = nums[i];
        }
        if (currPossibleMajority == nums[i]) {
            count++;
        } else {
            count--;
        }
    }
    return currPossibleMajority;
};

// let nums = [2, 2, 1];
let nums = [2, 3, 1, 4, 5, 6];
// let nums = [15, 15, 3, 15, 3, 1, 3, 15, 3, 3, 15, 15, 15, 15, 15, 15];
console.log(majorityElement(nums));