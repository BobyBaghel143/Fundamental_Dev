// function pattern(n) {                       //logic for print the pattrn
//   for (let row = 1; row <= n; row++) {      //write a loop to repeat a task for n rows.
//     //the task is to concatnate "*" n time
//     let str = "";
//     for (let col = 1; col <= n; col++) {
//       str += "* ";
//     }
//     console.log(str);
//   }
// }
// // pattern(1)
// pattern(2)
// // pattern(3);
// // pattern(4)



function squre(x) {
  for (let i = 1; i <= x; i++){
    let str = "";
    for (let j = 1; j <= x; j++){
      str += "* ";
    }
    console.log(str)
  }
}

squre(4)