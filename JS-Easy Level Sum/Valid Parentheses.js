function isValid(s) {
    const stack = [];
    for (let char of s) {
        if (char === '(' || char === '{' || char === '[') stack.push(char);
        else if (stack.pop() !== { ')': '(', '}': '{', ']': '[' }[char]) return false;
    }
    return !stack.length;
}
