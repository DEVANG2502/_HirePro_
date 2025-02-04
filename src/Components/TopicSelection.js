import React from 'react';
import { Link } from 'react-router-dom';

const topics = ["SQL", "DBMS", "OOPs", "Data Structures", "Networking"]; // Add your topics here

const TopicSelection = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Select a Topic:</h2>
      <ul className="list-disc list-inside">
        {topics.map(topic => (
          <li key={topic} className="my-2">
            <Link to={`/test/${topic}`} className="text-blue-500 hover:underline">
              {topic}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopicSelection;
