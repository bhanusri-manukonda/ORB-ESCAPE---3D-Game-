\# 🎮 ORB ESCAPE | 3D Sliding Puzzle Game



\*\*A 3D puzzle game combining algorithmic problem-solving, interactive gameplay, and real-time feedback.\*\*



ORB ESCAPE challenges players to navigate a glowing blue orb through a sliding-block puzzle. Players must move blocks along predefined grooves, plan their moves strategically, and reach the exit before exhausting the move limit.



The project combines Python-based puzzle-solving logic with an interactive browser-based gaming experience.



\---



\## 🚀 Project Highlights



\- 🧩 \*\*Algorithmic Puzzle Solving:\*\* Puzzle layouts are generated and validated using computer search.

\- 🧠 \*\*Optimal Solution Analysis:\*\* A Python solver determines the minimum number of moves required to solve each level.

\- 💡 \*\*Intelligent Hints:\*\* The server provides the best next move to help players progress.

\- 🎮 \*\*Interactive 3D Gameplay:\*\* Slide blocks along their grooves on a tilted puzzle board.

\- 📊 \*\*Dynamic Scoring:\*\* Scores reflect the level, remaining moves, and hints used.

\- ⭐ \*\*Performance Evaluation:\*\* Earn up to three stars based on your gameplay performance.

\- ⏱️ \*\*Game State Management:\*\* Track moves, elapsed time, and progress through each level.

\- ↩️ \*\*Undo and Restart:\*\* Experiment with different strategies and recover from mistakes.

\- 🏆 \*\*Leaderboard:\*\* Save scores and compare gameplay performance.

\- ✨ \*\*Visual Effects:\*\* Animated creatures, glowing fireflies, a reactive owl, and an orb escape animation.



\---



\## 🛠️ Tech Stack



| Technology | Application |

|---|---|

| Python | Game server and puzzle-solving logic |

| HTML | Browser-based game structure |

| CSS | Game interface and visual styling |

| JavaScript | Interactive gameplay and user controls |

| 3D Graphics | Visualization of the board and sliding blocks |

| Git \& GitHub | Version control and project management |



\*Note: Verify the exact 3D graphics library and server implementation in your source code before publishing this list.\*



\---



\## 🧠 Technical Skills Demonstrated



\### 1. Data Structures and Algorithms

\- Search-based puzzle generation and validation

\- Minimum-move solution calculation

\- State exploration and move evaluation

\- Constraint-based puzzle solving



\### 2. Python Programming

\- Server-side game logic

\- Solver and hint functionality

\- Game-state validation

\- Integration between the game interface and backend



\### 3. JavaScript and Interactive Development

\- Handling player interactions

\- Dragging and moving puzzle blocks

\- Updating gameplay information

\- Managing user actions and game feedback



\### 4. Game Logic and Optimization

\- Move-limit enforcement

\- Optimal solution analysis

\- Score calculation

\- Hint penalties and performance-based rewards



\### 5. Software Development

\- Frontend and backend integration

\- Testing puzzle solvability

\- Debugging and verification

\- Organizing a multi-file project



\---



\## 🎯 Gameplay



The objective is simple: \*\*get the glowing blue orb to the green EXIT gate within the move limit.\*\*



1\. Select a level.

2\. Drag blocks along their designated grooves.

3\. Plan your moves to clear a path toward the exit.

4\. Use hints when you need help.

5\. Reach the exit without exceeding the move limit.

6\. Earn stars and improve your score.



When the orb reaches the exit, the glass block fades away and the orb rises with sparkling visual effects.



\---



\## 🗺️ Available Levels



| Level | Name | Blocks | Optimal Moves | Move Limit |

|---|---|---:|---:|---:|

| 1 | Garden Gate | 7 | 9 | 17 |

| 2 | Crystal Maze | 13 | 18 | 31 |

| 3 | Midnight Vault | 10 | 19 | 32 |



\*\*Optimal moves\*\* represent the minimum number of moves found by the puzzle solver. The move limit gives players additional room to explore alternative solutions.



\---



\## 🎮 Game Controls



| Control | Function |

|---|---|

| Drag | Move blocks along their grooves |

| Undo | Reverse the previous move |

| Hint 💡 | Display the best next move |

| Restart | Reset the current level |

| Pause ⏸️ | Pause gameplay |

| Level Selector | Switch between puzzles |



\---



\## 📈 Scoring System



The game uses the following scoring formula:



\*\*Score = (200 × Level) + (40 × Spare Moves) − (60 × Hints Used)\*\*



\- Higher levels provide a larger base score.

\- Spare moves contribute bonus points.

\- Using hints reduces the score.

\- Stars provide an additional measure of performance.



The exact scoring and star-awarding rules depend on the game's implementation.



\---



\## ⚙️ Installation and Setup



\### Prerequisites

\- Python installed on your system

\- A modern web browser

\- Git (optional, for cloning the repository)



\### Run Locally



\*\*1. Clone the repository\*\*



```bash

git clone https://github.com/bhanusri-manukonda/ORB-ESCAPE---3D-Game-.git

```



\*\*2. Navigate to the project folder\*\*



```bash

cd orb-escape-3d

```



If the game files are inside a nested `orb-escape` directory, navigate into that directory.



\*\*3. Start the server\*\*



Windows:



```powershell

python server.py

```



macOS/Linux:



```bash

python3 server.py

```



\*\*4. Open the game\*\*



Visit:



```text

http://localhost:8000

```



Follow any additional setup instructions if the project requires dependencies.



\---



\## 🧪 Testing and Validation



The Python-side verification performed for this project includes:



\- Checking puzzle solvability

\- Verifying minimum-move solutions

\- Testing hint generation

\- Running solver verification



\*\*Current testing status:\*\* The Python-side checks have been performed. Browser gameplay, 3D rendering, and drag interactions still need to be tested.



\---



\## 💡 Challenges Addressed



\- Representing sliding-block puzzles in a form suitable for algorithmic search

\- Finding optimal solutions for different puzzle layouts

\- Connecting server-side hints to interactive gameplay

\- Balancing move limits with puzzle difficulty

\- Combining game mechanics, scoring, and visual feedback in one application



\---



\## 🔮 Future Improvements



\- Add more challenging puzzle levels

\- Improve mouse and touch-based dragging

\- Add responsive layouts for mobile devices

\- Expand the leaderboard

\- Add additional puzzle-generation algorithms

\- Introduce difficulty-based level recommendations



\---



\## 👩‍💻 Developer



\*\*Bhanusri Manukonda\*\*



Computer Science and Engineering | Aspiring Software Developer



\### Core Skills



Python • JavaScript • HTML • CSS • Data Structures \& Algorithms • Problem-Solving • Git • GitHub



\---



\## ⭐ Support



If you find this project interesting, consider starring the repository!



\*\*ORB ESCAPE — Think strategically. Slide precisely. Escape successfully.\*\*

