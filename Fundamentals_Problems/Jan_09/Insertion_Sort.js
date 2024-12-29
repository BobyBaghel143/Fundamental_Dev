function InsertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let currElement = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > currElement) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = currElement;
  }
}

let arr = [5, 6, 2, 3, 9, 4, 7, 1, 8, 0, -3, -2, -1];
InsertionSort(arr);
console.log(arr);
