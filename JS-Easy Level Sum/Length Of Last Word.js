var lengthOfLastWord = function(s) {

    // Split the string by spaces and filter out empty strings
    const words = s.trim().split(" ");
    // Return the length of the last word
    return words[words.length - 1].length;
 
};
