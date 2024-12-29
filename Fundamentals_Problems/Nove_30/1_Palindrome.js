function checkPalindrome(num) {
  let str = "" + num;         // convert the num to string
  let i = 0;
  let j = str.length - 1;
  while (i <= j) {
    if (str[i] == str[j]) {
      i++;
      j--;
    } else {
      return false;
    }
  }
  // if we completed the loop  and never found a mismatch the means it is a palindrome
  return true;
}
let nums = [198891];
console.log(checkPalindrome(nums));
