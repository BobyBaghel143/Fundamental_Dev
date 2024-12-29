function BubbleSort(arr) {
    let n = arr.length;
    // this function applied adjacent comparisons and immediate swaps with adjacent  element
    for (let i = 0; i < n - 1; i++) {
        let isSwapped = false;
        // we just need n-1 iterations because after than we will be only left with smallest element
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                //  swap
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                isSwapped = true;
            }
        }
        if (isSwapped == false) break;
    }
}

// let arr = [15, -1, 3, 8, 2, 6];
let arr = [5, 7, 3, 6, 0, 4, 1, 2];
BubbleSort(arr)
console.log(arr);



// Time ->   Best    case -> O(n)
//           Average case -> O(n^2)
//           worst   case -> O(n^2)
// Space->   O(1)
// Inplace-> Yes
// Stable -> Yes