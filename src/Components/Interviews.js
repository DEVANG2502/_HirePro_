// src/components/Interviews.js
import React, { useEffect, useRef, useState } from 'react';

const sampleQuestions = [
  { question: "What is your greatest strength?", remarks: "Focus on a professional strength." },
  { question: "Tell me about a challenge you faced and how you overcame it.", remarks: "Be specific and highlight your skills." },
  { question: "Where do you see yourself in five years?", remarks: "Show ambition and realistic goals." },
  { question: "Why do you want to work here?", remarks: "Research the company beforehand." },
  { question: "Describe a time you worked on a team.", remarks: "Emphasize collaboration." },
  { question: "What is your biggest weakness?", remarks: "Mention a real weakness and how you are working to improve it." },
  { question: "Why should we hire you?", remarks: "Highlight your unique skills and fit for the role." },
  { question: "What is your salary expectation?", remarks: "Research the industry standard." },
  { question: "How do you handle stress and pressure?", remarks: "Provide examples of coping mechanisms." },
  { question: "What do you like to do outside of work?", remarks: "Show your personality." }
];

const getRemarks = (score) => {
  if (score >= 45) return "Excellent";
  if (score >= 40) return "Best";
  if (score >= 30) return "Very Good";
  if (score >= 25) return "Good";
  return "Needs Improvement";
};

const Interviews = () => {
  const videoRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [questions, setQuestions] = useState(sampleQuestions);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const [isRecording, setIsRecording] = useState(false);
  const [remarks, setRemarks] = useState("");
  const [marks, setMarks] = useState([]); // Array to hold marks for each question
  const [finalScore, setFinalScore] = useState(0);
  const [feedbackRemarks, setFeedbackRemarks] = useState("");

  useEffect(() => {
    if (isCameraActive) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
            mediaRecorderRef.current = new MediaRecorder(stream);
            mediaRecorderRef.current.ondataavailable = event => {
              if (event.data.size > 0) {
                setRecordedChunks(prev => prev.concat(event.data));
              }
            };
          }
        })
        .catch(err => console.error("Error accessing camera: ", err));
    }
  }, [isCameraActive]);

  const startInterview = () => {
    setIsCameraActive(true);
    setCurrentQuestionIndex(0);
    setRecordedChunks([]);
    setRemarks(""); 
    setMarks([]); // Reset marks array
    setFinalScore(0); 
    setFeedbackRemarks("");
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      // Generate random mark for the current question
      const randomMark = Math.floor(Math.random() * 51); // Marks between 0 and 50
      setMarks((prevMarks) => [...prevMarks, randomMark]);
      setRemarks(questions[currentQuestionIndex].remarks); 
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      alert("Interview completed!");
      setIsCameraActive(false);
      setIsRecording(false);
      calculateScore();
    }
  };

  const startRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.start();
      setIsRecording(true);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const calculateScore = () => {
    const totalScore = marks.reduce((acc, mark) => acc + mark, 0);
    setFinalScore(totalScore);
    setFeedbackRemarks(getRemarks(totalScore));
    console.log(`Your total score: ${totalScore}/50`); 
  };

  return (
    <div className="bg-gray-50 shadow-md rounded-lg p-6 max-w-3xl mx-auto pt-16">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">AI Interview Panel</h2>
      <div className="bg-blue-100 rounded-lg p-4 text-blue-800 mb-4">
        <p className="text-lg">Interview Status</p>
        <div className="flex justify-between mt-2">
          <p>Active Interviews: 4</p>
          <p>Total Interviews: 5</p>
        </div>
        <div className="flex justify-between mt-2">
          <p>Closed Interviews: 1</p>
        </div>
      </div>
      
      <div className="mt-6 text-center">
        <button
          onClick={startInterview}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded shadow-lg"
        >
          Start AI Interview
        </button>
        
        {isCameraActive && (
          <div className="camera-container mt-6">
            <video ref={videoRef} autoPlay className="w-full h-auto rounded-lg shadow-md mb-4" />
            <div className="question-container bg-white shadow-lg p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">{questions[currentQuestionIndex]?.question}</h3>
              <div className="mt-4 flex justify-center">
                <button
                  onClick={startRecording}
                  disabled={isRecording}
                  className={`bg-green-500 text-white px-4 py-2 rounded shadow-lg ${isRecording ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-700'}`}
                >
                  Start Recording
                </button>
                <button
                  onClick={stopRecording}
                  disabled={!isRecording}
                  className={`bg-red-500 text-white px-4 py-2 rounded shadow-lg ml-4 ${!isRecording ? 'opacity-50 cursor-not-allowed' : 'hover:bg-red-700'}`}
                >
                  Stop Recording
                </button>
              </div>
              <button
                onClick={nextQuestion}
                className="mt-6 bg-gray-600 hover:bg-gray-800 text-white px-4 py-2 rounded shadow-lg"
              >
                Next Question
              </button>
              <p className="mt-4 text-gray-600 italic">Remarks: {remarks || 'N/A'}</p>
              {currentQuestionIndex === questions.length - 1 && (
                <div className="mt-4">
                  <p className="text-lg font-bold">Your Total Score: {finalScore}/500</p>
                  <p className="text-lg font-bold">Remarks: {feedbackRemarks}</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Interviews;
