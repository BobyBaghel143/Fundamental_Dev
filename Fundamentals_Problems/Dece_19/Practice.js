// // Call Stack
// function fun() {
//   let x = 10;
//   console.log("inside fun", x);
// }
// fun();
// function gun() {
//   let x = 20;
//   console.log("inside gun", x);
//   fun();
// }
// // gun()
// function run() {
//   let x = 30;
//   console.log("inside run", x);
//   gun();
// }
// run();

// // Sum Of Natural Number
// function SumOfN(n) {
//   if (n == 1) return n;
//   return (n * (n + 1)) / 2;
//   // return (n + 1) * (n + 2) / 2;
//   // return (n + 1) * (2n + 1) / 6;
// }
// console.log(SumOfN(5));

// // Used For Loop
// function sumOfN(n) {
//   let ans = 0;
//   for (let i = 0; i <= n; i++) {
//     ans += i;
//   }
//   return ans;
// }
// console.log(sumOfN(5));

// //  factorial
// function fn(n) {
//   if (n == 1) return n;  // base case
//   return n * fn(n - 1);
// }
// console.log(fn(5));

// // Use For Loop
// function factorial(n) {
//   let ans = 1;
//   for (let i = 1; i <= n; i++) {
//     ans *= i;
//   }
//   return ans;
// }
// console.log(factorial(5));

// // Fabbonacci
// function fn(n) {
//   if (n == 0 || n == 1) return n;
//   return fn(n - 1) + fn(n - 2);
// }
// console.log(fn(8));



// relevel test practice round 2 question
// function fun(arr) {
//   let freqMap = {};
//   for (let i = 0; i < arr.length; i++) {
//     let element = arr[i];
//     if (freqMap[element]) {
//       freqMap[element]++;
//     } else {
//       freqMap[element] = 1;
//     }
//   }
//   // console.log(freqMap)
//   return Object.keys(freqMap);
// }
// let arr = [3, 1, 1, 2, 3];
// console.log(fun(arr));
