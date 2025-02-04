// JobPost.js
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const JobPost = () => {
  const data = {
    labels: ['Mock Interviews', 'MCQ Test', 'Job Openings'],
    datasets: [
      {
        label: 'Opportunities',
        data: [30, 50, 20], // Mock data for chart
        backgroundColor: ['#F87171', '#60A5FA', '#FBBF24'],
        hoverBackgroundColor: ['#F87171', '#60A5FA', '#FBBF24'],
      },
    ],
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-gray-700 text-center">Job Opportunities Dashboard</h2>
        <div className="w-full h-80">
          <Pie data={data} />
        </div>
        <div className="mt-6 text-center">
          <img src={"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQSW06wDwQk4i5sQnugqc1ODLK_PBRHpr-trXuKfXH3kkWxKwby"} alt="Job Opportunities" className="w-1/2 mx-auto mb-4 rounded-lg shadow-md" />
          <p className="text-gray-600">Explore various job opportunities tailored for you.</p>
        </div>
      </div>
    </div>
  );
};

export default JobPost;
