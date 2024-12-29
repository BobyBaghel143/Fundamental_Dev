//  no of rows = grid.length
function display(grid) {   // print the whole grid row by row
    let str = " ";
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid.length; j++) {
            str += grid[i][j] + "_";  // grid[i][j] -> element at ith row & jth col
        }
    };
    return str;
};

let grid = [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11], [12, 13, 14, 15]];
// display(grid);
// console.log(grid);
console.log(display(grid));