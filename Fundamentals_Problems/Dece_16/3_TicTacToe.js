let mp = {
    'A': 'X',
    'B': '0'
}

function winCheck(grid, player) {
    // check rows
    // row 0
    if (grid[0][0] == mp[player] && grid[0][1] == mp[player] && grid[0][2] == mp[player]) {
        return true;  // current player wins
    }

    // row 1
    if (grid[1][0] == mp[player] && grid[1][1] == mp[player] && grid[1][2] == mp[player]) {
        return true;  // current player wins
    }

    // row 2
    if (grid[2][0] == mp[player] && grid[2][1] == mp[player] && grid[2][2] == mp[player]) {
        return true;  // current player wins
    }


    // check col
    // col 0
    if (grid[0][0] == mp[player] && grid[1][0] == mp[player] && grid[2][0] == mp[player]) {
        return true;  // current player wins
    }

    // col 1
    if (grid[0][1] == mp[player] && grid[1][1] == mp[player] && grid[2][1] == mp[player]) {
        return true;  // current player wins  
    }

    // col 2
    if (grid[0][2] == mp[player] && grid[1][2] == mp[player] && grid[2][2] == mp[player]) {
        return true;   // current player wins
    }


    // check diagonal
    // diagonal 0
    if (grid[0][0] == mp[player] && grid[1][1] == mp[player] && grid[2][2] == mp[player]) {
        return true;  // current player wins 
    }

    // diagonal 1
    if (grid[2][0] == mp[player] && grid[1][1] == mp[player] && grid[0][2] == mp[player]) {
        return true;   // current player wins
    }

    return false;    // current player didn't win yet
}

var TicTacToe = function (moves) {
    let turn = 0;     //  0-> A  , 1-> B
    let grid = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];  // TicTactoe grid
    // let state = "Pending";
    let count = 0;
    for (let i = 0; i < moves.length; i++) {
        let currMove = moves[i];
        let x = currMove[0];
        let y = currMove[1];
        let player = (turn == 0) ? 'A' : 'B';
        if (turn == 0 && grid[x][y] == ' ') {
            grid[x][y] = 'X';
        }
        else if (turn == 1 && grid[x][y] == ' ') {
            grid[x][y] = '0';
        }
        count++;
        let doesPlayerWin = winCheck(grid, player);
        if (doesPlayerWin) {
            return player;
        }
        if (count == 9) {
            return "Draw";
        }
        turn = (turn + 1) % 2;
    }
    return "Pending"
};


let moves = [[0, 0], [2, 0], [1, 1], [2, 1], [2, 2]]
console.log(TicTacToe(moves));