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
  
        

    
