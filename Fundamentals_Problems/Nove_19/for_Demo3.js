// // Sum of Even number
// let ans = 0;
// for (let i = 1; i <= 10; i++) {
//   if (i % 2 == 0) {   // Check if i is Even or Odd => (==,!=)
//     // console.log(i);
//     ans += i; // ans = ans+i
//     console.log("inside the", i, ans);
//   }
//   //   console.log(ans); // Check if Sum of all even
// }
// console.log(ans); // Check if Sum of all even




// //  1 -> 50  Even Or odd
// for (let i = 1; i <= 20; i++) {
//   //   console.log(i);
//   if (i % 2 == 0) {
//     console.log(i, "Even");
//   } else {
//     console.log(i, "odd");
//   }
// }



// Check prime number or not
function prime(x) {
  for (let i = 2; i < x; i++) {
    if (x % i == 0) {
      return false;
    }
  }
  return true;
}
console.log(prime(57));







