/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {

    const seen = new Set();
    while (n !== 1 && !seen.has(n)) {
        seen.add(n);
        n = [...String(n)].reduce((sum, digit) => sum + digit * digit, 0);
    }
    return n === 1;


};
