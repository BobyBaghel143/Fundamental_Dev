// 65ms

function fn(x, y) {
  return x[0] - y[0];
}

var twoSum = function (arr, target) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = [arr[i], i];
  }

  arr.sort(fn);
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    if (arr[start][0] + arr[end][0] == target) {
      return [arr[start][1], arr[end][1]];
    } else if (arr[start][0] + arr[end][0] > target) {
      end--;
    } else {
      start++;
    }
  }
};

// let arr = [7, 5, 9, 3, 8, 6, 4, 1, 2];
let arr = [2, 7, 11, 15];
let target = 9;
x = twoSum(arr, target);
console.log(x);
