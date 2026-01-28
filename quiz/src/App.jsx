import { useState } from "react";
import "./App.css";
import DifficultyButton from "./components/DifficultyButton.jsx";
export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div id="root">
      <div className="quiz-page">
        <div className="home-card">
          <h1 className="home-title">Welcome to the Quiz!</h1>
          <p className="home-subtitle">
            Select your difficulty level to start:
          </p>
          <p className="home-prompt">Choose a difficulty:</p>
          <div className="home-options">
            <DifficultyButton
              difficultyname="easy"
              onClick={() => alert("Easy selected")}
            />
            <DifficultyButton
              difficultyname="medium"
              onClick={() => alert("Medium selected")}
            />
            <DifficultyButton
              difficultyname="hard"
              onClick={() => alert("Hard selected")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
