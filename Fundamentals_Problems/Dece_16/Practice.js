// // Spiral_Matrix
// function SpiralMatrix(matrix) {
//   let m = matrix.length;
//   let n = matrix[0].length;
//   let start_row = 0;
//   let start_col = 0;
//   let last_row = m - 1;
//   let last_col = n - 1;
//   let count = 0;
//   let result = [];

//   while (count < n * m) {
//     for (let x = start_col; x <= last_col; x++) {
//       result.push(matrix[start_row][x]);
//       count++;
//     }
//     start_row++;
//     if (count == n * m) break;

//     for (let x = start_row; x <= last_row; x++) {
//       result.push(matrix[x][last_col]);
//       count++;
//     }
//     last_col--;
//     if (count == n * m) break;

//     for (let x = last_col; x >= start_col; x--) {
//       result.push(matrix[last_row][x]);
//       count++;
//     }
//     last_row--;
//     if (count == n * m) break;

//     for (let x = last_row; x >= start_row; x--) {
//       result.push(matrix[x][start_col]);
//       count++;
//     }
//     start_col++;
//     if (count == n * m) break;
//   }
//   return result;
// }
// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ],
//   r = 3,
//   c = 3;
// console.log(SpiralMatrix(matrix));


let mp = { "A": "X", "B": "0" };

function WinCheck(grid, player) {
    // rows
    if (grid[0, 0] == mp[player] && grid[0, 1] == mp[player] && grid[0, 2] == mp[player]) {
        return true;
    }
    if (grid[1, 0] == mp[player] && grid[1, 1] == mp[player] && grid[1, 2] == mp[player]) {
        return true;
    }
    if (grid[2, 0] == mp[player] && grid[2, 1] == mp[player] && grid[2, 2] == mp[player]) {
        return true;
    }

    // columns
    if (grid[0, 0] == mp[player] && grid[1, 0] == mp[player] && grid[2, 0] == mp[player]) {
        return true;
    }
    if (grid[0, 1] == mp[player] && grid[1, 1] == mp[player] && grid[2, 1] == mp[player]) {
        return true;
    }
    if (grid[0, 2] == mp[player] && grid[1, 2] == mp[player] && grid[2, 2] == mp[player]) {
        return true;
    }
    return false;
}

function TicTacTae(moves) {
    let turn = 0;
    let grid = [['', '', ''], ['', '', ''], ['', '', '']];
    let count = 0;
    for (let i = 0; i < moves.length; i++){
        let currentMove = moves[i];
        let x = currentMove[0];
        let y = currentMove[1];
        let player = (turn == 0) ? 'A' : 'B';
        if (turn == 0 && grid[x][y] == '') {
            return 'X'
            // grid[x][y] = 'X'
        }
        else if (turn == 1 && grid[x][y] == '') {
            return '0'
            // grid[x][y] = '0'
        }
        count++;

        let doesPlayerWin = WinCheck(grid, player);
        if (doesPlayerWin) {
            return player;
        }
        if (turn == 9) {
            return 'Drow'
        }
        turn = (turn + 1) % 2;
    }
    return 'Pending';
    
}

let moves = [[0, 0], [2, 0], [1, 1], [2, 1], [2, 2]];
console.log(TicTacTae(moves));











