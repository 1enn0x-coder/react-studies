import { useState } from "react";

export default function Player({ playername, playersymbol }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing(true);
  }

  return (
    <li>
      <span className="player">
        {isEditing === false ? (
          <span className="player-name">{playername}</span>
        ) : (
          <input type="text" />
        )}
        <span className="player-symbol">{playersymbol}</span>
        <button onClick={handleEditClick}>Edit</button>
      </span>
    </li>
  );
}
