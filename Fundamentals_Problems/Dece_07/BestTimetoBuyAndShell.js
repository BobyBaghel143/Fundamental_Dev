/* 
* https://leetcode.com/problems/best-time-to-buy-and-shell-stock/description/
   @param {number[]} prices
   @return {number}
*/

var maxProfit = function (prices) {
  let currMin = prices[0]; // atleast buy on day 0
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    // can I sell ?
    if (prices[i] > currMin) {
      // you can sell, but check is it better than previous profit ?
      profit = Math.max(profit, prices[i] - currMin);
    }
    // can I buy ?
    if (prices[i] < currMin) {
      currMin = prices[i];
    }
  }
  return profit;
};
// let prices = [7, 1, 5, 3, 6, 4];
let prices = [7, 6, 4, 3, 1, 8, 6]; // 1 se buy     8 pr sell
// let prices = [1, 9];
x = maxProfit(prices);
console.log(x);
