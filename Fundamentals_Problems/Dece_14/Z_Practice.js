// let grid = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12,], [13, 14, 15]];
// let grid = [[1, 0, 0, 0, 0], [0, 2, 0, 0, 0], [0, 0, 3, 0, 0], [0, 0, 0, 4, 0], [0, 0, 0, 0, 5]];
// console.log(grid);

// let arr = Array(4);
// for (let i = 0; i < 5; i++) {
//   let inner = Array(5).fill(0);
//   arr[i] = inner;
// }
// arr[0][0] = 1;
// arr[1][1] = 2;
// arr[2][2] = 3;
// arr[3][3] = 4;
// arr[4][4] = 5;
// console.log(arr);

// 2D Array Display

// function display(grid) {
//   let str = "";
//   for (let i = 0; i < grid.length; i++) {
//     for (let j = 0; j < grid.length; j++) [(str += grid[i][j] + "__")];
//   }
//   return str;
// }
// let grid = [
//   [0, 1, 2, 3],
//   [4, 5, 6, 7],
//   [8, 9, 10, 11],
//   [12, 13, 14, 15],
// ];
// console.log(display(grid));

// // Print Wave Print
// function WavePrint(grid, m, n) {
//   let str = "";
//   for (let row = 0; row < m; row++) {
//     if (row % 2 == 0) {
//       for (let col = 0; col < n; col++) {
//         str += grid[row][col] + " ";
//       }
//     } else {
//       for (let col = n - 1; col >= 0; col--) {
//         str += grid[row][col] + "_";
//       }
//     }
//   }
//   console.log(str);
// }

// function WavePrint(grid, m, n) {
//   let str = "";
//   for (let col = 0; col < n; col++) {
//     if (col % 2 == 0) {
//       for (let row = 0; row < m; row++) {
//         str += grid[row][col] + " ";
//       }
//     } else {
//       for (let row = m - 1; row >= 0; row--) {
//         str += grid[row][col] + "__";
//       }
//     }
//   }
//   console.log(str);
// }
// let grid = [
//   [0, 1, 2, 3],
//   [4, 5, 6, 7],
//   [8, 9, 10, 11],
//   [12, 13, 14, 15],
// ];
// WavePrint(grid, 4, 4);

// function Transpose(matrix) {
//   let result = Array(matrix[0].length);
//   for (let i = 0; i < matrix[0].length; i++) {
//     let arr = Array(matrix.length);
//     result[i] = arr;
//   }
//   for (let row = 0; row < matrix.length; row++) {
//     for (let col = 0; col < matrix[row].length; col++) {
//       result[col][row] = matrix[row][col];
//     }
//   }
//   return result;
// }
// matrix = [
//   [11, 12, 13],
//   [21, 22, 23],
//   [31, 32, 33],
// ];
// console.log(Transpose(matrix));

// Multiply Matrix
function multiply(a, m, n, b, n, k) {
  let c = Array(m);
  for (let i = 0; i < m; i++) {
    c[i] = Array(k).fill(0);
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < k; j++) {
      for (let x = 0; x < n; x++) {
        c[i][j] += a[i][x] * b[x][j]; 
      }
    }
  }
  return c;
}
let a = [
    [1, 1],
    [2, 2],
    [3, 3],
  ],
  m = [3, 2];
let b = [
    [1, 1, 1],
    [2, 2, 2],
  ],
  n = [2, 3];

z = multiply(a, 3, 2, b, 2, 3);
console.log(z);
