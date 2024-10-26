
var longestCommonPrefix = function(strs) {
 
    if (strs.length === 0) return "";

    let prefix = strs[0]; // Start with the first string as the prefix

    for (let i = 1; i < strs.length; i++) {
        // Adjust the prefix to match the current string
        while (strs[i].indexOf(prefix) !== 0) {
            // Reduce the prefix by one character until a match is found
            prefix = prefix.slice(0, -1);
            if (prefix === "") return ""; // If no common prefix, return ""
        }
    }

    return prefix;


};
