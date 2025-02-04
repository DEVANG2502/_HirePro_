// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/login'; // Ensure correct casing
import Dashboard from './Components/Dashboard';
import MCQTest from './Components/MCQTest';
import JobPost from './Components/JobPost';
import Interviews from './Components/Interviews';
import Sidebar from './Components/Sidebar';
import JobPostMain from './Components/JobPostMain';
import TopicSelection from './Components/TopicSelection'; // New component for topic selection

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    console.log('Login Successful');
  };

  return (
    <Router>
      <div className="flex">
        {isLoggedIn ? (
          <>
            <Sidebar />
            <div className="flex-grow p-4">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/mcq-test" element={<TopicSelection />} /> {/* Navigate to topic selection */}
                <Route path="/jobs" element={<JobPostMain />} />
                <Route path="/interviews" element={<Interviews />} />
                <Route path="/test/:topic" element={<MCQTest />} /> {/* Route for MCQ test */}
              </Routes>
            </div>
          </>
        ) : (
          <Login onLogin={handleLogin} />
        )}
      </div>
    </Router>
  );
};

export default App;
