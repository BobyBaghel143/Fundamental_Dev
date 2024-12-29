var findDisappearedNumbers = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        let x = Math.abs(nums[i]);
        let idx = x - 1;
        if (nums[idx] > 0) {
            nums[idx] *= -1;
        }
    }

    let result = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            result.push(i + 1);
        }
    }
    return result;
};

// let nums = [1, 2, 3, 4, 6, 7, 8, 9];
// let nums = [6, 3, 5, 7, 4, 8, 9];
let nums = [4, 5, 7, 3, 9, 2];
x = findDisappearedNumbers(nums)
console.log(x);

