// function f0(n) {
//   let ans = 1;
//   for (let i = 0; i < n; i++) {      // Time ->  O(n)
//     ans += i;
//     console.log(ans);
//   }
//   return ans;
// }
// console.log(f0(5));


// function f1(n, m) {
//   let ans = 0;
//   for (let i = 0; i < n; i++) {
//     ans += 1;
//   }
//   console.log(ans);
//   for (let j = 0; j < m; j++) {
//     ans += 2;
//     console.log(ans);
//   }
//   return ans;            // Time -> O(n+m)
// }
// console.log(f1(5, 6));


// function f2(n) {
//   let ans = 9;
//   for (let i = 1; i <= Math.log(n); i++) {        // Time  ->  O(logN)
//     // ans += i;
//     console.log(ans);
//   }
//   return ans;
//   // return  0;
// }
// console.log(f2(5));


// function f3(n) {
//   let ans = 0;
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {        // Time -> O(N^2)
//       ans += 1;
//     }
//     console.log(ans);
//   }
//   return ans;
// }
// console.log(f3(5));


// function f4(n) {
//   let ans = 0;
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < i; j++) {             // Time -> O(n^2)
//       ans += 1;
//     }
//     console.log(ans);
//   }
//   return ans;
// }
// console.log(f4(5));


// function f5(n) {
//   let ans = 0;
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < Math.log(n); j++) {   // Time -> (nlogn)
//       ans += 1;
//     }
//     console.log(ans);
//   }
//   return ans;
// }
// console.log(f5(5));


// function f6(n) {
//   let ans = 0;
//   for (let i = 0; i < n; i++) {
//     ans += i;
//   }
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {            // Time -> O(n^2)
//       ans += i + j;
//     }
//     console.log(ans);
//   }
//   return ans;
// }
// console.log(f6(5));

// function f7(n) {
//   let ans = 0;
//   for (let i = 1; i < n; i++) {
//     for (let j = n; j > 1; j--) {      // Time -> O(n^2)
//       ans += i;
//     }
//     console.log(ans);
//   }
//   return ans;
// }
// console.log(f7(5));


// function f8(n) {
//   let ans = 0;
//   for (let i = 1; i < n; i *= 2) {        // Time-> O(logn)
//     ans += i;
//     console.log(ans);
//   }
//   return ans;
// }
// console.log(f8(5));


// function f9(n) {
//   let ans = 0;
//   while (n > 0) {     // Time -> O(logn)
//     ans += n;
//     n /= 2;
// }
// console.log(ans);
//   return ans;
// }
// console.log(f9(5));


// function f10(n) {
//   for (let i = n; i > 0; i /= 2) {
//     for (let j = 0; j < i; j++) {              // Time -> O(n)
//       console.log(i, j);
//     }
//   }
// //   console.log(ans);
// }
// console.log(f10(5));


// function f11(n) {
//   for (let j = 1; j <= n; j++) {
//     for (let i = 0; i < n; i = i + j) {              // Time -> O(nlogn)
//       console.log(i, j);    
//     }
//   }
// }
// console.log(f11(5));


// function f12(n) {
//   let ans = 0;
//   for (let i = 2; i <= n; i *= i) {          // Time -> O(log(logn)) ;
//     // ans++;
//     ans += i;
//   }
//   console.log(ans);
// }
// console.log(f12(5));
