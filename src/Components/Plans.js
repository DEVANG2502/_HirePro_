// Plans.jsx
import React from 'react';

const Plans = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* "Leave anytime" Section */}
      <section className="bg-purple-600 text-white py-16 px-8 lg:px-16">
        <div className="max-w-4xl mx-auto flex flex-col lg:flex-row items-center justify-between">
          {/* Text */}
          <div className="lg:w-1/2 space-y-4 lg:space-y-6">
            <h1 className="text-4xl lg:text-5xl font-extrabold">Success is where preparation and opportunity meet..</h1>
            <p className="text-lg lg:text-xl">
At HirePro, we help you prepare for your dream job with AI-based mock interviews, expert-crafted MCQs, and a seamless job application portal. Practice, refine, and apply—all in one place. Let your journey to success begin with us!            </p>
          </div>

          {/* Image */}
          <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0">
            <img
              src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTb8uw0pNRnWSAwyCUHc7wj1Ihlg4wrRChK4HgHyOrlRsJUnLYL"  // Use the image URL directly
              alt="Cage and bird"
              className="w-80 lg:w-96"
            />
          </div>
        </div>
      </section>

      {/* "Choose your plan" Section */}
      <section className="py-16 px-8 lg:px-16">
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-extrabold">Choose your plan</h2>
          <p className="text-gray-500 text-lg lg:text-xl mt-4">
            Lorem ipsum dolor sit amet, sapien etiam, nunc amet dolor ac odio mauris justo. Luctus arcu, urna praesent.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Basic Plan */}
          <div className="border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-4">Basic Plan</h3>
            <p className="text-gray-600 mb-6">An affordable plan for beginners.</p>
            <p className="text-3xl font-extrabold text-gray-800">$9.99/month</p>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>Access to all basic features</li>
              <li>Email support</li>
              <li>Limited job searches</li>
                            <li>Limited job searches</li>

            </ul>
            <button className="mt-6 w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition">
              Select Plan
            </button>
          </div>

          {/* Pro Plan */}
          <div className="border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-4">Pro Plan</h3>
            <p className="text-gray-600 mb-6">For professionals seeking more features.</p>
            <p className="text-3xl font-extrabold text-gray-800">$19.99/month</p>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>All basic features included</li>
              <li>Priority email support</li>
              <li>Unlimited job searches</li>
              <li>Mock interview feedback</li>
            </ul>
            <button className="mt-6 w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition">
              Select Plan
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-4">Enterprise Plan</h3>
            <p className="text-gray-600 mb-6">For companies and team subscriptions.</p>
            <p className="text-3xl font-extrabold text-gray-800">$49.99/month</p>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>All pro features included</li>
              <li>Team management tools</li>
              <li>Dedicated support</li>
              <li>Customizable interview templates</li>
            </ul>
            <button className="mt-6 w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition">
              Select Plan
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Plans;
