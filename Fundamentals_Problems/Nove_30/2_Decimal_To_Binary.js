function DecimalToBinary(num) {
  let ans = "";
  while (num > 0) {
    if (num % 2 == 0) {  //even
      ans += "0";
    } else {
      ans += "1";   //odd
    }
    num = Math.floor(num / 2);
  }
  return ans;
}
console.log(DecimalToBinary(17));
