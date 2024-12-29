function f(n) {
    if (n == 1) return 1;
    return (n * (n + 1) / 2);                  // Sum Of Natural Numbar
    // return ( (n + 1) * (n + 2) / 2)               // H.P
    // return (n *(n + 1) * (2n + 1) / 6);       // Sum of Natural Square
    // return (n * (n + 1) / 2) ^ 2;              // Sum of Natural Queb
}
console.log(f(5));



// // for Loop
// function f(n) {
//     if (n == 1) return 1;
//     let ans = 0;
//     for (let i = 0; i <= n; i++) {
//         ans = ans + i;
//     }
//     return ans;
// }
// console.log(f(5));
