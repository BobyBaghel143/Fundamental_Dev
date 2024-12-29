// function PrimeNumber(x) {
//   for (let i = 2; i <= x - 1; i++) {   //we found a number in a range [2 - x-1] which devides x
//     if (x % i == 0) {
//      // hence x is non prime
//       return false;
//     }
//     /* The loop completed but we didn't return false, that means
//       returns a number in the range [2 - x-1] can devide x
//       hence x is prime */
//   }
//   return true;
// }
// console.log(PrimeNumber(79));



// function Prime(x) {
//   for (let i = 2; i < x; i++){
//     if (x % i == 0) {
//       return "Non Prime Number"
//     }
//   }
//   return "Prime number"
// }

// console.log(Prime(78))



// check the prime number
// function Prime(x) {
//   for (let i = 2; i < x; i++){
//     if (x % i == 0) {
//       return `${x} is Not prime`
//     }
//   }
//   return `${x} is prime`
// }

// console.log(Prime(18));