import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

function App() {
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [activePlayer, setactivePlayer] = useState(1);
  function handleCurrentPlayerChange() {
    setCurrentPlayer((prevValue) => (prevValue === "X" ? "O" : "X"));
    setactivePlayer((prevValue) => (prevValue === 1 ? 2 : 1));
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            currentPlayer={currentPlayer}
            initialName="Player 1"
            symbol="X"
            active={activePlayer === 1}
          />
          <Player
            currentPlayer={currentPlayer}
            initialName="Player 2"
            symbol="O"
            active={activePlayer === 2}
          />
        </ol>
        <GameBoard
          currentPlayer={currentPlayer}
          onSquareSeelct={handleCurrentPlayerChange}
        />
      </div>
    </main>
  );
}

export default App;
