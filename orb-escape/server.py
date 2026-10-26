import json, math, os, sys
from functools import lru_cache
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from solver import solve, verify
from levels import LEVELS

HERE = os.path.dirname(os.path.abspath(__file__))
SCORES = os.path.join(HERE, "scores.json")
BASE, PER, PEN = 200, 40, 60          # level base points, points per spare move, hint penalty

def PL(l): return [(p["f"], p["x"], p["l"], p["h"]) for p in l["pieces"]]
for l in LEVELS:
    l["par"] = len(solve(PL(l)))       # best possible number of moves (computed by BFS)
    l["limit"] = int(l["par"] * 1.5) + 4
BY = {l["id"]: l for l in LEVELS}

def stars(l, m):
    return 3 if m <= math.ceil(l["par"] * 1.2) + 1 else 2 if m <= math.ceil(l["par"] * 1.45) + 1 else 1

@lru_cache(512)
def best_move(lid, st): return solve(PL(BY[lid]), st)

def board_ok(l, st):
    P = PL(l)
    if len(st) != len(P): return False
    seen = set()
    for (f, _, ln, h), x in zip(P, st):
        if not isinstance(x, int) or x < 0 or x + ln > 6: return False
        for k in range(ln):
            c = (f, x + k) if h else (x + k, f)
            if c in seen: return False
            seen.add(c)
    return True

def load():
    try:
        with open(SCORES) as f: return json.load(f)
    except Exception: return []

class H(SimpleHTTPRequestHandler):
    def __init__(s, *a, **k): super().__init__(*a, directory=os.path.join(HERE, "static"), **k)
    def j(s, o, c=200):
        b = json.dumps(o).encode()
        s.send_response(c); s.send_header("Content-Type", "application/json")
        s.send_header("Content-Length", str(len(b))); s.end_headers(); s.wfile.write(b)
    def do_GET(s):
        if s.path == "/api/levels":
            return s.j({"cfg": {"base": BASE, "per": PER, "pen": PEN}, "levels": LEVELS})
        if s.path == "/api/leaderboard": return s.j(load()[:10])
        super().do_GET()
    def do_POST(s):
        try: d = json.loads(s.rfile.read(int(s.headers.get("Content-Length", 0))) or b"{}")
        except Exception: return s.j({"error": "bad json"}, 400)
        l = BY.get(d.get("level"))
        if s.path == "/api/hint":
            st = tuple(d.get("state", []))
            if not l or not board_ok(l, st): return s.j({"error": "bad state"}, 400)
            path = best_move(l["id"], st)
            return s.j({"move": list(path[0]) if path else None})
        if s.path == "/api/verify":
            mv = d.get("moves", [])
            if not l or not isinstance(mv, list) or len(mv) > l["limit"]: return s.j({"ok": False})
            if not verify(PL(l), mv): return s.j({"ok": False})
            h = max(0, min(int(d.get("hints", 0)), 50))
            score = max(50, BASE * l["id"] + PER * (l["limit"] - len(mv)) - PEN * h)
            return s.j({"ok": True, "score": score, "stars": stars(l, len(mv))})
        if s.path == "/api/score":
            b = load(); b.append({"name": (str(d.get("name", "Player"))[:20] or "Player"), "score": max(0, min(int(d.get("score", 0)), 5000))})
            b = sorted(b, key=lambda x: -x["score"])[:50]
            with open(SCORES, "w") as f: json.dump(b, f)
            return s.j(b[:10])
        s.j({"error": "not found"}, 404)

if __name__ == "__main__":
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8000
    print(f"Orb Escape running -> http://localhost:{port}")
    ThreadingHTTPServer(("127.0.0.1", port), H).serve_forever()
