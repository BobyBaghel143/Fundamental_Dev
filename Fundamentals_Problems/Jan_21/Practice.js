/*
function findMinimumNumber(arr, low, high) {
    if (high < low) return arr[0];
    if (high == low) return arr[low];
    let mid = low + Math.floor((high - low) / 2);
    if (mid < high && arr[mid + 1] < arr[mid]) return arr[mid + 1];
    if (mid > low && arr[mid] < arr[mid - 1]) return arr[mid];
    if (arr[high] > arr[mid]) return findMinimumNumber(arr, low, mid - 1);
}
let arr = [50, 49, 60, 65];
let n = arr.length;
console.log(findMinimumNumber(arr, 0, n - 1));
*/

/*
var MinimumIncreamentForUnique=function (nums){
    nums.sort(function nums(a,b){
        return a-b;
    });
    
    let count=0;
    let prev=nums[0];
    for(let j=1; j<nums.length; j++){
        let tj=Math.max(nums[j],prev+1);
        count +=(tj-nums[j]);
        prev=tj;
    }
    return count;
}
let nums=[1,1,2,2,3,7]
count=MinimumIncreamentForUnique(nums)
console.log(count);
*/