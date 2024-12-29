function swap(arr, i, j) {    // function swaps the elements of the array at index i and j
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

let arr = [5, 9, 1, 8, 2, 3];
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let i = 0; // starting index
let j = arr.length - 1; // last index

while (i <= j) {
  swap(arr, i, j);
  i++;
  j--;
}
console.log(arr);
