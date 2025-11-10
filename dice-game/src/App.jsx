import { useState } from "react";
import Player from "./components/Player";
import WinnerBanner from "./components/WinnerBanner";

function App() {
  const [player1, setPlayer1] = useState(null);
  const [player2, setPlayer2] = useState(null);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [winner, setWinner] = useState(null);
  const [round , setRound] = useState(1)

  const rollDice = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;

    if (currentPlayer === 1) {
      setPlayer1(randomNumber);
      setCurrentPlayer(2);
    } else {
      setPlayer2(randomNumber);
      setCurrentPlayer(1);
      determineWinner(randomNumber);
      setRound(round + 1)
    }
  };

  const determineWinner = (player2Rolled) => {
    if (player1 > player2Rolled) {
      setWinner("Player 1");
    } else if (player2Rolled > player1) {
      setWinner("Player 2");
    } else {
      setWinner("tie");
    }
  };

  const playAgain = () => {
    setPlayer1(null);
    setPlayer2(null);
    setCurrentPlayer(1);
    setWinner(null);
    setRound(0);
  };

  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px",
        margin: 0,
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>2-Player Dice Game</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          alignItems: "center",
          marginTop: "40px",
        }}
      >
        <Player
          title={"Player 1"}
          index={player1}
          handleClick={rollDice}
          isDisabled={currentPlayer === 2}
        />

        <div style={{ fontSize: "40px" }}>VS</div>

        <Player
          title={"Player 2"}
          index={player2}
          handleClick={rollDice}
          isDisabled={currentPlayer === 1}
        />
      </div>
      <WinnerBanner winner={winner} onPlayAgain={playAgain} rounds={round}/>
    </div>
  );
}

export default App;
