function transpose(matrix) {
  // row -> matrix.length
  // col -> matrix[0].length
  let result = Array(matrix[0].length);
  for (let i = 0; i < matrix[0].length; i++) {
    let arr = Array(matrix.length);
    result[i] = arr;
  }
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      result[col][row] = matrix[row][col];
    }
  }
  return result;
}

matrix = [
  [11, 12, 13],
  [21, 22, 23],
  [31, 32, 33],
]; // outer.length -> row
// console.log(matrix);
console.log(transpose(matrix));

/**
[
[1,2,3]           // outer[0]
[11,12,13]        // outer[1]
[21,22,23]        // outer[2]
]
*/
