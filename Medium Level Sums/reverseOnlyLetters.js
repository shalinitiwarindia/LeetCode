/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
   
  // Extract all English letters from the string
  const letters = s.split('').filter(char => /[a-zA-Z]/.test(char));
  
  // Create an array to store the final result
  const result = [];

  // Traverse the original string
  for (let i = 0; i < s.length; i++) {
    if (/[a-zA-Z]/.test(s[i])) {
      // Replace letter with the last one from the letters array
      result.push(letters.pop());
    } else {
      // Keep non-letter characters in their original position
      result.push(s[i]);
    }
  }

  // Join the result array into a string and return
  return result.join('');


};
