var productQueries = function (n, queries) {
    const mod = 1000000007;
    const bins = [];
    let rep = 1;
    while (n > 0) {
        if (n % 2 === 1) {
            bins.push(rep);
        }
        n = Math.floor(n / 2);
        rep *= 2;
    }

    const ans = [];
    for (const [start, end] of queries) {
        let cur = 1;
        for (let i = start; i <= end; i++) {
            cur = (cur * bins[i]) % mod;
        }
        ans.push(cur);
    }
    return ans;
};
