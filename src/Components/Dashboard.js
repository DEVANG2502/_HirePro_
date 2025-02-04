// Dashboard.js
import React from 'react';
import Navbar from './Navbar';
import MCQTest from './MCQTest';
import Sidebar from './Sidebar';
import JobPost from './JobPost';
import Interviews from './Interviews';
import LandingPage from './LandingPage';
import Plans from './Plans';
import RecentActivity from './RecentActivity';
import MockInterview from './MockInterview';
const Dashboard = () => {
  return (
    <div>

 <LandingPage/>
    <div className="flex h-screen overflow-hidden bg-gray-100">
      
      {/* Sidebar */}

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto p-6">
        {/* Navbar */}
        <Navbar className="bg-white shadow-md mb-6 p-4" />

        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Job Post Component */}
          <JobPost className="bg-white rounded-lg p-4 shadow-md" />

          {/* Interviews Component */}
          <Interviews className="bg-white rounded-lg p-4 shadow-md" />

          {/* Recent Activity Component */}
          <RecentActivity className="bg-white rounded-lg p-4 shadow-md" />
        </div>
    
   
       </div>  </div>
      <Plans/>
    </div>
  );
};

export default Dashboard;
