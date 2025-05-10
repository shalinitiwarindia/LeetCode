/**
 * @param {string} s
 * @return {number}
 */
var minCut = function(s) {
    const n = s.length;
    const cuts = new Array(n).fill(0);
    const isPalindrome = Array.from({ length: n }, () => new Array(n).fill(false));
    
    for (let i = 0; i < n; i++) {
        cuts[i] = i; 
    }
    
    for (let end = 0; end < n; end++) {
        for (let start = end; start >= 0; start--) {
            if (s[start] === s[end] && (end - start <= 2 || isPalindrome[start + 1][end - 1])) {
                isPalindrome[start][end] = true;
                cuts[end] = start === 0 ? 0 : Math.min(cuts[end], cuts[start - 1] + 1);
            }
        }
    }
    
    return cuts[n - 1];
};
   
    
   
