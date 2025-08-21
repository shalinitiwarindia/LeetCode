/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSubmat = function(mat) {
    const m = mat.length, n = mat[0].length;
    const height = Array(n).fill(0);
    let ans = 0;
    for (let i = 0; i < m; i++){
        for (let j = 0; j < n; j++){
            height[j] = mat[i][j] ? height[j] + 1 : 0;
        }
        const stack = [];
        let cur = 0;
        for (const h of height){
            let cnt = 1;
            while (stack.length && stack[stack.length - 1][0] >= h){
                const [ph, pc] = stack.pop();
                cur -= ph * pc;
                cnt += pc;
            }
            cur += h * cnt;
            stack.push([h, cnt]);
            ans += cur;
        } 
    }
    return ans;
};
