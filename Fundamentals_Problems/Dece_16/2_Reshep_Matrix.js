function matrixReshap(mat, r, c) {
    let m = mat.length;
    let n = mat[0].length;

    // can not do Reshape
    if (n * m != r * c) return matrix;

    let row = 0;
    let col = 0;
    let result = Array(r);
    for (let i = 0; i < r; i++) {
        result[i] = Array(c).fill(0);
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let element = mat[i][j];
            result[row][col] = element;
            col++;
            if (col == c) {
                row++;
                col = 0;
            }
        }
    }
    return result;
};

let matrix = [[1, 2], [3, 4]];
let r = 2;
let c = 2;
// console.log(result);
console.log(matrixReshap(matrix, r, c))