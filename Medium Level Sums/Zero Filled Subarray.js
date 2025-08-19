/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function (nums) {
    let counter = 0, total = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            counter++;
            total += counter;
        }
        else counter = 0;
        
    }
    return total;
};
