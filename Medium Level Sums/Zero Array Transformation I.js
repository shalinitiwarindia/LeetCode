/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean}
 */
var isZeroArray = function(nums, queries) {
    const n = nums.length;
    const freq = new Array(n + 1).fill(0); 

    // Step 1: Mark ranges using difference array
    for (let [l, r] of queries) {
        freq[l] += 1;
        if (r + 1 < n) freq[r + 1] -= 1;
    }

    // Step 2: Convert to prefix sum to get actual coverage
    for (let i = 1; i < n; i++) {
        freq[i] += freq[i - 1];
    }

    // Step 3: Validate if we can reduce each nums[i] to 0
    for (let i = 0; i < n; i++) {
        if (nums[i] > freq[i]) return false;
    }

    return true;
};
