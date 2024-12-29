function f(coins, x) {
  if (x == 0) return 0;  // base case
  let result = Infinity;
  for (let i = 0; i < coins.length - 1; i++) {
    if (x - coins[i] < 0) continue;
    result = Math.min(result, f(coins, x - coins[i]));
  }
  return 1 + result;
}

console.log(f([1, 5, 7], 11));
// console.log(f([9, 6, 5, 1], 11));

// x=5,[1,5,7]
// x->(-5) -> 0
