from collections import defaultdict, deque

def solve():
    n = int(input().strip())
    edges = []
    points = {}
    idx = 0

    for _ in range(n):
        x1, y1, x2, y2 = map(int, input().split())
        p1, p2 = (x1, y1), (x2, y2)
        
        # assign index to each unique point
        if p1 not in points:
            points[p1] = idx
            idx += 1
        if p2 not in points:
            points[p2] = idx
            idx += 1
        u, v = points[p1], points[p2]
        edges.append((u, v))

    V = len(points)   # number of vertices
    E = len(edges)    # number of edges

    # Build adjacency list
    adj = defaultdict(list)
    for u, v in edges:
        adj[u].append(v)
        adj[v].append(u)

    # Count connected components
    visited = [False] * V
    C = 0

    for i in range(V):
        if not visited[i]:
            C += 1
            q = deque([i])
            visited[i] = True
            while q:
                node = q.popleft()
                for nei in adj[node]:
                    if not visited[nei]:
                        visited[nei] = True
                        q.append(nei)

    # Formula
    closed_shapes = E - V + C
    print(closed_shapes)
