function NumberIdenticalPair(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        count++;
      }
    }
  }
  return count;
}

let arr = [1, 2, 3, 1, 1, 3];
// let arr = [1, 1, 1, 1];
// let arr = [1, 2, 3];
console.log(NumberIdenticalPair(arr));
