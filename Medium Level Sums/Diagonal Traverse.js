const findDiagonalOrder = mat => {
    const key = [];

    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            if (!key[i + j]) key[i + j] = [];
            key[i + j].push(mat[i][j]);
        }
    }

    const res = [];

    for (let i = 0; i < key.length; i++) {
        res.push(i & 1 ? key[i] : key[i].reverse());
    }

    return res.flat();
};
