export default function GameOver({ WinnerSymbol, draw, rematch }) {
  return (
    <div id="game-over">
      <h2>Game Over</h2>
      <p>{draw ? "It's a draw!" : `${WinnerSymbol} won!`}</p>
      <p>
        <button onClick={rematch}>Rematch!</button>
      </p>
    </div>
  );
}
