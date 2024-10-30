/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
   
    if (x < 2) return x; // For 0 and 1, the square root is the number itself

    let left = 2, right = Math.floor(x / 2); // Start with bounds

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const square = mid * mid;

        if (square === x) {
            return mid; // Perfect square
        } else if (square < x) {
            left = mid + 1; // Move right
        } else {
            right = mid - 1; // Move left
        }
    }

    return right; // Right will be the floor of the square root


};
