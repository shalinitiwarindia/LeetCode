function snakesAndLadders(board) {
    const n = board.length;
    const visited = new Set();
    const queue = [[1, 0]]; // [current position, moves]

    const getCoordinates = (square) => {
        let row = n - 1 - Math.floor((square - 1) / n);
        let col = (square - 1) % n;
        if ((n - row) % 2 === 0) col = n - 1 - col;
        return [row, col];
    }

    while (queue.length > 0) {
        const [curr, moves] = queue.shift();
        if (curr === n * n) return moves;

        for (let i = 1; i <= 6; i++) {
            let next = curr + i;
            if (next > n * n) continue;
            const [row, col] = getCoordinates(next);
            if (board[row][col] !== -1) {
                next = board[row][col];
            }
            if (!visited.has(next)) {
                visited.add(next);
                queue.push([next, moves + 1]);
            }
        }
    }

    return -1;
}
