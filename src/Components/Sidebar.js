import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <nav className="w-full bg-gray-800 p-4 fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">HirePro</div>
        <div className="space-x-4">
          <Link
            to="/"
            className="py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 text-gray-300"
          >
            Home
          </Link>
          <Link
            to="/mcq-test"
            className="py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 text-gray-300"
          >
            MCQ Test
          </Link>
          <Link
            to="/jobs"
            className="py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 text-gray-300"
          >
            Job Postings
          </Link>
          <Link
            to="/interviews"
            className="py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 text-gray-300"
          >
            Interviews
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
