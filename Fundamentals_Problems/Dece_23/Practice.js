// function fn(n) {
//   if (n == 1) return 0;
//   let ans = fn(n - 1);
//   if (n % 2 == 0) {
//     ans = Math.min(ans, fn(n / 2));
//   }
//   if (n % 3 == 0) {
//     ans = Math.min(ans, fn(n / 3));
//   }
//   return 1 + ans;
// }
// console.log(fn(9));



// // Min coin Changes
// function f(coins, x) {
//   if (x == 0) return 0;
//   let result = Infinity;
//   for (let i = 0; i < coins.length - 1; i++) {
//     if (x - coins[i] < 0) continue;
//     result = Math.min(result, f(coins, x - coins[i]));
//   }
//   return 1 + result;
// }
// console.log(f([1, 5, 7], 11));
