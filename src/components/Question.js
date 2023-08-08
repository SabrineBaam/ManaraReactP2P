import React from 'react';

const Question = ({ questionId, question, onChange }) => {
  const handleAnswerChange = (event) => {
    const answer = event.target.value;
    onChange(questionId, answer);
  };

  return (
    <div>
      <h3>Question {questionId + 1}:</h3>
      <p dangerouslySetInnerHTML={{ __html: question.question }} />
      <label>
        <input
          type="radio"
          name={`question-${questionId}`}
          value="True"
          onChange={handleAnswerChange}
        />
        True
      </label>
      <label>
        <input
          type="radio"
          name={`question-${questionId}`}
          value="False"
          onChange={handleAnswerChange}
        />
        False
      </label>
    </div>
  );
};

export default Question;
