function robotWithString(s) {
    const n = s.length;
    const minSuffix = Array(n).fill('z');

    // Precompute the smallest character in the remaining suffix of s
    minSuffix[n - 1] = s[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        minSuffix[i] = s[i] < minSuffix[i + 1] ? s[i] : minSuffix[i + 1];
    }

    const t = [];
    let p = "";

    for (let i = 0; i < n; i++) {
        t.push(s[i]);

        // Keep popping from t if it's <= the smallest remaining char in s
        while (t.length && (i === n - 1 || t[t.length - 1] <= minSuffix[i + 1])) {
            p += t.pop();
        }
    }

    return p;
}

// Example test cases
console.log(robotWithString("zza"));   // "azz"
console.log(robotWithString("bac"));   // "abc"
console.log(robotWithString("bdda"));  // "addb"
