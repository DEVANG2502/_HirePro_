// LandingPage.jsx
import React from 'react';

const LandingPage = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Header */}
      <header className="w-full flex justify-between items-center px-8 py-6 bg-gray-50 shadow-sm">
        <div className="text-3xl pt-10 font-extrabold text-gray-800"></div>
        <nav className="space-x-6 text-gray-600">
          <a href="#" className="hover:underline"></a>
          <a href="#" className="hover:underline"></a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex flex-col lg:flex-row items-center justify-center flex-1 px-8 lg:px-16 py-12 lg:py-24">
        {/* Left Text Section */}
        <div className="w-full lg:w-1/2 space-y-6 lg:space-y-10 text-left lg:mr-12">
          <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
        Join HirePro Today!
          </h1>
          <p className="text-gray-500 text-lg lg:text-xl max-w-lg">
Whether you're a fresher or an experienced professional, HirePro is your one-stop solution for interview preparation and job success. Start your journey toward landing your dream job now!          </p>
          <a
            href="#"
            className="inline-block bg-yellow-500 text-white font-semibold text-lg px-8 py-4 rounded-full shadow-lg hover:bg-yellow-600 transition-all"
          >
            CREATE YOUR ACCOUNT
          </a>
        </div>

        {/* Right Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center mt-12 lg:mt-0 relative">
          <img
            src="https://fielda.com/wp-content/uploads/2021/09/thank-you.gif"  // Replace with your image URL
            alt="Cinema app"
            className="w-full max-w-md lg:max-w-lg"
          />
          <div className="absolute inset-0 flex justify-center items-center">
            <button className="bg-white p-6 rounded-full shadow-lg hover:shadow-xl transition">
              <svg
                className="w-12 h-12 text-purple-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M10 17l6-5-6-5v10z" />
              </svg>
            </button>
          </div>
        </div>
      </main>

      {/* Footer (Optional) */}
      {/* <footer className="bg-gray-50 py-8 text-center">
        <p className="text-gray-500">© 2024 NUTTI, All rights reserved.</p>
      </footer> */}
    </div>
  );
};

export default LandingPage;
