import React, { useState } from "react";
import "./Question.css";

function Question({ questionData, onAnswerSelected, currentQuestion, totalQuestions }) {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAnswerSelected(selectedOption === questionData.correctAnswer);
  };

  return (
    <div className="question-container">
      <h2 className="question-title">Question {currentQuestion + 1} of {totalQuestions}</h2>
      <p className="question-text">{questionData.question}</p>
      <form onSubmit={handleSubmit}>
        {questionData.options.map((option, index) => (
          <div key={index} className="option-container">
            <label className="option-label">
              <input
                type="radio"
                value={option}
                checked={selectedOption === option}
                onChange={handleOptionChange}
                required
                className="option-input"
              />
              {option}
            </label>
          </div>
        ))}
        <button type="submit" className="next-button">Next</button>
      </form>
    </div>
  );
}

export default Question;
