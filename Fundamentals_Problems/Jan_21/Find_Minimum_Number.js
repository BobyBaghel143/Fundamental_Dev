function findMinimumNumber(arr, low, high) {
    if (high < low) {
        return arr[0];
    }
    if (high == low) {  
        return arr[low];
    };
    let mid = low + Math.floor((high - low) / 2);
    if (mid < high && arr[mid + 1] < arr[mid]) {
        return arr(mid + 1);
    }
    if (mid > low && arr[mid] < arr[mid - 1]) {
        return arr[mid];
    }
    if (arr[high] > arr[mid]) {
        return findMinimum(arr, low, mid - 1);
        // return findMinimum(arr,mid+1,high);
        // return result;
    }
}
let arr = [50,49,60,65];
let n = arr.length;
console.log(findMinimumNumber(arr, 0, n - 1));