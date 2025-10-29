import { useState } from "react";
import PlayerScreen from "./components/PlayerScreen";
import GameTitle from "./components/GameTitle";

export default function App() {
  const [player1, setPlayer1] = useState(1);
  const [player2, setPlayer2] = useState(2);
  const [currentPlayer, setCurrentPlayer] = useState(1);

  const rollDice = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    if (currentPlayer === 1) {
      setPlayer1(randomNumber);
      setCurrentPlayer(2);
    } else {
      setPlayer2(randomNumber);
      setCurrentPlayer(1);
    }
  };

  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px",
        margin: 0,
      }}
    >
      <GameTitle player={2}></GameTitle>
      <PlayerScreen player={1} dice={player1} handleclick={rollDice} isDisabled={currentPlayer === 2} />
      <PlayerScreen player={2} dice={player2} handleclick={rollDice} isDisabled={currentPlayer === 1} />
    </div>
  );
}
