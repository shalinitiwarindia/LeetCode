/**
 * @param {number[]} nums
 * @return {number}
 */
var countMaxOrSubsets = function(nums) {
    let maxOR = 0;
    for (let num of nums) {
        maxOR |= num;
    }

    const backtrack = (index, currentOR) => {
        if (index === nums.length) {
            return currentOR === maxOR ? 1 : 0;
        }

        if (currentOR === maxOR) {
        

    
