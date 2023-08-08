import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Quiz.css';

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await axios.get(
        'https://opentdb.com/api.php?amount=10&difficulty=easy&type=boolean'
      );
      setQuestions(response.data.results);
      setUserAnswers({});
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  const handleAnswerChange = (questionIndex, answer) => {
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionIndex]: answer,
    }));
  };

  const handleSubmitQuiz = () => {
    let totalScore = 0;
    const formattedUserAnswers = questions.map((question, index) => ({
      question: question.question,
      answer: userAnswers[index],
      correct_answer: question.correct_answer,
    }));
  
    for (let i = 0; i < questions.length; i++) {
      if (userAnswers[i] === questions[i].correct_answer) {
        totalScore++;
      }
    }
  
    navigate('/results', { state: { userAnswers: formattedUserAnswers, totalScore } });
  };
  
  return (
    <div className="quiz-container"> 
      <h2 className='header'>Simple Quiz Application</h2>
      <form>
        {questions.map((question, index) => (
          <div className="question" key={index}> 
            <p>{question.question}</p>
            <label className="answer-label">
              <input
                type="radio"
                name={`answer_${index}`}
                value="True"
                checked={userAnswers[index] === 'True'}
                onChange={() => handleAnswerChange(index, 'True')}
              />
              True
            </label>
            <label className="answer-label">
              <input
                type="radio"
                name={`answer_${index}`}
                value="False"
                checked={userAnswers[index] === 'False'}
                onChange={() => handleAnswerChange(index, 'False')}
              />
              False
            </label>
          </div>
        ))}
      </form>
      <button className='button' onClick={handleSubmitQuiz}>Submit</button>
    </div>
  );
};



export default Quiz;
