import React, { useState } from "react";
import Question from "./Question";
import questionsData from "./questionsData";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerSelected = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questionsData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="App">
      {showScore ? (
        <div>
          <h1>Your Score: {score} out of {questionsData.length}</h1>
        </div>
      ) : (
        <Question
          questionData={questionsData[currentQuestion]}
          onAnswerSelected={handleAnswerSelected}
          currentQuestion={currentQuestion}
          totalQuestions={questionsData.length}
        />
      )}
    </div>
  );
}

export default App;
