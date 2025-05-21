/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {

    let col = new Array(matrix.length).fill(0), row = new Array(matrix[0].length).fill(0);
    for(let i=0; i<matrix.length; i++) {
        for(let j=0; j<matrix[i].length; j++) {
            if(matrix[i][j] == 0) {
                row[i] = 1;
                col[j] = 1;
            }
        }
    }
    for(let i=0; i<matrix.length; i++) {
        for(let j=0; j<matrix[i].length; j++) {
            if(row[i] == 1 || col[j] == 1) {
                matrix[i][j] = 0;
            }
        }
    }
};
