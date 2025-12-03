import { useState } from "react";
import Player from "./components/Players";

export default function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player playername={"Player 1"} playersymbol={"X"}></Player>

          <Player playername={"Player 2"} playersymbol={"O"}></Player>
        </ol>
      </div>
    </main>
  );
}
