// src/components/MockInterview.js
import React, { useState } from 'react';

const MockInterview = () => {
  const [question, setQuestion] = useState("What is polymorphism?");
  const [response, setResponse] = useState("");
  const [feedback, setFeedback] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [interviewStarted, setInterviewStarted] = useState(false);

  // Function to start speech recognition
  const startListening = () => {
    setIsListening(true);
    const recognition = new window.webkitSpeechRecognition();
    recognition.interimResults = true;

    recognition.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');
      setResponse(transcript);
    };

    recognition.onend = () => {
      setIsListening(false);
      analyzeResponse(response);
    };

    recognition.start();
  };

  // Function to analyze response using GPT API (pseudo-code)
  const analyzeResponse = async (userResponse) => {
    const prompt = `User was asked: "${question}". The user's response is: "${userResponse}". Analyze the correctness.`;
    
    // Make API call to OpenAI (you need your own API key)
    const gptResponse = await fetch('/api/analyze', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt }),
    }).then(res => res.json());

    setFeedback(gptResponse.feedback);
  };

  return (
    <div>
      <h2>Mock Interview</h2>
      {interviewStarted ? (
        <>
          <p><strong>Question:</strong> {question}</p>
          <button onClick={startListening}>
            {isListening ? "Listening..." : "Start Answering"}
          </button>
          <textarea
            value={response}
            onChange={(e) => setResponse(e.target.value)}
            placeholder="Your response will appear here..."
          />
          {feedback && <p><strong>AI Feedback:</strong> {feedback}</p>}
        </>
      ) : (
        <button onClick={() => setInterviewStarted(true)}>Start Interview</button>
      )}
    </div>
  );
};

export default MockInterview;
