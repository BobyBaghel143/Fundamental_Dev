// function fn(n) {
//   if (n < 1) return;
//   fn(n - 1);
//   console.log(n);
// }
// fn(10);

// function fn(n) {
//   for (let i = 1; i <= n; i++) {
//     console.log(i);
//   }
// }
// fn(10);

// // MinCostFrogJump
// function f(i, n, heights) {
//   if (i == n) return 0;
//   if (i == n - 1) {
//     return Math.abs(heights[i] - heights[i - 1]) + f(i + 1, n, heights);
//   }
//   if (i > n) Infinity;
//   return Math.min(
//     Math.abs(heights[i] - heights[i + 1]) + f(i + 1, n, heights),
//     Math.abs(heights[i] - heights[i + 2]) + f(i + 2, n, heights)
//   );
// }
// console.log(f(1, 4, [10, 20, 30, 40, 50]));

// // mazepath
// function fn(i, j, n, m) {
//   if (i == n - 1 && j == m - 1) return 1;
//   if (i >= n || j >= m) return 0;
//   return fn(i, j + 1, n, m) + fn(i + 1, j, n, m);
// }
// console.log(fn(0, 0, 3, 3));