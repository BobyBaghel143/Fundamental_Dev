// function f(n) {
//     // base case
//     if (n < 1) return;      // don't do anything

//     // recursive assumption
//     f(n - 1);  // function f works correctly for n-1 and prints 1 -> n-1 correctly on the screen
//     console.log(n);
// }
// f(10);



function f(n) {
  if (n < 1) return;
//   f(n - 1);
  // f(n - 2);
  f(n - 5);
  console.log(n);
}
f(100);
