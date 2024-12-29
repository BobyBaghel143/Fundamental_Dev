function printMatrix(matrix) {
  let str = "";
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      //   console.log(matrix[i][j]);
      str += matrix[i][j] + " __";
    }
  }
  return str;
}

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let r = 3;
let c = 3;
console.log(printMatrix(matrix));
