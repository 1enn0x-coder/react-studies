import { useState } from "react";
import { QUIZ_DATA } from "../quiz-questions.js";

export default function QuizPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestionData = QUIZ_DATA[currentQuestionIndex];
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  let answerChosen = false;
  return (
    

  <>
    {quizCompleted ? (
      <h1>
        Your quiz is completed! You got {correctAnswers} out of {QUIZ_DATA.length} correct.
      </h1>
    ) : (
      <>
        <h1>{currentQuestionData.question}</h1>

        <div>
          {currentQuestionData.answers.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                index === currentQuestionData.correct && !answerChosen
                  ? (
                      answerChosen = true,
                      document.body.style.backgroundColor = "green",
                      setCorrectAnswers(prev => prev + 1)
                    )
                  : (
                      answerChosen = true,
                      document.body.style.backgroundColor = "red"
                    );
              }}
            >
              {item}
            </button>
          ))}
        </div>

        <button
          onClick={() => {
            answerChosen && currentQuestionIndex < QUIZ_DATA.length - 1
              ? (
                  setCurrentQuestionIndex(prev => prev + 1),
                  answerChosen = false,
                  document.body.style.backgroundColor = "white"
                )
              : currentQuestionIndex >= QUIZ_DATA.length - 1
              ? (
                  document.body.style.backgroundColor = "blue",
                  setQuizCompleted(true)
                )
              : alert("Please select an answer first!");
          }}
        >
          Next Question
        </button>
      </>
    )}
  </>
);
        
}
