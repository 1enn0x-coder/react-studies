import { useState } from "react";
import Player from "./components/Player";

export default function App() {
  const [player1, setPlayer1] = useState(null);
  const [player2, setPlayer2] = useState(null);
  const [round, setRound] = useState(null);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [roundResult, setRoundResult] = useState(null); 
  const [rounds, setRounds] = useState([]);

  const rollDice = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;

    if (currentPlayer === 1) {
      setPlayer1(randomNumber);
      setCurrentPlayer(2);
    } else {
      const temporaryplayer2 = randomNumber;
      setPlayer2(temporaryplayer2);
      setCurrentPlayer(1);
      
      
      const result = setRoundWinner( temporaryplayer2);
      setRoundResult(result);



      const newRounds = [...rounds];
      newRounds.push({ round: round, result: result });
      setRounds(newRounds);
      setRound(round + 1);
    }
  };



  const setRoundWinner = (temporaryplayer2) => {
    if (player1 > temporaryplayer2) {
      return "Player 1 wins this round!";
    } else if (temporaryplayer2 > player1) {
      return "Player 2 wins this round!";
    } else {
      return "It's a tie!";
    }
  };

  const AddRoundWinner = (round, result) => {
    <tr>
        <td>{round}</td>
        <td>{result}</td>
    </tr>
  }

  const resetGame = () => {
    setPlayer1(null);
    setPlayer2(null);
    setRound(1);
    setCurrentPlayer(1);
    setRoundResult(null);
    setRounds([]);
   }

  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px",
        margin: 0,
      }}
    >
      <h1>2-Player Dice Game</h1>

      <div>
        <Player
          title={"Player 1"}
          index={player1}
          handleClick={rollDice}
          isDisabled={currentPlayer === 2}
        />

        <div>VS</div>

        <Player
          title={"Player 2"}
          index={player2}
          handleClick={rollDice}
          isDisabled={currentPlayer === 1}
        />
      </div>

      
      <h2
        style={{
          marginTop: "20px",
          fontSize: "24px",
          fontWeight: "bold",
          color: "#333",
        }}
      >
        {roundResult}
      </h2>

      <button const style = {{
      margin: "10px",
      padding: "15px 30px",
      fontSize: "20px",
      cursor: "pointer",
      borderRadius: "10px",
      backgroundColor: "#4CAF50",
      color: "white",
      border: "none",
     }}  onClick={resetGame}     >reset Game</button>






<table
        style={{
          width: "100%",
          marginTop: "20px",
          border: "1px solid black",
          borderCollapse: "collapse",
        }}
      >

        <thead>
          <tr>
            <th>Round</th>
            <th>Winner</th>
          </tr>
        </thead>

        <tbody>
  {rounds.map((item, index) => (
    <tr key={index}>
      <td>{item.round}</td>
      <td>{item.result}</td>
    </tr>
  ))}
</tbody>
      </table>


    </div>
  );
}

