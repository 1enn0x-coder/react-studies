export default function PlayerScreen({ dice, player, handleclick, isDisabled }) {
  const diceEmojis = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
  return (
    <div>
      <div>
        <h3>Player {player}</h3>
        <div style={{ fontSize: "60px" }}>{diceEmojis[dice - 1]}</div>
        <p>{dice}</p>
      </div>

      <button
        style={{
          margin: "5px",
          padding: "10px 20px",
          cursor: "pointer",
          borderRadius: "8px",
        }}
        onClick={handleclick}
        disabled={isDisabled}      >
        Roll Dice
      </button>
    </div>
  );
}
