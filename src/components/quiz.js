import React, { useState } from 'react';
import Question from './Question';

const Quiz = ({ questions }) => {
  const [userAnswers, setUserAnswers] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleSelectAnswer = (answer) => {
    setUserAnswers([...userAnswers, { question: currentQuestionIndex, answer }]);
    // Move to the next question
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const calculateScore = () => {
    // Calculate the score based on correct answers
    const score = userAnswers.reduce((acc, userAnswer) => {
      const { question, answer } = userAnswer;
      if (questions[question].correctAnswer === answer) {
        return acc + 1;
      }
      return acc;
    }, 0);

    return score;
  };

  const score = calculateScore();

  return (
    <div>
      {currentQuestionIndex < questions.length ? (
        <Question
          question={questions[currentQuestionIndex].question}
          options={questions[currentQuestionIndex].options}
          onSelectAnswer={handleSelectAnswer}
        />
      ) : (
        <div>
          <h2>Quiz Completed!</h2>
          <p>Your Score: {score} / {questions.length}</p>
        </div>
      )}
    </div>
  );
};

export default Quiz;