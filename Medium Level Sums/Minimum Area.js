/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumArea = function(grid) {
    const row = grid.length, col = grid[0].length;
    let minRow = Infinity, minCol = Infinity;
    let maxRow = -Infinity, maxCol = -Infinity;
    for (let i = 0; i < row; i++){
        for (let j = 0; j < col; j++){
            if (grid[i][j] == 1){
                minRow = Math.min(minRow, i);
                maxRow = Math.max(maxRow, i);
                minCol = Math.min(minCol, j);
                maxCol = Math.max(maxCol, j);
            }
        }
    }
    return (maxRow - minRow + 1) * (maxCol - minCol + 1);
};
