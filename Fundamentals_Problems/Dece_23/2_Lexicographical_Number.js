// let arr = [[9, 6, 5, 1], 11]; // change it
let arr;
function f(i, n) {
  if (i > n) return;
  if (i != 0) {
    arr.push(i);
  }
  for (let j = ((i == 0) ? 1 : 0); j <= 9; j++) {
    f(10 * i + j, n);
  }
}

function lexicalOrder(arr) {
  arr = [];
  f(0, n);
  return arr;
}
x = lexicalOrder(arr);
console.log(x);
console.log(f(i, n));
