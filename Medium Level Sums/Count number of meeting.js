/**
 * @param {number} days
 * @param {number[][]} meetings
 * @return {number}
 */
var countDays = function(days, meetings) {
    // Step 1: Sort meetings by start time
    meetings.sort((a, b) => a[0] - b[0]);

    let mergedDays = 0, prevEnd = 0;

    // Step 2: Merge overlapping intervals
    for (let [start, end] of meetings) {
        if (start > prevEnd + 1) {
            // Count available days between previous meeting end and new meeting start
            mergedDays += end - start + 1;
        } else {
            // Extend the existing meeting range
            mergedDays += Math.max(0, end - prevEnd);
        }
        prevEnd = Math.max(prevEnd, end);
    }

    // Step 3: Calculate available days
    return days - mergedDays;
};

// Test cases
console.log(countDays(10, [[5,7],[1,3],[9,10]])); // Output: 2
console.log(countDays(5, [[2,4],[1,3]])); // Output: 1
console.log(countDays(6, [[1,6]])); // Output: 0
console.log(countDays(519058, [[356831,464237],[223514,231054],[96523,343641]])); // Large test case



   

 

