// // let grid = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];
// let grid = [[1, 0, 0, 0, 0], [0, 2, 0, 0, 0], [0, 0, 3, 0, 0], [0, 0, 0, 4, 0], [0, 0, 0, 0, 5]];
// console.log(grid);


// To create a 2D array of 5*6 (5 rows and 6 columns) and every cell of the 2D array
let arr = Array(4);       // outer
for (let i = 0; i < 5; i++) {
    let inner = Array(5).fill(0);
    arr[i] = inner;
}
// console.log(arr);


arr[0][0] = 1
arr[1][1] = 2;
arr[2][2] = 3;
arr[3][3] = 4;
arr[4][4] = 5;
// arr[5][5] = 65
console.log(arr);
// console.log(arr[0][1]);
