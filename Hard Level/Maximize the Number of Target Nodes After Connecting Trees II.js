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
  
