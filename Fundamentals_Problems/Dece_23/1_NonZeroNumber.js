//     // solution  ->  1
// function f(n) {
//   if (n == 0) return 0; // base case
//   let result = Infinity;
//   for (let i = 0; i < n.length - 1; i++) {
//     if (n == 1) return 0;
//     if (n < 1) Infinity;
//     if (n % 3 == 0) continue;
//     if (n % 2 == 0) continue;
//     if (n - 1) continue;
//     result = Math.min(result, f(n / 2));
//     return 1 + result;
// }
// }
// console.log(f(20));



// // solution  ->  2 
// function f(n) {
//   if (n == 1) return 0; // base case
//   let ans = f(n - 1); //  give me min  number of steps to reduce n - 1 to 1, x
//   if (n % 2 == 0) {
//     ans = Math.min(ans, f(n / 2)); // f(n / 2) -> y, min(x, y)
//   }
//   if (n % 3 == 0) {
//     ans = Math.min(ans, f(n / 3)); // f(n / 3) -> z, min(min(x, y), z) -> min(x, y, z)
//   }
//   return 1 + ans;
// }
// console.log(f(20));



/**
 * 1->  if n divisible by 3,  we can do  n/3
 * 2->  if n divisble by 2,  we can do n/2
 * 3->  if n-1
 */

//       // solution  ->  3
// function g(n) {
//     if (n == 1) return 0;
//     return 1 + Math.min(g(n - 1), ((n % 2 == 0) ? g(n / 2) : Infinity), ((n % 3 == 0) ? g(n / 3) : Infinity));
// }
// console.log(g(20));

//


