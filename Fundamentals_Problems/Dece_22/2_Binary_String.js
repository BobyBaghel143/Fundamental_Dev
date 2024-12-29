// //printBinaryString
// function fn(n) {
//   if (n == 1) return 2;
//   if (n == 2) return 3;
//   return fn(n - 1) + fn(n - 2);
// }
// let n = 5;
// console.log(fn(n));




// n = 1 -> 2       (0, 1)
// n = 2 -> 3       (00, 01, 10)
// n = 3 -> 5       (000, 001, 100, 101)
// n = 4 -> 8       (0000, 0001, 0100, 1000, 1001, 1010, 0101)
// n = 5 -> 13
