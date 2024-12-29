function pattern(n) {
  for (let row = 1; row <= n; row++) {
    let str = "";
    
    //spaces
    let spaces = n - row;
    for (let i = 1; i <= spaces; i++) {
      str += " ";
    }

    let counter = 1;
    for (let j = 1; j <= row; j++) {
      str += counter;
      counter++;
    }

    let counter2 = row - 1;
    for (let col = 1; col <= row - 1; col++) {
      str += counter2;
      counter2--;
    }
    console.log(str);
  }
}
pattern(5);
