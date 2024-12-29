let count = 0;
function merge(left, right) {
    let result = [];
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] > 2 * right[j]) {
            count += (left.length - i);             // solve this problems
            j++;
        } else {
            i++;
        }
    }

    i=0;
    j=0;
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

function f(arr, i, j) {
    if (i == j) {
        let temp = [arr[i]];
        return temp;
    }
    let mid = Math.floor((i + j) / 2);
    let left = f(arr, i, mid);
    let right = f(arr, mid + 1, j);
    let result = merge(left, right);
    return result;
}

function mergeSort(arr) {
    return f(arr, 0, arr.length - 1);
}

let arr = [2, 4, 3, 5, 1];
// let arr=[4,8,3,5,1];
arr = mergeSort(arr);
console.log(count);



/*var reversePairs= function (nums){
    count=0;
    nums = mergeSort(nums);
    return count;
}

let nums=[2,4,3,5,1];
console.log(count);
*/