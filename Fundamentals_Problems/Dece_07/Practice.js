// // Reverse Array
// function swap(arr, i, j) {
//   let temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
// }
// function reverse(arr) {
//   let i = 0;
//   let j = arr.length - 1;
//   while (i < j) {
//     swap(arr, i, j);
//     i++;
//     j--;
//   }
// }
// let arr = [11, 22, 3, 4, 5];
// reverse(arr);
// console.log(arr);

// function maxProfit(prices) {
//   let currMin = prices[0];
//   let profit = 0;
//   for (let i = 1; i < prices.length; i++) {
//     if (prices[i] > currMin) {
//       profit = Math.max(profit, prices[i] - currMin);
//     } else {
//       currMin = prices[i];
//     }
//   }
//   return profit;
// }
// let prices = [7, 3, 4, 2, 4, 1, 8, 5];
// console.log(maxProfit(prices));
