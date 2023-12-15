// App.js
import React from 'react';
import Quiz from './components/Quiz';
import './index.css'

const questions = [
  {
    question: 'What is the correct way to export the  timesTwo  function as a module so that Jest can use it in testing files??',
    options: ['export module (timesTwo)', 'module(expor(timesTwo))', 'document.module.export = timesTwo','module.exports=timesTwo'],
    correctAnswer: 'module.exports=timesTwo',

    
  },
  {
    question: 'Testing is a way to verify the expectations you have regarding the behavior of your code.?',
    options: ['true', 'false'],
    correctAnswer: 'true',

    
  },
  {
    question: 'Node.js can be used to build multiple types of applications?',
    options: ['Web application backends', 'front end application', 'all of the above'],
    correctAnswer: 'Web application backends',

    
  },
  {
    question: 'Which of the following is the slowest and most expensive form of testing?',
    options: ['unit testing', 'end-to-end testing(e2e)', 'integrated testing'],
    correctAnswer: 'end-to-end testing(e2e)',

    
  },
  {
    question: 'Mocking allows you to separate the code that you are testing from its related dependencies.?',
    options: ['true', 'false'],
    correctAnswer: 'true',

    
  },
  {
    question: 'Who are you Mr. Nicholas Promise Akura?',
    options: ['I am a frontend developer student seeking to get more knowledge', 'i am a songwrite and i write songs as applications', 'i am pilot'],
    correctAnswer: 'I am a frontend developer student seeking to get more knowledge',

    
  },
];

const App = () => {
  return (
    <div>
      <h1>My Quiz Application</h1>
      <Quiz questions={questions} />
    </div>
  );
};

export default App;

