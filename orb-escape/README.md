# ORB ESCAPE – 3D sliding-block puzzle
HTML + CSS 3D transforms + JavaScript front end; Python (standard library) back end.
Run:  python server.py   ->  open http://localhost:8000   (other port: python server.py 9000)
- levels.py  – the 3 block layouts (each is checked solvable by the BFS solver)
- solver.py  – shortest-path solver used for par moves, hints and replay verification
- server.py  – serves the game, gives hints, verifies runs, scores, leaderboard (scores.json)
Scoring: level base 200×level + 40 per spare move − 60 per hint. Stars from moves vs par.
