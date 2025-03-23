var countPaths = function(n, roads) {
    const MOD = 1e9 + 7;
    
    // Step 1: Build the adjacency list
    const graph = new Array(n).fill(0).map(() => []);
    for (let [u, v, time] of roads) {
        graph[u].push([v, time]);
        graph[v].push([u, time]); // Bi-directional roads
    }
    
    // Step 2: Initialize distance and ways arrays
    const dist = new Array(n).fill(Infinity);
    const ways = new Array(n).fill(0);
    
    // Min Heap [time, node]
    const minHeap = [[0, 0]];
    dist[0] = 0;
    ways[0] = 1;
    
    while (minHeap.length) {
        let [currTime, node] = minHeap.shift();
        
        // Process each neighbor
        for (let [neighbor, travelTime] of graph[node]) {
            let newTime = currTime + travelTime;
            
            if (newTime < dist[neighbor]) { // Found a shorter path
                dist[neighbor] = newTime;
                ways[neighbor] = ways[node]; // Reset ways count
                minHeap.push([newTime, neighbor]);
                minHeap.sort((a, b) => a[0] - b[0]); // Sort to keep min heap property
            } else if (newTime === dist[neighbor]) { // Found an equal shortest path
                ways[neighbor] = (ways[neighbor] + ways[node]) % MOD;
            }
        }
    }
    
    return ways[n - 1];
};
