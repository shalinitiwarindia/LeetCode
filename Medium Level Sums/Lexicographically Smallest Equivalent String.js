function smallestEquivalentString(s1, s2, baseStr) {
    // Initialize parent for each char as itself
    const parent = new Array(26);
    for (let i = 0; i < 26; i++) {
        parent[i] = i;
    }

    // Find function with path compression
    function find(x) {
        if (parent[x] !== x) {
            parent[x] = find(parent[x]);
        }
        return parent[x];
    }

    // Union function, always attaching larger to smaller
    function union(x, y) {
        const px = find(x);
        const py = find(y);
        if (px === py) return;
        if (px < py) {
            parent[py] = px;
        } else {
            parent[px] = py;
        }
    }

    // Apply union for equivalency pairs
    for (let i = 0; i < s1.length; i++) {
        union(s1.charCodeAt(i) - 97, s2.charCodeAt(i) - 97);
    }

    // Build result by replacing each char in baseStr
    let result = "";
    for (const ch of baseStr) {
        const smallestChar = String.fromCharCode(find(ch.charCodeAt(0) - 97) + 97);
        result += smallestChar;
    }

    return result;
}

// Example Usage:
console.log(smallestEquivalentString("parker", "morris", "parser")); // makkek
console.log(smallestEquivalentString("hello", "world", "hold")); // hdld
console.log(smallestEquivalentString("leetcode", "programs", "sourcecode")); // aauaaaaada
