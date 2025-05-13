/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {

    let result = '';
    let carry = 0;
    let maxLength = Math.max(a.length, b.length);

    // Loop through each bit starting from the end
    for (let i = 0; i < maxLength; i++) {
        // Get the current bit from each string, or 0 if out of bounds
        let bitA = a[a.length - 1 - i] || '0';
        let bitB = b[b.length - 1 - i] || '0';
        
        // Calculate the sum of the bits and the carry
        carry += Number(bitA) + Number(bitB);
        // Append the result for the current bit
        result = (carry % 2) + result;
        // Update carry for the next iteration
        carry = Math.floor(carry / 2);
    }

    // If there's a carry left, append it to the result
    if (carry) result = carry + result;

    return result;




};

