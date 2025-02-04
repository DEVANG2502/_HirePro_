// src/components/ScheduleInterview.js
import React, { useState } from 'react';

const ScheduleInterview = () => {
  const [selectedDate, setSelectedDate] = useState('');
  
  const handleSchedule = () => {
    alert(`Interview scheduled for ${selectedDate}`);
  };

  return (
    <div>
      <h2>Schedule Your Mock Interview</h2>
      <input
        type="date"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
      />
      <button onClick={handleSchedule}>Schedule</button>
    </div>
  );
};

export default ScheduleInterview;
