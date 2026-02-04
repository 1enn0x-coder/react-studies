import { useState } from "react";
import QuizPage from "./components/QuizPage";

export default function App() {
  const [difficulty, setDifficulty] = useState(null);

  if (difficulty !== null) {
    return <QuizPage />;
  }

  return (
    <>
      <h1>Welcome to the Game</h1>
      <button
        onClick={() => {
          setDifficulty("easy");
          console.log(difficulty);
        }}
      >
        Easy
      </button>
      <button
        onClick={() => {
          setDifficulty("medium");
          console.log(difficulty);
        }}
      >
        Medium
      </button>
      <button
        onClick={() => {
          setDifficulty("hard");
          console.log(difficulty);
        }}
      >
        Hard
      </button>
    </>
  );
}

// ფუნქიონალი გვინდა რომ ავირჩიოთ დონე {easy, medium, hard}, +
// სანამ დონე არ არის არჩეული მანამდე კითვა არ ჩანს,
// გვაქ ასევე კითხვები: კითხვა გამოიტანოს, და ასევე გამოიტანოს 4 პასუხი რომელიც ექნება იუზერს ასარჩევად დანუ რათქმუნდა პასუხის გაცემის შემდეგ გდავიდთ შემდეგ კითხვაზე.
