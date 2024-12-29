// function pattern(n) {    //logic for print the pattern
//   for (let row = 1; row <= n; row++) {  //write a loop to repeat a task for n rows
//     //the task is to concatnate "*" n time
//     let str = "";
//     for (let col = 1; col <= row; col++) {   // (col -> n=row) -> will we be change
//       str += "* "
//     }
//     console.log(str);
//   }
// }
// pattern(4);


function left(x) {
  for (let i = 1; i <= x; i++){
    let str = "";
    for (let j = 1; j <= i; j++){
      str +=  "* "
    }
    console.log(str)
  }
}
left(4)