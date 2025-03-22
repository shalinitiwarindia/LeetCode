function countCompleteComponents(n, edges) {
    // Create an adjacency list
    let graph = new Map();
    for (let i = 0; i < n; i++) {
        graph.set(i, []);
    }
    for (let [u, v] of edges) {
        graph.get(u).push(v);
        graph.get(v).push(u);
    }

    let visited = new Array(n).fill(false);
    let completeComponents = 0;

    // DFS to find connected components
    function dfs(node, component) {
        visited[node] = true;
        component.push(node);
        for (let neighbor of graph.get(node)) {
            if (!visited[neighbor]) {
                dfs(neighbor, component);
            }
        }
    }

    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            let component = [];
            dfs(i, component);

            // Check if the component is complete
            let size = component.length;
            let edgeCount = 0;
            for (let node of component) {
                edgeCount += graph.get(node).length;
            }

            if (edgeCount === size * (size - 1)) {
                completeComponents++;
            }
        }
    }

    return completeComponents;
}

// Example test cases
console.log(countCompleteComponents(6, [[0,1],[0,2],[1,2],[3,4]])); // Output: 3
console.log(countCompleteComponents(6, [[0,1],[0,2],[1,2],[3,4],[3,5]])); // Output: 1
