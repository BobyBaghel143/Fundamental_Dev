function gcd(a, b) {
  let ans = 1;
  for (i = 2; i <= Math.min(a, b); i++) {
    if (a % i == 0 && b % i == 0) {
      ans = i;
    }
  }
  return ans;
}
// console.log(gcd(9, 12));
console.log(gcd(105, 36));

function lcm(a, b) {
  let G = gcd(a, b);
  return (a * b) / G;
}
// console.log(lcm(105, 36));
// console.log(lcm(28, 24));
