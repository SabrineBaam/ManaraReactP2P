import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Results.css';

const Results = () => {
  const location = useLocation();
  const { userAnswers, totalScore } = location.state || {};
  const scoreClassName = totalScore <= 5 ? 'red' : 'green';
  useEffect(() => {
    
  }, [userAnswers, totalScore]);

  if (!userAnswers || totalScore === undefined) {
    return <div>Loading...</div>;
  }
  
  return (
    <div className="results-container">
      <h2 className="results-heading">Results</h2>
      <p className={`results-score ${scoreClassName}`}>
        Total Score: {totalScore}
      </p>
      <ul className="results-list">
        {userAnswers.map((question, index) => (
          <li
            className={`results-item ${question.answer === question.correct_answer ? 'correct' : 'incorrect'}`}
            key={index}
          >
            Question {index + 1}: {question.answer}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Results;
