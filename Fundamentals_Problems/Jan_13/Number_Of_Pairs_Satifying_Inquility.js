
let count = 0;
function merge(left, right,diff) {
    // left -> [], right -> []
    let result = [];
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] >= right[j] - diff) {
            count += [left.length - i];
            j++;
        } else {
            i++;
        }
    }

    i = 0;
    j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    while (i < left.length) {
        result.push(left[i]);
        i++;
    }
    while (j < right.length) {
        result.push(right[j]);
        j++;
    }

    return result;
}

function f(arr, i, j, diff) {
    if (i == j) {
        let temp = [arr[i]];
        return temp;
    }
    let mid = Math.floor((i + j) / 2);
    let left = f(arr, i, mid,diff);
    let right = f(arr, mid + 1, j, diff);
    let result = merge(left, right, diff);
    return result;
}
function mergeSort(arr, diff) {
    return f(arr, 0, arr.length - 1, diff);
}

var numberOfPairs = function (nums1, nums2, diff) {
    count = 0;
    let f = [];
    for (let k = 0; k < nums1.length; k++) {
        f.push(nums2[k] - nums1[k]);
    }
    f = mergeSort(f,diff);
    return count;
}

let nums1 = (3, 2, 5);
let nums2 = (2, 2, 1);
let diff=2;
console.log(count);

// let arr = [3, 2, 5, 2, 2, 1];
// arr = mergeSort(arr);
// console.log(count);