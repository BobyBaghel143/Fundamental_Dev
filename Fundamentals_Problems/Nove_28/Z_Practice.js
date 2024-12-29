// // GCD
// function gcd(a, b) {
//   let ans = 1;
//   for (let i = 2; i < Math.min(a, b); i++) {
//     if (a % i == 0 && b % i == 0) {
//       ans = i;
//     }
//   }
//   return ans;
// }
// console.log(gcd(36, 105));

// LCM
// function LCM(a, b) {
//   let G = gcd(a, b);
//   return (a * b) / G;
// }
// console.log(LCM(36, 105));


// // Sum of Digits
// function SumOfDigits(x) {
//   let sum = 0;
//   while (x > 0) {
//     let lastDigit = x % 10;
//     sum += lastDigit;
//     x = Math.floor(x / 10);
//   }
//   return sum;
// }
// console.log(SumOfDigits(4136));


// // Fibbonacci
// function printFibbonacci(n) {
//   if (n == 0) {
//     console.log(0);
//     return;
//   }
//   if (n == 1) {
//     console.log(0);
//     console.log(1);
//     return;
//   }
//   let last = 1;
//   let secondlast = 0;
//   for (let i = 2; i <= n; i++) {
//     let ans = last + secondlast;
//     console.log(ans);
//     secondlast = last;
//     last = ans;
//   }
// }
// printFibbonacci(8);
