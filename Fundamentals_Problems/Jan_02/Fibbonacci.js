// Fibanacci      0  1  1  2  3  5  8  13  21  34  55  89  144  233  377
//                0  1  2  3  4  5  6   7  8   9   10  11  12   13   14

// function f(n) {
//   if (n == 0 || n == 1) return n;
//   return f(n - 1) + f(n - 2);             // Time -> O(2^n)
// }                                         // Space -> O(n)
// console.log(f(5));

// function f2(n) {
//   if (n == 0) return;
//   for (let i = 1; i <= n; i++) {        // Time -> O(n^2)
//     // some operation
//     console.log(n);
//     return;
//   }
//   f2(n - 1);
// }
// f2(5);

// function f3(n) {
//     // assume arr.length   ->  k
//     let arr = [];
//   if (n == 0) return;
//   for (let i = 1; i <= arr.length; i++) {     // Time -> O(nk)         // Time -> O(K)
//       // some operation
//     //   arr.push(i);
//     }
//   f3(arr, n - 1);
// }
// console.log(f3(5));

// function f4(n) {
//   if (n <= 1) return 1;
//   return f4(n - 1) + f4(n - 2);             // Time -> O(2^n);
// //   return 2 * f4(n - 1);                  // Time -> O(n)
// }
// console.log(f4(5));

// function f(n) {
//   if (n <= 1) return 1;
//   return f(n - 1) + f(n - 2) + f(n - 3);      // Time -> O(3^n)
// }                                             // Space -> O(n)
// console.log(f(5));
