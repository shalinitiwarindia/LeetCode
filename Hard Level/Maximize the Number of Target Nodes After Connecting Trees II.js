/**
 * @param {number[][]} edges1
 * @param {number[][]} edges2
 * @return {number[]}
 */
var maxTargetNodes = function(edges1, edges2) {
    function dfs(v, u, adj, parity, even){
        let res = even;
        parity[v] = even;
        for(let w of adj[v]){
            if(w == u) continue;
            res += dfs(w, v, adj, parity, !even);
        }
     
    let n1 = edges1.length+1, n2 = edges2.length+1;
    console.log(n1, n2);
    let parity1 = Array.from({length:n1}, () => false);
    let parity2 = Array.from({length:n2}, () => false);
    let even1 = dfs(0, -1, adj(edges1, n1), parity1, true), odd1 = n1 - even1;
    let even2 = dfs(0, -1, adj(edges2, n2), parity2, true), odd2 = n2 - even2;
    let res = [];
    for(let i = 0; i < n1; ++i){
        res.push((parity1[i]?even1:odd1) + Math.max(even2,odd2));
    }
    return res;
};
