# 🎮 ORB ESCAPE — 3D Sliding Puzzle Game

**Think strategically. Move precisely. Find the optimal escape.**

ORB ESCAPE is an interactive sliding-block puzzle game that challenges players to guide a glowing blue orb toward an exit by strategically moving obstacles across a 3D-style puzzle board.

The project combines **Python-based puzzle-solving logic, algorithmic search, interactive browser gameplay, intelligent hints, and performance-based scoring**.

## 🚀 Key Features

- 🧩 **Algorithmic Puzzle Solving** — Explore puzzle states and search for solutions.
- 🧠 **Optimal Move Analysis** — Calculate minimum-move solutions for supported puzzles.
- 💡 **Intelligent Hints** — Get guidance on the next move.
- 🎮 **Interactive Gameplay** — Move blocks along their permitted paths.
- 🗺️ **Multiple Levels** — Solve puzzles with different layouts and difficulties.
- ↩️ **Undo & Restart** — Recover from mistakes and try different strategies.
- ⏱️ **Game-State Tracking** — Track moves, time, and level progress.
- 📊 **Dynamic Scoring** — Evaluate performance based on gameplay.
- ⭐ **Star Ratings** — Measure puzzle-solving performance.
- 🏆 **Leaderboard** — Compare recorded scores, where supported.
- ✨ **Visual Effects** — Enjoy glowing elements and an animated orb escape sequence.

## 🎯 Game Objective

**Guide the glowing blue orb to the EXIT gate without exceeding the move limit.**

### How to Play

1. Select a puzzle level.
2. Examine the board and identify obstacles.
3. Move blocks along their permitted paths.
4. Plan your moves to create a route to the exit.
5. Use hints when necessary.
6. Reach the exit within the move limit.
7. Improve your score by solving puzzles efficiently.

## 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| Python | Server-side functionality and puzzle-solving logic |
| JavaScript | Interactive gameplay and user controls |
| HTML5 | Browser-based game structure |
| CSS3 | Interface styling and visual effects |
| Git | Version control |
| GitHub | Source-code hosting and documentation |

*Verify the actual implementation before claiming specific graphics engines, frameworks, or libraries.*

## 🧠 Technical Implementation

### 1. Puzzle-Solving Logic

The Python-side puzzle solver explores possible puzzle states to identify solutions.

Relevant concepts include:

- State representation
- Valid-move generation
- Search-based problem-solving
- Goal-state detection
- Minimum-move solution analysis

### 2. Hint Generation

The hint functionality uses puzzle-solving logic to recommend a move that helps the player progress toward a solution.

### 3. Puzzle Validation

Puzzle validation helps determine whether a puzzle configuration is solvable and whether the solver can find a valid solution.

### 4. Game-State Management

The game tracks relevant gameplay information, such as moves, level progress, hint usage, and scoring.

### 5. Frontend and Backend Integration

The browser interface provides the player controls and visual feedback, while the Python side handles supported server-side operations and puzzle logic.

*The exact implementation details should be confirmed against the source code.*

## 🗺️ Puzzle Levels

| Level | Name | Blocks | Optimal Moves | Move Limit |
|---|---|---:|---:|---:|
| 1 | Garden Gate | 7 | 9 | 17 |
| 2 | Crystal Maze | 13 | 18 | 31 |
| 3 | Midnight Vault | 10 | 19 | 32 |

*Verify these values against the actual puzzle definitions and solver output.*

## 🎮 Game Controls

| Control | Function |
|---|---|
| Drag | Move blocks along their permitted paths |
| Undo | Reverse the previous move |
| Hint 💡 | Request a recommended next move |
| Restart | Reset the current puzzle |
| Pause | Pause gameplay, if supported |
| Level Selector | Select another puzzle, if supported |

## 📊 Scoring System

The documented scoring formula is:

**Score = (200 × Level) + (40 × Spare Moves) − (60 × Hints Used)**

- Higher levels provide a larger base score.
- Remaining moves contribute bonus points.
- Using hints reduces the score.

*Confirm the formula against the actual scoring implementation before publishing it as a verified game rule.*

## 🏗️ Project Architecture

```text
                 PLAYER
                   |
                   v
          BROWSER GAME INTERFACE
                   |
                   v
              GAME STATE
                   |
                   v
              PYTHON SERVER
                   |
                   v
              PUZZLE LOGIC
                   |
             +-----+-----+
             |           |
             v           v
           SOLVER     VALIDATION
             |
             v
       HINT / SOLUTION
             |
             v
         GAME FEEDBACK
```

This diagram illustrates the conceptual architecture. Verify the actual communication flow against the implementation.

## 📂 Project Structure

```text
ORB-ESCAPE/
│
├── server.py
├── puzzles.py
├── README.md
│
└── static/
    ├── game.js
    ├── style.css
    └── index.html
```

*Adjust the structure above to match the actual repository files.*

## ⚙️ Installation and Setup

### Prerequisites

- Python 3
- A modern web browser
- Git (optional)

### 1. Clone the Repository

```bash
git clone https://github.com/bhanusri-manukonda/ORB-ESCAPE---3D-Game-.git
```

### 2. Open the Project Directory

```bash
cd ORB-ESCAPE---3D-Game-
```

If the project is inside a nested directory, navigate to the directory containing `server.py`.

### 3. Start the Server

**Windows:**

```powershell
python server.py
```

**macOS/Linux:**

```bash
python3 server.py
```

### 4. Open the Game

Open the local address printed by the server in your browser.

For example, if the server uses port 8000:

```text
http://localhost:8000
```

*The actual port and dependencies depend on the server implementation.*

## 🧪 Testing and Validation

The project notes report that Python-side checks have been performed for:

- Puzzle solvability
- Minimum-move solution verification
- Hint generation
- Solver verification

### Verification Status

| Component | Status |
|---|---|
| Python-side solver checks | Reported as performed |
| Solution verification | Reported as performed |
| Hint generation | Reported as checked |
| Browser gameplay | Requires manual verification |
| 3D rendering | Requires manual verification |
| Drag interactions | Requires manual verification |

These statuses reflect the available project notes, not an independent test run.

## 💡 Challenges Explored

- Representing puzzle configurations as searchable states.
- Exploring valid moves under puzzle constraints.
- Finding solutions across possible board configurations.
- Connecting solver results to an interactive hint system.
- Managing move limits and gameplay progress.
- Integrating puzzle logic with browser interactions.
- Providing useful feedback during gameplay.

## 🔮 Future Improvements

- [ ] Add more challenging puzzle levels.
- [ ] Document the solver algorithm and its complexity.
- [ ] Add automated tests for invalid moves and edge cases.
- [ ] Improve mouse and touch-based interactions.
- [ ] Optimize the interface for mobile devices.
- [ ] Expand leaderboard functionality.
- [ ] Add reproducible solver performance benchmarks.
- [ ] Deploy a playable online version.
- [ ] Add gameplay screenshots and a demonstration GIF.

## 👩‍💻 Developer

**Bhanusri Manukonda**

Computer Science and Engineering  
Aspiring Software Developer

**Technical Skills:** Python • JavaScript • HTML • CSS • Data Structures and Algorithms • Problem-Solving • Git • GitHub

**GitHub:** https://github.com/bhanusri-manukonda

## ⭐ Support

If you find ORB ESCAPE interesting, consider starring the repository!

**ORB ESCAPE — Think strategically. Slide precisely. Escape successfully.**
