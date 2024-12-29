function UpperTringle(n) {
  //we will write a loop which will repeat some task for every row
  for (let row = 1; row <= n; row++) {
    let str = "";

    let spaces = n - row;
    for (let j = 1; j <= spaces; j++) {
      // loop using which we will concatenate (n-row) spaces
      str += "  ";
    }
    // after the above loop ends, we will be having(n-row) spaces in str
    // loop the concatenate str=" "
    let stars = 2 * row - 1; //only it will be changed
    for (let col = 1; col <= stars; col++) {
      str += "* ";
    }

    console.log(str); //print the string
  }
}
UpperTringle(4);
