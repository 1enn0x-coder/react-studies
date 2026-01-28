    <div className="quiz-page">
      <div className="quiz-container">
        <div className="question-section">
          <p className="question-text">What is the capital of France?</p>
        </div>
        <div className="answers-grid">
          {["A", "B", "C", "D"].map((letter) => (
            <button key={letter} className="answer-btn">
              <span className="answer-letter">{letter}</span>
              <span className="answer-text">Paris</span>
            </button>
          ))}
        </div>
      </div>
    </div>