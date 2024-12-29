// // Check Palindrome
// function checkPalindrome(num) {
//   let str = "" + num;
//   let i = 0;
//   let j = str.length - 1;
//   while (i <= j) {
//     if (str[i] == str[j]) {
//       i++;
//       j--;
//     } else {
//       return false;
//     }
//   }
//   return true;
// }
// // let nums = ["naman"];
// let nums = [1234321];
// console.log(checkPalindrome(nums));


// // Decimal to Binary
// function D2B(num) {
//   let ans = "";
//   while (num > 0) {
//     if (num % 2 == 0) {
//       ans += "0";
//     } else {
//       ans += "1";
//     }
//     num = Math.floor(num / 2);
//   }
//   return ans;
// }
// console.log(D2B(11));
