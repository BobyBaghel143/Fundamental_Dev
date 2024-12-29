function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function partition(arr, pivotIndex) {
    let pivotElement = arr[pivotIndex];
    let L = 0;
    let R = arr.length - 1;
    let j = L;
    let i = L - 1;
    swap(arr, pivotIndex, R);
    while (j <= R - 1) {
        if (arr[j] <= pivotElement) {
            i++;
            swap(arr, i, j);
        }
        j++;
    }
    swap(arr, i + 1, R);
}

let arr = [1, 6, 3, 8, 9, 2, 5];
pivotIndex = 2;
partition(arr, pivotIndex);
console.log(arr);
