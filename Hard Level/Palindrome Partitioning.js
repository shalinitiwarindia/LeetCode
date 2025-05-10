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
    
    
   
