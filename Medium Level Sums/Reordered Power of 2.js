var reorderedPowerOf2 = function(n) {
    let length = 0, digits = new Array(10).fill(0);
    while (n != 0) {
        digits[n % 10] += 1;
        length += 1;
        n = Math.floor(n / 10);
    }
    function dfs(num, l, digits) {
        if (l == length) return Number.isInteger(Math.log2(num));
        for (let i = 0; i < 10; i++) {
            if (i == 0 && num == 0) continue;
            if (digits[i]) {
                digits[i] -= 1;
                if (dfs(num * 10 + i, l + 1, digits)) return true;
                digits[i] += 1;
            }
        }
        return false;
    }
    return dfs(0, 0, digits)
}
