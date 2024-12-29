// use method by cwh
// function factorial(x) {
//   let arr = Array.from(Array(x + 1).keys());
//   console.log(arr.slice(1));
//   let c = arr.slice(1).reduce((a, b) => {
//     return a * b;
//   });
//   console.log(c);
// }
// factorial(7);


// use for loop
function factorial(x) {
    let fac = 1;
    for (let i = 1; i <= x; i++){
        fac = fac * i;
        // console.log(fac);
    }
    console.log(fac);
    // return fac;
}
factorial(7);
