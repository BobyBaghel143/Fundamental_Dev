var spiralOrder = function (matrix) {
  let m = matrix.length; // no of rows
  let n = matrix[0].length; // no of cols
  let start_row = 0;
  let start_col = 0;
  let last_row = matrix.length - 1; // we do -1 for 0 based indexing
  let last_col = matrix[0].length - 1; // we do -1 for 0 based indexing
  let count = 0; // how many elements from the matrix are inserted / Eliminate
  let result = []; // to return the result

  while (count < n * m) {
    // Eliminate start_row
    for (let x = start_col; x <= last_col; x++) {
      result.push(matrix[start_row][x]);
      count++; // because we added a new element
    }
    start_row += 1; // because we are done with the start-rowp.
    if (count == n * m) break;

    // Eliminate last_col
    for (let x = start_row; x <= last_row; x++) {
      result.push(matrix[x][last_col]);
      count++; // because we added a new element
    }
    last_col -= 1; // because we are done with the last-col
    if (count == n * m) break;

    // Eliminate last_row
    for (let x = last_col; x >= start_col; x--) {
      result.push(matrix[last_row][x]);
      count++;
    }
    last_row -= 1; // because we are done with the last_row
    if (count == n * m) break;

    // Eliminate start_col
    for (let x = last_row; x >= start_row; x--) {
      result.push(matrix[x][start_col]);
      count++;
    }
    start_col++; // because we are done with the start_col
    if (count == n * m) break;
  }
  // After completing the algorithm
  return result;
};

/**
 * Eliminate start_row
 * Eliminate last_col
 * Eliminate last_row
 * Eliminate start_col
 */
// matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
  [13, 14, 15],
  [16, 17, 18],
];
r = 3;
c = 3;
// console.log(result);
console.log(spiralOrder(matrix));
