
var romanToInt = function(s) {
   
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;
    const length = s.length;

    for (let i = 0; i < length; i++) {
        // Get the value of the current Roman numeral
        const currentVal = romanMap[s[i]];
        // Get the value of the next Roman numeral, or 0 if at the end
        const nextVal = i < length - 1 ? romanMap[s[i + 1]] : 0;

        // If the current value is less than the next value, we subtract it
        if (currentVal < nextVal) {
            total -= currentVal;
        } else {
            total += currentVal;
        }
    }

    return total;


};
