//  column wise printed
// function print(grid, m, n) {
//   let str = "";
//   for (let col = 0; col < n; col++) {
//     if (col % 2 == 0) { // even col -> up to down
//       for (let row = 0; row < m; row++) {  // this loop goes from up -> down
//         str += grid[row][col] + " ";
//       }
//     } else { // add col down -> up
//       for (let row = m - 1; row >= 0; row--) {  // this loop goes from down -> up
//         str += grid[row][col] + "__";
//       }
//     }
//   }
//   console.log(str);
// }


// Row wise printed
function print(grid, m, n) {
  let str = "";
  for (let row = 0; row < m; row++) {
    if (row % 2 == 0) {
      for (let col = 0; col < n; col++) {
        str += grid[row][col] + " ";
      }
    } else {
      for (let col = n - 1; col >= 0; col--) {
        str += grid[row][col] + "__";
      }
    }
  }
  console.log(str);
}
let grid = [
  [0, 1, 2, 3],
  [4, 5, 6, 7],
  [8, 9, 10, 11],
  [12, 13, 14, 15],
];
// console.log(grid)
print(grid, 4, 4);
