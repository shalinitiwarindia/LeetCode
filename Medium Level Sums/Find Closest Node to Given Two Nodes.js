var closestMeetingNode = function(edges, node1, node2) {
    const n = edges.length;

    const getDistances = (start) => {
        const dist = new Array(n).fill(Infinity);
        let current = start;
        let distance = 0;

        while (current !== -1 && dist[current] === Infinity) {
            dist[current] = distance;
            current = edges[current];
            distance++;
        }
        return dist;
    };

    const dist1 = getDistances(node1);
    const dist2 = getDistances(node2);

    let result = -1;
    let minDist = Infinity;

    for (let i = 0; i < n; i++) {
        if (dist1[i] !== Infinity && dist2[i] !== Infinity) {
            let maxDist = Math.max(dist1[i], dist2[i]);
            if (maxDist < minDist) {
                minDist = maxDist;
                result = i;
            }
        }
    }

    return result;
};
