import React, { useState, useEffect } from 'react';

const MCQTest = () => {
  const [selectedTopic, setSelectedTopic] = useState('');
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [quizStarted, setQuizStarted] = useState(false);
  const [topicScores, setTopicScores] = useState({}); // Track scores for each topic

  // Function to fetch questions.json dynamically
  const fetchQuestions = async (topic) => {
    try {
      const response = await fetch('/questions.json');
      const data = await response.json();

      // Check if the topic exists in the data
      if (data[topic] && data[topic].questions) {
        // Randomly select 5 questions
        const selectedQuestions = data[topic].questions
          .sort(() => Math.random() - 0.5)
          .slice(0, 5);

        setQuestions(selectedQuestions);
        setCurrentQuestionIndex(0);
        setScore(0);
        setQuizCompleted(false);
        setErrorMessage(''); // Reset any previous errors
        setQuizStarted(true); // Set quiz started to true
      } else {
        setErrorMessage('Topic not found or no questions available for this topic.');
        setQuestions([]);
      }
    } catch (error) {
      console.error('Error fetching questions:', error);
      setErrorMessage('Error fetching questions. Please try again later.');
    }
  };

  const handleTopicSelection = (topic) => {
    setSelectedTopic(topic);
    fetchQuestions(topic); // Fetch the questions based on the selected topic
  };

  const handleAnswer = (answer) => {
    if (answer === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      // Update the score for the selected topic
      setTopicScores((prevScores) => ({
        ...prevScores,
        [selectedTopic]: (prevScores[selectedTopic] || 0) + score + 1, // Increment the score
      }));
      setQuizCompleted(true);
    }
  };

  const startNewQuiz = () => {
    setSelectedTopic('');
    setQuizStarted(false);
    setQuestions([]);
    setCurrentQuestionIndex(0);
    setScore(0);
    setQuizCompleted(false);
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 pb-36 pt-24">
      {!quizStarted ? (
        <div className="w-full max-w-md bg-white shadow-md rounded-lg p-4">
          <h2 className="text-2xl font-bold mb-4">Select a Topic</h2>
          {['SQL', 'DBMS', 'OOPs', 'Data Structures', 'Networking'].map((topic) => (
            <button
              key={topic}
              onClick={() => handleTopicSelection(topic)}
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2"
            >
              {topic}
            </button>
          ))}
        </div>
      ) : quizCompleted ? (
        <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 w-full max-w-md rounded-lg">
          <p className="font-bold text-xl">Your Score: {score} / {questions.length}</p>
          <p className="mt-2">"Success is not the key to happiness. Happiness is the key to success." - Albert Schweitzer</p>
          <button
            onClick={startNewQuiz}
            className="mt-4 w-full bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            Start New Quiz
          </button>
        </div>
      ) : (
        <div className="w-full max-w-md bg-white shadow-md rounded-lg p-4">
          {errorMessage ? (
            <div className="text-red-500">{errorMessage}</div>
          ) : (
            <>
              <h3 className="text-xl font-bold mb-4">{questions[currentQuestionIndex]?.question}</h3>
              {questions[currentQuestionIndex]?.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2"
                >
                  {option}
                </button>
              ))}
            </>
          )}
        </div>
      )}
      {/* Display Scores for each topic */}
      <div className="w-full max-w-md mt-4 bg-gray-100 shadow-md rounded-lg p-4">
        <h2 className="text-xl font-bold mb-4">Your Scores by Topic</h2>
        {['SQL', 'DBMS', 'OOPs', 'Data Structures', 'Networking'].map((topic) => (
          <div key={topic} className="flex justify-between mb-2">
            <span>{topic}:</span>
            <span>{topicScores[topic] || 0}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MCQTest;
