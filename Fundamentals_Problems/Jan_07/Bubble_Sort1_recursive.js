function f(arr, k) {
  if (k == 0) return;
  for (let i = 0; i < k; i++) {
    if (arr[i] > arr[i + 1]) {
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
  }
  f(arr, k - 1);
}

let arr = [4, 6, 4, -3, -2, 5, 6, 3];
f(arr, arr.length - 1);
console.log(arr);

// k = 3;
// let n = arr.length;
// console.log(arr[n - k]);
