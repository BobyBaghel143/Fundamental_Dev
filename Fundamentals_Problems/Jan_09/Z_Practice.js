/*function InsertionSort(arr){
    for(let i=0; i<arr.length; i++){
        let currElement=arr[i];
        let j=i-1;
        while(j>=0 && arr[j]>currElement){
            arr[j+1]=arr[j];
             j--;
        }
        arr[j+1]=currElement;
    }
}
let arr=[5,6,2,3,9,4,7,4,0,-5,-3,-1,0];
InsertionSort(arr);
console.log(arr);
*/


/*function merge(arr, lefti, leftj, righti, rightj) {
    let a = Array(leftj - lefti + 1);
    let b = Array(rightj - righti + 1);

    let k = 0;
    for (let i = lefti; i <= leftj; i++) {
        a[k] = arr[i];
        k++;
    }

    k = 0;
    for (let i = righti; i <= rightj; i++) {
        b[k] = arr[i];
        k++;
    }

    let c = [];
    let i = 0; j = 0;
    while (i < a.length && j < b.length) {
        if (a[i] < b[j]) {
            c.push(a[i]);
            i++;
        } else {
            c.push(b[j]);
            j++;
        }
    }

    while (i < a.length) {
        c.push(a[i]);
        i++;
    }
    while (j < b.length) {
        c.push(b[j]);
        j++;
    }


    k = 0;
    for (let i = lefti; i <= rightj; i++) {
        arr[i] = c[k];
        k++;
    }
}

function mergeSort(arr, i, j) {
    if (i >= j) return;
    let mid = Math.floor((i + j) / 2);
    mergeSort(arr, i, mid);
    mergeSort(arr, mid + 1, j);
    merge(arr, i, mid, mid + 1, j);
}

let arr = [6, 5, 4, 3, 2, 1, -1, 0, -2];
mergeSort(arr, 0, arr.length - 1);
console.log(arr);
*/


/*
function merge(left, right) {
    let result = [];
    let i = 0;
    let j = 0;
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
let arr = [7, 6, 8, 5, 3, 4, 3, -2, -3, 1, -1, 0, 9];
arr = mergeSort(arr);
console.log(arr);
*/