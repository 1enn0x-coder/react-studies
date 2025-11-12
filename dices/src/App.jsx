import { useState } from "react";
import Player from "./components/Player";
import WinnerBanner from "./components/WinnerBanner";

function App() {
  const [player1, setPlayer1] = useState(null);
  const [player2, setPlayer2] = useState(null);
  const [round, setRound] = useState(3);
  const gameOverCount = 3;

  const isGameOver = round > gameOverCount;

  const currentPlayer = () => {
    if (player1 !== null) {
      return 2;
    }

    return 1;
  };

  const winner = () => {
    if (player1 === null || player2 === null) {
      return null;
    }

    if (player1 > player2) {
      return "Player 1";
    } else if (player2 > player1) {
      return "Player 2";
    } else {
      return "tie";
    }
  };

  const rollDice = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;

    if (currentPlayer() === 1) {
      setPlayer1(randomNumber);
    } else {
      setPlayer2(randomNumber);
    }
  };

  const playnNextRound = () => {
    setPlayer1(null);
    setPlayer2(null);
    setRound(round + 1);
  };

  const playAgain = () => {
    setPlayer1(null);
    setPlayer2(null);
    setRound(1);
  };

  if (isGameOver) {
    return (
      <div
        style={{
          textAlign: "center",
          padding: "40px 0",
          minHeight: "100vh",
          background: "linear-gradient(135deg, #e3f2fd 0%, #c8e6c9 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "#fff",
            borderRadius: "24px",
            boxShadow: "0 10px 40px rgba(0,0,0,0.18)",
            padding: "48px 60px",
            maxWidth: "460px",
            width: "100%",
            marginBottom: "30px",
          }}
        >
          <h1
            style={{
              fontSize: "2.2rem",
              margin: "0 0 20px 0",
              fontWeight: "bold",
              color: "#333",
              letterSpacing: "1px",
              textShadow: "0 2px 10px rgba(76,175,80,0.08)",
            }}
          >
            player 1 wins the game
          </h1>
          <button
            onClick={playAgain}
            style={{
              marginTop: "18px",
              padding: "16px 40px",
              fontSize: "20px",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "12px",
              cursor: "pointer",
              fontWeight: "bold",
              boxShadow: "0 4px 18px rgba(33, 150, 243, 0.13)",
              letterSpacing: "2px",
            }}
          >
            🎲 Play Again
          </button>
        </div>
      </div>
    );
  }

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
      <h4>
        <span style={{ fontWeight: "bold", fontSize: "20px" }}>
          {" "}
          Player {currentPlayer()}{" "}
        </span>
        is rolling the dice...
      </h4>

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
          isDisabled={currentPlayer() === 2}
        />

        <div style={{ fontSize: "40px" }}>VS</div>

        <Player
          title={"Player 2"}
          index={player2}
          handleClick={rollDice}
          isDisabled={currentPlayer() === 1 || player2 !== null}
        />
      </div>
      {winner() && (
        <WinnerBanner
          winner={winner()}
          onPlayAgain={playnNextRound}
          rounds={round}
        />
      )}
    </div>
  );
}

export default App;
