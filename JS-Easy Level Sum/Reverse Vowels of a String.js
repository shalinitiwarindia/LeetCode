/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const chars = s.split("");
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    
    let left = 0;
    let right = chars.length - 1;
    
    while (left < right) {
        // Move left pointer until it finds a vowel
        while (left < right && !vowels.has(chars[left])) {
            left++;
        }
        
        // Move right pointer until it finds a vowel
        while (left < right && !vowels.has(chars[right])) {
            right--;
        }
        
        // Swap the vowels at left and right pointers
        [chars[left], chars[right]] = [chars[right], chars[left]];
        
        // Move both pointers towards the center
        left++;
        right--;
    }
    
    // Join the array back to a string and return
    return chars.join("");   
};
