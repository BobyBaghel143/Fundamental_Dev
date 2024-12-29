function findMaxConsecutiveOnes(nums) {
    let Ans = 0;
    let consecutiveOnes = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 1) {
            consecutiveOnes++;
        } else {
            Ans = Math.max(Ans, consecutiveOnes);
            consecutiveOnes = 0;   // restarting the count
        }
    }
    return Ans;
}
// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let nums = [1, 1, 1, 9];
Ans = findMaxConsecutiveOnes(nums);
console.log(Ans)
