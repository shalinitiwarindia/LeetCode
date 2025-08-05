/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number[][]} edges
 * @return {number}
 */
var maximumValueSum = function(nums, k, edges) {
    let sum = 0;
    let count = 0;
    let minLoss = Infinity;

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
    
       
    
    
 
     

    if (count % 2 === 0) {
        return sum;
    } else {
        return sum - minLoss;
 
