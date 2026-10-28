# 🎮 ORB ESCAPE — 3D Sliding Puzzle Game

<p align="center">
  <img src="https://img.shields.io/badge/Python-3.x-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python">
  <img src="https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/Algorithms-Puzzle_Solving-8A2BE2?style=for-the-badge" alt="Algorithms">
  <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
</p>

<p align="center">
  <strong>An interactive 3D-style sliding puzzle game combining algorithmic problem-solving, strategic gameplay, and intelligent hints.</strong>
</p>

<p align="center">
  🧩 Puzzle Solving &nbsp;•&nbsp;
  🧠 Search Algorithms &nbsp;•&nbsp;
  🎮 Interactive Gameplay &nbsp;•&nbsp;
  ✨ Visual Effects
</p>

---

## 🎮 About ORB ESCAPE

**ORB ESCAPE** is a browser-based sliding-block puzzle game in which players must guide a glowing blue orb toward a green exit by strategically moving obstacles across a 3D-style puzzle board.

The game combines **Python-based puzzle-solving logic, JavaScript-powered interactions, and visual feedback** to create a challenging problem-solving experience.

Players must analyze the board, understand movement constraints, plan their strategies, and reach the exit without exceeding the move limit.

The project explores the practical application of algorithmic thinking in an interactive gaming environment.

---

## 🎯 Project Highlights

| Feature | Description |
|---|---|
| 🧩 Puzzle Solving | Uses search-based logic to explore puzzle states and find solutions. |
| 🧠 Optimal Solution Analysis | Determines minimum-move solutions for supported puzzle configurations. |
| 💡 Intelligent Hints | Provides guidance to help players progress through puzzles. |
| 🎮 Interactive Gameplay | Move blocks along their designated paths. |
| 🗺️ Multiple Levels | Play puzzles with different layouts and difficulty levels. |
| ↩️ Undo & Restart | Reverse moves and experiment with alternative strategies. |
| ⏱️ Game-State Tracking | Track moves, elapsed time, and level progress. |
| 📊 Dynamic Scoring | Evaluate performance using gameplay statistics. |
| ⭐ Star Ratings | Assess puzzle-solving performance. |
| 🏆 Leaderboard | Record and compare scores, where supported. |
| ✨ Visual Effects | Features glowing elements, animated creatures, fireflies, a reactive owl, and an orb escape animation. |

---

# ✨ Features

## 🧩 Puzzle-Solving System

The Python-side puzzle-solving functionality explores possible moves to find a path toward the goal state.

Key capabilities include:

- Search-based puzzle solving.
- Exploration of valid puzzle states.
- Puzzle solvability verification.
- Minimum-move solution analysis.
- Move evaluation and constraint checking.

*The exact search algorithm should be documented after confirming the implementation in the source code.*

---

## 💡 Intelligent Hint System

The hint system connects puzzle-solving logic with the player's gameplay experience.

Players can request guidance when they are unable to identify the next move.

- Get a recommended next move.
- Understand a possible solution path.
- Continue solving without immediately restarting the level.

---

## 🎮 Interactive Gameplay

The game provides a browser-based interface for interacting with the puzzle board.

Players can:

- Select available puzzle levels.
- Move blocks along their permitted paths.
- Monitor their progress.
- Undo previous moves.
- Restart a puzzle.
- Use hints when needed.
- Work toward the exit within the move limit.

---

## 🏆 Performance and Scoring

The game incorporates performance-oriented mechanics designed to encourage efficient puzzle-solving.

These include:

- Move tracking.
- Remaining move allowance.
- Hint usage.
- Score calculation.
- Star-based performance evaluation.
- Leaderboard functionality, where supported.

---

## ✨ Visual Experience

ORB ESCAPE combines puzzle mechanics with a visually engaging environment.

The documented visual elements include:

- A glowing blue orb.
- A tilted puzzle board.
- Sliding blocks and predefined grooves.
- A green exit gate.
- Animated visual effects.
- Glowing fireflies and animated creatures.
- An orb escape animation.

---

# 🛠️ Technologies Used

## 🎨 Frontend

<p>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
</p>

- **HTML5:** Structures the browser-based game interface.
- **CSS3:** Styles the game board and visual elements.
- **JavaScript:** Handles supported gameplay interactions and interface updates.

## ⚙️ Backend

<p>
  <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python">
</p>

- **Python:** Implements the server-side functionality and puzzle-solving logic.
- **Puzzle Logic:** Supports solution search, validation, and hint generation.

## 🔧 Development Tools

<p>
  <img src="https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visual--studio--code&logoColor=white" alt="Visual Studio Code">
  <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git">
  <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
</p>

*The actual rendering technology, server implementation, and additional dependencies should be confirmed from the project files before adding specific frameworks or libraries.*

---

# 🧠 Technical Skills Demonstrated

## 1. Data Structures and Algorithms

- Search-based problem-solving.
- Puzzle-state representation.
- State-space exploration.
- Valid-move evaluation.
- Goal-state detection.
- Minimum-move solution analysis.

## 2. Python Programming

- Server-side application logic.
- Puzzle-solving functionality.
- Puzzle validation.
- Hint generation.
- Backend integration.

## 3. JavaScript and Interactive Development

- User interaction handling.
- Browser-based gameplay.
- Block movement and controls.
- Game-state updates.
- Visual feedback.

## 4. Game Logic

- Move-limit management.
- Score calculation.
- Hint penalties.
- Performance evaluation.
- Puzzle progression.

## 5. Software Development

- Frontend and backend integration.
- Testing and verification.
- Debugging.
- Modular code organization.
- Version control using Git and GitHub.

---

# 🏗️ Project Architecture

ORB ESCAPE separates the browser-based gameplay experience from the Python-side puzzle-solving functionality.

```text
                    👤 PLAYER
                       |
                       v
             🌐 BROWSER INTERFACE
                       |
             +---------+---------+
             |                   |
             v                   v
        🎮 CONTROLS         ✨ VISUALS
             |
             v
          GAME STATE
             |
             v
        ⚙️ PYTHON SERVER
             |
             v
         🧩 PUZZLE LOGIC
             |
       +-----+------+
       |            |
       v            v
    🧠 SOLVER    ✅ VALIDATION
       |
       v
   💡 HINT / SOLUTION
       |
       v
   📊 GAME FEEDBACK
```

*This is a conceptual architecture diagram. Confirm the actual request flow and component responsibilities against the source code.*

---

# 🗺️ Available Levels

ORB ESCAPE documents three puzzle levels.

| Level | Name | Blocks | Optimal Moves | Move Limit |
|---|---|---:|---:|---:|
| 1 | Garden Gate | 7 | 9 | 17 |
| 2 | Crystal Maze | 13 | 18 | 31 |
| 3 | Midnight Vault | 10 | 19 | 32 |

### Understanding the Levels

- **Blocks:** Number of puzzle blocks documented for the level.
- **Optimal Moves:** Reported minimum number of moves required to solve the puzzle.
- **Move Limit:** Maximum permitted moves for the challenge.

The optimal move counts and block totals should be verified against the actual puzzle definitions and solver output.

---

# 🎯 Gameplay Instructions

The objective is simple: **guide the glowing blue orb to the green EXIT gate within the move limit.**

### How to Play

1. Select a puzzle level.
2. Examine the board and identify the obstacles.
3. Move blocks along their designated grooves.
4. Plan your moves to clear a path toward the exit.
5. Use the hint feature when necessary.
6. Reach the exit without exceeding the move limit.
7. Improve your score by solving the puzzle efficiently.

When the orb reaches the exit, the documented completion animation features the orb escaping with visual effects.

---

# 🎮 Game Controls

| Control | Function |
|---|---|
| Drag | Move blocks along their permitted paths |
| Undo | Reverse the previous move |
| Hint 💡 | Request guidance for the next move |
| Restart | Reset the current puzzle |
| Pause ⏸️ | Pause gameplay |
| Level Selector | Switch between puzzles |

*Confirm that each control works in the current browser implementation before publishing the README.*

---

# 📊 Scoring System

The documented scoring formula is:

**Score = (200 × Level) + (40 × Spare Moves) − (60 × Hints Used)**

| Component | Purpose |
|---|---|
| Level | Determines the base score. |
| Spare Moves | Rewards efficient puzzle completion. |
| Hints Used | Reduces the score when hints are requested. |
| Star Rating | Provides an additional performance indicator. |

The exact formula and star-awarding rules must be verified against the game's implementation.

---

# 📂 Project Structure

The following is a conceptual representation of the main project files.

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

*Update this tree if your actual repository contains additional files or uses a different directory structure.*

---

# 🚀 Installation and Setup

Follow these steps to run ORB ESCAPE locally.

## 1️⃣ Prerequisites

Install the following:

- Python 3.
- A modern web browser.
- Git (optional).

## 2️⃣ Clone the Repository

```bash
git clone https://github.com/bhanusri-manukonda/ORB-ESCAPE---3D-Game-.git
```

## 3️⃣ Navigate to the Project

```bash
cd ORB-ESCAPE---3D-Game-
```

If the project files are inside a nested `orb-escape` directory, enter that directory before starting the server.

## 4️⃣ Start the Server

### Windows

```powershell
python server.py
```

### macOS / Linux

```bash
python3 server.py
```

Run the command from the directory containing `server.py`.

Install any additional dependencies required by the project if the application reports missing packages.

## 5️⃣ Open the Game

Open the local address printed by the server in your browser.

For example, if the server listens on port `8000`:

```text
http://localhost:8000
```

*Confirm the actual server port from `server.py` before relying on this address.*

---

# 🧪 Testing and Validation

The available project notes report that Python-side verification has been performed for the following:

- Puzzle solvability.
- Minimum-move solution verification.
- Hint generation.
- Solver verification.

## Current Verification Status

| Component | Status |
|---|---|
| Python-side solver checks | Reported as performed |
| Puzzle solution verification | Reported as performed |
| Hint generation | Reported as checked |
| Browser gameplay | Requires manual verification |
| 3D rendering | Requires manual verification |
| Mouse dragging | Requires manual verification |

These statuses reflect the available project notes rather than an independent test run.

### Recommended Manual Tests

- Start the server and open the game.
- Confirm that each level loads.
- Move blocks and check movement constraints.
- Request a hint and verify the recommended move.
- Test undo and restart.
- Complete a puzzle and verify the exit animation.
- Check score calculation and level progression.
- Inspect the browser console for errors.

---

# 💡 Challenges Addressed

ORB ESCAPE explores several software development challenges:

- Representing sliding-block puzzles as searchable states.
- Finding solutions across possible board configurations.
- Enforcing valid-move constraints.
- Connecting puzzle-solving logic to the hint system.
- Managing gameplay state and move limits.
- Integrating browser interactions with Python functionality.
- Combining game mechanics with visual feedback.

These concepts make the project relevant to algorithmic problem-solving, interactive application development, and software testing.

---

# 🔮 Future Enhancements

- [ ] Add more challenging puzzle levels.
- [ ] Document the exact search algorithm and its complexity.
- [ ] Add automated tests for puzzle constraints and edge cases.
- [ ] Improve mouse and touch-based dragging.
- [ ] Optimize the interface for mobile devices.
- [ ] Expand leaderboard functionality.
- [ ] Add solver performance benchmarks.
- [ ] Introduce difficulty-based level recommendations.
- [ ] Deploy a playable version online.
- [ ] Add gameplay screenshots and a demonstration GIF.

---

# 👩‍💻 Developer

<p align="center">
  <strong>Bhanusri Manukonda</strong><br>
  Computer Science and Engineering<br>
  Aspiring Software Developer
</p>

### 💻 Technical Skills

<p align="center">
  <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/Algorithms-8A2BE2?style=for-the-badge" alt="Algorithms">
  <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git">
  <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
</p>

**GitHub Profile:**  
https://github.com/bhanusri-manukonda

---

# 📄 Project Purpose

ORB ESCAPE is a software development and learning project focused on puzzle-solving logic, interactive gameplay, and algorithmic problem-solving.

---

<p align="center">
  <strong>⭐ If you find ORB ESCAPE interesting, consider starring the repository!</strong>
</p>

<p align="center">
  <strong>🎮 ORB ESCAPE — Think Strategically • Slide Precisely • Escape Successfully 🚀</strong>
</p>
