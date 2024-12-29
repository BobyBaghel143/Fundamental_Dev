function printFibonacci(n) {
  if (n == 0) {
    console.log(0);
    return;
  }
  if (n == 1) {
    console.log(0);
    console.log(1);
    return;
  }
  let last = 1;
  let secondlast = 0;

  for (let i = 2; i <= n; i++) {
    let ans = last + secondlast;
    console.log(ans);
    secondlast = last;
    last = ans;
  }
}

printFibonacci(8);
// console.log(printFibonacci(5))
