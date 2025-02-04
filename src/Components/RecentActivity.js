import React, { useState } from 'react';

const JobPostMain = () => {
  // State to track which card is expanded and the current page
  const [expandedCard, setExpandedCard] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  // Job posts data (10 posts for demonstration)
  const jobPosts = [
    { title: 'React Developer - Job Post', date: '[Date]', company: 'XYZ Corp', location: 'Remote', status: 'Application Received' },
    { title: 'React Assessment - MCQ Test', date: '[Date]', score: '[Score]', duration: '60 minutes', questions: '30', passed: 'Yes' },
    { title: 'Flutter Developer - Job Post', date: '[Date]', company: 'ABC Solutions', location: 'On-site', status: 'In Review' },
    { title: 'AI-based Interview', date: '[Date]', remarks: '[Remarks]', interviewer: 'Automated AI', duration: '45 minutes', nextSteps: 'Pending Review' },
    { title: 'Node.js Backend Developer', date: '[Date]', company: 'DEF Inc', location: 'Hybrid', status: 'Awaiting Response' },
    { title: 'Vue.js Frontend Developer', date: '[Date]', company: 'GHI LLC', location: 'On-site', status: 'Application Received' },
    { title: 'Full-Stack Developer - Job Post', date: '[Date]', company: 'JKL Ltd', location: 'Remote', status: 'In Review' },
    { title: 'Java Developer', date: '[Date]', company: 'MNO Corp', location: 'Remote', status: 'Shortlisted' },
    { title: 'Python Developer', date: '[Date]', company: 'PQR LLC', location: 'On-site', status: 'Interview Scheduled' },
    { title: 'Data Scientist - Job Post', date: '[Date]', company: 'STU Tech', location: 'Remote', status: 'In Review' },
  ];

  // Pagination logic
  const postsPerPage = 4;
  const totalPages = Math.ceil(jobPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = jobPosts.slice(startIndex, startIndex + postsPerPage);

  // Function to toggle card expansion on click
  const toggleCardExpansion = (cardIndex) => {
    setExpandedCard(expandedCard === cardIndex ? null : cardIndex); // Toggle if the same card is clicked
  };

  return (
    <div className="bg-white shadow rounded-lg p-6 mt-6">
      <h2 className="text-3xl font-bold text-blue-600 mb-6">Recent Job Posts</h2>
      <div className="space-y-6">

        {currentPosts.map((post, index) => (
          <div
            key={index}
            className={`bg-gray-100 p-4 rounded-lg shadow transition-transform duration-300 ease-in-out cursor-pointer
              ${expandedCard === index ? 'transform scale-105' : ''}`}
            onClick={() => toggleCardExpansion(index)}
          >
            <h3 className="font-bold text-xl text-indigo-700">{post.title}</h3>
            <p className="text-gray-600">You applied for this position on {post.date}.</p>
            {/* Conditionally render additional details if the card is expanded */}
            {expandedCard === index && (
              <div className="mt-2 text-gray-600">
                {post.company && <p>Company: {post.company}</p>}
                {post.location && <p>Location: {post.location}</p>}
                {post.status && <p>Status: {post.status}</p>}
                {post.score && <p>Score: {post.score}</p>}
                {post.duration && <p>Duration: {post.duration}</p>}
                {post.questions && <p>Questions: {post.questions}</p>}
                {post.passed && <p>Passed: {post.passed}</p>}
                {post.remarks && <p>Remarks: {post.remarks}</p>}
                {post.interviewer && <p>Interviewer: {post.interviewer}</p>}
                {post.nextSteps && <p>Next Steps: {post.nextSteps}</p>}
              </div>
            )}
          </div>
        ))}

      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-8">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-700 transition duration-200"
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <p className="text-lg font-medium text-gray-600">
          Page {currentPage} of {totalPages}
        </p>

        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-700 transition duration-200"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default JobPostMain;
