function getMinIndex(arr, i) {
    // This function returns the index of the minimum in the range [i, n-1]
    let minIndex = i;  // we assume first element of the range as the minimum element candidate
    for (let j = i + 1; j < arr.length; j++) {
        // we go in the remaining array form [i+1, n-1]
        if (arr[j] < arr[minIndex]) {
            // if the current element at the index j is less than ourcurrent minimum candidate
            minIndex = j;
        }
    }
    return minIndex;
}

function selectionSort(arr) {  // we assume array is integer array
    for (let i = 0; i < arr.length; i++) {
        // [i, n-1] ->unshorted region
        let minIndex = getMinIndex(arr, i);
        // swap the ith element with min index
        if (i != minIndex) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
}
let arr = [15, -1, 3, 8, 2, 6];
// let arr = [15, 6, 24, 67, 2, 4, 7, 3];
selectionSort(arr);
console.log(arr);



//  Time ->   Best case  -> O(n^2)
//            Average case -> O(n^2)
//            worst case -> O(n^2)
//
// Space  ->  O(1)
// Stable ->  Yes
// Inplace -> Yes