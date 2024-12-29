var MinimumIncreamentForUnique = function (nums) {
    nums.sort(function nums(a, b) {
        return a - b;
    });
    let count = 0;
    let prev = nums[0];
    for (let j = 1; j < nums.length; j++) {
        let tj = Math.max(nums[j], prev + 1);
        count += (tj - nums[j]);
        prev = tj;
    }
    return count;
}
// let nums = [1, 2, 2];
let nums =[1,1,2,2,3,7];
count=MinimumIncreamentForUnique(nums);
console.log(count);