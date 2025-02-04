// src/components/QuestionBank.js
import React from 'react';

const questionBank = {
  "IT": [
    { question: "What is a data structure?", answer: "A data structure is a way of organizing data efficiently." },
    { question: "Explain polymorphism.", answer: "Polymorphism allows objects to be treated as instances of their parent class." }
  ],
  "HR": [
    { question: "What are your strengths?", answer: "I am a fast learner, adaptable, and team-oriented." },
    { question: "Why should we hire you?", answer: "I have the skills and experience required for the position." }
  ]
};

const QuestionBank = ({ domain }) => {
  return (
    <div>
      <h2>{domain} Interview Questions</h2>
      {questionBank[domain].map((q, idx) => (
        <div key={idx}>
          <p><strong>Q: </strong>{q.question}</p>
          <p><strong>A: </strong>{q.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default QuestionBank;
