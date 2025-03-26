var minOperations = function(grid, x) {
    let arr = grid.flat();
    arr.sort((a, b) => a - b);
    
    // Check if transformation is possible
    let remainder = arr[0] % x;
    for (let num of arr) {
        if (num % x !== remainder) return -1;
    }
    
    // Find the median
    let median = arr[Math.floor(arr.length / 2)];
    let operations = 0;
    
    // Calculate minimum operations
    for (let num of arr) {
        operations += Math.abs(num - median) / x;
    }
    
    return operations;
};

// Example cases
console.log(minOperations([[2,4],[6,8]], 2)); // Output: 4
console.log(minOperations([[1,5],[2,3]], 1)); // Output: 5
console.log(minOperations([[1,2],[3,4]], 2)); // Output: -1
