"""Sliding-block solver (BFS). A piece is (fixed_line, pos, length, horizontal).
Piece 0 is the glass block holding the orb; it wins when its pos reaches column 4."""
from collections import deque
from functools import lru_cache

@lru_cache(None)
def occ(f, x, l, h):
    m = 0
    for k in range(l):
        m |= 1 << ((f * 6 + x + k) if h else ((x + k) * 6 + f))
    return m

def succ(P, st):
    ms = [occ(p[0], st[i], p[2], p[3]) for i, p in enumerate(P)]
    tot = 0
    for m in ms: tot |= m
    for i, (f, _, l, h) in enumerate(P):
        base, x = tot & ~ms[i], st[i]
        for d in (-1, 1):
            y = x + d
            while 0 <= y and y + l <= 6 and not base & occ(f, y, l, h):
                yield i, y, st[:i] + (y,) + st[i + 1:]
                y += d

def solve(P, st=None, cap=150000):
    """Shortest list of (piece, new_pos) moves, [] if already solved, None if unsolvable."""
    st = tuple(st) if st else tuple(p[1] for p in P)
    if st[0] == 4: return []
    prev, q = {st: None}, deque([st])
    while q and len(prev) < cap:
        s = q.popleft()
        for i, y, ns in succ(P, s):
            if ns in prev: continue
            prev[ns] = (s, i, y)
            if i == 0 and y == 4:
                path = []
                while prev[ns]:
                    s0, a, b = prev[ns]; path.append((a, b)); ns = s0
                return path[::-1]
            q.append(ns)
    return None

def verify(P, moves):
    st = tuple(p[1] for p in P)
    for m in moves:
        try: i, y = int(m[0]), int(m[1])
        except Exception: return False
        for j, yy, ns in succ(P, st):
            if j == i and yy == y: st = ns; break
        else: return False
    return st[0] == 4
